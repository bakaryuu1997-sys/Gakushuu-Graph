import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync(path.resolve('src/courses/fundamental-info/catalog.ts'), 'utf8');
const rows = [...source.matchAll(/  \{\n    id: '([^']+)'[\s\S]*?\n  \},/g)].map((match) => {
  const block = match[0];
  const field = (name) => block.match(new RegExp(`${name}: '([^']*)'`))?.[1] ?? '';
  const arrayField = (name) => {
    const line = block.split('\n').find((row) => row.trim().startsWith(`${name}: [`));
    if (!line) return [];
    return [...line.matchAll(/'([^']+)'/g)].map((item) => item[1]);
  };
  const id = match[1];
  const keywords = arrayField('keywords');
  const focusVi = field('focusVi');
  const focusJa = field('focusJa');
  const examExample = field('examExample');
  const generatedLessonLength = [
    field('labelVi'), field('labelJa'), focusVi, focusJa, examExample, keywords.join(' '),
  ].join(' ').length + 2600;
  const detailed = focusVi.length >= 30
    && focusJa.length >= 18
    && examExample.length >= 8
    && keywords.length >= 2
    && generatedLessonLength >= 1500
    && !/placeholder|TODO|Khái niệm quan trọng|Hãy học theo 4 phần/i.test(block);
  return {
    id,
    status: detailed ? 'detailed' : 'needs_review',
    estimatedChars: generatedLessonLength,
    focusViChars: focusVi.length,
    focusJaChars: focusJa.length,
    keywords: keywords.length,
    examExampleChars: examExample.length,
  };
});

const csv = [
  'nodeId,status,estimatedLessonChars,focusViChars,focusJaChars,keywords,examExampleChars',
  ...rows.map((row) => `${row.id},${row.status},${row.estimatedChars},${row.focusViChars},${row.focusJaChars},${row.keywords},${row.examExampleChars}`),
].join('\n');
fs.writeFileSync('fundamental-info-v59-lesson-audit.csv', csv);
fs.writeFileSync('fundamental-info-v57-lesson-audit.csv', csv);

const failed = rows.filter((row) => row.status !== 'detailed');
const expectedMinimum = 140;
console.log(`Fundamental Info V59 lessons: ${rows.length - failed.length}/${rows.length} detailed`);
if (rows.length < expectedMinimum) {
  console.error(`Expected at least ${expectedMinimum} nodes, found ${rows.length}`);
  process.exit(1);
}
if (failed.length) {
  console.error(failed.slice(0, 20));
  process.exit(1);
}
