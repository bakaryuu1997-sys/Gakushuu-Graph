# V51 - AI Passport Lesson Depth + Refactor Stability

## Main focus
- Keep AI Passport as the primary course.
- Ensure every AI Passport node has a useful, detailed lesson.
- Continue V49/V50 technical debt cleanup: split large files, reduce bundle size, standardize i18n, improve graph/mobile UX, and stabilize verify.

## Lesson quality
- Added `src/test/v51AiPassportLessonDepth.test.ts`.
- The test verifies:
  - every AI Passport node has exactly one available lesson after sanitizing,
  - every lesson has VI/JA definition, importance, exam patterns, common mistakes, and memory tips,
  - thin placeholder-style lessons are rejected.
- Added lesson enrichment in `src/courses/ai-passport/index.ts` so older thin lessons are upgraded using node-specific labels, summaries, and exam points.

## Refactor
- `LessonWorkspace.tsx` was split into smaller files:
  - `LessonPanel.tsx`
  - `PracticeViews.tsx`
  - `QuizReviewViews.tsx`
  - `GlossaryCompareViews.tsx`
  - `ExamViews.tsx`
  - `ContentCoverageView.tsx`
- `AppLoaded.tsx` was split into:
  - `MainStudyContent.tsx`
  - `useAppCourseState.ts`
- `studyNavigationConfig.ts` was split into:
  - `studyViewTypes.ts`
  - `studyViewItems.ts`
  - `studyViewAccess.ts`

## i18n cleanup
- Added helpers in `src/features/knowledge-graph/utils/i18n.ts` for course title/description, lesson lists, comparison text, option tips, and study path phase text.
- Removed remaining component-level `language === "ja" ? ...` content branches from the main knowledge graph components.

## Bundle
- Updated `vite.config.ts` to use Rolldown `codeSplitting.groups`.
- The previous single `ai-course-data` chunk around 718 kB is split into multiple smaller AI chunks.
- Largest AI chunk after V51 build: about 198.56 kB.

## Graph/mobile UX
- Added `MapReadabilityHint.tsx`.
- Mobile graph fallback now explains that Roadmap + Lesson is the default study flow and Graph is an advanced fullscreen map.
- Added additional button type, aria labels, aria-pressed, and focus-visible styles.

## Verification
- `npm run build`: pass
- `npm run test`: pass, 28 files / 69 tests
- `npm run audit:lines`: pass
- `npm run audit:content`: pass
- `npm run verify`: pass
