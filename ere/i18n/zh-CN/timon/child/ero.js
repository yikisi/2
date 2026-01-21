/**
 * @file 调教地文 - 孩子
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   */
  async estrus_for_slave(child, callname) {
    await child.say_and_wait([
      '哈啊……哈啊……不知道为什么看到',
      callname,
      '的时候，下面就觉得好热好难受……已经……忍不住了！',
    ]);
  },
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @author 黑奴队长
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 被 ',
        child.get_colored_name(),
        ' 与 ',
        father.get_colored_name(),
        ' 紧紧夹在中间，',
      ]);
      await era.printAndWait([
        '两根灼热的肉棒一起进攻着 ',
        you.get_colored_name(),
        ' 的前后两穴，每一次插入都带来一阵全新的快感。',
      ]);
      await era.printAndWait([
        '恍惚间，',
        you.get_colored_name(),
        ' 想起 ',
        child.get_colored_name(),
        ' 刚出生时的事——',
      ]);
      await you.used_to_say_and_wait(
        '甚至，等到孩子长大之后……被孩子与孩子的父亲一起使用，被紧紧夹在中间，沉溺于雄性的肉棒之中……',
        true,
      );
      await era.printAndWait('那时的妄想，已经变成了现实……');
    };
    f.title = '父子丼';
    return f;
  })(),
};
