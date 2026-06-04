import type { KnowledgeEdgeData, KnowledgeNodeData } from '../../../features/knowledge-graph/types';
import { aiExpandedAiNodes, aiExpandedAiEdges } from './expanded/ai';
import { aiExpandedBusinessNodes, aiExpandedBusinessEdges } from './expanded/business';
import { aiExpandedDatabaseNodes, aiExpandedDatabaseEdges } from './expanded/database';
import { aiExpandedManagementNodes, aiExpandedManagementEdges } from './expanded/management';
import { aiExpandedSecurityNodes, aiExpandedSecurityEdges } from './expanded/security';
import { aiExpandedTechnologyNodes, aiExpandedTechnologyEdges } from './expanded/technology';

export const aiExpandedNodes: KnowledgeNodeData[] = [...aiExpandedAiNodes, ...aiExpandedBusinessNodes, ...aiExpandedDatabaseNodes, ...aiExpandedManagementNodes, ...aiExpandedSecurityNodes, ...aiExpandedTechnologyNodes];
export const aiExpandedEdges: KnowledgeEdgeData[] = [...aiExpandedAiEdges, ...aiExpandedBusinessEdges, ...aiExpandedDatabaseEdges, ...aiExpandedManagementEdges, ...aiExpandedSecurityEdges, ...aiExpandedTechnologyEdges];
