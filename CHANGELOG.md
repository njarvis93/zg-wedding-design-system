# Changelog

Versions follow [semver](https://semver.org). Each version is a git tag (`vX.Y.Z`) that the front installs directly from GitHub. Removing or renaming a token, component or prop is a **major** change.

## 1.1.0 — 2026-11-10

Form controls for React Hook Form. Minor: every 1.0.0 call renders and behaves the same.

- **`TextField`, `Select`, `CheckboxRow`** use `React.forwardRef` (the ref reaches the native control) and pass native props through: `name`, `onBlur`, `onFocus`, `disabled`, `required` and, per control, `readOnly`, `autoComplete`, `autoFocus`, `inputMode`, `maxLength`, `minLength`, `pattern`, `min`, `max`, `step`, `value`, `id` (replaces the generated one) and `aria-describedby` (merged with the internal ids). `{...register('x')}` now works.
- **New `error` prop** on the three: `aria-invalid="true"`, `rojo-texto` outline and a message under the control linked by `aria-describedby`; it replaces the hint while present. Contrast 5.54:1 (Costa, `fondo`) and 7.73:1 (Noche, `fondo`). The 2px focus ring is unchanged.
- **`required`** adds a discreet "(obligatorio)" to the label; **`disabled`** fades to 50 %, like `Button`.
- **`Select`:** new `hint` and `placeholder` (empty, disabled first option).
- **`TextField` `code`:** also `autoCapitalize="characters"`, `spellCheck={false}`; respects `maxLength`.
- **Types:** the three are `ForwardRefExoticComponent`s; pass-through props come from React's HTML attribute types; `onChange` receives typed `ChangeEvent`s (method syntax, so 1.0.0 handlers still compile). Types are now checked in CI.
- **CI:** `test/consumer/` installs the package from the repo root, type-checks a React Hook Form + Zod form with `tsc --strict` and server-renders it.
- **License:** MIT (was GPL-3.0-only).

## 1.0.0 — 2026-11-10

First installable release.

- **Package:** `zg-wedding-design-system`, installed from GitHub by tag. Ships `dist/`: an ES module with 33 React components (`peerDependencies: react >=18`), `tokens.css`, `styles.css`, an optional `base.css`, `tokens.json`, fonts and SVG assets.
- **Tokens:** 31 colors in two themes, Costa (light) and Noche (dark, via `data-theme="dark"`), plus 24 type styles (also as `.mx-type-<name>` classes), spacing, radii, shadow, sizes, border widths, tracking and breakpoints.
- **Single source:** components live in `src/`; `node scripts/build.mjs` generates `dist/` and the claude.ai artifact bundle (`project/components/bundle.*`), and `--check` verifies they are up to date.
