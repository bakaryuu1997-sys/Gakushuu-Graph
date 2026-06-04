# V110R — Priority Deep Expansion Batch

## Goal
Use the V109 coverage dashboard direction to expand the weakest/highest-value content areas with more handwritten chapters.

## Added
- Python: async/await, FastAPI database/repository, authentication/authorization, packaging/project structure.
- 基本情報: SQL subquery + ACID, network troubleshooting, security countermeasure selection.
- AI Passport: law/compliance, prompt injection governance, model monitoring incident response.
- Other priority courses: SQL window function drills, Frontend props/state/event, Linux permission/process/network commands, BrSE requirement clarification.

## Integration
- Lesson detail now resolves manual content with `findV110ManualChapter(...)`, so V110 chapters are preferred over V106/V105 when the node matches.
- Content Coverage view now includes a V109 coverage dashboard and V110 priority expansion map.

## QA
- `npm run audit:v110-priority-expansion`
- `npx vitest run src/test/v110PriorityDeepExpansion.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false`
- `npm run build`
