import type { CourseConfig } from './types';
import { buildV99LessonBlueprint } from './v99LessonBlueprint';

export function enhanceCourseForV99(course: CourseConfig): CourseConfig {
  const nodes = course.nodes.map((node) => {
    const bp = buildV99LessonBlueprint(course.id, node);
    return {
      ...node,
      summaryVi: bp.conceptVi,
      summaryJa: bp.conceptJa,
      examPointVi: `${bp.exampleTitle}: ${bp.exampleExplanationVi}`,
      examPointJa: bp.conceptJa,
      examples: [bp.exampleTitle, bp.exerciseVi, bp.expectedOutput].filter(Boolean),
    };
  });

  const lessons = nodes.map((node) => {
    const bp = buildV99LessonBlueprint(course.id, node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `Khái niệm: ${bp.conceptVi}`,
      shortDefinitionJa: bp.conceptJa,
      whyImportantVi: `Ví dụ: ${bp.exampleExplanationVi} Trace: ${bp.traceSteps.join(' → ')} Bài tập: ${bp.exerciseVi} Expected output: ${bp.expectedOutput}`,
      whyImportantJa: `${bp.conceptJa} 具体例・trace・練習・expected outputで確認します。`,
      examPatternsVi: [
        `Ví dụ: ${bp.exampleTitle}`,
        `Trace: ${bp.traceSteps[0] ?? bp.exampleExplanationVi}`,
        `Bài tập: ${bp.exerciseVi}`,
        `Expected output: ${bp.expectedOutput}`,
        `Quiz nhỏ: ${bp.miniQuizQuestionVi}`,
      ],
      examPatternsJa: [
        `具体例: ${bp.exampleTitle}`,
        `trace: ${bp.traceSteps[0] ?? bp.conceptJa}`,
        `expected outputを先に書く。`,
      ],
      commonMistakesVi: [
        bp.antiPatternVi,
        'Chỉ đọc tên bài nhưng không tự chạy ví dụ hoặc không dự đoán output.',
        'Không trace biến/trạng thái nên không biết mình sai ở bước nào.',
      ],
      commonMistakesJa: [
        '用語だけ暗記して具体例を作らない。',
        'expected outputを書かずに答えを見る。',
      ],
      memoryTipVi: `Công thức V99R: Khái niệm → Ví dụ → Trace → Bài tập → Expected output → Quiz nhỏ.`,
      memoryTipJa: `V99R: 定義 → 例 → trace → 練習 → expected output → quiz。`,
    };
  });

  return { ...course, nodes, lessons };
}

export function summarizeV99LessonCoverage(course: CourseConfig) {
  return {
    courseId: course.id,
    nodes: course.nodes.length,
    lessons: course.lessons.length,
    allNodesHaveLessons: course.nodes.every((node) => course.lessons.some((lesson) => lesson.nodeId === node.id)),
    thinLessons: course.lessons.filter((lesson) =>
      lesson.shortDefinitionVi.length < 80 ||
      lesson.whyImportantVi.length < 160 ||
      lesson.examPatternsVi.length < 5 ||
      !lesson.whyImportantVi.includes('Expected output')
    ).map((lesson) => lesson.nodeId),
  };
}
