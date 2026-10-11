'use client';

import React from 'react';
import { AssetClass, Sector, OperationalStatus, AutopsyCauseCategory } from '@salamanda/shared-types';
import { Search, Filter, X } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedClass: AssetClass | 'ALL';
  onClassChange: (cls: AssetClass | 'ALL') => void;
  selectedSector: Sector | 'ALL';
  onSectorChange: (sec: Sector | 'ALL') => void;
  selectedStatus: OperationalStatus | 'ALL';
  onStatusChange: (st: OperationalStatus | 'ALL') => void;
  selectedCause: AutopsyCauseCategory | 'ALL';
  onCauseChange: (cause: AutopsyCauseCategory | 'ALL') => void;
  totalResults: number;
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedClass,
  onClassChange,
  selectedSector,
  onSectorChange,
  selectedStatus,
  onStatusChange,
  selectedCause,
  onCauseChange,
  totalResults,
}: FilterBarProps) {
  const hasActiveFilters =
    searchQuery !== '' ||
    selectedClass !== 'ALL' ||
    selectedSector !== 'ALL' ||
    selectedStatus !== 'ALL' ||
    selectedCause !== 'ALL';

  const resetFilters = () => {
    onSearchChange('');
    onClassChange('ALL');
    onSectorChange('ALL');
    onStatusChange('ALL');
    onCauseChange('ALL');
  };

  return (
    <div className="bg-surface/90 border border-surface-border rounded-xl p-4 space-y-4">
      {/* Top Search Line */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search assets, sectors, counties, or keywords (e.g. Mobius, Sugar, Land)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs">
          <span className="text-slate-400 font-mono">
            Showing <strong className="text-emerald-400">{totalResults}</strong> assets
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" /> Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Asset Class Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-slate-400 font-mono flex items-center gap-1 mr-1 flex-shrink-0">
          <Filter className="w-3 h-3" /> Class:
        </span>
        {[
          { id: 'ALL', label: 'All Classes' },
          { id: 'ENTERPRISE_COLLAPSED', label: 'Collapsed' },
          { id: 'ENTERPRISE_DISTRESSED', label: 'Distressed / Receivership' },
          { id: 'ENTERPRISE_ACTIVE', label: 'Active Giants' },
          { id: 'INDUSTRIAL_IDLE', label: 'Idle Industrial' },
          { id: 'LAND_BENCHMARK', label: 'Land Corridors' },
          { id: 'SOVEREIGN_BOND', label: 'Treasury Bonds' },
          { id: 'MEGA_INFRASTRUCTURE', label: 'Mega PPP' },
        ].map((item) => {
          const active = selectedClass === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onClassChange(item.id as any)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                active
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Dropdown Selectors for Sector, Status, Cause */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-surface-border/50 text-xs">
        <div>
          <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
            Sector Filter
          </label>
          <select
            value={selectedSector}
            onChange={(e) => onSectorChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-800 rounded-md py-1.5 px-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="ALL">All Sectors</option>
            <option value="MANUFACTURING">Manufacturing</option>
            <option value="AGRIBUSINESS_FOOD">Agribusiness & Sugar</option>
            <option value="RETAIL_FMCG">Retail & Supermarkets</option>
            <option value="FINANCIAL_SERVICES">Financial Services & Banking</option>
            <option value="AUTOMOTIVE_TRANSPORT">Automotive & Mobility</option>
            <option value="REAL_ESTATE_LAND">Real Estate & Land</option>
            <option value="TECHNOLOGY_FINTECH">Technology & M-Pesa</option>
            <option value="ENERGY_INFRASTRUCTURE">Energy & Infrastructure</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
            Operational Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-800 rounded-md py-1.5 px-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="ACTIVE">Operational / Active</option>
            <option value="DISTRESSED">Distressed</option>
            <option value="UNDER_RECEIVERSHIP">Under Receivership</option>
            <option value="UNDER_ADMINISTRATION">Under Administration</option>
            <option value="LIQUIDATED">Liquidated / Dead</option>
            <option value="REVITALIZED">Revitalized</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
            Failure Autopsy Cause
          </label>
          <select
            value={selectedCause}
            onChange={(e) => onCauseChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-800 rounded-md py-1.5 px-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="ALL">All Causes / None</option>
            <option value="GOVERNANCE_FRAUD">Governance & Fraud</option>
            <option value="DEBT_OVERLEVERAGE">Debt & Overleverage</option>
            <option value="REGULATORY_TAX_POLICY">Fiscal & Tax Shocks</option>
            <option value="MARKET_DEMAND_SHIFT">Market Shift & Imports</option>
            <option value="POLITICAL_INTERFERENCE">Political Interference</option>
            <option value="TECHNOLOGY_OBSOLESCENCE">Technological Obsolescence</option>
            <option value="SUPPLY_CHAIN_COLLAPSE">Supply Chain Collapse</option>
          </select>
        </div>
      </div>
    </div>
  );
}
