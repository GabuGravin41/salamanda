import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAssetBySlug } from '@salamanda/database';
import { StatusBadge } from '../../../components/ui/StatusBadge';
import { SourceBadge } from '../../../components/ui/SourceBadge';
import { AutopsyViewer } from '../../../components/AutopsyViewer';
import { TimelineViewer } from '../../../components/TimelineViewer';
import { ValuationTracker } from '../../../components/ValuationTracker';
import { formatKES, formatAssetClassLabel, formatSectorLabel } from '../../../lib/formatters';
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Activity,
  History,
} from 'lucide-react';

interface AssetDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function AssetDetailPage({ params }: AssetDetailPageProps) {
  const { slug } = await params;
  const asset = await getAssetBySlug(slug);

  if (!asset) {
    notFound();
  }

  const isDeadOrDistressed =
    asset.status === 'LIQUIDATED' ||
    asset.status === 'DEFUNCT' ||
    asset.status === 'UNDER_RECEIVERSHIP' ||
    asset.status === 'UNDER_ADMINISTRATION';

  return (
    <div className="space-y-8">
      {/* Top Breadcrumb & Return Link */}
      <div>
        <Link
          href="/assets"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Asset Directory
        </Link>
      </div>

      {/* Asset Header Dossier */}
      <div className="bg-surface/90 border border-surface-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {formatAssetClassLabel(asset.assetClass)}
              </span>
              <StatusBadge status={asset.status} />
              <span className="text-xs font-mono text-slate-400">
                ID: {asset.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {asset.name}
            </h1>

            {asset.legalName && asset.legalName !== asset.name && (
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                Legal Entity: {asset.legalName}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-300 pt-1">
              <span className="font-semibold text-emerald-400">
                {formatSectorLabel(asset.sector)}
              </span>
              <span>•</span>
              <span className="text-slate-400">{asset.subsector}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {asset.county}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Est. {asset.establishedYear}
                {asset.defunctYear && ` - ${asset.defunctYear}`}
              </span>
            </div>
          </div>

          {/* Key Capital Metrics Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 min-w-[260px] space-y-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {asset.assetClass === 'LAND_BENCHMARK'
                  ? 'Price Per Acre (2024)'
                  : isDeadOrDistressed
                  ? 'Peak Valuation (Pre-Collapse)'
                  : 'Current Enterprise Valuation'}
              </span>
              <span
                className={`text-xl font-bold font-mono ${
                  isDeadOrDistressed ? 'text-slate-300 line-through' : 'text-emerald-400'
                }`}
              >
                {formatKES(isDeadOrDistressed ? asset.peakValuationKES : asset.currentValuationKES)}
              </span>
            </div>

            {asset.debtExposureKES ? (
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block">
                  Debt & Creditor Liabilities
                </span>
                <span className="text-base font-bold font-mono text-rose-400">
                  {formatKES(asset.debtExposureKES)}
                </span>
              </div>
            ) : null}

            {asset.headquarters && (
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <span className="block text-[10px] font-mono uppercase text-slate-500">Location:</span>
                {asset.headquarters}
              </div>
            )}
          </div>
        </div>

        {/* Operational Overview Narrative */}
        <div className="pt-4 border-t border-surface-border text-sm text-slate-200 leading-relaxed max-w-4xl">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
            Operational Overview & Context
          </h2>
          <p>{asset.summary}</p>
        </div>
      </div>

      {/* Forensic Autopsy Section (If present) */}
      {asset.autopsy && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-rose-400" />
            <h2 className="text-lg font-bold tracking-tight text-white">
              Forensic Failure Autopsy
            </h2>
          </div>
          <AutopsyViewer autopsy={asset.autopsy} assetName={asset.name} />
        </section>
      )}

      {/* Lifecycle Timeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-bold tracking-tight text-white">
            Verified Event Timeline
          </h2>
        </div>
        <TimelineViewer events={asset.timeline} />
      </section>

      {/* Valuation History */}
      <section className="space-y-4">
        <ValuationTracker history={asset.valuationHistory} assetName={asset.name} />
      </section>

      {/* Primary Sourced Records Audit */}
      <section className="bg-surface/80 border border-surface-border rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold">
              Mandatory Sourcing Audit Trail
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400">
            {asset.primaryCitations.length} Primary Records
          </span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Every statement, valuation marker, and date regarding {asset.name} is tethered to verifiable public records
          to prevent unverified speculation and safeguard against misrepresentation.
        </p>

        <div className="space-y-3 pt-2">
          {asset.primaryCitations.map((cit) => (
            <div
              key={cit.id}
              className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-200">{cit.title}</span>
                  <SourceBadge tier={cit.tier} refNumber={cit.referenceNumber} />
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Publisher: {cit.publisher} • Date: {cit.publicationDate}
                </div>
                {cit.keyExcerpt && (
                  <p className="text-xs text-slate-300 font-mono italic bg-slate-950/60 p-2 rounded mt-1 border-l-2 border-emerald-500/60">
                    "{cit.keyExcerpt}"
                  </p>
                )}
              </div>

              {cit.url && (
                <a
                  href={cit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 whitespace-nowrap self-start md:self-center transition-colors"
                >
                  <span>Open Public Record</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
