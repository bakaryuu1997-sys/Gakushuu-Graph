import { describe, expect, it } from 'vitest';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoCatalog } from '../courses/fundamental-info/catalog';

describe('V57 Fundamental Info completion', () => {
  it('covers a fuller FE syllabus map with every node backed by a detailed lesson and quiz', () => {
    expect(fundamentalInfoCourse.nodes.length).toBeGreaterThanOrEqual(60);
    expect(fundamentalInfoCourse.lessons).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCourse.quizzes).toHaveLength(fundamentalInfoCourse.nodes.length);

    const lessonIds = new Set(fundamentalInfoCourse.lessons.map((lesson) => lesson.nodeId));
    const quizIds = new Set(fundamentalInfoCourse.quizzes.map((quiz) => quiz.nodeId));
    fundamentalInfoCourse.nodes.forEach((node) => {
      expect(lessonIds.has(node.id), `${node.id} missing lesson`).toBe(true);
      expect(quizIds.has(node.id), `${node.id} missing quiz`).toBe(true);
    });
  });

  it('keeps lessons detailed enough for beginners in Vietnamese and Japanese', () => {
    const weakLessons = fundamentalInfoCourse.lessons.filter((lesson) => {
      const textLength = [
        lesson.shortDefinitionVi,
        lesson.shortDefinitionJa,
        lesson.whyImportantVi,
        lesson.whyImportantJa,
        lesson.memoryTipVi,
        lesson.memoryTipJa,
        ...lesson.examPatternsVi,
        ...lesson.examPatternsJa,
        ...lesson.commonMistakesVi,
        ...lesson.commonMistakesJa,
      ].join(' ').length;
      return textLength < 900
        || lesson.examPatternsVi.length < 3
        || lesson.examPatternsJa.length < 3
        || lesson.commonMistakesVi.length < 3
        || lesson.commonMistakesJa.length < 3
        || /nội dung nháp|TODO|Khái niệm quan trọng/i.test(JSON.stringify(lesson));
    });

    expect(weakLessons.map((lesson) => lesson.nodeId)).toEqual([]);
  });

  it('has a coherent study path that references real nodes only', () => {
    const nodeIds = new Set(fundamentalInfoCourse.nodes.map((node) => node.id));
    expect(fundamentalInfoCourse.studyPath.length).toBeGreaterThanOrEqual(6);

    fundamentalInfoCourse.studyPath.forEach((phase) => {
      expect(phase.nodeIds.length, `${phase.id} should not be empty`).toBeGreaterThan(0);
      phase.nodeIds.forEach((nodeId) => {
        expect(nodeIds.has(nodeId), `${phase.id} references missing ${nodeId}`).toBe(true);
      });
    });
  });

  it('tracks catalog items as data source for maintainability', () => {
    expect(fundamentalInfoCatalog).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCatalog.every((item) => item.definitionVi && item.examPatternsVi.length >= 3)).toBe(true);
  });
});
