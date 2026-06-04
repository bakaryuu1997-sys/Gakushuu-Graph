import type { ProgressState, StudyStatus } from '../types';
import type { StudyUxMode } from '../components/studyUxMode';

const DEFAULT_STATE: ProgressState = { statuses: {}, favorites: [], recent: [] };

const progressKey = (courseId: string) => `study-atlas-progress:${courseId}:v1`;
const selectedCourseKey = 'study-atlas-selected-course:v1';
const studyUxModeKey = 'study-atlas-ux-mode:v1';

export const readProgress = (courseId: string): ProgressState => {
  try {
    const raw = window.localStorage.getItem(progressKey(courseId));
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) as ProgressState } : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
};

export const writeProgress = (courseId: string, state: ProgressState): void => {
  try {
    window.localStorage.setItem(progressKey(courseId), JSON.stringify(state));
  } catch {
    // LocalStorage may be unavailable in private mode. The app still works in memory.
  }
};

export const readSelectedCourse = <T extends string>(fallback: T): T => {
  try {
    return (window.localStorage.getItem(selectedCourseKey) as T | null) ?? fallback;
  } catch {
    return fallback;
  }
};

export const writeSelectedCourse = (courseId: string): void => {
  try {
    window.localStorage.setItem(selectedCourseKey, courseId);
  } catch {
    // Ignore storage failures.
  }
};


export const readStudyUxMode = (): StudyUxMode => {
  try {
    return window.localStorage.getItem(studyUxModeKey) === 'advanced' ? 'advanced' : 'beginner';
  } catch {
    return 'beginner';
  }
};

export const writeStudyUxMode = (mode: StudyUxMode): void => {
  try {
    window.localStorage.setItem(studyUxModeKey, mode);
  } catch {
    // Ignore storage failures. The selected UX mode still works for the current session.
  }
};

export const nextStatus = (status: StudyStatus | undefined): StudyStatus => {
  if (!status || status === 'new') return 'learning';
  if (status === 'learning') return 'need_review';
  if (status === 'need_review') return 'mastered';
  return 'new';
};
