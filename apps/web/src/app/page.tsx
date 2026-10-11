import React from 'react';
import Link from 'next/link';
import { getAssets, getMacroMetrics } from '@salamanda/database';
import { formatKES } from '../lib/formatters';
import {
  Building2,
  ArrowDownRight,
  Landmark,
  GitBranch,
  ShieldCheck,
  Search,
  ExternalLink,
  MapPin,
  ArrowUpRight,
  TrendingUp,
  FileText,
  Users,
} from 'lucide-react';
import { AssetRegistryTable } from '../components/AssetRegistryTable';

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [assets, metrics] = await Promise.all([
    getAssets(),
    getMacroMetrics(),
  ]);

  return (
    <div className="space-y-8">
      {/* Editorial Page Heading */}
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">THE REAL ECONOMY, IN FOCUS</div>
          <h1>Economic intelligence</h1>
          <p>A clear view of Kenya’s assets, capital, and the forces behind them.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 border border-border bg-card rounded px-3 py-1.5 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
          <span className="font-medium">Kenya Macro Synthesis</span>
        </div>
      </div>

      {/* Institutional Metric Strip */}
      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">
            <span>Total capital tracked</span>
            <Building2 size={15} />
          </div>
          <div className="metric-value">
            {formatKES(metrics.totalTrackedCapitalKES)}
          </div>
          <div className="metric-bottom">
            <span className="metric-change">
              <ArrowUpRight size={12} className="inline mr-0.5" />
              {metrics.totalAssetsTracked} assets
            </span>
            <p>Across the real economy</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Enterprise value destroyed</span>
            <ArrowDownRight size={15} />
          </div>
          <div className="metric-value">
            {formatKES(metrics.totalDestroyedCapitalKES)}
          </div>
          <div className="metric-bottom">
            <span className="text-rose-600 font-semibold text-[10px]">
              Forensic autopsies
            </span>
            <p>Liquidated entities</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Distressed debt exposure</span>
            <Landmark size={15} />
          </div>
          <div className="metric-value">
            {formatKES(metrics.totalDistressedDebtKES)}
          </div>
          <div className="metric-bottom">
            <span className="text-amber-600 font-semibold text-[10px]">
              Creditor claims
            </span>
            <p>Unpaid arrears & loans</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Turnaround pipeline</span>
            <GitBranch size={15} />
          </div>
          <div className="metric-value">KES 17.0B</div>
          <div className="metric-bottom">
            <Link
              href="/pipeline"
              className="text-primary hover:underline text-[10px] font-semibold flex items-center gap-1"
            >
              <span>View pipeline</span>
              <ArrowUpRight size={11} />
            </Link>
            <p>4 structured opportunities</p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Institutional Grid */}
      <div className="overview-grid">
        {/* Left Column: Institutional Asset Registry Table */}
        <AssetRegistryTable initialAssets={assets} compact={true} />

        {/* Right Column: Economic Landscape & Live Feed */}
        <aside className="intelligence-rail space-y-6">
          <section className="economy-map">
            <div className="rail-heading">
              <h3>The economic landscape</h3>
              <span className="text-[10px] font-semibold text-primary">KENYA</span>
            </div>

            {/* Schematic Vector Map */}
            <div className="kenya-map">
              <svg viewBox="0 0 300 230" role="img" aria-label="Kenya economic hubs">
                <defs>
                  <pattern id="grid" width="14" height="14" patternUnits="userSpaceOnUse">
                    <path d="M14 0H0V14" fill="none" stroke="var(--border)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="300" height="230" fill="url(#grid)" />
                <path
                  className="country-outline"
                  d="M123 15L164 34L200 27L231 61L225 99L201 125L195 158L161 214L145 204L130 184L104 172L86 145L62 128L64 110L54 96L76 73L86 50L110 32Z"
                />
                <circle cx="125" cy="143" r="4" className="map-point" />
                <text x="135" y="147" className="map-label">Nairobi</text>
                <circle cx="161" cy="188" r="4" className="map-point" />
                <text x="171" y="192" className="map-label">Mombasa</text>
                <circle cx="82" cy="114" r="4" className="map-point" />
                <text x="50" y="118" className="map-label">Kisumu</text>
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1 border-b border-border pb-2">
              <span>Primary Corridor Coverage</span>
              <span>8 Economic Sectors</span>
            </div>
          </section>

          {/* Intelligence Feed */}
          <section className="space-y-3 pt-2">
            <div className="rail-heading">
              <h3>Intelligence dossiers</h3>
              <span className="text-[9px] font-mono text-primary">CURATED</span>
            </div>

            <Link href="/autopsies" className="feed-item">
              <div className="feed-icon">
                <FileText size={14} />
              </div>
              <div>
                <span className="feed-type">CORPORATE AUTOPSY</span>
                <h4>Mumias Sugar: Receivership trajectory</h4>
                <p>KES 12.5B creditor exposure</p>
              </div>
            </Link>

            <Link href="/pipeline" className="feed-item">
              <div className="feed-icon">
                <GitBranch size={14} />
              </div>
              <div>
                <span className="feed-type">TURNAROUND DEAL</span>
                <h4>Webuye Paper line expansion</h4>
                <p>KES 3.5B capital tranche</p>
              </div>
            </Link>

            <Link href="/players" className="feed-item">
              <div className="feed-icon">
                <Users size={14} />
              </div>
              <div>
                <span className="feed-type">POWER PLAYERS</span>
                <h4>Industrial conglomerates dossier</h4>
                <p>10 major ownership profiles</p>
              </div>
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
