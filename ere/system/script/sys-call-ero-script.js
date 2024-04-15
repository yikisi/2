const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const ero_common = require('#/event/ero/ero-common');
const ero_result = require('#/event/ero/ero-result');

const HookArg = require('#/data/event/hook-arg');

/**
 * @param {number|string} id_or_alias
 * @param {number} hook
 * @param [extra_flag]
 */
async function sys_call_ero_event(id_or_alias, hook, extra_flag) {
  let override, ret;
  const hook_arg = new HookArg(hook);
  if (extra_flag?.shown !== false) {
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
