const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const { attr_names } = require('#/data/train-const');
const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      sys_personal_achievement.get(204) && era.set('cflag:204:招募状态', -1);
      attr_names.forEach((e) => era.set(`base:204:${e}`, 1200));
    }
  }
};
