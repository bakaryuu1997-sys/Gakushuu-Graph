# V112R — Course Data Lazy Loading

## Why
After the written lesson and manual chapter expansions, the app had large build chunks. V111R lazy-loaded heavy lesson/detail screens, but course data and enhancer modules were still partially static through the course loader.

## What changed
- `courseLoader.ts` now keeps only lightweight course summaries in the initial path.
- Course modules are loaded with dynamic `import(...)` by selected course id.
- Enhancement modules V98/V99/V101/V102-V103/V104 are also dynamically imported only when a full course is requested.
- The loading panel remains in normal document flow, supports dark/light theme, and does not overlay the graph or lesson content.

## Preserved
- All V104-V111 written lessons, manual chapters, navigation, reading mode, coverage dashboard, and priority expansion remain available.
- Existing `courseRegistry.ts` remains for compatibility with older tests and utility imports, but the runtime app path uses `courseLoader.ts`.

## Result
The app no longer needs to load every course and every lesson enhancer up front before the user chooses a course.
