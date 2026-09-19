/**
 * @file Recruit Timon
 * @author 雞雞
 * @author Copilot (translator)
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    'A Trainer-',
    chara.uma_sex_title,
    ' contract is a bond not taken lightly. Confirm recruitment of ',
    chara.get_colored_name(),
    ':',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return [
      'After careful consideration, the decision was made to forgo recruiting ',
      chara.get_colored_name(),
      '.',
    ];
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' is attempting to recruit ',
      chara.get_colored_name(),
      '...',
    ]);
    await era.printAndWait([chara.get_colored_name(), ' smiles gracefully...']);
    await era.printAndWait([chara.sex, ' accepts!']);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), ' has joined the team!']);
  },
};
