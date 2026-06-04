import { describe, expect, it } from 'vitest';
import { frontendCourse } from '../courses/frontend';
import { sqlCourse } from '../courses/sql';
import { courses } from '../courses/courseRegistry';

describe('V29 SQL and Frontend upgrades', () => {
  it('splits and expands Frontend course with many quizzes', () => {
    expect(frontendCourse.nodes.length).toBeGreaterThanOrEqual(90);
    expect(frontendCourse.quizzes.length).toBeGreaterThanOrEqual(80);
    expect(frontendCourse.studyPath.length).toBeGreaterThanOrEqual(8);
    expect(frontendCourse.nodes.some((node) => node.id === 'tanstack-query')).toBe(true);
    expect(frontendCourse.nodes.some((node) => node.id === 'web-vitals')).toBe(true);
  });

  it('adds SQL Roadmap as a real course', () => {
    expect(courses.some((course) => course.id === 'sql')).toBe(true);
    expect(sqlCourse.nodes.length).toBeGreaterThanOrEqual(25);
    expect(sqlCourse.quizzes.length).toBeGreaterThanOrEqual(25);
    expect(sqlCourse.studyPath.length).toBeGreaterThanOrEqual(4);
    expect(sqlCourse.nodes.some((node) => node.id === 'join')).toBe(true);
    expect(sqlCourse.nodes.some((node) => node.id === 'transaction')).toBe(true);
  });
});
