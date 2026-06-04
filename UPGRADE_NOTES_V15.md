# V15 - Visual Study UX Upgrade

## Main Goal
Make the AI Passport learning app easier to study by separating reading, visual maps, and full-screen exploration.

## Added

### 1. Visual Learning Maps
New sidebar view: **Visual Maps**.

It groups knowledge into smaller maps:
- AI Basics
- Data / ML Map
- Generative AI Map
- Ethics / Law Map
- Business Use Map

This helps learners avoid being overwhelmed by the full graph.

### 2. Learning Flow View
New sidebar view: **Learning Flow**.

It shows the course path from start to finish by phase, with:
- phase number
- learning goal
- ordered nodes
- progress per phase

### 3. Fullscreen Graph Presets
Fullscreen Map and Graph Map now include map presets:
- All Map
- AI Basics
- Data / ML
- GenAI
- Ethics / Law
- Business

The graph can now be explored by topic instead of showing everything at once.

### 4. Cluster Legend
Graph Map includes a compact visual legend for major learning clusters.

### 5. Study-first Layout Direction
The app keeps lesson content as the main learning surface, while the graph is treated as a supporting visual map.

## Build Status
- `npm run build`: pass

## Remaining Recommendations
- Add true React Flow group nodes / cluster boxes.
- Add ELK/Dagre auto-layout for cleaner architecture-diagram-like maps.
- Create dedicated SVG/image diagrams for top concepts such as RAG, Transformer, AI Project Flow, and AI Governance.
- Improve mobile bottom navigation for quick access to Lesson / Map / Quiz / Glossary.
