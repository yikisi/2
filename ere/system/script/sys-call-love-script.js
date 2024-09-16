const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const love_common = require('#/event/love/love-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

/**
 * @param {number} chara_id
 * @param {number} hook
 * @param [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_love_event(chara_id, hook, extra_flag, event_object) {
  let ret;
  try {
    const { func, _extra } = get_aim_function('love', chara_id, extra_flag);
    extra_flag = _extra;
    ret = await func(hook, extra_flag, event_object);
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    ret = await love_common(chara_id, hook, extra_flag, event_object);
  }
  await punish_by_yandere(chara_id, hook);
  return ret;
}

module.exports = sys_call_love_event;
