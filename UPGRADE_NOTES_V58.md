# V58 — Fundamental Info Exam Practice + 科目B Drill

V58 moves 基本情報 from detailed lessons into practice-ready local learning.

## Added

- Fundamental Info Focus Mode for the Start view.
- FE Exam Simulator on the existing `session` route.
- 科目B practice drills for:
  - pseudo-code / trace table
  - SQL / JOIN / GROUP BY / normalization
  - subnet / CIDR / private IP / prefix conversion
- New practice data source: `src/courses/fundamental-info/practice.ts`.
- New audit: `npm run audit:v58-fundamental-practice`.
- New test: `src/test/v58FundamentalInfoPractice.test.ts`.

## Local-only scope

No backend, account, or cloud sync. The app remains a local browser learning app.

## Remaining V59 suggestions

- Add more 科目B long-form trace questions.
- Add Japanese scenario questions closer to past-exam style.
- Add SQL table execution visualizer.
- Add subnet step-by-step calculator UI.
