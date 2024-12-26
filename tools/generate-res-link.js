const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const res = Number(readFileSync(resolve('./.res-min-version'), 'utf-8'));
let version = res / 1000;
if (version % 1 === 0) {
  version = res.toFixed(1);
}

writeFileSync(
  resolve('public/res.html'),
  `<meta http-equiv="refresh" content="3; url= ${process.argv[2].replace('_VERSION_', version)}">`,
);
