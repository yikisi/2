import Module from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// `ere/**` is CommonJS and is loaded through Node's real require, so we redirect
// the i18n entry modules to inert stubs. Without this, `#/i18n/selector` pulls
// in the whole `.kojo` script graph, which plain Node cannot parse.
const stub_modules = {
  '#/era-electron': path.join(root, 'test/stubs/era-electron.js'),
  '#/i18n/selector': path.join(root, 'test/stubs/i18n-selector.js'),
  '#/i18n/extended-def': path.join(root, 'test/stubs/i18n-extended-def.js'),
  '#/utils/chara-talk-factory': path.join(
    root,
    'test/stubs/chara-talk-factory.js',
  ),
};

const original_resolve_filename = Module._resolveFilename;

Module._resolveFilename = function (request, ...rest) {
  if (typeof request === 'string') {
    if (stub_modules[request]) {
      return original_resolve_filename.call(
        this,
        stub_modules[request],
        ...rest,
      );
    }
    if (request === '#' || request.startsWith('#/')) {
      request = path.join(root, 'ere', request.slice(request === '#' ? 1 : 2));
    }
  }
  return original_resolve_filename.call(this, request, ...rest);
};
