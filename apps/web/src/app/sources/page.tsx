import React from 'react';
import { getAssets } from '@salamanda/database';
import { SourceBadge } from '../../components/ui/SourceBadge';
import { ShieldCheck, ExternalLink, Database, BookOpen, Scale, FileText } from 'lucide-react';

export const revalidate = 60;

export default async function SourcesPage() {
  const assets = await getAssets();

  // Aggregate all citations across assets, autopsies, and timelines
  const citationMap = new Map<string, { citation: any; assetName: string; assetSlug: string }>();

  assets.forEach((asset) => {
    asset.primaryCitations?.forEach((c) => {
      if (!citationMap.has(c.id)) {
        citationMap.set(c.id, { citation: c, assetName: asset.name, assetSlug: asset.slug });
      }
    });

    asset.autopsy?.citations?.forEach((c) => {
      if (!citationMap.has(c.id)) {
        citationMap.set(c.id, { citation: c, assetName: asset.name, assetSlug: asset.slug });
      }
    });

    asset.timeline?.forEach((t) => {
      if (t.citation && !citationMap.has(t.citation.id)) {
        citationMap.set(t.citation.id, { citation: t.citation, assetName: asset.name, assetSlug: asset.slug });
      }
    });
  });

  const allCitations = Array.from(citationMap.values());

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-surface to-surface border border-emerald-900/50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>LEGAL CITATION & AUDIT INTEGRITY</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          The Sourcing Registry & Gazette Index
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Salamanda operates on an immutable principle: <strong>No assertion exists without an accompanying primary or secondary citation</strong>.
          This audit directory compiles all cited Kenya Gazette notices, Kenya Law (eKLR) rulings, Central Bank of Kenya bulletins,
          and public registrar filings to guarantee absolute transparency, eliminating libel risk and enabling independent verification.
        </p>

        <div className="flex items-center gap-3 pt-2 text-xs text-emerald-400 font-mono">
          <span>{allCitations.length} Total Verified Citations Indexed</span>
          <span>•</span>
          <span>100% Attributed Records</span>
        </div>
      </div>

      {/* Citations List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-emerald-400" />
          Indexed Public Records & Gazette Citations
        </h2>

        <div className="divide-y divide-surface-border/60 bg-surface/80 border border-surface-border rounded-xl overflow-hidden">
          {allCitations.map(({ citation, assetName, assetSlug }) => (
            <div key={citation.id} className="p-5 hover:bg-slate-900/40 transition-colors space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-100">{citation.title}</span>
                  <SourceBadge tier={citation.tier} refNumber={citation.referenceNumber} />
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  Target: {assetName}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                <span>Publisher: {citation.publisher}</span>
                <span>•</span>
                <span>Date: {citation.publicationDate}</span>
                {citation.referenceNumber && (
                  <>
                    <span>•</span>
                    <span className="text-slate-300">Ref: {citation.referenceNumber}</span>
                  </>
                )}
              </div>

              {citation.keyExcerpt && (
                <blockquote className="text-xs text-slate-300 font-mono italic bg-slate-950/70 p-3 rounded-lg border-l-2 border-emerald-500/80">
                  "{citation.keyExcerpt}"
                </blockquote>
              )}

              {citation.url && (
                <div className="pt-1">
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <span>View Public Source Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
