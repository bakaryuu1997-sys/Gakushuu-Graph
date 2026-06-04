import { readFileSync } from 'node:fs';

const loader = readFileSync('src/courses/courseLoader.ts', 'utf8');
const app = readFileSync('src/App.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const forbiddenStaticImports = [
  "import { aiPassportCourse }",
  "import { fundamentalInfoCourse }",
  "import { pythonCourse }",
  "import { enhanceCourseForV98 }",
  "import { enhanceCourseForV99 }",
  "import { enhanceCourseForV101 }",
  "import { enhanceCourseForV102V103 }",
  "import { enhanceCourseForV104 }",
];

const failures = [];
for (const token of forbiddenStaticImports) {
  if (loader.includes(token)) failures.push(`courseLoader should not statically import ${token}`);
}

const required = [
  [loader, "import('./python')", 'python dynamic course import'],
  [loader, "import('./ai-passport')", 'ai-passport dynamic course import'],
  [loader, "import('./v114NonCoreWrittenLessonPack')", 'dynamic non-core written lesson enhancer import'],
  [loader, 'Promise.all', 'parallel dynamic enhancer loading'],
  [loader, 'courseSummaries', 'lightweight course summaries remain available'],
  [app, 'loadCourseById(courseId)', 'App loads course through loader'],
  [app, 'Đang tải course data theo lazy loading', 'user-facing lazy loading fallback'],
  [pkg, 'audit:v112-course-lazy-loading', 'npm audit script'],
];

for (const [source, token, label] of required) {
  if (!source.includes(token)) failures.push(`missing ${label}: ${token}`);
}

if (failures.length) {
  console.error('V112R audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('V112R course data lazy loading audit passed.');
