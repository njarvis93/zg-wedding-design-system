The ceramic plate is the system's mark; there is no separate logo file in the source. The "N&J" wordmark is set in type (`Wordmark` component), not drawn.

- `monogram-plate.svg` — the plate with "N&J" in deep blue (#23468a) and a `rojo` ampersand, lemon sprigs around it, on a 14% deep-blue shadow. (The `Plate monogram` component draws the letters in `profundo`.) The desktop guest hero mark. The letters are live SVG text in Space Grotesk: inside an `<img>` they fall back to the system sans, so prefer the `Plate monogram` component where fonts are loaded.
- `plate-lemons.svg` — the plate with two lemons and leaves in the centre. Save-the-date card and system board header.

Colors are fixed in the files (`mayolica`, `crema`, `oliva`, `limon`, and the plate's dashed ring in #9db1de — `lavanda-fija` in the `Plate` component). Never recolor, never place on `mayolica` (the rim disappears) — use `fondo`, `blanco` or `arena`.
