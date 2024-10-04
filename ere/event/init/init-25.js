const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (!is_reset) {
      init_chara(400);
      if (era.get('flag:角色性别') === 1) {
        era.set('callname:25:400', '宁静哥');
      } else {
        era.set('callname:25:400', '宁静姐');
      }
    }
  }
};
