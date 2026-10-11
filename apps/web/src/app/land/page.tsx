import React from 'react';
import { getAssets } from '@salamanda/database';
import { AssetRegistryTable } from '../../components/AssetRegistryTable';

export const revalidate = 60;

export default async function LandPage() {
  const allAssets = await getAssets();
  const landAssets = allAssets.filter(
    (a) => a.assetClass === 'LAND_BENCHMARK' || a.sector === 'REAL_ESTATE_LAND'
  );

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">SPATIAL & REAL ESTATE INTELLIGENCE</div>
          <h1>Land & soil indices</h1>
          <p>
            Price per acre dynamics across prime commercial nodes, industrial Special Economic Zones (SEZs), and satellite corridors.
          </p>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">
            <span>Upper Hill Prime Soil</span>
          </div>
          <div className="metric-value">
            KES 485<span>M</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change">Per Acre</span>
            <p>Stabilized post-2018 correction</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Westlands Commercial</span>
          </div>
          <div className="metric-value">
            KES 420<span>M</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change">Per Acre</span>
            <p>High-density commercial</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Athi River Logistics</span>
          </div>
          <div className="metric-value">
            KES 38<span>M</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change positive">SGR Corridor</span>
            <p>Industrial & freight node</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Naivasha SEZ Land</span>
          </div>
          <div className="metric-value">
            KES 18<span>M</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change positive">Geothermal SEZ</span>
            <p>Green industrial tariff zone</p>
          </div>
        </div>
      </div>

      <AssetRegistryTable initialAssets={landAssets} defaultTab="Land benchmarks" />
    </div>
  );
}
