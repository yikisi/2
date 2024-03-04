const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { add_event } = require('#/event/queue');
const event_queue = require('#/event/queue');

const chara_talk = new CharaTalk(52);
const chara_colors = require('#/data/chara-colors').chara_colors[52];

/**
 * @type {Record<string,function(HookArg,*,EventObject):Promise<*>>}
 */
const handlers = {};

/**
 * 春乌拉拉的育成事件
 *
 * @author 99
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
