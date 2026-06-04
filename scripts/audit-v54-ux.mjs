import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const files = [
  'src/features/knowledge-graph/components/StudyNavigation.tsx',
  'src/features/knowledge-graph/components/studyUxMode.ts',
  'src/features/knowledge-graph/utils/localStorage.ts',
  'src/features/knowledge-graph/components/AiPassportFocusMode.tsx',
  'src/features/knowledge-graph/components/VisualQaPanel.tsx',
  'src/components/MobileGraphFallback.tsx',
  'src/App.tsx',
];
const text = Object.fromEntries(files.map((file) => [file, readFileSync(resolve(root, file), 'utf8')]));
const checks = [
  ['persistent_ux_mode', text['src/features/knowledge-graph/utils/localStorage.ts'].includes('readStudyUxMode') && text['src/features/knowledge-graph/utils/localStorage.ts'].includes('writeStudyUxMode')],
  ['beginner_advanced_switch', text['src/features/knowledge-graph/components/StudyNavigation.tsx'].includes('Learning mode') && text['src/features/knowledge-graph/components/StudyNavigation.tsx'].includes('onUxMode')],
  ['beginner_hides_advanced_views', text['src/features/knowledge-graph/components/StudyNavigation.tsx'].includes('isBeginnerStudyView') && text['src/features/knowledge-graph/components/studyUxMode.ts'].includes('advanced')],
  ['advanced_export_only', text['src/features/knowledge-graph/components/StudyNavigation.tsx'].includes('props.uxMode === "advanced"') && text['src/features/knowledge-graph/components/StudyNavigation.tsx'].includes('<ExportPanel')],
  ['focus_mode_three_step_flow', text['src/features/knowledge-graph/components/AiPassportFocusMode.tsx'].includes('học → quiz → review')],
  ['mobile_graph_advanced_copy', text['src/components/MobileGraphFallback.tsx'].includes('advanced view')],
  ['visual_qa_panel', text['src/features/knowledge-graph/components/VisualQaPanel.tsx'].includes('V54 Visual QA')],
];
const passed = checks.filter(([, ok]) => ok).length;
const rows = ['check,status', ...checks.map(([name, ok]) => `${name},${ok ? 'pass' : 'fail'}`)];
writeFileSync(resolve(root, 'ai-passport-v54-ux-audit.csv'), rows.join('\n') + '\n');
console.log(`V54 UX audit: ${passed}/${checks.length} checks passed`);
for (const [name, ok] of checks) console.log(`${ok ? '✓' : '✗'} ${name}`);
if (passed !== checks.length) process.exit(1);
process.exit(0);
