import React from 'react';
import { OperationalStatus } from '@salamanda/shared-types';

interface StatusBadgeProps {
  status: OperationalStatus;
  className?: string;
}

const statusConfig: Record<
  OperationalStatus,
  { label: string; bg: string; text: string; dot: string; border: string }
> = {
  ACTIVE: {
    label: 'Operational / Active',
    bg: 'bg-emerald-950/30',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    border: 'border-emerald-800/50',
  },
  DISTRESSED: {
    label: 'Distressed / Impaired',
    bg: 'bg-amber-950/30',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
    border: 'border-amber-800/50',
  },
  UNDER_ADMINISTRATION: {
    label: 'Under Administration',
    bg: 'bg-orange-950/30',
    text: 'text-orange-400',
    dot: 'bg-orange-400',
    border: 'border-orange-800/50',
  },
  UNDER_RECEIVERSHIP: {
    label: 'Under Receivership',
    bg: 'bg-red-950/30',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
    border: 'border-rose-800/50',
  },
  LIQUIDATED: {
    label: 'Liquidated / Dissolved',
    bg: 'bg-red-950/50',
    text: 'text-red-400',
    dot: 'bg-red-500',
    border: 'border-red-900/60',
  },
  DEFUNCT: {
    label: 'Defunct / Inactive',
    bg: 'bg-slate-900/60',
    text: 'text-slate-400',
    dot: 'bg-slate-500',
    border: 'border-slate-800',
  },
  REVITALIZED: {
    label: 'Revitalized / Reopened',
    bg: 'bg-cyan-950/30',
    text: 'text-cyan-400',
    dot: 'bg-cyan-400',
    border: 'border-cyan-800/50',
  },
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.ACTIVE;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      {config.label}
    </span>
  );
}
