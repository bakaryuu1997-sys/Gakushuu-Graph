import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MobileBottomTabs } from '../components/MobileBottomTabs';
import { courses, defaultCourseId, getCourseById } from '../courses/courseRegistry';
import { LessonWorkspace } from '../features/knowledge-graph/components/LessonWorkspace';

const course = getCourseById(defaultCourseId);
const selectedNode = course.nodes.find((node) => node.id === course.defaultNodeId) ?? course.nodes[0];

describe('UI smoke tests', () => {
  it('renders mobile bottom tabs', () => {
    render(React.createElement(MobileBottomTabs, { activeView: 'start', onView: vi.fn() }));
    expect(screen.getByText('Today')).toBeTruthy();
    expect(screen.getByText('Lesson')).toBeTruthy();
    expect(screen.getByText('Quiz')).toBeTruthy();
    expect(screen.getByText('Review')).toBeTruthy();
  });

  it('renders phase study workspace', () => {
    render(React.createElement(LessonWorkspace, {
      activeView: 'phaseStudy',
      nodes: course.nodes,
      selectedNode,
      connectedNodes: [],
      favorites: [],
      recent: [],
      statuses: {},
      stats: { total: course.nodes.length, mastered: 0, learning: 0, needReview: 0, fresh: course.nodes.length, favorites: 0 },
      language: 'vi',
      lessons: course.lessons,
      quizzes: course.quizzes,
      studyPath: course.studyPath,
      comparePairs: course.comparePairs,
      courseTitle: course.title,
      isFavorite: false,
      onSelectNode: vi.fn(),
      onToggleStatus: vi.fn(),
      onMasterNext: vi.fn(),
      onNeedReview: vi.fn(),
      onSetStatus: vi.fn(),
      onToggleFavorite: vi.fn(),
    }));
    expect(screen.getAllByText(/Đang ở bước/i).length).toBeGreaterThan(0);
  });

  it('keeps AI Passport available as default course', () => {
    expect(courses[0].id).toBe('ai-passport');
    expect(courses.some((course) => course.id === 'frontend')).toBe(true);
    expect(defaultCourseId).toBe('ai-passport');
  });
});
