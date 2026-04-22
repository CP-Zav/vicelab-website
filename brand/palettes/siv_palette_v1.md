# SIV — Brand Palette v1
> Product: Signal Intelligence Viewer | Version: v1 | Status: LOCKED | Date: 2026-04-23

## Identity
**Amber / Signal Gold** — Real-time signal intelligence, alerting, and data monitoring. Colour language: urgency-adjacent warmth, precision amber.

---

## Colours

| Role | HEX | Label |
|------|-----|-------|
| Primary | `#F59E0B` | amber-500 |
| Accent | `#FBBF24` | amber-400 |
| Gradient Start | `#F59E0B` | — |
| Gradient End | `#F97316` | orange-500 |
| Page Background | `#0A0A0A` | — |
| Surface / Card | `#1A1200` | — |
| Text on Primary | `#0A0A0A` | — |
| Text on Dark | `#F9FAFB` | — |
| Text Muted | `#6B7280` | gray-500 |
| Status OK | `#22C55E` | green-500 |
| Status Warn | `#F59E0B` | — |
| Status Critical | `#EF4444` | red-500 |

---

## Gradient

**CSS:**
```css
background: linear-gradient(90deg, #F59E0B 0%, #F97316 100%);
```

**Tailwind:**
```jsx
className="bg-gradient-to-r from-[#F59E0B] to-[#F97316]"
```

**SVG linearGradient:**
```xml
<defs>
  <linearGradient id="sivGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#F59E0B"/>
    <stop offset="100%" stop-color="#F97316"/>
  </linearGradient>
</defs>
```

## CSS Variables

```css
--siv-primary:        #F59E0B;
--siv-accent:         #FBBF24;
--siv-gradient-start: #F59E0B;
--siv-gradient-end:   #F97316;
--siv-surface:        #1A1200;
--siv-gradient:       linear-gradient(90deg, #F59E0B 0%, #F97316 100%);
```

*Palette v1 — locked April 2026*