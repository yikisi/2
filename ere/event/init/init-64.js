const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:64:301',
        era.get('flag:角色性别') === 1 ? '骏川先生' : '骏川小姐',
      );
    }
  }
};
