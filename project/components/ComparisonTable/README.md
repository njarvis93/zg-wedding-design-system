The proposal comparison: one column per option with image and status, rows of attributes, `lavanda` hairlines, scrolls sideways.

## Props
- `columns`: `[{title, meta, status?, statusTone?, imageLabel?}]`.
- `rows`: `[{label, cells: [node…], strong?}]` — `strong` bolds the cells (prices). Cells can hold "✓ Sí" in `mayolica` / "✗ No" in `rojo-texto`, pros (+) and cons (−), scores, and the decide buttons.
- `corner` — top-left label (default "Propuesta").
- `label` / `labelledBy` — accessible name of the scrolling container, which is a keyboard-focusable `role="region"` (`tabIndex=0`). Default `aria-label`: "Comparación de propuestas"; `labelledBy` (an element id) wins over `label`. Give it a specific name when there is more than one table on a page.

## Usage
Definiciones → Comparar, on desktop. On mobile prefer one card per proposal.
