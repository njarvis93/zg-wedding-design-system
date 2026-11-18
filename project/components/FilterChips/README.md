A horizontally scrolling row of square chips; the active one is `marino`. Works as filters or as in-page anchors.

## Props
- `options` (strings or `{value,label}`), `value`, `onChange`, `label`.
- `asLinks` — render `<a href="#value">` for in-page section jumps (Información: "Programa / Lugar / Vestimenta / Preguntas").
- Touch area: drawn at 40px (`size-control-sm`), but a transparent `::before` grows the hit area to 44 × 44 (`size-control-md`) without moving anything; the focus ring still follows the visible control. The scroll row pads itself by 2px (and pulls back with a negative margin) so the taller hit area is not clipped.

## Usage
Guest list status filters ("Todos", "Sin responder", "Asisten", "No asisten"); section anchors on long pages.
