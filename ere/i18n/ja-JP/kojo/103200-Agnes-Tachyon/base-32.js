/**
 * @file アグネスタキオン - 地下室
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  welcome(tachyon, callname) {
    tachyon.say(['あら、', callname, '、目が覚めましたわね。']);
    tachyon.say(['気に入りました？ 私の新しい実験室。']);
    tachyon.say(['……とぼけるのはおやめなさい？ ……ふふ、では本題ですわ。']);
    tachyon.say(['——', callname, '、ずっと気になっていたのです。']);
    tachyon.say([
      '私は、あなたの眼に映る最も可能性に満ちた',
      tachyon.uma_sex_title,
      '、そうでしょう？',
    ]);
    tachyon.say(['私の走りは、あなたを眩ませ、狂わせた。そうでしょう？']);
    tachyon.say(['——では、今、あなたの眼が見ているのは、いったい誰？']);
    tachyon.say(['私にはわからない……', callname, '、']);
    tachyon.say(['私はもう、あなたのいない可能性を選べない。']);
    tachyon.say(['なのにあなたの眼の中に、私の姿が映っていない。']);
    tachyon.say([
      'これが恋？ 恋とは、こんなにも不公平なもの？ 私はもうあなたなしではいられないのに、あなたの眼にはまだ私がいない。',
    ]);
    tachyon.say([
      '……ごめんなさい、',
      callname,
      '。でも今回の実験は、あなたの意思を無視して進めなければなりませんわ。私が納得するまで、どうか、ここにいてください。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ask_release_agree(tachyon, you, callname) {
    await tachyon.say_and_wait(['いいですわ。']);
    era.println();
    await era.printAndWait([
      '拒まれる覚悟はしていた。なのに ',
      tachyon.get_colored_name(),
      ' は、拍子抜けするほどあっさり頷いた。',
    ]);
    era.println();

    await tachyon.say_and_wait(['実験は……一応、結果も出ましたし、']);
    await tachyon.say_and_wait([
      '一生あなたをここに縛るつもりもありませんわ。',
    ]);
    await tachyon.say_and_wait([
      '————ええ、強いて言えば、もう一つだけ問いがありますわね。',
    ]);
    era.println();

    await era.printAndWait([
      '突然、',
      tachyon.get_colored_name(),
      'が ',
      you.get_colored_name(),
      ' の前まで寄り、',
      you.get_colored_name(),
      ' の眼を見つめた。',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '、あなたはかつて、私の瞳には人を狂わせる魔力があると言った。',
    ]);
    await tachyon.say_and_wait([
      'では……今のあなたは、まだその魔力を視られますか？',
    ]);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' の瞳の魅力……それは',
      tachyon.sex,
      'の夢への渇望から来ていた。限界へ身を捧げる覚悟から来ていた。',
    ]);
    await era.printAndWait([
      'では、今の ',
      tachyon.get_colored_name(),
      ' は？',
    ]);
    await era.printAndWait([
      '自分だけに酔い、自分だけを求める姿は、確かに胸を衝く。',
    ]);
    await era.printAndWait([
      'だが今の ',
      tachyon.get_colored_name(),
      'の眼に、かつてのように、すべてを捧げたくなる魔力は残っているだろうか。',
    ]);
    await era.printAndWait([you.get_colored_name(), ' は首を横に振った。']);
    era.println();

    await tachyon.say_and_wait(['…………ああ、そう。']);
    await tachyon.say_and_wait(['では、最後の問いにも答えが出ましたわ。']);
    await tachyon.say_and_wait(['出てよろしいですわ。']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' が荷物をまとめ、出ようとしたとき、',
      tachyon.get_colored_name(),
      ' は背を向けたままベッドの縁に座っていた。',
    ]);

    era.printButton('「タキオン？」', 1);
    era.printButton('「君は出ないのか？」', 2);
    await era.input();

    await tachyon.say_and_wait([
      '……ふふ、この有様で、まだ私を心配するのですか？',
    ]);
    await tachyon.say_and_wait(['大丈夫ですわ。あとで私も出ます。ただ……']);
    await tachyon.say_and_wait([
      '今の——醜い瞳を、あなたに見せたくないだけです。',
    ]);

    await era.printAndWait([you.get_colored_name(), ' は地下室を出た。']);
    await era.printAndWait([
      '最初から最後まで、',
      tachyon.get_colored_name(),
      ' は振り向かなかった。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ask_release_reject(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      '、言ったはずですわ。今回の実験はかなり長くかかる……言っていませんでした？ では、今言いますわ。',
    ]);
    await tachyon.say_and_wait([
      'どうしてもわからない……なぜあなたは他の',
      tachyon.uma_sex_title,
      'にそこまで執着するのか。そして——なぜ、私がそのことにそこまで執着するのか。',
    ]);
    await tachyon.say_and_wait([
      'だから、納得するまで……申し訳ありませんが、あなたを出すわけにはいきませんわ。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async battle_prison(tachyon, callname) {
    await tachyon.say_and_wait([
      '自由のためなら、自分の愛馬に手を出すのですか？',
    ]);
    await tachyon.say_and_wait(['それとも……外に、私より大切な人がいるから？']);
    await tachyon.say_and_wait([
      '……奇妙な感覚ですわ。もともとの私は、こんなに疑り深くはなかったはずなのに。',
    ]);
    await tachyon.say_and_wait([
      '教えてくれますか？ ',
      callname,
      '——今の私は、あなたの眼にどう映っていますか？',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  find_escape(tachyon, you) {
    tachyon.say(['出たいのですか？']);
    era.println();

    era.print([
      tachyon.get_colored_name(),
      ' は優しく、ドアノブにかかった ',
      you.get_colored_name(),
      ' の手を握った。',
    ]);
    era.println();

    tachyon.say(['……止めはしません。助けもしませんわ。']);
    tachyon.say([
      '私が答えを追い求めるように、モルモット君、あなたも自分の力で私の拘束を解いてみなさい。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(tachyon, you) {
    await tachyon.say_and_wait(['ん……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' の動きは速かった。',
      tachyon.get_colored_name(),
      ' の薬で培った体力も十分だった。',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は反応する間もなく、昏倒した。',
    ]);
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async strike_fail(tachyon) {
    await tachyon.say_and_wait([
      '解けないなら出題者から片付ける……それも一つの解法ですわ。',
    ]);
    await tachyon.say_and_wait([
      'ですが、規格の差を考慮していませんでしたね……',
    ]);
    await tachyon.say_and_wait([
      '日頃の薬で自信過剰になったのか……それとも、',
      tachyon.uma_sex_title,
      'の無害そうな振る舞いが、勝てるという錯覚を生んだのかしら？',
    ]);
    await tachyon.say_and_wait([
      '……まあいいわ。わからないなら、この機会にしっかり理解なさい。',
    ]);
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      'の素質、',
      tachyon.uma_sex_title,
      'の身体能力、',
      tachyon.uma_sex_title,
      'の性欲……その全部を、身体に刻み込んであげますわ。',
    ]);
  },
};
