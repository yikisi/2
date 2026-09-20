/**
 * @file アグネスタキオン - 募集
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_start(tachyon, you) {
    era.print(
      `${you.name} は今日の選抜で、忘れがたい一幕を目にした。絶世の走りを見せる${tachyon.uma_sex_title}がいた`,
    );
    era.print(
      `${tachyon.sex}が走り出す瞬間、${tachyon.sex}がスパートする瞬間、${tachyon.sex}がゴールを切る瞬間`,
    );
    era.print('光のように速く、光のように輝き、光のように……虚ろ');
    await era.printAndWait(
      `残念ながら人波が ${you.name} の足を止め、${you.name} は${tachyon.sex}に声をかける機会を得られなかった`,
    );
    era.println();

    era.print(
      `${you.name} は焦燥に駆られた。もう一度あの${tachyon.uma_sex_title}を、あの光を見たくてならない`,
    );
    await era.printAndWait(
      `なぜ最後にあんな考えが浮かんだのか、${you.name} 自身にもわからない。虚ろ、という言葉が突然 ${you.name} の脳裏に差し込んだかのように……`,
    );
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_final(tachyon, you) {
    era.print(`${you.name} は、数日前にここで見たあの走りを、まだ忘れられない`);
    era.print(
      `${you.name} は未デビューの${tachyon.uma_sex_title}が出没しそうな場所をあらかた当たった。訓練場、模擬レース場、ジム、食堂`,
    );
    await era.printAndWait(
      `この数日、${you.name} はあの${tachyon.uma_sex_title}の姿を一度も見ていない。まるで空から消えたかのようだった`,
    );
    era.println();

    era.print(`${you.name} はレース場の柵に寄りかかり、つい溜息をついた`);
    await era.printAndWait(
      `そのとき、${you.name} の耳が、途切れ途切れの会話を拾った`,
    );
    era.println();

    await era.printAndWait([
      `？？？「……ええ、このままトレーナーがつかなければ、たぶん……惜しいわよね、あんなに優れた素質があるのに……`,
      tachyon.get_colored_name(),
      `」`,
    ]);
    era.println();

    await era.printAndWait([
      `${you.name} は相手が誰かなど気にする余裕がなかった。`,
      tachyon.get_colored_name(),
      `。${you.name} はその名前を胸の裡で噛みしめた。なぜか、その名を聞いた瞬間に胸が強く鳴った。直感が告げていた。これが、${you.name} の探している${tachyon.uma_sex_title}、${tachyon.sex}の名前だと`,
    ]);
    era.println();

    era.print(`タキオン（Tachyon）。現在知られている最速の粒子`);
    era.print(`光のように走る${tachyon.sex}に、これ以上ない名前ではないか`);
    era.print(
      `${you.name} は興奮を抑えきれなかった。だがそのときになって、さっきの生徒の言葉を思い出す`,
    );
    era.print(`（トレーナーがいない……たぶん……）`);
    await era.printAndWait(`${you.name} は焦って駆け出した`);
    era.println();

    era.print(`${tachyon.sex}を探すのは、意外なほど容易だった`);
    era.print([
      `名前を出せば、`,
      tachyon.get_colored_name(),
      `、多くの生徒が心当たりがあるらしい`,
    ]);
    era.print(`？？？「授業になど出てこない」`);
    era.print(`？？？「空き教室を勝手に自分の実験室にしてる」`);
    era.print(
      `？？？「見かけた${tachyon.uma_sex_title}に、妙な薬を押しつける」`,
    );
    era.print(`？？？「タキオン先輩の薬、甘くておいしいよ」`);
    await era.printAndWait(
      `奇妙な噂ばかりだが、どれも ${you.name} の胸には届かない。${you.name} はただ、${tachyon.sex}を見つけたくてならなかった`,
    );
    era.println();

    await era.printAndWait(
      `${you.name} は噂の実験室の扉の前に立ち、ノックした`,
    );
    era.println();

    tachyon.say(`どうぞ～～`);
    await era.printAndWait(`中から、気怠げな声がした`);
    era.println();

    era.print(`なのに、${you.name} は急に気後れした`);
    era.print(
      `噂のせいではない。ファンがアイドルに会う直前のような、あの感覚だった`,
    );
    era.print(
      `扉の向こうには、この三日茶も飯も喉を通さず憑かれたように追い求めた${tachyon.sex}がいる`,
    );
    await era.printAndWait(
      `待ちすぎたのかもしれない。${you.name} が決心するより先に、扉のほうが開いた`,
    );
    era.println();

    era.print(
      `現れたのは白衣を着た${tachyon.uma_sex_title}だった。栗色の髪先、さっぱりした短髪${tachyon.sex_code - 1 ? '。胸元の膨らみは白衣でも隠しきれない' : ''}`,
    );
    era.print(
      `それから、${tachyon.sex}の脚……意外なほど細い。ズボン越しにもわかる。多くの${tachyon.uma_sex_title}は華奢に見えて想像を超える怪力を持つが、${tachyon.sex}の脚は他の${tachyon.uma_sex_title}より明らかに細かった`,
    );
    era.print(`あの日 ${you.name} が虚ろを感じた理由は、これだった`);
    era.print(`だが脚以上に胸を打ったのは、${tachyon.sex}の両眼だった`);
    era.print('ブラインドのように虚ろな、赤い両眼');
    await era.printAndWait('こちらを見ているのに、中には何もないようだった');
    era.println();

    await era.printAndWait(
      `${you.name}は緊張した。用意していた募集の台詞は跡形もなく消え、${you.name} はどもりながら、相手を担当にしたい気持ちだけを伝えた`,
    );
    era.println();

    await era.printAndWait(
      `${tachyon.sex}は ${you.name} の眼を長いあいだ見つめ、それから笑った`,
    );
    era.println();

    await era.printAndWait(
      `そのあと ${you.name} は、${tachyon.sex}の指示どおり一連の不平等条約にサインした。試薬への協力は必須、訓練もレースも${tachyon.sex}の気分次第、などなど`,
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      tachyon.get_colored_name(),
      ' の三年が、始まった……',
    ]);
  },
};
