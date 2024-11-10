const { set } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      CustomizedInit.init_chara(17);
      set('callname:86:17', ['鲁铎', '露娜']);
    }
  }
};
