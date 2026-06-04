import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';
export const linuxStudyPath:StudyPathPhase[]=[
  {id:'linux-path-1',titleVi:'Terminal cơ bản',titleJa:'Terminal Basic',goalVi:'pwd, ls, cd, path, file command.',goalJa:'pwd, ls, cd, path, file command.',nodeIds:['linux','shell','terminal','pwd','ls','cd','path','mkdir','touch','cp','mv','rm','cat','less','head-tail']},
  {id:'linux-path-2',titleVi:'Search / Pipe',titleJa:'Search and Pipe',goalVi:'grep, find, pipe, redirect.',goalJa:'grep, find, pipe, redirect.',nodeIds:['grep','find','pipe','redirect']},
  {id:'linux-path-3',titleVi:'Permission / Process',titleJa:'Permission and Process',goalVi:'chmod, chown, ps, kill, systemctl, logs.',goalJa:'chmod, chown, ps, kill, systemctl, logs.',nodeIds:['chmod','permission','chown','sudo','ps','top','kill','systemctl','journalctl']},
  {id:'linux-path-4',titleVi:'Network / Package',titleJa:'Network and Package',goalVi:'ssh, scp, curl, apt, env.',goalJa:'ssh, scp, curl, apt, env.',nodeIds:['ssh','scp','curl','wget','apt','env','which','tar']},
  {id:'linux-path-5',titleVi:'Docker / Git',titleJa:'Docker and Git',goalVi:'docker ps/logs/compose, git workflow.',goalJa:'docker ps/logs/compose, git workflow.',nodeIds:['docker','docker-ps','docker-logs','docker-compose','git','git-status','git-branch','git-commit','git-pull-push']},
];
