# V100R — Python Deep Chapter Pack

## Goal

V99R made the lesson page structured, but many Python lessons still felt like generated placeholders. V100R adds a handwritten, course-aware Python chapter layer focused on real learning content.

## Added

- `src/courses/python/v100rDeepChapterPack.ts`
  - Foundation values/type conversion
  - Control flow trace
  - Function contract
  - Collections/frequency counter
  - OOP/dataclass/state
  - File/pathlib/JSON/CSV
  - Errors/logging/pytest
  - Algorithm patterns
  - Stack/queue/recursion/DP/BFS
  - FastAPI service layer/dependency
  - Portfolio project structure

- `src/features/knowledge-graph/components/PythonV100RDeepChapterPanel.tsx`
  - Filter by track
  - Search chapter/code
  - Collapsible code + trace + exercise blocks
  - Dark/light safe styling
  - Responsive grid, no absolute overlay

- V99 lesson detail integration
  - Python lesson pages now show a V100R deep chapter block matched to the selected node.
  - Each matched chapter includes concept, code, trace, practice and expected output.

## Quality bar

Every V100R chapter must include:

- conceptVi
- whenUseVi
- mentalModelVi
- code
- at least 5 trace steps
- exerciseVi
- expectedOutput
- miniQuiz
- commonMistakesVi
- interviewCheckpointVi

## Verification

Run:

```bash
npm run audit:v100r-python-deep-chapters
npx vitest run src/test/v100rPythonDeepChapterPack.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false
npm run build
```
