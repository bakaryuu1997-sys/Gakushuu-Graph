import { lazy, Suspense, useEffect, useState, type ComponentType, type ReactNode } from 'react';
import { PythonTabButtonGrid, PythonTabSection, pythonPracticeTabs, type PythonPracticeTabId } from './PythonPracticeTabShell';

interface NodePanelProps { onSelectNode?: (nodeId: string) => void }
type EmptyProps = Record<string, never>;

const PythonAlgorithmVisualTrainer = lazy(() => import('./PythonAlgorithmVisualTrainer').then((m) => ({ default: m.PythonAlgorithmVisualTrainer })));
const PythonAchievementPanel = lazy(() => import('./PythonAchievementPanel').then((m) => ({ default: m.PythonAchievementPanel })));
const PythonCodeLab = lazy(() => import('./PythonCodeLab').then((m) => ({ default: m.PythonCodeLab })));
const PythonExerciseProgressDashboard = lazy(() => import('./PythonExerciseProgressDashboard').then((m) => ({ default: m.PythonExerciseProgressDashboard })));
const PythonFinalReadinessDashboard = lazy(() => import('./PythonFinalReadinessDashboard').then((m) => ({ default: m.PythonFinalReadinessDashboard })));
const FastApiProjectValidatorPanel = lazy(() => import('./FastApiProjectValidatorPanel').then((m) => ({ default: m.FastApiProjectValidatorPanel })));
const PythonLocalInterviewMode = lazy(() => import('./PythonLocalInterviewMode').then((m) => ({ default: m.PythonLocalInterviewMode })));
const PythonMiniProjectStudio = lazy(() => import('./PythonMiniProjectStudio').then((m) => ({ default: m.PythonMiniProjectStudio })));
const PythonMistakeReviewPanel = lazy(() => import('./PythonMistakeReviewPanel').then((m) => ({ default: m.PythonMistakeReviewPanel })));
const PythonProjectPortfolioDashboard = lazy(() => import('./PythonProjectPortfolioDashboard').then((m) => ({ default: m.PythonProjectPortfolioDashboard })));
const PythonReviewQueuePanel = lazy(() => import('./PythonReviewQueuePanel').then((m) => ({ default: m.PythonReviewQueuePanel })));
const PythonTodayPlan = lazy(() => import('./PythonTodayPlan').then((m) => ({ default: m.PythonTodayPlan })));
const PythonWhyThisMattersPanel = lazy(() => import('./PythonWhyThisMattersPanel').then((m) => ({ default: m.PythonWhyThisMattersPanel })));
const PythonRealWorldExerciseMap = lazy(() => import('./PythonRealWorldExerciseMap').then((m) => ({ default: m.PythonRealWorldExerciseMap })));
const PythonExerciseSetNavigator = lazy(() => import('./PythonExerciseSetNavigator').then((m) => ({ default: m.PythonExerciseSetNavigator })));
const PythonExerciseQualityPanel = lazy(() => import('./PythonExerciseQualityPanel').then((m) => ({ default: m.PythonExerciseQualityPanel })));
const PythonLocalBackupPanel = lazy(() => import('./PythonLocalBackupPanel').then((m) => ({ default: m.PythonLocalBackupPanel })));
const PythonFinalQaPanel = lazy(() => import('./PythonFinalQaPanel').then((m) => ({ default: m.PythonFinalQaPanel })));
const PythonV78RDeepExamplesPanel = lazy(() => import('./PythonV78RDeepExamplesPanel').then((m) => ({ default: m.PythonV78RDeepExamplesPanel })));
const PythonV78RFastApiBlueprintPanel = lazy(() => import('./PythonV78RFastApiBlueprintPanel').then((m) => ({ default: m.PythonV78RFastApiBlueprintPanel })));
const PythonV80RGraderPanel = lazy(() => import('./PythonV80RGraderPanel').then((m) => ({ default: m.PythonV80RGraderPanel })));
const PythonV84RLessonDeepPolishPanel = lazy(() => import('./PythonV84RLessonDeepPolishPanel').then((m) => ({ default: m.PythonV84RLessonDeepPolishPanel })));
const PythonV89RPortfolioPanel = lazy(() => import('./PythonV89RPortfolioPanel').then((m) => ({ default: m.PythonV89RPortfolioPanel })));
const PythonV94RAdvancedPanel = lazy(() => import('./PythonV94RAdvancedPanel').then((m) => ({ default: m.PythonV94RAdvancedPanel })));
const PythonV100RDeepChapterPanel = lazy(() => import('./PythonV100RDeepChapterPanel').then((m) => ({ default: m.PythonV100RDeepChapterPanel })));

function PanelLoadingCard() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 text-sm font-bold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300" aria-label="V114 python panel lazy loading fallback">
      Đang tải panel Python theo tab đang mở... Python readiness local · Algorithm Visual Trainer · Mistake Review. Các panel lớn được tách lazy để app nhẹ hơn.
    </section>
  );
}

function LazyStack({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PanelLoadingCard />}>{children}</Suspense>;
}

function WithNode(Component: ComponentType<NodePanelProps>, onSelectNode?: (nodeId: string) => void) {
  return <Component onSelectNode={onSelectNode} />;
}

function Plain(Component: ComponentType<EmptyProps>) { return <Component />; }

export function PythonPracticeTabs({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [active, setActive] = useState<PythonPracticeTabId>('today');
  useEffect(() => {
    const handler = (event: Event) => {
      const next = (event as CustomEvent<PythonPracticeTabId>).detail;
      if (pythonPracticeTabs.some((tab) => tab.id === next)) setActive(next);
    };
    window.addEventListener('v73r-python-open-tab', handler);
    return () => window.removeEventListener('v73r-python-open-tab', handler);
  }, []);
  return (
    <section className="space-y-4">
      <PythonTabButtonGrid active={active} onChange={setActive} />
      {active === 'today' && <PythonTabSection><LazyStack>{WithNode(PythonV100RDeepChapterPanel, onSelectNode)}{WithNode(PythonTodayPlan, onSelectNode)}{Plain(PythonFinalQaPanel)}{Plain(PythonLocalBackupPanel)}{Plain(PythonExerciseSetNavigator)}{Plain(PythonWhyThisMattersPanel)}{Plain(PythonFinalReadinessDashboard)}{Plain(PythonExerciseProgressDashboard)}</LazyStack></PythonTabSection>}
      {active === 'code' && <PythonTabSection><LazyStack>{WithNode(PythonV100RDeepChapterPanel, onSelectNode)}{WithNode(PythonV94RAdvancedPanel, onSelectNode)}{WithNode(PythonV84RLessonDeepPolishPanel, onSelectNode)}{WithNode(PythonV80RGraderPanel, onSelectNode)}{WithNode(PythonV78RDeepExamplesPanel, onSelectNode)}{Plain(PythonRealWorldExerciseMap)}{Plain(PythonFinalQaPanel)}{Plain(PythonExerciseQualityPanel)}{WithNode(PythonReviewQueuePanel, onSelectNode)}{WithNode(PythonCodeLab, onSelectNode)}</LazyStack></PythonTabSection>}
      {active === 'algorithm' && <PythonTabSection><LazyStack>{WithNode(PythonV100RDeepChapterPanel, onSelectNode)}{WithNode(PythonV80RGraderPanel, onSelectNode)}{WithNode(PythonV78RDeepExamplesPanel, onSelectNode)}{WithNode(PythonAlgorithmVisualTrainer, onSelectNode)}{Plain(PythonMistakeReviewPanel)}</LazyStack></PythonTabSection>}
      {active === 'fastapi' && <PythonTabSection><LazyStack>{WithNode(PythonV100RDeepChapterPanel, onSelectNode)}{WithNode(PythonV94RAdvancedPanel, onSelectNode)}{WithNode(PythonV84RLessonDeepPolishPanel, onSelectNode)}{WithNode(PythonV80RGraderPanel, onSelectNode)}{Plain(PythonV78RFastApiBlueprintPanel)}{Plain(FastApiProjectValidatorPanel)}{WithNode(PythonCodeLab, onSelectNode)}</LazyStack></PythonTabSection>}
      {active === 'project' && <PythonTabSection><LazyStack>{WithNode(PythonV100RDeepChapterPanel, onSelectNode)}{WithNode(PythonV94RAdvancedPanel, onSelectNode)}{WithNode(PythonV89RPortfolioPanel, onSelectNode)}{WithNode(PythonV84RLessonDeepPolishPanel, onSelectNode)}{Plain(PythonProjectPortfolioDashboard)}{WithNode(PythonMiniProjectStudio, onSelectNode)}</LazyStack></PythonTabSection>}
      {active === 'interview' && <PythonTabSection><LazyStack>{WithNode(PythonLocalInterviewMode, onSelectNode)}{WithNode(PythonReviewQueuePanel, onSelectNode)}{Plain(PythonAchievementPanel)}</LazyStack></PythonTabSection>}
    </section>
  );
}
