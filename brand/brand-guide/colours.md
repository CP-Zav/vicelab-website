# ViceLab Ecosystem — Colour Palette (B5)
> Locked: 2026-04-24 | Owner: Brand Agent

---

## ViceLab (Platform)

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#2563EB` | Brand wordmark, nav, platform UI |
| Accent | `#3B82F6` | Hover states, highlights |
| Gradient Start | `#1D4ED8` | Gradient from |
| Gradient End | `#3B82F6` | Gradient to |

```css
--vicelab-primary: #2563EB;
--vicelab-accent: #3B82F6;
--vicelab-gradient: linear-gradient(135deg, #1D4ED8, #3B82F6);
```

---

## SIV — Substance Intelligence Vault

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#F59E0B` | Wordmark, hero text, card accent |
| Accent | `#F97316` | CTA buttons, highlights |
| Gradient Start | `#F59E0B` | Amber |
| Gradient End | `#F97316` | Signal Orange |
| Surface | `#1C1008` | Dark amber-tinted card bg |
| Text on gradient | `#FFFFFF` | White on gradient |

```css
--siv-primary: #F59E0B;
--siv-accent: #F97316;
--siv-gradient: linear-gradient(135deg, #F59E0B, #F97316);
--siv-surface: #1C1008;
```

**Tailwind:** `from-amber-400 to-orange-500`

---

## ASA — Analytical Substance Assessment

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#7C3AED` | Wordmark, hero text, card accent |
| Accent | `#8B5CF6` | CTA buttons, highlights |
| Gradient Start | `#7C3AED` | Deep Violet |
| Gradient End | `#8B5CF6` | Knowledge Purple |
| Surface | `#0F0A1C` | Dark violet-tinted card bg |
| Text on gradient | `#FFFFFF` | White on gradient |

```css
--asa-primary: #7C3AED;
--asa-accent: #8B5CF6;
--asa-gradient: linear-gradient(135deg, #7C3AED, #8B5CF6);
--asa-surface: #0F0A1C;
```

**Tailwind:** `from-violet-600 to-violet-500`

---

## Matrix — Interaction Engine

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#DC2626` | Wordmark, hero text, card accent |
| Accent | `#EF4444` | CTA buttons, highlights, risk indicators |
| Gradient Start | `#DC2626` | Crimson |
| Gradient End | `#EF4444` | Risk Red |
| Surface | `#1A0505` | Dark red-tinted card bg |
| Text on gradient | `#FFFFFF` | White on gradient |

```css
--matrix-primary: #DC2626;
--matrix-accent: #EF4444;
--matrix-gradient: linear-gradient(135deg, #DC2626, #EF4444);
--matrix-surface: #1A0505;
```

**Tailwind:** `from-red-600 to-red-500`

---

## VibeGuard — Compliance Layer

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#00C6A3` | Wordmark, hero text, card accent |
| Accent | `#0066FF` | CTA buttons, highlights |
| Gradient Start | `#00C6A3` | Compliance Teal |
| Gradient End | `#0066FF` | Clarity Blue |
| Surface | `#001A18` | Dark teal-tinted card bg |
| Text on gradient | `#FFFFFF` | White on gradient |

```css
--vibeguard-primary: #00C6A3;
--vibeguard-accent: #0066FF;
--vibeguard-gradient: linear-gradient(135deg, #00C6A3, #0066FF);
--vibeguard-surface: #001A18;
```

**Tailwind:** `from-teal-400 to-blue-600`

---

## Cooked Pilot — Wingmate Crew

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#FF0099` | Wordmark, hero text, card accent |
| Accent | `#CC00FF` | CTA buttons, highlights |
| Gradient Start | `#FF0099` | Neon Magenta |
| Gradient End | `#CC00FF` | Electric Purple |
| Surface | `#1A001A` | Dark magenta-tinted card bg |
| Text on gradient | `#FFFFFF` | White on gradient |

```css
--cooked-primary: #FF0099;
--cooked-accent: #CC00FF;
--cooked-gradient: linear-gradient(135deg, #FF0099, #CC00FF);
--cooked-surface: #1A001A;
```

**Tailwind:** `from-pink-500 to-purple-500`

---

## Shared System Colours

| Role | HEX | Usage |
|------|-----|-------|
| Background (dark) | `#0A0A0A` | Primary page bg |
| Surface default | `#111111` | Card / section bg |
| Surface elevated | `#1A1A1A` | Hover / raised cards |
| Border subtle | `#222222` | Dividers |
| Text primary | `#FFFFFF` | Headings |
| Text secondary | `#A3A3A3` | Body, labels |
| Text muted | `#525252` | Captions, disabled |
| Success | `#22C55E` | Positive indicators |
| Warning | `#F59E0B` | Caution (shares SIV primary) |
| Error | `#EF4444` | Errors (shares Matrix accent) |

---

## Combined CSS Variables

```css
/* Paste into globals.css or import as brand-colors.css */

:root {
  /* ViceLab Platform */
  --vicelab-primary: #2563EB;
  --vicelab-accent: #3B82F6;
  --vicelab-gradient: linear-gradient(135deg, #1D4ED8, #3B82F6);

  /* SIV */
  --siv-primary: #F59E0B;
  --siv-accent: #F97316;
  --siv-gradient: linear-gradient(135deg, #F59E0B, #F97316);
  --siv-surface: #1C1008;

  /* ASA */
  --asa-primary: #7C3AED;
  --asa-accent: #8B5CF6;
  --asa-gradient: linear-gradient(135deg, #7C3AED, #8B5CF6);
  --asa-surface: #0F0A1C;

  /* Matrix */
  --matrix-primary: #DC2626;
  --matrix-accent: #EF4444;
  --matrix-gradient: linear-gradient(135deg, #DC2626, #EF4444);
  --matrix-surface: #1A0505;

  /* VibeGuard */
  --vibeguard-primary: #00C6A3;
  --vibeguard-accent: #0066FF;
  --vibeguard-gradient: linear-gradient(135deg, #00C6A3, #0066FF);
  --vibeguard-surface: #001A18;

  /* Cooked Pilot */
  --cooked-primary: #FF0099;
  --cooked-accent: #CC00FF;
  --cooked-gradient: linear-gradient(135deg, #FF0099, #CC00FF);
  --cooked-surface: #1A001A;

  /* System */
  --bg-base: #0A0A0A;
  --surface-default: #111111;
  --surface-elevated: #1A1A1A;
  --border-subtle: #222222;
  --text-primary: #FFFFFF;
  --text-secondary: #A3A3A3;
  --text-muted: #525252;
  --status-success: #22C55E;
  --status-warning: #F59E0B;
  --status-error: #EF4444;
}
```