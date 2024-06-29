const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string)>} */
const handlers = {};

[
  require('#/event/love/love-events-85/lust'),
  require('#/event/love/love-events-85/girl-friend-1'),
  require('#/event/love/love-events-85/girl-friend-2'),
  require('#/event/love/love-events-85/wife'),
  require('#/event/love/love-events-85/half-life'),
  require('#/event/love/love-events-85/others'),
].forEach((f) => f(handlers));

/**
 * 第一红宝石 - 爱慕
 *
 * @author 梦露
 */
module.exports = async (hook, _, event_object) => {
  const me = get_chara_talk(0),
    ruby = get_chara_talk(85);
  if (
    me.sex_code !== 1 ||
    ruby.sex_code !== 0 ||
    !handlers[event_object?.arg]
  ) {
    throw new Error();
  }
  const pregnant_cache = era.get('cflag:85:妊娠阶段'),
    ret = await handlers[event_object.arg](
      get_chara_talk(85),
      get_chara_talk(0),
      sys_get_callname(85, 0),
      sys_get_callname(0, 85),
    );
  if (pregnant_cache === 1 << pregnant_stage_enum.no) {
    era.set('cflag:85:妊娠阶段', 1 << pregnant_stage_enum.no);
  }
  return ret;
};
