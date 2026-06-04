# V3 Upgrade Notes

## Why this version exists

The V2 graph showed too many nodes at once, so the learning map was visually dense and difficult to read. V3 changes the graph strategy from "show everything" to "progressive disclosure".

## Improvements

1. Default graph mode is now `overview` instead of `study`.
2. `Overview` mode shows only the high-level map and topic nodes.
3. `Study` mode focuses around the currently selected node and nearby related nodes.
4. `Exam` mode reduces noise by focusing on high-importance nodes.
5. Selected node is visually highlighted more clearly.
6. Detail panel now includes a real lesson section:
   - easy explanation
   - quick lesson steps
   - exam point
   - memory trick
   - keywords
   - real examples
   - related nodes
7. The detail panel is scrollable so long lessons do not break the layout.
8. Control panel explains how to use Overview / Study / Exam modes.

## Build result

`npm run build` passes.

There is still a bundle warning above 500KB because React Flow + graph/export features are included. This is not a build error. Future optimization should add code splitting for exam/flashcard/export features.
