'use client';

import React, { useState } from 'react';
import { DealPipelineOpportunity, InstitutionalAllocator } from '@salamanda/shared-types';
import {
  GitBranch,
  MapPin,
  Landmark,
  ArrowUpRight,
  ShieldCheck,
  CircleHelp,
  X,
  ExternalLink,
} from 'lucide-react';
import { formatKES, formatSectorLabel } from '../lib/formatters';

interface PipelineManagerProps {
  initialDeals: DealPipelineOpportunity[];
  initialAllocators: InstitutionalAllocator[];
}

export function PipelineManager({
  initialDeals,
  initialAllocators,
}: PipelineManagerProps) {
  const [selectedDeal, setSelectedDeal] = useState<DealPipelineOpportunity | null>(null);
  const [selectedAllocator, setSelectedAllocator] = useState<InstitutionalAllocator | null>(null);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'allocators'>('pipeline');
  const [stageFilter, setStageFilter] = useState('All opportunities');

  const totalCapitalRequired = initialDeals.reduce(
    (sum, d) => sum + (d.requiredCapitalKES || 0),
    0
  );

  const totalAum = initialAllocators.reduce(
    (sum, a) => sum + (a.aumKES || 0),
    0
  );

  const filteredDeals = initialDeals.filter((d) => {
    if (stageFilter === 'All opportunities') return true;
    if (stageFilter === 'Screening') return d.stage === 'REVITALIZATION_AUCTION';
    if (stageFilter === 'Due diligence') return d.stage === 'DISTRESSED_DEBT_RESTRUCTURING';
    if (stageFilter === 'Structuring') return d.stage === 'EXPANSION_CAPITAL' || d.stage === 'CONCESSION_BIDDING';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Selector: Deals vs Allocators */}
      <div className="registry-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'pipeline'}
          className={`registry-tab ${activeTab === 'pipeline' ? 'registry-tab-active' : ''}`}
          onClick={() => setActiveTab('pipeline')}
        >
          Deal pipeline
          <span>{initialDeals.length}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'allocators'}
          className={`registry-tab ${activeTab === 'allocators' ? 'registry-tab-active' : ''}`}
          onClick={() => setActiveTab('allocators')}
        >
          Capital allocators
          <span>{initialAllocators.length}</span>
        </button>
      </div>

      {activeTab === 'pipeline' ? (
        <div className="space-y-6">
          {/* Pipeline Total Banner */}
          <div className="pipeline-total">
            <div>
              <GitBranch size={20} />
              <span>TOTAL CAPITAL REQUIRED</span>
              <strong>{formatKES(totalCapitalRequired)}</strong>
            </div>
            <span>{initialDeals.length} opportunities · Across real economy sectors</span>
          </div>

          {/* Stage Filter Buttons */}
          <div className="flex gap-2">
            {['All opportunities', 'Screening', 'Due diligence', 'Structuring'].map((s) => (
              <button
                key={s}
                type="button"
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  stageFilter === s
                    ? 'border-primary bg-secondary text-primary font-semibold'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setStageFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Deal Grid */}
          <div className="deal-grid">
            {filteredDeals.map((d, i) => (
              <article key={d.id} className="research-card deal-card flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="deal-number">0{i + 1}</span>
                    <span className="status-badge status-active">
                      <span />
                      {d.stage.replace(/_/g, ' ')}
                    </span>
                  </div>

                  <span className="small-label mt-4 block">
                    {formatSectorLabel(d.targetSector)}
                  </span>
                  <h2>{d.title}</h2>
                  <p>{d.salamandaThesis}</p>

                  <span className="location">
                    <MapPin size={12} />
                    {d.county}, Kenya
                  </span>

                  <div className="deal-capital">
                    <span className="detail-label">CAPITAL REQUIRED</span>
                    <strong>{formatKES(d.requiredCapitalKES)}</strong>
                  </div>

                  {d.matchingAllocators && d.matchingAllocators.length > 0 && (
                    <div className="deal-allocator">
                      <Landmark size={16} />
                      <div>
                        <span className="detail-label">INDICATIVE ALLOCATOR TARGET</span>
                        <strong>{d.matchingAllocators.join(' · ')}</strong>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="card-action"
                  onClick={() => setSelectedDeal(d)}
                >
                  <span>Open investment brief</span>
                  <ArrowUpRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Allocator Total Banner */}
          <div className="pipeline-total">
            <div>
              <Landmark size={20} />
              <span>CUMULATIVE ALLOCATOR BALANCE SHEET</span>
              <strong>{formatKES(totalAum)}</strong>
            </div>
            <span>{initialAllocators.length} Institutional Funds tracked</span>
          </div>

          {/* Allocator Grid */}
          <div className="allocator-grid">
            {initialAllocators.map((a) => (
              <article key={a.id} className="research-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="entity-logo entity-logo-lg entity-blue">
                      {a.name.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="small-label">
                      {a.category.replace(/_/g, ' ')}
                    </span>
                  </div>

                  <h2>{a.name}</h2>

                  <div className="allocator-numbers">
                    <div>
                      <span className="detail-label">AUM / BALANCE SHEET</span>
                      <strong>{formatKES(a.aumKES)}</strong>
                    </div>
                    <div>
                      <span className="detail-label">TICKET SIZE (KES)</span>
                      <strong>
                        {a.ticketSizeKES
                          ? `${formatKES(a.ticketSizeKES.min)} – ${formatKES(a.ticketSizeKES.max)}`
                          : 'Mandate specific'}
                      </strong>
                    </div>
                  </div>

                  <div className="holdings">
                    <span className="detail-label">INVESTMENT MANDATE</span>
                    <p>{a.mandate}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="card-action"
                  onClick={() => setSelectedAllocator(a)}
                >
                  <span>Explore allocator mandate</span>
                  <ArrowUpRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Deal Brief Modal */}
      {selectedDeal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedDeal(null)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {selectedDeal.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedDeal.county}, Kenya · {selectedDeal.stage.replace(/_/g, ' ')}
                </p>
              </div>
              <button
                type="button"
                className="p-1 rounded text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedDeal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Capital required</span>
              <strong className="text-foreground font-mono">
                {formatKES(selectedDeal.requiredCapitalKES)}
              </strong>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Matching capital allocators</span>
              <strong className="text-foreground">
                {selectedDeal.matchingAllocators?.join(', ') || 'Institutional PE / DFI'}
              </strong>
            </div>

            <div className="detail-notice flex items-center gap-2 p-3 bg-muted/50 rounded border border-border text-xs text-muted-foreground">
              <CircleHelp size={14} className="shrink-0 text-primary" />
              <span>
                Deal brief derived from High Court receiver filings & restructuring proposals. No public offering implied.
              </span>
            </div>

            <div className="space-y-1">
              <span className="detail-label text-[10px] font-mono text-muted-foreground block">
                INVESTMENT THESIS & DUE DILIGENCE
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed">
                {selectedDeal.salamandaThesis}
              </p>
            </div>

            {selectedDeal.keyCatalyst && (
              <div className="space-y-1 pt-2 border-t border-border">
                <span className="detail-label text-[10px] font-mono text-muted-foreground block">
                  PRIMARY CATALYST
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {selectedDeal.keyCatalyst}
                </p>
              </div>
            )}

            <div className="flex justify-end pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => setSelectedDeal(null)}
                className="px-3 py-1.5 text-xs rounded border border-border bg-muted hover:bg-card text-foreground"
              >
                Close brief
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Allocator Modal */}
      {selectedAllocator && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedAllocator(null)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {selectedAllocator.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedAllocator.category.replace(/_/g, ' ')} · Kenya / East Africa
                </p>
              </div>
              <button
                type="button"
                className="p-1 rounded text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedAllocator(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">AUM / Balance sheet</span>
              <strong className="text-foreground font-mono">
                {formatKES(selectedAllocator.aumKES)}
              </strong>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Deployment ticket size</span>
              <strong className="text-foreground font-mono">
                {selectedAllocator.ticketSizeKES
                  ? `${formatKES(selectedAllocator.ticketSizeKES.min)} – ${formatKES(selectedAllocator.ticketSizeKES.max)}`
                  : 'Mandate specific'}
              </strong>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Investment mandate</span>
              <strong className="text-foreground">
                {selectedAllocator.mandate}
              </strong>
            </div>

            <div className="flex justify-end pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => setSelectedAllocator(null)}
                className="px-3 py-1.5 text-xs rounded border border-border bg-muted hover:bg-card text-foreground"
              >
                Close profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
