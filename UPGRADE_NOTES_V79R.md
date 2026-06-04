# V79R — Fundamental Information / 科目B Exam Mastery Polish

## Goal
V79R improves the 基本情報 course from a solid local FE foundation toward a more exam-like 科目B practice layer. The focus is not adding broad theory, but adding longer hand-trace problems that force learners to fill variable tables before reading the answer.

## Added
- New V79R 科目B mastery scenario bank:
  - DP table update order
  - Queue/BFS distance trace
  - Recursion call-stack return values
  - Stack / Reverse Polish notation evaluation
  - Two-dimensional array scan
  - Binary search not-found trace
  - SQL running-total reading
  - Security log scenario and initial response
- New `KamokuBV79RMasteryPanel` UI:
  - V79R FE Exam Master Layer summary
  - remediation plan by weak node
  - new exam-like bank cards
- Merged V79R scenarios into the main Fundamental Info scenario bank so they appear in existing scenario/trainer flows.
- Added `audit:v79r-kamoku-b` script.
- Added V79R test coverage for scenario bank, merge, UI panel, and practice integration.

## Quality checks
- `npm run audit:v79r-kamoku-b`
- `npx vitest run src/test/v79rKamokuBMastery.test.tsx src/test/v64KamokuBInteractiveTraceTrainer.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`

## Status
V79R raises 基本情報 / 科目B from “foundation + trainer” toward “exam-master practice core”. More full-length FE-style mixed sets can still be added later, but the most important trace-heavy algorithm weak points now have stronger local practice coverage.
