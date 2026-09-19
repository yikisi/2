/**
 * @file 春乌拉拉 - 调教
 * @author 99
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} you
   */
  async zero_stamina(urara, you) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……ах……ах……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          'Как сломанная кукла, без сознания ',
          urara.get_colored_name(),
          ' в объятиях ',
          you.get_colored_name(),
          ' безостановочно бьётся в судорогах',
        ]);
      } else {
        await era.printAndWait([
          'Как сломанная кукла, без сознания ',
          urara.get_colored_name(),
          ' безостановочно бьётся в судорогах',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          'Всё тело обмякло: после того как ',
          you.get_colored_name(),
          ' как следует измучил(а), ',
          urara.get_colored_name(),
          ' кажется, окончательно отключилась',
        ]);
      } else {
        await era.printAndWait([
          'Всё тело обмякло, ',
          urara.get_colored_name(),
          ' кажется, окончательно отключилась',
        ]);
      }
    }
  },
};
