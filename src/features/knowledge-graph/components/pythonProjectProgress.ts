import { pythonMiniProjects } from '../../../courses/python/projectPortfolio';
import type { PythonMiniProject } from '../../../courses/python/projectPortfolio';

export type PythonProjectStatus = 'new' | 'learning' | 'reviewed' | 'done';
export type PythonProjectAttemptStatus = 'opened' | 'passed' | 'failed' | 'static-reviewed';
export interface PythonProjectProgressRecord { projectId: string; status: PythonProjectStatus; attempts: number; updatedAt: string; }
export interface PythonProjectAttemptRecord { projectId: string; title: string; status: PythonProjectAttemptStatus; passed: number; total: number; updatedAt: string; notes?: string; }
const STORAGE_KEY = 'v70r-python-project-progress';
const ATTEMPT_KEY = 'v71r-python-project-attempt-history';
const DRAFT_KEY = 'v71r-python-project-code-lab-draft';

const parse = <T,>(raw: string | null): T[] => {
  if (!raw) return [];
  try { const value = JSON.parse(raw); return Array.isArray(value) ? value : []; } catch { return []; }
};
export const readPythonProjectProgress = () => typeof window === 'undefined' ? [] : parse<PythonProjectProgressRecord>(window.localStorage.getItem(STORAGE_KEY));
export const readPythonProjectAttempts = () => typeof window === 'undefined' ? [] : parse<PythonProjectAttemptRecord>(window.localStorage.getItem(ATTEMPT_KEY));
export const writePythonProjectProgress = (projectId: string, status: PythonProjectStatus) => {
  if (typeof window === 'undefined') return [];
  const current = readPythonProjectProgress();
  const previous = current.find((item) => item.projectId === projectId);
  const next: PythonProjectProgressRecord = { projectId, status, attempts: (previous?.attempts ?? 0) + 1, updatedAt: new Date().toISOString() };
  const saved = [next, ...current.filter((item) => item.projectId !== projectId)].slice(0, 60);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  window.dispatchEvent(new CustomEvent('v70r-python-project-progress-updated'));
  return saved;
};
export const writePythonProjectAttempt = (record: Omit<PythonProjectAttemptRecord, 'updatedAt'>) => {
  if (typeof window === 'undefined') return [];
  const next: PythonProjectAttemptRecord = { ...record, updatedAt: new Date().toISOString() };
  const saved = [next, ...readPythonProjectAttempts()].slice(0, 40);
  window.localStorage.setItem(ATTEMPT_KEY, JSON.stringify(saved));
  window.dispatchEvent(new CustomEvent('v71r-python-project-attempt-updated'));
  if (record.status === 'passed' || record.status === 'static-reviewed') writePythonProjectProgress(record.projectId, record.status === 'passed' ? 'done' : 'reviewed');
  if (record.status === 'failed') writePythonProjectProgress(record.projectId, 'learning');
  return saved;
};
export const resetPythonProjectProgress = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(ATTEMPT_KEY);
    window.localStorage.removeItem(DRAFT_KEY);
    window.dispatchEvent(new CustomEvent('v70r-python-project-progress-updated'));
    window.dispatchEvent(new CustomEvent('v71r-python-project-attempt-updated'));
  }
};
export const summarizeProjectProgress = (records: PythonProjectProgressRecord[]) => {
  const done = records.filter((item) => item.status === 'done').length;
  const learning = records.filter((item) => item.status === 'learning').length;
  const reviewed = records.filter((item) => item.status === 'reviewed').length;
  const nextProject = pythonMiniProjects.find((project) => !records.some((item) => item.projectId === project.id && item.status === 'done')) ?? pythonMiniProjects[0];
  return { total: pythonMiniProjects.length, done, learning, reviewed, percent: Math.round((done / pythonMiniProjects.length) * 100), nextProject };
};
export const createProjectDraftExercise = (project: PythonMiniProject) => ({
  id: `project-draft-${project.id}`,
  title: project.title,
  titleJa: project.titleJa,
  kind: project.kind === 'fastapi' || project.kind === 'ai-api' ? 'backend' : project.kind === 'data' ? 'file' : 'function',
  level: project.level === 'beginner' ? 'easy' : project.level === 'standard' ? 'standard' : 'hard',
  promptVi: project.requirementsVi.join(' '),
  promptJa: project.requirementsJa.join(' '),
  starterCode: project.starterCode,
  visibleTests: project.testCases,
  hiddenTests: [],
  hintsVi: project.checklistVi,
  hintsJa: project.checklistJa,
  solution: project.solution,
  relatedNodeId: project.relatedNodeId,
  explanationVi: project.explanationVi,
  explanationJa: project.explanationJa,
  mistakeTags: [project.kind, project.level],
});
export const saveProjectDraftForCodeLab = (project: PythonMiniProject) => {
  const draft = createProjectDraftExercise(project);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    writePythonProjectAttempt({ projectId: project.id, title: project.title, status: 'opened', passed: 0, total: project.testCases.length, notes: 'opened in Code Lab' });
  }
  return draft;
};
