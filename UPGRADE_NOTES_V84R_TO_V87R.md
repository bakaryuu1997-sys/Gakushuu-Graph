# V84R → V87R Local Release Candidate

## V84R — Python lesson deep polish batch 2

- Added concrete lesson polish data in `src/courses/python/v84rLessonDeepPolish.ts`.
- Covered OOP invariant, file parser pipeline, exception boundary, table-driven testing, decorator wrapper, FastAPI service layer, algorithm complexity, and FastAPI schema contract.
- Added `PythonV84RLessonDeepPolishPanel` with track filters and keyword search.
- Enriched matching `pythonCatalog` entries with practical examples, edge cases, and V84R keywords.

## V85R — 基本情報 科目B trace bank expansion

- Added `src/courses/fundamental-info/v85rKamokuBTraceBank.ts`.
- Added 8 FE-style scenarios: array rotation, stack parentheses, BFS queue, recursion return, DP min cost, graph degree, SQL JOIN/WHERE order, and security timeline.
- Merged V85R scenarios into the main `fundamentalInfoExamScenarios` bank.
- Added `KamokuBV85RTraceBankPanel` with domain filter and text search.

## V86R — UI quality pass

- New large panels use search/filter controls to avoid overwhelming the practice screens.
- Scenario and lesson cards keep trace/code/edge cases separated for readability.
- This is a safe UI pass: no routing or global state rewrite.

## V87R — Full local release candidate cleanup

Run locally after downloading:

```bash
npm install
npm run audit:v84r-python-polish
npm run audit:v85r-kamoku-b-trace
npm run audit:v86r-ui-quality
npm run audit:v87r-release-candidate
npm run build
```

Recommended quick test:

```bash
npx vitest run src/test/v84rV85rReleaseCandidate.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false
```

Packaging note: release zip should exclude `node_modules` and `dist`; install dependencies locally with `npm install`.
