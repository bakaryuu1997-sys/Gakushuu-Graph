import { aiPassportCourse } from '../src/courses/ai-passport/index.js';
import { aiPassportNodes } from '../src/courses/ai-passport/aiPassportGraph.js';

console.log('AI Passport Lessons Count:', aiPassportCourse.lessons.length);
console.log('AI Passport Nodes Count:', aiPassportCourse.nodes.length);

const placeholderSignals = ['Khái niệm quan trọng trong AI Passport', 'Hãy học theo 4 phần', 'nội dung nháp', 'TODO'];
const isThin = (text, min = 24) => text.trim().length < min || placeholderSignals.some((signal) => text.includes(signal));

let thinCount = 0;
let detailedCount = 0;

for (const lesson of aiPassportCourse.lessons) {
  const isDefThin = isThin(lesson.shortDefinitionVi || '');
  const isWhyThin = isThin(lesson.whyImportantVi || '');
  const isTipThin = isThin(lesson.memoryTipVi || '');
  
  if (isDefThin || isWhyThin || isTipThin) {
    thinCount++;
  } else {
    detailedCount++;
  }
}

console.log('Detailed Lessons:', detailedCount);
console.log('Thin/Placeholder Lessons:', thinCount);
