# Cooked Pilot — Brand Palette v1
> Product: Cooked Pilot | Version: v1 | Status: LOCKED | Date: 2026-04-23

## Identity
**Magenta / Neon Pink** — Peer safety for festivals, raves, and late nights. Crew care, early recognition, culture-fluent support. Colour language: rave energy, warmth, urgency when needed.

---

## Colours

| Role | HEX | Label |
|------|-----|-------|
| Primary | `#FF0099` | magenta-primary |
| Accent | `#FF33AA` | magenta-light |
| Gradient Start | `#FF0099` | — |
| Gradient End | `#CC00FF` | violet-neon |
| Page Background | `#0A0A0A` | — |
| Surface / Card | `#1A0A1A` | — |
| Text on Primary | `#FFFFFF` | — |
| Text on Dark | `#F9FAFB` | — |
| Text Muted | `#6B7280` | gray-500 |
| Status OK | `#22C55E` | green-500 |
| Status Warn | `#F59E0B` | — |
| Status Critical | `#EF4444` | red-500 |

---

## Gradient

**CSS:**
```css
background: linear-gradient(90deg, #FF0099 0%, #CC00FF 100%);
```

**Tailwind:**
```jsx
className="bg-gradient-to-r from-[#FF0099] to-[#CC00FF]"
```

**SVG linearGradient:**
```xml
<defs>
  <linearGradient id="cookedPilotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#FF0099"/>
    <stop offset="100%" stop-color="#CC00FF"/>
  </linearGradient>
</defs>
```

## CSS Variables

```css
--cookedpilot-primary:        #FF0099;
--cookedpilot-accent:         #FF33AA;
--cookedpilot-gradient-start: #FF0099;
--cookedpilot-gradient-end:   #CC00FF;
--cookedpilot-surface:        #1A0A1A;
--cookedpilot-gradient:       linear-gradient(90deg, #FF0099 0%, #CC00FF 100%);
```

*Palette v1 — locked April 2026*