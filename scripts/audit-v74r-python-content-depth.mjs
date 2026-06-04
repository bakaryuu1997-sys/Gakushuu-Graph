import fs from 'node:fs';
const code = fs.readFileSync('src/courses/python/codeExercises.ts', 'utf8');
const tabs = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const suite = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx', 'utf8');
const focus = fs.readFileSync('src/features/knowledge-graph/components/PythonFocusMode.tsx', 'utf8');
const why = fs.readFileSync('src/features/knowledge-graph/components/PythonWhyThisMattersPanel.tsx', 'utf8');
const map = fs.readFileSync('src/features/knowledge-graph/components/PythonRealWorldExerciseMap.tsx', 'utf8');
const test = fs.readFileSync('src/test/v74rPythonContentDepth.test.tsx', 'utf8');
const exerciseIds = [...code.matchAll(/id["']?:\s*["']py-ex-/g)].length;
const backendCount = [...code.matchAll(/kind["']?:\s*["']backend["']/g)].length;
const fileCount = [...code.matchAll(/kind["']?:\s*["']file["']/g)].length;
const hiddenCount = [...code.matchAll(/hiddenTests["']?:\s*\[[^\]]+\]/g)].length;
const checks = [
  ['60+ Python code exercises', exerciseIds >= 60],
  ['8+ FastAPI/backend exercises', backendCount >= 8],
  ['4+ file/data practical exercises', fileCount >= 4],
  ['most exercises include hidden tests', hiddenCount >= 50],
  ['why-this-matters panel explains AI/backend/automation/algorithm', ['AI / data work','Backend / FastAPI','Automation / 仕亁E,'Algorithm thinking'].every((word) => why.includes(word))],
  ['real-world exercise map is visible in Code tab', tabs.includes('PythonRealWorldExerciseMap') && map.includes('V74R Exercise map')],
  ['today tab includes why-this-matters panel', tabs.includes('PythonWhyThisMattersPanel')],
  ['suite and focus label V74R', suite.includes('V74R Python Final Content Depth') && focus.includes('V74R Python Final Content Depth + Real Exercises')],
  ['tests cover V74R content depth', test.includes('60+') && test.includes('PythonWhyThisMattersPanel')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`)].join('\n');
fs.writeFileSync('python-v74r-content-depth-audit.csv', csv);
console.log(`Python V74R content depth audit: ${pass}/${checks.length} checks`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
