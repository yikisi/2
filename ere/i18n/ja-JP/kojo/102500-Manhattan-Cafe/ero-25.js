/**
 * @file マンハッタンカフェ - 調教
 * @author Necroz
 * @author Claude (翻訳)
 */
module.exports = {
  /**
   * @param coffee
   * @param callname
   * @param c_call_t
   */
  async ero_start(coffee, callname, c_call_t) {
    await coffee.say_and_wait([c_call_t, '、ここに伏せてもらえますか……？']);
    await coffee.say_and_wait(
      'ええ、その姿勢です。土下座のまま、お尻をこちらへ……',
    );
    await coffee.say_and_wait([
      'もう ',
      callname,
      ' に愛される価値もないのですから……無機物の台として、そこにいてください……',
    ]);
  },
};
