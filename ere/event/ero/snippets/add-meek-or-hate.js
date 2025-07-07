const { add_juel } = require('#/system/ero/sys-calc-juel');

const { base_emotion_juel } = require('#/data/ero/juel-const');

/**
 * @param {number} cid
 * @param {number} check
 * @param {function(number):number} cb
 */

function add_meek_or_hate(cid, check = 0, cb) {
  if (check >= 0) {
    add_juel(cid, '顺从', base_emotion_juel * Math.min(1 + check / 100, 2));
  } else {
    add_juel(cid, '反感', base_emotion_juel * (1 + cb(-check) / 10));
  }
}

module.exports = add_meek_or_hate;
