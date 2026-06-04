# V104R — Written Lesson Cleanup + No Generic Main Content

## Why this version exists
User feedback showed that many lesson screens still felt like generic placeholders: short definitions, repeated phrases, and unclear purpose. V104R makes the main lesson area content-first and course-aware across all course families.

## What changed
- Added `src/courses/v104WrittenLessonPack.ts`.
- Added a V104 main lesson block to `V99LessonDetailPage.tsx`.
- Applied `enhanceCourseForV104` after the previous V98/V99/V101/V102/V103 enhancers.
- Replaced legacy generic text in Python catalog with trace/practice wording.
- Added written lesson coverage for:
  - Python
  - 基本情報
  - AI Passport
  - SQL
  - Frontend
  - Linux / Terminal
  - BrSE
  - IT Passport

## Main lesson structure
Every node now gets a main lesson with:
1. Giải thích dễ hiểu
2. Ví dụ đời thường
3. Case/code/query/workflow mẫu
4. Trace / cách suy luận
5. Bài tập tự làm
6. Expected output
7. Quiz nhỏ
8. Lỗi cần tránh

## Quality gate
Added:
- `npm run audit:v104-written-lessons`
- `src/test/v104WrittenLessons.test.tsx`

The quality check verifies that loaded course lessons have long explanations, trace steps, practice, expected output, quiz, and do not expose the old generic Python phrases in the enhanced lesson payload.
