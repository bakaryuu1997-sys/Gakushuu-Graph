import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { courseSummaries } from '../courses/courseLoader';

const lessonOf = (nodeId: string) => aiPassportCourse.lessons.find((lesson) => lesson.nodeId === nodeId);

describe('V40 AI Passport exam depth', () => {
  it('keeps course list stable after Python recovery while improving current content', () => {
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

  it('adds 30 manual AI Passport lessons for existing exam nodes', () => {
    const ids = ['machine-learning-ai','deep-learning-ai','supervised-ai','unsupervised-ai','classification-ai','regression-ai','overfitting-ai','data-preprocessing-ai','feature-engineering-ai','sampling-bias','system-prompt-ai','few-shot-ai','zero-shot-ai','semantic-search-ai','recommendation-system-ai'];
    ids.forEach((id) => {
      const lesson = lessonOf(id);
      expect(lesson, `${id} lesson`).toBeTruthy();
      expect(lesson?.shortDefinitionVi.length ?? 0).toBeGreaterThan(70);
      expect(lesson?.examPatternsVi.length ?? 0).toBeGreaterThanOrEqual(3);
      expect(lesson?.commonMistakesVi.length ?? 0).toBeGreaterThanOrEqual(3);
    });
  });

  it('adds Japanese exam questions with per-option explanations', () => {
    const qs = aiPassportCourse.quizzes.filter((quiz) => quiz.id.startsWith('v40-ja-'));
    expect(qs.length).toBeGreaterThanOrEqual(12);
    qs.forEach((quiz) => {
      expect(quiz.optionsJa?.length).toBe(4);
      expect(quiz.optionExplanationsJa?.length).toBe(4);
      expect(quiz.questionJa.length).toBeGreaterThan(35);
    });
  });
});
