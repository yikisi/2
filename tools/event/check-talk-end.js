const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const path = join(
  __dirname,
  '../../ere',
  'i18n/zh-CN/kojo/108901/base-89.kojo',
);

const content = readFileSync(path, 'utf-8').split('\n');

writeFileSync(
  path,
  content
    .map((l) => {
      if (/「[^」\n]+$/.test(l)) {
        return l + '」';
      }
      return l;
    })
    .join('\n'),
);
