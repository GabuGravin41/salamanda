import React from 'react';
import Link from 'next/link';
import { getAssets } from '@salamanda/database';
import { AssetCard } from '../../components/AssetCard';
import { formatKES } from '../../lib/formatters';
import { MapPin, TrendingUp, Layers, Compass, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export default async function LandPage() {
  const allAssets = await getAssets();
  const landAssets = allAssets.filter(
    (a) => a.assetClass === 'LAND_BENCHMARK' || a.sector === 'REAL_ESTATE_LAND'
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-surface to-surface border border-amber-900/50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
          <MapPin className="w-4 h-4" />
          <span>SPATIAL & REAL ESTATE INTELLIGENCE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Kenya Land & Soil Indices
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          In Kenya, land is the ultimate repository of domestic private wealth. Salamanda models price per acre
          evolution across prime urban commercial nodes, industrial Special Economic Zones (SEZs), and satellite town
          corridors—benchmarking transaction rates against infrastructure investments (SGR, Expressways, SEZ designations).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-amber-900/30">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Prime Commercial Soil Benchmark
            </span>
            <span className="text-xl font-bold font-mono text-amber-400">
              Upper Hill • KES 485M / Acre
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Stabilized following post-2018 office glut correction
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Logistics & SEZ Corridor Benchmark
            </span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              Athi River • KES 38M / Acre
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Up 600% since 2010 driven by SGR Freight Terminus
            </span>
          </div>
        </div>
      </div>

      {/* Corridor Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            Tracked Land Nodes & Benchmarks ({landAssets.length})
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Source: HassConsult & Knight Frank
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
