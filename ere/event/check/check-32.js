const { add_event, cb_enum } = require('#/event/queue');

const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

const handlers = {};

handlers[check_stages.after_punish] = () => {
  add_event(event_hooks.week_start, new EventObject(32, cb_enum.daily));
};

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
