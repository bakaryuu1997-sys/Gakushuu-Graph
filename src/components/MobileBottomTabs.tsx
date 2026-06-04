import { AlertTriangle, BookOpen, FileQuestion, Home } from "lucide-react";
import type { StudyView } from "../features/knowledge-graph/components/StudyNavigation";

export function MobileBottomTabs({ activeView, onView }: { activeView: StudyView; onView: (view: StudyView) => void }) {
  const tabs: Array<{ id: StudyView; label: string; icon: typeof BookOpen; hint: string }> = [
    { id: "start", label: "Today", icon: Home, hint: "mở focus mode" },
    { id: "phaseStudy", label: "Lesson", icon: BookOpen, hint: "học tiếp" },
    { id: "exam", label: "Quiz", icon: FileQuestion, hint: "làm mini quiz" },
    { id: "weak", label: "Review", icon: AlertTriangle, hint: "ôn bài yếu" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 px-3 py-2 shadow-[0_-16px_32px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-4 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeView === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-label={`${tab.label}: ${tab.hint}`}
              aria-current={active ? "page" : undefined}
              onClick={() => onView(tab.id)}
              className={`rounded-2xl px-2 py-2 text-center text-[11px] font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${active ? "bg-slate-950 text-white shadow-glow" : "bg-white text-slate-600 shadow-sm"}`}
            >
              <Icon className="mx-auto mb-1 h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
