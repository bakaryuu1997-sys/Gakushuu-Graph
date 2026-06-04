import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { pythonCatalog } from './catalog';

const edge = (source:string,target:string): KnowledgeEdgeData => ({ id:`py-${source}-${target}`, source, target, relation:'requires', labelVi:'học trước', labelJa:'前提' });
export const pythonEdges: KnowledgeEdgeData[] = pythonCatalog.flatMap((item) => item.prerequisites.map((pre) => edge(pre, item.id)));
