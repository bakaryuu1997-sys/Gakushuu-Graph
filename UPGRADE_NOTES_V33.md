# V33 Rich Learning Content

## Completed

1. Expanded BrSE Roadmap
- BrSE course now has 97 nodes.
- BrSE course has 97 quiz questions.
- BrSE course has 8 study phases.
- All BrSE nodes have generated lessons aligned with the node id.

New BrSE topics include:
- 要求分析
- 非機能要件
- 受入基準
- 完了条件
- 画面項目定義
- API仕様書
- DB項目定義
- ER図
- レビュー観点
- テストエビデンス
- 重要度/優先度
- 原因分析
- 承認フロー
- リリース判定
- 切り戻し計画
- 本番障害対応
- 障害報告書
- 再発防止策

2. Added BrSE Japanese Phrase Bank
- Added `BrsePhraseBankView.tsx`.
- Contains practical Japanese phrases for meeting, Q&A, change request, bug report, release, and incident.

3. Added BrSE Template Pack
- Added `BrseTemplatePackView.tsx`.
- Includes:
  - 議事録 template
  - Q&A sheet template
  - Bug report template
  - Change request template
  - Status report template

4. Added BrSE Role-play Mode
- Added `BrseRoleplayView.tsx`.
- Role-play cases:
  - Khách Nhật hỏi mơ hồ
  - 仕様変更 gấp
  - Production bug

5. Added new navigation views
- `Phrases`
- `Templates`
- `Role-play`

6. Added tests
- Added `src/test/v33RichBrseContent.test.ts`.
- Verify now passes:
  - build
  - 12 test files / 25 tests
  - line audit
  - content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 180
Total lines: 13054

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
npm run create:course brse
```
