import { describe, expect, it } from 'vitest';
import { courses } from '../courses/courseRegistry';

describe('quiz bank quality', () => {
  it('has valid answer indexes and explanations', () => {
    courses.forEach((course) => {
      const nodeIds = new Set(course.nodes.map((node) => node.id));
      expect(course.quizzes.length).toBeGreaterThan(0);
      course.quizzes.forEach((quiz) => {
        expect(nodeIds.has(quiz.nodeId), `${course.id}: quiz references missing node ${quiz.nodeId}`).toBe(true);
        expect(quiz.options.length).toBeGreaterThanOrEqual(4);
        expect(quiz.answerIndex).toBeGreaterThanOrEqual(0);
        expect(quiz.answerIndex).toBeLessThan(quiz.options.length);
        expect(quiz.questionVi.trim().length).toBeGreaterThan(5);
        expect(quiz.questionJa.trim().length).toBeGreaterThan(5);
        expect(quiz.explanationVi.trim().length).toBeGreaterThan(8);
        expect(quiz.explanationJa.trim().length).toBeGreaterThan(8);
      });
    });
  });

  it('keeps AI Passport quiz bank large enough for real study', () => {
    const aiCourse = courses.find((course) => course.id === 'ai-passport');
    expect(aiCourse?.quizzes.length).toBeGreaterThanOrEqual(300);
    expect(aiCourse?.quizzes.filter((quiz) => quiz.optionsJa).length).toBeGreaterThanOrEqual(30);
  });
});
