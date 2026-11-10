# Changelog

Versions follow [semver](https://semver.org). Each version is a git tag (`vX.Y.Z`) that the front installs directly from GitHub. Removing or renaming a token, component or prop is a **major** change.

## 1.0.0 — 2026-11-10

First installable release.

- **Package:** `zg-wedding-design-system`, installed from GitHub by tag. Ships `dist/`: an ES module with 33 React components (`peerDependencies: react >=18`), `tokens.css`, `styles.css`, an optional `base.css`, `tokens.json`, fonts and SVG assets.
- **Tokens:** 31 colors in two themes, Costa (light) and Noche (dark, via `data-theme="dark"`), plus 24 type styles (also as `.mx-type-<name>` classes), spacing, radii, shadow, sizes, border widths, tracking and breakpoints.
- **Single source:** components live in `src/`; `node scripts/build.mjs` generates `dist/` and the claude.ai artifact bundle (`project/components/bundle.*`), and `--check` verifies they are up to date.
