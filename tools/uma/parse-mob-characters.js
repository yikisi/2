const { writeFileSync } = require('fs');

const mob = require('./uma-mob.json');

const passerbys = [],
  blood = {};

mob.forEach((e) => {
  if (e['Bloodline']) {
    blood[e['Bloodline']] = e['ChineseName'];
  } else {
    passerbys.push(e['ChineseName']);
  }
});

writeFileSync(
  '../../ere/data/race/contestants/uma-mob.json',
  JSON.stringify(passerbys),
);
