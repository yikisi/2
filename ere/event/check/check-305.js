const { get, set } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    const temp = set('cflag:305:招募状态', get('cflag:305:招募状态') || [0, 0]);
    if (temp !== recruit_flags.yes) {
      if (temp.findIndex((e) => e < 3) === -1) {
        add_event(
          event_hooks.week_start,
          new EventObject(305, cb_enum.recruit),
        );
      } else if (get('cflag:202:育成回合计时') === 48 * 3) {
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.daily).set_arg('fail'),
        );
      }
    }
    super.check_next_week();
  }
};
