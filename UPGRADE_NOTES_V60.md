# V60 — Fundamental Info Beginner UX + Lesson Polish

## Scope

V60 turns the expanded 基本情報 content from V59 into a more beginner-friendly learning flow. It does not add backend, login, or cloud sync.

## Added

- FundamentalInfoLessonPolish: FE-specific lesson blocks for 科目A, 科目B, Japanese traps, and example-reading steps.
- FundamentalInfoReadinessDashboard: readiness split by Algorithm, Theory, Database, Network/Security, Management, and Strategy.
- FundamentalPracticeWorkbenches: visual pseudo-code trace table, SQL GROUP BY/HAVING result table, and subnet step-by-step calculator.
- V60 audit and test coverage.

## Verification

- npm run build
- npm run test
- npm run audit:v60-fundamental-ux
- npm run verify
