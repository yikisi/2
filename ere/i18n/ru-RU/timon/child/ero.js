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
      'Ха-а… ха-а… когда вижу ',
      callname,
      ', внизу так горячо и нестерпимо… уже… не могу больше!',
    ]);
  },
};
