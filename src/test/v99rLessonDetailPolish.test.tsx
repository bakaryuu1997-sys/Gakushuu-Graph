import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { courses } from '../courses/courseRegistry';
import { pythonCourse } from '../courses/python';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';
import { buildV99LessonBlueprint } from '../courses/v99LessonBlueprint';

describe('V99R lesson detail polish', () => {
  it('creates full content coverage for every node in every course', () => {
    for (const course of courses) {
      expect(course.lessons.length).toBe(course.nodes.length);
      for (const node of course.nodes) {
        const lesson = course.lessons.find((item) => item.nodeId === node.id);
        expect(lesson).toBeTruthy();
        expect(lesson?.shortDefinitionVi).toContain('Khái niệm');
        expect(lesson?.whyImportantVi).toContain('Ví dụ');
        expect(lesson?.whyImportantVi).toContain('Trace');
        expect(lesson?.whyImportantVi).toContain('Bài tập');
        expect(lesson?.whyImportantVi).toContain('Expected output');
        expect((lesson?.whyImportantVi ?? '').length).toBeGreaterThan(220);
      }
    }
  });

  it('renders a real lesson page structure instead of only generic cards', () => {
    const node = pythonCourse.nodes.find((item) => /number|数値|variable|変数/i.test(`${item.id} ${item.labelJa} ${item.labelEn}`)) ?? pythonCourse.nodes[0];
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    expect(screen.getByText(/V99R Lesson Detail/i)).toBeTruthy();
    expect(screen.getByText(/1\. Khái niệm/i)).toBeTruthy();
    expect(screen.getAllByText(/2\. Ví dụ/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/3\. Trace từng bước/i)).toBeTruthy();
    expect(screen.getByText(/4\. Bài tập nhỏ/i)).toBeTruthy();
    expect(screen.getByText(/Expected output \/ bộ kiểm tra/i)).toBeTruthy();
    expect(screen.getByText(/5\. Quiz nhỏ/i)).toBeTruthy();
  });

  it('uses course-specific content, not one single template for all lessons', () => {
    const pythonNode = { ...pythonCourse.nodes[0], id: 'fastapi-dependency', labelVi: 'FastAPI dependency injection', labelEn: 'FastAPI dependency injection', labelJa: 'FastAPI dependency injection', keywords: ['FastAPI', 'Depends', 'dependency'] };
    const py = buildV99LessonBlueprint('python', pythonNode);
    expect(py.exampleTitle).toMatch(/FastAPI route/);

    const fundamental = courses.find((course) => course.id === 'fundamental-info')!;
    const sqlNode = fundamental.nodes.find((node) => /sql|join|database|table/i.test(`${node.id} ${node.labelEn} ${node.labelVi} ${node.keywords.join(' ')}`)) ?? fundamental.nodes[0];
    const fe = buildV99LessonBlueprint('fundamental-info', sqlNode);
    expect(fe.exampleTitle).toMatch(/SQL trace|Scenario FE|Pseudo-code|Subnet|Security/);

    const ai = courses.find((course) => course.id === 'ai-passport')!;
    const genNode = ai.nodes.find((node) => /generative|llm|rag|生成/i.test(`${node.id} ${node.labelEn} ${node.labelVi} ${node.keywords.join(' ')}`)) ?? ai.nodes[0];
    const aiBp = buildV99LessonBlueprint('ai-passport', genNode);
    expect(aiBp.exampleTitle).toMatch(/RAG|ML case|AI risk|AI business/);
  });
});
