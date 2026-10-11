import { Asset, MacroMetrics, AutopsyCauseCategory } from '@salamanda/shared-types';
import { CORPORATE_AUTOPSIES } from './seed/corporate-autopsies';
import { ACTIVE_BENCHMARKS } from './seed/active-benchmarks';
import { LAND_CORRIDORS } from './seed/land-corridors';
import { SOVEREIGN_INFRASTRUCTURE } from './seed/sovereign-infrastructure';

// Additional strategic historic anchors: Mumias, Nakumatt, Imperial Bank, ARM Cement, Pan Paper
const HISTORIC_CORE_ASSETS: Asset[] = [
  {
    id: 'ast-mumias-sugar',
    slug: 'mumias-sugar',
    name: 'Mumias Sugar Company PLC',
    legalName: 'Mumias Sugar Company Public Limited Company',
    assetClass: 'ENTERPRISE_DISTRESSED',
    sector: 'AGRIBUSINESS_FOOD',
    subsector: 'Sugar Milling & Power Cogeneration',
    status: 'UNDER_RECEIVERSHIP',
    county: 'Kakamega',
    headquarters: 'Mumias Complex, Kakamega County',
    establishedYear: 1971,
    currentValuationKES: 15000000000,
    peakValuationKES: 45000000000,
    debtExposureKES: 29000000000,
    summary:
      'Formerly Kenya’s undisputed sugar titan producing over 250,000 metric tonnes annually (over 60% of domestic market supply) and operating a 38MW electricity co-generation plant. Placed under receivership by KCB Group in September 2019 following catastrophic mismanagement, state bailout looting, cane poaching by predatory private millers, and crippling farmer arrears.',
    autopsy: {
      id: 'aut-mumias-01',
      assetId: 'ast-mumias-sugar',
      primaryCause: 'GOVERNANCE_FRAUD',
      contributingFactors: ['POLITICAL_INTERFERENCE', 'SUPPLY_CHAIN_COLLAPSE', 'DEBT_OVERLEVERAGE', 'TECHNOLOGY_OBSOLESCENCE'],
      peakValuationKES: 45000000000,
      debtAtCollapseKES: 29000000000,
      jobsImpacted: 18000,
      executiveSummary:
        'Mumias was decimated by widespread boardroom plunder, artificial sugar import syndicates that flooded the domestic market with cheap duty-free sugar, and chronic failure to pay over 50,000 cane farmers who subsequently uprooted cane or sold to unlicensed competitor weighbridges.',
      forensicAnalysis:
        'Between 2014 and 2018, the Government of Kenya injected over KES 3.1 Billion in taxpayer bailouts to rescue the miller. Forensic audits by KPMG revealed that funds were diverted to settle fictitious supplier invoices and parallel import contracts. The nucleus estate (over 4,000 hectares) fell dormant. In September 2019, secured debenture holder KCB Group appointed PVR Rao as receiver-manager. Subsequent attempts to lease the factory sparked endless legal warfare between Sarrai Group, West Kenya Sugar, and Devki Group.',
      hindrancesAndObstacles: [
        'Over KES 12 Billion owed directly to outgrower farmers, destroying agricultural supplier trust',
        'Fierce cane poaching by neighboring private sugar mills lacking their own nucleus estates',
        'Incessant litigation (over 25 separate High Court and Court of Appeal suits) preventing clean leasehold or recapitalization',
        'Dilapidated 1970s diffuser machinery requiring an estimated KES 6B in complete overhaul capital',
      ],
      revitalizationFeasibility: 'HIGH',
      revitalizationNarrative:
        'Kenya consumes ~1,000,000 metric tonnes of sugar annually against local production of ~700,000 MT. If the legal deadlock is severed and outgrower prompt payment contracts are guaranteed via escrow, Mumias holds immense strategic revitalization value.',
      citations: [
        {
          id: 'cit-mum-01',
          title: 'KCB Group Receivership Notice over Mumias Sugar Company',
          publisher: 'Kenya Gazette Vol. CXXI No. 128',
          publicationDate: '2019-09-27',
          url: 'https://kenyalaw.org/kenya_gazette',
          tier: 'GAZETTE_OFFICIAL',
          referenceNumber: 'Gazette Notice No. 9130',
          keyExcerpt: 'Notice is hereby given that KCB Bank Kenya Limited has appointed Ponangipalli Venkata Ramana Rao as Receiver and Manager of Mumias Sugar Company Limited under powers contained in debentures.',
        },
        {
          id: 'cit-mum-02',
          title: 'High Court Insolvency Cause No. E004 of 2019 (Mumias Sugar Receivership)',
          publisher: 'Kenya Law Reports (eKLR)',
          publicationDate: '2022-04-14',
          url: 'https://kenyalaw.org/caselaw/cases/view/230154/',
          tier: 'COURT_RULING',
          referenceNumber: '[2022] eKLR',
          keyExcerpt: 'Ruling setting aside the 20-year lease awarded to Sarrai Group on grounds of lack of public procurement transparency and creditor exclusion.',
        },
      ],
    },
    timeline: [
      {
        id: 'tm-mum-01',
        assetId: 'ast-mumias-sugar',
        date: '2001-11-15',
        title: 'Initial Public Offering (NSE Listing)',
        summary: 'Government of Kenya divests partial stake in heavily oversubscribed IPO on the Nairobi Securities Exchange.',
        impact: 'POSITIVE',
        citation: {
          id: 'cit-mum-tm-1',
          title: 'CMA Mumias IPO Prospectus and Listing Bulletin',
          publisher: 'Capital Markets Authority Kenya',
          publicationDate: '2001-11-15',
          url: 'https://cma.or.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Listing of 510 million ordinary shares of Mumias Sugar Company PLC on the NSE.',
        },
      },
      {
        id: 'tm-mum-02',
        assetId: 'ast-mumias-sugar',
        date: '2019-09-24',
        title: 'KCB Appoints Receiver-Manager (Trading Suspended)',
        summary: 'KCB Bank Kenya enters factory gates, places company under administration, and NSE suspends Mumias shares.',
        impact: 'CRITICAL_FAILURE',
        citation: {
          id: 'cit-mum-tm-2',
          title: 'NSE Suspension of Mumias Sugar Shares',
          publisher: 'Nairobi Securities Exchange',
          publicationDate: '2019-09-24',
          url: 'https://www.nse.co.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Trading of Mumias Sugar Company PLC shares suspended following appointment of receiver-manager.',
        },
      },
    ],
    valuationHistory: [
      { date: '2006-12-01', valueKES: 45000000000, metricType: 'MARKET_CAP', citationTitle: 'Peak valuation when share price traded above KES 60 per share' },
      { date: '2019-09-01', valueKES: 29000000000, metricType: 'OUTSTANDING_DEBT', citationTitle: 'Audited creditor claims submitted to Receiver Manager PVR Rao' },
      { date: '2023-01-01', valueKES: 15000000000, metricType: 'BOOK_VALUE', citationTitle: 'Fixed physical assets including 4,000ha land and power co-generation equipment' },
    ],
    primaryCitations: [
      {
        id: 'cit-mum-pc-1',
        title: 'Kenya Gazette Notice No. 9130 - Appointment of Receiver Manager',
        publisher: 'Government Printer',
        publicationDate: '2019-09-27',
        url: 'https://kenyalaw.org',
        tier: 'GAZETTE_OFFICIAL',
        keyExcerpt: 'Appointment of PVR Rao as receiver manager under KCB debentures.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  {
    id: 'ast-nakumatt-holdings',
    slug: 'nakumatt-holdings',
    name: 'Nakumatt Holdings Limited',
    legalName: 'Nakumatt Holdings Limited',
    assetClass: 'ENTERPRISE_COLLAPSED',
    sector: 'RETAIL_FMCG',
    subsector: 'Supermarkets & Hypermarket Retail',
    status: 'LIQUIDATED',
    county: 'Nairobi',
    headquarters: 'Nakumatt Mega, Uhuru Highway, Nairobi',
    establishedYear: 1987,
    defunctYear: 2020,
    currentValuationKES: 0,
    peakValuationKES: 40000000000,
    debtExposureKES: 38000000000,
    summary:
      'The undisputed king of East African retail with its iconic slogan "You Need It, We’ve Got It". At its zenith, Nakumatt operated 65 hypermarkets across Kenya, Uganda, Tanzania, and Rwanda, generating over KES 52 Billion in annual revenue. In January 2020, creditors voted to dissolve the chain after an unprecedented debt spiral left KES 38 Billion in unpaid bank loans, commercial paper, and supplier invoices.',
    autopsy: {
      id: 'aut-naku-01',
      assetId: 'ast-nakumatt-holdings',
      primaryCause: 'DEBT_OVERLEVERAGE',
      contributingFactors: ['GOVERNANCE_FRAUD', 'MARKET_DEMAND_SHIFT', 'POLITICAL_INTERFERENCE'],
      peakValuationKES: 40000000000,
      debtAtCollapseKES: 38000000000,
      jobsImpacted: 7000,
      executiveSummary:
        'Nakumatt collapsed under an unsustainable mountain of short-term debt utilized to fund long-term branch expansion across 4 countries. Behind a glossy facade of full shelves, the business operated as an informal credit pyramid, deferring supplier payments for 180 to 360 days while family owners diverted working capital into speculative property holdings.',
      forensicAnalysis:
        'The Atul Shah family maintained tight, opaque governance without independent board oversight. When local suppliers refused further deliveries in 2017 without cash on delivery, shelves across anchor mall locations emptied simultaneously. The High Court approved administration in 2018 appointing Peter Kahi (PKF). However, asset liquidation only realized KES 422 Million against KES 38 Billion in claims (a recovery rate of barely 1.1 cents on the dollar for unsecured suppliers).',
      hindrancesAndObstacles: [
        'Unsecured supplier debt exceeding KES 18 Billion causing systemic shockwaves across Kenyan manufacturing',
        'Commercial banks holding competing debentures over fixed and floating assets',
        'Leasehold litigation and aggressive landlord evictions (Knight Frank, NSSF) preventing orderly branch turnaround',
        'Rapid market capture by international hypermarket entrants (Carrefour) and local discounters (Quickmart, Naivas)',
      ],
      revitalizationFeasibility: 'IMPOSSIBLE',
      revitalizationNarrative:
        'The brand name was permanently destroyed by supplier ruin. Competitors Naivas, Quickmart, and Carrefour absorbed its prime real estate footprint completely.',
      citations: [
        {
          id: 'cit-nak-01',
          title: 'High Court Insolvency Petition No. 20 of 2017 (In re Nakumatt Holdings Ltd)',
          publisher: 'Kenya Law Reports (eKLR)',
          publicationDate: '2018-01-22',
          url: 'https://kenyalaw.org/caselaw/cases/view/147610/',
          tier: 'COURT_RULING',
          referenceNumber: '[2018] eKLR',
          keyExcerpt: 'Order placing Nakumatt Holdings Limited under administration pursuant to Section 563 of the Insolvency Act 2015 and appointing Peter Obondo Kahi as Administrator.',
        },
      ],
    },
    timeline: [
      {
        id: 'tm-nak-01',
        assetId: 'ast-nakumatt-holdings',
        date: '2020-01-07',
        title: 'Formal Liquidation & Dissolution Order',
        summary: 'Creditors vote overwhelmingly to terminate administration and liquidate remaining equipment.',
        impact: 'CRITICAL_FAILURE',
        citation: {
          id: 'cit-nak-tm-3',
          title: 'Kenya Gazette Notice No. 340 - Liquidation of Nakumatt Holdings',
          publisher: 'Kenya Gazette Vol. CXXII No. 5',
          publicationDate: '2020-01-17',
          url: 'https://kenyalaw.org/kenya_gazette',
          tier: 'GAZETTE_OFFICIAL',
          keyExcerpt: 'Creditors resolution to liquidate Nakumatt Holdings Limited under Peter Obondo Kahi.',
        },
      },
    ],
    valuationHistory: [
      { date: '2014-01-01', valueKES: 40000000000, metricType: 'PEAK_VALUATION', citationTitle: 'Valuation during talks with South Africa’s Massmart' },
      { date: '2018-01-01', valueKES: 38000000000, metricType: 'OUTSTANDING_DEBT', citationTitle: 'Audited claims verified by PKF Administration' },
      { date: '2020-01-01', valueKES: 422000000, metricType: 'AUCTION_RESERVE', citationTitle: 'Total proceeds realized from auction of residual store fixtures' },
    ],
    primaryCitations: [
      {
        id: 'cit-nak-pc-1',
        title: 'Insolvency Petition No. 20 of 2017',
        publisher: 'High Court Commercial Division',
        publicationDate: '2018-01-22',
        url: 'https://kenyalaw.org',
        tier: 'COURT_RULING',
        keyExcerpt: 'Court order on administration of Nakumatt Holdings.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  {
    id: 'ast-imperial-bank',
    slug: 'imperial-bank',
    name: 'Imperial Bank Kenya Limited',
    legalName: 'Imperial Bank Limited (In Receivership)',
    assetClass: 'ENTERPRISE_COLLAPSED',
    sector: 'FINANCIAL_SERVICES',
    subsector: 'Commercial Banking & Corporate Credit',
    status: 'LIQUIDATED',
    county: 'Nairobi',
    headquarters: 'Imperial Court, Westlands, Nairobi',
    establishedYear: 1992,
    defunctYear: 2015,
    currentValuationKES: 0,
    peakValuationKES: 25000000000,
    debtExposureKES: 38000000000,
    summary:
      'Mid-tier commercial bank catering heavily to wealthy Asian-Kenyan business families and institutional depositors. On October 13, 2015—mere weeks after floating a KES 2 Billion retail corporate bond approved by the Capital Markets Authority—the Central Bank of Kenya shut down the bank after uncovering a 13-year parallel software embezzlement conspiracy that concealed KES 38 Billion in fraudulent off-balance-sheet loans.',
    autopsy: {
      id: 'aut-imp-01',
      assetId: 'ast-imperial-bank',
      primaryCause: 'GOVERNANCE_FRAUD',
      contributingFactors: ['REGULATORY_TAX_POLICY', 'POLITICAL_INTERFERENCE', 'TECHNOLOGY_OBSOLESCENCE'],
      peakValuationKES: 25000000000,
      debtAtCollapseKES: 38000000000,
      jobsImpacted: 850,
      executiveSummary:
        'A textbook corporate governance catastrophe in Kenyan banking history. The managing director operated a clandestine second core-banking ledger (using modified software routines) that disbursed depositors’ money to 8 shell companies for over a decade with the complicity of senior auditors and Central Bank inspection officers.',
      forensicAnalysis:
        'Following the sudden death of founding Managing Director Abdulmalek Janmohamed in September 2015, whistleblowing executives discovered that Janmohamed had maintained shadow loans amounting to over KES 38 Billion. Central Bank Governor Patrick Njoroge placed the lender under KDIC receivership on October 13, 2015. In 2020, KCB Group completed the carve-out acquisition of selected assets and verified deposit liabilities, leaving the residual shell in liquidation.',
      hindrancesAndObstacles: [
        'Prolonged legal obstruction by shareholder families resisting asset tracing and forensic clawbacks',
        'Compromised external audits: PKF Kenya was investigated for failing to identify shadow ledger transactions for 13 consecutive audits',
        'Frozen working capital of thousands of SME depositors triggering secondary corporate insolvencies across Nairobi and Mombasa',
      ],
      revitalizationFeasibility: 'IMPOSSIBLE',
      revitalizationNarrative:
        'Liquidated. Performing assets and 50% deposit tranches were successfully transferred to KCB Bank Kenya under KDIC resolution frameworks.',
      citations: [
        {
          id: 'cit-imp-01',
          title: 'CBK Press Release: Appointment of KDIC as Receiver of Imperial Bank Limited',
          publisher: 'Central Bank of Kenya',
          publicationDate: '2015-10-13',
          url: 'https://www.centralbank.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'The Central Bank of Kenya has appointed the Kenya Deposit Insurance Corporation (KDIC) as receiver for Imperial Bank Limited under Section 43(1) of the Kenya Deposit Insurance Act, 2012.',
        },
      ],
    },
    timeline: [
      {
        id: 'tm-imp-02',
        assetId: 'ast-imperial-bank',
        date: '2015-10-13',
        title: 'Central Bank Places Imperial Bank in Receivership',
        summary: 'CBK freezes all bank accounts and halts clearing house operations after board admits discovery of parallel books.',
        impact: 'CRITICAL_FAILURE',
        citation: {
          id: 'cit-imp-tm-2',
          title: 'CBK Statutory Receivership Notice',
          publisher: 'Central Bank of Kenya',
          publicationDate: '2015-10-13',
          url: 'https://www.centralbank.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Appointment of KDIC as receiver pursuant to Section 43(1) of the Kenya Deposit Insurance Act.',
        },
      },
    ],
    valuationHistory: [
      { date: '2015-06-01', valueKES: 25000000000, metricType: 'PEAK_VALUATION', citationTitle: 'Reported book equity before discovery of fraud' },
      { date: '2015-10-01', valueKES: 38000000000, metricType: 'OUTSTANDING_DEBT', citationTitle: 'CBK forensic audit total unbacked off-balance-sheet exposure' },
    ],
    primaryCitations: [
      {
        id: 'cit-imp-pc-1',
        title: 'CBK Official Press Statement Oct 2015',
        publisher: 'Central Bank of Kenya',
        publicationDate: '2015-10-13',
        url: 'https://www.centralbank.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Notice of receivership and forensic investigation.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  {
    id: 'ast-arm-cement',
    slug: 'arm-cement',
    name: 'ARM Cement PLC (Athi River Mining)',
    legalName: 'ARM Cement Public Limited Company',
    assetClass: 'ENTERPRISE_COLLAPSED',
    sector: 'MANUFACTURING',
    subsector: 'Building Materials & Heavy Industrial Cement',
    status: 'LIQUIDATED',
    county: 'Machakos',
    headquarters: 'Athi River Plant, Machakos County',
    establishedYear: 1974,
    defunctYear: 2018,
    currentValuationKES: 0,
    peakValuationKES: 32000000000,
    debtExposureKES: 14000000000,
    summary:
      'Founded by the Paunrana family, ARM was Kenya’s premier home-grown industrial success story, expanding from agricultural lime mining in 1974 to a multi-billion-shilling cement manufacturing powerhouse. In August 2018, ARM collapsed into administration under KES 14 Billion debt after an aggressive $300 Million expansion into Tanzania (Maweni Limestone) met coal supply halts and predatory pricing from Dangote Cement.',
    autopsy: {
      id: 'aut-arm-01',
      assetId: 'ast-arm-cement',
      primaryCause: 'DEBT_OVERLEVERAGE',
      contributingFactors: ['MARKET_DEMAND_SHIFT', 'POLITICAL_INTERFERENCE', 'SUPPLY_CHAIN_COLLAPSE'],
      peakValuationKES: 32000000000,
      debtAtCollapseKES: 14000000000,
      jobsImpacted: 3000,
      executiveSummary:
        'ARM gambled on massive dollar-denominated commercial debt to construct a mega clinker plant in Tanga, Tanzania. When Tanzania banned Kenyan coal and raw gypsum imports while Aliko Dangote opened a 3-million-tonne plant slashing cement prices by 40%, ARM’s Tanzanian subsidiary began hemorrhaging cash, dragging the solvent Kenyan parent company into liquidation.',
      forensicAnalysis:
        'PwC administrators took control in August 2018. In October 2019, the administrators sold ARM’s Kenyan manufacturing plants to billionaire Narendra Raval’s National Cement (Devki Group) for $50 Million (KES 5 Billion), a steep discount against historical replacement cost.',
      hindrancesAndObstacles: [
        'Aggressive pricing pressure from Dangote Cement across East Africa slashing margins',
        'Currency mismatch: Borrowing heavily in US Dollars while revenues were collected in depreciating local currency',
        'Trade protectionism on raw coal and clinker imports in Tanzania',
      ],
      revitalizationFeasibility: 'HIGH',
      revitalizationNarrative:
        'Physical assets successfully absorbed and upgraded by National Cement (Devki Group), restoring Athi River clinker operations.',
      citations: [
        {
          id: 'cit-arm-01',
          title: 'High Court Insolvency Petition No. 12 of 2018 (In re ARM Cement PLC)',
          publisher: 'Kenya Law Reports (eKLR)',
          publicationDate: '2018-08-17',
          url: 'https://kenyalaw.org',
          tier: 'COURT_RULING',
          referenceNumber: '[2018] eKLR',
          keyExcerpt: 'Order placing ARM Cement PLC under administration.',
        },
      ],
    },
    timeline: [
      {
        id: 'tm-arm-03',
        assetId: 'ast-arm-cement',
        date: '2018-08-17',
        title: 'PwC Appointed Administrators as Defaults Mount',
        summary: 'Lenders petition High Court to place ARM in administration; trading halted on NSE.',
        impact: 'CRITICAL_FAILURE',
        citation: {
          id: 'cit-arm-tm-3',
          title: 'Kenya Gazette Notice No. 8410 - ARM Administration',
          publisher: 'Kenya Gazette Vol. CXX No. 102',
          publicationDate: '2018-08-24',
          url: 'https://kenyalaw.org/kenya_gazette',
          tier: 'GAZETTE_OFFICIAL',
          keyExcerpt: 'Notice of appointment of Joint Administrators of ARM Cement PLC.',
        },
      },
    ],
    valuationHistory: [
      { date: '2014-03-01', valueKES: 32000000000, metricType: 'MARKET_CAP', citationTitle: 'Peak valuation on Nairobi Securities Exchange' },
      { date: '2018-08-01', valueKES: 14000000000, metricType: 'OUTSTANDING_DEBT', citationTitle: 'Total creditor liabilities audited by PwC' },
      { date: '2019-10-01', valueKES: 5000000000, metricType: 'AUCTION_RESERVE', citationTitle: 'Asset sale price to Devki National Cement' },
    ],
    primaryCitations: [
      {
        id: 'cit-arm-pc-1',
        title: 'High Court Insolvency Petition No. 12 of 2018',
        publisher: 'Kenya Law Reports (eKLR)',
        publicationDate: '2018-08-17',
        url: 'https://kenyalaw.org',
        tier: 'COURT_RULING',
        keyExcerpt: 'Court ruling placing ARM under administration.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },

  {
    id: 'ast-pan-paper-mills',
    slug: 'pan-paper-mills',
    name: 'Pan Paper Mills (Webuye) / Rai Group',
    legalName: 'Pan African Paper Mills (E.A.) Limited',
    assetClass: 'INDUSTRIAL_IDLE',
    sector: 'MANUFACTURING',
    subsector: 'Pulp & Industrial Paper Manufacturing',
    status: 'DISTRESSED',
    county: 'Bungoma',
    headquarters: 'Webuye Industrial Complex, Bungoma County',
    establishedYear: 1974,
    currentValuationKES: 3000000000,
    peakValuationKES: 18000000000,
    debtExposureKES: 8000000000,
    summary:
      'Once the crown jewel of heavy industrial manufacturing in East Africa and the primary economic engine of Webuye town. Collapsed in 2009 under KES 8 Billion debt to Kenya Power and commercial banks. Sold to Rai Group in 2016 for KES 900 Million, but operates today at barely 15% of historical design capacity.',
    autopsy: {
      id: 'aut-pan-01',
      assetId: 'ast-pan-paper-mills',
      primaryCause: 'TECHNOLOGY_OBSOLESCENCE',
      contributingFactors: ['POLITICAL_INTERFERENCE', 'REGULATORY_TAX_POLICY', 'SUPPLY_CHAIN_COLLAPSE'],
      peakValuationKES: 18000000000,
      debtAtCollapseKES: 8000000000,
      jobsImpacted: 6500,
      executiveSummary:
        'Pan Paper collapsed due to catastrophic industrial power tariffs, a ban on state forest harvesting which choked its pulpwood supply, and obsolete chemical recovery boilers that rendered local paper twice as expensive as cheap imports from India, China, and Egypt.',
      forensicAnalysis:
        'The factory’s power bill reached KES 100 Million per month in 2008 while Kenya Power disconnected supplies over KES 500M in unpaid arrears. In 2016, joint receivers (PwC) sold the factory assets to Tarlochan Ltd (Rai Group) for KES 900M. Despite promises to re-employ thousands, the pulp plant remains permanently shut down; the site only recycles imported wastepaper into brown packaging carton.',
      hindrancesAndObstacles: [
        'Total decommission of legacy chemical pulp production line due to strict modern environmental regulations',
        'Heavy industrial electricity tariffs in Kenya making energy-intensive pulping uncompetitive',
        'Obsolete machinery from the 1970s requiring an estimated KES 10B greenfield rebuild',
      ],
      revitalizationFeasibility: 'LOW',
      revitalizationNarrative:
        'Pulp manufacturing is unfeasible without sustainable commercial forestry concessions and subsidized green geothermal power. However, secondary wastepaper packaging remains viable.',
      citations: [
        {
          id: 'cit-pan-01',
          title: 'Report on the Revival of Pan Paper Mills',
          publisher: 'Parliament of Kenya Hansard',
          publicationDate: '2016-11-22',
          url: 'http://www.parliament.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Inquiry into the valuation of Pan Paper Mills assets and the sale to Tarlochan Limited for KES 900 Million.',
        },
      ],
    },
    timeline: [
      {
        id: 'tm-pan-02',
        assetId: 'ast-pan-paper-mills',
        date: '2009-02-18',
        title: 'Factory Gates Shut as Power is Cut',
        summary: 'Kenya Power cuts supply over unpaid electricity debts; management declares redundancy for 1,500 staff.',
        impact: 'CRITICAL_FAILURE',
        citation: {
          id: 'cit-pan-tm-2',
          title: 'Ministry of Industrialization Task Force Report',
          publisher: 'Government of Kenya',
          publicationDate: '2009-03-01',
          url: 'https://industrialization.go.ke',
          tier: 'REGULATORY_DISCLOSURE',
          keyExcerpt: 'Audit of KES 8 Billion liabilities owed to Kenya Power and lenders.',
        },
      },
    ],
    valuationHistory: [
      { date: '1995-01-01', valueKES: 18000000000, metricType: 'PEAK_VALUATION', citationTitle: 'Replacement book value of machinery and turbines' },
      { date: '2009-02-01', valueKES: 8000000000, metricType: 'OUTSTANDING_DEBT', citationTitle: 'Total verified institutional debt across lenders' },
      { date: '2016-04-01', valueKES: 900000000, metricType: 'AUCTION_RESERVE', citationTitle: 'Distressed purchase price paid by Rai Group affiliate' },
    ],
    primaryCitations: [
      {
        id: 'cit-pan-pc-1',
        title: 'National Assembly Hansard on Pan Paper Sale',
        publisher: 'Parliament of Kenya',
        publicationDate: '2016-11-22',
        url: 'http://www.parliament.go.ke',
        tier: 'REGULATORY_DISCLOSURE',
        keyExcerpt: 'Parliamentary probe on disposal of strategic state-backed asset.',
      },
    ],
    createdAt: '2026-10-11T00:00:00Z',
    updatedAt: '2026-10-11T00:00:00Z',
  },
];

// Combine all sectors and categories
export const INITIAL_ASSETS: Asset[] = [
  ...CORPORATE_AUTOPSIES,
  ...HISTORIC_CORE_ASSETS,
  ...ACTIVE_BENCHMARKS,
  ...LAND_CORRIDORS,
  ...SOVEREIGN_INFRASTRUCTURE,
];

// Dynamically compute exact macro metrics and failure cause distributions
const causeCounts: Record<string, number> = {};
INITIAL_ASSETS.forEach((a) => {
  if (a.autopsy) {
    causeCounts[a.autopsy.primaryCause] = (causeCounts[a.autopsy.primaryCause] || 0) + 1;
  }
});

const totalAutopsies = Object.values(causeCounts).reduce((a, b) => a + b, 0);
const computedTopFailureCauses = Object.entries(causeCounts)
  .sort(([, a], [, b]) => b - a)
  .map(([cause, count]) => ({
    cause: cause as AutopsyCauseCategory,
    count,
    percentage: Math.round((count / (totalAutopsies || 1)) * 100),
  }));

export const MACRO_METRICS: MacroMetrics = {
  totalAssetsTracked: INITIAL_ASSETS.length,
  totalTrackedCapitalKES: INITIAL_ASSETS.reduce(
    (sum, a) => sum + (a.currentValuationKES || a.peakValuationKES || 0),
    0
  ),
  totalDestroyedCapitalKES: INITIAL_ASSETS.filter(
    (a) => a.status === 'LIQUIDATED' || a.status === 'DEFUNCT'
  ).reduce((sum, a) => sum + (a.peakValuationKES || 0), 0),
  totalDistressedDebtKES: INITIAL_ASSETS.reduce(
    (sum, a) => sum + (a.debtExposureKES || 0),
    0
  ),
  idleIndustrialSquareFootageEst: 3850000, // Estimated sq ft across dormant industrial sites
  byAssetClass: {
    ENTERPRISE_COLLAPSED: INITIAL_ASSETS.filter((a) => a.assetClass === 'ENTERPRISE_COLLAPSED').length,
    ENTERPRISE_DISTRESSED: INITIAL_ASSETS.filter((a) => a.assetClass === 'ENTERPRISE_DISTRESSED').length,
    ENTERPRISE_ACTIVE: INITIAL_ASSETS.filter((a) => a.assetClass === 'ENTERPRISE_ACTIVE').length,
    INDUSTRIAL_IDLE: INITIAL_ASSETS.filter((a) => a.assetClass === 'INDUSTRIAL_IDLE').length,
    LAND_BENCHMARK: INITIAL_ASSETS.filter((a) => a.assetClass === 'LAND_BENCHMARK').length,
    SOVEREIGN_BOND: INITIAL_ASSETS.filter((a) => a.assetClass === 'SOVEREIGN_BOND').length,
    MEGA_INFRASTRUCTURE: INITIAL_ASSETS.filter((a) => a.assetClass === 'MEGA_INFRASTRUCTURE').length,
    EDUCATIONAL_FOUNDATION: INITIAL_ASSETS.filter((a) => a.assetClass === 'EDUCATIONAL_FOUNDATION').length,
    CONGLOMERATE_HOLDING: INITIAL_ASSETS.filter((a) => a.assetClass === 'CONGLOMERATE_HOLDING').length,
  },
  bySector: {
    MANUFACTURING: INITIAL_ASSETS.filter((a) => a.sector === 'MANUFACTURING').length,
    AGRIBUSINESS_FOOD: INITIAL_ASSETS.filter((a) => a.sector === 'AGRIBUSINESS_FOOD').length,
    RETAIL_FMCG: INITIAL_ASSETS.filter((a) => a.sector === 'RETAIL_FMCG').length,
    FINANCIAL_SERVICES: INITIAL_ASSETS.filter((a) => a.sector === 'FINANCIAL_SERVICES').length,
    AUTOMOTIVE_TRANSPORT: INITIAL_ASSETS.filter((a) => a.sector === 'AUTOMOTIVE_TRANSPORT').length,
    REAL_ESTATE_LAND: INITIAL_ASSETS.filter((a) => a.sector === 'REAL_ESTATE_LAND').length,
    TECHNOLOGY_FINTECH: INITIAL_ASSETS.filter((a) => a.sector === 'TECHNOLOGY_FINTECH').length,
    ENERGY_INFRASTRUCTURE: INITIAL_ASSETS.filter((a) => a.sector === 'ENERGY_INFRASTRUCTURE').length,
    HEALTHCARE_PHARMA: 0,
    EDUCATION_PHILANTHROPY: INITIAL_ASSETS.filter((a) => a.sector === 'EDUCATION_PHILANTHROPY').length,
  },
  byStatus: {
    ACTIVE: INITIAL_ASSETS.filter((a) => a.status === 'ACTIVE').length,
    DISTRESSED: INITIAL_ASSETS.filter((a) => a.status === 'DISTRESSED').length,
    UNDER_ADMINISTRATION: INITIAL_ASSETS.filter((a) => a.status === 'UNDER_ADMINISTRATION').length,
    UNDER_RECEIVERSHIP: INITIAL_ASSETS.filter((a) => a.status === 'UNDER_RECEIVERSHIP').length,
    LIQUIDATED: INITIAL_ASSETS.filter((a) => a.status === 'LIQUIDATED').length,
    DEFUNCT: INITIAL_ASSETS.filter((a) => a.status === 'DEFUNCT').length,
    REVITALIZED: INITIAL_ASSETS.filter((a) => a.status === 'REVITALIZED').length,
  },
  topFailureCauses: computedTopFailureCauses,
};
