const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_action_names } = require('#/data/event/ero-hooks');

const handlers = {};

[
  require('#/event/ero/ero-lines-100/ero-communications'),
  require('#/event/ero/ero-lines-100/ero-pettings'),
  require('#/event/ero/ero-lines-100/ero-fuckings'),
  require('#/event/ero/ero-lines-100/ero-sm'),
  require('#/event/ero/ero-lines-100/ero-orgy'),
].forEach((f) => f(handlers));

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
    if (era.get('tflag:强奸') >= 0 || !sys_check_awake(defender)) {
      throw new Error();
    }
    return await handlers[hook.hook](
      get_chara_talk(attacker),
      get_chara_talk(defender),
      hook,
      extra_flag,
    );
  }
  return await handlers[hook.hook](hook, extra_flag);
};
