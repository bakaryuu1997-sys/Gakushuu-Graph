import { readFileSync } from 'node:fs';

const detail = readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8');
const loader = readFileSync('src/courses/v114LessonDataLoader.ts', 'utf8');
const pkg = readFileSync('package.json', 'utf8');
const coverage = readFileSync('src/features/knowledge-graph/components/V109ContentCoverageDashboard.tsx', 'utf8');
const coverageLoader = readFileSync('src/courses/v113CoverageDataLoader.ts', 'utf8');

const required = [
  ['lesson detail uses V114 loader', detail, 'loadV114LessonData'],
  ['lesson detail has lazy loading card', detail, 'V114LessonDataLoadingCard'],
  ['loader dynamically imports non-core written pack', loader, "import('./v114NonCoreWrittenLessonPack')"],
  ['loader dynamically imports V110 pack', loader, "import('./v110ManualChapterPack')"],
  ['loader dynamically imports Python V100 pack', loader, "import('./python/v100rDeepChapterPack')"],
  ['loader dynamically imports FE V102 pack', loader, "import('./fundamental-info/v102EasyLessonPack')"],
  ['loader dynamically imports AI V103 pack', loader, "import('./ai-passport/v103EasyLessonPack')"],
  ['coverage dashboard uses V113 loader', coverage, 'loadV113CoverageData'],
    ['coverage loader dynamically imports V110 pack', coverageLoader, "import('./v110ManualChapterPack')"],
  ['package exposes V113 audit', pkg, 'audit:v113-manual-data-split'],
];

const forbidden = [
  ['detail static V104 runtime import', detail, "import { buildV104WrittenLesson"],
  ['detail static V110 runtime import', detail, "import { findV110ManualChapter"],
  ['detail static Python V100 runtime import', detail, "import { findPythonV100DeepChapterForNode"],
  ['detail static Python V101 runtime import', detail, "import { buildPythonV101EasyLesson"],
  ['detail static FE V102 runtime import', detail, "import { buildFundamentalInfoV102EasyLesson"],
  ['detail static AI V103 runtime import', detail, "import { buildAiPassportV103EasyLesson"],
  ['coverage static V106 runtime import', coverage, "import { v106ChaptersForCourse"],
  ['coverage static V110 runtime import', coverage, "import { v110PriorityChaptersForCourse"],
];

const failures = [];
for (const [label, source, token] of required) if (!source.includes(token)) failures.push(`${label}: missing ${token}`);
for (const [label, source, token] of forbidden) if (source.includes(token)) failures.push(`${label}: should not include ${token}`);

if (failures.length) {
  console.error('V113 audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('V113 manual chapter data split audit passed.');
