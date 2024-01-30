const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const edu_common = require('#/event/edu/edu-common');
const edu_result = require('#/event/edu/edu-result');

const HookArg = require('#/data/event/hook-arg');

/**
 * @param {number} chara_id
 * @param {number} stage_id
 * @param {any} [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_edu_event(
  chara_id,
  stage_id,
  extra_flag,
  event_object,
) {
  let override = false,
    ret;
  const hook = new HookArg(stage_id);
  try {
    const { func, _extra } = get_aim_function('edu', chara_id, extra_flag);
    extra_flag = _extra;
    ret = await func(hook, extra_flag, event_object);
    override = func.override || hook.override;
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    ret = await edu_common(chara_id, hook, extra_flag, event_object);
  }
  if (!override) {
    ret = (await edu_result(chara_id, hook, extra_flag)) || ret;
  }
  return ret;
}

module.exports = sys_call_edu_event;
