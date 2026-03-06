const era = require('#/era-electron');

/**
 * @param {number} cid
 * @param {number} min
 * @returns {number}
 */
function sys_calc_security_level(cid, min = -1) {
  const level = Math.floor(
    (era.get(`love:${cid}`) * (era.get('flag:极端行为限制') || 1) -
      era.get(`relation:${cid}:0`)) /
      200,
  );
  if (min >= 0) {
    return Math.max(level, min);
  }
  return level;
}

module.exports = sys_calc_security_level;
