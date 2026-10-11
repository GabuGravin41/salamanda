import React from 'react';
import Link from 'next/link';
import { getAssets, getMacroMetrics } from '@salamanda/database';
import { MacroSummaryCards } from '../components/MacroSummaryCards';
import { HomeExplorer } from '../components/HomeExplorer';
import { ShieldCheck, Activity, ArrowRight, BookOpen, AlertOctagon, TrendingUp } from 'lucide-react';

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [assets, metrics] = await Promise.all([
    getAssets(),
    getMacroMetrics(),
  ]);

  return (
    <div className="space-y-10">
      {/* Hero Terminal Header */}
      <section className="relative overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-b from-surface/90 via-surface/60 to-background p-6 sm:p-10 shadow-lg">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>KENYAN ASSET REPOSITORY & AUTOPSY TERMINAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            African Capital Deserves <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Operational Truth.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Inspired by BlackRock’s Aladdin, re-engineered for the African frontier. Salamanda chronicles
            living assets, idle industrial machinery, land corridors, and the forensic autopsies of collapsed
            enterprises—with <strong>every number, timeline event, and failure cause tethered directly to primary public records</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/autopsies"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow transition-colors"
            >
              <Activity className="w-4 h-4" />
              Explore Failure Autopsies
            </Link>
            <Link
              href="/land"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-amber-400" />
              Land Price Indices
            </Link>
            <Link
              href="/sources"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Public Record Citations
            </Link>
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Macro Economic Pulse Cards */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">
            Real Economy Macro Dashboard
          </h2>
          <span className="text-[11px] font-mono text-emerald-400">Live Synthesis</span>
        </div>
        <MacroSummaryCards metrics={metrics} />
      </section>

      {/* Interactive Asset Explorer */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">
              The Living Asset Matrix
            </h2>
            <p className="text-xs text-slate-400">
              Filter companies, idle factories, sovereign bonds, and prime soil benchmarks
            </p>
          </div>
        </div>

        <HomeExplorer initialAssets={assets} />
      </section>

      {/* Forensic Spotlight Callout */}
      <section className="p-6 rounded-xl border border-rose-950/60 bg-gradient-to-r from-rose-950/20 via-surface to-surface">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
              <AlertOctagon className="w-4 h-4" />
              <span>THE GRAVEYARD OF CAPITAL: WHY DID THEY COLLAPSE?</span>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Kenya’s capital markets have seen over <strong>KES 120 Billion</strong> destroyed across high-profile collapses:
              Mobius Motors (tax shifts), Mumias Sugar (governance plunder), Nakumatt (debt overleverage), and Imperial Bank (shadow software).
              Inspect our forensic post-mortems before allocating capital.
            </p>
          </div>
          <Link
            href="/autopsies"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            <span>Review All Autopsies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
