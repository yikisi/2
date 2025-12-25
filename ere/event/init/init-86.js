const { set } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      CustomizedInit.init_chara(13);
      CustomizedInit.init_chara(27);
      CustomizedInit.init_chara(59);
      CustomizedInit.init_chara(64);
      CustomizedInit.init_chara(71);
      CustomizedInit.init_chara(74);
      CustomizedInit.init_chara(17);
      set('callname:86:17', ['101712', '101702']);
    }
  }
};
