import { readFileSync } from 'node:fs';

const component = readFileSync('src/features/knowledge-graph/components/GlobalQuickSearchPanel.tsx', 'utf8');
const workspace = readFileSync('src/features/knowledge-graph/components/LessonWorkspace.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const required = [
  ['component has lesson index', "type: 'lesson'"],
  ['component has exercise index', "type: 'exercise'"],
  ['component has scenario index', "'scenario' as const"],
  ['component has project index', "type: 'project'"],
  ['component has trace index', "'trace' as const"],
  ['component imports Python grader', 'pythonV80RGradedExercises'],
  ['component imports Python portfolio', 'pythonV89RPortfolioProjects'],
  ['component imports FE scenarios', 'fundamentalInfoExamScenarios'],
  ['workspace renders global search', 'GlobalQuickSearchPanel'],
  ['npm script exists', 'audit:v92r-global-search'],
];

const failures = required.filter(([label, token]) => !(label.includes('workspace') ? workspace : label.includes('npm') ? pkg : component).includes(token));
if (failures.length) {
  console.error('V92R audit failed:');
  for (const [label, token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}
console.log('V92R global quick search audit passed.');
