import { readFileSync } from 'node:fs';
const data = readFileSync('src/courses/release/v91rReleaseUx.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/ReleaseUxV91RPanel.tsx', 'utf8');
const notes = readFileSync('UPGRADE_NOTES_V88R_TO_V91R.md', 'utf8');
const required = ['V88R-V91R', 'v91rSevenDayRoute', 'V92R+', 'Release dashboard', 'no timer'];
const missing = required.filter((token) => !(data + panel + notes).includes(token));
if (missing.length) throw new Error(`V91R release UX audit missing: ${missing.join(', ')}`);
console.log('V91R release UX audit pass');
