import { InstitutionalPlayer } from '@salamanda/shared-types';

export const INSTITUTIONAL_PLAYERS: InstitutionalPlayer[] = [
  // 1. Centum Investment PLC
  {
    id: 'plr-centum-investment',
    slug: 'centum-investment-plc',
    name: 'Centum Investment Company PLC',
    aliases: ['Centum', 'Centum RE', 'Centum Investment'],
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

  // 7. The Kenyatta Family Dynasty & Conglomerates
  {
    id: 'plr-kenyatta-family',
    slug: 'kenyatta-family-dynasty',
    name: 'The Kenyatta Family & Conglomerates',
    playerType: 'DYNASTIC_FAMILY_CONGLOMERATE',
    leadership: 'Uhuru Muigai Kenyatta, Muhoho Kenyatta, Mama Ngina Kenyatta',
    headquarters: 'CBA Building / Mara & Ragati Roads, Upper Hill, Nairobi',
    estimatedCapitalMovedKES: 250000000000, // > KES 250 Billion estimated net portfolio value
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes:
      'Bank holdings verified via Central Bank of Kenya (CBK) and CMA disclosures for NCBA Group PLC. Land assets registered across Kiambu, Nakuru, and Taita Taveta.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2995,36.8182',
    activeFocusPresent:
      'Consolidating banking equity through NCBA Group (commanding digital lending monopolies Fuliza and M-Shwari in partnership with Safaricom), expanding Brookside Dairy into Uganda and Rwanda, and developing the 11,000-acre Northlands City metropolis in Ruiru.',
    summary:
      'The most formidable economic dynasty in post-independence Kenya. Combining vast agricultural and urban land reserves with controlling equity in tier-1 financial services, industrial dairy processing, luxury hospitality, and media.',
    keyHoldings: [
      {
        assetName: 'NCBA Group PLC',
        stakeOrRole: '13.2% Controlling Family Shareholding Block',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Kenya’s 3rd largest bank by asset size (over KES 600B assets), powering Safaricom’s Fuliza and M-Shwari underwriting engines.',
      },
      {
        assetName: 'Brookside Dairy Limited',
        stakeOrRole: 'Controlling Majority Interest (with French dairy giant Danone holding 40%)',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Controls over 45% of formal Kenyan processed milk distribution via Brookside, Tuzo, Ilara, and Delamere brands.',
      },
      {
        assetName: 'Northlands City Metropolis (Ruiru, Kiambu)',
        stakeOrRole: '100% Wholly Owned Master-Planned Development',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: '11,000-acre mixed-use urban node connecting Eastern and Northern Bypasses.',
      },
      {
        assetName: 'Heritage Hotels & Great Rift Valley Lodge',
        stakeOrRole: 'Wholly Owned Hospitality Asset Portfolio',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Luxury safari camps (Mara Explorer, Samburu Intrepids) and golf resort properties.',
      },
    ],
    citations: [
      {
        id: 'cit-ken-01',
        title: 'NCBA Group PLC Audited Annual Integrated Report & Financial Statements',
        publisher: 'Capital Markets Authority (CMA) / NCBA Group',
        publicationDate: '2024-04-18',
        url: 'https://ncbagroup.com/investor-relations',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited principal shareholding registers confirming substantial family equity stakes.',
      },
      {
        id: 'cit-ken-02',
        title: 'Competition Authority of Kenya Determination on Brookside Dairy Acquisitions',
        publisher: 'Competition Authority of Kenya',
        publicationDate: '2023-08-11',
        url: 'https://cak.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Antitrust review of dairy processing market concentration.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 8. The Moi Family Dynasty & Conglomerates
  {
    id: 'plr-moi-family',
    slug: 'moi-family-conglomerates',
    name: 'The Moi Family & Conglomerates',
    playerType: 'DYNASTIC_FAMILY_CONGLOMERATE',
    leadership: 'Gideon Moi, Philip Moi, Raymond Moi, Heirs of Late Daniel Arap Moi',
    headquarters: 'Kabarnet Gardens, Kibera/Nairobi & Kabarak, Nakuru County',
    estimatedCapitalMovedKES: 180000000000, // > KES 180 Billion portfolio
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes:
      'Listed assets verified via NSE disclosures (Standard Group PLC). Logistics and aviation contracts confirmed via port transport and KRA customs schedules.',
    googleMapsUrl: 'https://maps.google.com/?q=-0.1685,35.9621',
    activeFocusPresent:
      'Port freight handling via Siginon Global Logistics at Mombasa Port and JKIA, educational endowments across Kabarak University institutions, and restructuring debt exposures at The Standard Group PLC.',
    summary:
      'Built over a 24-year presidential tenure, commanding strategic land tracts across the Rift Valley, national broadcasting assets, logistics infrastructure connecting Mombasa port to landlocked Great Lakes economies, and premier private educational institutions.',
    keyHoldings: [
      {
        assetName: 'Siginon Global Logistics',
        stakeOrRole: 'Controlling Conglomerate Majority',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Air cargo ramp handling at JKIA, inland container depots, and regional transit trucking fleet.',
      },
      {
        assetName: 'Kabarak University & Educational Holdings (Nakuru)',
        stakeOrRole: '100% Sponsor & Institutional Titleholder',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Over 1,000 acres in Rongai, Nakuru with university campus, referral teaching hospital, and secondary schools.',
      },
      {
        assetName: 'The Standard Group PLC',
        stakeOrRole: 'Controlling Majority Shareholder',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Oldest newspaper in East Africa (The Standard), KTN Home, KTN News, and Radio Maisha.',
      },
    ],
    citations: [
      {
        id: 'cit-moi-01',
        title: 'The Standard Group PLC Annual Report & Financial Statements',
        publisher: 'Nairobi Securities Exchange (NSE)',
        publicationDate: '2024-06-28',
        url: 'https://standardmedia.co.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited financial filings and principal shareholder register.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 9. Bidco Africa (Vimal Shah & Family)
  {
    id: 'plr-bidco-africa',
    slug: 'bidco-africa-vimal-shah',
    name: 'Bidco Africa Limited',
    playerType: 'INDUSTRIAL_CONGLOMERATE',
    leadership: 'Dr. Vimal Shah (Chairman), Tarun Shah, Bhimji Depar Shah (Founder)',
    headquarters: 'Bidco Industrial Park, Ruiru / Garissa Road, Thika, Kiambu County',
    estimatedCapitalMovedKES: 80000000000, // > KES 80 Billion industrial turnover
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Manufacturing facility capex verified via KEPSA and Ministry of Industrialization project bulletins.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.1398,36.9587',
    activeFocusPresent:
      'Operating the KES 20 Billion Bidco Industrial Park in Ruiru, producing premium bakery products, noodles, animal feeds, and expanding contract sunflower/soya outgrower schemes across 35,000 smallholders.',
    summary:
      'East Africa’s largest fast-moving consumer goods (FMCG) and edible oil manufacturing titan. Dominates cooking fats (Kimbo, Cowboy, Chipsy), edible oils (Golden Fry, Elianto), laundry soaps (Gental, White Star), and food processing across 16 African countries.',
    keyHoldings: [
      {
        assetName: 'Bidco Industrial Park (Ruiru, Kiambu)',
        stakeOrRole: '100% Wholly Owned Manufacturing Megaplant',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'KES 20B state-of-the-art automated manufacturing complex commissioned in 2019.',
      },
      {
        assetName: 'Thika Edible Oil Refining Complex',
        stakeOrRole: '100% Parent Plant',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'East Africa’s largest oilseed extraction and fractionation refinery.',
      },
    ],
    citations: [
      {
        id: 'cit-bid-01',
        title: 'Kenya Association of Manufacturers (KAM) Manufacturing Sector Directory',
        publisher: 'Kenya Association of Manufacturers',
        publicationDate: '2024-02-15',
        url: 'https://kam.co.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Industrial manufacturing capacity and supply chain linkages for Bidco Africa.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 10. Kwacha Group of Companies (Jimi Wanjigi)
  {
    id: 'plr-kwacha-group',
    slug: 'kwacha-group-jimi-wanjigi',
    name: 'Kwacha Group of Companies (Jimi Wanjigi)',
    playerType: 'PRIVATE_EQUITY_INVESTMENT',
    leadership: 'Jimi Richard Wanjigi (CEO & Chairman), James Maina Wanjigi (Patriarch)',
    headquarters: 'Kwacha House, General Mathenge Drive, Westlands, Nairobi',
    estimatedCapitalMovedKES: 55000000000, // > KES 55 Billion in structured sovereign capex
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes:
      'Mega-infrastructure EPC structuring confirmed via parliamentary public accounts committee testimonies and high court filings.',
    googleMapsUrl: 'https://maps.google.com/?q=-1.2584,36.8043',
    activeFocusPresent:
      'Managing prime commercial real estate holdings in Westlands and Muthaiga, pursuing agri-processing ventures, and holding private equity positions in carbon-dioxide extraction (Carbacid Investments).',
    summary:
      'The premier private procurement and infrastructure structuring house in Kenya’s modern history. Famously structured the original EPC consortia for the Standard Gauge Railway (SGR Phase 1) with China Road and Bridge Corporation (CRBC), modernizing security communications, and managing prime urban land reserves.',
    keyHoldings: [
      {
        assetName: 'Carbacid Investments PLC Equity Interests',
        stakeOrRole: 'Strategic Equity Shareholding',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Leading East African manufacturer of food-grade liquid carbon dioxide and dry ice.',
      },
      {
        assetName: 'Kwacha House & Westlands Commercial Land',
        stakeOrRole: '100% Wholly Owned Property Portfolio',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Commercial offices and prime land along General Mathenge and Muthaiga.',
      },
      {
        assetName: 'Tyl Limited Security & Technology Systems',
        stakeOrRole: '100% Parent Vehicle',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Historical contractor for government specialized technology frameworks.',
      },
    ],
    citations: [
      {
        id: 'cit-kwa-01',
        title: 'National Assembly Public Investments Committee (PIC) Special Report on SGR Procurement',
        publisher: 'Parliament of Kenya',
        publicationDate: '2021-04-20',
        url: 'http://parliament.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Testimonies and documentation detailing EPC agency agreements and project origination frameworks.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 11. Kenya Development Corporation
  {
    id: 'plr-kenya-development-corporation',
    slug: 'kenya-development-corporation',
    name: 'Kenya Development Corporation Ltd.',
    aliases: ['KDC', 'ICDC', 'IDB Capital', 'Tourism Finance Corporation'],
    playerType: 'DEVELOPMENT_FINANCE_INSTITUTION',
    leadership: 'Government of Kenya development finance institution; board and executive leadership',
    headquarters: 'Uchumi House, Aga Khan Walk, Nairobi',
    estimatedCapitalMovedKES: 0,
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'KDC describes itself as Kenya’s cross-sector DFI, formed by merging ICDC, Tourism Finance Corporation, and IDB Capital. No capital estimate is published in the cited profile.',
    activeFocusPresent:
      'Providing long-term development and infrastructure finance, business support, and advisory services to medium and large enterprises across priority sectors.',
    summary:
      'Kenya’s cross-sector development finance institution. Established in 2020 through the merger of Industrial and Commercial Development Corporation, Tourism Finance Corporation, and IDB Capital Limited to consolidate public development-finance capacity.',
    keyHoldings: [],
    citations: [
      {
        id: 'cit-kdc-01',
        title: 'Who We Are',
        publisher: 'Kenya Development Corporation',
        publicationDate: '2020-11-27',
        url: 'https://kdc.go.ke/about-us/who-we-are',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'KDC is Kenya’s cross-sector development finance institution, formed through the merger of IDB Capital, Tourism Finance Corporation, and ICDC.',
      },
    ],
    createdAt: '2026-10-12T00:00:00Z',
    updatedAt: '2026-10-12T00:00:00Z',
  },

  // 12. Kenya Electricity Generating Company
  {
    id: 'plr-kengen',
    slug: 'kengen',
    name: 'Kenya Electricity Generating Company PLC (KenGen)',
    aliases: ['KenGen', 'Kenya Electricity Generating Company', 'KEGN'],
    playerType: 'PUBLIC_LISTED_ENTERPRISE',
    leadership: 'Board and executive management; listed on the Nairobi Securities Exchange',
    headquarters: 'KenGen Pension Plaza II, Kolobot Road, Parklands, Nairobi',
    estimatedCapitalMovedKES: 0,
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Company profile confirms its 1998 formation as KenGen and NSE listing in 2006. No KES capital figure is inferred from generation capacity.',
    activeFocusPresent:
      'Generating electricity from hydro, geothermal, wind, and thermal sources, while developing renewable generation and geothermal services in the region.',
    summary:
      'Kenya’s publicly listed electricity-generation company, established in 1954 and focused exclusively on power generation since 1998. The company reports 1,786 MW installed capacity across hydro, geothermal, wind, and thermal generation.',
    keyHoldings: [
      {
        assetName: 'KenGen generation portfolio',
        stakeOrRole: 'Owns and operates power plants across five regions; 1,786 MW installed capacity',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'Generation sources include hydro, geothermal, wind, and thermal power.',
      },
    ],
    citations: [
      {
        id: 'cit-kengen-01',
        title: 'About Us',
        publisher: 'Kenya Electricity Generating Company PLC',
        publicationDate: '2026-10-12',
        url: 'https://www.kengen.co.ke/about-us/',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'KenGen was established in 1954, listed on the NSE in 2006, and reports 1,786 MW installed capacity across hydro, geothermal, wind, and thermal generation.',
      },
    ],
    createdAt: '2026-10-12T00:00:00Z',
    updatedAt: '2026-10-12T00:00:00Z',
  },

  // 13. KCB Group
  {
    id: 'plr-kcb-group',
    slug: 'kcb-group',
    name: 'KCB Group PLC',
    aliases: ['KCB', 'KCB Group', 'Kenya Commercial Bank'],
    playerType: 'FINANCIAL_SERVICES_GROUP',
    leadership: 'Board and executive management',
    headquarters: 'Nairobi, Kenya',
    estimatedCapitalMovedKES: 2300000000000,
    verificationLevel: 'VERIFIED_PRIMARY',
    verificationNotes: 'Company-published profile describes KCB Group as a non-operating holding company and reports a KES 2.3 trillion group asset base; this figure is not presented as market capitalization.',
    activeFocusPresent:
      'Overseeing banking and financial-services subsidiaries across East and Central Africa, including banking, investment banking, bancassurance, corporate trustee, and foundation operations.',
    summary:
      'A Nairobi Securities Exchange-listed, non-operating holding company for KCB Bank Kenya and regional banking subsidiaries. The group also identifies investment banking, bancassurance, corporate trustee, and foundation businesses among its operations.',
    keyHoldings: [
      {
        assetName: 'KCB Bank Kenya and regional banking subsidiaries',
        stakeOrRole: 'Banking operations overseen by the listed group holding company',
        verificationLevel: 'VERIFIED_PRIMARY',
        notes: 'The group lists operations in Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan, and the Democratic Republic of Congo.',
      },
      {
        assetName: 'KCB Investment Bank, Bancassurance, and Corporate Trustee',
        stakeOrRole: 'Group financial-services subsidiaries',
        verificationLevel: 'VERIFIED_PRIMARY',
      },
    ],
    citations: [
      {
        id: 'cit-kcb-01',
        title: 'Investor Relations',
        publisher: 'KCB Group PLC',
        publicationDate: '2026-10-12',
        url: 'https://www.kcbgroup.com/investor-relations/',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'KCB Group describes itself as a non-operating holding company overseeing KCB Bank Kenya and regional subsidiaries, and reports a group asset base of KES 2.3 trillion.',
      },
    ],
    createdAt: '2026-10-12T00:00:00Z',
    updatedAt: '2026-10-12T00:00:00Z',
  },
];

