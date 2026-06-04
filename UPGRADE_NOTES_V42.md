# V42 Clean AI Controls + Course Separation

## Problem addressed

User feedback:
- Language selector and High/All filter were buried in the left sidebar.
- They should be moved to the top-right for faster switching.
- AI Passport still felt mixed with Frontend/BrSE-specific UI/content.

## Completed

1. Moved global controls to top-right
- Added `src/features/knowledge-graph/components/TopStudyControls.tsx`.
- Controls moved out of sidebar:
  - All / High only
  - VI / JA / EN
- Rendered from `AppLoaded.tsx` below the header as a sticky top-right control bar.

2. Cleaned sidebar
- Removed duplicate language and importance controls from the left sidebar.
- Sidebar is now focused on course, navigation, search, category, export/import.

3. Course-specific navigation
- Updated `StudyNavigation.tsx`.
- BrSE-only views:
  - Phrases
  - Templates
  - Role-play
- Frontend-only view:
  - Projects
- AI Passport no longer shows Frontend/BrSE-specific navigation items.

4. Course-specific category filters
- Category chips are now generated from categories actually used by the active course.
- This reduces unrelated category noise.

5. AI Passport content cleanup
- Updated `sanitizeCourse` in AI Passport course config.
- AI Passport now filters:
  - edges
  - lessons
  - quizzes
  - compare pairs
  - study path node IDs
- Added `aiPassportV42QualityNodes.ts` to bind V40/V41 deep lessons to real AI Passport nodes instead of leaving orphan lessons.
- This preserves deep AI ethics/business content while preventing invalid or unrelated content from surfacing.

6. Tests
- Added `src/test/v42CleanAiControls.test.ts`.
- Verify now passes:
  - build
  - 21 test files / 52 tests
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

Files: 229
Total lines: 15694

## Largest files

- package-lock.json: 4882 lines
- src/components/AppLoaded.tsx: 189 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 181 lines
- src/components/map/mapFocus.ts: 166 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- UPGRADE_NOTES_V37.md: 137 lines

## Recommendation for V43

1. Add a compact `Course Mode Bar` near top:
   - AI Passport: Exam / Ethics / GenAI / Data
   - SQL: Query / Join / Transaction
   - BrSE: Requirement / Design / Test / Change
2. Add an explicit `Current course only` badge and warning if a view is course-specific.
3. Improve mobile layout for the new top controls.
