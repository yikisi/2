const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = (is_reset) => {
  if (!is_reset) {
    if (sys_personal_achievement.get(302)) {
      new TasteLifeMarks().who_am_i = 1;
      era.set('callname:302:-2', era.get('callname:302:-1'));
    }
  }
};
