# V22 Architecture Cleanup

## Completed

1. Split App.tsx
- Extracted map UI into `src/components/map/*`.
- Extracted mobile tabs into `src/components/MobileBottomTabs.tsx`.
- Extracted right-side study graph/selected node panel into `src/components/StudySidePanel.tsx`.
- `src/App.tsx` is now 164 lines.

2. Split IT Passport legacy supplemental data
- `supplementalGraph.ts` is now a 2-line re-export file.
- Nodes moved to `supplementalNodes.ts`.
- Edges moved to `supplementalEdges.ts`.
- Both are under 200 lines.

3. Added UI smoke tests
- Added `src/test/uiSmoke.test.ts`.
- Tests mobile tabs, Phase Study rendering, and AI Passport default course.

4. Verified maintainability audit
- `npm run verify` passed.
- `UI/logic violations: 0`
- `Legacy refactor queue: 0`
- `Generated/data exceptions: 0`

## Current project statistics

- Files counted: 123
- Total lines counted: 10700
- Excluded: `node_modules`, `dist`, `.git`

## Verify result

```bash
npm run verify
```

Passed:
- build
- 6 test files
- 12 tests
- line audit
