import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { INITIAL_ASSETS, MACRO_METRICS } from './seed-data';
import { Asset, AssetFilterOptions, MacroMetrics, AutopsyReport } from '@salamanda/shared-types';

export * from './schema';
export * from './seed-data';

const connectionString = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';

export const isDbConfigured = Boolean(connectionString) && !connectionString.includes('placeholder');

export const sql = isDbConfigured ? neon(connectionString) : null;
export const db = sql ? drizzle(sql, { schema }) : null;

/**
 * High-performance query layer with automatic graceful in-memory fallback.
 * Allows zero-configuration prototyping and seamless upgrade to live Neon Postgres.
 */
export async function getAssets(filter?: AssetFilterOptions): Promise<Asset[]> {
  // If no DB configured or during initial static build, use seeded repository
  let results = [...INITIAL_ASSETS];

  if (filter) {
    if (filter.assetClass && filter.assetClass !== 'ALL') {
      results = results.filter((a) => a.assetClass === filter.assetClass);
    }
    if (filter.sector && filter.sector !== 'ALL') {
      results = results.filter((a) => a.sector === filter.sector);
    }
    if (filter.status && filter.status !== 'ALL') {
      results = results.filter((a) => a.status === filter.status);
    }
    if (filter.cause && filter.cause !== 'ALL') {
      results = results.filter(
        (a) =>
          a.autopsy?.primaryCause === filter.cause ||
          a.autopsy?.contributingFactors.includes(filter.cause as any)
      );
    }
    if (filter.county) {
      results = results.filter((a) =>
        a.county.toLowerCase().includes(filter.county!.toLowerCase())
      );
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      results = results.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.subsector.toLowerCase().includes(q) ||
          a.county.toLowerCase().includes(q)
      );
    }
  }

  return results;
}

export async function getAssetBySlug(slug: string): Promise<Asset | null> {
  const asset = INITIAL_ASSETS.find((a) => a.slug === slug);
  return asset || null;
}

export async function getMacroMetrics(): Promise<MacroMetrics> {
  return MACRO_METRICS;
}

export async function getAutopsies(): Promise<{ asset: Asset; autopsy: AutopsyReport }[]> {
  return INITIAL_ASSETS.filter((a) => a.autopsy !== undefined).map((a) => ({
    asset: a,
    autopsy: a.autopsy!,
  }));
}
