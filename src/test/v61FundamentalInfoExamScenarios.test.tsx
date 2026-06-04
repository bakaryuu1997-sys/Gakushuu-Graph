import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { FundamentalInfoScenarioDrills } from '../features/knowledge-graph/components/FundamentalInfoScenarioDrills';
import { FundamentalInfoExamSimulator } from '../features/knowledge-graph/components/FundamentalInfoExamSimulator';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

const firstNode = fundamentalInfoCourse.nodes.find((node) => node.id === 'binary-search') ?? fundamentalInfoCourse.nodes[1];
const props: LessonWorkspaceProps = {
  activeView: 'practice',
  nodes: fundamentalInfoCourse.nodes,
  selectedNode: firstNode,
  connectedNodes: fundamentalInfoCourse.nodes.slice(0, 3),
  favorites: [],
  recent: [],
  statuses: Object.fromEntries(fundamentalInfoCourse.nodes.slice(0, 20).map((node, index) => [node.id, index < 8 ? 'mastered' : index < 10 ? 'need_review' : 'new'])),
  stats: { total: fundamentalInfoCourse.nodes.length, mastered: 8, learning: 2, needReview: 2, fresh: fundamentalInfoCourse.nodes.length - 12, favorites: 0 },
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

describe('V61 Fundamental Info exam scenario polish', () => {
  it('ships Japanese scenarios, long trace, and SQL step-by-step cases', () => {
    expect(fundamentalInfoExamScenarios.length).toBeGreaterThanOrEqual(8);
    expect(fundamentalInfoExamScenarios.some((item) => item.kind === 'japanese-scenario' && item.trapJa.includes('最も'))).toBe(true);
    expect(fundamentalInfoExamScenarios.some((item) => item.kind === 'long-trace' && item.traceSteps?.length)).toBe(true);
    expect(fundamentalInfoExamScenarios.some((item) => item.kind === 'sql-step' && item.sqlSteps?.length)).toBe(true);
  });

  it('renders the scenario drill with Japanese trap and exam tips', () => {
    render(<FundamentalInfoScenarioDrills {...props} />);
    expect(screen.getByText(/V6[123] FE Past-exam style scenarios/i)).toBeTruthy();
    expect(screen.getByText(/Japanese FE scenarios/i)).toBeTruthy();
    expect(screen.getAllByText(/FE V6[123]/i).length).toBeGreaterThan(0);
  });

  it('renders the V61 exam simulator copy and scenario bank count', () => {
    render(<FundamentalInfoExamSimulator {...props} activeView="session" />);
    expect(screen.getByText(/V6[123] FE Exam Simulator/i)).toBeTruthy();
    expect(screen.getByText(/V6[123] scenario bank/i)).toBeTruthy();
  });
});
