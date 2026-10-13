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
    await coffee.say_and_wait([c_call_t, ', 여기 엎드려 주실래요……?']);
    await coffee.say_and_wait(
      '네, 그 자세예요. 고개를 조아린 채로 엉덩이를 이쪽으로……',
    );
    await coffee.say_and_wait([
      '이제 ',
      callname,
      '에게 사랑받을 가치도 없으니까요…… 생명 없는 받침대처럼, 거기 계세요……',
    ]);
  },
};
