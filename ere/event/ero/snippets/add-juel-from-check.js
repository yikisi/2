const { add_juel } = require('#/system/ero/sys-calc-juel');

/**
 * @param {number} cid
 * @param {string} jewel
 * @param {number} val
 */
function add_juel_from_check(cid, jewel, val) {
  if (val > 0) {
    add_juel(cid, jewel, val);
  }
}

module.exports = add_juel_from_check;
