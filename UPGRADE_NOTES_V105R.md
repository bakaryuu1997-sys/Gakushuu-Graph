# V105R — Manual Chapter Expansion Pack

## Goal
Write longer hand-crafted chapters for the highest-priority learning areas instead of relying only on generic lesson enhancers.

## Added chapter groups
- Python foundation: values/types/output and collections.
- Python OOP: state, self, method, invariant, BankAccount trace.
- Python algorithm: trace-first BFS/stack/queue/DP mental model.
- 基本情報 科目B: array/loop trace and stack/queue/recursion trace.
- AI Passport case study: ML evaluation and GenAI/RAG/guardrail.

## UI integration
`V99LessonDetailPage` now renders a visible **V105R Manual Chapter** block after the V104 main lesson. The block includes:
- why this lesson matters
- easy explanation
- everyday story
- full example/code/case
- step-by-step walkthrough
- exercise
- expected output
- mini quiz
- common mistakes
- study checklist

## Quality checks
- `scripts/audit-v105-manual-chapters.mjs`
- `src/test/v105ManualChapterExpansion.test.tsx`
