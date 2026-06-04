export interface V88RConsistencyItem {
  id: string;
  area: 'python' | 'fundamental-info' | 'ai-passport' | 'release';
  label: string;
  status: 'pass' | 'watch';
  evidence: string;
  nextAction: string;
}

export const v88rContentConsistencyItems: V88RConsistencyItem[] = [
  { id:'v88-python-nodes', area:'python', label:'Python node/lesson mapping', status:'pass', evidence:'117 Python lessons remain mapped; V78/V84 enrich catalog without changing node ids.', nextAction:'Continue deep polish in batches rather than renaming ids.' },
  { id:'v88-python-grader', area:'python', label:'Code Lab grader coverage', status:'pass', evidence:'V80R adds OOP, dict/list, algorithm, file, FastAPI grading tasks.', nextAction:'Add portfolio-level project checks in V89R.' },
  { id:'v88-fe-kamoku-b', area:'fundamental-info', label:'科目B trace bank', status:'pass', evidence:'V79R and V85R scenarios are merged into main exam scenario bank.', nextAction:'Add no-timer mixed mock review mode in V90R.' },
  { id:'v88-ai-passport', area:'ai-passport', label:'AI Passport course boundary', status:'pass', evidence:'AI Passport remains local-only and separate from FE/Python panels.', nextAction:'Do not mix Python or FE tasks into AI Passport navigation.' },
  { id:'v88-release-docs', area:'release', label:'Release notes chain', status:'watch', evidence:'Many upgrade notes exist; latest release summary needs one consolidated UX note.', nextAction:'Add V91R release UX summary and learning route.' },
];
