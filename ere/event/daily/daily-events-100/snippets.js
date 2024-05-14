const era = require('#/era-electron');
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} me
   */
  async date_common(acute, me) {
    await printAndWait([
      '人来人往的中庭，想要在这里忍受其他',
      acute.get_uma_sex_title(),
      '的视线进行约会，恐怕需要很强大的毅力……',
    ]);
    await acute.say_and_wait('啊……要在这里约会吗？我不介意的哦～');
    await printAndWait([
      acute.get_colored_name(),
      ' 似乎并不在乎周围',
      acute.get_uma_sex_title(),
      '的目光……',
    ]);
    if (era.get('love:100') < 90) {
      await printAndWait([
        '但没有勇气真正踏出那一步的其实是 ',
        me.get_colored_name(),
        ' 自己。',
      ]);
    }
  },
};
