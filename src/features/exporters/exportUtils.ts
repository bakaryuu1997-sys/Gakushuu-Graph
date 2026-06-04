import type { CourseId } from '../../courses/types';
import type { ProgressState } from '../knowledge-graph/types';

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

export const exportProgressJson = (courseId: CourseId, progress: ProgressState) => {
  const blob = new Blob([JSON.stringify({ courseId, progress }, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `${courseId}-progress.json`);
};
