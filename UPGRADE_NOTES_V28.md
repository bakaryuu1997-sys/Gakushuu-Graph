# V28 Frontend Projects Upgrade

## Completed

1. Expanded Frontend Roadmap
- Frontend course now has 93 nodes.
- Added deeper topics:
  - CSS specificity
  - CSS variables
  - Position
  - Animation
  - ES modules
  - Array methods
  - Promise
  - React Context
  - Custom Hooks
  - TanStack Query
  - Vite
  - ESLint
  - Prettier
  - Vitest
  - Playwright
  - Web Vitals
  - Accessibility
  - SEO
  - CI/CD

2. Added Frontend Cheat Sheet
- Added `src/features/knowledge-graph/components/FrontendCheatSheetView.tsx`.
- Cheat sheet covers:
  - HTML
  - CSS Layout
  - JavaScript
  - React
  - API / Deploy

3. Added Project-based learning mode
- Added `Projects` view.
- Added `src/features/knowledge-graph/components/ProjectLearningView.tsx`.
- Projects:
  - Profile Card
  - Todo App
  - API Search App
  - Dashboard UI

4. Added Frontend E2E smoke test
- Added `e2e/frontend-course.spec.ts`.

5. Improved course generator
- `npm run create:course <course-id>` now creates split files:
  - nodes.ts
  - edges.ts
  - lessons.ts
  - quizzes.ts
  - studyPath.ts
  - index.ts

## Verify

Passed:
- build
- 8 test files / 17 tests
- line audit
- content audit

## Current project statistics

Excluded:
- node_modules
- dist
- .git

Files: 146
Total lines: 11889

## Largest files

- package-lock.json: 4882 lines
- src/courses/ai-passport/domain/lessons/core.ts: 188 lines
- src/components/AppLoaded.tsx: 179 lines
- src/features/knowledge-graph/components/DetailPanel.tsx: 161 lines
- src/features/knowledge-graph/components/StudyNavigation.tsx: 159 lines
- src/courses/frontend/index.ts: 158 lines
- src/courses/ai-passport/aiPassportDomainDrillQuiz.ts: 158 lines
- src/features/knowledge-graph/data/supplementalEdges.ts: 156 lines
- src/features/knowledge-graph/components/StudyCompanion.tsx: 150 lines
- src/features/knowledge-graph/data/supplementalNodes.ts: 149 lines
- src/features/knowledge-graph/components/ExamTrainer.tsx: 145 lines
- src/features/knowledge-graph/hooks/useKnowledgeGraph.ts: 133 lines

## Main scripts

```bash
npm run verify
npm run e2e:smoke
npm run create:course sql
```
