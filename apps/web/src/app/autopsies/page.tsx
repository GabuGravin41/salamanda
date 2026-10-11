import React from 'react';
import Link from 'next/link';
import { getAutopsies } from '@salamanda/database';
import { formatKES, formatCauseLabel, formatSectorLabel } from '../../lib/formatters';
import { SourceBadge } from '../../components/ui/SourceBadge';
import { StatusBadge } from '../../components/ui/StatusBadge';
import {
  Activity,
  AlertOctagon,
  Flame,
  ArrowRight,
  ShieldAlert,
  Users,
  Coins,
  FileSpreadsheet,
} from 'lucide-react';

export const revalidate = 60;

export default async function AutopsiesPage() {
  const autopsyList = await getAutopsies();

  const totalDestroyed = autopsyList.reduce(
    (sum, item) => sum + (item.autopsy.peakValuationKES || 0),
    0
  );
  const totalDebt = autopsyList.reduce(
    (sum, item) => sum + (item.autopsy.debtAtCollapseKES || 0),
    0
  );
  const totalJobs = autopsyList.reduce(
    (sum, item) => sum + (item.autopsy.jobsImpacted || 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-950/60 via-surface to-surface border border-rose-900/60 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
          <Activity className="w-4 h-4" />
          <span>FORENSIC POST-MORTEM TERMINAL</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          The Corporate Autopsy Registry
        </h1>

        <p className="text-sm text-rose-200/90 leading-relaxed max-w-3xl">
          Most business platforms celebrate ephemeral successes. Salamanda conducts rigorous, source-cited autopsies
          on why enterprises collapsed, why bailouts failed, and where structural obstacles prevented capital recovery.
          Every autopsy classifies primary failure modes and cites official receivership filings.
        </p>

        {/* Destruction Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-rose-900/40">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Cumulative Equity Destroyed
            </span>
            <span className="text-xl font-bold font-mono text-rose-400">
              {formatKES(totalDestroyed)}
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Cumulative Unpaid Debt
            </span>
            <span className="text-xl font-bold font-mono text-amber-400">
              {formatKES(totalDebt)}
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Displaced Workers & Outgrowers
            </span>
            <span className="text-xl font-bold font-mono text-cyan-400">
              {totalJobs.toLocaleString()} households
            </span>
          </div>
        </div>
      </div>

      {/* Autopsies Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            Documented Autopsy Case Studies ({autopsyList.length})
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Strict Primary Citations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {autopsyList.map(({ asset, autopsy }) => (
            <div
              key={asset.id}
              className="bg-surface/90 hover:bg-surface border border-surface-border hover:border-slate-700 rounded-xl p-6 transition-all flex flex-col justify-between shadow-sm space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-900">
                      {formatCauseLabel(autopsy.primaryCause)}
                    </span>
                    <StatusBadge status={asset.status} />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {asset.establishedYear} - {asset.defunctYear || 'Present'}
                  </span>
                </div>

                <Link href={`/assets/${asset.slug}`} className="block group">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {asset.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {formatSectorLabel(asset.sector)} • {asset.county} County
                  </p>
                </Link>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {autopsy.executiveSummary}
                </p>

                {/* Contributing factors */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {autopsy.contributingFactors.map((factor) => (
                    <span
                      key={factor}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {formatCauseLabel(factor)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics & Links */}
              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Debt at Collapse
                  </span>
                  <span className="font-bold font-mono text-rose-400 text-sm">
                    {formatKES(autopsy.debtAtCollapseKES)}
                  </span>
                </div>

                <Link
                  href={`/assets/${asset.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 font-medium transition-colors"
                >
                  <span>Read Full Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
