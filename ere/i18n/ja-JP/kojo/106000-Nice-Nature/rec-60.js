/**
 * @file ナイスネイチャ - 募集
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} nature
   * @param {CharaTalk} you
   * @param {string} self_call
   */
  async rec(nature, you, self_call) {
    await you.say_as_unknown_and_wait([
      '……そして本選考の3着は……',
      nature.get_colored_name(),
      '！',
    ]);
    await nature.say_as_unknown_and_wait('うーん——まあ、いつもの走りだね。');
    await era.printAndWait([
      '声のした方を見ると、ふわふわのツインテールをした赤毛の',
      nature.uma_sex_title,
      'が、掲示板の順位を眺めながらひとりごちていた。',
    ]);
    await nature.say_and_wait(
      '相変わらずの3着だなあ。この成績じゃ、今回もトレーナーは来ないだろうね……',
    );
    await era.printAndWait([
      nature.uma_sex_title,
      'の自嘲には、わずかな不甲斐なさと寂しさが混じっていた。選考の走りを見届けていた ',
      you.get_colored_name(),
      ' は、思わず足を進める……',
    ]);
    await nature.say_and_wait([
      'あ、えっと……トレーナー',
      you.adult_sex_title,
      '……だよね？ ',
      self_call,
      ' に、何か用？',
    ]);
    await era.printAndWait([
      nature.get_colored_name(),
      ' は、突然声をかけた ',
      you.get_colored_name(),
      ' に、きょとんとした顔を向けた。',
    ]);
    await nature.say_and_wait(
      'うん……あたしのトレーニングを担当したい……そうなんだ……えっ！？ 待って！ あたし、3着だよ？ こんな子を担当にして、本当にいいの？…………うーん——わ、わかった。でも、不満とか飽きちゃったとかあったら、絶対に言ってね？ 無理しないでね？',
    );
    await era.printAndWait([
      'こうして、',
      nature.get_colored_name(),
      ' とのコンビ生活が、幕を開けた。',
    ]);
  },
};
