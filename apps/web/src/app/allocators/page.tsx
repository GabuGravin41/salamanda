import React from 'react';
import { getInstitutionalAllocators, getDealPipeline } from '@salamanda/database';
import { PipelineManager } from '../../components/PipelineManager';

export const revalidate = 60;

export default async function AllocatorsPage() {
  const [allocators, pipeline] = await Promise.all([
    getInstitutionalAllocators(),
    getDealPipeline(),
  ]);

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">INSTITUTIONAL CAPITAL MANDATES</div>
          <h1>Capital allocators</h1>
          <p>
            Understand the deployment mandates, balance sheet scale, and ticket sizes of Kenya’s institutional pools.
          </p>
        </div>
      </div>

      <PipelineManager initialDeals={pipeline} initialAllocators={allocators} />
    </div>
  );
}
