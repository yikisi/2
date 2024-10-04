const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    sys_personal_achievement.get(206) && era.set('cflag:206:随机招募', 1);
  }
};
