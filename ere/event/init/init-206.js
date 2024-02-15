const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

module.exports = (is_reset) => {
  if (!is_reset) {
    sys_personal_achievement.get(206) && era.set('cflag:206:随机招募', 1);
  }
};
