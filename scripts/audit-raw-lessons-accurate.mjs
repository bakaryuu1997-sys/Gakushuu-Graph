import { aiPassportV52MlLessons } from '../src/courses/ai-passport/aiPassportV52BeginnerLessons.ml.ts';
import { aiPassportV52BusinessLessons } from '../src/courses/ai-passport/aiPassportV52BeginnerLessons.business.ts';
import { aiPassportV52InfraLessons } from '../src/courses/ai-passport/aiPassportV52BeginnerLessons.infra.ts';
import { aiPassportV46RealLessons } from '../src/courses/ai-passport/aiPassportV46RealLessons.ts';
import { aiPassportV41EthicsBusinessLessons } from '../src/courses/ai-passport/aiPassportV41EthicsBusinessLessons.ts';
import { aiPassportV40ManualLessons } from '../src/courses/ai-passport/aiPassportV40ManualLessons.ts';
import { aiPassportV39DeepLessons } from '../src/courses/ai-passport/aiPassportV39DeepLessons.ts';
import { aiPassportV35QualityLessons } from '../src/courses/ai-passport/aiPassportV35QualityLessons.ts';
import { aiPassportDomainLessons } from '../src/courses/ai-passport/domain/lessons.ts';
import { aiPassportV12DeepLessons } from '../src/courses/ai-passport/aiPassportV12Content.ts';
import { aiPassportTop100Lessons } from '../src/courses/ai-passport/aiPassportTop100Lessons.ts';
import { aiPassportExpertLessons } from '../src/courses/ai-passport/aiPassportExpertLessons.ts';
import { aiPassportDeepLessons } from '../src/courses/ai-passport/aiPassportDeepLessons.ts';
import { aiPassportLessons } from '../src/courses/ai-passport/aiPassportLessons.ts';
import { aiSupplementalLessons } from '../src/courses/ai-passport/aiPassportSupplementalLessons.ts';
import { aiPassportUniversalLessons } from '../src/courses/ai-passport/aiPassportUniversalLessons.ts';

const lists = {
  'V52 Beginner ML': aiPassportV52MlLessons,
  'V52 Beginner Business': aiPassportV52BusinessLessons,
  'V52 Beginner Infra': aiPassportV52InfraLessons,
  'V46 Real': aiPassportV46RealLessons,
  'V41 Ethics Business': aiPassportV41EthicsBusinessLessons,
  'V40 Manual': aiPassportV40ManualLessons,
  'V39 Deep': aiPassportV39DeepLessons,
  'V35 Quality': aiPassportV35QualityLessons,
  'Domain': aiPassportDomainLessons,
  'V12 Deep': aiPassportV12DeepLessons,
  'Top 100': aiPassportTop100Lessons,
  'Expert': aiPassportExpertLessons,
  'Deep': aiPassportDeepLessons,
  'Lessons': aiPassportLessons,
  'Supplemental': aiSupplementalLessons,
  'Universal': aiPassportUniversalLessons,
};

const placeholderSignals = [
  'Trước hết hãy hiểu nó giải quyết vấn đề gì',
  'là một mục cần nắm trong AI Passport',
  'khái niệm AI Passport cần hiểu theo bối cảnh',
  'bằng 3 điểm: mục đích → ví dụ → rủi ro',
  'Hãy học theo 4 phần',
  'nội dung nháp',
  'TODO',
];

const isThin = (text, min = 24) => {
  if (!text) return true;
  return text.trim().length < min || placeholderSignals.some((signal) => text.includes(signal));
};

console.log('--- ACCURATE RAW LESSONS AUDIT ---');
let total = 0;
let totalThin = 0;
let totalDetailed = 0;

const allLessonsMap = new Map();

for (const [name, list] of Object.entries(lists)) {
  let listThin = 0;
  let listDetailed = 0;
  for (const lesson of list) {
    if (allLessonsMap.has(lesson.nodeId)) {
      continue; // Skip duplicates, mirroring uniqueByNode logic
    }
    allLessonsMap.set(lesson.nodeId, lesson);
    
    const isDefThin = isThin(lesson.shortDefinitionVi);
    const isWhyThin = isThin(lesson.whyImportantVi);
    const isTipThin = isThin(lesson.memoryTipVi);
    
    if (isDefThin || isWhyThin || isTipThin) {
      listThin++;
      totalThin++;
    } else {
      listDetailed++;
      totalDetailed++;
    }
  }
  console.log(`${name}: Total Unique=${listThin + listDetailed}, Detailed=${listDetailed}, Thin=${listThin}`);
}

console.log('\n--- FINAL UNIQUE STATS ---');
console.log('Total unique raw lessons:', allLessonsMap.size);
console.log('Total detailed hand-written lessons:', totalDetailed);
console.log('Total placeholder/thin lessons:', totalThin);
