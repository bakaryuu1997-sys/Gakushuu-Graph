# V113R — Manual Chapter Data Split

## Why
V112R lazy-loaded course data, but the lesson detail page still imported V104/V105/V106/V110 chapter packs directly. That meant opening the lesson detail chunk could still pull large written lesson data upfront.

## Changes
- Added `src/courses/v113LessonDataLoader.ts` as a small async boundary for lesson detail data.
- Removed runtime static imports of V104/V110/Python V100/V101/FE V102/AI V103 from `V99LessonDetailPage.tsx`.
- Lesson detail now shows a normal-flow loading card while deep written content is fetched.
- Kept V107 lesson navigation and V108 reading modes unchanged.

## Result
Manual chapter packs are loaded only when a learner opens lesson detail, rather than being bundled into the initial lesson detail component path.

## Validation
- `npm run audit:v113-manual-data-split`
- `npx vitest run src/test/v113ManualChapterDataSplit.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
