import type { RequestLog } from './types';

// ─── Persistence adapter hook ───────────────────────────────────────────────────
//
// Current: structured console output (dev) + no-op (prod).
// To enable analytics ingestion, swap LOG_ADAPTER.write with:
//   - Airtable:  airtable.base('xxx').table('Logs').create(log)
//   - Supabase:  supabase.from('request_logs').insert(log)
//   - Vercel KV: kv.lpush('request_logs', JSON.stringify(log))
//   - BigQuery:  bigquery.dataset('asa').table('logs').insert([log])
//
// Shape is stable — any of the above work without modifying the call sites.

export const LOG_ADAPTER = {
  write: async (log: RequestLog): Promise<void> => {
    // Dev: structured console output
    if (process.env.NODE_ENV !== 'production') {
      console.log('[asa-log]', JSON.stringify(log, null, 2));
      return;
    }
    // Prod: no-op until adapter is wired
    // Replace this block with your ingestion call
  },
};

// ─── Fire-and-forget entry point ───────────────────────────────────────────────
//
// Non-blocking: caller never awaits this. Response is returned before
// LOG_ADAPTER.write() resolves. Errors are swallowed to prevent log
// failures from surfacing to users.

export function logRequest(log: RequestLog): void {
  LOG_ADAPTER.write(log).catch(err => {
    // Silent in prod; surface in dev only
    if (process.env.NODE_ENV !== 'production') {
      console.error('[asa-log] write failed:', err);
    }
  });
}

// ─── Sample log output ──────────────────────────────────────────────────────
//
// Success:
// {
//   "requestId": "3f2a1b4c-8d9e-4f0a-b1c2-d3e4f5a6b7c8",
//   "timestamp": "2026-04-15T06:41:00.123Z",
//   "substances": ["mdma", "alcohol", "cannabis"],
//   "riskLevel": "high",
//   "responseTime": 847,
//   "status": "success"
// }
//
// Fail:
// {
//   "requestId": "9a8b7c6d-5e4f-3a2b-1c0d-e9f8a7b6c5d4",
//   "timestamp": "2026-04-15T06:41:01.456Z",
//   "substances": [],
//   "riskLevel": null,
//   "responseTime": 12,
//   "status": "fail",
//   "error": "Missing or invalid substances array"
// }
