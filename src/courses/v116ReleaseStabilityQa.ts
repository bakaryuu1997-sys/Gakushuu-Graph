export type V116StabilityStatus = 'pass' | 'watch' | 'next';

export interface V116StabilityItem {
  id: string;
  area: string;
  status: V116StabilityStatus;
  title: string;
  evidence: string;
  action: string;
}

export const v116FinalStabilityItems: V116StabilityItem[] = [
  {
    id: 'theme-class-dark-mode',
    area: 'Theme',
    status: 'pass',
    title: 'Dark / light mode follows the app toggle',
    evidence: 'Tailwind uses class-based dark mode and the app writes the chosen mode to documentElement + localStorage.',
    action: 'Keep checking newly added components for missing dark: classes.',
  },
  {
    id: 'layout-no-overlay-lesson',
    area: 'Layout',
    status: 'pass',
    title: 'Lesson navigation and reading mode do not overlay the page',
    evidence: 'V107/V108 controls are rendered in normal flow, not fixed or absolute overlays.',
    action: 'Prefer inline cards and sticky side panels only when they do not cover content.',
  },
  {
    id: 'lesson-written-content',
    area: 'Content',
    status: 'pass',
    title: 'Lesson detail prioritizes written explanations',
    evidence: 'V104 written lessons, V105/V106 manual chapters, and V110 priority chapters are loaded before legacy archive content.',
    action: 'Use V109 coverage dashboard to decide which chapter should be expanded next.',
  },
  {
    id: 'no-timer-policy',
    area: 'Practice UX',
    status: 'pass',
    title: 'No countdown timer policy is preserved',
    evidence: 'Legacy exam simulators use suggested pace text and no countdown/setInterval based timer UI.',
    action: 'Keep practice focused on review, weak domains, and expected output.',
  },
  {
    id: 'lazy-loading-heavy-tools',
    area: 'Performance',
    status: 'pass',
    title: 'Heavy lesson and coverage tools are lazy-loaded',
    evidence: 'Lesson detail, coverage dashboard, Python panels, and FE practice panels are split from the first view path.',
    action: 'Continue splitting only when build warnings point to a real user-visible slowdown.',
  },
  {
    id: 'chunk-warning',
    area: 'Performance',
    status: 'watch',
    title: 'Some chunks can still be large because content is local/offline',
    evidence: 'The app intentionally includes a lot of written study content without a backend.',
    action: 'If startup becomes slow, split course registry summaries and chapter packs further by course.',
  },
  {
    id: 'release-zip-cleanliness',
    area: 'Release',
    status: 'pass',
    title: 'Release zip should stay clean',
    evidence: 'The release checklist excludes node_modules, dist, .git, cache, screenshots, and scratch folders.',
    action: 'Run npm install after extracting the zip, then npm run build and npm run dev.',
  },
];

export const v116ReleaseChecklist = [
  'Run npm install from the extracted project folder.',
  'Run npm run build to verify TypeScript and Vite output.',
  'Run npm run audit:v116-final-stability before handing over the zip.',
  'Open the app in light mode and dark mode, then check Lesson Detail, Practice, Coverage, and Full Map.',
  'Confirm lesson detail shows written explanation, code/case, trace, exercise, expected output, quiz, and common mistakes.',
  'Confirm no mock/exam screen uses countdown timer language.',
  'Confirm zip does not contain node_modules, dist, .git, .vite, or temporary work folders.',
];

export const v116NextRisks = [
  'Very large content packs can still make some course screens heavy on old machines.',
  'Coverage is now good for core courses, but non-core courses still benefit from more handwritten chapter packs.',
  'Future UI additions should avoid absolute overlays unless they are modal-only and dismissible.',
];
