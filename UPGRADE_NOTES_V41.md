# V41 AI Ethics Review

## Goal

No new courses. Continue deepening existing content, with AI Passport as the highest priority.

## Completed

1. AI Passport Ethics / Law / Business lessons
- Added `src/courses/ai-passport/aiPassportV41EthicsBusinessLessons.ts`.
- Added 30 manual lessons focused on:
  - AI ethics
  - accountability
  - transparency
  - privacy by design
  - data minimization
  - consent
  - purpose limitation
  - data retention
  - audit log
  - copyright training data
  - license / terms of service
  - model card / dataset datasheet
  - red teaming
  - guardrails
  - content filter
  - human oversight
  - high-risk AI
  - AI literacy
  - shadow AI
  - vendor risk
  - cost management
  - AI KPI
  - change management
  - workflow integration
  - feedback loop
  - incident response
  - rollback
  - continuous improvement

2. Japanese long scenarios
- Added `src/courses/ai-passport/aiPassportV41JapaneseScenarios.ts`.
- Added 32 Japanese scenario questions.
- All surviving V41 scenario questions use valid AI Passport node IDs.
- Each question has per-option explanations.

3. Wrong-answer review page
- Added `src/features/knowledge-graph/components/AiWrongAnswerReviewView.tsx`.
- Added `Wrong Answers` view to StudyNavigation.
- For AI Passport, the Answer Review route can show:
  - correct answer
  - wrong-answer traps
  - explanation per option
  - bucket filters: Privacy, Copyright, Governance, Security, Business

4. SQL schema practice improvement
- Upgraded `SqlPracticeView.tsx`.
- Added:
  - expected SQL
  - wrong SQL
  - why the wrong SQL is wrong

5. BrSE role-play grading
- Upgraded `BrseRoleplayView.tsx`.
- Added:
  - good response
  - wrong response
  - why the wrong response is risky

6. Tests
- Added `src/test/v41AiEthicsReview.test.ts`.
- Verify now passes:
  - build
  - 20 test files / 50 tests
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

Files: 225
Total lines: 15450

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

## Recommendation for V42

Continue quality-first, no new course yet:

1. AI Passport:
   - Add a dedicated "Law / Ethics Crash Review" page.
   - Add 20 more long scenarios focused on Japanese wording traps.
   - Add grouped flashcards for Privacy / Copyright / Governance.

2. SQL:
   - Add interactive "choose expected output" questions.

3. BrSE:
   - Add customer-response phrase scoring.
