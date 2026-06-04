# V45 AI Progress Readiness

## Completed

1. Graph status filter
- Added `MapStatusFilter.tsx`.
- Graph can now filter:
  - All
  - New
  - Learning
  - Need Review
  - Done
- Works in normal graph and fullscreen graph.
- Selected node remains visible where possible.

2. Explicit status buttons
- Added `NodeStatusButtons.tsx`.
- Lesson panel now has clear buttons:
  - New
  - Learning
  - Need Review
  - Done
- Keeps existing quick actions:
  - Cycle status
  - Done ✓ Next
  - Need Review

3. High-node lesson coverage
- Checked current AI Passport high-importance nodes.
- Result: no high-importance AI Passport nodes are missing lessons after V44/V45 cleanup.
- Added a regression test to enforce this.

4. Category readiness
- Dashboard now shows readiness by:
  - GenAI
  - Ethics
  - Data/ML
  - Business
- Readiness score includes:
  - Done nodes
  - partial credit for Learning nodes
  - penalty for Need Review nodes

5. Tests
- Added `src/test/v45AiProgressReadiness.test.ts`.
- Verify now passes:
  - build
  - 24 test files / 60 tests
  - line audit
  - content audit

## Verify result

Passed:
- build
- test
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 239
Total lines: 16279

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 192 lines
- src/components/AppLoaded.tsx: 192 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/components/LessonWorkspace.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines

## Recommendation for V46

1. Polish mobile view for status/filter controls.
2. Add "Exam Ready" checklist for each readiness group.
3. Add export readiness report.
4. Add review calendar based on Need Review nodes.
