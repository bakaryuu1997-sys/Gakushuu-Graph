# V99R — Lesson Detail Page Polish + Real Content Coverage

## Why this version exists

The previous UI still made many lessons feel thin because the learner mostly saw short cards and generic text. V99R changes the lesson surface into a content-first page.

## Main changes

### Lesson detail structure

Every selected lesson now has a structured page:

1. Khái niệm
2. Ví dụ
3. Trace từng bước
4. Bài tập nhỏ
5. Expected output / test case
6. Quiz nhỏ
7. Lỗi cần tránh

### Real content coverage

V99R adds a course-aware lesson blueprint system instead of one generic text pattern.

- Python lessons now branch into concrete examples for:
  - FastAPI / API route / dependency
  - OOP / class / dataclass
  - dict / frequency map
  - list / string / collection
  - file / pathlib / JSON / pytest / exception
  - algorithm / stack / queue / recursion / DP / graph
- 基本情報 lessons now branch into:
  - SQL trace
  - 科目B pseudo-code trace
  - network subnet/CIDR
  - security incident/log scenario
  - FE scenario elimination
- AI Passport lessons now branch into:
  - ML data → model → prediction → evaluation
  - GenAI / LLM / RAG flow
  - privacy / ethics / governance / risk
  - business AI use case

### UI density/layout

- Fullscreen graph controls are now outside the graph canvas.
- Phase selector and search no longer overlay nodes.
- Swimlane/legend overlays were removed from fullscreen and normal graph pages to reduce visual collision.
- Lesson content uses clear card hierarchy and works in light/dark mode.

## Verification

- `npm run audit:v99r-lesson-detail`
- `npx vitest run src/test/v99rLessonDetailPolish.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
