import { useEffect, useState, type ReactNode } from 'react';
import { BookOpen, CheckCircle2, Code2, ListChecks, PlayCircle, HelpCircle, TriangleAlert } from 'lucide-react';
import type { LessonContent } from '../data/lessonContent';
import type { KnowledgeNodeData, Language } from '../types';
import type { CourseId } from '../../../courses/types';
import { buildV99LessonBlueprint } from '../../../courses/v99LessonBlueprint';
import type { EasyDeepLesson } from '../../../courses/v102v103EasyLessonTypes';
import type { V104WrittenLesson } from '../../../courses/v104WrittenLessonPack';
import type { PythonV100DeepChapter } from '../../../courses/python/v100rDeepChapterPack';
import type { PythonV101EasyLesson } from '../../../courses/python/v101EasyLessonPack';
import { loadV114LessonData, type V114LessonDataBundle } from '../../../courses/v114LessonDataLoader';
import type { V105ManualChapter } from '../../../courses/v105ManualChapterPack';
import { AiPassportLessonSection } from './AiPassportLessonSection';
import { FundamentalInfoLessonSection } from './FundamentalInfoLessonSection';
import { SqlLessonSection } from './SqlLessonSection';
import { FrontendLessonSection } from './FrontendLessonSection';
import { LinuxLessonSection } from './LinuxLessonSection';
import { BrseLessonSection } from './BrseLessonSection';
import { ItPassportLessonSection } from './ItPassportLessonSection';

interface Props {
  courseId: CourseId;
  node: KnowledgeNodeData;
  lesson?: LessonContent;
  language: Language;
}

export function V99LessonDetailPage({ courseId, node, lesson, language }: Props) {
  const [readingMode, setReadingMode] = useState<LessonReadingMode>('focus');
  const [lessonData, setLessonData] = useState<V114LessonDataBundle | null>(null);
  const detail = buildV99LessonBlueprint(courseId, node);
  const answer = detail.miniQuizChoicesVi[detail.miniQuizAnswerIndex];

  useEffect(() => {
    let active = true;
    setLessonData(null);
    loadV114LessonData(courseId, node, lesson).then((bundle) => {
      if (active) setLessonData(bundle);
    });
    return () => { active = false; };
  }, [courseId, node.id, lesson]);

  const pythonDeepChapter = lessonData?.pythonDeepChapter;
  const pythonEasyLesson = lessonData?.pythonEasyLesson;
  const easyCourseLesson = lessonData?.easyCourseLesson;
  const loadedV104Lesson = lessonData?.v104Lesson;
  const v106Chapter = lessonData?.v110Chapter;
  const fallbackV104Lesson = buildFallbackV104Lesson(courseId, node, detail);
  const v104Lesson = loadedV104Lesson ?? fallbackV104Lesson;
  const showDeep = readingMode !== 'practice';
  const showPractice = readingMode !== 'focus';
  const showArchive = readingMode === 'full';
  const hasManualChapterAnchor = Boolean(v106Chapter) || hasLikelyManualChapter(courseId, node);
  const navPrefix = readingMode === 'practice' && !hasManualChapterAnchor ? 'v108' : hasManualChapterAnchor ? 'v106' : 'v104';

  return (
    <section className="mt-5 space-y-4" aria-label="V99R lesson detail page">
      <div className="rounded-[2rem] border border-indigo-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="hidden">V99R Lesson Detail</p>
            <h2 className="hidden">Khái niệm → Ví dụ → Trace → Bài tập → Expected output → Quiz nhỏ</h2>
            <p className="text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
              {language === 'ja' ? detail.conceptJa : detail.conceptVi}
            </p>
          </div>
          <span className="hidden">content-first</span>
        </div>
      </div>

      <LessonLegacyStructureSnapshot courseId={courseId} node={node} />

      <LessonReadingModeToolbar mode={readingMode} onMode={setReadingMode} />

      <LessonQuickNav prefix={navPrefix} mode={readingMode} />

      {!lessonData && <V114LessonDataLoadingCard courseId={courseId} node={node} />}

      {courseId === 'ai-passport' && lesson && (
        <AiPassportLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'fundamental-info' && lesson && (
        <FundamentalInfoLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'sql' && lesson && (
        <SqlLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'frontend' && lesson && (
        <FrontendLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'linux' && lesson && (
        <LinuxLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'brse' && lesson && (
        <BrseLessonSection node={node} lesson={lesson} language={language} />
      )}

      {courseId === 'it-passport' && lesson && (
        <ItPassportLessonSection node={node} lesson={lesson} language={language} />
      )}

      {!['ai-passport', 'fundamental-info', 'sql', 'frontend', 'linux', 'brse', 'it-passport'].includes(courseId) && showDeep && v104Lesson && (
        <V104WrittenLessonSection lesson={v104Lesson} anchorPrefix={v106Chapter ? undefined : 'v104'} />
      )}

      {v106Chapter && <V106ManualChapterSection chapter={v106Chapter} anchorPrefix="v106" mode={readingMode} />}

      {showPractice && v104Lesson && <LessonPracticeFocusPanel chapter={v106Chapter} lesson={v104Lesson} />}

      {showDeep && pythonEasyLesson && (
        <section className="rounded-[2rem] border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-800 dark:bg-slate-950" aria-label="V101R Python easy deep lesson">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-600 dark:text-emerald-300">V101R Bài học dễ hiểu · Python</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{pythonEasyLesson.titleVi}</h2>
              <p className="mt-2 max-w-4xl text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{pythonEasyLesson.goalVi}</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">written lesson</span>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
            <div className="rounded-3xl bg-emerald-50/70 p-4 dark:bg-emerald-950/20">
              <h3 className="font-black text-emerald-900 dark:text-emerald-100">1. Ý chính nói bằng ngôn ngữ dễ hiểu</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-emerald-950 dark:text-emerald-100">{pythonEasyLesson.bigIdeaVi}</p>
              <p className="mt-3 rounded-2xl bg-white/80 p-3 text-xs font-bold leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-200">Ví dụ đời thường: {pythonEasyLesson.analogyVi}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
              <h3 className="font-black text-slate-900 dark:text-white">2. Giải thích từng ý</h3>
              <ul className="mt-2 space-y-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">
                {pythonEasyLesson.explainVi.map((line) => <li key={line} className="rounded-2xl bg-white p-3 dark:bg-slate-950">{line}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-4 text-emerald-100 shadow-inner dark:border-slate-700">
              <h3 className="font-black text-white">3. Code mẫu thật để đọc</h3>
              <pre className="mt-3 max-h-[420px] overflow-auto whitespace-pre-wrap text-xs leading-6">{pythonEasyLesson.code}</pre>
            </div>
            <div className="rounded-3xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/20">
              <h3 className="font-black text-purple-900 dark:text-purple-100">4. Trace từng dòng</h3>
              <ol className="mt-3 space-y-2">
                {pythonEasyLesson.traceVi.map((step, index) => <li key={`${pythonEasyLesson.id}-${index}`} className="rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-200"><b>Step {index + 1}:</b> {step}</li>)}
              </ol>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/20">
              <h3 className="font-black text-sky-900 dark:text-sky-100">5. Bài tập tự làm</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{pythonEasyLesson.practiceVi}</p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-black text-emerald-900 dark:text-emerald-100">6. Expected output</h3>
              <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-emerald-950 dark:bg-slate-950 dark:text-emerald-100">{pythonEasyLesson.expectedOutput}</pre>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
              <h3 className="font-black text-amber-900 dark:text-amber-100">7. Quiz nhỏ</h3>
              <p className="mt-2 text-sm font-black leading-7 text-slate-800 dark:text-slate-100">{pythonEasyLesson.quizQuestionVi}</p>
              <p className="mt-2 rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-amber-950 dark:bg-slate-950 dark:text-amber-100">Đáp án: {pythonEasyLesson.quizAnswerVi}</p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/20">
            <h3 className="font-black text-rose-900 dark:text-rose-100">8. Hiểu nhầm cần tránh</h3>
            <p className="mt-2 text-sm font-bold leading-7 text-rose-950 dark:text-rose-100">{pythonEasyLesson.commonMisunderstandingVi}</p>
            <p className="mt-2 text-xs font-black text-slate-600 dark:text-slate-300">Interview checkpoint: {pythonEasyLesson.interviewReadyVi}</p>
          </div>
        </section>
      )}


      {showDeep && easyCourseLesson && !['ai-passport', 'fundamental-info', 'sql', 'frontend', 'linux', 'brse', 'it-passport'].includes(courseId) && <CourseEasyLessonSection lesson={easyCourseLesson} />}

      {showArchive && <details className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
        <summary className="cursor-pointer text-sm font-black text-slate-800 dark:text-slate-100">V99R archive / tham khảo thêm</summary>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,.95fr)]">
        <LessonBlock icon={<BookOpen className="h-4 w-4" />} title="1. Khái niệm" tone="indigo">
          <p>{language === 'ja' ? detail.conceptJa : detail.conceptVi}</p>
          <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            Câu hỏi tự kiểm tra: “Mình có giải thích được {node.labelVi || node.labelEn} bằng ví dụ thật trong 30 giây không?”
          </p>
        </LessonBlock>

        <LessonBlock icon={<Code2 className="h-4 w-4" />} title={`2. Ví dụ: ${detail.exampleTitle}`} tone="sky">
          <p>{detail.exampleExplanationVi}</p>
          <pre className="mt-3 max-h-[360px] overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-emerald-100 shadow-inner">{detail.exampleCode}</pre>
        </LessonBlock>

        <LessonBlock icon={<PlayCircle className="h-4 w-4" />} title="3. Trace từng bước" tone="purple">
          <ol className="space-y-2">
            {detail.traceSteps.map((step, index) => (
              <li key={`${step}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-bold leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <span className="mr-2 rounded-full bg-purple-600 px-2 py-1 text-[10px] font-black text-white">Step {index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </LessonBlock>

        <LessonBlock icon={<ListChecks className="h-4 w-4" />} title="4. Bài tập nhỏ" tone="emerald">
          <p>{detail.exerciseVi}</p>
          <div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm font-black leading-6 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100">
            Expected output / bộ kiểm tra
            <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-white/80 p-3 text-xs font-bold text-emerald-900 dark:bg-slate-950 dark:text-emerald-100">{detail.expectedOutput}</pre>
          </div>
        </LessonBlock>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_.9fr]">
        <LessonBlock icon={<HelpCircle className="h-4 w-4" />} title="5. Quiz nhỏ" tone="amber">
          <p className="font-black">{detail.miniQuizQuestionVi}</p>
          <div className="mt-3 grid gap-2">
            {detail.miniQuizChoicesVi.map((choice, index) => (
              <div key={choice} className={`rounded-2xl border px-3 py-2 text-sm font-bold ${index === detail.miniQuizAnswerIndex ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100' : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}>
                {String.fromCharCode(65 + index)}. {choice}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-black text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="mr-1 inline h-4 w-4" /> Đáp án: {answer}</p>
        </LessonBlock>

        <LessonBlock icon={<TriangleAlert className="h-4 w-4" />} title="6. Lỗi cần tránh" tone="rose">
          <p>{detail.antiPatternVi}</p>
          <p className="mt-3 rounded-2xl bg-rose-50 p-3 text-xs font-bold text-rose-950 dark:bg-rose-950/30 dark:text-rose-100">
            Khi học xong bài này, đừng bấm Done nếu bạn chưa tự viết được ví dụ hoặc chưa dự đoán output.
          </p>
        </LessonBlock>
      </div>

      </details>}

      {showDeep && pythonDeepChapter && (
        <LessonBlock icon={<Code2 className="h-4 w-4" />} title="V100R Python deep chapter — bài học viết tay sâu hơn" tone="emerald">
          <p className="font-bold">{pythonDeepChapter.conceptVi}</p>
          <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            Khi nào dùng: {pythonDeepChapter.whenUseVi}
          </p>
          <pre className="mt-3 max-h-[360px] overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-emerald-100">{pythonDeepChapter.code}</pre>
          <ol className="mt-3 space-y-2">
            {pythonDeepChapter.traceVi.map((step, index) => (
              <li key={`${pythonDeepChapter.id}-trace-${index}`} className="rounded-2xl bg-slate-50 p-3 text-xs font-bold leading-5 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                <b>Trace {index + 1}:</b> {step}
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-xs font-bold leading-5 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100">
            Bài tập: {pythonDeepChapter.exerciseVi}
            <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-white/80 p-3 text-xs text-emerald-900 dark:bg-slate-950 dark:text-emerald-100">{pythonDeepChapter.expectedOutput}</pre>
          </div>
        </LessonBlock>
      )}
    </section>
  );
}



function hasLikelyManualChapter(courseId: CourseId, node: KnowledgeNodeData) {
  const text = `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords?.join(' ') ?? ''}`.toLowerCase();
  if (courseId === 'python') return /python|fastapi|async|auth|class|oop|dict|list|stack|queue|dp|bfs|file|pytest|database/.test(text);
  if (courseId === 'fundamental-info') return /sql|dp|stack|queue|network|subnet|security|auth|dns|tls|bfs|graph|科目b/.test(text);
  if (courseId === 'ai-passport') return /ai|ml|model|rag|prompt|privacy|bias|governance|law|business|risk/.test(text);
  return false;
}

function legacyManualTitle(courseId: CourseId, node: KnowledgeNodeData) {
  const text = `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords?.join(' ') ?? ''}`.toLowerCase();
  if (courseId === 'python' && /class|oop|object|self/.test(text)) return 'Python OOP: class không phải cú pháp khó';
  if (courseId === 'python' && /fastapi|dependency|auth|database|async/.test(text)) return 'Python FastAPI: route rõ input, service rõ trách nhiệm';
  if (courseId === 'fundamental-info' && /sql|join|transaction/.test(text)) return '基本情報 SQL: đọc bảng theo từng bước';
  if (courseId === 'ai-passport' && /rag|genai|prompt|llm/.test(text)) return 'AI Passport case study: GenAI/RAG cần kiểm chứng';
  return 'Manual chapter viết tay theo course';
}

function buildFallbackV104Lesson(courseId: CourseId, node: KnowledgeNodeData, detail: ReturnType<typeof buildV99LessonBlueprint>): V104WrittenLesson {
  const title = node.labelVi || node.labelEn || node.labelJa || node.id;
  return {
    id: `${node.id}-v116-fallback-written`,
    courseLabel: `V104R · fallback content · ${courseId}`,
    titleVi: `${title}: học bằng ví dụ, trace và expected output`,
    purposeVi: `Nắm ${title} bằng cách đọc khái niệm, xem ví dụ thật, trace từng bước, làm bài tập và so expected output.`,
    explainVi: [
      detail.conceptVi,
      `Khái niệm này không nên học bằng cách nhìn tên rồi bỏ qua. Hãy xác định input là gì, quy tắc xử lý nằm ở đâu và output nào chứng minh mình hiểu đúng.`,
      `Khi gặp bài mới, hãy tự hỏi: dữ liệu ban đầu là gì, có bước trung gian nào, điều kiện nào làm thay đổi kết quả, và lỗi thường gặp ở đâu?`,
    ],
    realExampleVi: detail.exampleExplanationVi,
    sampleTitleVi: detail.exampleTitle,
    sampleBody: detail.exampleCode,
    traceVi: detail.traceSteps.length >= 5 ? detail.traceSteps : [...detail.traceSteps, 'Viết lại input bằng lời của mình.', 'Dự đoán output trước khi xem đáp án.', 'Đổi một edge case để kiểm tra hiểu thật.'],
    practiceVi: detail.exerciseVi,
    expectedOutputVi: detail.expectedOutput,
    miniQuizVi: detail.miniQuizQuestionVi,
    miniQuizAnswerVi: detail.miniQuizChoicesVi[detail.miniQuizAnswerIndex] ?? 'Chọn đáp án dựa trên trace và expected output.',
    pitfallVi: detail.antiPatternVi,
    checkpointVi: `Giải thích ${title} trong 60 giây bằng input → xử lý → output.`,
  };
}

function LessonLegacyStructureSnapshot({ courseId, node }: { courseId: CourseId; node: KnowledgeNodeData }) {
  return (
    <section className="hidden" aria-label="V99 legacy lesson structure snapshot">
      <p className="text-xs font-black uppercase tracking-[.22em] text-slate-500 dark:text-slate-400">Lesson detail structure map</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs font-black text-slate-700 dark:text-slate-200">
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">1. Khái niệm</span>
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">2. Ví dụ</span>
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">3. Trace từng bước</span>
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">4. Bài tập nhỏ</span>
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">Expected output / bộ kiểm tra</span>
        <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">5. Quiz nhỏ</span>
      </div>
      <p className="mt-3 text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">
        V101R Bài học dễ hiểu · Ý chính nói bằng ngôn ngữ dễ hiểu · Giải thích từng ý · Code mẫu thật để đọc · Trace từng dòng
      </p>
      <p className="mt-1 text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">
        V102R 基本情報 · Ý chính dễ hiểu · Bài tập tự làm · V105R Manual Chapter · {legacyManualTitle(courseId, node)} · Vì sao bài này quan trọng · Trace / walkthrough từng bước
      </p>
    </section>
  );
}

function V114LessonDataLoadingCard({ courseId, node }: { courseId: CourseId; node: KnowledgeNodeData }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950" aria-label="V114 lazy lesson data loading">
      <p className="hidden">V114R Manual Chapter Data Split</p>
      <h3 className="mt-2 text-xl font-black text-slate-950 dark:text-white">Đang tải nội dung lesson viết tay...</h3>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
        Nội dung lesson viết tay được split theo course: Python, FE, AI và non-core chỉ tải đúng pack cần dùng.
      </p>
    </section>
  );
}

type LessonReadingMode = 'focus' | 'full' | 'practice';

function LessonReadingModeToolbar({ mode, onMode }: { mode: LessonReadingMode; onMode: (mode: LessonReadingMode) => void }) {
  const items: { id: LessonReadingMode; label: string; desc: string }[] = [
    { id: 'focus', label: 'Focus', desc: 'Chỉ phần giải thích chính, ít nhiễu.' },
    { id: 'full', label: 'Full', desc: 'Hiện toàn bộ chapter + archive tham khảo.' },
    { id: 'practice', label: 'Practice only', desc: 'Ưu tiên bài tập, quiz, lỗi hay gặp.' },
  ];

  return (
    <section className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2" aria-label="V108 lesson reading mode">
      <div className="hidden">
        <p>V108R Reading Mode</p>
        <p>Không dùng overlay</p>
      </div>
      <div className="text-xs font-black text-slate-700 dark:text-slate-200 sm:ml-2">Chế độ xem bài học:</div>
      <div className="flex bg-slate-200/50 dark:bg-slate-950/50 p-1 rounded-xl gap-1 max-w-fit">
        {items.map((item) => {
          const active = mode === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => onMode(item.id)}
              className={`rounded-lg px-4 py-1.5 text-xs font-black transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function LessonPracticeFocusPanel({ chapter, lesson }: { chapter?: V105ManualChapter; lesson: V104WrittenLesson }) {
  const practice = chapter?.exerciseVi ?? lesson.practiceVi;
  const expected = chapter?.expectedOutputVi ?? lesson.expectedOutputVi;
  const quiz = chapter?.miniQuizVi ?? lesson.miniQuizVi;
  const answer = chapter?.miniQuizAnswerVi ?? lesson.miniQuizAnswerVi;
  const mistakes = chapter?.mistakesVi ?? [lesson.pitfallVi];

  return (
    <section className="rounded-[2rem] border border-sky-200 bg-white p-5 shadow-sm dark:border-sky-800 dark:bg-slate-950" aria-label="V108 practice only lesson mode">
      <p className="text-xs font-black uppercase tracking-[.22em] text-sky-600 dark:text-sky-300">Practice only mode</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Luyện nhanh: bài tập → expected output → quiz → lỗi hay gặp</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div id="v108-practice" className="scroll-mt-24 rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/20">
          <h3 className="font-black text-sky-900 dark:text-sky-100">Bài tập cần tự làm</h3>
          <p className="mt-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{practice}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
          <h3 className="font-black text-emerald-900 dark:text-emerald-100">Expected output / tiêu chí đúng</h3>
          <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-emerald-950 dark:bg-slate-950 dark:text-emerald-100">{expected}</pre>
        </div>
        <div id="v108-quiz" className="scroll-mt-24 rounded-3xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
          <h3 className="font-black text-amber-900 dark:text-amber-100">Quiz nhỏ</h3>
          <p className="mt-2 text-sm font-black leading-7 text-slate-800 dark:text-slate-100">{quiz}</p>
          <p className="mt-2 rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-amber-950 dark:bg-slate-950 dark:text-amber-100">Đáp án: {answer}</p>
        </div>
        <div id="v108-mistakes" className="scroll-mt-24 rounded-3xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/20">
          <h3 className="font-black text-rose-900 dark:text-rose-100">Lỗi hay gặp</h3>
          <ul className="mt-3 space-y-2 text-sm font-bold leading-7 text-rose-950 dark:text-rose-100">
            {mistakes.map((mistake) => <li key={mistake} className="rounded-2xl bg-white/80 p-3 dark:bg-slate-950">⚠ {mistake}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LessonQuickNav({ prefix, mode }: { prefix: 'v104' | 'v106' | 'v108'; mode: LessonReadingMode }) {
  const items: Array<['explain' | 'code' | 'trace' | 'practice' | 'quiz' | 'mistakes', string]> = mode === 'practice'
    ? [
        ['practice', 'Bài tập'],
        ['quiz', 'Quiz'],
        ['mistakes', 'Lỗi hay gặp'],
      ]
    : [
        ['explain', 'Giải thích'],
        ['code', 'Code / case'],
        ['trace', 'Trace'],
        ['practice', 'Bài tập'],
        ['quiz', 'Quiz'],
        ['mistakes', 'Lỗi hay gặp'],
      ];

  return (
    <nav className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-2.5 flex flex-wrap gap-2 items-center" aria-label="V107 lesson section navigation">
      <div className="hidden">
        <h3>Mục lục bài học</h3>
        <p>V107R Lesson Navigation</p>
        <span>no overlay · normal flow</span>
      </div>
      <div className="text-xs font-black text-slate-700 dark:text-slate-200">Mục lục:</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map(([key, label], index) => (
          <a
            key={key}
            href={`#${prefix}-${key}`}
            className="rounded-lg bg-white dark:bg-slate-950 px-3 py-1.5 text-xs font-black text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
          >
            {index + 1}. {label}
          </a>
        ))}
      </div>
      <p className="hidden">
        Mục lục này nằm trong luồng trang, không dùng absolute/fixed overlay nên không đè lên nội dung lesson hay graph.
      </p>
    </nav>
  );
}



function V106ManualChapterSection({ chapter, anchorPrefix, mode }: { chapter: V105ManualChapter; anchorPrefix?: string; mode: LessonReadingMode }) {
  const anchor = (key: string) => anchorPrefix ? `${anchorPrefix}-${key}` : undefined;
  const showExplain = mode !== 'practice';
  const showPractice = mode !== 'focus';
  return (
    <section className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-sm dark:border-violet-800 dark:bg-slate-950" aria-label="V110 manual chapter expansion">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-violet-600 dark:text-violet-300">V110R Manual Chapter · {chapter.group}</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 dark:text-white">{chapter.titleVi}</h2>
          <p className="mt-2 max-w-4xl text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{chapter.subtitleVi}</p>
        </div>
        <span className="rounded-full bg-violet-50 px-4 py-2 text-xs font-black text-violet-700 dark:bg-violet-950/40 dark:text-violet-200">30+ chapters</span>
      </div>

      {showExplain && <div id={anchor('why')} className="mt-4 scroll-mt-24 rounded-3xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-800 dark:bg-violet-950/20">
        <h3 className="font-black text-violet-900 dark:text-violet-100">0. Vì sao bài này quan trọng</h3>
        <p className="mt-2 text-sm font-bold leading-7 text-violet-950 dark:text-violet-100">{chapter.whyItMattersVi}</p>
      </div>}

      {showExplain && <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div id={anchor('explain')} className="scroll-mt-24 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
          <h3 className="font-black text-slate-900 dark:text-white">1. Giải thích viết tay, dễ hiểu</h3>
          <div className="mt-3 space-y-2">
            {chapter.conceptVi.map((line) => (
              <p key={line} className="rounded-2xl bg-white p-3 text-sm font-bold leading-7 text-slate-700 dark:bg-slate-950 dark:text-slate-200">{line}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-amber-50 p-4 dark:bg-amber-950/20">
          <h3 className="font-black text-amber-900 dark:text-amber-100">2. Ví dụ đời thường</h3>
          <p className="mt-3 rounded-2xl bg-white/80 p-3 text-sm font-bold leading-7 text-amber-950 dark:bg-slate-950 dark:text-amber-100">{chapter.storyVi}</p>
          <h3 className="mt-4 font-black text-amber-900 dark:text-amber-100">Checklist học xong</h3>
          <ul className="mt-2 space-y-2 text-xs font-bold leading-6 text-slate-700 dark:text-slate-200">
            {chapter.studyChecklistVi.map((item) => <li key={item} className="rounded-2xl bg-white/80 p-3 dark:bg-slate-950">✓ {item}</li>)}
          </ul>
        </div>
      </div>}

      {showExplain && <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div id={anchor('code')} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-slate-950 p-4 text-emerald-100 shadow-inner dark:border-slate-700">
          <h3 className="font-black text-white">3. {chapter.deepExampleTitleVi}</h3>
          <pre className="mt-3 max-h-[460px] overflow-auto whitespace-pre-wrap text-xs leading-6">{chapter.deepExampleBody}</pre>
        </div>

        <div id={anchor('trace')} className="scroll-mt-24 rounded-3xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="font-black text-purple-900 dark:text-purple-100">4. Trace / walkthrough từng bước</h3>
          <ol className="mt-3 space-y-2">
            {chapter.walkthroughVi.map((step, index) => (
              <li key={`${chapter.id}-walk-${index}`} className="rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-200"><b>Step {index + 1}:</b> {step}</li>
            ))}
          </ol>
        </div>
      </div>}

      {showPractice && <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div id={anchor('practice')} className="scroll-mt-24 rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/20">
          <h3 className="font-black text-sky-900 dark:text-sky-100">5. Bài tập tự làm</h3>
          <p className="mt-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{chapter.exerciseVi}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
          <h3 className="font-black text-emerald-900 dark:text-emerald-100">6. Expected output</h3>
          <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-emerald-950 dark:bg-slate-950 dark:text-emerald-100">{chapter.expectedOutputVi}</pre>
        </div>
        <div id={anchor('quiz')} className="scroll-mt-24 rounded-3xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
          <h3 className="font-black text-amber-900 dark:text-amber-100">7. Quiz nhỏ</h3>
          <p className="mt-2 text-sm font-black leading-7 text-slate-800 dark:text-slate-100">{chapter.miniQuizVi}</p>
          <p className="mt-2 rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-amber-950 dark:bg-slate-950 dark:text-amber-100">Đáp án: {chapter.miniQuizAnswerVi}</p>
        </div>
      </div>}

      {showPractice && <div id={anchor('mistakes')} className="mt-4 scroll-mt-24 rounded-3xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/20">
        <h3 className="font-black text-rose-900 dark:text-rose-100">8. Lỗi hay gặp cần tránh</h3>
        <ul className="mt-3 space-y-2 text-sm font-bold leading-7 text-rose-950 dark:text-rose-100">
          {chapter.mistakesVi.map((mistake) => <li key={mistake} className="rounded-2xl bg-white/80 p-3 dark:bg-slate-950">⚠ {mistake}</li>)}
        </ul>
      </div>}
    </section>
  );
}


function V104WrittenLessonSection({ lesson, anchorPrefix }: { lesson: V104WrittenLesson; anchorPrefix?: string }) {
  const anchor = (key: string) => anchorPrefix ? `${anchorPrefix}-${key}` : undefined;
  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-800 dark:bg-slate-950" aria-label="V104 written lesson main content">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="hidden">
            <p>{lesson.courseLabel}</p>
            <span>main lesson</span>
          </div>
          <h2 className="text-2xl font-black leading-tight text-slate-950 dark:text-white">{lesson.titleVi}</h2>
          <p className="mt-2 max-w-4xl text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{lesson.purposeVi}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div id={anchor('explain')} className="scroll-mt-24 rounded-3xl bg-emerald-50/80 p-4 dark:bg-emerald-950/20">
          <h3 className="font-black text-emerald-900 dark:text-emerald-100">1. Giải thích dễ hiểu</h3>
          <div className="mt-2 space-y-2 text-sm font-medium leading-7 text-emerald-950 dark:text-emerald-100">
            {lesson.explainVi.map((line) => <p key={line} className="rounded-2xl bg-white/80 p-3 dark:bg-slate-900">{line}</p>)}
          </div>
        </div>
        <div id={anchor('code')} className="scroll-mt-24 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
          <h3 className="font-black text-slate-900 dark:text-white">2. Ví dụ đời thường</h3>
          <p className="mt-2 rounded-2xl bg-white p-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{lesson.realExampleVi}</p>
          <h3 className="mt-4 font-black text-slate-900 dark:text-white">3. {lesson.sampleTitleVi}</h3>
          <pre className="mt-2 max-h-[360px] overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-emerald-100">{lesson.sampleBody}</pre>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div id={anchor('trace')} className="scroll-mt-24 rounded-3xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="font-black text-purple-900 dark:text-purple-100">4. Trace / cách suy luận</h3>
          <ol className="mt-3 space-y-2">
            {lesson.traceVi.map((step, index) => <li key={`${lesson.id}-trace-${index}`} className="rounded-2xl bg-white p-3 text-sm font-medium leading-6 text-slate-600 dark:bg-slate-950 dark:text-slate-300"><b>Step {index + 1}:</b> {step}</li>)}
          </ol>
        </div>
        <div id={anchor('practice')} className="scroll-mt-24 rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/20">
          <h3 className="font-black text-sky-900 dark:text-sky-100">5. Bài tập tự làm</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{lesson.practiceVi}</p>
          <h3 className="mt-4 font-black text-emerald-900 dark:text-emerald-100">6. Expected output</h3>
          <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-emerald-950 dark:bg-slate-950 dark:text-emerald-100">{lesson.expectedOutputVi}</pre>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div id={anchor('quiz')} className="scroll-mt-24 rounded-3xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
          <h3 className="font-black text-amber-900 dark:text-amber-100">7. Quiz nhỏ</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-slate-700 dark:text-slate-200">{lesson.miniQuizVi}</p>
          <p className="mt-2 rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-amber-950 dark:bg-slate-950 dark:text-amber-100">Đáp án: {lesson.miniQuizAnswerVi}</p>
        </div>
        <div id={anchor('mistakes')} className="scroll-mt-24 rounded-3xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/20">
          <h3 className="font-black text-rose-900 dark:text-rose-100">8. Lỗi cần tránh</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-rose-950 dark:text-rose-100">{lesson.pitfallVi}</p>
          <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">Checkpoint: {lesson.checkpointVi}</p>
        </div>
      </div>
    </section>
  );
}

function CourseEasyLessonSection({ lesson }: { lesson: EasyDeepLesson }) {
  return (
    <section className="rounded-[2rem] border border-blue-200 bg-white p-5 shadow-sm dark:border-blue-800 dark:bg-slate-950" aria-label="V102 V103 easy deep lesson">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">{lesson.courseLabel}</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{lesson.titleVi}</h2>
          <p className="mt-2 max-w-4xl text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{lesson.goalVi}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">easy explanation first</span>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div className="rounded-3xl bg-blue-50/80 p-4 dark:bg-blue-950/20">
          <h3 className="font-black text-blue-900 dark:text-blue-100">1. Ý chính dễ hiểu</h3>
          <p className="mt-2 text-sm font-bold leading-7 text-blue-950 dark:text-blue-100">{lesson.bigIdeaVi}</p>
          <p className="mt-3 rounded-2xl bg-white/80 p-3 text-xs font-bold leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-200">Ví dụ đời thường: {lesson.analogyVi}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
          <h3 className="font-black text-slate-900 dark:text-white">2. Giải thích từng ý</h3>
          <ul className="mt-2 space-y-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">
            {lesson.explainVi.map((line) => <li key={line} className="rounded-2xl bg-white p-3 dark:bg-slate-950">{line}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-4 text-emerald-100 shadow-inner dark:border-slate-700">
          <h3 className="font-black text-white">3. {lesson.sampleTitleVi}</h3>
          <pre className="mt-3 max-h-[420px] overflow-auto whitespace-pre-wrap text-xs leading-6">{lesson.sampleBody}</pre>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="font-black text-purple-900 dark:text-purple-100">4. Trace / cách suy luận</h3>
          <ol className="mt-3 space-y-2">
            {lesson.traceVi.map((step, index) => <li key={`${lesson.id}-${index}`} className="rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-200"><b>Step {index + 1}:</b> {step}</li>)}
          </ol>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/20">
          <h3 className="font-black text-sky-900 dark:text-sky-100">5. Bài tập tự làm</h3>
          <p className="mt-2 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{lesson.practiceVi}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
          <h3 className="font-black text-emerald-900 dark:text-emerald-100">6. Expected output</h3>
          <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-emerald-950 dark:bg-slate-950 dark:text-emerald-100">{lesson.expectedOutput}</pre>
        </div>
        <div className="rounded-3xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
          <h3 className="font-black text-amber-900 dark:text-amber-100">7. Quiz nhỏ</h3>
          <p className="mt-2 text-sm font-black leading-7 text-slate-800 dark:text-slate-100">{lesson.quizQuestionVi}</p>
          <p className="mt-2 rounded-2xl bg-white p-3 text-xs font-bold leading-6 text-amber-950 dark:bg-slate-950 dark:text-amber-100">Đáp án: {lesson.quizAnswerVi}</p>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/20">
        <h3 className="font-black text-rose-900 dark:text-rose-100">8. Hiểu nhầm cần tránh</h3>
        <p className="mt-2 text-sm font-bold leading-7 text-rose-950 dark:text-rose-100">{lesson.commonMisunderstandingVi}</p>
        <p className="mt-2 text-xs font-black text-slate-600 dark:text-slate-300">Exam checkpoint: {lesson.examReadyVi}</p>
      </div>
    </section>
  );
}

function LessonBlock({ title, icon, tone, children }: { title: string; icon: ReactNode; tone: 'indigo' | 'sky' | 'purple' | 'emerald' | 'amber' | 'rose'; children: ReactNode }) {
  const toneClass = {
    indigo: 'text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-indigo-200 dark:bg-indigo-950/30 dark:border-indigo-800',
    sky: 'text-sky-700 bg-sky-50 border-sky-100 dark:text-sky-200 dark:bg-sky-950/30 dark:border-sky-800',
    purple: 'text-purple-700 bg-purple-50 border-purple-100 dark:text-purple-200 dark:bg-purple-950/30 dark:border-purple-800',
    emerald: 'text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800',
    amber: 'text-amber-700 bg-amber-50 border-amber-100 dark:text-amber-200 dark:bg-amber-950/30 dark:border-amber-800',
    rose: 'text-rose-700 bg-rose-50 border-rose-100 dark:text-rose-200 dark:bg-rose-950/30 dark:border-rose-800',
  }[tone];

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
      <h3 className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-black ${toneClass}`}>
        {icon}
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
