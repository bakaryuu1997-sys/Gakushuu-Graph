# V20 Maintainable + Tested Upgrade

## What changed

### 1. Course split
Course definitions are now separated from the registry:

- `src/courses/types.ts`
- `src/courses/courseRegistry.ts`
- `src/courses/ai-passport/index.ts`
- `src/courses/it-passport/index.ts`

The registry is now small and only wires the courses together.

### 2. Graph layout refactor
The Dagre layout logic moved out of the hook into:

- `src/features/knowledge-graph/utils/graphLayout.ts`

`useKnowledgeGraph.ts` is now smaller and easier to maintain.

### 3. Test suite added
Added Vitest and 5 test files:

- `src/test/courseIntegrity.test.ts`
- `src/test/quizQuality.test.ts`
- `src/test/lessonCoverage.test.ts`
- `src/test/graphLayout.test.ts`
- `src/test/crashCourse.test.ts`

Covered cases:

- default course is AI Passport
- every edge references existing nodes
- every study path node exists
- every quiz has valid answers and explanations
- AI quiz bank is large enough
- high-importance AI nodes have lesson coverage
- Dagre returns valid graph positions
- crash course has enough high-priority content

### 4. Line audit added
Added:

- `scripts/line-audit.mjs`

Package scripts:

```bash
npm run test
npm run audit:lines
npm run verify
```

`npm run verify` runs build, tests, and line audit.

### 5. V19 feature completion revalidated
The V19 requested features are still present:

- Study Wizard step X/Y
- 150+ important node lesson coverage
- Dagre graph auto-layout
- Bias/Fairness, Governance, Copyright, Privacy diagrams
- 3-day / 7-day Exam Crash Course

## Important maintainability note
The line audit now reports:

- **0 UI/logic violations** outside the known legacy refactor queue
- 2 legacy files still queued for future split:
  - `src/App.tsx`
  - `src/features/knowledge-graph/components/LessonWorkspace.tsx`
- large generated/data content files are listed as data exceptions

The next full refactor should split `LessonWorkspace.tsx` into view modules and split large AI content files by domain.
