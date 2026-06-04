import fs from 'node:fs';
import path from 'node:path';

const files = {
  bank: 'src/courses/fundamental-info/v79rKamokuBMastery.ts',
  scenarios: 'src/courses/fundamental-info/examScenarios.ts',
  panel: 'src/features/knowledge-graph/components/KamokuBV79RMasteryPanel.tsx',
  practice: 'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  test: 'src/test/v79rKamokuBMastery.test.tsx',
  verify: 'scripts/verify.mjs',
};
const read = (key) => fs.readFileSync(path.resolve(files[key]), 'utf8');
const bank = read('bank');
const panel = read('panel');
const practice = read('practice');
const scenarioCount = (bank.match(/id: 'v79r-/g) ?? []).length;
const longTraceCount = (bank.match(/kind: 'long-trace'/g) ?? []).length;
const traceRowCount = (bank.match(/variables:/g) ?? []).length;
const requiredTopics = ['dynamic-programming', 'graph-theory', 'recursion', 'stack', 'binary-search', 'two-dimensional-array', 'sql-aggregate', 'log-monitoring'];
const checks = [
  { name: 'v79r_bank_has_8_exam_like_cases', pass: scenarioCount >= 8, value: `${scenarioCount} cases` },
  { name: 'v79r_bank_has_6_long_trace_cases', pass: longTraceCount >= 6, value: `${longTraceCount} long traces` },
  { name: 'v79r_trace_rows_are_deep_enough', pass: traceRowCount >= 21, value: `${traceRowCount} trace/sql rows` },
  { name: 'v79r_bank_covers_required_kamoku_b_topics', pass: requiredTopics.every((topic) => bank.includes(topic)), value: requiredTopics.join('|') },
  { name: 'v79r_bank_is_merged_into_main_scenarios', pass: read('scenarios').includes('fundamentalInfoV79RKamokuBMasteryScenarios') && read('scenarios').includes('...fundamentalInfoV79RKamokuBMasteryScenarios'), value: files.scenarios },
  { name: 'v79r_mastery_panel_exists', pass: panel.includes('V79R FE Exam Master Layer') && panel.includes('V79R remediation plan') && panel.includes('New V79R exam-like bank'), value: files.panel },
  { name: 'practice_embeds_v79r_panel', pass: practice.includes('KamokuBV79RMasteryPanel') && practice.includes('V79R 科目B Master Drill'), value: files.practice },
  { name: 'v79r_tests_exist', pass: read('test').includes('V79R Kamoku B mastery upgrade'), value: files.test },
  { name: 'verify_includes_v79r_audit', pass: read('verify').includes('audit-v79r-kamoku-b-mastery.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v79r-kamoku-b-mastery-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
