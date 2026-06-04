import fs from 'node:fs';
const code = fs.readFileSync('src/courses/python/codeExercises.ts','utf8');
const visual = fs.readFileSync('src/courses/python/algorithmVisualPatterns.ts','utf8');
const practice = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx','utf8');
const codeLab = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLab.tsx','utf8');
const progress = fs.readFileSync('src/features/knowledge-graph/components/pythonCodeProgress.ts','utf8');
const exerciseCount = (code.match(/id: "py-ex-/g) ?? []).length;
const backendCount = (code.match(/kind: "backend"/g) ?? []).length;
const algorithmCount = (code.match(/kind: "algorithm"/g) ?? []).length;
const visualCount = (visual.match(/id: 'visual-/g) ?? []).length;
const checks = [
  ['code exercises >= 35', exerciseCount >= 35],
  ['algorithm exercises >= 15', algorithmCount >= 15],
  ['FastAPI backend exercises >= 4', backendCount >= 4],
  ['hidden tests exist widely', (code.match(/hiddenTests: \[/g) ?? []).length >= 35],
  ['VI/JA explanations in exercises', code.includes('explanationVi') && code.includes('explanationJa')],
  ['algorithm visual patterns >= 6', visualCount >= 6],
  ['mistake review panel included', practice.includes('PythonMistakeReviewPanel')],
  ['progress dashboard included', practice.includes('PythonExerciseProgressDashboard')],
  ['Pyodide runner retained', codeLab.includes('Run Python tests') && fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLabLogic.ts','utf8').includes('loadPyodide')],
  ['local progress storage', progress.includes('v69r-python-code-progress')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`), `"code exercises",${exerciseCount}`, `"algorithm exercises",${algorithmCount}`, `"backend exercises",${backendCount}`, `"visual patterns",${visualCount}`].join('\n');
fs.writeFileSync('python-v69r-quality-audit.csv', csv);
console.log(`Python V69R quality audit: ${pass}/${checks.length} checks`);
console.log(`Code exercises: ${exerciseCount}`);
console.log(`Algorithm exercises: ${algorithmCount}`);
console.log(`Backend exercises: ${backendCount}`);
console.log(`Visual patterns: ${visualCount}`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
