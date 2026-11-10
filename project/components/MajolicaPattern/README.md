The majolica tile as a fill layer: full colour for photo placeholders, ghost (cream at 3–9% alpha) behind dark cards.

## Props
- `tone`: `color` · `ghost`. `scale` (default .8 color, .9 ghost; the sidebar uses 1.1).

## Usage
Place as the first child of a `position:relative; overflow:hidden; z-index:0` box; it sits at `z-index:-1`. `Card pattern`, `Countdown`, `Sidebar`, `GiftItem` and `ComparisonTable` already include it.
