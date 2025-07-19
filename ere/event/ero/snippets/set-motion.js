const era = require('#/era-electron');

/**
 * @param {number} target target character
 * @param {number} motion target motion
 * @param {number} others other allowed motion
 */
function set_motion(target, motion, ...others) {
  if (others.indexOf(era.get(`tcvar:${target}:体位`)) === -1) {
    era.set(`tcvar:${target}:体位`, motion);
  }
}

module.exports = set_motion;
