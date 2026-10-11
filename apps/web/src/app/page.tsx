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
      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-10">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
            Kenya Asset Intelligence & Forensic Autopsies
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Operational Truth for African Capital.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl pt-1">
            Living asset registry, industrial capacity tracking, and public-record corporate forensics for Kenya.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-3">
            <Link
              href="/assets"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
            >
              Browse Asset Registry
            </Link>
            <Link
              href="/autopsies"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-slate-200 text-xs font-medium transition-colors"
            >
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              Corporate Autopsies
            </Link>
            <Link
              href="/land"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-slate-200 text-xs font-medium transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              Land Benchmarks
            </Link>
          </div>
        </div>
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
