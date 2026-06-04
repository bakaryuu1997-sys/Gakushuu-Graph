import type { ReactNode } from 'react';
import { BookMarked, Braces, Calculator, Languages, ListChecks } from 'lucide-react';
import type { LessonContent } from '../data/lessonContent';
import type { KnowledgeNodeData, Language } from '../types';
import { getLessonMistakes, getLessonPatterns, getLessonText, getNodeExamPoint, getNodeLabel } from '../utils/i18n';

const categoryMode: Record<string, { subject: string; action: string; icon: typeof Braces }> = {
  technology: { subject: '科目B寄り', action: 'trace / tính toán / đọc pseudo-code', icon: Braces },
  database: { subject: '科目A + SQL', action: 'đọc bảng, JOIN, transaction, normalization', icon: ListChecks },
  network: { subject: '科目A + tính subnet', action: 'đổi prefix, đọc protocol, phân biệt layer', icon: Calculator },
  security: { subject: '科目A trọng điểm', action: 'đọc tình huống rủi ro và chọn đối sách', icon: BookMarked },
  management: { subject: '科目A', action: 'phân biệt quy trình, vai trò và chỉ số quản lý', icon: ListChecks },
  business: { subject: '科目A', action: 'đọc thuật ngữ kinh doanh, luật và kế toán cơ bản', icon: BookMarked },
};

export function FundamentalInfoLessonPolish({ node, lesson, language }: { node: KnowledgeNodeData; lesson?: LessonContent; language: Language }) {
  const mode = categoryMode[node.category] ?? categoryMode.technology;
  const Icon = mode.icon;
  const label = getNodeLabel(node, language);
  const patterns = lesson ? getLessonPatterns(lesson, language) : [getNodeExamPoint(node, language)];
  const mistakes = lesson ? getLessonMistakes(lesson, language) : ['Nhầm định nghĩa với ví dụ hoặc chọn đáp án vì thấy keyword quen.'];
  const definition = lesson ? getLessonText(lesson, 'definition', language) : node.summaryVi;

  return (
    <section className="mt-4 space-y-3" aria-label="Fundamental Information lesson polish">
      <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-blue-700"><Icon className="h-4 w-4" /> 基本情報 point</p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-blue-700">{mode.subject}</span>
        </div>
        <h3 className="mt-2 text-lg font-black text-blue-950">{label} は「{mode.action}」までできると得点につながる</h3>
        <p className="mt-2 text-sm font-bold leading-7 text-blue-900">{definition}</p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <InfoCard title="科目A point" icon={<BookMarked className="h-4 w-4" />} text={patterns[0] ?? getNodeExamPoint(node, language)} />
        <InfoCard title="科目B point" icon={<Braces className="h-4 w-4" />} text={buildSubjectBHint(node)} />
        <InfoCard title="日本語のひっかけ" icon={<Languages className="h-4 w-4" />} text={buildJapaneseTrap(node, mistakes[0])} />
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-slate-500"><Calculator className="h-4 w-4" /> 例題の読み方</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-bold leading-7 text-slate-700">
          <li>まず keyword を丸で囲む: {node.keywords.slice(0, 3).join(' / ') || label}</li>
          <li>次に「分類問題」「計算問題」「trace問題」「対策選択」のどれかを決める。</li>
          <li>最後に選択肢を1つずつ消す。FEは正解を探すより、誤りを消す方が安定します。</li>
        </ol>
      </div>
    </section>
  );
}

function InfoCard({ title, icon, text }: { title: string; icon: ReactNode; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-slate-500">{icon}{title}</p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function buildSubjectBHint(node: KnowledgeNodeData) {
  if (node.id.includes('sql') || node.category === 'database') return 'SQLは「FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT」の順で考える。結果表を1行ずつ想像する。';
  if (node.id.includes('subnet') || node.id.includes('ip')) return 'prefixから host bit を出し、2^(32-prefix) と network/broadcast を分けて考える。';
  if (node.id.includes('sort') || node.id.includes('search') || node.id.includes('array') || node.id.includes('loop') || node.id.includes('pseudo')) return '変数表を作り、ループ1回ごとの値を書き出す。境界条件と添字に注意する。';
  return '手順・条件・例外を表にして、入力→処理→出力の流れを追う。';
}

function buildJapaneseTrap(node: KnowledgeNodeData, mistake: string) {
  const trapWords = node.keywords.slice(0, 2).join(' / ');
  return `${trapWords || node.labelJa} という単語だけで選ばない。問題文の「最も適切」「誤っている」「以上/未満」を確認する。${mistake}`;
}
