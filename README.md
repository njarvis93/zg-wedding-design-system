# Matrimonio — design system

Visual system for the ZG Wedding app: a public cover, a mobile-first guest site and the couple's planning tool. Direction: editorial, Amalfi coast — majolica tiles, lemons, a ceramic plate and terracotta on a warm off-white page. Two themes: **Costa** (light) and **Noche** (dark).

**See it live:** https://njarvis93.github.io/zg-wedding-design-system/ — palette in both themes, type, every component working, and the assets. The site (`index.html`) reads the files in `project/` directly, so it updates with every push to `main`.

| Path | What |
| --- | --- |
| [`project/README.md`](project/README.md) | The brand book: voice, color, type, layout, ornament and icon rules. Start here. |
| [`project/tokens.json`](project/tokens.json) | All tokens: colors (both themes), type styles, spacing, radii, shadow, sizes. |
| [`project/components/`](project/components) | `bundle.js` (exposes `window.Matrimonio`, needs React 18), `bundle.css`, `index.d.ts`, and one folder per component with guidelines and a live preview. |
| [`project/assets/`](project/assets) | Logos, majolica patterns, illustrations and the icon set as SVG. |
| [`project/fonts/`](project/fonts) | DM Sans and Space Grotesk (latin subsets). |

## Licenses

The fonts in `project/fonts/` are distributed under the SIL Open Font License 1.1 — see [`project/fonts/OFL.txt`](project/fonts/OFL.txt). Everything else is under the repository [LICENSE](LICENSE).
