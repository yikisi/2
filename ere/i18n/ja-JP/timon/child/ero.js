/**
 * @file 調教の地の文 - 子供
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
      'はぁ……はぁ……どうしてだろう、',
      callname,
      'を見ると、下が熱くて苦しい……もう……我慢できない！',
    ]);
  },
};
