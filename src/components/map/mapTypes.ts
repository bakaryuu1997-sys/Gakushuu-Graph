import type { Edge, Node } from '@xyflow/react';
import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';
import type { KnowledgeNodeData, Language } from '../../features/knowledge-graph/types';

export interface MapSharedProps {
  nodes: Node[];
  edges: Edge[];
  selectedNode: KnowledgeNodeData;
  connectedNodes: KnowledgeNodeData[];
  language: Language;
  courseTitle: string;
  studyPath: StudyPathPhase[];
  onSelectNode: (id: string) => void;
  nextNodeId?: string;
}

export type MapFocus =
  | 'all' | 'focus-neighborhood'
  | 'ai-basics' | 'data-ml' | 'genai' | 'ethics-law' | 'business'
  | 'fundamental-algo' | 'fundamental-programming' | 'fundamental-db' | 'fundamental-network' | 'fundamental-system'
  | 'sql-basic' | 'sql-join' | 'sql-aggregation' | 'sql-dml' | 'sql-transaction' | 'sql-security'
  | 'brse-requirement' | 'brse-design' | 'brse-test' | 'brse-change' | 'brse-pm'
  | 'linux-file' | 'linux-search' | 'linux-permission' | 'linux-process' | 'linux-docker' | 'linux-git';

export type MapDensity = 'simple' | 'standard' | 'detailed';
export type MapScope = 'phase' | 'focus' | 'next10';
