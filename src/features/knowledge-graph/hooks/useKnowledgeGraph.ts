import { useEffect, useMemo, useState } from 'react';
import type { Edge, Node } from '@xyflow/react';
import type { CourseConfig } from '../../../courses/courseRegistry';
import type { GraphFilters, KnowledgeCategory, KnowledgeEdgeData, KnowledgeNodeData } from '../types';
import { getDagrePositions, getMajorPositions, getStudyPathPositions, positionNode } from '../utils/graphLayout';

const initialFilters: GraphFilters = { query: '', categories: [], importance: 'all', mode: 'overview' };

const getNeighborhood = (selectedId: string, edges: KnowledgeEdgeData[], rootId: string, majorIds: string[], depth = 1) => {
  const visible = new Set<string>([rootId, selectedId, ...majorIds]);
  let frontier = new Set<string>([selectedId]);

  for (let step = 0; step < depth; step += 1) {
    const next = new Set<string>();
    edges.forEach((edge) => {
      const sourceIn = frontier.has(edge.source);
      const targetIn = frontier.has(edge.target);
      if (sourceIn || targetIn) {
        visible.add(edge.source);
        visible.add(edge.target);
        next.add(sourceIn ? edge.target : edge.source);
      }
    });
    frontier = next;
  }

  return visible;
};

const getQueryMatches = (query: string, nodes: KnowledgeNodeData[], edges: KnowledgeEdgeData[]) => {
  if (!query.trim()) return new Set<string>();
  const value = query.toLowerCase();
  const matched = new Set<string>();

  nodes.forEach((node) => {
    const text = [node.labelJa, node.labelVi, node.labelEn, node.reading, node.summaryVi, node.summaryJa, ...node.keywords]
      .filter(Boolean).join(' ').toLowerCase();
    if (!text.includes(value)) return;
    matched.add(node.id);
    edges.forEach((edge) => {
      if (edge.source === node.id) matched.add(edge.target);
      if (edge.target === node.id) matched.add(edge.source);
    });
  });

  return matched;
};

const applyCommonFilters = (node: KnowledgeNodeData, filters: GraphFilters) => {
  const matchesCategory = filters.categories.length === 0 || filters.categories.includes(node.category);
  const matchesImportance = filters.importance === 'all' || node.importance === filters.importance;
  return matchesCategory && matchesImportance;
};

const getVisibleNodes = (course: CourseConfig, filters: GraphFilters, selectedId: string, majorIds: string[]) => {
  const queryMatches = getQueryMatches(filters.query, course.nodes, course.edges);
  const focusIds = getNeighborhood(selectedId, course.edges, course.rootNodeId, majorIds, filters.mode === 'study' ? 2 : 1);

  return course.nodes.filter((node) => {
    if (!applyCommonFilters(node, filters)) return false;
    if (filters.query.trim()) return queryMatches.has(node.id);
    if (filters.mode === 'overview') return node.level === 'root' || node.level === 'major' || node.level === 'topic';
    if (filters.mode === 'exam') return node.importance === 'high' && (node.level !== 'detail' || focusIds.has(node.id));
    return focusIds.has(node.id) || node.level === 'root' || node.level === 'major' || node.level === 'topic';
  });
};

export const useKnowledgeGraph = (course: CourseConfig) => {
  const [selectedId, setSelectedId] = useState(course.defaultNodeId);
  const [filters, setFilters] = useState<GraphFilters>(initialFilters);

  useEffect(() => {
    setSelectedId(course.defaultNodeId);
    setFilters(initialFilters);
  }, [course.defaultNodeId, course.id]);

  const majorIds = useMemo(() => course.nodes.filter((node) => node.level === 'major').map((node) => node.id), [course.nodes]);
  const majorPositions = useMemo(() => getMajorPositions(course), [course]);
  const studyPathPositions = useMemo(() => getStudyPathPositions(course), [course]);
  const visibleNodes = useMemo(() => getVisibleNodes(course, filters, selectedId, majorIds), [course, filters, majorIds, selectedId]);
  const visibleIds = useMemo(() => new Set(visibleNodes.map((item) => item.id)), [visibleNodes]);
  const visibleEdgeData = useMemo(() => course.edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)), [course.edges, visibleIds]);
  const dagrePositions = useMemo(() => getDagrePositions(visibleNodes, visibleEdgeData, selectedId), [selectedId, visibleEdgeData, visibleNodes]);

  const flowNodes: Node[] = useMemo(() => visibleNodes.map((item) => ({
    id: item.id,
    type: 'knowledgeNode',
    position: dagrePositions[item.id] ?? positionNode(item, visibleNodes, selectedId, majorPositions, studyPathPositions),
    data: { ...item, isSelected: item.id === selectedId } as unknown as Record<string, unknown>,
  })), [dagrePositions, majorPositions, selectedId, studyPathPositions, visibleNodes]);

  const flowEdges: Edge[] = useMemo(() => visibleEdgeData.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.labelVi,
    animated: edge.relation === 'requires' || edge.relation === 'related_to',
    type: 'smoothstep' as const,
    style: {
      strokeWidth: edge.relation === 'requires' ? 2.8 : 1.8,
      stroke: edge.relation === 'requires' ? '#8b5cf6' : edge.relation === 'compare_with' ? '#f97316' : '#64748b',
    },
    labelStyle: { fill: '#334155', fontSize: 11, fontWeight: 800 },
  })), [visibleEdgeData]);

  const selectedNode = useMemo(() => course.nodes.find((node) => node.id === selectedId) ?? course.nodes[0], [course.nodes, selectedId]);
  const connectedNodes = useMemo(() => {
    const connectedIds = new Set(course.edges
      .filter((edge) => edge.source === selectedNode.id || edge.target === selectedNode.id)
      .map((edge) => (edge.source === selectedNode.id ? edge.target : edge.source)));
    return course.nodes.filter((node) => connectedIds.has(node.id));
  }, [course.edges, course.nodes, selectedNode.id]);

  return {
    filters,
    flowNodes,
    flowEdges,
    selectedNode,
    connectedNodes,
    allNodes: course.nodes,
    visibleNodes,
    setSelectedId,
    setQuery: (query: string) => setFilters((current) => ({ ...current, query })),
    setMode: (mode: GraphFilters['mode']) => setFilters((current) => ({ ...current, mode })),
    setImportance: (importance: GraphFilters['importance']) => setFilters((current) => ({ ...current, importance })),
    toggleCategory: (category: KnowledgeCategory) => setFilters((current) => ({
      ...current,
      categories: current.categories.includes(category)
        ? current.categories.filter((item) => item !== category)
        : [...current.categories, category],
    })),
  };
};
