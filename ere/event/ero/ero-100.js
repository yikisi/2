/**
 * @file 奇锐骏 - 调教
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_action_names } = require('#/data/event/ero-hooks');

/** @type {Record<string,function>} */
const handlers = {},
  sleeping_handlers = {};

[
  require('#/event/ero/ero-lines-100/ero-communications'),
  require('#/event/ero/ero-lines-100/ero-pettings-1'),
  require('#/event/ero/ero-lines-100/ero-pettings-2'),
  require('#/event/ero/ero-lines-100/ero-fuckings'),
  require('#/event/ero/ero-lines-100/ero-sm'),
  require('#/event/ero/ero-lines-100/ero-orgy'),
].forEach((f) => f(handlers));

[require('#/event/ero/ero-lines-100/ero-sleeping-communications')].forEach(
  (f) => f(sleeping_handlers),
);

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  if (ero_action_names[hook.hook]) {
    const { attacker, defender } = get_participants_and_first_action(
      100,
      hook,
      extra_flag,
    );
    let aim_handler = handlers[hook.hook];
    if (
      era.get('tflag:强奸') >= 0 ||
      (!sys_check_awake(defender) &&
        !(aim_handler = sleeping_handlers[hook.hook]))
    ) {
      throw new Error();
    }
    return await aim_handler(
      get_chara_talk(attacker),
      get_chara_talk(defender),
      hook,
      extra_flag,
    );
  }
  return await handlers[hook.hook](hook, extra_flag);
};
