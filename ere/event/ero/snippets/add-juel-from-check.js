const { add_juel } = require('#/system/ero/sys-calc-juel');

/**
 * @param {number} chara_id
 * @param {string} juel_name
 * @param {number} val
 */
function add_juel_from_check(chara_id, juel_name, val) {
  if (val > 0) {
    add_juel(chara_id, juel_name, val);
  }
}

module.exports = add_juel_from_check;
