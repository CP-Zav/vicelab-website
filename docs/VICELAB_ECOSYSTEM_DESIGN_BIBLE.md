# VICELAB ECOSYSTEM — MASTER DESIGN BIBLE
**Version:** 1.0  
**Status:** LOCKED — Do not build without consulting this document  
**Last Revised:** 2026-05-07  
**Authority:** This document supersedes all prior visual direction decisions

---

## PART ONE: ECOSYSTEM PHILOSOPHY

### What VICELAB Is
VICELAB is operational intelligence infrastructure for real environments. It is not a product suite, a startup, or a SaaS platform. It is an interconnected system of harm reduction technologies built from real incidents, real debriefs, and real outcomes. Every system exists because a real environment required it.

### What The Ecosystem Must Feel Like
The experience of any VICELAB surface — website, app, report, interface — must communicate:
- **"These systems existed before the website."**
- **"This was built by people inside the problem."**
- **"This is operational infrastructure — not marketing."**

Every interface is an **ecosystem portal** — a mission-control layer or operational briefing — not a product landing page.

The emotional register across the ecosystem: **calm intelligence under operational pressure**.

### What The Ecosystem Must NEVER Feel Like
- Random dark-mode startup pages
- Disconnected SaaS products  
- Military or surveillance technology
- Pseudo-spiritual psychedelic aesthetics
- Rave-flyer visual chaos
- Generic component library design
- Corporate wellness software
- Over-animated, gamified interfaces

---

## PART TWO: MASTER DESIGN LANGUAGE

### 2.1 Typography

**Typeface logic:**
- **Headings:** System UI sans-serif. Weight 700–900. Tight tracking (−0.025em to −0.04em). Numerals and symbols are structural, not decorative.
- **Body:** System UI sans-serif. Weight 400. Relaxed line-height (1.7–1.85). Text/40–60 opacity for secondary hierarchy.
- **System labels / UI chrome:** Monospace (ui-monospace, Fira Code). All-caps. Tracked wide (+0.18em to +0.32em). Weight 400–500. Opacity 20–40%. This is the operational voice.
- **Display / hero:** Scale via `clamp()` for fluid sizing. Always compressed line-height (0.93–1.0). Letter-spacing ≤ −0.03em. Weight 800–900.

**Hierarchy:**
```
Display XL  →  clamp(3rem, 8vw, 5.5rem)     lh:0.95  ls:−0.03em   w:900
Display LG  →  clamp(2.25rem, 5vw, 3.75rem)  lh:1.0   ls:−0.025em  w:800
Display MD  →  clamp(1.75rem, 3vw, 2.5rem)   lh:1.1   ls:−0.02em   w:700
Body LG     →  15–16px                        lh:1.8
Body MD     →  13–14px                        lh:1.65
Sys Label   →  9–11px  mono  all-caps  tracked  opacity:20–40%
```

**Rules:**
- Sys-label class (`font-mono text-[10px] tracking-[0.22em] uppercase text-white/30`) is the operational UI voice — use for all system designations, panel headers, index numbers, status readouts
- Never use playful or unreadable "techy" fonts — legibility is operational
- Mobile-first sizing via clamp — no responsive font-size classes

---

### 2.2 Color Architecture

#### Master Ecosystem Palette
VICELAB owns the full-spectrum neon range. Individual systems bias toward their designated slice of the spectrum but remain visually congruent within the ecosystem.

```
ECOSYSTEM FOUNDATION
  Canvas:     #080808   (background base)
  Surface:    #0F0F0F   (card/panel base)
  Border:     rgba(255,255,255,0.07)
  Text/High:  rgba(255,255,255,0.85)
  Text/Mid:   rgba(255,255,255,0.50)
  Text/Low:   rgba(255,255,255,0.28)
  Text/Ghost: rgba(255,255,255,0.18)
```

#### Per-System Color Tokens *(LOCKED — supersedes all prior assignments)*
```
VICELAB (parent)
  Primary:    #2F6BFF  (electric blue)
  Secondary:  #00D5FF  (cyan)
  Tertiary:   #8B5CF6  (violet)
  Accent:     #FF00A8  (magenta)
  Gradient:   linear(135deg, #2F6BFF → #00D5FF → #8B5CF6 → #FF00A8)

ASA (Altered State Archive)
  Lead:       #7C3AED  (ultraviolet)
  Secondary:  #8B5CF6  (violet)
  Accent:     #FF00A8  (spectral magenta)
  Glow:       #00D5FF  (spectral cyan — iris/pupil only)
  Gradient:   linear(135deg, #00D5FF → #7C3AED → #FF00A8)

COOKED PILOT
  Lead:       #FF00A8  (neon magenta)
  Secondary:  #FF1FB8  (hot pink)
  Gradient:   linear(135deg, #FF00A8 → #FF1FB8)
  Glow:       rgba(255,0,168,0.28)

VIBEGUARD
  Lead:       #00D5FF  (electric teal/cyan)
  Secondary:  #00FFA3  (signal green)
  Gradient:   linear(135deg, #00D5FF → #00FFA3)
  Glow:       rgba(0,213,255,0.28)

MATRIX  ← UPDATED — replaces all crimson/red assignments
  Lead:       #4F46E5  (electric indigo)
  Secondary:  #7C3AED  (ion violet)
  Tertiary:   #818CF8  (plasma periwinkle)
  Gradient:   linear(135deg, #4F46E5 → #7C3AED → #818CF8)
  Glow:       rgba(79,70,229,0.28)
  NOTE: Matrix shares the violet range with ASA but biases
        cool/computational (indigo-forward), not archival (UV-forward)

SIV (Substance Intelligence Vault)  ← UPDATED — replaces amber/gold assignments
  Lead:       #00D5FF  (acid cyan / electric teal)
  Secondary:  #00FFA3  (signal green-blue)
  Tertiary:   #06B6D4  (deep signal teal)
  Gradient:   linear(135deg, #00D5FF → #06B6D4 → #00FFA3)
  Glow:       rgba(0,213,255,0.28)
  NOTE: SIV shares the teal range with VibeGuard but biases
        signal/reactive (hotter cyan), not compliance (cooler teal)
```

**Color rules:**
- Never use full-opacity neon — always restrained via border opacity, glow blur, or gradient opacity
- Glow is atmospheric, not decorative — it should reinforce functional state, not demand attention
- Black/near-black canvas is non-negotiable across all VICELAB surfaces
- Product colors inform glow, gradient, and accent — not primary text color

---

### 2.3 Glow Behavior

**Glow is environmental, not decorative.**

```
GLOW HIERARCHY (strongest → most restrained):
  Sigil / hero centerpiece:   drop-shadow 30–60px blur, 30–40% opacity
  Featured card / active:     box-shadow 18px, 28% opacity — plus 60px ambient 10%
  Panel border (hover):       box-shadow 0 0 10px 2%, transition 300ms
  Status dot (live):          CSS pulse animation, 1.5px dot
  Background bloom:           radial-gradient 600–700px, 5–9% opacity
  HUD grid:                   2% opacity linear-gradient grid, 50–60px cell
```

**Never:**
- Full neon text glow on body copy
- Multiple competing glow sources at same intensity
- Glow on interactive elements under 0.3s transition
- Glow that obscures readability

---

### 2.4 Animation Timing

**Motion is restrained and operational — it communicates system state, not entertainment.**

```
ANIMATION TOKENS
  Micro (state change):         150–200ms   ease
  Standard (transition/hover):  250–350ms   cubic-bezier(0.4,0,0.2,1)
  Atmospheric (ambient drift):  6–14s       ease-in-out  infinite
  Status pulse (live dot):      2.8s        ease-in-out  infinite
  Radar/scan geometry:          18–24s      linear       infinite
  Glow breathe:                 4–6s        ease-in-out  infinite
  Float drift (sigil):          6–8s        ease-in-out  infinite
```

**Motion rules:**
- Ambient animations must never compete for attention with readable content
- No entrance animations on above-the-fold content — it must feel like it was already there
- Hover transitions: properties only (color, opacity, transform, shadow) — never layout
- `prefers-reduced-motion`: all ambient animations disabled, transitions shortened to 100ms
- Parallax: max 8px displacement, 6–12s period — environments breathe, they don't scroll-jack

---

### 2.5 Border Treatments

```
BASE PANEL BORDER:     1px solid rgba(255,255,255,0.07)
ELEVATED PANEL:        1px solid rgba(255,255,255,0.10)
PRODUCT ACCENT BORDER: 1px solid [product-color]25–35 (8–14% opacity)
ACTIVE/FEATURED:       1px solid [product-color]40–50
CORNER BRACKETS:       2px, [product-color]35–45, 12px square — top-left + bottom-right only
HUD SEPARATOR:         1px solid rgba(255,255,255,0.04)
DIVIDER:               1px solid rgba(255,255,255,0.05)
```

**Corner bracket motif** (`[` / `]` shape using CSS borders):
- Used on featured cards, sigil frames, system designation panels
- Indicates "operational framing" — classified/monitored state
- Size: 10–16px square, never full-border

---

### 2.6 Card / Panel Systems

**Panel taxonomy:**
```
tel-panel        Telemetry panel — base system card. 1px border/7%, bg surface/2%, 
                 border-radius 0 (hard edges are intentional — operational, not friendly)
                 
status-panel     Compact readout panel — inline system state. bg product/4%,
                 border product/25%
                 
record-card      Archive/intelligence record. Corner bracket decoration,
                 index number, tag badge, dense body copy

feature-card     Product feature showcase. Larger padding, hover bloom,
                 accent-colored title, action affordance
```

**Panel rules:**
- No `border-radius` above 4px on telemetry panels — operational systems don't round their corners
- Hover state: border opacity +3%, subtle bloom radial from leading edge, no transform/scale
- Never use box-shadow as primary elevation — use border opacity + background transparency
- Padding: 16–20px (compact telemetry) / 24–28px (feature cards)

---

### 2.7 Ambient Atmosphere

Every page section has a layered atmosphere. Three layers:

**Layer 1 — Foundation grid (always present, product-tinted):**
```css
background-image: 
  linear-gradient([product]2% 1px, transparent 1px),
  linear-gradient(90deg, [product]2% 1px, transparent 1px);
background-size: 50–60px 50–60px;
```

**Layer 2 — Positional bloom radials (section-specific):**
- Hero: large elliptical bloom behind centerpiece, 6–10% opacity
- Section break: ambient pools at viewport edges, 3–5% opacity
- Sigil/hero element: tight radial glow, 8–12% opacity

**Layer 3 — Bottom fade + overlay (always present):**
```css
/* Each section bottom */
background: linear-gradient(to top, #080808, transparent);
height: 120–160px;
```

**Scanline overlay (optional, product-contextual):**
- Used on dashboard/telemetry-heavy sections only
- `repeating-linear-gradient` at 0–2px pitch, 3–4% opacity max
- Must be CSS-only, no image-based scanlines

---

### 2.8 Spacing System

```
Section vertical padding:  clamp(4rem, 8vw, 7rem)   (section token)
Subsection:                clamp(2.5rem, 4vw, 4rem)
Component gap:             2px (panel grid — tight operational grid)
                           16–20px (standard)
                           32–40px (breathing room within section)
Content max-width:         1120px (max-w-site)
Content padding:           px-5 sm:px-6 lg:px-8
```

**Asymmetric layouts are intentional** — this is an intelligence ecosystem, not a marketing grid. Left-right imbalance conveys authority and operational depth.

---

### 2.9 Motion Language

**Operational motion vocabulary:**
- `status-pulse` — slow breathing dot: system heartbeat
- `atm-drift` — gentle vertical float: presence without pressure
- `glow-breathe` — opacity oscillation: system awareness
- `radar-scan` — full rotation, very slow: environmental monitoring
- `radar-counter` — counter-rotation: dual-system processing

**Motion personality per system:**

| System | Motion personality |
|---|---|
| VICELAB | Full-spectrum, multi-layered, orchestral |
| ASA | Slow, observational, all-seeing drift |
| Cooked Pilot | Warm pulse, quick micro-responses, human-paced |
| VibeGuard | Scan + monitoring geometry, steady |
| Matrix | Grid propagation, node activation patterns |
| SIV | Fast pulse, waveform, signal burst |

---

### 2.10 Glyph Logic & Symbolic Rules

**The sigil system is structural, not decorative.**

Every sigil encodes the system's function:
- Geometry = operational role
- Animation behavior = processing state
- Color treatment = emotional register

**Sigil construction rules:**
- SVGs only — no raster logos as sigils
- Must be legible at 120px and still communicable at 24px (favicon scale)
- Corner brackets (the `⌐` frame) = operational designation — use consistently across ecosystem
- Sigils must work in monochrome (white on black) before color is applied
- Never use gradient fills directly in sigil paths — gradients are glow layer only, applied via filter/drop-shadow

**Ecosystem symbolic register:**
- The eye (ASA) = observation, archive, consciousness
- The lattice/node grid (Matrix) = connection, interaction, computation
- The waveform/vector (SIV) = signal, detection, pulse
- The shield+scan (VibeGuard) = protection perimeter, compliance boundary
- The figure/crew dot (Cooked Pilot) = human, peer, present
- The spectral ring (VICELAB parent) = all-containing, full-spectrum

---

## PART THREE: SYSTEM IDENTITY ARCHITECTURE

### 3.1 VICELAB (Parent Ecosystem)

**Role:** The systems lab. The infrastructure parent. The full-spectrum intelligence layer that contains and connects all sub-systems.

**System mythology:** VICELAB is the signal origin — everything else runs on its infrastructure. It doesn't do one thing; it enables everything. To encounter VICELAB is to encounter the architecture before the applications.

**Emotional identity:** Authoritative. Intelligent. Full-spectrum. Like encountering a master system for the first time — the sensation of seeing the whole before the parts.

**Color system:**
```
Lead:      #2F6BFF  (VL Blue — electric, primary)
Cyan:      #00D5FF
Violet:    #8B5CF6
Magenta:   #FF00A8
Gradient:  Full-spectrum — all four in sequence
```

**Sigil direction:** A spectral ring or radial burst — contains the full gradient spectrum, divided into quadrants representing the four sub-systems. Geometric, precise. The ring does not close — it opens.

**Ambient background language:** HUD grid (blue-tinted), multi-system blending blooms (all four product colors at extreme opacity), coordinate overlays.

**Interaction personality:** Orchestral — it surfaces connections between systems, not individual features. Every interaction reinforces the sense that this is infrastructure, not product.

---

### 3.2 ASA (Altered State Archive)

**Role:** The consciousness and knowledge layer. Living archive of compound intelligence, behavioral patterns, and harm reduction data. ASA knows everything — quietly.

**System mythology:** ASA is the all-knowing observer. It does not react; it remembers. It has been watching and archiving since before the ecosystem had a name. To access ASA is to access institutional memory — the distilled intelligence of every documented experience.

**Emotional identity:** Aware. Still. Observational. There is no urgency in ASA — only depth. It has always been watching. It will always remember.

**Color system:**
```
Lead:      #7C3AED  (ultraviolet — the unseen frequency)
Secondary: #8B5CF6  (violet — knowledge made visible)
Accent:    #FF00A8  (spectral magenta — moment of recognition)
Iris glow: #00D5FF  (spectral cyan — the pupil, the point of perception)
```

**Sigil:** The Eye. An open eye constructed from vesica piscis geometry. The iris contains:
- Inner ring: UV violet
- Outer ring: full gradient (cyan → violet → magenta)
- Pupil: cyan glow, radial gradient, no hard edge
- No eyelid — ASA never closes
- Corner bracket frame (`⌐`) on the SVG viewport

Trait system: ETERNAL / BOUNDLESS / CARING / WISE / AWARE

**Ambient background language:** Slow radial pulse from center-outward (perceiving), very faint UV bloom, scanline atmosphere at lowest opacity.

**Interaction personality:** Revelatory — information unfolds as if ASA is choosing to share it. Quiet confidence. Never urgent.

---

### 3.3 COOKED PILOT

**Role:** Peer harm reduction for nightlife and festivals. The human layer of the ecosystem — the one that watches out for your crew when things get complicated.

**System mythology:** Cooked Pilot is the friend who stays sober enough to notice. It is peer intelligence — not clinical, not institutional, not authoritative. It simply pays attention because it cares. The ecosystem's emotional core.

**Emotional identity:** Warm. Present. Culture-fluent. There is an emotional intimacy to Cooked Pilot that no other system has — it operates in the dark, in the noise, at 4am. It understands the environment it works in. Non-judgmental by design.

**Color system:**
```
Lead:      #FF00A8  (neon magenta — alive, present, warm-cool)
Secondary: #FF1FB8  (hot pink — intensity)
Gradient:  linear(135deg, #FF00A8 → #FF1FB8)
Glow:      rgba(255,0,168,0.28)
```

**Sigil direction:** A figure — abstracted, not cartoonish. Two or three overlapping dots/circles suggesting crew proximity. Or a simple pulse waveform in human-paced rhythm. The sigil should feel alive, not institutional.

**Ambient background language:** Warm magenta bloom, lower opacity. Motion is human-paced. Subtle warmth at edges.

**Interaction personality:** Immediate and accessible. No system complexity visible. The UI should feel like it was designed by someone who understands what the user is experiencing when they open it.

---

### 3.4 VIBEGUARD

**Role:** Compliance intelligence infrastructure for event organisers. The perimeter system — environmental, aggregate, organiser-facing.

**System mythology:** VibeGuard watches the environment, not the people. It maps the perimeter, reads the crowd as a system, and delivers operational intelligence to the people responsible for the space. It is duty-of-care made legible.

**Emotional identity:** Reliable. Measured. Responsible. VibeGuard does not panic — it monitors and reports. The emotional register is organisational calm under crowd-scale pressure.

**Color system:**
```
Lead:      #00D5FF  (electric teal/cyan — perimeter, environmental)
Secondary: #00FFA3  (signal green — compliance green, OK state)
Gradient:  linear(135deg, #00D5FF → #00FFA3)
Glow:      rgba(0,213,255,0.28)
```

**Sigil direction:** A scanning perimeter arc or shield geometry — not a traditional shield (too security/military), but a curved arc suggesting encompassing coverage. Think: radar sweep combined with a crowd-level boundary.

**Ambient background language:** Slow radar scan geometry, cyan-tinted HUD grid, perimeter arc at very low opacity.

**Interaction personality:** Methodical. Dense data, cleanly presented. Organisers trust VibeGuard because it never overstates or dramatises.

---

### 3.5 MATRIX

**Role:** The computational interaction engine. Matrix maps substance interactions, cross-references pharmacological data, and delivers structured risk intelligence. It is the calculation layer.

**System mythology:** Matrix does not observe or archive — it computes. Every query creates a live map of interaction pathways. Matrix sees the structure of things — the lattice beneath the surface, the nodes and their connections. It is the system that shows you what happens when elements combine.

**Emotional identity:** Analytical. Cold-intelligent. Precise. Matrix does not have warmth — it has accuracy. The emotional register is the quiet hum of a system processing a complex calculation.

**Color system (LOCKED — replaces all prior red/crimson assignments):**
```
Lead:      #4F46E5  (electric indigo — computational depth)
Secondary: #7C3AED  (ion violet — processing state)
Tertiary:  #818CF8  (plasma periwinkle — node activation, output)
Gradient:  linear(135deg, #4F46E5 → #7C3AED → #818CF8)
Glow:      rgba(79,70,229,0.28)
```

**Important color distinction — Matrix vs ASA:**
- Both share the violet range but are differentiated by temperature and direction:
- ASA: UV-forward (warm violet toward magenta) — *archival, mysterious, aware*
- Matrix: Indigo-forward (cool violet toward periwinkle) — *computational, structured, cold-precise*

**Sigil direction:** A node-lattice or interaction grid. Options:
1. Three interconnected nodes forming a molecular triangle — interaction mapping
2. A 3×3 or radial grid with activated connection lines — computation in progress
3. A crystalline geometric intersection — mathematical precision
NOT: eye motifs, archive symbolism, radiating circles, organic curves

Visual motifs: graph systems, lattice structures, node intelligence, interaction pathways, molecular logic, computational grids

**Ambient background language:** Fine lattice grid (dense, 30–40px), node activation patterns at low opacity, indigo HUD tint, no organic shapes.

**Interaction personality:** Query-and-result. Every action has a direct computational response. No atmospheric softness in UX flows — precise, fast, structured output.

---

### 3.6 SIV (Substance Intelligence Vault)

**Role:** Live signal and situational intelligence infrastructure. SIV is the real-time environmental monitoring layer — it captures, processes, and distributes field signals across the ecosystem.

**System mythology:** SIV never rests. It is always scanning, always receiving. While ASA remembers and Matrix calculates, SIV listens. It is the nervous system of the ecosystem — the layer that detects anomalies, flags emerging patterns, and routes intelligence to where it is needed. To encounter SIV is to encounter the ecosystem in the present tense.

**Emotional identity:** Fast. Reactive. Signal-driven. The emotional register of SIV is operational alertness — not anxiety, but heightened environmental awareness. It is the feeling of a system actively perceiving.

**Color system (LOCKED — replaces all prior amber/gold assignments):**
```
Lead:      #00D5FF  (acid cyan — signal-hot, electric)
Secondary: #06B6D4  (deep signal teal — waveform body)
Tertiary:  #00FFA3  (signal green-blue — live state / OK signal)
Gradient:  linear(135deg, #00D5FF → #06B6D4 → #00FFA3)
Glow:      rgba(0,213,255,0.35)  (slightly stronger — SIV glows hotter than VibeGuard)
```

**Important color distinction — SIV vs VibeGuard:**
- Both share teal/cyan but are differentiated by temperature and pacing:
- VibeGuard: cooler teal, slower motion — *stable, perimeter, compliance*
- SIV: hotter cyan, faster pulse — *signal-reactive, live, environmental*

**Sigil direction:**
1. A pulse waveform — clean single-line ECG-style pulse with signal burst at peak
2. Radar geometry — concentric arcs with active vector beam
3. A triangulated vector burst — three vectors emanating from a central signal point
4. Combination: compact radar arc with waveform trace across it
NOT: eye motifs, lattice grids, archive symbolism

Visual motifs: waveforms, radar geometry, pulse triangulation, signal vectors, environmental scan arcs, burst patterns

**Ambient background language:** Waveform trace at very low opacity scrolling horizontally, fast-paced signal pulse dots, radar arc at base of sections.

**Interaction personality:** Alert and immediate. SIV surfaces information on-demand with minimal navigation. The interface should feel like a live operational dashboard that responds instantly to queries.

---

## PART FOUR: DIFFERENTIATION MAP

### Color Spectrum Positioning
```
FULL SPECTRUM ←————————————————————————————→ FULL SPECTRUM
[MATRIX]  [ASA]   [VICELAB]  [SIV] [VIBEGUARD]  [CP]
indigo   violet   all-spec   cyan    teal      magenta
  ↑         ↑         ↑        ↑        ↑           ↑
  cold   archival  parent   signal  compliance   warm
```

### Emotional Register Positioning
```
COLD / ANALYTICAL ←———————————————→ WARM / HUMAN
[MATRIX] → [SIV] → [ASA] → [VIBEGUARD] → [VICELAB] → [COOKED PILOT]
```

### Motion Tempo Positioning
```
SLOW / ATMOSPHERIC ←——————————————→ FAST / REACTIVE
[ASA] → [VIBEGUARD] → [VICELAB] → [COOKED PILOT] → [MATRIX] → [SIV]
```

### Ecosystem Layer Mapping
```
KNOWLEDGE LAYER:    ASA (archive, memory, intelligence)
COMPUTATION LAYER:  MATRIX (interaction, analysis, output)
SIGNAL LAYER:       SIV (real-time, detection, routing)
COMPLIANCE LAYER:   VIBEGUARD (organiser, perimeter, reporting)
PEER LAYER:         COOKED PILOT (human, crew, present-tense)
PARENT LAYER:       VICELAB (infrastructure, full-spectrum, origin)
```

---

## PART FIVE: CROSS-SYSTEM RULES

### Visual Coherence Rules
1. All surfaces share the same dark foundation (#080808 canvas)
2. All systems use `sys-label` monospace for operational UI chrome
3. All systems use the same HUD grid (product-color tinted)
4. All systems use the `tel-panel` card pattern (no border-radius on operational panels)
5. All systems use corner bracket decorators for operational designation
6. No system uses a competitor's primary color as their dominant — spectrum positions are exclusive

### Sigil Cross-Contamination Rules
- ASA eye motif is exclusive to ASA — no other system may use eye geometry
- Matrix lattice is exclusive to Matrix — no other system may use molecular/grid node clusters
- SIV waveform is exclusive to SIV — no other system may use ECG/radar pulse as primary sigil
- VibeGuard arc is exclusive to VibeGuard
- Cooked Pilot crew figure is exclusive to Cooked Pilot
- VICELAB spectral ring is exclusive to VICELAB parent contexts

### Prohibited Across All Systems
- Rounded corners on primary operational panels (radius > 4px)
- Entrance animations on above-the-fold content
- Full-opacity neon text
- Drop shadows (use glow only, not box-shadow with color for elevation)
- Blurred glass/frosted effects (glassmorphism is not operational)
- Bright backgrounds (any section with white/light background breaks ecosystem identity)
- Generic component-library UI patterns (buttons, cards, badges from default Tailwind aesthetics)

---

## PART SIX: IMPLEMENTATION STATUS

### Current Development Hold
- **STOPPED:** SIV page visual refinement — awaiting sigil design from Brand Identity
- **STOPPED:** Matrix page visual refinement — awaiting sigil design + color correction (remove all crimson/red)
- **IN PROGRESS:** Ecosystem portal rebuild (B9 branch) based on canonical direction
- **NEXT:** After sigil delivery, apply this design bible to all 6 pages systematically

### Sigil Design Queue (for Brand Identity Agent)
```
Priority 1:  MATRIX sigil (node/lattice — indigo/violet/periwinkle)
Priority 2:  SIV sigil (waveform/radar — cyan/teal)
Priority 3:  VIBEGUARD sigil (perimeter arc — teal/green)
Priority 4:  COOKED PILOT sigil (crew figure/pulse — magenta)
Priority 5:  VICELAB parent sigil (spectral ring — full spectrum)
[COMPLETE]:  ASA eye sigil ✓
```

### Color Token File (tailwind.config.ts update required)
```js
// LOCKED ecosystem color tokens — B9 and all future branches
colors: {
  // Foundation
  canvas:  '#080808',
  surface: '#0F0F0F',

  // VICELAB parent
  'vl-blue':    '#2F6BFF',
  'vl-cyan':    '#00D5FF',
  'vl-violet':  '#8B5CF6',
  'vl-magenta': '#FF00A8',

  // ASA
  'asa-uv':     '#7C3AED',
  'asa-violet': '#8B5CF6',
  'asa-mag':    '#FF00A8',
  'asa-cyan':   '#00D5FF',

  // Cooked Pilot
  'cp-pink':    '#FF00A8',
  'cp-hot':     '#FF1FB8',

  // VibeGuard
  'vg-teal':    '#00D5FF',
  'vg-green':   '#00FFA3',

  // Matrix ← UPDATED from crimson
  'mx-indigo':  '#4F46E5',
  'mx-violet':  '#7C3AED',
  'mx-peri':    '#818CF8',

  // SIV ← UPDATED from amber
  'siv-cyan':   '#00D5FF',
  'siv-teal':   '#06B6D4',
  'siv-signal': '#00FFA3',
}
```

---

## APPENDIX: QUICK REFERENCE

### Per-System Identity Card
| System | Role | Lead Color | Sigil | Motion | Emotion |
|---|---|---|---|---|---|
| VICELAB | Parent infrastructure | `#2F6BFF` | Spectral ring | Orchestral | Authoritative |
| ASA | Knowledge archive | `#7C3AED` | Eye | Slow drift | Observational |
| Cooked Pilot | Peer safety | `#FF00A8` | Crew figure | Human pulse | Warm, present |
| VibeGuard | Compliance intel | `#00D5FF` | Perimeter arc | Steady scan | Reliable |
| Matrix | Computation engine | `#4F46E5` | Node lattice | Grid activation | Cold precision |
| SIV | Signal infrastructure | `#00D5FF`* | Waveform/radar | Fast pulse | Alert, reactive |

*SIV and VibeGuard share the teal/cyan range but are differentiated by glow temperature (+hotness), motion tempo (faster), and sigil geometry

---

*This document is version-controlled in this repository under `/docs/VICELAB_ECOSYSTEM_DESIGN_BIBLE.md`. Any changes require explicit user approval. Do not proceed with page development without aligning to this specification.*
