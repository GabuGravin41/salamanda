import React from 'react';
import Link from 'next/link';
import { getAssets } from '@salamanda/database';
import { AssetCard } from '../../components/AssetCard';
import { Landmark, ShieldCheck, Coins, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export default async function InfrastructurePage() {
  const allAssets = await getAssets();
  const infraAssets = allAssets.filter(
    (a) => a.assetClass === 'SOVEREIGN_BOND' || a.assetClass === 'MEGA_INFRASTRUCTURE'
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-surface to-surface border border-cyan-900/50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
          <Landmark className="w-4 h-4" />
          <span>SOVEREIGN DEBT & PPP CONCESSIONS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Sovereign Securities & Infrastructure Assets
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tracking the largest capital magnets in the Kenyan economy. From historic infrastructure bond auctions
          (IFB1/2024/8.5) that absorbed KES 240.9B from domestic bank deposits, to multi-billion tollway concessions
          (Nairobi Expressway) operated under 30-year Public-Private Partnerships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cyan-900/30">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Historic Bond Issuance Principal
            </span>
            <span className="text-xl font-bold font-mono text-cyan-400">
              IFB1/2024/8.5 • KES 240.9B
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              18.46% tax-free coupon; oversubscribed 412%
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Mega Tollway PPP Capitalization
            </span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              Nairobi Expressway • KES 88.0B
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              27.1km elevated tollway under Moja Expressway BOT
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-cyan-400" />
            Tracked Sovereign & PPP Assets ({infraAssets.length})
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Official CBK & KeNHA Gazetted Data
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infraAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
