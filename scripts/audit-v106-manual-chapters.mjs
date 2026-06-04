import { readFileSync } from 'node:fs';

const source = readFileSync('src/courses/v106ManualChapterPack.ts', 'utf8');
const lessonPage = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const requiredTokens = [
  ['30+ exported chapters', 'v106ManualChapters'],
  ['Python file chapter', 'v106-python-file-pathlib'],
  ['Python error chapter', 'v106-python-error-exception'],
  ['Python pytest chapter', 'v106-python-testing-pytest'],
  ['Python FastAPI schema chapter', 'v106-python-fastapi-schema'],
  ['Python FastAPI DI chapter', 'v106-python-fastapi-di'],
  ['FE DP chapter', 'v106-fe-dp-table'],
  ['FE SQL chapter', 'v106-fe-sql-join'],
  ['FE network subnet chapter', 'v106-fe-network-subnet'],
  ['FE security log chapter', 'v106-fe-security-log'],
  ['AI privacy chapter', 'v106-ai-ethics-privacy'],
  ['AI bias chapter', 'v106-ai-bias-fairness'],
  ['AI law chapter', 'v106-ai-law-copyright'],
  ['AI governance chapter', 'v106-ai-governance-monitoring'],
  ['AI business KPI chapter', 'v106-ai-business-kpi'],
];

const failures = requiredTokens.filter(([_, token]) => !source.includes(token));
if (!lessonPage.includes('v110Chapter') || !lessonPage.includes('V106ManualChapterSection')) {
  failures.push(['lesson detail uses V106/V110 manual chapter loader', 'v110Chapter/V106ManualChapterSection']);
}
if (!pkg.includes('audit:v106-manual-chapters')) {
  failures.push(['npm audit script', 'audit:v106-manual-chapters']);
}
const extensionCount = (source.match(/id: 'v106-/g) || []).length;
if (extensionCount < 23) failures.push(['at least 23 new V106 chapters', String(extensionCount)]);
if (failures.length) {
  console.error('V106 audit failed:');
  for (const [label, token] of failures) console.error(`- ${label}: missing/insufficient ${token}`);
  process.exit(1);
}
console.log(`V106 manual chapter expansion audit passed with ${extensionCount} new V106 chapters.`);
