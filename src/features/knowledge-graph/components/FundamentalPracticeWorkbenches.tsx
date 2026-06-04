import { useMemo, useState } from 'react';
import { Binary, Calculator, Database, PlayCircle } from 'lucide-react';
import type { FundamentalPracticeKind } from '../../../courses/fundamental-info/practice';

export function FundamentalPracticeWorkbench({ kind }: { kind: FundamentalPracticeKind | 'all' }) {
  if (kind === 'sql') return <SqlVisualWorkbench />;
  if (kind === 'subnet') return <SubnetCalculatorWorkbench />;
  if (kind === 'all') return (
    <div className="grid gap-4 xl:grid-cols-3"><PseudoCodeTraceWorkbench compact /><SqlVisualWorkbench compact /><SubnetCalculatorWorkbench compact /></div>
  );
  return <PseudoCodeTraceWorkbench />;
}

function PseudoCodeTraceWorkbench({ compact = false }: { compact?: boolean }) {
  const rows = [
    { step: 0, i: '-', x: 0, note: '初期値 x=0' },
    { step: 1, i: 1, x: 2, note: '1回目: x ← x + 2' },
    { step: 2, i: 2, x: 4, note: '2回目: x ← x + 2' },
    { step: 3, i: 3, x: 6, note: '3回目: x ← x + 2' },
  ];
  return (
    <section className="rounded-[2rem] border border-indigo-100 bg-indigo-50 p-5" aria-label="Pseudo-code trace workbench">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-indigo-700"><PlayCircle className="h-4 w-4" /> 科目B trace UI</p>
      <h3 className="mt-2 text-xl font-black text-indigo-950">変数表で pseudo-code を追う</h3>
      {!compact && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs font-bold leading-6 text-indigo-100">x ← 0{`\n`}for i ← 1 to 3{`\n`}  x ← x + 2{`\n`}endfor</pre>}
      <div className="mt-3 overflow-hidden rounded-2xl border border-indigo-100 bg-white">
        <table className="w-full text-left text-xs font-bold text-slate-700">
          <thead className="bg-indigo-100 text-indigo-950"><tr><th className="p-2">step</th><th className="p-2">i</th><th className="p-2">x</th><th className="p-2">note</th></tr></thead>
          <tbody>{rows.map((row) => <tr key={row.step} className="border-t border-indigo-50"><td className="p-2">{row.step}</td><td className="p-2">{row.i}</td><td className="p-2">{row.x}</td><td className="p-2">{row.note}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-indigo-900">FEでは頭の中で追わず、変数表を作ると off-by-one と添字ミスを減らせます。</p>
    </section>
  );
}

function SqlVisualWorkbench({ compact = false }: { compact?: boolean }) {
  const result = useMemo(() => [
    { customer: 'A社', total: 12000 },
    { customer: 'C社', total: 15000 },
  ], []);
  return (
    <section className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5" aria-label="SQL visual workbench">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-emerald-700"><Database className="h-4 w-4" /> SQL visual practice</p>
      <h3 className="mt-2 text-xl font-black text-emerald-950">GROUP BY / HAVING の結果を表で見る</h3>
      {!compact && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs font-bold leading-6 text-emerald-100">SELECT customer, SUM(amount) AS total{`\n`}FROM Sales{`\n`}GROUP BY customer{`\n`}HAVING SUM(amount) &gt;= 10000;</pre>}
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <MiniTable title="Sales" rows={[['A社', '7000'], ['A社', '5000'], ['B社', '3000'], ['C社', '15000']]} />
        <MiniTable title="Result" rows={result.map((row) => [row.customer, String(row.total)])} />
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-emerald-900">WHEREは行を絞る、HAVINGは集計後のグループを絞る。この違いがFEの頻出ひっかけです。</p>
    </section>
  );
}

function SubnetCalculatorWorkbench({ compact = false }: { compact?: boolean }) {
  const [prefix, setPrefix] = useState(24);
  const safePrefix = Math.min(30, Math.max(1, prefix || 24));
  const hostBits = 32 - safePrefix;
  const addresses = 2 ** hostBits;
  const usable = Math.max(0, addresses - 2);
  return (
    <section className="rounded-[2rem] border border-amber-100 bg-amber-50 p-5" aria-label="Subnet calculator workbench">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-amber-700"><Binary className="h-4 w-4" /> subnet step-by-step</p>
      <h3 className="mt-2 text-xl font-black text-amber-950">CIDR → host bit → usable host</h3>
      {!compact && <label className="mt-3 block text-sm font-black text-amber-950">Prefix /{safePrefix}<input aria-label="CIDR prefix" type="range" min="16" max="30" value={safePrefix} onChange={(event) => setPrefix(Number(event.target.value))} className="mt-2 w-full" /></label>}
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <CalcCard label="Host bits" value={`32 - ${safePrefix} = ${hostBits}`} />
        <CalcCard label="Addresses" value={`2^${hostBits} = ${addresses}`} />
        <CalcCard label="Usable" value={`${addresses} - 2 = ${usable}`} />
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm font-bold leading-6 text-amber-900"><Calculator className="h-4 w-4" /> network address と broadcast address を除くため、通常の usable host は -2 します。</p>
    </section>
  );
}

function MiniTable({ title, rows }: { title: string; rows: string[][] }) {
  return <div className="overflow-hidden rounded-2xl border border-white bg-white"><p className="bg-slate-100 px-3 py-2 text-xs font-black text-slate-600">{title}</p>{rows.map((row, index) => <div key={`${title}-${index}`} className="grid grid-cols-2 border-t border-slate-100 px-3 py-2 text-xs font-bold text-slate-700"><span>{row[0]}</span><span>{row[1]}</span></div>)}</div>;
}

function CalcCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-white p-3 shadow-sm"><p className="text-xs font-black uppercase tracking-[.14em] text-slate-500">{label}</p><p className="mt-1 text-lg font-black text-slate-950">{value}</p></div>;
}
