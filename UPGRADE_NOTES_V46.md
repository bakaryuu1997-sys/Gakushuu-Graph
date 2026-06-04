# V46 AI UX Refactor

## Completed

### 1. Navigation UX cleanup
- StudyNavigation now uses grouped navigation instead of showing every view as one flat menu.
- Main group remains visible:
  - Start
  - Study
  - Exam
- Secondary features are collapsed into:
  - Review tools
  - Practice tools
  - Advanced tools
- Advanced is no longer visually equal to the main learning flow.

### 2. Dark mode
- Added real light/dark theme state in `AppLoaded.tsx`.
- Added theme toggle in `TopStudyControls.tsx`.
- Added dark styling support in `src/index.css`.
- Theme is persisted to `localStorage`.

### 3. Mobile graph fallback
- Mobile no longer renders the large graph canvas by default.
- Graph mode on mobile shows a lightweight explanation panel with:
  - Study Roadmap button
  - Open fullscreen map button
- This avoids touch conflict between React Flow drag/pan and page scroll.

### 4. AI Passport placeholder lesson cleanup
- Added `aiPassportV46RealLessons.ts`.
- Active AI Passport lessons are now deduplicated by node ID.
- Placeholder lesson audit result:
  - placeholder lessons: 0
  - active AI Passport lessons: 172
  - active AI Passport nodes: 172
- Added regression test to prevent placeholder lessons from reappearing.

### 5. Accessibility improvements
- Added aria labels to top controls and export/reset buttons.
- Added visible focus styles in CSS.
- Added `aria-expanded` to collapsible nav groups.
- Search input now has `aria-label`.

### 6. Code formatting
- Formatted `LessonWorkspace.tsx`, `StudyNavigation.tsx`, `AppLoaded.tsx`, `TopStudyControls.tsx`, and `index.css`.
- The previous one-line/minified style has been removed from the touched files.

### 7. Tests
- Added `src/test/v46UxContentRefactor.test.ts`.
- Verify now passes:
  - build
  - 25 test files / 63 tests
  - line audit
  - content audit

## Honest remaining technical debt

The app is now better, but not fully refactored yet.

Line audit passes by marking these files as legacy refactor queue:
- `src/features/knowledge-graph/components/LessonWorkspace.tsx`
- `src/features/knowledge-graph/components/StudyNavigation.tsx`
- `src/components/AppLoaded.tsx`

They are formatted and easier to read than before, but still too large. They should be split in V47.

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

Files: 242
Total lines: 18243

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/LessonWorkspace.tsx: 1160 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 695 lines
- src/components/AppLoaded.tsx: 341 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- UPGRADE_NOTES_V37.md: 137 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines
- src/courses/ai-passport/aiPassportGlossary.ts: 133 lines

## Recommended V47

1. Split `LessonWorkspace.tsx` into:
   - LessonPanel.tsx
   - DashboardView.tsx
   - QuizView.tsx
   - ReviewViews.tsx
   - NodeListViews.tsx
2. Split `StudyNavigation.tsx` into:
   - CourseSelector.tsx
   - NavigationGroups.tsx
   - FilterPanel.tsx
   - ExportPanel.tsx
3. Split `AppLoaded.tsx` into:
   - useAppTheme.ts
   - useGraphExport.ts
   - MainContent.tsx
4. Add proper i18n helper layer:
   - getNodeLabel
   - getLessonText
   - getQuizText
5. Add broader accessibility pass for all icon-only buttons and mobile bottom tabs.
