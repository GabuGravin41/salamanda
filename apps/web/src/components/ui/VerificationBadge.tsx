import React from 'react';
import { VerificationLevel } from '@salamanda/shared-types';
import { ShieldCheck, ShieldAlert, AlertTriangle, HelpCircle } from 'lucide-react';

interface VerificationBadgeProps {
  level: VerificationLevel;
  className?: string;
  showIcon?: boolean;
}

export function VerificationBadge({ level, className = '', showIcon = true }: VerificationBadgeProps) {
  switch (level) {
    case 'VERIFIED_PRIMARY':
      return (
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border bg-emerald-950/40 text-emerald-300 border-emerald-800/60 ${className}`}
          title="Verified via primary gazette, audited regulatory filing, or judicial record"
        >
          {showIcon && <ShieldCheck className="w-3 h-3 text-emerald-400" />}
          <span>VERIFIED PRIMARY</span>
        </span>
      );

    case 'VERIFIED_SECONDARY':
      return (
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border bg-sky-950/40 text-sky-300 border-sky-800/60 ${className}`}
          title="Verified via cross-referenced investigative reporting, corporate disclosure, or secondary indices"
        >
          {showIcon && <ShieldCheck className="w-3 h-3 text-sky-400" />}
          <span>VERIFIED SECONDARY</span>
        </span>
      );

    case 'MARKET_SPECULATION':
      return (
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border bg-amber-950/50 text-amber-300 border-amber-800/70 font-semibold ${className}`}
          title="Market speculation or widespread industry rumor — unverified by audited public registries"
        >
          {showIcon && <AlertTriangle className="w-3 h-3 text-amber-400" />}
          <span>MARKET SPECULATION</span>
        </span>
      );

    case 'UNVERIFIED_CLAIM':
      return (
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border bg-rose-950/50 text-rose-300 border-rose-800/70 ${className}`}
          title="Unverified claim without public documentary evidence"
        >
          {showIcon && <ShieldAlert className="w-3 h-3 text-rose-400" />}
          <span>UNVERIFIED CLAIM</span>
        </span>
      );

    default:
      return (
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border bg-slate-800 text-slate-300 border-slate-700 ${className}`}
        >
          {showIcon && <HelpCircle className="w-3 h-3 text-slate-400" />}
          <span>UNSPECIFIED</span>
        </span>
      );
  }
}
