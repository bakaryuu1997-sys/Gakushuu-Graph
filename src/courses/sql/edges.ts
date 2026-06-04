import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { sqlNodes } from './nodes';

const e = (source:string, target:string): KnowledgeEdgeData => ({
  id:`sql-${source}-${target}`, source, target, relation:'requires', labelVi:'học trước', labelJa:'前提',
});

export const sqlEdges = sqlNodes.flatMap((item) => item.prerequisites.map((pre) => e(pre, item.id)));
