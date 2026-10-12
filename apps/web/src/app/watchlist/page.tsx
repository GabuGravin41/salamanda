import React from 'react';
import { getAssets } from '@salamanda/database';
import { WatchlistExplorer } from '../../components/WatchlistExplorer';

export const revalidate = 60;

export default async function WatchlistPage() {
  const assets = await getAssets();

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">SAVED RESEARCH & DUE DILIGENCE</div>
          <h1>Watchlist</h1>
          <p>
            Saved corporate dossiers, distressed targets, and assets monitored during your research sessions.
          </p>
        </div>
      </div>

      <WatchlistExplorer initialAssets={assets} />
    </div>
  );
}
