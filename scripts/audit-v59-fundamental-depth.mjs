import fs from 'node:fs';
import path from 'node:path';

const catalog = fs.readFileSync(path.resolve('src/courses/fundamental-info/catalog.ts'), 'utf8');
const practice = fs.readFileSync(path.resolve('src/courses/fundamental-info/practice.ts'), 'utf8');
const studyPath = fs.readFileSync(path.resolve('src/courses/fundamental-info/studyPath.ts'), 'utf8');

const nodeCount = (catalog.match(/\n    id: '/g) ?? []).length;
const phaseCount = new Set([...catalog.matchAll(/phase: '([^']+)'/g)].map((m) => m[1])).size;
const practiceCount = (practice.match(/\n    id: 'fe-/g) ?? []).length;
const hasDynamicPath = studyPath.includes('fundamentalInfoCatalog.filter') && studyPath.includes('phaseMeta');
const hasLessonFactory = catalog.includes('makeCatalogItem') && catalog.includes('examPatternsVi') && catalog.includes('commonMistakesJa');
const hasLongFormGuidance = catalog.includes('Dạng 5') && catalog.includes('形弁E') && catalog.includes('30 giây');

const checks = [
  ['nodeCount>=140', nodeCount >= 140, nodeCount],
  ['phaseCount>=8', phaseCount >= 8, phaseCount],
  ['practiceCount>=18', practiceCount >= 18, practiceCount],
  ['dynamicStudyPath', hasDynamicPath, hasDynamicPath],
  ['lessonFactoryDetailed', hasLessonFactory, hasLessonFactory],
  ['longFormBeginnerGuidance', hasLongFormGuidance, hasLongFormGuidance],
];

const csv = ['check,status,value', ...checks.map(([name, ok, value]) => `${name},${ok ? 'pass' : 'fail'},${String(value)}`)].join('\n');
fs.writeFileSync('fundamental-info-v59-depth-audit.csv', csv);
checks.forEach(([name, ok, value]) => console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: ${value}`));
if (checks.some(([, ok]) => !ok)) process.exit(1);
