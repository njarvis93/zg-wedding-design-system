The RSVP pair for each person and event: 'Asiste' fills `mayolica`, 'No' fills `descartada` with a `rojo` edge.

## Props
- `value`: `'yes'` | `'no'` | undefined, `onChange(v)`, `label` (e.g. "Ceremonia y fiesta · Carolina Pérez"), `labels` (default `['Asiste','No']`).
- Touch area: drawn at 40px (`size-control-sm`), but a transparent `::before` grows the hit area to 44 × 44 (`size-control-md`) without moving anything; the focus ring still follows the visible control.

## Usage
One row per event inside each guest's card: event name on the left (14px 600), the toggle on the right.
