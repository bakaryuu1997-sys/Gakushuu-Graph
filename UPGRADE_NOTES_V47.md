# V47 Component Split

## Completed

1. Split StudyNavigation
- `StudyNavigation.tsx` is now a small shell.
- New files:
  - `studyNavigationConfig.ts`
  - `NavigationGroups.tsx`
  - `StudyNavigationPanels.tsx`
  - `NavigationExportPanel.tsx`

2. Split AppLoaded support logic
- New files:
  - `useAppTheme.ts`
  - `useIsMobile.ts`
  - `useGraphExport.ts`
  - `useNodeList.ts`
  - `MobileGraphFallback.tsx`

3. Started LessonWorkspace split
- Extracted reusable primitives:
  - `LessonWorkspacePrimitives.tsx`
- `LessonWorkspace.tsx` is still large, but now smaller and no longer contains every primitive component.

4. Added i18n helper layer
- New file:
  - `src/features/knowledge-graph/utils/i18n.ts`
- Helpers:
  - `getNodeLabel`
  - `getNodeSummary`
  - `getNodeExamPoint`
  - `getLessonText`
  - `getLocalizedQuestion`

5. Tests
- Added:
  - `src/test/v47ComponentSplit.test.ts`

## Verify result

Passed:
- build
- 26 test files / 65 tests
- line audit
- content audit

## Current technical debt

Still in legacy queue:
- `LessonWorkspace.tsx`: 1054 lines
- `AppLoaded.tsx`: 274 lines

This is better than V46, but not fully finished. The next refactor should split `LessonWorkspace.tsx` into real view files.

## Project stats

Files: 255
Total lines: 18587

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/LessonWorkspace.tsx: 1053 lines
- src/features/knowledge-graph/components/studyNavigationConfig.ts: 360 lines
- src/components/AppLoaded.tsx: 273 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/StudyNavigationPanels.tsx: 172 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- UPGRADE_NOTES_V37.md: 137 lines
- src/features/knowledge-graph/components/LessonWorkspacePrimitives.tsx: 135 lines

## Recommended V48

1. Split `LessonWorkspace.tsx` into:
   - `LessonPanel.tsx`
   - `DashboardView.tsx`
   - `StudyPathViews.tsx`
   - `QuizReviewViews.tsx`
   - `GlossaryCompareViews.tsx`
2. Split `AppLoaded.tsx` further by extracting `MainStudyContent.tsx`.
3. Replace remaining local language selection logic with i18n helper functions.
4. Add accessibility pass for mobile bottom tabs and graph controls.
