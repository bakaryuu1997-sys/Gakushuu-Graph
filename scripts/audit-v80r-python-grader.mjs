import { readFileSync } from 'node:fs';
const file = readFileSync('src/courses/python/v80rCodeLabGrader.ts', 'utf8');
const codeExercises = readFileSync('src/courses/python/codeExercises.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/PythonV80RGraderPanel.tsx', 'utf8');
const required = ['v80r-ex-bank-account-oop','v80r-ex-group-scores-dict','v80r-ex-top-k-words','v80r-ex-parse-csv-total','v80r-ex-fastapi-error-response','expectedOutputs','gradingChecklistVi'];
for (const token of required) if (!file.includes(token)) throw new Error(`V80R grader missing ${token}`);
if (!codeExercises.includes('pythonV80RGradedExercises')) throw new Error('V80R exercises are not merged into codeExercises');
if (!panel.includes('V80R Python Code Lab Grader')) throw new Error('V80R panel missing heading');
console.log('✁EV80R Python grader audit passed');
