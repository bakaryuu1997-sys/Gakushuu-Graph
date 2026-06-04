import dagre from 'dagre';
import type { CourseConfig } from '../../../courses/courseRegistry';
import type { KnowledgeCategory, KnowledgeEdgeData, KnowledgeNodeData } from '../types';

export interface GraphPoint { x: number; y: number }

const categoryLanes: Record<KnowledgeCategory, number> = {
  root: 0,
  ai: -300,
  technology: -180,
  database: -60,
  network: 60,
  security: 180,
  business: 300,
  strategy: 420,
  management: 540,
  software: 660,
};

const categoryOrder: KnowledgeCategory[] = ['ai', 'technology', 'database', 'network', 'security', 'business', 'strategy', 'management', 'software'];
const getNodeDepth = (node: KnowledgeNodeData) => node.level === 'root' ? 0 : node.level === 'major' ? 1 : node.level === 'topic' ? 2 : 3;

export const getMajorPositions = (course: CourseConfig): Record<string, GraphPoint> => {
  const majors = course.nodes.filter((node) => node.level === 'major');
  return {
    [course.rootNodeId]: { x: -780, y: 0 },
    ...Object.fromEntries(majors.map((node, index) => {
      const categoryIndex = Math.max(0, categoryOrder.indexOf(node.category));
      return [node.id, { x: -390, y: categoryIndex * 150 - 330 + (index % 2) * 24 }];
    })),
  };
};

export const getStudyPathPositions = (course: CourseConfig): Record<string, GraphPoint> => {
  const positions: Record<string, GraphPoint> = { [course.rootNodeId]: { x: -980, y: 0 } };
  const columnGap = 390;
  const rowGap = 118;

  course.studyPath.forEach((phase, phaseIndex) => {
    const phaseNodeIds = phase.nodeIds.filter((id) => course.nodes.some((node) => node.id === id));
    const center = (phaseNodeIds.length - 1) / 2;
    phaseNodeIds.forEach((nodeId, index) => {
      positions[nodeId] = { x: -600 + phaseIndex * columnGap, y: (index - center) * rowGap };
    });
  });

  return positions;
};

export const positionNode = (
  node: KnowledgeNodeData,
  siblings: KnowledgeNodeData[],
  selectedId: string,
  majorPositions: Record<string, GraphPoint>,
  studyPathPositions: Record<string, GraphPoint>,
): GraphPoint => {
  if (studyPathPositions[node.id]) return studyPathPositions[node.id];
  if (majorPositions[node.id]) return majorPositions[node.id];

  const sameCategory = siblings
    .filter((item) => item.category === node.category && !majorPositions[item.id])
    .sort((a, b) => getNodeDepth(a) - getNodeDepth(b) || a.importance.localeCompare(b.importance) || a.labelJa.localeCompare(b.labelJa));
  const localIndex = Math.max(0, sameCategory.findIndex((item) => item.id === node.id));
  const laneY = categoryLanes[node.category] ?? 0;

  return {
    x: -780 + getNodeDepth(node) * 390 + (localIndex % 2) * 160,
    y: laneY + Math.floor(localIndex / 2) * (getNodeDepth(node) === 2 ? 116 : 104) + (node.id === selectedId ? -34 : 0),
  };
};

const nodeSize = (node: KnowledgeNodeData) => {
  if (node.level === 'root') return { width: 280, height: 110 };
  if (node.level === 'major') return { width: 240, height: 96 };
  if (node.level === 'topic') return { width: 220, height: 88 };
  return { width: 200, height: 78 };
};

export const getDagrePositions = (nodes: KnowledgeNodeData[], edges: KnowledgeEdgeData[], selectedId: string): Record<string, GraphPoint> => {
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: 'LR', ranksep: 190, nodesep: 72, edgesep: 36, marginx: 80, marginy: 80 });

  nodes.forEach((node) => graph.setNode(node.id, nodeSize(node)));
  edges
    .filter((edge) => nodes.some((node) => node.id === edge.source) && nodes.some((node) => node.id === edge.target))
    .forEach((edge) => graph.setEdge(edge.source, edge.target));

  dagre.layout(graph);

  return Object.fromEntries(nodes.map((node) => {
    const size = nodeSize(node);
    const dagreNode = graph.node(node.id) as GraphPoint | undefined;
    return [node.id, {
      x: (dagreNode?.x ?? 0) - size.width / 2,
      y: (dagreNode?.y ?? 0) - size.height / 2 + (node.id === selectedId ? -28 : 0),
    }];
  }));
};
