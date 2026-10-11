import React from 'react';
import { SourceTier } from '@salamanda/shared-types';
import { ExternalLink, ShieldCheck, Scale, FileText, Newspaper, AlertCircle } from 'lucide-react';

interface SourceBadgeProps {
  tier: SourceTier;
  title?: string;
  url?: string;
  refNumber?: string;
  className?: string;
}

const tierConfig: Record<
  SourceTier,
  { label: string; bg: string; text: string; border: string; icon: React.ElementType }
> = {
  GAZETTE_OFFICIAL: {
    label: 'Kenya Gazette (Official)',
    bg: 'bg-emerald-950/40',
    text: 'text-emerald-400',
    border: 'border-emerald-800/60',
    icon: ShieldCheck,
  },
  COURT_RULING: {
    label: 'eKLR Court Ruling',
    bg: 'bg-indigo-950/40',
    text: 'text-indigo-400',
    border: 'border-indigo-800/60',
    icon: Scale,
  },
  REGULATORY_DISCLOSURE: {
    label: 'Regulatory Filing (CBK/CMA)',
    bg: 'bg-cyan-950/40',
    text: 'text-cyan-400',
    border: 'border-cyan-800/60',
    icon: FileText,
  },
  PUBLIC_AUCTION_NOTICE: {
    label: 'Statutory Auction Notice',
    bg: 'bg-amber-950/40',
    text: 'text-amber-400',
    border: 'border-amber-800/60',
    icon: AlertCircle,
  },
  FINANCIAL_PRESS_PRIMARY: {
    label: 'Financial Press Investigation',
    bg: 'bg-slate-800/50',
    text: 'text-slate-300',
    border: 'border-slate-700/60',
    icon: Newspaper,
  },
};

export function SourceBadge({
  tier,
  title,
  url,
  refNumber,
  className = '',
}: SourceBadgeProps) {
  const config = tierConfig[tier] || tierConfig.FINANCIAL_PRESS_PRIMARY;
  const Icon = config.icon;

  const content = (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium border ${config.bg} ${config.text} ${config.border} ${className} transition-colors hover:brightness-110`}
      title={title || config.label}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
      <span>{refNumber || config.label}</span>
      {url && <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />}
    </span>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded"
      >
        {content}
      </a>
    );
  }

  return content;
}
