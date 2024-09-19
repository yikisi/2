const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-1'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-2'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-3'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-4'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-5'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-6'),
].forEach((f) => f(week_start_handlers));

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (week_start_handlers[event_object.arg]) {
    const flags = { wait_flag: false };
    const ret = await week_start_handlers[event_object.arg](
      get_chara_talk(56),
      get_chara_talk(0),
      sys_get_callname(56, 0),
      flags,
      event_object,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};
