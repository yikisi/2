const { add_juel } = require('#/system/ero/sys-calc-juel');

const { base_emotion_juel } = require('#/data/ero/juel-const');

/**
 * @param {number} chara_id
 * @param {number} check
 * @param {function(number):number} cb
 */

function add_meek_or_hate(chara_id, check, cb) {
  if (check === undefined || check >= 0) {
    add_juel(chara_id, '顺从', base_emotion_juel * (1 + check / 100));
  } else {
    add_juel(chara_id, '反感', base_emotion_juel * (1 + cb(-check) / 10));
  }
}

module.exports = add_meek_or_hate;
