# V55 — AI Passport Exam Practice & Final Polish

V55 focuses on making AI Passport feel like a real exam-prep app after V54 simplified the UX.

## Added

- V55 Exam Simulator for 30/50-question practice sessions.
- Result summary with score, weak domains, and wrong-answer node suggestions.
- V55 Wrong-answer Intelligence panel with top trap domains and repeated node traps.
- Smart Daily Plan: 3 new lessons, 3 review lessons, 10 quiz questions, 1 mini exam.
- Lesson UI polish with Beginner / Exam point / Common mistake badges and quick exam cards.

## Updated

- `session` view is now surfaced as Exam Simulator and is available in Beginner Mode.
- `verify` now includes `audit:v55-exam-polish`.

## Validation

Run:

```bash
npm run verify
npm run audit:v55-exam-polish
npm run e2e:smoke
```
