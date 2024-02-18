const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { add_event } = require('#/event/queue');
const event_queue = require('#/event/queue');

const chara_talk = new CharaTalk(52);
const chara_colors = require('#/data/chara-colors').chara_colors[52];

/**
 * @type {Record<string,function(hook:HookArg,extra_flag:*,event_object:EventObject):Promise<*>>}
 */
const handlers = {};
handlers[event_hooks.week_start] = async (_, __, event_obj) => {
  const loop = new UraraEduMarks().loop;
  switch (loop) {
    case 2:
      await CharaTalk.me.say_and_wait('诶？');
      break;
    case 3:
      await CharaTalk.me.say_and_wait('时间，在循环？');
      break;
    case 4:
      await CharaTalk.me.say_and_wait('是你吗……乌拉拉？');
  }
  if (loop < 4) {
    await era.saveData(52);
  }
  if (loop <= 4) {
    add_event(event_hooks.week_end, event_obj);
  }
};

handlers[event_hooks.week_end] = async (_, __, event_obj) => {
  const event_marks = new UraraEduMarks();
  switch (event_marks.loop) {
    case 1:
      await era.printAndWait('？？？「……」', { color: chara_colors[1] });
      break;
    case 2:
      await era.printAndWait('？？？「我……」', { color: chara_colors[1] });
      break;
    case 3:
      await era.printAndWait('？？？「对不起……」', { color: chara_colors[1] });
      break;
    case 4:
      await chara_talk.say_and_wait('对不起……训练员……');
  }
  if (event_marks.loop < 4) {
    await era.loadData(52);
    era.loadGlobal();
    event_queue.init();
    CharaTalk.me = new CharaTalk(0);
    new UraraEduMarks().loop++;
    add_event(event_hooks.week_start, event_obj);
    return true;
  }
};

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
