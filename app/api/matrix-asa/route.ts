import { NextRequest, NextResponse } from 'next/server';
import { orchestrate } from '@/lib/orchestration';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.substances || !Array.isArray(body.substances)) {
      return NextResponse.json(
        { error: 'Request body must include a "substances" array.' },
        { status: 400 }
      );
    }

    if (body.substances.length === 0 || body.substances.length > 6) {
      return NextResponse.json(
        { error: 'Provide between 1 and 6 substances.' },
        { status: 400 }
      );
    }

    const result = await orchestrate(body.substances);

    return NextResponse.json(
      {
        requestId: result.requestId,
        analysis: result.analysis,
        operatorBrief: result.operatorBrief,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'POST only. Body: { "substances": ["A", "B", ...] }' },
    { status: 405 }
  );
}
