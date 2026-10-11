import React from 'react';
import { getAssets } from '@salamanda/database';
import {
  ShieldCheck,
  FileText,
  CircleHelp,
  ExternalLink,
  Scale,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

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

  const standards = [
    {
      title: 'Verified primary',
      icon: ShieldCheck,
      tag: 'STATUTORY RECORDS',
      text: 'Kenya Gazette notices, Kenya Law (eKLR) court rulings, CMA / NSE audited filings, and Parliamentary Hansard reports.',
      style: 'primary',
    },
    {
      title: 'Verified secondary',
      icon: FileText,
      tag: 'CREDIBLE REPORTING',
      text: 'Corroborated financial investigative reporting from verified business newsrooms including Business Daily and Reuters.',
      style: 'secondary',
    },
    {
      title: 'Market speculation',
      icon: CircleHelp,
      tag: 'UNCONFIRMED CLAIMS',
      text: 'Uncorroborated street and social media claims are explicitly flagged and separated from audited ownership and financial evidence.',
      style: 'speculation',
    },
  ];

  const sourceLibraries = [
    {
      name: 'Kenya Law (eKLR)',
      kind: 'High Court judgments & statutory gazette notices',
      url: 'https://new.kenyalaw.org/',
    },
    {
      name: 'Capital Markets Authority (CMA)',
      kind: 'Regulatory approvals & audited financial disclosures',
      url: 'https://www.cma.or.ke/',
    },
    {
      name: 'Nairobi Securities Exchange (NSE)',
      kind: 'Listed equities & public corporate actions',
      url: 'https://www.nse.co.ke/',
    },
    {
      name: 'Business Daily Africa',
      kind: 'Independent investigative economic reporting',
      url: 'https://www.businessdailyafrica.com/',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">EVIDENCE BEFORE ASSUMPTION</div>
          <h1>Verification center</h1>
          <p>A transparent standard for every figure, entity, and forensic finding.</p>
        </div>
      </div>

      {/* Verification Standard 3-Card Grid */}
      <div className="verification-grid">
        {standards.map((s) => (
          <article key={s.title} className="research-card">
            <s.icon
              className={`verification-icon verification-${s.style}`}
              size={24}
            />
            <span className="small-label mt-2 block">{s.tag}</span>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </article>
        ))}
      </div>

      {/* Source Library Section */}
      <section className="source-section">
        <div className="section-heading">
          <div>
            <h2>Source library</h2>
            <p>Public statutory registries and reporting publishers used to corroborate intelligence.</p>
          </div>
          <span className="count-badge">{sourceLibraries.length} repositories</span>
        </div>

        <div className="space-y-1">
          {sourceLibraries.map((s) => (
            <div className="source-row" key={s.name}>
              <FileText size={18} className="text-primary shrink-0" />
              <div>
                <strong>{s.name}</strong>
                <p>{s.kind}</p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Visit ${s.name}`}
              >
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Indexed Primary Citations Table / List */}
      <section className="space-y-4 pt-6">
        <div className="section-heading">
          <div>
            <h2>Indexed Statutory Citations ({allCitations.length})</h2>
            <p>Direct primary excerpts attached to active economic assets and corporate autopsies.</p>
          </div>
          <span className="count-badge">Audited Record</span>
        </div>

        <div className="space-y-3">
          {allCitations.map(({ citation, assetName, assetSlug }) => (
            <div
              key={citation.id}
              className="p-4 bg-card border border-border rounded-md space-y-2 hover:border-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <strong className="text-xs font-semibold text-foreground">
                  {citation.title}
                </strong>
                <Link
                  href={`/assets/${assetSlug}`}
                  className="text-[11px] font-mono text-primary hover:underline flex items-center gap-1"
                >
                  <span>Asset: {assetName}</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                <span>Publisher: {citation.publisher}</span>
                <span>·</span>
                <span>Date: {citation.publicationDate}</span>
                {citation.referenceNumber && (
                  <>
                    <span>·</span>
                    <span className="font-mono text-foreground">Ref: {citation.referenceNumber}</span>
                  </>
                )}
              </div>

              {citation.keyExcerpt && (
                <blockquote className="text-xs text-muted-foreground italic bg-muted/50 p-2.5 rounded border-l-2 border-primary mt-2">
                  "{citation.keyExcerpt}"
                </blockquote>
              )}

              {citation.url && (
                <div className="pt-2">
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
                  >
                    <span>View primary document</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
