import fs from 'node:fs';
import path from 'node:path';

const files = {
  lessonPanel: 'src/features/knowledge-graph/components/LessonPanel.tsx',
  lessonPolish: 'src/features/knowledge-graph/components/FundamentalInfoLessonPolish.tsx',
  practiceDrills: 'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  workbench: 'src/features/knowledge-graph/components/FundamentalPracticeWorkbenches.tsx',
  focus: 'src/features/knowledge-graph/components/FundamentalInfoFocusMode.tsx',
  readiness: 'src/features/knowledge-graph/components/FundamentalInfoReadinessDashboard.tsx',
  verify: 'scripts/verify.mjs',
};
const read = (key) => fs.readFileSync(path.resolve(files[key]), 'utf8');
const checks = [
  { name: 'fundamental_lesson_polish_component', pass: fs.existsSync(files.lessonPolish) && read('lessonPolish').includes('科目A point') && read('lessonPolish').includes('科目B point') && read('lessonPolish').includes('日本語�Eひっかけ'), value: files.lessonPolish },
  { name: 'lesson_panel_uses_fundamental_polish', pass: read('lessonPanel').includes('FundamentalInfoLessonPolish') && read('lessonPanel').includes('courseTitle.includes("基本惁E��")'), value: files.lessonPanel },
  { name: 'practice_workbench_component', pass: fs.existsSync(files.workbench) && read('workbench').includes('Pseudo-code trace workbench') && read('workbench').includes('SQL visual workbench') && read('workbench').includes('Subnet calculator workbench'), value: files.workbench },
  { name: 'practice_drills_embeds_workbench', pass: read('practiceDrills').includes('FundamentalPracticeWorkbench') && read('practiceDrills').includes('kind={filter}'), value: files.practiceDrills },
  { name: 'readiness_dashboard_component', pass: fs.existsSync(files.readiness) && read('readiness').includes('Algorithm / 科目B') && read('readiness').includes('Database / SQL') && read('readiness').includes('Strategy / Law'), value: files.readiness },
  { name: 'focus_mode_embeds_readiness', pass: read('focus').includes('FundamentalInfoReadinessDashboard') && (read('focus').includes('V60 Fundamental Info Focus') || read('focus').includes('V61 Fundamental Info Focus') || read('focus').includes('V62 Fundamental Info Focus') || read('focus').includes('V63 Fundamental Info Focus')), value: files.focus },
  { name: 'verify_includes_v60_audit', pass: read('verify').includes('audit-v60-fundamental-ux.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v60-ux-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
