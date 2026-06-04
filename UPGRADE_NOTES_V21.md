# V21 Split Domain + Maintainable Workspace

## Main changes

1. Split `LessonWorkspace.tsx`
- Replaced the 900+ line legacy workspace with a compact study workspace under 200 lines.
- The new workspace keeps the key flows: Start, Dashboard, Study Path, Phase Study, Crash Course, All Nodes, Quiz, Glossary, Compare, Cheat Sheet, and Visual Diagrams.

2. Split AI course data by domain
- `aiPassportExpanded.ts` was split into domain files under:
  - `src/courses/ai-passport/domain/expanded/`
- `aiPassportQualityQuiz.ts` was split into domain files under:
  - `src/courses/ai-passport/domain/quiz/`
- Added compact lesson domain bank:
  - `src/courses/ai-passport/domain/lessons/core.ts`

3. Course index now imports domain aggregators
- `src/courses/ai-passport/index.ts` now imports:
  - `./domain/expanded`
  - `./domain/qualityQuiz`
  - `./domain/lessons`

4. Kept V19 exam-ready features
- Study Wizard with X/Y status
- Dagre auto-layout
- Bias/Fairness, Governance, Copyright, Privacy diagrams
- Crash Course 3 / 7 days
- Test suite and verify script

## Verification
- `npm run build` passed
- `npm run test` passed: 5 test files / 9 tests
- `npm run audit:lines` passed

## Current audit result
- UI/logic violations: 0
- Remaining refactor queue:
  - `src/App.tsx` is still above 200 lines
- Remaining data exception:
  - `src/features/knowledge-graph/data/supplementalGraph.ts` is IT Passport legacy data and is still above 200 lines

## Recommended next cleanup
1. Split `App.tsx` into `AppShell`, `AppState`, `MapPanels`, and `FullscreenMap`.
2. Split `supplementalGraph.ts` by IT Passport category.
3. Add UI component tests for Phase Study / Crash Course / Glossary.
