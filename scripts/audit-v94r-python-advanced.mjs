import { readFileSync } from 'node:fs';

const data = readFileSync('src/courses/python/v94rAdvancedPython.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/PythonV94RAdvancedPanel.tsx', 'utf8');
const tabs = readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const requiredTracks = ['typing', 'dataclass', 'pathlib', 'logging', 'pytest-fixture', 'fastapi-di'];
const failures = [];
for (const track of requiredTracks) if (!data.includes(`track: '${track}'`)) failures.push(`missing advanced track ${track}`);
for (const token of ['pythonV94RAdvancedTopics', 'PythonV94RAdvancedPanel', 'Practice:', 'Pitfalls']) if (!panel.includes(token) && !data.includes(token)) failures.push(`missing token ${token}`);
if (!tabs.includes('PythonV94RAdvancedPanel')) failures.push('Python tabs do not render V94R panel');
if (!pkg.includes('audit:v94r-python-advanced')) failures.push('package script missing');
if (failures.length) {
  console.error('V94R audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('V94R Python advanced audit passed.');
