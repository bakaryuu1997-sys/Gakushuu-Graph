import { describe, expect, it } from 'vitest';
import { courseSummaries, loadCourseById } from '../courses/courseLoader';
import { sqlCourse } from '../courses/sql';

describe('V30 separated SQL and AI courses', () => {
  it('keeps SQL as a separate course, not mixed into AI Passport', async () => {
    const aiCourse = await loadCourseById('ai-passport');
    const loadedSql = await loadCourseById('sql');
    expect(aiCourse.id).toBe('ai-passport');
    expect(loadedSql.id).toBe('sql');
    expect(aiCourse.nodes.some((node) => node.id === 'select')).toBe(false);
    expect(loadedSql.nodes.some((node) => node.id === 'select')).toBe(true);
  });

  it('expands SQL roadmap into a serious course', () => {
    expect(courseSummaries.some((course) => course.id === 'sql')).toBe(true);
    expect(sqlCourse.nodes.length).toBeGreaterThanOrEqual(80);
    expect(sqlCourse.quizzes.length).toBeGreaterThanOrEqual(80);
    expect(sqlCourse.studyPath.length).toBeGreaterThanOrEqual(8);
    expect(sqlCourse.nodes.some((node) => node.id === 'window-function')).toBe(true);
    expect(sqlCourse.nodes.some((node) => node.id === 'parameterized-query')).toBe(true);
  });
});
