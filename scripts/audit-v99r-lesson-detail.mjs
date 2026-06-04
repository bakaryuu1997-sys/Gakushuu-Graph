import { readFileSync } from 'node:fs';

const files = {
  detail: readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8'),
  panel: readFileSync('src/features/knowledge-graph/components/LessonPanel.tsx', 'utf8'),
  blueprint: readFileSync('src/courses/v99LessonBlueprint.ts', 'utf8'),
  quality: readFileSync('src/courses/v99LessonQuality.ts', 'utf8'),
  registry: readFileSync('src/courses/courseRegistry.ts', 'utf8'),
  fullscreen: readFileSync('src/components/map/FullscreenMap.tsx', 'utf8'),
  graphMap: readFileSync('src/components/map/GraphMapPage.tsx', 'utf8'),
  pkg: readFileSync('package.json', 'utf8'),
};

const checks = [
  ['lesson detail concept block', files.detail, '1. Khái niệm'],
  ['lesson detail example block', files.detail, '2. Ví dụ'],
  ['lesson detail trace block', files.detail, '3. Trace từng bước'],
  ['lesson detail exercise block', files.detail, '4. Bài tập nhỏ'],
  ['lesson detail expected output', files.detail, 'Expected output / test case'],
  ['lesson detail mini quiz', files.detail, '5. Quiz nhỏ'],
  ['lesson panel renders V99 detail', files.panel, 'V99LessonDetailPage'],
  ['blueprint has Python FastAPI content', files.blueprint, 'FastAPI route mỏng + service dễ test'],
  ['blueprint has Python OOP content', files.blueprint, 'Object có state riêng và invariant'],
  ['blueprint has FE SQL content', files.blueprint, 'SQL trace: WHERE trước GROUP BY'],
  ['blueprint has FE 科目B content', files.blueprint, 'Pseudo-code trace: maxGap'],
  ['blueprint has AI RAG content', files.blueprint, 'RAG mini flow'],
  ['quality enhancer writes all required blocks', files.quality, 'Khái niệm'],
  ['quality enhancer writes expected output', files.quality, 'Expected output'],
  ['course registry applies V99 enhancer', files.registry, 'map(enhanceCourseForV99)'],
  ['fullscreen controls outside graph', files.fullscreen, 'Fullscreen map controls'],
  ['fullscreen removes swimlane overlay', files.fullscreen, 'ArchitectureSwimlanes', true],
  ['graph map removes swimlane overlay', files.graphMap, 'ArchitectureSwimlanes', true],
  ['package script', files.pkg, 'audit:v99r-lesson-detail'],
];

const failures = checks.filter(([_, source, token, negate]) => negate ? source.includes(token) : !source.includes(token));
if (failures.length) {
  console.error('V99R audit failed:');
  for (const [label, , token, negate] of failures) {
    console.error(`- ${label}: ${negate ? `should not include ${token}` : `missing ${token}`}`);
  }
  process.exit(1);
}
console.log('V99R lesson detail/content/layout audit passed.');
