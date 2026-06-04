import type { ReactNode } from 'react';
import { BookOpen, CheckCircle2, GitBranch, GraduationCap, Lightbulb, Star } from 'lucide-react';
import { getLessonContent } from '../data/lessonContent';
import { categoryMeta, statusLabel } from '../utils/categoryMeta';
import type { KnowledgeNodeData, Language, StudyStatus } from '../types';
import { getLessonMistakes, getLessonPatterns, getLessonText, getNodeExamPoint, getNodeLabel, getNodeSummary } from '../utils/i18n';

interface DetailPanelProps {
  node: KnowledgeNodeData;
  connectedNodes: KnowledgeNodeData[];
  language: Language;
  status?: StudyStatus;
  isFavorite: boolean;
  onSelectNode: (nodeId: string) => void;
  onToggleStatus: () => void;
  onToggleFavorite: () => void;
}

const getLessonSteps = (node: KnowledgeNodeData, language: Language) => {
  if (language === 'ja') {
    return [
      `${node.labelJa}が何の分野に属するか確認します。`,
      `定義を一言で説明できるようにします: ${getNodeSummary(node, language)}`,
      `試験で聞かれやすいポイントを覚えます: ${getNodeExamPoint(node, language)}`,
      `関連キーワードをセットで暗記します: ${node.keywords.slice(0, 5).join('・')}`,
    ];
  }
  return [
    `Xác định ${node.labelJa} thuộc nhóm kiến thức nào trong IT Passport.`,
    `Nói lại định nghĩa bằng 1 câu: ${getNodeSummary(node, language)}`,
    `Ghi nhớ điểm hay ra thi: ${getNodeExamPoint(node, language)}`,
    `Học theo cụm keyword: ${node.keywords.slice(0, 5).join(' · ')}`,
  ];
};

export function DetailPanel({ node, connectedNodes, language, status = 'new', isFavorite, onSelectNode, onToggleStatus, onToggleFavorite }: DetailPanelProps) {
  const meta = categoryMeta[node.category];
  const summary = getNodeSummary(node, language);
  const examPoint = getNodeExamPoint(node, language);
  const lessonSteps = getLessonSteps(node, language);
  const lesson = getLessonContent(node.id);

  return (
    <aside className="glass-panel flex max-h-[66vh] flex-col gap-4 overflow-y-auto rounded-[2rem] p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`inline-flex rounded-full border ${meta.border} ${meta.bg} px-3 py-1 text-xs font-bold ${meta.color}`}>{meta.label}</span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{node.labelJa}</h2>
          {node.reading && <p className="text-sm text-slate-500">{node.reading}</p>}
          <p className="font-semibold text-indigo-700">{node.labelVi}</p>
          <p className="text-sm text-slate-500">{node.labelEn}</p>
        </div>
        <button type="button" onClick={onToggleFavorite} className="focus-ring rounded-2xl bg-white p-3 shadow-soft transition hover:-translate-y-0.5" aria-label="favorite">
          <Star className={`h-5 w-5 ${isFavorite ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
        </button>
      </div>

      <InfoCard icon={<BookOpen className="h-4 w-4" />} title="Giải thích dễ hiểu" dark>
        {summary}
      </InfoCard>


      {lesson && (
        <section className="rounded-2xl border border-emerald-100 bg-emerald-50/90 p-4">
          <p className="text-sm font-black text-emerald-950">Bài học chi tiết</p>
          <p className="mt-2 text-sm leading-6 text-emerald-950">{getLessonText(lesson, "definition", language)}</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Vì sao quan trọng</p>
          <p className="mt-1 text-sm leading-6 text-emerald-950">{getLessonText(lesson, "why", language)}</p>
        </section>
      )}

      <section className="rounded-2xl border border-violet-100 bg-white/90 p-4 shadow-sm">
        <p className="flex items-center gap-2 text-sm font-black text-violet-950"><GraduationCap className="h-4 w-4" /> Bài học nhanh</p>
        <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
          {lessonSteps.map((step, index) => <li key={step} className="flex gap-2"><span className="font-black text-violet-600">{index + 1}.</span><span>{step}</span></li>)}
        </ol>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
        <p className="text-sm font-black text-indigo-950">Điểm hay ra thi</p>
        <p className="mt-2 text-sm leading-6 text-indigo-900">{examPoint}</p>
      </section>


      {lesson && (
        <section className="rounded-2xl border border-rose-100 bg-rose-50/80 p-4">
          <p className="text-sm font-black text-rose-950">Dạng câu hỏi hay gặp</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-rose-950">
            {getLessonPatterns(lesson, language).map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mt-3 text-sm font-black text-rose-950">Dễ nhầm</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-rose-950">
            {getLessonMistakes(lesson, language).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
        <p className="flex items-center gap-2 text-sm font-black text-amber-950"><Lightbulb className="h-4 w-4" /> Cách nhớ nhanh</p>
        <p className="mt-2 text-sm leading-6 text-amber-900">
          {lesson ? getLessonText(lesson, "memory", language) : (language === 'ja'
            ? `「${node.keywords.slice(0, 3).join('・')}」を中心に、意味・例・関連語をまとめて覚えます。`
            : `Hãy nhớ node này theo cụm: ${node.keywords.slice(0, 3).join(' · ')}. Khi gặp đề, hãy tìm keyword trước rồi nối về khái niệm.`)}
        </p>
      </section>

      <section>
        <p className="text-sm font-black text-slate-900">Keyword</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {node.keywords.map((word) => <span key={word} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">{word}</span>)}
        </div>
      </section>

      {node.examples.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
          <p className="text-sm font-black text-slate-900">Ví dụ thực tế</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {node.examples.map((example) => <li key={example}>{example}</li>)}
          </ul>
        </section>
      )}

      <section>
        <p className="flex items-center gap-2 text-sm font-black text-slate-900"><GitBranch className="h-4 w-4" /> Node liên quan</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {connectedNodes.length === 0 ? <span className="text-sm text-slate-500">Chưa có liên kết trực tiếp.</span> : connectedNodes.map((item) => (
            <button key={item.id} onClick={() => onSelectNode(item.id)} className="focus-ring rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
              {getNodeLabel(item, language)}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <button type="button" onClick={onToggleStatus} className="focus-ring rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5">
          <CheckCircle2 className="mr-2 inline h-4 w-4" /> {statusLabel[status]}
        </button>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
          Importance: <span className="capitalize text-rose-600">{node.importance}</span>
        </div>
      </div>
    </aside>
  );
}

function InfoCard({ title, children, icon, dark = false }: { title: string; children: string; icon: ReactNode; dark?: boolean }) {
  if (dark) {
    return (
      <div className="rounded-2xl bg-slate-950 p-4 text-white shadow-glow">
        <div className="flex items-center gap-2 text-sm font-bold text-cyan-200">{icon} {title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-100">{children}</p>
      </div>
    );
  }
  return <section className="rounded-2xl border border-slate-200 bg-white/80 p-4"><p className="text-sm font-black text-slate-900">{title}</p><p className="mt-2 text-sm leading-6 text-slate-600">{children}</p></section>;
}
