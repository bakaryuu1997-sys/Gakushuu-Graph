# V48 Workspace Split

## Completed

1. Split StudyNavigation further
- `StudyNavigation.tsx` is now a shell around extracted panels.
- New/updated files:
  - `studyNavigationConfig.ts`
  - `NavigationGroups.tsx`
  - `StudyNavigationPanels.tsx`
  - `NavigationExportPanel.tsx`

2. Split AppLoaded support logic further
- Added/used:
  - `AppOverlays.tsx`
  - `useAppTheme.ts`
  - `useIsMobile.ts`
  - `useGraphExport.ts`
  - `useNodeList.ts`
  - `MobileGraphFallback.tsx`

3. Split LessonWorkspace further
- Added:
  - `LessonWorkspaceTypes.ts`
  - `LessonWorkspacePrimitives.tsx`
  - `WorkspaceDashboard.tsx`
  - `WorkspaceDashboardLogic.ts`
  - `WorkspaceStudyViews.tsx`
  - `WorkspaceNodeIndex.tsx`
- `LessonWorkspace.tsx` reduced from 1054 lines to 626 lines.

4. i18n helper layer continued
- Existing `i18n.ts` kept and used in extracted primitives/study views.

5. Tests
- Added `src/test/v48WorkspaceSplit.test.ts`.
- V47 + V48 tests pass individually.

## Verification performed

Passed:
- `npm run build`
- `npm run audit:lines`
- `npm run audit:content`
- `npx vitest run src/test/v48WorkspaceSplit.test.ts src/test/v47ComponentSplit.test.ts --pool=threads --maxWorkers=1`

Note: the full `npm run test` command became unstable in this environment when running all test files sequentially/repeatedly through Vitest. Individual new V47/V48 tests and build/audits pass. This should be cleaned up in V49 by stabilizing the test runner script.

## Current technical debt

Legacy refactor queue still has:
- `LessonWorkspace.tsx`: 626 lines
- `AppLoaded.tsx`: 255 lines

Both are much smaller than before, but not yet fully below the target.

## Project stats

Files: 265
Total lines: 18835

## Largest files

- package-lock.json: 4882 lines
- src/features/knowledge-graph/components/LessonWorkspace.tsx: 625 lines
- src/features/knowledge-graph/components/studyNavigationConfig.ts: 360 lines
- src/components/AppLoaded.tsx: 254 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/map/mapFocus.ts: 185 lines
- src/features/knowledge-graph/components/WorkspaceStudyViews.tsx: 177 lines
- src/features/knowledge-graph/components/StudyNavigationPanels.tsx: 172 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/WorkspaceDashboard.tsx: 147 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines

## Recommended V49

1. Stabilize test runner so full `npm run verify` reliably completes.
2. Continue splitting `LessonWorkspace.tsx` into:
   - `LessonPanel.tsx`
   - `QuizReviewViews.tsx`
   - `GlossaryCompareViews.tsx`
3. Split `AppLoaded.tsx` into `MainStudyContent.tsx`.
4. Replace more inline language logic with `i18n.ts` helpers.
5. Add accessibility pass for mobile bottom tabs and graph controls.
