import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { FundamentalInfoScenarioDrills } from '../features/knowledge-graph/components/FundamentalInfoScenarioDrills';
import { FundamentalInfoExamSimulator } from '../features/knowledge-graph/components/FundamentalInfoExamSimulator';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

const props: LessonWorkspaceProps = {
  activeView: 'practice',
  nodes: fundamentalInfoCourse.nodes,
  selectedNode: fundamentalInfoCourse.nodes.find((node) => node.id === 'binary-search') ?? fundamentalInfoCourse.nodes[0],
  connectedNodes: fundamentalInfoCourse.nodes.slice(0, 3),
  favorites: [],
  recent: [],
  statuses: {},
  stats: { total: fundamentalInfoCourse.nodes.length, mastered: 12, learning: 4, needReview: 3, fresh: fundamentalInfoCourse.nodes.length - 19, favorites: 0 },
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

describe('V62 Fundamental Info final readiness', () => {
  it('expands scenario bank to at least 25 items across domains and drill types', () => {
    expect(fundamentalInfoExamScenarios.length).toBeGreaterThanOrEqual(25);
    expect(new Set(fundamentalInfoExamScenarios.map((item) => item.domain))).toEqual(new Set(['algorithm', 'database', 'network', 'security', 'management', 'strategy']));
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'japanese-scenario').length).toBeGreaterThanOrEqual(12);
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length).toBeGreaterThanOrEqual(6);
    expect(fundamentalInfoExamScenarios.filter((item) => item.kind === 'sql-step').length).toBeGreaterThanOrEqual(6);
  });

  it('renders V62 scenario drill with keyword highlight and scenario metrics', () => {
    render(<FundamentalInfoScenarioDrills {...props} />);
    expect(screen.getByText(/V6[23] FE Past-exam style scenarios/i)).toBeTruthy();
    expect(screen.getAllByLabelText(/V6[23] keyword highlight/i)[0]).toBeTruthy();
    expect(screen.getAllByText(/Scenario bank/i)[0]).toBeTruthy();
  });

  it('renders V62 FE exam simulator with readiness action plan copy', () => {
    render(<FundamentalInfoExamSimulator {...props} activeView="session" />);
    expect(screen.getByText(/V6[23] FE Exam Simulator/i)).toBeTruthy();
    expect(screen.getByText(/V6[23] scenario bank/i)).toBeTruthy();
  });
});
