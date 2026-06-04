import { useEffect, useState, type ReactNode } from 'react';
import { BarChart3, BookOpenCheck, PenLine, TriangleAlert } from 'lucide-react';
import type { CourseId } from '../../../courses/types';
import { loadV113CoverageData, type V113CoverageData } from '../../../courses/v113CoverageDataLoader';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';

function inferCourseId(title: string): CourseId {
  if (title.includes('Python')) return 'python';
  if (title.includes('基本情報')) return 'fundamental-info';
  if (title.includes('AI Passport')) return 'ai-passport';
  if (title.includes('SQL')) return 'sql';
  if (title.includes('Frontend')) return 'frontend';
  if (title.includes('Linux')) return 'linux';
  if (title.includes('BrSE')) return 'brse';
  return 'it-passport';
}

export function V109ContentCoverageDashboard({ courseTitle, nodes, lessons }: Props) {
  const courseId = inferCourseId(courseTitle);
  const [coverageData, setCoverageData] = useState<V113CoverageData | null>(null);

  useEffect(() => {
    let active = true;
    setCoverageData(null);
    loadV113CoverageData(courseId).then((data) => {
      if (active) setCoverageData(data);
    });
    return () => { active = false; };
  }, [courseId]);

  const manual = coverageData?.manual ?? 0;
  const priority = coverageData?.priority ?? 0;
  const prioritySummary = coverageData?.prioritySummary ?? [];
  const lessonNodeIds = new Set(lessons.map((lesson) => lesson.nodeId));
  const lessonCoverage = nodes.length ? Math.round((nodes.filter((node) => lessonNodeIds.has(node.id)).length / nodes.length) * 100) : 0;
  const qualityLevel = !coverageData ? 'loading-chapters' : priority >= 2 ? 'priority-expanded' : manual >= 2 ? 'manual-covered' : 'needs-next-batch';

  return (
    <section className="rounded-[2rem] border border-indigo-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950" aria-label="V109 content coverage QA dashboard">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-indigo-600 dark:text-indigo-300"><BarChart3 className="h-4 w-4" /> V109R Content Coverage QA</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Course này đang có nội dung viết tay ở mức nào?</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">Dashboard này không thay bài học, mà giúp biết course nào đã có chapter viết tay sâu, course nào cần ưu tiên viết tiếp. V110R dùng thông tin này để mở rộng các nhóm yếu.</p>
        </div>
        <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-black text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-200">{qualityLevel}</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <Metric icon={<BookOpenCheck className="h-4 w-4" />} label="Lesson coverage" value={`${lessonCoverage}%`} note={`${lessons.length} lessons / ${nodes.length} nodes`} />
        <Metric icon={<PenLine className="h-4 w-4" />} label="Manual chapters" value={`${manual}`} note="V105/V106 deep chapters" />
        <Metric icon={<PenLine className="h-4 w-4" />} label="V110 priority" value={`${priority}`} note="new expansion chapters" />
        <Metric icon={<TriangleAlert className="h-4 w-4" />} label="Next focus" value={priority ? 'lower' : 'high'} note={priority ? 'đã được mở rộng' : 'cần batch viết tay'} />
      </div>
      <div className="mt-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-sm font-black text-slate-900 dark:text-slate-100">V110R priority expansion map</h3>
        {!coverageData && <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">Đang lazy-load coverage chapter data...</p>}
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {prioritySummary.map((item) => (
            <div key={item.courseId} className="rounded-2xl bg-white p-3 text-xs font-bold text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
              <span className="font-black text-indigo-700 dark:text-indigo-300">{item.courseId}</span> — {item.label}: {item.count} chapter mới
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, label, value, note }: { icon: ReactNode; label: string; value: string; note: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-slate-500 dark:text-slate-400">{icon} {label}</p>
      <p className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{value}</p>
      <p className="mt-1 text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">{note}</p>
    </div>
  );
}
