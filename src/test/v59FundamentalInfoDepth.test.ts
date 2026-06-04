import { describe, expect, it } from 'vitest';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoCatalog, fundamentalInfoTopicRows } from '../courses/fundamental-info/catalog';
import { fundamentalInfoPracticeTasks } from '../courses/fundamental-info/practice';

describe('V59 Fundamental Info detailed syllabus expansion', () => {
  it('expands 基本情報 beyond a small catalog while keeping lesson/quiz parity', () => {
    expect(fundamentalInfoCourse.nodes.length).toBeGreaterThanOrEqual(140);
    expect(fundamentalInfoCatalog).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoTopicRows).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCourse.lessons).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCourse.quizzes).toHaveLength(fundamentalInfoCourse.nodes.length);
  });

  it('keeps every generated lesson beginner-detailed in Vietnamese and Japanese', () => {
    const weakLessons = fundamentalInfoCourse.lessons.filter((lesson) => {
      const text = [
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
      ].join(' ');
      return text.length < 1800
        || lesson.examPatternsVi.length < 5
        || lesson.examPatternsJa.length < 5
        || lesson.commonMistakesVi.length < 5
        || lesson.commonMistakesJa.length < 5
        || !text.includes('Dạng 5')
        || !text.includes('形式5')
        || /nội dung nháp|TODO|Khái niệm quan trọng/i.test(text);
    });

    expect(weakLessons.map((lesson) => lesson.nodeId)).toEqual([]);
  });

  it('covers all major FE areas with a real study path', () => {
    const phases = new Set(fundamentalInfoCatalog.map((item) => item.phase));
    expect([...phases].sort()).toEqual([
      'algorithm',
      'computer',
      'database',
      'development',
      'network-security',
      'overview',
      'strategy',
      'theory',
    ]);

    const pathNodeIds = new Set(fundamentalInfoCourse.studyPath.flatMap((phase) => phase.nodeIds));
    fundamentalInfoCourse.nodes.forEach((node) => {
      expect(pathNodeIds.has(node.id), `${node.id} missing from study path`).toBe(true);
    });
  });

  it('expands practice drills beyond the V58 baseline', () => {
    expect(fundamentalInfoPracticeTasks.length).toBeGreaterThanOrEqual(18);
    for (const kind of ['pseudo-code', 'sql', 'subnet'] as const) {
      expect(fundamentalInfoPracticeTasks.filter((task) => task.kind === kind).length).toBeGreaterThanOrEqual(6);
    }
  });
});
