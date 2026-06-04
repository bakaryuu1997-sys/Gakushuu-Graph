import { describe, expect, it } from 'vitest';
import type { Edge, Node } from '@xyflow/react';
import { getFocusedMapElements } from '../components/map/mapFocus';
import { aiPassportCourse } from '../courses/ai-passport';

const toNodes = (): Node[] => aiPassportCourse.nodes.map((node) => ({
  id: node.id,
  position: { x: 0, y: 0 },
  data: node as unknown as Record<string, unknown>,
}));

const toEdges = (): Edge[] => aiPassportCourse.edges.map((edge) => ({
  id: edge.id,
  source: edge.source,
  target: edge.target,
}));

describe('V36 readable knowledge map', () => {
  it('limits fullscreen map nodes so labels remain readable', () => {
    const focused = getFocusedMapElements(toNodes(), toEdges(), 'ethics-law', 'generative-ai', 'standard', true);
    expect(focused.nodes.length).toBeLessThanOrEqual(36);
    expect(focused.nodes.some((node) => node.id === 'generative-ai')).toBe(true);
  });

  it('default learning path map is smaller than the full course', () => {
    const all = toNodes();
    const focused = getFocusedMapElements(all, toEdges(), 'all', aiPassportCourse.defaultNodeId, 'standard', false, aiPassportCourse.studyPath);
    expect(focused.nodes.length).toBeLessThan(all.length);
    expect(focused.nodes.length).toBeLessThanOrEqual(42);
  });
});
