const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

module.exports = (is_reset) => {
  if (!is_reset) {
    if (sys_personal_achievement.get(301)) {
      new TokinoLifeMarks().who_am_i = 1;
      era.set('callname:301:-2', era.get('callname:301:-1'));
    }
  }
};
