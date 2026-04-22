# ASA — Brand Palette v1
> Product: Altered State Archives | Version: v1 | Status: LOCKED | Date: 2026-04-23

## Identity
**Violet / Deep Knowledge** — Knowledge archive, substance reference database, harm reduction research. Colour language: depth, intelligence, archive.

---

## Colours

| Role | HEX | Label |
|------|-----|-------|
| Primary | `#8B5CF6` | violet-500 |
| Accent | `#A78BFA` | violet-400 |
| Gradient Start | `#7C3AED` | — |
| Gradient End | `#8B5CF6` | violet-500 |
| Page Background | `#0A0A0A` | — |
| Surface / Card | `#0F0A1A` | — |
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
background: linear-gradient(90deg, #7C3AED 0%, #8B5CF6 100%);
```

**Tailwind:**
```jsx
className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]"
```

**SVG linearGradient:**
```xml
<defs>
  <linearGradient id="asaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#7C3AED"/>
    <stop offset="100%" stop-color="#8B5CF6"/>
  </linearGradient>
</defs>
```

## CSS Variables

```css
--asa-primary:        #8B5CF6;
--asa-accent:         #A78BFA;
--asa-gradient-start: #7C3AED;
--asa-gradient-end:   #8B5CF6;
--asa-surface:        #0F0A1A;
--asa-gradient:       linear-gradient(90deg, #7C3AED 0%, #8B5CF6 100%);
```

*Palette v1 — locked April 2026*