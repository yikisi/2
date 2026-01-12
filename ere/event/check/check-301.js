const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new TokinoLifeMarks().buff = 1;
    }
    return ret;
  }

  check_next_week() {
    const life_marks = new TokinoLifeMarks();
    if (
      get('flag:回合爱慕惩罚') > 0 &&
      get('love:301') >= 50 &&
      life_marks.who_am_i < 2
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(301, cb_enum.love, true).set_arg(49),
      );
    }
    if (life_marks.shadow > 0) {
      if (
        get('cflag:10:招募状态') === recruit_flags.yes ||
        get('cflag:301:招募状态') === recruit_flags.yes
      ) {
        life_marks.shadow = 0;
      } else if (--life_marks.shadow === 0) {
        if (get('cflag:0:位置') > 0) {
          life_marks.shadow = 1;
        } else {
          add_event(
            event_hooks.week_start,
            new EventObject(301, cb_enum.edu).set_arg('shadow'),
          );
        }
      }
    }
    super.check_next_week();
  }
};
