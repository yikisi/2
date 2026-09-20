/**
 * @file ゴールドシップ - 募集
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gold_ship
   * @param {CharaTalk} you
   * @param {string} title
   * @param {string} color2
   */
  async rec(gold_ship, you, title, color2) {
    await era.printAndWait([
      'この朝は空がよく晴れ渡り、',
      you.get_colored_name(),
      ' は凛としたトレーナーの装いで、トレセンの訓練場へ足を運んでいた。',
    ]);
    await era.printAndWait([
      title,
      'トレーナーである ',
      you.get_colored_name(),
      ' の務めは、見込みのある若い',
      gold_ship.uma_sex_title,
      'たちを、さらに上へ導くことだ。',
    ]);
    await era.printAndWait([
      'ふと、',
      you.get_colored_name(),
      ' はジャージ姿の、背の高い銀髪の',
      gold_ship.uma_sex_title,
      'に目を留めた。',
      gold_ship.sex,
      'の顔には霜をまとったような無表情、いわゆるポーカーフェイスが張りついている。その頭には……ヘッドホンと帽子の合いの子みたいな飾りが乗っているが、',
      you.get_colored_name(),
      ' は経験上、それが',
      gold_ship.uma_sex_title,
      'の伝統的な装いだと知っていた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は目を細めて観察する。',
      gold_ship.sex,
      'はどうやら、このあとの選抜レースに向けてウォーミングアップをしているらしい。',
      gold_ship.sex,
      'の体は柔らかく、ブリッジや屈伸といったストレッチを、いとも簡単にこなしていく。',
    ]);
    if (gold_ship.sex_code !== 1) {
      await era.printAndWait([
        '胸元の、溶けかけのアイスみたいな柔らかな膨らみも、銀髪の美人の動きに合わせてゆらゆら揺れる。ジャージの下に隠れた、引き締まった健康的な尻と、その影に沈む神秘の庭が、',
        you.get_colored_name(),
        ' の視線をしっかり掴んで離さない。もう少女と呼ぶには成熟し始めたその肢体は、絶えず ',
        you.get_colored_name(),
        ' の瞳を誘っている……正気に戻れ。',
        you.get_colored_name(),
        ' はプロのトレーナーだ。',
      ]);
    }
    await era.printAndWait([
      'しかし',
      gold_ship.sex,
      'の太ももが、なんと丸いことか！ 丸い脂肪の下に、うっすら浮かぶ筋肉のラインが、',
      you.get_colored_name(),
      ' に今すぐ触れて、味わってみろと囁いてくる。柔らかさの下にある、締まった感触を。',
    ]);
    await era.printAndWait([
      'そのとき銀髪の',
      gold_ship.uma_sex_title,
      'は、',
      you.get_colored_name(),
      ' の視線に気づいたらしく、こちらを見た。',
      you.get_colored_name(),
      ' は慌てて不埒な考えを脳の後ろへ放り投げ、タブレットに視線を落とす。',
    ]);

    era.printButton('（……この子は……）', 1);
    await era.input();
    await era.printAndWait([
      'この銀色の毛並は、分類上は芦毛だ。',
      you.get_colored_name(),
      ' は共用タブレットのデータベースを繰り、毛色からすぐにこの生徒の名を拾い出した。',
    ]);

    era.printButton('（ゴールド……シップ……なんだよそれ、銀じゃねえか。）', 1);
    await era.input();
    await era.printAndWait([
      '銀色の ',
      gold_ship.get_colored_name(),
      '。その冗談に、',
      you.get_colored_name(),
      ' はつい声を漏らして笑った。',
    ]);
    await era.printAndWait([
      'その瞬間、背筋を寒気が駆け上がる。',
      you.get_colored_name(),
      ' は下げた頭を、一ミリたりとも動かせなかった。動いたのは目だけだ。好奇心という名の、あの忌々しい目が、上へちらりと一瞥してしまう。',
    ]);
    await gold_ship.say_and_wait('……');

    await era.printAndWait([
      you.get_colored_name(),
      ' の視線はタブレットを越え、大きくて精緻な、美しい顔にぶつかった。顔の主は首を傾げ、目を見開いて ',
      you.get_colored_name(),
      ' と目を合わせているのに、どこか ',
      you.get_colored_name(),
      ' を見ていない。',
    ]);
    await era.printAndWait([
      gold_ship.sex,
      'の瞳はピントが合っていない。',
      you.get_colored_name(),
      ' には、目の前の美人が ',
      you.get_colored_name(),
      ' を見ているのか、',
      you.get_colored_name(),
      ' の後ろを見ているのか、',
      you.get_colored_name(),
      ' の奥を見ているのか、',
      you.get_colored_name(),
      ' の頭の中を見ているのか、',
      you.get_colored_name(),
      ' の魂を見ているのか、判別がつかなかった。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は瞬きひとつできず、',
      gold_ship.sex,
      'の針のような視線を眼球に刺されたまま耐えた。目が乾き始めて、ようやく生理反応で瞼が下りる。',
    ]);
    await era.printAndWait([
      'ほんの一瞬。',
      you.get_colored_name(),
      ' が少し湿った目を再び開くと、あの',
      gold_ship.uma_sex_title,
      'はもう元の位置に戻っていた。',
      gold_ship.sex,
      'はもう ',
      you.get_colored_name(),
      ' を見ていない。それでも、頭の中を',
      gold_ship.sex,
      'に掻き回されたような異様な感触だけが、長く残った。',
    ]);

    era.printButton('（これは一体……）', 1);
    await era.input();
    await era.printAndWait([
      '選抜レースは終わった。',
      gold_ship.get_colored_name(),
      ' は記録を更新するタイムで、一位を取った。',
      you.get_colored_name(),
      ' の周囲では、他のトレーナーたちがざわついている。この逸材を奪い合おうと、すでに腰を上げているのは明らかだった。',
    ]);
    era.printButton(
      `近づいて、${gold_ship.name} を募集する人ごみに混ざってみる。`,
      1,
    );
    era.printButton('「嫌な予感がする……」', 2);
    await era.input();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      ' は人ごみの中から、一目で',
      you.get_colored_name(),
      'を見つけた——いや、最初から',
      gold_ship.sex,
      'は、熱に浮かれて寄ってくる他のトレーナーなど眼中になかったのか。',
      gold_ship.sex,
      'は群がる人波を力任せに掻き分け、獲物を見た豹みたいな獰猛な笑みを浮かべ、',
      you.get_colored_name(),
      'の方へ、まず小走り……それから加速、さらに加速！',
    ]);
    await gold_ship.say_and_wait([
      { content: '野生のトレーナー発見だあああああ——！', color: color2 },
    ]);
    await era.printAndWait([
      'それが、',
      you.get_colored_name(),
      ' が気を失う直前に聞いた、最後の一言だった。',
    ]);

    era.println();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      ' に、スカウトされてしまった！',
    ]);
  },
};
