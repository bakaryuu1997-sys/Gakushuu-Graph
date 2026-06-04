# V31 BrSE + Course-specific Practice

## Completed

1. Added BrSE Roadmap as a fully separate course
- Folder: `src/courses/brse`
- BrSE is separated from AI Passport, SQL, Frontend, and IT Passport.
- Course includes 40 nodes, 40 quizzes, and 5 study phases.

Main BrSE topics:
- 要件定義
- 基本設計
- 詳細設計
- テスト
- 議事録
- Q&A管理
- 仕様変更
- 影響調査
- 見積もり
- 進捗管理
- 不具合報告
- レビュー
- リリース管理
- オフショア開発

2. Added course-specific Practice routing
Practice view now routes by course:
- AI Passport → `AiPassportPracticeView`
- SQL Roadmap → `SqlPracticeView`
- Frontend Roadmap → `FrontendPracticeView`
- BrSE Roadmap → `BrsePracticeView`

3. Added BrSE Practice Mode
- Added `src/features/knowledge-graph/components/BrsePracticeView.tsx`.
- Practice cases:
  - 仕様が曖昧なとき
  - 仕様変更が来たとき
  - バグ報告を書くとき

4. Added Frontend Practice Mode
- Added `src/features/knowledge-graph/components/FrontendPracticeView.tsx`.

5. Added AI Passport Practice Mode
- Added `src/features/knowledge-graph/components/AiPassportPracticeView.tsx`.

6. Added tests
- Added `src/test/v31BrsePractice.test.ts`.
- Tests confirm:
  - BrSE loads as its own course.
  - AI Passport does not contain BrSE requirement-definition node.
  - SQL and BrSE data stay separated.

## Verify

Passed:
- build
- 11 test files / 23 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 175
Total lines: 12805

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
npm run create:course brse
```
