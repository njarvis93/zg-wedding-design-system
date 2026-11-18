A `lavanda` track of square options; the selected one turns `marino` with white text.

## Props
- `options` (strings or `{value,label}`), `value`, `onChange`, `label` (group name), `size` (`sm` = 36px options, 3px track — the CLP/USD switch).
- Touch area: drawn at 40px (`size-control-sm`; `sm` 36px), but a transparent `::before` grows the hit area to 44 × 44 (`size-control-md`) without moving anything; the focus ring still follows the visible control. Options are at least 44px wide so neighbouring hit areas never overlap.

## Usage
Switch views of the same data ("Tarjetas / Comparar / Mapa", "Moodboard / Comparar") or units ("CLP / USD"). Two to four options.
