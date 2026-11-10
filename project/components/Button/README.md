The square action button: a `mayolica` primary with the `rojo` offset shadow, plus secondary, quiet, dark and dashed variants.

## When to use
- `primary` — the ONE main action of a view ("Confirmar asistencia", "Entrar", "Elegir esta", "Lo regalo yo"). Carries `shadow-offset`.
- `secondary` — 1.5px `marino` outline on transparent: alternatives beside a primary ("Cómo llegar", "Ver programa", "Comprobante").
- `quiet` — 2px `mayolica` outline on `blanco`, `texto-suave` label: reversible or negative actions ("Descartar", "Liberar", "Copiar enlace").
- `dark` — `marino` fill: a utility action inside a dashed add form ("Traer datos").
- `dashed` — 1.5px dashed `mayolica`: add-another rows ("+ Agregar acompañante (1 disponible)").

## Props
- `variant`: `primary` | `secondary` | `quiet` | `dark` | `dashed` (default `primary`).
- `size`: `sm` 40px · `md` 44px · `lg` 48px (default) · `xl` 52px (main mobile CTA, desktop hero).
- `block` — full width. `icon` — an `Icon` name shown before the label. `href` — renders an `<a>`.
- `children` — the label, sentence case, a verb first.

## Do / don't
- One `primary` per view; a list of items each with "Elegir esta" is the exception (one per column).
- Never round the corners or add a blur shadow.
- On mobile, the sticky RSVP footer uses `xl` + `block`.
