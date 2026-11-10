A 44px circular button holding only an icon: the outlined bell with a `rojo` dot, or the `mayolica` add button with the offset shadow.

## Props
- `icon` — an `Icon` name. `label` — REQUIRED accessible name ("Notificaciones, 2 nuevas", "Agregar hogar").
- `variant`: `outline` (2px `mayolica` ring on `blanco`, `marino` icon) | `primary` (`mayolica` fill, white plus, `shadow-offset`).
- `dot` — shows the 9px `rojo` unread dot.

## When to use
Page-header actions in the couple app only (bell next to "Hola, Narvis", add next to "Invitados"). Everywhere else use a labelled `Button`.
