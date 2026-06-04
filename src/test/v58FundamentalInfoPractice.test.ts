import { describe, expect, it } from 'vitest';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoPracticeTasks } from '../courses/fundamental-info/practice';
import { views } from '../features/knowledge-graph/components/studyViewItems';

describe('V58 Fundamental Info exam practice and 科目B drills', () => {
  it('keeps Fundamental Info lessons detailed while adding practice coverage', () => {
    expect(fundamentalInfoCourse.nodes.length).toBeGreaterThanOrEqual(66);
    expect(fundamentalInfoCourse.lessons).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCourse.quizzes).toHaveLength(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoPracticeTasks.length).toBeGreaterThanOrEqual(9);
  });

  it('covers pseudo-code, SQL, and subnet drills with explanations and related nodes', () => {
    for (const kind of ['pseudo-code', 'sql', 'subnet'] as const) {
      const tasks = fundamentalInfoPracticeTasks.filter((task) => task.kind === kind);
      expect(tasks.length, `${kind} should have at least 3 tasks`).toBeGreaterThanOrEqual(3);
      tasks.forEach((task) => {
        expect(task.choicesVi).toHaveLength(4);
        expect(task.choicesJa).toHaveLength(4);
        expect(task.answerIndex).toBeGreaterThanOrEqual(0);
        expect(task.answerIndex).toBeLessThan(4);
        expect(task.explanationVi.length).toBeGreaterThan(40);
        expect(task.explanationJa.length).toBeGreaterThan(30);
        expect(task.examTipVi.length).toBeGreaterThan(30);
        expect(task.relatedNodeIds.length).toBeGreaterThan(0);
      });
    }
  });

  it('keeps the FE exam simulator available through the existing session route', () => {
    const sessionView = views.find((view) => view.id === 'session');
    expect(sessionView?.label).toMatch(/Exam Simulator/);
    expect(fundamentalInfoCourse.quizzes.filter((quiz) => quiz.nodeId !== 'fundamental-info').length).toBeGreaterThanOrEqual(60);
  });
});
