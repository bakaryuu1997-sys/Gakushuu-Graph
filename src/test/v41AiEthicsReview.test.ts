import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { courseSummaries } from '../courses/courseLoader';

const lessonOf = (nodeId: string) => aiPassportCourse.lessons.find((lesson) => lesson.nodeId === nodeId);

describe('V41 AI ethics and review depth', () => {
  it('keeps course list stable after Python recovery', () => {
    expect(courseSummaries.map((course) => course.id)).toEqual([
      'ai-passport',
      'fundamental-info',
      'python',
      'frontend',
      'sql',
      'brse',
      'linux',
      'it-passport',
    ]);
  });

  it('adds law ethics business lessons for AI Passport', () => {
    ['accountability-ai','data-minimization-ai','audit-log-ai','guardrails-ai','high-risk-ai','vendor-risk-ai','incident-response-ai','rollback-ai'].forEach((id) => {
      const lesson = lessonOf(id);
      expect(lesson, `${id} lesson`).toBeTruthy();
      expect(lesson?.shortDefinitionVi.length ?? 0).toBeGreaterThan(60);
      expect(lesson?.examPatternsVi.length ?? 0).toBeGreaterThanOrEqual(3);
      expect(lesson?.commonMistakesVi.length ?? 0).toBeGreaterThanOrEqual(3);
    });
  });

  it('adds many Japanese scenario questions with option explanations', () => {
    const qs = aiPassportCourse.quizzes.filter((quiz) => quiz.id.startsWith('v41-ja-'));
    expect(qs.length).toBeGreaterThanOrEqual(25);
    qs.forEach((quiz) => {
      expect(quiz.optionExplanationsJa?.length).toBe(4);
      expect(quiz.questionJa.length).toBeGreaterThan(35);
    });
  });

  it('has a strong wrong-answer review source', () => {
    const explainable = aiPassportCourse.quizzes.filter((quiz) => quiz.optionExplanationsJa?.length || quiz.optionExplanationsVi?.length);
    expect(explainable.length).toBeGreaterThanOrEqual(40);
  });
});
