import fs from 'node:fs';
import path from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run create:course <course-id>');
  process.exit(1);
}

const dir = path.join(process.cwd(), 'src', 'courses', slug);
if (fs.existsSync(dir)) {
  console.error(`Course already exists: ${dir}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });
const title = slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
const varName = slug.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

fs.writeFileSync(path.join(dir, 'nodes.ts'), `import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';

export const ${varName}Nodes: KnowledgeNodeData[] = [
  {
    id: '${slug}-root',
    labelJa: '${title}',
    labelVi: '${title}',
    labelEn: '${title}',
    category: 'technology',
    level: 'root',
    importance: 'high',
    summaryVi: 'Mô tả tổng quan.',
    summaryJa: '概要。',
    examPointVi: 'Điểm cần nhớ.',
    examPointJa: '重要ポイント。',
    examples: [],
    keywords: ['${title}'],
    prerequisites: [],
    related: [],
  },
];
`);

fs.writeFileSync(path.join(dir, 'edges.ts'), `import type { KnowledgeEdgeData } from '../../features/knowledge-graph/types';

export const ${varName}Edges: KnowledgeEdgeData[] = [];
`);

fs.writeFileSync(path.join(dir, 'lessons.ts'), `import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';

export const ${varName}Lessons: LessonContent[] = [];
`);

fs.writeFileSync(path.join(dir, 'quizzes.ts'), `import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';

export const ${varName}Quizzes: QuizQuestion[] = [];
`);

fs.writeFileSync(path.join(dir, 'studyPath.ts'), `import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';

export const ${varName}StudyPath: StudyPathPhase[] = [
  { id: '${slug}-path-1', titleVi: '${title} Basic', titleJa: '${title} Basic', goalVi: 'Học nền tảng.', goalJa: '基礎を学ぶ。', nodeIds: ['${slug}-root'] },
];
`);

fs.writeFileSync(path.join(dir, 'index.ts'), `import type { CourseConfig } from '../types';
import { ${varName}Edges } from './edges';
import { ${varName}Lessons } from './lessons';
import { ${varName}Nodes } from './nodes';
import { ${varName}Quizzes } from './quizzes';
import { ${varName}StudyPath } from './studyPath';

export const ${varName}Course: CourseConfig = {
  id: '${slug}' as any,
  title: '${title}',
  titleJa: '${title}',
  titleVi: '${title}',
  subtitleVi: 'Course mới.',
  subtitleJa: '新しいコース。',
  descriptionVi: 'Mô tả course.',
  descriptionJa: 'コース説明。',
  rootNodeId: '${slug}-root',
  defaultNodeId: '${slug}-root',
  languageSupport: ['vi', 'ja', 'en'],
  theme: { accentClass: 'text-indigo-600', darkPanelClass: 'bg-slate-950', progressClass: 'bg-indigo-400' },
  nodes: ${varName}Nodes,
  edges: ${varName}Edges,
  lessons: ${varName}Lessons,
  quizzes: ${varName}Quizzes,
  studyPath: ${varName}StudyPath,
  comparePairs: [],
};
`);

fs.writeFileSync(path.join(dir, 'README.md'), `# ${title}

Generated files:
- nodes.ts
- edges.ts
- lessons.ts
- quizzes.ts
- studyPath.ts
- index.ts
`);

console.log(`Created split course template: src/courses/${slug}`);
console.log('Next: add the course id to CourseId type and courseLoader.ts.');
