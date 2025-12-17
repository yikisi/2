const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      // CFLAGNAME:66 = 招募状态
      sys_personal_achievement.get(204) && era.set('cflag:204:66', -1);
      new Array(5)
        .fill(0)
        .forEach((_, i) => era.set(`base:204:${5 + i}`, 1200));
    }
  }
};
