# ViceLab UI Asset Naming Conventions
**Locked: 2026-05-04 | B7 delivery**

---

## Products

| Key | Full Name | Brand Colour |
|-----|-----------|--------------|
| `vicelab` | ViceLab | Electric Blue `#0044CC → #00AAFF` |
| `cookedpilot` | Cooked Pilot | Magenta `#FF0099 → #CC00FF` |
| `vibeguard` | VibeGuard | Teal `#00C6A3 → #0066FF` |
| `siv` | SIV — Signal Intelligence Vault | Amber `#F59E0B → #F97316` |
| `asa` | ASA — Altered State Archives | Violet `#7C3AED → #8B5CF6` |
| `matrix` | Matrix | Crimson `#DC2626 → #EF4444` |

---

## Naming Pattern

```
{product}_{type}_{size}.{ext}
```

All lowercase. Hyphens allowed within type (e.g. `app-icon`). No spaces.

---

## Asset Types

| Type token | Description | Sizes (px) | Shape |
|------------|-------------|------------|-------|
| `favicon` | Browser tab icon | 16, 32 | Square |
| `app-icon` | PWA / home screen | 192, 512 | Square |
| `avatar` | Profile / social | 400 | Circle crop |
| `icon` | SVG master mark | 1024×1024 viewBox | Square |

---

## File Locations

```
/public/ui-assets/
  {product}_favicon_16.png
  {product}_favicon_32.png
  {product}_app-icon_192.png
  {product}_app-icon_512.png
  {product}_avatar_400.png
  naming-conventions.md

/public/logos/
  {product}.svg          ← root logo (existing, for site header use)

/public/ui-assets/svg/   ← (optional structured subfolder)
  {product}_icon.svg     ← 1024-base master mark
```

---

## Rules

1. **No text in SVG** — all marks are path-based; no `<text>` elements
2. **No mixed logos per section** — one logo per UI region
3. **Equal visual weight** — all icons sized consistently; don't resize individual products
4. **Root path only** — reference as `/logos/filename.svg` or `/ui-assets/filename.png` (no relative paths)
5. **No placeholder text** — until a logo exists, UI must look complete without it
