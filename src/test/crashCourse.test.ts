import { describe, expect, it } from 'vitest';
import { courses } from '../courses/courseRegistry';

describe('exam crash course readiness', () => {
  it('has enough high-priority material for 3-day and 7-day review', () => {
    const aiCourse = courses.find((course) => course.id === 'ai-passport');
    expect(aiCourse).toBeTruthy();
    if (!aiCourse) return;

    const ordered = aiCourse.studyPath.flatMap((phase) => phase.nodeIds);
    const uniqueOrdered = Array.from(new Set(ordered));
    const highPriority = aiCourse.nodes.filter((node) => node.importance === 'high');

    expect(uniqueOrdered.length).toBeGreaterThanOrEqual(100);
    expect(highPriority.length).toBeGreaterThanOrEqual(36);
  });
});
