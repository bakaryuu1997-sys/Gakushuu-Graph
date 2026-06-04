# V56 — AI Passport Local Release Candidate

V56 finalizes AI Passport for local-only learning before moving to 基本情報.

## Scope

- No backend
- No account/login
- No cloud sync
- Browser localStorage remains the persistence layer

## Added

- `LocalReleasePanel.tsx`
  - Export local progress JSON
  - Import local progress backup
  - Reset current course progress
  - Explain local-only release guarantees
- V56 Visual QA checklist
- `audit:v56-release`
- Verify now includes V56 release audit

## Release status

AI Passport remains complete:

- 172/172 lessons
- 0 missing lessons
- 0 placeholder lessons
- Beginner/Advanced mode
- Exam Simulator
- Smart Daily Study Plan
- Wrong Answer Intelligence
- Local progress backup/import/reset

## Next course

After V56, start 基本情報 with the same pattern:

1. Audit current lessons/nodes
2. Fill missing beginner lessons
3. Build beginner study flow
4. Add exam practice after content is stable
