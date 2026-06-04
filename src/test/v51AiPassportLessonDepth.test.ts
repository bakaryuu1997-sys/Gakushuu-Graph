import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';

const placeholderSignals = [
  'Khái niệm quan trọng trong AI Passport',
  'Hãy học theo 4 phần',
  'nội dung nháp',
  'TODO',
];

const hasDetail = (text: string, min = 24) => text.trim().length >= min;

const lessonText = (lesson: (typeof aiPassportCourse.lessons)[number]) => [
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

describe('V51 AI Passport lesson completeness', () => {
  it('has one detailed lesson for every AI Passport node', () => {
    const lessonByNode = new Map(aiPassportCourse.lessons.map((lesson) => [lesson.nodeId, lesson]));
    const missing = aiPassportCourse.nodes.filter((node) => !lessonByNode.has(node.id));
    expect(missing.map((node) => node.id)).toEqual([]);
    expect(lessonByNode.size).toBe(aiPassportCourse.nodes.length);
  });

  it('keeps every lesson useful for studying, not just a thin nội dung nháp', () => {
    const thinLessons = aiPassportCourse.lessons.filter((lesson) => {
      const fieldsOk = [
        lesson.shortDefinitionVi,
        lesson.shortDefinitionJa,
        lesson.whyImportantVi,
        lesson.whyImportantJa,
        lesson.memoryTipVi,
        lesson.memoryTipJa,
      ].every((text) => hasDetail(text));
      const listsOk = [
        lesson.examPatternsVi,
        lesson.examPatternsJa,
        lesson.commonMistakesVi,
        lesson.commonMistakesJa,
      ].every((items) => items.length >= 2 && items.every((item) => hasDetail(item, 8)));
      const noPlaceholder = !placeholderSignals.some((signal) => lessonText(lesson).includes(signal));
      return !fieldsOk || !listsOk || !noPlaceholder;
    });
    expect(thinLessons.map((lesson) => lesson.nodeId)).toEqual([]);
  });
});
