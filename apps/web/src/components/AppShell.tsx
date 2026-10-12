'use client';

import React, { useState, useEffect } from 'react';
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
  MapPin,
  Bookmark,
  Bell,
  Settings2,
  CircleHelp,
  Check,
  X,
  Database,
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { GlobalSearchDialog } from './GlobalSearchDialog';

const primaryNavigation = [
  { label: 'Overview', href: '/', icon: LayoutDashboard },
  { label: 'Asset registry', href: '/assets', icon: Building2 },
  { label: 'Corporate autopsies', href: '/autopsies', icon: Fingerprint },
  { label: 'Power players', href: '/players', icon: Users },
  { label: 'Deal pipeline & allocators', href: '/pipeline', icon: GitBranch },
  { label: 'Land benchmarks', href: '/land', icon: Globe2 },
  { label: 'Sovereign & PPP', href: '/infrastructure', icon: Landmark },
];

const researchNavigation = [
  { label: 'Kenya Asset Map', href: '/map', icon: MapPin },
  { label: 'Watchlist', href: '/watchlist', icon: Bookmark },
  { label: 'Verification library', href: '/sources', icon: ShieldCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalType, setModalType] = useState<'notifications' | 'settings' | 'help' | null>(null);

  // Keyboard shortcut listener for Cmd+K and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const allNav = [...primaryNavigation, ...researchNavigation];
  const currentNav =
    allNav.find((n) => n.href === pathname)?.label || 'Intelligence Workspace';

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
            <span>Active Neon DB · Live</span>
          </div>
          <ChevronDown size={14} className="text-muted-foreground ml-auto" />
        </div>

        {/* Primary Navigation */}
        <div className="nav-label">WORKSPACE</div>
        <nav className="main-nav">
          {primaryNavigation.map((n) => {
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

        {/* Research & Geospatial Tools */}
        <div className="nav-label mt-6">RESEARCH & TOOLS</div>
        <nav className="main-nav">
          {researchNavigation.map((n) => {
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
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer Controls */}
        <div className="sidebar-bottom space-y-2">
          <button
            type="button"
            onClick={() => setModalType('help')}
            className="w-full flex items-center justify-between px-3 py-2 text-xs rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="flex items-center gap-2">
              <CircleHelp size={15} />
              <span>Primary sources</span>
            </span>
            <ExternalLink size={12} />
          </button>

          <button
            type="button"
            onClick={() => setModalType('settings')}
            className="w-full flex items-center justify-between px-3 py-2 text-xs rounded border border-border bg-card hover:bg-muted text-foreground transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-primary text-primary-foreground font-bold text-[10px] grid place-items-center">
                S
              </span>
              <div className="text-left">
                <strong className="block text-[11px] leading-tight">Research Session</strong>
                <span className="text-[9px] text-muted-foreground">Reporting: KES</span>
              </div>
            </div>
            <Settings2 size={14} className="text-muted-foreground" />
          </button>
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

          <div className="flex items-center gap-3">
            {/* Real Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-muted text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              <Search size={13} />
              <span>Search intelligence</span>
              <kbd className="px-1 py-0.5 text-[9px] bg-card border border-border rounded ml-2">
                ⌘ K
              </kbd>
            </button>

            <span className="topbar-divider" />

            {/* Notifications Button */}
            <button
              type="button"
              onClick={() => setModalType('notifications')}
              className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted relative transition-colors"
              title="Recent statutory updates"
              aria-label="Notifications"
            >
              <Bell size={15} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
            </button>

            <ThemeToggle />

            {/* Profile Avatar Trigger */}
            <button
              type="button"
              onClick={() => setModalType('settings')}
              className="w-7 h-7 rounded border border-border bg-card hover:bg-muted text-foreground text-xs font-bold grid place-items-center transition-colors"
              title="Workspace settings"
              aria-label="Workspace settings"
            >
              S
            </button>
          </div>
        </header>

        <main className="page-content">
          {children}

          <footer className="page-footer">
            <span className="flex items-center gap-1.5">
              <span className="live-dot" />
              <span>Audited Kenyan public records</span>
            </span>
            <span>Salamanda Institutional Intelligence Terminal · Kenya</span>
            <span className="flex items-center gap-1 font-mono">
              All metrics KES
              <ShieldCheck size={12} className="text-primary inline ml-1" />
            </span>
          </footer>
        </main>
      </div>

      {/* Global Search Dialog */}
      <GlobalSearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Institutional Modals (Notifications, Preferences, Help) */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-lg shadow-xl w-full max-w-md p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <h3 className="text-base font-bold text-foreground">
                {modalType === 'notifications'
                  ? 'Recent Statutory Disclosures'
                  : modalType === 'settings'
                  ? 'Workspace Parameters'
                  : 'Primary Evidence Repositories'}
              </h3>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="p-1 rounded text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>

            {modalType === 'notifications' ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-muted/40 rounded border border-border space-y-1">
                  <span className="text-[10px] font-mono text-primary font-semibold block">
                    HIGH COURT OF KENYA (eKLR)
                  </span>
                  <strong className="text-foreground block">
                    Official Receiver Liquidation Filings Updated
                  </strong>
                  <p className="text-muted-foreground">
                    Insolvency cause records for Mumias Sugar and Nakumatt Holdings audited.
                  </p>
                </div>

                <div className="p-3 bg-muted/40 rounded border border-border space-y-1">
                  <span className="text-[10px] font-mono text-primary font-semibold block">
                    KENYA GAZETTE VOL. CXXVI
                  </span>
                  <strong className="text-foreground block">
                    Special Economic Zone Concessions
                  </strong>
                  <p className="text-muted-foreground">
                    Naivasha and Athi River industrial leases published.
                  </p>
                </div>
              </div>
            ) : modalType === 'settings' ? (
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-muted-foreground">Reporting Jurisdiction</span>
                  <strong className="text-foreground">Republic of Kenya</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-muted-foreground">Functional Currency</span>
                  <strong className="text-foreground">KES (Kenyan Shilling)</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-muted-foreground">Database Engine</span>
                  <strong className="text-primary font-mono">Neon Serverless PostgreSQL</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-muted-foreground">Deployment Runtime</span>
                  <strong className="text-foreground font-mono">Next.js 15 on Vercel</strong>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-xs">
                {[
                  {
                    name: 'Kenya Law Reports (eKLR)',
                    url: 'https://new.kenyalaw.org/',
                    note: 'High Court insolvency rulings',
                  },
                  {
                    name: 'Capital Markets Authority (CMA)',
                    url: 'https://www.cma.or.ke/',
                    note: 'Audited filings & investor circulars',
                  },
                  {
                    name: 'Nairobi Securities Exchange (NSE)',
                    url: 'https://www.nse.co.ke/',
                    note: 'Listed equities & corporate actions',
                  },
                  {
                    name: 'Business Daily Africa',
                    url: 'https://www.businessdailyafrica.com/',
                    note: 'Corroborating investigative reporting',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-border hover:bg-muted text-foreground transition-colors"
                  >
                    <div>
                      <strong className="block text-xs">{s.name}</strong>
                      <span className="text-[10px] text-muted-foreground">{s.note}</span>
                    </div>
                    <ExternalLink size={13} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            )}

            <div className="flex justify-end pt-2 border-t border-border">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-3 py-1.5 text-xs rounded border border-border bg-card hover:bg-muted text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
