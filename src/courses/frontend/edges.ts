import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { frontendNodes } from './nodes';

const e = (source:string, target:string): KnowledgeEdgeData => ({
  id:`fe-${source}-${target}`, source, target, relation:'requires', labelVi:'học trước', labelJa:'前提',
});

export const frontendEdges = frontendNodes.flatMap((item) => item.prerequisites.map((pre) => e(pre, item.id)));
