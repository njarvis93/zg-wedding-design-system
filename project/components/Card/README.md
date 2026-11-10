The square container: white with a 2px `mayolica` outline by default, or a flat `mayolica`, `marino`, `lavanda` or `pendiente` fill.

## Props
- `tone`: `outline` (default) · `mayolica` · `marino` · `lavanda` · `pendiente`.
- `pattern` — adds the ghost majolica tile (only on `mayolica` and `marino`).
- `padding` (default 22px; use 18 for tiles and list cards, 24–26 for hero cards), `flush` (no padding, for image-topped cards), `as` (`'article'`, `'a'`…), `href`.
- `children` — compose with `heading`, `body`, `Badge`, `ListRow`, `Button`.

## Usage
- Feature tiles on the guest home ("Programa", "Cómo llegar"…) are `outline` links with a `mayolica` icon, a 15px bold title and a 13px caption.
- A dark card (`marino`, `pattern`) stands out once per screen (Regalos on desktop, the countdown in the app).
- `lavanda` is for a soft aside (brunch, news band); text inside it uses `texto-lavanda`.
