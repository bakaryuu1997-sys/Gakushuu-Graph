# V24 CI + Learning Pack

## Completed

1. Course-level dynamic loading
- Added `src/courses/courseLoader.ts`.
- `App.tsx` now loads the selected course with `loadCourseById()`.
- AI Passport and IT Passport data are no longer directly imported by the top-level App file.

2. GitHub Actions CI
- Added `.github/workflows/ci.yml`.
- CI jobs:
  - `verify`: npm ci + npm run verify
  - `e2e-smoke`: npm ci + Playwright install + npm run e2e:smoke

3. Export Learning Pack
- Added `Export Learning Pack` button.
- Exports a markdown file containing:
  - high-importance node list
  - glossary sample
  - quiz review with answers and explanations

4. Verify pipeline preserved
- `npm run verify` still passes:
  - build
  - test
  - line audit
  - content audit

5. Maintainability preserved
- UI/logic violations: 0
- Legacy refactor queue: 0
- Generated/data exceptions: 0

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 132
Total lines: 11111

Largest files:
- package-lock.json: 4882 lines
- src/components/AppLoaded.tsx: 195 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 157 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines

## Scripts

```bash
npm run verify
npm run audit:content
npm run e2e:smoke
```

For local E2E:

```bash
npx playwright install
npm run e2e:smoke
```
