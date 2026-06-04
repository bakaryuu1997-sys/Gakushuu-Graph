# V26 Learning Flow Upgrade

## Completed

1. Mini Quiz under lesson
- Every lesson panel now shows a compact mini quiz.
- The answer and explanation are revealed immediately after selecting an option.

2. Mark Mastered & Next
- Added a clear `Mastered & Next` action in the lesson panel.
- It marks the current node as mastered and moves to the next unmastered node in the study path.

3. Dashboard learning flow polish
- Start Here continues to show the next recommended nodes.
- The learning flow now supports faster step-by-step progression with the new mastered-next action.

4. Coverage navigation remains active
- Coverage Dashboard still lets you jump directly to nodes missing lesson/quiz/study-path placement.

5. First new course added: Frontend Roadmap
- Added `src/courses/frontend/index.ts`.
- Updated `CourseId`, `courseLoader`, and `courseRegistry`.
- Frontend course includes nodes, edges, lessons, quiz, and study path.

## Verify result

```bash
npm run verify
```

Passed:
- build
- 7 test files / 14 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 139
Total lines: 11422

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 158 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
