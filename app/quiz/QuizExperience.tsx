"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type RoleKey = "analyst" | "doof_mum" | "sunrise_survivor" | "chaotic_gremlin";
type Scores = Record<RoleKey, number>;

type RoleData = {
  name: string;
  badge: string;
  color: string;
  tagline: string;
  image: string;
  alt: string;
  desc: string;
  shareText: string;
  identity: string[];
  strengths: { title: string; body: string }[];
  watchouts: { title: string; body: string }[];
  arc: { time: string; body: string }[];
  best: string;
  avoid: string;
};

const EMPTY_SCORES: Scores = { analyst: 0, doof_mum: 0, sunrise_survivor: 0, chaotic_gremlin: 0 };

const QUESTIONS = [
  ["When a situation gets chaotic, your instinct is to…", [
    ["Map the problem before doing anything", "analyst"],
    ["Make sure everyone around you is safe", "doof_mum"],
    ["Find the fastest path forward", "sunrise_survivor"],
    ["Turn the chaos into momentum", "chaotic_gremlin"],
  ]],
  ["Your crew is heading into an unfamiliar event. What is your move?", [
    ["Research the venue, the lineup, the exits", "analyst"],
    ["Make sure everyone has what they need before going", "doof_mum"],
    ["Lead the way — figure it out as you go", "sunrise_survivor"],
    ["Hype everyone up and make it a mission", "chaotic_gremlin"],
  ]],
  ["Someone in your group is not doing well. You…", [
    ["Assess the situation and identify the actual risk", "analyst"],
    ["Stay with them — no one gets left behind", "doof_mum"],
    ["Find the fastest route to help or safety", "sunrise_survivor"],
    ["Keep the group calm while someone deals with the issue", "chaotic_gremlin"],
  ]],
  ["What do people usually come to you for?", [
    ["Information — you know things others do not", "analyst"],
    ["Support — you are steady when things get hard", "doof_mum"],
    ["Direction — you know how to move", "sunrise_survivor"],
    ["Energy — you make things happen", "chaotic_gremlin"],
  ]],
  ["Your approach to harm reduction is…", [
    ["Evidence first — know what you are dealing with", "analyst"],
    ["People first — protect the ones around you", "doof_mum"],
    ["Practical — fast decisions, clear exits, no drama", "sunrise_survivor"],
    ["Cultural — normalise the conversation, reduce the stigma", "chaotic_gremlin"],
  ]],
  ["At 3am on the dancefloor, you are most likely…", [
    ["Watching the room — reading signals everyone else misses", "analyst"],
    ["Doing a quiet check on each person in your crew", "doof_mum"],
    ["Still going, somehow, when most people have tapped out", "sunrise_survivor"],
    ["In the middle of it — the night runs through you", "chaotic_gremlin"],
  ]],
  ["Something goes wrong and no one knows what to do. You…", [
    ["Take a breath and diagnose before reacting", "analyst"],
    ["Position yourself between the problem and the crew", "doof_mum"],
    ["Make a call and start moving", "sunrise_survivor"],
    ["Absorb the panic and project something else entirely", "chaotic_gremlin"],
  ]],
  ["The crew needs you most as…", [
    ["The one who builds the intelligence layer", "analyst"],
    ["The one who keeps people alive and together", "doof_mum"],
    ["The one who is still standing when it matters", "sunrise_survivor"],
    ["The one who makes the mission worth going on", "chaotic_gremlin"],
  ]],
] as const;

const ROLES: Record<RoleKey, RoleData> = {
  chaotic_gremlin: {
    name: "The Chaotic Gremlin", badge: "CHAOTIC GREMLIN", color: "#F472B6",
    tagline: "You are the reason the story gets told.",
    image: "https://cdn.shopify.com/s/files/1/0778/1495/6132/files/vicelab-archetype-chaotic-gremlin-canon.png?v=1779894669",
    alt: "The Chaotic Gremlin — wild mythical rave-being with joyful chaos energy",
    desc: "You are the reason the night exists. Also the reason it went sideways. Usually both at the same time, and somehow that is exactly the point.",
    shareText: "ViceLab just called me a Chaotic Gremlin and honestly they are not wrong. Find out what you are:",
    identity: [
      "You have never once in your life made a plan and stuck to it past 10pm.",
      "You find out how things work by breaking them.",
      "The only time you feel genuinely calm is when everything around you is absolutely not.",
      "You once described your decision-making process as vibes and you were being serious.",
    ],
    strengths: [
      { title: "Contagious energy", body: "Rooms change when you walk in. People stop being boring." },
      { title: "Zero social friction", body: "You talk to strangers like old friends. Doors open." },
      { title: "Chaos navigation", body: "When things go wrong, you are somehow already ahead of the disaster." },
      { title: "Commitment to the bit", body: "No half measures. The crew follows because you have already jumped." },
    ],
    watchouts: [
      { title: "Escalation blindspot", body: "Check in before you launch. The room may not be ready for more." },
      { title: "Substance timing", body: "Your natural state already runs hot. Test it, space it and track it." },
      { title: "Guardian dependency", body: "You operate best with someone steady nearby. Make that role explicit." },
      { title: "Morning reckoning", body: "Build in recovery before the energy bill arrives." },
    ],
    arc: [
      { time: "8pm", body: "Completely fine. Suspiciously normal." },
      { time: "10pm", body: "Three new friends, one missing jacket and a better mission." },
      { time: "12am", body: "The plan no longer exists. You replaced it with something better. Probably." },
      { time: "2am", body: "Best night ever or actively the problem. Maybe both." },
      { time: "4am", body: "The crew is looking for you. You are discussing consciousness with security." },
      { time: "Dawn", body: "You will never do this again. You absolutely will." },
    ],
    best: "The Doof Mum — she keeps you alive; you make sure she gets to have a night too.",
    avoid: "Another Chaotic Gremlin — no anchor, no ceiling and no reliable timeline.",
  },
  doof_mum: {
    name: "The Doof Mum", badge: "DOOF MUM", color: "#4ADE80",
    tagline: "You keep the night alive.",
    image: "https://cdn.shopify.com/s/files/1/0778/1495/6132/files/vicelab-archetype-doof-mum-canon.png?v=1779894652",
    alt: "The Doof Mum — nurturing mythical rave-being with caretaker energy",
    desc: "You are not the responsible one because you are boring. You are the responsible one because you actually give a damn — and that makes you the most important person at any event.",
    shareText: "Apparently I am a Doof Mum and I have never felt more seen. Find out what you are:",
    identity: [
      "You packed the bag, know what is in it and are the only one who knows where it is.",
      "You can dance, monitor four people and clock the nearest exit at the same time.",
      "You know who has not drunk enough water and have already done something about it.",
      "When things go sideways, everyone looks for you. You are already moving.",
    ],
    strengths: [
      { title: "Situational awareness", body: "You notice things before they become problems." },
      { title: "De-escalation", body: "You can bring someone down from a bad place without making them feel like a burden." },
      { title: "Logistical precision", body: "Transport, timing and exits live in your head." },
      { title: "Trust anchor", body: "People tell you things they have not told anyone. You hold it without drama." },
    ],
    watchouts: [
      { title: "Self-abandonment", body: "Do not spend the whole night managing everyone else and miss your own experience." },
      { title: "Invisible load", body: "Check your own body as often as you check theirs." },
      { title: "Gremlin codependency", body: "Decide in advance how much of their chaos is yours to carry." },
      { title: "Over-responsibility", body: "Not every situation is yours to fix." },
    ],
    arc: [
      { time: "8pm", body: "Headcount, water check and medic location complete in four minutes." },
      { time: "10pm", body: "Having fun while tracking the crew on a background thread." },
      { time: "12am", body: "Someone needed you. You handled it and went back to dancing." },
      { time: "2am", body: "You are tired and still the reason the crew is intact." },
      { time: "4am", body: "Negotiating food, transport and whether the Gremlin can use Uber." },
      { time: "Dawn", body: "Everyone made it. Do not downplay your role in that." },
    ],
    best: "The Sunrise Survivor — resilient, calm and unlikely to become another person you must manage.",
    avoid: "Multiple Chaotic Gremlins — one is a mission; two is a staffing crisis.",
  },
  sunrise_survivor: {
    name: "The Sunrise Survivor", badge: "SUNRISE SURVIVOR", color: "#C084FC",
    tagline: "You stayed long enough to become transformed.",
    image: "https://cdn.shopify.com/s/files/1/0778/1495/6132/files/vicelab-archetype-sunrise-survivor-canon.png?v=1779894689",
    alt: "The Sunrise Survivor — luminous mythical rave-being with dawn transformation energy",
    desc: "You did not plan to still be here. And yet. You outlast, adapt and turn the wreckage into a highlight reel.",
    shareText: "Apparently I am a Sunrise Survivor and I have seen some things. Find out what you are:",
    identity: [
      "You have watched entire crews go home while you were still going.",
      "You make good decisions under pressure and chaotic ones when everything is calm.",
      "Your best stories begin with: this is actually kind of hard to explain.",
      "Three people asked if you were okay. You were fine — just in another timezone.",
    ],
    strengths: [
      { title: "Endurance", body: "You are still functional when everyone else has tapped out." },
      { title: "Adaptability", body: "Plans change and people disappear. You adjust without drama." },
      { title: "Experience base", body: "Your improvised solutions are accumulated knowledge." },
      { title: "Unflappable calm", body: "When things get genuinely weird, you get focused." },
    ],
    watchouts: [
      { title: "Tolerance miscalibration", body: "Your baseline is not everybody else’s baseline." },
      { title: "Point of no return", body: "Identify the limit before you push past it." },
      { title: "Sleep debt", body: "There is a bill. Build recovery in before your body does it for you." },
      { title: "Invisible risk", body: "You look fine, so people stop checking. Ask someone to check anyway." },
    ],
    arc: [
      { time: "8pm", body: "You arrive already in motion." },
      { time: "10pm", body: "Fully activated. Right room, right time." },
      { time: "12am", body: "The first wave is fading. You are warming up." },
      { time: "2am", body: "Most of the original crew has evaporated." },
      { time: "4am", body: "It is just survivors now. This is why you stayed." },
      { time: "Dawn", body: "Someone cannot believe they are still here. You absolutely can." },
    ],
    best: "The Doof Mum — she can relax around you because you rarely become the emergency.",
    avoid: "The Analyst — they want a framework for decisions you made by instinct.",
  },
  analyst: {
    name: "The Analyst", badge: "ANALYST", color: "#22D3EE",
    tagline: "You read the room before the room reads itself.",
    image: "https://cdn.shopify.com/s/files/1/0778/1495/6132/files/vicelab-archetype-analyst-canon.png?v=1779894635",
    alt: "The Analyst — mythical rave-being with protective observation energy",
    desc: "You see the system while everyone else sees the party. The night is safer and more interesting because you are in it.",
    shareText: "I am apparently The Analyst in my crew and everything I suspected has been confirmed. Find out your role:",
    identity: [
      "You mapped three exit routes and arrived twelve minutes ago.",
      "You notice when someone’s energy shifts before they do.",
      "You have opinions about the structural integrity of the crew’s decision-making.",
      "You have delivered pharmacological commentary nobody asked for and everyone used.",
    ],
    strengths: [
      { title: "Pattern recognition", body: "You identify risk before it becomes an incident." },
      { title: "Information processing", body: "You turn a complex scene into a useful summary in seconds." },
      { title: "Strategic thinking", body: "You naturally consider what comes next." },
      { title: "Calm under complexity", body: "The more variables there are, the more focused you get." },
    ],
    watchouts: [
      { title: "Analysis paralysis", body: "Not every decision needs a framework, especially at 2am." },
      { title: "Emotional suppression", body: "Check your own state as often as everybody else’s." },
      { title: "Over-communication", body: "The crew does not always need the full briefing." },
      { title: "Enjoyment gap", body: "Stop monitoring long enough to actually be in the experience." },
    ],
    arc: [
      { time: "8pm", body: "Three hypotheses formed before the first track ends." },
      { time: "10pm", body: "The hypotheses are proving accurate. You say nothing." },
      { time: "12am", body: "You have identified the Gremlin and quietly corrected course." },
      { time: "2am", body: "Alert, present and genuinely enjoying knowing exactly what is happening." },
      { time: "4am", body: "The Doof Mum is exhausted. You pick up the slack." },
      { time: "Dawn", body: "You have the full mental record. Some of it is for the debrief." },
    ],
    best: "The Chaotic Gremlin — you give them an invisible ceiling; they make you stop calculating and move.",
    avoid: "Another Analyst — the decision was due thirty-five minutes ago.",
  },
};

function resolve(scores: Scores, answers: RoleKey[]): RoleKey {
  const ranked = (Object.keys(scores) as RoleKey[]).sort((a, b) => scores[b] - scores[a]);
  const top = scores[ranked[0]];
  const tied = ranked.filter((role) => scores[role] === top);
  if (tied.length === 1) return tied[0];
  return answers.find((role) => tied.includes(role)) ?? tied[0];
}

export default function QuizExperience() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(EMPTY_SCORES);
  const [answers, setAnswers] = useState<RoleKey[]>([]);
  const [result, setResult] = useState<RoleKey | null>(null);

  const percentages = useMemo(() => {
    const total = Object.values(scores).reduce((sum, n) => sum + n, 0) || 1;
    return Object.fromEntries((Object.keys(scores) as RoleKey[]).map((role) => [role, Math.round((scores[role] / total) * 100)])) as Scores;
  }, [scores]);

  function choose(role: RoleKey) {
    const nextScores = { ...scores, [role]: scores[role] + 1 };
    const nextAnswers = [...answers, role];
    setScores(nextScores);
    setAnswers(nextAnswers);
    if (index === QUESTIONS.length - 1) setResult(resolve(nextScores, nextAnswers));
    else setIndex(index + 1);
  }

  function reset() {
    setStarted(false); setIndex(0); setScores(EMPTY_SCORES); setAnswers([]); setResult(null);
  }

  async function share(role: RoleKey) {
    const data = ROLES[role];
    const url = `${window.location.origin}/quiz`;
    if (navigator.share) await navigator.share({ title: `My ViceLab role: ${data.name}`, text: data.shareText, url }).catch(() => undefined);
    else await navigator.clipboard?.writeText(url);
  }

  if (result) {
    const data = ROLES[result];
    return (
      <main className="quiz-shell result-shell" style={{ "--role": data.color } as React.CSSProperties}>
        <section className="result-wrap">
          <p className="eyebrow">You have been identified.</p>
          <span className="role-badge">{data.badge}</span>
          <h1>{data.name}</h1>
          <div className="archetype-card">
            {/* Kept as a standard img so the migrated experience remains independent of next/image host configuration. */}
            <img src={data.image} alt={data.alt} width={720} height={900} />
          </div>
          <p className="tagline">{data.tagline}</p>
          <p className="lead">{data.desc}</p>

          <div className="score-grid" aria-label="Role score breakdown">
            {(Object.keys(ROLES) as RoleKey[]).map((role) => (
              <div className="score-row" key={role}>
                <span>{ROLES[role].name}</span><div><i style={{ width: `${percentages[role]}%` }} /></div><b>{percentages[role]}%</b>
              </div>
            ))}
          </div>

          <ResultSection label="This Is You After 2AM">
            <ul>{data.identity.map((item) => <li key={item}>{item}</li>)}</ul>
          </ResultSection>
          <ResultSection label="Why Your Crew Keeps You Around">
            <div className="card-grid">{data.strengths.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </ResultSection>
          <ResultSection label="Your Biggest Liability (You Know Who You Are)">
            <div className="watch-list">{data.watchouts.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.body}</p></article>)}</div>
          </ResultSection>
          <ResultSection label="Your Festival Survival Timeline">
            <div className="timeline">{data.arc.map((item) => <div key={item.time}><b>{item.time}</b><p>{item.body}</p></div>)}</div>
          </ResultSection>
          <ResultSection label="Crew Chemistry Report">
            <div className="chemistry"><article><small>Your Person</small><p>{data.best}</p></article><article><small>Never Leave These Two Unsupervised</small><p>{data.avoid}</p></article></div>
          </ResultSection>

          <div className="share-panel">
            <p className="eyebrow">The group chat is waiting.</p>
            <h2>Your crew already knows your type.</h2>
            <p>Make them prove theirs.</p>
            <button onClick={() => share(result)}>Send To The Group Chat</button>
          </div>
          <div className="actions"><button className="secondary" onClick={reset}>Retake The Quiz</button><Link href="/">Explore the Ecosystem →</Link></div>
        </section>
      </main>
    );
  }

  const question = QUESTIONS[index];
  return (
    <main className="quiz-shell">
      {!started ? (
        <section className="intro-card">
          <p className="eyebrow">Late-Night Identity System</p>
          <h1>Find Your ViceLab Role</h1>
          <p>Answer eight questions to discover how you move through the ecosystem after 2AM.</p>
          <button onClick={() => setStarted(true)}>Find My After-2AM Type</button>
        </section>
      ) : (
        <section className="question-card">
          <div className="question-meta"><span>Q{index + 1}</span><span>{index + 1} of {QUESTIONS.length}</span></div>
          <div className="progress"><i style={{ width: `${(index / QUESTIONS.length) * 100}%` }} /></div>
          <h1>{question[0]}</h1>
          <div className="answers">{question[1].map(([text, role]) => <button key={text} onClick={() => choose(role)}>{text}</button>)}</div>
        </section>
      )}
    </main>
  );
}

function ResultSection({ label, children }: { label: string; children: React.ReactNode }) {
  return <section className="result-section"><p className="section-label">{label}</p>{children}</section>;
}
