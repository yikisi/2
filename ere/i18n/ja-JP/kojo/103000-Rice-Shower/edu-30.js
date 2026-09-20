/**
 * @file ライスシャワー - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  async train(rice) {
    const buffer = [
      () => rice.say_and_wait('がんばります……よーっ！'),
      () => rice.say_and_wait('うん、行きましょう！'),
      () => rice.say_and_wait('楽しみです……'),
    ];
    await get_random_entry(buffer)();
  },
  async train_fail(rice) {
    const buffer = [
      () => rice.say_and_wait('うう……'),
      () => rice.say_and_wait('ん……？'),
    ];
    await get_random_entry(buffer)();
  },
  ts_content(rice, attr) {
    era.print([
      rice.get_colored_name(),
      ' の',
      attr,
      'トレーニングがうまくいった……',
    ]);
  },
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        rice.get_colored_name(),
        ' と一緒にトレーニングを終えたあと——',
      ]);
      await rice.say_and_wait([
        'え？',
        callname,
        ' は、まだ帰らないんですか？',
      ]);
      era.printButton('「明日のトレーニングの準備をしなきゃ」', 1);
      era.printButton(`「${rice.name} を見とれてた」`, 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          callname,
          '……',
          self_name,
          ' のために、まだお仕事を……？',
        ]);
      } else {
        await rice.say_and_wait(['うわああ、', callname, '！']);
      }
      await you.say_and_wait([rice.name, ' は先に休んでて']);
      await rice.say_and_wait('……うん、わかりました');
      await rice.say_and_wait(['おやすみなさい、', callname, '']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' が明日の準備を終えて、帰り道に差し掛かったとき。',
      ]);
      await era.printAndWait([
        'トレーニング場には、まだ走っている ',
        rice.get_colored_name(),
        ' の姿があった。',
      ]);
      await rice.say_and_wait('はぁ……はぁ……ま、まだ……');
      await rice.say_and_wait([self_name, '、まだいけます、がんばらなきゃ……']);
      await you.say_and_wait('自主トレ？');
      await rice.say_and_wait(['あ……', callname, '']);
      await rice.say_and_wait('見られちゃいました……');
      await rice.say_and_wait([
        callname,
        ' が ',
        self_name,
        ' のためにがんばってる。だったら、',
        self_name,
        ' も、がんばらないと！',
      ]);
      era.printButton('「じゃあ、もう少し付き合おうか」', 1);
      era.printButton('「その気持ちが嬉しいよ」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['うん、ありがとう、', callname, '！']);
      } else {
        await rice.say_and_wait('その気持ちが嬉しいです');
        await rice.say_and_wait([
          'む……でも、',
          self_name,
          ' も ',
          callname,
          ' の役に立ちたいです',
        ]);
      }
      await era.printAndWait([
        'そのあと、',
        you.get_colored_name(),
        ' は傍らで ',
        rice.get_colored_name(),
        ' の追加トレーニングを見守った。',
      ]);
      era.drawLine({ content: 'トレーニング終了後' });
      era.printButton('「ひとりで帰るのは寂しいなー」', 1);
      await era.input();
      await rice.say_and_wait('え？');
      await rice.say_and_wait([
        'それは……',
        self_name,
        ' と一緒に、ってことですか？',
      ]);
      await rice.say_and_wait([
        self_name,
        '、着替えてきます！ちょっと、待っててください',
      ]);
      await era.printAndWait([
        'それから、',
        you.get_colored_name(),
        ' は着替えた ',
        rice.get_colored_name(),
        ' と、一緒に帰路についた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'レースに向けて';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      const buffer = [
        () =>
          rice.say_and_wait(['あとは全力で走る、ですよね？', callname, '！']),
        () =>
          rice.say_and_wait([self_name, '、最後まで走ります！がんばるーっ！']),
        () =>
          rice.say_and_wait([
            'まだ走ってないのに、いいレースになりそうな予感。',
            self_name,
            '、今日はとっても楽しみです！',
          ]),
        () => rice.say_and_wait('ふう、よし……！まだ始まってないですか？'),
        () =>
          rice.say_and_wait(
            'ふ、ふるえてきました……あの、お兄ちゃん。ライス、ちょっと手を握ってもいいですか？',
          ),
        () =>
          rice.say_and_wait(
            'みんなを幸せにしたいから……ライス、全力で走ります！',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_moti_add: (() => {
    const title = '武者震い';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('うう……うう……');
      era.printButton('「調子が悪いのか？」', 1);
      await era.input();
      await you.say_and_wait('調子が悪いのか？');
      await rice.say_and_wait('え？ち、違います。ただ、ちょっと緊張して……');
      await rice.say_and_wait('でも、もう大丈夫です');
      await rice.say_and_wait([
        'こうして ',
        callname,
        ' と話してると、安心します',
      ]);
      await rice.say_and_wait([
        self_name,
        '、がんばります。ちゃんと見ていてくださいね、',
        callname,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        'や、やりました、',
        callname,
        '。',
        self_name,
        '、勝ちました……',
      ]);
      await you.say_and_wait('もっと胸を張っていいぞ');
      await rice.say_and_wait('胸を張る……ですか？あの……');
      await rice.say_and_wait(
        'それに、いちばんです！本当に、ありがたく受け取らないと！',
      );
      await rice.say_and_wait([
        'ふ、ふんふん！こんな感じですか？',
        self_name,
        '、胸を張れてますか？',
      ]);
      era.printButton('「お前のことは誇りだよ」', 1);
      era.printButton('「次も勝とう」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          self_name,
          ' のことを、誇り……？な、なんだか恥ずかしいです……',
        ]);
        await rice.say_and_wait([
          'でも、',
          callname,
          ' にそう思ってもらえて、',
          self_name,
          ' も、嬉しいです……',
        ]);
        await rice.say_and_wait('嬉しいのに、恥ずかしい……');
        await rice.say_and_wait([
          'うう、',
          self_name,
          '、ちょっと、よくわかんなくなりました～',
        ]);
      } else {
        await rice.say_and_wait(
          'う、うん！次のレースも勝って、みんなを喜ばせたいです',
        );
        await rice.say_and_wait([
          'だから、',
          callname,
          '。これからも、',
          self_name,
          ' のトレーニング、お願いします！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        'ふう……よかった。',
        self_name,
        '、ちゃんとがんばれました……',
      ]);
      await rice.say_and_wait('次は、いちばんが欲しいな……じ、冗談です、ふふ');
      era.printButton('「よくがんばったな」', 1);
      era.printButton('「次はいちばんを取ろう！」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['う、うん！ありがとう、', callname, '！']);
        await rice.say_and_wait([
          'でも ',
          self_name,
          '、',
          callname,
          ' と一緒だから、こんなにがんばれたんだと思います',
        ]);
        await rice.say_and_wait([
          self_name,
          ' ひとりだとダメダメですけど、一緒なら、もっとがんばれます……',
        ]);
      } else {
        await rice.say_and_wait('あ、あの……う、うん……次、がんばります！');
        await rice.say_and_wait('や、やっぱり、いちばんを目指さないと……');
        await rice.say_and_wait('もっと、がんばらないと！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'レース敗北';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait(['うう……', self_name, '、負けました……']);
      await rice.say_and_wait([
        'ごめんなさい。',
        self_name,
        '、',
        callname,
        ' をがっかりさせちゃいましたね……',
      ]);
      era.printButton('「次があるさ」', 1);
      era.printButton('「負けた理由を考えよう」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          'あの……うん。',
          callname,
          ' の言うとおりです',
        ]);
        await rice.say_and_wait([
          self_name,
          '、次は絶対勝ちます。',
          callname,
          '、ちゃんと見ていてくださいね',
        ]);
      } else {
        await rice.say_and_wait(
          '理由……そうです。がむしゃらにがんばるだけじゃ、また負けます',
        );
        await rice.say_and_wait(
          '負けた理由を見つけて、次のレースに活かさないと',
        );
        await rice.say_and_wait(
          'どれだけダメダメでも、落ち込んでるだけじゃ、ずっとダメなままです',
        );
        await rice.say_and_wait([
          self_name,
          '、今回負けた理由を見つけます。それで、次は勝ちたいです！',
        ]);
        await era.printAndWait(['そのあと、ふたりで今回の敗因を振り返った。']);
        await era.printAndWait([
          rice.get_colored_name(),
          ' の気持ちは、不思議なくらい上を向いている。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_love: (() => {
    const title = '熱恋';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        'センターのLIVEを終えた ',
        rice.get_colored_name(),
        ' と、',
        you.get_colored_name(),
        ' の気持ちは、どちらも高揚していた。',
      ]);
      await era.printAndWait([
        'だが今の ',
        rice.get_colored_name(),
        ' は、艶のある瞳のまま、小さな足取りを急かして ',
        you.get_colored_name(),
        ' へ駆け寄ってくる。',
      ]);
      await you.say_and_wait('ん……');
      await era.printAndWait([
        '勝負服の ',
        rice.get_colored_name(),
        ' は、興奮した両手で ',
        you.get_colored_name(),
        ' の脇腹を抱きしめた。',
      ]);
      await era.printAndWait([
        rice.sex,
        'は不思議そうな顔で ',
        you.get_colored_name(),
        ' を見上げ、瞳から艶が溢れている。',
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        '、何か悪いことしましたか？',
      ]);
      await rice.say_and_wait([
        'どうして……',
        self_name,
        ' を、抱いてくれないんですか？',
      ]);
      await era.printAndWait([
        '潤んだ瞳に抗えず、',
        you.get_colored_name(),
        ' は少女の小さな体をきつく抱きしめた。',
      ]);
      await era.printAndWait([
        '時が流れ、そろそろ着替えて解散だと判断した ',
        you.get_colored_name(),
        ' は、',
        rice.get_colored_name(),
        ' の肩を掴む。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は名残惜しそうに ',
        you.get_colored_name(),
        ' の指を撫で、「またあとで」とだけ言って更衣室へ向かった。',
      ]);
      await era.printAndWait([
        '何をするにも慎重で、びくびくしていた ',
        rice.get_colored_name(),
        ' が、今では小悪魔みたいに ',
        you.get_colored_name(),
        ' へ甘えてくる。',
      ]);
      await era.printAndWait([
        'LIVEのあとのトレーニングが終わると、体操服の ',
        rice.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' へ歩み寄った。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' はゼッケンのあたりを ',
        you.get_colored_name(),
        ' に押し当て、',
        you.get_colored_name(),
        ' の匂いを楽しんでいる。',
      ]);
      await era.printAndWait([
        '娘を持つ父親は、こんな気持ちなのだろうか——そう思いながら、',
        rice.sex,
        'をもう一度、強く抱き返した。',
      ]);
      await you.say_and_wait(['くすぐったいぞ、', rice.name]);
      await rice.say_and_wait('え？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' に、着替えを促す。',
      ]);
      await era.printAndWait([
        'ふらつく背中を見送って、',
        you.get_colored_name(),
        ' はふたりの関係が、確実に変わったと悟った。',
      ]);
      await era.printAndWait([
        '最近、',
        rice.get_colored_name(),
        ' の甘えは、だんだん過激になっている。',
      ]);
      await era.printAndWait([
        '抱きしめる、キスする、',
        you.get_colored_name(),
        ' の手を引いて胸に触れさせてしまう——そんなことすら、もう違和感がなくなっていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = '育成開始';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, self_name) => {
      await era.printAndWait('トレーニング場');
      await rice.say_and_wait('トレーニングまで、まだ少しあります……');
      await rice.say_and_wait('……ちょっと、走ってこようかな');
      await rice.say_and_wait([
        'えへへ……',
        self_name,
        ' 選手、歓声のなか、コースへ——',
      ]);
      await you.say_as_passer_by_and_wait(`${rice.uma_sex_title}A`, 'わ！！！');
      await rice.say_and_wait('え！？');
      bourbon.name = '実力者の' + bourbon.uma_sex_title;
      await bourbon.say_and_wait('はぁ……はぁ……！');
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        'また記録更新！',
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        'これでもう、来年のクラシックの主役は確定だね！',
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}B`,
        'うん……すごくきれいな走り。ねえ、あの、ぜひ……',
      );
      await bourbon.say_and_wait('……予定された行程が残っています。失礼します');
      await era.printAndWait([bourbon.get_colored_name(), ' は走り去った。']);
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}たち`,
        'あーー待ってーー！',
      );
      await rice.say_and_wait('……すごい。コースの脇も、見物の人でいっぱい……');
      await rice.say_and_wait([
        '……今、',
        self_name,
        ' があそこに行ったら、邪魔になる……だけですよね',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' の、トゥインクルシリーズへの挑戦が始まった！',
      ]);
      bourbon.name = undefined;
    };
    f.title = title;
    return f;
  })(),
  we_15: (() => {
    const title = '湖に咲く花';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} b_call_r バクシンオーのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, bakushin, you, b_call_r, tenn_spr) => {
      await rice.say_and_wait(
        'わ……！お客さん……いっぱい……！それに、みんなの目がきらきらしてます',
      );
      await era.printAndWait([
        'この日、',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は ',
        tenn_spr,
        ' の会場へ見学に来ていた。そのわけは——',
      ]);
      era.drawLine({ content: '1週間前' });
      await era.printAndWait(
        '頬杖をついて、危ういほどの熱を込めた目で、その光景を眺めていたのは——。',
      );
      await bakushin.say_as_unknown_and_wait('はあっ……はぁ……');
      await bakushin.say_as_unknown_and_wait([b_call_r, '……待ってください……']);
      await rice.say_and_wait('え？ど、どうしたんですか？');
      await bakushin.say_and_wait(
        'いえ、実は先程から学級委員長の使命を果たすため、勝手について走っておりました！',
      );
      await bakushin.say_and_wait([
        b_call_r,
        ' のスタミナは素晴らしい！そこで、提案があります！',
      ]);

      await bakushin.say_and_wait([
        '一緒に、',
        tenn_spr,
        ' を見学しませんか？',
      ]);
      await bakushin.say_and_wait([
        '長距離を制するスピードを持つ',
        rice.uma_sex_title,
        'たちが、あそこにいるんです！',
      ]);
      await rice.say_and_wait('一緒に……？天皇……賞？');
      await bakushin.say_and_wait('ええ、一緒に行きましょう！');
      await bakushin.say_and_wait(
        '友の秘めた力を引き出すのも、委員長の務めですから！',
      );
      await era.printAndWait([
        'まさに、',
        bakushin.get_colored_name(),
        ' の言うとおりだ。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' の長距離適性は……確かに、鋼のように強い。',
      ]);
      await era.printAndWait([
        tenn_spr,
        ' も、いずれ',
        rice.sex,
        'の目指す舞台のひとつになるだろう。',
      ]);
      era.printButton('「京都へ見学に行こう」', 1);
      await era.input();
      await bakushin.say_and_wait('やった！ひとりで行くのは寂しいですからね！');
      await bakushin.say_and_wait('ちなみに、あちらのお菓子は300円ですよ！');
      await rice.say_and_wait('……なんだか、遠足みたいです');
      await rice.say_and_wait('えへへ、楽しみです！');
      await era.printAndWait('——そして、いま。');
      await bakushin.say_and_wait('ああ～！なんという激しい追い込み！');
      await bakushin.say_and_wait('ワタシ、もっと前で見ます！！');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '変わるための一歩';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} sprg_sta 皐月賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      sprg_sta,
    ) => {
      await rice.say_and_wait([
        self_name,
        '……走りきりました！メイクデビュー、勝ちました！',
      ]);
      era.printButton(`「${rice.name}、よくがんばったな」（好感+5）`, 1);
      era.printButton(`${rice.name} の頭を撫でる（恋慕+1）`, 2);
      const ret = await era.input();
      await rice.say_and_wait(['わ……ありがとう！', callname, '……']);
      await rice.say_and_wait([
        'え……へへ。これからも、よ、よろしくお願いします、',
        self_name,
        '！',
      ]);
      await rice.say_and_wait([
        '——こうして、',
        you.get_colored_name(),
        ' と ',
        self_name,
        ' は、最初の一歩を踏み出しました！',
      ]);
      era.drawLine({ content: '数日後' });
      await era.printAndWait([
        'この日、',
        you.get_colored_name(),
        ' はまた ',
        rice.get_colored_name(),
        ' と、競馬場へ来ていた。',
      ]);
      await rice.say_and_wait('わ……人、いっぱい。まるでG1みたいです');
      await rice.say_and_wait('……あれ？でも今日は、G2でもG3でもないはず……？');
      await you.say_as_passer_by_and_wait(
        '実況',
        '登場です、ミホノブルボン！メイクデビューの舞台へ！！',
      );
      await rice.say_and_wait(['……', call_26, '']);
      await you.say_as_passer_by_and_wait('実況', '差を詰め、一気に先頭へ！');
      await you.say_as_passer_by_and_wait(
        '実況',
        'スピードは落ちない、そのまま突っ走る！',
      );
      await you.say_as_passer_by_and_wait('実況', [
        bourbon.get_colored_name(),
        '、この勢いのまま先頭で——ゴール！！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客A',
        'あー、来年のクラシックが楽しみだなあ',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        'オレ、絶対ブルボンを応援するからな！',
      );
      await you.say_as_passer_by_and_wait('観客B', [
        'そうそう！未来の三冠',
        rice.uma_sex_title,
        'だ！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客A',
        'ブルボンのレース、絶対見に行くぞ！',
      );
      await rice.say_and_wait([
        '……',
        call_26,
        ' の走りを見て、みんな、笑ってますね',
      ]);
      await rice.say_and_wait([self_name, ' も、あんなふうに、なれますか？']);
      era.printButton('「なれる！」', 1);
      await era.input();
      await rice.say_and_wait(['え？', callname, '！？']);
      await you.say_and_wait([rice.name, ' なら、きっとできる！']);
      await rice.say_and_wait('！');
      await rice.say_and_wait([
        '……えへへ。',
        callname,
        ' の声、魔法みたいです',
      ]);
      await rice.say_and_wait(
        '絶対できないことでも。そう思えば、できそうな気がします',
      );
      await you.say_and_wait([rice.name, ' も、クラシックに出てみないか？']);
      await rice.say_and_wait('……クラシック');
      await era.printAndWait([
        '——クラシックに出るということは、同じ年にデビューした',
        rice.uma_sex_title,
        'たちと競うということだ。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' と ',
        bourbon.get_colored_name(),
        ' が、同じ舞台で——',
      ]);
      await rice.say_and_wait('！');
      era.printButton(`「${rice.name} なら、できる」`, 1);
      await era.input();
      await rice.say_and_wait('……！');
      await rice.say_and_wait([
        callname,
        ' は、ずっと ',
        self_name,
        ' を信じてくれてるんですね……',
      ]);
      await rice.say_and_wait('わかりました。そうします');
      await rice.say_and_wait(
        'ちょっと怖いです。でも、もう、変われない悪い子のままは嫌です',
      );
      await rice.say_and_wait([
        self_name,
        '……がんばります。追いつきます……',
        call_26,
        ' に！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は、クラシックへ挑むと約束した。',
      ]);
      await era.printAndWait(['まずは ', sprg_sta, '。']);
      await era.printAndWait(
        '三冠路線の前哨として、その方向へ力を注ぐことにした。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      bakushin,
      urara,
      you,
      callname,
      self_name,
      call_52,
    ) => {
      await era.printAndWait([
        '今年はクラシックへの挑戦が始まる。',
        you.get_colored_name(),
        ' が情報収集のためテレビを見ていると——',
      ]);
      await you.say_as_passer_by_and_wait(
        'テレビ',
        'いやー、今期のクラシックは面白い顔ぶれが揃いましたね',
      );
      await you.say_as_passer_by_and_wait('テレビ', [
        '短距離に敵なしの ',
        bakushin.get_colored_name(),
        '、',
        rice.get_colored_name(),
        ' も出走名簿に名を連ねていますが、やはり——',
      ]);
      await you.say_as_passer_by_and_wait('テレビ', [
        bourbon.get_colored_name(),
        ' は外せません。なんといっても未来の三冠',
        rice.uma_sex_title,
        '候補ですから！',
      ]);
      await rice.say_and_wait([
        'あけましておめでとうございます、',
        callname,
        '',
      ]);
      era.printButton(`「${rice.name}！？」`, 1);
      await era.input();
      await rice.say_and_wait(['うん。', self_name, ' です']);
      await rice.say_and_wait([
        'へへ、新年の挨拶に来たんです。',
        you.get_colored_name(),
        ' の邪魔、してませんか？',
      ]);
      era.printButton('「邪魔なんかじゃないよ」', 1);
      await era.input();
      await rice.say_and_wait('あ……よかった');
      await rice.say_and_wait([
        'えへへ、聞いてください。今朝、',
        call_52,
        ' が言ってたんです',
      ]);
      era.drawLine({ content: '朝' });
      await urara.say_and_wait('お正月だからシュークリーム食べよー！');
      await urara.say_and_wait('……シュークリーム、おいしいかな？');
      era.drawLine({ content: 'いま' });
      era.printButton('「おいしくないのか？」', 1);
      await era.input();
      await rice.say_and_wait([
        'ふふっ、そうですよね。',
        self_name,
        ' も、同じこと言いました',
      ]);
      await rice.say_and_wait('それで、あの……');
      await rice.say_and_wait([
        self_name,
        '、',
        callname,
        ' と新年の抱負を話したくて。今年の目標を……',
      ]);
      await rice.say_and_wait('だめ、ですか？');
      era.printButton('「いいよ」', 1);
      await era.input();
      await rice.say_and_wait('へへ、やった！どんな目標にしましょう？');
      await rice.say_and_wait([callname, ' は、どんな目標を立てたいですか？']);
      era.printButton(`「${rice.name} にクラシックを獲らせる」`, 1);
      await era.input();
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait([
        '……',
        self_name,
        ' も、今年の目標、立てていいですか？',
      ]);
      era.printButton('「もちろん」', 1);
      await era.input();
      await rice.say_and_wait([
        self_name,
        '、自分と ',
        callname,
        ' の目標のために、がんばります！',
      ]);
      era.printButton('その意気だ！（根性+10）', 1);
      era.printButton('体も大事にしよう（スタミナ+10）', 2);
      era.printButton('しっかり勉強しよう（スキルPt+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait('うん！すぐに実現できるかは、わからないです');
          await rice.say_and_wait(['でも ', self_name, '、絶対あきらめません']);
          await era.printAndWait([
            rice.get_colored_name(),
            ' は、そうして新しい決意を固めた。',
          ]);
          break;
        case 2:
          await rice.say_and_wait('あわ……レース前に風邪をひいたら、大変です');
          await rice.say_and_wait([
            'それに ',
            self_name,
            ' が休んだら、',
            callname,
            ' のトレーニング計画が——',
          ]);
          await rice.say_and_wait('あううう、いつでも元気でいないと！');
          await era.printAndWait([
            you.get_colored_name(),
            ' はひとりで悩み込む ',
            rice.get_colored_name(),
            ' を慌てて慰めつつ、これからの計画を立て始めた。',
          ]);
          break;
        case 3:
          await rice.say_and_wait('はい！');
          await rice.say_and_wait(['なんだか ', callname, '、先生みたいです']);
          await rice.say_and_wait(
            'ふふ……今日の授業も、よろしくお願いします……先生',
          );
          await era.printAndWait([
            'そのあと ',
            you.get_colored_name(),
            ' は ',
            rice.get_colored_name(),
            ' と、レース映像を見ながら研究した。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = '未来へ、立ち止まるな';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('はぁ……はぁ……！');
      era.printButton('「お疲れ」', 1);
      await era.input();
      await rice.say_and_wait(['ありがとう、', callname]);
      await rice.say_and_wait('でも、見えた課題も、たくさんあります');
      await rice.say_and_wait([self_name, '、もっとがんばらないと！']);
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_lose: (() => {
    const title = '未来へ、立ち止まるな';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, callname, self_name) => {
      await rice.say_and_wait('はぁ……はぁ……！');
      era.printButton('「お疲れ」', 1);
      await era.input();
      await rice.say_and_wait(['ありがとう、', callname]);
      await rice.say_and_wait('でも、見えた課題も、たくさんあります');
      await rice.say_and_wait([self_name, '、もっとがんばらないと！']);
      era.drawLine({ content: '地下道の別の場所' });
      await you.say_as_passer_by_and_wait(
        '記者A',
        'ブルボン選手！ブルボン選手！！',
      );
      await bourbon.say_and_wait('……何か用ですか？');
      await you.say_as_passer_by_and_wait(
        '記者A',
        'さすが【栗毛の超特急】！今回のレースでも、その称号の片鱗を見せてくれましたね！',
      );
      await you.say_as_passer_by_and_wait(
        '記者A',
        'みんな期待してますよ！ブルボン選手が三冠を達成する、あの輝かしい瞬間を！',
      );
      await bourbon.say_and_wait('応援、感謝します。では、失礼します');
      await you.say_as_passer_by_and_wait(
        '記者A',
        'あ、待って、ちょっと待って！せめてもう一言！」',
      );
      await you.say_as_passer_by_and_wait('記者A', 'もう一つだけ、質問を！」');
      await you.say_as_passer_by_and_wait(
        '記者A',
        'つまり……今回のレースで。ブルボンのライバルは、誰だと思いますか？',
      );
      await bourbon.say_and_wait('ライバル？');
      await bourbon.say_and_wait('判断に、そのような存在は不要です');
      await bourbon.say_and_wait(
        '一位を取るなら、相手は必ずそこにいます。ライバルと認定する必要はありません',
      );
      await rice.say_and_wait('……すごい');
      await rice.say_and_wait('自信も実力もある。自分の道を、進んでる……');
      era.printButton(`「${rice.name} も、がんばろう」`, 1);
      await era.input();
      await era.printAndWait('うん！');
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '追いついた';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (rice, bourbon, you, callname, self_name, kiku_sho) => {
      await rice.say_and_wait('はぁ……はぁ……！！');
      era.printButton('「大丈夫か！？」', 1);
      await era.input();
      await rice.say_and_wait('大丈夫、大丈夫です');
      await rice.say_and_wait(['それより、', callname, '、見てましたか？']);
      await rice.say_and_wait([self_name, '、追いつきました！']);
      await rice.say_and_wait(['えへへ、で、できた——……']);
      await era.printAndWait([rice.get_colored_name(), ' は倒れた。']);
      await rice.say_and_wait('ふ……ふ……');
      await era.printAndWait(
        '全力を出し切って張り詰めていた糸が、急に緩んだらしい。',
      );
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' は',
        rice.sex,
        'を肩に預け、',
        rice.get_colored_name(),
        ' を休ませようと歩き出した、そのとき——',
      ]);
      await bourbon.say_and_wait(['——', rice.sex, 'の発言、理解できません']);
      await bourbon.say_and_wait('今回のレース内容であれば');
      await bourbon.say_and_wait([
        rice.sex,
        'は『ブルボンに勝った』と言うべきです',
      ]);
      era.printButton('この子には、そっちのほうが大事なんだ', 1);
      await era.input();
      await bourbon.say_and_wait('……理解不能');
      era.drawLine();
      await rice.say_and_wait([
        'ご、ごめんなさい！',
        self_name,
        '、また ',
        callname,
        ' に迷惑を……！',
      ]);
      era.printButton('「疲れたんだから仕方ない」', 1);
      await era.input();
      await rice.say_and_wait('でも……');
      era.printButton('「次のレースを考えよう」', 1);
      await era.input();
      await rice.say_and_wait('え？……次？');
      era.printButton('「クラシックは、まだ終わってない」', 1);
      await era.input();
      await rice.say_and_wait(['……そうですよね、', callname]);
      await rice.say_and_wait(
        '運よく今回勝てただけなのに、それで満足したら、だめです',
      );
      await era.printAndWait([
        '三冠路線最後の一戦、芝3000mの長距離 ',
        kiku_sho,
        '。',
      ]);
      await era.printAndWait([
        'ステイヤーである ',
        rice.get_colored_name(),
        ' にとって、これまででいちばん大事な決戦の場だ！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = '遠い背中';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, '、やっぱりダメダメです……']);
      await rice.say_and_wait('もっと、が、がんばらないと……');
      await era.printAndWait('（ぱたり……）');
      await era.printAndWait([
        rice.get_colored_name(),
        ' は力を出し切って、張り詰めていた気持ちが、どっと緩んだらしい。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' を支え、休ませるために歩き出す。',
      ]);
      await era.printAndWait('（ぱたり……）');
      await rice.say_and_wait([self_name, '、本当にダメダメです……']);
      await rice.say_and_wait('次は、今より絶対がんばります');
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（クラシック級）開始';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      urara,
      you,
      callname,
      self_name,
      call_52,
      u_call_r,
    ) => {
      bourbon.name = '某サイボーグ' + bourbon.uma_sex_title;
      await era.printAndWait(
        'さらに力をつけるため、強化トレーニングが始まった。',
      );
      await rice.say_and_wait('……わ、どうしよう');
      await rice.say_and_wait([self_name, ' も、合宿に来ちゃいました']);
      await rice.say_and_wait([
        'ほかの',
        rice.uma_sex_title,
        'も、いっぱいいます。',
        self_name,
        ' が不幸を呼んだら——',
      ]);
      era.printButton('「今考えるべきは、そこじゃないだろ？」', 1);
      await era.input();
      await rice.say_and_wait('……ひっ！は、はい……！');
      await rice.say_and_wait('ふふ、よし……合宿も、がんばります');
      await rice.say_and_wait([self_name, '、がんばる……！']);
      await rice.say_and_wait('A!A!O!');
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' の夏合宿が始まった！！',
      ]);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' がトレーニングを終え、食事へ向かおうとしたとき——',
      ]);
      await bourbon.say_and_wait('はぁ……はぁ……！');
      await bourbon.say_and_wait('記録更新。理想タイムまで、あと5秒');
      await bourbon.say_and_wait('——トレーニング、継続します');
      await rice.say_and_wait(['……お願い、', callname, '。もう一回、走らせて']);
      era.printButton('「……一回だけだぞ」', 1);
      await era.input();
      await rice.say_and_wait('うん！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、再び走り出す ',
        rice.get_colored_name(),
        ' を見送った。',
      ]);
      await urara.say_and_wait(['あ！', u_call_r, '、走ってっちゃった！']);
      await urara.say_and_wait('えー！やっとお話できるかと思ったのに！');
      await era.printAndWait([
        rice.get_colored_name(),
        ' が一周して戻ってきた。',
      ]);
      await rice.say_and_wait(['……え？', call_52, '……？']);
      await urara.say_and_wait([
        'こんにちは！',
        u_call_r,
        '！じゃあ一緒に出発だよ',
      ]);
      await you.say_and_wait('出発！');
      await rice.say_and_wait('え！？ふたりとも……！？');
      era.drawLine();
      await rice.say_and_wait(
        'わ！焼きにんじんの焼きそば、スタミナ丼、特大りんご飴……！',
      );
      await urara.say_and_wait([
        u_call_r,
        ' はどれから食べる？ウララは、にんじんアイスが先！',
      ]);
      await rice.say_and_wait([
        'あの、',
        self_name,
        ' は……うう。どうしよう……',
        callname,
        '……',
      ]);
      era.printButton('元気もりもりパワー丼！（パワー+10）', 1);
      era.printButton('根性で食べきれ！特大りんご飴！（根性+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('ぐぅ……');
        await rice.say_and_wait('……やあ！？あううう……');
        await rice.say_and_wait([
          callname,
          '、どうして ',
          self_name,
          ' のお腹がぺこぺこなの、わかるんですか？',
        ]);
        await you.say_and_wait('今日、すごくがんばったからな');
        await rice.say_and_wait([
          'へへ、',
          callname,
          '、ちゃんと ',
          self_name,
          ' を見ててくれたんですね',
        ]);
        await era.printAndWait([
          '三人で楽しく食事をし、かけがえのないひとときがあっという間に過ぎた。',
        ]);
      } else {
        await rice.say_and_wait('わ……りんご飴！本当に、食べていいんですか？');
        await rice.say_and_wait([
          self_name,
          ' にとって、りんご飴はいちばんのご褒美なんです',
        ]);
        await rice.say_and_wait(
          '競走のあと、試験が終わったあと、お母さんが『今日もよくできたね』って',
        );
        era.printButton(`「じゃあ今日の ${rice.name} も、食べていい」`, 1);
        era.printButton(`「${rice.name} は、ずっとよくできた子だ」`, 2);
        await era.input();
        await urara.say_and_wait([
          'うんうん、',
          u_call_r,
          ' なら100個食べても大丈夫！',
        ]);
        await rice.say_and_wait('そう、なんですか？');
        await urara.say_and_wait([
          'そうそう！だって ',
          u_call_r,
          '、すっごく——がんばったもん！',
        ]);
        await rice.say_and_wait([
          '……へへ、ありがとう。',
          callname,
          '、',
          call_52,
        ]);
        await era.printAndWait([
          '三人で楽しく食べて、短い休憩の時間を過ごした。',
        ]);
      }
      bourbon.name = undefined;
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（クラシック級）終了';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (rice, urara, you, u_call_r) => {
      await era.printAndWait([
        '合宿最終日。',
        rice.get_colored_name(),
        ' の希望で、最後までトレーニングを続けていた。',
      ]);
      await rice.say_and_wait('はぁ……はぁ……ごめん、遅れました');
      await urara.say_and_wait([
        'はやくはやく、',
        u_call_r,
        '！バスもみんなも待ってるよ！',
      ]);
      await rice.say_and_wait('う……うん！今行きます！');
      await rice.say_and_wait('よかった、間に合いました');
      await you.say_and_wait('みんなが待っててくれたおかげだな');
      await rice.say_and_wait('うん！お礼を言わないと——');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '静かな宣言';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await rice.say_and_wait([
        callname,
        '。',
        self_name,
        '、',
        self_name,
        '……！',
      ]);
      await you.say_and_wait([rice.name, '、やったな']);
      await rice.say_and_wait('う……うん……！');
      await rice.say_and_wait([
        self_name,
        '、できました……！',
        self_name,
        ' にも、できたんです……！',
      ]);
      await bourbon.say_and_wait(['……', b_call_r]);
      await rice.say_and_wait(['わああっ！', call_26, '！？']);
      await rice.say_and_wait('あ、ああ。こ、今回のレースは……');
      await bourbon.say_and_wait('——ええ、『追いついた』、ですね');
      await rice.say_and_wait('……っ');
      await bourbon.say_and_wait('実のところ、理解できません');
      await bourbon.say_and_wait(['毎回『追いつく』と言う ', b_call_r]);
      await bourbon.say_and_wait('レースにあるのは勝利か、敗北か');
      await bourbon.say_and_wait(
        '『追いつく』という概念は存在しません。しかし——',
      );
      await bourbon.say_and_wait([
        'いま、悔しいです。今回の ',
        kiku_sho,
        ' を取れなかったこと。勝てなかったこと',
      ]);
      await bourbon.say_and_wait('……追いつかれましたね');
      await bourbon.say_and_wait([b_call_r, '、聞こえましたか？']);
      await rice.say_and_wait('……うん');
      await era.printAndWait('（歓声——！！！）');
      await you.say_as_passer_by_and_wait('観客A', [
        'すごいレースだったよ！',
        rice.name,
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客B',
        'お前が今年の主役だ！来年も楽しみにしてるぞ！！',
      );
      await rice.say_and_wait('……うそ……');
      await rice.say_and_wait([self_name, ' に、拍手を……？']);
      await rice.say_and_wait(['でも、', self_name, ' はただ……']);
      await bourbon.say_and_wait('違います。観客は認めています');
      await bourbon.say_and_wait([
        b_call_r,
        ' は、今年のクラシックにおける、名実ともに勝者です',
      ]);
      await bourbon.say_and_wait('私も、その見解に同意します');
      await bourbon.say_and_wait([
        '次は、絶対に ',
        you.get_colored_name(),
        ' には負けません',
      ]);
      await bourbon.say_and_wait('——『ライバル』として');
      await rice.say_and_wait('……ライ、バル');
      await bourbon.say_and_wait([
        b_call_r,
        ' さん。',
        you.get_colored_name(),
        ' は、私の挑戦を受けますか？',
      ]);
      await rice.say_and_wait(['……！', self_name, '……！']);
      await rice.say_and_wait([
        self_name,
        ' も、負けたくないです！次も……みんなに勝ちます！',
      ]);
      await era.printAndWait([
        '——',
        rice.get_colored_name(),
        ' の声は、届いている。',
      ]);
      await era.printAndWait('隣にも、会場の端にも届く。');
      await era.printAndWait('大きく、はっきりした宣言だ。');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = '燃える心';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('あと、ちょっと、でした');
      await rice.say_and_wait('もう少しで追いつけるのに、まだ足りない！');
      await rice.say_and_wait([
        self_name,
        '、負けたくないです！次は絶対勝ちます',
      ]);
    };
    f.title = title;
    return f;
  })(),
  sa_47_46: (() => {
    const title = 'ライバルの不幸';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await era.printAndWait([
        kiku_sho,
        ' のあと、',
        rice.get_colored_name(),
        ' の周りに、少し変化が生まれた。',
      ]);
      await era.printAndWait([rice.uma_sex_title, 'A「あ、ライスちゃん！」']);
      await rice.say_and_wait(['え……え！？', self_name, '、のこと……？']);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「そんなに緊張しなくていいよ！ふふ、この前の ',
        kiku_sho,
        '、すごかったね！」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'A「うんうん！本当に、感動しちゃった！」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「ほんとほんと！あのときのライスさん。ぐ……超真剣でかっこよかった！」',
      ]);
      await rice.say_and_wait([
        'えええ？',
        self_name,
        ' がかっこいい、なんて……',
      ]);
      await era.printAndWait(
        'だからこれからも、がんばってね！あたしたちもライスちゃんを応援するから',
      );
      await rice.say_and_wait('え！？う……うん！！');
      await you.say_and_wait('応援してもらえるなんて、すごく嬉しいな');
      await rice.say_and_wait(['あ、', callname, '？']);
      await rice.say_and_wait([
        'そ、そんな……',
        call_26,
        ' がすごすぎるから、挨拶しに来ただけです',
      ]);
      await rice.say_and_wait([
        kiku_sho,
        ' の拍手も、',
        call_26,
        ' がいたから——',
      ]);
      await you.say_and_wait(['お前が', rice.sex, 'のライバルだからだろ']);
      await rice.say_and_wait([
        'うう……あ、',
        callname,
        ' まで持ち上げすぎです……',
      ]);
      await rice.say_and_wait('でも、かっこいい、ですか？えへへ……');
      era.drawLine();
      await era.printAndWait('——だが翌日、空気は一変した。');
      era.printButton(`「${rice.name}？」`, 1);
      await era.input();
      await rice.say_and_wait('……近づかないで！');
      await era.printAndWait([
        rice.uma_sex_title,
        'A「……ライスさん、やっぱり……気にしてるよね」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「いやーそりゃそうだよ。あたしだって嫌だもん」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「だってあの完璧なブルボンさんが、自分と走ったあと……なんていうか……」',
      ]);
      await era.printAndWait('校舎脇の影。');
      await rice.say_and_wait([
        '……っ……どうして、',
        self_name,
        '、いつも、こうなの？',
      ]);
      await rice.say_and_wait('いつも周りに不幸を運んで、迷惑ばっかり！');
      await you.say_and_wait(['……', rice.name]);
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait([
        '……だめです！',
        self_name,
        ' に近づいたら、不幸になります',
      ]);
      await rice.say_and_wait([
        call_26,
        ' は、どんなにきついトレーニングでも……怪我したこと、なかったですよね？',
      ]);
      await rice.say_and_wait([
        'なのに全部、',
        self_name,
        ' のせい……',
        self_name,
        ' が',
        rice.sex,
        'のライバルになったから……',
      ]);
      await rice.say_and_wait('3年でいちばん大事な時期が、こんなふうに……');
      await you.say_and_wait('本人から聞いたのか？');
      await rice.say_and_wait(['……聞かなくても、', self_name, ' は知ってます']);
      await rice.say_and_wait(['だって……', self_name, ' は……']);
      await you.say_and_wait('聞いてないんだな');
      await rice.say_and_wait(['え！？', callname, '？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' を連れて医務室の ',
        bourbon.get_colored_name(),
        ' のもとへ行った。',
      ]);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait('……');
      era.printButton('「いきなりで、すまない」', 1);
      await era.input();
      await bourbon.say_and_wait(
        'いえ。本日は他者の見舞い行為に慣れております',
      );
      await bourbon.say_and_wait('それで、ここへ来た目的は？');
      await rice.say_and_wait(
        '！……ご、ごめんなさい。ごめんなさい……ごめんなさい……！',
      );
      await rice.say_and_wait([
        '全部 ',
        self_name,
        ' のせいです……怪我させて、大事な時期を無駄にさせて',
      ]);
      await bourbon.say_and_wait('失礼します');
      await bourbon.say_and_wait([
        'なぜ謝罪するのですか？私の負傷と ',
        b_call_r,
        ' の因果関係は、推測できません',
      ]);
      await rice.say_and_wait([
        'でも……',
        self_name,
        ' がライバルになる前は、怪我なんてしてなかったじゃないですか！',
      ]);
      await bourbon.say_and_wait(
        '理解不能。負傷の発生率は一定です。その理論に物理的根拠はないと判断します',
      );
      await bourbon.say_and_wait(
        'むしろ、あなたが不幸を呼ぶと主張するなら、検証すべきは私です',
      );
      await rice.say_and_wait(['', call_26, ' が……？']);
      await bourbon.say_and_wait('ええ。私はあなたをライバルと認定しました');
      await bourbon.say_and_wait([
        'それは、',
        kiku_sho,
        ' で成長の可能性を感じ、期待したからです',
      ]);
      await bourbon.say_and_wait(
        'あなたというライバルがいれば、より大きな成長が見込めます',
      );
      await bourbon.say_and_wait(
        'そして共に走れば、史上最高のレース——『奇跡』に至る可能性があります',
      );
      await bourbon.say_and_wait(['私の不幸は、', b_call_r, ' とは無関係です']);
      await rice.say_and_wait('……');
      await bourbon.say_and_wait([
        b_call_r,
        ' は、私を不幸にする存在ですか？それとも、奇跡を呼ぶ存在ですか？',
      ]);
      await rice.say_and_wait('……あの……');
      await era.printAndWait([
        '——長いあいだ、',
        rice.get_colored_name(),
        ' は黙ったまま、',
        bourbon.get_colored_name(),
        ' の視線を受け止めていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, you, callname, self_name, tenn_spr) => {
      await era.printAndWait([
        '正月一日、',
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' に誘われ、一緒に初詣へ向かった。',
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        '、お願いごと、決めました',
      ]);
      await rice.say_and_wait([
        'だから ',
        callname,
        ' に、聞いてもらいたいです。いいですか？',
      ]);
      await you.say_and_wait('神様じゃなくて、俺に言うのか？');
      await rice.say_and_wait([
        'うん！このお願い、',
        callname,
        ' に言わないと、だめなんです',
      ]);
      await rice.say_and_wait([
        self_name,
        '、次の ',
        tenn_spr,
        ' に出たいです',
      ]);
      await you.say_and_wait('どうして？');
      await rice.say_and_wait('……だって、もっと強くなりたいから');
      await rice.say_and_wait('前へ進み続けないと、だめです');
      await rice.say_and_wait('もう……怖がってばかりはいられません');
      await you.say_and_wait('覚悟、決めたんだな');
      await rice.say_and_wait([
        self_name,
        '、わかりました。思うだけでは、だめなんです',
      ]);
      await rice.say_and_wait(
        '目の前の人を悲しませないために、先に動かないと……いけません',
      );
      await era.printAndWait([
        rice.get_colored_name(),
        ' は年始から、新しい目標を立てた。',
      ]);
      await era.printAndWait([
        rice.sex,
        'のそのやる気に応えるため、',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は、新年の抱負を絵馬に書いた。',
      ]);
      await rice.say_and_wait(['神様、', self_name, '、がんばります']);
      await rice.say_and_wait([
        callname,
        ' と一緒に初詣に来られて、よかったです！',
      ]);
      await rice.say_and_wait(['ふふ、次は ', callname, ' の番ですね']);
      await rice.say_and_wait([
        self_name,
        ' も一緒にお願いします。神様が叶えてくれますように……',
      ]);
      era.print([you.get_colored_name(), ' の願いは……']);
      era.printButton(
        `「${rice.name} がずっと元気でいられますように」（スタミナ+20、好感+5）`,
        1,
      );
      era.printButton(
        `「ずっと ${rice.name} の走りを支えられますように」（全能力+5、恋慕+2）`,
        2,
      );
      era.printButton('「力が欲しい……！」（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait('！');
          await rice.say_and_wait([
            'へへ、はい。',
            self_name,
            '、',
            callname,
            ' を心配させないようにします',
          ]);
          await era.printAndWait([
            '初詣の屋台で栄養を補給したあと、',
            you.get_colored_name(),
            ' と ',
            rice.get_colored_name(),
            ' はトレーニングを始めた。',
          ]);
          break;
        case 2:
          await rice.say_and_wait([
            'ふふ、そんな優しいこと言われたら、',
            self_name,
            '、頭がパンクしそうです',
          ]);
          await rice.say_and_wait([
            '本当に、泣いてる暇なんてありません。',
            self_name,
            '、ちゃんとがんばらないと……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            rice.get_colored_name(),
            ' はしばらく黙って見つめ合い、それからトレーニングに取りかかった。',
          ]);
          break;
        case 3:
          await rice.say_and_wait('力……それは、その……');
          await rice.say_and_wait([self_name, ' も、手伝っていいですか？']);
          await rice.say_and_wait('あの、筋トレとか、併走とか……');
          await you.say_and_wait('そういう意味じゃないんだ');
          await rice.say_and_wait('うえ？');
          await rice.say_and_wait([
            'でも、本当に ',
            self_name,
            ' にできることがあったら、教えてください',
          ]);
          await rice.say_and_wait([
            self_name,
            '、',
            callname,
            ' のためなら、どんなことでも……手伝います',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            ' は ',
            rice.get_colored_name(),
            ' の思いやりを受け取って、学園へ戻った。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '今日も ',
        you.get_colored_name(),
        ' はいつもどおり、トレーナー室で仕事をしていた……',
      ]);
      await rice.say_and_wait('……あ、あの、その……');
      await rice.say_and_wait([
        callname,
        '、チョコレート、好きですか？もらったら、嬉しいですか？',
      ]);
      await era.printAndWait('「チョコレート」という言葉で、思い出す。');
      await era.printAndWait('……今日はバレンタインだった。');
      await you.say_and_wait('嬉しいと思うよ');
      await rice.say_and_wait('そうなんですか！じゃあ……');
      await era.printAndWait([
        '言い終えると、',
        rice.get_colored_name(),
        ' は走り出していった。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await era.printAndWait('どん！！', { fontSize: '1.875rem' });
      await era.printAndWait([
        '……机の上に、',
        rice.get_colored_name(),
        ' が持ってきたチョコレートが山のように積まれている。',
      ]);
      await rice.say_and_wait(
        '……たくさん用意しました。甘いのも苦いのも、ナッツのもいちごのも',
      );
      await rice.say_and_wait(['——だから、選んでください、', callname, '！']);
      await you.say_and_wait('選ぶ？');
      await rice.say_and_wait('うん。嫌いな味、食べたくないですよね？');
      await rice.say_and_wait('だから、何種類も作りました。きっと……');
      await rice.say_and_wait(['どれかは、', callname, ' の好きな味です']);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の好みに合わせて、何種類もチョコを手作りしたらしい。',
      ]);
      await rice.say_and_wait('え……どうかしましたか？');
      await rice.say_and_wait('このなかに、好きなのがない、ですか？');
      await you.say_and_wait('全部もらっちゃだめか？');
      await rice.say_and_wait('え！？お腹、壊しちゃいますよ！？');
      await you.say_and_wait('大丈夫だ');
      await rice.say_and_wait('本当に……大丈夫……？');
      await era.printAndWait([
        rice.get_colored_name(),
        ' は心配そうに ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await you.say_and_wait([self_name, ' の気持ち、全部受け取りたいから']);
      await rice.say_and_wait('……っ！');
      await rice.say_and_wait('なんだか、すごく嬉しいです……');
      await rice.say_and_wait(
        'でも、それなら、もっと作ったほうがよかったですね',
      );
      await rice.say_and_wait([
        callname,
        ' への気持ち、これだけじゃ足りません',
      ]);
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は、甘いバレンタインを過ごした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nikk_sho_end: (() => {
    const title = '花びら、舞う';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     */
    const f = async (rice, zob_zoy, you, callname, self_name, z_call_r) => {
      await rice.say_and_wait(['えへへ……どうでした、', callname]);
      await rice.say_and_wait([self_name, ' の走り、ちゃんと成長してますか？']);
      await you.say_and_wait('うん、すごくいい走りだった！');
      await rice.say_and_wait('うん！じゃあ次も……');
      await zob_zoy.say_and_wait('……お、お疲れさまです！');
      await rice.say_and_wait('！');
      await zob_zoy.say_and_wait([
        'きょ、今日は……私ひとりで、ここに ',
        z_call_r,
        ' の応援に来ました',
      ]);
      await rice.say_and_wait('あ！ありがとう！あの、今日は……');
      await zob_zoy.say_and_wait('素晴らしい走りでした！');
      await zob_zoy.say_and_wait(
        'ひとつの目標へまっすぐに進む……その姿は、民を導く主役のようでした！',
      );
      await zob_zoy.say_and_wait('いつか後世の本に記されることでしょう……！');
      await rice.say_and_wait('うわああ……褒めすぎです……');
      await zob_zoy.say_and_wait('あ、ごめんなさい……つい……');
      await rice.say_and_wait('いいえ、ごめんね。でも、ありがとう');
      await rice.say_and_wait([
        'ちょっと恥ずかしいですけど……',
        self_name,
        '、嬉しいです',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      z_call_r,
      u_call_r,
    ) => {
      await era.printAndWait('練習場');
      await era.printAndWait(
        'この日、学園は一般にも開放され、さまざまな催しが開かれている。',
      );
      await rice.say_and_wait('う……マラソンまで出るなんて……！');
      await urara.say_and_wait([
        '大丈夫だよ！',
        u_call_r,
        ' ならへいへい走れるって！',
      ]);
      await zob_zoy.say_and_wait([
        'ええ。',
        z_call_r,
        ' なら、絶対に走り切れます！',
      ]);
      await rice.say_and_wait('ち、違うんです。その、そういうことじゃ……！');
      era.drawLine();
      await era.printAndWait([
        '結果、',
        mcqueen.get_colored_name(),
        ' が見事に一位でゴールした。',
      ]);
      await era.printAndWait([
        '期待されていた ',
        rice.get_colored_name(),
        ' は……必死に食らいついて二位。',
      ]);
      await zob_zoy.say_and_wait([z_call_r, '、お疲れさまです！']);
      await urara.say_and_wait([
        'うんうん、',
        u_call_r,
        ' すごい！二位だよ、お祝いしよ！',
      ]);
      await rice.say_and_wait('あ、ありがとう……でも……');
      await rice.say_and_wait(['いまの ', self_name, '、ぜんぜん……']);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait('……ごめんなさい、お祝いはいいです');
      await rice.say_and_wait('次は、みんなの期待に応えます……！');
      await urara.say_and_wait(['え、待って、', u_call_r, '！']);
      await bourbon.say_and_wait('……');
      era.drawLine({ content: '夜' });
      await era.printAndWait([
        rice.get_colored_name(),
        ' はひとり、トレーニング場で自主練をしていた。',
      ]);
      await rice.say_and_wait('……もっと、がんばらないと');
    };
    f.title = title;
    return f;
  })(),
  we_95_14: (() => {
    const title = 'ひとりでは咲けないから';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} call_47 ライスのロブロイへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} callname_47 ロブロイのプレイヤーへの呼び方
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      zob_zoy,
      you,
      callname,
      self_name,
      call_26,
      call_47,
      b_call_r,
      callname_47,
      z_call_r,
      tenn_spr,
    ) => {
      await era.printAndWait('トレーナー室内');
      await era.printAndWait('……トントン');
      await era.printAndWait('小さなノックが聞こえる。');
      await zob_zoy.say_as_unknown_and_wait([
        '失礼します……あの、',
        zob_zoy.get_colored_name(),
        ' です',
      ]);
      await zob_zoy.say_and_wait([z_call_r, ' を、見かけませんでしたか？']);
      await zob_zoy.say_and_wait([
        '実は',
        rice.sex,
        '、まだ寮に戻っていなくて。点呼の時間なのに……',
      ]);
      await you.say_and_wait('——まさか', true);
      era.drawLine({ content: 'トレーニング場' });
      await rice.say_and_wait('はぁ……はぁ……はぁ……！');
      await you.say_and_wait([rice.name, '！']);
      await rice.say_and_wait(['え。', callname, '、と……', call_47, '？']);
      await rice.say_and_wait('……');
      await you.say_and_wait('がんばりすぎだ');
      await rice.say_and_wait('ごめんなさい、でも……');
      await rice.say_and_wait('……');
      await rice.say_and_wait('うん、ごめんなさい。ちゃんと休みます');
      await zob_zoy.say_and_wait('……');
      await zob_zoy.say_and_wait(['あの、', z_call_r, '！']);
      await zob_zoy.say_and_wait([
        z_call_r,
        ' にとって、',
        callname,
        ' は、どんな存在なのですか？',
      ]);
      await zob_zoy.say_and_wait(
        'その……いつも優しくて、絵本から出てきた運命の人みたいで',
      );
      await rice.say_and_wait(['やあああ！？', call_47, '？し……しず……']);
      await zob_zoy.say_and_wait(
        'まだ静かにできません。それに、私も応援しています',
      );
      await rice.say_and_wait([call_47, '……']);
      await zob_zoy.say_and_wait(
        '困っていることがあるなら……みんなで話すべきだと思います',
      );
      await rice.say_and_wait('……');
      await you.say_and_wait(['どう思う、', rice.name, '？']);
      await rice.say_and_wait('……でも、怖いんです……');
      await rice.say_and_wait('頼れる人がいるのは、わかってます……');
      await rice.say_and_wait([
        'せっかく ',
        self_name,
        ' に期待してくれてるのに、',
        self_name,
        '、できないかもしれない',
      ]);
      await rice.say_and_wait([
        self_name,
        '、もう ',
        callname,
        ' をがっかりさせたくないのに……',
      ]);
      await era.printAndWait([
        '言い終えると、',
        rice.teen_sex_title,
        'は小さな声で泣き始めた。',
      ]);
      await you.say_and_wait('そんなこと、考えるな');
      await zob_zoy.say_and_wait([
        'そうです！私も！',
        z_call_r,
        ' にがっかりなんてしません！',
      ]);
      await zob_zoy.say_and_wait([
        z_call_r,
        ' を応援しているみんなも、きっと同じです',
      ]);
      await you.say_and_wait('だから、ひとりで無理するな');
      await rice.say_and_wait([callname, '……っ……う……']);
      await rice.say_and_wait('うわ～～！');
      await era.printAndWait([
        rice.get_colored_name(),
        ' の目から、大粒の涙が堤を切ったように溢れ落ちた。',
      ]);
      era.drawLine({ content: '翌日' });
      await zob_zoy.say_and_wait(['あ、', z_call_r, '！がんばってください']);
      await rice.say_and_wait('……う、うう……本当に、大丈夫ですか？');
      await zob_zoy.say_and_wait('だ、大丈夫です！');
      await zob_zoy.say_and_wait([
        'ほら、',
        callname_47,
        ' も ',
        z_call_r,
        ' の応援に来てくれました',
      ]);
      await rice.say_and_wait('うん');
      await bourbon.say_and_wait('では、移動を開始してよろしいですか？');
      await rice.say_and_wait(['あ！ごめん！', call_26, '……その、あの……！']);
      await rice.say_and_wait(['お願い、', self_name, ' を手伝ってください！']);
      await bourbon.say_and_wait('……？意思疎通に誤認が発生しましたか？');
      await rice.say_and_wait([
        'してないです！だって、',
        call_26,
        ' なら、きっと力になってくれます！',
      ]);
      await rice.say_and_wait('聞いたらがっかりするかもしれないですけど……');
      await rice.say_and_wait([
        self_name,
        '、いま ',
        call_26,
        ' の助けがないと、だめなんです！',
      ]);
      await rice.say_and_wait([
        'だっていまの ',
        self_name,
        '、まだ弱いから。このままじゃ……',
      ]);
      await rice.say_and_wait('勝てません！');
      await rice.say_and_wait([
        'だから ',
        call_26,
        ' に、',
        self_name,
        ' の走りを教えてほしいです！',
      ]);
      await rice.say_and_wait([
        self_name,
        ' にないものを、全部教えてください！',
      ]);
      await bourbon.say_and_wait('……');
      await you.say_and_wait([rice.name, ' が奇跡を起こすと、信じてくれ']);
      await bourbon.say_and_wait('了解しました');
      await bourbon.say_and_wait(
        'それが史上最高のレースを作るために必要な過程であるなら',
      );
      await bourbon.say_and_wait('申請を受理。予定を変更します');
      await bourbon.say_and_wait([
        '午後より第一段階として、',
        self_name,
        ' の坂道10本に参加します',
      ]);
      await bourbon.say_and_wait('目的、筋力とスピードの向上');
      await bourbon.say_and_wait(
        '負荷が必要な場合、特製の加重袋を貸与できます',
      );
      await bourbon.say_and_wait(
        'なお、私のトレーニングを『鬼』と呼ぶ者がいます——',
      );
      await bourbon.say_and_wait(['準備はいいですか、', b_call_r]);
      await rice.say_and_wait('……はい！');
      await era.printAndWait([
        'それから',
        rice.couple_title,
        'は走り始めた。近づく ',
        tenn_spr,
        ' へ向けて——！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '光を浴びて';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} m_call_r マックイーンのライスへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} b_call_z ブルボンのロブロイへの呼び方
     * @param {PrintedSpan} z_call_b ロブロイのブルボンへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      call_13,
      call_52,
      m_call_r,
      b_call_r,
      b_call_z,
      z_call_b,
      u_call_r,
      tenn_spr,
      takz_kin,
    ) => {
      await rice.say_and_wait('は……あ、はぁ……！！');
      await you.say_and_wait('よくがんばったな！');
      await rice.say_and_wait(['うん！できました！', self_name, '——']);
      await urara.say_and_wait([u_call_r, '！す——ごい！！']);
      await rice.say_and_wait([call_52, '！？']);
      await urara.say_and_wait('えへへ～来たよ～');
      await zob_zoy.say_and_wait('違います！戻ってください！こっちです！');
      await zob_zoy.say_and_wait('優勝者の関係者として来たのですけれど……');
      await bourbon.say_and_wait([
        '私でも問題ないでしょう。私たちは ',
        b_call_r,
        ' の関係者です',
      ]);
      await bourbon.say_and_wait([
        '素晴らしい走りでした、',
        b_call_r,
        '。まず、おめでとうございます',
      ]);
      await bourbon.say_and_wait([
        'レース中のあなたは、',
        b_call_z,
        ' が付けた二つ名『執念の鬼』に相応しい',
      ]);
      await rice.say_and_wait('……執念の鬼？');
      await zob_zoy.say_and_wait(['わ、わ！', z_call_b, '！！']);
      await zob_zoy.say_and_wait(
        'その称号は秘密にしておくって、言いましたよね！',
      );
      await rice.say_and_wait('……ふふ');
      await rice.say_and_wait([
        'えへへ……',
        self_name,
        '、みんなにちゃんと応えられました。レースで',
      ]);
      await you.say_and_wait('みんなを笑わせたな');
      await rice.say_and_wait('うん！');
      await urara.say_and_wait(['あはは、', u_call_r, ' もにこにこだよ！']);
      await urara.say_and_wait('次のレースも笑顔でね！');
      await urara.say_and_wait([
        'ウララたちも、いっぱい手を振って ',
        u_call_r,
        ' を応援するから！',
      ]);
      await rice.say_and_wait(['……そうだね、', call_52]);
      await rice.say_and_wait('ライスも、みんなに……手を振るね');
      await rice.say_and_wait('大きく……みんなに見えるように！');
      era.drawLine({ content: '舞台裏' });
      await rice.say_and_wait('……そうは言っても、やっぱり、緊張します……');
      await rice.say_and_wait([tenn_spr, ' の勝者ステージでセンターなんて……']);
      await you.say_and_wait('胸を張れ');
      await mcqueen.say_and_wait([
        'そのとおりですわ。',
        m_call_r,
        ' は私に勝ったのですから、もっと自信を持ちなさい',
      ]);
      await rice.say_and_wait(['あ、', call_13, '！！']);
      await mcqueen.say_and_wait('たしかに、この舞台は特別ですわ');
      await mcqueen.say_and_wait(
        'だからこそ、立つ私たちにはプロとしての自覚が必要です',
      );
      await mcqueen.say_and_wait(
        '現場を期待して来てくださった方々へ、感謝を示すべきではありませんこと？',
      );
      await rice.say_and_wait('そうです');
      await mcqueen.say_and_wait('だから、舞台を恐れないで');
      await mcqueen.say_and_wait('期待と思いに応えて、舞台で輝きなさい');
      await mcqueen.say_and_wait('それが、コースを走る私たちの務めですわ');
      await era.printAndWait([
        'それから ',
        mcqueen.get_colored_name(),
        ' は、優雅に高貴に舞台へ向かった。',
      ]);
      await you.say_and_wait('たくさん学べたな');
      await rice.say_and_wait('うん、やっぱり素敵な人です');
      await rice.say_and_wait([self_name, ' も、期待と思いに応えないと']);
      await rice.say_and_wait('みんなへの感謝を込めて');
      await rice.say_and_wait(['……よし！', self_name, '、行きます！！']);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は輝く舞台へ、',
        rice.sex,
        'の一歩を踏み出した。',
      ]);
      era.drawLine({ content: 'その夜' });
      await rice.say_and_wait(
        'あの……帰ってすぐ言うのは、変かもしれませんけど……',
      );
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        '、次にやりたいことがあります',
      ]);
      await rice.say_and_wait([
        self_name,
        '、期待してくれる人にもっと応えたいです',
      ]);
      await rice.say_and_wait(['だから、次は ', takz_kin, ' に出たいです']);
      await rice.say_and_wait([
        'もし、みんなが ',
        self_name,
        ' でいいって言ってくれるなら……！',
      ]);
      await era.printAndWait([
        '——',
        takz_kin,
        '。ファンに愛された',
        rice.uma_sex_title,
        'だけが立てる舞台だ。',
      ]);
      await era.printAndWait([
        '……最初、学園の外でひとり泣いていた',
        rice.sex,
        '。',
      ]);
      await era.printAndWait('いまは、その資格を持っている。');
      await you.say_and_wait(['次は ', takz_kin, ' だな！']);
      await rice.say_and_wait([
        'うん！',
        self_name,
        '、これからもがんばります',
      ]);
      await rice.say_and_wait('それから、みんなに伝えます——');
      await rice.say_and_wait('ありがとうございます');
    };
    f.title = title;
    return f;
  })(),
  os_95_21: (() => {
    const title = '万に一つの失策';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} m_call_r たづなのライスへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      you,
      callname,
      self_name,
      m_call_r,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, ' への出走を目標に定めてから……']);
      await era.printAndWait(
        '通行人B「ファン投票、あんたに入れたよ！絶対一位取ってくれよ！」',
      );
      await rice.say_and_wait('わ！？あ……応援、ありがとうございます！');
      await era.printAndWait([
        '商店街の店主「おっと、もしかして……',
        rice.get_colored_name(),
        ' かい？」',
      ]);
      await rice.say_and_wait('はい！あの、そうです……');
      await era.printAndWait(
        '商店街の店主「まあ！うちのコロッケ、食べていきな！」',
      );
      await era.printAndWait(
        '商店街の店主「うちの子が、あんたのファンでねえ」',
      );
      await rice.say_and_wait('え！？いいんですか？');
      era.drawLine();
      await rice.say_and_wait(
        'えへへ……嬉しいことがこんなにたくさん、本当にいいんですか？',
      );
      await you.say_and_wait('この気持ちごと、がんばろうな');
      await rice.say_and_wait('そうですよね……');
      await minoru.say_and_wait('あ、お二人とも見つかりました！');
      await you.say_and_wait('何かあったのか？');
      await minoru.say_and_wait('実はですね！');
      await minoru.say_and_wait('さっき阪神競馬場から連絡が……！！');
      await minoru.say_and_wait([
        '【ファン人気投票】で、',
        m_call_r,
        ' がダントツの一位なんです！',
      ]);
      await minoru.say_and_wait('開幕セレモニーに出てほしいそうです！');
      await rice.say_and_wait('えええええ？');
      await minoru.say_and_wait('なので、明日リハーサルがあります');
      await rice.say_and_wait([
        '……わ。',
        self_name,
        ' が……人気一位？開幕、セレモニー？',
      ]);
      await minoru.say_and_wait('あはは……すみません。私も少し興奮しすぎました');
      await minoru.say_and_wait(
        '詳細は資料にまとめてありますので、あとで確認して相談しましょう',
      );
      await minoru.say_and_wait('では、失礼します');
      await era.printAndWait([minoru.get_colored_name(), ' が去ったあと……']);
      await rice.say_and_wait(['……すごい、', self_name, ' が、みんなの……']);
      await you.say_and_wait('リハーサルに行こう');
      await rice.say_and_wait('うん！');
      await era.printAndWait([
        '翌日、',
        rice.get_colored_name(),
        ' と一緒に阪神競馬場へ向かった。',
      ]);
      await era.printAndWait([
        'スタッフA「',
        rice.get_colored_name(),
        ' 選手！次は花束を渡すときの立ち位置です——」',
      ]);
      await rice.say_and_wait('は、はい！');
      await era.printAndWait(
        'スタッフB「あ、それが終わったら、私たちからもひとつお願いが——」',
      );
      await rice.say_and_wait('うわ……わかりました～！');
      await era.printAndWait('さまざまなリハーサルが一区切りついて……');
      await rice.say_and_wait('ふあ……');
      await you.say_and_wait('少し休もう');
      await rice.say_and_wait('えへへ、大丈夫です、だって……');
      await era.printAndWait([
        'スタッフC「すみません、',
        rice.get_colored_name(),
        ' 選手！マイクをもう一度調整してほしいんです……」',
      ]);
      await rice.say_and_wait('はい！い、今行きます！');
      await rice.say_and_wait(
        '……最後までやり遂げたいです。みんなを笑わせたいです',
      );
      era.drawLine({ content: '登場ステージ' });
      await rice.say_and_wait([
        'それでは、みなさん……これからも ',
        self_name,
        ' を、よろしくお願いします！！',
      ]);
      await era.printAndWait('スタッフA「もちろん、任せて！！」');
      await era.printAndWait('今日のリハーサルはここまでです！');
      await rice.say_and_wait('ふう……やっと、終わり……ました');
      await you.say_and_wait('大丈夫か？');
      await rice.say_and_wait('うん、大丈夫です');
      await rice.say_and_wait('初めてだから、まだ不慣れなところがいっぱいです');
      await rice.say_and_wait('本番で、みんながここに集まってくれたとき');
      await rice.say_and_wait('そのときは、できると思います');
      await rice.say_and_wait('ぜんぜん疲れてないです');
      await rice.say_and_wait('もっと、もっと……がんばりたいです');
      await era.printAndWait([
        'スタッフB「あ、',
        rice.get_colored_name(),
        ' 選手！忘れ物があるみたいです——」',
      ]);
      await rice.say_and_wait('え！？ごめん！今取りに行きます！');
      await rice.say_and_wait('やあ！？');
      await era.printAndWait('ばら……ばらばら……がん——！');
      await era.printAndWait([
        'スタッフC「なに！？扉が倒れて——',
        rice.get_colored_name(),
        '、危——」',
      ]);
      await era.printAndWait([
        '間一髪、',
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' を抱きかかえるのが精一杯だった。',
      ]);
      await you.say_and_wait('大丈夫か？');
      await era.printAndWait('どん！', { fontSize: '2.5rem' });
      await rice.say_and_wait([
        callname.substring(0, 1),
        '、',
        callname,
        '！？',
      ]);
      era.drawLine();
      await rice.say_and_wait(['ふ……う……', callname, '……']);
      await you.say_and_wait('こっちだ');
      await rice.say_and_wait([
        'あ、',
        callname,
        '！',
        callname,
        '！！大丈夫ですか！？どこか痛いですか？',
      ]);
      await era.printAndWait([
        '……どうやら ',
        you.get_colored_name(),
        ' は、',
        rice.get_colored_name(),
        ' を守ったときに頭を打ったらしい。',
      ]);
      await you.say_and_wait('大丈夫そうだ');
      await rice.say_and_wait('ほ、本当ですか？で……でも病院に——');
      await era.printAndWait('スタッフA「あ、よかった、目が覚めましたね！」');
      await era.printAndWait('スタッフA「すぐ救急車も来ます」');
      await you.say_and_wait('ありがとう');
      await era.printAndWait(
        'スタッフA「いえいえ！こちらこそすみません。急にこんなことになって……」',
      );
      await era.printAndWait(
        'スタッフA「本当に申し訳ありません。病院まで送ります」',
      );
      era.drawLine({ content: '病院での検査後' });
      await era.printAndWait(
        'スタッフA「……そうですか。検査では異常なし、ですか——」',
      );
      await you.say_and_wait('心配かけてすまない');
      await era.printAndWait('スタッフA「いえ！こちらのミスですから……」');
      await era.printAndWait(
        'スタッフA「それに……お二人には、もうひとつお詫びしなければならないことが」',
      );
      await rice.say_and_wait('で……でもみなさん、もう十分……');
      await era.printAndWait([
        'スタッフA「——今回のセレモニーと、',
        takz_kin,
        ' です」',
      ]);
      await era.printAndWait(
        'スタッフA「阪神での開催が延期になる、という話が出ています」',
      );
      await rice.say_and_wait('……！');
      await you.say_and_wait('どういうことだ？');
      await era.printAndWait(
        'スタッフA「実は……今回の競馬場での事故、原因がまだわかっていないんです」',
      );
      await era.printAndWait(
        'スタッフA「それに負傷者も出ています。となると、場内の総点検が必要になります」',
      );
      await era.printAndWait(
        'スタッフA「点検と補修を含めると、3週間以上はかかる見込みです」',
      );
      await rice.say_and_wait([
        'それじゃあ、',
        takz_kin,
        ' に間に合いません……',
      ]);
      await era.printAndWait(
        'スタッフA「ええ。こんなことが起きないよう、毎日気をつけてきたのに……」',
      );
      await era.printAndWait('スタッフA「これまで一度もなかった事例で……」');
      await era.printAndWait([
        'スタッフA「お二人と、',
        takz_kin,
        ' を待っていたみなさんに、本当に申し訳ありません！」',
      ]);
      await rice.say_and_wait([
        '今まで一度もなくて、',
        self_name,
        ' が来て、いきなり……',
      ]);
      await rice.say_and_wait('……');
      await era.printAndWait(
        [rice.get_colored_name(), '「もしかして、', self_name, ' の……せい？」'],
        {
          color: rice.color,
          fontSize: '0.75rem',
        },
      );
      await era.printAndWait('その小さな声は、なぜか、やけに大きく響いた——');
    };
    f.title = title;
    return f;
  })(),
  ws_95_24: (() => {
    const title = '折れない薔薇';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} t_call_m 秋川のたづなへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      taste,
      you,
      callname,
      self_name,
      t_call_m,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, ' の開催は、ほぼ絶望——']);
      await era.printAndWait('そんな空気が、どこにも漂っていた。');
      await rice.say_and_wait('……');
      await rice.say_and_wait(['大丈夫です、', callname]);
      await rice.say_and_wait([self_name, '、大丈夫です']);
      await era.printAndWait([
        '……そうは言っても、',
        rice.sex,
        'の笑顔に力はない。',
      ]);
      await era.printAndWait('やはり、あの件が——');
      await rice.say_and_wait(['ご、ごめん、', callname, '！']);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は一通のメッセージを見て、トレーナー室を飛び出した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は追いつこうと、階段を駆け上がる。',
      ]);
      await era.printAndWait([
        'やがて、',
        rice.get_colored_name(),
        ' の声が聞こえる場所へ着いた。',
      ]);
      await taste.say_and_wait('冷 静！一事ずつ、ゆっくり話すのじゃ……');
      await rice.say_and_wait([
        self_name,
        '、阪神のスタッフにも！京都のスタッフにもお願いしました！',
      ]);
      await rice.say_and_wait(['だから——', takz_kin, ' を開催してください！']);
      await you.say_and_wait([rice.name, '！？']);
      await taste.say_and_wait([
        '驚 愕！？',
        you.actual_name,
        'トレーナー も来たのか！！',
      ]);
      await rice.say_and_wait(['え！？', callname, '？']);
      await you.say_and_wait('いったい、なにを？');
      await rice.say_and_wait([
        '……',
        self_name,
        '、理事長にお願いしに来ました',
      ]);
      await rice.say_and_wait([
        '……',
        takz_kin,
        ' を、京都競馬場で開いてほしくて……',
      ]);
      await taste.say_and_wait('再 三！今日だけでなく、昨夜も来おった');
      await taste.say_and_wait('各 所！やるべきことがあるのじゃ');
      await taste.say_and_wait('冷 静！まず連携を確保せねば——');
      await rice.say_and_wait([
        'わかってます！だから ',
        self_name,
        '、阪神の人とも京都の人とも連絡しました！',
      ]);
      await rice.say_and_wait(
        '迷惑かもしれません、大変かもしれません。でも、どうか手伝ってください！',
      );
      await rice.say_and_wait(
        '応援してくれるみんなのために、できることは全部やります',
      );
      await minoru.say_and_wait(
        'あ、お待たせしました！ようやく許可が下りました！',
      );
      await taste.say_and_wait([t_call_m, '！！！期 待～']);
      await minoru.say_and_wait([
        'ええ！今回の ',
        takz_kin,
        ' は、京都競馬場での開催が決まりました！',
      ]);
      await rice.say_and_wait('……それじゃ！');
      await minoru.say_and_wait(
        'はい、阪神と京都、両会場のスタッフが密に連絡を取り続けて',
      );
      await minoru.say_and_wait('開催が可能になったんです！');
      await minoru.say_and_wait(
        'どちらのスタッフも、全力でやる、と言ってくれました',
      );
      await minoru.say_and_wait(['……', self_name, ' のためにも']);
      await rice.say_and_wait('……！！');
      era.drawLine({ content: 'トレーナー室へ戻って' });
      await rice.say_and_wait('う……よかった……');
      await rice.say_and_wait('開催、できるんですね……');
      await you.say_and_wait('みんなのために、がんばったな');
      await rice.say_and_wait('うん……うん……！');
      await rice.say_and_wait('この件で力を貸してくれた人たちのために');
      await rice.say_and_wait([
        self_name,
        ' を応援してくれるみんなのために……！',
      ]);
      await rice.say_and_wait([self_name, '、みんなを……笑わせたいです……！']);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '咲き誇る、青';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      you,
      callname,
      self_name,
      call_13,
      call_26,
      takz_kin,
      arim_kin,
    ) => {
      await rice.say_and_wait('は……あ、はぁ……！！');
      await you.say_and_wait('おめでとう！');
      await rice.say_and_wait(['……えへへ。ありがとう、', callname]);
      await rice.say_and_wait([
        'あの、',
        self_name,
        '、走ってるときも聞こえてました',
      ]);
      await rice.say_and_wait('みんなの声');
      await rice.say_and_wait([
        '……へへ、だめです。',
        self_name,
        '、みんなを笑わせるって言ったのに',
      ]);
      await rice.say_and_wait([self_name, ' だけが嬉しいなんて']);
      await rice.say_and_wait('本当に、幸せです……');
      await rice.say_and_wait([takz_kin, ' を走れて、よかったです']);
      await you.say_and_wait('みんなも同じ気持ちだよ');
      await rice.say_and_wait('みんな？');
      await era.printAndWait([
        '観客A「',
        rice.get_colored_name(),
        '——！！ありがとう——！！」',
      ]);
      await era.printAndWait([
        '観客A「今年の ',
        takz_kin,
        '、最高だったぞ——！！」',
      ]);
      await rice.say_and_wait('すごい……笑顔、いっぱい');
      await you.say_and_wait('お前が、みんなの笑顔を守ったんだ');
      await rice.say_and_wait([self_name, '、が？']);
      await rice.say_and_wait([
        'そうなんですか？',
        self_name,
        ' も……できました',
      ]);
      await rice.say_and_wait('みんなを幸せにする、できました！！');
      await you.say_and_wait(['ありがとう、', rice.name]);
      await rice.say_and_wait('うわあああ——');
      await era.printAndWait([
        '肩を震わせて泣く',
        rice.sex,
        'に、観客が温かい拍手を送る。',
      ]);
      era.drawLine({ content: '勝者ステージ' });
      await rice.say_and_wait('す……は……');
      await you.say_and_wait('もう泣いてないな');
      await rice.say_and_wait('へへ、ずっと泣いてちゃだめです');
      await rice.say_and_wait('この舞台で、ちゃんと笑顔を届けないと');
      await rice.say_and_wait([
        'じゃあ ',
        self_name,
        '、行ってきます。みんなのところへ',
      ]);
      await rice.say_and_wait('いってきます');
      await rice.say_and_wait('うん！');
      await era.printAndWait([
        'この日、',
        rice.get_colored_name(),
        ' は最高のLIVEを観客に捧げた。',
      ]);
      await era.printAndWait([
        '翌日、新聞の一面に',
        rice.sex,
        'の顔写真が載った。',
      ]);
      await era.printAndWait([
        '——坂の芝に咲いた主役、美しい薔薇：',
        rice.get_colored_name(),
        '。',
      ]);
      era.drawLine({ content: 'そのあと' });
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        ' 想去参加 ',
        arim_kin,
        '！！',
      ]);
      await you.say_and_wait('もう次の目標を決めたのか？');
      await rice.say_and_wait(['うん！だって、あの！次の ', arim_kin]);
      await rice.say_and_wait([call_26, ' も ', call_13, ' も出るんです！！']);
      await rice.say_and_wait(['だから、', self_name, ' も出ます！']);
      await rice.say_and_wait('『いちばんのレース』がしたいです！！');
      await you.say_and_wait('わかった');
      await rice.say_and_wait(['わ！ありがとう、', callname, '！']);
      await era.printAndWait([arim_kin, ' も ', takz_kin, ' と同じ。']);
      await era.printAndWait([
        'ファンの支持を得た',
        rice.uma_sex_title,
        'だけが出られるレースだ。',
      ]);
      await era.printAndWait([
        'その条件を気にもせず、',
        rice.sex,
        'は「出たい」と言った。',
      ]);
      await era.printAndWait('つまり——');
      era.printButton('「大きくなったな」', 1);
      await era.input();
      await rice.say_and_wait([
        'え？',
        self_name,
        ' の身長、伸びてないですよ？',
      ]);
      await you.say_and_wait('そういう意味じゃない');
      await rice.say_and_wait('じゃあ、どういう意味ですか？');
      await rice.say_and_wait(['あ！教えてください～', callname, '——！！']);
      await era.printAndWait([
        'その一日中、',
        rice.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' にまとわりついていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_lose_s: (() => {
    const title = '小さな青い薔薇';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait(['あの、', self_name, '、走ってるとき']);
      await rice.say_and_wait('聞こえてました。みんなの声');
      await rice.say_and_wait([
        '『がんばれ——』『',
        rice.get_colored_name(),
        '～』って、ずっと ',
        self_name,
        ' を応援してくれて',
      ]);
      await rice.say_and_wait('へへ、これじゃだめですね');
      await rice.say_and_wait([self_name, ' がみんなを笑わせるはずなのに']);
      await rice.say_and_wait([
        '逆に、みんなに ',
        self_name,
        ' が嬉しくなっちゃいました',
      ]);
      await rice.say_and_wait('本当に、幸せです');
      await era.printAndWait([
        rice.get_colored_name(),
        ' は肩を震わせて泣き、観客は',
        rice.sex,
        'に温かい拍手を送った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（シニア級）開始';
    /** @param {CharaTalk} rice ライスシャワー */
    const f = async (rice) => {
      await era.printAndWait('今日から、夏合宿が再び始まった。');
      await rice.say_and_wait('えへへ……にぎやかですね');
      await rice.say_and_wait('この感じ……久しぶりです');
      await rice.say_and_wait('あのときから、もう一年……');
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait('今年も厳しい夏合宿だった。');
      await era.printAndWait([
        '最終日、',
        you.get_colored_name(),
        ' はベンチに座り、帰宅の準備をする ',
        rice.get_colored_name(),
        ' を待っていた……',
      ]);
      await rice.say_and_wait(['あああああ～', callname, '！']);
      await rice.say_and_wait([
        you.get_colored_name(),
        ' を待たせて、ごめんなさい……！',
      ]);
      await rice.say_and_wait('ふう……お手伝いしてたら、こんな時間に');
      await you.say_and_wait('手伝い？');
      await rice.say_and_wait(
        'うん、ここの合宿所にも、たくさんお世話になりましたよね？',
      );
      await rice.say_and_wait([
        self_name,
        '、お花に水をあげたり……ベンチのペンキを塗り直したり——',
      ]);
      await you.say_and_wait('ベンチのペンキ？');
      await rice.say_and_wait([
        'うん！その、',
        callname,
        ' が今座ってるベンチ——',
      ]);
      await you.say_and_wait('……');
      await rice.say_and_wait([callname, '？']);
      await era.printAndWait('ぱらぱら！！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて立ち上がったが、もうべたべたのペンキがついていた。',
      ]);
      await rice.say_and_wait([
        'ご、ごめんなさい！',
        self_name,
        ' が注意書きを書いてなかったから',
      ]);
      await rice.say_and_wait([
        'わあああ……どうしよう、',
        callname,
        '。うわ～～',
      ]);
      await you.say_and_wait('もう一度塗り直そう');
      await rice.say_and_wait('う……本当にごめんなさい');
      await rice.say_and_wait('管理人さんにも謝らないと');
      await rice.say_and_wait('それに、ペンキも借りてこないと');
      await era.printAndWait([
        rice.get_colored_name(),
        ' と一緒に、管理人さんの手伝いをした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_41: (() => {
    const title = 'ファンレター';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, ' に、ファンレターが……']);
      await you.say_and_wait('よかったな');
      await rice.say_and_wait('うん……！');
      await rice.say_and_wait('でも……');
      await era.printAndWait([
        '嬉しそうだった ',
        rice.get_colored_name(),
        ' の顔が',
      ]);
      await era.printAndWait('なぜか、少し不安そうになる。');
      await you.say_and_wait('どうした？');
      await rice.say_and_wait(['……ときどき ', self_name, '、思うんです']);
      await rice.say_and_wait([self_name, ' を応援してくれたせいで']);
      await rice.say_and_wait('この人たち、不幸になったりしないかな——って');
      await rice.say_and_wait([self_name, '、そんなの嫌です……']);
      await rice.say_and_wait('考えたくないのに、つい……');
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        ' はどうしたらいいですか？',
      ]);
      await you.say_and_wait('ファンレターの中身を見てみよう');
      await rice.say_and_wait('中身……うん');
      era.println();
      await you.say_as_unknown_and_wait([
        'コースでがんばる ',
        rice.get_colored_name(),
        ' を見て、たくさん勇気をもらいました……',
      ]);
      await you.say_as_unknown_and_wait([
        '……',
        rice.get_colored_name(),
        ' の笑顔を見ると……',
      ]);
      await you.say_as_unknown_and_wait('……いつでも温かくなれます');
      era.println();
      await rice.say_and_wait([self_name, ' ががんばる姿……']);
      await rice.say_and_wait([self_name, ' の、笑顔……']);
      await rice.say_and_wait('……そうなんだ');
      await rice.say_and_wait('それで喜んでくれる人がいるんですね');
      await rice.say_and_wait([callname]);
      await rice.say_and_wait([self_name, '、ずっと、ずっとがんばります……！']);
      await rice.say_and_wait([
        self_name,
        ' を応援してくれる人が、喜べるように！',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' の目に、やる気の炎が灯ったようだった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      you,
      callname,
      self_name,
      b_call_r,
      arim_kin,
    ) => {
      await era.printAndWait([arim_kin, ' が近づいたこの日。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は合同取材へ向かった。',
      ]);
      await rice.say_and_wait('え、ええ……！？');
      await rice.say_and_wait([self_name, '、真ん中ですか？']);
      await you.say_as_passer_by_and_wait('スタッフA', [
        'そうです！人気投票一位の',
        rice.uma_sex_title,
        'ですから',
      ]);
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        '真ん中は主役の席ですよ！',
      );
      await rice.say_and_wait('でも……これ、今日は—');
      await bourbon.say_and_wait([b_call_r, '、迅速かつ堂々と応じてください']);
      await bourbon.say_and_wait('撮影のあとに取材があります');
      await mcqueen.say_and_wait('ふふ、そうですわね');
      await mcqueen.say_and_wait('主役がいなければ始まりませんもの');
      await bourbon.say_and_wait(
        'ええ。それからあなたは【史上最高のレースを見届けよ】と宣言する、ですね？',
      );
      await mcqueen.say_and_wait('まあ！そこまで？');
      await mcqueen.say_and_wait('ふふ……それは、楽しみですわ');
      await rice.say_and_wait('う～～みんな、目が怖いです……');
      await you.say_and_wait('主役は大変だな');
      await rice.say_and_wait(['う……', callname, ' まで……']);
      await era.printAndWait([
        '会見が終わり……一日がんばった ',
        rice.get_colored_name(),
        ' への休息とご褒美に、街へ出ることにした。',
      ]);
      await rice.say_and_wait('うえ……緊張死にそうです');
      await you.say_and_wait('よくがんばったな');
      await rice.say_and_wait(
        'うん……あの二人に挟まれるなんて、思ってませんでした',
      );
      await rice.say_and_wait(['ねえ、', callname]);
      await rice.say_and_wait('どんなプレゼントがいいですか？');
      await rice.say_and_wait([
        self_name,
        '、',
        callname,
        ' にお返しがしたいです',
      ]);
      await rice.say_and_wait('だから、どんな贈り物がいいですか？');
      await rice.say_and_wait([
        '……',
        self_name,
        ' にできることは、少ないですけど',
      ]);
      await you.say_and_wait('お前ががんばる姿が見たい');
      await rice.say_and_wait('それで……いいんですか？');
      await you.say_and_wait('もちろん！');
      await rice.say_and_wait(['……', callname]);
      await rice.say_and_wait('だめです');
      await rice.say_and_wait(['それだけじゃ、', self_name, '、嫌です！']);
      await rice.say_and_wait('がんばるのは当たり前ですから');
      await rice.say_and_wait([
        '——だから、絶対に ',
        arim_kin,
        ' の一位を、',
        callname,
        ' へのプレゼントにします！',
      ]);
      await rice.say_and_wait([
        'それはきっと、',
        self_name,
        ' にしか送れない贈り物です',
      ]);
      await era.printAndWait('結局、休息どころではなかった。');
      await era.printAndWait('このクリスマスイブは、かえって気が高ぶった。');
      await rice.say_and_wait([callname, '、今日もありがとう！']);
      await rice.say_and_wait([arim_kin, ' では、', callname, ' も、みんなも']);
      await rice.say_and_wait([self_name, ' の走りで、幸せになってくれます！']);
      await era.printAndWait([
        'それから、',
        rice.get_colored_name(),
        ' は軽い足取りで先へ歩いていく。',
      ]);
      await era.printAndWait([
        '出会ったころよりずっと強い背中を、いまは ',
        you.get_colored_name(),
        ' が追う番だった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '誰の胸にも、一輪……';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('すごい、この声');
      await rice.say_and_wait('みんな、こっちを見てます');
      await rice.say_and_wait('みんなの嬉しい顔、見えます……！');
      await you.say_and_wait('本当によくがんばったな');
      await rice.say_and_wait(['う……うん。', self_name, '、がんばりました……']);
      await rice.say_and_wait([
        'みんながいたから、',
        self_name,
        '、がんばれました',
      ]);
      await rice.say_and_wait(
        '本当に、本当に……ありがとうございます……みんな……！',
      );
      await rice.print_and_wait(['この日、', rice.sex, 'は「主役」として']);
      await rice.print_and_wait('みんなに届けた。');
      await rice.print_and_wait('笑顔の咲く、いちばんのレースを。');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = 'むかしむかし、あるところに……';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '「最初の三年」は',
        rice.uma_sex_title,
        'にとってとても大切で、',
        rice.get_colored_name(),
        ' はそのあいだに、まばゆい成績を残した。',
      ]);
      await era.printAndWait([rice.sex, 'は、それによって世に認められた。']);
      await rice.say_and_wait('表彰式……？');
      await you.say_and_wait('みんなに会いに行こう');
      await rice.say_and_wait([
        '……うん。',
        self_name,
        ' も、自分の口で、みんなにありがとうを言いたいです',
      ]);
      await era.printAndWait([
        '——翌日、',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は阪神の競馬場へ向かった。',
      ]);
      await rice.say_and_wait('人、いっぱい……今日はレースないのに');
      await you.say_as_passer_by_and_wait('観客A', [
        'わあ！',
        rice.get_colored_name(),
        ' 来た！きゃーかわいい～！',
      ]);
      await you.say_as_passer_by_and_wait('観客B', [
        'お疲れさま～',
        rice.get_colored_name(),
        '！今日もよろしくな～！',
      ]);
      await rice.say_and_wait('え……え？');
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'お二人とも、お久しぶりです',
      );
      await rice.say_and_wait('お久しぶりです。あの……これは？');
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'ああ、実は最初はスタッフだけで',
      );
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        '小さな祝賀会のつもりだったんですが……',
      );
      await you.say_as_passer_by_and_wait('観客C', [
        rice.get_colored_name(),
        '～！こっち向いて～！',
      ]);
      await you.say_as_passer_by_and_wait('スタッフA', [
        'ご覧のとおり、',
        rice.get_colored_name(),
        ' に会いたいというお客さんがたくさんいらして',
      ]);
      era.printButton(`みんなが ${rice.name} のことが大好きだからだ`, 1);
      await era.input();
      await rice.say_and_wait('うええ？だ、大好き……');
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'あはは、そのとおりです',
      );
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'それで予定を変えて、各方面の関係者に協力をお願いして……',
      );
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        '表彰式はこうして、一般のお客さんも参加できる式典になりました',
      );
      await rice.say_and_wait([
        'じゃあこの人たち、みんな ',
        self_name,
        ' のために……',
      ]);
      await you.say_as_passer_by_and_wait('スタッフA', 'ええ、そうです');
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'あの日できなかったことを、お願いできますか？',
      );
      era.drawLine();
      await rice.say_and_wait('あの、みなさん、こんにちは');
      await rice.say_and_wait([
        '今日、こんなにたくさんの人が ',
        self_name,
        ' のために来てくれて、本当にありがとうございます',
      ]);
      await rice.say_and_wait([
        self_name,
        '、こんなに幸せな景色、見たことありません',
      ]);
      await rice.say_and_wait('いま、本当に幸せです');
      await rice.say_and_wait([self_name, '、もう泣きません']);
      await rice.say_and_wait([
        'だって ',
        self_name,
        '、今日はみんなの目を見て話したいから',
      ]);
      await rice.say_and_wait([
        'ひとりだったら、',
        self_name,
        ' はいまごろ、何も進んでなかったと思います',
      ]);
      await rice.say_and_wait('自分の暗い世界に、縮こまってただけです');
      await rice.say_and_wait([
        'でも、',
        self_name,
        ' はもう、ひとりじゃありません',
      ]);
      await rice.say_and_wait([
        self_name,
        ' がここに立てるのは、',
        you.sex,
        'のおかげです',
      ]);
      await rice.say_and_wait([
        self_name,
        ' に光をくれて、',
        self_name,
        ' の居場所をくれて……',
      ]);
      await rice.say_and_wait('みなさん、本当にありがとうございます！');
      await rice.say_and_wait([
        'だからこれからも、',
        self_name,
        ' を応援してください……！！',
      ]);
      await you.say_as_passer_by_and_wait('観客たち', 'わあああああああ——');
      era.drawLine({ content: '帰りのバス' });
      await rice.say_and_wait([
        'ありがとう、',
        callname,
        '。全部、あなたのおかげです',
      ]);
      await you.say_and_wait(['よくがんばったな、', rice.name]);
      await rice.print_and_wait([
        'こうして、ずっと自分をダメだと思っていた',
        rice.child_sex_title,
        'は、誰かの青い薔薇になった。',
      ]);
      await rice.print_and_wait('絵本とは違う。ときどき、不幸も起きる……');
      await rice.print_and_wait([
        'でも',
        rice.sex,
        'は、みんなを幸せにしたいという希望を抱いて、美しく咲く。',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' は、世界でいちばん好きな人のそばで、そう祈っていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_stay: (() => {
    const title = '睡眠不足';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     */
    const f = async (rice, you, callname) => {
      await rice.say_and_wait('ふ～あ……');
      era.printButton('「眠れなかったのか？」', 1);
      await era.input();
      await rice.say_and_wait('え！？');
      await rice.say_and_wait(['あ、よかった、', callname, '～']);
      await rice.say_and_wait('実は、昨夜寝る前に、怖い本を読んじゃって');
      await rice.say_and_wait('そしたら机の上のぬいぐるみの向きが気になって');
      await rice.say_and_wait('時計の針の音も、すごく大きく聞こえて……');
      await rice.say_and_wait('最後は全部が気になって、ぜんぜん眠れなくて……');
      await rice.say_and_wait('はぁ～');
      await era.printAndWait([
        'どうやら、',
        rice.get_colored_name(),
        ' は睡眠不足らしい。',
      ]);
      await era.printAndWait('ちゃんと眠れるといいのだが。');
    };
    f.title = title;
    return f;
  })(),
  sa_teach: (() => {
    const title = '名指導';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, zob_zoy, you, callname, self_name) => {
      await rice.say_and_wait('ふん……ふん、ふん……♪');
      await zob_zoy.say_and_wait([self_name, '、嬉しそうです']);
      await zob_zoy.say_and_wait('何かいいことがあったのですか？');
      await rice.say_and_wait([
        'うん……ねえ、',
        self_name,
        '、授業でコースを走ったんです',
      ]);
      await rice.say_and_wait('前よりいいタイムが出ました！');
      await rice.say_and_wait('昨日、新しい走り方を習ったから、これも——');
      await zob_zoy.say_and_wait(['……', callname, ' のおかげ、ですか？']);
      await rice.say_and_wait('え……ええ、どうしてわかるんですか！？');
      await zob_zoy.say_and_wait('ふふ、すみません');
      await zob_zoy.say_and_wait('夜中に本を読んでいると、たまに……');
      await zob_zoy.say_and_wait([
        '幸せそうな寝言で『ありがとう、',
        callname,
        '……』って聞こえるんです',
      ]);
      await rice.say_and_wait('う、うわ、わああ、恥ずかしい！');
      await zob_zoy.say_and_wait('ごめんなさい、からかうつもりじゃありません');
      await zob_zoy.say_and_wait(
        'これほど感謝されるということは、きっと素晴らしいトレーナーなんだと思っただけです',
      );
      await rice.say_and_wait([
        'う、うん！',
        callname,
        ' は、いちばんのトレーナーです！',
      ]);
      await era.printAndWait([
        'そのあと、',
        rice.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のいいところを、しばらく語り続けた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_dance: (() => {
    const title = 'ダンスレッスン';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('いち、に、いち、に、ここで足を——');
      await rice.say_and_wait('やあ！');
      await rice.say_and_wait('あうう、また失敗……もっと練習しないと……');
      await you.say_and_wait('よくがんばってるな');
      await rice.say_and_wait([
        'うわ！？',
        callname,
        '！？み、見られちゃった……',
      ]);
      await rice.say_and_wait([
        'ごめんなさい、あの……',
        self_name,
        '、誰もいないときに練習しようと思って',
      ]);
      await you.say_and_wait('どうしてひとりで？');
      await rice.say_and_wait(
        'だって、前にクラスみんなで授業してたとき、ダンス室が……停電して',
      );
      await rice.say_and_wait([
        'みんなの授業が止まっちゃいました。たぶん、',
        self_name,
        ' のせい……',
      ]);
      await rice.say_and_wait([
        self_name,
        '、もうみんなに迷惑かけたくなくて、ひとりで練習してます',
      ]);
      await rice.say_and_wait([
        callname,
        ' も、いまここにいたら、何か迷惑かけるかも……',
      ]);
      era.printButton('「俺がいると困るのか？」（スタミナ+10、根性+10）', 1);
      era.printButton('「遠慮なく迷惑かけろ！」（賢さ+10、スキルPt+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await rice.say_and_wait([
          'そ、そんな！',
          callname,
          ' は、困ったりしません！',
        ]);
        await you.say_and_wait('じゃあ、手伝わせてくれ');
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait('ありがとう');
        await rice.say_and_wait([
          self_name,
          ' の下手なところ、',
          callname,
          ' が言ってください',
        ]);
        await you.say_and_wait('一緒にがんばろう');
        await rice.say_and_wait('うん！');
        await era.printAndWait([
          'そのあと、',
          you.get_colored_name(),
          ' と ',
          rice.get_colored_name(),
          ' は、',
          rice.sex,
          'の苦手なステップを徹底して練習した。',
        ]);
      } else {
        await rice.say_and_wait([
          'うえ！？そんな、',
          callname,
          ' に迷惑かけたくないです！',
        ]);
        await you.say_and_wait([self_name, ' がひとりで悩むほうが、俺は困る']);
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait('練習の悩み、一緒に話してもいいですか？');
        await you.say_and_wait('もちろん！');
        await rice.say_and_wait('ありがとう！実は、すごく難しいステップが……');
        await era.printAndWait([
          'そのあと遅くまで、',
          you.get_colored_name(),
          ' は ',
          rice.get_colored_name(),
          ' とダンスの悩みを話し合った。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  or_letter: (() => {
    const title = 'ファンレター';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        'ある日、',
        rice.get_colored_name(),
        ' のもとにファンレターが届いた。',
      ]);
      await rice.say_and_wait([self_name, ' 宛の、ファンレター……']);
      await you.say_and_wait('よかったな');
      await rice.say_and_wait('うん、うん！');
      await rice.say_and_wait('でも……');
      await era.printAndWait([
        self_name,
        ' の嬉しそうな顔が、少し不安そうになる。',
      ]);
      await you.say_and_wait('どうした？');
      await rice.say_and_wait([self_name, '、ときどき、考えちゃうんです']);
      await rice.say_and_wait([
        self_name,
        ' を応援してくれる人が、それで不幸になったりしないか',
      ]);
      await rice.say_and_wait([
        self_name,
        '、そんなの嫌なのに。考えたくないのに、つい……',
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        ' はどうしたらいいですか？',
      ]);
      await you.say_and_wait('ファンレターの中身を見てみよう');
      await rice.say_and_wait('中身、うん……');
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        ' がレースでがんばる姿が、たくさん勇気をくれました',
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        ' の笑顔を見るたびに、心が温かくなります',
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        ' ががんばる姿……',
        rice.get_colored_name(),
        ' の笑顔……',
      ]);
      await rice.say_and_wait('そうなんだ。それで喜んでくれる人がいるんですね');
      await rice.say_and_wait([callname, '、もっと、もっとがんばります！']);
      await rice.say_and_wait([
        self_name,
        ' を応援してくれる人が、みんな喜べるように',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' の目に、やる気の炎が灯ったようだった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
