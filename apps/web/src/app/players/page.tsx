import React from 'react';
import Link from 'next/link';
import { getInstitutionalPlayers } from '@salamanda/database';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { formatKES } from '@/lib/formatters';
import {
  Building2,
  HardHat,
  GraduationCap,
  Briefcase,
  MapPin,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Coins,
} from 'lucide-react';

export const metadata = {
  title: 'Institutional Power Players & Philanthropic Capital | Salamanda',
  description:
    'Track Kenya’s dominant construction EPC giants, industrial conglomerates, private equity barons, and educational endowments moving billions across the real economy.',
};

export default async function PlayersPage() {
  const players = await getInstitutionalPlayers();

  const totalCapitalTracked = players.reduce(
    (sum, p) => sum + (p.estimatedCapitalMovedKES || 0),
    0
  );

  const epcPlayers = players.filter((p) => p.playerType === 'EPC_CONSTRUCTION_GIANT');
  const industrialPlayers = players.filter((p) => p.playerType === 'INDUSTRIAL_CONGLOMERATE');
  const pePlayers = players.filter((p) => p.playerType === 'PRIVATE_EQUITY_INVESTMENT');
  const foundationPlayers = players.filter((p) => p.playerType === 'EDUCATIONAL_FOUNDATION_TRUST');

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <div className="border-b border-surface-border pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/50 text-purple-300 text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>CAPITAL ARCHITECTURE INTELLIGENCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Institutional Power Players & Endowments
            </h1>
            <p className="text-slate-400 mt-2 max-w-3xl text-sm leading-relaxed">
              Systematic intelligence mapping who actually owns, finances, and builds Kenya.
              Tracking the top EPC mega-contractors, family-held industrial empires, private equity
              operators, and educational trusts moving capital into Arid & Semi-Arid Lands (ASALs).
            </p>
          </div>

          <div className="bg-surface/80 border border-surface-border rounded-xl p-4 md:min-w-[260px] flex flex-col justify-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Tracked Institutional Capital
            </span>
            <span className="text-2xl font-bold font-mono text-purple-400 mt-1">
              {formatKES(totalCapitalTracked)}
            </span>
            <span className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Audited Filings & High Court Records
            </span>
          </div>
        </div>

        {/* Intelligence Note on Rumors vs Facts */}
        <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-300 font-semibold">
              The Salamanda Standard on Rumor vs. Factual Ownership:
            </strong>{' '}
            Widespread street and social media claims (such as rumors alleging Centum owns controlling stakes in all sugar mills) are systematically cross-referenced against the Registrar of Companies and audited disclosures. Holdings that are market rumors are explicitly tagged with <span className="font-mono text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800/60">MARKET SPECULATION</span> badges to protect investor due diligence.
          </div>
        </div>
      </div>

      {/* Players List */}
      <div className="space-y-8">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-surface/90 border border-surface-border rounded-xl p-6 hover:border-slate-700 transition-all shadow-sm"
          >
            {/* Top row: Type, Name, Capital, Maps */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-surface-border/60">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {player.playerType.replace(/_/g, ' ')}
                  </span>
                  <VerificationBadge level={player.verificationLevel} />
                </div>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                  {player.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1">
                  <span>
                    <strong className="text-slate-300">Leadership:</strong> {player.leadership}
                  </span>
                  <span>•</span>
                  <span>
                    <strong className="text-slate-300">HQ:</strong> {player.headquarters}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block lg:text-right">
                    Estimated Capital Footprint
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-400 lg:text-right block">
                    {formatKES(player.estimatedCapitalMovedKES)}
                  </span>
                </div>
                {player.googleMapsUrl && (
                  <a
                    href={player.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-mono border border-slate-700 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>HQ Satellite Location ↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Narrative Summary & Present Focus */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 text-xs">
              <div>
                <h3 className="font-semibold text-slate-300 uppercase font-mono text-[11px] mb-2">
                  Institutional Profile & Historic Moat
                </h3>
                <p className="text-slate-400 leading-relaxed">{player.summary}</p>

                {player.verificationNotes && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-200 block mb-1">
                      Due Diligence & Fact-Checking Note:
                    </span>
                    {player.verificationNotes}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-slate-300 uppercase font-mono text-[11px] mb-2">
                  Active Present Focus & Current Deployment
                </h3>
                <p className="text-emerald-300/90 leading-relaxed p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                  {player.activeFocusPresent}
                </p>

                {/* Key Holdings Table */}
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-300 uppercase font-mono text-[10px] mb-2">
                    Key Assets & Enterprise Stakes
                  </h4>
                  <div className="space-y-2">
                    {player.keyHoldings.map((holding, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 text-xs flex flex-col gap-1"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-semibold text-slate-200">
                            {holding.assetName}
                          </span>
                          <VerificationBadge level={holding.verificationLevel} />
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center justify-between">
                          <span>
                            Role/Stake: <span className="text-slate-300 font-mono">{holding.stakeOrRole}</span>
                          </span>
                        </div>
                        {holding.notes && (
                          <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                            {holding.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Citations Footer */}
            {player.citations.length > 0 && (
              <div className="mt-4 pt-3 border-t border-surface-border/40 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono">Primary Disclosure Record:</span>
                <a
                  href={player.citations[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <span>{player.citations[0].title} ({player.citations[0].publisher})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
