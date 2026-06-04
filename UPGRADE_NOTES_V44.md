# V44 AI Exam Dashboard + Need Review

## Completed

1. DONE green visual state
- Added `studyStatus` to graph nodes.
- Mastered nodes show:
  - green background/border
  - `DONE` badge
- Need Review nodes show:
  - amber background/border
  - `REVIEW` badge
- Learning nodes show:
  - blue background/border
  - `LEARNING` badge

2. Need Review progress state
- Added `need_review` to `StudyStatus`.
- Status cycle:
  - new → learning → need_review → mastered → new
- Added dedicated `Need Review` button in lesson panel.
- Added Need Review to progress statistics.

3. AI Passport Exam Dashboard
- Reworked dashboard into:
  - Exam readiness score
  - Done count
  - Need Review count
  - Missing lesson count
  - Hôm nay nên học gì
  - Nhóm còn yếu
  - Next 10 nodes
  - High nodes chưa có lesson riêng

4. Today / weak / next logic
- Today's list prioritizes:
  - Need Review nodes
  - otherwise Next 10 nodes
- Weak groups are calculated by course category:
  - ai
  - database
  - security
  - business

5. Missing lesson check
- Dashboard shows high-importance nodes without dedicated lessons.
- This helps continue content cleanup without guessing.

6. Tests
- Added `src/test/v44AiExamDashboard.test.ts`.
- Verify now passes:
  - build
  - 23 test files / 57 tests
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

Files: 235
Total lines: 16087

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 192 lines
- src/components/AppLoaded.tsx: 191 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/features/knowledge-graph/components/LessonWorkspace.tsx: 143 lines

## Recommendation for V45

1. Improve progress UX:
   - separate buttons for New / Learning / Need Review / Done
   - filter graph by status
2. Fill missing high-importance lesson nodes shown in dashboard.
3. Add category-specific readiness:
   - GenAI readiness
   - Ethics readiness
   - Data/ML readiness
4. Add export of exam readiness report.
