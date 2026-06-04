import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { brseCourse } from '../courses/brse';
import { sqlCourse } from '../courses/sql';
import type { LessonContent } from '../features/knowledge-graph/data/lessonContent';

const lessonMap = (lessons: LessonContent[]) => lessons.reduce((map, lesson) => map.has(lesson.nodeId) ? map : map.set(lesson.nodeId, lesson), new Map<string, LessonContent>());
const assertDeepLesson = (lessons: Map<string, LessonContent>, nodeId: string) => {
  const lesson = lessons.get(nodeId);
  expect(lesson, `${nodeId} should have a lesson`).toBeTruthy();
  expect((lesson?.shortDefinitionVi.length ?? 0), `${nodeId} definition should be detailed`).toBeGreaterThan(45);
  expect((lesson?.whyImportantVi.length ?? 0), `${nodeId} importance should be detailed`).toBeGreaterThan(45);
  expect((lesson?.examPatternsVi.length ?? 0), `${nodeId} exam patterns`).toBeGreaterThanOrEqual(3);
  expect((lesson?.commonMistakesVi.length ?? 0), `${nodeId} mistakes`).toBeGreaterThanOrEqual(3);
};

describe('V35 course quality audit', () => {
  it('has deep AI Passport lessons for critical exam concepts', () => {
    const lessons = lessonMap(aiPassportCourse.lessons);
    ['machine-learning-ai','deep-learning-ai','supervised-ai','unsupervised-ai','llm','hallucination','rag','personal-information-ai','copyright-ai','bias-fairness','ai-governance'].forEach((id) => assertDeepLesson(lessons, id));
  });

  it('has deep SQL lessons for practical query and safety topics', () => {
    const lessons = lessonMap(sqlCourse.lessons);
    ['select','where','join','group-by','having','update','delete','transaction','index','sql-injection','parameterized-query'].forEach((id) => assertDeepLesson(lessons, id));
  });

  it('has deep BrSE lessons for practical documentation and project control', () => {
    const lessons = lessonMap(brseCourse.lessons);
    ['requirement-definition','basic-design','screen-item-definition','api-spec','test-case','bug-report','change-request','impact-analysis','minutes','status-report','release-judgement','production-incident'].forEach((id) => assertDeepLesson(lessons, id));
  });

  it('keeps AI Passport, SQL, and BrSE separated by domain-specific nodes', () => {
    expect(aiPassportCourse.nodes.some((node) => node.id === 'select')).toBe(false);
    expect(sqlCourse.nodes.some((node) => node.id === 'select')).toBe(true);
    expect(brseCourse.nodes.some((node) => node.id === 'requirement-definition')).toBe(true);
    expect(sqlCourse.nodes.some((node) => node.id === 'requirement-definition')).toBe(false);
  });
});
