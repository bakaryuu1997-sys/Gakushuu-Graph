import { readFileSync } from 'node:fs';

const pack = readFileSync('src/courses/v105ManualChapterPack.ts', 'utf8');
const detail = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const requiredTokens = [
  ['python foundation chapter', 'Python Foundation: biến, kiểu dữ liệu'],
  ['python collections chapter', 'Python Foundation: list, tuple, dict, set'],
  ['python oop chapter', 'Python OOP: class không phải cú pháp khó'],
  ['python algorithm chapter', 'Python Algorithm: học bằng trace'],
  ['FE array trace chapter', '基本惁E�� 科目B: trace mảng'],
  ['FE stack queue chapter', '基本惁E�� 科目B: stack, queue'],
  ['AI ML case study', 'AI Passport Case Study: ML không phải phép màu'],
  ['AI GenAI RAG case study', 'AI Passport Case Study: GenAI/LLM'],
  ['has why it matters', 'whyItMattersVi'],
  ['has walkthrough', 'walkthroughVi'],
  ['has mistakes', 'mistakesVi'],
  ['has checklist', 'studyChecklistVi'],
];

const failures = requiredTokens.filter(([_, token]) => !pack.includes(token));
if (!detail.includes('V106ManualChapterSection') || !detail.includes('V105R Manual Chapter')) {
  failures.push(['lesson detail integration', 'V106ManualChapterSection/V105R Manual Chapter']);
}
if (!pkg.includes('audit:v105-manual-chapters')) {
  failures.push(['package script', 'audit:v105-manual-chapters']);
}

if (failures.length) {
  console.error('V105R audit failed:');
  for (const [label, token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}

const chapterCount = (pack.match(/id: 'v105-/g) ?? []).length;
if (chapterCount < 8) {
  console.error(`V105R audit failed: expected at least 8 manual chapters, found ${chapterCount}`);
  process.exit(1);
}

console.log(`V105R manual chapter expansion audit passed with ${chapterCount} chapters.`);
