import { readFileSync } from 'node:fs';

const pack = readFileSync('src/courses/python/v101EasyLessonPack.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const registry = readFileSync('src/courses/courseRegistry.ts', 'utf8');
const catalog = readFileSync('src/courses/python/catalog.ts', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const required = [
  ['easy pack has builder', pack, 'buildPythonV101EasyLesson'],
  ['easy pack has number lesson', pack, 'Number trong Python'],
  ['easy pack has tuple lesson', pack, 'Tuple: dữ liệu cố định'],
  ['easy pack has dict lesson', pack, 'map key → value'],
  ['easy pack has fastapi lesson', pack, 'route mỏng, schema rõ, service dễ test'],
  ['easy pack has project lesson', pack, 'README và test'],
  ['lesson page renders V101', panel, 'V101R Bài học dễ hiểu'],
  ['lesson page has explanation blocks', panel, 'Giải thích từng ý'],
  ['lesson page has code and trace', panel, 'Code mẫu thật để đọc'],
  ['course registry applies V101', registry, 'enhanceCourseForV101'],
  ['catalog enriches base items', catalog, 'buildPythonV101LessonFields'],
  ['package script exists', pkg, 'audit:v101r-python-easy-lessons'],
];

const genericMarkers = [
  'Đọc đoạn code có ${',
  'Đọc đoạn code có Python Roadmap',
  'đoạn code có Number và dự đoán output',
];

const failures = required.filter(([_, source, token]) => !source.includes(token));
const genericFailures = genericMarkers.filter((marker) => pack.includes(marker) || panel.includes(marker));
if (failures.length || genericFailures.length) {
  console.error('V101R Python easy lessons audit failed:');
  for (const [label, , token] of failures) console.error(`- ${label}: missing ${token}`);
  for (const marker of genericFailures) console.error(`- generic marker still visible in V101 surface: ${marker}`);
  process.exit(1);
}
console.log('V101R Python easy lesson audit passed.');
