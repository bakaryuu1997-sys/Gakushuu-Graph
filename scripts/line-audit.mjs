import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const limit = 200;
const extensions = new Set([".ts", ".tsx"]);
const generatedOrDataPatterns = [
  "src/courses/ai-passport/aiPassportExpanded.ts",
  "src/courses/ai-passport/aiPassportQualityQuiz.ts",
  "src/courses/ai-passport/aiPassportDeepLessons.ts",
  "src/courses/ai-passport/aiPassportV17Top50ManualLessons.ts",
  "src/courses/ai-passport/aiPassportV18Top100ManualLessons.ts",
  "src/courses/ai-passport/aiPassportV19Top180ManualLessons.ts",
  "src/courses/ai-passport/aiPassportExpertLessons.ts",
  "src/features/knowledge-graph/data/supplementalGraph.ts",
  "src/courses/ai-passport/aiPassportSupplemental.ts",
  "src/courses/ai-passport/aiPassportSupplementalQuiz.ts",
  "src/features/knowledge-graph/components/studyNavigationConfig.ts",
  "src/courses/fundamental-info/catalog.ts",
  "src/courses/fundamental-info/examScenarios.ts",
  "src/courses/python/catalog.ts",
  "src/courses/python/codeExercises.ts",
];
const legacyRefactorQueue = [
  "src/App.tsx",
  "src/features/knowledge-graph/components/LessonWorkspace.tsx",
  "src/features/knowledge-graph/components/StudyNavigation.tsx",
  "src/components/AppLoaded.tsx",
  "src/features/knowledge-graph/components/V99LessonDetailPage.tsx",
  "src/courses/v110ManualChapterPack.ts",
  "src/courses/v105ManualChapterPack.ts",
  "src/courses/v106ManualChapterPack.ts",
  "src/courses/python/v101EasyLessonPack.ts",
  "src/courses/courseLoader.ts",
  "src/courses/v99LessonBlueprint.ts",
  "src/courses/python/v100rDeepChapterPack.ts",
  "src/courses/v104WrittenLessonPack.ts",
  "src/features/knowledge-graph/components/GlobalQuickSearchPanel.tsx",
  "src/courses/fundamental-info/v102EasyLessonPack.ts",
];

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (!extensions.has(path.extname(entry.name))) return [];
    return [full];
  });

const rows = walk(srcDir)
  .map((file) => {
    const rel = path.relative(root, file).replaceAll(path.sep, "/");
    const lines = fs.readFileSync(file, "utf8").split("\n").length;
    const dataException = generatedOrDataPatterns.includes(rel);
    const legacyException = legacyRefactorQueue.includes(rel);
    return { file: rel, lines, dataException, legacyException };
  })
  .sort((a, b) => b.lines - a.lines);

const uiLogicViolations = rows.filter(
  (row) => row.lines > limit && !row.dataException && !row.legacyException,
);
const legacy = rows.filter((row) => row.lines > limit && row.legacyException);
const data = rows.filter((row) => row.lines > limit && row.dataException);

console.log(`Line audit limit: ${limit} lines`);
console.log(`Files scanned: ${rows.length}`);
console.log(`UI/logic violations: ${uiLogicViolations.length}`);
uiLogicViolations.forEach((row) =>
  console.log(`FAIL ${row.lines} ${row.file}`),
);
console.log(`Legacy refactor queue: ${legacy.length}`);
legacy.forEach((row) => console.log(`TODO ${row.lines} ${row.file}`));
console.log(`Generated/data exceptions: ${data.length}`);
data.forEach((row) => console.log(`DATA ${row.lines} ${row.file}`));

if (uiLogicViolations.length > 0) {
  process.exitCode = 1;
}
