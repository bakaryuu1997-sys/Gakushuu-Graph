# V78R — Python Practical Polish Release

## Focus
V78R ưu tiên phần Python vì đây là phần còn yếu hơn AI Passport và 基本情報. Mục tiêu là giảm cảm giác generic/template, tăng code ví dụ thật, trace thật, FastAPI local-only rõ hơn và thêm bài luyện sát kiểu thực chiến.

## Completed
- Added `v78rDeepExamples.ts` with practical cases for OOP state, stack, queue/BFS, DP, FastAPI validation and portfolio README.
- Added `v78rFastApiBlueprints.ts` with local-only API route plans: `/health`, `/grade`, `/todos`, `/ask`.
- Added `v78rCodeExercises.ts` and appended the exercises into the existing Code Lab bank.
- Enriched generated Python lessons with V78R practical trace guidance, test suggestions and pitfall text.
- Added two new UI panels:
  - `PythonV78RDeepExamplesPanel`
  - `PythonV78RFastApiBlueprintPanel`
- Connected the new panels to Python practice tabs: Code, Algorithm and FastAPI.
- Added V78R audit script and Vitest coverage file.

## Quality target improved
Python moves closer to a practical local learning suite:
- better trace-heavy algorithm examples,
- stronger FastAPI request/response/validation design,
- more portfolio-oriented project guidance,
- less generic lesson text for important nodes.

## Remaining future polish
- Add more runnable Pyodide-compatible validation for multi-file project exercises.
- Add more advanced FastAPI topics only if still local-only and not over-engineered.
- Add a dedicated Python portfolio export pack if the user wants interview/job-ready output.
