import React from 'react';
import { TimelineEvent } from '@salamanda/shared-types';
import { SourceBadge } from './ui/SourceBadge';
import { Calendar, CheckCircle, AlertTriangle, XCircle, RefreshCw, Info } from 'lucide-react';

interface TimelineViewerProps {
  events: TimelineEvent[];
}

export function TimelineViewer({ events }: TimelineViewerProps) {
  if (!events || events.length === 0) {
    return (
      <div className="p-6 text-center text-slate-500 bg-surface/50 rounded-xl border border-surface-border">
        No recorded lifecycle timeline events available.
      </div>
    );
  }

  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const getImpactIcon = (impact: TimelineEvent['impact']) => {
    switch (impact) {
      case 'POSITIVE':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'WARNING':
        return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      case 'CRITICAL_FAILURE':
        return <XCircle className="w-4 h-4 text-rose-400" />;
      case 'REVIVAL':
        return <RefreshCw className="w-4 h-4 text-cyan-400" />;
      default:
        return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-border">
      {sorted.map((event) => (
        <div key={event.id} className="relative group">
          {/* Timeline Node Bullet */}
          <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-surface border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
            {getImpactIcon(event.impact)}
          </div>

          <div className="bg-surface/60 hover:bg-surface border border-surface-border/80 hover:border-slate-700 rounded-lg p-4 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {event.date}
                </span>
                <span className="text-sm font-bold text-slate-100">{event.title}</span>
              </div>
              <SourceBadge
                tier={event.citation.tier}
                title={event.citation.title}
                url={event.citation.url}
                refNumber={event.citation.referenceNumber || event.citation.publisher}
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
              {event.summary}
            </p>

            {event.citation.keyExcerpt && (
              <blockquote className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-2 rounded border-l-2 border-emerald-500/50 italic">
                "{event.citation.keyExcerpt}"
              </blockquote>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
