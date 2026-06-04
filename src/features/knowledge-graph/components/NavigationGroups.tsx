import { useState } from "react";
import type { StudyView, ViewItem } from "./studyNavigationConfig";

export function ViewGroup({
  title,
  views,
  activeView,
  onView,
  large = false,
}: {
  title: string;
  views: ViewItem[];
  activeView: StudyView;
  onView: (view: StudyView) => void;
  large?: boolean;
}) {
  if (views.length === 0) return null;
  return (
    <section>
      {title && (
        <p className="mb-2 text-[10px] font-black uppercase tracking-[.18em] text-slate-400">
          {title}
        </p>
      )}
      <div className={`grid gap-2 ${large ? "grid-cols-3" : "grid-cols-2"}`}>
        {views.map((view) => {
          const Icon = view.icon;
          const active = activeView === view.id;
          return (
            <button
              key={view.id}
              type="button"
              aria-label={`${view.label}: ${view.hint}`}
              data-testid={`view-${view.id}`}
              aria-current={active ? "page" : undefined}
              onClick={() => onView(view.id)}
              className={`rounded-2xl px-3 py-3 text-left transition ${active ? "bg-slate-950 text-white shadow-glow" : "bg-white/80 text-slate-600 shadow-sm hover:-translate-y-0.5 dark:bg-slate-900/80 dark:text-slate-200"}`}
            >
              <Icon className="h-4 w-4" />
              <span className="mt-2 block text-sm font-black">
                {view.label}
              </span>
              <span className="text-[10px] font-semibold opacity-70">
                {view.hint}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function CollapsibleViewGroup(props: {
  title: string;
  views: ViewItem[];
  activeView: StudyView;
  onView: (view: StudyView) => void;
  defaultOpen?: boolean;
}) {
  const hasActive = props.views.some((view) => view.id === props.activeView);
  const [open, setOpen] = useState(Boolean(props.defaultOpen || hasActive));
  if (props.views.length === 0) return null;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/70 p-2 dark:border-slate-700 dark:bg-slate-900/70">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-xs font-black uppercase tracking-[.16em] text-slate-500 dark:text-slate-300"
      >
        <span>{props.title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="mt-2">
          <ViewGroup
            title=""
            views={props.views}
            activeView={props.activeView}
            onView={props.onView}
          />
        </div>
      )}
    </section>
  );
}
