import { InstitutionalPlayer } from '@salamanda/shared-types';

export const INSTITUTIONAL_PLAYERS: InstitutionalPlayer[] = [
  // 1. Centum Investment PLC
  {
    id: 'plr-centum-investment',
    slug: 'centum-investment-plc',
    name: 'Centum Investment Company PLC',
    playerType: 'PRIVATE_EQUITY_INVESTMENT',
    leadership: 'Dr. James Mwangi (Chairman), Kenneth Mbae (MD Centum RE), Late Chris Kirubi (Patriarch)',
    headquarters: 'South Tower, Two Rivers, Limuru Road, Nairobi',
    estimatedCapitalMovedKES: 45000000000, // KES 45 Billion managed portfolio assets
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes:
      'Listed on NSE. Financial statements independently audited by PwC. Public speculation claiming Centum owns "majority stakes in all sugar factories" is factually unverified in public registries; sugar milling is overwhelmingly controlled by Rai Group (Kabras) and state parastatals.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2132,36.7972',
    activeFocusPresent:
      'Aggressive pivot from debt leverage to cash-flow real estate sales at Two Rivers and Vipingo Development, green energy investments (solar/geothermal), and managing the Two Rivers International Finance Centre (TRIFC) Special Economic Zone.',
    summary:
      'East Africa’s largest listed private investment company. Originally founded as the state-backed Industrial and Commercial Development Corporation (ICDC) investment vehicle before privatization. Commands landmark master-planned real estate developments (Two Rivers in Nairobi, Vipingo Development in Kilifi, Pearl Marina in Uganda). Known for massive liquidity exits including Almasi Beverages (sold to Coca-Cola for KES 19.5B) and Sidian Bank.',
    keyHoldings: [
      {
        assetName: 'Two Rivers Urban Node & International Finance Centre (TRIFC)',
        stakeOrRole: '58% Majority Equity Shareholding',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: '102-acre mixed-use development and gazetted Special Economic Zone (SEZ) in Kiambu/Nairobi.',
      },
      {
        assetName: 'Vipingo Development Limited (Kilifi County)',
        stakeOrRole: '100% Wholly Owned Subsidiary',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: '10,255-acre coastal industrial park, residential masterplan, and desalination infrastructure.',
      },
      {
        assetName: 'Kenyan Sugar Millers (Mumias, Chemelil, West Kenya)',
        stakeOrRole: 'Rumored Majority Shareholding',
        verificationLevel: 'MARKET_SPECULATION',
        notes:
          'UNVERIFIED MARKET SPECULATION: Public rumors frequently allege Centum controls all local sugar factories. Audited CMA and Registrar filings confirm Centum holds NO controlling stakes in sugar mills. Dominance sits with Rai Group and Ministry of Agriculture.',
      },
    ],
    citations: [
      {
        id: 'cit-cen-01',
        title: 'Centum Investment Company PLC Audited Integrated Annual Report 2024',
        publisher: 'Centum Investment PLC',
        publicationDate: '2024-07-26',
        url: 'https://centum.co.ke/investor-relations',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited portfolio valuation, cash distributions, and Two Rivers SEZ commercial performance.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 2. China Road and Bridge Corporation (CRBC)
  {
    id: 'plr-crbc-china',
    slug: 'china-road-and-bridge-corp',
    name: 'China Road and Bridge Corporation (CRBC)',
    playerType: 'EPC_CONSTRUCTION_GIANT',
    leadership: 'State-Owned Asset Supervision and Administration Commission (SASAC) / CCCC Group',
    headquarters: 'CRBC Kenya Headquarters, South C, Mombasa Road, Nairobi',
    estimatedCapitalMovedKES: 650000000000, // > KES 650 Billion across sovereign debt contracts & PPPs
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'All project contract values confirmed via National Treasury debt registers, KeNHA bulletins, and Gazette notices.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.3255,36.8378',
    activeFocusPresent:
      'Shifting from sovereign balance-sheet loans to commercial Public-Private Partnership (PPP) toll concessions. Operating the 27km Nairobi Expressway via subsidiary Moja Expressway, completing Lamu Port Phase 1 berths, and pursuing the Rironi-Mau Summit toll highway.',
    summary:
      'The dominant engineering, procurement, and construction (EPC) force in modern Kenya. Responsible for building the physical spine of Vision 2030, including the Mombasa-Nairobi Standard Gauge Railway, the elevated Nairobi Expressway, deep-sea berths at Lamu Port, and major ring roads.',
    keyHoldings: [
      {
        assetName: 'Standard Gauge Railway (SGR Phase 1 & 2A)',
        stakeOrRole: 'Lead EPC Contractor & Operations Technical Partner',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'KES 477 Billion total capex connecting Mombasa, Nairobi, and Naivasha.',
      },
      {
        assetName: 'Nairobi Expressway (Mombasa Rd to Westlands)',
        stakeOrRole: 'Concessionaire & Operator (30-Year BOT Concession via Moja Expressway)',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'KES 88 Billion 27.1km elevated tollway financed under private concession.',
      },
      {
        assetName: 'Lamu Port LAPSSET Corridor (Berths 1-3)',
        stakeOrRole: 'Lead Marine EPC Contractor',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'KES 40 Billion deep-sea transshipment port infrastructure.',
      },
    ],
    citations: [
      {
        id: 'cit-crbc-01',
        title: 'National Treasury Public Debt Register & PPP Directorate Fiches',
        publisher: 'National Treasury of Kenya',
        publicationDate: '2024-06-30',
        url: 'https://treasury.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Sovereign credit disbursements and concession metrics for CRBC civil works.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 3. Devki Group (Narendra Raval)
  {
    id: 'plr-devki-group',
    slug: 'devki-group-narendra-raval',
    name: 'Devki Group of Companies',
    playerType: 'INDUSTRIAL_CONGLOMERATE',
    leadership: 'Narendra Raval CBS "Guru" (Chairman & Founder)',
    headquarters: 'Devki Steel Mills Complex, Ruiru, Kiambu County / Athi River',
    estimatedCapitalMovedKES: 150000000000, // > KES 150 Billion in heavy industrial assets
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Asset purchases confirmed via High Court administration distribution filings and CAK merger approvals.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.1448,36.9615',
    activeFocusPresent:
      'Constructing a KES 45 Billion 6,000-tonne-per-day clinker manufacturing megaplant in Sebit, West Pokot to completely eliminate Kenya’s KES 10B annual clinker import bill; bidding aggressively to lease distressed state sugar factories (Mumias, Chemelil).',
    summary:
      'East Africa’s heavy industrial titan. Dominates steel reinforcing bars (Devki Steel), corrugated roofing (Maisha Mabati), and building cement (National Cement Company). Famously stepped in to acquire the liquidated Kenyan manufacturing plants of ARM Cement in 2019 for KES 5 Billion in cash.',
    keyHoldings: [
      {
        assetName: 'National Cement Company Limited',
        stakeOrRole: '100% Wholly Owned Parent',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Produces Simba Cement, commanding ~30% of Kenya’s domestic cement consumption.',
      },
      {
        assetName: 'ARM Cement (Kenyan Assets Acquired from PwC Receivers)',
        stakeOrRole: 'Acquired for KES 5.0 Billion in 2019',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Absorbed Athi River clinker plant and limestone mining concessions.',
      },
      {
        assetName: 'West Pokot Clinker Megaplant (Sebit, Ortum)',
        stakeOrRole: '100% Sponsor & Developer (KES 45B Capex)',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Largest single clinker manufacturing facility in Sub-Saharan Africa.',
      },
    ],
    citations: [
      {
        id: 'cit-devki-01',
        title: 'Competition Authority of Kenya Determination on National Cement / ARM Assets',
        publisher: 'Competition Authority of Kenya',
        publicationDate: '2019-10-15',
        url: 'https://cak.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Approval of acquisition of assets of ARM Cement by National Cement Company.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 4. Rai Group of Companies (Jaswant Rai)
  {
    id: 'plr-rai-group',
    slug: 'rai-group-jaswant-rai',
    name: 'Rai Group of Companies',
    playerType: 'INDUSTRIAL_CONGLOMERATE',
    leadership: 'Jaswant Singh Rai (Chairman), Sarbjit Singh Rai',
    headquarters: 'West Kenya Complex, Kakamega / Menengai Works, Nakuru',
    estimatedCapitalMovedKES: 100000000000, // > KES 100 Billion
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Sugar milling market share verified via Agriculture and Food Authority (AFA) yearbooks.',
    googleMapsUrl: 'https://maps.google.com/?q=0.2827,34.7519',
    activeFocusPresent:
      'Crushing over 45% of Kenya’s domestic sugarcane through West Kenya, Sukari, and Olepito mills; modernizing brown paper converting lines at Pan Paper Webuye; expanding Menengai edible oil refining in Nakuru.',
    summary:
      'The quiet, dominant baron of Kenya’s agricultural milling and agro-processing economy. Commands over 45% of domestic sugar production through West Kenya Sugar (Kabras Sugar brand). In 2016, acquired the assets of collapsed industrial giant Pan Paper Mills in Webuye for KES 900 Million through subsidiary Tarlochan Limited.',
    keyHoldings: [
      {
        assetName: 'West Kenya Sugar Company (Kabras Sugar)',
        stakeOrRole: 'Controlling Majority Shareholder',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Crushes over 1.2 million tonnes of cane annually in Kakamega and Bungoma.',
      },
      {
        assetName: 'Pan Paper Mills Webuye (Tarlochan Limited)',
        stakeOrRole: 'Acquired Assets for KES 900 Million from PwC',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Converts recycled wastepaper into packaging corrugated carton boxes.',
      },
      {
        assetName: 'Menengai Oil Refineries Limited (Nakuru)',
        stakeOrRole: 'Controlling Conglomerate Owner',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Edible cooking oils, laundry soaps, and detergents distribution.',
      },
    ],
    citations: [
      {
        id: 'cit-rai-01',
        title: 'Agriculture and Food Authority (AFA) Sugar Directorate Annual Production Yearbook',
        publisher: 'Agriculture and Food Authority',
        publicationDate: '2024-03-31',
        url: 'https://afa.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'West Kenya Sugar Company statistics indicating 44.8% share of national domestic sugar milling.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 5. Jomo Kenyatta Foundation (Educational Trust)
  {
    id: 'plr-jomo-kenyatta-foundation',
    slug: 'jomo-kenyatta-foundation',
    name: 'Jomo Kenyatta Foundation (JKF)',
    playerType: 'EDUCATIONAL_FOUNDATION_TRUST',
    leadership: 'Board of Trustees / Ministry of Education Mandate',
    headquarters: 'Enterprise Road, Industrial Area, Nairobi',
    estimatedCapitalMovedKES: 6500000000, // Over KES 6.5 Billion across its lifespan
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Audited statutory state corporation reports published by the Office of the Auditor General.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.3128,36.8524',
    activeFocusPresent:
      'Managing the JKF High School Scholarship Endowment Fund, delivering full 4-year secondary school tuition and boarding for over 12,000 vulnerable children across Arid and Semi-Arid Lands (ASALs), particularly Garissa, Wajir, Mandera, Turkana, and Samburu.',
    summary:
      'Established in 1966 by President Jomo Kenyatta as a unique state-backed educational publisher mandated to channel 100% of its publishing trading surplus into education scholarships for bright, underprivileged Kenyan orphans and vulnerable children. It serves as one of the critical financial lifelines for pastoralist communities in North Eastern Kenya.',
    keyHoldings: [
      {
        assetName: 'JKF Secondary School Scholarship Trust Fund',
        stakeOrRole: 'Endowment Administrator & Sponsor',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Funded over 12,000 students through secondary school with special ASAL focus.',
      },
      {
        assetName: 'JKF Publishing House & Industrial Warehouse (Enterprise Rd)',
        stakeOrRole: '100% Titleholder of 4.5-acre Industrial Area Property',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Prime industrial land and book printing press machinery in Nairobi.',
      },
    ],
    citations: [
      {
        id: 'cit-jkf-01',
        title: 'Report of the Auditor-General on the Financial Statements of The Jomo Kenyatta Foundation',
        publisher: 'Office of the Auditor-General Kenya',
        publicationDate: '2023-06-30',
        url: 'https://oagkenya.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited scholarship disbursement records and publishing revenues.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 6. Equity Group Foundation (Wings to Fly)
  {
    id: 'plr-equity-group-foundation',
    slug: 'equity-group-foundation',
    name: 'Equity Group Foundation (Wings to Fly)',
    playerType: 'EDUCATIONAL_FOUNDATION_TRUST',
    leadership: 'Dr. James Mwangi CBS (Executive Chairman)',
    headquarters: 'Equity Centre, Hospital Road, Upper Hill, Nairobi',
    estimatedCapitalMovedKES: 28000000000, // > KES 28 Billion ($210M) in education & social impact
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Disbursements audited annually in partnership with Mastercard Foundation and KfW.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2982,36.8158',
    activeFocusPresent:
      'Scaling secondary education scholarships (over 60,000 scholars to date), providing university transition stipends via the Equity Leaders Program (ELP), and deploying KES 100B in Africa Recovery and Resilience Plan credit guarantees for climate-smart farming.',
    summary:
      'The largest corporate philanthropic and educational endowment vehicle in Sub-Saharan Africa. Founded by Equity Group in partnership with the Mastercard Foundation, German development bank KfW, and USAID. In North Eastern Kenya (Garissa, Wajir, Mandera) and urban informal settlements, Wings to Fly provides comprehensive secondary tuition, books, uniforms, and mentorship.',
    keyHoldings: [
      {
        assetName: 'Wings to Fly & Elimu Secondary Scholarship Trust',
        stakeOrRole: 'Program Sponsor & Implementing Partner',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Supported over 60,000 underprivileged scholars across all 47 counties.',
      },
      {
        assetName: 'Equity Leaders Program (ELP) University Endowment',
        stakeOrRole: 'Pre-University Leadership Incubator',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Over 800 scholars placed in global universities (Harvard, MIT, Stanford, Oxford).',
      },
    ],
    citations: [
      {
        id: 'cit-egf-01',
        title: 'Equity Group Foundation Social Impact Annual Review 2023-2024',
        publisher: 'Equity Group Foundation',
        publicationDate: '2024-04-15',
        url: 'https://equitygroupfoundation.com',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited report detailing 60,009 Wings to Fly scholars and social capital metrics.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },
];
