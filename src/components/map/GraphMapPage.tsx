import { useMemo, useState } from 'react';
import { Expand } from 'lucide-react';
import { GraphCanvas } from '../../features/knowledge-graph/components/GraphCanvas';
import { getFocusedMapElements } from './mapFocus';
import { MapDensityControl } from './MapDensityControl';
import { MapInspector } from './MapInspector';
import { MapPresetBar } from './MapPresetBar';
import { MapScopeControl } from './MapScopeControl';
import { MapStatusFilter, type GraphStatusFilter } from './MapStatusFilter';
import { MapReadabilityHint } from './MapReadabilityHint';
import { PhaseNavigator } from './PhaseNavigator';
import type { MapDensity, MapFocus, MapScope, MapSharedProps } from './mapTypes';

export function GraphMapPage(props: MapSharedProps & { onFullscreen: () => void; nextNodeId?: string }) {
  const [focus, setFocus] = useState<MapFocus>('all');
  const [density, setDensity] = useState<MapDensity>('standard');
  const [phaseId, setPhaseId] = useState<string | undefined>();
  const [scope, setScope] = useState<MapScope>('phase');
  const [hideWeak, setHideWeak] = useState(true);
  const [statusFilter, setStatusFilter] = useState<GraphStatusFilter>('all');
  const focused = useMemo(() => getFocusedMapElements(props.nodes, props.edges, focus, props.selectedNode.id, density, false, props.studyPath, phaseId, scope, hideWeak), [density, focus, phaseId, props.edges, props.nodes, props.selectedNode.id, props.studyPath, scope, hideWeak]);
  const statusFocused = useMemo(() => filterByStatus(focused, statusFilter, props.selectedNode.id), [focused, statusFilter, props.selectedNode.id]);

  return (
    <section className="grid gap-4 2xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="min-w-0 space-y-3">
        <section className="glass-panel rounded-[1.75rem] p-3" aria-label="V98R readable map controls">
          <div className="flex flex-col gap-3">
            <MapActions courseTitle={props.courseTitle} focus={focus} density={density} onDensity={setDensity} onFocus={setFocus} scope={scope} onScope={setScope} hideWeak={hideWeak} onHideWeak={setHideWeak} statusFilter={statusFilter} onStatusFilter={setStatusFilter} onFullscreen={props.onFullscreen} />
            <PhaseNavigator phases={props.studyPath} activePhase={phaseId} onPhase={setPhaseId} />
          </div>
        </section>
        <div className="relative">
          <GraphCanvas
            nodes={statusFocused.nodes}
            edges={statusFocused.edges}
            onSelectNode={props.onSelectNode}
            className="h-[calc(100vh-16rem)] min-h-[560px]"
            title={`${props.courseTitle} Visual Knowledge Map`}
            subtitle="V99R: control/phase nằm ngoài graph; click node để mở lesson chi tiết."
            readable
            nextNodeId={props.nextNodeId}
            actions={<button type="button" onClick={props.onFullscreen} aria-label="Open fullscreen knowledge map" className="pointer-events-auto rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"><Expand className="mr-1 inline h-3.5 w-3.5" /> Fullscreen</button>}
          />
        </div>
      </div>
      <div className="space-y-4">
        <MapReadabilityHint />
        <MapInspector {...props} />
      </div>
    </section>
  );
}

function MapActions({ courseTitle, focus, density, scope, hideWeak, onFocus, onDensity, onScope, onHideWeak, statusFilter, onStatusFilter, onFullscreen }: { courseTitle: string; focus: MapFocus; density: MapDensity; onFocus: (focus: MapFocus) => void; onDensity: (density: MapDensity) => void; scope: MapScope; hideWeak: boolean; onScope: (scope: MapScope) => void; onHideWeak: (value: boolean) => void; statusFilter: GraphStatusFilter; onStatusFilter: (value: GraphStatusFilter) => void; onFullscreen: () => void }) {
  return <div className="flex flex-wrap items-center gap-2">
    <MapPresetBar courseTitle={courseTitle} focus={focus} onFocus={onFocus} />
    <MapDensityControl density={density} onDensity={onDensity} />
    <MapScopeControl scope={scope} onScope={onScope} />
    <MapStatusFilter value={statusFilter} onValue={onStatusFilter} />
    <button type="button" aria-pressed={hideWeak} onClick={() => onHideWeak(!hideWeak)} className={`pointer-events-auto rounded-xl px-3 py-2 text-xs font-black shadow-sm transition hover:-translate-y-0.5 ${hideWeak ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300'}`}>Hide weak</button>
    <button type="button" onClick={onFullscreen} aria-label="Open fullscreen knowledge map" className="pointer-events-auto rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
      <Expand className="mr-1 inline h-3.5 w-3.5" /> Fullscreen
    </button>
  </div>;
}

function filterByStatus(focused: { nodes: any[]; edges: any[] }, status: GraphStatusFilter, selectedId: string) {
  if (status === 'all') return focused;
  const nodes = focused.nodes.filter((node) => node.id === selectedId || (node.data?.studyStatus ?? 'new') === status);
  const ids = new Set(nodes.map((node) => node.id));
  return { nodes, edges: focused.edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target)) };
}
