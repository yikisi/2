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
      '하아……하아…… 왜일까 ',
      callname,
      '을(를) 보면, 아래쪽이 뜨거워서 괴로워…… 이제…… 참을 수 없어!',
    ]);
  },
};
