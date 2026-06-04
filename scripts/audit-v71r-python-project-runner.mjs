import fs from 'node:fs';
const portfolio = fs.readFileSync('src/courses/python/projectPortfolio.ts','utf8');
const suite = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx','utf8');
const validator = fs.readFileSync('src/features/knowledge-graph/components/fastApiProjectValidator.ts','utf8');
const validatorPanel = fs.readFileSync('src/features/knowledge-graph/components/FastApiProjectValidatorPanel.tsx','utf8');
const progress = fs.readFileSync('src/features/knowledge-graph/components/pythonProjectProgress.ts','utf8');
const codeLogic = fs.readFileSync('src/features/knowledge-graph/components/PythonCodeLabLogic.ts','utf8');
const studio = fs.readFileSync('src/features/knowledge-graph/components/PythonMiniProjectStudio.tsx','utf8');
const projectCount = (portfolio.match(/id: 'project-/g) ?? []).length;
const fastApiCount = (portfolio.match(/kind: 'fastapi'|kind: 'ai-api'/g) ?? []).length;
const checks = [
  ['mini projects >= 11', projectCount >= 11],
  ['FastAPI/AI API projects >= 4', fastApiCount >= 4],
  ['new Password/Expense/Markdown projects', portfolio.includes('Password Strength Checker') && portfolio.includes('Expense Tracker') && portfolio.includes('Markdown Notes CLI')],
  ['Quiz/RAG FastAPI projects', portfolio.includes('FastAPI Quiz API') && portfolio.includes('FastAPI RAG Mock Endpoint')],
  ['FastAPI validator checks routes/schema/errors', validator.includes('HTTPException') && validator.includes('BaseModel') && validator.includes('detectFastApiProjectType')],
  ['project-specific validator todo/quiz/rag/predict', validator.includes("projectType === 'todo'") && validator.includes("projectType === 'quiz'") && validator.includes("projectType === 'rag'") && validator.includes("projectType === 'predict'")],
  ['validator panel request/response examples', validatorPanel.includes('Request:') && validatorPanel.includes('Response:')],
  ['project attempt history storage', progress.includes('v71r-python-project-attempt-history') && progress.includes('writePythonProjectAttempt')],
  ['Code Lab records project attempts', codeLogic.includes('writePythonProjectAttempt') && codeLogic.includes('validateFastApiProject')],
  ['Practice suite includes validator panel', suite.includes('FastApiProjectValidatorPanel')],
  ['Mini project studio has kind filter', studio.includes('kindFilter') && studio.includes('FastAPI')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`), `"project count",${projectCount}`, `"fastapi project count",${fastApiCount}`].join('\n');
fs.writeFileSync('/mnt/data/python-v71r-project-runner-audit.csv', csv);
console.log(`Python V71R project runner audit: ${pass}/${checks.length} checks`);
console.log(`Projects: ${projectCount}, FastAPI/AI API projects: ${fastApiCount}`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
