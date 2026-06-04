import fs from 'node:fs';
const catalog = fs.readFileSync('src/courses/python/catalog.ts','utf8');
const code = fs.readFileSync('src/courses/python/codeExercises.ts','utf8');
const components = [
  'src/features/knowledge-graph/components/PythonFocusMode.tsx',
  'src/features/knowledge-graph/components/PythonCodeLab.tsx',
  'src/features/knowledge-graph/components/PythonPracticeSuite.tsx',
];
const nodeCount = (catalog.match(/"id":/g) ?? []).length;
const exerciseCount = (code.match(/id: ['\"]py-ex-/g) ?? []).length;
const checks = [
  ['python course folder exists', fs.existsSync('src/courses/python/index.ts')],
  ['python lessons >= 100', nodeCount >= 100],
  ['code exercises >= 10', exerciseCount >= 10],
  ['FastAPI-only content exists', catalog.includes('FastAPI') && !catalog.includes('Flask')],
  ['code lab exists', fs.existsSync('src/features/knowledge-graph/components/PythonCodeLab.tsx')],
  ['code lab can run tests', fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLab.tsx','utf8').includes('Run Python tests')],
  ['VI/JA explanations', catalog.includes('definitionVi') && catalog.includes('definitionJa')],
  ['workspace routes Python start/practice', fs.readFileSync('src/features/knowledge-graph/components/LessonWorkspace.tsx','utf8').includes('PythonFocusMode')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`), `"python nodes",${nodeCount}`, `"code exercises",${exerciseCount}`].join('\n');
fs.writeFileSync('/mnt/data/python-v68r-rebuild-audit.csv', csv);
console.log(`Python V68R rebuild audit: ${pass}/${checks.length} checks`);
console.log(`Python nodes: ${nodeCount}`);
console.log(`Code exercises: ${exerciseCount}`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
