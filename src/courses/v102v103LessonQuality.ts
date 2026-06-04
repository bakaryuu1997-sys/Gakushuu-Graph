import type { CourseConfig } from './types';
import { buildAiPassportV103EasyLesson } from './ai-passport/v103EasyLessonPack';
import { buildFundamentalInfoV102EasyLesson } from './fundamental-info/v102EasyLessonPack';
import type { EasyDeepLesson } from './v102v103EasyLessonTypes';

const builderFor = (course: CourseConfig): ((node: CourseConfig['nodes'][number]) => EasyDeepLesson) | undefined => {
  if (course.id === 'fundamental-info') return buildFundamentalInfoV102EasyLesson;
  if (course.id === 'ai-passport') return buildAiPassportV103EasyLesson;
  return undefined;
};

export function enhanceCourseForV102V103(course: CourseConfig): CourseConfig {
  const builder = builderFor(course);
  if (!builder) return course;
  const nodes = course.nodes.map((node) => {
    const lesson = builder(node);
    return {
      ...node,
      summaryVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
      examPointVi: `Cách đọc đề: ${lesson.goalVi} Trace chính: ${lesson.traceVi[0]}`,
      examples: Array.from(new Set([...(node.examples ?? []), lesson.practiceVi, lesson.expectedOutput, lesson.quizQuestionVi])),
      keywords: Array.from(new Set([...node.keywords, course.id === 'fundamental-info' ? 'V102R-easy-deep-lesson' : 'V103R-easy-deep-lesson', lesson.id])),
    };
  });

  const lessons = nodes.map((node) => {
    const deep = builder(node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `${deep.titleVi}. ${deep.bigIdeaVi}`,
      shortDefinitionJa: `${node.labelJa}を、具体例・trace・練習問題で理解します。`,
      whyImportantVi: `${deep.goalVi}\n\nGiải thích dễ hiểu:\n- ${deep.explainVi.join('\n- ')}\n\nVí dụ / case mẫu:\n${deep.sampleBody}\n\nTrace:\n- ${deep.traceVi.join('\n- ')}`,
      whyImportantJa: `${node.labelJa}は、試験シナリオの中でinput→判断→outputを追って理解します。`,
      examPatternsVi: [
        `Mục tiêu: ${deep.goalVi}`,
        `Case mẫu: ${deep.sampleBody}`,
        `Trace: ${deep.traceVi.join(' → ')}`,
        `Bài tập: ${deep.practiceVi}`,
        `Expected output: ${deep.expectedOutput}`,
        `Quiz nhỏ: ${deep.quizQuestionVi} Đáp án: ${deep.quizAnswerVi}`,
      ],
      examPatternsJa: [`具体例で理解する: ${node.labelJa}`, `問題文の条件、根拠、選択肢を順に確認する。`],
      commonMistakesVi: [
        deep.commonMisunderstandingVi,
        'Chỉ đọc định nghĩa nhưng không tự giải thích lại bằng ví dụ thật.',
        'Không trace input → xử lý → output nên dễ chọn đáp án nghe có vẻ đúng nhưng sai bối cảnh.',
      ],
      commonMistakesJa: ['定義だけ暗記して具体例に結び付けない。', '問題文の条件をtraceせず、雰囲気で選ぶ。'],
      memoryTipVi: deep.analogyVi,
      memoryTipJa: 'input→判断→outputで覚える。',
    };
  });

  return { ...course, nodes, lessons };
}

export function summarizeV102V103LessonQuality(course: CourseConfig) {
  const builder = builderFor(course);
  const lessons = builder ? course.nodes.map(builder) : [];
  return {
    courseId: course.id,
    total: lessons.length,
    allHaveEasyExplanation: lessons.every((lesson) => lesson.explainVi.length >= 4 && lesson.explainVi.join(' ').length > 240),
    allHaveTrace: lessons.every((lesson) => lesson.traceVi.length >= 5),
    allHavePractice: lessons.every((lesson) => lesson.practiceVi.length > 50 && lesson.expectedOutput.length > 50),
    thin: lessons.filter((lesson) => lesson.explainVi.join(' ').length < 240 || lesson.traceVi.length < 5).map((lesson) => lesson.id),
  };
}
