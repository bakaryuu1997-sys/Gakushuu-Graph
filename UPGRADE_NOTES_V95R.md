# V95R — UI/UX Stabilization + Theme Consistency

## Main goals
- Fix dark mode / light mode inconsistency by switching Tailwind to class-based dark mode.
- Align browser color-scheme with the selected theme to reduce mixed rendering.
- Polish key visible surfaces (header, side panel, graph action buttons) so dark mode and light mode feel coherent.
- Remove lingering "Suggested timer" wording from legacy exam simulators and replace it with no-timer "Suggested pace" guidance.

## Changed files
- tailwind.config.ts
- src/index.css
- src/components/useAppTheme.ts
- src/components/AppHeader.tsx
- src/components/StudySidePanel.tsx
- src/components/map/GraphMapPage.tsx
- src/features/knowledge-graph/components/TopStudyControls.tsx
- src/features/knowledge-graph/components/AiExamSimulator.tsx
- src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx
- scripts/audit-v95r-ui-theme.mjs
- src/test/v95rUiThemeStabilization.test.tsx

## Outcome
- Manual theme toggle now drives Tailwind dark variants consistently.
- Light/Dark no longer depends on OS media preference.
- Legacy exam simulator language now matches the no-timer product direction.
