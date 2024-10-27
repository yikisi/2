const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (is_reset) {
      era.set('item:斗魂注入鞭（S用）', 0);
    }
  }
};
