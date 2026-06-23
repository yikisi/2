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
    await coffee.say_and_wait([c_call_t, '，可以请你趴在这里吗？']);
    await coffee.say_and_wait('嗯，就是这样，土下座的姿势，屁股转过来。');
    await coffee.say_and_wait([
      '反正已经没有被 ',
      callname,
      ' 宠爱的价值了，就干脆作为无机物的台子存在吧。',
    ]);
  },
};
