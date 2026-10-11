import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-surface/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Salamanda Logo"
                width={28}
                height={28}
                className="rounded-sm object-contain"
              />
              <span className="font-semibold text-foreground tracking-tight text-base">
                Salamanda
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-[13px] text-muted-foreground">
              <Link
                href="/assets"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Assets
              </Link>
              <Link
                href="/autopsies"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Autopsies
              </Link>
              <Link
                href="/players"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Power Players
              </Link>
              <Link
                href="/pipeline"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Deal Pipeline
              </Link>
              <Link
                href="/land"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Land
              </Link>
              <Link
                href="/infrastructure"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Infrastructure
              </Link>
              <Link
                href="/sources"
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                Sources
              </Link>
            </nav>
          </div>

          {/* Right Status Indicator & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/assets"
              className="text-xs px-3 py-1.5 rounded border border-surface-border text-foreground hover:bg-surface-hover transition-colors"
            >
              Search Registry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

