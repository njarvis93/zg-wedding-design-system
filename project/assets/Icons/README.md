The line-icon family: 24×24, round caps and joins, no fill. Same path data as the `Icon` component.

In these files the stroke is fixed to `marino` (#1e3a6e) because an `<img>` cannot inherit `currentColor`; in code, use `Icon`, which strokes with `currentColor` (`texto-tenue` inactive, `mayolica` active). Stroke widths are the source's: 1.9 (tab icons), 1.8 (map-pin, help-circle, clock, plane, bell, camera), 2 (search, chevron-left, instagram), 2.2 (plus), 2.4 (check).

`star-filled` (`naranja` fill, `estrella-borde` stroke) and `star-empty` (`estrella-vacia` stroke) keep their own colors.
