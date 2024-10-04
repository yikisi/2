const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (!is_reset) {
      init_chara(9017);
      era.set('relation:17:0', 152);
      era.set('callname:9017:0', '弄臣');
      era.set('relation:9017:0', -95);
      era.set('callname:9017:3', '皇子');
      era.set('relation:9017:3', 100);
      era.set('callname:9017:4', '怪物');
      era.set('relation:9017:4', 100);
      era.set('callname:9017:57', '天马');
      era.set('relation:9017:57', 100);
      era.set('callname:9017:70', '惑星');
      era.set('relation:9017:70', 0);
      era.set('callname:9017:73', '王子');
      era.set('relation:9017:73', 100);
      era.set('callname:9017:86', '至宝');
      era.set('relation:9017:86', 100);
      era.set('callname:9017:104', '王牌');
      era.set('relation:9017:104', 100);
    }
  }
};
