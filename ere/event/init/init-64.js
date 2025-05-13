const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('flag:角色性别') === 1) {
        era.set('callname:64:301', '骏川先生');
        era.set('callname:64:64', '善信先生');
      } else {
        era.set('callname:64:301', '骏川小姐');
        era.set('callname:64:64', '善信小姐');
      }
    }
  }
};
