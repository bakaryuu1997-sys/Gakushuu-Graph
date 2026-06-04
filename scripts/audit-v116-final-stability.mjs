import { existsSync, readFileSync } from 'node:fs';

const files = {
  pkg: readFileSync('package.json', 'utf8'),
  tailwind: readFileSync('tailwind.config.ts', 'utf8'),
  theme: readFileSync('src/components/useAppTheme.ts', 'utf8'),
  coverage: readFileSync('src/features/knowledge-graph/components/ContentCoverageView.tsx', 'utf8'),
  panel: readFileSync('src/features/knowledge-graph/components/V116FinalStabilityPanel.tsx', 'utf8'),
  data: readFileSync('src/courses/v116ReleaseStabilityQa.ts', 'utf8'),
  lessonWorkspace: readFileSync('src/features/knowledge-graph/components/LessonWorkspace.tsx', 'utf8'),
  lessonPanel: readFileSync('src/features/knowledge-graph/components/LessonPanel.tsx', 'utf8'),
  aiExam: readFileSync('src/features/knowledge-graph/components/AiExamSimulator.tsx', 'utf8'),
  feExam: readFileSync('src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx', 'utf8'),
  readme: readFileSync('README.md', 'utf8'),
};

const checks = [
  ['audit script exists in package', files.pkg, 'audit:v116-final-stability'],
  ['tailwind uses class dark mode', files.tailwind, "darkMode: 'class'"],
  ['theme writes root class', files.theme, 'classList.toggle("dark"'],
  ['theme writes localStorage', files.theme, 'localStorage.setItem'],
  ['coverage renders V116 panel', files.coverage, 'V116FinalStabilityPanel'],
  ['V116 data has theme item', files.data, 'theme-class-dark-mode'],
  ['V116 data has lesson content item', files.data, 'lesson-written-content'],
  ['V116 data has clean zip checklist', files.data, 'node_modules, dist, .git'],
  ['LessonWorkspace keeps lazy coverage', files.lessonWorkspace, 'lazy(() =>'],
  ['LessonPanel keeps lazy lesson detail', files.lessonPanel, 'lazy(() =>'],
  ['AI exam uses suggested pace not timer', files.aiExam, 'Suggested pace'],
  ['FE exam uses suggested pace not timer', files.feExam, 'Suggested pace'],
  ['README has V116 checklist', files.readme, 'V116 Final local release checklist'],
  ['release notes exist', existsSync('UPGRADE_NOTES_V116R.md') ? 'ok' : '', 'ok'],
];

const badText = [
  ['AI exam still has Suggested timer', files.aiExam, 'Suggested timer'],
  ['FE exam still has Suggested timer', files.feExam, 'Suggested timer'],
];

const failures = checks.filter(([_, source, token]) => !source.includes(token));
const bad = badText.filter(([_, source, token]) => source.includes(token));
if (failures.length || bad.length) {
  console.error('V116 final stability audit failed:');
  for (const [label, , token] of failures) console.error(`- missing ${label}: ${token}`);
  for (const [label] of bad) console.error(`- ${label}`);
  process.exit(1);
}
console.log('V116 final release stability audit passed.');
