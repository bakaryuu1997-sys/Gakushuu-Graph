import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { courseSummaries } from '../courses/courseLoader';

const lessonOf = (nodeId: string) => aiPassportCourse.lessons.find((lesson) => lesson.nodeId === nodeId);
const quizNodeIds = new Set(aiPassportCourse.quizzes.map((quiz) => quiz.nodeId));

describe('V39 AI Passport deep quality', () => {
  it('keeps current course set stable while improving content', () => {
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

  it('adds deep AI Passport lessons for scenario-critical topics', () => {
    [
      'generative-ai','llm','prompt-engineering','vector-database-ai','retrieval-ai','multimodal-ai',
      'prompt-injection-ai','personal-information-ai','copyright-ai','bias-fairness','data-leakage-ai','confusion-matrix-ai',
      'ai-governance','ai-risk-management','ai-project-flow','roi-ai',
    ].forEach((id) => {
      const lesson = lessonOf(id);
      expect(lesson, `${id} lesson`).toBeTruthy();
      expect(lesson?.shortDefinitionVi.length ?? 0).toBeGreaterThan(70);
      expect(lesson?.whyImportantVi.length ?? 0).toBeGreaterThan(70);
      expect(lesson?.commonMistakesVi.length ?? 0).toBeGreaterThanOrEqual(3);
    });
  });

  it('adds hard AI scenario quiz coverage', () => {
    ['personal-information-ai','rag','hallucination','bias-fairness','copyright-ai','prompt-injection-ai','data-leakage-ai','ai-monitoring','ai-governance','roi-ai','vector-database-ai','model-drift-ai'].forEach((id) => {
      expect(quizNodeIds.has(id), `${id} quiz`).toBe(true);
    });
    expect(aiPassportCourse.quizzes.filter((quiz) => quiz.id.startsWith('v39-ai-s')).length).toBeGreaterThanOrEqual(10);
  });
});
