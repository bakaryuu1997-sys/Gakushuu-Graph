import { useState } from 'react';
import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const schema = [
  'employees(id, name, department_id, salary, joined_at)',
  'departments(id, name)',
  'customers(id, name, rank)',
  'orders(id, customer_id, amount, ordered_at)',
  'sales(id, month, amount)',
];

const practices = [
  { title: 'JOIN employees/departments', task: 'Sales部門の社員名を取得する。', answer: "SELECT e.name FROM employees e JOIN departments d ON e.department_id = d.id WHERE d.name = 'Sales';", wrong: "SELECT name FROM employees WHERE department = 'Sales';", whyWrong: 'employeesにdepartment名が直接ない設計。departmentsとJOINする必要がある。', nodes: ['join','inner-join','where'] },
  { title: 'GROUP BY / HAVING', task: '月別売上が100000を超える月だけ出す。', answer: 'SELECT month, SUM(amount) FROM sales GROUP BY month HAVING SUM(amount) > 100000;', wrong: 'SELECT month, SUM(amount) FROM sales WHERE SUM(amount) > 100000 GROUP BY month;', whyWrong: 'aggregate結果はWHEREではなくHAVINGで絞る。', nodes: ['group-by','aggregate-functions','having'] },
  { title: 'LEFT JOIN missing orders', task: '注文がない顧客も含めて顧客と注文IDを出す。', answer: 'SELECT c.name, o.id FROM customers c LEFT JOIN orders o ON c.id = o.customer_id;', wrong: 'SELECT c.name, o.id FROM customers c INNER JOIN orders o ON c.id = o.customer_id;', whyWrong: 'INNER JOINだと注文がない顧客が消える。', nodes: ['left-join','join-condition'] },
  { title: 'Safe UPDATE', task: '特定社員のsalaryだけ更新する。', answer: 'UPDATE employees SET salary = 5000 WHERE id = 10;', wrong: 'UPDATE employees SET salary = 5000;', whyWrong: 'WHEREなしUPDATEは全行を更新する危険がある。', nodes: ['update','transaction'] },
];

export function SqlPracticeView({ language, onSelectNode, nodes }: Props) {
  const [open, setOpen] = useState(practices[0].title);
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const label = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;
  return <section className="grid gap-4">
    <div className="glass-panel rounded-[2rem] p-5"><p className="text-xs font-black uppercase tracking-[.2em] text-sky-600">SQL Schema Practice</p><h2 className="mt-1 text-3xl font-black text-slate-950">Schema → expected SQL → wrong SQL</h2><div className="mt-4 grid gap-2">{schema.map((item) => <code key={item} className="rounded-xl bg-slate-950 px-3 py-2 text-xs text-white">{item}</code>)}</div></div>
    {practices.map((item) => <article key={item.title} className="glass-panel rounded-[2rem] p-5">
      <button onClick={() => setOpen(open === item.title ? '' : item.title)} className="w-full text-left"><h3 className="text-2xl font-black text-slate-950">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.task}</p></button>
      {open === item.title && <div className="mt-4 grid gap-3"><pre className="overflow-x-auto rounded-2xl bg-emerald-950 p-4 text-xs leading-6 text-white">{item.answer}</pre><pre className="overflow-x-auto rounded-2xl bg-rose-950 p-4 text-xs leading-6 text-white">{item.wrong}</pre><p className="rounded-2xl bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-900">{item.whyWrong}</p><div className="flex flex-wrap gap-2">{item.nodes.map((id) => { const node = nodeMap.get(id); return node ? <button key={id} onClick={() => onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{label(node)}</button> : null; })}</div></div>}
    </article>)}
  </section>;
}
