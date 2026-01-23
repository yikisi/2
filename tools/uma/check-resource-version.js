const { execSync } = require('child_process');
const { join } = require('path');

const { res_version } = require('../../ere/versions');

const res_ver = String(
  execSync('git tag --sort=-creatordate | head -n 1', {
    cwd: join(__dirname, '../../res'),
  }),
).replace(/\s+$/g, '');

if (res_version !== res_ver) {
  console.warn('[check-resource-version.js] old resource version');
  process.exit(1);
}
