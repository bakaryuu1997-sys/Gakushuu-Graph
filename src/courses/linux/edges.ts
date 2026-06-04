import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { linuxNodes } from './nodes';
const e=(source:string,target:string):KnowledgeEdgeData=>({id:`linux-${source}-${target}`,source,target,relation:'requires',labelVi:'học trước',labelJa:'前提'});
export const linuxEdges=linuxNodes.flatMap((item)=>item.prerequisites.map((pre)=>e(pre,item.id)));
