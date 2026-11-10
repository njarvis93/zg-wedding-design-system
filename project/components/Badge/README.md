A square status chip — confirmado, pendiente, elegida, descartada — plus an outlined tag and the `naranja` count.

## Props
- `tone`: `confirmado` (`lavanda`) · `pendiente` (`pendiente`) · `elegida` (`marino`/`blanco`) · `descartada` (`descartada`/`descartada-texto`) · `outline` (white with 2px `mayolica`, for requirement tags like "60+ personas") · `count` (`naranja`, sidebar counters).
- `size`: default (6×12 padding, 13px 600) or `sm` (4×10, 12px 700 — inside rows, tables and task lists).
- `children` — the word. A status always shows its word; color alone never carries meaning.

## Usage
- RSVP: "Confirmado" / "4 asisten" → `confirmado`; "Pendiente" → `pendiente`; "No asiste" → `descartada`.
- Proposals: "Preseleccionada" → `elegida`; "Explorando" → white; "Descartada" → `descartada`.
- Person tags in tasks: "Ambos" `confirmado`, "Juan" `pendiente`, "Narvis" `descartada` (the source's assignment).
