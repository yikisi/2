const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const love_common = require('#/event/love/love-common');

/**
 * @param {number} chara_id
 * @param {number} hook
 * @param [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_love_event(chara_id, hook, extra_flag, event_object) {
  try {
    const { func, _extra } = get_aim_function('love', chara_id, extra_flag);
    extra_flag = _extra;
    return await func(hook, extra_flag, event_object);
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    return await love_common(chara_id, hook, extra_flag, event_object);
  }
}

module.exports = sys_call_love_event;
