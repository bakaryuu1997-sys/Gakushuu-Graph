import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';

describe('V46 AI UX and content refactor', () => {
  it('removes nội dung nháp AI Passport lessons from the active course', () => {
    const placeholder = /khái niệm AI Passport|Khái niệm quan trọng|Hãy học theo 4 phần|nội dung AI Passport bổ sung|bổ sung quan trọng/i;
    const bad = aiPassportCourse.lessons.filter((lesson) => placeholder.test([lesson.shortDefinitionVi, lesson.whyImportantVi, lesson.memoryTipVi].join(' ')));
    expect(bad).toEqual([]);
  });

  it('keeps AI Passport lessons unique by node id', () => {
    const ids = aiPassportCourse.lessons.map((lesson) => lesson.nodeId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has real lesson coverage for every active AI Passport node', () => {
    const lessonIds = new Set(aiPassportCourse.lessons.map((lesson) => lesson.nodeId));
    expect(aiPassportCourse.nodes.every((node) => lessonIds.has(node.id))).toBe(true);
  });
});
