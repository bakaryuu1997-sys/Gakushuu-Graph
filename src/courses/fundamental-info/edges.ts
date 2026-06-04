import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';
import { fundamentalInfoNodes } from './nodes';
const e=(source:string,target:string):KnowledgeEdgeData=>({id:`fe-${source}-${target}`,source,target,relation:'requires',labelVi:'học trước',labelJa:'前提'});
export const fundamentalInfoEdges=fundamentalInfoNodes.flatMap((item)=>item.prerequisites.map((pre)=>e(pre,item.id)));
