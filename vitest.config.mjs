import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ereCheck } from 'vitest-ere-check/vitest';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [ereCheck({ gameRoot: '.', failOn: 'error' })],
  resolve: {
    alias: {
      '#': path.resolve(dirname, 'ere'),
    },
    conditions: ['require', 'import', 'node', 'default'],
  },
  test: {
    environment: 'node',
    setupFiles: ['test/setup.js'],
    include: ['test/**/*.{test,spec}.js'],
  },
});
