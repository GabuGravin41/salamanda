import React from 'react';
import { getAssets } from '@salamanda/database';
import { KenyaAssetMap } from '../../components/KenyaAssetMap';

export const revalidate = 60;

export default async function MapPage() {
  const assets = await getAssets();

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">GEOSPATIAL & ASSET INTELLIGENCE</div>
          <h1>Kenya asset & corridor map</h1>
          <p>
            Geospatial coordinates of tracked industrial manufacturing plants, sovereign transport corridors, agricultural estates, and distressed assets across Kenya.
          </p>
        </div>
      </div>

      <KenyaAssetMap assets={assets} compact={false} />
    </div>
  );
}
