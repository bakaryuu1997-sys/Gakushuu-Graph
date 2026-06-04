# V36 Readable Map + Quality Continuation

## Problem found from screenshot

Fullscreen Visual Knowledge Map was technically rendering, but it was not usable:

- Too many nodes were fitted into one fullscreen canvas.
- React Flow zoomed out too far, making labels unreadable.
- Large swimlane background boxes visually covered the map area.
- MiniMap and legend competed with the actual graph.
- The selected drawer was readable, but the graph itself was too small.

## Fixes completed

1. Readable fullscreen map mode
- Added `readable` mode to `GraphCanvas`.
- Fullscreen map and main graph now use readable mode.
- Readable mode:
  - increases minimum zoom
  - reduces fit padding
  - hides MiniMap
  - enlarges nodes
  - adds exam point preview inside nodes
  - disables dragging in readable mode to keep layout stable

2. Reduced fullscreen node count
- Updated `getFocusedMapElements`.
- Fullscreen now limits graph to 36 high-value nodes.
- Main graph limits to 42 nodes.
- Selected node is always included even if it is outside the current preset.
- Default `All Map` is now treated as `Learning Path`, not every detail node.

3. Less obstructive architecture lanes
- Replaced huge colored vertical swimlane blocks with compact lane headers.
- This prevents swimlanes from covering the actual node cards.

4. Compact legend
- Made the cluster legend smaller and less intrusive.

5. Regression tests
- Added `src/test/v36ReadableMap.test.ts`.
- Tests:
  - fullscreen-focused map stays under readable node count
  - selected node remains included
  - default learning-path map is smaller than the full course

6. Previous V35 quality work preserved
- AI Passport deep quality lessons preserved.
- SQL deep quality lessons preserved.
- BrSE deep quality lessons preserved.
- `CONTENT_QUALITY_REVIEW_V35.md` preserved.

## Verify result

Passed:

- build
- 15 test files / 33 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 197
Total lines: 13885

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 163 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines
- src/courses/ai-passport/aiPassportGlossary.ts: 133 lines

## Recommendation

Next step should be visual QA, not adding more course content:

1. Add a `Map Density` toggle:
   - Simple
   - Standard
   - Detailed
2. Add a `Focus selected node neighborhood` mode.
3. Add visual snapshot tests for graph views.
4. Improve course-specific map presets for SQL/BrSE/Linux instead of AI-only presets.
