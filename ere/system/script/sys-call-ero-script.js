const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const ero_common = require('#/event/ero/ero-common');
const ero_result = require('#/event/ero/ero-result');
const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_action_names } = require('#/data/event/ero-hooks');
const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} */
const handlers = {};
/** @type {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} */
const sleeping_handlers = {};

const current = new Date().getTime();

[
  require('#/event/ero/common-lines/action-descriptions/desc-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-pettings'),
  require('#/event/ero/common-lines/action-descriptions/desc-fuckings'),
  require('#/event/ero/common-lines/action-descriptions/desc-orgy-fuckings'),
  require('#/event/ero/common-lines/action-descriptions/desc-orgy-pettings'),
  require('#/event/ero/common-lines/action-descriptions/desc-sm'),
  require('#/event/ero/common-lines/action-descriptions/desc-items'),
].forEach((f) => f(handlers));

[
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-fuckings'),
].forEach((f) => f(sleeping_handlers));

console.log(
  '[sys-call-ero-script.js] ero common description handlers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number|string} id_or_alias
 * @param {number} hook
 * @param [extra_flag]
 */
async function sys_call_ero_event(id_or_alias, hook, extra_flag) {
  let override, ret;
  const hook_arg = new HookArg(hook);
  if (extra_flag?.shown !== false) {
    if (ero_action_names[hook]) {
      const { attacker, defender } = get_participants_and_first_action(
        id_or_alias,
        hook_arg,
        extra_flag,
      );
      if (!sys_check_awake(defender) && sleeping_handlers[hook]) {
        await sleeping_handlers[hook](
          get_chara_talk(attacker),
          get_chara_talk(defender),
          hook_arg,
          extra_flag,
        );
      } else if (handlers[hook]) {
        await handlers[hook](
          get_chara_talk(attacker),
          get_chara_talk(defender),
          hook_arg,
          extra_flag,
        );
      }
    }
    try {
      const { func, _extra } = get_aim_function('ero', id_or_alias, extra_flag);
      extra_flag = _extra;
      ret = await func(hook_arg, extra_flag);
      override = func.override || hook_arg.override;
    } catch (e) {
      if (e.message && !e.message.startsWith('unsupported')) {
        era.logger.error(e.message, e.stack);
      }
      ret = await ero_common(id_or_alias, hook_arg, extra_flag || {});
      override = hook_arg.override;
    }
  }
  if (!override && typeof id_or_alias === 'number') {
    ret = (await ero_result(id_or_alias, hook_arg, extra_flag || {})) || ret;
  }
  return ret;
}

module.exports = sys_call_ero_event;
