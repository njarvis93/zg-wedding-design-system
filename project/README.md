Matrimonio is the visual system of Narvis & Juan's wedding app: one React app for three audiences — a public cover that asks only for an invitation code, a mobile-first guest site, and a private planning tool the couple uses on desktop and in a Capacitor app. Direction: **editorial, palette 2, Amalfi coast** — majolica tile strips, lemon branches, a ceramic plate and touches of terracotta, set square and flat on a warm off-white page.

## Principles

- **Square and outlined.** Every card, button, input, badge and image tile has `radius-0`. Structure comes from a `border-card` (2px) outline in `mayolica`, never from shadows or rounded corners. Only true circles (avatars, round icon buttons, dots) use `radius-full`.
- **One shadow, one meaning.** `shadow-offset` (a hard 4px `rojo` offset) sits under the primary action of a view and nowhere else. If two things on screen have it, one of them is not primary.
- **Ornament frames, it never decorates content.** The majolica strip runs along the top edge of every screen; the plate and lemons appear once per hero. Cards and lists stay plain.
- **Poster headlines, quiet text.** Headlines are Space Grotesk, bold, uppercase, tight. Everything you read is DM Sans in sentence case.
- **Private by default.** The public cover exposes names, month and a code field: no venue, no guest list, no bank details. Say so in copy where it matters ("Página privada para nuestros invitados.").

## Content fundamentals

- **Language:** Chilean Spanish. Guests are addressed in the plural *ustedes* on shared surfaces ("Nos encantaría celebrar con ustedes al atardecer", "Cuéntennos quiénes vienen") and in the singular *tú* on personal actions ("Tu invitación", "Puedes editar tu respuesta", "Reservado por ti"). The couple speaks as *nosotros* ("Nos casamos", "Que estén con nosotros es lo más importante").
- **The couple's tool** greets by first name ("Hola, Narvis") and uses short imperative labels: "Marcar pagado", "Elegir esta", "Traer datos", "Recordar por WhatsApp".
- **Casing:** sentence case everywhere in DM Sans, including buttons and card titles ("Confirmar asistencia", "Próximas tareas"). Uppercase only via the display face, `eyebrow` and `kicker`.
- **Placeholders** for unknown facts are square-bracketed and left visible: "[fecha límite]", "[Casa por definir]", "[N] días", "[hh:mm]". Never invent a date, venue or amount.
- **Numbers:** Chilean formats — "$800.000", "$3,8 M", "4,5"; 24-hour times ("19:00"); dates as "sáb 14", "1 dic", "Sábado [DD] de noviembre".
- **Separators:** the middle dot joins facts ("Noviembre 2028 · cerca de Santiago", "Cuota 1 de 2 · 1 dic"). Arrows only on text links ("Responder ahora →").
- **Reassurance lines** sit under forms in `small` + `texto-tenue`: "Usamos estos datos solo para organizar la boda y los borramos 90 días después.", "Esta página no procesa pagos…".
- **No emoji.** Glyphs allowed: "✓ Sí", "✗ No", "+" / "−" for pros and cons, "&" between the names.

## Color

- Page ground is always `fondo`; cards and controls are `blanco` with a `mayolica` outline. `crema` is the ceramic, not a surface.
- Text is `marino` (ink). Secondary paragraphs and labels use `texto-suave`; captions, meta and eyebrows use `texto-tenue`. On `lavanda` use `marino` or `texto-suave`; on `mayolica`/`profundo` use `texto-invertido` and `texto-claro`; on `pendiente` use `marino`.
- Action is `mayolica`. Accent on light grounds is `rojo` (the ampersand, the offset shadow, display words like "al atardecer" on `fondo` or `blanco`); accent on dark grounds is `naranja` (active sidebar item, counts, progress on navy). On `arena` (the sand banner) a red display word is set in `rojo-texto`, never `rojo`.
- Red as small text is `rojo-texto` — deadlines, kickers, cons, "✗ No". Never set body text in `rojo`.
- Status pairs: confirmado → `lavanda`; pendiente / por decidir → `pendiente`; elegida → `marino` with `blanco`; descartada / no asiste → `descartada` with `descartada-texto`. Each status always carries its word, never color alone.
- `rojo-texto` is #c22e2e, nudged from the source's #c73232 so every red text passes 4.5:1, including on `arena` (4.72:1). Flagged pair: `texto-tenue` and `mayolica` must not be text on `lavanda` (≈3.97:1).

### Two themes: Costa (light) and Noche (dark)

- Light is the source, unchanged. Noche is an added theme built from it: a night-navy `fondo` (#0d1830), raised `blanco` surfaces (#15233f), light `marino` ink, and dark tints for `lavanda`, `pendiente` and `descartada` with light text. Every text pair holds 4.5:1 or better in both themes.
- `mayolica`, `naranja`, `rojo`, the ceramic colors and the ornaments do not change: the tile, plate and lemons look the same at night.
- Paint by ROLE, not by hue, so both themes work: outlines → `trazo`; links, active tabs, progress fills → `accion-texto`; text on `mayolica`/`profundo` → `texto-invertido`; deep panels (sidebar, success banner, navy cards) → `profundo`; selected segment, active chip, current link, "Elegida", dark button → `seleccion` + `sobre-seleccion`; text on `naranja` or `crema` → `profundo` (it stays navy in both themes). Use `blanco` only as a surface and `marino` only as ink.
- In Noche, `blanco` is a navy surface: never use it as a text color.

## Type

- Two families: `display` = Space Grotesk (700, uppercase, `tracking-display`), `sans` = DM Sans (400–800). Fonts ship as latin subsets in `fonts/`.
- Mobile page title: `title-l` (34px). Mobile greeting: `title-xl`. Desktop/admin page title: `display-page`. KPI numbers: `display-stat` (web) or `title-m` (app). Card titles inside lists: `title-xxs`. Times in schedules: `title-xs`.
- Card headings in sentence case: `heading` (17px bold DM Sans). Body: `body` (15px / 1.55) in cards, `body-m` for intros, `lead` under desktop heroes.
- Section headings above card groups: `eyebrow` — 13px, 700, 0.1em, uppercase, `texto-tenue`, often numbered ("1 · ¿Quiénes vienen?").
- Kicker above a hero: `kicker` in `rojo-texto` ("Nos casamos", "Hola, familia Pérez"); on `mayolica` in `pendiente` ("Guarda la fecha").
- The invitation code field uses `code`: 20px, 600, `tracking-code`, centred, on `fondo`.

## Spacing and layout

- Mobile (390 frame): page padding `space-28` top, `space-20` sides, 104px bottom to clear the 84px tab bar. Sections stack with `space-22`–`space-24`; card grids use `space-12`.
- Card padding: `space-22` for panels, `space-18` for tiles and list cards, `space-16` in dense app cards, `space-24` for hero cards.
- Desktop guest site: content max `container-max` (1200px) with `space-24` gutters, sections `space-56` apart; cards in `repeat(auto-fit, minmax(280px, 1fr))` with `space-20` gap.
- Couple desktop: `Sidebar` 240px in `marino` + main column with 36–40px padding; KPI row `repeat(auto-fit, minmax(200px, 1fr))`, panels `minmax(320px, 1fr)`.
- Breakpoints: below `bp-tablet` one column, fixed bottom `TabBar`, 48px targets; `bp-tablet`–`bp-desktop` two-column cards, couple menu collapsed; from `bp-desktop` guests get `TopNav`, the couple gets `Sidebar` and tables.
- Touch targets are at least `size-control-md` (44px); inputs and mobile actions are `size-control-lg` (48px); the main mobile CTA is `size-control-xl` (52px).

## Borders, shadows, radii

- `border-card` 2px `mayolica` — cards, inputs, chips, tab bar top edge. `border-control` 1.5px `marino` — secondary buttons. `border-hairline` 1px `lavanda` — dividers between rows inside a card or table.
- `shadow-offset` only on the primary action. No blur shadows anywhere.
- `radius-0` everywhere; `radius-full` for circles; `radius-arch` / `radius-arch-foot` only for the arch swatches on the system board.

## Ornament and imagery

- **Majolica strip** (`MajolicaStrip`, `assets/Patterns/majolica-strip.svg`): along the top of every screen with a 2px `terracota` rule beneath — `size-strip-mobile` (14px, tile scale .35) on phones, `size-strip-desktop` (22px, scale .55) on desktop; repeated at the very bottom of the desktop footer with the rule above.
- **Ghost majolica** (`MajolicaPattern tone="ghost"`): the same tile in cream at 3–9% alpha behind `mayolica` and `marino` cards and the sidebar. Never on light grounds.
- **Photo placeholders**: until a real photo exists, an image area is the full-colour tile (scale .8) with a small "foto" label on `crema`. Real photos fill the same box, square-cornered.
- **Ceramic plate** (`Plate`, `assets/Logos/plate-lemons.svg`): one per hero — top-right of the save-the-date card (150px, bleeding off the corner), beside the names on the system board. With the "N&J" monogram (`assets/Logos/monogram-plate.svg`) it is the desktop hero mark.
- **Sand** (`arena` with a speckle of brand colors, `assets/Illustrations/sand-banner.svg`) is the ground of the desktop guest hero and the public cover.
- **Lemons** (`limon` with a `crema` highlight, `oliva` leaves) appear only as sprigs around the plate or on the lemon tree in the couple app's countdown.

## Iconography

- One line-icon family, drawn inline: 24×24 viewBox, round caps and joins, `stroke="currentColor"`, no fill. Stroke 1.9 in tab bars, 1.8 in feature tiles and buttons, 2 for back/search, 2.2 for the plus, 2.4 for the success check. Use `Icon` with a name from `assets/Icons/`.
- Icons take the color of their label: `texto-tenue` inactive and `mayolica` active in the tab bar, `mayolica` on feature tiles and fund tiles, `marino` in the bell.
- Ratings use `star-filled` (`naranja` fill, `estrella-borde` stroke) and `star-empty` (`texto-tenue`).
- No emoji, no icon fonts. Instagram is the only brand glyph (footer "Compartan sus fotos").

## Components

The bundle (`window.Matrimonio`) recreates every pattern the screens use: actions (`Button`, `IconButton`), status (`Badge`, `Avatar`, `AvatarStack`, `ProgressBar`, `StarRating`), forms (`TextField`, `Select`, `CheckboxRow`, `SegmentedControl`, `ChoiceToggle`, `FilterChips`), content (`Card`, `StatCard`, `Countdown`, `Timeline`, `ListRow`, `Accordion`, `StatusMessage`, `ActivityItem`, `GiftItem`, `FundCard`, `ComparisonTable`), navigation (`TabBar`, `TopNav`, `Sidebar`, `BackLink`) and ornament (`MajolicaStrip`, `MajolicaPattern`, `Wordmark`, `Plate`). Read each component's guidelines before composing a screen.

**Intentional additions** (not drawn in the source): a solid 2px focus ring (`marino` on light grounds, `naranja` on dark, 2px offset) on every interactive element, and a 50%-opacity disabled state on `Button`.
