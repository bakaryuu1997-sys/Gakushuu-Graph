# V38 Graph Polish + Fundamental Information Course

## Decision: IT Passport vs 基本情報

Do not replace IT Passport content directly.

Reason:
- IT Passport and 基本情報 are different learning levels.
- IT Passport is broader and more basic.
- 基本情報 is more technical and needs deeper algorithm/programming/database/network/security content.
- Replacing IT Passport would lose useful foundation content and break existing learning data.

V38 adds 基本情報 as a separate course:
- `src/courses/fundamental-info`
- Course ID: `fundamental-info`
- Existing IT Passport remains available as a foundation track.

## Completed

1. Added 基本情報 course
- New folder: `src/courses/fundamental-info`
- Initial course has:
  - 38 nodes
  - 38 quiz questions
  - 6 study phases

Core topics:
- アルゴリズム
- データ構造
- 計算量
- プログラミング
- データベース
- SQL
- ネットワーク
- セキュリティ
- システム開発
- プロジェクトマネジメント
- ストラテジ
- 法務

2. Added 基本情報 graph presets
- Algorithm
- Programming
- Database
- Network
- System Dev

3. Graph polish
- Added NEXT highlight on graph nodes.
- The next recommended node now has a green `NEXT` badge.
- Edges pointing to the next node are animated and green.
- Compare edges remain orange; prerequisite edges remain purple.

4. Fullscreen map search
- Added `MapNodeSearch`.
- Fullscreen map now includes a visible-node search/list panel.
- This helps jump directly to one of the currently displayed nodes.

5. Fullscreen export
- Added `Export PNG` action to fullscreen map.
- Uses the existing graph PNG export path.

6. Tests
- Added `src/test/v38GraphPolishFundamental.test.ts`.
- Verify now passes:
  - build
  - 17 test files / 40 tests
  - line audit
  - content audit

## Verify result

Passed:

- build
- test
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 210
Total lines: 14580

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 187 lines
- src/components/map/mapFocus.ts: 166 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 163 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- UPGRADE_NOTES_V37.md: 137 lines

## Recommendation for V39

1. Expand 基本情報 from 38 nodes to 100-150 nodes.
2. Add real 基本情報 calculation/practice mode:
   - binary
   - base conversion
   - algorithm trace
   - SQL output
   - network/security scenario
3. Add wrong-answer explanations for 基本情報 quiz.
4. Add course migration note explaining IT Passport → 基本情報 learning path.
5. Improve graph edge legend with exact relation types.
