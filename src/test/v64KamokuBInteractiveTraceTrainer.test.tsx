import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { KamokuBInteractiveTraceTrainer } from '../features/knowledge-graph/components/KamokuBInteractiveTraceTrainer';
import { FundamentalInfoPracticeDrills } from '../features/knowledge-graph/components/FundamentalInfoPracticeDrills';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

const props: LessonWorkspaceProps = {
  activeView: 'practice',
  nodes: fundamentalInfoCourse.nodes,
  selectedNode: fundamentalInfoCourse.nodes.find((node) => node.id === 'trace-table') ?? fundamentalInfoCourse.nodes[0],
  connectedNodes: fundamentalInfoCourse.nodes.slice(0, 3),
  favorites: [],
  recent: [],
  statuses: {},
  stats: { total: fundamentalInfoCourse.nodes.length, mastered: 20, learning: 8, needReview: 5, fresh: fundamentalInfoCourse.nodes.length - 33, favorites: 0 },
  language: 'vi',
  lessons: fundamentalInfoCourse.lessons,
  quizzes: fundamentalInfoCourse.quizzes,
  studyPath: fundamentalInfoCourse.studyPath,
  comparePairs: [],
  courseTitle: fundamentalInfoCourse.titleJa,
  isFavorite: false,
  onSelectNode: vi.fn(),
  onToggleStatus: vi.fn(),
  onMasterNext: vi.fn(),
  onNeedReview: vi.fn(),
  onSetStatus: vi.fn(),
  onToggleFavorite: vi.fn(),
  onView: vi.fn(),
};

afterEach(() => cleanup());

describe('V64 Kamoku B interactive trace trainer', () => {
  it('keeps a deep long-trace bank for Kamoku B', () => {
    expect(fundamentalInfoExamScenarios.length).toBeGreaterThanOrEqual(40);
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length).toBeGreaterThanOrEqual(20);
  });

  it('renders an interactive fill-check-hint flow', () => {
    render(<KamokuBInteractiveTraceTrainer {...props} />);
    expect(screen.getByText(/V64 Interactive 科目B Trace Trainer/i)).toBeTruthy();
    expect(screen.getAllByText(/Check rows/i)[1]).toBeTruthy();
    expect(screen.getAllByText(/Hint/i)[0]).toBeTruthy();
    fireEvent.click(screen.getAllByText(/Check rows/i)[1]);
    expect(screen.getAllByText(/科目B readiness/i)[1]).toBeTruthy();
  });

  it('is embedded in the Fundamental Info practice screen', () => {
    render(<FundamentalInfoPracticeDrills {...props} />);
    expect(screen.getByText(/V64 科目B Interactive Drill/i)).toBeTruthy();
    expect(screen.getByText(/V64 Interactive 科目B Trace Trainer/i)).toBeTruthy();
  });
});
