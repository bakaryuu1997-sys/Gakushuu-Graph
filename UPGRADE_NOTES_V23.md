# V23 Quality + E2E Upgrade

## Completed

1. View-level dynamic imports
- `LessonWorkspace`, `GraphMapPage`, and `FullscreenMap` are now lazy-loaded with `React.lazy`.
- Build output now includes separate chunks:
  - `LessonWorkspace-*.js`
  - `GraphMapPage-*.js`
  - `FullscreenMap-*.js`

2. Content quality audit
- Added `src/test/contentAudit.test.ts`.
- Added `scripts/content-audit.mjs`.
- Added package script:
  - `npm run audit:content`
- `npm run verify` now includes build, tests, line audit, and content audit.

3. E2E smoke test scaffold
- Added Playwright config:
  - `playwright.config.ts`
- Added E2E smoke scenario:
  - `e2e/smoke.spec.ts`
- Added package script:
  - `npm run e2e:smoke`

4. Test coverage improved
- Test files: 7
- Unit/component/content tests: 14
- UI smoke tests remain active.

5. Maintainability preserved
- Line audit still passes.
- UI/logic violations: 0
- Legacy refactor queue: 0
- Generated/data exceptions: 0

## Current project statistics

Excluded from count:
- `node_modules`
- `dist`
- `.git`

Files: 128
Total lines: 10885

Largest files:
- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/App.tsx: 175 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines

## Verify command

```bash
npm run verify
```

Passed:
- build
- 7 test files
- 14 tests
- line audit
- content audit

## E2E command

```bash
npm run e2e:smoke
```

Note: Playwright browsers may need to be installed locally with:

```bash
npx playwright install
```
