import { BadgeCheck, BookOpenCheck, CheckCircle2, ClipboardList } from "lucide-react";

const notes = [
  {
    title: "AI Passport",
    status: "complete local",
    body: "Lesson, exam dashboard, Japanese-style practice, weak review và local progress backup đã ổn định cho học offline/local.",
  },
  {
    title: "基本情報",
    status: "complete local + 科目B",
    body: "Đã có roadmap riêng, practice drill, exam simulator, 科目B algorithm/trace trainer và readiness flow theo nhóm kiến thức.",
  },
  {
    title: "Python",
    status: "code lab + FastAPI + project",
    body: "Đã bổ sung Python roadmap, code lab, visible/all tests, FastAPI-only path, mini project, interview/review và content QA cuối.",
  },
];

export function ReleaseNotesV77R({ courseTitle }: { courseTitle: string }) {
  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="V77R release notes">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-indigo-600 dark:text-indigo-300">
            <ClipboardList className="h-4 w-4" /> V77R Release Notes
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Local learning suite final QA</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
            Bản này đóng vai trò kiểm tra cuối: nội dung Python được làm dày thêm bằng ví dụ, bẫy lỗi, edge case và next action; ba course chính được đánh dấu trạng thái sẵn sàng học local.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200">
          <BadgeCheck className="h-4 w-4" /> Active: {courseTitle}
        </span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-black text-slate-950 dark:text-white">{note.title}</h3>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="mt-1 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-200">{note.status}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{note.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 rounded-2xl bg-slate-50 p-3 text-xs font-bold leading-5 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        <BookOpenCheck className="h-4 w-4 text-indigo-500" /> Sau V77R, app được xem là local learning suite khá hoàn chỉnh: học, luyện, review, project, backup và release audit đều nằm trong app.
      </p>
    </section>
  );
}
