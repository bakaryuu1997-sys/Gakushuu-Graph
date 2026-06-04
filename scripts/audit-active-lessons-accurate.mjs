import { aiPassportCourse } from '../src/courses/ai-passport/index.ts';
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

const lists = [
  ...aiPassportV52MlLessons,
  ...aiPassportV52BusinessLessons,
  ...aiPassportV52InfraLessons,
  ...aiPassportV46RealLessons,
  ...aiPassportV41EthicsBusinessLessons,
  ...aiPassportV40ManualLessons,
  ...aiPassportV39DeepLessons,
  ...aiPassportV35QualityLessons,
  ...aiPassportDomainLessons,
  ...aiPassportV12DeepLessons,
  ...aiPassportTop100Lessons,
  ...aiPassportExpertLessons,
  ...aiPassportDeepLessons,
  ...aiPassportLessons,
  ...aiSupplementalLessons,
  ...aiPassportUniversalLessons
];

const rawMap = new Map();
for (const lesson of lists) {
  if (!rawMap.has(lesson.nodeId)) {
    rawMap.set(lesson.nodeId, lesson);
  }
}

const placeholderSignals = [
  'Trước hết hãy hiểu nó giải quyết vấn đềEgì',
  'là một mục cần nắm trong AI Passport',
  'khái niệm AI Passport cần hiểu theo bối cảnh',
  'bằng 3 điểm: mục đích ↁEví dụ ↁErủi ro',
  'Hãy học theo 4 phần',
  'nội dung nháp',
  'TODO',
];

const isThin = (text, min = 24) => {
  if (!text) return true;
  return text.trim().length < min || placeholderSignals.some((signal) => text.includes(signal));
};

console.log('--- ACTIVE LESSONS DETAILS ---');
let thinCount = 0;
let detailedCount = 0;

for (let i = 0; i < 20 && i < aiPassportCourse.lessons.length; i++) {
  const lesson = aiPassportCourse.lessons[i];
  const raw = rawMap.get(lesson.nodeId);
  const rawDef = raw ? raw.shortDefinitionVi : 'N/A';
  const isDefThin = isThin(rawDef);
  console.log(`Active Lesson [${i}]: nodeId=${lesson.nodeId}, isRawThin=${isDefThin}`);
  console.log(`  Raw shortDefinitionVi: "${rawDef}"`);
}

// Let's count overall
for (const lesson of aiPassportCourse.lessons) {
  const raw = rawMap.get(lesson.nodeId);
  if (!raw) {
    thinCount++;
    continue;
  }
  const isDefThin = isThin(raw.shortDefinitionVi);
  if (isDefThin) {
    thinCount++;
  } else {
    detailedCount++;
  }
}
console.log('Active detailed lessons count:', detailedCount);
console.log('Active thin/placeholder lessons count:', thinCount);
