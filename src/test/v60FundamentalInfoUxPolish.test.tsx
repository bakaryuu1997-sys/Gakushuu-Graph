import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { FundamentalInfoLessonPolish } from '../features/knowledge-graph/components/FundamentalInfoLessonPolish';
import { FundamentalInfoReadinessDashboard } from '../features/knowledge-graph/components/FundamentalInfoReadinessDashboard';
import { FundamentalPracticeWorkbench } from '../features/knowledge-graph/components/FundamentalPracticeWorkbenches';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

const firstNode = fundamentalInfoCourse.nodes.find((node) => node.id === 'binary-search') ?? fundamentalInfoCourse.nodes[1];
const firstLesson = fundamentalInfoCourse.lessons.find((lesson) => lesson.nodeId === firstNode.id);
const props: LessonWorkspaceProps = {
  activeView: 'start',
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

describe('V60 Fundamental Info beginner UX and lesson polish', () => {
  it('renders FE-specific lesson blocks for 科目A, 科目B, Japanese traps, and example reading', () => {
    render(<FundamentalInfoLessonPolish node={firstNode} lesson={firstLesson} language="vi" />);
    expect(screen.getByText(/基本情報 point/i)).toBeTruthy();
    expect(screen.getByText(/科目A point/i)).toBeTruthy();
    expect(screen.getByText(/科目B point/i)).toBeTruthy();
    expect(screen.getByText(/日本語のひっかけ/i)).toBeTruthy();
    expect(screen.getByText(/例題の読み方/i)).toBeTruthy();
  });

  it('renders FE readiness dashboard with the main exam domains', () => {
    render(<FundamentalInfoReadinessDashboard {...props} />);
    expect(screen.getByText(/基本情報 readiness dashboard/i)).toBeTruthy();
    expect(screen.getByText(/Algorithm \/ 科目B/i)).toBeTruthy();
    expect(screen.getByText(/Database \/ SQL/i)).toBeTruthy();
    expect(screen.getByText(/Network \/ Security/i)).toBeTruthy();
    expect(screen.getByText(/Strategy \/ Law/i)).toBeTruthy();
  });

  it('renders practice workbenches for trace, SQL visual, and subnet calculator', () => {
    render(<FundamentalPracticeWorkbench kind="all" />);
    expect(screen.getByText(/科目B trace UI/i)).toBeTruthy();
    expect(screen.getByText(/SQL visual practice/i)).toBeTruthy();
    expect(screen.getByText(/subnet step-by-step/i)).toBeTruthy();
  });
});
