# V102R → V103R — Easy Deep Lessons for 基本情報 and AI Passport

## Why this release exists
The user reported that many lessons still felt like shallow templates. V101R improved Python first. This release applies the same content-first approach to the other two critical courses.

## V102R — 基本情報 Easy Deep Lesson Rewrite
- Adds `src/courses/fundamental-info/v102EasyLessonPack.ts`.
- Covers algorithm/pseudo-code, SQL, network, security, management, and computer/system lessons.
- Each lesson has: easy concept, concrete scenario, step-by-step trace, practice, expected output, mini quiz, and common misunderstanding.
- Updates course lesson content through `enhanceCourseForV102V103` so the app sees these as the primary lesson text.

## V103R — AI Passport Easy Deep Lesson Rewrite
- Adds `src/courses/ai-passport/v103EasyLessonPack.ts`.
- Covers ML, GenAI/LLM/RAG, ethics/law/privacy/bias, business AI use cases, and AI governance.
- Rewrites lessons around case studies rather than short definitions.
- Adds risk reasoning: privacy, hallucination, human oversight, KPI, audit logs, and model evaluation.

## UI integration
- `V99LessonDetailPage` now shows V102/V103 lessons with the same readable structure used by Python V101.
- The new panel is non-overlay, responsive, and dark/light compatible.

## Validation
- `npm run audit:v102-v103-easy-lessons`
- `npx vitest run src/test/v102v103EasyDeepLessons.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
