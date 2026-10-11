import React from 'react';
import { getAssets } from '@salamanda/database';
import { AssetRegistryTable } from '../../components/AssetRegistryTable';

export const revalidate = 60;

export default async function InfrastructurePage() {
  const allAssets = await getAssets();
  const infraAssets = allAssets.filter(
    (a) => a.assetClass === 'SOVEREIGN_BOND' || a.assetClass === 'MEGA_INFRASTRUCTURE' || a.sector === 'ENERGY_INFRASTRUCTURE'
  );

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">SOVEREIGN DEBT & PPP CONCESSIONS</div>
          <h1>Infrastructure & sovereign assets</h1>
          <p>
            Tracking the largest capital magnets in the Kenyan economy: mega concessions, public debt, and transport corridors.
          </p>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">
            <span>IFB1/2024/8.5 Bond</span>
          </div>
          <div className="metric-value">
            KES 240.9<span>B</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change positive">18.46% coupon</span>
            <p>Oversubscribed 412%</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Nairobi Expressway</span>
          </div>
          <div className="metric-value">
            KES 88.0<span>B</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change">30-Year BOT</span>
            <p>CRBC / Moja concession</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>SGR Phase 1 & 2A</span>
          </div>
          <div className="metric-value">
            KES 477.0<span>B</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change">Freight & Passenger</span>
            <p>Mombasa – Naivasha Corridor</p>
          </div>
        </div>

        <div className="metric">
          <div className="metric-label">
            <span>Lake Turkana Wind</span>
          </div>
          <div className="metric-value">
            KES 70.0<span>B</span>
          </div>
          <div className="metric-bottom">
            <span className="metric-change positive">310 MW Capacity</span>
            <p>Largest wind farm in Africa</p>
          </div>
        </div>
      </div>

      <AssetRegistryTable initialAssets={infraAssets} defaultTab="Infrastructure" />
    </div>
  );
}
