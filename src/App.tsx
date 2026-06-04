import { useEffect, useState } from 'react';
import { AppLoaded } from './components/AppLoaded';
import { defaultCourseId, loadCourseById } from './courses/courseLoader';
import type { CourseConfig, CourseId } from './courses/types';
import { type StudyView } from './features/knowledge-graph/components/StudyNavigation';
import { readSelectedCourse, readStudyUxMode, writeSelectedCourse, writeStudyUxMode } from './features/knowledge-graph/utils/localStorage';
import type { StudyUxMode } from './features/knowledge-graph/components/studyUxMode';
import type { Language } from './features/knowledge-graph/types';

function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [activeView, setActiveView] = useState<StudyView>('start');
  const [studyUxMode, setStudyUxModeState] = useState<StudyUxMode>(() => readStudyUxMode());
  const [courseId, setCourseId] = useState<CourseId>(() => readSelectedCourse(defaultCourseId));
  const [activeCourse, setActiveCourse] = useState<CourseConfig | null>(null);

  const setStudyUxMode = (mode: StudyUxMode) => {
    setStudyUxModeState(mode);
    writeStudyUxMode(mode);
    if (mode === 'beginner' && ['graph', 'dashboard', 'coverage', 'path', 'today', 'session', 'visualMaps', 'plans', 'crashCourse', 'learningFlow', 'all'].includes(activeView)) {
      setActiveView('start');
    }
  };

  useEffect(() => {
    let cancelled = false;
    writeSelectedCourse(courseId);
    setActiveCourse(null);
    loadCourseById(courseId).then((course) => {
      if (!cancelled) setActiveCourse(course);
    });
    return () => {
      cancelled = true;
    };
  }, [courseId]);

  if (!activeCourse) {
    return <main className="min-h-screen p-6"><LoadingPanel label="Đang tải course data theo lazy loading..." /></main>;
  }

  return (
    <AppLoaded
      activeCourse={activeCourse}
      courseId={courseId}
      language={language}
      activeView={activeView}
      studyUxMode={studyUxMode}
      onCourseId={setCourseId}
      onLanguage={setLanguage}
      onActiveView={setActiveView}
      onStudyUxMode={setStudyUxMode}
    />
  );
}

function LoadingPanel({ label }: { label: string }) {
  return <div className="glass-panel rounded-[2rem] p-6 text-sm font-black text-slate-600 dark:text-slate-200">{label}</div>;
}

export default App;
