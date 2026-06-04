import { describe, expect, it } from 'vitest';
import { pythonMiniProjects } from '../courses/python/projectPortfolio';
import { detectFastApiProjectType, validateFastApiProject } from '../features/knowledge-graph/components/fastApiProjectValidator';

describe('V71R Python project runner and FastAPI validator', () => {
  it('expands mini projects and keeps VI/JA learning content', () => {
    expect(pythonMiniProjects.length).toBeGreaterThanOrEqual(11);
    expect(pythonMiniProjects.filter((item) => item.kind === 'fastapi' || item.kind === 'ai-api').length).toBeGreaterThanOrEqual(4);
    for (const project of pythonMiniProjects) {
      expect(project.requirementsVi.length).toBeGreaterThan(0);
      expect(project.requirementsJa.length).toBeGreaterThan(0);
      expect(project.starterCode.length).toBeGreaterThan(10);
      expect(project.testCases.length).toBeGreaterThan(0);
      expect(project.explanationVi.length).toBeGreaterThan(20);
      expect(project.explanationJa.length).toBeGreaterThan(10);
    }
  });

  it('detects FastAPI project types', () => {
    expect(detectFastApiProjectType("@app.post('/todos')\ndef create(): return {}" )).toBe('todo');
    expect(detectFastApiProjectType("@app.post('/submit')\ndef submit(): return {'score': 1}" )).toBe('quiz');
    expect(detectFastApiProjectType("@app.post('/ask')\ndef ask(): return {'answer':'a','sources':[]}" )).toBe('rag');
    expect(detectFastApiProjectType("@app.post('/predict')\ndef predict(): return {'confidence':.9}" )).toBe('predict');
  });

  it('scores a strong FastAPI Todo design highly', () => {
    const result = validateFastApiProject(`
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
app = FastAPI()
class TodoCreate(BaseModel):
    title: str

def create_todo(todo):
    return {'id': 1, 'title': todo.title}
@app.get('/todos')
def list_todos():
    return {'todos': []}
@app.post('/todos')
def create(todo: TodoCreate):
    return create_todo(todo)
`);
    expect(result.projectType).toBe('todo');
    expect(result.score).toBeGreaterThanOrEqual(80);
    expect(result.rows.some((row) => row.label.includes('BaseModel') && row.ok)).toBe(true);
  });
});
