import { readFileSync } from 'node:fs';

const files = {
  pack: readFileSync('src/courses/v104WrittenLessonPack.ts', 'utf8'),
  registry: readFileSync('src/courses/courseRegistry.ts', 'utf8'),
  loader: readFileSync('src/courses/courseLoader.ts', 'utf8'),
  page: readFileSync('src/features/knowledge-graph/components/V99LessonDetailPage.tsx', 'utf8'),
  pkg: readFileSync('package.json', 'utf8'),
};

const required = [
  ['builder exports V104 written lesson', files.pack, 'buildV104WrittenLesson'],
  ['python routes through V101 deep lesson', files.pack, 'pythonWritten'],
  ['FE routes through V102 deep lesson', files.pack, 'fundamentalWritten'],
  ['AI routes through V103 deep lesson', files.pack, 'aiWritten'],
  ['SQL has written explanation', files.pack, 'đọc query theo thứ tự xử lý thật'],
  ['Frontend has written explanation', files.pack, 'biến thiết kế thành giao diện dễ dùng'],
  ['Linux has written explanation', files.pack, 'hiểu terminal bằng thao tác an toàn'],
  ['BrSE has written explanation', files.pack, 'biến trao đổi mơ hồ thành thông tin triển khai được'],
  ['IT Passport has written explanation', files.pack, 'hiểu IT bằng tình huống công ty'],
  ['course registry applies V104', files.registry, 'enhanceCourseForV104'],
  ['course loader applies V104-compatible written lesson enhancement', files.loader, 'enhanceWithV114EasyDeepLesson'],
  ['lesson detail renders V104 first', files.page, 'V104WrittenLessonSection'],
  ['lesson detail uses main lesson label', files.page, 'main lesson'],
  ['npm audit script exists', files.pkg, 'audit:v104-written-lessons'],
];

const failures = required.filter(([_, source, token]) => !source.includes(token));
if (failures.length) {
  console.error('V104 audit failed:');
  for (const [label, , token] of failures) console.error(`- ${label}: missing ${token}`);
  process.exit(1);
}
console.log('V104 written lessons audit passed.');
