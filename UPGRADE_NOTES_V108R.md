# V108R — Lesson Reading Mode Polish

## Goal
Long written lessons are now useful, but they can feel heavy. V108R adds a reading mode switch directly inside Lesson Detail so the learner can choose how much content to see.

## Added
- `Focus`: keep the core explanation visible and hide archive/noisy sections.
- `Full`: show the full written lesson plus the V99 archive.
- `Practice only`: jump straight into exercise, expected output, quiz, and mistakes.
- The reading mode toolbar is in normal page flow, not `fixed` or `absolute`, so it does not overlap the lesson, graph, or navigation.
- Practice-only panel reuses the best available V106/V104 chapter content.

## Files
- `src/features/knowledge-graph/components/V99LessonDetailPage.tsx`
- `src/test/v108LessonReadingMode.test.tsx`
- `scripts/audit-v108-lesson-reading-mode.mjs`
- `UPGRADE_NOTES_V108R.md`

## Validation
- `npm run audit:v108-lesson-reading-mode`
- `npx vitest run src/test/v108LessonReadingMode.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
