/**
 * Salamanda Core Domain Model & Types
 * Kenya & African Asset Intelligence and Autopsy Terminal
 */

export type AssetClass =
  | 'ENTERPRISE_COLLAPSED'     // Companies that failed, liquidated, or dissolved (e.g. Mobius, Nakumatt, Imperial Bank)
  | 'ENTERPRISE_DISTRESSED'    // Under administration, receivership, or state bailout (e.g. Mumias Sugar, Pan Paper)
  | 'ENTERPRISE_ACTIVE'        // Thriving market bellwethers (e.g. Safaricom, Equity Group, KCB)
  | 'INDUSTRIAL_IDLE'          // Stranded industrial plants, dead ginneries, underutilized mills
  | 'LAND_BENCHMARK'           // Real estate land value benchmarks per acre across counties
  | 'SOVEREIGN_BOND'           // Treasury & infrastructure bonds, sovereign debt securities
  | 'MEGA_INFRASTRUCTURE'      // SGR, Nairobi Expressway, Lamu Port, Geothermal projects
  | 'EDUCATIONAL_FOUNDATION'   // Educational endowments, scholarship trusts (e.g. JKF, Equity Foundation)
  | 'CONGLOMERATE_HOLDING';    // Diversified private conglomerates (e.g. Devki, Centum, Rai Group)

export type Sector =
  | 'MANUFACTURING'
  | 'AGRIBUSINESS_FOOD'
  | 'RETAIL_FMCG'
  | 'FINANCIAL_SERVICES'
  | 'AUTOMOTIVE_TRANSPORT'
  | 'REAL_ESTATE_LAND'
  | 'TECHNOLOGY_FINTECH'
  | 'ENERGY_INFRASTRUCTURE'
  | 'HEALTHCARE_PHARMA'
  | 'EDUCATION_PHILANTHROPY';

export type OperationalStatus =
  | 'ACTIVE'
  | 'DISTRESSED'
  | 'UNDER_ADMINISTRATION'
  | 'UNDER_RECEIVERSHIP'
  | 'LIQUIDATED'
  | 'DEFUNCT'
  | 'REVITALIZED';

export type VerificationLevel =
  | 'VERIFIED_PRIMARY'        // Confirmed via official registry, court ruling, Gazette, or audited annual report
  | 'VERIFIED_SECONDARY'      // Supported by credible financial press investigations (Reuters, Business Daily)
  | 'MARKET_SPECULATION'      // Widespread industry rumor / unconfirmed public narrative (explicitly flagged)
  | 'UNVERIFIED_CLAIM';       // Claim lacking public statutory evidence (explicitly disclosed)

export type AutopsyCauseCategory =
  | 'GOVERNANCE_FRAUD'          // Insider lending, fraudulent book-cooking, embezzlement
  | 'DEBT_OVERLEVERAGE'         // Debt-financed over-expansion, unhedged foreign debt
  | 'REGULATORY_TAX_POLICY'     // Sudden excise tax shifts, import tariff reversals
  | 'MARKET_DEMAND_SHIFT'       // Changing consumer behavior, cheaper foreign imports
  | 'POLITICAL_INTERFERENCE'    // Crony contracts, regime changes, state procurement halts
  | 'TECHNOLOGY_OBSOLESCENCE'   // Failure to digitize, outdated machinery
  | 'SUPPLY_CHAIN_COLLAPSE';    // Raw material poaching, farmer non-payment strikes

export type SourceTier =
  | 'GAZETTE_OFFICIAL'          // Official Kenya Gazette notices
  | 'COURT_RULING'              // Kenya Law Reports eKLR rulings
  | 'REGULATORY_DISCLOSURE'     // CMA, NSE, CBK annual supervision reports
  | 'PUBLIC_AUCTION_NOTICE'     // Licensed auctioneer notices in national press
  | 'FINANCIAL_PRESS_PRIMARY';  // Business Daily, Daily Nation, Reuters, Bloomberg

export interface Citation {
  id: string;
  title: string;
  publisher: string;
  publicationDate: string;
  url: string;
  tier: SourceTier;
  referenceNumber?: string;    // e.g. "Gazette Vol. CXXVI No. 92", "[2024] eKLR"
  keyExcerpt: string;
}

export interface ValuationPoint {
  date: string;
  valueKES: number;
  metricType:
    | 'MARKET_CAP'
    | 'PEAK_VALUATION'
    | 'BOOK_VALUE'
    | 'AUCTION_RESERVE'
    | 'LAND_PRICE_ACRE'
    | 'OUTSTANDING_DEBT'
    | 'ANNUAL_REVENUE';
  citationTitle?: string;
  citationUrl?: string;
}

export interface TimelineEvent {
  id: string;
  assetId: string;
  date: string;
  title: string;
  summary: string;
  impact: 'POSITIVE' | 'NEUTRAL' | 'WARNING' | 'CRITICAL_FAILURE' | 'REVIVAL';
  citation: Citation;
}

export interface AutopsyReport {
  id: string;
  assetId: string;
  primaryCause: AutopsyCauseCategory;
  contributingFactors: AutopsyCauseCategory[];
  peakValuationKES?: number;
  debtAtCollapseKES?: number;
  jobsImpacted?: number;
  executiveSummary: string;
  forensicAnalysis: string;
  hindrancesAndObstacles: string[];
  revitalizationFeasibility: 'HIGH' | 'MEDIUM' | 'LOW' | 'IMPOSSIBLE';
  revitalizationNarrative?: string;
  citations: Citation[];
}

export interface Asset {
  id: string;
  slug: string;
  name: string;
  legalName?: string;
  assetClass: AssetClass;
  sector: Sector;
  subsector: string;
  status: OperationalStatus;
  county: string;
  headquarters?: string;
  coordinates?: { lat: number; lng: number };
  googleMapsUrl?: string;
  verificationLevel?: VerificationLevel;
  verificationNotes?: string;
  establishedYear: number;
  defunctYear?: number;
  currentValuationKES?: number;
  peakValuationKES?: number;
  debtExposureKES?: number;
  summary: string;
  autopsy?: AutopsyReport;
  timeline: TimelineEvent[];
  valuationHistory: ValuationPoint[];
  primaryCitations: Citation[];
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export type PlayerType =
  | 'EPC_CONSTRUCTION_GIANT'
  | 'INDUSTRIAL_CONGLOMERATE'
  | 'PRIVATE_EQUITY_INVESTMENT'
  | 'EDUCATIONAL_FOUNDATION_TRUST'
  | 'SOVEREIGN_WEALTH_PENSION';

export interface HoldingItem {
  assetName: string;
  assetSlug?: string;
  stakeOrRole: string;
  verificationLevel: VerificationLevel;
  notes?: string;
}

export interface InstitutionalPlayer {
  id: string;
  slug: string;
  name: string;
  playerType: PlayerType;
  leadership: string;
  headquarters: string;
  estimatedCapitalMovedKES: number;
  verificationLevel: VerificationLevel;
  verificationNotes?: string;
  keyHoldings: HoldingItem[];
  activeFocusPresent: string;
  summary: string;
  citations: Citation[];
  googleMapsUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MacroMetrics {
  totalAssetsTracked: number;
  totalTrackedCapitalKES: number;
  totalDestroyedCapitalKES: number;
  totalDistressedDebtKES: number;
  idleIndustrialSquareFootageEst?: number;
  byAssetClass: Record<AssetClass, number>;
  bySector: Record<Sector, number>;
  byStatus: Record<OperationalStatus, number>;
  topFailureCauses: { cause: AutopsyCauseCategory; count: number; percentage: number }[];
}

export interface AssetFilterOptions {
  assetClass?: AssetClass | 'ALL';
  sector?: Sector | 'ALL';
  status?: OperationalStatus | 'ALL';
  county?: string;
  cause?: AutopsyCauseCategory | 'ALL';
  verification?: VerificationLevel | 'ALL';
  search?: string;
}
