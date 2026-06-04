import { useState } from 'react';

const phrases = [
  ['確認させてください', 'Cho tôi xác nhận lại.', 'Dùng khi yêu cầu chưa rõ hoặc cần tránh hiểu sai.'],
  ['認識に相違がないか確認します', 'Tôi xin xác nhận xem nhận thức hai bên có khác nhau không.', 'Cực kỳ hữu ích khi chốt meeting.'],
  ['影響範囲を確認します', 'Tôi sẽ kiểm tra phạm vi ảnh hưởng.', 'Dùng khi có 仕様変更 hoặc bug.'],
  ['一旦持ち帰って確認します', 'Tôi xin mang về kiểm tra lại.', 'Dùng khi chưa thể trả lời ngay.'],
  ['前提条件を整理させてください', 'Cho tôi sắp xếp lại các tiền đề.', 'Dùng khi requirement mơ hồ.'],
  ['決定事項として記録します', 'Tôi sẽ ghi lại như một quyết định.', 'Dùng trong 議事録.'],
  ['未決事項として管理します', 'Tôi sẽ quản lý như một mục chưa quyết.', 'Dùng cho Q&A/open issue.'],
  ['リリース可否を判断する必要があります', 'Cần phán đoán có thể release hay không.', 'Dùng khi release judgement.'],
  ['再発防止策を検討します', 'Chúng tôi sẽ xem xét biện pháp phòng tái phát.', 'Dùng sau incident/bug.'],
];

const quiz = [
  ['Khi chưa trả lời ngay được, nên nói câu nào?', '一旦持ち帰って確認します'],
  ['Khi muốn kiểm tra phạm vi ảnh hưởng, dùng câu nào?', '影響範囲を確認します'],
  ['Khi chốt quyết định trong meeting, dùng câu nào?', '決定事項として記録します'],
];

export function BrsePhraseBankView() {
  const [show, setShow] = useState(false);
  return <section className="grid gap-4">
    <div className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-600">BrSE Japanese Phrase Bank</p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">Câu Nhật thực chiến + phrase quiz</h2>
      <button onClick={() => setShow(!show)} className="mt-3 rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-black text-white">{show ? 'Ẩn đáp án quiz' : 'Hiện đáp án quiz'}</button>
    </div>
    {phrases.map(([ja, vi, usage]) => <article key={ja} className="glass-panel rounded-[2rem] p-5"><h3 className="text-2xl font-black text-slate-950">{ja}</h3><p className="mt-2 text-base font-bold text-emerald-700">{vi}</p><p className="mt-2 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">{usage}</p></article>)}
    {quiz.map(([q,a]) => <article key={q} className="rounded-[2rem] border border-emerald-200 bg-white p-5 shadow-soft"><p className="text-sm font-black text-slate-950">{q}</p>{show && <p className="mt-2 text-xl font-black text-emerald-700">{a}</p>}</article>)}
  </section>;
}
