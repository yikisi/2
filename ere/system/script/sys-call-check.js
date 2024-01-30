const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const check_common = require('#/event/check/check-common');

const check_stages = require('#/data/event/check-stages');

/**
 * checking script caller
 *
 * @param {number} chara_id
 * @param {number} stage_id
 * @param [extra_flag]
 */
function sys_call_check(chara_id, stage_id, extra_flag) {
  if (stage_id === check_stages.love_event) {
    era.set(`cflag:${chara_id}:爱慕暂拒`, 0);
  }
  try {
    const { func, _extra } = get_aim_function('check', chara_id, extra_flag);
    return func(stage_id, _extra);
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    return check_common(chara_id, stage_id, extra_flag);
  }
}

module.exports = sys_call_check;
