# V43 AI Passport Polish

## Goal

Focus on making AI Passport feel complete and easier to use before adding any new content tracks.

## Completed

1. Sidebar simplified
- Reorganized navigation into clear groups:
  - Main: Start / Study / Exam
  - Review tools
  - Practice tools
  - Advanced tools
- This reduces the initial overwhelm for new learners.

2. Lesson depth filter
- Added `LessonModeControls.tsx`.
- Added lesson modes:
  - Basic
  - Medium
  - Deep
  - Exam only
- Added `Học bản ngắn trước` toggle.
- LessonPanel now renders different content depending on selected depth.

3. Graph UX controls
- Added `MapScopeControl.tsx`.
- Added graph scopes:
  - Phase
  - Focus node
  - Next 10
- Added Hide weak relation toggle.
- Updated `getFocusedMapElements` to support:
  - selected-node focus
  - only next 10 study nodes
  - hiding weak related_to edges

4. AI Passport node polish
- Polished generic V42 quality node labels:
  - Accountability → 説明責任 / Accountability
  - Data Minimization → データ最小化 / Data Minimization
  - Rollback → 切り戻し / Rollback Plan
  - Terms of Service → 利用規約 / Terms of Service
  - Audit Log → 監査ログ / Audit Log
  - High-risk AI → High-risk AI / 高リスクAI
  - Workflow Integration → Workflow Integration / 業務統合
- Improved summary and exam point text for quality nodes.

5. Tests
- Added `src/test/v43AiPassportPolish.test.ts`.
- Verify now passes:
  - build
  - 22 test files / 55 tests
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

Files: 233
Total lines: 15907

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 192 lines
- src/components/AppLoaded.tsx: 189 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- UPGRADE_NOTES_V37.md: 137 lines

## Recommendation for V44

Continue AI Passport quality:
1. Add an AI Passport Exam Dashboard:
   - today should study
   - weak categories
   - next 10 nodes
   - exam readiness score
2. Add Need Review state separate from learning/mastered.
3. Add Japanese wording trap notes for each hard scenario.
4. Add mobile-specific simplification for the sidebar groups.
