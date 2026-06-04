import fs from 'node:fs';
import path from 'node:path';

const weakLessonIds = [
  'license-ai', 'ai-project-flow', 'ai-stakeholder', 'classification-ai', 'cnn-ai',
  'computer-vision-ai', 'customer-churn-ai', 'data-preprocessing-ai', 'education-ai',
  'few-shot-ai', 'finance-ai', 'human-in-the-loop', 'manufacturing-ai', 'marketing-ai',
  'medical-ai', 'ocr-ai', 'public-sector-ai', 'regression-ai', 'semantic-search-ai',
  'supervised-ai', 'underfitting-ai', 'unsupervised-ai', 'ai-audit-log',
  'ai-energy-consumption', 'ai-environmental-impact', 'cloud-gpu-ai', 'edge-device-ai',
  'gpu-ai', 'on-device-ai',
];

const lessonFiles = [
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.ml.ts',
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.business.ts',
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.infra.ts',
];
const source = lessonFiles.map((file) => fs.readFileSync(path.resolve(file), 'utf8')).join('\n');
const rows = weakLessonIds.map((id) => {
  const start = source.indexOf(`nodeId: '${id}'`);
  if (start < 0) return { id, status: 'missing', chars: 0, viBullets: 0, jaBullets: 0 };
  const end = source.indexOf("\n  {\n    nodeId:", start + 1);
  const block = source.slice(start, end > -1 ? end : source.length);
  const chars = block.length;
  const viBullets = (block.match(/examPatternsVi: \[[\s\S]*?\]/)?.[0].match(/'/g)?.length ?? 0) / 2;
  const jaBullets = (block.match(/examPatternsJa: \[[\s\S]*?\]/)?.[0].match(/'/g)?.length ?? 0) / 2;
  const mistakeViBullets = (block.match(/commonMistakesVi: \[[\s\S]*?\]/)?.[0].match(/'/g)?.length ?? 0) / 2;
  const mistakeJaBullets = (block.match(/commonMistakesJa: \[[\s\S]*?\]/)?.[0].match(/'/g)?.length ?? 0) / 2;
  const genericSignals = ['Khái niệm AI Passport cần hiểu', 'Hãy học theo 4 phần', 'placeholder', 'TODO'];
  const generic = genericSignals.some((signal) => block.includes(signal));
  return {
    id,
    status: chars >= 1100 && viBullets >= 3 && jaBullets >= 3 && mistakeViBullets >= 3 && mistakeJaBullets >= 3 && !generic ? 'detailed' : 'needs_review',
    chars,
    viBullets,
    jaBullets,
    mistakeViBullets,
    mistakeJaBullets,
  };
});

const out = [
  'nodeId,status,chars,examPatternsVi,examPatternsJa,commonMistakesVi,commonMistakesJa',
  ...rows.map((r) => `${r.id},${r.status},${r.chars},${r.viBullets},${r.jaBullets},${r.mistakeViBullets},${r.mistakeJaBullets}`),
].join('\n');
fs.writeFileSync('ai-passport-v52-lesson-audit.csv', out);
const failed = rows.filter((r) => r.status !== 'detailed');
console.log(`V52 beginner lesson overrides: ${rows.length - failed.length}/${rows.length} detailed`);
if (failed.length) {
  console.error(failed);
  process.exit(1);
}
process.exit(0);
