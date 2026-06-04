import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { aiPassportCourse } from '../courses/ai-passport';
import { LessonWorkspace } from '../features/knowledge-graph/components/LessonWorkspace';
import { views } from '../features/knowledge-graph/components/studyNavigationConfig';

const selectedNode = aiPassportCourse.nodes.find((node) => node.id === aiPassportCourse.defaultNodeId) ?? aiPassportCourse.nodes[0];
const baseProps = {
  nodes: aiPassportCourse.nodes,
  selectedNode,
  connectedNodes: [],
  favorites: [],
  recent: [],
  statuses: {},
  stats: { total: aiPassportCourse.nodes.length, mastered: 0, learning: 0, needReview: 0, fresh: aiPassportCourse.nodes.length, favorites: 0 },
  language: 'vi' as const,
  lessons: aiPassportCourse.lessons,
  quizzes: aiPassportCourse.quizzes,
  studyPath: aiPassportCourse.studyPath,
  comparePairs: aiPassportCourse.comparePairs,
  courseTitle: aiPassportCourse.title,
  isFavorite: false,
  onSelectNode: vi.fn(),
  onToggleStatus: vi.fn(),
  onMasterNext: vi.fn(),
  onNeedReview: vi.fn(),
  onSetStatus: vi.fn(),
  onToggleFavorite: vi.fn(),
  onView: vi.fn(),
};

describe('V53 AI Passport UX focus mode', () => {
  it('renders beginner focus mode as the start screen', () => {
    render(React.createElement(LessonWorkspace, { ...baseProps, activeView: 'start' }));
    expect(screen.getByText(/Beginner Focus Mode/i)).toBeTruthy();
    expect(screen.getByText(/học → quiz → review/i)).toBeTruthy();
    expect(screen.getByText(/Tiếp tục học/i)).toBeTruthy();
    expect(screen.getByText(/Ôn bài cần review/i)).toBeTruthy();
    expect(screen.getByText(/Làm quiz hôm nay/i)).toBeTruthy();
  });

  it('keeps core beginner views compact in navigation', () => {
    const mainViews = views.filter((view) => view.group === 'main').map((view) => view.id);
    expect(mainViews).toEqual(['start', 'phaseStudy', 'japanese']);
    expect(views.find((view) => view.id === 'graph')?.group).toBe('advanced');
  });

  it('keeps AI Passport lessons fully covered after UX changes', () => {
    const nodeIds = new Set(aiPassportCourse.nodes.map((node) => node.id));
    const lessonIds = new Set(aiPassportCourse.lessons.map((lesson) => lesson.nodeId));
    expect(aiPassportCourse.nodes).toHaveLength(172);
    expect(aiPassportCourse.lessons).toHaveLength(172);
    expect([...nodeIds].filter((id) => !lessonIds.has(id))).toEqual([]);
  });
});
