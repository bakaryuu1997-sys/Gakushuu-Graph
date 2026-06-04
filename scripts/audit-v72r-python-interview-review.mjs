import fs from 'node:fs';
const suite = fs.readFileSync('src/features/knowledge-graph/components/PythonPracticeSuite.tsx','utf8');
const interview = fs.readFileSync('src/features/knowledge-graph/components/PythonLocalInterviewMode.tsx','utf8');
const interviewLogic = fs.readFileSync('src/features/knowledge-graph/components/pythonInterviewMode.ts','utf8');
const review = fs.readFileSync('src/features/knowledge-graph/components/PythonReviewQueuePanel.tsx','utf8');
const reviewLogic = fs.readFileSync('src/features/knowledge-graph/components/pythonReviewQueueRunner.ts','utf8');
const achievement = fs.readFileSync('src/features/knowledge-graph/components/PythonAchievementPanel.tsx','utf8');
const tests = fs.readFileSync('src/test/v72rPythonInterviewReview.test.tsx','utf8');
const checks = [
  ['interview mode component exists', interview.includes('V72R Local Interview Mode') && interview.includes('Save interview result')],
  ['interview set has easy standard hard', interview.includes('Easy') && interview.includes('Standard') && interview.includes('Hard')],
  ['interview history localStorage', interviewLogic.includes('v72r-python-interview-history') && interviewLogic.includes('writePythonInterviewResult')],
  ['review queue component exists', review.includes('V72R Review Queue') && review.includes('Next recommended exercise')],
  ['review queue prioritizes failed items', reviewLogic.includes("status === 'failed'") && reviewLogic.includes('getNextRecommendedExercise')],
  ['achievements panel exists', achievement.includes('Pass 5 algorithm exercises') && achievement.includes('Reach 70% interview score')],
  ['practice suite includes interview review achievements', suite.includes('PythonLocalInterviewMode') && suite.includes('PythonReviewQueuePanel') && suite.includes('PythonAchievementPanel')],
  ['retry opens Code Lab event', reviewLogic.includes('v69r-python-open-exercise')],
  ['tests cover interview and queue', tests.includes('selectInterviewExercises') && tests.includes('buildPythonReviewQueue')],
];
const pass = checks.filter(([, ok]) => ok).length;
const csv = ['check,status', ...checks.map(([name, ok]) => `${JSON.stringify(name)},${ok ? 'pass' : 'fail'}`)].join('\n');
fs.writeFileSync('/mnt/data/python-v72r-interview-review-audit.csv', csv);
console.log(`Python V72R interview/review audit: ${pass}/${checks.length} checks`);
for (const [name, ok] of checks) console.log(`${ok ? 'pass' : 'fail'} - ${name}`);
if (pass !== checks.length) process.exit(1);
