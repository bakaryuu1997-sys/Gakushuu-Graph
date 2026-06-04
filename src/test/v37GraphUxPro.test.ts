import { describe, expect, it } from 'vitest';
import type { Edge, Node } from '@xyflow/react';
import { brseCourse } from '../courses/brse';
import { aiPassportCourse } from '../courses/ai-passport';
import { getFocusedMapElements, getMapFocusPresets } from '../components/map/mapFocus';

const toNodes = (course: typeof aiPassportCourse): Node[] => course.nodes.map((node) => ({
  id: node.id,
  position: { x: 0, y: 0 },
  data: node as unknown as Record<string, unknown>,
}));

const toEdges = (course: typeof aiPassportCourse): Edge[] => course.edges.map((edge) => ({
  id: edge.id,
  source: edge.source,
  target: edge.target,
}));

describe('V37 Graph UX Pro', () => {
  it('uses course-specific presets', () => {
    expect(getMapFocusPresets('SQL Roadmap').some((preset) => preset.id === 'sql-join')).toBe(true);
    expect(getMapFocusPresets('BrSE Roadmap').some((preset) => preset.id === 'brse-requirement')).toBe(true);
    expect(getMapFocusPresets('Linux / Terminal Roadmap').some((preset) => preset.id === 'linux-docker')).toBe(true);
  });

  it('supports density levels', () => {
    const nodes = toNodes(aiPassportCourse);
    const edges = toEdges(aiPassportCourse);
    const simple = getFocusedMapElements(nodes, edges, 'all', aiPassportCourse.defaultNodeId, 'simple', true, aiPassportCourse.studyPath);
    const detailed = getFocusedMapElements(nodes, edges, 'all', aiPassportCourse.defaultNodeId, 'detailed', true, aiPassportCourse.studyPath);
    expect(simple.nodes.length).toBeLessThanOrEqual(18);
    expect(detailed.nodes.length).toBeGreaterThan(simple.nodes.length);
  });

  it('focus-neighborhood keeps the selected node and direct neighbors', () => {
    const nodes = toNodes(brseCourse);
    const edges = toEdges(brseCourse);
    const focused = getFocusedMapElements(nodes, edges, 'focus-neighborhood', 'change-request', 'standard', true, brseCourse.studyPath);
    expect(focused.nodes.some((node) => node.id === 'change-request')).toBe(true);
    expect(focused.nodes.length).toBeLessThanOrEqual(36);
  });

  it('phase filter limits nodes to that phase plus root/selected', () => {
    const nodes = toNodes(brseCourse);
    const edges = toEdges(brseCourse);
    const phase = brseCourse.studyPath[1];
    const focused = getFocusedMapElements(nodes, edges, 'all', phase.nodeIds[0], 'standard', false, brseCourse.studyPath, phase.id);
    expect(focused.nodes.some((node) => phase.nodeIds.includes(node.id))).toBe(true);
    expect(focused.nodes.length).toBeLessThanOrEqual(42);
  });
});
