import React from 'react';
import Link from 'next/link';
import {
  getInstitutionalAllocators,
  getDealPipeline,
} from '@salamanda/database';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { formatKES, formatSectorLabel } from '@/lib/formatters';
import {
  Wallet,
  Briefcase,
  TrendingUp,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  ShieldCheck,
  Building,
  Layers,
} from 'lucide-react';

export const metadata = {
  title: 'Institutional Allocators & Active Pipeline | Salamanda',
  description:
    'Institutional capital deployment mandates (Pensions, DFIs, Private Equity, SACCOs) mapped directly to live revitalization deals and distressed asset pipelines in Kenya.',
};

export default async function PipelinePage() {
  const [allocators, pipeline] = await Promise.all([
    getInstitutionalAllocators(),
    getDealPipeline(),
  ]);

  const totalAum = allocators.reduce((sum, a) => sum + (a.aumKES || 0), 0);
  const totalPipelineCapital = pipeline.reduce(
    (sum, p) => sum + (p.requiredCapitalKES || 0),
    0
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <div className="border-b border-surface-border pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono mb-3">
              <Wallet className="w-3.5 h-3.5" />
              <span>CAPITAL MATCHMAKING & ACTIVE TRANCHE PIPELINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Institutional Allocators & Deal Pipeline
            </h1>
            <p className="text-slate-400 mt-2 max-w-3xl text-sm leading-relaxed">
              Where the money sits, and where it needs to flow. Connecting Tier-1 institutional
              pensions, DFIs, and private equity dry powder to actionable corporate revitalizations,
              idle industrial assets, and concession auctions across Kenya.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-surface/80 border border-surface-border rounded-xl p-4 min-w-[200px]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Tracked Allocator AUM
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">
                {formatKES(totalAum)}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 block font-mono">
                {allocators.length} Institutional Funds
              </span>
            </div>

            <div className="bg-surface/80 border border-surface-border rounded-xl p-4 min-w-[200px]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                Active Deal Demand
              </span>
              <span className="text-xl font-bold font-mono text-amber-300 mt-1 block">
                {formatKES(totalPipelineCapital)}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 block font-mono">
                {pipeline.length} Curated Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Active Deal Pipeline Opportunities */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Active Revitalization & Restructuring Deals
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Primary Sourced via High Court & Gazette Notices
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pipeline.map((deal) => (
            <div
              key={deal.id}
              className="bg-surface/90 border border-surface-border hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-all"
            >
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/60 font-semibold">
                      {deal.stage.replace(/_/g, ' ')}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {formatSectorLabel(deal.targetSector)}
                    </span>
                  </div>
                  <VerificationBadge level={deal.verificationLevel} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {deal.title}
                </h3>

                {/* Location & GPS Link */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {deal.county} County
                  </span>
                  {deal.googleMapsUrl && (
                    <>
                      <span>•</span>
                      <a
                        href={deal.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-2"
                      >
                        Site GPS ↗
                      </a>
                    </>
                  )}
                  {deal.associatedAssetSlug && (
                    <>
                      <span>•</span>
                      <Link
                        href={`/assets/${deal.associatedAssetSlug}`}
                        className="text-emerald-400 hover:text-emerald-300 font-medium"
                      >
                        View Asset File ↗
                      </Link>
                    </>
                  )}
                </div>

                {/* Thesis Box */}
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-4 text-xs">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                    Salamanda Underwriting Thesis:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{deal.salamandaThesis}</p>
                </div>

                {/* Catalyst & Risk Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                  <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/30">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block mb-0.5">
                      Key Growth Catalyst
                    </span>
                    <p className="text-slate-300 text-[11px] leading-snug">{deal.keyCatalyst}</p>
                  </div>

                  <div className="p-2.5 rounded bg-rose-950/20 border border-rose-900/30">
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold block mb-0.5">
                      Primary Risk Factor
                    </span>
                    <p className="text-slate-300 text-[11px] leading-snug">{deal.riskFactor}</p>
                  </div>
                </div>
              </div>

              {/* Deal Economics & Matching Footer */}
              <div className="pt-4 border-t border-surface-border/60">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Required Capex Tranche
                    </span>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      {formatKES(deal.requiredCapitalKES)}
                    </span>
                  </div>

                  {deal.impliedValuationKES && (
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Implied Turnaround Value
                      </span>
                      <span className="text-xs font-mono text-slate-300">
                        {formatKES(deal.impliedValuationKES)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Matched Mandates */}
                <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-slate-500">Matched Allocators:</span>
                  {deal.matchingAllocators.map((slug) => (
                    <span
                      key={slug}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 font-mono text-[10px]"
                    >
                      {slug}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Institutional Capital Allocators */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Institutional Capital Allocator Mandates
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Regulated by RBA, CBK, SASRA & CMA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allocators.map((allocator) => (
            <div
              key={allocator.id}
              className="bg-surface/90 border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {allocator.category.replace(/_/g, ' ')}
                  </span>
                  <VerificationBadge level={allocator.verificationLevel} />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {allocator.name}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-3">
                  <span>
                    <strong className="text-slate-300">HQ:</strong> {allocator.headquarters}
                  </span>
                  {allocator.googleMapsUrl && (
                    <>
                      <span>•</span>
                      <a
                        href={allocator.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-2"
                      >
                        HQ GPS ↗
                      </a>
                    </>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {allocator.mandate}
                </p>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs mb-4">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block mb-0.5">
                    Active Deployment Focus
                  </span>
                  <p className="text-emerald-200/90 text-[11px] leading-relaxed">
                    {allocator.activeDeploymentFocus}
                  </p>
                </div>
              </div>

              {/* Allocator Economics Footer */}
              <div className="pt-4 border-t border-surface-border/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Balance Sheet / AUM
                    </span>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      {formatKES(allocator.aumKES)}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Target Ticket Tranche
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {formatKES(allocator.ticketSizeKES.min)} - {formatKES(allocator.ticketSizeKES.max)}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Leadership / Decision Governance:
                  </span>
                  <span className="text-slate-300">{allocator.decisionMakers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
