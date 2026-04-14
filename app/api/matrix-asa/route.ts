import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { orchestrate } from '@/lib/orchestration';
import { logRequest } from '@/lib/logging';

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  const requestId = randomUUID();

  try {
    const body = await req.json();

    if (!body?.substances || !Array.isArray(body.substances)) {
      logRequest({
        requestId,
        timestamp: new Date().toISOString(),
        substances: [],
        riskLevel: null,
        responseTime: Date.now() - startTime,
        status: 'fail',
        error: 'Missing or invalid substances array',
      });
      return NextResponse.json(
        { error: 'Request body must include a "substances" array.' },
        { status: 400 }
      );
    }

    if (body.substances.length === 0 || body.substances.length > 6) {
      logRequest({
        requestId,
        timestamp: new Date().toISOString(),
        substances: body.substances,
        riskLevel: null,
        responseTime: Date.now() - startTime,
        status: 'fail',
        error: 'Substance count out of range',
      });
      return NextResponse.json(
        { error: 'Provide between 1 and 6 substances.' },
        { status: 400 }
      );
    }

    const result = await orchestrate(body.substances);

    // Fire-and-forget — response is returned before this resolves
    logRequest({
      requestId: result.requestId,
      timestamp: new Date().toISOString(),
      substances: body.substances,
      riskLevel: result.analysis.riskLevel,
      responseTime: Date.now() - startTime,
      status: 'success',
    });

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

    logRequest({
      requestId,
      timestamp: new Date().toISOString(),
      substances: [],
      riskLevel: null,
      responseTime: Date.now() - startTime,
      status: 'fail',
      error: message,
    });

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'POST only. Body: { "substances": ["A", "B", ...] }' },
    { status: 405 }
  );
}
