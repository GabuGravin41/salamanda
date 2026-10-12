'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { Asset } from '@salamanda/shared-types';
import { AssetRegistryTable } from './AssetRegistryTable';
import { Bookmark, Search, ArrowRight, Building2 } from 'lucide-react';

interface WatchlistExplorerProps {
  initialAssets: Asset[];
}

export function WatchlistExplorer({ initialAssets }: WatchlistExplorerProps) {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('salamanda-saved-assets');
      if (stored) {
        setSavedSlugs(JSON.parse(stored));
      } else {
        // Default seed to key turnaround cases so the watchlist is never an empty void
        const defaultSlugs = ['mumias-sugar', 'pan-paper', 'nairobi-expressway'];
        setSavedSlugs(defaultSlugs);
        localStorage.setItem('salamanda-saved-assets', JSON.stringify(defaultSlugs));
      }
    } catch {
      setSavedSlugs(['mumias-sugar', 'pan-paper']);
    }
    setIsLoaded(true);
  }, []);

  const savedAssets = useMemo(() => {
    return initialAssets.filter((a) => savedSlugs.includes(a.slug));
  }, [initialAssets, savedSlugs]);

  if (!isLoaded) {
    return (
      <div className="p-8 text-center text-xs text-muted-foreground bg-card border border-border rounded-lg">
        Loading saved watchlist...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="p-4 rounded border border-border bg-card flex items-start justify-between gap-4 text-xs">
        <div className="flex items-start gap-3">
          <Bookmark size={16} className="text-primary shrink-0 mt-0.5" />
          <div className="leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-semibold">
              Research Watchlist Active:
            </strong>{' '}
            You are tracking {savedAssets.length} assets. To add or remove any entity, open its dossier and click{' '}
            <span className="font-semibold text-foreground">"Save to Watchlist"</span>.
          </div>
        </div>
        <Link
          href="/assets"
          className="inline-flex items-center gap-1 text-primary hover:underline font-medium shrink-0"
        >
          <span>Browse all {initialAssets.length} assets</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      {savedAssets.length > 0 ? (
        <AssetRegistryTable initialAssets={savedAssets} />
      ) : (
        <div className="empty-state text-center py-16 bg-card border border-border rounded-lg space-y-3">
          <Bookmark size={28} className="mx-auto text-muted-foreground" />
          <h3 className="text-base font-semibold text-foreground">
            No assets currently saved in watchlist
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Explore the Asset Directory or Corporate Autopsies and click "Save to Watchlist" to pin entities here.
          </p>
          <div className="pt-2">
            <Link
              href="/assets"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Building2 size={13} />
              <span>Explore Asset Directory</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
