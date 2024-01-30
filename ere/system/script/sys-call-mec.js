const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');

const mec_common = require('#/event/mec/mec-common');

/**
 * mechanism script caller
 *
 * @param {number} chara_id
 * @param {number} stage_id
 * @param [extra_flag]
 */
function sys_call_mec(chara_id, stage_id, extra_flag) {
  try {
    const { func, _extra } = get_aim_function('mec', chara_id, extra_flag);
    return func(stage_id, _extra);
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
    return mec_common(chara_id, stage_id, extra_flag);
  }
}

module.exports = sys_call_mec;
