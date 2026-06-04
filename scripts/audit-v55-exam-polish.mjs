import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const files = [
  'src/features/knowledge-graph/components/AiExamSimulator.tsx',
  'src/features/knowledge-graph/components/AiPassportFocusMode.tsx',
  'src/features/knowledge-graph/components/AiWrongAnswerReviewView.tsx',
  'src/features/knowledge-graph/components/SmartDailyStudyPlan.tsx',
  'src/features/knowledge-graph/components/LessonPanel.tsx',
  'src/features/knowledge-graph/components/LessonWorkspace.tsx',
  'src/features/knowledge-graph/components/studyViewItems.ts',
  'src/features/knowledge-graph/components/studyUxMode.ts',
  'e2e/smoke.spec.ts',
];
const text = Object.fromEntries(files.map((file) => [file, readFileSync(resolve(root, file), 'utf8')]));
const checks = [
  ['exam_simulator_component', text['src/features/knowledge-graph/components/AiExamSimulator.tsx'].includes('V55 Exam Simulator') && text['src/features/knowledge-graph/components/AiExamSimulator.tsx'].includes('30') && text['src/features/knowledge-graph/components/AiExamSimulator.tsx'].includes('50')],
  ['exam_simulator_routed', text['src/features/knowledge-graph/components/LessonWorkspace.tsx'].includes('<AiExamSimulator') && text['src/features/knowledge-graph/components/LessonWorkspace.tsx'].includes('activeView === "session"')],
  ['wrong_answer_intelligence', text['src/features/knowledge-graph/components/AiWrongAnswerReviewView.tsx'].includes('V55 Wrong-answer Intelligence') && text['src/features/knowledge-graph/components/AiWrongAnswerReviewView.tsx'].includes('Top domain')],
  ['smart_daily_plan', text['src/features/knowledge-graph/components/SmartDailyStudyPlan.tsx'].includes('V55 Smart Daily Plan') && text['src/features/knowledge-graph/components/AiPassportFocusMode.tsx'].includes('SmartDailyStudyPlan')],
  ['lesson_ui_badges', text['src/features/knowledge-graph/components/LessonPanel.tsx'].includes('Lesson quality badges') && text['src/features/knowledge-graph/components/LessonPanel.tsx'].includes('Lesson exam quick cards')],
  ['beginner_exam_simulator_access', text['src/features/knowledge-graph/components/studyUxMode.ts'].includes('"session"') && text['src/features/knowledge-graph/components/studyViewItems.ts'].includes('Exam Simulator')],
  ['e2e_has_beginner_flow', text['e2e/smoke.spec.ts'].includes('Beginner') && text['e2e/smoke.spec.ts'].includes('Exam Simulator')],
];
const passed = checks.filter(([, ok]) => ok).length;
const rows = ['check,status', ...checks.map(([name, ok]) => `${name},${ok ? 'pass' : 'fail'}`)];
writeFileSync(resolve(root, 'ai-passport-v55-exam-polish-audit.csv'), rows.join('\n') + '\n');
console.log(`V55 exam polish audit: ${passed}/${checks.length} checks passed`);
for (const [name, ok] of checks) console.log(`${ok ? '✁E : '✁E} ${name}`);
if (passed !== checks.length) process.exit(1);
process.exit(0);
