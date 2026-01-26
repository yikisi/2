const { sys_get_billings } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');

const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');
const { creditors } = require('#/data/other-const');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      const life_marks = new BryneLifeMarks();
      life_marks.buff = 1;
      const invest = sys_get_billings().find(
        (e) => e.creditor === creditors.invest,
      );
      if (invest !== void 0) {
        invest.repay = life_marks.funds / (500 - 300);
      }
    }
    return ret;
  }
};
