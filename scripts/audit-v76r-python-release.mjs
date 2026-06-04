import { existsSync, writeFileSync } from 'node:fs';

const checks = [
  ['PythonLocalBackupPanel exists', existsSync('src/features/knowledge-graph/components/PythonLocalBackupPanel.tsx')],
  ['PythonFinalQaPanel exists', existsSync('src/features/knowledge-graph/components/PythonFinalQaPanel.tsx')],
  ['Practice tabs include backup', /PythonLocalBackupPanel/.test(await read('src/features/knowledge-graph/components/PythonPracticeTabs.tsx'))],
  ['Practice tabs include final QA', /PythonFinalQaPanel/.test(await read('src/features/knowledge-graph/components/PythonPracticeTabs.tsx'))],
  ['Code Lab V76R label', /V76R/.test(await read('src/features/knowledge-graph/components/PythonCodeLab.tsx'))],
  ['Local backup version marker', /v76r-python-local-backup/.test(await read('src/features/knowledge-graph/components/PythonLocalBackupPanel.tsx'))],
  ['Final QA mobile checklist', /Mobile/.test(await read('src/features/knowledge-graph/components/PythonFinalQaPanel.tsx'))],
  ['Runtime fallback card retained', existsSync('src/features/knowledge-graph/components/PythonRuntimeStatusCard.tsx')],
];

async function read(path) {
  const { readFile } = await import('node:fs/promises');
  return readFile(path, 'utf8');
}

const rows = ['check,passed', ...checks.map(([label, pass]) => `${JSON.stringify(label)},${pass ? 'PASS' : 'FAIL'}`)];
writeFileSync('python-v76r-release-audit.csv', rows.join('\n'));
const failed = checks.filter(([, pass]) => !pass);
if (failed.length) {
  console.error('V76R Python release audit failed');
  for (const [label] of failed) console.error(`- ${label}`);
  process.exit(1);
}
console.log(`V76R Python release audit passed: ${checks.length}/${checks.length} checks`);
