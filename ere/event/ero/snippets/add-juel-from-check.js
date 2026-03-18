const { add_juel } = require('#/system/ero/sys-calc-juel');

/**
 * @param {number} cid
 * @param {number} jid
 * @param {number} val
 */
function add_juel_from_check(cid, jid, val) {
  if (val > 0) {
    add_juel(cid, jid, val);
  }
}

module.exports = add_juel_from_check;
