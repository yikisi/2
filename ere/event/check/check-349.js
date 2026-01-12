const { sys_get_billings } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');

const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const life_marks = new BryneLifeMarks();
    const _old = life_marks.buff;
    const ret = super.check_and_get_titles(aim_check);
    if (life_marks.buff > _old) {
      const invest = sys_get_billings().find((e) => e.creditor === 2);
      if (invest !== undefined) {
        invest.repay = life_marks.funds / 25;
      }
    }
    return ret;
  }
};
