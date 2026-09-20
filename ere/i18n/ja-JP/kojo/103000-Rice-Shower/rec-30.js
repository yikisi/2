/**
 * @file ライスシャワー - 募集
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   */
  async rec_start(rice, you) {
    era.print([
      'え？あの',
      rice.sex_code === 1 ? '少年' : '少女',
      'の耳、すごく大きくない？平均をかなり超えてるよね？',
    ]);
    era.print(
      `普通、この年頃の子——とりわけ${rice.uma_sex_title}は、もっと元気に動き回るものだ。`,
    );
    era.print(
      `だが黒髪の${rice.teen_sex_title}は、誰かにぶつからないよう、尻尾まで慎重に気を配っているらしい。`,
    );
    era.print(`中央トレセンで、ここまで気弱な子も珍しい。`);
    era.print(
      `案の定、${rice.sex}は友達と併走することもなく、ひとりジャージ姿で校外へ走っていった。`,
    );
    await era.printAndWait('方角は……駅か。');
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_station(rice, you, chara_self_name) {
    // 駅イベント。ひとりでいるときのみ表示
    era.print([
      '少し離れた駅前で買い物を済ませ、学園へ戻る途中で一人の',
      rice.uma_sex_title,
      'と出会った。',
    ]);
    era.print(['休憩を終えた', rice.sex, 'は、次のトレーニングへ急いでいる。']);
    you.say('きれいな走りだ');
    era.print([
      rice.sex,
      'が去っていく背中を見て、',
      you.get_colored_name(),
      ' は思わず感嘆する。',
    ]);
    await era.printAndWait([
      '小柄なのに、',
      rice.sex,
      'の周囲を取り巻く覇気が、自然と目を惹く。',
    ]);
    era.drawLine();
    era.print(
      '赤信号が続き、トレセン学園に着いた頃には、空はすっかり暗くなっていた。',
    );
    rice.say('あの、ご、ごめんなさい！');
    you.say(`ん？俺に言ってるのか？`);
    rice.say('は、はい、その、ごめんなさい！');
    you.say(`え？`);
    rice.say(
      `今日 ${chara_self_name} がお隣を走っていたせいで、こんなに遅くなってしまいました。`,
    );
    rice.say('本当に、本当に、ごめんなさい！');
    you.say(`お前のせいじゃない。`);
    rice.say(
      `いいえ、${chara_self_name} のせいです。だって ${chara_self_name} は、人に不幸を運ぶ悪い子ですから……`,
    );
    era.print([rice.teen_sex_title, 'の大きな耳が、力なく垂れる。']);
    rice.say(
      `ごめんなさい。で、でも ${chara_self_name} がいなければ大丈夫です！さようなら！`,
    );
    era.print([
      rice.get_colored_name(),
      ' を呼び止める間もなく、',
      rice.sex,
      'は走り去った。放っておくには、あまりにかわいそうだ。',
    ]);

    era.printButton(`${rice.sex}の考えすぎだと伝えよう`, 1);
    await era.input();
    era.print([rice.sex, 'に声をかけようとした、そのとき']);
    rice.say(
      '次の選抜レースに出るって決めたんです。ちゃんと出て、地道に走る。そしたら……',
    );
    rice.say(
      `ちゃんとデビューして、活躍できたら、役に立つ ${chara_self_name} になれる！`,
    );
    era.print([
      rice.sex,
      'が気合いを入れてトレーニングを始めようとしているのを見て、声をかけるのを躊躇い、結局挨拶はできなかった。',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '……次の選抜レースで、',
      rice.sex,
      'の本当の力を見てみたい。',
    ]);
  },
  /** @param {CharaTalk} rice */
  async rec_race(rice) {
    era.print([
      '「今日は ',
      rice.get_colored_name(),
      ' の選抜レースがあるはず……」',
    ]);
    era.print(
      `？？？「${rice.name}！${rice.name} さん ${rice.name} さん ${rice.name} さん！どこにいるの ${rice.name} さん！」`,
    );
    era.print([
      rice.get_colored_name(),
      ' の出番のはずなのに、',
      rice.sex,
      'の姿はない。',
    ]);
    era.print([
      rice.get_colored_name(),
      ' を呼んでいた',
      rice.uma_sex_title,
      'は、すぐに別の場所へ呼ばれていった',
    ]);
    era.print(
      `？？？「${rice.name}、選抜レースまで拒むようになったの？あんなに才能のある子なのに。」`,
    );
    era.print('？？？「才能以前に、出走を嫌がること自体が大きな問題よ。」');
    await era.printAndWait([
      '結局、',
      rice.get_colored_name(),
      ' はその日の選抜会場に、最後まで姿を見せなかった。',
    ]);
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_final(rice, you, chara_self_name) {
    era.print(`次に ${rice.name} を見かけたのは、選抜レースのあとだった。`);
    era.print('切り株のそば');
    rice.say(
      `ばか、ばかばか、${chara_self_name} の大ばか！せっかく……せっかく頑張るって決めたのに……`,
    );
    rice.say(`うわ……なんで……なんで ${chara_self_name} はこんなにダメなの？`);
    era.print(
      `ひとりで泣いている ${rice.name} を見過ごせなくて、気づいたら${rice.sex}のそばに立っていた。`,
    );
    rice.say('あなたは……この前の？');
    rice.say('ごめんなさい！その、もう近づかないでください……');
    rice.say(
      `${chara_self_name} のそばにいると不幸になるんです。${chara_self_name} はダメな子で、またご迷惑をおかけしてしまいます。`,
    );
    rice.say(
      `${chara_self_name} も役に立ちたくて、選抜レースに出ようと頑張ったんです。なのに……`,
    );
    era.println();
    era.print(`目の前で泣く ${rice.name} を見ていると、数日前のあの姿が蘇る——`);
    era.print([
      '何があったのかは分からない。だが',
      rice.sex,
      'は、確かに変わろうとしていた。',
    ]);
    era.print([
      you.get_colored_name(),
      ' にも分かる。',
      rice.sex,
      'がその一歩のために、全力でトレーニングしてきたことが。',
    ]);
    rice.say(`うわ……やっぱり、やっぱり ${chara_self_name} みたいな……`);

    era.printButton(`このまま ${rice.sex}を放っておけない！`, 1);
    await era.input();
    era.print(`「${rice.name}、うちへおいで！」`);
    era.print(`${rice.name}の耳が「びくっ」と立った。`);
    rice.say('え？');
    rice.say(
      `つまり……${chara_self_name} のトレーナーになってくださる、ってことですか？`,
    );
    rice.say(`わあ……${chara_self_name}、すごくすごく嬉しいです、でも……！`);
    rice.say(
      `でも ${chara_self_name}……本当にダメなんです。たくさん迷惑をかけるし、レースにも出られません。`,
    );
    rice.say('それでも、私のトレーナーになってくれますか？');

    era.printButton('「それでも、お前を支えたい」', 1);
    await era.input();
    rice.say(['すごい……', you.elder_sibling_sex_title, 'みたい……']);
    you.say([you.elder_sibling_sex_title, '？']);
    rice.say('わっ！ご、ごめんなさい、聞かなかったことにしてください！');
    rice.say('あの……よ、よろしくおねがいします、トレーナーさん！');
    rice.say(`${chara_self_name}、がんばります！`);
    await era.printAndWait([
      '表情はまだ硬い。それでも',
      rice.sex,
      'は、懸命に笑顔を絞り出した。',
    ]);
  },
};
