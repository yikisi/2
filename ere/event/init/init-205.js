const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = (is_reset) => {
  if (!is_reset) {
    add_event(event_hooks.week_start, new EventObject(205, cb_enum.recruit));
  }
};
