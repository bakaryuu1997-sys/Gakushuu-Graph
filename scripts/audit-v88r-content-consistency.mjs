import { readFileSync } from 'node:fs';
const release = readFileSync('src/courses/release/v88rContentConsistency.ts', 'utf8');
const workspace = readFileSync('src/features/knowledge-graph/components/WorkspaceDashboard.tsx', 'utf8');
const required = ['v88-python-nodes', 'v88-fe-kamoku-b', 'v88-ai-passport', 'ReleaseUxV91RPanel'];
const missing = required.filter((token) => !(release + workspace).includes(token));
if (missing.length) throw new Error(`V88R consistency audit missing: ${missing.join(', ')}`);
console.log('V88R content consistency audit pass');
