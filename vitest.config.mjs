import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
