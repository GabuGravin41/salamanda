import React from 'react';
import { getInstitutionalPlayers } from '@salamanda/database';
import { PlayersDirectory } from '../../components/PlayersDirectory';

export const revalidate = 60;

export default async function PlayersPage() {
  const players = await getInstitutionalPlayers();

  return (
    <div className="space-y-6">
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">OWNERSHIP INTELLIGENCE</div>
          <h1>Power players</h1>
          <p>The capital movers, industrial groups, and dynastic holdings shaping Kenya.</p>
        </div>
      </div>

      <PlayersDirectory initialPlayers={players} />
    </div>
  );
}
