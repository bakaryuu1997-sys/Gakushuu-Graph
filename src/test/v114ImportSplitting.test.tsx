import { describe, expect, it } from 'vitest';
import { loadCourseById } from '../courses/courseLoader';
import { loadV114LessonData } from '../courses/v114LessonDataLoader';

describe('V114 import splitting', () => {
  it('keeps python course content after course-specific enhancer split', async () => {
    const course = await loadCourseById('python');
    expect(course.nodes.length).toBeGreaterThan(50);
    expect(course.lessons.length).toBe(course.nodes.length);
    expect(course.nodes.some((node) => node.keywords.includes('V101R-easy-lesson'))).toBe(true);
  });

  it('loads non-core written lessons without using the old V104 course-loader path', async () => {
    const course = await loadCourseById('sql');
    expect(course.lessons.length).toBe(course.nodes.length);
    expect(course.nodes.some((node) => node.keywords.some((keyword) => keyword.includes('V114R-non-core-written')))).toBe(true);
  });

  it('uses the V114 lesson data loader for course-specific lesson data', async () => {
    const python = await loadCourseById('python');
    const data = await loadV114LessonData('python', python.nodes.find((node) => node.id.includes('class')) ?? python.nodes[0]);
    expect(data.v104Lesson.courseLabel).toContain('V114R');
    expect(data.pythonEasyLesson).toBeTruthy();
  });
});
