/**
 * @file 招募地文
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    '训练员与',
    chara.uma_sex_title,
    '的契约足以影响双方一生，确定要招募 ',
    chara.get_colored_name(),
    ' 吗？',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return ['虽然想要招募 ', chara.get_colored_name(), '，但还是打消了念头……'];
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 积极地把 ',
      chara.get_colored_name(),
      ' 招揽进自己的队伍……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 在仔细思考后，点头答应了！',
    ]);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), ' 加入了队伍！']);
  },
};
