export function LearningFooter() {
  return (
    <footer className="mx-auto grid w-full max-w-[1800px] gap-3 px-4 pb-6 lg:grid-cols-3 lg:px-6">
      <div className="glass-panel rounded-3xl p-4"><b>Overview</b><p className="mt-1 text-sm text-slate-600">Nhìn 3 nhóm lớn: Strategy, Management, Technology.</p></div>
      <div className="glass-panel rounded-3xl p-4"><b>Study</b><p className="mt-1 text-sm text-slate-600">Click node để đọc giải thích, ví dụ, keyword thi.</p></div>
      <div className="glass-panel rounded-3xl p-4"><b>Exam</b><p className="mt-1 text-sm text-slate-600">Chỉ hiện node quan trọng cao để ôn nước rút.</p></div>
    </footer>
  );
}
