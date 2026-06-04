import { describe, expect, it } from 'vitest';
import { brseCourse } from '../courses/brse';
import { loadCourseById } from '../courses/courseLoader';
import { sqlCourse } from '../courses/sql';

describe('V31 BrSE and course-specific practice', () => {
  it('adds BrSE as a separate course', async () => {
    const brse = await loadCourseById('brse');
    const ai = await loadCourseById('ai-passport');
    expect(brse.id).toBe('brse');
    expect(brse.nodes.length).toBeGreaterThanOrEqual(35);
    expect(brse.quizzes.length).toBe(brse.nodes.length);
    expect(ai.nodes.some((node) => node.id === 'requirement-definition')).toBe(false);
    expect(brse.nodes.some((node) => node.id === 'requirement-definition')).toBe(true);
  });

  it('keeps SQL and BrSE data separated', () => {
    expect(sqlCourse.nodes.some((node) => node.id === 'select')).toBe(true);
    expect(brseCourse.nodes.some((node) => node.id === 'select')).toBe(false);
    expect(brseCourse.nodes.some((node) => node.id === 'bug-report')).toBe(true);
  });
});
