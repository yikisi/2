/**
 * @file マルゼンスキー - 募集
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_start(maru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' に声をかけてみた。',
    ]);
    era.println();
    you.say([
      maru.get_colored_name(),
      ' なら、必ず無敗の三冠',
      maru.uma_sex_title,
      'になれる。僕のチームに来てくれ。',
    ]);
    await maru.say_and_wait([
      'あら、三冠',
      maru.uma_sex_title,
      'になれたら素敵だとは思うけれど……トレーナーくん、ちょっと買いかぶりすぎじゃないかしら。悪いけど、契約はお断りするわ。……でも、そんなに自信のあるトレーナーくんなら、きっといい担当に出会えるわよ。',
    ]);
    await you.say_and_wait(
      ['……', maru.get_colored_name(), ' に断られた'],
      true,
    );
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_leave_playground(maru, you) {
    await era.printAndWait(
      `${you.name} が訓練場を出ようとしたとき、${maru.name} のほうから声をかけてきた。`,
    );
    era.println();
    maru.say(
      'ねえ、そこのトレーナーくん、ちょっといいかしら。担当を探しに来たのかしら？',
    );
    era.print(
      `${you.name} は担当になりそうなウマ娘を見に、トレセンの競馬場で選抜レースを見ていた。${maru.name} というウマ娘は、その選抜で一頭だけ飛び抜けて、他を遠くに置いていた。走っている姿は、アクセルを床まで踏んだ赤いスポーツカーのようだった。いちばん目を奪われたのは、走っているときの、満たされた顔だ。`,
    );
    maru.say(
      'ふうん……トレーナーくんも、三冠を取るウマ娘を探しているの？ それとも海外の舞台で、凱旋門賞まで狙う子かしら？',
    );
    era.print(
      `${you.name} は首を振った。風と自由を楽しんで、満たされた顔をしていた赤い影が、なぜか頭から離れない。`,
    );
    maru.say('あら、変わったトレーナーね……');
    era.print(`${maru.name} は困った顔をしたが、すぐにいつもの様子に戻った。`);
    maru.say('悪いけど、トレーナーくんはどんなウマ娘を探しているの？');
    era.print(
      `${you.name} は、${maru.name} が走っているときの満たされた姿に見入ってしまったことを、素直に話した。`,
    );
    await maru.say_and_wait(
      '……そう。たしかに、変わったトレーナーね。じゃあ、これからも、走っている私を見ていてちょうだい。',
    );
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_rooftop(maru, you, callname) {
    await era.printAndWait(
      `${you.name} が屋上へ行くと、また ${maru.name} に会った。`,
    );
    await maru.say_and_wait([
      '……うんうん、後輩たち、かわいいわね♪ ほかに聞きたいことがあったら、いつでも',
      maru.elder_sibling_sex_title,
      'に聞いてちょうだい♪',
    ]);
    era.print(
      `${maru.name} は携帯を置いて、グラウンドで練習する後輩ウマ娘たちを眺めていた。鼻歌に合わせて、尻尾がリズムよく揺れている。`,
    );
    await maru.say_and_wait('やっぱり、晴れた日のお弁当がいちばんね♪');
    era.print(
      `${maru.name} は弁当を開けながら、無意識に前方を流して、${you.name} に気づいた。`,
    );
    await maru.say_and_wait([
      '何か用……あら♪ この間訓練場で会った ',
      callname,
      ' じゃない。屋上でお弁当？ センスいいわね♪',
    ]);
    era.print(
      `二人は並んで座り、グラウンドで頑張るウマ娘たちを見ながら弁当を食べた。春の風が ${maru.name} のスカートをまくり、耳が音楽のリズムで小刻みに動く。`,
    );
    era.print(
      `しばらく無言だった。弁当を食べ終えると、マルゼンスキーは箸を置いて立ち上がり、${you.name} を見た。`,
    );
    await maru.say_and_wait(
      'それで、このトレーナーくんも担当を探しているのかしら。目標は？',
    );
    await maru.say_and_wait(
      '無敗三冠、皇帝超え、それとも世界の大舞台を担当と目指すのかしら',
    );
    await maru.say_and_wait('何でも、お姉さんに相談していいのよ♪');
    era.print(`${maru.name} は微笑んで ${you.name} を値踏みする。`);
    era.print(
      `${you.name} の頭のなかに、あの赤い影と、走っているときの満たされた笑顔が蘇る。`,
    );
    era.printButton(
      '担当が走っているとき、思いきり走る楽しさを味わってほしい',
      1,
    );
    await era.input();
    await maru.say_and_wait('！');
    era.print(
      `${maru.name} の耳がはっきりと震えた。尻尾が、${maru.name} が ${you.name} を値踏みするリズムで揺れる。`,
    );
    await maru.say_and_wait(
      '……そうだわ。あなた、私のトレーナーになってくれない？',
    );

    era.print(
      `${you.name} は、その真剣な顔を見て、少し意外だったけれど、最後には手を差し出した。`,
    );
    await maru.say_and_wait(['じゃあ、これからよろしくね、', callname, '♪']);
  },
};
