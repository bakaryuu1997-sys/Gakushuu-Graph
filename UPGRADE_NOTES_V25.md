# V25 Export Dashboard Upgrade

## Completed

1. AppLoaded cleanup
- Moved export logic out of AppLoaded.
- Added `src/features/exporters/exportUtils.ts`.
- Added `src/features/exporters/learningPack.ts`.
- Added `src/components/LearningPackExporter.tsx`.

2. Multi-format export
The app can now export:
- learning pack markdown
- glossary CSV
- quiz review JSON
- progress JSON

3. Content Coverage Dashboard
- Added `Coverage` view in the sidebar.
- Shows content coverage for:
  - high-importance nodes missing lessons
  - high-importance nodes missing quiz
  - high-importance nodes missing study-path placement

4. Course template generator
- Added `scripts/create-course.mjs`.
- Added package script:
  - `npm run create:course <course-id>`

5. Verify still passes
- build passed
- 7 test files / 14 tests passed
- line audit passed
- content audit passed

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 138
Total lines: 11356

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 170 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 158 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines
- src/courses/ai-passport/aiPassportGlossary.ts: 133 lines

## Main scripts

```bash
npm run verify
npm run audit:content
npm run e2e:smoke
npm run create:course frontend
```

## Notes

Playwright local run may require:

```bash
npx playwright install
```
