import { NextResponse } from 'next/server';
import { getMacroMetrics } from '@salamanda/database';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const metrics = await getMacroMetrics();
    return NextResponse.json({
      success: true,
      data: metrics,
    });
  } catch (error: any) {
    console.error('API /api/stats error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
