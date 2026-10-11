import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Activity, BarChart3, Database, MapPin, Landmark } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                S
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold tracking-tight text-slate-100 text-lg group-hover:text-emerald-400 transition-colors">
                    SALAMANDA
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                    Terminal v0.1
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 hidden sm:block tracking-wide">
                  African Real Economy & Asset Intelligence
                </p>
              </div>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <Link
                href="/assets"
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-surface transition-colors"
              >
                Asset Registry
              </Link>
              <Link
                href="/autopsies"
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-surface transition-colors flex items-center gap-1.5"
              >
                <Activity className="w-4 h-4 text-rose-400" />
                Failure Autopsies
              </Link>
              <Link
                href="/land"
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-surface transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                Land & Soil
              </Link>
              <Link
                href="/infrastructure"
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-surface transition-colors flex items-center gap-1.5"
              >
                <Landmark className="w-4 h-4 text-cyan-400" />
                Sovereign & PPP
              </Link>
              <Link
                href="/sources"
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-surface transition-colors flex items-center gap-1.5"
              >
                <Database className="w-4 h-4 text-emerald-400" />
                Source Gazette
              </Link>
            </nav>
          </div>

          {/* Right Status Indicator */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Primary Sourced (Kenya Gazette / eKLR)</span>
            </div>

            <Link
              href="/assets"
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
            >
              Browse Terminal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
