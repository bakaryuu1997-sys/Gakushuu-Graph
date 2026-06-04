# V111R — Performance / Code Splitting Pass

## Why this was needed
The build warning about large chunks is not a runtime error, but it is worth handling because the app now contains many written chapters and coverage dashboards. Without code splitting, users pay the cost of loading deep lesson content even before opening a lesson.

## What changed
- Lazy-loaded `V99LessonDetailPage` from `LessonPanel` so the large written lesson/detail/chapter system is downloaded only when the lesson detail is rendered.
- Lazy-loaded `ContentCoverageView` from `LessonWorkspace` so V109/V110 coverage analytics and manual chapter summaries are not bundled into the default workspace route.
- Added lightweight fallbacks that stay in normal document flow and do not overlay the UI.
- Kept all V104–V110 handwritten content intact.

## Result
- Build still may warn about the course registry chunk because course datasets are intentionally large and loaded for local/offline study.
- The lesson-detail and coverage-dashboard code paths are now separated, making the main workspace easier to load and maintain.
