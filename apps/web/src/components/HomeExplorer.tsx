'use client';

import React, { useState, useMemo } from 'react';
import { Asset, AssetClass, Sector, OperationalStatus, AutopsyCauseCategory } from '@salamanda/shared-types';
import { FilterBar } from './FilterBar';
import { AssetCard } from './AssetCard';
import { Layers } from 'lucide-react';

interface HomeExplorerProps {
  initialAssets: Asset[];
}

export function HomeExplorer({ initialAssets }: HomeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<AssetClass | 'ALL'>('ALL');
  const [selectedSector, setSelectedSector] = useState<Sector | 'ALL'>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<OperationalStatus | 'ALL'>('ALL');
  const [selectedCause, setSelectedCause] = useState<AutopsyCauseCategory | 'ALL'>('ALL');

  const filteredAssets = useMemo(() => {
    return initialAssets.filter((asset) => {
      // Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = asset.name.toLowerCase().includes(q);
        const matchesSummary = asset.summary.toLowerCase().includes(q);
        const matchesCounty = asset.county.toLowerCase().includes(q);
        const matchesSubsector = asset.subsector.toLowerCase().includes(q);
        if (!matchesName && !matchesSummary && !matchesCounty && !matchesSubsector) {
          return false;
        }
      }

      // Class
      if (selectedClass !== 'ALL' && asset.assetClass !== selectedClass) {
        return false;
      }

      // Sector
      if (selectedSector !== 'ALL' && asset.sector !== selectedSector) {
        return false;
      }

      // Status
      if (selectedStatus !== 'ALL' && asset.status !== selectedStatus) {
        return false;
      }

      // Cause
      if (selectedCause !== 'ALL') {
        const matchesPrimary = asset.autopsy?.primaryCause === selectedCause;
        const matchesContributing = asset.autopsy?.contributingFactors.includes(selectedCause);
        if (!matchesPrimary && !matchesContributing) {
          return false;
        }
      }

      return true;
    });
  }, [initialAssets, searchQuery, selectedClass, selectedSector, selectedStatus, selectedCause]);

  return (
    <div className="space-y-6">
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedClass={selectedClass}
        onClassChange={setSelectedClass}
        selectedSector={selectedSector}
        onSectorChange={setSelectedSector}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedCause={selectedCause}
        onCauseChange={setSelectedCause}
        totalResults={filteredAssets.length}
      />

      {filteredAssets.length === 0 ? (
        <div className="bg-surface/50 border border-surface-border rounded-xl p-12 text-center">
          <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-bold text-slate-300">No assets match your active filters</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, selecting "All Classes", or clearing specific autopsy cause filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      )}
    </div>
  );
}
