import React from 'react';
import { MacroMetrics } from '@salamanda/shared-types';
import { formatKES, formatCauseLabel } from '../lib/formatters';
import { TrendingDown, AlertTriangle, Layers, Building2, Flame } from 'lucide-react';

interface MacroSummaryCardsProps {
  metrics: MacroMetrics;
}

export function MacroSummaryCards({ metrics }: MacroSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Tracked Value */}
      <div className="bg-surface/80 border border-surface-border rounded-xl p-5 hover:border-slate-700 transition-colors">
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs uppercase font-mono tracking-wider">Total Tracked Capital</span>
          <Layers className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-slate-100 font-mono">
          {formatKES(metrics.totalTrackedCapitalKES)}
        </div>
        <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
          <span className="text-emerald-400 font-semibold">{metrics.totalAssetsTracked} Key Assets</span>
          <span>across 8 economic sectors</span>
        </div>
      </div>

      {/* Capital Destroyed */}
      <div className="bg-surface/80 border border-rose-950/60 rounded-xl p-5 hover:border-rose-900/80 transition-colors">
        <div className="flex items-center justify-between text-rose-300 mb-2">
          <span className="text-xs uppercase font-mono tracking-wider">Capital Destruction Index</span>
          <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-rose-400 font-mono">
          {formatKES(metrics.totalDestroyedCapitalKES)}
        </div>
        <div className="text-xs text-rose-300/80 mt-2 flex items-center gap-1">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>Wiped out across liquidated enterprises</span>
        </div>
      </div>

      {/* Distressed Debt & Impairment */}
      <div className="bg-surface/80 border border-amber-950/60 rounded-xl p-5 hover:border-amber-900/80 transition-colors">
        <div className="flex items-center justify-between text-amber-300 mb-2">
          <span className="text-xs uppercase font-mono tracking-wider">Distressed Debt Burden</span>
          <AlertTriangle className="w-4 h-4 text-amber-400" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-amber-400 font-mono">
          {formatKES(metrics.totalDistressedDebtKES)}
        </div>
        <div className="text-xs text-amber-300/80 mt-2 flex items-center gap-1">
          <span>Unpaid bank loans, bonds & farmer arrears</span>
        </div>
      </div>

      {/* Top Failure Cause */}
      <div className="bg-surface/80 border border-surface-border rounded-xl p-5 hover:border-slate-700 transition-colors">
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs uppercase font-mono tracking-wider">Primary Failure Mode</span>
          <Building2 className="w-4 h-4 text-cyan-400" />
        </div>
        <div className="text-lg font-bold tracking-tight text-slate-100 truncate">
          {metrics.topFailureCauses[0] ? formatCauseLabel(metrics.topFailureCauses[0].cause) : 'Governance & Leverage'}
        </div>
        <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
          <span className="text-rose-400 font-medium">80%</span>
          <span>of Kenyan autopsies caused by fraud & debt</span>
        </div>
      </div>
    </div>
  );
}
