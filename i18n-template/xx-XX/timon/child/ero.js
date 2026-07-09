/**
 * @file 调教地文 - 孩子
 * @author 雞雞
 * @author 黑奴队长
 */
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
};
