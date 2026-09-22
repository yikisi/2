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
      await urara.say_and_wait('……啊……啊……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '仿佛被玩坏的洋娃娃，昏迷的 ',
          urara.get_colored_name(),
          ' 在 ',
          you.get_colored_name(),
          ' 怀中不住地痉挛着',
        ]);
      } else {
        await era.printAndWait([
          '仿佛被玩坏的洋娃娃，昏迷的 ',
          urara.get_colored_name(),
          ' 不住地痉挛着',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '全身都瘫软着，被 ',
          you.get_colored_name(),
          ' 一番折磨后的 ',
          urara.get_colored_name(),
          ' 似乎已经彻底晕过去了',
        ]);
      } else {
        await era.printAndWait([
          '全身都瘫软着，',
          urara.get_colored_name(),
          ' 似乎已经彻底晕过去了',
        ]);
      }
    }
  },
};
