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
      <div className="bg-surface/70 border border-surface-border rounded-lg p-5">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider">Total Tracked Capital</span>
          <Layers className="w-3.5 h-3.5 text-slate-500" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-white font-mono">
          {formatKES(metrics.totalTrackedCapitalKES)}
        </div>
        <div className="text-xs text-slate-400 mt-2">
          <span className="text-slate-300 font-medium">{metrics.totalAssetsTracked} physical & corporate assets</span>
        </div>
      </div>

      {/* Capital Destroyed */}
      <div className="bg-surface/70 border border-surface-border rounded-lg p-5">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider">Destroyed Capital</span>
          <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-rose-400 font-mono">
          {formatKES(metrics.totalDestroyedCapitalKES)}
        </div>
        <div className="text-xs text-slate-400 mt-2">
          <span>Liquidated enterprise value</span>
        </div>
      </div>

      {/* Distressed Debt & Impairment */}
      <div className="bg-surface/70 border border-surface-border rounded-lg p-5">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider">Distressed Liabilities</span>
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div className="text-2xl font-bold tracking-tight text-amber-300 font-mono">
          {formatKES(metrics.totalDistressedDebtKES)}
        </div>
        <div className="text-xs text-slate-400 mt-2">
          <span>Unpaid claims & debt exposure</span>
        </div>
      </div>

      {/* Top Failure Cause */}
      <div className="bg-surface/70 border border-surface-border rounded-lg p-5">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider">Leading Autopsy Cause</span>
          <Building2 className="w-3.5 h-3.5 text-slate-500" />
        </div>
        <div className="text-base font-bold tracking-tight text-white truncate mt-1">
          {metrics.topFailureCauses[0] ? formatCauseLabel(metrics.topFailureCauses[0].cause) : 'Debt Overleverage'}
        </div>
        <div className="text-xs text-slate-400 mt-2">
          <span>80% driven by fraud and debt leverage</span>
        </div>
      </div>
    </div>
  );
}
