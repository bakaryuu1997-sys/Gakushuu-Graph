import { readFileSync } from 'node:fs';
const file = readFileSync('src/courses/fundamental-info/v81rMixedMockMiniSet.ts', 'utf8');
const scenarios = readFileSync('src/courses/fundamental-info/examScenarios.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/FundamentalInfoV81RMixedMockPanel.tsx', 'utf8');
for (const token of ['v81r-mixed-pseudocode-nested-loop','v81r-mixed-sql-where-having','v81r-mixed-network-cidr','v81r-mixed-security-log','v81r-mixed-dp-table','v81r-mixed-api-auth']) {
  if (!file.includes(token)) throw new Error(`V81R mini-set missing ${token}`);
}
for (const domain of ['algorithm','database','network','security']) if (!file.includes(`domain: '${domain}'`)) throw new Error(`V81R domain missing ${domain}`);
if (!scenarios.includes('fundamentalInfoV81RMixedMockMiniSet')) throw new Error('V81R scenarios are not merged');
if (!panel.includes('V81R 基本惁E�� mixed mock mini-set')) throw new Error('V81R panel missing');
console.log('✁EV81R mixed mock audit passed');
