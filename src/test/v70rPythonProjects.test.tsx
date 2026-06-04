import { describe, expect, it } from 'vitest';
import { pythonMiniProjects } from '../courses/python/projectPortfolio';
import { createProjectDraftExercise, summarizeProjectProgress } from '../features/knowledge-graph/components/pythonProjectProgress';

describe('V70R Python mini projects', () => {
  it('ships a diverse mini project portfolio with VI/JA explanations', () => {
    expect(pythonMiniProjects.length).toBeGreaterThanOrEqual(6);
    expect(pythonMiniProjects.some((project) => project.kind === 'fastapi')).toBe(true);
    expect(pythonMiniProjects.some((project) => project.kind === 'ai-api')).toBe(true);
    for (const project of pythonMiniProjects) {
      expect(project.requirementsVi.length).toBeGreaterThanOrEqual(2);
      expect(project.requirementsJa.length).toBe(project.requirementsVi.length);
      expect(project.starterCode.length).toBeGreaterThan(20);
      expect(project.testCases.length).toBeGreaterThanOrEqual(2);
      expect(project.explanationVi.length).toBeGreaterThan(30);
      expect(project.explanationJa.length).toBeGreaterThan(20);
    }
  });

  it('creates Code Lab compatible draft exercises from projects', () => {
    const draft = createProjectDraftExercise(pythonMiniProjects[0]);
    expect(draft.id).toContain('project-draft-');
    expect(draft.visibleTests.length).toBeGreaterThanOrEqual(2);
    expect(draft.explanationVi).toBeTruthy();
  });

  it('summarizes local project progress and suggests next project', () => {
    const summary = summarizeProjectProgress([{ projectId: pythonMiniProjects[0].id, status: 'done', attempts: 1, updatedAt: new Date().toISOString() }]);
    expect(summary.total).toBe(pythonMiniProjects.length);
    expect(summary.done).toBe(1);
    expect(summary.nextProject.id).not.toBe(pythonMiniProjects[0].id);
  });
});
