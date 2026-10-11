import { Asset } from '@salamanda/shared-types';

export const ACTIVE_BENCHMARKS: Asset[] = [
  // 1. Safaricom PLC
  {
    id: 'ast-safaricom-plc',
    slug: 'safaricom-plc',
    name: 'Safaricom PLC',
    legalName: 'Safaricom Public Limited Company',
    assetClass: 'ENTERPRISE_ACTIVE',
    sector: 'TECHNOLOGY_FINTECH',
    subsector: 'Telecommunications & Mobile Financial Infrastructure',
    status: 'ACTIVE',
    county: 'Nairobi',
    headquarters: 'Safaricom House, Waiyaki Way, Nairobi',
    establishedYear: 1993,
    currentValuationKES: 680000000000, // ~KES 680 Billion market cap
    peakValuationKES: 1700000000000,   // ~KES 1.7 Trillion all-time peak market cap (2021)
    debtExposureKES: 75000000000,      // Prudent long-term leverage for Ethiopia rollout
    summary:
      'The crown jewel of corporate East Africa and the primary pillar of Kenya’s digital economy. Safaricom accounts for roughly 45% of total trading volume on the Nairobi Securities Exchange. Its M-Pesa platform processes over KES 35 Trillion annually in mobile transactions (equivalent to more than 2x Kenya’s Gross Domestic Product), functioning effectively as a national financial utility and critical sovereign economic infrastructure.',
    timeline: [
      {
        id: 'tm-saf-01',
        assetId: 'ast-safaricom-plc',
        date: '2007-03-06',
        title: 'Commercial Launch of M-Pesa',
        summary: 'World’s first mass-scale mobile money transfer service launched in partnership with Vodafone.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-saf-tm-1',
          title: 'CBK Approval of M-Pesa Mobile Payment Service',
          publisher: 'Central Bank of Kenya',
          publicationDate: '2007-03-06',
          url: 'https://www.centralbank.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Authorization of Safaricom M-Pesa electronic funds transfer platform.',
        },
      },
      {
        id: 'tm-saf-02',
        assetId: 'ast-safaricom-plc',
        date: '2008-06-09',
        title: 'Historic IPO Listing on the Nairobi Securities Exchange',
        summary: 'Government of Kenya sells 25% stake in East Africa’s largest public offering, bringing over 800,000 first-time retail investors to the bourse.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-saf-tm-2',
          title: 'Safaricom IPO Allotment and Listing Bulletin',
          publisher: 'Capital Markets Authority',
          publicationDate: '2008-06-09',
          url: 'https://cma.or.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Listing of 40 billion ordinary shares at KES 5.00 per share.',
        },
      },
      {
        id: 'tm-saf-03',
        assetId: 'ast-safaricom-plc',
        date: '2021-08-15',
        title: 'All-Time Peak Valuation (KES 1.7 Trillion Market Cap)',
        summary: 'Share price hits all-time high of KES 44.50 amid surging digital payments and winning the telecommunications license in Ethiopia.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-saf-tm-3',
          title: 'NSE Market Report August 2021',
          publisher: 'Nairobi Securities Exchange',
          publicationDate: '2021-08-15',
          url: 'https://www.nse.co.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Safaricom PLC market capitalization exceeds KES 1.7 Trillion, representing 60% of total bourse capitalization.',
        },
      },
    ],
    valuationHistory: [
      { date: '2008-06-01', valueKES: 200000000000, metricType: 'MARKET_CAP', citationTitle: 'IPO listing valuation at KES 5.00 per share' },
      { date: '2021-08-01', valueKES: 1700000000000, metricType: 'MARKET_CAP', citationTitle: 'Peak market cap at KES 44.50 per share' },
      { date: '2024-09-01', valueKES: 680000000000, metricType: 'MARKET_CAP', citationTitle: 'Current trading valuation at KES 17.00 per share' },
    ],
    primaryCitations: [
      {
        id: 'cit-saf-pc-1',
        title: 'Safaricom PLC Audited Annual Report & Financial Statements 2024',
        publisher: 'Safaricom PLC',
        publicationDate: '2024-05-09',
        url: 'https://www.safaricom.co.ke/investor-relations',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited revenues of KES 335.3 Billion and M-Pesa contribution to net earnings.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 2. Equity Group Holdings PLC
  {
    id: 'ast-equity-group',
    slug: 'equity-group-holdings',
    name: 'Equity Group Holdings PLC',
    legalName: 'Equity Group Holdings Public Limited Company',
    assetClass: 'ENTERPRISE_ACTIVE',
    sector: 'FINANCIAL_SERVICES',
    subsector: 'Pan-African Banking, Inclusive SME Credit & Digital Finance',
    status: 'ACTIVE',
    county: 'Nairobi',
    headquarters: 'Equity Centre, Hospital Road, Upper Hill, Nairobi',
    establishedYear: 1984,
    currentValuationKES: 165000000000, // ~KES 165 Billion market cap on NSE
    peakValuationKES: 205000000000,   // ~KES 205 Billion all-time peak market cap
    debtExposureKES: 88000000000,     // Tier 2 debt & development finance lines (IFC, EIB)
    summary:
      'The defining success story of African retail financial democratization. Founded as Equity Building Society in Murang’a in 1984, the lender faced insolvency in 1993 before being revitalized by Dr. James Mwangi. Today, Equity is East and Central Africa’s most profitable banking conglomerate with over KES 1.6 Trillion in total balance sheet assets, operating across Kenya, DRC, Uganda, Rwanda, Tanzania, and South Sudan.',
    timeline: [
      {
        id: 'tm-eq-01',
        assetId: 'ast-equity-group',
        date: '2006-08-07',
        title: 'Listing by Introduction on the Nairobi Securities Exchange',
        summary: 'Equity Bank lists ordinary shares on the NSE, initiating a historic decade of compounding shareholder value.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-eq-tm-1',
          title: 'CMA Listing Bulletin: Equity Bank Listing by Introduction',
          publisher: 'Capital Markets Authority',
          publicationDate: '2006-08-07',
          url: 'https://cma.or.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Admission to listing on the Alternative Investment Market Segment of the NSE.',
        },
      },
      {
        id: 'tm-eq-02',
        assetId: 'ast-equity-group',
        date: '2020-08-11',
        title: 'Acquisition of Banque Commerciale du Congo (BCDC) in DRC',
        summary: 'Merges BCDC with Equity Bank Congo to form Equity BCDC, establishing dominance in the resource-rich DR Congo.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-eq-tm-2',
          title: 'Equity Group Holdings DRC Expansion Circular',
          publisher: 'Nairobi Securities Exchange',
          publicationDate: '2020-08-11',
          url: 'https://www.nse.co.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Completion of 66.53% share capital acquisition of BCDC for $95 Million.',
        },
      },
    ],
    valuationHistory: [
      { date: '2006-08-01', valueKES: 6300000000, metricType: 'MARKET_CAP', citationTitle: 'Initial listing market valuation on the NSE' },
      { date: '2021-12-01', valueKES: 205000000000, metricType: 'MARKET_CAP', citationTitle: 'Peak market cap at KES 54.00 per share' },
      { date: '2024-09-01', valueKES: 165000000000, metricType: 'MARKET_CAP', citationTitle: 'Current trading valuation on the NSE' },
    ],
    primaryCitations: [
      {
        id: 'cit-eq-pc-1',
        title: 'Equity Group Holdings Audited Integrated Report 2023-2024',
        publisher: 'Equity Group Holdings PLC',
        publicationDate: '2024-03-27',
        url: 'https://equitygroupholdings.com/investor-relations',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Audited assets of KES 1.69 Trillion and profit after tax of KES 43.7 Billion.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 3. Naivas Supermarkets Limited
  {
    id: 'ast-naivas-supermarkets',
    slug: 'naivas-supermarkets',
    name: 'Naivas Supermarkets Limited',
    legalName: 'Naivas Supermarkets Limited',
    assetClass: 'ENTERPRISE_ACTIVE',
    sector: 'RETAIL_FMCG',
    subsector: 'Organized Supermarkets, Hypermarkets & Food Retail',
    status: 'ACTIVE',
    county: 'Nairobi',
    headquarters: 'Naivas Central Office, Sameer Business Park, Nairobi',
    establishedYear: 1990,
    currentValuationKES: 45000000000, // ~KES 45 Billion valuation during IBL stake purchase
    peakValuationKES: 45000000000,
    debtExposureKES: 6200000000,      // Prudent commercial bank overdrafts & vendor facilities
    summary:
      'Kenya’s undisputed retail market leader with over 105 supermarket outlets across 24 counties. Founded in Rongai, Nakuru by Peter Mukuha Kago as Rongai Self Service Store, Naivas avoided the catastrophic family governance and debt traps that destroyed Nakumatt and Tuskys by maintaining strict cash accounting, timely supplier settlement, and selling non-controlling equity to international private equity consortia (Amethis, DEG, Proparco, and Mauritian conglomerate IBL Group).',
    timeline: [
      {
        id: 'tm-naiv-01',
        assetId: 'ast-naivas-supermarkets',
        date: '2020-02-15',
        title: 'Amethis Consortium Acquires 30% Strategic Minority Stake',
        summary: 'French impact investor Amethis injects KES 6B to professionalize board and finance expansion into Nakumatt voids.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-naiv-tm-1',
          title: 'Competition Authority of Kenya Approval of Amethis-Naivas Deal',
          publisher: 'Competition Authority of Kenya',
          publicationDate: '2020-02-15',
          url: 'https://cak.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Authorization of the acquisition of 30% minority interest in Naivas Limited by Amethis Retail.',
        },
      },
      {
        id: 'tm-naiv-02',
        assetId: 'ast-naivas-supermarkets',
        date: '2022-08-10',
        title: 'IBL Group Consortium Acquires 40% Stake for $100M',
        summary: 'Mauritian conglomerate IBL, Proparco, and DEG value the Kenyan retail giant at over $250M (KES 30B+).',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-naiv-tm-2',
          title: 'IBL Group Public Acquisition Communiqué',
          publisher: 'Stock Exchange of Mauritius (SEM) & Business Daily',
          publicationDate: '2022-08-12',
          url: 'https://www.iblgroup.com',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'IBL consortium acquires 40% equity stake in Naivas International.',
        },
      },
    ],
    valuationHistory: [
      { date: '2020-02-01', valueKES: 20000000000, metricType: 'PEAK_VALUATION', citationTitle: 'Implied valuation on Amethis entry' },
      { date: '2022-08-01', valueKES: 37500000000, metricType: 'PEAK_VALUATION', citationTitle: 'IBL Group consortium transaction valuation' },
      { date: '2024-06-01', valueKES: 45000000000, metricType: 'BOOK_VALUE', citationTitle: 'Estimated group valuation after crossing 100-branch milestone' },
    ],
    primaryCitations: [
      {
        id: 'cit-naiv-pc-1',
        title: 'Competition Authority of Kenya Merger Determination No. 12 of 2022',
        publisher: 'Competition Authority of Kenya',
        publicationDate: '2022-08-10',
        url: 'https://cak.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Determination on acquisition of controlling stake in Naivas International by Mambo Retail (IBL/Proparco/DEG).',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  // 4. Bamburi Cement PLC
  {
    id: 'ast-bamburi-cement',
    slug: 'bamburi-cement',
    name: 'Bamburi Cement PLC',
    legalName: 'Bamburi Cement Public Limited Company',
    assetClass: 'ENTERPRISE_ACTIVE',
    sector: 'MANUFACTURING',
    subsector: 'Heavy Industrial Building Materials & Clinker Mining',
    status: 'ACTIVE',
    county: 'Mombasa',
    headquarters: 'Bamburi Works, Malindi Road, Mombasa / Nairobi Grinding Plant',
    establishedYear: 1951,
    currentValuationKES: 25400000000, // KES 25.4 Billion valuation based on takeover bid
    peakValuationKES: 78000000000,    // Peak market cap reached in 2013 (KES 215 per share)
    debtExposureKES: 3800000000,      // Low leverage balance sheet
    summary:
      'Kenya’s oldest and largest cement producer, founded in 1951 by Felix Mandl. Operating massive limestone quarries in Mombasa and grinding facilities in Athi River. Formerly controlled by global building materials giant Holcim (65%). In 2024, Bamburi became the prize in a historic corporate bidding war between Tanzanian conglomerate Amsons Group ($180M offer) and Kenyan industrialist Benson Ndeta’s Savannah Clinker (KES 25.4B counter-offer), highlighting massive regional appetite for strategic industrial capacity.',
    timeline: [
      {
        id: 'tm-bam-01',
        assetId: 'ast-bamburi-cement',
        date: '2023-11-20',
        title: 'Divestment of Uganda Hima Cement Subsidiary for $120M',
        summary: 'Bamburi sells Hima Cement Uganda to Sarrai Group and Rwenzori for $120M to focus capital on Kenyan market.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-bam-tm-1',
          title: 'CMA Regulatory Disclosure: Disposal of Hima Cement Limited',
          publisher: 'Capital Markets Authority',
          publicationDate: '2023-11-20',
          url: 'https://cma.or.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Agreement for the disposal of 100% shareholding in Hima Cement Limited by Bamburi Cement PLC.',
        },
      },
      {
        id: 'tm-bam-02',
        assetId: 'ast-bamburi-cement',
        date: '2024-07-10',
        title: 'Amsons Group Floats $180M Takeover Offer',
        summary: 'Tanzania’s Amsons Industries issues tender offer of KES 65 per share to acquire Holcim’s 65% majority stake.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-bam-tm-2',
          title: 'NSE Notice of Intention to make a Takeover Offer for Bamburi Cement',
          publisher: 'Nairobi Securities Exchange',
          publicationDate: '2024-07-10',
          url: 'https://www.nse.co.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Intention by Amsons Industries (K) Limited to acquire up to 100% of Bamburi Cement PLC.',
        },
      },
      {
        id: 'tm-bam-03',
        assetId: 'ast-bamburi-cement',
        date: '2024-08-27',
        title: 'Savannah Clinker Counters with KES 25.4B Rival Bid',
        summary: 'Kenyan investor Benson Ndeta launches competing offer of KES 70 per share, triggering NSE takeover battle.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-bam-tm-3',
          title: 'CMA Competing Takeover Offer Announcement: Savannah Clinker',
          publisher: 'Capital Markets Authority',
          publicationDate: '2024-08-28',
          url: 'https://cma.or.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Competing takeover offer by Savannah Clinker Limited at KES 70.00 per share.',
        },
      },
    ],
    valuationHistory: [
      { date: '2013-05-01', valueKES: 78000000000, metricType: 'MARKET_CAP', citationTitle: 'Peak market cap on the NSE at KES 215 per share' },
      { date: '2024-07-01', valueKES: 23600000000, metricType: 'PEAK_VALUATION', citationTitle: 'Amsons takeover offer valuation at KES 65 per share' },
      { date: '2024-08-28', valueKES: 25400000000, metricType: 'PEAK_VALUATION', citationTitle: 'Savannah Clinker competing takeover bid at KES 70 per share' },
    ],
    primaryCitations: [
      {
        id: 'cit-bam-pc-1',
        title: 'CMA Takeover Offer Documents for Bamburi Cement PLC',
        publisher: 'Capital Markets Authority',
        publicationDate: '2024-08-28',
        url: 'https://cma.or.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Statutory disclosures regarding rival bids for Bamburi Cement.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },
];
