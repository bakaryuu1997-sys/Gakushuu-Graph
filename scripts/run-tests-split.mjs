import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
const files = readdirSync('src/test').filter((name) => name.endsWith('.ts')).sort().map((name) => join('src/test', name));
for (const [index, file] of files.entries()) {
  console.log(`\n[test ${index + 1}/${files.length}] ${file}`);
  const result = spawnSync('npx', ['vitest', 'run', file, '--pool=threads', '--maxWorkers=1'], { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
