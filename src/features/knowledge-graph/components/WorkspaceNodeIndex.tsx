import { useState } from "react";
import { Search } from "lucide-react";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { NodeCard } from "./LessonWorkspacePrimitives";

export function NodeIndex(props: Props) {
  const [q, setQ] = useState("");
  const visible = props.nodes
    .filter((n) =>
      [n.labelJa, n.labelVi, n.labelEn, ...n.keywords]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase()),
    )
    .slice(0, 120);
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <label className="flex gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search node..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </label>
      <div className="mt-4 grid max-h-[720px] gap-2 overflow-y-auto sm:grid-cols-2">
        {visible.map((node, i) => (
          <NodeCard key={node.id} node={node} index={i + 1} {...props} />
        ))}
      </div>
    </section>
  );
}
