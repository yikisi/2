/**
 * @file 募集の地の文
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    '트레이너와',
    chara.uma_sex_title,
    '의 계약은 서로의 일생을 좌우한다.',
    chara.get_colored_name(),
    '을(를) 모집할까요?',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return [chara.get_colored_name(), '을(를) 모집하고 싶었지만 그만뒀다...'];
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 적극적으로',
      chara.get_colored_name(),
      '을(를) 자신의 팀으로 초대했다……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 깊이 생각한 끝에 고개를 끄덕이며 수락했다!',
    ]);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), '이(가) 팀에 합류했다!']);
  },
};
