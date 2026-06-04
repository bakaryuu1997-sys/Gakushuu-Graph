import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const projectPlans = [
  {
    title: 'Project 1: Profile Card',
    goal: 'HTML + CSS + responsive',
    nodes: ['html', 'semantic-html', 'css', 'box-model', 'flexbox', 'responsive', 'project-profile-card'],
    deliverable: 'Một card giới thiệu cá nhân đẹp trên mobile và desktop.',
    checklist: ['Có semantic HTML', 'Responsive tốt dưới 480px', 'Dùng flexbox', 'Có hover/focus state'],
    prompt: 'Build a responsive profile card using semantic HTML and CSS. Include avatar, name, role, skills, links, hover states, and mobile-first layout.',
  },
  {
    title: 'Project 2: Todo App',
    goal: 'React state + form',
    nodes: ['javascript', 'react', 'component', 'props', 'state', 'hooks', 'controlled-form', 'project-todo'],
    deliverable: 'Todo app thêm/xóa/đánh dấu hoàn thành, có validate input.',
    checklist: ['Component tách rõ', 'Input controlled', 'Không cho task rỗng', 'Có filter all/active/done'],
    prompt: 'Build a React Todo App with controlled form, validation, add/delete/toggle, filters, local state, clean components, and accessible buttons.',
  },
  {
    title: 'Project 3: API Search App',
    goal: 'Fetch + loading/error UI',
    nodes: ['fetch-api', 'promise', 'async-await', 'api', 'rest-api', 'json', 'loading-error-ui', 'project-api-search'],
    deliverable: 'Search app gọi API, có loading, error, empty state.',
    checklist: ['Có loading state', 'Có error state', 'Có empty state', 'Không gọi API khi query rỗng'],
    prompt: 'Build a React API Search App using fetch and async/await. Include search input, loading, error, empty state, result cards, and retry button.',
  },
  {
    title: 'Project 4: Dashboard UI',
    goal: 'React + performance + deploy',
    nodes: ['react', 'router', 'testing', 'performance', 'accessibility', 'deploy', 'ci-cd', 'project-dashboard'],
    deliverable: 'Dashboard nhỏ có route, test cơ bản, accessibility và deploy.',
    checklist: ['Có layout dashboard', 'Có chart/list card', 'Có route', 'Có test smoke', 'Có deploy checklist'],
    prompt: 'Build a React dashboard with sidebar, cards, chart nội dung nháp, responsive layout, routes, accessibility, performance notes, and deployment checklist.',
  },
];

export function ProjectLearningView({ language, onSelectNode, nodes }: Props) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const getLabel = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;

  return <section className="grid gap-4">
    <div className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.2em] text-orange-600">Project-based learning</p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">Học Frontend bằng project thật</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Mỗi project có node cần học, checklist hoàn thành và prompt mẫu để đưa cho AI/Codex.</p>
    </div>
    {projectPlans.map((project) => <article key={project.title} className="glass-panel rounded-[2rem] p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div><h3 className="text-2xl font-black text-slate-950">{project.title}</h3><p className="mt-1 text-sm font-bold text-orange-700">{project.goal}</p></div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">{project.nodes.length} nodes</span>
      </div>
      <p className="mt-3 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-white"><b>Deliverable:</b> {project.deliverable}</p>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-xs font-black uppercase tracking-[.16em] text-slate-400">Done criteria</p><ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">{project.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="rounded-2xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-950"><p className="text-xs font-black uppercase tracking-[.16em] text-indigo-600">Build with AI Prompt</p><p className="mt-2 font-mono text-xs">{project.prompt}</p></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{project.nodes.map((id, index) => {
        const node = nodeMap.get(id);
        return node ? <button key={id} onClick={() => onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{index + 1}. {getLabel(node)}</button> : null;
      })}</div>
    </article>)}
  </section>;
}
