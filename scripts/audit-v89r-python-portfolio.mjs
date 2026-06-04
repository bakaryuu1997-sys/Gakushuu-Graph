import { readFileSync } from 'node:fs';
const data = readFileSync('src/courses/python/v89rPortfolioProjects.ts', 'utf8');
const panel = readFileSync('src/features/knowledge-graph/components/PythonV89RPortfolioPanel.tsx', 'utf8');
const tabs = readFileSync('src/features/knowledge-graph/components/PythonPracticeTabs.tsx', 'utf8');
const required = ['v89r-cli-study-todo', 'v89r-csv-analyzer', 'v89r-fastapi-mini-backend', 'v89r-test-first-katas', 'acceptanceTests', 'readmeChecklist', 'PythonV89RPortfolioPanel'];
const missing = required.filter((token) => !(data + panel + tabs).includes(token));
if (missing.length) throw new Error(`V89R portfolio audit missing: ${missing.join(', ')}`);
console.log('V89R Python portfolio audit pass');
