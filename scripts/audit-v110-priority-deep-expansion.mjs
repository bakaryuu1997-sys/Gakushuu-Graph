import { readFileSync } from 'node:fs';

const pack = readFileSync('src/courses/v110ManualChapterPack.ts', 'utf8');
const detail = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const coverage = readFileSync('src/features/knowledge-graph/components/V109ContentCoverageDashboard.tsx', 'utf8');
const workspace = readFileSync('src/features/knowledge-graph/components/ContentCoverageView.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const requiredTokens = [
  ['async chapter', pack, 'v110-python-async-await-local-api'],
  ['database repository chapter', pack, 'v110-python-fastapi-database-repository'],
  ['auth chapter', pack, 'v110-python-auth-local-only'],
  ['packaging chapter', pack, 'v110-python-packaging-project-structure'],
  ['SQL ACID chapter', pack, 'v110-fe-sql-subquery-acid'],
  ['network troubleshooting chapter', pack, 'v110-fe-network-troubleshooting'],
  ['security countermeasure chapter', pack, 'v110-fe-security-countermeasure'],
  ['AI law chapter', pack, 'v110-ai-law-compliance-japan'],
  ['prompt injection chapter', pack, 'v110-ai-prompt-injection-governance'],
  ['AI monitoring chapter', pack, 'v110-ai-model-monitoring-incident'],
  ['SQL practical chapter', pack, 'v110-sql-practical-window-drill'],
  ['Frontend chapter', pack, 'v110-frontend-state-event-component'],
  ['Linux chapter', pack, 'v110-linux-permission-process-network'],
  ['BrSE chapter', pack, 'v110-brse-requirement-meeting-scenario'],
  ['v110 finder exported', pack, 'findV110ManualChapter'],
  ['lesson detail uses V110 async chapter data', detail, 'v110Chapter'],
  ['lesson detail manual chapter section kept', detail, 'V106ManualChapterSection'],
  ['V109 coverage dashboard exists', coverage, 'V109R Content Coverage QA'],
  ['coverage view renders V109 dashboard', workspace, 'V109ContentCoverageDashboard'],
  ['npm script exists', pkg, 'audit:v110-priority-expansion'],
];

const failures = requiredTokens.filter(([_, source, token]) => !source.includes(token));
if (failures.length) {
  console.error('V110R audit failed:');
  for (const [label, , token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}

const chapterCount = (pack.match(/id: 'v110-/g) || []).length;
if (chapterCount < 14) {
  console.error(`V110R audit failed: expected at least 14 new chapters, found ${chapterCount}`);
  process.exit(1);
}
console.log(`V110R priority deep expansion audit passed with ${chapterCount} new chapters.`);
