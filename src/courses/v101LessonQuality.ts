import type { CourseConfig } from './types';
import { buildPythonV101EasyLesson } from './python/v101EasyLessonPack';

export function enhanceCourseForV101(course: CourseConfig): CourseConfig {
  if (course.id !== 'python') return course;
  const nodes = course.nodes.map((node) => {
    const lesson = buildPythonV101EasyLesson(node);
    return {
      ...node,
      summaryVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
      examPointVi: `Ví dụ thật: ${lesson.code.split('\n')[0]} ... Trace: ${lesson.traceVi[0]}`,
      examples: Array.from(new Set([...(node.examples ?? []), lesson.practiceVi, lesson.expectedOutput, lesson.quizQuestionVi])),
      keywords: Array.from(new Set([...node.keywords, 'V101R-easy-lesson', lesson.id])),
    };
  });

  const lessons = nodes.map((node) => {
    const deep = buildPythonV101EasyLesson(node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `${deep.titleVi}. ${deep.bigIdeaVi}`,
      shortDefinitionJa: `${node.labelJa}を、具体例・trace・練習で理解します。`,
      whyImportantVi: `${deep.goalVi}\n\nGiải thích dễ hiểu:\n- ${deep.explainVi.join('\n- ')}\n\nVí dụ code:\n${deep.code}\n\nTrace:\n- ${deep.traceVi.join('\n- ')}`,
      whyImportantJa: `${node.labelJa}は、input→処理→outputをtraceして学びます。`,
      examPatternsVi: [
        `Mục tiêu: ${deep.goalVi}`,
        `Code mẫu: ${deep.code}`,
        `Trace: ${deep.traceVi.join(' → ')}`,
        `Bài tập: ${deep.practiceVi}`,
        `Expected output: ${deep.expectedOutput}`,
        `Quiz nhỏ: ${deep.quizQuestionVi} Đáp án: ${deep.quizAnswerVi}`,
      ],
      examPatternsJa: [`具体例で理解する: ${node.labelJa}`, `traceを書いてoutputを確認する。`],
      commonMistakesVi: [
        deep.commonMisunderstandingVi,
        'Chỉ đọc code mẫu nhưng không tự dự đoán output trước khi xem đáp án.',
        'Không viết lại bài bằng input khác nên tưởng hiểu nhưng chưa dùng được.',
      ],
      commonMistakesJa: ['例だけ読んで自分でtraceしない。', '別inputで練習しない。'],
      memoryTipVi: deep.analogyVi,
      memoryTipJa: 'input→処理→outputで覚える。',
    };
  });

  return { ...course, nodes, lessons };
}

export function summarizeV101PythonLessonQuality(course: CourseConfig) {
  const lessons = course.id === 'python' ? course.nodes.map(buildPythonV101EasyLesson) : [];
  return {
    courseId: course.id,
    total: lessons.length,
    allLessonsHaveCode: lessons.every((lesson) => lesson.code.includes('\n') && lesson.code.length > 120),
    allLessonsHaveEasyExplanation: lessons.every((lesson) => lesson.explainVi.length >= 3 && lesson.explainVi.join(' ').length > 180),
    allLessonsHavePractice: lessons.every((lesson) => lesson.practiceVi.length > 30 && lesson.expectedOutput.length > 20),
    thin: lessons.filter((lesson) => lesson.explainVi.join(' ').length < 180 || lesson.traceVi.length < 4).map((lesson) => lesson.id),
  };
}
