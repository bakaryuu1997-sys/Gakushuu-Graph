import type { ReactNode } from 'react';
import { CheckCircle2, ClipboardCheck, FileText, Lightbulb, ShieldAlert, Split, XCircle } from 'lucide-react';
import { examCheatSheet } from '../../../courses/ai-passport/aiPassportV12Content';
import { examCheatSheetV13 } from '../../../courses/ai-passport/aiPassportV13Content';

const SectionCard = ({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) => (
  <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
    <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-violet-600">{icon}{title}</p>
    {children}
  </section>
);

export function ExamCheatSheetView() {
  return (
    <section className="grid gap-4 pb-4">
      <article className="glass-panel rounded-[2rem] p-5 md:p-6">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-600"><FileText className="h-4 w-4" /> Exam Cheat Sheet</p>
        <h2 className="mt-1 text-2xl font-black leading-tight text-slate-950 md:text-3xl">Tóm tắt cuối trước khi thi AI Passport</h2>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">Trang này gom những thuật ngữ hay ra, cặp dễ nhầm, công thức nhớ nhanh, bẫy đề thi và ví dụ đúng/sai. Dùng nó trước khi luyện Japanese Exam hoặc trước ngày thi.</p>
      </article>


      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Cách đọc đề tình huống" icon={<ClipboardCheck className="h-4 w-4" />}>
          <ol className="grid gap-2">
            {examCheatSheetV13.examFlow.map((item, index) => <li key={item} className="rounded-2xl bg-violet-50 p-3 text-sm font-bold leading-6 text-violet-950"><span className="mr-2 text-violet-600">{index + 1}.</span>{item}</li>)}
          </ol>
        </SectionCard>
        <SectionCard title="Checklist chọn đáp án" icon={<CheckCircle2 className="h-4 w-4" />}>
          <div className="grid gap-2">
            {examCheatSheetV13.scenarioChecklist.map((item) => <div key={item} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-3 text-sm font-bold leading-6 text-cyan-950">{item}</div>)}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <SectionCard title="Thuật ngữ hay ra" icon={<Lightbulb className="h-4 w-4" />}>
          <div className="grid gap-2">
            {examCheatSheet.frequentTerms.map(([ja, en, vi]) => (
              <div key={ja} className="rounded-2xl bg-slate-50 p-3">
                <div className="flex flex-wrap items-baseline gap-2"><span className="text-base font-black text-slate-950">{ja}</span><span className="rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-black text-violet-700">{en}</span></div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{vi}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Cặp dễ nhầm" icon={<Split className="h-4 w-4" />}>
          <div className="grid gap-2">
            {examCheatSheet.confusedPairs.map(([pair, tip]) => <div key={pair} className="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p className="font-black text-indigo-950">{pair}</p><p className="mt-1 text-sm leading-6 text-indigo-900">{tip}</p></div>)}
          </div>
        </SectionCard>

        <SectionCard title="Công thức nhớ nhanh" icon={<CheckCircle2 className="h-4 w-4" />}>
          <ol className="grid gap-2">
            {examCheatSheet.memoryFormulas.map((item, index) => <li key={item} className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-950"><span className="mr-2 text-emerald-600">{index + 1}.</span>{item}</li>)}
          </ol>
        </SectionCard>

        <SectionCard title="Bẫy đề thi" icon={<ShieldAlert className="h-4 w-4" />}>
          <ul className="grid gap-2">
            {[...examCheatSheet.examTraps, ...examCheatSheetV13.extraTraps].map((item) => <li key={item} className="rounded-2xl bg-rose-50 p-3 text-sm font-bold leading-6 text-rose-950">⚠ {item}</li>)}
          </ul>
        </SectionCard>
      </div>

      <SectionCard title="Ví dụ đúng / sai" icon={<XCircle className="h-4 w-4" />}>
        <div className="grid gap-2 md:grid-cols-2">
          {examCheatSheet.rightWrongExamples.map(([label, text]) => {
            const ok = label === 'Đúng';
            return <div key={text} className={`rounded-2xl border p-3 ${ok ? 'border-emerald-100 bg-emerald-50 text-emerald-950' : 'border-rose-100 bg-rose-50 text-rose-950'}`}><p className="text-xs font-black uppercase">{label}</p><p className="mt-1 text-sm font-bold leading-6">{text}</p></div>;
          })}
        </div>
      </SectionCard>
    </section>
  );
}
