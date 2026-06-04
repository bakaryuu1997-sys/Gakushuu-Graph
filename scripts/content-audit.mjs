import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const vitestBin = process.platform === 'win32'
  ? resolve('node_modules/.bin/vitest.cmd')
  : resolve('node_modules/.bin/vitest');
const result = spawnSync(vitestBin, [
  'run',
  'src/test/contentAudit.test.ts',
  '--pool=forks',
  '--maxWorkers=1',
  '--fileParallelism=false',
  '--reporter=dot',
], {
  stdio: 'inherit',
  shell: false,
});

process.exit(result.status ?? 1);
