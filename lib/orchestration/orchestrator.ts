import { randomUUID } from 'crypto';
import { analyse } from '@/lib/risk-matrix';
import { callClaudeWithRetry } from './claude-operator';
import { TRACKER_ADAPTER, createJob, appendLog } from './tracker';
import type { Job, OrchestrationResult } from './types';

// ─── Hook: background job queue ──────────────────────────────────────────────────
// Swap no-op for Inngest / BullMQ / Trigger.dev when async support is ready.

export const JOB_QUEUE_HOOK = {
  dispatch: async (_job: Job): Promise<void> => {
    // No-op — sync execution only.
    // To enable async: dispatch job here, return 202 from the route,
    // and poll /api/matrix-asa/status?requestId=<id>
  },
};

// ─── Hook: caching layer ─────────────────────────────────────────────────────────
// Swap no-op for Redis / Upstash / Vercel KV.

export const CACHE_HOOK = {
  get: async (_key: string): Promise<OrchestrationResult | null> => null,
  set: async (
    _key: string,
    _value: OrchestrationResult,
    _ttlSeconds?: number
  ): Promise<void> => {},
};

// ─── Main orchestration function ───────────────────────────────────────────────────

export async function orchestrate(substances: string[]): Promise<OrchestrationResult> {
  const requestId = randomUUID();
  const timestamp = new Date().toISOString();

  // Create and persist job record
  const job = createJob(requestId, substances);
  await TRACKER_ADAPTER.set(requestId, job);
  appendLog({ requestId, substances, timestamp, status: 'pending' });

  // Cache check — return early on hit
  const cacheKey = substances
    .map(s => s.trim().toLowerCase())
    .sort()
    .join(':');
  const cached = await CACHE_HOOK.get(cacheKey);
  if (cached) {
    appendLog({ requestId, substances, timestamp, status: 'complete' });
    return { ...cached, requestId };
  }

  try {
    await TRACKER_ADAPTER.update(requestId, { status: 'running' });
    appendLog({ requestId, substances, timestamp: new Date().toISOString(), status: 'running' });

    // Step 1: Matrix-ASA engine (sync, in-process)
    const analysis = analyse({ substances });

    // Step 2: Claude operator call with retry
    const { text: operatorBrief, attempts: claudeAttempts } = await callClaudeWithRetry(
      substances,
      analysis
    );

    // Assemble result
    const result: OrchestrationResult = {
      requestId,
      analysis,
      operatorBrief,
      claudeAttempts,
    };

    // Persist complete state
    await TRACKER_ADAPTER.update(requestId, { status: 'complete', output: result });
    appendLog({ requestId, substances, timestamp: new Date().toISOString(), status: 'complete' });

    // Cache the result (5-min TTL default)
    await CACHE_HOOK.set(cacheKey, result, 300);

    // Queue hook (no-op until async is wired)
    await JOB_QUEUE_HOOK.dispatch({ ...job, status: 'complete', output: result });

    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await TRACKER_ADAPTER.update(requestId, { status: 'failed', error: message });
    appendLog({ requestId, substances, timestamp: new Date().toISOString(), status: 'failed' });
    throw err;
  }
}
