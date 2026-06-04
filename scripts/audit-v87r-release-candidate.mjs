import { existsSync, readFileSync } from 'node:fs';
const notes = 'UPGRADE_NOTES_V84R_TO_V87R.md';
if (!existsSync(notes)) throw new Error('V87R release notes missing');
const text = readFileSync(notes, 'utf8');
for (const token of ['V84R', 'V85R', 'V86R', 'V87R', 'npm install', 'npm run build']) {
  if (!text.includes(token)) throw new Error(`V87R notes missing ${token}`);
}
const pkg = readFileSync('package.json', 'utf8');
for (const token of ['audit:v84r-python-polish','audit:v85r-kamoku-b-trace','audit:v86r-ui-quality','audit:v87r-release-candidate']) {
  if (!pkg.includes(token)) throw new Error(`package.json missing ${token}`);
}
console.log('✅ V87R release candidate audit passed');
