# ViceLab Brand System
**Version:** 1.0 | **Status:** ACTIVE | **Locked:** 2026-05-05
**Repo path:** `workspace/brand/ui-assets/`

---

## 1. LOGO SYSTEM

### Primary Logo
`vicelab_logo_colour_v1.svg` — electric blue gradient, full wordmark
Use on: light backgrounds, hero sections, headers

### Alternative Variants
| File | Usage |
|------|-------|
| `vicelab_logo_black_v1.svg` | Dark backgrounds, print |
| `vicelab_logo_white_v1.svg` | Dark hero overlays, reversed sections |
| `vicelab_favicon_v1.svg` | Browser tab, app icon context |

### Product Logos
| Product | Primary file | Colour |
|---------|-------------|--------|
| ViceLab | `vicelab_logo_colour_v1.svg` | Electric Blue `#0044CC → #00AAFF` |
| Cooked Pilot | `cookedpilot_logo_colour_v1.svg` | Magenta `#FF0099 → #CC00FF` |
| VibeGuard | `vibeguard_logo_colour_v1.svg` | Teal `#00C6A3 → #0066FF` |
| SIV | `siv_logo_colour_v1.svg` | Amber `#F59E0B → #F97316` |
| ASA | `asa_logo_colour_v1.svg` | Violet `#7C3AED → #8B5CF6` |
| Matrix | `matrix_logo_colour_v1.svg` | Crimson `#DC2626 → #EF4444` |

### Usage Rules
- Minimum size: 24px height (digital), 10mm (print)
- Clear space: 1× logo height on all sides
- Never stretch, rotate, or recolour outside approved variants
- Never place colour logo on a similarly-coloured background
- Root path on site: `/logos/{filename}.svg`
- Height in header: ~36px, left-aligned

---

## 2. COLOR SYSTEM

### Brand Palette — All Products
```
ViceLab       #0044CC  →  #00AAFF   (electric blue)
Cooked Pilot  #FF0099  →  #CC00FF   (magenta / neon pink)
VibeGuard     #00C6A3  →  #0066FF   (blue-green teal)
SIV           #F59E0B  →  #F97316   (amber / signal gold)
ASA           #7C3AED  →  #8B5CF6   (violet / deep knowledge)
Matrix        #DC2626  →  #EF4444   (crimson / risk red)
```

### Neutral System
```
--color-bg-base:        #0A0A0A    (deep black — primary surface)
--color-bg-surface:     #111111    (card / panel surface)
--color-bg-elevated:    #1A1A1A    (elevated surface, modal)
--color-border:         #222222    (default border)
--color-border-subtle:  #1A1A1A    (subtle divider)
--color-text-primary:   #FFFFFF    (primary text)
--color-text-secondary: #A0A0A0    (secondary / captions)
--color-text-muted:     #505050    (muted / disabled)
```

### Semantic Tokens
```
--color-accent:         var(--product-primary)   (changes per product context)
--color-accent-hover:   var(--product-secondary)
--color-success:        #22C55E
--color-warning:        #F59E0B
--color-error:          #EF4444
--color-info:           #3B82F6
```

### Usage Rules
- Background is always near-black (`#0A0A0A`). Never white or light grey.
- Product accent colours are used for interactive states, borders, gradients — not background fills
- Text on dark: `#FFFFFF` (primary), `#A0A0A0` (secondary). Never `#999` or lower contrast
- Gradients: always `from-[start] to-[end]` following the product pair above
- Never mix product colours in the same component

---

## 3. TYPOGRAPHY

### Type Stack
```
--font-display:   'Space Grotesk', 'Inter', system-ui, sans-serif
--font-body:      'Inter', system-ui, sans-serif
--font-mono:      'JetBrains Mono', 'Fira Code', monospace
```

### Pairing Logic
| Role | Font | Weight | Use |
|------|------|--------|-----|
| Hero / Display | Space Grotesk | 700 (Bold) | Page titles, hero statements |
| Section Heading | Space Grotesk | 600 (SemiBold) | H2, H3 section headers |
| UI Label | Inter | 500 (Medium) | Nav, buttons, tags, badges |
| Body | Inter | 400 (Regular) | Paragraphs, descriptions |
| Caption | Inter | 400 (Regular) | Footnotes, metadata |
| Data / Code | JetBrains Mono | 400 | Matrix data, substance codes, ID strings |

### Type Scale
```
--text-xs:    0.75rem  / 12px   line-height: 1.4
--text-sm:    0.875rem / 14px   line-height: 1.5
--text-base:  1rem     / 16px   line-height: 1.6
--text-lg:    1.125rem / 18px   line-height: 1.5
--text-xl:    1.25rem  / 20px   line-height: 1.4
--text-2xl:   1.5rem   / 24px   line-height: 1.3
--text-3xl:   1.875rem / 30px   line-height: 1.2
--text-4xl:   2.25rem  / 36px   line-height: 1.1
--text-5xl:   3rem     / 48px   line-height: 1.0
--text-6xl:   3.75rem  / 60px   line-height: 1.0
```

### Rules
- Body text minimum: `--text-base` (16px). Never smaller for paragraph content.
- Display headlines: Space Grotesk Bold. Letter-spacing: `-0.02em` at large sizes.
- Mono type (Matrix/data contexts): always `--font-mono`. Use for IDs, substance codes, risk scores.
- Never use more than 2 typefaces in one view.

---

## 4. BASE UI TOKENS

### Spacing Scale
```
--space-1:    0.25rem  /  4px
--space-2:    0.5rem   /  8px
--space-3:    0.75rem  / 12px
--space-4:    1rem     / 16px
--space-5:    1.25rem  / 20px
--space-6:    1.5rem   / 24px
--space-8:    2rem     / 32px
--space-10:   2.5rem   / 40px
--space-12:   3rem     / 48px
--space-16:   4rem     / 64px
--space-20:   5rem     / 80px
--space-24:   6rem     / 96px
```

### Border Radius
```
--radius-sm:   0.25rem   /  4px   (badges, tags, small chips)
--radius-md:   0.5rem    /  8px   (inputs, small cards)
--radius-lg:   0.75rem   / 12px   (cards, panels)
--radius-xl:   1rem      / 16px   (large cards, modals)
--radius-2xl:  1.5rem    / 24px   (feature cards, hero panels)
--radius-full: 9999px             (pills, avatars, toggles)
```

### Shadows
```
--shadow-sm:
  0 1px 2px rgba(0,0,0,0.4);

--shadow-md:
  0 4px 6px rgba(0,0,0,0.3),
  0 1px 3px rgba(0,0,0,0.4);

--shadow-lg:
  0 10px 15px rgba(0,0,0,0.3),
  0 4px 6px rgba(0,0,0,0.2);

--shadow-xl:
  0 20px 25px rgba(0,0,0,0.4),
  0 8px 10px rgba(0,0,0,0.3);

--shadow-glow-blue:
  0 0 20px rgba(0,170,255,0.3),
  0 0 40px rgba(0,68,204,0.15);

--shadow-glow-product:
  0 0 20px rgba(var(--product-rgb), 0.25);
```

### Button Tokens
```
/* Size variants */
--btn-h-sm:     2rem      / 32px
--btn-h-md:     2.5rem    / 40px
--btn-h-lg:     3rem      / 48px
--btn-h-xl:     3.5rem    / 56px

--btn-px-sm:    --space-3
--btn-px-md:    --space-4
--btn-px-lg:    --space-6
--btn-px-xl:    --space-8

--btn-text-sm:  --text-xs  / 500
--btn-text-md:  --text-sm  / 500
--btn-text-lg:  --text-base / 600
--btn-text-xl:  --text-lg  / 600

--btn-radius:   --radius-md

/* Variant: Primary */
--btn-primary-bg:          linear-gradient(135deg, var(--product-primary), var(--product-secondary))
--btn-primary-text:        #FFFFFF
--btn-primary-hover-scale: 1.02
--btn-primary-shadow:      var(--shadow-glow-product)

/* Variant: Secondary / Ghost */
--btn-ghost-bg:            transparent
--btn-ghost-border:        1px solid var(--color-border)
--btn-ghost-text:          var(--color-text-primary)
--btn-ghost-hover-border:  var(--product-primary)

/* Variant: Destructive */
--btn-destructive-bg:      #DC2626
--btn-destructive-hover:   #EF4444

/* Shared */
--btn-transition:    all 150ms ease
--btn-focus-ring:    0 0 0 3px rgba(var(--product-rgb), 0.4)
--btn-disabled-opacity: 0.4
```

---

## 5. COMPONENT QUICK-REF

### Card
```
background:    var(--color-bg-surface)
border:        1px solid var(--color-border)
border-radius: var(--radius-lg)
padding:       var(--space-6)
```

### Input
```
background:    var(--color-bg-elevated)
border:        1px solid var(--color-border)
border-radius: var(--radius-md)
height:        var(--btn-h-md)
padding:       0 var(--space-4)
color:         var(--color-text-primary)
focus-border:  var(--product-primary)
```

### Badge / Tag
```
border-radius: var(--radius-sm)
padding:       var(--space-1) var(--space-3)
font-size:     var(--text-xs)
font-weight:   500
```

---
*ViceLab Brand System v1.0 | Brand Identity Agent | 2026-05-05*
