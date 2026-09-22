/**
 * @file ハルウララ - 調教
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} you
   */
  async zero_stamina(urara, you) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……あっ……あっ……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の腕の中で、止まらず痙攣している',
        ]);
      } else {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が止まらず痙攣している',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '全身が力なく解け、',
          you.get_colored_name(),
          ' にいじられ尽くした ',
          urara.get_colored_name(),
          ' は、もうすっかり気を失っている',
        ]);
      } else {
        await era.printAndWait([
          '全身が力なく解け、',
          urara.get_colored_name(),
          ' はもうすっかり気を失っている',
        ]);
      }
    }
  },
};
