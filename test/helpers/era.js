import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Same Node module instance that the redirected `#/era-electron` resolutions
// inside `ere/**` use, so seeding here drives the modules under test.
const era = require('../stubs/era-electron.js');

export default era;
