const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const { attr_names } = require('#/data/train-const');

module.exports = (is_reset) => {
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
    attr_names.forEach((e) => era.set(`base:301:${e}`, 1200));
  }
};
