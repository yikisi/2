const era = require('#/era-electron');

const { init_chara } = require('#/system/sys-init-chara');

module.exports = (is_reset) => {
  if (!is_reset) {
    init_chara(9017);
    era.set('relation:17:0', 152);
    era.set('love:17', 40);
    era.set('relation:9017:0', -95);
  }
  era.set('callname:9017:3', '皇子');
  era.set('relation:9017:3', 475);
  era.set('callname:9017:4', '怪物');
  era.set('relation:9017:4', 500);
  era.set('callname:9017:57', '天马');
  era.set('relation:9017:57', 500);
  era.set('callname:9017:70', '天狼星');
  era.set('relation:9017:70', 400);
  era.set('callname:9017:73', '王子');
  era.set('relation:9017:73', 475);
  era.set('callname:9017:86', '至宝');
  era.set('relation:9017:86', 525);
};
