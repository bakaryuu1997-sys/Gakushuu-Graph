# V19 Exam Ready Upgrade

## New in V19

1. Clearer Study Wizard status
- Phase Study now shows a large `current step X/Y` box.
- The current node title and exam point are highlighted.
- Prev / Next buttons remain available.

2. More manual lessons
- Added `aiPassportV19Top180ManualLessons.ts`.
- Adds another 54 manually written Vietnamese lessons for important nodes.
- Total priority manual lesson coverage is now roughly 150+ important nodes when combined with V17/V18 layers.

3. Real Dagre auto-layout
- Added `dagre` and `@types/dagre`.
- Graph nodes are now arranged by Dagre left-to-right layout instead of only manual positioning.
- Edges use smoother routing to look closer to architecture diagrams.

4. More diagrams
Added architecture-style diagrams for:
- Bias / Fairness check
- AI Governance structure
- Copyright decision flow
- Privacy by Design

5. Exam Crash Course
- New sidebar item: `Crash Course`.
- Supports 3-day and 7-day review plans.
- Focuses on high-importance nodes and unmastered nodes.

## Build status
- `npm_config_cache=/tmp/npm-cache npm install`
- `npm run build`
- Build passed.
- Vite still reports one large data chunk because the AI course content is intentionally large.
