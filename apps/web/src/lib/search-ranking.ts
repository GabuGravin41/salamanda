export interface SearchField {
  text: string;
  weight: number;
}

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function editDistanceWithin(left: string, right: string, maximum: number): number | null {
  if (Math.abs(left.length - right.length) > maximum) return null;

  let twoRowsBack: number[] | null = null;
  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let row = 1; row <= left.length; row += 1) {
    const current = [row];
    let rowMinimum = row;

    for (let column = 1; column <= right.length; column += 1) {
      const cost = left[row - 1] === right[column - 1] ? 0 : 1;
      const distance = Math.min(
        previous[column] + 1,
        current[column - 1] + 1,
        previous[column - 1] + cost,
      );
      const transpositionDistance =
        row > 1 &&
        column > 1 &&
        left[row - 1] === right[column - 2] &&
        left[row - 2] === right[column - 1]
          ? (twoRowsBack?.[column - 2] ?? Number.POSITIVE_INFINITY) + 1
          : Number.POSITIVE_INFINITY;
      current[column] = Math.min(distance, transpositionDistance);
      rowMinimum = Math.min(rowMinimum, current[column]);
    }

    if (rowMinimum > maximum) return null;
    twoRowsBack = previous;
    previous = current;
  }

  return previous[right.length] <= maximum ? previous[right.length] : null;
}

function tokenScore(queryToken: string, candidateToken: string, weight: number): number {
  if (queryToken === candidateToken) return weight;
  if (queryToken.length >= 2 && candidateToken.startsWith(queryToken)) return weight * 0.82;

  const maximumDistance = queryToken.length <= 7 ? 1 : 2;
  const distance = editDistanceWithin(queryToken, candidateToken, maximumDistance);
  if (distance === null) return 0;
  return weight * (distance === 1 ? 0.55 : 0.35);
}

export function rankSearchResults<T>(
  items: readonly T[],
  query: string,
  getFields: (item: T) => readonly SearchField[],
  getLabel: (item: T) => string,
  limit = Number.POSITIVE_INFINITY,
): T[] {
  const normalizedQuery = normalizeSearchText(query);
  const queryTokens = normalizedQuery.split(' ').filter(Boolean);

  if (queryTokens.length === 0) return [...items].slice(0, limit);

  return items
    .map((item, originalIndex) => {
      const normalizedLabel = normalizeSearchText(getLabel(item));
      const fields = getFields(item).map((field) => ({
        weight: field.weight,
        tokens: normalizeSearchText(field.text).split(' ').filter(Boolean),
      }));
      let score = 0;

      for (const queryToken of queryTokens) {
        let bestTokenScore = 0;
        for (const field of fields) {
          for (const candidateToken of field.tokens) {
            bestTokenScore = Math.max(
              bestTokenScore,
              tokenScore(queryToken, candidateToken, field.weight),
            );
          }
        }
        if (bestTokenScore === 0) return { item, originalIndex, score: 0 };
        score += bestTokenScore;
      }

      if (normalizedLabel === normalizedQuery) score += 30;
      else if (normalizedLabel.startsWith(normalizedQuery)) score += 18;
      else if (normalizedLabel.includes(normalizedQuery)) score += 10;

      return { item, originalIndex, score };
    })
    .filter((result) => result.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        getLabel(left.item).localeCompare(getLabel(right.item)) ||
        left.originalIndex - right.originalIndex,
    )
    .slice(0, limit)
    .map((result) => result.item);
}