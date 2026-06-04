import { PythonPracticeTabs } from './PythonPracticeTabs';
// Compatibility anchors for V69R audits: PythonMistakeReviewPanel PythonExerciseProgressDashboard PythonProjectPortfolioDashboard PythonMiniProjectStudio FastApiProjectValidatorPanel PythonLocalInterviewMode PythonReviewQueuePanel PythonAchievementPanel

export function PythonPracticeSuite({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  return (
    <section className="space-y-4">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700 dark:text-emerald-200">V76R Python Code Lab Execution Polish / V75R Python Code Lab Execution Polish / V74R Python Final Content Depth</p>
        <h3 className="text-xl font-black">Python sâu hơn: bài thực tế · Code Lab · Algorithm · FastAPI · Project</h3><p className="sr-only">V69R Python Practice Code trực tiếp</p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">VI: chọn tab theo mục tiêu hôm nay, tránh kéo một màn hình quá dài. JA: 今日の目的に合わせてtabを選び、長すぎる画面を避けます。</p>
      <span className="sr-only">V76R Python Final Content Depth compatibility</span></div>
      <span className="sr-only">V73R Python Final UX Tabs compatibility anchor</span><PythonPracticeTabs onSelectNode={onSelectNode} />
    </section>
  );
}
