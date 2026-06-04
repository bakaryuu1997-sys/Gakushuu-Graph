import { readFileSync } from 'node:fs';
const data = readFileSync('src/courses/python/v84rLessonDeepPolish.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/PythonV84RLessonDeepPolishPanel.tsx', 'utf8');
const catalog = readFileSync('src/courses/python/catalog.ts', 'utf8');
for (const token of ['v84r-oop-state-invariant','v84r-file-parser-pipeline','v84r-custom-exception-boundary','v84r-pytest-table-tests','v84r-decorator-wrapper','v84r-fastapi-service-layer','v84r-algorithm-complexity-check','edgeCases','interviewCheckpointVi']) {
  if (!data.includes(token)) throw new Error(`V84R missing ${token}`);
}
if (!panel.includes('Search code / keyword') || !panel.includes('V84R Python lesson deep polish')) throw new Error('V84R panel missing filter UI or heading');
if (!catalog.includes('pythonV84RDeepPolishLessons') || !catalog.includes('V84R-${polish.track}')) throw new Error('V84R catalog enrichment missing');
console.log('✅ V84R Python deep polish audit passed');
