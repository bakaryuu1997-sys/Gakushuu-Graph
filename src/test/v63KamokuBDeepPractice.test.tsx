import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { FundamentalInfoScenarioDrills } from '../features/knowledge-graph/components/FundamentalInfoScenarioDrills';
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

describe('V63 Kamoku B deep practice', () => {
  it('expands the Fundamental Info scenario bank with many hard Kamoku B traces', () => {
    expect(fundamentalInfoExamScenarios.length).toBeGreaterThanOrEqual(40);
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length).toBeGreaterThanOrEqual(20);
    expect(fundamentalInfoExamScenarios.filter((item) => item.id.startsWith('v63-kamoku-b-')).length).toBeGreaterThanOrEqual(15);
    expect(fundamentalInfoExamScenarios.every((item) => item.examTipVi && item.trapVi && item.choices.every((choice) => choice.whyVi))).toBe(true);
  });

  it('covers difficult algorithm patterns expected in Kamoku B', () => {
    const ids = fundamentalInfoExamScenarios.map((item) => item.id);
    expect(ids).toContain('v63-kamoku-b-recursive-fibonacci');
    expect(ids).toContain('v63-kamoku-b-quicksort-partition');
    expect(ids).toContain('v63-kamoku-b-dp-coin-change');
    expect(ids).toContain('v63-kamoku-b-hash-linear-probing');
    expect(ids).toContain('v63-kamoku-b-debug-infinite-loop');
  });

  it('renders V63 scenario drills and practice entry points', () => {
    render(<FundamentalInfoScenarioDrills {...props} />);
    expect(screen.getByText(/V63 FE Past-exam style scenarios/i)).toBeTruthy();
    expect(screen.getAllByText(/科目B long trace/i)[0]).toBeTruthy();
    cleanup();
    render(<FundamentalInfoPracticeDrills {...props} />);
    expect(screen.getByText(/V63 科目B Drill/i)).toBeTruthy();
  });
});
