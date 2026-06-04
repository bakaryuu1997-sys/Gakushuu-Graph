import { describe, expect, it } from 'vitest';
import { v106ChaptersForCourse, v106ManualChapters, findV106ManualChapter } from '../courses/v106ManualChapterPack';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

function node(id: string, label: string, keywords: string[]): KnowledgeNodeData {
  return {
    id,
    labelJa: label,
    labelVi: label,
    labelEn: label,
    category: 'technology',
    importance: 'high',
    keywords,
    description: label,
    examPoint: label,
  } as unknown as KnowledgeNodeData;
}

describe('V106 manual chapter expansion', () => {
  it('expands manual chapters to 30+ across core courses', () => {
    expect(v106ManualChapters.length).toBeGreaterThanOrEqual(30);
    expect(v106ChaptersForCourse('python').length).toBeGreaterThanOrEqual(10);
    expect(v106ChaptersForCourse('fundamental-info').length).toBeGreaterThanOrEqual(8);
    expect(v106ChaptersForCourse('ai-passport').length).toBeGreaterThanOrEqual(8);
  });

  it('includes long handwritten learning blocks for every V106 chapter', () => {
    const v106Only = v106ManualChapters.filter((chapter) => chapter.id.startsWith('v106-'));
    expect(v106Only.length).toBeGreaterThanOrEqual(23);
    for (const chapter of v106Only) {
      expect(chapter.conceptVi.length).toBeGreaterThanOrEqual(4);
      expect(chapter.walkthroughVi.length).toBeGreaterThanOrEqual(5);
      expect(chapter.mistakesVi.length).toBeGreaterThanOrEqual(3);
      expect(chapter.studyChecklistVi.length).toBeGreaterThanOrEqual(4);
      expect(chapter.deepExampleBody.length).toBeGreaterThanOrEqual(80);
      expect(chapter.whyItMattersVi.length).toBeGreaterThan(100);
    }
  });

  it('maps new requested topics to specific chapters before generic fallback', () => {
    expect(findV106ManualChapter('python', node('python-pathlib-json', 'Pathlib JSON file', ['pathlib', 'json']))?.id).toBe('v106-python-file-pathlib');
    expect(findV106ManualChapter('python', node('fastapi-dependency', 'FastAPI Depends service', ['dependency', 'fastapi']))?.id).toBe('v106-python-fastapi-di');
    expect(findV106ManualChapter('fundamental-info', node('sql-left-join', 'SQL LEFT JOIN GROUP BY', ['sql', 'join']))?.id).toBe('v106-fe-sql-join');
    expect(findV106ManualChapter('fundamental-info', node('cidr-subnet', 'CIDR subnet host', ['subnet']))?.id).toBe('v106-fe-network-subnet');
    expect(findV106ManualChapter('ai-passport', node('ai-governance', 'AI governance monitoring drift', ['governance', 'monitoring']))?.id).toBe('v106-ai-governance-monitoring');
    expect(findV106ManualChapter('ai-passport', node('ai-privacy', 'AI privacy PII consent', ['privacy', 'pii']))?.id).toBe('v106-ai-ethics-privacy');
  });
});
