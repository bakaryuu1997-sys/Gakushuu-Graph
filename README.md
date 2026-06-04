# IT Passport Knowledge Graph

Interactive knowledge graph for studying the Japanese IT Passport exam.

## Stack

- React
- TypeScript
- Tailwind CSS
- React Flow
- Vite
- LocalStorage persistence
- Docker + Nginx static hosting

## Features

- Dynamic knowledge graph with zoom / pan / drag
- Overview / Study / Exam modes for easier graph reading
- Click node to open detailed lesson panel
- Dedicated lesson content for key exam nodes
- Vietnamese / Japanese / English labels
- Search and category filters
- Study path and daily 10-node learning plan
- Mini quiz bank with hard questions and exam-like traps
- Flashcard mode
- Compare mode for confusing concepts
- Progress, favorites, and recent viewed nodes saved in localStorage
- Export / import progress as JSON
- Export graph as PNG
- Docker setup for consistent run on any machine

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Run with Docker

```bash
docker compose up --build
```

Open:

```txt
http://localhost:8080
```

Manual Docker run:

```bash
docker build -t it-passport-knowledge-graph .
docker run --rm -p 8080:80 it-passport-knowledge-graph
```

## Recommended GitHub workflow

```bash
git init
git add .
git commit -m "feat: add it passport knowledge graph app"
git branch -M main
git remote add origin https://github.com/<your-name>/<repo-name>.git
git push -u origin main
```

## Notes

This app is intentionally local-only for MVP:

- no backend
- no login
- no AI API
- no database
- progress is stored in browser localStorage

## V6 Update

This version is now a multi-course study graph platform. `AI Passport` is the default main course, and `IT Passport` remains available through the course switcher.

Progress is stored per course in LocalStorage, so switching courses will not mix favorites, recent items, or mastered status.


## V7 AI Passport Deep Study Upgrade

This build expands AI Passport into the main course with:

- 159 AI Passport nodes
- 238 AI Passport practice questions
- 110 supplemental lesson entries
- Exam Session 30/60-question mode
- Compare View for confusing concepts
- Flashcard mode
- Mistake Review view
- Vite chunk splitting for better bundle organization

Practice questions are original mock-exam style questions, not copied official past exam content.


## V116 Final local release checklist

Use this short checklist before handing the zip to another machine:

```bash
npm install
npm run audit:v116-final-stability
npm run build
npm run dev
```

Then manually check:

- Open the app once in light mode and once in dark mode.
- Open Lesson Detail and confirm the page shows written explanation, code/case, trace, exercise, expected output, quiz, and common mistakes.
- Open Content Coverage and review the V116 Final Release Stability QA panel.
- Open Practice / Exam screens and confirm they use suggested pace, not countdown timers.
- Open Full Map and confirm controls do not cover the graph content.
- Keep the zip clean: do not include `node_modules`, `dist`, `.git`, `.vite`, or scratch work folders.

The app is local-only: no login, no backend, no external AI API, and learning progress stays in browser localStorage.
