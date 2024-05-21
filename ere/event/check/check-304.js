const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (get('cflag:304:招募状态') === -1) {
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
