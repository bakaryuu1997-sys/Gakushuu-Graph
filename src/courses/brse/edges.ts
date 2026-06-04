import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { brseNodes } from './nodes';

const e = (source:string, target:string): KnowledgeEdgeData => ({
  id:`brse-${source}-${target}`, source, target, relation:'requires', labelVi:'học trước', labelJa:'前提',
});

export const brseEdges = brseNodes.flatMap((item) => item.prerequisites.map((pre) => e(pre, item.id)));
