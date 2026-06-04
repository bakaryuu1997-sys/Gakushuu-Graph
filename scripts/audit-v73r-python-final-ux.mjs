import fs from 'node:fs';
const files = {
  suite: 'src/features/knowledge-graph/components/PythonPracticeSuite.tsx',
  tabs: 'src/features/knowledge-graph/components/PythonPracticeTabs.tsx',
  today: 'src/features/knowledge-graph/components/PythonTodayPlan.tsx',
  readiness: 'src/features/knowledge-graph/components/PythonFinalReadinessDashboard.tsx',
  runtime: 'src/features/knowledge-graph/components/PythonRuntimeStatusCard.tsx',
  codeLab: 'src/features/knowledge-graph/components/PythonCodeLab.tsx',
  focus: 'src/features/knowledge-graph/components/PythonFocusMode.tsx',
  tests: 'src/test/v73rPythonFinalUxTabs.test.tsx',
};
const read = (name) => fs.readFileSync(files[name], 'utf8');
const checks = [
  ['practice suite uses tab wrapper', read('suite').includes('PythonPracticeTabs') && read('suite').includes('V73R Python Final UX Tabs')],
  ['tabs include six learning modes', ['Today','Code Lab','Algorithm','FastAPI','Project','Interview'].every((word) => read('tabs').includes(word))],
  ['today plan has daily learning flow', read('today').includes('2 lesson mới') && read('today').includes('review queue') && read('today').includes('1 bước project')],
  ['final readiness dashboard covers six domains', ['Foundation','Data Structure','Algorithm','OOP','FastAPI','Project'].every((word) => read('readiness').includes(word))],
  ['runtime/offline fallback is visible', read('runtime').includes('Offline/static mode') && read('runtime').includes('Pyodide')],
  ['code lab has stronger run and why failed guidance', read('codeLab').includes('V73R Code Lab') && read('codeLab').includes('whyFailed') && read('codeLab').includes('Output / 実行結果')],
  ['focus mode labels V73R', read('focus').includes('V73R Python Final UX Tabs + Today Plan')],
  ['tests cover V73R ux', read('tests').includes('PythonPracticeTabs') && read('tests').includes('PythonRuntimeStatusCard')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`)].join('\n');
fs.writeFileSync('/mnt/data/python-v73r-final-ux-audit.csv', csv);
console.log(`Python V73R final UX audit: ${pass}/${checks.length} checks`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
