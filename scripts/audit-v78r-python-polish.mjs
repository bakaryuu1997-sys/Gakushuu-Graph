import { readFileSync } from 'node:fs';

const requiredFiles = [
  'src/courses/python/v78rDeepExamples.ts',
  'src/courses/python/v78rFastApiBlueprints.ts',
  'src/courses/python/v78rCodeExercises.ts',
  'src/features/knowledge-graph/components/PythonV78RDeepExamplesPanel.tsx',
  'src/features/knowledge-graph/components/PythonV78RFastApiBlueprintPanel.tsx',
  'src/test/v78rPythonPolish.test.tsx',
];

for (const file of requiredFiles) {
  const text = readFileSync(file, 'utf8');
  if (text.length < 400) throw new Error(`${file} looks too small for V78R polish`);
}

const lessons = readFileSync('src/courses/python/lessons.ts', 'utf8');
if (!lessons.includes('Công thức V78R') || !lessons.includes('V78R thực chiến')) {
  throw new Error('Python lessons do not include V78R practical enrichment markers');
}

const codeExercises = readFileSync('src/courses/python/codeExercises.ts', 'utf8');
if (!codeExercises.includes('pythonCodeExercises.push(...pythonV78RCodeExercises)')) {
  throw new Error('V78R exercises are not appended to the code lab bank');
}

const tabs = readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
if (!tabs.includes('PythonV78RDeepExamplesPanel') || !tabs.includes('PythonV78RFastApiBlueprintPanel')) {
  throw new Error('V78R panels are not connected to Python practice tabs');
}

console.log('V78R Python polish audit passed: deep examples, FastAPI blueprints, code exercises, lessons and tabs are connected.');
