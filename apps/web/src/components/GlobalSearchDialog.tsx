'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowUpRight, MapPin, Building2, ShieldCheck } from 'lucide-react';
import type { Asset, InstitutionalPlayer } from '@salamanda/shared-types';
import { formatKES, formatSectorLabel } from '../lib/formatters';
import { rankSearchResults, SearchField } from '../lib/search-ranking';

interface SearchResult {
  id: string;
  name: string;
  type: 'asset' | 'player';
  detail: string;
  searchFields: SearchField[];
  destination: string;
  status?: string;
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
  const [catalog, setCatalog] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      if (catalog.length === 0) {
        setLoading(true);
        setLoadError('');
        const loadAssets = fetch('/api/assets').then((response) => {
          if (!response.ok) throw new Error('Asset index unavailable');
          return response.json() as Promise<{ data?: Asset[] }>;
        });
        const loadPlayers = fetch('/api/players').then((response) => {
          if (!response.ok) throw new Error('Player index unavailable');
          return response.json() as Promise<{ data?: InstitutionalPlayer[] }>;
        });

        Promise.allSettled([loadAssets, loadPlayers])
          .then(([assetResult, playerResult]) => {
            if (assetResult.status === 'rejected' && playerResult.status === 'rejected') {
              throw new Error('Search indexes unavailable');
            }
            const assets: SearchResult[] = (assetResult.status === 'fulfilled'
              ? assetResult.value.data ?? []
              : []
            ).map((asset) => ({
              id: asset.id,
              name: asset.name,
              type: 'asset',
              detail: `${formatSectorLabel(asset.sector)} · ${asset.county}`,
              searchFields: [
                { text: asset.name, weight: 14 },
                { text: asset.legalName ?? '', weight: 12 },
                { text: asset.slug.replace(/-/g, ' '), weight: 9 },
                { text: `${asset.sector} ${asset.subsector} ${asset.county}`, weight: 5 },
                { text: asset.status, weight: 3 },
              ],
              destination: `/assets/${asset.slug}`,
              status: asset.status,
              valuationKES: asset.currentValuationKES || asset.peakValuationKES || 0,
            }));
            const players: SearchResult[] = (playerResult.status === 'fulfilled'
              ? playerResult.value.data ?? []
              : []
            ).map((player) => ({
              id: player.id,
              name: player.name,
              type: 'player',
              detail: `${player.playerType.replace(/_/g, ' ')} · ${player.headquarters}`,
              searchFields: [
                { text: player.name, weight: 14 },
                { text: (player.aliases ?? []).join(' '), weight: 12 },
                { text: player.slug.replace(/-/g, ' '), weight: 9 },
                { text: player.leadership, weight: 7 },
                { text: player.keyHoldings.map((holding) => holding.assetName).join(' '), weight: 7 },
                { text: `${player.playerType} ${player.headquarters}`, weight: 5 },
                { text: `${player.activeFocusPresent} ${player.summary}`, weight: 2 },
              ],
              destination: `/players?search=${encodeURIComponent(player.name)}`,
            }));
            setCatalog([...assets, ...players]);
          })
          .catch((error) => {
            console.error('Failed to load search catalog:', error);
            setLoadError('Search is temporarily unavailable. Please try again.');
          })
          .finally(() => setLoading(false));
      }
    }
  }, [isOpen, catalog.length]);

  useEffect(() => {
    setResults(
      rankSearchResults(catalog, query, (result) => result.searchFields, (result) => result.name, 8),
    );
  }, [query, catalog]);

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
        className="glass-panel bg-card text-card-foreground border border-border rounded-lg shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search assets, people, sectors, and counties…"
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
          ) : loadError ? (
            <div className="p-8 text-center text-xs text-muted-foreground">{loadError}</div>
          ) : results.length > 0 ? (
            results.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  onClose();
                  router.push(r.destination);
                }}
                className="w-full flex items-center justify-between p-3.5 hover:bg-muted/60 transition-colors text-left group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                      {r.name}
                    </strong>
                    <span className="text-[9px] px-1.5 py-0.2 rounded border border-border bg-card text-muted-foreground">
                      {r.type === 'player' ? 'POWER PLAYER' : r.status?.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    {r.type === 'asset' ? <MapPin size={9} /> : <Building2 size={9} />}
                    <span>{r.detail}</span>
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
              No matching records found for "{query}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{catalog.length} economic records and power-player profiles</span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-primary" />
            Audited Kenyan filings
          </span>
        </div>
      </div>
    </div>
  );
}
