import { existsSync, readFileSync } from 'node:fs';
const notes = 'UPGRADE_NOTES_V80R_TO_V83R.md';
if (!existsSync(notes)) throw new Error('Missing release notes');
const text = readFileSync(notes, 'utf8');
for (const token of ['V80R','V81R','V82R','V83R','npm run build','Local run']) if (!text.includes(token)) throw new Error(`Release notes missing ${token}`);
const pkg = readFileSync('package.json', 'utf8');
for (const script of ['audit:v80r-python-grader','audit:v81r-mixed-mock','audit:v83r-release-cleanup']) if (!pkg.includes(script)) throw new Error(`Missing package script ${script}`);
console.log('✅ V83R release cleanup audit passed');
