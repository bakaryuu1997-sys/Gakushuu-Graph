import fs from 'node:fs';
import path from 'node:path';

const practiceSource = fs.readFileSync(path.resolve('src/courses/fundamental-info/practice.ts'), 'utf8');
const workspaceSource = fs.readFileSync(path.resolve('src/features/knowledge-graph/components/LessonWorkspace.tsx'), 'utf8');
const componentFiles = [
  'src/features/knowledge-graph/components/FundamentalInfoFocusMode.tsx',
  'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  'src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx',
];

const taskIds = [...practiceSource.matchAll(/id: '([^']+)'/g)].map((m) => m[1]);
const kinds = ['pseudo-code', 'sql', 'subnet'];
const rows = kinds.map((kind) => ({ kind, count: (practiceSource.match(new RegExp(`kind: '${kind}'`, 'g')) ?? []).length }));
const checks = [
  { name: 'practice_tasks_at_least_9', pass: taskIds.length >= 9, value: taskIds.length },
  ...rows.map((row) => ({ name: `has_${row.kind}_tasks`, pass: row.count >= 3, value: row.count })),
  { name: 'fundamental_start_route', pass: workspaceSource.includes('FundamentalInfoFocusMode') && workspaceSource.includes('activeView === "start" && props.courseTitle.includes("基本情報")'), value: 'LessonWorkspace' },
  { name: 'fundamental_session_route', pass: workspaceSource.includes('FundamentalInfoExamSimulator') && workspaceSource.includes('activeView === "session" && props.courseTitle.includes("基本情報")'), value: 'LessonWorkspace' },
  { name: 'fundamental_practice_route', pass: workspaceSource.includes('FundamentalInfoPracticeDrills') && workspaceSource.includes('activeView === "practice" && props.courseTitle.includes("基本情報")'), value: 'LessonWorkspace' },
  ...componentFiles.map((file) => ({ name: `component_${path.basename(file)}`, pass: fs.existsSync(path.resolve(file)), value: file })),
];

const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v58-practice-audit.csv', csv);
const failed = checks.filter((check) => !check.pass);
console.log(`Fundamental Info V58 practice audit: ${checks.length - failed.length}/${checks.length} checks passed`);
if (failed.length) {
  console.error(failed);
  process.exit(1);
}
