import { DealPipelineOpportunity } from '@salamanda/shared-types';

export const DEAL_PIPELINE_OPPORTUNITIES: DealPipelineOpportunity[] = [
  // 1. Pan Paper Mills (Webuye) Secondary Brown Paper Line Expansion
  {
    id: 'opp-pan-paper-expansion',
    slug: 'pan-paper-mills-phase2-expansion',
    title: 'Pan Paper Mills (Webuye) Kraft Packaging Line Expansion',
    stage: 'REVITALIZATION_AUCTION',
    targetSector: 'MANUFACTURING',
    county: 'Bungoma',
    requiredCapitalKES: 3500000000, // KES 3.5 Billion
    impliedValuationKES: 12000000000,
    associatedAssetSlug: 'pan-paper-mills-webuye',
    keyCatalyst:
      'East Africa Community single-use plastic ban driving exponential demand for biodegradable kraft brown paper carton packaging. Existing grid connections and water intake rights from Nzoia River already secured.',
    riskFactor:
      'Wood pulp raw material shortage due to government logging moratoriums; requires heavy investment in localized commercial bamboo and agroforestry outgrower networks.',
    salamandaThesis:
      'Acquired out of receivership by Rai Group for only KES 900M, this dormant industrial giant has massive structural replacement value (> KES 25B). Injecting KES 3.5B in modern converting lines will capture 60% of East Africa’s industrial packaging market.',
    verificationLevel: 'VERIFIED_PRIMARY',
    matchingAllocators: ['trade-and-development-bank', 'africinvest-east-africa'],
    googleMapsUrl: 'https://maps.google.com/?q=0.5983,34.7733',
    citations: [
      {
        id: 'cit-pipe-01',
        title: 'Ministry of Investments, Trade and Industry National Industrialization Blueprint',
        publisher: 'Government of Kenya',
        publicationDate: '2024-02-10',
        url: 'https://industrialization.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Packaging paper demand projections and industrial rehabilitation opportunities in Bungoma County.',
      },
    ],
  },

  // 2. Chemelil Sugar Factory 25-Year Strategic Lease Concession
  {
    id: 'opp-chemelil-sugar-lease',
    slug: 'chemelil-sugar-revitalization-lease',
    title: 'Chemelil Sugar Factory 25-Year Long-Term Operating Lease',
    stage: 'GOVERNMENT_PRIVATIZATION',
    targetSector: 'AGRIBUSINESS_FOOD',
    county: 'Kisumu',
    requiredCapitalKES: 6200000000, // KES 6.2 Billion modernization capex
    impliedValuationKES: 14000000000,
    keyCatalyst:
      'Cabinet approval of privatization program leasing 5 distressed state sugar mills to private strategic operators; restructuring of legacy debts and waiver of punitive farmer arrears.',
    riskFactor:
      'Cane poaching by surrounding private millers (West Kenya, Kibos); unionized legacy labor redundancy payouts and political friction in the Nyando belt.',
    salamandaThesis:
      'Chemelil possesses a 7,000-acre nucleus estate with fertile riparian soils and gravity-fed irrigation potential. A modernized miller combining 3,000 TCD crushing with a 15MW bagasse co-generation power plant will achieve EBITDA margins exceeding 28%.',
    verificationLevel: 'VERIFIED_PRIMARY',
    matchingAllocators: ['trade-and-development-bank', 'africinvest-east-africa', 'nssf-kenya'],
    googleMapsUrl: 'https://maps.google.com/?q=-0.0886,35.1386',
    citations: [
      {
        id: 'cit-pipe-02',
        title: 'Kenya Gazette Notice on Leasing of State-Owned Sugar Mills',
        publisher: 'Ministry of Agriculture and Livestock Development',
        publicationDate: '2024-01-19',
        url: 'https://kenyalaw.org',
        tier: 'GAZETTE_OFFICIAL',
        referenceNumber: 'Gazette Vol. CXXVI - No. 8',
        keyExcerpt: 'Official request for expressions of interest to lease Chemelil, Miwani, Muhoroni, Nzoia, and South Nyanza sugar companies.',
      },
    ],
  },

  // 3. Karuturi Flower Farm 300-Acre Geothermal Agribusiness Concession
  {
    id: 'opp-karuturi-naivasha-revival',
    slug: 'karuturi-geothermal-greenhouse-revival',
    title: 'Karuturi Farms Naivasha 300-Acre Geothermal Agribusiness Lease',
    stage: 'DISTRESSED_DEBT_RESTRUCTURING',
    targetSector: 'AGRIBUSINESS_FOOD',
    county: 'Nakuru',
    requiredCapitalKES: 2800000000, // KES 2.8 Billion
    impliedValuationKES: 8500000000,
    associatedAssetSlug: 'karuturi-flower-farms-naivasha',
    keyCatalyst:
      'Supreme Court confirmation of receiver’s right to realize security; proximate access to Olkaria direct-use geothermal steam brine for greenhouse night heating and zero-carbon export certification.',
    riskFactor:
      'Outstanding environmental rehabilitation on Lake Naivasha riparian buffer; title boundary clarification under Section 28 of Land Registration Act.',
    salamandaThesis:
      'Prime volcanic soil on the shores of Lake Naivasha with existing pumping stations and high-voltage grid sub-stations. Shifting from fresh-cut roses to high-value export blueberries and avocados under direct geothermal heating triples revenue yield per hectare.',
    verificationLevel: 'VERIFIED_PRIMARY',
    matchingAllocators: ['africinvest-east-africa', 'kenya-police-sacco'],
    googleMapsUrl: 'https://maps.google.com/?q=-0.7715,36.3812',
    citations: [
      {
        id: 'cit-pipe-03',
        title: 'Supreme Court Ruling eKLR Petition No. 12 of 2021: Karuturi Ltd vs CFC Stanbic',
        publisher: 'Kenya Law Resource Center',
        publicationDate: '2023-11-24',
        url: 'http://kenyalaw.org/caselaw/cases/view/241850/',
        tier: 'COURT_RULING',
        keyExcerpt: 'Confirmation of secured creditor recovery procedures over Naivasha land titles.',
      },
    ],
  },

  // 4. Athi River Green Logistics Park & Dry Port Cold Chain Hub
  {
    id: 'opp-athi-river-cold-chain',
    slug: 'athi-river-dry-port-cold-chain',
    title: 'Athi River SGR Freight Hub Cold Chain & Agro-Logistics Park',
    stage: 'EXPANSION_CAPITAL',
    targetSector: 'AUTOMOTIVE_TRANSPORT',
    county: 'Machakos',
    requiredCapitalKES: 4500000000, // KES 4.5 Billion
    impliedValuationKES: 11000000000,
    associatedAssetSlug: 'athi-river-industrial-corridor',
    keyCatalyst:
      'Direct rail siding link into the SGR freight marshalling yard allowing 4-hour reefer container transit from Nairobi/Machakos directly to Mombasa Port vessel quays.',
    riskFactor:
      'Fluctuating Kenya Railways freight tariff regimes; regional logistics competition from inland container depots.',
    salamandaThesis:
      'Over 35% of Kenya’s fresh horticultural and avocado produce spoils post-harvest due to fragmented cold chains. A consolidated temperature-controlled pre-cooling and consolidation hub at Athi River captures steady utility-style rental income.',
    verificationLevel: 'VERIFIED_PRIMARY',
    matchingAllocators: ['nssf-kenya', 'trade-and-development-bank', 'africinvest-east-africa'],
    googleMapsUrl: 'https://maps.google.com/?q=-1.4552,36.9834',
    citations: [
      {
        id: 'cit-pipe-04',
        title: 'Horticultural Crops Directorate Export Logistics Census',
        publisher: 'AFA Kenya',
        publicationDate: '2024-04-12',
        url: 'https://afa.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Cold-chain deficit analysis and railway freight viability for horticultural exports.',
      },
    ],
  },
];
