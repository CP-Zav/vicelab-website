"use client";

import { useMemo, useState } from "react";

const defaultModules = [
  { id: "nav", name: "Navigation", status: "Nominal" },
  { id: "comms", name: "Comms", status: "Stable" },
  { id: "sensors", name: "Sensors", status: "Calibrated" },
  { id: "ops", name: "Ops", status: "Synced" }
];

const defaultBoard = {
  queue: [{ id: "t1", title: "Reconcile telemetry uplink" }],
  active: [{ id: "t2", title: "Daily Brief synthesis" }],
  done: [{ id: "t3", title: "Validate route checksums" }]
};

export default function ControlCentreUI() {
  const modules = defaultModules;
  const board = defaultBoard;
  const dailyBrief = "All systems nominal. No operational anomalies detected.";
  const headsUp = "Window for low-latency sync closes in 37 minutes.";
  const activity = ["Ops booted", "Control links verified", "Task board synchronized"];
  const [selectedTask, setSelectedTask] = useState(board.active?.[0] ?? null);
  const columns = useMemo(
    () => [
      { key: "queue", label: "Queue", items: board.queue ?? [] },
      { key: "active", label: "Active", items: board.active ?? [] },
      { key: "done", label: "Done", items: board.done ?? [] }
    ],
    [board]
  );

  return (
    <div className="cc-shell">
      <div className="bg-orb bg-orb-cyan" />
      <div className="bg-orb bg-orb-magenta" />

      <header className="cc-panel cc-header">
        <h1>Zeph Control Centre</h1>
        <p>Live operational command interface.</p>
      </header>

      <section className="cc-panel">
        <h2>Modules</h2>
        <div className="module-grid">
          {modules.map((module) => (
            <button key={module.id} type="button" className="module-btn">
              <span>{module.name}</span>
              <em>{module.status}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="cc-main-grid">
        <div className="cc-panel">
          <h2>Task Board</h2>
          <div className="board-grid">
            {columns.map((column) => (
              <div key={column.key} className="board-col">
                <h3>{column.label}</h3>
                {column.items.map((task) => (
                  <button
                    key={task.id}
                    type="button"
                    className="task-card"
                    onClick={() => setSelectedTask(task)}
                  >
                    {task.title}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <aside className="cc-panel detail-panel">
          <h2>Task Detail</h2>
          <p>{selectedTask ? selectedTask.title : "Select a task from the board."}</p>
        </aside>
      </section>

      <section className="info-grid">
        <article className="cc-panel">
          <h2>Daily Brief</h2>
          <p>{dailyBrief}</p>
        </article>
        <article className="cc-panel">
          <h2>Heads Up</h2>
          <p>{headsUp}</p>
        </article>
        <article className="cc-panel">
          <h2>Activity</h2>
          <ul>
            {activity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <style jsx>{`
        .cc-shell {
          min-height: 100vh;
          padding: clamp(16px, 3vw, 32px);
          color: #eaf1ff;
          background: radial-gradient(circle at 15% 10%, #1f2c59 0%, #0b1023 45%, #070b19 100%);
          position: relative;
          overflow: hidden;
        }
        .bg-orb {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          filter: blur(72px);
          opacity: 0.24;
          pointer-events: none;
        }
        .bg-orb-cyan { background: #2cd4ff; top: -140px; left: -80px; }
        .bg-orb-magenta { background: #b767ff; right: -120px; bottom: -130px; }
        .cc-main-grid, .info-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .cc-main-grid { margin: 16px 0; }
        .cc-panel {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 16px;
          background: linear-gradient(140deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03));
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.03);
        }
        .cc-header h1 { margin: 0; font-size: clamp(1.5rem, 3vw, 2.1rem); }
        .cc-header p { opacity: 0.8; margin: 8px 0 0; }
        h2 { margin: 0 0 12px; font-size: 1rem; letter-spacing: 0.02em; }
        .module-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap: 12px; }
        .module-btn {
          text-align: left;
          border: 1px solid rgba(93, 216, 255, 0.45);
          border-radius: 14px;
          background: linear-gradient(160deg, rgba(52,127,255,0.34), rgba(15,31,66,0.72));
          color: #ebf6ff;
          padding: 12px;
          cursor: pointer;
          transition: transform .16s ease, box-shadow .16s ease;
          box-shadow: 0 0 0 rgba(44,212,255,0);
        }
        .module-btn:hover { transform: translateY(-1px); box-shadow: 0 0 18px rgba(44,212,255,.28); }
        .module-btn em { display:block; opacity:.8; font-style: normal; font-size:.85rem; margin-top:4px; }
        .board-grid { display:grid; gap: 12px; grid-template-columns: repeat(auto-fit,minmax(170px,1fr)); }
        .board-col { border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 10px; background: rgba(7,15,38,.45); }
        .board-col h3 { margin: 0 0 8px; font-size: .9rem; color: #9ddcff; }
        .task-card {
          width: 100%; text-align: left; margin-bottom: 8px; padding: 10px;
          border-radius: 10px; border: 1px solid rgba(255,255,255,.12);
          background: rgba(18,34,69,.8); color: #eaf1ff; cursor:pointer;
        }
        .detail-panel p { margin: 0; color: #d2e5ff; }
        .info-grid ul { margin: 0; padding-left: 18px; }
        .info-grid li { margin: 0 0 6px; color: #c9d8f8; }
        @media (min-width: 940px) {
          .cc-main-grid { grid-template-columns: 2fr 1fr; }
          .info-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </div>
  );
}
