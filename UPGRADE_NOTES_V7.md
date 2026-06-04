# V7 Upgrade Notes — AI Passport Deep Study Build

## Build status

- `npm run build`: passed
- Large bundle warning: resolved by splitting vendor/data chunks through Vite `manualChunks`.

## Added

1. AI Passport question bank expanded to 238 questions total.
   - Added 220 supplemental mock-exam style questions.
   - Questions focus on definition, correct use case, risk, and common traps.
   - These are original practice questions, not copied past exam questions.

2. AI Passport graph expanded to 159 nodes total.
   - Added 125 supplemental AI Passport nodes.
   - Covers AI basics, ML, DL, GenAI, prompt, RAG, data quality, evaluation, privacy, copyright, AI governance, business use cases, MLOps, and AI security.

3. Lesson content expanded.
   - Added supplemental lesson entries for 110 important AI nodes.
   - Each lesson includes definition, why it matters, exam patterns, common mistakes, and memory tips.

4. New study views.
   - Exam Session: 30/60-question practice mode.
   - Compare View: AI vs ML vs DL, supervised vs unsupervised, regression vs classification, CNN/RNN/Transformer, hallucination/bias, privacy/copyright.
   - Flashcards: high-importance node review.
   - Mistake Review: hard questions and confusing concept pairs.

5. Navigation upgraded.
   - Added Exam Session, Compare, Flashcards, and Mistake Review to Study Navigation.

6. Bundle organization improved.
   - Vite manual chunk splitting:
     - react
     - graph
     - icons
     - ai-course-data
     - ai-supplemental-data
     - it-course-data

## Still not perfect

- The question bank is large, but still not a verified official past-exam database.
- Mistake Review currently focuses on hard questions and common traps; it does not persist the user's wrong answers yet.
- Exam Session has question flow and score, but does not yet have a real countdown timer.
- AI Passport could still be expanded beyond 159 nodes if the goal is near-textbook completeness.

## Recommended next upgrades

1. Persist wrong answers into localStorage for true Mistake Review.
2. Add countdown timer for 30/60-minute exam sessions.
3. Add category-based exam sessions: GenAI, Ethics, Data/ML, Business.
4. Add official-source inspired question taxonomy manually, without copying copyrighted past questions.
5. Add spaced repetition scheduling for weak nodes.
