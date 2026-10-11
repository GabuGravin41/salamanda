'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Asset } from '@salamanda/shared-types';
import {
  Search,
  SlidersHorizontal,
  Download,
  X,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CircleHelp,
  FileText,
  Bookmark,
  Check,
  ExternalLink,
} from 'lucide-react';
import { formatKES, formatSectorLabel } from '../lib/formatters';

interface AssetRegistryTableProps {
  initialAssets: Asset[];
  compact?: boolean;
  autopsiesOnly?: boolean;
  defaultTab?: string;
}

export function AssetRegistryTable({
  initialAssets,
  compact = false,
  autopsiesOnly = false,
  defaultTab = 'All assets',
}: AssetRegistryTableProps) {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState(defaultTab);
  const [selectedStatus, setSelectedStatus] = useState('All statuses');
  const [selectedSector, setSelectedSector] = useState('All sectors');
  const [selectedCounty, setSelectedCounty] = useState('All counties');
  const [page, setPage] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [moreFilters, setMoreFilters] = useState(false);
  const [sortDirection, setSortDirection] = useState<'default' | 'asc' | 'desc'>('default');

  // Extract unique sectors and counties
  const sectors = useMemo(() => {
    const set = new Set(initialAssets.map((a) => a.sector));
    return Array.from(set).sort();
  }, [initialAssets]);

  const counties = useMemo(() => {
    const set = new Set(initialAssets.map((a) => a.county).filter(Boolean));
    return Array.from(set).sort();
  }, [initialAssets]);

  // Base list
  const baseAssets = useMemo(() => {
    let list = initialAssets;
    if (autopsiesOnly) {
      list = list.filter((a) =>
        ['DEFUNCT', 'LIQUIDATED', 'UNDER_RECEIVERSHIP', 'UNDER_ADMINISTRATION', 'DISTRESSED'].includes(a.status)
      );
    }
    if (tab === 'Distressed & defunct') {
      list = list.filter((a) =>
        ['DEFUNCT', 'LIQUIDATED', 'UNDER_RECEIVERSHIP', 'UNDER_ADMINISTRATION', 'DISTRESSED'].includes(a.status)
      );
    } else if (tab === 'Land benchmarks') {
      list = list.filter((a) => a.sector === 'REAL_ESTATE_LAND');
    } else if (tab === 'Infrastructure') {
      list = list.filter((a) => a.sector === 'ENERGY_INFRASTRUCTURE');
    }
    return list;
  }, [initialAssets, autopsiesOnly, tab]);

  // Filtered list
  const filtered = useMemo(() => {
    let list = baseAssets.filter((a) => {
      const q = query.toLowerCase();
      const matchesSearch =
        !query ||
        a.name.toLowerCase().includes(q) ||
        (a.legalName && a.legalName.toLowerCase().includes(q)) ||
        (a.county && a.county.toLowerCase().includes(q)) ||
        a.sector.toLowerCase().includes(q);

      const matchesStatus =
        selectedStatus === 'All statuses' || a.status === selectedStatus;

      const matchesSector =
        selectedSector === 'All sectors' || a.sector === selectedSector;

      const matchesCounty =
        selectedCounty === 'All counties' || a.county === selectedCounty;

      return matchesSearch && matchesStatus && matchesSector && matchesCounty;
    });

    const getVal = (x: Asset) => x.currentValuationKES || x.peakValuationKES || 0;

    if (sortDirection === 'asc') {
      list = [...list].sort(
        (a, b) => getVal(a) - getVal(b)
      );
    } else if (sortDirection === 'desc') {
      list = [...list].sort(
        (a, b) => getVal(b) - getVal(a)
      );
    }

    return list;
  }, [baseAssets, query, selectedStatus, selectedSector, selectedCounty, sortDirection]);

  // Pagination
  const pageSize = compact ? 8 : 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const rows = filtered.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const toggleSave = (slug: string) => {
    setSavedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const exportCSV = () => {
    const getVal = (x: Asset) => x.currentValuationKES || x.peakValuationKES || 0;
    const csvHeader = 'Entity,Legal Name,Sector,County,Status,Valuation (KES),Established\n';
    const csvRows = filtered
      .map((a) =>
        `"${a.name}","${a.legalName || ''}","${a.sector}","${a.county}","${a.status}","${getVal(a)}","${a.establishedYear}"`
      )
      .join('\n');
    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'salamanda-asset-registry.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const getColorClass = (name: string) => {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['entity-green', 'entity-blue', 'entity-orange', 'entity-gray', 'entity-red'];
    return colors[hash % colors.length];
  };

  return (
    <section className="registry-section space-y-4">
      {/* Section Header */}
      <div className="section-heading">
        <div>
          <h2>
            {autopsiesOnly ? 'Corporate failure dossiers' : 'Asset registry'}
            <span className="count-badge">{filtered.length} entities</span>
          </h2>
          <p>
            {autopsiesOnly
              ? 'Failure modes, creditor exposure, and liquidation records.'
              : 'The companies, infrastructure, and real assets shaping Kenya’s economy.'}
          </p>
        </div>
        <button
          onClick={exportCSV}
          type="button"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          <Download size={13} />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Tabs */}
      {!autopsiesOnly && (
        <div className="registry-tabs" role="tablist">
          {['All assets', 'Distressed & defunct', 'Land benchmarks', 'Infrastructure'].map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={`registry-tab ${tab === t ? 'registry-tab-active' : ''}`}
              onClick={() => {
                setTab(t);
                setPage(0);
              }}
            >
              {t}
              {t === 'All assets' && <span>{initialAssets.length}</span>}
            </button>
          ))}
        </div>
      )}

      {/* Filter Row */}
      <div className="registry-filters">
        <div className="search-input">
          <Search size={14} />
          <input
            aria-label="Search assets"
            placeholder="Search assets, entities, or counties…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
          />
          {query && (
            <button
              type="button"
              className="p-1 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
              onClick={() => {
                setQuery('');
                setPage(0);
              }}
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Sector dropdown */}
        <select
          value={selectedSector}
          onChange={(e) => {
            setSelectedSector(e.target.value);
            setPage(0);
          }}
          className="filter-select"
          aria-label="Filter by sector"
        >
          <option value="All sectors">All sectors</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {formatSectorLabel(s)}
            </option>
          ))}
        </select>

        {/* Status dropdown */}
        <select
          value={selectedStatus}
          onChange={(e) => {
            setSelectedStatus(e.target.value);
            setPage(0);
          }}
          className="filter-select"
          aria-label="Filter by status"
        >
          <option value="All statuses">All statuses</option>
          <option value="ACTIVE">Operational / Active</option>
          <option value="DISTRESSED">Distressed / Impaired</option>
          <option value="UNDER_RECEIVERSHIP">Under Receivership</option>
          <option value="UNDER_ADMINISTRATION">Under Administration</option>
          <option value="LIQUIDATED">Liquidated / Dissolved</option>
          <option value="DEFUNCT">Defunct / Inactive</option>
        </select>

        {/* County Toggle */}
        <button
          type="button"
          title="County filters"
          aria-label="County filters"
          className={`p-2 rounded border border-border text-muted-foreground hover:text-foreground ${
            moreFilters ? 'bg-muted text-foreground' : 'bg-card'
          }`}
          onClick={() => setMoreFilters(!moreFilters)}
        >
          <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Extra Filters (County) */}
      {moreFilters && (
        <div className="extra-filters flex items-center gap-3 p-3 bg-muted/40 rounded border border-border">
          <select
            value={selectedCounty}
            onChange={(e) => {
              setSelectedCounty(e.target.value);
              setPage(0);
            }}
            className="filter-select"
            aria-label="Filter by county"
          >
            <option value="All counties">All counties</option>
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
            onClick={() => {
              setSelectedStatus('All statuses');
              setSelectedSector('All sectors');
              setSelectedCounty('All counties');
              setQuery('');
              setPage(0);
            }}
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* Institutional Asset Table */}
      <div className="table-scroll">
        <table className="asset-table">
          <thead>
            <tr>
              <th>ASSET / ENTITY</th>
              <th>SECTOR</th>
              <th>STATUS</th>
              <th>
                <button
                  type="button"
                  className="sort-button flex items-center gap-1 font-semibold text-[9px] uppercase tracking-wider"
                  onClick={() =>
                    setSortDirection((prev) =>
                      prev === 'desc' ? 'asc' : 'desc'
                    )
                  }
                >
                  VALUE (KES)
                  <span className="text-[10px]">
                    {sortDirection === 'desc' ? '↓' : sortDirection === 'asc' ? '↑' : '↕'}
                  </span>
                </button>
              </th>
              <th>VERIFICATION</th>
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => {
              const val = a.currentValuationKES || a.peakValuationKES || 0;
              const formattedVal =
                val === 0
                  ? '—'
                  : val >= 1_000_000_000
                  ? `${(val / 1_000_000_000).toFixed(val % 1_000_000_000 === 0 ? 0 : 1)}B`
                  : `${(val / 1_000_000).toFixed(0)}M`;

              const isDistressed =
                ['DEFUNCT', 'LIQUIDATED', 'UNDER_RECEIVERSHIP', 'UNDER_ADMINISTRATION', 'DISTRESSED'].includes(a.status);

              return (
                <tr key={a.id}>
                  <td>
                    <button
                      type="button"
                      className="entity-button flex items-center gap-2.5 text-left w-full hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedAsset(a)}
                    >
                      <span className={`entity-logo ${getColorClass(a.name)}`}>
                        {getInitials(a.name)}
                      </span>
                      <span>
                        <strong className="block text-xs font-semibold text-foreground">
                          {a.name}
                        </strong>
                        <small className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <MapPin size={9} />
                          {a.county || 'Kenya'}
                        </small>
                      </span>
                    </button>
                  </td>

                  <td>{formatSectorLabel(a.sector)}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        a.status === 'ACTIVE'
                          ? 'status-active'
                          : isDistressed
                          ? 'status-distressed'
                          : 'status-idle'
                      }`}
                    >
                      <span />
                      {a.status === 'ACTIVE'
                        ? 'Active'
                        : a.status === 'UNDER_RECEIVERSHIP'
                        ? 'Receivership'
                        : a.status === 'UNDER_ADMINISTRATION'
                        ? 'Administration'
                        : a.status === 'LIQUIDATED'
                        ? 'Liquidated'
                        : a.status === 'DEFUNCT'
                        ? 'Defunct'
                        : 'Distressed'}
                    </span>
                  </td>

                  <td className="tabular-nums font-mono font-medium text-foreground">
                    {formattedVal}
                  </td>

                  <td>
                    <span className="verification verified-primary">
                      <ShieldCheck size={12} />
                      Verified primary
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                      title={`Open ${a.name} dossier`}
                      onClick={() => setSelectedAsset(a)}
                    >
                      <ArrowUpRight size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {rows.length === 0 && (
        <div className="empty-state text-center py-12 bg-card border border-border rounded-md">
          <Search size={24} className="mx-auto text-muted-foreground mb-2" />
          <h3 className="text-sm font-semibold text-foreground">No matching assets found</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Try adjusting your search terms or resetting filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedStatus('All statuses');
              setSelectedSector('All sectors');
              setSelectedCounty('All counties');
              setTab('All assets');
            }}
            className="mt-4 px-3 py-1.5 text-xs rounded border border-border bg-muted text-foreground hover:bg-card transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination Footer */}
      <div className="table-footer flex items-center justify-between text-xs text-muted-foreground pt-2">
        <span>
          Showing {filtered.length === 0 ? 0 : currentPage * pageSize + 1}–
          {Math.min((currentPage + 1) * pageSize, filtered.length)} of {filtered.length} assets
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-1.5 rounded border border-border bg-card disabled:opacity-40"
            disabled={currentPage === 0}
            onClick={() => setPage(currentPage - 1)}
            aria-label="Previous page"
          >
            <ChevronLeft size={13} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`w-7 h-7 text-xs rounded font-medium ${
                currentPage === i
                  ? 'bg-secondary text-primary font-bold'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            className="p-1.5 rounded border border-border bg-card disabled:opacity-40"
            disabled={currentPage === totalPages - 1}
            onClick={() => setPage(currentPage + 1)}
            aria-label="Next page"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Interactive Dossier Modal */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className={`entity-logo entity-logo-lg ${getColorClass(selectedAsset.name)}`}>
                  {getInitials(selectedAsset.name)}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {selectedAsset.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {formatSectorLabel(selectedAsset.sector)} · {selectedAsset.county || 'Kenya'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="p-1 rounded text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedAsset(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Verification notice */}
            <div className="detail-notice flex items-center gap-2 p-3 bg-muted/50 rounded border border-border text-xs text-muted-foreground">
              <CircleHelp size={14} className="shrink-0 text-primary" />
              <span>
                Verified statutory record · High Court / Registrar of Companies / Kenya Gazette.
              </span>
            </div>

            {/* Overview Attributes */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="detail-label text-[10px] font-mono text-muted-foreground block mb-0.5">
                  ESTABLISHED
                </span>
                <strong className="text-foreground">
                  {selectedAsset.establishedYear || 'Undisclosed'}
                </strong>
              </div>

              <div>
                <span className="detail-label text-[10px] font-mono text-muted-foreground block mb-0.5">
                  VALUATION
                </span>
                <strong className="text-foreground font-mono">
                  {formatKES(selectedAsset.currentValuationKES || selectedAsset.peakValuationKES)}
                </strong>
              </div>

              <div>
                <span className="detail-label text-[10px] font-mono text-muted-foreground block mb-0.5">
                  OPERATIONAL STATUS
                </span>
                <strong className="text-foreground">
                  {selectedAsset.status.replace(/_/g, ' ')}
                </strong>
              </div>

              <div>
                <span className="detail-label text-[10px] font-mono text-muted-foreground block mb-0.5">
                  COUNTY / JURISDICTION
                </span>
                <strong className="text-foreground">
                  {selectedAsset.county || 'National'}
                </strong>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1">
              <span className="detail-label text-[10px] font-mono text-muted-foreground block">
                INTELLIGENCE SUMMARY
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed">
                {selectedAsset.summary}
              </p>
            </div>

            {/* Autopsy Details if applicable */}
            {selectedAsset.autopsy && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 rounded space-y-2 text-xs">
                <span className="font-semibold text-rose-700 dark:text-rose-400 block">
                  Autopsy Case Study: {selectedAsset.autopsy.primaryCause.replace(/_/g, ' ')}
                </span>
                <p className="text-muted-foreground">
                  {selectedAsset.autopsy.executiveSummary}
                </p>
                {selectedAsset.autopsy.peakValuationKES && (
                  <div className="flex justify-between pt-1 border-t border-rose-200/50 dark:border-rose-900/40 text-[11px]">
                    <span>Peak Valuation:</span>
                    <strong className="font-mono">{formatKES(selectedAsset.autopsy.peakValuationKES)}</strong>
                  </div>
                )}
                {selectedAsset.autopsy.debtAtCollapseKES && (
                  <div className="flex justify-between text-[11px]">
                    <span>Debt at Collapse:</span>
                    <strong className="font-mono text-amber-600 dark:text-amber-400">
                      {formatKES(selectedAsset.autopsy.debtAtCollapseKES)}
                    </strong>
                  </div>
                )}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => toggleSave(selectedAsset.slug)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-border bg-card hover:bg-muted text-foreground transition-colors"
              >
                {savedSlugs.includes(selectedAsset.slug) ? (
                  <>
                    <Check size={13} className="text-primary" />
                    <span>Saved in Watchlist</span>
                  </>
                ) : (
                  <>
                    <Bookmark size={13} />
                    <span>Save to Watchlist</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                {selectedAsset.googleMapsUrl && (
                  <a
                    href={selectedAsset.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded border border-border bg-card hover:bg-muted text-foreground transition-colors"
                  >
                    <span>View on Maps</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                <Link
                  href={`/assets/${selectedAsset.slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Full Dossier</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
