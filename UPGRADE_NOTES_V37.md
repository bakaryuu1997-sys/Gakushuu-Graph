# V37 Graph UX Pro

## Goal

Make the knowledge graph genuinely useful for learning instead of only showing a large horizontal map.

## Completed

1. Map Density
- Added `MapDensityControl`.
- Modes:
  - Simple: fewer nodes, best for first learning
  - Standard: recommended default
  - Detailed: more nodes for review
- Density changes max node counts automatically.

2. Focus Neighborhood / Focus 360°
- Added `focus-neighborhood` map mode.
- Fullscreen map now defaults to Focus 360°.
- It shows:
  - selected node
  - direct related/prerequisite nodes
  - two-hop neighborhood in Detailed mode
- This gives the useful part of a 360-degree graph without turning the whole course into a spider web.

3. Course-specific map presets
- AI Passport presets:
  - AI Basics
  - Data / ML
  - GenAI
  - Ethics / Law
  - Business
- SQL presets:
  - Basic
  - JOIN
  - GROUP BY
  - DML
  - Transaction
  - Security
- BrSE presets:
  - Requirement
  - Design
  - Test/Bug
  - Change
  - PM
- Linux presets:
  - File
  - Search
  - Permission
  - Process
  - Docker
  - Git

4. Phase Navigator on graph
- Added `PhaseNavigator`.
- Users can filter the map by study phase:
  - All phases
  - Phase 1
  - Phase 2
  - ...
- This helps answer: "Where should I start?"

5. Course-specific visual lanes and legends
- Architecture lanes and map legend now change based on course:
  - AI
  - SQL
  - BrSE
  - Linux

6. Readable map preserved
- V36 readable graph fixes remain:
  - bigger nodes
  - limited node count
  - selected node always included
  - compact legends
  - no huge swimlane blocks

7. Tests
- Added `src/test/v37GraphUxPro.test.ts`.
- Updated V36 map tests for the new signature.
- Verify now passes:
  - build
  - 16 test files / 37 tests
  - line audit
  - content audit

## Why not full 360-degree for the whole course?

A full 360-degree graph for 100-300 nodes becomes a spider web. V37 uses a better hybrid:

- Learning Path = best for studying from start
- Focus 360° = best for understanding one selected node
- Course presets = best for reviewing one domain
- Phase filter = best for step-by-step learning

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 201
Total lines: 14234

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 183 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 163 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/components/map/mapFocus.ts: 151 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines

## Main scripts

```bash
npm run verify
npm run test
npm run audit:content
```

## Recommended next step

V38 should focus on visual QA and interaction polish:

1. Add "Study next" highlight on graph.
2. Add "Prerequisite / Next / Related" edge colors in the legend.
3. Add node search inside fullscreen map.
4. Add graph screenshot export from fullscreen mode.
5. Add course-specific focus defaults when opening fullscreen.
