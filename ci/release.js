const { readFileSync, writeFileSync } = require('fs');

const content = readFileSync('./RELEASE.md', 'utf-8')
  .replace(/^\uffef/, '')
  .split('\n');

let count = 0;

const index = content.findIndex((l) => {
  const c = l.replace(/\s+$/, '');
  return !!(c && count++ === 2);
});

writeFileSync('./temp.md', content.slice(index).join('\n'));
