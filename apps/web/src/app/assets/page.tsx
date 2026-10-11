import React from 'react';
import { getAssets } from '@salamanda/database';
import { AssetRegistryTable } from '../../components/AssetRegistryTable';

export const revalidate = 60;

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">RESEARCH / ASSET REGISTRY</div>
          <h1>Asset registry</h1>
          <p>Every entity. Every sector. A clearer picture of where value sits.</p>
        </div>
      </div>

      <AssetRegistryTable initialAssets={assets} compact={false} />
    </div>
  );
}
