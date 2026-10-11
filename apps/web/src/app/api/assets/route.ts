import { NextRequest, NextResponse } from 'next/server';
import { getAssets } from '@salamanda/database';
import { AssetClass, Sector, OperationalStatus, AutopsyCauseCategory } from '@salamanda/shared-types';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const assetClass = searchParams.get('class') as AssetClass | null;
    const sector = searchParams.get('sector') as Sector | null;
    const status = searchParams.get('status') as OperationalStatus | null;
    const cause = searchParams.get('cause') as AutopsyCauseCategory | null;
    const search = searchParams.get('search');
    const county = searchParams.get('county');

    const assets = await getAssets({
      assetClass: assetClass || undefined,
      sector: sector || undefined,
      status: status || undefined,
      cause: cause || undefined,
      search: search || undefined,
      county: county || undefined,
    });

    return NextResponse.json({
      success: true,
      count: assets.length,
      data: assets,
    });
  } catch (error: any) {
    console.error('API /api/assets error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
