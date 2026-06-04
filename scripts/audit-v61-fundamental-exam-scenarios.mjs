import fs from 'node:fs';
import path from 'node:path';

const files = {
  scenarios: 'src/courses/fundamental-info/examScenarios.ts',
  scenarioComponent: 'src/features/knowledge-graph/components/FundamentalInfoScenarioDrills.tsx',
  practiceDrills: 'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  examSimulator: 'src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx',
  focus: 'src/features/knowledge-graph/components/FundamentalInfoFocusMode.tsx',
  verify: 'scripts/verify.mjs',
};
const read = (key) => fs.readFileSync(path.resolve(files[key]), 'utf8');
const scenarioText = read('scenarios');
const scenarioCount = (scenarioText.match(/scenario\(\{/g) ?? []).length;
const checks = [
  { name: 'scenario_bank_has_at_least_8_items', pass: scenarioCount >= 8, value: String(scenarioCount) },
  { name: 'japanese_past_exam_style_present', pass: scenarioText.includes('japanese-scenario') && scenarioText.includes('最も適切') && scenarioText.includes('誤っている') && scenarioText.includes('以上'), value: files.scenarios },
  { name: 'long_form_trace_present', pass: scenarioText.includes('long-trace') && scenarioText.includes('traceSteps') && scenarioText.includes('二分探索の完全トレース'), value: files.scenarios },
  { name: 'sql_step_by_step_present', pass: scenarioText.includes('sql-step') && scenarioText.includes('sqlSteps') && scenarioText.includes('3表JOINと集計'), value: files.scenarios },
  { name: 'scenario_drill_component_renders_traps', pass: fs.existsSync(files.scenarioComponent) && read('scenarioComponent').includes('日本語 trap / exam tip') && read('scenarioComponent').includes('TraceTable') && read('scenarioComponent').includes('SqlStepTable'), value: files.scenarioComponent },
  { name: 'practice_embeds_scenario_drills', pass: read('practiceDrills').includes('FundamentalInfoScenarioDrills') && (read('practiceDrills').includes('V61 科目B Drill') || read('practiceDrills').includes('V62 科目B Drill') || read('practiceDrills').includes('V63 科目B Drill')), value: files.practiceDrills },
  { name: 'exam_simulator_has_v61_recommendations', pass: (read('examSimulator').includes('V61 FE Exam Simulator') || read('examSimulator').includes('V62 FE Exam Simulator') || read('examSimulator').includes('V63 FE Exam Simulator')) && (read('examSimulator').includes('V61 scenario recommendations') || read('examSimulator').includes('V62 scenario recommendations') || read('examSimulator').includes('V63 scenario recommendations')), value: files.examSimulator },
  { name: 'focus_mode_points_to_v61_scenarios', pass: (read('focus').includes('V61 Fundamental Info Focus') || read('focus').includes('V62 Fundamental Info Focus') || read('focus').includes('V63 Fundamental Info Focus')) && (read('focus').includes('V61 Scenario Drill') || read('focus').includes('V62 Scenario Drill') || read('focus').includes('V63 科目B Deep Drill')), value: files.focus },
  { name: 'verify_includes_v61_audit', pass: read('verify').includes('audit-v61-fundamental-exam-scenarios.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v61-scenario-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
