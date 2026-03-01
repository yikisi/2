/** @file 杂项 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * 办公室初见
   * @author 黑奴队长
   * @param {CharaTalk} aoi
   * @param {CharaTalk} riko
   * @param {CharaTalk} you
   * @param {PrintedSpan} r_call_a
   * @param {boolean} empty_team
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      ' 来到训练员公用的办公室，里面已经有两位训练员在了。',
    ]);
    await riko.say_as_unknown_and_wait([
      '您好，您就是新来的 ',
      you.actual_name,
      ' 训练员吧。',
    ]);
    await riko.say_and_wait([
      '我是 ',
      riko.get_colored_actual_name(),
      '，今后为了中央特雷森的荣光一起努力吧。',
    ]);
    await aoi.say_and_wait([
      '贵安，我是 ',
      aoi.get_colored_actual_name(),
      '，今后请您多多指教。',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        '您现在还没有担当，如果有什么困难的话请尽管来找我或者这位 ',
        r_call_a,
        ' 商量吧',
      ]);
    }
  },
};
