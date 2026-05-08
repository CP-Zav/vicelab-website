import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const ACTION_TYPES = [
  'OUTREACH_SEND',
  'CONTENT_GENERATE',
  'TASK_CREATE',
  'LEAD_UPDATE',
  'STATUS_CHECK',
] as const;

type ActionType = (typeof ACTION_TYPES)[number];

interface ExecuteRequest {
  action_type: ActionType;
  payload: Record<string, unknown>;
  request_id?: string;
  triggered_by?: string;
}

interface ExecuteResponse {
  request_id: string;
  status: 'queued';
  message: string;
}

interface ErrorResponse {
  error: string;
  code: 'INVALID_ACTION_TYPE' | 'MISSING_PAYLOAD' | 'WEBHOOK_UNREACHABLE' | 'BAD_REQUEST';
}

export async function POST(req: NextRequest): Promise<NextResponse<ExecuteResponse | ErrorResponse>> {
  let body: Partial<ExecuteRequest>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body', code: 'BAD_REQUEST' }, { status: 400 });
  }

  if (!body.action_type || !ACTION_TYPES.includes(body.action_type)) {
    return NextResponse.json(
      {
        error: `action_type must be one of: ${ACTION_TYPES.join(', ')}`,
        code: 'INVALID_ACTION_TYPE',
      },
      { status: 400 }
    );
  }

  if (!body.payload || typeof body.payload !== 'object') {
    return NextResponse.json(
      { error: 'payload is required and must be an object', code: 'MISSING_PAYLOAD' },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'MAKE_WEBHOOK_URL is not configured', code: 'WEBHOOK_UNREACHABLE' },
      { status: 503 }
    );
  }

  const request_id = body.request_id ?? `req_${randomUUID().replace(/-/g, '').slice(0, 16)}`;

  const webhookPayload = {
    request_id,
    action_type: body.action_type,
    payload: body.payload,
    triggered_by: body.triggered_by ?? 'control_tower',
    timestamp: new Date().toISOString(),
  };

  try {
    // Fire-and-forget to Make.com — do not await full completion
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    }).catch((err) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[execute] Make webhook delivery failed:', err);
      }
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to dispatch to Make webhook', code: 'WEBHOOK_UNREACHABLE' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    request_id,
    status: 'queued',
    message: `Action ${body.action_type} queued with ID ${request_id}`,
  });
}
