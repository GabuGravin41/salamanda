import React from 'react';
import Link from 'next/link';
import { Asset } from '@salamanda/shared-types';
import { StatusBadge } from './ui/StatusBadge';
import { SourceBadge } from './ui/SourceBadge';
import { formatKES, formatAssetClassLabel, formatSectorLabel, formatCauseLabel } from '../lib/formatters';
import { MapPin, Calendar, ArrowUpRight, AlertOctagon, TrendingUp } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  const isDeadOrDistressed =
    asset.status === 'LIQUIDATED' ||
    asset.status === 'DEFUNCT' ||
    asset.status === 'UNDER_RECEIVERSHIP' ||
    asset.status === 'UNDER_ADMINISTRATION';

  return (
    <div className="group relative bg-surface/90 hover:bg-surface border border-surface-border hover:border-slate-700 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
      <div>
        {/* Top Badges */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {formatAssetClassLabel(asset.assetClass)}
            </span>
            <StatusBadge status={asset.status} />
          </div>
          <Link
            href={`/assets/${asset.slug}`}
            className="text-slate-400 group-hover:text-emerald-400 transition-colors p-1 rounded hover:bg-slate-800"
            title="View Asset Intelligence & Autopsy"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Title & Legal Name */}
        <Link href={`/assets/${asset.slug}`} className="block">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight">
            {asset.name}
          </h3>
          {asset.legalName && asset.legalName !== asset.name && (
            <p className="text-xs text-slate-400 font-mono truncate mt-0.5">
              {asset.legalName}
            </p>
          )}
        </Link>

        {/* Sector & Location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-2.5">
          <span className="text-slate-300 font-medium">{formatSectorLabel(asset.sector)}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-500" />
            {asset.county}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" />
            Est. {asset.establishedYear}
            {asset.defunctYear && ` - ${asset.defunctYear}`}
          </span>
        </div>

        {/* Summary Description */}
        <p className="text-xs text-slate-300 line-clamp-3 mt-3 leading-relaxed">
          {asset.summary}
        </p>

        {/* Autopsy Cause Highlight */}
        {asset.autopsy && (
          <div className="mt-3.5 p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Autopsy: {formatCauseLabel(asset.autopsy.primaryCause)}</span>
            </div>
            <p className="text-rose-200/80 text-[11px] line-clamp-2">
              {asset.autopsy.executiveSummary}
            </p>
          </div>
        )}
      </div>

      {/* Footer Metrics & Citations */}
      <div className="mt-5 pt-4 border-t border-surface-border/60">
        <div className="flex items-end justify-between mb-3">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
              {asset.assetClass === 'LAND_BENCHMARK'
                ? 'Current Benchmark / Acre'
                : isDeadOrDistressed
                ? 'Peak Valuation (Pre-Collapse)'
                : 'Current Valuation'}
            </span>
            <span
              className={`text-base font-bold font-mono tracking-tight ${
                isDeadOrDistressed ? 'text-slate-300 line-through' : 'text-emerald-400'
              }`}
            >
              {formatKES(isDeadOrDistressed ? asset.peakValuationKES : asset.currentValuationKES)}
            </span>
          </div>

          {asset.debtExposureKES ? (
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono tracking-wider text-rose-400 block">
                Debt / Liabilities
              </span>
              <span className="text-xs font-bold font-mono text-rose-400">
                {formatKES(asset.debtExposureKES)}
              </span>
            </div>
          ) : asset.peakValuationKES && !isDeadOrDistressed ? (
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                Peak Valuation
              </span>
              <span className="text-xs font-mono text-slate-400">
                {formatKES(asset.peakValuationKES)}
              </span>
            </div>
          ) : null}
        </div>

        {/* Primary Source Citation Badge */}
        {asset.primaryCitations[0] && (
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-slate-500 font-mono">Primary Record:</span>
            <SourceBadge
              tier={asset.primaryCitations[0].tier}
              title={asset.primaryCitations[0].title}
              url={asset.primaryCitations[0].url}
              refNumber={asset.primaryCitations[0].referenceNumber || asset.primaryCitations[0].publisher}
            />
          </div>
        )}
      </div>
    </div>
  );
}
