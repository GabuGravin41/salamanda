import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAssetBySlug } from '@salamanda/database';
import { formatKES, formatAssetClassLabel, formatSectorLabel } from '../../../lib/formatters';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  FileText,
  Activity,
  History,
  Scale,
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
    <div className="space-y-6 max-w-5xl">
      {/* Return link */}
      <div>
        <Link
          href="/assets"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={13} />
          <span>Back to Asset Registry</span>
        </Link>
      </div>

      {/* Main Dossier Header Card */}
      <article className="research-card space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="small-label">
                {formatAssetClassLabel(asset.assetClass)}
              </span>
              <span
                className={`status-badge ${
                  asset.status === 'ACTIVE'
                    ? 'status-active'
                    : isDeadOrDistressed
                    ? 'status-distressed'
                    : 'status-idle'
                }`}
              >
                <span />
                {asset.status.replace(/_/g, ' ')}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">
                REF: {asset.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              {asset.name}
            </h1>

            {asset.legalName && asset.legalName !== asset.name && (
              <p className="text-xs text-muted-foreground font-mono">
                Legal Entity: {asset.legalName}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground pt-1">
              <span className="font-semibold text-primary">
                {formatSectorLabel(asset.sector)}
              </span>
              <span>·</span>
              <span>{asset.subsector}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-foreground">
                <MapPin size={12} className="text-muted-foreground" />
                {asset.county || 'Kenya'}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-muted-foreground" />
                Est. {asset.establishedYear}
                {asset.defunctYear && ` – ${asset.defunctYear}`}
              </span>
              {asset.googleMapsUrl && (
                <>
                  <span>·</span>
                  <a
                    href={asset.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <span>View on Maps</span>
                    <ExternalLink size={10} />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Key Capital Metrics Card */}
          <div className="p-4 bg-muted/40 border border-border rounded min-w-[240px] space-y-3">
            <div>
              <span className="detail-label">
                {asset.assetClass === 'LAND_BENCHMARK'
                  ? 'PRICE PER ACRE (2024)'
                  : isDeadOrDistressed
                  ? 'PEAK VALUATION'
                  : 'ENTERPRISE VALUATION'}
              </span>
              <span className="text-2xl font-bold font-mono text-foreground">
                {formatKES(isDeadOrDistressed ? asset.peakValuationKES : asset.currentValuationKES)}
              </span>
            </div>

            {asset.debtExposureKES ? (
              <div className="pt-2 border-t border-border">
                <span className="detail-label">CREDITOR LIABILITIES</span>
                <span className="text-sm font-bold font-mono text-foreground">
                  {formatKES(asset.debtExposureKES)}
                </span>
              </div>
            ) : null}

            {asset.headquarters && (
              <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                <span className="detail-label">PHYSICAL SITE</span>
                <span className="text-foreground">{asset.headquarters}</span>
              </div>
            )}
          </div>
        </div>

        {/* Operational Overview Narrative */}
        <div className="pt-4 border-t border-border space-y-2">
          <span className="detail-label">OPERATIONAL SUMMARY</span>
          <p className="text-xs text-foreground/90 leading-relaxed max-w-3xl">
            {asset.summary}
          </p>
        </div>
      </article>

      {/* Forensic Autopsy Section (If present) */}
      {asset.autopsy && (
        <section className="research-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-primary" />
              <h2 className="text-base font-semibold text-foreground">
                Forensic Failure Autopsy
              </h2>
            </div>
            <span className="verification verified-primary">
              <ShieldCheck size={12} />
              Verified liquidation filing
            </span>
          </div>

          <div className="p-3 bg-muted/40 rounded border border-border text-xs space-y-2">
            <span className="detail-label">PRIMARY FAILURE MODE</span>
            <p className="font-semibold text-foreground">
              {asset.autopsy.primaryCause.replace(/_/g, ' ')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {asset.autopsy.executiveSummary}
            </p>
          </div>

          {asset.autopsy.citations && asset.autopsy.citations.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Scale size={13} className="text-primary" />
              <span className="font-mono">
                Citation: {asset.autopsy.citations[0].referenceNumber || asset.autopsy.citations[0].title}
              </span>
            </div>
          )}
        </section>
      )}

      {/* Primary Sourced Citations */}
      {asset.primaryCitations && asset.primaryCitations.length > 0 && (
        <section className="research-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              <h2 className="text-base font-semibold text-foreground">
                Primary Citations Audit Trail
              </h2>
            </div>
            <span className="count-badge">
              {asset.primaryCitations.length} Records
            </span>
          </div>

          <div className="space-y-3">
            {asset.primaryCitations.map((cit) => (
              <div
                key={cit.id}
                className="p-3.5 rounded border border-border bg-card space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-xs font-semibold text-foreground">
                    {cit.title}
                  </strong>
                  <span className="verification verified-primary">
                    {cit.referenceNumber || 'Statutory Filing'}
                  </span>
                </div>

                <div className="text-[11px] text-muted-foreground">
                  <span>Publisher: {cit.publisher}</span>
                  <span> · </span>
                  <span>Date: {cit.publicationDate}</span>
                </div>

                {cit.keyExcerpt && (
                  <p className="text-xs text-muted-foreground italic bg-muted/50 p-2.5 rounded border-l-2 border-primary mt-1">
                    "{cit.keyExcerpt}"
                  </p>
                )}

                {cit.url && (
                  <div className="pt-1">
                    <a
                      href={cit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
                    >
                      <span>Open public record</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
