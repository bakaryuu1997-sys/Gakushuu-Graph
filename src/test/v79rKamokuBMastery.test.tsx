import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { fundamentalInfoV79RKamokuBMasteryScenarios } from '../courses/fundamental-info/v79rKamokuBMastery';
import { KamokuBV79RMasteryPanel } from '../features/knowledge-graph/components/KamokuBV79RMasteryPanel';
import { FundamentalInfoPracticeDrills } from '../features/knowledge-graph/components/FundamentalInfoPracticeDrills';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

const props: LessonWorkspaceProps = {
  activeView: 'practice',
  nodes: fundamentalInfoCourse.nodes,
  selectedNode: fundamentalInfoCourse.nodes.find((node) => node.id === 'dynamic-programming') ?? fundamentalInfoCourse.nodes[0],
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

describe('V79R Kamoku B mastery upgrade', () => {
  it('adds a hard exam-like bank for DP, BFS, recursion, stack, arrays, binary search, SQL, and security logs', () => {
    expect(fundamentalInfoV79RKamokuBMasteryScenarios).toHaveLength(8);
    expect(fundamentalInfoV79RKamokuBMasteryScenarios.every((item) => item.id.startsWith('v79r-'))).toBe(true);
    expect(fundamentalInfoV79RKamokuBMasteryScenarios.filter((item) => item.kind === 'long-trace')).toHaveLength(6);
    expect(fundamentalInfoV79RKamokuBMasteryScenarios.filter((item) => item.difficulty === 'hard')).toHaveLength(8);
    expect(fundamentalInfoV79RKamokuBMasteryScenarios.flatMap((item) => item.relatedNodeIds)).toEqual(expect.arrayContaining(['dynamic-programming', 'graph-theory', 'recursion', 'stack', 'binary-search']));
  });

  it('merges V79R scenarios into the main Fundamental Info scenario bank', () => {
    const ids = fundamentalInfoExamScenarios.map((item) => item.id);
    expect(ids).toEqual(expect.arrayContaining(fundamentalInfoV79RKamokuBMasteryScenarios.map((item) => item.id)));
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length).toBeGreaterThanOrEqual(26);
  });

  it('renders the V79R mastery panel and its remediation plan', () => {
    render(<KamokuBV79RMasteryPanel {...props} />);
    expect(screen.getByText(/V79R FE Exam Master Layer/i)).toBeTruthy();
    expect(screen.getByText(/V79R remediation plan/i)).toBeTruthy();
    expect(screen.getByText(/V79R 科目B: khoảng cách BFS bằng queue/i)).toBeTruthy();
  });

  it('embeds V79R mastery into the Fundamental Info practice screen', () => {
    render(<FundamentalInfoPracticeDrills {...props} />);
    expect(screen.getByText(/V79R 科目B Master Drill/i)).toBeTruthy();
    expect(screen.getByText(/V79R FE Exam Master Layer/i)).toBeTruthy();
  });
});
