'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  Fingerprint,
  Users,
  Landmark,
  GitBranch,
  ShieldCheck,
  Search,
  Menu,
  ChevronDown,
  Globe2,
  ExternalLink,
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { label: 'Overview', href: '/', icon: LayoutDashboard },
  { label: 'Asset registry', href: '/assets', icon: Building2 },
  { label: 'Corporate autopsies', href: '/autopsies', icon: Fingerprint },
  { label: 'Power players', href: '/players', icon: Users },
  { label: 'Capital allocators', href: '/pipeline', icon: Landmark },
  { label: 'Land benchmarks', href: '/land', icon: Globe2 },
  { label: 'Sovereign & PPP', href: '/infrastructure', icon: GitBranch },
  { label: 'Verification library', href: '/sources', icon: ShieldCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentNav =
    navigation.find((n) => n.href === pathname)?.label || 'Intelligence Workspace';

  return (
    <div className="app-shell">
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Institutional Left Sidebar */}
      <aside
        className={`sidebar ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-200`}
      >
        <Link href="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Salamanda Logo"
            width={26}
            height={26}
            className="rounded-sm object-contain"
          />
          <span>
            salamanda<span className="brand-period">.</span>
          </span>
        </Link>

        {/* Market Workspace Indicator */}
        <div className="workspace-label">
          <span className="workspace-symbol">KE</span>
          <div>
            <strong>Kenya Intelligence</strong>
            <span>Research workspace</span>
          </div>
          <ChevronDown size={14} className="text-muted-foreground ml-auto" />
        </div>

        {/* Primary Navigation */}
        <div className="nav-label">WORKSPACE</div>
        <nav className="main-nav">
          {navigation.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-link ${isActive ? 'nav-active' : ''}`}
              >
                <n.icon size={16} />
                <span>{n.label}</span>
                {n.href === '/pipeline' && <span className="nav-count">4</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-bottom">
          <div className="coverage">
            <span className="live-dot" />
            <span>PRIMARY SOURCED</span>
            <strong>
              One economy.
              <br />
              The complete picture.
            </strong>
            <span className="coverage-sub">28 assets · 8 sectors</span>
          </div>
        </div>
      </aside>

      {/* Main Workspace Body */}
      <div className="main-shell">
        <header className="topbar">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="md:hidden p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>
            <span className="text-muted-foreground">Workspace</span>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">{currentNav}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/assets"
              className="flex items-center gap-2 px-2.5 py-1 rounded bg-muted text-muted-foreground hover:text-foreground text-xs"
            >
              <Search size={13} />
              <span>Search intelligence</span>
              <kbd className="px-1 py-0.5 text-[9px] bg-card border border-border rounded ml-2">
                /
              </kbd>
            </Link>

            <span className="topbar-divider" />

            <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
              <span className="live-dot" />
              <span>Audited Records</span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        <main className="page-content">
          {children}

          <footer className="page-footer">
            <span>
              <span className="live-dot" />
              Primary public record intelligence
            </span>
            <span>Salamanda Institutional Terminal · Kenya</span>
            <span className="flex items-center gap-1 font-mono">
              All metrics KES
              <ShieldCheck size={12} className="text-primary inline ml-1" />
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
