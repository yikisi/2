/**
 * @file 中山庆典 - 育成
 * 只进行成就判定，无文本
 */
const FestaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-49');
const event_hooks = require('#/data/event/event-hooks');

const handlers = {};

handlers[event_hooks.train_fail] = async () => {
  const event_marks = new FestaEduMarks();
  event_marks.train_fail++;
  throw new Error();
};

/**
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
