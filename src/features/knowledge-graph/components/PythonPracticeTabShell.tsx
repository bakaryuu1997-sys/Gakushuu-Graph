import type { ReactNode } from 'react';

export const pythonPracticeTabIds = ['today', 'code', 'algorithm', 'fastapi', 'project', 'interview'] as const;
export type PythonPracticeTabId = typeof pythonPracticeTabIds[number];

export const pythonPracticeTabs: { id: PythonPracticeTabId; label: string; ja: string }[] = [
  { id: 'today', label: 'Today Plan', ja: '今日' },
  { id: 'code', label: 'Code Lab', ja: 'code' },
  { id: 'algorithm', label: 'Algorithm', ja: 'アルゴリズム' },
  { id: 'fastapi', label: 'FastAPI', ja: 'API' },
  { id: 'project', label: 'Project', ja: 'Project' },
  { id: 'interview', label: 'Interview', ja: '面接' },
];

export function PythonTabButtonGrid({ active, onChange }: { active: PythonPracticeTabId; onChange: (id: PythonPracticeTabId) => void }) {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {pythonPracticeTabs.map((tab) => (
          <button key={tab.id} type="button" aria-pressed={active === tab.id} onClick={() => onChange(tab.id)} className={`rounded-2xl px-3 py-3 text-left text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${active === tab.id ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 dark:bg-slate-900 dark:text-slate-200'}`}>
            {tab.label}<span className="block text-xs font-semibold opacity-75">{tab.ja}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function PythonTabSection({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
