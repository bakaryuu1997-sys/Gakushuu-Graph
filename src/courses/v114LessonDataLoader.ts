import type { KnowledgeNodeData } from '../features/knowledge-graph/types';
import type { CourseId } from './types';
import type { EasyDeepLesson } from './v102v103EasyLessonTypes';
import type { V104WrittenLesson } from './v104WrittenLessonPack';
import type { V105ManualChapter } from './v105ManualChapterPack';
import type { PythonV100DeepChapter } from './python/v100rDeepChapterPack';
import type { PythonV101EasyLesson } from './python/v101EasyLessonPack';
import type { LessonContent } from '../features/knowledge-graph/data/lessonContent';

export interface V114LessonDataBundle {
  v104Lesson: V104WrittenLesson;
  v110Chapter?: V105ManualChapter;
  pythonDeepChapter?: PythonV100DeepChapter;
  pythonEasyLesson?: PythonV101EasyLesson;
  easyCourseLesson?: EasyDeepLesson;
}

function fromPythonEasy(node: KnowledgeNodeData, lesson: PythonV101EasyLesson): V104WrittenLesson {
  return {
    id: `${node.id}-v114-python-written`,
    courseLabel: 'V114R · Python lesson viết tay split',
    titleVi: lesson.titleVi,
    purposeVi: lesson.goalVi,
    explainVi: [lesson.bigIdeaVi, ...lesson.explainVi],
    realExampleVi: lesson.analogyVi,
    sampleTitleVi: 'Code mẫu có thể chạy và trace được',
    sampleBody: lesson.code,
    traceVi: lesson.traceVi,
    practiceVi: lesson.practiceVi,
    expectedOutputVi: lesson.expectedOutput,
    miniQuizVi: lesson.quizQuestionVi,
    miniQuizAnswerVi: lesson.quizAnswerVi,
    pitfallVi: lesson.commonMisunderstandingVi,
    checkpointVi: lesson.interviewReadyVi,
  };
}

function fromEasyCourse(node: KnowledgeNodeData, lesson: EasyDeepLesson, label: string): V104WrittenLesson {
  return {
    id: `${node.id}-v114-easy-course-written`,
    courseLabel: label,
    titleVi: lesson.titleVi,
    purposeVi: lesson.goalVi,
    explainVi: [lesson.bigIdeaVi, ...lesson.explainVi],
    realExampleVi: lesson.analogyVi,
    sampleTitleVi: lesson.sampleTitleVi,
    sampleBody: lesson.sampleBody,
    traceVi: lesson.traceVi,
    practiceVi: lesson.practiceVi,
    expectedOutputVi: lesson.expectedOutput,
    miniQuizVi: lesson.quizQuestionVi,
    miniQuizAnswerVi: lesson.quizAnswerVi,
    pitfallVi: lesson.commonMisunderstandingVi,
    checkpointVi: lesson.examReadyVi,
  };
}

function pythonEasyFromNode(node: KnowledgeNodeData): PythonV101EasyLesson {
  const name = node.labelVi || node.labelEn || node.labelJa || node.id;
  return {
    id: `${node.id}-v114-python-easy-local`,
    titleVi: `${name}: hiểu bằng input → xử lý → output`,
    goalVi: `Biết dùng ${name} trong một ví dụ nhỏ, trace được từng bước và tự kiểm tra output.`,
    bigIdeaVi: `${name} không nên học như một từ khóa riêng lẻ. Hãy học nó như một công cụ nhận input, áp dụng rule và tạo output kiểm tra được.`,
    explainVi: [
      `Trước khi viết code, hãy nói rõ dữ liệu đi vào là gì và kiểu dữ liệu của nó là gì.`,
      `Sau đó xác định thao tác chính: tính toán, lọc, gom nhóm, gọi hàm, đổi state hay trả response.`,
      `Cuối cùng viết expected output trước khi chạy code để tránh học bằng cảm giác.`,
      `Nếu đổi input mà bạn vẫn dự đoán đúng output, nghĩa là bạn đã hiểu ${name} ở mức dùng được.`
    ],
    analogyVi: `Giống làm bài toán nhỏ: đọc đề, gạch input, chọn công thức, tính từng bước, rồi so với đáp án cuối.`,
    code: `value = "${name}"\nprint(value)\nprint(len(value))`,
    traceVi: [
      'Gán text vào biến value.',
      'print(value) hiển thị nội dung hiện tại.',
      'len(value) đếm số ký tự trong text.',
      'Output cho biết code đã xử lý đúng input ban đầu.'
    ],
    practiceVi: `Tự viết một ví dụ khác cho ${name}: tạo input, xử lý một bước, in output và giải thích vì sao đúng.`,
    expectedOutput: `${name}\n${name.length}`,
    quizQuestionVi: `Muốn biết mình đã hiểu ${name}, cần kiểm tra điều gì?`,
    quizAnswerVi: 'Cần kiểm tra input, rule xử lý và expected output bằng một ví dụ tự viết.',
    commonMisunderstandingVi: 'Chỉ nhớ cú pháp nhưng không biết input/output nên khi đề đổi dữ kiện thì không làm được.',
    interviewReadyVi: `Giải thích được ${name} bằng ví dụ 60 giây: input là gì, code xử lý thế nào, output là gì.`,
  };
}

function buildAiPassportEasyCourseLesson(node: KnowledgeNodeData, lesson: LessonContent): EasyDeepLesson {
  const name = node.labelVi || node.labelEn || node.labelJa || node.id;
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'AI Passport · Bài học dễ hiểu',
    titleVi: `${name}: hiểu bản chất bằng ví dụ`,
    goalVi: lesson.whyImportantVi || `Hiểu vai trò của ${name} trong bối cảnh thực tế.`,
    bigIdeaVi: lesson.shortDefinitionVi || `${name} là khái niệm cần nắm trong AI Passport.`,
    explainVi: [
      lesson.whyImportantVi || '',
      `Mẹo ghi nhớ: ${lesson.memoryTipVi || ''}`
    ].filter(Boolean),
    analogyVi: lesson.memoryTipVi || '',
    sampleTitleVi: 'Dạng câu hỏi thi và bẫy cần tránh',
    sampleBody: `Dạng thi hay gặp:\n${(lesson.examPatternsVi || []).map(p => `- ${p}`).join('\n')}\n\nLỗi dễ nhầm:\n${(lesson.commonMistakesVi || []).map(m => `- ${m}`).join('\n')}`,
    traceVi: lesson.examPatternsVi || [],
    practiceVi: 'Hãy giải thích khái niệm này cho đồng nghiệp bằng ngôn ngữ dễ hiểu nhất.',
    expectedOutput: `Giải thích đúng định nghĩa: ${lesson.shortDefinitionVi}`,
    quizQuestionVi: 'Bẫy phổ biến nhất của khái niệm này là gì?',
    quizAnswerVi: (lesson.commonMistakesVi || []).join(' '),
    commonMisunderstandingVi: (lesson.commonMistakesVi || []).join(' '),
    examReadyVi: (lesson.examPatternsVi || []).join(' ')
  };
}

export async function loadV114LessonData(courseId: CourseId, node: KnowledgeNodeData, lesson?: LessonContent): Promise<V114LessonDataBundle> {
  const v110Promise = import('./v110ManualChapterPack');

  if (courseId === 'python') {
    const [v110Module, v100Module] = await Promise.all([
      v110Promise,
      import('./python/v100rDeepChapterPack'),
    ]);
    const pythonEasyLesson = pythonEasyFromNode(node);
    return {
      v104Lesson: fromPythonEasy(node, pythonEasyLesson),
      v110Chapter: v110Module.findV110ManualChapter(courseId, node),
      pythonDeepChapter: v100Module.findPythonV100DeepChapterForNode(node),
      pythonEasyLesson,
    };
  }

  if (courseId === 'fundamental-info') {
    const [v110Module, v102Module] = await Promise.all([
      v110Promise,
      import('./fundamental-info/v102EasyLessonPack'),
    ]);
    const easyCourseLesson = v102Module.buildFundamentalInfoV102EasyLesson(node);
    return {
      v104Lesson: fromEasyCourse(node, easyCourseLesson, 'V114R · 基本情報 lesson viết tay split'),
      v110Chapter: v110Module.findV110ManualChapter(courseId, node),
      easyCourseLesson,
    };
  }

  if (courseId === 'ai-passport') {
    const [v110Module, v103Module] = await Promise.all([
      v110Promise,
      import('./ai-passport/v103EasyLessonPack'),
    ]);
    const easyCourseLesson = lesson
      ? buildAiPassportEasyCourseLesson(node, lesson)
      : v103Module.buildAiPassportV103EasyLesson(node);
    return {
      v104Lesson: fromEasyCourse(node, easyCourseLesson, 'V114R · AI Passport lesson viết tay split'),
      v110Chapter: v110Module.findV110ManualChapter(courseId, node),
      easyCourseLesson,
    };
  }

  const [v110Module, v114Module] = await Promise.all([
    v110Promise,
    import('./v114NonCoreWrittenLessonPack'),
  ]);
  return {
    v104Lesson: v114Module.buildV114NonCoreWrittenLesson(courseId, node),
    v110Chapter: v110Module.findV110ManualChapter(courseId, node),
  };
}
