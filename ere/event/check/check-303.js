const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (get('flag:当前年') > 2000 && get('flag:当前回合数') % 48 === 4) {
      add_event(
        event_hooks.week_end,
        new EventObject(303, cb_enum.edu).set_arg('reward'),
      );
    }
    if (get('cflag:303:招募状态') === -1 && get('love:303') >= 25) {
      add_event(event_hooks.week_start, new EventObject(303, cb_enum.recruit));
    }
    super.check_next_week();
  }
};
