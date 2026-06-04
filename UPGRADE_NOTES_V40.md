# V40 AI Passport Exam Depth

## Goal

No new courses. Continue improving existing content, with AI Passport as the highest priority.

## Completed

1. Added 30 more manual AI Passport lessons
- Added `src/courses/ai-passport/aiPassportV40ManualLessons.ts`.
- Topics include:
  - Machine Learning
  - Deep Learning
  - Supervised / Unsupervised
  - Classification / Regression
  - Overfitting / Underfitting
  - Validation / Cross validation
  - Data preprocessing
  - Missing values
  - Outliers
  - Feature engineering
  - Normalization
  - Sampling bias
  - Labeling / Annotation
  - Temperature
  - Context window
  - System prompt
  - Few-shot / Zero-shot
  - Semantic search
  - Text-to-speech
  - Speech recognition
  - Computer vision
  - OCR
  - Recommendation system

2. Added per-option quiz explanations
- Extended `QuizQuestion` with:
  - `optionExplanationsVi`
  - `optionExplanationsJa`
- Updated `MiniQuiz` to show why the selected option is correct/wrong.
- Updated main `QuizView` to show selected option explanation.

3. Added Japanese-only AI Passport exam drill
- Added `src/courses/ai-passport/aiPassportV40JapaneseExamQuiz.ts`.
- Added `src/features/knowledge-graph/components/AiJapaneseExamDrillView.tsx`.
- The Japanese Exam view for AI Passport now uses long Japanese scenario questions.
- Each option has its own explanation.

4. Strengthened Japanese scenario coverage
Scenario topics:
- preprocessing and data quality
- prompt injection
- AI governance
- RAG document freshness
- bias/fairness
- copyright
- data leakage
- recall / screening
- model monitoring
- AI project KPI
- human-in-the-loop
- semantic search

5. Tests
- Added `src/test/v40AiExamDepth.test.ts`.
- Verify now passes:
  - build
  - 19 test files / 46 tests
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

Files: 220
Total lines: 15155

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

## Recommendation for V41

Continue deepening existing tracks, no new course yet:

1. AI Passport:
   - Add 30 more manual lessons focused on law/ethics/business.
   - Add more long Japanese scenario questions.
   - Add dedicated wrong-answer review page.

2. SQL:
   - Add schema-based SQL practice with expected output.
   - Add common wrong SQL explanations.

3. BrSE:
   - Add role-play grading and wrong-response explanations.

4. UI:
   - Add Deep / Medium / Basic filter for lesson depth.
   - Add "I understand" and "Need review" separate from Mastered.
