const { writeFileSync } = require('fs');

const mob = require('./uma-mob.json');

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
  '../../ere/data/race/contestants/uma-mob.json',
  JSON.stringify(passer_bys),
);
