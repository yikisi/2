const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(HookArg,*,EventObject):Promise>} */
const handlers = {};

handlers[
  event_hooks.train_success
] = require('#/event/edu/edu-events-56/train-success');

handlers[
  event_hooks.train_fail
] = require('#/event/edu/edu-events-56/train-fail');

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-56/week-start');

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-56/week-end');

handlers[
  event_hooks.office_study
] = require('#/event/edu/edu-events-56/office-study');

handlers[
  event_hooks.office_cook
] = require('#/event/edu/edu-events-56/office-cook');

handlers[
  event_hooks.office_game
] = require('#/event/edu/edu-events-56/office-game');

handlers[
  event_hooks.out_start
] = require('#/event/edu/edu-events-56/out-start');

handlers[
  event_hooks.race_start
] = require('#/event/edu/edu-events-56/race-start');

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-56/race-end');

handlers[
  event_hooks.crazy_fan_end
] = require('#/event/edu/edu-events-56/crazy-fan-end');

/**
 * 待兼福来 - 育成
 *
 * @author Alex
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
