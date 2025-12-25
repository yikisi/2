const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { vehicle_enum } = require('#/data/move-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('cflag:0:模版角色') !== 64) {
        era.set('callname:0:64', '106411');
      }
      if (era.get('flag:角色性别') === 1) {
        era.set('callname:64:301', '900112');
        era.set('callname:64:64', '106403');
      } else {
        era.set('callname:64:301', '900111');
        era.set('callname:64:64', '106402');
      }
    }
    era.set('item:善信号', 0);
    if (era.get('flag:多人载具') === vehicle_enum.pama) {
      era.set('flag:多人载具', 0);
    }
  }
};
