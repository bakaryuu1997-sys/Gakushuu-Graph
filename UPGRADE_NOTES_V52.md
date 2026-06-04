# V52 — AI Passport Beginner Lesson Completion

## Goal
Raise every V51 weak or generic AI Passport lesson to a beginner-friendly detailed level.

## What changed
- Added `aiPassportV52BeginnerLessons.ts` with 29 focused lesson overrides.
- Covered all V51 weak/generic lessons:
  - ML basics: classification, regression, supervised/unsupervised, underfitting, CNN, CV, OCR, semantic search, few-shot, preprocessing.
  - AI project/governance: project flow, stakeholder, human-in-the-loop, audit log, license.
  - Business use cases: medical, education, finance, manufacturing, marketing, public sector, churn.
  - Infrastructure/sustainability: GPU, cloud GPU, edge/on-device AI, energy, environmental impact.
- Each upgraded lesson includes beginner explanation, exam patterns, common mistakes, and memory tips in Vietnamese and Japanese.
- Added `v52BeginnerLessonOverrides.test.ts`.
- Added `scripts/audit-ai-passport-lessons.mjs`, which exports `ai-passport-v52-lesson-audit.csv`.

## Verification target
- AI Passport nodes: 172
- AI Passport lessons: 172
- V51 weak lessons upgraded: 29/29
