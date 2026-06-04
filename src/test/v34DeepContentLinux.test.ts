import { describe, expect, it } from 'vitest';
import { brseCourse } from '../courses/brse';
import { linuxCourse } from '../courses/linux';
import { loadCourseById } from '../courses/courseLoader';

describe('V34 rich learning content and Linux course', () => {
  it('adds deep manual BrSE lessons while preserving full lesson coverage', () => {
    expect(brseCourse.nodes.length).toBeGreaterThanOrEqual(95);
    expect(brseCourse.lessons.length).toBe(brseCourse.nodes.length);
    const req = brseCourse.lessons.find((lesson) => lesson.nodeId === 'requirement-definition');
    expect(req?.shortDefinitionVi).toContain('phạm vi');
    expect(brseCourse.lessons.some((lesson) => lesson.nodeId === 'production-incident')).toBe(true);
  });

  it('adds Linux / Terminal as a separate course', async () => {
    const linux = await loadCourseById('linux');
    expect(linux.id).toBe('linux');
    expect(linuxCourse.nodes.length).toBeGreaterThanOrEqual(40);
    expect(linuxCourse.quizzes.length).toBe(linuxCourse.nodes.length);
    expect(linuxCourse.nodes.some((node) => node.id === 'grep')).toBe(true);
    expect(linuxCourse.nodes.some((node) => node.id === 'docker-compose')).toBe(true);
  });
});
