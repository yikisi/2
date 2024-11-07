const CharaTalk = require('#/utils/chara-talk');

const cons_dict = {};

const current = new Date().getTime();

cons_dict[17] = require('#/utils/chara-talk-extended/chara-talk-17');
cons_dict[9017] = require('#/utils/chara-talk-extended/chara-talk-9017');

console.log(
  '[chara-talk-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @param {string} [color]
   * @returns {CharaTalk}
   */
  get_chara_talk(chara_id, color) {
    if (!chara_id) {
      return CharaTalk.me;
    }
    if (cons_dict[chara_id]) {
      return new cons_dict[chara_id](chara_id, color);
    }
    return new CharaTalk(chara_id, color);
  },
  say_by_passer_by: CharaTalk.say_by_passer_by,
  say_by_passer_by_and_wait: CharaTalk.say_by_passer_by_and_wait,
};
