# V88R → V91R Final UX Polish

## V88R — Final content consistency audit
- Added a structured consistency checklist for Python, 基本情報, AI Passport, and release docs.
- Kept course boundaries clean: Python portfolio work stays in Python; 科目B trace/mock stays in 基本情報; AI Passport remains separate.

## V89R — Python portfolio/job-ready polish
- Added four portfolio project blueprints: CLI Study Todo, CSV Analyzer, FastAPI Mini Backend, and Test-first Katas.
- Each project includes deliverables, acceptance tests, README checklist, related lesson nodes, and starter snippet.

## V90R — 基本情報 no-timer mixed mock
- Added a mixed FE-style mini mock with pseudo-code, SQL, network, security, and management.
- No timer is included. The design intentionally focuses on slow review, trap recognition, and weak-domain classification.

## V91R — Release UX polish
- Added a release roadmap panel summarizing V78R → V91R.
- Added a seven-day local study route.
- Added audit scripts for V88R, V89R, V90R, and V91R.

## Local run
```bash
npm install
npm run build
npm run audit:v88r-consistency
npm run audit:v89r-portfolio
npm run audit:v90r-no-timer-mock
npm run audit:v91r-release-ux
```
