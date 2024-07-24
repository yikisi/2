const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (get('flag:当前回合数') % 48 === 9 && get('flag:初见重复育成') > 0) {
      add_event(
        event_hooks.week_end,
        new EventObject(0, cb_enum.edu).set_arg('second_chance'),
      );
    }
  }
};
