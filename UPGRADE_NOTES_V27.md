# V27 Frontend Flow Upgrade

## Completed

1. Expanded Frontend Roadmap
- Frontend course now has 32 nodes.
- Covers HTML, Semantic HTML, Forms, CSS, Box Model, Flexbox, Grid, Responsive, JavaScript, DOM, Events, Fetch, Async/Await, TypeScript, React, Component, Props, State, Hooks, Router, Forms, API, Testing, Performance, Accessibility, SEO, Deploy, CI/CD.
- Added 4-phase study path:
  - Web foundation
  - JavaScript / TypeScript
  - Real React app
  - Quality and deploy

2. Split MiniQuiz component
- Added `src/features/knowledge-graph/components/MiniQuiz.tsx`.
- LessonWorkspace now imports MiniQuiz instead of defining it inline.

3. Added tests for V27 flow
- Added `src/test/frontendAndMiniQuiz.test.ts`.
- Tests:
  - Frontend course is expanded
  - MiniQuiz renders and reveals answer explanation
  - Mastered & Next button calls the expected action

4. Added Next unmastered in Phase Study
- Phase Study now has `Next unmastered` button.

5. Verify passed
- build passed
- 8 test files / 17 tests passed
- line audit passed
- content audit passed

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 142
Total lines: 11676

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 158 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/courses/frontend/index.ts: 134 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines

## Main scripts

```bash
npm run verify
npm run audit:content
npm run e2e:smoke
npm run create:course frontend
```
