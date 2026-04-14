import type { Job, JobStatus, ExecutionLog } from './types';

// ─── In-memory store ────────────────────────────────────────────────────────────
// Hook point: swap for Redis/Supabase/Upstash by replacing TRACKER_ADAPTER.

const store = new Map<string, Job>();
const logs: ExecutionLog[] = [];

export const TRACKER_ADAPTER = {
  set: async (id: string, job: Job): Promise<void> => {
    store.set(id, job);
  },
  get: async (id: string): Promise<Job | null> => store.get(id) ?? null,
  update: async (id: string, patch: Partial<Job>): Promise<void> => {
    const existing = store.get(id);
    if (existing) {
      store.set(id, { ...existing, ...patch, updatedAt: new Date().toISOString() });
    }
  },
};

// ─── Job factory ──────────────────────────────────────────────────────────────

export function createJob(id: string, substances: string[]): Job {
  return {
    id,
    status: 'pending',
    input: { substances },
    output: null,
    createdAt: new Date().toISOString(),
  };
}

// ─── Structured logging ────────────────────────────────────────────────────────
// Hook point: replace with Datadog, CloudWatch, or structured logger.

export function appendLog(entry: ExecutionLog): void {
  logs.push(entry);
  if (process.env.NODE_ENV !== 'production') {
    console.log('[matrix-asa]', JSON.stringify(entry));
  }
}

export function getLogs(): ExecutionLog[] {
  return [...logs];
}

export function getJob(id: string): Job | undefined {
  return store.get(id);
}
