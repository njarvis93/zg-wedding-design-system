A KPI card: a 13px label, a big Space Grotesk number, an optional bar and a caption.

## Props
- `label`, `value`, `caption`, `progress` (0–100 adds a `ProgressBar`), `tone` (`outline` · `mayolica` · `pendiente` · `lavanda` · `marino`), `size` (`web` default: 44px number, 22px padding · `app`: 30px number, 16px padding).

## Usage
The couple's panel: "Faltan [N] días" (`mayolica`), "RSVP respondidos 72%", "Pagado vs presupuesto 38%" with a bar, "Por decidir 3" (`pendiente`). Grid `repeat(auto-fit, minmax(200px,1fr))` on web, two columns in the app.
