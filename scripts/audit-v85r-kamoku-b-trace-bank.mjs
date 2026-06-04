import { readFileSync } from 'node:fs';
const data = readFileSync('src/courses/fundamental-info/v85rKamokuBTraceBank.ts', 'utf8');
const scenarios = readFileSync('src/courses/fundamental-info/examScenarios.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/KamokuBV85RTraceBankPanel.tsx', 'utf8');
for (const token of ['v85r-array-rotate-trace','v85r-stack-parentheses-trace','v85r-queue-bfs-layer','v85r-recursion-return-stack','v85r-dp-min-cost','v85r-graph-degree','v85r-sql-join-filter-order','v85r-security-log-timeline']) {
  if (!data.includes(token)) throw new Error(`V85R missing ${token}`);
}
if (!scenarios.includes('fundamentalInfoV85RTraceBank') || !scenarios.includes('push(...fundamentalInfoV85RTraceBank)')) throw new Error('V85R scenarios not merged');
if (!panel.includes('Search trace / SQL / security') || !panel.includes('V85R 科目B trace bank')) throw new Error('V85R panel missing filter UI or heading');
console.log('✅ V85R Kamoku B trace bank audit passed');
