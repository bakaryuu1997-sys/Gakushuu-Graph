import { useEffect, useMemo, useState } from 'react';
import type { LessonContent } from '../data/lessonContent';
import type { QuizQuestion } from '../data/quizQuestions';
import type { KnowledgeNodeData } from '../types';
import type { StudyView } from './StudyNavigation';
import { pythonV80RGradedExercises } from '../../../courses/python/v80rCodeLabGrader';
import { pythonV89RPortfolioProjects } from '../../../courses/python/v89rPortfolioProjects';
import { pythonV94RAdvancedTopics } from '../../../courses/python/v94rAdvancedPython';
import { fundamentalInfoExamScenarios } from '../../../courses/fundamental-info/examScenarios';

type SearchType = 'lesson' | 'exercise' | 'scenario' | 'project' | 'trace' | 'advanced';
type SearchScope = 'current' | 'all' | 'python' | 'fundamental';

interface SearchItem {
  id: string;
  type: SearchType;
  scope: Exclude<SearchScope, 'current' | 'all'> | 'current';
  title: string;
  subtitle: string;
  keywords: string;
  nodeId?: string;
  action?: 'python-code' | 'python-project' | 'python-fastapi' | 'fundamental-practice';
}

const recentKey = 'v97r-global-search-recent';

const typeLabel: Record<SearchType, string> = {
  lesson: 'Lesson',
  exercise: 'Exercise',
  scenario: 'Scenario',
  project: 'Python Project',
  trace: '科目B Trace',
  advanced: 'Python Advanced',
};

const typeClass: Record<SearchType, string> = {
  lesson: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
  exercise: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200',
  scenario: 'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-200',
  project: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-200',
  trace: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-200',
  advanced: 'bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-200',
};

function includesQuery(item: SearchItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [item.title, item.subtitle, item.keywords, item.nodeId ?? '', item.type, item.scope].join(' ').toLowerCase().includes(q);
}

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const index = text.toLowerCase().indexOf(q.toLowerCase());
  if (index < 0) return text;
  return <>
    {text.slice(0, index)}
    <mark className="rounded bg-yellow-200 px-0.5 text-slate-950 dark:bg-yellow-300">{text.slice(index, index + q.length)}</mark>
    {text.slice(index + q.length)}
  </>;
}

function loadRecent(): string[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(recentKey) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string').slice(0, 5) : [];
  } catch {
    return [];
  }
}

function storeRecent(query: string) {
  const q = query.trim();
  if (!q) return;
  const next = [q, ...loadRecent().filter((item) => item.toLowerCase() !== q.toLowerCase())].slice(0, 5);
  window.localStorage.setItem(recentKey, JSON.stringify(next));
}

function scopeMatches(item: SearchItem, scope: SearchScope) {
  if (scope === 'all') return true;
  if (scope === 'current') return item.scope === 'current';
  return item.scope === scope;
}

export function GlobalQuickSearchPanel({ nodes, lessons, quizzes, courseTitle, onSelectNode, onView }: { nodes: KnowledgeNodeData[]; lessons: LessonContent[]; quizzes: QuizQuestion[]; courseTitle: string; onSelectNode: (nodeId: string) => void; onView?: (view: StudyView) => void }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'all' | SearchType>('all');
  const [scope, setScope] = useState<SearchScope>('current');
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => setRecent(loadRecent()), []);

  const currentScopeLabel = courseTitle.includes('Python') ? 'python' : courseTitle.includes('基本情報') ? 'fundamental' : 'current';

  const index = useMemo<SearchItem[]>(() => {
    const seen = new Set<string>();
    const pushUnique = (items: SearchItem[]) => items.filter((item) => {
      const key = `${item.type}:${item.id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    const lessonItems = nodes.map((node) => {
      const lesson = lessons.find((entry) => entry.nodeId === node.id);
      const quizCount = quizzes.filter((quiz) => quiz.nodeId === node.id).length;
      return {
        id: `lesson-${node.id}`,
        type: 'lesson' as const,
        scope: 'current' as const,
        title: node.labelVi || node.labelEn,
        subtitle: `${node.labelJa} · ${node.category} · ${node.importance}${quizCount ? ` · ${quizCount} quiz` : ''}`,
        keywords: [node.labelEn, node.summaryVi, node.summaryJa, node.examPointVi, node.examPointJa, node.keywords.join(' '), lesson?.shortDefinitionVi, lesson?.whyImportantVi].join(' '),
        nodeId: node.id,
      };
    });

    const exerciseItems = pythonV80RGradedExercises.map((exercise) => ({
      id: exercise.id,
      type: 'exercise' as const,
      scope: 'python' as const,
      title: exercise.title,
      subtitle: `${exercise.kind} · ${exercise.level} · ${exercise.promptVi}`,
      keywords: [exercise.titleJa, exercise.promptJa, exercise.visibleTests.join(' '), exercise.hiddenTests.join(' '), exercise.explanationVi, exercise.mistakeTags.join(' ')].join(' '),
      nodeId: exercise.relatedNodeId,
      action: 'python-code' as const,
    }));

    const projectItems = pythonV89RPortfolioProjects.map((project) => ({
      id: project.id,
      type: 'project' as const,
      scope: 'python' as const,
      title: project.titleVi,
      subtitle: `${project.track} · ${project.goalVi}`,
      keywords: [project.titleJa, project.goalJa, project.deliverables.join(' '), project.acceptanceTests.join(' '), project.readmeChecklist.join(' ')].join(' '),
      nodeId: project.relatedNodeIds[0],
      action: 'python-project' as const,
    }));

    const advancedItems = pythonV94RAdvancedTopics.map((topic) => ({
      id: topic.id,
      type: 'advanced' as const,
      scope: 'python' as const,
      title: topic.titleVi,
      subtitle: `${topic.track} · ${topic.goalVi}`,
      keywords: [topic.titleJa, topic.goalJa, topic.code, topic.pitfalls.join(' '), topic.practicePromptVi, topic.practicePromptJa].join(' '),
      nodeId: topic.nodeId,
      action: topic.track === 'fastapi-di' ? 'python-fastapi' as const : 'python-code' as const,
    }));

    const scenarioItems = fundamentalInfoExamScenarios.map((scenario) => ({
      id: scenario.id,
      type: scenario.kind === 'long-trace' ? 'trace' as const : 'scenario' as const,
      scope: 'fundamental' as const,
      title: scenario.titleVi,
      subtitle: `${scenario.domain} · ${scenario.difficulty} · ${scenario.questionVi}`,
      keywords: [scenario.titleJa, scenario.passageVi, scenario.passageJa, scenario.questionJa, scenario.code, scenario.table, scenario.trapVi, scenario.examTipVi].join(' '),
      nodeId: scenario.relatedNodeIds[0],
      action: 'fundamental-practice' as const,
    }));

    return pushUnique([...lessonItems, ...exerciseItems, ...projectItems, ...advancedItems, ...scenarioItems]);
  }, [lessons, nodes, quizzes]);

  const filtered = useMemo(() => index.filter((item) => scopeMatches(item, scope) && (type === 'all' || item.type === type) && includesQuery(item, query)), [index, query, scope, type]);
  const results = filtered.slice(0, 8);
  const counts = useMemo(() => index.reduce<Record<SearchType, number>>((acc, item) => ({ ...acc, [item.type]: (acc[item.type] ?? 0) + 1 }), { lesson: 0, exercise: 0, scenario: 0, project: 0, trace: 0, advanced: 0 }), [index]);

  const openItem = (item: SearchItem) => {
    storeRecent(query || item.title);
    setRecent(loadRecent());
    if (item.nodeId) onSelectNode(item.nodeId);
    if (item.action === 'python-code') {
      onView?.('practice');
      window.dispatchEvent(new CustomEvent('v73r-python-open-tab', { detail: 'code' }));
    }
    if (item.action === 'python-fastapi') {
      onView?.('practice');
      window.dispatchEvent(new CustomEvent('v73r-python-open-tab', { detail: 'fastapi' }));
    }
    if (item.action === 'python-project') {
      onView?.('practice');
      window.dispatchEvent(new CustomEvent('v73r-python-open-tab', { detail: 'project' }));
    }
    if (item.action === 'fundamental-practice') onView?.('practice');
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/90">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">V92R Global Quick Search · V97R Global Search UX</p>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Search gọn: lesson, exercise, scenario, project, 科目B trace</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Đang học: {courseTitle}. Scope mặc định: {currentScopeLabel}. Không timer, chỉ quick jump local.</p>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => { storeRecent(query); setRecent(loadRecent()); }}
          placeholder="stack, FastAPI, pytest, SQL, graph..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 lg:w-96"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {(['current', 'all', 'python', 'fundamental'] as SearchScope[]).map((item) => (
          <button key={item} onClick={() => setScope(item)} className={`rounded-full px-3 py-1 text-xs font-semibold ${scope === item ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>
            {item === 'fundamental' ? '基本情報' : item}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={() => setType('all')} className={`rounded-full px-3 py-1 text-xs font-semibold ${type === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>All · {filtered.length}</button>
        {(['lesson', 'exercise', 'advanced', 'project', 'trace', 'scenario'] as SearchType[]).map((item) => <button key={item} onClick={() => setType(item)} className={`rounded-full px-3 py-1 text-xs font-semibold ${type === item ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{typeLabel[item]} · {counts[item]}</button>)}
      </div>
      {recent.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-slate-500 dark:text-slate-400">Recent:</span>
          {recent.map((item) => <button key={item} onClick={() => setQuery(item)} className="rounded-full bg-slate-50 px-2 py-1 font-bold text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">{item}</button>)}
        </div>
      )}
      <div className="mt-3 grid gap-2">
        {results.map((item) => (
          <button key={item.id} onClick={() => openItem(item)} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-left transition hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2 py-1 text-[11px] font-bold uppercase ${typeClass[item.type]}`}>{typeLabel[item.type]}</span>
              <span className="rounded-full bg-white px-2 py-1 text-[11px] font-bold text-slate-500 dark:bg-slate-950 dark:text-slate-400">{item.scope}</span>
              {item.nodeId && <span className="text-[11px] font-semibold text-slate-400">node: {highlight(item.nodeId, query)}</span>}
            </div>
            <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{highlight(item.title, query)}</p>
            <p className="mt-1 line-clamp-2 text-xs text-slate-600 dark:text-slate-300">{highlight(item.subtitle, query)}</p>
          </button>
        ))}
        {results.length === 0 && <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-300">Không có kết quả. Thử đổi scope hoặc từ khóa như “BFS”, “pytest”, “FastAPI”, “SQL”, “dataclass”.</div>}
      </div>
    </section>
  );
}
