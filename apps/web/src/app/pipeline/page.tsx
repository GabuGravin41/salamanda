import React from 'react';
import {
  getInstitutionalAllocators,
  getDealPipeline,
} from '@salamanda/database';
import { PipelineManager } from '../../components/PipelineManager';

export const revalidate = 60;

export default async function PipelinePage() {
  const [allocators, pipeline] = await Promise.all([
    getInstitutionalAllocators(),
    getDealPipeline(),
  ]);

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">CAPITAL / TURNAROUND OPPORTUNITIES</div>
          <h1>Deal pipeline & allocators</h1>
          <p>Stranded potential. Structured opportunities. The institutional capital to move forward.</p>
        </div>
      </div>

      <PipelineManager initialDeals={pipeline} initialAllocators={allocators} />
    </div>
  );
}
