import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LessonWorkspace } from '../features/knowledge-graph/components/LessonWorkspace';
import { LessonPanel } from '../features/knowledge-graph/components/LessonPanel';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

const node: KnowledgeNodeData = {
  id: 'python-number',
  labelJa: 'Number',
  labelVi: 'Số trong Python',
  labelEn: 'Number',
  category: 'software',
  level: 'topic',
  importance: 'high',
  summaryVi: 'Học số trong Python.',
  summaryJa: 'Pythonの数値。',
  examPointVi: 'Phân biệt string và number.',
  examPointJa: '文字列と数値の違い。',
  examples: ['int("12")'],
  keywords: ['python', 'number'],
  prerequisites: [],
  related: [],
};

const baseProps: LessonWorkspaceProps = {
  activeView: 'coverage',
  nodes: [node],
  selectedNode: node,
  connectedNodes: [],
  favorites: [],
  recent: [],
  statuses: {},
  stats: { total: 1, mastered: 0, learning: 0, needReview: 0, fresh: 1, favorites: 0 },
  language: 'vi',
  lessons: [],
  quizzes: [],
  studyPath: [],
  comparePairs: [],
  courseTitle: 'Python',
  courseId: 'python',
  isFavorite: false,
  onSelectNode: () => undefined,
  onToggleStatus: () => undefined,
  onMasterNext: () => undefined,
  onNeedReview: () => undefined,
  onSetStatus: () => undefined,
  onToggleFavorite: () => undefined,
};

describe('V111R performance code splitting', () => {
  it('shows a normal-flow fallback while the coverage dashboard is lazy-loaded', () => {
    render(<LessonWorkspace {...baseProps} />);
    expect(screen.getByText(/Đang tải công cụ nặng/i)).toBeTruthy();
  });

  it('shows a normal-flow fallback while lesson detail content is lazy-loaded', () => {
    render(<LessonPanel {...baseProps} />);
    expect(screen.getByText(/Đang tải nội dung bài học viết tay/i)).toBeTruthy();
  });
});
