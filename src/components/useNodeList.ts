import { useMemo } from "react";
import type { KnowledgeNodeData } from "../features/knowledge-graph/types";

export const useNodeList = (ids: string[], nodes: KnowledgeNodeData[]) => {
  const nodesById = useMemo(
    () => new Map(nodes.map((node) => [node.id, node])),
    [nodes],
  );
  return useMemo(
    () =>
      ids.map((id) => nodesById.get(id)).filter(Boolean) as KnowledgeNodeData[],
    [ids, nodesById],
  );
};
