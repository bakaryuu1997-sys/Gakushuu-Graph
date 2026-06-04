# V30 Separated SQL + AI Upgrade

## Important clarification

SQL Roadmap and AI Passport are fully separate courses.

- AI Passport course folder: `src/courses/ai-passport`
- SQL Roadmap course folder: `src/courses/sql`
- Frontend course folder: `src/courses/frontend`
- IT Passport course folder: `src/courses/it-passport`

SQL content is not mixed into AI Passport. A test was added to verify that AI Passport does not contain the SQL `select` node, while SQL Roadmap does.

## Completed

1. Expanded SQL Roadmap
- SQL course now has 81 nodes.
- SQL course now has 81 quiz questions.
- SQL course now has 8 study phases.

New SQL topics include:
- LIKE
- BETWEEN
- IN
- IS NULL
- DISTINCT
- CASE WHEN
- UNION
- EXISTS
- CTE / WITH
- Window Function
- RANK / ROW_NUMBER
- EXPLAIN
- Query Plan
- Composite Index
- ACID
- Isolation Level
- Deadlock
- SQL Injection
- Parameterized Query
- Backup / Restore
- Migration
- ERD

2. Added SQL Cheat Sheet
- Added `src/features/knowledge-graph/components/SqlCheatSheetView.tsx`.
- Covers:
  - SELECT template
  - JOIN template
  - GROUP BY / HAVING
  - DML warning
  - SQL Injection prevention

3. Added SQL Practice Mode
- Added `src/features/knowledge-graph/components/SqlPracticeView.tsx`.
- Added `Practice` view in navigation.
- Practice cases:
  - SELECT / WHERE / ORDER BY
  - JOIN customer/order
  - GROUP BY / HAVING report
  - Transaction bank transfer

4. Added SQL Project-based learning
- Added `src/features/knowledge-graph/components/SqlProjectLearningView.tsx`.
- SQL projects:
  - Employees database
  - Sales report query
  - Customer orders JOIN
  - Bank transfer transaction

5. Added V30 separation tests
- Added `src/test/v30SqlSeparation.test.ts`.
- Tests:
  - SQL and AI Passport are separate.
  - AI Passport does not contain SQL `select`.
  - SQL course contains SQL `select`.
  - SQL course has 80+ nodes/quizzes and 8 phases.

## Verify

Passed:
- build
- 10 test files / 21 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 164
Total lines: 12462

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 160 lines
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
