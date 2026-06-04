import type { CourseId } from './types';

export interface V113CoverageChapterSummary {
  courseId: CourseId;
  label: string;
  count: number;
}

export interface V113CoverageData {
  manual: number;
  priority: number;
  prioritySummary: V113CoverageChapterSummary[];
}

export async function loadV113CoverageData(courseId: CourseId): Promise<V113CoverageData> {
  const v110Module = await import('./v110ManualChapterPack');
  return {
    manual: v110Module.v110ChaptersForCourse(courseId).length,
    priority: v110Module.v110PriorityChaptersForCourse(courseId).length,
    prioritySummary: v110Module.v110PriorityExpansionSummary,
  };
}
