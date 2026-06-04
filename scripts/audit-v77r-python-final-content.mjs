import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const pythonLessons = read('src/courses/python/lessons.ts');
const catalog = read('src/courses/python/catalog.ts');
const dashboard = read('src/features/knowledge-graph/components/WorkspaceDashboard.tsx');
const courseCompletion = read('src/features/knowledge-graph/components/CourseCompletionDashboard.tsx');
const releaseNotes = read('src/features/knowledge-graph/components/ReleaseNotesV77R.tsx');

const lessonCount = (catalog.match(/"id":\s*"/g) ?? []).length;
const checks = [
  ['Python catalog has at least 100 lessons/nodes', lessonCount >= 100],
  ['Python lessons are enriched from catalog', /codeExampleFor/.test(pythonLessons) && /pitfallFor/.test(pythonLessons) && /nextActionFor/.test(pythonLessons)],
  ['Python lessons include edge case/test wording', /edge case|test biên|boundary/.test(pythonLessons)],
  ['Python lessons include FastAPI specific QA', /Bẫy FastAPI/.test(pythonLessons)],
  ['Python lessons include OOP specific QA', /Bẫy OOP/.test(pythonLessons)],
  ['Python lessons include algorithm specific QA', /Bẫy thuật toán/.test(pythonLessons)],
  ['Release notes component exists', existsSync('src/features/knowledge-graph/components/ReleaseNotesV77R.tsx')],
  ['Release notes mention AI Passport complete local', /AI Passport[\s\S]*complete local/.test(releaseNotes)],
  ['Release notes mention 基本惁E�� complete local + 科目B', /基本惁E��[\s\S]*complete local \+ 科目B/.test(releaseNotes)],
  ['Release notes mention Python code lab + FastAPI + project', /Python[\s\S]*code lab \+ FastAPI \+ project/.test(releaseNotes)],
  ['Course completion dashboard exists', existsSync('src/features/knowledge-graph/components/CourseCompletionDashboard.tsx')],
  ['Course completion dashboard includes three readiness courses', /ai-passport/.test(courseCompletion) && /fundamental-info/.test(courseCompletion) && /python/.test(courseCompletion)],
  ['Dashboard renders V77R release notes', /ReleaseNotesV77R/.test(dashboard)],
  ['Dashboard renders course completion dashboard', /CourseCompletionDashboard/.test(dashboard)],
];

const rows = ['check,passed', ...checks.map(([label, pass]) => `${JSON.stringify(label)},${pass ? 'PASS' : 'FAIL'}`)];
writeFileSync('python-v77r-release-notes-audit.csv', rows.join('\n'));
const failed = checks.filter(([, pass]) => !pass);
if (failed.length) {
  console.error('V77R Python final content audit failed');
  for (const [label] of failed) console.error(`- ${label}`);
  process.exit(1);
}
console.log(`V77R Python final content audit passed: ${checks.length}/${checks.length} checks; python nodes=${lessonCount}`);
