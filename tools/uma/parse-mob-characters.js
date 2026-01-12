const { writeFileSync } = require('fs');
const { join } = require('path');

const cy_mob = Object.values(require('../../common/text_data.json')[59]);
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

passer_bys.push(...cy_mob);

writeFileSync(
  join(__dirname, '../../ere/data/race/contestants/uma-mob.json'),
  JSON.stringify(passer_bys.filter((n, i, l) => i === l.indexOf(n))),
);

console.log('done!');
