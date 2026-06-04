# V106R — Expand Manual Chapters to 30+

## Goal
Expand the written, non-template lesson library to 30+ manual chapters across the most important learning areas:

- Python: file handling, errors, testing, logging, FastAPI schema/DI, typing/dataclass, sliding window, DP.
- 基本情報: 科目B DP, SQL JOIN, subnet, security log, auth/access control, HTTP/DNS/TLS, BFS graph trace.
- AI Passport: privacy, bias/fairness, copyright/compliance, governance/monitoring, business KPI, data quality, human-in-the-loop.

## What changed
- Added `src/courses/v106ManualChapterPack.ts` with 23 new handwritten chapters layered on top of the V105 manual chapters.
- Updated `V99LessonDetailPage.tsx` to show `V106R Manual Chapter` content from the expanded finder.
- Added test coverage and audit script:
  - `src/test/v106ManualChapterExpansion.test.tsx`
  - `scripts/audit-v106-manual-chapters.mjs`
  - `npm run audit:v106-manual-chapters`

## Quality bar
Each V106 chapter includes:

- why the topic matters
- 4+ easy explanation paragraphs
- a real-world analogy
- a concrete code / pseudo-code / case block
- 5+ walkthrough steps
- exercise
- expected output
- mini quiz and answer
- common mistakes
- study checklist

## Result
The app now has 31+ long manual chapters for the most important topics, reducing the chance that learners see only short or generic lesson content in core areas.
