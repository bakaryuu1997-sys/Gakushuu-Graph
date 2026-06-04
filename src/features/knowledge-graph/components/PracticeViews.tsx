import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { AiPassportPracticeView } from "./AiPassportPracticeView";
import { BrsePhraseBankView } from "./BrsePhraseBankView";
import { BrsePracticeView } from "./BrsePracticeView";
import { BrseRoleplayView } from "./BrseRoleplayView";
import { BrseTemplatePackView } from "./BrseTemplatePackView";
import { FrontendPracticeView } from "./FrontendPracticeView";
import { ProjectLearningView } from "./ProjectLearningView";
import { SqlPracticeView } from "./SqlPracticeView";
import { SqlProjectLearningView } from "./SqlProjectLearningView";

export function PracticeView(props: Props) {
  if (props.courseTitle.includes("SQL"))
    return <SqlPracticeView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />;
  if (props.courseTitle.includes("Frontend"))
    return <FrontendPracticeView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />;
  if (props.courseTitle.includes("BrSE"))
    return <BrsePracticeView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />;
  return <AiPassportPracticeView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />;
}

export function ProjectView(props: Props) {
  return props.courseTitle.includes("SQL") ? (
    <SqlProjectLearningView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />
  ) : (
    <ProjectLearningView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />
  );
}

export function BrsePhraseView() {
  return <BrsePhraseBankView />;
}

export function BrseTemplateView() {
  return <BrseTemplatePackView />;
}

export function BrseRoleplay(props: Props) {
  return <BrseRoleplayView language={props.language} nodes={props.nodes} onSelectNode={props.onSelectNode} />;
}
