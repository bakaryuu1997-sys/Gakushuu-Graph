import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { frontendCourse } from '../courses/frontend';
import { LessonWorkspace } from '../features/knowledge-graph/components/LessonWorkspace';
import { MiniQuiz } from '../features/knowledge-graph/components/MiniQuiz';

afterEach(() => cleanup());

describe('Frontend roadmap and lesson flow', () => {
  it('expands Frontend course into a real multi-phase roadmap', () => {
    expect(frontendCourse.nodes.length).toBeGreaterThanOrEqual(30);
    expect(frontendCourse.studyPath.length).toBeGreaterThanOrEqual(4);
    expect(frontendCourse.quizzes.length).toBeGreaterThanOrEqual(8);
    expect(frontendCourse.nodes.some((node) => node.id === 'accessibility')).toBe(true);
    expect(frontendCourse.nodes.some((node) => node.id === 'performance')).toBe(true);
  });

  it('renders MiniQuiz and reveals the answer explanation', () => {
    const quiz = frontendCourse.quizzes[0];
    render(React.createElement(MiniQuiz, { nodeId: quiz.nodeId, quizzes: frontendCourse.quizzes, language: 'vi' }));
    expect(screen.getByText(/Mini quiz ngay bài học/i)).toBeTruthy();
    fireEvent.click(screen.getByText(quiz.options[quiz.answerIndex]));
    expect(screen.getByText(/Giải thích/i)).toBeTruthy();
  });

  it('calls Done from the lesson panel', () => {
    const onMasterNext = vi.fn();
    render(React.createElement(LessonWorkspace, {
      activeView: 'start',
      nodes: frontendCourse.nodes,
      selectedNode: frontendCourse.nodes[0],
      connectedNodes: [],
      favorites: [],
      recent: [],
      statuses: {},
      stats: { total: frontendCourse.nodes.length, mastered: 0, learning: 0, needReview: 0, fresh: frontendCourse.nodes.length, favorites: 0 },
      language: 'vi',
      lessons: frontendCourse.lessons,
      quizzes: frontendCourse.quizzes,
      studyPath: frontendCourse.studyPath,
      comparePairs: frontendCourse.comparePairs,
      courseTitle: frontendCourse.title,
      isFavorite: false,
      onSelectNode: vi.fn(),
      onToggleStatus: vi.fn(),
      onMasterNext,
      onNeedReview: vi.fn(),
      onSetStatus: vi.fn(),
      onToggleFavorite: vi.fn(),
    }));
    fireEvent.click(screen.getByText(/Done ✓ Next/i));
    expect(onMasterNext).toHaveBeenCalledTimes(1);
  });
});
