import { useEffect, useMemo, useState } from 'react';
import { nextStatus, readProgress, writeProgress } from '../utils/localStorage';
import type { KnowledgeNodeData, ProgressState, StudyStatus } from '../types';

export const useProgress = (courseId: string, nodes: KnowledgeNodeData[]) => {
  const [progress, setProgress] = useState<ProgressState>(() => readProgress(courseId));

  useEffect(() => {
    setProgress(readProgress(courseId));
  }, [courseId]);

  useEffect(() => {
    writeProgress(courseId, progress);
  }, [courseId, progress]);

  const setNodeStatus = (nodeId: string) => {
    setProgress((current) => ({
      ...current,
      statuses: {
        ...current.statuses,
        [nodeId]: nextStatus(current.statuses[nodeId]),
      },
    }));
  };

  const markMastered = (nodeId: string) => {
    setProgress((current) => ({
      ...current,
      statuses: { ...current.statuses, [nodeId]: 'mastered' },
    }));
  };

  const setStatus = (nodeId: string, status: StudyStatus) => {
    setProgress((current) => ({
      ...current,
      statuses: { ...current.statuses, [nodeId]: status },
    }));
  };

  const markNeedReview = (nodeId: string) => setStatus(nodeId, 'need_review');

  const toggleFavorite = (nodeId: string) => {
    setProgress((current) => ({
      ...current,
      favorites: current.favorites.includes(nodeId)
        ? current.favorites.filter((id) => id !== nodeId)
        : [nodeId, ...current.favorites],
    }));
  };

  const pushRecent = (nodeId: string) => {
    setProgress((current) => ({
      ...current,
      recent: [nodeId, ...current.recent.filter((id) => id !== nodeId)].slice(0, 8),
    }));
  };

  const resetProgress = () => setProgress({ statuses: {}, favorites: [], recent: [] });
  const importProgress = (nextProgress: ProgressState) => setProgress({
    statuses: nextProgress.statuses ?? {},
    favorites: nextProgress.favorites ?? [],
    recent: nextProgress.recent ?? [],
  });

  const stats = useMemo(() => {
    const nodeIds = new Set(nodes.map((node) => node.id));
    const statuses = Object.entries(progress.statuses)
      .filter(([nodeId]) => nodeIds.has(nodeId))
      .map(([, status]) => status);
    const mastered = statuses.filter((status: StudyStatus) => status === 'mastered').length;
    const learning = statuses.filter((status: StudyStatus) => status === 'learning').length;
    const needReview = statuses.filter((status: StudyStatus) => status === 'need_review').length;
    return {
      total: nodes.length,
      mastered,
      learning,
      needReview,
      fresh: Math.max(nodes.length - mastered - learning - needReview, 0),
      favorites: progress.favorites.filter((id) => nodeIds.has(id)).length,
    };
  }, [nodes, progress.favorites, progress.statuses]);

  const percentage = nodes.length > 0 ? Math.round((stats.mastered / nodes.length) * 100) : 0;

  return { progress, percentage, stats, setNodeStatus, setStatus, markMastered, markNeedReview, toggleFavorite, pushRecent, resetProgress, importProgress };
};
