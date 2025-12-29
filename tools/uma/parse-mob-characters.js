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
  join(__dirname, '../../ere/i18n/zh-CN/race/uma-mob.json'),
  JSON.stringify(passer_bys.filter((n, i, l) => i === l.indexOf(n))),
);

const jp_text = require('../../common/i18n/ja-JP/text_data.json');
writeFileSync(
  join(__dirname, '../../ere/i18n/ja-JP/race/uma-mob.json'),
  JSON.stringify(
    Object.values(jp_text[59]).filter(
      (n) =>
        !n.startsWith('UM_') &&
        !n.startsWith('中編用架空ウマ娘') &&
        !n.startsWith('ウマ娘_') &&
        !n.endsWith('ウマ娘'),
    ),
  ),
);

console.log('done!');
