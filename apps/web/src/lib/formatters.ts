import { AutopsyCauseCategory, AssetClass, Sector } from '@salamanda/shared-types';

export function formatKES(amount?: number | null): string {
  if (amount === undefined || amount === null) return 'N/A';
  if (amount === 0) return 'KES 0 (Wiped out)';

  const abs = Math.abs(amount);
  if (abs >= 1_000_000_000_000) {
    return `KES ${(amount / 1_000_000_000_000).toFixed(1)}T`;
  }
  if (abs >= 1_000_000_000) {
    return `KES ${(amount / 1_000_000_000).toFixed(1)}B`;
  }
  if (abs >= 1_000_000) {
    return `KES ${(amount / 1_000_000).toFixed(1)}M`;
  }
  return `KES ${amount.toLocaleString('en-KE')}`;
}

export function formatCauseLabel(cause: AutopsyCauseCategory): string {
  switch (cause) {
    case 'GOVERNANCE_FRAUD':
      return 'Governance & Insider Fraud';
    case 'DEBT_OVERLEVERAGE':
      return 'Debt & Overleveraged Expansion';
    case 'REGULATORY_TAX_POLICY':
      return 'Fiscal & Tax Policy Shocks';
    case 'MARKET_DEMAND_SHIFT':
      return 'Market Shift & Import Competition';
    case 'POLITICAL_INTERFERENCE':
      return 'Political & Patronage Interference';
    case 'TECHNOLOGY_OBSOLESCENCE':
      return 'Technological Obsolescence';
    case 'SUPPLY_CHAIN_COLLAPSE':
      return 'Raw Material & Supply Disruption';
    default:
      return cause;
  }
}

export function formatAssetClassLabel(cls: AssetClass): string {
  switch (cls) {
    case 'ENTERPRISE_COLLAPSED':
      return 'Collapsed Enterprise';
    case 'ENTERPRISE_DISTRESSED':
      return 'Distressed / Receivership';
    case 'ENTERPRISE_ACTIVE':
      return 'Active Market Pillar';
    case 'INDUSTRIAL_IDLE':
      return 'Idle Industrial Plant';
    case 'LAND_BENCHMARK':
      return 'Land & Spatial Value';
    case 'SOVEREIGN_BOND':
      return 'Sovereign Treasury Bond';
    case 'MEGA_INFRASTRUCTURE':
      return 'Mega Infrastructure PPP';
    default:
      return cls;
  }
}

export function formatSectorLabel(sector: Sector): string {
  switch (sector) {
    case 'MANUFACTURING':
      return 'Manufacturing & Heavy Industry';
    case 'AGRIBUSINESS_FOOD':
      return 'Agribusiness & Food Processing';
    case 'RETAIL_FMCG':
      return 'Retail & Supermarkets';
    case 'FINANCIAL_SERVICES':
      return 'Financial Services & Banking';
    case 'AUTOMOTIVE_TRANSPORT':
      return 'Automotive & Mobility';
    case 'REAL_ESTATE_LAND':
      return 'Land & Real Estate';
    case 'TECHNOLOGY_FINTECH':
      return 'Technology & Telecoms';
    case 'ENERGY_INFRASTRUCTURE':
      return 'Energy & Tollways';
    case 'HEALTHCARE_PHARMA':
      return 'Healthcare & Pharmaceuticals';
    default:
      return sector;
  }
}
