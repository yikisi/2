const era = require('#/era-electron');

/**
 * @param {number} cid
 * @param {boolean} [is_masochism]
 * @returns {number}
 */
function get_sm_buff(cid, is_masochism = false) {
  if (
    !era.get(`status:${cid}:沉睡`) &&
    !era.get(`status:${cid}:马跳S`) &&
    !era.get(`tcvar:${cid}:脱力`)
  ) {
    if (is_masochism && era.get(`tequip:${cid}:项圈`) !== -1) {
      return 0.2;
    }
    if (era.get('tflag:全身镜') && era.get(`tequip:${cid}:眼罩`) === -1) {
      return 0.2;
    }
  }
  return 0;
}

module.exports = get_sm_buff;
