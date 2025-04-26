const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const AoiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-304');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new AoiLifeMarks().buff = 1;
    }
    return ret;
  }

  check_next_week() {
    if (get('cflag:304:招募状态') === -3) {
      add_event(event_hooks.week_start, new EventObject(304, cb_enum.recruit));
    } else if (
      get('cflag:304:招募状态') !== recruit_flags.yes &&
      get('cflag:201:育成回合计时') === 3 * 48
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('fail'),
      );
    }
    super.check_next_week();
  }
};
