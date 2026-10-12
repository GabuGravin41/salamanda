'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowUpRight, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { formatKES, formatSectorLabel } from '../lib/formatters';
import { Sector } from '@salamanda/shared-types';

interface SearchResult {
  id: string;
  slug: string;
  name: string;
  sector: Sector;
  county: string;
  status: string;
  valuationKES?: number;
}

interface GlobalSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchDialog({ isOpen, onClose }: GlobalSearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [allAssets, setAllAssets] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      if (allAssets.length === 0) {
        setLoading(true);
        fetch('/api/assets')
          .then((res) => res.json())
          .then((data) => {
            if (data?.data) {
              const mapped = data.data.map((a: any) => ({
                id: a.id,
                slug: a.slug,
                name: a.name,
                sector: a.sector,
                county: a.county,
                status: a.status,
                valuationKES: a.currentValuationKES || a.peakValuationKES || 0,
              }));
              setAllAssets(mapped);
              setResults(mapped.slice(0, 8));
            }
          })
          .catch((err) => console.error('Failed to load search catalog:', err))
          .finally(() => setLoading(false));
      } else {
        setResults(allAssets.slice(0, 8));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(allAssets.slice(0, 8));
      return;
    }
    const q = query.toLowerCase();
    const filtered = allAssets.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.county.toLowerCase().includes(q) ||
        a.sector.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
  }, [query, allAssets]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border border-border rounded-lg shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search assets, sectors, counties, and autopsies…"
            aria-label="Search intelligence catalog"
            className="w-full bg-transparent border-0 outline-none text-xs text-foreground placeholder:text-muted-foreground"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
          <kbd className="px-1.5 py-0.5 text-[9px] font-mono bg-card border border-border rounded text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-border/60">
          {loading ? (
            <div className="p-8 text-center text-xs text-muted-foreground">
              Loading intelligence catalog...
            </div>
          ) : results.length > 0 ? (
            results.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  onClose();
                  router.push(`/assets/${r.slug}`);
                }}
                className="w-full flex items-center justify-between p-3.5 hover:bg-muted/60 transition-colors text-left group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                      {r.name}
                    </strong>
                    <span className="text-[9px] px-1.5 py-0.2 rounded border border-border bg-card text-muted-foreground">
                      {r.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span>{formatSectorLabel(r.sector)}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin size={9} />
                      {r.county}
                    </span>
                    {r.valuationKES ? (
                      <>
                        <span>·</span>
                        <span className="font-mono text-foreground font-medium">
                          {formatKES(r.valuationKES)}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-muted-foreground">
              No matching assets found for "{query}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{allAssets.length} total verified economic records indexed</span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-primary" />
            Audited Kenyan filings
          </span>
        </div>
      </div>
    </div>
  );
}
