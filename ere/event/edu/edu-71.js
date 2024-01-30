const ArdanEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-71');
const event_hooks = require('#/data/event/event-hooks');

const handlers = {};

handlers[event_hooks.train_fail] = async () => {
  const event_marks = new ArdanEventMarks();
  event_marks.train_fail++;
  throw new Error();
};

/**
 * 目白阿尔丹育成
 * 只进行成就判定，无文本
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
