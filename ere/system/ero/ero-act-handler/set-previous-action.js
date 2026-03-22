const era = require('#/era-electron');

/**
 * @param {string} key
 * @param {number} act
 */
function set_previous_action(key, act) {
  if (era.get(`tflag:${key}`) === -2) {
    era.set(`tflag:${key}`, -1);
  } else {
    era.set(`tflag:${key}`, act);
  }
}

module.exports = set_previous_action;
