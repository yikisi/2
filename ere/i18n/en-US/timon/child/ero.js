/**
 * @file Ero Timon - Child
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   */
  async estrus_for_slave(child, callname) {
    await child.say_and_wait([
      "Hah... hah... I don't know why, but when I see ",
      callname,
      ", it gets so hot and itching down there... I... can't hold it anymore!",
    ]);
  },
};
