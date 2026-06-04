import { describe, expect, it } from 'vitest';
import { courseSummaries, loadCourseById } from '../courses/courseLoader';
import { v105ManualChapters } from '../courses/v105ManualChapterPack';
import { v106ManualChapters } from '../courses/v106ManualChapterPack';
import { v110ManualChapters } from '../courses/v110ManualChapterPack';

const forbiddenGenericSignals = [
  'Người mới cần học',
  'Đọc đoạn code có',
  'code reading / test case',
  'nội dung nháp',
  'TODO',
  'lorem ipsum',
];

const joinedLessonText = (lesson: any) => [
  lesson.shortDefinitionVi,
  lesson.whyImportantVi,
  ...(lesson.examPatternsVi ?? []),
  ...(lesson.commonMistakesVi ?? []),
  lesson.memoryTipVi,
].filter(Boolean).join('\n');

describe('V116 full content and full-project QA', () => {
  it('loads every course with detailed non-generic handwritten-style lessons for every node', async () => {
    for (const summary of courseSummaries) {
      const course = await loadCourseById(summary.id);
      const lessonByNode = new Map(course.lessons.map((lesson) => [lesson.nodeId, lesson]));
      expect(course.nodes.length, `${course.id} nodes`).toBeGreaterThan(0);
      expect(course.lessons.length, `${course.id} lessons`).toBe(course.nodes.length);

      for (const node of course.nodes) {
        const lesson = lessonByNode.get(node.id) as any;
        expect(lesson, `${course.id}/${node.id} missing lesson`).toBeTruthy();
        const text = joinedLessonText(lesson);
        expect(lesson.shortDefinitionVi.length, `${course.id}/${node.id} shortDefinitionVi`).toBeGreaterThan(30);
        expect(lesson.whyImportantVi.length, `${course.id}/${node.id} whyImportantVi`).toBeGreaterThan(220);
        expect(lesson.examPatternsVi.length, `${course.id}/${node.id} examPatternsVi`).toBeGreaterThanOrEqual(4);
        expect(lesson.commonMistakesVi.length, `${course.id}/${node.id} commonMistakesVi`).toBeGreaterThanOrEqual(2);
        expect(text, `${course.id}/${node.id} needs example`).toMatch(/Ví dụ|Case mẫu|Code mẫu|query|workflow|Trace/i);
        expect(text, `${course.id}/${node.id} needs practice/output`).toMatch(/Bài tập|Expected output|Quiz nhỏ|Trace/i);
        for (const signal of forbiddenGenericSignals) {
          expect(text.includes(signal), `${course.id}/${node.id} still contains generic signal: ${signal}`).toBe(false);
        }
      }
    }
  }, 120000);

  it('keeps the priority handwritten chapter packs broad and structured', () => {
    const allChapters = [...v105ManualChapters, ...v106ManualChapters, ...v110ManualChapters];
    expect(allChapters.length).toBeGreaterThanOrEqual(40);
    for (const chapter of allChapters) {
      const explanation = [chapter.whyItMattersVi, ...(chapter.conceptVi ?? [])].join(' ');
      const sample = [chapter.deepExampleTitleVi, chapter.deepExampleBody].join('\n');
      expect(explanation.length, `${chapter.id} explanation`).toBeGreaterThan(250);
      expect(sample.length, `${chapter.id} sample`).toBeGreaterThan(80);
      expect(chapter.walkthroughVi.length, `${chapter.id} walkthrough`).toBeGreaterThanOrEqual(3);
      expect(chapter.exerciseVi.length, `${chapter.id} practice`).toBeGreaterThan(30);
      expect(chapter.expectedOutputVi.length, `${chapter.id} expected output`).toBeGreaterThanOrEqual(8);
      expect(chapter.mistakesVi.length, `${chapter.id} mistakes`).toBeGreaterThanOrEqual(2);
    }
  });
});
