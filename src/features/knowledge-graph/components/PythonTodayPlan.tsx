import { pythonCodeExercises } from '../../../courses/python/codeExercises';
import { getNextRecommendedExercise, openPythonExerciseInCodeLab } from './pythonReviewQueueRunner';
import { readPythonExerciseProgress } from './pythonCodeProgress';

export function PythonTodayPlan({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const next = getNextRecommendedExercise(readPythonExerciseProgress()).exercise;
  const lessonIds = ['python-variable', 'python-function', 'python-list', 'python-binary-search', 'python-fastapi'];
  const codeTargets = pythonCodeExercises.filter((item) => ['easy', 'standard'].includes(item.level)).slice(0, 2);
  const plan = [
    { title: '2 lesson mới', ja: '新しいlessonを2つ', body: 'Đọc định nghĩa VI/JA, viết lại bằng lời của bạn, rồi mở lesson liên quan.', action: 'Open lesson', run: () => onSelectNode?.(lessonIds[0]) },
    { title: '2 bài code', ja: 'code問題を2問', body: `Bắt đầu với ${codeTargets.map((item) => item.title).join(' + ')} để giữ nhịp học.`, action: 'Open Code Lab', run: () => openPythonExerciseInCodeLab(codeTargets[0]?.id ?? next.id) },
    { title: '1 bài review queue', ja: '復習queueを1問', body: `Retry bài gợi ý: ${next.title}. Sai thì đọc mistake tag trước khi xem solution.`, action: 'Retry next', run: () => openPythonExerciseInCodeLab(next.id) },
    { title: '1 bước project', ja: 'projectを1step', body: 'Làm một checklist nhỏ: route, schema, bộ kiểm tra hoặc README.', action: 'Open project tab', run: () => window.dispatchEvent(new CustomEvent('v73r-python-open-tab', { detail: 'project' })) },
  ];
  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/30">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700 dark:text-sky-200">V73R Today Python Plan</p>
      <h3 className="text-xl font-black">Hôm nay học gì? / 今日やること</h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">VI: học ít nhưng đều: lesson → code → review → project. JA: lesson → code → review → projectの順で小さく進めます。</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {plan.map((item, index) => (
          <button key={item.title} type="button" onClick={item.run} className="rounded-2xl border border-sky-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900">
            <div className="text-xs font-black text-sky-600">Step {index + 1}</div>
            <div className="mt-1 text-base font-black">{item.title}</div>
            <div className="text-xs font-semibold text-slate-500">{item.ja}</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.body}</p>
            <span className="mt-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700 dark:bg-sky-900 dark:text-sky-100">{item.action}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
