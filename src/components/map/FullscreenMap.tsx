import { useMemo, useState } from 'react';
import { Camera, X } from 'lucide-react';
import { GraphCanvas } from '../../features/knowledge-graph/components/GraphCanvas';
import { getFocusedMapElements } from './mapFocus';
import { MapDensityControl } from './MapDensityControl';
import { MapInspector } from './MapInspector';
import { MapNodeSearch } from './MapNodeSearch';
import { MapPresetBar } from './MapPresetBar';
import { MapScopeControl } from './MapScopeControl';
import { MapStatusFilter, type GraphStatusFilter } from './MapStatusFilter';
import { PhaseNavigator } from './PhaseNavigator';
import type { MapDensity, MapFocus, MapScope, MapSharedProps } from './mapTypes';

export function FullscreenMap(props: MapSharedProps & { onClose: () => void; onExportImage: () => void; nextNodeId?: string }) {
  const [focus, setFocus] = useState<MapFocus>('focus-neighborhood');
  const [density, setDensity] = useState<MapDensity>('standard');
  const [phaseId, setPhaseId] = useState<string | undefined>();
  const [scope, setScope] = useState<MapScope>('phase');
  const [hideWeak, setHideWeak] = useState(true);
  const [statusFilter, setStatusFilter] = useState<GraphStatusFilter>('all');
  const focused = useMemo(() => getFocusedMapElements(props.nodes, props.edges, focus, props.selectedNode.id, density, true, props.studyPath, phaseId, scope, hideWeak), [density, focus, phaseId, props.edges, props.nodes, props.selectedNode.id, props.studyPath, scope, hideWeak]);
  const statusFocused = useMemo(() => filterByStatus(focused, statusFilter, props.selectedNode.id), [focused, statusFilter, props.selectedNode.id]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 p-3 backdrop-blur-md md:p-5">
      <div className="grid h-full min-h-0 gap-4 overflow-hidden rounded-[2rem] bg-slate-100 p-3 shadow-2xl dark:bg-slate-950 md:p-4 2xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="flex min-h-0 min-w-0 flex-col gap-3">
          <section className="shrink-0 rounded-[1.75rem] border border-white/70 bg-white/90 p-3 shadow-soft backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90" aria-label="Fullscreen map controls">
            <div className="flex flex-col gap-3">
              <FullscreenActions courseTitle={props.courseTitle} focus={focus} density={density} onDensity={setDensity} onFocus={setFocus} scope={scope} onScope={setScope} hideWeak={hideWeak} onHideWeak={setHideWeak} statusFilter={statusFilter} onStatusFilter={setStatusFilter} onClose={props.onClose} onExportImage={props.onExportImage} />
              <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
                <PhaseNavigator phases={props.studyPath} activePhase={phaseId} onPhase={setPhaseId} />
                <MapNodeSearch nodes={statusFocused.nodes} language={props.language} onSelectNode={props.onSelectNode} />
              </div>
            </div>
          </section>
          <GraphCanvas
            nodes={statusFocused.nodes}
            edges={statusFocused.edges}
            onSelectNode={props.onSelectNode}
            className="min-h-[520px] flex-1"
            title={`${props.courseTitle} Fullscreen Map`}
            subtitle="V99R: controls/search/phase nằm ngoài graph, không còn đè lên node."
            readable
            nextNodeId={props.nextNodeId}
          />
        </div>
        <div className="min-h-0 overflow-y-auto">
          <MapInspector {...props} />
        </div>
      </div>
    </div>
  );
}

function FullscreenActions({ courseTitle, focus, density, scope, hideWeak, onFocus, onDensity, onScope, onHideWeak, statusFilter, onStatusFilter, onClose, onExportImage }: { courseTitle: string; focus: MapFocus; density: MapDensity; onFocus: (focus: MapFocus) => void; onDensity: (density: MapDensity) => void; scope: MapScope; hideWeak: boolean; onScope: (scope: MapScope) => void; onHideWeak: (value: boolean) => void; statusFilter: GraphStatusFilter; onStatusFilter: (value: GraphStatusFilter) => void; onClose: () => void; onExportImage: () => void; nextNodeId?: string }) {
  return <div className="flex flex-wrap items-center gap-2">
    <MapPresetBar courseTitle={courseTitle} focus={focus} onFocus={onFocus} />
    <MapDensityControl density={density} onDensity={onDensity} />
    <MapScopeControl scope={scope} onScope={onScope} />
    <MapStatusFilter value={statusFilter} onValue={onStatusFilter} />
    <button onClick={() => onHideWeak(!hideWeak)} className={`pointer-events-auto rounded-xl px-3 py-2 text-xs font-black shadow-sm transition hover:-translate-y-0.5 ${hideWeak ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300'}`}>Hide weak</button>
    <button onClick={onExportImage} className="pointer-events-auto rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5">
      <Camera className="mr-1 inline h-3.5 w-3.5" /> Export PNG
    </button>
    <button onClick={onClose} className="pointer-events-auto rounded-xl bg-rose-600 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5">
      <X className="mr-1 inline h-3.5 w-3.5" /> Close
    </button>
  </div>;
}

function filterByStatus(focused: { nodes: any[]; edges: any[] }, status: GraphStatusFilter, selectedId: string) {
  if (status === 'all') return focused;
  const nodes = focused.nodes.filter((node) => node.id === selectedId || (node.data?.studyStatus ?? 'new') === status);
  const ids = new Set(nodes.map((node) => node.id));
  return { nodes, edges: focused.edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target)) };
}
