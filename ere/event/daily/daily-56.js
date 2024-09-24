/**
 * @file 待兼福来 - 日常
 *
 * @author ALEX
 */
const event_hooks = require('#/data/event/event-hooks');

const handlers = {};

handlers[event_hooks.select] = require('#/event/daily/daily-events-56/select');

handlers[
  event_hooks.good_morning
] = require('#/event/daily/daily-events-56/good-morning');

handlers[
  event_hooks.good_night
] = require('#/event/daily/daily-events-56/good-night');

handlers[event_hooks.talk] = require('#/event/daily/daily-events-56/talk');

handlers[
  event_hooks.office_gift
] = require('#/event/daily/daily-events-56/office-gift');

handlers[
  event_hooks.office_cook
] = require('#/event/daily/daily-events-56/office-cook');

handlers[
  event_hooks.office_study
] = require('#/event/daily/daily-events-56/office-study');

handlers[
  event_hooks.office_rest
] = require('#/event/daily/daily-events-56/office-rest');

handlers[
  event_hooks.office_prepare
] = require('#/event/daily/daily-events-56/office-prepare');

handlers[
  event_hooks.office_game
] = require('#/event/daily/daily-events-56/office-game');

handlers[
  event_hooks.school_atrium
] = require('#/event/daily/daily-events-56/school-atrium');

handlers[
  event_hooks.school_rooftop
] = require('#/event/daily/daily-events-56/school-rooftop');

handlers[
  event_hooks.out_river
] = require('#/event/daily/daily-events-56/out-river');

handlers[
  event_hooks.out_shopping
] = require('#/event/daily/daily-events-56/out-shopping');

handlers[
  event_hooks.out_church
] = require('#/event/daily/daily-events-56/out-church');

handlers[
  event_hooks.out_station
] = require('#/event/daily/daily-events-56/out-station');

handlers[
  event_hooks.week_start
] = require('#/event/daily/daily-events-56/week-start');

handlers[
  event_hooks.load_talk
] = require('#/event/daily/daily-events-56/load-talk');

handlers[
  event_hooks.celebration
] = require('#/event/daily/daily-events-56/celebration');

module.exports = {
  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (
      (event_object && hook.hook !== event_hooks.week_start) ||
      !handlers[hook.hook]
    ) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[hook.hook](hook, extra_flag, event_object));
  },
};
