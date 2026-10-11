import React from 'react';
import { ValuationPoint } from '@salamanda/shared-types';
import { formatKES } from '../lib/formatters';
import { TrendingUp, Calendar, ExternalLink } from 'lucide-react';

interface ValuationTrackerProps {
  history: ValuationPoint[];
  assetName: string;
}

export function ValuationTracker({ history, assetName }: ValuationTrackerProps) {
  if (!history || history.length === 0) {
    return (
      <div className="p-6 text-center text-slate-500 bg-surface/50 rounded-xl border border-surface-border">
        No recorded valuation markers available for this asset.
      </div>
    );
  }

  const sorted = [...history].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="bg-surface/80 border border-surface-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Capital & Valuation Trajectory
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Historical verified transaction values, market caps, and liquidation markers
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[11px] border-b border-surface-border">
            <tr>
              <th className="py-2.5 px-3">Date</th>
              <th className="py-2.5 px-3">Metric Type</th>
              <th className="py-2.5 px-3">Valuation (KES)</th>
              <th className="py-2.5 px-3">Primary Source / Audit Benchmark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border/60">
            {sorted.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                <td className="py-3 px-3 font-mono text-emerald-400 font-semibold flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {item.date}
                </td>
                <td className="py-3 px-3 text-slate-300 font-medium">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono border border-slate-700">
                    {item.metricType.replace(/_/g, ' ')}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono font-bold text-slate-100 text-sm">
                  {formatKES(item.valueKES)}
                </td>
                <td className="py-3 px-3 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span>{item.citationTitle || 'Official regulatory record'}</span>
                    {item.citationUrl && (
                      <a
                        href={item.citationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
