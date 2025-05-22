const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = class extends CustomizedCheck {
  check_love_events() {
    add_event(
      event_hooks.week_end,
      new EventObject(17, cb_enum.love).set_arg([era.get(`love:${this.id}`)]),
    );
  }

  is_prison() {
    return false;
  }

  is_rape_in_sleeping() {
    return false;
  }

  is_want_make_love() {
    return 0;
  }
};
