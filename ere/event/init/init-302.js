const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const { attr_names } = require('#/data/train-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (sys_personal_achievement.get(302)) {
        new TasteLifeMarks().who_am_i = 1;
        era.set('callname:302:-1', '北方风味');
        era.set('callname:302:-2', '秋川弥生');
      }
      attr_names.forEach((e) => era.set(`base:302:${e}`, 1200));
    }
  }
};
