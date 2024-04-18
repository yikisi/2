const CharaTalk = require('#/utils/chara-talk');

const chara_talk_dict = { 17: true, 9017: true };
Object.keys(chara_talk_dict).forEach(
  (e) =>
    (chara_talk_dict[e] = require(
      `#/utils/chara-talk-extended/chara-talk-${e}`,
    )),
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
    if (chara_talk_dict[chara_id]) {
      return new chara_talk_dict[chara_id](chara_id, color);
    }
    return new CharaTalk(chara_id, color);
  },
};
