import type { KnowledgeNodeData } from '../features/knowledge-graph/types';
import type { CourseId } from './types';
import type { EasyDeepLesson } from './v102v103EasyLessonTypes';
import type { V104WrittenLesson } from './v104WrittenLessonPack';
import type { V105ManualChapter } from './v105ManualChapterPack';
import type { PythonV100DeepChapter } from './python/v100rDeepChapterPack';
import type { PythonV101EasyLesson } from './python/v101EasyLessonPack';

export interface V113LessonDataBundle {
  v104Lesson: V104WrittenLesson;
  v110Chapter?: V105ManualChapter;
  pythonDeepChapter?: PythonV100DeepChapter;
  pythonEasyLesson?: PythonV101EasyLesson;
  easyCourseLesson?: EasyDeepLesson;
}

export async function loadV113LessonData(courseId: CourseId, node: KnowledgeNodeData): Promise<V113LessonDataBundle> {
  const [v104Module, v110Module] = await Promise.all([
    import('./v104WrittenLessonPack'),
    import('./v110ManualChapterPack'),
  ]);

  const bundle: V113LessonDataBundle = {
    v104Lesson: v104Module.buildV104WrittenLesson(courseId, node),
    v110Chapter: v110Module.findV110ManualChapter(courseId, node),
  };

  if (courseId === 'python') {
    const [v100Module, v101Module] = await Promise.all([
      import('./python/v100rDeepChapterPack'),
      import('./python/v101EasyLessonPack'),
    ]);
    bundle.pythonDeepChapter = v100Module.findPythonV100DeepChapterForNode(node);
    bundle.pythonEasyLesson = v101Module.buildPythonV101EasyLesson(node);
  }

  if (courseId === 'fundamental-info') {
    const v102Module = await import('./fundamental-info/v102EasyLessonPack');
    bundle.easyCourseLesson = v102Module.buildFundamentalInfoV102EasyLesson(node);
  }

  if (courseId === 'ai-passport') {
    const v103Module = await import('./ai-passport/v103EasyLessonPack');
    bundle.easyCourseLesson = v103Module.buildAiPassportV103EasyLesson(node);
  }

  return bundle;
}
