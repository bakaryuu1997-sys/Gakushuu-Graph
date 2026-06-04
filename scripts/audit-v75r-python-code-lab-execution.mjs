import fs from 'node:fs';
const codeLab = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLab.tsx', 'utf8');
const logic = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLabLogic.ts', 'utf8');
const quality = fs.readFileSync('src/features/knowledge-graph/components/pythonExerciseQuality.ts', 'utf8');
const output = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLabOutputPanel.tsx', 'utf8');
const tabs = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const suite = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx', 'utf8');
const focus = fs.readFileSync('src/features/knowledge-graph/components/PythonFocusMode.tsx', 'utf8');
const test = fs.readFileSync('src/test/v75rPythonCodeLabExecution.test.tsx', 'utf8');
const checks = [
  ['Code Lab has visible and all test buttons', codeLab.includes('Run visible tests') && codeLab.includes('Run all tests')],
  ['Output panel distinguishes passed/failed/runtime unavailable', output.includes('Runtime unavailable') && output.includes('Needs fix') && output.includes('Passed / 合格')],
  ['Runner supports visible/all mode', logic.includes("mode: 'visible' | 'all'") && logic.includes("mode === 'visible'")],
  ['Exercise quality audit checks starter/test/hints', quality.includes('inspectPythonExerciseQuality') && quality.includes('testsCallStarterFunction') && quality.includes('hasBilingualHelp')],
  ['Learning sets include beginner/data/algorithm/fastapi/project prep', ['beginner','data','algorithm','fastapi','project-prep'].every((word) => quality.includes(word))],
  ['Tabs expose set navigator and QA panel', tabs.includes('PythonExerciseSetNavigator') && tabs.includes('PythonExerciseQualityPanel')],
  ['Suite and focus label V75R', suite.includes('V75R Python Code Lab Execution Polish') && focus.includes('V75R Python Code Lab Execution Polish + QA')],
  ['Tests cover V75R execution polish', test.includes('PythonCodeLabOutputPanel') && test.includes('summarizePythonExerciseQuality')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`)].join('\n');
fs.writeFileSync('python-v75r-code-lab-execution-audit.csv', csv);
console.log(`Python V75R code lab execution audit: ${pass}/${checks.length} checks`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
