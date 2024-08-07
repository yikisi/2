const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const edu_common = require('#/event/edu/edu-common');
const edu_result = require('#/event/edu/edu-result');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/**
 * @param {number} chara_id
 * @param {number} hook
 * @param {any} [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_edu_event(chara_id, hook, extra_flag, event_object) {
  let override = false,
    ret;
  const hook_arg = new HookArg(hook);
  try {
    const { func, _extra } = get_aim_function('edu', chara_id, extra_flag);
    extra_flag = _extra;
    ret = await func(hook_arg, extra_flag, event_object);
    override = func.override || hook_arg.override;
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    ret = await edu_common(chara_id, hook_arg, extra_flag, event_object);
  }
  if (!override) {
    ret = (await edu_result(chara_id, hook_arg, extra_flag)) || ret;
  }
  await punish_by_yandere(chara_id, hook);
  return ret;
}

module.exports = sys_call_edu_event;
