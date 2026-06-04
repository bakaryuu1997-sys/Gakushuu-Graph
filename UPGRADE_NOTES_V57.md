# V57 — Fundamental Info Lesson Completion

## Goal

Move the next priority from AI Passport to 基本情報技術者 and make the existing Fundamental Info course usable for beginner study.

## What changed

- Rebuilt `src/courses/fundamental-info` around a detailed catalog.
- Expanded Fundamental Info from a small placeholder-style course to 66 syllabus-oriented nodes.
- Every node now generates:
  - one detailed lesson,
  - one quiz question,
  - a graph node,
  - study-path coverage.
- Added six study phases:
  1. 基礎理論 / Algorithm
  2. Computer / Programming
  3. Database
  4. Network / Security
  5. Development / Management
  6. Strategy / Law
- Added audit command:
  - `npm run audit:fundamental-lessons`
- Added test:
  - `src/test/v57FundamentalInfoCompletion.test.ts`

## Current quality bar

A Fundamental Info lesson is considered detailed when it has:

- Vietnamese definition
- Japanese definition
- why it matters
- at least 3 Vietnamese exam-pattern bullets
- at least 3 Japanese exam-pattern bullets
- at least 3 Vietnamese common-mistake bullets
- at least 3 Japanese common-mistake bullets
- memory tips
- no TODO/placeholder wording

## Remaining work for future versions

- Add FE-specific exam simulator separate from AI Passport.
- Add more 科目B pseudo-code exercises.
- Add database SQL drill with real table examples.
- Add subnet calculation practice.
- Add past-exam-style Japanese scenario questions.
