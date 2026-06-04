import { readFileSync } from 'node:fs';

const lessonPanel = readFileSync('src/features/knowledge-graph/components/LessonPanel.tsx', 'utf8');
const workspace = readFileSync('src/features/knowledge-graph/components/LessonWorkspace.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const checks = [
  ['LessonPanel imports lazy', lessonPanel, 'lazy, Suspense, useState'],
  ['V99 lesson detail is lazy imported', lessonPanel, 'import("./V99LessonDetailPage")'],
  ['Lesson detail fallback exists', lessonPanel, 'V111 lesson detail lazy loading fallback'],
  ['LessonWorkspace imports lazy and Suspense', workspace, 'lazy, Suspense, type ReactNode'],
  ['ContentCoverageView is lazy imported', workspace, 'import("./ContentCoverageView")'],
  ['Coverage route uses LazyView', workspace, '<LazyView><ContentCoverage {...props} /></LazyView>'],
  ['package has V111 audit script', pkg, 'audit:v111-code-splitting'],
];

const failures = checks.filter(([_, source, token]) => !source.includes(token));
if (failures.length) {
  console.error('V111 audit failed:');
  for (const [label, , token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}
console.log('V111 code splitting audit passed.');
