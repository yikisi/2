const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (sys_personal_achievement.get(343)) {
        new MayLifeMarks().who_am_i = 2;
        era.set('callname:343:-2', era.get('callname:343:-1'));
      } else {
        era.set(
          'callname:343:-2',
          `佐岳${era.get('cflag:343:性别') === 1 ? '先生' : '小姐'}`,
        );
      }
      new Array(5).fill(0).forEach((_, i) => era.set(`base:343:${5 + i}`, 800));
    }
  }
};
