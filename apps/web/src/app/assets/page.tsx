import React from 'react';
import { getAssets } from '@salamanda/database';
import { HomeExplorer } from '../../components/HomeExplorer';
import { Database } from 'lucide-react';

export const revalidate = 60;

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
            <Database className="w-4 h-4" />
            <span>PRIMARY REPOSITORY</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Comprehensive Asset Directory
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Living, distressed, and defunct economic assets indexed across Kenyan counties
          </p>
        </div>
      </div>

      <HomeExplorer initialAssets={assets} />
    </div>
  );
}
