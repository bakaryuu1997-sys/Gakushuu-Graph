import fs from 'node:fs';
import path from 'node:path';

const files = {
  trainer: 'src/features/knowledge-graph/components/KamokuBInteractiveTraceTrainer.tsx',
  practice: 'src/features/knowledge-graph/components/FundamentalInfoPracticeDrills.tsx',
  scenarios: 'src/courses/fundamental-info/examScenarios.ts',
  exam: 'src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx',
  verify: 'scripts/verify.mjs',
};
const read = (key) => fs.readFileSync(path.resolve(files[key]), 'utf8');
const trainer = read('trainer');
const scenarios = read('scenarios');
const scenarioCount = (scenarios.match(/scenario\(\{/g) ?? []).length;
const longTraceCount = (scenarios.match(/kind: 'long-trace'/g) ?? []).length;
const checks = [
  { name: 'interactive_trace_trainer_component_exists', pass: trainer.includes('V64 Interactive 科目B Trace Trainer'), value: files.trainer },
  { name: 'trainer_requires_user_input_before_checking', pass: trainer.includes('<input') && trainer.includes('Check rows') && trainer.includes('Expected:'), value: files.trainer },
  { name: 'trainer_has_hint_and_reset_flow', pass: trainer.includes('Hint') && trainer.includes('Reset') && trainer.includes('showHint'), value: files.trainer },
  { name: 'trainer_has_kamoku_b_readiness_score', pass: trainer.includes('科目B readiness') && trainer.includes('readiness'), value: files.trainer },
  { name: 'practice_embeds_interactive_trainer', pass: read('practice').includes('KamokuBInteractiveTraceTrainer') && read('practice').includes('V64 科目B Interactive Drill'), value: files.practice },
  { name: 'scenario_bank_still_deep_enough', pass: scenarioCount >= 40 && longTraceCount >= 20, value: `${scenarioCount} scenarios / ${longTraceCount} long-trace` },
  { name: 'exam_and_practice_are_labeled_v64', pass: read('exam').includes('V64 FE Exam Simulator') && read('practice').includes('V64'), value: `${files.exam}|${files.practice}` },
  { name: 'verify_includes_v64_audit', pass: read('verify').includes('audit-v64-kamoku-b-interactive.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v64-kamoku-b-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
