# V53 — AI Passport UX Focus Mode

## Goal
Turn AI Passport from a feature-rich learning workspace into a beginner-friendly daily study flow.

## What changed

### Beginner Focus Mode
- Added `AiPassportFocusMode.tsx`.
- The AI Passport `start` view now opens a focused dashboard with one clear learning loop:
  1. Continue lesson
  2. Quiz today
  3. Review weak nodes
  4. Check exam readiness
- Focus mode surfaces:
  - readiness score,
  - next focus lesson,
  - daily queue of 6 nodes,
  - weakest readiness groups.

### Lesson UX polish
- `LessonPanel.tsx` now includes a beginner-friendly `Chốt bài trong 3 ý` section:
  - definition,
  - exam trap/pattern,
  - memory tip.
- Added clearer end-of-lesson actions:
  - Tôi hiểu rồi,
  - Đánh dấu ôn lại,
  - Đang học tiếp.

### Mobile UX
- `MobileBottomTabs.tsx` is now lesson-first:
  - Today
  - Lesson
  - Quiz
  - Review
- Graph is no longer one of the main mobile tabs. It remains an advanced tool.

### i18n cleanup
- Replaced several manual `language === ...` text branches with helpers in:
  - `AppHeader.tsx`
  - `StudySidePanel.tsx`
  - `MapInspector.tsx`
  - `MapNodeSearch.tsx`
  - `DetailPanel.tsx`
  - `ExamTrainer.tsx`
  - `StudyCompanion.tsx`
  - `MiniQuiz.tsx`
  - `LessonDepthCard.tsx`

### Accessibility
- Added more `button type="button"`.
- Added/kept `aria-label`, `aria-current`, `aria-expanded`, `aria-pressed` where appropriate.
- Kept focus-visible styling on new buttons.

## Lesson/content status
- AI Passport nodes: 172
- AI Passport lessons: 172
- Missing lessons: 0
- Placeholder lessons: 0
- V52 beginner weak lessons upgraded: 29/29 detailed

## Verification
- `npm run build`: pass
- `npm run test`: pass — 30 files / 74 tests
- `npm run audit:lines`: pass
- `npm run audit:content`: pass
- `npm run verify`: pass
- `npm run audit:ai-lessons`: pass

## Remaining technical debt for V54
- Some non-core or older practice components still contain local `language === ...` logic.
- AI Passport Focus Mode could be split further if it grows beyond the current 177 lines.
- Add visual QA screenshots/playwright checks for mobile and desktop layouts.
- Consider adding persistent Beginner/Advanced mode preference in localStorage.
