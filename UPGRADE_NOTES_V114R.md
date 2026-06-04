# V114R — Remove Ineffective Dynamic Imports / Split Course Panels

## Goal
Reduce the remaining large chunks after V111–V113 by removing imports that looked dynamic but still pulled large content modules together.

## Changes
- `courseLoader.ts` now applies course-specific enhancers instead of always loading the heavy V104 written lesson pack.
- Added `v114NonCoreWrittenLessonPack.ts` for SQL / Frontend / Linux / BrSE / IT Passport so non-core courses still keep written lessons without importing Python/FE/AI packs.
- Added `v114LessonDataLoader.ts` so lesson detail loads only the relevant lesson data pack for the current course.
- Python practice panels are lazy-loaded by active tab.
- 基本情報 heavy practice panels are lazy-loaded inside the practice drill view.

## Result
V114R preserves the written lesson content while reducing accidental cross-course imports and keeping loading fallbacks inside the normal layout flow.
