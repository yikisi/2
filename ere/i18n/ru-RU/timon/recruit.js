/**
 * @file 招募地文
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    'Договор тренера и ',
    chara.uma_sex_title,
    ' влияет на всю жизнь. Точно набрать ',
    chara.get_colored_name(),
    '?',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return [
      'Хотелось набрать ',
      chara.get_colored_name(),
      ', но мысль отпала…',
    ];
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' активно зовёт ',
      chara.get_colored_name(),
      ' в свою команду…',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' подумав, кивает и соглашается!',
    ]);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), ' вступила в команду!']);
  },
};
