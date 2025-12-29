const { readFileSync } = require('fs');
const { join } = require('path');

const name_data = require('../../common/uma/child-names.json');
const mob_names = require('../../ere/i18n/zh-CN/race/uma-mob.json');

const lines = readFileSync(
  join(__dirname, '../../common/uma/uma-data.csv'),
  'utf-8',
)
  .replace(/^\uFEFF/, '')
  .split('\n')
  .filter((e) => e)
  .map((e) => e.replace(/\s+$/, '').split(',')[2])
  .filter((e) => e);
lines.shift();

const children = {};

console.log('[check-child-names.js] Unusable names:');
let flag = true;
for (const m in name_data) {
  let list = name_data[m];
  if (!(list instanceof Array)) {
    continue;
  }
  list.forEach((e) => {
    if (children[e]) {
      console.log(`\t${e}: ${children[e]} <-> ${m} (duplicate)`);
      flag = false;
    } else {
      children[e] = m;
    }
  });
  const find = list.filter((e) => lines.indexOf(e) !== -1);
  if (find.length) {
    console.log(`\t${m}: [${find.join(', ')}] (conflict)`);
    flag = false;
  }
  const cont = list.filter((e) => mob_names.indexOf(e) !== -1);
  if (cont.length) {
    console.log(`\t${m}: [${cont.join(', ')}] (mob)`);
    flag = false;
  }
}
if (flag) {
  console.log('\tnone');
} else {
  // eslint-disable-next-line n/no-process-exit
  process.exit(1);
}
