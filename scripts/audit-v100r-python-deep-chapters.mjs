import { readFileSync } from 'node:fs';

const data = readFileSync('src/courses/python/v100rDeepChapterPack.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/PythonV100RDeepChapterPanel.tsx', 'utf8');
const v99 = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const tabs = readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const requiredDataTokens = [
  'foundation',
  'collections',
  'functions',
  'oop',
  'files',
  'errors-testing',
  'algorithms',
  'fastapi',
  'projects',
  'conceptVi',
  'traceVi',
  'exerciseVi',
  'expectedOutput',
  'miniQuiz',
  'commonMistakesVi',
  'findPythonV100DeepChapterForNode',
];

const failures = [];
for (const token of requiredDataTokens) {
  if (!data.includes(token)) failures.push(`data missing ${token}`);
}

const chapterCount = (data.match(/id: 'v100-/g) ?? []).length;
if (chapterCount < 9) failures.push(`expected at least 9 deep chapters, found ${chapterCount}`);

for (const token of ['PythonV100RDeepChapterPanel', 'Code + trace + bài tập', 'Search chapter / code']) {
  if (!panel.includes(token)) failures.push(`panel missing ${token}`);
}

for (const token of ['findPythonV100DeepChapterForNode', 'V100R Python deep chapter']) {
  if (!v99.includes(token)) failures.push(`lesson detail missing ${token}`);
}

if (!tabs.includes('PythonV100RDeepChapterPanel')) failures.push('practice tabs do not render V100 panel');
if (!pkg.includes('audit:v100r-python-deep-chapters')) failures.push('package script missing');

if (failures.length) {
  console.error('V100R audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('V100R Python deep chapter audit passed.');
