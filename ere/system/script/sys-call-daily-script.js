const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const daily_common = require('#/event/daily/daily-common');
const daily_result = require('#/event/daily/daily-result');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/**
 * @param {number} chara_id
 * @param {number} hook
 * @param {any} [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_daily_event(chara_id, hook, extra_flag, event_object) {
  let override = false,
    ret;
  const hook_arg = new HookArg(hook);
  try {
    const { func, _extra } = get_aim_function('daily', chara_id, extra_flag);
    extra_flag = _extra;
    ret = await func.run(hook_arg, extra_flag, event_object);
    override = func.override || hook_arg.override;
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    ret = await daily_common(chara_id, hook_arg, extra_flag);
  }
  if (!override) {
    ret = (await daily_result(chara_id, hook_arg, extra_flag)) || ret;
  }
  await punish_by_yandere(chara_id, hook);
  return ret;
}

module.exports = sys_call_daily_event;
