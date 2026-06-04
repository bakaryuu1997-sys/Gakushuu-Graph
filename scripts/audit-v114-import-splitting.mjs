import { readFileSync } from 'node:fs';

const courseLoader = readFileSync('src/courses/courseLoader.ts', 'utf8');
const lessonLoader = readFileSync('src/courses/v114LessonDataLoader.ts', 'utf8');
const nonCore = readFileSync('src/courses/v114NonCoreWrittenLessonPack.ts', 'utf8');
const lessonPage = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const pythonTabs = readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const pythonV100Panel = readFileSync('src/features/knowledge-graph/components/PythonV100RDeepChapterPanel.tsx', 'utf8');
const pythonIndex = readFileSync('src/courses/python/index.ts', 'utf8');
const coverageLoader = readFileSync('src/courses/v113CoverageDataLoader.ts', 'utf8');
const fePractice = readFileSync('src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const checks = [
  ['course loader no longer imports V104 enhancer directly', courseLoader, "import('./v104WrittenLessonPack')", true],
  ['course loader uses V114 non-core enhancer', courseLoader, "import('./v114NonCoreWrittenLessonPack')"],
  ['course loader loads V101 only for python', courseLoader, "course.id === 'python'"],
  ['course loader loads V102 only for FE', courseLoader, "course.id === 'fundamental-info'"],
  ['course loader loads V103 only for AI', courseLoader, "course.id === 'ai-passport'"],
  ['course loader no longer imports combined V102V103 quality', courseLoader, "import('./v102v103LessonQuality')", true],
  ['lesson detail uses V114 data loader', lessonPage, 'loadV114LessonData'],
  ['V114 lesson loader avoids V104 runtime import', lessonLoader, "import('./v104WrittenLessonPack')", true],
  ['V114 lesson loader imports Python V100 only in python branch', lessonLoader, "courseId === 'python'"],
  ['V114 lesson loader no longer dynamically imports V101 pack', lessonLoader, "import('./python/v101EasyLessonPack')", true],
  ['V114 non-core written pack exists', nonCore, 'enhanceCourseForV114NonCore'],
  ['Python tabs lazy load panels', pythonTabs, 'const PythonV100RDeepChapterPanel = lazy'],
  ['Python tabs fallback normal flow', pythonTabs, 'V114 python panel lazy loading fallback'],
  ['Python V100 panel lazy-loads chapter data internally', pythonV100Panel, "import('../../../courses/python/v100rDeepChapterPack')"],
  ['Python index no longer re-exports V100 pack', pythonIndex, 'v100rDeepChapterPack', true],
  ['Coverage loader no longer dynamically imports V106 separately', coverageLoader, "import('./v106ManualChapterPack')", true],
  ['FE practice lazy loads heavy panels', fePractice, 'const KamokuBV79RMasteryPanel = lazy'],
  ['FE practice fallback normal flow', fePractice, 'V114 FE panel lazy loading fallback'],
  ['package exposes V114 audit', pkg, 'audit:v114-import-splitting'],
];

const failures = checks.filter(([_, source, token, negate]) => negate ? source.includes(token) : !source.includes(token));
if (failures.length) {
  console.error('V114 audit failed:');
  for (const [label, , token, negate] of failures) console.error(`- ${label}: ${negate ? `should not include ${token}` : `missing ${token}`}`);
  process.exit(1);
}
console.log('V114 import splitting audit passed.');
