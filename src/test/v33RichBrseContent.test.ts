import { describe, expect, it } from 'vitest';
import { brseCourse } from '../courses/brse';

describe('V33 rich BrSE learning content', () => {
  it('expands BrSE course with rich practical topics', () => {
    expect(brseCourse.nodes.length).toBeGreaterThanOrEqual(90);
    expect(brseCourse.quizzes.length).toBe(brseCourse.nodes.length);
    expect(brseCourse.studyPath.length).toBeGreaterThanOrEqual(8);
    expect(brseCourse.nodes.some((node) => node.id === 'non-functional-requirement')).toBe(true);
    expect(brseCourse.nodes.some((node) => node.id === 'screen-item-definition')).toBe(true);
    expect(brseCourse.nodes.some((node) => node.id === 'release-judgement')).toBe(true);
    expect(brseCourse.nodes.some((node) => node.id === 'production-incident')).toBe(true);
  });

  it('keeps BrSE lessons aligned with nodes', () => {
    const lessonIds = new Set(brseCourse.lessons.map((lesson) => lesson.nodeId));
    expect(brseCourse.nodes.every((node) => lessonIds.has(node.id))).toBe(true);
  });
});
