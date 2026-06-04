import fs from 'node:fs';
import path from 'node:path';

const files = [
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.ml.ts',
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.business.ts',
  'src/courses/ai-passport/aiPassportV52BeginnerLessons.infra.ts',
  'src/courses/ai-passport/aiPassportV46RealLessons.ts',
  'src/courses/ai-passport/aiPassportV41EthicsBusinessLessons.ts',
  'src/courses/ai-passport/aiPassportV40ManualLessons.ts',
  'src/courses/ai-passport/aiPassportV39DeepLessons.ts',
  'src/courses/ai-passport/aiPassportV35QualityLessons.ts',
  'src/courses/ai-passport/domain/lessons.ts',
  'src/courses/ai-passport/aiPassportV12Content.ts',
  'src/courses/ai-passport/aiPassportTop100Lessons.ts',
  'src/courses/ai-passport/aiPassportExpertLessons.ts',
  'src/courses/ai-passport/aiPassportDeepLessons.ts',
  'src/courses/ai-passport/aiPassportLessons.ts',
  'src/courses/ai-passport/aiPassportSupplementalLessons.ts',
  'src/courses/ai-passport/aiPassportUniversalLessons.ts',
];

const placeholderPhrases = [
  'Trước hết hãy hiểu nó giải quyết vấn đềEgì',
  'là một mục cần nắm trong AI Passport',
  'khái niệm AI Passport cần hiểu theo bối cảnh',
  'bằng 3 điểm: mục đích ↁEví dụ ↁErủi ro',
  'Hãy học theo 4 phần',
  'nội dung nháp',
  'TODO',
];

console.log('--- AUDITING RAW AI PASSPORT LESSONS ---');
let totalLessons = 0;
let totalThin = 0;
let totalDetailed = 0;

for (const file of files) {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  // Match both: nodeId: "..." or "nodeId": "..." or 'nodeId': '...'
  const matches = content.match(/"?nodeId"?\s*:\s*['"][a-zA-Z0-9_-]+['"]/g) || [];
  const count = matches.length;
  
  let fileThin = 0;
  let fileDetailed = 0;
  
  // Split by nodeId key to look at blocks
  const blocks = content.split(/"?nodeId"?\s*:\s*/);
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const isPlaceholder = placeholderPhrases.some(phrase => block.includes(phrase));
    if (isPlaceholder) {
      fileThin++;
    } else {
      fileDetailed++;
    }
  }
  
  totalLessons += count;
  totalThin += fileThin;
  totalDetailed += fileDetailed;
  
  console.log(`${path.basename(file)}: Total=${count}, Detailed=${fileDetailed}, Placeholder/Thin=${fileThin}`);
}

console.log('\n--- SUMMARY ---');
console.log('Total raw lessons parsed:', totalLessons);
console.log('Total hand-written detailed lessons:', totalDetailed);
console.log('Total placeholder/thin lessons:', totalThin);
