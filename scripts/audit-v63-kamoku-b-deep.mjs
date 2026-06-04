import fs from 'node:fs';
import path from 'node:path';

const files = {
  scenarios: 'src/courses/fundamental-info/examScenarios.ts',
  scenarioComponent: 'src/features/knowledge-graph/components/FundamentalInfoScenarioDrills.tsx',
  examSimulator: 'src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx',
  focus: 'src/features/knowledge-graph/components/FundamentalInfoFocusMode.tsx',
  practice: 'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  verify: 'scripts/verify.mjs',
};
const read = (key) => fs.readFileSync(path.resolve(files[key]), 'utf8');
const scenarioText = read('scenarios');
const scenarioCount = (scenarioText.match(/scenario\(\{/g) ?? []).length;
const countKind = (kind) => (scenarioText.match(new RegExp(`kind: '${kind}'`, 'g')) ?? []).length;
const v63Count = (scenarioText.match(/id: 'v63-kamoku-b-/g) ?? []).length;
const mustInclude = ['v63-kamoku-b-array-second-max', 'v63-kamoku-b-recursive-fibonacci', 'v63-kamoku-b-quicksort-partition', 'v63-kamoku-b-dp-coin-change', 'v63-kamoku-b-debug-infinite-loop'];
const checks = [
  { name: 'scenario_bank_expanded_to_at_least_40', pass: scenarioCount >= 40, value: String(scenarioCount) },
  { name: 'kamoku_b_advanced_bank_has_at_least_15_new_hard_items', pass: v63Count >= 15 && scenarioText.includes("difficulty: 'hard'"), value: String(v63Count) },
  { name: 'long_trace_bank_is_deep_enough', pass: countKind('long-trace') >= 20, value: String(countKind('long-trace')) },
  { name: 'advanced_topics_cover_core_kamoku_b_patterns', pass: mustInclude.every((id) => scenarioText.includes(id)), value: mustInclude.join('|') },
  { name: 'clear_step_explanations_exist_for_new_drills', pass: scenarioText.includes('traceSteps') && scenarioText.includes('noteVi') && scenarioText.includes('whyVi') && scenarioText.includes('examTipVi'), value: files.scenarios },
  { name: 'ui_points_to_v63_deep_drill', pass: read('scenarioComponent').includes('V63 FE Past-exam style scenarios') && read('practice').includes('V63 科目B Drill') && read('focus').includes('V63 Fundamental Info Focus'), value: `${files.scenarioComponent}|${files.practice}|${files.focus}` },
  { name: 'exam_simulator_mentions_v63_scenario_bank', pass: read('examSimulator').includes('V63 FE Exam Simulator') && read('examSimulator').includes('V63 scenario bank'), value: files.examSimulator },
  { name: 'verify_includes_v63_audit', pass: read('verify').includes('audit-v63-kamoku-b-deep.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v63-kamoku-b-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
