import fs from 'node:fs';
import path from 'node:path';

const checks = [
  ['local-release-panel', 'src/features/knowledge-graph/components/LocalReleasePanel.tsx', ['V56 Local Release Candidate', 'Export progress', 'Import backup', 'Reset local progress', 'localStorage']],
  ['workspace-props-local-actions', 'src/features/knowledge-graph/components/LessonWorkspaceTypes.ts', ['onExportProgress', 'onImportProgress', 'onResetProgress']],
  ['focus-mode-local-release', 'src/features/knowledge-graph/components/AiPassportFocusMode.tsx', ['LocalReleasePanel', 'SmartDailyStudyPlan']],
  ['dashboard-local-release', 'src/features/knowledge-graph/components/WorkspaceDashboard.tsx', ['LocalReleasePanel', 'VisualQaPanel']],
  ['visual-qa-v56', 'src/features/knowledge-graph/components/VisualQaPanel.tsx', ['V56 Visual QA', 'Local-only release']],
  ['verify-includes-v56', 'package.json', ['audit:v56-release', 'node scripts/verify.mjs']],
];

const rows = [];
let failures = 0;
for (const [name, file, tokens] of checks) {
  const fullPath = path.join(process.cwd(), file);
  const content = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
  const missing = tokens.filter((token) => !content.includes(token));
  const status = missing.length ? 'fail' : 'pass';
  if (missing.length) failures += 1;
  rows.push({ check: name, status, missing: missing.join('|') });
}

const csv = ['check,status,missing', ...rows.map((row) => `${row.check},${row.status},"${row.missing}"`)].join('\n');
fs.writeFileSync('ai-passport-v56-release-audit.csv', `${csv}\n`);

if (failures) {
  console.error(`V56 release audit failed: ${failures}/${checks.length}`);
  process.exit(1);
}
console.log(`V56 release audit passed: ${checks.length}/${checks.length} checks`);
process.exit(0);
