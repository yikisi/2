const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('flag:角色性别') === 1) {
        era.set('callname:68:301', '900112');
      } else {
        era.set('callname:68:301', '900111');
      }
    }
  }
};
