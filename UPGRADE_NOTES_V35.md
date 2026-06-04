# V35 Content Quality Audit

## Goal

Before adding more courses, V35 focuses on checking and improving the learning quality of:

- AI Passport
- SQL Roadmap
- BrSE Roadmap

## Completed

1. AI Passport quality upgrade
- Added `src/courses/ai-passport/aiPassportV35QualityLessons.ts`.
- Added deep manual lessons for critical AI Passport concepts:
  - AI / ML / Deep Learning
  - Supervised / Unsupervised
  - Regression / Classification-related models
  - CNN / RNN / Transformer
  - Data quality / preprocessing / train-test split / overfitting / evaluation
  - LLM / prompt engineering / hallucination / RAG
  - Privacy / copyright / bias / explainability / governance / ROI

2. SQL quality upgrade
- Added `src/courses/sql/deepLessons.ts`.
- Added deep SQL lessons for practical query and safety topics:
  - SELECT
  - WHERE
  - JOIN
  - GROUP BY
  - HAVING
  - UPDATE
  - DELETE
  - Transaction
  - Index
  - EXPLAIN
  - SQL Injection
  - Parameterized Query

3. BrSE quality upgrade
- Added `src/courses/brse/v35QualityLessons.ts`.
- Added more deep BrSE lessons for:
  - 基本設計
  - 画面設計
  - API設計
  - DB設計
  - 外部IF
  - バッチ設計
  - シーケンス図
  - 状態遷移図
  - テスト計画
  - UAT
  - 重要度/優先度
  - 原因分析
  - 承認フロー
  - 遅延報告
  - 切り戻し計画

4. Content quality review report
- Added `CONTENT_QUALITY_REVIEW_V35.md`.
- Documents review criteria, findings, improvements, and next-step recommendation.

5. Automated quality audit
- Added `src/test/v35CourseQualityAudit.test.ts`.
- Checks:
  - deep AI lessons exist for critical exam concepts
  - deep SQL lessons exist for practical query/safety topics
  - deep BrSE lessons exist for practical documentation/project control
  - AI Passport, SQL and BrSE stay separated

6. Test reliability
- Updated `npm run test` to:
  - `vitest run --pool=forks --maxWorkers=2`
- This makes the full verify pipeline more stable.

## Verify result

Passed:

- build
- 14 test files / 31 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 195
Total lines: 13712

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

## Main scripts

```bash
npm run verify
npm run test
npm run audit:content
```

## Recommendation

Do not add a new course immediately. Next version should continue quality improvement in small batches:

- Add 20-30 more manual AI Passport scenario lessons.
- Add SQL query-practice explanations by schema.
- Add BrSE role-play answer grading with wrong-answer explanations.
