const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,number,string,string,EventObject):Promise<*>>} */
const handlers = {};

handlers[50] = require('#/event/love/love-events-52/50');

handlers[74] = require('#/event/love/love-events-52/74');

handlers.le49 = require('#/event/love/love-events-52/le49');

handlers.le74 = require('#/event/love/love-events-52/le74');

/**
 * 春乌拉拉 - 爱慕
 * @author 99
 *
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  const callname = sys_get_callname(52, 0),
    chara_self_name = sys_get_callname(52, 52),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    urara = get_chara_talk(52);
  let temp;
  if (
    (temp = handlers[event_object.arg] || handlers[`le${era.get('love:52')}`])
  ) {
    return await temp(
      me,
      urara,
      in_urara,
      relation,
      callname,
      chara_self_name,
      event_object,
    );
  }
  throw new Error();
};
