import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const sqlProjects = [
  { title: 'Project 1: Employees database', goal: 'Table / PK / FK', nodes: ['table','primary-key','foreign-key','create-table','erd'], checklist: ['employees table', 'departments table', 'primary key', 'foreign key'], prompt: 'Design an employees/departments SQL schema with primary key, foreign key, sample INSERTs, and SELECT queries.' },
  { title: 'Project 2: Sales report query', goal: 'GROUP BY / HAVING', nodes: ['select','where','group-by','aggregate-functions','having'], checklist: ['monthly total', 'filter by HAVING', 'order result'], prompt: 'Create SQL queries for a sales report grouped by month, with SUM, COUNT, HAVING, and ORDER BY.' },
  { title: 'Project 3: Customer orders JOIN', goal: 'JOIN', nodes: ['join','inner-join','left-join','join-condition'], checklist: ['customer/order tables', 'INNER JOIN', 'LEFT JOIN', 'missing order case'], prompt: 'Build SQL examples for customers and orders using INNER JOIN and LEFT JOIN with clear ON conditions.' },
  { title: 'Project 4: Bank transfer transaction', goal: 'TRANSACTION', nodes: ['transaction','commit-rollback','acid','lock','deadlock'], checklist: ['BEGIN', 'two UPDATEs', 'COMMIT', 'ROLLBACK on error'], prompt: 'Write a safe SQL transaction for bank transfer with BEGIN, UPDATE debit/credit, COMMIT, ROLLBACK, and notes about isolation.' },
];

export function SqlProjectLearningView({ language, onSelectNode, nodes }: Props) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const label = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;
  return <section className="grid gap-4">
    <div className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.2em] text-sky-600">SQL Project-based learning</p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">Học SQL bằng mini project</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Mỗi project có checklist và prompt mẫu để đưa cho AI/Codex tạo bài tập SQL.</p>
    </div>
    {sqlProjects.map((project) => <article key={project.title} className="glass-panel rounded-[2rem] p-5">
      <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
      <p className="mt-1 text-sm font-bold text-sky-700">{project.goal}</p>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        <ul className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">{project.checklist.map((item) => <li key={item}>✅ {item}</li>)}</ul>
        <p className="rounded-2xl bg-indigo-50 p-4 font-mono text-xs leading-6 text-indigo-950">{project.prompt}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{project.nodes.map((id) => {
        const node = nodeMap.get(id);
        return node ? <button key={id} onClick={() => onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{label(node)}</button> : null;
      })}</div>
    </article>)}
  </section>;
}
