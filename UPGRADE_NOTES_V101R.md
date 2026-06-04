# V101R — Python Easy Deep Lesson Rewrite

## Why this version exists
The previous V99/V100 lesson layer improved coverage, but many Python lesson surfaces still felt generic because the base catalog contained templated copy such as "đọc đoạn code..." and the deep content was not always the first thing shown to the learner.

V101R focuses on readable, beginner-friendly explanations that answer:
- What is this concept?
- Why do I need it?
- What does the code do line by line?
- What should I practice?
- What output should I expect?
- What misunderstanding should I avoid?

## Main changes
- Added `src/courses/python/v101EasyLessonPack.ts`
  - Builds easy deep lessons for every Python node.
  - Covers foundation, control flow, functions, collections, OOP, files/errors/testing, algorithms, FastAPI, and projects.
  - Each lesson includes goal, big idea, multiple explanation paragraphs, analogy, real code, trace, exercise, expected output, quiz, misconception, and interview checkpoint.
- Added `src/courses/v101LessonQuality.ts`
  - Applies V101 content to the actual Python course used by the app.
  - Replaces generic lesson fields with content-first explanations.
- Updated `src/courses/courseRegistry.ts`
  - Applies V101 after V98/V99 so Python lessons use the newest easy content.
- Updated `src/courses/python/catalog.ts`
  - Enriches base catalog items with V101 lesson fields.
- Updated `src/features/knowledge-graph/components/V99LessonDetailPage.tsx`
  - Shows the V101 easy deep lesson first for Python lessons.
  - Moves the older V99 block into a collapsed reference section.

## Quality checks
- `npm run audit:v101r-python-easy-lessons`
- `npx vitest run src/test/v101rPythonEasyLessons.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`

## Result
Python lesson content is now easier to understand and less template-like. The learner sees a concrete explanation and code trace before older reference cards.
