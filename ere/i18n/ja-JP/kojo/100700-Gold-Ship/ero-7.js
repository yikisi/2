/**
 * @file ゴールドシップ - 調教
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} taste 秋川やよい / ホクホク味
   * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async report_preg(gs, you, taste, minoru, callname) {
    await gs.say_and_wait('……');
    era.println();
    await gs.print_and_wait([
      gs.get_colored_name(),
      ' は便座に大股を開いて座り、棒状のものを手に、考え込んでいる。',
    ]);
    era.println();
    await gs.print_and_wait(
      'それは妊娠検査薬だ。尿中のホルモン量で、女性が孕んでいるかを調べる不思議な小道具。',
    );
    era.println();
    const love = era.get('love:7');
    if (love === 100) {
      if (era.get('relation:7:0') > 0) {
        await gs.say_and_wait([
          callname,
          ' は認めてくれるかな……まあ、あいつはまっすぐなやつだし……',
        ]);
      } else {
        await gs.say_and_wait([
          callname,
          ' は認めてくれるかな……クソ野郎だけど……',
        ]);
      }
    } else if (love >= 75) {
      await gs.say_and_wait('できたぜ、アタシたちの愛の結晶❤️');
    } else if (love >= 50) {
      await gs.say_and_wait('これで、あいつを縛れるだろ……');
    }
    era.drawLine();
    await gs.say_and_wait([
      '今日はいい天気だな——あ、そうだ！',
      callname,
      '、アタシ、できた。',
    ]);
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の隣に立ち、自分の腹を指差した。',
    ]);
    era.printButton(
      '「昨夜やったばっかで、翌日起きたらできた、なんてそんなに早くいくか？」',
      1,
    );
    await era.input();
    await gs.say_and_wait(
      'おお～『やったばっか』～！ いや、冗談じゃねえ。ほら、できたてほやほやの検査薬。',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' の顔は、意外なほど真剣だった。',
      you.get_colored_name(),
      ' は半信半疑で検査薬を受け取る——結果は陽性。どう見ても、',
      you.get_colored_name(),
      ' が父親だ。',
    ]);
    era.println();
    await era.printAndWait([
      '担当の',
      gs.uma_sex_title,
      'を孕ませた件は、トレセン上層部へ報告せざるを得ない。',
      taste.get_colored_name(),
      ' と ',
      minoru.get_colored_name(),
      ' は珍しく、人殺したげな目を向けてきた。それでも二人は責任をもって、これから始まる育児——そして名声を傷つけるスキャンダルを、できる限り押さえ込んでくれるだろう。',
    ]);
    era.println();
    await era.printAndWait('もちろん、できるかどうかは、また別の話だ。');
  },
  /**
   * @param {CharaTalk} gs
   * @param {PrintedSpan} callname
   */
  async have_baby(gs, callname) {
    await gs.say_and_wait([callname, '……']);
    await gs.say_and_wait('普段はあんまりちゃんと口に出してねえけど……');
    await gs.say_and_wait('いまのアタシ、幸せだぜ。');
  },
};
