const CustomizedCheck = require('#/event/check/check-common');

const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new SasamiLifeMarks().buff = 1;
    }
    return ret;
  }
};
