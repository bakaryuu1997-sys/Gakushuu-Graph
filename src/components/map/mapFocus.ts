import type { Edge, Node } from '@xyflow/react';
import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';
import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import type { MapDensity, MapFocus, MapScope } from './mapTypes';

export const getMapFocusPresets = (courseTitle: string): Array<{ id: MapFocus; label: string; hint: string }> => {
  if (courseTitle.includes('基本情報')) return [
    { id: 'all', label: 'Learning Path', hint: 'dễ đọc' },
    { id: 'focus-neighborhood', label: 'Focus 360°', hint: 'quanh node' },
    { id: 'fundamental-algo', label: 'Algorithm', hint: '計算量' },
    { id: 'fundamental-programming', label: 'Programming', hint: 'logic' },
    { id: 'fundamental-db', label: 'Database', hint: 'SQL' },
    { id: 'fundamental-network', label: 'Network', hint: 'security' },
    { id: 'fundamental-system', label: 'System Dev', hint: 'test/design' },
  ];
  if (courseTitle.includes('SQL')) return [
    { id: 'all', label: 'Learning Path', hint: 'dễ đọc' },
    { id: 'focus-neighborhood', label: 'Focus 360°', hint: 'quanh node' },
    { id: 'sql-basic', label: 'Basic', hint: 'SELECT / WHERE' },
    { id: 'sql-join', label: 'JOIN', hint: 'table relation' },
    { id: 'sql-aggregation', label: 'GROUP BY', hint: 'report' },
    { id: 'sql-dml', label: 'DML', hint: 'insert/update' },
    { id: 'sql-transaction', label: 'Transaction', hint: 'ACID' },
    { id: 'sql-security', label: 'Security', hint: 'injection' },
  ];
  if (courseTitle.includes('BrSE')) return [
    { id: 'all', label: 'Learning Path', hint: 'dễ đọc' },
    { id: 'focus-neighborhood', label: 'Focus 360°', hint: 'quanh node' },
    { id: 'brse-requirement', label: 'Requirement', hint: '要件定義' },
    { id: 'brse-design', label: 'Design', hint: '基本/詳細' },
    { id: 'brse-test', label: 'Test/Bug', hint: 'テスト' },
    { id: 'brse-change', label: 'Change', hint: '仕様変更' },
    { id: 'brse-pm', label: 'PM', hint: '進捗/リスク' },
  ];
  if (courseTitle.includes('Linux')) return [
    { id: 'all', label: 'Learning Path', hint: 'dễ đọc' },
    { id: 'focus-neighborhood', label: 'Focus 360°', hint: 'quanh node' },
    { id: 'linux-file', label: 'File', hint: 'ls/cd/rm' },
    { id: 'linux-search', label: 'Search', hint: 'grep/find' },
    { id: 'linux-permission', label: 'Permission', hint: 'chmod' },
    { id: 'linux-process', label: 'Process', hint: 'ps/kill' },
    { id: 'linux-docker', label: 'Docker', hint: 'compose/logs' },
    { id: 'linux-git', label: 'Git', hint: 'workflow' },
  ];
  return [
    { id: 'all', label: 'Learning Path', hint: 'dễ đọc' },
    { id: 'focus-neighborhood', label: 'Focus 360°', hint: 'quanh node' },
    { id: 'ai-basics', label: 'AI Basics', hint: 'AI / ML / DL' },
    { id: 'data-ml', label: 'Data / ML', hint: 'data → model' },
    { id: 'genai', label: 'GenAI', hint: 'LLM / RAG' },
    { id: 'ethics-law', label: 'Ethics / Law', hint: 'privacy' },
    { id: 'business', label: 'Business', hint: 'ROI' },
  ];
};

const getNodeData = (node: Node) => node.data as unknown as KnowledgeNodeData;
const textOf = (node: Node) => {
  const data = getNodeData(node);
  return [data.id, data.category, data.labelEn, data.labelVi, data.labelJa, ...data.keywords].join(' ').toLowerCase();
};
const scoreNode = (node: Node) => {
  const data = getNodeData(node);
  if (data.level === 'root') return 0;
  if (data.level === 'major') return 1;
  if (data.importance === 'high') return 2;
  if (data.level === 'topic') return 3;
  return 4;
};
const hasAny = (node: Node, keys: string[]) => keys.some((key) => textOf(node).includes(key));

export const nodeMatchesFocus = (node: Node, focus: MapFocus) => {
  if (focus === 'all' || focus === 'focus-neighborhood') return getNodeData(node).level !== 'detail';
  const data = getNodeData(node);
  if (data.level === 'root' || data.level === 'major') return true;

  if (focus === 'ai-basics') return data.category === 'ai' && !hasAny(node, ['rag', 'prompt injection']);
  if (focus === 'data-ml') return data.category === 'database' || hasAny(node, ['machine-learning', 'supervised', 'unsupervised', 'regression', 'classification', 'evaluation', 'preprocessing', 'train', 'overfitting']);
  if (focus === 'genai') return hasAny(node, ['generative', 'llm', 'prompt', 'rag', 'hallucination', 'multimodal', 'foundation', 'token', 'context']);
  if (focus === 'ethics-law') return data.category === 'security' || hasAny(node, ['privacy', 'copyright', 'bias', 'fairness', 'governance', 'accountability', 'deepfake', 'risk']);
  if (focus === 'business') return data.category === 'business' || data.category === 'management' || hasAny(node, ['roi', 'kpi', 'kgi', 'poc', 'monitoring', 'operation', 'usecase']);

  if (focus === 'fundamental-algo') return hasAny(node, ['algorithm', 'アルゴ', 'complexity', 'data structure', 'stack', 'queue', 'sort', 'search', 'tree']);
  if (focus === 'fundamental-programming') return hasAny(node, ['program', '変数', '制御', 'function', 'recursion']);
  if (focus === 'fundamental-db') return hasAny(node, ['database', 'sql', '正規化', 'transaction']);
  if (focus === 'fundamental-network') return hasAny(node, ['network', 'tcp', 'http', 'dns', 'security', 'crypto', 'auth', 'malware']);
  if (focus === 'fundamental-system') return hasAny(node, ['system', '要件', '設計', 'test', 'project', 'service', 'strategy', 'law']);

  if (focus === 'sql-basic') return hasAny(node, ['select', 'where', 'distinct', 'order', 'limit', 'case', 'operator']);
  if (focus === 'sql-join') return hasAny(node, ['join', 'foreign', 'many-to-many']);
  if (focus === 'sql-aggregation') return hasAny(node, ['group', 'aggregate', 'count', 'sum', 'avg', 'having', 'window', 'cte']);
  if (focus === 'sql-dml') return hasAny(node, ['insert', 'update', 'delete', 'create', 'alter', 'drop', 'view']);
  if (focus === 'sql-transaction') return hasAny(node, ['transaction', 'commit', 'rollback', 'acid', 'isolation', 'deadlock', 'lock']);
  if (focus === 'sql-security') return hasAny(node, ['injection', 'parameterized', 'validation', 'privilege', 'backup']);

  if (focus === 'brse-requirement') return hasAny(node, ['requirement', '要件', '要求', 'scope', '受入', '業務', 'flow', 'story']);
  if (focus === 'brse-design') return hasAny(node, ['design', '設計', 'screen', 'api', 'db', 'sequence', 'state', 'review']);
  if (focus === 'brse-test') return hasAny(node, ['test', 'テスト', 'bug', '不具合', 'uat', 'evidence', 'defect']);
  if (focus === 'brse-change') return hasAny(node, ['change', '仕様変更', 'impact', '見積', 'approval', 'rollback', 'release']);
  if (focus === 'brse-pm') return hasAny(node, ['schedule', '進捗', 'risk', 'issue', 'wbs', 'milestone', 'status', 'handover']);

  if (focus === 'linux-file') return hasAny(node, ['pwd', 'ls', 'cd', 'path', 'mkdir', 'touch', 'cp', 'mv', 'rm', 'cat', 'less', 'tail']);
  if (focus === 'linux-search') return hasAny(node, ['grep', 'find', 'pipe', 'redirect']);
  if (focus === 'linux-permission') return hasAny(node, ['chmod', 'permission', 'chown', 'sudo']);
  if (focus === 'linux-process') return hasAny(node, ['ps', 'top', 'kill', 'systemctl', 'journalctl']);
  if (focus === 'linux-docker') return hasAny(node, ['docker']);
  if (focus === 'linux-git') return hasAny(node, ['git']);
  return true;
};

const maxByDensity = (density: MapDensity, fullscreen: boolean) => {
  if (density === 'simple') return fullscreen ? 18 : 24;
  if (density === 'detailed') return fullscreen ? 64 : 72;
  return fullscreen ? 36 : 42;
};

const phaseNodeIds = (studyPath: StudyPathPhase[], phaseId?: string) => {
  const phase = studyPath.find((item) => item.id === phaseId);
  return phase ? new Set(phase.nodeIds) : null;
};

const neighborhoodIds = (edges: Edge[], selectedId: string, depth: 1 | 2) => {
  const ids = new Set([selectedId]);
  const expand = (frontier: Set<string>) => {
    const next = new Set<string>();
    edges.forEach((edge) => {
      if (frontier.has(edge.source)) { ids.add(edge.target); next.add(edge.target); }
      if (frontier.has(edge.target)) { ids.add(edge.source); next.add(edge.source); }
    });
    return next;
  };
  const first = expand(new Set([selectedId]));
  if (depth === 2) expand(first);
  return ids;
};

export const getFocusedMapElements = (
  nodes: Node[],
  edges: Edge[],
  focus: MapFocus,
  selectedId?: string,
  density: MapDensity = 'standard',
  fullscreen = false,
  studyPath: StudyPathPhase[] = [],
  phaseId?: string,
  scope: MapScope = 'phase',
  hideWeakRelations = true,
) => {
  const selected = selectedId ? nodes.find((node) => node.id === selectedId) : undefined;
  const maxNodes = maxByDensity(density, fullscreen);
  const idsFromPhase = phaseNodeIds(studyPath, phaseId);

  if (scope === 'next10' && selectedId) {
    const orderedIds = studyPath.flatMap((phase) => phase.nodeIds);
    const startIndex = Math.max(0, orderedIds.indexOf(selectedId));
    const wanted = new Set(orderedIds.slice(startIndex, startIndex + 10));
    if (selectedId) wanted.add(selectedId);
    const focusedNodes = nodes.filter((node) => wanted.has(node.id)).slice(0, maxNodes);
    const finalIds = new Set(focusedNodes.map((node) => node.id));
    return { nodes: focusedNodes, edges: edges.filter((edge) => finalIds.has(edge.source) && finalIds.has(edge.target)) };
  }

  if (scope === 'focus' && selectedId) {
    const ids = neighborhoodIds(edges, selectedId, density === 'detailed' ? 2 : 1);
    const focusedNodes = nodes.filter((node) => ids.has(node.id)).sort((a, b) => (a.id === selectedId ? -1 : b.id === selectedId ? 1 : scoreNode(a) - scoreNode(b))).slice(0, maxNodes);
    const finalIds = new Set(focusedNodes.map((node) => node.id));
    return { nodes: focusedNodes, edges: edges.filter((edge) => finalIds.has(edge.source) && finalIds.has(edge.target) && (!hideWeakRelations || edge.data?.relation !== 'related_to')) };
  }

  if (focus === 'focus-neighborhood' && selectedId) {
    const depth = density === 'detailed' ? 2 : 1;
    const ids = neighborhoodIds(edges, selectedId, depth);
    const focusedNodes = nodes.filter((node) => ids.has(node.id)).sort((a, b) => (a.id === selectedId ? -1 : b.id === selectedId ? 1 : scoreNode(a) - scoreNode(b))).slice(0, maxNodes);
    const finalIds = new Set(focusedNodes.map((node) => node.id));
    return { nodes: focusedNodes, edges: edges.filter((edge) => finalIds.has(edge.source) && finalIds.has(edge.target)) };
  }

  const ranked = nodes
    .filter((node) => nodeMatchesFocus(node, focus))
    .filter((node) => !idsFromPhase || idsFromPhase.has(node.id) || getNodeData(node).level === 'root')
    .sort((a, b) => scoreNode(a) - scoreNode(b));
  const sliced = ranked.slice(0, maxNodes);
  const focusedNodes = selected && !sliced.some((node) => node.id === selected.id) ? [selected, ...sliced.slice(0, maxNodes - 1)] : sliced;
  const ids = new Set(focusedNodes.map((node) => node.id));
  return { nodes: focusedNodes, edges: edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target) && (!hideWeakRelations || edge.data?.relation !== 'related_to')) };
};
