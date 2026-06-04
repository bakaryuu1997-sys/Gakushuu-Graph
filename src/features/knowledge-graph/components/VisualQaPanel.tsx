import { CheckCircle2, HardDrive, LayoutDashboard, Smartphone, Sparkles } from "lucide-react";

const checks = [
  {
    title: "Beginner route",
    detail: "Start screen luôn đưa người học theo luồng học → quiz → review thay vì bắt tự chọn công cụ.",
    icon: Sparkles,
  },
  {
    title: "Navigation density",
    detail: "Beginner Mode ẩn Graph/Coverage/Export để giảm nhiễu; Advanced Mode mở lại đầy đủ.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile priority",
    detail: "Mobile ưu tiên Today, Lesson, Quiz, Review; graph chỉ là advanced fullscreen map.",
    icon: Smartphone,
  },
  {
    title: "Local-only release",
    detail: "Progress backup/import/reset chạy bằng localStorage, không cần backend hoặc tài khoản.",
    icon: HardDrive,
  },
];

export function VisualQaPanel() {
  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="V56 visual QA checklist">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-600">V56 Visual QA · V54 Visual QA upgraded</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">UI/UX checklist cho AI Passport</h2>
          <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
            Dùng checklist này để kiểm nhanh sau mỗi lần sửa: người mới có biết học gì tiếp theo không, mobile có ít nhiễu không, và advanced tools có bị lộ quá sớm không.
          </p>
        </div>
        <CheckCircle2 className="h-7 w-7 shrink-0 text-emerald-500" />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {checks.map((check) => {
          const Icon = check.icon;
          return (
            <article key={check.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
              <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">{check.title}</h3>
              <p className="mt-1 text-xs font-bold leading-5 text-slate-500 dark:text-slate-300">{check.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
