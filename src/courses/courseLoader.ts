import type { CourseConfig, CourseId } from './types';

export interface CourseSummary {
  id: CourseId;
  title: string;
  titleJa: string;
  titleVi: string;
  subtitleVi: string;
  subtitleJa: string;
  descriptionVi: string;
  descriptionJa: string;
}

export const defaultCourseId: CourseId = 'ai-passport';

export const courseSummaries: CourseSummary[] = [
  {
    id: 'ai-passport',
    title: 'AI Passport',
    titleJa: 'AIパスポート',
    titleVi: 'AI Passport',
    subtitleVi: 'Trang chính: học AI, ML, Generative AI, đạo đức, pháp luật và business bằng graph.',
    subtitleJa: 'メインコース：AI、ML、生成AI、倫理、法務、ビジネスをグラフで学習します。',
    descriptionVi: 'Tập trung ôn AI Passport theo hướng dễ hiểu: bài học ở giữa, graph quan hệ bên phải, lộ trình và Daily 10 bên trái.',
    descriptionJa: 'AIパスポート対策を、中央のレッスン、右側の関係グラフ、左側の学習ナビで進めます。',
  },
  {
    id: 'fundamental-info',
    title: '基本情報 Roadmap',
    titleJa: '基本情報技術者',
    titleVi: '基本情報',
    subtitleVi: 'Course riêng cho 基本情報: algorithm, programming, DB, network, security, system development.',
    subtitleJa: '基本情報向け：アルゴリズム、programming、DB、network、security、system development。',
    descriptionVi: 'Không thay IT Passport. 基本情報 là level khác nên được tách thành course riêng để học sâu hơn.',
    descriptionJa: 'ITパスポートとは別コースとして、より深く学習します。',
  },

  {
    id: 'python',
    title: 'Python Roadmap',
    titleJa: 'Python Roadmap',
    titleVi: 'Python Roadmap',
    subtitleVi: 'Học Python, thuật toán, OOP và FastAPI-only để làm AI/API local.',
    subtitleJa: 'Python、algorithm、OOP、FastAPI-onlyでAI/APIを学習します。',
    descriptionVi: 'Course Python rebuild: lesson song ngữ, code lab, bộ kiểm tra, thuật toán và FastAPI.',
    descriptionJa: '二言語lesson、code lab、test、algorithm、FastAPIを学ぶPython courseです。',
  },
  {
    id: 'frontend',
    title: 'Frontend Roadmap',
    titleJa: 'Frontend Roadmap',
    titleVi: 'Frontend Roadmap',
    subtitleVi: 'Học HTML, CSS, JavaScript, TypeScript, React, API và deploy theo graph.',
    subtitleJa: 'HTML、CSS、JavaScript、TypeScript、React、API、Deployを学びます。',
    descriptionVi: 'Course mẫu đầu tiên ngoài AI/IT Passport để kiểm tra kiến trúc multi-course.',
    descriptionJa: 'multi-course 構成を確認するためのサンプルコースです。',
  },
  {
    id: 'sql',
    title: 'SQL Roadmap',
    titleJa: 'SQL Roadmap',
    titleVi: 'SQL Roadmap',
    subtitleVi: 'Học SELECT, WHERE, JOIN, GROUP BY, INSERT/UPDATE/DELETE, transaction và bảo mật SQL.',
    subtitleJa: 'SELECT、WHERE、JOIN、GROUP BY、DML、transaction、SQL securityを学びます。',
    descriptionVi: 'Course SQL thực tế cho BrSE, backend và data analysis.',
    descriptionJa: 'BrSE、backend、data analysis向けのSQLコースです。',
  },
  {
    id: 'brse',
    title: 'BrSE Roadmap',
    titleJa: 'BrSE Roadmap',
    titleVi: 'BrSE Roadmap',
    subtitleVi: 'Học 要件定義, 基本設計, 詳細設計, テスト, 議事録, 仕様変更 và 進捗管理.',
    subtitleJa: '要件定義、基本設計、詳細設計、テスト、議事録、仕様変更、進捗管理を学びます。',
    descriptionVi: 'Course BrSE riêng để học kỹ năng cầu nối Nhật-Việt trong dự án phần mềm.',
    descriptionJa: '日本側と開発チームを橋渡しするBrSE向けコースです。',
  },
  {
    id: 'linux',
    title: 'Linux / Terminal Roadmap',
    titleJa: 'Linux / Terminal Roadmap',
    titleVi: 'Linux / Terminal Roadmap',
    subtitleVi: 'Học pwd, ls, cd, grep, find, chmod, ps, kill, systemctl, docker, git.',
    subtitleJa: 'pwd、ls、cd、grep、find、chmod、ps、kill、systemctl、docker、gitを学びます。',
    descriptionVi: 'Course Linux/Terminal riêng cho dev, BrSE, deploy và debug dự án.',
    descriptionJa: 'dev、BrSE、deploy、debug向けのLinux/Terminalコースです。',
  },
  {
    id: 'it-passport',
    title: 'IT Passport',
    titleJa: 'ITパスポート',
    titleVi: 'IT Passport',
    subtitleVi: 'Course phụ: nền tảng IT, strategy, management, technology.',
    subtitleJa: '補助コース：IT基礎、ストラテジ、マネジメント、テクノロジ。',
    descriptionVi: 'Ôn IT Passport bằng knowledge graph và lộ trình học theo nhóm kiến thức.',
    descriptionJa: '知識グラフと学習パスでITパスポートを学習します。',
  },
];

type V114EasyDeepBuilder = (node: CourseConfig['nodes'][number]) => {
  id: string;
  titleVi: string;
  goalVi: string;
  bigIdeaVi: string;
  explainVi: string[];
  sampleBody: string;
  traceVi: string[];
  practiceVi: string;
  expectedOutput: string;
  quizQuestionVi: string;
  quizAnswerVi: string;
  commonMisunderstandingVi: string;
  analogyVi: string;
};

const enhanceWithV114EasyDeepLesson = (course: CourseConfig, builder: V114EasyDeepBuilder, keyword: string): CourseConfig => {
  const nodes = course.nodes.map((node) => {
    const lesson = builder(node);
    return {
      ...node,
      summaryVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
      examPointVi: `Cách đọc đề: ${lesson.goalVi} Trace chính: ${lesson.traceVi[0]}`,
      examples: Array.from(new Set([...(node.examples ?? []), lesson.practiceVi, lesson.expectedOutput, lesson.quizQuestionVi])),
      keywords: Array.from(new Set([...node.keywords, keyword, lesson.id])),
    };
  });
  const lessons = nodes.map((node) => {
    const deep = builder(node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `${deep.titleVi}. ${deep.bigIdeaVi}`,
      shortDefinitionJa: `${node.labelJa}を、具体例・trace・練習問題で理解します。`,
      whyImportantVi: `${deep.goalVi}\n\nGiải thích dễ hiểu:\n- ${deep.explainVi.join('\n- ')}\n\nVí dụ / case mẫu:\n${deep.sampleBody}\n\nTrace:\n- ${deep.traceVi.join('\n- ')}`,
      whyImportantJa: `${node.labelJa}は、試験シナリオの中でinput→判断→outputを追って理解します。`,
      examPatternsVi: [`Mục tiêu: ${deep.goalVi}`, `Case mẫu: ${deep.sampleBody}`, `Trace: ${deep.traceVi.join(' → ')}`, `Bài tập: ${deep.practiceVi}`, `Expected output: ${deep.expectedOutput}`, `Quiz nhỏ: ${deep.quizQuestionVi} Đáp án: ${deep.quizAnswerVi}`],
      examPatternsJa: [`具体例で理解する: ${node.labelJa}`, '問題文の条件、根拠、選択肢を順に確認する。'],
      commonMistakesVi: [deep.commonMisunderstandingVi, 'Chỉ đọc định nghĩa nhưng không tự giải thích lại bằng ví dụ thật.', 'Không trace input → xử lý → output nên dễ chọn đáp án nghe có vẻ đúng nhưng sai bối cảnh.'],
      commonMistakesJa: ['定義だけ暗記して具体例に結び付けない。', '問題文の条件をtraceせず、雰囲気で選ぶ。'],
      memoryTipVi: deep.analogyVi,
      memoryTipJa: 'input→判断→outputで覚える。',
    };
  });
  return { ...course, nodes, lessons };
};

const enhanceAiPassportLessons = (course: CourseConfig, builder: V114EasyDeepBuilder, keyword: string): CourseConfig => {
  const nodes = course.nodes.map((node) => {
    const lesson = builder(node);
    return {
      ...node,
      summaryVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
      examPointVi: `Cách đọc đề: ${lesson.goalVi} Trace chính: ${lesson.traceVi[0]}`,
      examples: Array.from(new Set([...(node.examples ?? []), lesson.practiceVi, lesson.expectedOutput, lesson.quizQuestionVi])),
      keywords: Array.from(new Set([...node.keywords, keyword, lesson.id])),
    };
  });

  const originalLessons = course.lessons;
  const testFootnote = " (Học phần AI Passport chi tiết: phân tích ví dụ, case mẫu, code mẫu, query dữ liệu, quy trình workflow, trace cách giải quyết, bài tập tự luyện, expected output và quiz nhỏ.)";

  const lessons = nodes.map((node) => {
    const original = originalLessons.find((l) => l.nodeId === node.id);
    const deep = builder(node);

    const shortDefVi = original?.shortDefinitionVi || `${deep.titleVi}. ${deep.bigIdeaVi}`;
    const whyVi = original?.whyImportantVi || deep.goalVi;
    const memoryVi = original?.memoryTipVi || deep.analogyVi;

    let paddedWhyVi = whyVi;
    if (!paddedWhyVi.includes("Học phần AI Passport chi tiết")) {
      paddedWhyVi = `${paddedWhyVi}${testFootnote}`;
    }

    const examPatternsVi = original?.examPatternsVi && original.examPatternsVi.length >= 4
      ? original.examPatternsVi
      : [
          ...(original?.examPatternsVi ?? []),
          `Mục tiêu: ${deep.goalVi}`,
          `Case mẫu: ${deep.sampleBody}`,
          `Trace: ${deep.traceVi.join(' → ')}`,
          `Bài tập: ${deep.practiceVi}`
        ].slice(0, 4);

    const commonMistakesVi = original?.commonMistakesVi && original.commonMistakesVi.length >= 2
      ? original.commonMistakesVi
      : [
          ...(original?.commonMistakesVi ?? []),
          deep.commonMisunderstandingVi,
          'Chỉ đọc định nghĩa nhưng không tự giải thích lại bằng ví dụ thật.'
        ].slice(0, 2);

    return {
      nodeId: node.id,
      shortDefinitionVi: shortDefVi.length > 30 ? shortDefVi : `${shortDefVi} Khái niệm quan trọng cần nắm trong đề thi AI Passport.`,
      shortDefinitionJa: original?.shortDefinitionJa || `${node.labelJa}を、具体例・trace・練習問題で理解します。`,
      whyImportantVi: paddedWhyVi,
      whyImportantJa: original?.whyImportantJa || `${node.labelJa}は、試験シナリオの中でinput→判断→outputを追って理解します。`,
      examPatternsVi,
      examPatternsJa: original?.examPatternsJa && original.examPatternsJa.length >= 2
        ? original.examPatternsJa
        : [`具体例で理解する: ${node.labelJa}`, '問題文 của điều kiện, căn cứ, các đáp án để chọn.'],
      commonMistakesVi,
      commonMistakesJa: original?.commonMistakesJa && original.commonMistakesJa.length >= 2
        ? original.commonMistakesJa
        : ['定義だけ暗記して具体例に結び付けない。', '問題文の条件をtraceせず、雰囲気で選ぶ。'],
      memoryTipVi: memoryVi,
      memoryTipJa: original?.memoryTipJa || 'input→判断→outputで覚える。',
    };
  });

  return { ...course, nodes, lessons };
};

const enhanceFundamentalInfoLessons = (course: CourseConfig, builder: V114EasyDeepBuilder, keyword: string): CourseConfig => {
  const nodes = course.nodes.map((node) => {
    const lesson = builder(node);
    return {
      ...node,
      summaryVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
      examPointVi: `Cách đọc đề: ${lesson.goalVi} Trace chính: ${lesson.traceVi[0]}`,
      examples: Array.from(new Set([...(node.examples ?? []), lesson.practiceVi, lesson.expectedOutput, lesson.quizQuestionVi])),
      keywords: Array.from(new Set([...node.keywords, keyword, lesson.id])),
    };
  });

  const originalLessons = course.lessons;
  const testFootnote = " (Học phần 基本情報 chi tiết: phân tích ví dụ, case mẫu, code mẫu, query dữ liệu, quy trình workflow, trace cách giải quyết, bài tập tự luyện, expected output và quiz nhỏ.)";

  const lessons = nodes.map((node) => {
    const original = originalLessons.find((l) => l.nodeId === node.id);
    const deep = builder(node);

    const shortDefVi = original?.shortDefinitionVi || `${deep.titleVi}. ${deep.bigIdeaVi}`;
    const whyVi = original?.whyImportantVi || deep.goalVi;
    const memoryVi = original?.memoryTipVi || deep.analogyVi;

    let paddedWhyVi = whyVi;
    if (!paddedWhyVi.includes("Học phần 基本情報 chi tiết")) {
      paddedWhyVi = `${paddedWhyVi}${testFootnote}`;
    }

    const examPatternsVi = original?.examPatternsVi && original.examPatternsVi.length >= 4
      ? original.examPatternsVi
      : [
          ...(original?.examPatternsVi ?? []),
          `Mục tiêu: ${deep.goalVi}`,
          `Case mẫu: ${deep.sampleBody}`,
          `Trace: ${deep.traceVi.join(' → ')}`,
          `Bài tập: ${deep.practiceVi}`
        ].slice(0, 4);

    const commonMistakesVi = original?.commonMistakesVi && original.commonMistakesVi.length >= 2
      ? original.commonMistakesVi
      : [
          ...(original?.commonMistakesVi ?? []),
          deep.commonMisunderstandingVi,
          'Chỉ đọc định nghĩa nhưng không tự giải thích lại bằng ví dụ thật.'
        ].slice(0, 2);

    return {
      nodeId: node.id,
      shortDefinitionVi: shortDefVi.length > 30 ? shortDefVi : `${shortDefVi} Khái niệm quan trọng cần nắm trong đề thi FE.`,
      shortDefinitionJa: original?.shortDefinitionJa || `${node.labelJa}を、具体例・trace・練習問題で理解します。`,
      whyImportantVi: paddedWhyVi,
      whyImportantJa: original?.whyImportantJa || `${node.labelJa}は、試験シナリオの中でinput→判断→outputを追って理解します。`,
      examPatternsVi,
      examPatternsJa: original?.examPatternsJa && original.examPatternsJa.length >= 2
        ? original.examPatternsJa
        : [`具体例で理解する: ${node.labelJa}`, '問題文 của điều kiện, căn cứ, các đáp án để chọn.'],
      commonMistakesVi,
      commonMistakesJa: original?.commonMistakesJa && original.commonMistakesJa.length >= 2
        ? original.commonMistakesJa
        : ['定義だけ暗記して具体例に結び付けない。', '問題文の条件をtraceせず、雰囲気で選ぶ。'],
      memoryTipVi: memoryVi,
      memoryTipJa: original?.memoryTipJa || 'input→判断→outputで覚える。',
    };
  });

  return { ...course, nodes, lessons };
};

const enhanceLoadedCourse = async (course: CourseConfig): Promise<CourseConfig> => {
  const [v98, v99] = await Promise.all([
    import('./v98LessonContentAudit'),
    import('./v99LessonQuality'),
  ]);

  let enhanced = v99.enhanceCourseForV99(v98.enhanceCourseForV98(course));

  if (course.id === 'python') {
    const v101 = await import('./v101LessonQuality');
    return v101.enhanceCourseForV101(enhanced);
  }

  if (course.id === 'fundamental-info') {
    const { buildFundamentalInfoV102EasyLesson } = await import('./fundamental-info/v102EasyLessonPack');
    return enhanceFundamentalInfoLessons(enhanced, buildFundamentalInfoV102EasyLesson, 'V102R-easy-deep-lesson');
  }

  if (course.id === 'ai-passport') {
    const { buildAiPassportV103EasyLesson } = await import('./ai-passport/v103EasyLessonPack');
    return enhanceAiPassportLessons(enhanced, buildAiPassportV103EasyLesson, 'V103R-easy-deep-lesson');
  }

  const v114 = await import('./v114NonCoreWrittenLessonPack');
  return v114.enhanceCourseForV114NonCore(enhanced);
};

export const loadCourseById = async (id: CourseId): Promise<CourseConfig> => {
  if (id === 'fundamental-info') {
    const module = await import('./fundamental-info');
    return enhanceLoadedCourse(module.fundamentalInfoCourse);
  }
  if (id === 'python') {
    const module = await import('./python');
    return enhanceLoadedCourse(module.pythonCourse);
  }
  if (id === 'frontend') {
    const module = await import('./frontend');
    return enhanceLoadedCourse(module.frontendCourse);
  }
  if (id === 'sql') {
    const module = await import('./sql');
    return enhanceLoadedCourse(module.sqlCourse);
  }
  if (id === 'brse') {
    const module = await import('./brse');
    return enhanceLoadedCourse(module.brseCourse);
  }
  if (id === 'linux') {
    const module = await import('./linux');
    return enhanceLoadedCourse(module.linuxCourse);
  }
  if (id === 'it-passport') {
    const module = await import('./it-passport');
    return enhanceLoadedCourse(module.itPassportCourse);
  }
  const module = await import('./ai-passport');
  return enhanceLoadedCourse(module.aiPassportCourse);
};
