/**
 * @file 募集の地の文
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    'トレーナーと',
    chara.uma_sex_title,
    'の契約は、互いの一生を左右する。',
    chara.get_colored_name(),
    ' を募集してよいか？',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return [
      chara.get_colored_name(),
      ' を募集しようとしたが、思いとどまった……',
    ];
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は積極的に ',
      chara.get_colored_name(),
      ' を自チームへ招いた……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' はよく考えたうえで、頷いて承諾した！',
    ]);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), ' がチームに加わった！']);
  },
};
