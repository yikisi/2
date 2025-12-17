const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (sys_personal_achievement.get(301)) {
        new TokinoLifeMarks().who_am_i = 1;
        era.set('callname:301:-1', '丰收时刻');
        era.set('callname:301:-2', '骏川缰绳');
      } else {
        era.set(
          'callname:301:-2',
          `骏川${era.get('cflag:301:性别') === 1 ? '先生' : '小姐'}`,
        );
      }
      era.set(
        'callname:301:305',
        `安心泽${era.get('cflag:301:性别') === 1 ? '先生' : '小姐'}`,
      );
      new Array(5)
        .fill(0)
        .forEach((_, i) => era.set(`base:301:${5 + i}`, 1200));
    }
  }
};
