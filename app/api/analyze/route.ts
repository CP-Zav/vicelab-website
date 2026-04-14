import { NextRequest, NextResponse } from 'next/server';
import { analyse } from '@/lib/risk-matrix';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.substances || !Array.isArray(body.substances)) {
      return NextResponse.json(
        { error: 'Request body must include a "substances" array.' },
        { status: 400 }
      );
    }

    if (body.substances.length > 6) {
      return NextResponse.json(
        { error: 'Maximum 6 substances per analysis.' },
        { status: 400 }
      );
    }

    const result = analyse({ substances: body.substances });
    return NextResponse.json(result, { status: 200 });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Reject other methods cleanly
export async function GET() {
  return NextResponse.json(
    { error: 'POST only. Body: { "substances": ["A", "B", ...] }' },
    { status: 405 }
  );
}
