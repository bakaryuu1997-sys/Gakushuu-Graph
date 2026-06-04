# V54 — AI Passport Visual QA + Persistent UX Mode

## Goals

V54 focuses on the next layer after V53 UX Focus Mode: make the beginner/advanced split persistent, reduce navigation clutter for new learners, and add a repeatable UI/UX QA checklist for AI Passport.

## Completed

- Added persistent `StudyUxMode` with localStorage support.
- Default UX mode is `beginner`.
- Beginner Mode shows only the core AI Passport learning flow:
  - Start
  - Study
  - Exam / Mini Quiz
  - Review / Wrong Answers / Need Review
- Advanced Mode unlocks heavier tools:
  - Graph
  - Dashboard
  - Coverage
  - Search/filter/export controls
  - Crash Course / Plans / Visual Maps
- Added a Learning Mode switch in `StudyNavigation`.
- Beginner Mode now hides advanced search/filter/export controls to reduce noise.
- Added `VisualQaPanel` on the Dashboard for repeatable AI Passport UI/UX QA.
- Added `data-testid` and `aria-current` to navigation buttons for smoke/e2e tests.
- Updated Playwright smoke flow to account for Beginner Mode before opening Graph.
- Added V54 unit tests for UX mode, beginner-safe views, advanced navigation, and Visual QA panel.
- Added `npm run audit:v54-ux` and included it in `npm run verify`.

## Lesson status

AI Passport remains complete from V52/V53:

- 172 nodes
- 172 lessons
- 0 missing lessons
- 0 placeholder lessons
- 29/29 previously weak beginner lessons remain detailed

## Verification

- `npm run build`: pass
- `npm run test`: pass, 31 files / 79 tests
- `npm run audit:lines`: pass
- `npm run audit:content`: pass
- `npm run audit:ai-lessons`: pass
- `npm run audit:v54-ux`: pass, 7/7 checks
- `npm run verify`: pass

## E2E note

The Playwright smoke spec was updated, but this environment did not have the Playwright Chromium browser installed, so local execution requires:

```bash
npx playwright install
npm run e2e:smoke
```

## V55 suggestion

Next version should focus on real visual QA with screenshots and optional Playwright baseline checks:

1. Install/run Playwright browser locally.
2. Add screenshot checks for desktop and mobile Beginner Mode.
3. Add a compact onboarding modal for first-time users.
4. Add keyboard navigation pass for navigation and lesson action buttons.
