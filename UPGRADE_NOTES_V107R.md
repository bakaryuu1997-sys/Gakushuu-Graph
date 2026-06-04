# V107R — Lesson Navigation Polish

## Goal
Long lessons now have real written content, but they can feel heavy. V107R adds a simple in-page table of contents so learners can jump to the section they need without the layout overlapping or becoming hard to scan.

## What changed
- Added a normal-flow lesson navigation block in `V99LessonDetailPage`.
- Added quick anchors for: Giải thích, Code/case, Trace, Bài tập, Quiz, Lỗi hay gặp.
- Anchors target V106 manual chapters when available; otherwise they target V104 written lesson sections.
- Added `scroll-mt-24` to target cards so jumps do not hide headings.
- Kept navigation inside the page flow, avoiding fixed/absolute overlay patterns.

## Validation
- `npm run audit:v107-lesson-navigation`
- `npx vitest run src/test/v107LessonNavigationPolish.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
