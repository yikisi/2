const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    CustomizedInit.init_chara(23);
    CustomizedInit.init_chara(35);
  }
};
