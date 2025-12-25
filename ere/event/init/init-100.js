const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:100:301',
        // FLAGNAME:116 = 角色性别
        `${900111 + (era.get('flag:116') === 1)}`,
      );
    }
    era.set('item:斗魂注入鞭（S用）', 0);
  }
};
