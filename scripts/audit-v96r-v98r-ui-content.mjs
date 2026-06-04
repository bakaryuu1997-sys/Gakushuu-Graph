import { readFileSync } from 'node:fs';

const dashboard = readFileSync('src/features/knowledge-graph/components/WorkspaceDashboard.tsx', 'utf8');
const search = readFileSync('src/features/knowledge-graph/components/GlobalQuickSearchPanel.tsx', 'utf8');
const graphMap = readFileSync('src/components/map/GraphMapPage.tsx', 'utf8');
const enhancer = readFileSync('src/courses/v98LessonContentAudit.ts', 'utf8');
const registry = readFileSync('src/courses/courseRegistry.ts', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const checks = [
  ['V96 home quick actions present', dashboard, 'V96R home quick actions'],
  ['Dashboard has today action', dashboard, 'Hôm nay học gì'],
  ['Dashboard has continue action', dashboard, 'Continue học tiếp'],
  ['Dashboard has review action', dashboard, 'Review câu sai'],
  ['Dashboard has weak domain action', dashboard, 'Weak domain'],
  ['V97 search scope exists', search, "type SearchScope"],
  ['V97 search has recent searches', search, "v97r-global-search-recent"],
  ['V97 search highlights query', search, "function highlight"],
  ['V98 graph controls moved outside map', graphMap, "V98R readable map controls"],
  ['Graph no longer uses absolute phase overlay', graphMap, "absolute left-8", true],
  ['V98 lesson enhancer exists', enhancer, 'enhanceCourseForV98'],
  ['V98 content adds expected output', enhancer, 'Expected output'],
  ['Course registry applies enhancer', registry, 'baseCourses.map(enhanceCourseForV98)'],
  ['package script exists', pkg, 'audit:v96r-v98r-ui-content'],
];

const failures = checks.filter(([_, source, token, negate]) => negate ? source.includes(token) : !source.includes(token));
if (failures.length) {
  console.error('V96R-V98R audit failed:');
  for (const [label, , token, negate] of failures) console.error(`- ${label}: ${negate ? `should not include ${token}` : `missing ${token}`}`);
  process.exit(1);
}
console.log('V96R-V98R UI/content audit passed.');
