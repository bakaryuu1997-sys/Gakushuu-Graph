import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { getFocusedMapElements } from '../components/map/mapFocus';
import type { Edge, Node } from '@xyflow/react';

const toNodes = (): Node[] => aiPassportCourse.nodes.map((node) => ({ id: node.id, position: { x: 0, y: 0 }, data: node as unknown as Record<string, unknown> }));
const toEdges = (): Edge[] => aiPassportCourse.edges.map((edge) => ({ id: edge.id, source: edge.source, target: edge.target, data: { relation: edge.relation } }));

describe('V43 AI Passport polish', () => {
  it('polishes generic AI ethics/business node labels', () => {
    const accountability = aiPassportCourse.nodes.find((node) => node.id === 'accountability-ai');
    const minimization = aiPassportCourse.nodes.find((node) => node.id === 'data-minimization-ai');
    const rollback = aiPassportCourse.nodes.find((node) => node.id === 'rollback-ai');
    expect(accountability?.labelJa).toContain('説明責任');
    expect(minimization?.labelJa).toContain('データ最小化');
    expect(rollback?.labelJa).toContain('切り戻し');
  });

  it('supports graph next 10 and focus scopes for AI Passport', () => {
    const nodes = toNodes();
    const edges = toEdges();
    const next10 = getFocusedMapElements(nodes, edges, 'all', aiPassportCourse.defaultNodeId, 'standard', false, aiPassportCourse.studyPath, undefined, 'next10', true);
    const focus = getFocusedMapElements(nodes, edges, 'all', 'accountability-ai', 'standard', true, aiPassportCourse.studyPath, undefined, 'focus', true);
    expect(next10.nodes.length).toBeLessThanOrEqual(10);
    expect(focus.nodes.some((node) => node.id === 'accountability-ai')).toBe(true);
  });

  it('keeps AI Passport course content valid after cleanup', () => {
    const ids = new Set(aiPassportCourse.nodes.map((node) => node.id));
    expect(aiPassportCourse.lessons.every((lesson) => ids.has(lesson.nodeId))).toBe(true);
    expect(aiPassportCourse.quizzes.every((quiz) => ids.has(quiz.nodeId))).toBe(true);
  });
});
