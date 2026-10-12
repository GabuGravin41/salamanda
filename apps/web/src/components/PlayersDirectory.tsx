'use client';

import React, { useState, useMemo } from 'react';
import { InstitutionalPlayer } from '@salamanda/shared-types';
import {
  Search,
  ArrowUpRight,
  ShieldCheck,
  CircleHelp,
  X,
} from 'lucide-react';
import { formatKES } from '../lib/formatters';
import { rankSearchResults } from '../lib/search-ranking';

interface PlayersDirectoryProps {
  initialPlayers: InstitutionalPlayer[];
  initialQuery?: string;
}

export function PlayersDirectory({ initialPlayers, initialQuery = '' }: PlayersDirectoryProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selected, setSelected] = useState<InstitutionalPlayer | null>(null);

  const filtered = useMemo(
    () =>
      rankSearchResults(
        initialPlayers,
        query,
        (player) => [
          { text: player.name, weight: 14 },
          { text: (player.aliases ?? []).join(' '), weight: 12 },
          { text: player.leadership, weight: 7 },
          { text: player.keyHoldings.map((holding) => holding.assetName).join(' '), weight: 7 },
          { text: `${player.playerType} ${player.headquarters}`, weight: 5 },
          { text: `${player.activeFocusPresent} ${player.summary}`, weight: 2 },
        ],
        (player) => player.name,
      ),
    [initialPlayers, query],
  );

  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const getColorClass = (index: number) => {
    const colors = ['entity-green', 'entity-blue', 'entity-orange'];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      {/* Rumor vs Fact Institutional Standard Banner */}
      <div className="p-4 rounded border border-border bg-card text-xs flex items-start gap-3">
        <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
        <div className="leading-relaxed text-muted-foreground">
          <strong className="text-foreground font-semibold">
            The Salamanda Standard on Rumors vs. Audited Ownership:
          </strong>{' '}
          Widespread street and social media claims (e.g. rumors regarding control of sugar mills or infrastructure concessions) are cross-referenced against Registrar of Companies (CR12) and High Court records. Uncorroborated market claims are explicitly tagged with <span className="font-mono text-warning font-semibold">MARKET SPECULATION</span> badges to protect investor due diligence.
        </div>
      </div>

      {/* Collection Toolbar */}
      <div className="collection-toolbar">
        <span>{filtered.length} institutional profiles</span>
        <div className="search-input">
          <Search size={14} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search groups, figures, and holdings…"
            aria-label="Search power players"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Profile Grid */}
      <div className="profile-grid">
        {filtered.map((p, i) => (
          <article className="research-card flex flex-col justify-between" key={p.id}>
            <div>
              <div className="flex items-center justify-between">
                <span className={`entity-logo entity-logo-lg ${getColorClass(i)}`}>
                  {getInitials(p.name)}
                </span>
                <span className="small-label">
                  {p.playerType.replace(/_/g, ' ')}
                </span>
              </div>

              <h2>{p.name}</h2>
              <p className="person-name">
                {p.leadership || 'Leadership group'}
              </p>

              <div className="holdings">
                <span className="detail-label">KEY HOLDINGS / INTERESTS</span>
                <p>
                  {p.keyHoldings.map((h) => h.assetName).join(' · ') || 'No equity holdings disclosed in cited sources.'}
                </p>
              </div>

              {p.estimatedCapitalMovedKES ? (
                <div className="mt-3 text-xs flex justify-between border-t border-border pt-2 text-muted-foreground">
                  <span>Tracked capital:</span>
                  <strong className="font-mono text-foreground">
                    {formatKES(p.estimatedCapitalMovedKES)}
                  </strong>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className="card-action"
              onClick={() => setSelected(p)}
            >
              <span>View ownership dossier</span>
              <ArrowUpRight size={14} />
            </button>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="empty-state text-center py-12 bg-card border border-border rounded-md">
          <Search size={24} className="mx-auto text-muted-foreground mb-2" />
          <h3 className="text-sm font-semibold text-foreground">No matching institutional profiles</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Try KDC, KCB, KenGen, Centum, CRBC, or search by a leader or holding.
          </p>
        </div>
      )}

      {/* Dossier Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-panel bg-card text-card-foreground border border-border rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {selected.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selected.leadership} · {selected.playerType.replace(/_/g, ' ')}
                </p>
              </div>
              <button
                type="button"
                className="p-1 rounded text-muted-foreground hover:text-foreground"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="detail-notice flex items-center gap-2 p-3 bg-muted/50 rounded border border-border text-xs text-muted-foreground">
              <CircleHelp size={14} className="shrink-0 text-primary" />
              <span>
                Audited High Court rulings, Parliamentary Hansard, and official Registrar CR12 records.
              </span>
            </div>

            <div className="space-y-2">
              <span className="detail-label text-[10px] font-mono text-muted-foreground block">
                HOLDINGS & ASSET INTERESTS
              </span>
              <div className="space-y-1.5">
                {selected.keyHoldings.map((h, idx) => (
                  <div key={idx} className="flex justify-between text-xs py-1 border-b border-border">
                    <span className="font-semibold text-foreground">{h.assetName}</span>
                    <span className="text-muted-foreground">{h.stakeOrRole}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Headquarters</span>
              <strong className="text-foreground">{selected.headquarters || 'Kenya'}</strong>
            </div>

            <div className="detail-pair flex justify-between py-2 border-t border-border text-xs">
              <span className="text-muted-foreground">Verification status</span>
              <strong className="text-primary font-medium">
                {selected.verificationLevel === 'VERIFIED_PRIMARY'
                  ? 'Verified Primary (Statutory records)'
                  : selected.verificationLevel === 'VERIFIED_SECONDARY'
                  ? 'Corroborated Secondary'
                  : 'Market Speculation Tagged'}
              </strong>
            </div>

            <div className="space-y-1 pt-2 border-t border-border">
              <span className="detail-label text-[10px] font-mono text-muted-foreground block">
                BACKGROUND INTELLIGENCE
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {selected.summary}
              </p>
            </div>

            <div className="flex justify-end pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="px-3 py-1.5 text-xs rounded border border-border bg-muted hover:bg-card text-foreground"
              >
                Close dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
