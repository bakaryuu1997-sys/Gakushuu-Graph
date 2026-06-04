import type { KnowledgeNodeData } from "../types";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";

export const orderDashboardNodes = (
  nodes: KnowledgeNodeData[],
  studyPath: Props["studyPath"],
) => {
  const order = new Map(
    studyPath.flatMap((phase) => phase.nodeIds).map((id, index) => [id, index]),
  );
  return [...nodes].sort(
    (a, b) => (order.get(a.id) ?? 9999) - (order.get(b.id) ?? 9999),
  );
};

const textOf = (node: KnowledgeNodeData) =>
  [node.id, node.labelEn, node.labelVi, ...node.keywords]
    .join(" ")
    .toLowerCase();

export const computeReadinessGroups = (props: Props) => {
  const groups = [
    {
      label: "GenAI",
      match: (node: KnowledgeNodeData) =>
        textOf(node).match(
          /genai|generative|llm|prompt|rag|hallucination|embedding|vector|multimodal/,
        ),
    },
    {
      label: "Ethics",
      match: (node: KnowledgeNodeData) =>
        node.category === "security" ||
        textOf(node).match(
          /privacy|copyright|bias|fairness|governance|risk|ethic|accountability|guardrail/,
        ),
    },
    {
      label: "Data/ML",
      match: (node: KnowledgeNodeData) =>
        node.category === "database" ||
        textOf(node).match(
          /data|machine|learning|classification|regression|model|training|preprocessing|feature/,
        ),
    },
    {
      label: "Business",
      match: (node: KnowledgeNodeData) =>
        node.category === "business" ||
        textOf(node).match(/roi|kpi|business|workflow|project|poc|cost/),
    },
  ];
  return groups
    .map((group) => {
      const groupNodes = props.nodes.filter((node) =>
        Boolean(group.match(node)),
      );
      const done = groupNodes.filter(
        (node) => props.statuses[node.id] === "mastered",
      ).length;
      const learning = groupNodes.filter(
        (node) => props.statuses[node.id] === "learning",
      ).length;
      const review = groupNodes.filter(
        (node) => props.statuses[node.id] === "need_review",
      ).length;
      const score = groupNodes.length
        ? Math.max(
            0,
            Math.round(
              ((done + learning * 0.45 - review * 0.25) / groupNodes.length) *
                100,
            ),
          )
        : 0;
      return {
        group: group.label,
        total: groupNodes.length,
        done,
        review,
        score,
      };
    })
    .filter((item) => item.total > 0)
    .sort((a, b) => a.score - b.score);
};

export const computeReadinessScore = (props: Props) =>
  props.stats.total
    ? Math.round(
        ((props.stats.mastered +
          props.stats.learning * 0.45 -
          props.stats.needReview * 0.25) /
          props.stats.total) *
          100,
      )
    : 0;
