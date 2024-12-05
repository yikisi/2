const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      CustomizedInit.init_chara(9017);
      era.set('callname:9017:0', '弄臣');
      era.set('relation:9017:0', -95);
    }
  }
};
