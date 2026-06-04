import { readFileSync } from 'node:fs';

const lessonPage = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const required = [
  ['navigation component', 'function LessonQuickNav'],
  ['navigation aria label', 'V107 lesson section navigation'],
  ['no overlay note', 'no overlay · normal flow'],
  ['dynamic anchor href', "href={`#${prefix}-${key}`}"],
  ['V106 target IDs', "id={anchor('explain')}"],
  ['scroll margin targets', 'scroll-mt-24'],
  ['audit script in package', 'audit:v107-lesson-navigation'],
];

const failures = required.filter(([label, token]) => !(label.includes('package') ? pkg : lessonPage).includes(token));
if (failures.length) {
  console.error('V107 audit failed:');
  for (const [label, token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}

const fixedOverlayTokens = ['fixed top-', 'absolute left-', 'absolute right-'];
const navStart = lessonPage.indexOf('function LessonQuickNav');
const navSource = lessonPage.slice(navStart, lessonPage.indexOf('function V106ManualChapterSection'));
const overlay = fixedOverlayTokens.filter((token) => navSource.includes(token));
if (overlay.length) {
  console.error(`V107 audit failed: navigation uses overlay positioning: ${overlay.join(', ')}`);
  process.exit(1);
}
console.log('V107 lesson navigation polish audit passed.');
