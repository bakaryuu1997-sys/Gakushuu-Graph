import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const isWin = process.platform === 'win32';
const bin = (name) => resolve('node_modules/.bin', `${name}${isWin ? '.cmd' : ''}`);
const steps = [
  ['tsc build', bin('tsc'), ['-b']],
  ['vite build', bin('vite'), ['build']],
  ['vitest release smoke', bin('vitest'), ['run', 'src/test/v76rPythonFinalRelease.test.tsx', 'src/test/v77rPythonFinalContent.test.tsx', '--pool=vmThreads', '--maxWorkers=1', '--fileParallelism=false', '--reporter=dot']],
  ['line audit', 'node', ['scripts/line-audit.mjs']],
  ['content audit fast', 'node', ['scripts/content-audit-fast.mjs']],
  ['AI lesson audit', 'node', ['scripts/audit-ai-passport-lessons.mjs']],
  ['Fundamental Info lesson audit', 'node', ['scripts/audit-fundamental-info-lessons.mjs']],
  ['V64 Kamoku B interactive trainer audit', 'node', ['scripts/audit-v64-kamoku-b-interactive.mjs']],
  ['V79R Kamoku B mastery audit', 'node', ['scripts/audit-v79r-kamoku-b-mastery.mjs']],
  ['V76R Python release audit', 'node', ['scripts/audit-v76r-python-release.mjs']],
  ['V77R Python final content audit', 'node', ['scripts/audit-v77r-python-final-content.mjs']],
];

for (const [label, command, args] of steps) {
  console.log(`\n▶ ${label}`);
  const cmd = isWin && command.endsWith('.cmd') ? `"${command}"` : command;
  const result = spawnSync(cmd, args, { stdio: 'inherit', shell: isWin });
  if (result.status !== 0) {
    console.error(`✁E${label} failed`);
    process.exit(result.status ?? 1);
  }
}
console.log('\n✁Everify passed');
