import React from 'react';
import { getAutopsies, getAssets } from '@salamanda/database';
import { AssetRegistryTable } from '../../components/AssetRegistryTable';
import { formatKES, formatCauseLabel, formatSectorLabel } from '../../lib/formatters';
import { FileText, ShieldCheck, MapPin, ArrowUpRight, Scale } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export default async function AutopsiesPage() {
  const [autopsyList, assets] = await Promise.all([
    getAutopsies(),
    getAssets(),
  ]);

  const totalDestroyed = autopsyList.reduce(
    (sum, item) => sum + (item.autopsy.peakValuationKES || 0),
    0
  );
  const totalDebt = autopsyList.reduce(
    (sum, item) => sum + (item.autopsy.debtAtCollapseKES || 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">FORENSIC INTELLIGENCE</div>
          <h1>Corporate autopsies</h1>
          <p>The companies that collapsed, the capital lost, and what remains.</p>
        </div>
      </div>

      {/* Autopsy Macro Summary */}
      <div className="autopsy-summary">
        <div>
          <span>FAILURE MODES CLASSIFIED</span>
          <strong>7</strong>
        </div>
        <div>
          <span>ENTERPRISE VALUE DESTROYED</span>
          <strong>{formatKES(totalDestroyed)}</strong>
        </div>
        <div>
          <span>CREDITOR EXPOSURE</span>
          <strong>{formatKES(totalDebt)}</strong>
        </div>
        <p>
          Statutory records from High Court of Kenya (eKLR), Official Receiver liquidation notices, and audited filings.
        </p>
      </div>

      {/* Registry Table in Autopsies Mode */}
      <AssetRegistryTable initialAssets={assets} autopsiesOnly={true} />

      {/* Forensic Case Study Dossiers */}
      <div className="space-y-6 pt-6">
        <div className="section-heading">
          <div>
            <h2>Documented Case Studies ({autopsyList.length})</h2>
            <p>Full forensic post-mortems with verified court citations and receivership timelines.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {autopsyList.map(({ asset, autopsy }) => (
            <article key={asset.id} className="research-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="small-label">{formatSectorLabel(asset.sector)}</span>
                  <span className="status-badge status-distressed">
                    <span />
                    {asset.status.replace(/_/g, ' ')}
                  </span>
                </div>

                <h2>{asset.name}</h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                  <MapPin size={12} />
                  <span>{asset.county || 'Kenya'}</span>
                  <span>·</span>
                  <span>Est. {asset.establishedYear} {asset.defunctYear && `– ${asset.defunctYear}`}</span>
                </div>

                <div className="mt-4 p-3 rounded bg-muted/50 border border-border">
                  <span className="text-[10px] font-mono text-primary font-semibold block mb-1">
                    PRIMARY FAILURE MODE
                  </span>
                  <p className="text-xs font-medium text-foreground">
                    {formatCauseLabel(autopsy.primaryCause)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {autopsy.executiveSummary}
                  </p>
                </div>

                <div className="allocator-numbers mt-4">
                  <div>
                    <span className="detail-label">PEAK VALUATION</span>
                    <strong className="text-sm font-mono">
                      {formatKES(autopsy.peakValuationKES)}
                    </strong>
                  </div>
                  <div>
                    <span className="detail-label">DEBT AT COLLAPSE</span>
                    <strong className="text-sm font-mono text-foreground">
                      {formatKES(autopsy.debtAtCollapseKES)}
                    </strong>
                  </div>
                </div>

                {autopsy.citations && autopsy.citations.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                    <Scale size={13} className="text-primary shrink-0" />
                    <span className="font-mono truncate">
                      {autopsy.citations[0].referenceNumber || autopsy.citations[0].title}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border mt-5">
                <Link
                  href={`/assets/${asset.slug}`}
                  className="card-action text-xs font-semibold"
                >
                  <span>Open forensic autopsy brief</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
