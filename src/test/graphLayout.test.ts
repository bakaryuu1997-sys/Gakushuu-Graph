import { describe, expect, it } from 'vitest';
import { courses } from '../courses/courseRegistry';
import { getDagrePositions } from '../features/knowledge-graph/utils/graphLayout';

describe('graph auto-layout', () => {
  it('returns finite Dagre positions for visible AI nodes', () => {
    const aiCourse = courses.find((course) => course.id === 'ai-passport');
    expect(aiCourse).toBeTruthy();
    if (!aiCourse) return;

    const sampleNodes = aiCourse.nodes.filter((node) => node.level === 'root' || node.level === 'major' || node.level === 'topic').slice(0, 80);
    const sampleIds = new Set(sampleNodes.map((node) => node.id));
    const sampleEdges = aiCourse.edges.filter((edge) => sampleIds.has(edge.source) && sampleIds.has(edge.target));
    const positions = getDagrePositions(sampleNodes, sampleEdges, aiCourse.defaultNodeId);

    expect(Object.keys(positions).length).toBe(sampleNodes.length);
    Object.values(positions).forEach((point) => {
      expect(Number.isFinite(point.x)).toBe(true);
      expect(Number.isFinite(point.y)).toBe(true);
    });
  });
});
