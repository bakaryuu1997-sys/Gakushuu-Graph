import { readFileSync } from 'node:fs';

const component = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const required = [
  ['uses local reading mode state', "useState<LessonReadingMode>('focus')"],
  ['defines reading mode type', "type LessonReadingMode = 'focus' | 'full' | 'practice'"],
  ['renders V108 toolbar', 'V108R Reading Mode'],
  ['has focus mode label', "label: 'Focus'"],
  ['has full mode label', "label: 'Full'"],
  ['has practice only label', "label: 'Practice only'"],
  ['has practice panel', 'LessonPracticeFocusPanel'],
  ['hides archive unless full', "const showArchive = readingMode === 'full'"],
  ['no overlay wording', 'Không dùng overlay'],
  ['script exists in package', 'audit:v108-lesson-reading-mode'],
];

const failures = required.filter(([label, token]) => {
  const source = label.includes('package') || label.includes('script') ? pkg : component;
  return !source.includes(token);
});

if (failures.length) {
  console.error('V108R audit failed:');
  for (const [label, token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}

console.log('V108R lesson reading mode audit passed.');
