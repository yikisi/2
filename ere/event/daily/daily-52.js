const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(HookArg,Record<string,*>):(Promise<boolean|void>|void)>} */
const handlers = {};

handlers[event_hooks.select] = require('#/event/daily/daily-events-52/select');

handlers[
  event_hooks.good_morning
] = require('#/event/daily/daily-events-52/good-morning');

handlers[
  event_hooks.good_night
] = require('#/event/daily/daily-events-52/good-night');

/**
 * 春乌拉拉 - 日常，id=52
 *
 * @author 99
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return (await handlers[stage_id.hook](stage_id, extra_flag)) !== undefined;
  },
};
