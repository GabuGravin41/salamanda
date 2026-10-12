import { NextResponse } from 'next/server';
import { getInstitutionalPlayers } from '@salamanda/database';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const players = await getInstitutionalPlayers();
    return NextResponse.json({
      success: true,
      data: players,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('API /api/players error:', error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}