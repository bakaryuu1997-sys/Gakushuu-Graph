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
const domains = ['algorithm', 'database', 'network', 'security', 'management', 'strategy'];
const checks = [
  { name: 'scenario_bank_has_at_least_25_items', pass: scenarioCount >= 25, value: String(scenarioCount) },
  { name: 'scenario_bank_covers_all_fe_domains', pass: domains.every((domain) => scenarioText.includes(`domain: '${domain}'`)), value: domains.join('|') },
  { name: 'japanese_scenarios_expanded', pass: countKind('japanese-scenario') >= 12 && scenarioText.includes('最も適切') && scenarioText.includes('誤っている') && scenarioText.includes('以上'), value: String(countKind('japanese-scenario')) },
  { name: 'long_trace_scenarios_expanded', pass: countKind('long-trace') >= 6 && scenarioText.includes('再帰呼出し') && scenarioText.includes('挿入ソート'), value: String(countKind('long-trace')) },
  { name: 'sql_step_scenarios_expanded', pass: countKind('sql-step') >= 6 && scenarioText.includes('LEFT JOIN') && scenarioText.includes('サブクエリ') && scenarioText.includes('正規化'), value: String(countKind('sql-step')) },
  { name: 'scenario_drill_has_v62_keyword_highlight', pass: (read('scenarioComponent').includes('V62 FE Past-exam style scenarios') || read('scenarioComponent').includes('V63 FE Past-exam style scenarios') || read('scenarioComponent').includes('V63 FE Past-exam style scenarios')) && (read('scenarioComponent').includes('V62 keyword highlight') || read('scenarioComponent').includes('V63 keyword highlight')), value: files.scenarioComponent },
  { name: 'exam_simulator_has_v62_readiness_plan', pass: (read('examSimulator').includes('V62 FE Exam Simulator') || read('examSimulator').includes('V63 FE Exam Simulator')) && (read('examSimulator').includes('V62 FE readiness action plan') || read('examSimulator').includes('V63 FE readiness action plan')), value: files.examSimulator },
  { name: 'focus_and_practice_point_to_v62', pass: (read('focus').includes('V62 Fundamental Info Focus') || read('focus').includes('V63 Fundamental Info Focus')) && (read('practice').includes('V62 科目B Drill') || read('practice').includes('V63 科目B Drill')), value: `${files.focus}|${files.practice}` },
  { name: 'verify_includes_v62_audit', pass: read('verify').includes('audit-v62-fundamental-final-readiness.mjs'), value: files.verify },
];
const csv = ['check,status,value', ...checks.map((check) => `${check.name},${check.pass ? 'pass' : 'fail'},${check.value}`)].join('\n');
fs.writeFileSync('fundamental-info-v62-final-audit.csv', csv);
checks.forEach((check) => console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}: ${check.value}`));
if (checks.some((check) => !check.pass)) process.exit(1);
