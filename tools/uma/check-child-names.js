const { readFileSync } = require('fs');
const name_data = require('../../ere/data/child-names.json');

const lines = readFileSync('./uma-data.csv', 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')
  .filter((e) => e)
  .map((e) => e.replace(/\s+$/, '').split(',')[2])
  .filter((e) => e);
lines.shift();

console.log('Unusable names:');
let flag = true;
for (const m in name_data) {
  let list = name_data[m];
  if (!(list instanceof Array)) {
    continue;
  }
  const find = list.filter((e) => lines.indexOf(e) !== -1);
  if (find.length) {
    console.log(`${m} - ${find.join(', ')}`);
    flag = false;
  }
}
if (flag) {
  console.log('    nothing');
}
