const CustomizedCheck = require('#/event/check/check-common');

const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new RyokaLifeMarks().buff = 1;
    }
    return ret;
  }
};
