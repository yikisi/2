const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (sys_personal_achievement.get(302)) {
        new TasteLifeMarks().who_am_i = 1;
        era.set('callname:302:-1', '900202');
        era.set('callname:302:-2', '900201');
      }
      new Array(5)
        .fill(0)
        .forEach((_, i) => era.set(`base:302:${5 + i}`, 1200));
    }
  }
};
