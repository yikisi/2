/**
 * @file 机伶金花 - 调教
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * 第一次性高潮后开始泌乳
   * @param {CharaTalk} bouquetd
   */
  async have_milk(bouquetd) {
    await bouquetd.say_and_wait('……欸？');
    await era.printAndWait([
      bouquetd.get_colored_name(),
      ' 的乳房喷出了星星点点的液体……',
    ]);
    await era.printAndWait([
      '余韵中的 ',
      bouquetd.get_colored_name(),
      ' 呆呆地看着初乳划过空气的轨迹……',
    ]);
    await era.printAndWait([
      bouquetd.get_colored_name(),
      ' 的胸部开始泌乳了……',
    ]);
  },
};
