const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (!is_reset) {
      if (era.get('flag:角色性别') === 1) {
        init_chara(90);
        era.set('callname:0:90', '哥哥');
      }
    }
  }
};
