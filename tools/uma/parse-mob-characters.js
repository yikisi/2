const { writeFileSync } = require('fs');
const { join } = require('path');

const mob = require('../../common/uma/uma-mob.json');

const passer_bys = [],
  blood = {};

mob.forEach((e) => {
  if (e['Bloodline']) {
    blood[e['Bloodline']] = e['ChineseName'];
  } else {
    passer_bys.push(e['ChineseName']);
  }
});

writeFileSync(
  join(__dirname, '../../ere/data/race/contestants/uma-mob.json'),
  JSON.stringify(passer_bys),
);

console.log('done!');
