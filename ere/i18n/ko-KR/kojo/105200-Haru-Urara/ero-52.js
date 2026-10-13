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
      await urara.say_and_wait('……아……아……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '망가진 인형처럼 기절한 ',
          urara.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '의 품 안에서 멈추지 않고 경련하고 있다',
        ]);
      } else {
        await era.printAndWait([
          '망가진 인형처럼 기절한 ',
          urara.get_colored_name(),
          '이(가) 멈추지 않고 경련하고 있다',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '온몸의 힘이 풀려버린 채,',
          you.get_colored_name(),
          '에게 철저히 농락당한 ',
          urara.get_colored_name(),
          '은(는) 완전히 의식을 잃었다',
        ]);
      } else {
        await era.printAndWait([
          '온몸의 힘이 풀려버린 채, ',
          urara.get_colored_name(),
          '은(는) 완전히 의식을 잃었다',
        ]);
      }
    }
  },
};
