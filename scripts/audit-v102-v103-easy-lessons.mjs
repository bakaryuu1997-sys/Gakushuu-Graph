import { readFileSync } from 'node:fs';

const files = {
  fePack: readFileSync('src/courses/fundamental-info/v102EasyLessonPack.ts', 'utf8'),
  aiPack: readFileSync('src/courses/ai-passport/v103EasyLessonPack.ts', 'utf8'),
  quality: readFileSync('src/courses/v102v103LessonQuality.ts', 'utf8'),
  lessonPage: readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8'),
  loader: readFileSync('src/courses/courseLoader.ts', 'utf8'),
  pkg: readFileSync('package.json', 'utf8'),
};

const required = [
  ['FE pack has algorithm lesson', files.fePack, 'đọc thuật toán bằng bảng trace'],
  ['FE pack has SQL lesson', files.fePack, 'đọc SQL theo thứ tự xử lý'],
  ['FE pack has network lesson', files.fePack, 'hiểu mạng bằng đường đi của một request'],
  ['FE pack has security lesson', files.fePack, 'threat → impact → countermeasure'],
  ['AI pack has ML lesson', files.aiPack, 'data → model → prediction → evaluation'],
  ['AI pack has GenAI lesson', files.aiPack, 'prompt → context → output → kiểm chứng'],
  ['AI pack has ethics lesson', files.aiPack, 'quyền riêng tư, công bằng và trách nhiệm'],
  ['AI pack has business lesson', files.aiPack, 'vấn đề kinh doanh, dữ liệu và hiệu quả'],
  ['quality enhancer exported', files.quality, 'enhanceCourseForV102V103'],
  ['lesson detail renders common component', files.lessonPage, 'CourseEasyLessonSection'],
  ['course loader applies enhancer', files.loader, 'enhanceCourseForV102V103'],
  ['npm audit script exists', files.pkg, 'audit:v102-v103-easy-lessons'],
];

const failures = required.filter(([_, source, token]) => !source.includes(token));
if (failures.length) {
  console.error('V102/V103 audit failed:');
  for (const [label, , token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}
console.log('V102/V103 easy deep lessons audit passed.');
