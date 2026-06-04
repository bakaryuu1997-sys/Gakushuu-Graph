import { readFileSync } from 'node:fs';
const pythonPanel = readFileSync('src/features/knowledge-graph/components/PythonV84RLessonDeepPolishPanel.tsx', 'utf8');
const fePanel = readFileSync('src/features/knowledge-graph/components/KamokuBV85RTraceBankPanel.tsx', 'utf8');
for (const [name, text] of [['python', pythonPanel], ['fe', fePanel]]) {
  if (!text.includes('useMemo') || !text.includes('useState') || !text.includes('filtered')) throw new Error(`V86R ${name} filter state missing`);
  if (!text.includes('placeholder=')) throw new Error(`V86R ${name} search placeholder missing`);
}
console.log('✁EV86R UI quality audit passed');
