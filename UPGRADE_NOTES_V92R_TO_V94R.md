# V92R → V94R Upgrade Notes

## V92R — Global quick search / quick jump

Added a local-only global quick search panel inside the lesson workspace. It indexes:

- current course lessons / nodes / quizzes
- Python Code Lab grader exercises
- Python portfolio projects
- Python advanced topics
- 基本情報 scenarios and 科目B trace items

The search panel supports quick jump to the selected node and opens the relevant no-timer practice area when applicable.

## V94R — Python advanced batch

Added advanced Python topics with code, trace, pitfalls, and practice prompts:

- typing with `TypedDict` and explicit result contracts
- `dataclass` with `__post_init__` invariant checks
- `pathlib` for local JSON/file handling
- `logging` boundaries instead of scattered `print`
- pytest fixtures using `tmp_path`
- FastAPI dependency injection with `Depends`

## Validation

Run:

```bash
npm run audit:v92r-global-search
npm run audit:v94r-python-advanced
npx vitest run src/test/v92rV94rGlobalSearchAdvanced.test.tsx --pool=vmThreads --maxWorkers=1 --fileParallelism=false
npm run build
```
