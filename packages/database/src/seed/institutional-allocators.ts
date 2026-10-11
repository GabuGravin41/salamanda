import { InstitutionalAllocator } from '@salamanda/shared-types';

export const INSTITUTIONAL_ALLOCATORS: InstitutionalAllocator[] = [
  // 1. NSSF Kenya (National Social Security Fund)
  {
    id: 'alc-nssf-kenya',
    slug: 'nssf-kenya',
    name: 'National Social Security Fund (NSSF)',
    category: 'PENSION_FUND',
    aumKES: 395000000000, // KES 395 Billion ($3.0B AUM)
    mandate:
      'Statutory public pension scheme mandated by the NSSF Act 2013 to maximize returns for Kenyan wage contributors while adhering to RBA investment guidelines across government securities, quoted equities, and alternative real infrastructure.',
    targetAssetClasses: ['SOVEREIGN_BOND', 'MEGA_INFRASTRUCTURE', 'LAND_BENCHMARK', 'ENTERPRISE_ACTIVE'],
    ticketSizeKES: {
      min: 1000000000, // KES 1 Billion minimum
      max: 25000000000, // Up to KES 25 Billion in sovereign/PPP tranches
    },
    geographyScope: 'Kenya (Nationwide across 47 Counties)',
    decisionMakers: 'David Mwangangi (Managing Trustee), Board of Trustees, RBA Custodian (KCB/Co-op)',
    headquarters: 'Social Security House, Bishops Road, Community, Nairobi',
    verificationLevel: 'VERIFIED_PRIMARY',
    activeDeploymentFocus:
      'Channeling increased Tier 1 & Tier 2 contributions into long-dated infrastructure bonds (IFBs), funding green energy public-private partnerships, and monetizing extensive undeveloped commercial land holdings in Upper Hill, Mavoko, and Mombasa.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2941,36.8155',
    citations: [
      {
        id: 'cit-alc-01',
        title: 'NSSF Kenya Audited Annual Financial Report & RBA Asset Class Schedule',
        publisher: 'Retirement Benefits Authority (RBA) / Office of the Auditor-General',
        publicationDate: '2024-06-30',
        url: 'https://www.nssf.or.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited portfolio distribution confirming KES 395B in total fund value and asset class allocations.',
      },
    ],
  },

  // 2. TDB - Trade and Development Bank (Eastern and Southern Africa)
  {
    id: 'alc-tdb-bank',
    slug: 'trade-and-development-bank',
    name: 'Eastern & Southern African Trade and Development Bank (TDB)',
    category: 'SOVEREIGN_DFI',
    aumKES: 1100000000000, // Over $8.5 Billion balance sheet (~KES 1.1 Trillion)
    mandate:
      'Multilateral development finance institution providing trade finance, project loans, and equity syndication to Member States, supporting trade, industrialization, and cross-border infrastructure.',
    targetAssetClasses: ['MEGA_INFRASTRUCTURE', 'ENTERPRISE_ACTIVE', 'INDUSTRIAL_IDLE'],
    ticketSizeKES: {
      min: 1500000000, // KES 1.5 Billion ($11.5M)
      max: 30000000000, // Up to KES 30 Billion ($230M)
    },
    geographyScope: 'Eastern and Southern Africa (Regional HQ in Nairobi)',
    decisionMakers: 'Admassu Tadesse (Group President & MD), Board of Directors',
    headquarters: 'TDB Tower, 197 Lenana Place, Kilimani, Nairobi',
    verificationLevel: 'VERIFIED_PRIMARY',
    activeDeploymentFocus:
      'Refinancing sovereign debt obligations (including Kenya Eurobond liability management), financing cross-border geothermal energy grid interconnectors, and syndicating credit lines for local manufacturing conglomerates.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2917,36.7876',
    citations: [
      {
        id: 'cit-alc-02',
        title: 'Trade and Development Bank Group Annual Financial Report 2023-2024',
        publisher: 'TDB Group',
        publicationDate: '2024-05-18',
        url: 'https://www.tdbgroup.org',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited assets under management and Kenyan project portfolio exposure.',
      },
    ],
  },

  // 3. AfricInvest (Private Equity & Growth Capital)
  {
    id: 'alc-africinvest',
    slug: 'africinvest-east-africa',
    name: 'AfricInvest Capital Partners (East Africa)',
    category: 'PRIVATE_EQUITY',
    aumKES: 260000000000, // $2.0 Billion AUM across pan-African funds
    mandate:
      'Mid-market private equity and private debt provider backing market champions with expansion capital, operational governance, and regional consolidation strategies.',
    targetAssetClasses: ['ENTERPRISE_ACTIVE', 'ENTERPRISE_DISTRESSED'],
    ticketSizeKES: {
      min: 650000000, // KES 650M ($5M)
      max: 4000000000, // KES 4.0B ($30M)
    },
    geographyScope: 'East Africa / Sub-Saharan Africa',
    decisionMakers: 'George Odo (Senior Partner, East Africa), Ziad Oueslati (Founding Partner)',
    headquarters: 'Eden Square, Block 1, Chiromo Road, Westlands, Nairobi',
    verificationLevel: 'VERIFIED_PRIMARY',
    activeDeploymentFocus:
      'Healthcare provider networks, regional pharmaceutical manufacturing, financial inclusion/fintech balance sheet scaling, and consumer goods distribution.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2682,36.8062',
    citations: [
      {
        id: 'cit-alc-03',
        title: 'AfricInvest Fund Performance Review & East Africa Deal Disclosures',
        publisher: 'AfricInvest Private Capital',
        publicationDate: '2024-03-31',
        url: 'https://www.africinvest.com',
        tier: 'FINANCIAL_PRESS_PRIMARY',
        keyExcerpt: 'Portfolio companies and direct growth capital deployments in Kenyan enterprises.',
      },
    ],
  },

  // 4. Kenya Police SACCO Investment Co-operative
  {
    id: 'alc-kenya-police-sacco',
    slug: 'kenya-police-sacco',
    name: 'Kenya Police Defense & SACCO Capital Pool',
    category: 'SACCO_APEX',
    aumKES: 54000000000, // KES 54 Billion asset base
    mandate:
      'Tier-1 Deposit-Taking SACCO regulated by SASRA, mobilizing member savings into secure collateralized real estate, development loans, and government securities.',
    targetAssetClasses: ['LAND_BENCHMARK', 'SOVEREIGN_BOND', 'ENTERPRISE_ACTIVE'],
    ticketSizeKES: {
      min: 200000000, // KES 200M
      max: 2000000000, // KES 2.0B
    },
    geographyScope: 'Kenya (National)',
    decisionMakers: 'Solomon Atsiaya (CEO), Board of Directors, SASRA Oversight',
    headquarters: 'Police Sacco Plaza, Ngara Road, Nairobi',
    verificationLevel: 'VERIFIED_PRIMARY',
    activeDeploymentFocus:
      'Commercial real estate development, treasury bond auctions offering double-digit risk-free yields, and credit-enhanced member housing projects.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2774,36.8267',
    citations: [
      {
        id: 'cit-alc-04',
        title: 'Sacco Societies Regulatory Authority (SASRA) Annual Supervision Report',
        publisher: 'SASRA Kenya',
        publicationDate: '2024-07-15',
        url: 'https://sasra.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited assets, loan book valuation, and liquidity ratios of Kenya Police SACCO.',
      },
    ],
  },
];
