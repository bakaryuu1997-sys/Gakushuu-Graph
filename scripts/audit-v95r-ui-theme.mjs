import { readFileSync } from 'node:fs';

const tailwind = readFileSync('tailwind.config.ts', 'utf8');
const themeHook = readFileSync('src/components/useAppTheme.ts', 'utf8');
const header = readFileSync('src/components/AppHeader.tsx', 'utf8');
const sidePanel = readFileSync('src/components/StudySidePanel.tsx', 'utf8');
const aiExam = readFileSync('src/features/knowledge-graph/components/AiExamSimulator.tsx', 'utf8');
const feExam = readFileSync('src/features/knowledge-graph/components/FundamentalInfoExamSimulator.tsx', 'utf8');
const pkg = readFileSync('package.json', 'utf8');

const checks = [
  ['tailwind class dark mode', tailwind, "darkMode: 'class'"],
  ['theme hook toggles document class', themeHook, 'root.classList.toggle("dark", theme === "dark")'],
  ['theme hook sets colorScheme', themeHook, 'root.style.colorScheme = theme'],
  ['header supports dark text', header, 'dark:text-white'],
  ['study side panel supports dark tokens', sidePanel, 'dark:bg-slate-900'],
  ['AI exam uses suggested pace', aiExam, 'Suggested pace'],
  ['AI exam no longer uses suggested timer', aiExam, 'Suggested timer', true],
  ['FE exam uses suggested pace', feExam, 'Suggested pace'],
  ['FE exam no longer uses suggested timer', feExam, 'Suggested timer', true],
  ['package json exposes audit script', pkg, 'audit:v95r-ui-theme'],
];

const failures = checks.filter(([_, source, token, negate]) => negate ? source.includes(token) : !source.includes(token));
if (failures.length) {
  console.error('V95R audit failed:');
  for (const [label, , token, negate] of failures) {
    console.error(`- ${label}: ${negate ? `should not include ${token}` : `missing ${token}`}`);
  }
  process.exit(1);
}
console.log('V95R UI/theme stabilization audit passed.');
