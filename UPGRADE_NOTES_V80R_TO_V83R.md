# V80R–V83R Local Learning Suite Upgrade Notes

## V80R — Python Code Lab Grader upgrade
- Added `src/courses/python/v80rCodeLabGrader.ts` with focused grader-style tasks for OOP state, list/dict grouping, algorithm tie-break sorting, CSV/file parsing, and FastAPI error handling.
- Each task includes visible tests, hidden-style tests, expected outputs, VI/JA grading checklists, solution, mistake tags, and related lesson mapping.
- Added `PythonV80RGraderPanel` and integrated it into Python Code, Algorithm, and FastAPI tabs.

## V81R — 基本情報 mixed mock mini-set
- Added `src/courses/fundamental-info/v81rMixedMockMiniSet.ts` with a compact FE-style mixed set covering pseudo-code, SQL, network/CIDR, security logs, DP, and auth vs authorization.
- Merged the mini-set into the main scenario bank and added `FundamentalInfoV81RMixedMockPanel` to the practice screen.

## V82R — Safe light refactor
- Extracted Python practice tab navigation into `PythonPracticeTabShell.tsx`.
- Kept UI behavior the same while reducing the size and responsibility of `PythonPracticeTabs.tsx`.

## V83R — Local release cleanup
- Added audit scripts for V80R, V81R, and V83R release cleanup.
- Standardized release notes and local run guidance.

## Local run
```bash
npm install
npm run audit:v80r-python-grader
npm run audit:v81r-mixed-mock
npm run audit:v83r-release-cleanup
npm run build
npm run dev
```

## Quality gate used for this release
```bash
npm run audit:v80r-python-grader
npm run audit:v81r-mixed-mock
npm run audit:v83r-release-cleanup
npx vitest run src/test/v80rPythonGrader.test.tsx src/test/v81rMixedMockMiniSet.test.tsx src/test/v79rKamokuBMastery.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false
npm run build
```
