import { describe, expect, it } from 'vitest';
import { pythonCourse } from '../courses/python';
import { pythonCodeExercises } from '../courses/python/codeExercises';

describe('V68R Python rebuild', () => {
  it('restores Python course with detailed lessons and quizzes', () => {
    expect(pythonCourse.id).toBe('python');
    expect(pythonCourse.nodes.length).toBeGreaterThanOrEqual(100);
    expect(pythonCourse.lessons.length).toBe(pythonCourse.nodes.length);
    expect(pythonCourse.quizzes.length).toBe(pythonCourse.nodes.length);
    expect(pythonCourse.lessons.every((lesson) => lesson.shortDefinitionVi && lesson.shortDefinitionJa && lesson.memoryTipVi && lesson.memoryTipJa)).toBe(true);
  });

  it('keeps Python focused on FastAPI and code practice', () => {
    expect(pythonCourse.nodes.some((node) => node.id === 'fastapi-routing')).toBe(true);
    expect(pythonCourse.nodes.some((node) => node.labelVi.toLowerCase().includes('flask'))).toBe(false);
    expect(pythonCodeExercises.length).toBeGreaterThanOrEqual(10);
    expect(pythonCodeExercises.some((exercise) => exercise.kind === 'backend')).toBe(true);
    expect(pythonCodeExercises.some((exercise) => exercise.kind === 'algorithm')).toBe(true);
  });
});
