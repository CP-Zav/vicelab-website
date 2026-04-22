# VibeGuard — Brand Palette v1
> Product: VibeGuard | Version: v1 | Status: LOCKED | Date: 2026-04-23

## Identity
**Blue-Green / Compliance Teal** — Organiser-side safety intelligence. Compliance, biometric monitoring, venue ops. Colour language: trust, clarity, structural confidence.

---

## Colours

| Role | HEX | Label |
|------|-----|-------|
| Primary | `#00C6A3` | teal-primary |
| Accent | `#34D9BC` | teal-light |
| Gradient Start | `#00C6A3` | — |
| Gradient End | `#0066FF` | blue-600 |
| Page Background | `#0A0A0A` | — |
| Surface / Card | `#0D1F1A` | — |
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
background: linear-gradient(90deg, #00C6A3 0%, #0066FF 100%);
```

**Tailwind:**
```jsx
className="bg-gradient-to-r from-[#00C6A3] to-[#0066FF]"
```

**SVG linearGradient:**
```xml
<defs>
  <linearGradient id="vibeguardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#00C6A3"/>
    <stop offset="100%" stop-color="#0066FF"/>
  </linearGradient>
</defs>
```

## CSS Variables

```css
--vibeguard-primary:        #00C6A3;
--vibeguard-accent:         #34D9BC;
--vibeguard-gradient-start: #00C6A3;
--vibeguard-gradient-end:   #0066FF;
--vibeguard-surface:        #0D1F1A;
--vibeguard-gradient:       linear-gradient(90deg, #00C6A3 0%, #0066FF 100%);
```

*Palette v1 — locked April 2026*