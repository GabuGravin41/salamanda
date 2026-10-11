import React from 'react';
import { AutopsyReport } from '@salamanda/shared-types';
import { formatKES, formatCauseLabel } from '../lib/formatters';
import { SourceBadge } from './ui/SourceBadge';
import {
  AlertOctagon,
  Flame,
  Users,
  Coins,
  ShieldAlert,
  ArrowRightCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface AutopsyViewerProps {
  autopsy: AutopsyReport;
  assetName: string;
}

export function AutopsyViewer({ autopsy, assetName }: AutopsyViewerProps) {
  const getFeasibilityBadge = (feasibility: AutopsyReport['revitalizationFeasibility']) => {
    switch (feasibility) {
      case 'HIGH':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" /> High Revitalization Potential
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/40 text-amber-400 border border-amber-800">
            <ArrowRightCircle className="w-3.5 h-3.5" /> Medium Feasibility (Conditional)
          </span>
        );
      case 'LOW':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-950/40 text-orange-400 border border-orange-800">
            <ShieldAlert className="w-3.5 h-3.5" /> Low Feasibility / High Friction
          </span>
        );
      case 'IMPOSSIBLE':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/40 text-rose-400 border border-rose-900">
            <XCircle className="w-3.5 h-3.5" /> Impossible / Permanent Value Destruction
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary Cause Header Card */}
      <div className="bg-gradient-to-r from-rose-950/40 via-surface to-surface border border-rose-900/60 rounded-xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
            <span className="text-xs uppercase font-mono tracking-wider text-rose-400 font-bold">
              Primary Collapse Driver
            </span>
          </div>
          {getFeasibilityBadge(autopsy.revitalizationFeasibility)}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
          {formatCauseLabel(autopsy.primaryCause)}
        </h3>

        <p className="text-sm text-rose-200/90 leading-relaxed max-w-4xl">
          {autopsy.executiveSummary}
        </p>

        {/* Contributing Factors */}
        {autopsy.contributingFactors.length > 0 && (
          <div className="mt-4 pt-4 border-t border-rose-900/40 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Contributing Shock Vectors:</span>
            {autopsy.contributingFactors.map((factor) => (
              <span
                key={factor}
                className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-900/80 text-rose-300 border border-rose-900/50"
              >
                {formatCauseLabel(factor)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Forensic Destruction Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {autopsy.debtAtCollapseKES && (
          <div className="bg-surface/70 border border-surface-border rounded-xl p-4">
            <div className="flex items-center justify-between text-rose-400 text-xs font-mono uppercase mb-1">
              <span>Audited Liabilities</span>
              <Coins className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold font-mono text-rose-300">
              {formatKES(autopsy.debtAtCollapseKES)}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Unsecured debt & bank exposure</div>
          </div>
        )}

        {autopsy.peakValuationKES && (
          <div className="bg-surface/70 border border-surface-border rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-1">
              <span>Pre-Crisis Peak Equity</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl font-bold font-mono text-slate-200 line-through">
              {formatKES(autopsy.peakValuationKES)}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Valuation wiped out</div>
          </div>
        )}

        {autopsy.jobsImpacted && (
          <div className="bg-surface/70 border border-surface-border rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-1">
              <span>Labor Displacement</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-xl font-bold font-mono text-cyan-300">
              {autopsy.jobsImpacted.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Workers & outgrower families</div>
          </div>
        )}
      </div>

      {/* Forensic Deep Dive Analysis */}
      <div className="bg-surface/80 border border-surface-border rounded-xl p-6">
        <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold mb-3 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-emerald-400" />
          Investigative Forensic Audit
        </h4>
        <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-normal">
          <p>{autopsy.forensicAnalysis}</p>
        </div>
      </div>

      {/* Hindrances and Obstacles List */}
      <div className="bg-surface/80 border border-surface-border rounded-xl p-6">
        <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold mb-3 flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-amber-400" />
          Structural Hindrances to Capital Recovery
        </h4>
        <ul className="space-y-2.5">
          {autopsy.hindrancesAndObstacles.map((obstacle, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800"
            >
              <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{obstacle}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Revitalization Potential Narrative */}
      {autopsy.revitalizationNarrative && (
        <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-6">
          <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            Revitalization Outlook for Investors & Policymakers
          </h4>
          <p className="text-xs text-emerald-200/90 leading-relaxed">
            {autopsy.revitalizationNarrative}
          </p>
        </div>
      )}

      {/* Primary Legal & Regulatory Citations */}
      <div className="bg-surface/80 border border-surface-border rounded-xl p-6">
        <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
          Verifiable Legal & Regulatory Citations
        </h4>
        <div className="space-y-3">
          {autopsy.citations.map((cit) => (
            <div
              key={cit.id}
              className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-slate-200">{cit.title}</span>
                  <SourceBadge tier={cit.tier} refNumber={cit.referenceNumber} />
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {cit.publisher} • {cit.publicationDate}
                </p>
                {cit.keyExcerpt && (
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    "{cit.keyExcerpt}"
                  </p>
                )}
              </div>

              {cit.url && (
                <a
                  href={cit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-colors whitespace-nowrap self-start md:self-center"
                >
                  Verify Public Record
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
