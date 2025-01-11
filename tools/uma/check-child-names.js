const { readFileSync } = require('fs');

const name_data = require('../../ere/data/child-names.json');
const mob_names = require('../../ere/data/race/contestants/uma-mob.json');

const lines = readFileSync('../../common/uma/uma-data.csv', 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')
  .filter((e) => e)
  .map((e) => e.replace(/\s+$/, '').split(',')[2])
  .filter((e) => e);
lines.shift();

console.log('[check-child-names.js] Unusable names:');
let flag = true;
for (const m in name_data) {
  let list = name_data[m];
  if (!(list instanceof Array)) {
    continue;
  }
  const find = list.filter((e) => lines.indexOf(e) !== -1);
  if (find.length) {
    console.log(`\t${m} <-> ${find.join(', ')}`);
    flag = false;
  }
  const cont = list.filter((e) => mob_names.indexOf(e) !== -1);
  if (cont.length) {
    console.log(`\t${m} <-> ${cont.join(', ')}`);
    flag = false;
  }
}
if (flag) {
  console.log('\tnothing');
} else {
  process.exit(1);
}
