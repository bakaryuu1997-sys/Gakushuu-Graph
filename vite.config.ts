import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const aiChunkName = (id: string) => {
  if (!id.includes('src/courses/ai-passport/')) return null;
  if (id.includes('aiPassportSupplemental')) return 'ai-supplemental-data';
  if (id.includes('/domain/') || id.includes('aiPassportV42')) return 'ai-domain-data';
  if (id.includes('aiPassportV39') || id.includes('aiPassportV40') || id.includes('aiPassportV41')) return 'ai-exam-scenario-data';
  if (id.includes('aiPassportTop100') || id.includes('aiPassportUniversal')) return 'ai-top100-data';
  if (id.includes('aiPassportDeep') || id.includes('aiPassportExpert') || id.includes('aiPassportV35') || id.includes('aiPassportV46')) return 'ai-lesson-depth-data';
  if (id.includes('aiPassportJapanese') || id.includes('aiPassportHard') || id.includes('aiPassportQuiz')) return 'ai-quiz-data';
  if (id.includes('aiPassportGlossary') || id.includes('aiPassportComparisons')) return 'ai-reference-data';
  return 'ai-course-core-data';
};

const appChunkName = (id: string) => {
  const ai = aiChunkName(id);
  if (ai) return ai;
  if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react';
  if (id.includes('@xyflow') || id.includes('html-to-image')) return 'graph';
  if (id.includes('lucide-react')) return 'icons';
  if (id.includes('src/features/knowledge-graph/data/')) return 'it-course-data';
  if (id.includes('src/courses/')) return 'course-registry';
  return null;
};

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        codeSplitting: {
          includeDependenciesRecursively: false,
          minSize: 1,
          groups: [
            {
              name: appChunkName,
              test: (id: string) => appChunkName(id) !== null,
            },
          ],
        },
      },
    },
  },
});
