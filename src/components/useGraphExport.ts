import { toPng } from "html-to-image";

export const useGraphExport = (courseId: string) => async () => {
  const element = document.getElementById("knowledge-graph-export");
  if (!element) return;
  const dataUrl = await toPng(element, { cacheBust: true, pixelRatio: 2 });
  const link = document.createElement("a");
  link.download = `${courseId}-knowledge-graph.png`;
  link.href = dataUrl;
  link.click();
};
