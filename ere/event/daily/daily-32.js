const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean|void>>} */
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/daily/daily-events-32/punishment');

/**
 * 速子的日常事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 * @author 黑奴队长（修订）
 */
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
    return !!(await handlers[hook.hook](hook, extra_flag));
  },
};
