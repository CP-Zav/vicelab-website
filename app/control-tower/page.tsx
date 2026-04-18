// app/control-tower/page.tsx
// W11 — Control Tower Operator View (v0)
// Internal only. No auth for v0. Seeded data — live DB integration = v1.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control Tower",
  robots: { index: false, follow: false },
};

// ── Seeded data (v0) ───────────────────────────────────────────────────────

const WIP_CAP = 3;

const activeTasks = [
  { id: "W9",  title: "Analytics Integration",   owner: "Website Agent", lane: "Website",  status: "active" },
  { id: "W11", title: "Control Tower UI (v0)",    owner: "Website Agent", lane: "Website",  status: "active" },
];

const blockedTasks: { id: string; title: string; owner: string; lane: string; reason: string }[] = [];

const shippedLog = [
  { id: "W10", title: "Fallback UI",                  lane: "Website",  shipped_at: "2026-04-18 23:45", commit: "feat: fallback-ui" },
  { id: "W8",  title: "Routing cleanup /signal→/siv", lane: "Website",  shipped_at: "2026-04-18 23:30", commit: "fix: signal-redirect" },
  { id: "W7",  title: "Logo scaling pass",             lane: "Website",  shipped_at: "2026-04-18 22:55", commit: "fix: logo-scale" },
  { id: "W6",  title: "CTA live",                      lane: "Website",  shipped_at: "2026-04-18 22:10", commit: "feat: cta-live" },
  { id: "W5",  title: "SEO + OG metadata",             lane: "Website",  shipped_at: "2026-04-18 21:40", commit: "feat: seo-og" },
  { id: "W4",  title: "Homepage 6 products",           lane: "Website",  shipped_at: "2026-04-18 21:00", commit: "feat: homepage-6p" },
  { id: "W3",  title: "Nav SIV migration",             lane: "Website",  shipped_at: "2026-04-18 20:30", commit: "feat: nav-siv" },
  { id: "W2",  title: "ASA page",                      lane: "Website",  shipped_at: "2026-04-18 19:45", commit: "feat: asa-page" },
  { id: "W1",  title: "SIV page",                      lane: "Website",  shipped_at: "2026-04-18 19:10", commit: "feat: siv-page" },
  { id: "S1",  title: "Matrix risk engine",            lane: "ST",       shipped_at: "2026-04-17 14:00", commit: "feat: risk-matrix" },
];

const agentLanes = [
  { agent: "Codex",          scope: "Frontend / UI",              color: "#2F6BFF" },
  { agent: "ST",             scope: "Backend / System / Control", color: "#00D5FF" },
  { agent: "Website Agent",  scope: "Page content",               color: "#00FFA3" },
  { agent: "Claude",         scope: "Design / Logos",             color: "#FF00A8" },
];

const namingLock = [
  { name: "SIV",    full: "Substance Intelligence Vault", status: "locked" },
  { name: "ASA",    full: "Analytical Substance Assessment", status: "locked" },
  { name: "Signal", full: "Deprecated",                   status: "deprecated" },
];

// ── Status badge helpers ───────────────────────────────────────────────────

function StatusDot({ status }: { status: "active" | "blocked" | "shipped" | "deprecated" | "locked" }) {
  const map: Record<string, string> = {
    active:     "bg-[#00FFA3]",
    blocked:    "bg-[#FF00A8]",
    shipped:    "bg-[#2F6BFF]",
    deprecated: "bg-white/20",
    locked:     "bg-[#00D5FF]",
  };
  return <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${map[status] ?? "bg-white/30"}`} />;
}

function Badge({ children, variant }: { children: React.ReactNode; variant: "active" | "blocked" | "shipped" | "cap" }) {
  const styles: Record<string, string> = {
    active:  "bg-[#00FFA3]/10 text-[#00FFA3] border border-[#00FFA3]/20",
    blocked: "bg-[#FF00A8]/10 text-[#FF00A8] border border-[#FF00A8]/20",
    shipped: "bg-[#2F6BFF]/10 text-[#2F6BFF] border border-[#2F6BFF]/20",
    cap:     "bg-white/5 text-white/50 border border-white/10",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide ${styles[variant]}`}>
      {children}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function ControlTowerPage() {
  const shippedToday = shippedLog.filter(
    (s) => s.shipped_at.startsWith("2026-04-18")
  ).length;

  return (
    <div className="min-h-screen bg-[#080808] font-mono text-white pt-20 pb-16">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="border-b border-white/[0.06] pb-6 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
            <span className="text-[11px] text-white/35 uppercase tracking-[0.15em]">Internal · Operator View · v0</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Control Tower</h1>
          <p className="text-sm text-white/35 mt-0.5">Live execution state — ViceLab build system</p>
        </div>

        {/* ── WIP Board ── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50">WIP Board</h2>
            <div className="flex items-center gap-2">
              <Badge variant={activeTasks.length >= WIP_CAP ? "blocked" : "cap"}>
                {activeTasks.length}/{WIP_CAP} active
              </Badge>
              {activeTasks.length < WIP_CAP && (
                <span className="text-[11px] text-white/25">{WIP_CAP - activeTasks.length} slot{WIP_CAP - activeTasks.length !== 1 ? "s" : ""} open</span>
              )}
            </div>
          </div>

          {/* Active */}
          <div className="border border-white/[0.07] rounded-lg overflow-hidden mb-4">
            <div className="px-4 py-2 bg-white/[0.03] border-b border-white/[0.05]">
              <span className="text-[11px] text-[#00FFA3]/70 uppercase tracking-widest">Active</span>
            </div>
            {activeTasks.length === 0 ? (
              <div className="px-4 py-4 text-sm text-white/25">No active tasks</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    {["ID", "Title", "Owner", "Lane", "Status"].map((h) => (
                      <th key={h} className="text-left px-4 py-2.5 text-[11px] font-medium text-white/30 uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.map((t, i) => (
                    <tr
                      key={t.id}
                      className={`${i !== activeTasks.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02] transition-colors`}
                    >
                      <td className="px-4 py-3 text-[#2F6BFF] font-semibold text-xs">{t.id}</td>
                      <td className="px-4 py-3 text-white/90">{t.title}</td>
                      <td className="px-4 py-3 text-white/50 text-xs">{t.owner}</td>
                      <td className="px-4 py-3 text-white/40 text-xs">{t.lane}</td>
                      <td className="px-4 py-3">
                        <Badge variant="active">
                          <StatusDot status="active" />
                          {t.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Blocked */}
          <div className="border border-white/[0.07] rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-white/[0.03] border-b border-white/[0.05]">
              <span className="text-[11px] text-[#FF00A8]/70 uppercase tracking-widest">Blocked</span>
            </div>
            {blockedTasks.length === 0 ? (
              <div className="px-4 py-4 text-sm text-white/20">No blocked tasks</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    {["ID", "Title", "Owner", "Lane", "Reason"].map((h) => (
                      <th key={h} className="text-left px-4 py-2.5 text-[11px] font-medium text-white/30 uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {blockedTasks.map((t, i) => (
                    <tr
                      key={t.id}
                      className={`${i !== blockedTasks.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02]`}
                    >
                      <td className="px-4 py-3 text-[#FF00A8] font-semibold text-xs">{t.id}</td>
                      <td className="px-4 py-3 text-white/80">{t.title}</td>
                      <td className="px-4 py-3 text-white/50 text-xs">{t.owner}</td>
                      <td className="px-4 py-3 text-white/40 text-xs">{t.lane}</td>
                      <td className="px-4 py-3 text-[#FF00A8]/70 text-xs">{t.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* ── Shipped Log ── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50">Shipped Log</h2>
            <Badge variant="shipped">{shippedToday} shipped today</Badge>
          </div>
          <div className="border border-white/[0.07] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                  {["ID", "Title", "Lane", "Shipped", "Commit"].map((h) => (
                    <th key={h} className="text-left px-4 py-2.5 text-[11px] font-medium text-white/30 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shippedLog.slice(0, 10).map((s, i) => (
                  <tr
                    key={s.id}
                    className={`${i !== Math.min(9, shippedLog.length - 1) ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02] transition-colors`}
                  >
                    <td className="px-4 py-3 text-[#2F6BFF]/70 font-semibold text-xs">{s.id}</td>
                    <td className="px-4 py-3 text-white/75">{s.title}</td>
                    <td className="px-4 py-3 text-white/35 text-xs">{s.lane}</td>
                    <td className="px-4 py-3 text-white/30 text-xs tabular-nums">{s.shipped_at}</td>
                    <td className="px-4 py-3">
                      <code className="text-[11px] text-[#00D5FF]/60 bg-white/[0.04] px-2 py-0.5 rounded">
                        {s.commit}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── System State ── */}
        <section>
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50 mb-4">System State</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Agent lanes */}
            <div className="border border-white/[0.07] rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.05]">
                <span className="text-[11px] text-white/40 uppercase tracking-widest">Agent Lanes</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {agentLanes.map((a) => (
                  <div key={a.agent} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a.color }} />
                      <span className="text-sm font-medium text-white/80">{a.agent}</span>
                    </div>
                    <span className="text-xs text-white/35">{a.scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Naming freeze */}
            <div className="border border-white/[0.07] rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] text-white/40 uppercase tracking-widest">Naming Freeze</span>
                <span className="text-[10px] text-[#FF00A8]/70 uppercase tracking-widest">LOCKED</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {namingLock.map((n) => (
                  <div key={n.name} className="px-4 py-3 flex items-start justify-between hover:bg-white/[0.02]">
                    <div>
                      <span className={`text-sm font-semibold ${n.status === "deprecated" ? "text-white/25 line-through" : "text-white/80"}`}>
                        {n.name}
                      </span>
                      <p className="text-xs text-white/30 mt-0.5">{n.full}</p>
                    </div>
                    <Badge variant={n.status === "deprecated" ? "cap" : "active"}>
                      {n.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual rule */}
            <div className="md:col-span-2 border border-white/[0.07] rounded-lg px-4 py-3.5 bg-white/[0.02]">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2F6BFF] flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Visual Rule</p>
                  <p className="text-sm text-white/60">
                    Text = intentional design until logos exist. No placeholders, no draft language in public-facing surfaces.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Footer stamp ── */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-[11px] text-white/20 font-mono">v0 · seeded data · live DB = v1</span>
          <span className="text-[11px] text-white/20 font-mono">thevicelab.com/control-tower</span>
        </div>

      </div>
    </div>
  );
}
