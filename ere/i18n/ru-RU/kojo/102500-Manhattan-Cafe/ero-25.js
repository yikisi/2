/**
 * @file 曼城茶座 - 调教
 * @author Necroz
 */
module.exports = {
  /**
   * @param coffee
   * @param callname
   * @param c_call_t
   */
  async ero_start(coffee, callname, c_call_t) {
    await coffee.say_and_wait([
      c_call_t,
      ', можно попросить тебя лечь ничком?',
    ]);
    await coffee.say_and_wait('М-м, вот так. Поза догэдза, жопу поверни.');
    await coffee.say_and_wait([
      'Всё равно уже нет ценности быть любимой ',
      callname,
      ' — существуй как неодушевлённая подставка.',
    ]);
  },
};
