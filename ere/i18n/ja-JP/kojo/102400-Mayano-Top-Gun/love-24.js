/**
 * @file マヤノトップガン - 恋慕
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async 24(maya, callname) {
    await maya.say_and_wait('マヤはね、小さいころから空に憧れてた。');
    await maya.say_and_wait(
      'マヤが小さかったとき、パパが空に連れてってくれたの。',
    );
    await maya.say_and_wait('あのときの景色、マヤ、一生忘れないと思う。');
    await maya.say_and_wait(
      '『大きくなったら、もっときれいな景色が見えるよ』って、パパが言ってた。',
    );
    await maya.say_and_wait('それでマヤ、トレセンに来た。');
    await maya.say_and_wait(
      'レース場なら、あのときの気持ち、もう一回感じられるかな？',
    );
    await maya.say_and_wait(`そうして、マヤは ${callname} と出会った。`);
    await maya.say_and_wait(
      '新しいこと、いっぱい体験した。新しい気持ち、いっぱい感じた。',
    );
    await maya.say_and_wait('だから……');
    await maya.say_and_wait('マヤが大きくなるまで、ずっとそばにいてね？');
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async 49(maya, callname) {
    await maya.print_and_wait(
      `ある日、${maya.name} はわけのわからない経路から、謎の本を手に入れた。`,
    );
    await maya.say_and_wait(
      `これが伝説の、大人しか読めない本？ これ読んだら、マヤも大人になれる？`,
    );
    await maya.say_and_wait(`これは……`);
    await maya.say_and_wait(`あわわわわわ……`);
    await maya.say_and_wait(`や……やっぱり、こういうのマヤにはまだ早い！`);
    await maya.print_and_wait(
      `刺激が強すぎて途中で諦めたが、本の内容はそれでも ${maya.name} に深く残った。`,
    );
    await maya.say_and_wait(`でも、${callname} となら……？`);
    await maya.print_and_wait(
      `${maya.name} は天才だ。何でもすぐに覚えてしまう————そのことを、誰かが近いうちに思い知らされるかもしれない。`,
    );
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} luna シンボリルドルフ
   * @param {CharaTalk} ag エアグルーヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} callname_18 エアグルーヴのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_k マヤノトップガンのフジキセキへの呼び方
   * @param {PrintedSpan} m_call_a マヤノトップガンのエアグルーヴへの呼び方
   */
  async 74(maya, luna, ag, you, callname, callname_18, m_call_k, m_call_a) {
    await era.printAndWait([
      'ある日。',
      you.get_colored_name(),
      ' は ',
      maya.get_colored_name(),
      ' と一緒に生徒会室へ呼ばれ、それから……',
    ]);
    await maya.say_and_wait(
      'わあっ！ マヤがファッションショーのゲストに選ばれたの！？',
    );
    await luna.say_and_wait(
      `ええ。学園の宣伝活動の一つでもあります。一般の方々に、見てみたい勝負服を尋ねたところ──`,
    );
    await ag.say_and_wait(
      `『ビューティフルドリームカップ』に登場したウェディング勝負服が一位……君がそのウェディング勝負服の持ち主だから、頼むことにした。`,
    );
    await maya.say_and_wait(
      'わっ！ マヤもあのときの服、大好き～！ え？ そうだ？ そうしたら──',
    );
    await ag.say_and_wait(
      `……もちろん、私も出る。私もウェディング衣装を持つ${ag.uma_sex_title}だからな。`,
    );
    await ag.say_and_wait(
      `それに……この企画にはもう一つ要点がある。ランウェイを歩くとき、エスコート役に先導してもらう。`,
    );
    await luna.say_and_wait(
      `公募でも、指名でも構いません。期限までに、ゲストご本人が自由に決めてください。`,
    );
    await maya.say_and_wait('エスコート……公募か指名か、だよね？ でもマヤは……');
    era.printButton('「どう選ぶ？」', 1);
    await era.input();
    await maya.say_and_wait(`……${callname} はどう思う？`);
    await maya.say_and_wait([
      'こ、公募なら、ファンの人も喜ぶよね！ でも案内が上手な ',
      m_call_k,
      ' にお願いするのもいいかも？',
    ]);
    await maya.say_and_wait(
      'でも……誰かに『指名して！』って言われたら……マヤは……',
    );
    era.printButton('「ん？」', 1);
    await era.input();
    await maya.say_and_wait('……もう～！！ なんでわからないの～！？');
    await maya.say_and_wait('いいよいいよ……！ じゃあ、作戦立てる！');
    await era.printAndWait([
      maya.get_colored_name(),
      ' は何かの作戦を練り始めたようだ。',
      you.get_colored_name(),
      ' は、しばらく様子を見ることにした……',
    ]);
    await era.printAndWait(
      `後輩の${maya.uma_sex_title}「マヤノ先輩！ エスコート、誰にするんですか？ みんな気になってます！」`,
    );
    await maya.say_and_wait(
      'ありがとう～！ 早く手を挙げてくれる人、見つけなきゃね～～！ ……（チラッ）。',
    );
    await era.printAndWait(
      'ファン「イベント、楽しみにしてます！ エスコート公募したら、絶対応募します！」',
    );
    await maya.say_and_wait(
      'マヤってモテる☆ 誰も手挙げてくれなかったら、公募にしよっかな～？ ……（チラッ）。',
    );
    era.drawLine();
    await era.printAndWait(
      `だが何日経っても${maya.sex}はエスコートを決めない。${you.name} がどうしたのかと思っていると……`,
    );
    await ag.say_and_wait(
      `失礼する。意見を聞きに来た……何を聞くかは、わかっているだろう？`,
    );
    era.printButton('「エスコートのことだろ？」', 1);
    await era.input();
    await ag.say_and_wait(
      `悩みはわかるが、いつまでも待ってはおれない。早く返事を──`,
    );
    await maya.say_as_unknown_and_wait([
      'ちょっと待って～～！',
      callname,
      '、これどういうこと！？',
    ]);
    era.printButton('「！？」', 1);
    await era.input();
    await maya.say_and_wait([
      '『早く返事』って『エスコートのこと』……！？ ',
      m_call_a,
      ' のエスコートになるの！？',
    ]);
    era.printButton('「え？」', 1);
    await era.input();
    await maya.say_and_wait(
      'マヤ……マヤも、ずっと手挙げてくれるの待ってたのに～！！',
    );
    era.printButton('「は！？」', 1);
    await era.input();
    await maya.say_and_wait(
      `だってマヤの相棒は ${callname} だもん！ 指名するより、自分からやってくれるほうが嬉しい……`,
    );
    await maya.say_and_wait([
      'だからずっと口を開くの待ってたのに、',
      m_call_a,
      ' が指名しちゃった！',
    ]);
    await ag.say_and_wait(
      `待ちなさい！ 何を言っている。私のエスコートは、もう決まっている。`,
    );
    await maya.say_and_wait(
      'えっ！？ ……じゃ、じゃあ『エスコート』の『返事』って……？',
    );
    era.printButton('「こっちのエスコート申請を急かしてたんだ」', 1);
    await era.input();
    await maya.say_and_wait('……あー～～！ マヤの勘違い！？ よかった～～！');
    await maya.say_and_wait(
      'え……えへへ……間違えた、ごめん。『じらし作戦』失敗したと思った──',
    );
    era.printButton('「『じらし作戦』？」', 1);
    await era.input();
    await maya.say_and_wait('……やばっ！');
    await maya.say_and_wait(
      'うぅ～～そうだよ！ マヤがモテモテなとこ見せて焦らして、自分から一緒に行きたいって言わせたかったの！',
    );
    await maya.say_and_wait(
      'マヤは、トレーナーさんに一番特別でいてほしい。あなたにとってマヤが一番大事……そう思ってほしいの……',
    );
    era.printButton('「もう一度、チャンスをもらえるか？」', 1);
    await era.input();
    await maya.say_and_wait('……し……仕方ない……一回だけなら、……いいよ。');
    era.println();

    era.printButton(
      `「君はもちろん、俺にとって一番大事な人だ」（関係を進める）`,
      1,
    );
    era.printButton(`「エスコートさせてくれ」（まだ進めない）`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(
        '……ほ、ほんと？ マヤが一番特別？ マヤが一番大事で、一番キラキラ？',
      );
      era.printButton('「ああ！」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへ……！ 作戦は失敗したけど、気持ちはわかったから、結果はまあまあ！',
      );
      await maya.say_and_wait(
        'でも～～覚悟しといてよ？ 当日は、もっと～すごいこと言わせるから☆',
      );
      era.printButton('「もっとすごいこと……！？」', 1);
      await era.input();
      await ag.say_and_wait([
        'はあ……では ',
        callname_18,
        ' の名前で申請しておく。その『すごいこと』で騒ぎを起こすなよ。',
      ]);
    } else {
      await maya.say_and_wait('……うん！ えへへ、嬉しい。');
      await ag.say_and_wait([
        'では ',
        callname_18,
        ' の名前で申請しておく。はあ……当日は騒ぎを起こすなよ。',
      ]);
      era.drawLine();
      await maya.say_and_wait(
        'うん～～！ やっと本番だ～服も準備できた！ あとは……',
      );
      era.printButton('「あとは心の準備だな」', 1);
      await era.input();
      await maya.say_and_wait(
        'そうなんだけど、胸がバクバク止まらない！ 万全の準備、いつまで経ってもできそうにない～～でも……',
      );
      await maya.say_and_wait(
        'それってマヤが、それだけ幸せってこと！ ……ランウェイ、いちばんいいとこ見せるよ。',
      );
      await era.printAndWait(
        `${you.name} と ${maya.name} は気合を入れ、ランウェイへ踏み出した。`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 マヤノトップガンのライスシャワーへの呼び方
   * @param {string} self_call_30 ライスシャワーの自称
   * @param {PrintedSpan} r_call_m ライスシャワーのマヤノトップガンへの呼び方
   */
  async 89(maya, rice, you, callname, call_30, self_call_30, r_call_m) {
    await era.printAndWait(
      `${you.name} と ${maya.name} は招待され、あるイベントに参加した。そうは言っても、そのイベントは……`,
    );
    await maya.say_and_wait(
      '日差し超まぶしい！ ウェディングイベント日和☆ 絶対大成功させるよ～！',
    );
    era.printButton('「気合十分だな」', 1);
    await era.input();
    await maya.say_and_wait(
      'だってマヤ、モデルに選ばれたんだもん！ 早くウェディングドレス着て、みんなの視線集めたい──',
    );
    await maya.say_and_wait('──え？ へん？ あっちでキョロキョロしてるの……');
    await maya.say_and_wait([
      'やっぱり ',
      call_30,
      '！ よかった～！ このイベント見に来たの？',
    ]);
    await rice.say_and_wait(
      `ひゃ……は、はい……結婚式って、幸せな気持ちになれるから……${self_call_30}、ずっと楽しみにしてたの。`,
    );
    await rice.say_and_wait(`だからトレーニング早めに切り上げて──`);
    await rice.say_and_wait(`ひゃあっ！ い、今ごろごろって……あ、雨！？`);
    await era.printAndWait(
      `そのとき突然雨が降り出した。${you.name} は通り雨だと思ったが……`,
    );
    await era.printAndWait(
      '撮影スタッフ「まずい──晴れないか？ 開催はできるけど、お客さんがほとんどいなくなって……いったん中止に……」',
    );
    await maya.say_and_wait('む～～～～～');
    await rice.say_and_wait(
      `ご……ごめんなさい……ごめんなさい！ 雨、きっと ${self_call_30} のせい、ごめんなさい！`,
    );
    await rice.say_and_wait(`${self_call_30} が来たから……！`);
    era.printButton('「君のせいじゃないよ」', 1);
    await era.input();
    await maya.say_and_wait(
      'そうだよ！ それにイベント、中止になってない。雨じゃマヤの輝きは隠せない！',
    );
    await maya.say_and_wait(
      '違う！ 雨で、もっと輝くんだから！ 二人はそこで見てて☆',
    );
    await maya.say_and_wait(
      'チーン♪ おまたせ☆ マヤのパレードで、イベント開幕だよ～！',
    );
    await era.printAndWait(
      '女性ファン「トップガンちゃんかわいい～！ うぅ……天気よければなあ……！」',
    );
    await maya.say_and_wait('雨もマヤのアクセサリーだよ♪ 見て！ キラキラ～☆');
    await era.printAndWait(
      '男性ファン「……！！ 本当だ！ カメラのフラッシュで、雨粒がスパンコールみたいに……！」',
    );
    await maya.say_and_wait('でしょ♪ でも、これからが本番！ ……3……2……1──');
    await maya.say_and_wait('お日さま、登場──☆');
    await era.printAndWait('ファンたち「わああああ～～～！！」');
    await rice.say_and_wait([
      r_call_m,
      `、すごい……！ みんな笑ってる……魔法をかけられたみたい……！`,
    ]);
    await maya.say_and_wait(
      'えへへ、ありがとう☆ 前にパパが、雲の種類と晴れるタイミングの見分け方教えてくれたの～',
    );
    await maya.say_and_wait(
      'だってマヤのパパ、空を飛ぶパイロットだもん！ ふんふん！',
    );
    era.printButton('「だから雨を使って見せられたのか？」', 1);
    await era.input();
    await maya.say_and_wait(
      'そ～う！ でもね、天気もイベントの中身も、いちばん大事なのは──',
    );
    await maya.say_and_wait('マヤが、みんなの太陽になること！');
    await maya.say_and_wait(
      'この服着たとき、心の中で誓った。マヤの輝きで、みんなをキラキラさせるって。',
    );
    await maya.say_and_wait(
      `それがマヤのいちばんなりたい──大人の${maya.phy_sex_title}だもん！`,
    );
    await rice.say_and_wait([
      '……！ ……あ、あの、',
      r_call_m,
      ' もみんなも、キラキラしてるよ。',
    ]);
    await rice.say_and_wait(
      `それを見て、${self_call_30} の中も輝いて、もっと頑張ろうって思えた。だから……ありがとう！`,
    );
    await maya.say_and_wait(
      'イベント、楽しかった～！ でもね、これからが──マヤの本番！ 花火！',
    );
    await maya.say_and_wait(
      '……本当は、いちばんキラキラする服着て、一緒に花火見たかったのに。雨で汚れちゃった。',
    );
    await maya.say_and_wait(`${callname} 攻略計画は、次の機会に取っとくね☆`);
    era.println();

    era.printButton(
      '「何を着ても、トップガンがいちばん輝いてる」（関係を進める）',
      1,
    );
    era.printButton(
      '「次もモデルになれるよう、頑張ろう！」（まだ進めない）',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('……！！');
      await maya.say_and_wait(
        'マ、マヤ……落とされた……マヤ、プロポーズされた～～！',
      );
      era.printButton('「まだプロポーズしてないぞ！？」', 1);
      await era.input();
      await maya.say_and_wait(
        '照れないでよ～！ ずっと一緒に並んで走るってことでしょ？',
      );
      await maya.say_and_wait(
        'これでトレーナーさんの太陽は、ずっとマヤだよ☆ 負けないから～！',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        ' はそう言って、はしゃいだ笑顔を見せた。',
      ]);
      await maya.say_and_wait('イェイ～☆ 応援ありがとう！ マヤ、幸せ～！');
      await maya.say_and_wait(
        `これからも ${callname} と一緒に、みんなに輝きを届けるって誓う！`,
      );
      await maya.say_and_wait(`ね！ ${callname}♪`);
      era.printButton('「！ ……もちろん、俺も誓う！」', 1);
      await era.input();
      await era.printAndWait('二人の宣言に、会場が湧いた。');
    } else {
      await maya.say_and_wait(
        'うん！ 次も、その次もモデルになる。この服にどんどん似合うようになって、それから──',
      );
      era.printButton('「それから？」', 1);
      await era.input();
      await maya.say_and_wait(
        'そ──それから……マヤがこの服に似合ったとき、……その……ずっと……マヤと……つまり──',
      );
      await maya.say_and_wait(
        'ひゃっ！？ ──わ、わあっ！ 花火！ み、見て見て、トレーナーさん！',
      );
      await maya.say_and_wait(
        '……じゃあ──は、花火見終わったし、帰ろ！ お腹も空いたし……あの……',
      );
      await maya.say_and_wait(
        '……聞いて！ いつか絶対、今の続き、勇気出して言い切るから。',
      );
      await maya.say_and_wait('……待っててね！');
    }
    return ret;
  },
};
