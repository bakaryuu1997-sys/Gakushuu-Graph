# V116R — Final Release Stability QA

## Goal
Create a final stability pass for the local learning suite before handoff.

## What changed
- Added `V116FinalStabilityPanel` to the Content Coverage screen.
- Added `v116ReleaseStabilityQa` data for final release checks.
- Added a final checklist for theme, layout, lesson content, no-timer practice, lazy loading, and clean zip handoff.
- Updated README with a concise local run guide and release checklist.
- Added audit and test coverage for the V116 release state.

## What V116 checks
- Dark/light mode follows class-based theme control.
- Lesson navigation and reading mode do not overlay content.
- Lesson detail prioritizes written content from V104+ and manual chapters from V105+.
- No countdown timer wording remains in legacy exam simulators.
- Heavy views are lazy-loaded where it matters.
- The release zip should exclude node_modules, dist, .git, cache, and scratch folders.

## Commands
```bash
npm run audit:v116-final-stability
npx vitest run src/test/v116FinalStabilityQa.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false
npm run build
```

## Honest note
Some chunks can still be large because this is a local/offline app with a lot of written study content. That is not a runtime failure. Further splitting is possible, but should be done only if startup becomes slow on the target machine.
