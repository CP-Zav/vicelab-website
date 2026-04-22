# Matrix — Brand Palette v1
> Product: Matrix Interaction Engine | Version: v1 | Status: LOCKED | Date: 2026-04-23

## Identity
**Crimson / Risk Red** — Multi-substance interaction analysis, risk scoring, pharmacological conflict detection. Colour language: risk, critical intelligence, high stakes.

---

## Colours

| Role | HEX | Label |
|------|-----|-------|
| Primary | `#EF4444` | red-500 |
| Accent | `#F87171` | red-400 |
| Gradient Start | `#DC2626` | — |
| Gradient End | `#EF4444` | red-500 |
| Page Background | `#0A0A0A` | — |
| Surface / Card | `#1A0808` | — |
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
background: linear-gradient(90deg, #DC2626 0%, #EF4444 100%);
```

**Tailwind:**
```jsx
className="bg-gradient-to-r from-[#DC2626] to-[#EF4444]"
```

**SVG linearGradient:**
```xml
<defs>
  <linearGradient id="matrixGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#DC2626"/>
    <stop offset="100%" stop-color="#EF4444"/>
  </linearGradient>
</defs>
```

## CSS Variables

```css
--matrix-primary:        #EF4444;
--matrix-accent:         #F87171;
--matrix-gradient-start: #DC2626;
--matrix-gradient-end:   #EF4444;
--matrix-surface:        #1A0808;
--matrix-gradient:       linear-gradient(90deg, #DC2626 0%, #EF4444 100%);
```

*Palette v1 — locked April 2026*