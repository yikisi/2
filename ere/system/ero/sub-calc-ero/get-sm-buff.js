const era = require('#/era-electron');

/**
 * @param {number} chara_id
 * @param {boolean} [is_masochism]
 * @returns {number}
 */
function get_sm_buff(chara_id, is_masochism) {
  if (
    !era.get(`status:${chara_id}:沉睡`) &&
    !era.get(`status:${chara_id}:马跳S`) &&
    !era.get(`tcvar:${chara_id}:脱力`)
  ) {
    if (is_masochism && era.get(`tequip:${chara_id}:项圈`) !== -1) {
      return 0.2;
    }
    if (era.get('tflag:全身镜') && era.get(`tequip:${chara_id}:眼罩`) === -1) {
      return 0.2;
    }
  }
  return 0;
}

module.exports = get_sm_buff;
