# V34 Deep BrSE + SQL Practice + Linux Course

## Completed

1. Deep BrSE lessons
- Added `src/courses/brse/deepLessons.ts`.
- Added deep manual lessons for important BrSE nodes:
  - 要件定義
  - 要求分析
  - 非機能要件
  - 受入基準
  - 完了条件
  - 業務フロー
  - 画面項目定義
  - API仕様書
  - DB項目定義
  - 基本設計
  - 詳細設計
  - レビュー観点
  - テストケース
  - テストエビデンス
  - 不具合報告
  - 仕様変更
  - 影響調査
  - 見積もり
  - 議事録
  - Q&A管理
  - 進捗報告
  - リスク管理
  - リリース判定
  - 本番障害対応
  - 障害報告書
  - 顧客折衝
  - 曖昧表現の制御
  - チケット作成
  - 引き継ぎ

2. BrSE document examples
- Upgraded `BrseTemplatePackView.tsx`.
- Added concrete samples for:
  - 議事録
  - Q&A sheet
  - Bug report
  - Change request
  - Status report

3. BrSE phrase quiz
- Upgraded `BrsePhraseBankView.tsx`.
- Added phrase quiz with answer reveal.

4. SQL practice schema
- Upgraded `SqlPracticeView.tsx`.
- Added sample schema:
  - employees
  - departments
  - customers
  - orders
  - sales

5. Added Linux / Terminal course
- New separate course: `src/courses/linux`
- Includes 45 nodes, 45 quizzes, 5 study phases.
- Covers:
  - pwd
  - ls
  - cd
  - mkdir
  - rm
  - cp
  - mv
  - grep
  - find
  - pipe
  - redirect
  - chmod
  - ps
  - kill
  - systemctl
  - journalctl
  - ssh
  - curl
  - docker
  - git

6. Added tests
- Added `src/test/v34DeepContentLinux.test.ts`.
- Verify now passes:
  - build
  - 13 test files / 27 tests
  - line audit
  - content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 189
Total lines: 13358

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
npm run e2e:smoke
npm run create:course linux
```
