# ViceLab Brand Identity System
**Version 1.0.0 | Locked: 2026-05-05**

> This document is the authoritative reference for the ViceLab brand identity.  
> All UI, marketing, and product work must reference this system.

---

## 1. Logo System

### Variants

| Variant | File | Use when |
|---------|------|----------|
| Primary (full colour) | `logos/{product}-primary.svg` | Dark backgrounds (default) |
| White | `logos/{product}-white.svg` | Dark backgrounds, coloured overlays |
| Mono dark | `logos/{product}-mono.svg` | Light backgrounds, print, emboss |

### Usage Rules

- **Header (all pages)**: `vicelab-primary.svg`, height 36px, left-aligned. No text duplication next to logo.
- **Product cards/pages**: Use the matching product logo only — do not mix logos in one section.
- **Minimum size**: 24px height for primary, 20px for mono/white variants.
- **Clear space**: Minimum padding equal to the logo height on all four sides.
- **Always use root path**: `/logos/{product}-{variant}.svg` — never relative paths.
- **No modifications**: Do not recolour, distort, rotate, or add effects to any logo variant.
- **All logos must return HTTP 200**: Verify on both mobile and desktop at `thevicelab.com`.

### Product Identity Mapping

| Product | Primary Gradient | Logo File |
|---------|-----------------|-----------|
| ViceLab | Electric Blue `#0044CC → #00AAFF` | `vicelab-primary.svg` |
| Cooked Pilot | Magenta `#FF0099 → #CC00FF` | `cookedpilot-primary.svg` |
| VibeGuard | Teal `#00C6A3 → #0066FF` | `vibeguard-primary.svg` |
| SIV | Amber `#F59E0B → #F97316` | `siv-primary.svg` |
| ASA | Violet `#7C3AED → #8B5CF6` | `asa-primary.svg` |
| Matrix | Crimson `#DC2626 → #EF4444` | `matrix-primary.svg` |

---

## 2. Colour System

### Product Colours

Each product has a gradient from `500` (anchor) to `300` (end), and a `950` deep background for product-scoped surfaces.

| Product | 500 (Anchor) | 300 (End) | 950 (Background) |
|---------|-------------|----------|-----------------|
| ViceLab | `#0044CC` | `#00AAFF` | `#000D2E` |
| Cooked Pilot | `#FF0099` | `#CC00FF` | `#1A0026` |
| VibeGuard | `#00C6A3` | `#0066FF` | `#001A24` |
| SIV | `#F59E0B` | `#F97316` | `#1C0F00` |
| ASA | `#7C3AED` | `#8B5CF6` | `#0D0520` |
| Matrix | `#DC2626` | `#EF4444` | `#1A0000` |

### Semantic Colours

| Token | Value | Use |
|-------|-------|-----|
| `risk-high` | `#EF4444` | High-risk indicators, alerts |
| `risk-medium` | `#F59E0B` | Medium risk, caution states |
| `risk-low` | `#22C55E` | Low risk, safe states |
| `risk-unknown` | `#8A8AA8` | No data, indeterminate |
| `interactive` | `#0066FF` | Links, focus rings, interactive elements |
| `surface` | `#12121A` | Page background |
| `surface-raised` | `#1E1E2E` | Cards, modals, elevated surfaces |
| `border` | `#2A2A3E` | Default borders and dividers |
| `text-primary` | `#F8F8FA` | Body text, headings |
| `text-secondary` | `#8A8AA8` | Supporting text, labels, captions |
| `text-inverse` | `#0A0A0F` | Text on light backgrounds |

### Usage Rules

1. **Dark-first**: All surfaces default to dark (`surface` / `surface-raised`). Light mode is not a current requirement.
2. **Gradients on brand elements only**: Product gradients are for logos, hero elements, and active states — not for body text or generic UI.
3. **Risk colours are reserved**: `risk-high/medium/low` are exclusively for risk indication. Do not reuse them for decorative purposes.
4. **Product colour on product pages only**: Apply product-specific gradients only on that product's dedicated surface. Mixing product colours creates noise.
5. **Sufficient contrast**: All text on dark backgrounds must maintain ≥4.5:1 contrast ratio. `text-primary` on `surface` passes.

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Use |
|------|------|----------|-----|
| **Display** | Space Grotesk | Inter, sans-serif | Headlines, product names, hero copy |
| **Body** | Inter | system-ui, sans-serif | Body text, UI labels, descriptions |
| **Mono** | JetBrains Mono | Fira Code, monospace | Risk scores, data values, technical content |

### Type Scale Pairings

| Pairing | Size | Weight | Leading | Use |
|---------|------|--------|---------|-----|
| Hero headline | 52–68px | 700 | 1.1 | Page heroes, product names |
| Section heading | 32–40px | 700 | 1.1 | Section titles |
| Subsection heading | 24px | 600 | 1.3 | Card titles, panel headers |
| Large body | 20px | 400 | 1.5 | Lead paragraphs, emphasis text |
| Body default | 15px | 400 | 1.5 | Standard body copy |
| Caption / label | 11–13px | 500 | 1.3 | Tags, badges, metadata |
| Data value | 15–24px mono | 500 | 1.3 | Risk scores, counts, metrics |

### Typography Rules

- **Headlines**: Space Grotesk, tight tracking (`-0.03em`). ≤8 words where possible.
- **Data/scores**: Always mono. Never mix mono into editorial body copy.
- **Allcaps**: Only for labels/badges at `xs`/`sm` sizes with `0.12em` tracking. Never in headlines.
- **No system fonts for brand surfaces**: Always load Space Grotesk and Inter from Google Fonts or self-host.

---

## 4. Base UI Tokens

### Spacing Scale (4px base)

```
spacing-1:  4px    (micro gaps, icon padding)
spacing-2:  8px    (element internal padding)
spacing-3:  12px   (compact layouts)
spacing-4:  16px   (default gap)
spacing-6:  24px   (section padding, card padding)
spacing-8:  32px   (large component spacing)
spacing-12: 48px   (section separation)
spacing-16: 64px   (major layout breaks)
spacing-24: 96px   (hero section padding)
```

### Border Radius

```
radius-sm:   4px    → Inputs, badges, tags
radius-md:   8px    → Buttons, cards
radius-lg:   12px   → Modals, overlay panels
radius-xl:   16px   → Large cards, feature containers
radius-2xl:  24px   → Hero containers
radius-full: 9999px → Pills, avatars, toggles
```

### Shadows (dark-theme tuned)

```
shadow-xs:   0 1px 2px rgba(0,0,0,0.40)         → Minimal lift
shadow-sm:   0 2px 8px rgba(0,0,0,0.50)          → Cards
shadow-md:   0 4px 16px rgba(0,0,0,0.50), ...    → Panels
shadow-lg:   0 8px 32px rgba(0,0,0,0.60), ...    → Modals
shadow-xl:   0 16px 48px rgba(0,0,0,0.70), ...   → Feature callouts

Glow variants (product-specific interactive states):
glow-blue:   0 0 24px rgba(0,102,255,0.35)    → ViceLab
glow-amber:  0 0 24px rgba(245,158,11,0.35)   → SIV
glow-crimson:0 0 24px rgba(220,38,38,0.35)    → Matrix
glow-violet: 0 0 24px rgba(124,58,237,0.35)   → ASA
```

### Buttons

| Variant | Background | Text | Border | Radius |
|---------|-----------|------|--------|--------|
| Primary | `linear-gradient(135deg, #0044CC, #00AAFF)` | `#FFFFFF` | none | 8px |
| Secondary | transparent | `#F8F8FA` | `1px solid rgba(255,255,255,0.18)` | 8px |
| Ghost | transparent | `#8A8AA8` | none | 8px |
| Destructive | `linear-gradient(135deg, #DC2626, #EF4444)` | `#FFFFFF` | none | 8px |

**Button sizes:**

| Size | Height | Padding | Font size | Font weight |
|------|--------|---------|-----------|-------------|
| sm | 32px | 0 12px | 13px | 600 |
| md | 40px | 0 16px | 15px | 600 |
| lg | 48px | 0 24px | 17px | 600 |
| xl | 56px | 0 32px | 17px | 700 |

**States:**
- Hover: Primary/destructive → `opacity: 0.88` | Secondary → `background: rgba(255,255,255,0.06)` | Ghost → `color: #F8F8FA`
- Active: `transform: scale(0.98)`
- Disabled: `opacity: 0.4, cursor: not-allowed`
- Transition: `220ms ease-out` on all interactive properties

---

## 5. File Reference

```
workspace/brand/ui-assets/
├── brand-identity.md           ← this file
├── tokens.json                 ← machine-readable design tokens
├── color-system.md             ← standalone colour reference
├── logos/
│   ├── {product}-primary.svg   ← full colour (dark bg)
│   ├── {product}-white.svg     ← white variant (dark bg / overlays)
│   └── {product}-mono.svg      ← mono dark (light bg / print)
├── svg/                        ← 1024-base icon masters
│   └── {product}_icon.svg
└── {product}_{type}_{size}.png ← export PNGs (favicons, app-icons, avatars)
```

---

*Locked. Changes require Kristal sign-off. Do not branch this document without version bump.*
