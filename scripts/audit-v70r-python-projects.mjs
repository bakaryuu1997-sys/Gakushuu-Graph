import fs from 'node:fs';
const portfolio = fs.readFileSync('src/courses/python/projectPortfolio.ts','utf8');
const suite = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx','utf8');
const studio = fs.readFileSync('src/features/knowledge-graph/components/PythonMiniProjectStudio.tsx','utf8');
const progress = fs.readFileSync('src/features/knowledge-graph/components/pythonProjectProgress.ts','utf8');
const codeLab = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLab.tsx','utf8');
const projectCount = (portfolio.match(/id: 'project-/g) ?? []).length;
const fastApiCount = (portfolio.match(/kind: 'fastapi'|kind: 'ai-api'/g) ?? []).length;
const checks = [
  ['mini projects >= 6', projectCount >= 6],
  ['FastAPI/AI API projects >= 2', fastApiCount >= 2],
  ['VI/JA project explanations', portfolio.includes('explanationVi') && portfolio.includes('explanationJa')],
  ['starter code and test cases included', portfolio.includes('starterCode') && portfolio.includes('testCases')],
  ['portfolio dashboard included', suite.includes('PythonProjectPortfolioDashboard')],
  ['mini project studio included', suite.includes('PythonMiniProjectStudio')],
  ['local project progress storage', progress.includes('v70r-python-project-progress')],
  ['Open in Code Lab event wired', studio.includes('v70r-python-open-project') && codeLab.includes('v70r-python-open-project')],
  ['AI/FastAPI project present', portfolio.includes('FastAPI AI Prediction Mock')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`), `"project count",${projectCount}`, `"fastapi project count",${fastApiCount}`].join('\n');
fs.writeFileSync('/mnt/data/python-v70r-projects-audit.csv', csv);
console.log(`Python V70R project audit: ${pass}/${checks.length} checks`);
console.log(`Projects: ${projectCount}, FastAPI/AI API projects: ${fastApiCount}`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
