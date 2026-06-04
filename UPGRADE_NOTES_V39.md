# V39 AI Passport Deep Quality

## Goal

Do not add new courses. Improve depth, clarity, and study quality for existing courses, with AI Passport as the highest priority.

## Completed

1. AI Passport deep manual lessons
- Added `src/courses/ai-passport/aiPassportV39DeepLessons.ts`.
- Added deeper scenario-level lessons for AI Passport critical topics:
  - Generative AI
  - LLM
  - Prompt engineering
  - RAG
  - Retrieval
  - Vector database
  - Multimodal AI
  - Prompt injection
  - Personal information / privacy
  - Copyright
  - Bias / fairness
  - Data leakage
  - Confusion matrix
  - Precision / recall concepts
  - AI governance
  - AI risk management
  - AI project flow
  - ROI

2. AI Passport hard scenario quiz
- Added `src/courses/ai-passport/aiPassportV39ScenarioQuiz.ts`.
- Added hard Japanese scenario questions for:
  - personal information entered into GenAI
  - RAG using outdated documents
  - hallucination with fake legal name
  - bias in hiring AI
  - copyright risk in AI-generated images
  - prompt injection
  - RAG vs fine-tuning
  - data leakage
  - recall for medical screening
  - model monitoring
  - AI governance
  - AI PoC / ROI

3. AI Passport Practice UI improved
- Rebuilt `AiPassportPracticeView.tsx`.
- Now includes:
  - Japanese scenario
  - best response
  - trap/wrong-thinking explanation
  - direct links to related nodes

4. Lesson UI quality improved
- Added `LessonDepthCard.tsx`.
- Every lesson panel now shows:
  - deep study checklist
  - depth status
  - definition target
  - exam trap
  - likely question pattern
  - keyword chips

5. Quality test added
- Added `src/test/v39AiDepthQuality.test.ts`.
- Checks:
  - no new course was added
  - AI Passport has deep lessons for scenario-critical topics
  - AI Passport has hard scenario quiz coverage

## Verify result

Passed:
- build
- 18 test files / 43 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 215
Total lines: 14891

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

## Recommendation for V40

Continue slow and deep:

1. AI Passport:
   - Add 30 more high-quality manual lessons for top exam nodes.
   - Add wrong-answer explanations per option, not just one explanation.
   - Add Japanese-only exam drill with longer business/ethics scenarios.

2. SQL:
   - Add query practice with schema, expected output, and common wrong SQL.

3. BrSE:
   - Add role-play grading with wrong-answer explanations.

4. UI:
   - Add “Deep / Medium / Basic” content filter.
   - Add “I understand / I need review” button separate from mastered.
