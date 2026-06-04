# V29 SQL + AI Prompts Upgrade

## Completed

1. Split Frontend course data
- `src/courses/frontend/index.ts` is now a small course composer.
- Split files:
  - `nodes.ts`
  - `edges.ts`
  - `lessons.ts`
  - `quizzes.ts`
  - `studyPath.ts`
  - `index.ts`

2. Expanded Frontend quizzes
- Frontend quiz bank now maps over all Frontend nodes.
- Frontend course has 93 nodes and 93 quiz questions.

3. Added SQL Roadmap course
- New course folder: `src/courses/sql`.
- Includes:
  - SELECT
  - WHERE
  - JOIN
  - GROUP BY
  - HAVING
  - INSERT
  - UPDATE
  - DELETE
  - PRIMARY KEY
  - FOREIGN KEY
  - INDEX
  - TRANSACTION
  - SQL Injection
- SQL course has 30 nodes, 30 quizzes, and 4 study phases.

4. Improved Project-based learning
- Added project checklists.
- Added AI/Codex build prompts for:
  - Profile Card
  - Todo App
  - API Search App
  - Dashboard UI

5. Improved course generator
- `npm run create:course <course-id>` creates split files:
  - nodes.ts
  - edges.ts
  - lessons.ts
  - quizzes.ts
  - studyPath.ts
  - index.ts

6. Added tests
- Added `src/test/sqlAndFrontendV29.test.ts`.
- Verify now passes:
  - build
  - 9 test files / 19 tests
  - line audit
  - content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 159
Total lines: 12205

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 159 lines
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
npm run e2e:smoke
npm run create:course sql
```
