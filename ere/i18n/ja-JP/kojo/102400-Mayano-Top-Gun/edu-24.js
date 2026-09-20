/**
 * @file マヤノトップガン - 育成
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_17 マヤノトップガンのシンボリルドルフへの呼び方
     * @param {PrintedSpan} t_call_l トウカイテイオーのシンボリルドルフへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     */
    const f = async (
      maya,
      teio,
      you,
      callname,
      call_3,
      call_17,
      t_call_l,
      t_call_m,
    ) => {
      await maya.say_and_wait(
        'ねえねえ！ トレーニングも終わったし～、マヤといいとこ行かない？',
      );
      era.printButton('「いいとこ、ってどこだ？」', 1);
      await era.input();
      await maya.say_and_wait(
        '教えてあげる教えてあげる！ すっごくキラキラした夜景が見える場所──',
      );
      await teio.say_and_wait(['よいしょ、よいしょ……ん？ ', t_call_m, '～！']);
      await maya.say_and_wait(['あ、', call_3, '！ やっほー！']);
      await teio.say_and_wait(
        'ちょうど探してた！ 今日、ちょっと遅くなるかもって言おうと思って！',
      );
      await maya.say_and_wait([
        'きゃ☆ 門限遅れるなんて、進展あり～！ ',
        call_3,
        '、大人だね～！',
      ]);
      await teio.say_and_wait([
        'うん！ さっき ',
        t_call_l,
        ' のレース見て、走りたくなっちゃって！',
      ]);
      await teio.say_and_wait([
        t_call_m,
        ' の言い方だと……すごくキラキラ、かな？',
      ]);
      await maya.say_and_wait([
        'わ……！ わかるわかる！ ',
        call_17,
        ' の走り、ほんとカッコいい！',
      ]);
      await maya.say_and_wait('ん～～マヤもワクワクしてきた……');
      await maya.say_and_wait([
        callname,
        '、夜景はなし！ マヤ、今キラキラしたい！',
      ]);
      era.printButton('「付き合うよ！」', 1);
      era.printButton('「休みも大事だ」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['えへへ、さすが ', callname, '！']);
        await teio.say_and_wait('じゃあ併走しよ！ そっちのほうが燃えるし！');
        await maya.say_and_wait('オッケー！ テイクオフするよ☆');
        await era.printAndWait([
          maya.get_colored_name(),
          ' は全力で追加のトレーニングをした。',
        ]);
      } else {
        await maya.say_and_wait(
          'うん！ そうだね！ お肌と同じで、休まないとツヤ出ないもんね！',
        );
        await maya.say_and_wait(
          'わかった！ キラキラの夜景で、マヤの輝きチャージする♪',
        );
        await teio.say_and_wait('じゃあ先行くね！ 門限までに戻るから～～！');
        await era.printAndWait([
          'こうして ',
          you.get_colored_name(),
          ' は ',
          maya.get_colored_name(),
          ' と夜景を眺め、',
          maya.sex,
          'の身体をしっかり休ませた',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = 'お大事に！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (maya, you, callname, fail_again) => {
      await era.printAndWait([
        'マヤノトップガンはトレーニング中に怪我をし、',
        you.get_colored_name(),
        ' は慌てて',
        maya.sex,
        'を保健室へ連れていった。',
      ]);
      await maya.say_and_wait('あ～痛い！ これじゃトレーニングできないかも～');
      era.printButton('「おとなしく休もう……！」', 1);
      await era.input();
      await maya.say_and_wait('うん……いいけど……');
      await maya.say_and_wait([callname, ' が看病してくれたら、元気出るかも♪']);
      era.printButton('「わかった」', 1);
      era.printButton('「まだ子供だな」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('きゃ☆ やった～！');
        await maya.say_and_wait('それじゃあ、おでこで熱、測って……');
        era.printButton('「熱？ 怪我だろ？」', 1);
        await era.input();
        await maya.say_and_wait(
          '気にしない気にしない！ 心臓バクバクで、痛いは『シュッ！』て飛ばすんだ──',
        );
        await maya.say_and_wait(
          'あうっ！！！！ へ、へん？ なんか本当に……痛い。',
        );
        await era.printAndWait([
          '調子に乗ったマヤノトップガンを慌てて看病し、なんとか',
          maya.sex,
          'を休ませた……',
        ]);
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait('えっ！？ ちがうよ！ これ『大人』の甘え方～！');
        await maya.say_and_wait(
          'おかしいな、本にはこれで『一撃ハート☆』って書いてあったのに……',
        );
        await maya.say_and_wait(
          'わかった！ 熱がないからだ！ 熱あれば本みたいに──',
        );
        era.printButton('「お、と、な、し、く、休む！」', 1);
        await era.input();
        await maya.say_and_wait('うぅ……わかったよ～～');
        await era.printAndWait([
          maya.get_colored_name(),
          ' は不満そうだったが、なんとか',
          maya.sex,
          'を休ませた……',
        ]);
      } else {
        await maya.say_and_wait([
          '……もしかして、',
          callname,
          ' の好みと違う？',
        ]);
        await maya.say_and_wait([
          'それじゃあ、',
          callname,
          '！ マヤ、なにすれば『ドキドキ』する～？',
        ]);
        era.printButton('「君が元気なのが、いちばん嬉しい」', 1);
        await era.input();
        await maya.say_and_wait('元気……？ マヤが元気になったら、嬉しいの？');
        await maya.say_and_wait('えへへ、えへへへ……えへへへへへ！');
        await maya.say_and_wait('わかった！ ちゃんと休んで、元気になる～！');
        await maya.say_and_wait(
          'そしたらそしたら！ また一緒にトレーニングしよ☆',
        );
        await era.printAndWait(
          '宣言どおり、マヤノトップガンはきちんと休み……元気にトレーニングへ戻った！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は禁物！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (maya, you, callname, fail_again) => {
      await maya.say_and_wait('えへへ、やっちゃった～');
      await maya.say_and_wait([
        'でも ',
        callname,
        ' って大げさ～、そんなひどい怪我じゃないよ！',
      ]);
      await maya.say_and_wait(
        'はい、早くトレーニング戻ろ！ マヤはもう大人だし、このくらい──',
      );
      await maya.say_and_wait('……痛い～～！！');
      era.printButton('「大丈夫か！？」', 1);
      await era.input();
      await maya.say_and_wait('大丈夫……痛くても、痛くないって言うのが大人。');
      await maya.say_and_wait('だからマヤ、痛いなんて言わない！');
      await maya.say_and_wait(
        '子供みたいでカッコ悪い……マヤ、ああいうのやだ～～！',
      );
      era.printButton('「なら『大人』らしくしよう」', 1);
      era.printButton('「カッコ悪くない！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('大人らしく……？ おとなしく休むこと？');
        await maya.say_and_wait('なるほど……それも『大人』なんだ。');
        await maya.say_and_wait(
          '……わかった！ マヤは痛くないけど、大人みたいにおとなしく休む。',
        );
        await maya.say_and_wait('ぜんぜん……痛くないし……');
        await era.printAndWait(
          'こうして、なんとかマヤノトップガンを休ませた。',
        );
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait([callname, '……でも……']);
        era.printButton('「無理して悪化させるほうがカッコ悪い」', 1);
        await era.input();
        await maya.say_and_wait('あっ！ たしかに！');
        await maya.say_and_wait(
          '……で、でも大丈夫！ ちょっと痛いだけ、悪化しないよ──',
        );
        await maya.say_and_wait('うぅ～～！！ 痛い────！！');
        await era.printAndWait(
          '平気なふりをしたせいで傷が悪化し、何日も休むことになった……',
        );
      } else {
        await maya.say_and_wait('……ねえ、正直言うと、怪我したとこ、超痛い。');
        await maya.say_and_wait([
          'でもでも、',
          callname,
          ' とちゃんとトレーニングしたい……！',
        ]);
        era.printButton('「しっかり休んで、また頑張ろう」', 1);
        await era.input();
        await maya.say_and_wait('……うん！');
        await era.printAndWait(
          '傷が治るまで時間はかかった……が、なんとか元気を取り戻した。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = 'レースの前に';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'レース前、控え室へ行くと……',
        maya.get_colored_name(),
        ' は頭の中でレースをシミュレートしているようだった。',
      ]);
      await maya.say_and_wait('で、前の子が来たら『シュッ！』て突破……');
      era.printButton('（……すごい集中力だ）', 1);
      await era.input();
      await maya.say_and_wait(['……えっ！？ ', callname, '！？']);
      await maya.say_and_wait(
        'あわわ、びっくりした！ 全然気づかなかった！ なんで！？',
      );
      era.printButton('「今、すごく集中してたみたいだ」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへ、そう！ さっきから心臓バクバク止まらないの。',
      );
      await maya.say_and_wait(['でも……次は ', callname, ' の番！']);
      await maya.say_and_wait('マヤの走り、夢中にさせてあげる♪');
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('Victory☆勝ったマヤノトップガン、凱旋！');
      era.printButton('「おめでとう！」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへ！ 嬉しかった？？ マヤの走り、ドキドキした？？',
      );
      era.printButton('「もちろん」', 1);
      era.printButton('「まだ足りない」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('わっ☆ よかった、よかった！');
        await maya.say_and_wait(
          'でもね、マヤ気づいちゃった♪ もっとドキドキできる！',
        );
        await maya.say_and_wait('だ・か・ら！ 次のレース……覚悟してて☆');
      } else {
        await maya.say_and_wait('……！！');
        await maya.say_and_wait([
          'きゃ☆ ',
          callname,
          ' 最高！ マヤも同じこと思ってた～！',
        ]);
        await maya.say_and_wait(
          'ねえねえ！ 最後の直線……ゴール板、すごく輝いて見えた！',
        );
        await maya.say_and_wait(
          'でも……ゴールしたら、あの輝きとドキドキ、消えちゃった……',
        );
        await maya.say_and_wait(
          'だからわかった！ マヤ、もっとドキドキできる！',
        );
        await maya.say_and_wait([
          'だ・か・ら！ ',
          callname,
          '、もっと、も～っとドキドキさせてあげる♪',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        'あ、',
        callname,
        '、やっと来た！ レース終わったよ、行こ～！',
      ]);
      await maya.say_and_wait(
        'ねえねえ、レース場の限定スイーツ、一緒に食べたい♪',
      );
      era.printButton('「その前にレースの振り返りを……」', 1);
      await era.input();
      await maya.say_and_wait('え？ 今回は負けたけど、次は勝てると思うよ？？');
      await maya.say_and_wait(
        'みんなの強さも、コースの取り方も、もうわかった♪ 大丈夫大丈夫！',
      );
      era.printButton('「期待してる」', 1);
      era.printButton('「……練習しよう！」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('任せて☆ 期待超える走り見せる！ だって──');
        await maya.say_and_wait('──いい感じに期待を裏切るのが、大人の女……');
        await maya.say_and_wait('本にそう書いてあった♪');
        await maya.say_and_wait([
          '次は勝って、',
          callname,
          ' にマヤの言うこと聞かせる！ 絶対！',
        ]);
      } else {
        await maya.say_and_wait([
          'ん～',
          callname,
          ' がそう言うなら、頑張る……',
        ]);
        await maya.say_and_wait([callname, ' って心配性？？']);
        era.printButton('「一番になってほしいから」', 1);
        await era.input();
        await maya.say_and_wait('……え？ つまり、マヤのため？');
        await maya.say_and_wait('きゃ☆ 大事にされてる！');
        await maya.say_and_wait('わかった！ マヤ、頑張る♪');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'レース敗北';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('あ～負けちゃった～、勝てると思ってたのに。');
      era.printButton('「他の子も強かったからな」', 1);
      await era.input();
      await maya.say_and_wait('……他の子？');
      await maya.say_and_wait(
        'エマージェンシー！ ダメダメ、今そんなこと言っちゃ～！！',
      );
      await maya.say_and_wait([
        'マヤは ',
        callname,
        ' の目にマヤだけいてほしい！',
      ]);
      await maya.say_and_wait(
        'ねえねえ！ そう言っても、LOVE☆マヤノトップガン……でしょ！？ でしょ！！',
      );
      era.printButton('「もちろん！」', 1);
      era.printButton('「……走り次第かもな」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('ふぅ……危ない……');
        await maya.say_and_wait('……あのね、次のレース、一番取るから。');
        await maya.say_and_wait('だから……応援してね！');
        await maya.say_and_wait('絶対……絶対、他の子よりすごいって思わせる！');
      } else {
        await maya.say_and_wait(['ふん～！ ', callname, ' いじわる！']);
        await maya.say_and_wait('いいよ！ 次のレース、超いい成績出す！');
        await maya.say_and_wait(
          'マヤがすごい女だって、誰よりかわいいって、教えてあげる！',
        );
        await maya.say_and_wait('横取り、大歓迎！！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '次こそは負けない！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        'また負けた……どうしよう、',
        callname,
        '……マ、マヤ……',
      ]);
      era.printButton('「マヤノ……」', 1);
      await era.input();
      await maya.say_and_wait('──超～ハイパーにワクワクしてきた～～！！');
      era.printButton('「えっ！？」', 1);
      await era.input();
      await maya.say_and_wait('うまく言えないけど、エンジンかかった感じ！');
      await maya.say_and_wait(
        'できると思ってたことができない！ 心臓バクバクして爆発しそう！',
      );
      await maya.say_and_wait(
        'そうだ！ このまま『シューッ──！』てトレーニング行こ！？',
      );
      era.printButton('「まず落ち着こう」', 1);
      era.printButton('「トレーニングしよう！」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('えっ────────！？');
        await maya.say_and_wait(
          'エンジン温まったし、いつでもテイクオフできるよ！？',
        );
        era.printButton('「緊急テイクオフは失速の原因だ！」', 1);
        await era.input();
        await maya.say_and_wait('うぅ！ たしかに！ それじゃマヤ、墜落する……！');
        await maya.say_and_wait(
          '危ない危ない！ 先にエンジン、ちゃんと整備しなきゃ……だよね！',
        );
        await era.printAndWait([
          'そのあと、',
          you.get_colored_name(),
          ' は ',
          maya.get_colored_name(),
          ' と次のレースの準備をした。',
        ]);
      } else {
        await maya.say_and_wait(['きゃ☆ さすが ', callname, '！ 大好き！']);
        await maya.say_and_wait('よーし！ マヤ、本気出す！');
        await maya.say_and_wait([
          '特技飛行、見せてあげる。',
          callname,
          '、落ちないように……ね♪',
        ]);
        await era.printAndWait([
          '宣言どおり、',
          maya.get_colored_name(),
          ' は全力でトレーニングに入り……実力が一段と研ぎ澄まされた！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_16: (() => {
    const title = 'キラキラしたいから！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        'メイクデビューに向けてトレーニングを重ねていた、ある日のこと──',
      );
      await maya.say_and_wait([callname, '☆ ダートを三周走ったよ！']);
      era.printButton('「お疲れ！」', 1);
      await era.input();
      await maya.say_and_wait('えへへ～♪ マヤ、まだ疲れないよ～！');
      await maya.say_and_wait('ねえねえ、次はなにトレーニングする？');
      await maya.say_and_wait('今までのメニューからすると、ちょっと楽なやつ？');
      await era.printAndWait([
        '──',
        maya.sex,
        'の言うとおり、今回は柔らかいダートを中心に組んである。',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' の身体は、まだ成長の途中だ。',
        you.get_colored_name(),
        ' は、',
        maya.sex,
        'の脚に負担をかけすぎないつもりだった……',
      ]);
      era.printButton('「もう少し頑張りたい？」', 1);
      await era.input();
      await maya.say_and_wait('ちがう！ 『もう少し』じゃ足りない！');
      await maya.say_and_wait('だって出るのはトゥインクル・シリーズだよ！');
      await maya.say_and_wait(
        'ワクワクして、知りたいこといっぱい、場にいるみんなもキラキラしてて……',
      );
      await maya.say_and_wait(
        'トゥインクル・シリーズに出るなら、先にもっと速くなりたい！',
      );
      await maya.say_and_wait('えへへ、そ・れ・に～');
      await maya.say_and_wait([
        callname,
        ' も、マヤはまだ『もっとできる』って思ってるでしょ？',
      ]);
      era.printButton('「もちろん！」', 1);
      await era.input();
      await maya.say_and_wait('やった、正解～☆');
      await era.printAndWait([
        'そこで ',
        you.get_colored_name(),
        ' は方針は変えずに、',
        maya.sex,
        'にいろいろなトレーニングを試させた──',
      ]);
      await maya.say_and_wait('……レース研究。研究……か……！');
      await maya.say_and_wait('あはは♪ 大人の階段、ダッシュで登ってる感じ☆');
      era.printButton('「これもトレーニングだ」', 1);
      await era.input();
      await maya.say_and_wait(
        'はいはい、わかってる☆ それに、こういうのマヤ得意！',
      );
      await maya.say_and_wait('……ん？');
      await maya.say_and_wait(
        'え、映像もう終わり？ 三十分しか経ってないよね？',
      );
      await maya.say_and_wait(
        'あ、わかった！ こういうのでマヤを焦らす作戦だ～',
      );
      await maya.say_and_wait('こ・れ・が……大人が使うじらし☆……きゃ☆');
      await era.printAndWait('そうは言っても──');
      await maya.say_and_wait([
        'あ、',
        callname,
        '。この映像、もう見なくていい！',
      ]);
      await maya.say_and_wait(
        '第三コーナー入ったあと、1番の子が『シューッ──！』て早めに前に出るでしょ？',
      );
      era.printButton('「そうか？」', 1);
      await era.input();
      await maya.say_and_wait(
        'うん、だってわかるもん。マヤの言うとおりか、見てみて。',
      );
      await era.printAndWait([
        maya.sex,
        'に急かされ、',
        you.get_colored_name(),
        ' は映像を早送りして確認した……',
      ]);
      await maya.say_and_wait('ほら～☆ マヤの言ったとおり～！');
      await maya.say_and_wait('えへへ、次！ 次！！');
      await era.printAndWait([
        maya.sex,
        'はその勢いで、',
        you.get_colored_name(),
        ' が用意したレース映像を全部見てしまった……',
      ]);
      await maya.say_and_wait(['え？ ', callname, '。もうないの？']);
      era.printButton('「……別のトレーニングをしよう」', 1);
      await era.input();
      await maya.say_and_wait('あっ！ そっか～！ 続けるのも大歓迎だよ☆');
      await era.printAndWait('──心肺を鍛えるため、次はプールへ移った。');
      await maya.say_and_wait(
        'つまり、息継ぎなしでどれだけ泳げるか、測るんだよね！',
      );
      await maya.say_and_wait(
        'ちなみに！ どのくらい泳いだら、マヤ超すごいって褒めてくれる？',
      );
      await era.printAndWait(
        '……普段練習していれば75メートルは泳げる。初めてなら……100メートルくらいが妥当だろう。',
      );
      await era.printAndWait([
        'だが、300メートル泳いだ',
        maya.uma_sex_title,
        'もいる。せっかく測るなら──',
      ]);
      era.printButton('「300メートルを目標にしてみよう」', 1);
      await era.input();
      await maya.say_and_wait('了解！ じゃあ泳ぐよ！');
      await maya.say_and_wait('はあ……');
      await maya.say_and_wait('もう～なんで～！？ 半分でダメだった～！');
      await era.printAndWait(
        'それでも半分──150メートルは立派な記録だ。あと少しずつ続ければ、いつか300メートルも……',
      );
      await maya.say_and_wait('む～もう一回！');
      await maya.say_and_wait('今度こそ300メートル☆');
      era.printButton('「まだ二回目だぞ！？」', 1);
      await era.input();
      await maya.say_and_wait('うん、もう二回目だよ。');
      await maya.say_and_wait(
        'それに、力の入れ方？ 半分まで泳いだとき、もうわかっちゃった☆',
      );
      await maya.say_and_wait('えへへ♪ 早く試してみよ！');
      await maya.say_and_wait('あっ！！');
      await maya.say_and_wait([
        callname,
        '！ できたらいい、新しい課題ちょうだい！ ね♪',
      ]);
      await maya.say_and_wait('にひひ☆ You copy？');
      await era.printAndWait([
        '……こうして',
        maya.sex,
        'の要求に応えるため、',
        you.get_colored_name(),
        ' は必死に頭を絞った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビューに向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'ついに ',
        maya.get_colored_name(),
        ' のメイクデビュー当日だ！',
      ]);
      await maya.say_and_wait([
        '見て見て！ ',
        callname,
        '！ 今日、体操服じゃないよ！',
      ]);
      await maya.say_and_wait('なんでか、わかる～？');
      era.printButton('「メイクデビューだから！」', 1);
      await era.input();
      await maya.say_and_wait(
        'ピンポーン、正解！ ゆびきりと、一番ハンコあげる！',
      );
      await maya.say_and_wait([
        'だから……',
        callname,
        '！ 目、マヤから離しちゃダメだよ。',
      ]);
      await maya.say_and_wait(
        'トゥインクル・シリーズでキラキラするマヤ、目を開けて見ててね♪',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'フライト延長希望！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        ' のメイクデビューは、こうして無事に終わった──',
      ]);
      await maya.say_and_wait('むむ……ん……？');
      await maya.say_and_wait('んーんーん……？');
      await era.printAndWait([
        'さっきから ',
        maya.get_colored_name(),
        ' の様子がおかしい……',
      ]);
      era.printButton('「どうした？」', 1);
      await era.input();
      await maya.say_and_wait(
        'ん……どうした、ってほどじゃない。終わっちゃった、って思って。',
      );
      await maya.say_and_wait([
        'ねえねえ、',
        callname,
        '！ メイクデビュー、本当にこれで終わり？',
      ]);
      await maya.say_and_wait('なんか隠してない？');
      await era.printAndWait([
        '……',
        maya.sex,
        'がそう言っても、メイクデビューは一度きりのものだ。',
      ]);
      await maya.say_and_wait('え……？');
      await era.printAndWait([
        '……だが ',
        maya.get_colored_name(),
        ' は、まったく満たされていない顔をしている。',
      ]);
      era.printButton('「もっとレースに出よう」', 1);
      await era.input();
      await maya.say_and_wait('うん…………');
      await maya.say_and_wait('……うん、そうしよ。');
      await maya.say_and_wait(
        'やっとデビューできたんだもん。やっとここまで来たんだもん。',
      );
      await maya.say_and_wait('トゥインクル・シリーズ……');
      await maya.say_and_wait(
        '……ワクワクして、キラキラできるレースのはずだよ。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_date: (() => {
    const title = 'デートしよっ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        'メイクデビューから数ヶ月。いつものようにトレーニングしていると──',
      );
      await maya.say_and_wait('……');
      await maya.say_and_wait('……あっ。');
      era.printButton('「どうした？」', 1);
      await era.input();
      await maya.say_and_wait(['わっ！？ ', callname, '！？']);
      await maya.say_and_wait(
        'なんでもない、なんでもない！ なんでもないけど……',
      );
      await maya.say_and_wait('……はあ。');
      await era.printAndWait(
        '──口ではなんでもないと言いながら、大きく息を吐いた。',
      );
      era.printButton('「気分転換しよう」', 1);
      await era.input();
      await maya.say_and_wait('気分転換……デートするの？');
      era.printButton('「ああ」', 1);
      await era.input();
      await maya.say_and_wait('ほんと！？');
      await maya.say_and_wait([
        'やった！ 一分ちょうだい、準備する！ ',
        callname,
        ' とデート、デート☆',
      ]);
      await maya.say_and_wait([
        'えへへ、',
        callname,
        ' はどんな大人デート、見せてくれるのかな～♪',
      ]);
      await era.printAndWait([
        '……こうして出かけることになった。',
        maya.sex,
        'が喜ぶ場所と言えば──',
      ]);
      await maya.say_and_wait(
        'デートの最後は、マヤがいちばんキラキラできるとこじゃなきゃ！',
      );
      await era.printAndWait('──やはり、あそこしかない。');
      await era.printAndWait('（わああああああ────！！）');
      await maya.say_and_wait('ここは……');
      era.printButton('「君がいちばんキラキラできる場所だ」', 1);
      await era.input();
      await maya.say_and_wait('…………');
      await maya.say_and_wait(['……', callname, '、今もそう思う？']);
      await maya.say_and_wait(
        '『思ってたのと違うかも』って、今マヤが言ったら……怒る？',
      );
      era.printButton('「急にどうした？」', 1);
      await era.input();
      await maya.say_and_wait('ん…………');
      await maya.say_and_wait(
        '……マヤね、レースに出れば絶対ワクワクできるって思ってた。',
      );
      await maya.say_and_wait([
        '場で走ってる',
        maya.child_sex_title,
        '、みんなキラキラしてるでしょ？',
      ]);
      await maya.say_and_wait(
        'だからメイクデビューも、他のレースも、ずっと楽しみにしてた。',
      );
      await maya.say_and_wait('でも、実際出てみたら、なんか……違う。');
      await maya.say_and_wait(
        '……ああ、こういうことなんだ。ちょっとつまんない。',
      );
      await maya.say_and_wait('こんなこと言っちゃダメなの、わかってる。でも……');
      await maya.say_and_wait('…………つまんないって、思っちゃう。');
      era.printButton('「そうか」', 1);
      await era.input();
      await maya.say_and_wait('…………うん。');
      await maya.say_and_wait('………………');
      era.printButton('「いい話を聞いた！」', 1);
      await era.input();
      await maya.say_and_wait('え……？');
      await era.printAndWait([
        'トゥインクル・シリーズで',
        maya.sex,
        'が味わったのは、まだメイクデビュー級の水準だ。',
      ]);
      await era.printAndWait([
        'その程度では ',
        maya.get_colored_name(),
        ' は満たされない。なら、もっと高いところを目指せばいい。',
      ]);
      await era.printAndWait([
        'これから強い相手と競る機会は増える。',
        maya.sex,
        'の知らないレースも、まだある。',
      ]);
      await era.printAndWait([
        'だから今',
        maya.sex,
        'を悩ませているのが「退屈」なら──',
      ]);
      era.printButton('「この先、もっと面白くしよう！」', 1);
      await era.input();
      await maya.say_and_wait('……面白い？');
      await maya.say_and_wait('本当に……できる？ だってマヤ、もう──');
      era.printButton('「君がキラキラできるように、俺が頑張る」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await era.printAndWait([
        maya.get_colored_name(),
        ' には、',
        maya.sex,
        'だけの、たった一つの輝き方があるはずだ。',
      ]);
      await era.printAndWait([
        'せっかく ',
        maya.get_colored_name(),
        ' のような才能ある',
        maya.uma_sex_title,
        'の担当になったのなら──',
      ]);
      await era.printAndWait([
        '──',
        maya.sex,
        'が才能を出せる舞台を用意し、',
        maya.sex,
        'だけの伸び方を見つける。それがトレーナーの務めだろう。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 マヤノトップガンのフジキセキへの呼び方
     */
    const f = async (maya, you, callname, call_5) => {
      await era.printAndWait([
        '今年からクラシック級の挑戦が始まる。新年の抱負を決めるため、二人は落ち合う──',
      ]);
      await maya.say_and_wait('…………');
      await maya.say_and_wait([callname, '、抱負、決めなきゃダメ？']);
      era.printButton('「決めたくないのか？」', 1);
      await era.input();
      await maya.say_and_wait('……うん。');
      await maya.say_and_wait(
        '普通、『頑張る！』とか『絶対やる！』って思うときに、抱負立てるんでしょ？',
      );
      await maya.say_and_wait(
        'だからマヤ、来る途中ずっと考えてた。クラシック級になってからのこと。',
      );
      era.printButton('「マヤ」', 1);
      await era.input();
      await maya.say_and_wait([
        'でも同じレースに出るの、マヤと同じ年にデビューした',
        maya.uma_sex_title,
        'でしょ？',
      ]);
      await maya.say_and_wait('……前と変わらないじゃん。');
      await maya.say_and_wait('またつまんないって、思っちゃうかな……');
      era.printButton('「じゃあレース以外の抱負は？」', 1);
      await era.input();
      await maya.say_and_wait('……え？');
      await maya.say_and_wait('レース以外……でもいいの？');
      era.printButton('「いいよ。『新年』の抱負だからな」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait('じ、じゃあ！ マヤ、いっぱいデートしたい！');
      await maya.say_and_wait([
        '大人のこと、',
        callname,
        ' にいっぱい教えてほしい！',
      ]);
      era.printButton('「そう来ると思った」', 1);
      await era.input();
      await maya.say_and_wait([
        'うん、えへへ！ ',
        callname,
        ' がなんでもいいって言った☆',
      ]);
      await maya.say_and_wait('決めた！ マヤの抱負は『いっぱいデートする』！');
      await maya.say_and_wait(['ははっ、', callname, '、大好き♪']);
      await era.printAndWait([
        '……',
        maya.get_colored_name(),
        ' は先ほどまでと別人のように、笑顔を見せた。',
      ]);
      await era.printAndWait([
        'こうして別の視点で物事を見る経験は、きっと',
        maya.sex,
        'の助けになる。いつか胸が跳ねる瞬間に出会うためにも。',
      ]);
      await era.printAndWait('だから今は──');
      era.printButton('「今すぐデートしよう！」', 1);
      await era.input();
      await maya.say_and_wait('わ……！ ほんと！？');
      era.printButton('「願い、叶えるぞ！」', 1);
      await era.input();
      await maya.say_and_wait('やった──！ 行こ行こ！');
      await maya.say_and_wait([
        'えへへ！ 新年デート、デート☆ ',
        callname,
        '、どこ行く♪',
      ]);
      era.printButton('「初売りデート」（スタミナ+20）', 1);
      era.printButton('「おせちデート」（体力+400）', 2);
      era.printButton('「初詣デート」（スキルPt+40）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait('わっ、賛成！！');
          await maya.say_and_wait('じゃあ早く～♪ 一緒に福袋買お☆');
          await maya.say_and_wait([
            'えへへ～♪ 今日は ',
            callname,
            ' と夜までデート☆',
          ]);
          await era.printAndWait([
            maya.sex,
            'が街を歩き始めると、本当に夜まで続きそうだ──',
          ]);
          await maya.say_and_wait([
            'きゃ☆ ',
            call_5,
            ' に『今夜帰らない』って言おっと☆',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            ' は当然のように',
            maya.sex,
            'を止め、そのあと ',
            maya.get_colored_name(),
            ' を寮まで送った。',
          ]);
          break;
        case 2:
          await maya.say_and_wait('おせちデート……？ おせちで……デート……？');
          await maya.say_and_wait([
            'まあ、いいよ！ ',
            callname,
            ' といっしょなら、なにしても楽しそう♪',
          ]);
          await maya.say_and_wait('…………');
          await maya.say_and_wait('ここ、マヤには大人すぎない……？ 大丈夫？');
          await you.say_as_passer_by_and_wait(
            '和食屋の女将',
            'あらあら、かわいいお客さんが来ましたね。いらっしゃい、ほほほ。',
          );
          await maya.say_and_wait('う、うひゃっ！？');
          await era.printAndWait([
            'こうして ',
            you.get_colored_name(),
            ' は緊張した ',
            maya.get_colored_name(),
            ' と、おせちデートを楽しんだ。',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            'あ、',
            callname,
            '、センスいい♪ お正月って感じ☆',
          ]);
          await maya.say_and_wait('Landingするね♪');
          await maya.say_and_wait(['ねえねえ？ ', callname, ' はなに願うの？']);
          era.printButton('「秘密」', 1);
          await era.input();
          await maya.say_and_wait('え、ずるいずるい。教えてよ！');
          await era.printAndWait([
            you.get_colored_name(),
            ' は心の底から祈った。',
            maya.get_colored_name(),
            ' がこの先、',
            maya.sex,
            'の本当の夢を叶えられますように、と。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_3: (() => {
    const title = 'ターゲット、ロックオン';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} callname_3 トウカイテイオーのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} l_call_t シンボリルドルフのトウカイテイオーへの呼び方
     * @param {PrintedSpan} sats_sho 皐月賞（色付き名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き名前）
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      you,
      callname,
      call_3,
      call_16,
      callname_3,
      t_call_m,
      l_call_t,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait('春のクラシックシーズンが、ついにやってきた。');
      await era.printAndWait([
        '……三冠路線、三冠牝馬路線。',
        maya.uma_sex_title,
        'とトレーナーが一生に一度しか迎えないこの時期を、どう過ごすかはとても大事だ──',
      ]);
      await maya.say_and_wait(['……', callname, '。またその資料見てる～']);
      await maya.say_and_wait('そろそろマヤと遊ぼ？');
      await era.printAndWait([
        'ただ ',
        you.get_colored_name(),
        ' と',
        maya.sex,
        'はもう約束している。とくに出走するレースは、',
        you.get_colored_name(),
        ' が慎重に見極めないといけない。',
      ]);
      await era.printAndWait([
        maya.sex,
        'が興味を持てるレースで、ライバルのいる舞台に立たせ、いろんな機会に触れさせる必要がある──',
      ]);
      await era.printAndWait('（コンコン）');
      await maya.say_and_wait('ん？ だれだろ……');
      await teio.say_and_wait(['ハーイ！ ', t_call_m, '！']);
      await maya.say_and_wait([
        'あ！ ',
        call_3,
        '♪ どうしたどうした？ 遊びに来たの？',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' は生徒会長 ',
        luna.get_colored_actual_name(),
        ' に憧れる',
        maya.uma_sex_title,
        'で、',
        maya.get_colored_name(),
        ' のルームメイトでもある。',
      ]);
      await teio.say_and_wait('うん、まあね！ 実は会長がビデオをくれたの。');
      await luna.used_to_say_and_wait([
        l_call_t,
        '、私を慕うなら、私ばかり見ていないで、周囲にも目を向けなさい。',
      ]);
      await luna.used_to_say_and_wait([
        'たとえば──',
        brian.get_colored_name(),
        ' の走り方を',
      ]);
      await teio.say_and_wait([
        maya.sex,
        'はそう言ってた。でも一人で見るのもつまらないでしょ？',
      ]);
      era.printButton('（……ナリタブライアン）', 1);
      await era.input();
      await era.printAndWait([
        brian.get_colored_name(),
        '──',
        maya.sex,
        'は圧倒的な実力を持つ',
        maya.uma_sex_title,
        'だ。',
      ]);
      await era.printAndWait([
        maya.sex,
        'はクラシック級で……三冠路線をすべて制した「三冠',
        maya.uma_sex_title,
        '」として知られている。',
      ]);
      await era.printAndWait([
        maya.sex,
        'は ',
        maya.get_colored_name(),
        ' より一世代上で、公式レースでぶつかる可能性はまだ低い。だがこれからクラシックに挑むなら──',
      ]);
      era.printButton('「先に見ておいたほうがいいかも」', 1);
      await era.input();
      await teio.say_and_wait([
        'おっ、いいね～！ ',
        callname_3,
        ' も興味ある感じ？',
      ]);
      await maya.say_and_wait([
        'えっ！？ ',
        callname,
        '！？ 浮気しちゃダメーって言ったのに！？',
      ]);
      await teio.say_and_wait([
        'あはは、大丈夫だって！ ',
        t_call_m,
        ' も気になるなら、みんなで見よ！',
      ]);
      await era.printAndWait([
        'こうして ',
        you.get_colored_name(),
        ' は',
        maya.couple_title,
        'と一緒に、',
        brian.get_colored_name(),
        ' のレース映像を見ることになった……',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait('実況', [
        '先頭は ',
        brian.get_colored_name(),
        '！ 完全に引き離した！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '脚力、やはり強い！ 怪物だ！ 他を圧倒！！ 他の',
        maya.uma_sex_title,
        'を抑え込み、ゴール──！！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '──第4コーナーを過ぎて、またしても',
        maya.sex,
        'だ！ 外から一気に抜き去った！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        brian.get_colored_name(),
        ' に追いつける者はいるか！？ 独走、独走、ゴールイン！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        maya.sex,
        'には、もうこの道しかない！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '三冠',
        maya.uma_sex_title,
        'の名に恥じないレースだ！ ',
        brian.get_colored_name(),
        '、素晴らしい走り！',
      ]);
      await you.say_as_passer_by_and_wait('インタビュアー', [
        '実況席！ 実況席！ ただいまインタビューは ',
        brian.get_colored_name(),
        ' 選手！',
      ]);
      await you.say_as_passer_by_and_wait(
        'インタビュアー',
        '今回も見事な勝利です！ スタート前から、勝ちは決まっていた、という感じでしょうか──',
      );
      await brian.say_and_wait('お前には、そう見えるのか？');
      await you.say_as_passer_by_and_wait('インタビュアー', [
        'そ、それはもちろん！ ',
        brian.get_colored_name(),
        ' 選手ですから！',
      ]);
      await brian.say_and_wait('……ふん。');
      await brian.say_and_wait('知ったところで、何か変わるか？');
      await brian.say_and_wait('俺は、自分を満たすために走っているだけだ。');
      await brian.say_and_wait([
        '出てくるのは、勝ちたがっている',
        maya.uma_sex_title,
        'ばかりだ。',
      ]);
      await brian.say_and_wait([
        'だからこそ、',
        maya.couple_title,
        'を倒す。俺の飢えを満たすために。',
      ]);
      await brian.say_and_wait('──次のレースも、な。');
      era.drawLine();
      await you.say_as_passer_by_and_wait('2人', '……');
      await era.printAndWait([
        '──三冠',
        maya.uma_sex_title,
        'を目指す路線には、G1ごとに格言がある。',
      ]);
      await era.printAndWait([
        '「',
        sats_sho,
        '」──最も速い',
        maya.uma_sex_title,
        'が勝つ。「',
        toky_yus,
        '」──最も運のいい',
        maya.uma_sex_title,
        'が勝つ。「',
        kiku_sho,
        '」──最も強い',
        maya.uma_sex_title,
        'が勝つ。',
      ]);
      await era.printAndWait([
        'だが今見た ',
        brian.get_colored_name(),
        ' の走りは、「規格外の実力」でその格言を超えていた……',
        maya.sex,
        'は、それほど強い。',
      ]);
      await maya.say_and_wait(['………………', callname, '。']);
      era.printButton('「どうした？」', 1);
      await era.input();
      await maya.say_and_wait('なんでもない、呼びたかっただけ！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' はそう言って、またテレビへ目を戻した。',
      ]);
      await era.printAndWait([
        '──今年のクラシックで、',
        brian.get_colored_name(),
        ' にライバルが現れたら、景色は変わるだろう。',
      ]);
      era.drawLine({ content: '翌日' });
      await you.say_as_passer_by_and_wait('テレビ', [
        'なんという強い',
        maya.uma_sex_title,
        'だ！──',
        brian.get_colored_name(),
        '、まず一冠を手にした！！',
      ]);
      await maya.say_and_wait([
        '……',
        callname,
        '、まだ ',
        call_16,
        ' のレース見てるの？',
      ]);
      await maya.say_and_wait([
        call_3,
        ' には来週返すって約束したし、今急がなくてもいいんじゃない？',
      ]);
      era.printButton('「そうだな」', 1);
      await era.input();
      await maya.say_and_wait('むむむ……！！');
      await era.printAndWait([
        '──それでも ',
        you.get_colored_name(),
        ' は、目を離せなかった。',
      ]);
      await era.printAndWait([
        'もし今の ',
        maya.get_colored_name(),
        ' に、',
        maya.sex,
        'と同じくらい強い相手がいたら……',
      ]);
      await era.printAndWait('（──パチン）');
      await maya.say_and_wait([
        'イヤだ──！ イヤイヤイヤイヤ──！！ ',
        callname,
        '、マヤこっち見て！',
      ]);
      era.printButton('「え？」', 1);
      await era.input();
      await maya.say_and_wait('マヤ、いま超むー！');
      await maya.say_and_wait([
        'だって ',
        callname,
        '、今ワクワクしてるんでしょ？',
      ]);
      await maya.say_and_wait([
        'そんなのイヤ！ だってあなたはマヤの ',
        callname,
        ' なんだから！',
      ]);
      await maya.say_and_wait([
        call_16,
        ' の走りより、マヤの走りでワクワクしてほしい！',
      ]);
      era.printButton('「マヤノトップガン……」', 1);
      await era.input();
      await maya.say_and_wait([call_16, ' はほんと強い！']);
      await maya.say_and_wait([
        maya.sex,
        'と一緒に走ったらワクワクするし、キラキラする！ それはマヤもわかってる！',
      ]);
      await maya.say_and_wait('メイクデビュー前は、マヤも同じこと思ってた。');
      await maya.say_and_wait(
        '……でもマヤ、もうデビューした！ もっともっといろんなこと、わかった！',
      );
      await maya.say_and_wait([
        'いまのマヤなら！ もっと強くなって、『シュッ──！』て ',
        call_16,
        ' 追い越せる！',
      ]);
      era.printButton('（……『追い越す』。）', 1);
      await era.input();
      await era.printAndWait('……そうだ。今すぐ直接対決できなくても。');
      await era.printAndWait([
        maya.sex,
        'に追いつくことを目標にすれば、',
        maya.get_colored_name(),
        ' にはいい刺激になるかもしれない。',
      ]);
      await maya.say_and_wait(['ホントだよ！ すぐ ', call_16, ' に勝つから！']);
      await maya.say_and_wait(
        '勝ったら、マヤだけ見て、『ワクワクした！』って言ってくれる？',
      );
      await maya.say_and_wait(
        '『すごくキラキラしてる』『マヤノトップガンが一番』って言ってくれる？',
      );
      era.printButton('「もちろん！」', 1);
      await era.input();
      await maya.say_and_wait('じゃあ決まり！！');
      await maya.say_and_wait(
        'マヤ、本気だから！ 絶対守ってね！ 覚悟して！ You copy！？',
      );
      await era.printAndWait([
        '……',
        maya.sex,
        'は妙にやる気に満ちていたので──',
      ]);
      await era.printAndWait([
        'この日、',
        maya.sex,
        'の胸に「',
        brian.get_colored_name(),
        '」という目標が生まれた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（クラシック級）';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '今日から「夏合宿」──実力を伸ばす強化トレーニングが始まる。',
      );
      await maya.say_and_wait('わあっ……☆ かわいい赤いおうち～！');
      await maya.say_and_wait([
        'マヤと ',
        callname,
        '、ここで大人の夏、過ごすんだよね！',
      ]);
      era.printButton('「みんなで過ごす『夏合宿』だ」', 1);
      await era.input();
      await maya.say_and_wait('ふん──！ わかってるもん！');
      await maya.say_and_wait(
        'ふん！ マヤを子供扱いできるのも、今のうちだからね！',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        maya.get_colored_name(),
        ' の夏合宿が始まった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'コード：バーニング！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} sats_sho 皐月賞（色付き名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き名前）
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      brian,
      you,
      callname,
      call_16,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait(
        '今日から「夏合宿」──実力を伸ばす強化トレーニングが始まる。',
      );
      await era.printAndWait('そして、夏合宿の最初の一週間が来た。');
      await era.printAndWait([
        '海、山、お祭り……いろんな誘惑がある中で、',
        maya.get_colored_name(),
        ' は──',
      ]);
      await maya.say_and_wait('はぁ……はぁ……ふぅ……☆');
      await maya.say_and_wait('えへへ、マヤ、ほんとに速くなった？');
      await maya.say_and_wait([
        'これなら今年の',
        maya.uma_sex_title,
        'で一番速い！ ううん、全',
        maya.uma_sex_title,
        'で一番速いよね？',
      ]);
      era.printButton('「盛りすぎじゃないか？」', 1);
      await era.input();
      await maya.say_and_wait('いいじゃん！ 言ってみただけ！');
      await maya.say_and_wait([
        'だってマヤ、',
        callname,
        ' に『マヤノトップガンがいちばんキラキラ』って言わせなきゃ！',
      ]);
      await maya.say_and_wait('あのとき見た──');
      await maya.say_and_wait(['──', call_16, ' より、キラキラ。']);
      era.printButton(`「ブライアンか」`, 1);
      await era.input();
      await maya.say_and_wait([
        'あっ、イヤイヤ！ ',
        callname,
        '、その名前禁止！',
      ]);
      await maya.say_and_wait('……もう、全然気を抜けない！');
      await maya.say_and_wait([
        'あーあ、マヤまだクラシック級だよ。シニアになったらすぐ ',
        call_16,
        ' と──',
      ]);
      await maya.say_and_wait('あっ！！');
      await maya.say_and_wait([
        callname,
        '。三冠路線、あとどのレース残ってる？',
      ]);
      await era.printAndWait([
        '──三冠路線。',
        brian.get_colored_name(),
        ' が「三冠',
        maya.uma_sex_title,
        '」になったときの道だ。',
      ]);
      await era.printAndWait([
        '春の ',
        sats_sho,
        ' と ',
        toky_yus,
        ' はもう終わっている。三冠路線、最後のレースは……',
      ]);
      era.printButton('「『菊花賞』が残っている」', 1);
      await era.input();
      await maya.say_and_wait('オッケー☆ じゃあ次の目標、それだね！');
      await maya.say_and_wait([
        call_16,
        ' のときより、もっとワクワクする走り、して見せる！',
      ]);
      era.printButton('「闘志がすごいな」', 1);
      await era.input();
      await maya.say_and_wait('えへへ☆ そう？');
      await maya.say_and_wait(
        'でもマヤが燃えてるの、嫌いじゃないでしょ～？ ねえ♪',
      );
      await era.printAndWait([
        'こうして、新しい目標は「',
        kiku_sho,
        '」に決まった──！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = 'お祭り';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     * @param {PrintedSpan} call_60 マヤノトップガンのナイスネイチャへの呼び方
     * @param {PrintedSpan} s_call_m マーベラスサンデーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} s_call_n マーベラスサンデーのナイスネイチャへの呼び方
     * @param {PrintedSpan} n_call_s ナイスネイチャのマーベラスサンデーへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      sunday,
      nature,
      you,
      callname,
      call_55,
      call_60,
      s_call_m,
      s_call_n,
      n_call_s,
      kiku_sho,
    ) => {
      await era.printAndWait('夏合宿でのこと──');
      await maya.say_and_wait(['あ、', callname, '！ 今夜、ヒマ？']);
      await maya.say_and_wait('実はね……');
      await sunday.say_and_wait(['あ、', s_call_m, '☆']);
      await maya.say_and_wait(['わっ、', call_55, '！ ハローハロー☆']);
      await sunday.say_and_wait([
        'ハローハロー＆Marvelous☆ あはは、',
        s_call_m,
        '★',
      ]);
      await era.printAndWait([
        maya.sex,
        'は ',
        sunday.get_colored_name(),
        '。',
      ]);
      await sunday.say_and_wait([
        '今夜、お祭り行こ☆ ',
        s_call_n,
        ' も誘ったから、',
        nature.sex,
        'も来るよ★',
      ]);
      await nature.say_and_wait([
        'ちょっと待って。そっちの暴走',
        maya.child_sex_title,
        '、ストップ。あたしはまだ『誘われた』だけだよね？',
      ]);
      await sunday.say_and_wait([
        'そんな細かいこと気にしない～☆ で、',
        s_call_m,
        '、何時に集合？',
      ]);
      await maya.say_and_wait('あ、そうだ！ それなんだけど……');
      await maya.say_and_wait([
        'マヤ、今回はパス！ 今夜は ',
        callname,
        ' と秘密特訓したいの！',
      ]);
      await sunday.say_and_wait('ええ────！？');
      await nature.say_and_wait('へえ……？');
      era.printButton('「そんな約束、したか？」', 1);
      await era.input();
      await maya.say_and_wait('うん、今言おうとしてたとこ！');
      await maya.say_and_wait([
        'そういうわけで、',
        call_55,
        ' と ',
        call_60,
        ' はお祭り楽しんでて！',
      ]);
      await maya.say_and_wait(['じゃあ、', callname, '。行こ♪']);
      await nature.say_and_wait([
        'へえ……？ キラキラ',
        maya.child_sex_title,
        '、ほんと ',
        callname,
        ' にメロメロだね～',
      ]);
      await sunday.say_and_wait('…………');
      await nature.say_and_wait(['ねえ、おーい？ ', n_call_s, '、聞いてる？']);
      await sunday.say_and_wait([n_call_s, '────！']);
      await nature.say_and_wait('ひゃっ！？');
      await sunday.say_and_wait([
        s_call_m,
        '、美しすぎる☆ 私の知らない美しさを教えてくれた★',
      ]);
      await nature.say_and_wait('な、なに……？');
      await sunday.say_and_wait([
        s_call_n,
        '！ あたしたちも追いつかなきゃ！ ',
        s_call_m,
        ' に負けない特訓！',
      ]);
      await sunday.say_and_wait(
        '鉄は熱いうちに打つのがMarvelous☆ さあ、行くよ！！',
      );
      await nature.say_and_wait(
        'な、なに～～！？ 待って、引っ張らないで──！！',
      );
      era.drawLine();
      await maya.say_and_wait('はぁ……ふぅ……');
      await maya.say_and_wait([
        'よし、3セット終わった！ ',
        callname,
        '、次なにトレする？',
      ]);
      await era.printAndWait('（シュッ……）');
      await maya.say_and_wait('ん？ 今の──');
      await era.printAndWait('（ドン……パチパチ……）');
      await maya.say_and_wait(['わっ！ 花火！ ', callname, '、花火だよ！！']);
      await maya.say_and_wait('あはは、大きい。こっちからも見えるんだ。');
      await maya.say_and_wait('えへへ。会場で見たら、どんなかな？');
      era.printButton('「やっぱりお祭り、行きたかったか？」', 1);
      await era.input();
      await maya.say_and_wait('……ん～、大丈夫！');
      await maya.say_and_wait('お祭りは、あとで行けばいいもん。');
      await maya.say_and_wait([
        '『',
        kiku_sho,
        '』で勝って、',
        callname,
        ' のハートがっちり掴んでから！',
      ]);
      era.printButton('「もう掴んでるよ」（パワー+20）', 1);
      era.printButton('「それなら、しっかり頑張れ」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('えっ、ほんと？ でも……');
        await maya.say_and_wait('まだ足りない！ マヤはそう思う！');
        await maya.say_and_wait([
          'マヤ、',
          callname,
          ' をメロメロにして、マヤなしじゃダメにするから！',
        ]);
        await maya.say_and_wait(['えへへ、', callname, '、覚悟しててね♪']);
        await era.printAndWait([
          '──そう言って、',
          maya.get_colored_name(),
          ' はまた砂浜を走り出した。',
        ]);
      } else {
        await maya.say_and_wait('ふふん。マヤには余裕♪');
        await maya.say_and_wait('だってまだ成長期！ すぐできちゃう！');
        await maya.say_and_wait([
          '『',
          kiku_sho,
          '』も他のレースも勝って、',
          callname,
          ' をメロメロにする！',
        ]);
        await maya.say_and_wait([
          '次の夏、',
          callname,
          ' とまた迎えたら、海で大人のご褒美、もらわなきゃ……',
        ]);
        await era.printAndWait('（シュッ……ドン────！！）');
        await maya.say_and_wait('え、ええ～！？ なんで今打つの～！？');
        await maya.say_and_wait('花火のばかばかばか──！ 空気読んでよ！');
        await era.printAndWait('（ドン────！！）');
        await maya.say_and_wait('む～、今いい雰囲気だったのに～！ もう～！！');
        await era.printAndWait([
          maya.get_colored_name(),
          ' はぴょんぴょん跳ねて、花火に怒っていた……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（クラシック級）終了';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait('夏合宿は、あっという間に終わった。');
      await era.printAndWait([
        maya.get_colored_name(),
        ' も、かなり頑張っていた──',
      ]);
      await you.say_as_passer_by_and_wait(
        'バスの運転手',
        'はい、トレセン学園に到着です。',
      );
      await maya.say_and_wait('ふー……ふー……');
      era.printButton('「マヤ、着いたよ」', 1);
      await era.input();
      await maya.say_and_wait(['え……？ ', callname, '……ふー。']);
      await maya.say_and_wait('ふあぁ……大丈夫。わかってる……');
      await maya.say_and_wait('ふー……ふー……');
      await era.printAndWait([
        '……この夏、',
        maya.sex,
        'はよく頑張った。',
        you.get_colored_name(),
        ' は、もう少し寝かせてあげることにした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '菊花賞に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (maya, you, callname, kiku_sho) => {
      await maya.say_and_wait([
        'おはよう、',
        callname,
        '！ 完璧なフライト、見る準備できた？',
      ]);
      await maya.say_and_wait([
        'だって今日は『',
        kiku_sho,
        '』！ トレーニングじゃなくて、本番のレースだよ☆',
      ]);
      era.printButton('「これまでの成果、見せてくれ！」', 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await maya.say_and_wait('芝に残るのは、煙より早く消えるマヤの軌跡だけ☆');
      await maya.say_and_wait([
        callname,
        ' の目もハートも！ マヤがもらっちゃう♪',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '着陸予定、イマダナシ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} etsuko 乙名史記者／乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      etsuko,
      you,
      callname,
      call_16,
      kiku_sho,
      arim_kin,
    ) => {
      await maya.say_and_wait(
        'レーダー反応あり！ ターゲット、ロックオン！ あと3、2、1……！',
      );
      await maya.say_and_wait([callname, '、今の見た～？ マヤの走り～☆']);
      era.printButton('「よく走ったな」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへへ～☆ でしょでしょ！ マヤ、注目の的だもん♪',
      );
      await etsuko.say_and_wait([
        '……',
        maya.get_colored_name(),
        ' 選手！ ',
        maya.get_colored_name(),
        ' 選手！',
      ]);
      await etsuko.say_and_wait(
        '『トゥインクル月刊』の乙名史です。レース後の感想、お聞かせいただけますか？',
      );
      await maya.say_and_wait('わっ！ 取材～！？ いいよ～☆ なんでも答える！');
      await etsuko.say_and_wait('ありがとうございます。では早速──');
      await etsuko.say_and_wait([
        'さまざまな挑戦を経て迎えた今回の『',
        kiku_sho,
        '』。今日の走りは、長距離こそが適性だと主張しているようにも見えましたが……',
      ]);
      await maya.say_and_wait('ん？');
      await etsuko.say_and_wait('あ、すみません。言い方を考えますね。');
      await etsuko.say_and_wait([
        maya.get_colored_name(),
        ' 選手がクラシック級で挑む本当の目標は、やはり『',
        kiku_sho,
        '』──',
      ]);
      await maya.say_and_wait(
        'ん？ 言い方変えなくていいよ？ マヤ、わかってる。',
      );
      await maya.say_and_wait('ただ、『なんで？』って思っただけ。');
      await maya.say_and_wait([
        'マヤは『',
        kiku_sho,
        '』に出たかったから出たの。それに、これ ',
        call_16,
        ' も出たレースだから。',
      ]);
      await etsuko.say_and_wait([
        '……',
        call_16,
        '？ あの ',
        maya.get_colored_name(),
        ' 選手、ですか？',
      ]);
      await maya.say_and_wait([
        'うん、そう！ 記者の',
        etsuko.adult_sex_title,
        '、聞くね！ マヤの走り、',
        call_16,
        ' よりワクワクした？ した？',
      ]);
      await etsuko.say_and_wait('おお……これは予想外です。');
      await etsuko.say_and_wait([
        brian.get_colored_name(),
        ' 選手に挑むおつもりなんですね！ これは……！',
      ]);
      await etsuko.say_and_wait([
        'では単刀直入に伺います。',
        maya.get_colored_name(),
        ' 選手も、今年の『',
        arim_kin,
        '』に出走されますか？',
      ]);
      await maya.say_and_wait(['『', arim_kin, '』？ マヤが？']);
      await etsuko.say_and_wait([
        'ええ。『三冠',
        maya.uma_sex_title,
        '』の ',
        brian.get_colored_name(),
        ' も、今年の有馬に出ますから。',
      ]);
      await etsuko.say_and_wait('それなら、正面からぶつかるべきでは？');
      await era.printAndWait([
        '「',
        arim_kin,
        '」……毎年の暮れに行われるレース。',
        maya.uma_sex_title,
        'のファン支持と、そのときの実力を正直に映す舞台だ。',
      ]);
      await era.printAndWait([
        '「三冠',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        'だけでなく、「女傑」',
        amazon.get_colored_name(),
        ' など、名の通った',
        maya.uma_sex_title,
        'もすでに出走を表明しているはずだ。',
      ]);
      await maya.say_and_wait('うんうん、マヤ出る！');
      era.printButton('（答えが軽すぎるだろ！）', 1);
      await era.input();
      await etsuko.say_and_wait([
        'ふふ。巨星と新星、どちらがより輝くのか。今年の ',
        arim_kin,
        ' が楽しみです。',
      ]);
      era.drawLine();
      await maya.say_and_wait([
        'ははっ♪ 次のレースは『',
        arim_kin,
        '』だね！ ',
        callname,
        '、頑張ろ☆',
      ]);
      era.printButton('「本当に『有馬記念』に出るのか？」', 1);
      await era.input();
      await maya.say_and_wait([
        'うん。あそこでなら、',
        call_16,
        ' と直接走れるでしょ？',
      ]);
      await maya.say_and_wait(
        'えへへ、このチャンス、ずっと待ってた！ やっと証明できる！',
      );
      await maya.say_and_wait([
        call_16,
        ' より、マヤのほうがワクワクさせるって♪',
      ]);
      await era.printAndWait([
        'こうして、春に',
        maya.sex,
        'が口にした目標が、ようやく手の届くところまで来た……！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '有馬記念に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} b_call_a ナリタブライアンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, amazon, brian, callname, b_call_a, arim_kin) => {
      await maya.say_and_wait(['来た、やっと来た、『', arim_kin, '』～！！']);
      await maya.say_and_wait([
        'ふんふん、',
        callname,
        '。ちゃんと見ててね。マヤ、このレースで──',
      ]);
      await maya.say_and_wait('ん！ あの二人、もしかして……');
      await amazon.say_and_wait(
        'はっ！ 今年もお前とやれるとはな……首、洗って待ってたか？',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        'ふっ……何が言いたいのか、さっぱりわからんな、',
        b_call_a,
        '。',
      ]);
      await amazon.say_and_wait(
        'あぁ！？ 今のは、去年のお前の『覚悟しとけ』への返しだ──',
      );
      await brian.say_and_wait('……意図の説明を求めているんじゃない。');
      await brian.say_and_wait('わかっているだろう。俺を挑発したいなら──');
      await brian.say_and_wait(
        '口じゃない。レースで見せろ。本物の力で、俺を倒せ。',
      );
      await amazon.say_and_wait('……へえ。');
      await amazon.say_and_wait([
        'ならこの『',
        arim_kin,
        '』で、一対一で決めるぞ。',
      ]);
      await brian.say_and_wait('ふん……目つきは悪くない。');
      await era.printAndWait([
        '──',
        maya.get_colored_name(),
        ' の視線の先に立っているのは、「三冠',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        ' と、「女傑」',
        amazon.get_colored_name(),
        ' の二人だ。',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「マヤノトップガン？」', 1);
      await era.input();
      await maya.say_and_wait('あっ！');
      await maya.say_and_wait([
        'ごめんごめん、',
        callname,
        '！ ちょっとボーッとしちゃった！',
      ]);
      era.printButton('「こうして見ると、迫力があるな」', 1);
      await era.input();
      await maya.say_and_wait(
        'あっ、イヤイヤ！ そう言わないで！ マヤは負けない！',
      );
      await maya.say_and_wait(
        'だからレース中、絶対マヤだけ見ててね！ わかった？',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '燃料満タン';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('実況', [
        '──素晴らしい！ 本当に素晴らしい！ 今年の『',
        arim_kin,
        '』の王者に、拍手を！！',
      ]);
      await era.printAndWait('（わああああ────────！！）');
      await you.say_as_passer_by_and_wait('観客A', [
        'それにしても、',
        maya.get_colored_name(),
        ' はすごいな。',
        brian.get_colored_name(),
        ' に勝つなんて……',
      ]);
      await you.say_as_passer_by_and_wait('観客B', 'ああ……本当だ。でも……');
      await you.say_as_passer_by_and_wait('観客B', [
        brian.get_colored_name(),
        ' がここで終わるはずがない。お前もそう思うだろ？',
      ]);
      await you.say_as_passer_by_and_wait('観客A', [
        'うん、俺もそう思う……次は ',
        brian.get_colored_name(),
        ' が勝つと信じてる。',
      ]);
      await maya.say_and_wait('はぁ……ふぅ……！ ふぅ……はぁ……！');
      await amazon.say_and_wait([
        'お、おい、',
        a_call_m,
        '、大丈夫か？ 顔色が悪いぞ……',
      ]);
      era.printButton('「……マヤノトップガン！」', 1);
      await era.input();
      await amazon.say_and_wait([
        'よかった、',
        maya.sex,
        'の体力は尽きかけてる。早く休ませたほうがいい……',
      ]);
      await maya.say_and_wait('……大丈夫。それより……！');
      await maya.say_and_wait('マヤ、すごく楽しかった！！');
      await amazon.say_and_wait('──はァ！？');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        'スタッフ',
        'えー、では次の質問です。質問のある方は手を挙げて──',
      );
      await maya.say_and_wait('……はい！ マヤ、質問あります！！');
      await you.say_as_passer_by_and_wait('スタッフ', [
        'はい、ではそちら……',
        maya.get_colored_name(),
        ' 選手！？',
      ]);
      await era.printAndWait('（ざわざわ……）');
      await maya.say_and_wait([
        'ねえ、',
        call_16,
        '！ 次はどのレースに出るの！？',
      ]);
      await maya.say_and_wait(['マヤ、また ', call_16, ' と走りたい！']);
      await maya.say_and_wait(
        'ゴールするまで結果も、マヤが何すればいいかもわからなくて、すっごくドキドキして……',
      );
      await maya.say_and_wait('それに、ワクワクが止まらない！');
      await you.say_as_passer_by_and_wait('スタッフ', [
        'そ、その……',
        maya.get_colored_name(),
        ' 選手。申し訳ありません、いまは記者の質問時間で……',
      ]);
      await maya.say_and_wait('イヤ！ あとちょっと、待ってて！');
      await maya.say_and_wait('ねえねえ、もう一回やろ！ マヤ、また勝つから！');
      await maya.say_and_wait([
        'お願い、お願い！ ',
        call_16,
        ' もまだ足りないでしょ！？',
      ]);
      await brian.say_and_wait('……ふん。');
      await you.say_as_passer_by_and_wait('記者A', [
        'お、お前！ いい加減にしろ！ ',
        brian.get_colored_name(),
        ' 選手も──',
      ]);
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('質問には答えた。司会、次だ。');
      await you.say_as_passer_by_and_wait(
        'スタッフ',
        'え、あ……はい！ では次の方──',
      );
      await amazon.say_and_wait([
        'おお～、',
        a_call_m,
        '、面白いことしやがる。',
      ]);
      await amazon.say_and_wait([
        '自分から火の中に飛び込むとはな。',
        maya.sex,
        'が初々しいからか、それとも──',
      ]);
      era.printButton('「' + maya.sex + 'に度胸があるからだ」', 1);
      await era.input();
      await amazon.say_and_wait([
        'ははっ。お前、',
        maya.sex,
        'を高く見てるな。',
      ]);
      await amazon.say_and_wait('いいだろう。お前たち二人、覚えておく。');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '聞いて聞いて、マヤね！ 次は『',
        hans_dai,
        '』に出たい！',
      ]);
      era.printButton('「知ってた」', 1);
      await era.input();
      await maya.say_and_wait(
        'えっ、なんでわかるの？ テレパシー！？ 運命の赤い糸！？',
      );
      era.printButton('「ワクワクしてるから」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        'えへへ。そんなことまでわかるなんて、さすが ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        'よし、『',
        hans_dai,
        '』で ',
        call_16,
        ' に完全勝利するね☆',
      ]);
      await maya.say_and_wait(
        '乱気流に突っ込むなら、真正面から突破！ それがマヤの飛び方！',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '燃料補給';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('実況', [
        '──素晴らしい！ 本当に素晴らしい！ 今年の『',
        arim_kin,
        '』の王者に、拍手を！！',
      ]);
      await era.printAndWait('（わああああ────────！！）');
      await you.say_as_passer_by_and_wait('観客A', [
        '正直、',
        maya.get_colored_name(),
        ' がここまで強いとは思わなかった。一瞬、',
        maya.sex,
        'が',
        brian.get_colored_name(),
        'に勝つかと思ったよ。',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客B',
        'ふふ、そう思う時点でまだ目が甘い。これが『実力差』ってやつだ。',
      );
      await you.say_as_passer_by_and_wait('観客B', [
        'でも、',
        maya.sex,
        'は本当に力がある。一年後の ',
        arim_kin,
        ' なら……チャンスはあるかもな。',
      ]);
      await maya.say_and_wait('はぁ……ふぅ……！ ふぅ……はぁ……！');
      await amazon.say_and_wait([
        'お、おい、',
        a_call_m,
        '、大丈夫か？ 顔色が悪いぞ……',
      ]);
      era.printButton('「……マヤノトップガン！」', 1);
      await era.input();
      await amazon.say_and_wait([
        'よかった、',
        maya.sex,
        'の体力は尽きかけてる。早く休ませたほうがいい……',
      ]);
      await maya.say_and_wait('……大丈夫。それより……！');
      await maya.say_and_wait('マヤ、すごく楽しかった！！');
      await amazon.say_and_wait('──あぁ！？');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        'スタッフ',
        'えー、では次の質問です。質問のある方は手を挙げて──',
      );
      await maya.say_and_wait('……はい！ マヤ、質問あります！！');
      await you.say_as_passer_by_and_wait('スタッフ', [
        'はい、ではそちら……',
        maya.get_colored_name(),
        ' 選手！？',
      ]);
      await era.printAndWait('（ざわざわ……）');
      await maya.say_and_wait([
        'ねえ、',
        call_16,
        '！ 次はどのレースに出るの！？',
      ]);
      await maya.say_and_wait(['マヤ、また ', call_16, ' と走りたい！']);
      await maya.say_and_wait(
        'ゴールするまで結果も、マヤが何すればいいかもわからなくて、すっごくドキドキして……',
      );
      await maya.say_and_wait('それに、ワクワクが止まらない！');
      await brian.say_and_wait('──ふん。司会、次の質問へ……');
      await maya.say_and_wait('あっ、待って！ ずるい！ 逃げないで！！');
      await brian.say_and_wait('……ほう？');
      await brian.say_and_wait('今、なんと言った。俺がお前から逃げる、と？');
      await maya.say_and_wait('うん、そう！ マヤの挑戦から逃げようとしてる！');
      await maya.say_and_wait('あんなに強くて、あんなにキラキラしてるのに！');
      await maya.say_and_wait(
        '次また当たったら負けるかもって、怖がってるんでしょ？',
      );
      await you.say_as_passer_by_and_wait('記者A', [
        'そ、その……',
        maya.get_colored_name(),
        ' 選手？ 今回は',
        maya.sex,
        'に負けたばかり──',
      ]);
      await maya.say_and_wait('でも次は勝つ！');
      await maya.say_and_wait(
        'マヤ、やっとキラキラできる気がしたんだから、ここで満足なんてしない！！',
      );
      await brian.say_and_wait('……');
      await you.say_as_passer_by_and_wait(
        '記者B',
        'あ、あの……次はさすがに厳しいでしょう。実力差は明らかで──',
      );
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('質問には答えた。司会、次だ。');
      await you.say_as_passer_by_and_wait(
        'スタッフ',
        'え、あ……はい！ では次の方──',
      );
      await amazon.say_and_wait([
        'おお～、',
        a_call_m,
        '、面白いことしやがる。',
      ]);
      await amazon.say_and_wait([
        'こんな無謀な挑戦をぶつけてくるとはな。',
        maya.sex,
        'が初々しいからか、それとも──',
      ]);
      era.printButton('「' + maya.sex + 'に度胸があるからだ」', 1);
      await era.input();
      await amazon.say_and_wait([
        'ははっ。お前、',
        maya.sex,
        'を高く見てるな。',
      ]);
      await amazon.say_and_wait('いいだろう。お前たち二人、覚えておく。');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '聞いて聞いて、マヤね！ 次は『',
        hans_dai,
        '』に出たい！',
      ]);
      era.printButton('「知ってた」', 1);
      await era.input();
      await maya.say_and_wait(
        'えっ、なんでわかるの？ テレパシー！？ 運命の赤い糸！？',
      );
      era.printButton('「ワクワクしてるから」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        'えへへ。そんなことまでわかるなんて、さすが ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        'よし、『',
        hans_dai,
        '』で ',
        call_16,
        ' に完全勝利するね☆',
      ]);
      await maya.say_and_wait(
        '乱気流に突っ込むなら、真正面から突破！ それがマヤの飛び方！',
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     */
    const f = async (maya, you, callname, call_16) => {
      await era.printAndWait([
        '運命の三年目。',
        maya.get_colored_name(),
        ' は今年、シニア級に挑む。',
      ]);
      era.printButton('「シニア級」', 1);
      await era.input();
      await era.printAndWait('──今年は、間違いなく勝負の年になる。');
      await maya.say_and_wait([
        'えへへ♪ ',
        callname,
        '、そんな真剣な顔しないで～♪',
      ]);
      await maya.say_and_wait('せっかく神社デートなんだよ？ 笑顔、笑顔☆');
      era.printButton('「ずいぶん気楽だな」', 1);
      await era.input();
      await maya.say_and_wait('あはは、だって楽しいんだもん！');
      await maya.say_and_wait('ふんふん。マヤね、今年の目標、もう決めた♪');
      await maya.say_and_wait([
        '絶対追い越す。',
        maya.sex,
        'を……全力の ',
        call_16,
        ' を！',
      ]);
      await maya.say_and_wait('いっぱい考えたけど、マヤにとっては──');
      await maya.say_and_wait('──今いちばんやりたいこと！');
      era.printButton('「君ならできる」', 1);
      await era.input();
      await maya.say_and_wait('えへへ……マヤもそう思う♪');
      await era.printAndWait([
        '──',
        you.get_colored_name(),
        ' は',
        maya.sex,
        'の笑顔を見て、また同じことを思った。',
      ]);
      era.println();
      era.printButton('（元気でいてほしい）（体力+300）', 1);
      era.printButton(
        '（たくさん学んで、ぐんぐん伸びてほしい）（全能力+10）',
        2,
      );
      era.printButton('（立派な大人になってほしい）（スキルPt+70）', 3);
      const ret = await era.input();
      await maya.say_and_wait(['ん？ ', callname, '、なんか言った？']);
      era.printButton('「今、祈った」', 1);
      await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait(
            'えっ！？ ずるいずるい！ ひとりで先に祈るなんて！',
          );
          await maya.say_and_wait([
            'もう、やり直し！ ',
            callname,
            ' はマヤと一緒に祈らなきゃ！',
          ]);
          await maya.say_and_wait('祈ったら、続きのデートしよ♪ わかった☆');
          await era.printAndWait(['初詣の帰り、屋台デートをしてから戻った。']);
          break;
        case 2:
          await maya.say_and_wait('ははっ、またその顔。');
          era.printButton('「……どんな顔だ？」', 1);
          await era.input();
          await maya.say_and_wait('えへへ、つまり……');
          await maya.say_and_wait(
            '『マヤノトップガンのために何ができるか』って顔。あと『マヤノトップガンを大事にする』って顔！',
          );
          await maya.say_and_wait('その顔見ると、マヤ、元気百倍♪');
          await maya.say_and_wait('ふふん、よし！ 今年初のトレーニングしよ☆');
          await era.printAndWait([
            'こうしてこの日、',
            you.get_colored_name(),
            ' は ',
            maya.get_colored_name(),
            ' と、新年最初のトレーニングをした。',
          ]);
          break;
        case 3:
          await maya.say_and_wait(['ふふふ……', callname, '、甘い甘い！']);
          await maya.say_and_wait([
            'マヤは立派なオトナの',
            maya.phy_sex_title,
            'になるんだから～☆',
          ]);
          era.printButton('「どこが違うんだ？」', 1);
          await era.input();
          await maya.say_and_wait([
            '全然違うよ～！ もー！！ 『大人』と『オトナの',
            maya.phy_sex_title,
            '』の違いは……',
          ]);
          await maya.say_and_wait('……どこだっけ。');
          era.printButton('「やっぱりわからないのか……」', 1);
          await era.input();
          await maya.say_and_wait(
            'あわわ！？ ちがう、ちがうよ！！ この二つ、ほんとに違うんだから～！！',
          );
          await era.printAndWait([
            '数日後、',
            you.get_colored_name(),
            ' は図書館で、辞書をじっと見つめる ',
            maya.get_colored_name(),
            ' を見かけた。',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = '福引で運試し！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {number} dice 福引の結果
     */
    const f = async (maya, you, callname, call_3, call_16, dice) => {
      await era.printAndWait(['ある日の夕方、商店街を通ったとき──']);
      await maya.say_and_wait([
        'ねえねえ、',
        callname,
        '。あっち、なにかやってる！',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'さあさあ、新春大福引やってますよ～！ 特等は『温泉旅行券』！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        '一等は『上質にんじんハンバーグ』、二等は『にんじん一籠』、三等は『にんじん一本』！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'そこのお二人！ デート帰りに、二人の愛を試してみませんか？',
      );
      await maya.say_and_wait('きゃ☆ やるやる♪');
      era.printButton('「即決だな」', 1);
      await era.input();
      await maya.say_and_wait('だって楽しそうだもん！ そ・れ・に……');
      await maya.say_and_wait(
        'マヤたちこんなに仲いいんだから、特等当たるよ！ ね、ね♪',
      );
      await era.printAndWait('……運と愛に、そんな関係があるとは思えない。');
      await era.printAndWait([
        maya.get_colored_name(),
        ' の勢いに負けて、商店街で買い物をし、福引に挑戦することにした。',
      ]);
      await maya.say_and_wait([
        callname,
        '！ 福引券、一枚ゲット！ チャンスは一回だけ！',
      ]);
      await maya.say_and_wait('む～、お願いお願い、特等当たって……！');
      await era.printAndWait([
        '二人で祈りながら、ハンドルを握って福引機を回した。',
      ]);
      await era.printAndWait('結果は──');
      switch (dice) {
        case 0:
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            'なんと！ おめでとう────！！ 特等『温泉旅行券』です～～～～！！',
          );
          await era.printAndWait('【温泉旅行券】を手に入れた。');
          await maya.say_and_wait(
            'やったぁ～～！！ ミッションコンプリート～！',
          );
          era.printButton('「よかったな！」', 1);
          await era.input();
          await maya.say_and_wait('うん！ じゃあ今すぐ温泉へテイクオフ☆');
          era.printButton('「まだ何も準備してないぞ！？」', 1);
          await era.input();
          await maya.say_and_wait('え～？ 準備～？');
          await era.printAndWait('今すぐ行くなら、荷物だけじゃすまない。');
          await era.printAndWait(
            'この先のレースとトレーニングの調整がついてから──',
          );
          era.printButton('「これも君のためだ」', 1);
          await era.input();
          await maya.say_and_wait('マヤのため？');
          era.printButton('「君の目標を叶えたいから」', 1);
          await era.input();
          await maya.say_and_wait('あ──');
          await maya.say_and_wait('ふんふん。マヤね、今年の目標、もう決めた♪');
          await maya.say_and_wait([
            '絶対追い越す。',
            maya.sex,
            'を……全力の ',
            call_16,
            ' を！',
          ]);
          await maya.say_and_wait(['……ありがとう。', callname, '。']);
          await maya.say_and_wait(
            'よし、決めた！ じゃあマヤの目標、叶えてから行こ！',
          );
          await maya.say_and_wait('そしたら、一緒に来てくれる？');
          era.printButton('「もちろん！」', 1);
          await era.input();
          await maya.say_and_wait('えへへ、やった！ じゃあそれで決まり！');
          await maya.say_and_wait(
            'そのときは思いっきりリラックス、思いっきり楽しもうね！',
          );
          await era.printAndWait([
            '二人は、温泉旅行券を使う日を楽しみに待つことにした。',
          ]);
          break;
        case 1:
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            '一等、おめでとう～！ 賞品は『上質にんじんハンバーグ』！',
          );
          await era.printAndWait('【上質にんじんハンバーグ】を手に入れた。');
          await maya.say_and_wait('わっ！ 一等！ すごーい！！');
          await maya.say_and_wait('あっ、温泉旅行券じゃない～！！');
          era.printButton('「でも一等だぞ！」', 1);
          await era.input();
          await maya.say_and_wait([
            'でもでも～、マヤ、',
            callname,
            ' と熱々旅行したかったのに……',
          ]);
          await maya.say_and_wait([
            'むむむ……ハンバーグじゃ、',
            callname,
            ' のハート掴めないよ。',
          ]);
          era.printButton('「……そうか？」', 1);
          await era.input();
          await maya.say_and_wait('え？ ちがうの？');
          era.printButton('「実は、お腹がペコペコなんだ！」', 1);
          await era.input();
          await maya.say_and_wait(
            'ほんと！？ じゃあじゃあ、マヤのハンバーグ、あげる！',
          );
          await maya.say_and_wait(
            '……えへへ、どう？ マヤ、もっと好きになった？',
          );
          era.printButton('「なったかも！」', 1);
          await era.input();
          await maya.say_and_wait('やった！');
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            'ははっ、仲がいいねえ！ よし、もう一つおまけだ！ 二人で食べな！',
          );
          await maya.say_and_wait('わっ！！ おじさん、ありがとう！');
          await maya.say_and_wait(
            'えへへ、仲いいって言われた～！ もっとラブラブになった気がする♪',
          );
          await era.printAndWait([
            'その夜、',
            you.get_colored_name(),
            ' は ',
            maya.get_colored_name(),
            ' と、上質にんじんハンバーグを一緒に食べた。',
          ]);
          break;
        case 2:
        case 3:
        case 4:
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            '二等です～！！ 賞品は『にんじん一籠』！',
          );
          await era.printAndWait('【にんじん一籠】を手に入れた。');
          await maya.say_and_wait('わっ！？ にんじん、いっぱい～！？');
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            'うん！ あの籠のにんじん、全部持っていきな！',
          );
          await era.printAndWait(
            '──商店街の人が指した先に、にんじんがたっぷり入った大きな籠が置いてある。',
          );
          await maya.say_and_wait('……マヤ、食べきれるかな。');
          era.printButton('「俺も手伝う」', 1);
          await era.input();
          await maya.say_and_wait([
            'えっ！ ほんと！？ じゃあ ',
            callname,
            ' と一緒に──',
          ]);
          await maya.say_and_wait('……あっ！？ いいこと思いついた！');
          await maya.say_and_wait([
            'ねえ、',
            callname,
            '。このにんじん、あなたの部屋に置いていい？',
          ]);
          await maya.say_and_wait([
            'マヤ、',
            call_3,
            ' と相部屋で、狭くて入らないかも！ だから、いい！？',
          ]);
          era.printButton('「まあ、いいけど……」', 1);
          await era.input();
          await maya.say_and_wait('やった！');
          await maya.say_and_wait(
            'じゃあ明日からマヤ、あなたの部屋行って、にんじん料理たくさん作るね♪',
          );
          era.printButton('「えっ！？」', 1);
          await era.input();
          await maya.say_and_wait('えへへ、手作り料理でハート、ゲットだよ～♪');
          await era.printAndWait([
            '──この日以来、',
            maya.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' の部屋に突撃する回数が増えた……',
          ]);
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            '三等です～！ 賞品は『にんじん一本』！',
          );
          await era.printAndWait('【にんじん一本】を手に入れた。');
          await maya.say_and_wait('え～！？ うそでしょ！');
          await maya.say_and_wait(
            'おじさん、特等を他の賞と見間違えたんでしょ？ ね～？',
          );
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            'うーん……三等で間違いないよ。',
          );
          await maya.say_and_wait(['むっ！ ', callname, ' と温泉旅行の計画……']);
          await maya.say_and_wait('しかもにんじん一本だけ……');
          era.printButton('「君の髪と同じ、元気な色だな」', 1);
          await era.input();
          await maya.say_and_wait('……！');
          await maya.say_and_wait([
            'ははっ、',
            callname,
            '、ほんとマヤのことばっか考えてる～！',
          ]);
          await maya.say_and_wait(
            'にんじんの色がマヤの髪だなんて。そんなの、すぐ思いつかないよ！',
          );
          await maya.say_and_wait('……えへへへ♪');
          await era.printAndWait([
            maya.get_colored_name(),
            ' の顔に、ぱあっと笑顔が広がった。',
          ]);
          break;
        case 9:
          await you.say_as_passer_by_and_wait(
            '商店街の人',
            '残念、ハズレ！ 参加賞は『ティッシュ』だよ～',
          );
          await era.printAndWait('【ティッシュ】を手に入れた。');
          await maya.say_and_wait('え────！？');
          await maya.say_and_wait('絶対当たると思ったのに！ だってだって～！');
          await maya.say_and_wait([
            'マヤと ',
            callname,
            '、こんなにラブラブなのに？ ね？',
          ]);
          await era.printAndWait([
            'もう一度言うが、運と愛に関係があるとは思えない。',
            you.get_colored_name(),
            ' はすねる ',
            maya.get_colored_name(),
            ' をなだめながら、学園へ戻った……',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '青春のキラキラ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} n_call_a ナイスネイチャのヒシアマゾンへの呼び方
     * @param {boolean} join_arim_kin_c マヤノトップガンがクラシック級の有馬記念に出たか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      nature,
      you,
      callname,
      call_12,
      t_call_m,
      callname_12,
      a_call_m,
      n_call_a,
      join_arim_kin_c,
      arim_kin,
    ) => {
      await era.printAndWait([
        'シニア級の春が来た。最近の ',
        maya.get_colored_name(),
        ' のトレーニングは──',
      ]);
      await maya.say_and_wait([callname, '！ コース3周なんてつまんない！']);
      await maya.say_and_wait('マヤ、今は30周走らなきゃ！');
      era.printButton('「脚への負担が大きすぎる」', 1);
      await era.input();
      await maya.say_and_wait(
        'え──！？ じゃあじゃあ、次なにトレするか、早く考えて。',
      );
      await maya.say_and_wait([
        'マヤ、知ってるもん。',
        callname,
        ' なら絶対、楽しいの用意してくれる！',
      ]);
      await maya.say_and_wait(
        'あっ。昨日の課題リスト、種類全部できるようになったよ！ だからリストにないやつがいい☆',
      );
      await era.printAndWait([
        '……こうして ',
        you.get_colored_name(),
        ' は毎日、新しいトレーニングを求められる。',
      ]);
      await era.printAndWait([
        'だが ',
        maya.get_colored_name(),
        ' はもう目標を決め、そこに向かおうとしている。',
        maya.sex,
        'の目標を叶えるのは、トレーナーの務めだ──',
      ]);
      await maya.say_and_wait(['おはよう！ ', callname, '！ 今日も頑張ろ！']);
      await maya.say_and_wait(['あれ、', callname, '。顔色、真っ白……']);
      await maya.say_and_wait(['あっ、', callname, '！？']);
      await era.printAndWait('（……ドン）');
      await amazon.say_and_wait('……おっと、危ねえ。');
      await amazon.say_and_wait('今の、倒れかけてたぞ。');
      era.printButton('「支えてくれたのか……？」', 1);
      await era.input();
      await amazon.say_and_wait('ははっ、礼はいらねえ。大したことじゃねえ。');
      await amazon.say_and_wait(
        'だが、目の下のクマがひどい……ろくに寝てねえな。',
      );
      await amazon.say_and_wait(['おい、', a_call_m, '！']);
      await maya.say_and_wait('あ、あわわ……');
      await amazon.say_and_wait([
        a_call_m,
        '！ そこでビビってねえで、返事しろ！',
      ]);
      await maya.say_and_wait('は、はい！！');
      await amazon.say_and_wait([
        '……よし、それでいい。',
        callname_12,
        '、お前はここで休め。',
      ]);
      await amazon.say_and_wait('こいつは俺が見てやる。');
      era.printButton('「えっ！？」', 1);
      await era.input();
      await amazon.say_and_wait([
        'ははっ、そんなに慌てるな。',
        maya.sex,
        'を食ったりしねえよ。',
      ]);
      if (join_arim_kin_c) {
        await amazon.say_and_wait([
          '前の『',
          arim_kin,
          '』での宣戦布告……正直、印象に残ってる。',
        ]);
      }
      await amazon.say_and_wait('だから、俺にも手伝わせろ。');
      await amazon.say_and_wait(
        'こんな見込みのある子を、一人占めさせてたまるか。',
      );
      await maya.say_and_wait(['え──！？ ', call_12, '……！？']);
      await maya.say_and_wait([
        'あわわわ……！？ ご、ごめん。マヤのハートは ',
        callname,
        ' だけ……！',
      ]);
      await amazon.say_and_wait(
        '……おい、落ち着けるか？ 提案だ。大事なのは、お前が『強くなりたいか』だ。',
      );
      await amazon.say_and_wait([
        'どうだ、',
        callname_12,
        '。',
        maya.sex,
        'を、しばらく俺に預けるか？',
      ]);
      await era.printAndWait([
        '──「女傑」',
        amazon.get_colored_name(),
        '。',
        maya.sex,
        'は去年も今年も、「',
        arim_kin,
        '」で ',
        brian.get_colored_name(),
        ' の好敵手と言える存在だ。',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' のためを思うなら、',
        you.get_colored_name(),
        ' は自分の方針だけにこだわらず、',
        maya.sex,
        'の意見も借りるべきだ……！',
      ]);
      era.printButton('「お願いする！」', 1);
      await era.input();
      await amazon.say_and_wait(
        'よし、それでこそだ！ ヒシアマ流のトレーニング、始めるぞ！',
      );
      era.drawLine();
      await amazon.say_and_wait([
        'だからな、',
        a_call_m,
        '。逃げ回って、尻尾を取らせるな。',
      ]);
      await maya.say_and_wait(
        'え、それって『しっぽ取り』？ 幼稚園のときやったことあるけど……',
      );
      await maya.say_and_wait(
        'これ、ほんとにトレーニング？ ……遊んでるだけじゃない？',
      );
      await amazon.say_and_wait('ほう、余裕じゃねえか。始めるぞ。');
      await maya.say_and_wait('う、うう……');
      await amazon.say_and_wait(
        'おいおい、どうした？ もう十回以上取られてるぞ！',
      );
      await maya.say_and_wait([
        'だって ',
        call_12,
        ' がズルいんだもん！ 急に鬼の数増やすし！',
      ]);
      await teio.say_and_wait([
        'ふふん！ 次は私が ',
        t_call_m,
        ' を捕まえる番よ！',
      ]);
      await nature.say_and_wait('おお、楽しそう……');
      await nature.say_and_wait([
        'ねえ、',
        n_call_a,
        '。今みたいに手伝えばいいの？',
      ]);
      await amazon.say_and_wait([
        'ああ、それでいい！ 助かる！ ……でな、',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait(
        '簡単に言うと、お前の弱点は察知が足りねえことだ。',
      );
      await maya.say_and_wait('……察知？');
      await maya.say_and_wait(
        '察知って、わかることでしょ？ マヤ、もうわかってるよ。ルールも逃げ方も。',
      );
      await maya.say_and_wait([
        'でも ',
        call_12,
        '、すぐ鬼の数とルール変える！ ひきょうだ──',
      ]);
      await amazon.say_and_wait(
        'ったく、だから察知が……いや、察知しようともしてねえ、か。',
      );
      await maya.say_and_wait('……え？');
      await amazon.say_and_wait(
        '俺が見た限り、お前には優秀な才能とトレーナーがいる。',
      );
      await amazon.say_and_wait(
        '本当に何でもできるんだろう。だから周りの大人も、お前にたくさん払ってる。',
      );
      await amazon.say_and_wait('ただな、お前は他人に頼りすぎてる。');
      await amazon.say_and_wait(
        '今もそうだ。一度わかった……いや、わかったつもりになったら……',
      );
      await amazon.say_and_wait(
        '『わからないことを理解しようとしない』……そんな癖を、自分で作っちまった。',
      );
      await amazon.say_and_wait(
        '俺は『しっぽ取り』をやってるんじゃねえ。レースのトレーニングだ。',
      );
      await amazon.say_and_wait(
        'もっと頭を使え。本番のレースじゃ、何人もにマークされる。途中で作戦も変わる。',
      );
      await amazon.say_and_wait(
        'そのときどうする？ その場の状況で柔軟に逃げる……そうだろ？',
      );
      await maya.say_and_wait('……むっ。');
      await amazon.say_and_wait('……ついでに言っとくが、今朝もだ。');
      await amazon.say_and_wait([
        'お前、',
        callname_12,
        ' がお前のために無理しすぎてたの、気づいてたか？',
      ]);
      await maya.say_and_wait('……！');
      await amazon.say_and_wait('せっかく優秀な才能があるなら、極限まで使え。');
      await amazon.say_and_wait([
        'それとも『もう走らない！』って泣いて、',
        callname_12,
        ' を困らせる子供でいるつもりか？',
      ]);
      await maya.say_and_wait('む～～！ マヤ、そんなんじゃない！！');
      await maya.say_and_wait('マヤはオトナのオンナになるの！ 泣かない！');
      await maya.say_and_wait([
        call_12,
        '！ もう一回！！ 今度は絶対、取らせない！',
      ]);
      await amazon.say_and_wait('ははっ、いいだろう。始めるぞ！！');
      await maya.say_and_wait(
        'ふん──！ もう一回！ マヤ、もう『わかった』から！！',
      );
      await amazon.say_and_wait(
        'おお！ その感じだ！ 頭じゃなく、身体に覚えさせろ！',
      );
      await era.printAndWait([
        '──まばゆい夕陽の下、',
        maya.teen_sex_title,
        'たちが汗を流し、コースを走り続けていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} yukino ユキノビジン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_29 マヤノトップガンのユキノビジンへの呼び方
     * @param {PrintedSpan} y_call_m ユキノビジンのマヤノトップガンへの呼び方
     */
    const f = async (maya, yukino, you, callname, call_29, y_call_m) => {
      await era.printAndWait([
        '昼休み、',
        you.get_colored_name(),
        ' が校内を歩いていると──',
      ]);
      await maya.say_and_wait(['ん～♪ ', call_29, ' のチョコ、おいしい～♪']);
      await yukino.say_and_wait([
        'えへへ。',
        y_call_m,
        ' がくれたチョコも、すっごくおいしいです～',
      ]);
      await yukino.say_and_wait(
        '包装もキラキラしてて豪華！ どこで買ったんですか？',
      );
      await maya.say_and_wait([
        'ふんふんふん……だってマヤはオトナの',
        maya.phy_sex_title,
        '！ 流行りのお店、すぐ見つかる☆',
      ]);
      await yukino.say_and_wait([
        'わあ……！ 『都会の',
        maya.child_sex_title,
        '』です！',
      ]);
      await maya.say_and_wait(
        'うんうん！ お買い物で迷ったら、マヤに任せといて！',
      );
      await maya.say_and_wait(['……あっ！ ', callname, '！ ハロー☆']);
      await maya.say_and_wait(
        'えへへ、マヤのチョコ、待ちきれなかった？ もう、仕方ないなあ♪',
      );
      await maya.say_and_wait([
        call_29,
        '、先行くね──！ これからオ・ト・ナ・の・じ・か・ん☆',
      ]);
      await yukino.say_and_wait(
        'オ、オトナ……オトナの時間！？ な、なな、なにをするんですか～！？',
      );
      await era.printAndWait([
        '何もするつもりはないはずだ……だが ',
        you.get_colored_name(),
        ' は ',
        yukino.get_colored_name(),
        ' の誤解を解く暇もなく、',
        maya.get_colored_name(),
        ' に引っ張られていった……',
      ]);
      await maya.say_and_wait('はい、どうぞ！ マヤからのチョコだよ。');
      await maya.say_and_wait('えへへ、開けて開けて☆');
      await era.printAndWait([
        maya.sex,
        'の期待する目の下で、',
        you.get_colored_name(),
        ' は',
        maya.sex,
        'からもらった小さな箱を開けた。中身は──',
      ]);
      await era.printAndWait(
        '……どれだけ詰めようとしたのか、箱いっぱいにチョコが詰まっている。',
      );
      await maya.say_and_wait(
        '星がついてるのはデパートで買ったの。ハートは駅の専門店！',
      );
      era.printButton('「たくさん買ったんだな」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへ、今日のために、ひとりでたくさんお店回ったんだよ！',
      );
      await maya.say_and_wait('だ・か・ら……');
      await maya.say_and_wait(
        'こんなにチョコあげたんだから、お返しはちゃんとデートしてね♪',
      );
      era.drawLine();
      await era.printAndWait([
        'そのあとこの日は、',
        maya.get_colored_name(),
        ' の希望で、チョコ専門店へ出かけた。',
      ]);
      await era.printAndWait('……手作りらしい、素朴なチョコカップケーキ。');
      await era.printAndWait(
        'チョコが紙コップからはみ出しているものもあるが、どれも丁寧に作られている──',
      );
      era.printButton('「おいしそうだな」', 1);
      await era.input();
      await maya.say_and_wait('わあ…………！');
      await maya.say_and_wait([
        'えへへ……',
        callname,
        '。食べ終わっても、そう言ってね☆',
      ]);
      await maya.say_and_wait([
        'えへへ、だって特別な ',
        maya.name,
        ' ケーキ、外じゃ買えないよ！',
      ]);
      await maya.say_and_wait('……ほんと、特別なんだから。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、少し甘いチョコカップケーキを食べて、この一日を過ごした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hans_dai: (() => {
    const title = '阪神大賞典に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (maya, brian, you, callname, call_16, hans_dai) => {
      await era.printAndWait(['そして「', hans_dai, '」当日。']);
      await maya.say_and_wait(['…………行こ、', callname, '。']);
      await maya.say_and_wait('準備完了！ エンジンも燃料満タン！');
      era.printButton('「レース、頑張れ」', 1);
      await era.input();
      await maya.say_and_wait('うん！');
      era.drawLine();
      await brian.say_and_wait('…………');
      await maya.say_and_wait(['んっ！ ', call_16, '。']);
      await brian.say_and_wait('……来たな。');
      await maya.say_and_wait('うん、来たよ。');
      await maya.say_and_wait('えへへ、マヤは約束守るいい子。');
      await brian.say_and_wait('……子供か。');
      await maya.say_and_wait([
        'えっ！？ ',
        call_16,
        '、ひどい！！ そんなこと言わないで！',
      ]);
      await brian.say_and_wait('……自分を子供にしてるのはお前だろう。ふん……');
      await brian.say_and_wait('……先に行く。');
      await maya.say_and_wait('あっ、待って！！');
      await brian.say_and_wait('……はあ、まだ何か。');
      await maya.say_and_wait('うん！ ある！');
      await maya.say_and_wait('今日は全力で来てね！');
      await maya.say_and_wait([
        '手抜きはなし。マヤは全力の ',
        call_16,
        ' に勝ちたいの。',
      ]);
      await maya.say_and_wait(
        'そうじゃないと、マヤ、キラキラできない気がするから。',
      );
      await brian.say_and_wait('……全力、か？');
      await brian.say_and_wait('……ふざけるな。');
      await maya.say_and_wait('あっ！ ひどい！ マヤ、本気なのに──！');
    };
    f.title = title;
    return f;
  })(),
  hans_dai_win: (() => {
    const title = '操縦桿はまだこの手に';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('はぁ……はぁ……！');
      await era.printAndWait('（わあああああああ────！！）');
      await maya.say_and_wait('えへへ、勝った！ 勝利ゲット～☆');
      await maya.say_and_wait('ふふん、これで──');
      await brian.say_and_wait('……');
      await brian.say_and_wait('……まだ、足りねえ。');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('……え？');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([
        a_call_m,
        '！ いい走りだった！ 最後の直線、見事だ！',
      ]);
      await maya.say_and_wait([
        '……あれ、',
        call_12,
        '？ マヤのレース、見に来てくれたの？',
      ]);
      await amazon.say_and_wait('ああ！ お前たち二人の決戦だ。応援しに来た──');
      await maya.say_and_wait('じゃあ、教えてほしい。');
      await maya.say_and_wait([
        call_16,
        '、次どのレースに出る？ ',
        call_12,
        ' なら知ってるでしょ？',
      ]);
      await amazon.say_and_wait('！');
      await amazon.say_and_wait('参ったな。まだ足りねえのか。');
      await maya.say_and_wait('うん。だって……');
      await maya.say_and_wait([
        'あの人、まだ悔しくないんだもん。むしろ、',
        maya.sex,
        '、悲しそう。',
      ]);
      await maya.say_and_wait([
        '……それがイヤ。せっかく',
        maya.sex,
        'と走れたのに──',
      ]);
      await maya.say_and_wait([
        'マヤ、もっとキラキラしたい。',
        maya.sex,
        'が悔しくなるくらい。',
      ]);
      await amazon.say_and_wait('……そうか。');
      await amazon.say_and_wait([
        'はっ、初めて',
        maya.sex,
        'に会ったときを思い出すな。レースが終わっても、',
        maya.sex,
        'はまだ足りなさそうだった。',
      ]);
      await amazon.say_and_wait([
        '教えてやるよ。俺の勘じゃ『',
        tenn_spr,
        '』だ。',
      ]);
      await amazon.say_and_wait('あいつは、強者が集まる舞台を欲しがる。');
      await amazon.say_and_wait([
        maya.sex,
        'にとって、今回の『',
        hans_dai,
        '』も、元々は『',
        tenn_spr,
        '』へ向かう途中の道だったはずだ。',
      ]);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」。歴史の長い、長距離の頂点を争うレースだ。',
      ]);
      await maya.say_and_wait(['……', callname, '。']);
      era.printButton(`「ああ、『天皇賞（春）』に出よう」`, 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await amazon.say_and_wait('ふっ……この二人、大したもんだ。');
      await amazon.say_and_wait(
        'よし、手伝うなら最後までだ！ 俺も混ぜてもらう！',
      );
      await amazon.say_and_wait([
        call_12,
        '、今日帰ったらみっちり鍛えてやる！ 覚悟しとけ！',
      ]);
      await maya.say_and_wait('えへへ、もちろんオッケー☆');
      await era.printAndWait([
        'こうして次の目標は「',
        tenn_spr,
        '」に決まった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hans_dai_lose: (() => {
    const title = '即座に上昇';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('はぁ……はぁ……！');
      await maya.say_and_wait('むっ……あとちょっとだったのに……！！');
      await era.printAndWait('（わあああああああ────！！）');
      await brian.say_and_wait('ふん……');
      await brian.say_and_wait('……この程度か。');
      await maya.say_and_wait('もう～～！ その顔なんなの～！');
      await maya.say_and_wait('マヤのこと、全然見てない感じ～！！');
      await maya.say_and_wait('むむ……でも──');
      era.drawLine();
      await maya.say_and_wait('……ただいま！！');
      era.printButton('「おかえり」', 1);
      await era.input();
      await amazon.say_and_wait('おお、もう戻ってきたか？');
      await maya.say_and_wait(['ええ！？ なんで ', call_12, ' がここに！？']);
      await amazon.say_and_wait('なんでも何も、応援しに来たんだが……');
      await maya.say_and_wait('そっか！ ちょうどいい！');
      await maya.say_and_wait('マヤ、もっと鍛えて！ 今日からでもいい！');
      await amazon.say_and_wait('はァ！？ こっちの都合も考えろ──');
      await maya.say_and_wait(
        'イヤ！ だって強くなりたいもん！ まだ強くなれるってわかってる！',
      );
      await maya.say_and_wait([
        'だって悔しい！ ',
        maya.sex,
        '、またマヤをワクワクさせちゃった！',
      ]);
      await maya.say_and_wait([call_16, '、まだキラキラしてる！']);
      await maya.say_and_wait(
        'このまま負けて終わりたくない！ 自分で『終わり』なんて言いたくない！！',
      );
      era.printButton('「俺からも頼む！」', 1);
      await era.input();
      await amazon.say_and_wait('はあ……このワガママ二人組はなんだ。');
      await amazon.say_and_wait('……だが、対峙するにはこの熱がいる。');
      await amazon.say_and_wait(
        'よし、手伝うなら最後までだ！ 俺も混ぜてもらう！',
      );
      await amazon.say_and_wait([
        a_call_m,
        '、みっちり鍛えてやる！ 覚悟しとけ！',
      ]);
      await maya.say_and_wait('うん！ ありがとう！');
      await amazon.say_and_wait('いい返事だ！ その調子で、気を抜くな！');
      await amazon.say_and_wait(
        'いつでも全力だ！ 先のことばかり考えて拳を振り切れねえやつは、最初から白旗を上げてるのと同じだ！',
      );
      await maya.say_and_wait('はい！');
      await amazon.say_and_wait([
        'ふっ！ じゃあ次の作戦会議だ。なあ、',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait([
        '次に',
        maya.sex,
        'と当たるのは『',
        tenn_spr,
        '』だ。',
      ]);
      await maya.say_and_wait(['『', tenn_spr, '』……！']);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」。歴史の長い、長距離の頂点を争うレースだ。',
      ]);
      await amazon.say_and_wait('あいつは、強者が集まる舞台を欲しがる。');
      await amazon.say_and_wait([
        maya.sex,
        'にとって、今回の『',
        hans_dai,
        '』も、元々は『',
        tenn_spr,
        '』へ向かう途中の道だったはずだ。',
      ]);
      await maya.say_and_wait(['……わかった。じゃあ、', callname, '。']);
      era.printButton(`「ああ、『天皇賞（春）』に出よう」`, 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await era.printAndWait([
        'こうして次の目標は「',
        tenn_spr,
        '」に決まった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} oguri オグリキャップ
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     */
    const f = async (
      maya,
      oguri,
      amazon,
      city,
      falcon,
      you,
      callname,
      call_12,
    ) => {
      await era.printAndWait([
        'ファン感謝祭。日ごろ',
        maya.uma_sex_title,
        'を応援してくれているファンを招くお祭りだ。',
      ]);
      await era.printAndWait('春の感謝祭の目玉は、運動対抗戦などの企画──');
      await maya.say_and_wait(
        'ははっ、盛り上がってる～☆ ねえねえ、次の種目、ダート2000メートルだよ～！',
      );
      await amazon.say_and_wait('……おい、お前、出るんだろ！ 早く行け！');
      await maya.say_and_wait([
        'え～！？ イヤイヤ！ 今 ',
        callname,
        ' とデート中なのに～！',
      ]);
      era.printButton('「行ってこい！」', 1);
      await era.input();
      await maya.say_and_wait(['えっ、', callname, ' まで！？']);
      era.drawLine();
      await maya.say_and_wait([
        'もう……',
        call_12,
        '、ひどいよ～。せっかくのデートなのに……',
      ]);
      await amazon.say_and_wait('……ったく。今日はお祭りだが、浮かれるな。');
      await amazon.say_and_wait('忘れたのか。周りをよく見ろ。');
      await amazon.say_and_wait('そして、ちゃんと気を配れ。');
      await maya.say_and_wait('……周り……？');
      await city.say_and_wait('……ふっ。私の力、見せてあげる。');
      await oguri.say_and_wait('うん……悪くない。');
      await falcon.say_and_wait(
        'ん～、みんなファルコちゃん見てる☆ いっそこのまま、視線独り占めしちゃおっかな♪',
      );
      await amazon.say_and_wait('……どうだ。');
      await maya.say_and_wait('……あの人たちとは、あんまり走ったことない。');
      await amazon.say_and_wait(
        'そうだ。普段あまり当たらない相手が、今ここに揃ってる。',
      );
      await amazon.say_and_wait(
        '今回は本番のレースじゃねえ。だが、だからこそ──',
      );
      await amazon.say_and_wait('普段出会えない相手と、真正面からぶつかれる。');
      await amazon.say_and_wait(
        'どんなレースでも、あの連中と同じ舞台に立てる機会は一生に一度だ。',
      );
      await amazon.say_and_wait('だからどのレースも、命がけで……楽しめ。');
      await maya.say_and_wait('……命がけで、楽しむ。');
      await amazon.say_and_wait(
        'ああ。だからこのレースでも、お前はもっと成長するはずだ！ そして──',
      );
      await maya.say_and_wait('……成長！？ オトナ！？');
      await maya.say_and_wait([
        'I copy☆ 今日は ',
        call_12,
        ' を置いてゴールする！',
      ]);
      await amazon.say_and_wait('おい！？ 調子に乗りすぎだろ！？');
      await era.printAndWait('そして、ダート2000メートルが始まった──');
      era.drawLine();
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} amazon ヒシアマゾン
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
   * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
   * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
   * @param {number} rank マヤノトップガンの模擬レース着順
   */
  async ws_95_14_end(
    maya,
    amazon,
    falcon,
    you,
    callname,
    call_12,
    callname_12,
    a_call_m,
    rank,
  ) {
    if (rank === 1) {
      await maya.say_and_wait([callname, '────！ マヤ、1着だよ──☆']);
      era.printButton('「すごいぞ！」', 1);
      await era.input();
      await maya.say_and_wait('えへへ……もっと褒めて☆');
      await amazon.say_and_wait([
        '……前途有望な',
        maya.child_sex_title,
        'だ。俺だけじゃなく、あの連中まで負かすとは……',
      ]);
      await maya.say_and_wait([
        'えへへ。',
        call_12,
        '、真剣に走らせてくれてありがとう！',
      ]);
      await maya.say_and_wait('すっごく楽しかった！ すっごく……ワクワクした。');
      await maya.say_and_wait(
        'このレースでしかできないこと、考えて、作戦もいっぱい考えた。',
      );
      await maya.say_and_wait(
        '──いちばんかっこいい走り、このレースで全部出しきったよ。',
      );
      await amazon.say_and_wait('む……！ 全部、その場で思いついたのか？');
      await amazon.say_and_wait([
        'この',
        maya.child_sex_title,
        '、本当に見込みがあるな……！',
      ]);
      await era.printAndWait([
        'マヤノトップガンは一歩ずつ、確かに強くなっている。',
        you.get_colored_name(),
        ' は、それをはっきり感じられる一日を過ごした。',
      ]);
    } else {
      await maya.say_and_wait(['むむ……', callname, '……']);
      await amazon.say_and_wait([
        'はははっ！ ',
        a_call_m,
        '！ 見事な負けっぷりだな。',
      ]);
      await amazon.say_and_wait(
        'だが、これもいい機会だ。勝者の顔をよく見て、その悔しさを力にしろ。',
      );
      await amazon.say_and_wait('俺もそうやって強くなった……へっ。');
      await maya.say_and_wait('むむむ……強くなるために……成長するために……！');
      await falcon.say_and_wait('みんな～～！ ありがとう～～☆');
      await you.say_as_passer_by_and_wait(
        '観客',
        'うおおおおお！！ ファルコちゃーん──！！',
      );
      await maya.say_and_wait(
        'わ～～イヤイヤイヤ！ 悔しい悔しい超悔しい～！！',
      );
      await maya.say_and_wait([
        'マヤもあそこに立って、',
        callname,
        ' の声援、受けたい～！',
      ]);
      await amazon.say_and_wait([
        'はあ……お前、本当に頭の中 ',
        callname_12,
        ' だらけだな。',
      ]);
      await maya.say_and_wait([
        'うぅ……だって ',
        callname,
        ' に、オトナになったマヤを見せたいもん。',
      ]);
      era.printButton('「もう十分、成長は感じている」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await maya.say_and_wait('むっ……もう一回やる～！ 次は絶対勝つ！');
      await amazon.say_and_wait('だから一回しかねえって！ ……ったく！');
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' は ',
        amazon.get_colored_name(),
        ' と力を合わせ、大暴れする ',
        maya.get_colored_name(),
        ' を押さえ込んだ。',
      ]);
    }
  },
  before_tenn_spr: (() => {
    const title = '天皇賞（春）に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_b トウカイテイオーのナリタブライアンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      you,
      callname,
      call_3,
      t_call_a,
      t_call_b,
      t_call_m,
      callname_12,
      hans_dai,
      tenn_spr,
      arim_kin,
    ) => {
      await era.printAndWait(['そして「', tenn_spr, '」当日──']);
      await teio.say_and_wait(['ハーイ♪ ', t_call_m, '！']);
      await maya.say_and_wait(['わっ、', call_3, '！ 応援しに来てくれたの？']);
      await teio.say_and_wait([
        'うん、',
        t_call_a,
        ' も用事が終わったら飛んでくるって！',
      ]);
      await teio.say_and_wait(
        'えへへ、みんな楽しみにしてるよ！ あなたのレース！',
      );
      await teio.say_and_wait('ほらほら、これ！');
      await you.say_as_passer_by_and_wait('新聞', [
        '『',
        tenn_spr,
        ' は両強対決か！？』『',
        brian.get_colored_name(),
        ' と ',
        maya.get_colored_name(),
        '、どちらが勝つ！』',
      ]);
      await you.say_as_passer_by_and_wait('新聞', [
        '『',
        hans_dai,
        ' の激戦を経て迎える ',
        tenn_spr,
        '！』『輝くのは巨星 ',
        brian.get_colored_name(),
        ' か、新星 ',
        maya.get_colored_name(),
        ' か！』',
      ]);
      await maya.say_and_wait('……！');
      await teio.say_and_wait('えへへ、どう？ 緊張してきた？');
      await maya.say_and_wait('………………ふふふ。');
      await maya.say_and_wait(
        'こんなことでマヤが怖がるわけない！ もう～、ワクワクしてきた！',
      );
      await teio.say_and_wait([
        'わ～！ ',
        t_call_m,
        '、大人だ～！ かっこいい～！',
      ]);
      await maya.say_and_wait('はははっ！ プリンくれたら許してあげる☆');
      await maya.say_and_wait([
        'えへへ。じゃあ ',
        callname,
        '、マヤ先行くね！',
      ]);
      era.printButton('「今日は絶対、負けるな」', 1);
      await era.input();
      await maya.say_and_wait('うん、負けない！');
      await maya.say_and_wait('今度こそ、ブライアンに完璧に勝つ！');
      await maya.say_and_wait([
        'だから ',
        callname,
        ' も、ちゃんと期待してて！',
      ]);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        maya.get_colored_name(),
        ' を送り出したあと──',
      ]);
      await era.printAndWait('（コンコン）');
      await teio.say_and_wait([
        'あれ、',
        t_call_a,
        '？ ',
        t_call_m,
        ' はもう行ったよ。',
      ]);
      await amazon.say_and_wait('……お前ら、あの映像見たか。');
      await teio.say_and_wait([
        'え、',
        t_call_b,
        ' のニュース？ それは ',
        t_call_m,
        ' に見せたけど……',
      ]);
      await amazon.say_and_wait('ちがう。今さっき流れたやつだ。');
      await amazon.say_and_wait(['……とにかく ', callname_12, '、先に見ろ。']);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' が受け取ったスマホに、ニュースが映っている。',
      ]);
      await you.say_as_passer_by_and_wait('記者', [
        brian.get_colored_name(),
        '選手、これは本当ですか！？ 今回の『',
        tenn_spr,
        '』を走り終えたあと──',
      ]);
      await brian.say_and_wait(['ああ、『', arim_kin, '』に向けて調整する。']);
      await you.say_as_passer_by_and_wait('記者', [
        'で、でも……',
        arim_kin,
        ' は冬のレースですよ！？ 今決めるのは早すぎでは──',
      ]);
      await brian.say_and_wait('──早くない。');
      await brian.say_and_wait('確かめたいことがある。そのための時間がいる。');
      await brian.say_and_wait([
        '──この ',
        brian.get_colored_name(),
        ' が、どこまで走れるのかを……！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = 'エマージェンシー';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('はぁ……はぁ……！ ……よし！');
      await maya.say_and_wait(['これで……', call_16, ' に……！']);
      await brian.say_and_wait('──なぜだ。');
      await brian.say_and_wait('ふん……！ まだこの程度……！');
      await maya.say_and_wait('……もう、マヤのこと見てない感じ。');
      era.drawLine();
      await maya.say_and_wait([call_16, '、どこを見てるの……']);
      era.printButton('「……え？」', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, '、どこを見てるんだろ……？']);
      await maya.say_and_wait(['……', callname, '、ねえ。お願いがあるの。']);
      await maya.say_and_wait([
        'もう一回だけでいい。早く ',
        call_16,
        ' と走らせてほしい。',
      ]);
      era.printButton('「今回、勝ったじゃないか」', 1);
      await era.input();
      await maya.say_and_wait(
        'うん、もう一回走らないと……なんでかは、わからないけど。',
      );
      await maya.say_and_wait('それに今回、急がなきゃって予感がする……');
      await amazon.say_and_wait([
        'むっ！ ',
        a_call_m,
        '……今回のレースで、そう思ったのか。',
      ]);
      await maya.say_and_wait('……う、うん。');
      await amazon.say_and_wait('そうか。なら、なおさら放っておけねえ。');
      await amazon.say_and_wait(['──『', arim_kin, '』が、きっと最後だ。']);
      era.printButton('「……最後？」', 1);
      await era.input();
      await amazon.say_and_wait([
        'ああ。あいつは ',
        arim_kin,
        ' を『最後のレース』にして、選手生命を閉じるつもりだ。',
      ]);
      await amazon.say_and_wait('ふん……早すぎる幕引きだ……！');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……なんで？ おかしいよ。');
      await maya.say_and_wait([
        '最後なわけない……',
        call_16,
        '、今日も強かったじゃん。',
      ]);
      await maya.say_and_wait('終わるなんて。イヤ……マヤ、認めない！');
      await maya.say_and_wait([
        'だってレースに勝っても、',
        call_16,
        ' に勝った気がしない！',
      ]);
      await maya.say_and_wait([
        'マヤだけじゃない。',
        maya.sex,
        'にも、マヤの力でワクワクしてほしい！',
      ]);
      era.printButton('「' + brian.sex + 'をワクワクさせたい、か」', 1);
      await era.input();
      await maya.say_and_wait('……うん、そう。だって悔しいもん。');
      await maya.say_and_wait([
        'レースでキラキラしてる',
        maya.uma_sex_title,
        'って、一緒に走った相手も観客も、みんなのハートをワクワクさせる存在なんだよ。',
      ]);
      await maya.say_and_wait([
        'だからマヤも、',
        maya.sex,
        'をワクワクさせる人になりたい……！',
      ]);
      await maya.say_and_wait(['あのね、', callname, '。……だからさ。']);
      await maya.say_and_wait([
        call_12,
        '、さっき有馬記念が ',
        call_16,
        ' の最後のレースだって言ったでしょ。',
      ]);
      await maya.say_and_wait([
        'だから『',
        arim_kin,
        '』までに、マヤを完璧に仕上げてほしい。',
      ]);
      era.printButton('「わかった」', 1);
      await era.input();
      await maya.say_and_wait('……ありがとう。えへへ、楽しみ。');
      await era.printAndWait([
        '──「',
        arim_kin,
        '」を目標にしつつ、',
        maya.sex,
        'の望む強敵ともぶつかる……その方針でG1の出走を組むなら──',
      ]);
      await era.printAndWait(
        '夏と秋、少なくとも一戦ずつは出たい。有馬に近い中長距離か、中距離のG1だ。',
      );
      era.printButton('「『宝塚記念』、『天皇賞（秋）』……」', 1);
      await era.input();
      await maya.say_and_wait(
        'わかった、マヤ出る。レースに出て……いちばん早く強くなる。',
      );
      await maya.say_and_wait('──そうしないと、ダメな気がする。');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_lose: (() => {
    const title = 'エマージェンシー';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('はぁ……はぁ……！ ……むっ！');
      await maya.say_and_wait([call_16, '……やっぱり……速い……！！']);
      await brian.say_and_wait('──なぜだ。');
      await brian.say_and_wait('なぜ……まだ届かねえ……！');
      await maya.say_and_wait('……もう、マヤのこと見てない感じ。');
      era.drawLine();
      await maya.say_and_wait([call_16, '、どこを見てるの……']);
      era.printButton('「……え？」', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, '、どこを見てるんだろ……？']);
      await maya.say_and_wait(['……', callname, '、ねえ。お願いがあるの。']);
      await maya.say_and_wait([
        'もう一回だけでいい。早く ',
        call_16,
        ' と走らせてほしい。',
      ]);
      era.printButton('「まだ' + brian.sex + 'に挑むのか」', 1);
      await era.input();
      await maya.say_and_wait(
        'うん、もう一回走らないと……なんでかは、わからないけど。',
      );
      await maya.say_and_wait('それに今回、急がなきゃって予感がする……');
      await amazon.say_and_wait([
        'むっ！ ',
        a_call_m,
        '……今回のレースで、そう思ったのか。',
      ]);
      await maya.say_and_wait('……う、うん。');
      await amazon.say_and_wait('そうか。なら、なおさら放っておけねえ。');
      await amazon.say_and_wait(['──『', arim_kin, '』が、きっと最後だ。']);
      era.printButton('「……最後？」', 1);
      await era.input();
      await amazon.say_and_wait([
        'ああ。あいつは ',
        arim_kin,
        ' を『最後のレース』にして、選手生命を閉じるつもりだ。',
      ]);
      await amazon.say_and_wait('ふん……早すぎる幕引きだ……！');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……なんで？ おかしいよ。');
      await maya.say_and_wait([
        '最後なわけない……',
        call_16,
        '、今日も強かったじゃん。',
      ]);
      await maya.say_and_wait([
        maya.sex,
        '、またマヤをワクワクさせちゃったよ？',
      ]);
      await maya.say_and_wait('なのに終わるなんて。イヤ……マヤ、認めない！');
      await maya.say_and_wait(['マヤ、', maya.sex, 'にずっと負けてたくない！']);
      era.printButton('「……勝ちたいのか？」', 1);
      await era.input();
      await maya.say_and_wait('勝ちたい。');
      await maya.say_and_wait([
        '……マヤだけじゃない。今度は',
        brian.sex,
        'にも、ちゃんとワクワクしてほしい。',
      ]);
      await maya.say_and_wait([
        'レースでキラキラしてる',
        maya.uma_sex_title,
        'って、一緒に走った相手も観客も、みんなのハートをワクワクさせる存在なんだよ。',
      ]);
      await maya.say_and_wait([
        'だからマヤも、',
        maya.sex,
        'をワクワクさせる人になりたい……！',
      ]);
      await maya.say_and_wait(['あのね、', callname, '。……だからさ。']);
      await maya.say_and_wait([
        call_12,
        '、さっき有馬記念が ',
        call_16,
        ' の最後のレースだって言ったでしょ。',
      ]);
      await maya.say_and_wait([
        'だから『',
        arim_kin,
        '』までに、マヤを完璧に仕上げてほしい。',
      ]);
      era.printButton('「わかった」', 1);
      await era.input();
      await maya.say_and_wait('……ありがとう。えへへ、楽しみ。');
      await era.printAndWait([
        '──「',
        arim_kin,
        '」を目標にしつつ、',
        maya.sex,
        'の望む強敵ともぶつかる……その方針でG1の出走を組むなら──',
      ]);
      await era.printAndWait(
        '夏と秋、少なくとも一戦ずつは出たい。有馬に近い中長距離か、中距離のG1だ。',
      );
      era.printButton('「『宝塚記念』、『天皇賞（秋）』……」', 1);
      await era.input();
      await maya.say_and_wait(
        'わかった、マヤ出る。レースに出て……いちばん早く強くなる。',
      );
      await maya.say_and_wait('──そうしないと、ダメな気がする。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_20: (() => {
    const title = '夕陽に向かって';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      callname,
      t_call_a,
      t_call_m,
      a_call_m,
      takz_kin,
      tenn_sho,
      arim_kin,
    ) => {
      await brian.print_and_wait([
        '最初は、',
        brian.elder_sibling_sex_title,
        'と、どっちが速いか競うだけだった。',
      ]);
      await brian.print_and_wait([
        'ごく普通の',
        brian.siblings_sex_title,
        '同士の競争……本当に、ごく普通だ。',
      ]);
      await brian.print_and_wait([
        'だが俺は、',
        brian.elder_sibling_sex_title,
        'の背中を必死に追った。喜びに震える獣のように。',
      ]);
      await brian.print_and_wait(
        '脚を動かし、空気を肺に入れる。また脚を動かす──',
      );
      await brian.print_and_wait('それが、俺の呼吸だ。');
      await brian.print_and_wait('──やがて、追うべき背中は消えた。');
      await brian.print_and_wait('俺はひとりになった。');
      await brian.print_and_wait('ひとりになっても、呼吸は覚えていた。');
      await brian.print_and_wait(
        'そして理解した。その呼吸が、俺を飢えさせることを。',
      );
      await brian.print_and_wait(
        '全力で呼吸するほど、喉は渇き、満たされないことを。',
      );
      await brian.print_and_wait('だが、呼吸は止められない。');
      await brian.print_and_wait('呼吸が痛みになっても、生きるためだ。');
      await brian.print_and_wait('だが、もし……もしこの身体が──');
      await brian.print_and_wait('いつか、俺の呼吸を拒むなら──');
      await brian.print_and_wait('……そのとき、なんだろうな。');
      await brian.print_and_wait('ふぅ……ふぅ……！');
      await brian.print_and_wait('ふん……俺は……負けねえ！');
      era.drawLine();
      await amazon.say_and_wait('あいつ……まだ走れるのか。');
      await amazon.say_and_wait([
        'ふん……',
        arim_kin,
        ' は ',
        a_call_m,
        ' だけじゃねえ。俺も必ず追いつく……！',
      ]);
      await teio.say_and_wait([
        'はいはい、',
        t_call_a,
        ' は置いといて、',
        t_call_m,
        ' の次のレースは『',
        takz_kin,
        '』でしょ？ ちゃんと休もうよ。',
      ]);
      await teio.say_and_wait(['あれ、', t_call_m, '？ 聞いてる？']);
      await maya.say_and_wait('……わかった。');
      await amazon.say_and_wait(['……', a_call_m, '？']);
      await maya.say_and_wait('でも、ほんとなの……そんなこと……');
      await maya.say_and_wait('だって、そんなわけ……！');
      await amazon.say_and_wait([a_call_m, '！？']);
      await maya.say_and_wait('はぁ……はぁ……はぁ……');
      era.printButton(`「……マヤ」`, 1);
      await era.input();
      await maya.say_and_wait([callname, '。']);
      era.printButton('「なにか、わかったのか？」', 1);
      await era.input();
      await maya.say_and_wait('……');
      await maya.say_and_wait('気づいちゃった。');
      await maya.say_and_wait(
        'あの太陽、すごくキラキラしてるけど、夕陽なんだ。',
      );
      await maya.say_and_wait(
        '急がないと、沈んじゃう。だれも届かないところまで。',
      );
      await maya.say_and_wait([
        'マヤ、まだ',
        maya.sex,
        'と並んだことないのに……！',
      ]);
      era.printButton(`「ブライアンのことか？」`, 1);
      await era.input();
      await maya.say_and_wait(['………………', callname, ' も、気づいてたよね。']);
      await maya.say_and_wait('前のこと、思い出した。');
      await maya.say_and_wait('──あの人も、ワクワクしたかった。');
      await maya.say_and_wait([
        maya.sex,
        'は、全力で走って、『楽しい』って言いたかっただけ。',
      ]);
      await maya.say_and_wait([
        'だから',
        maya.sex,
        'はずっと足掻いてた。いつかその言葉が言えるって信じて。',
      ]);
      await maya.say_and_wait(
        '──身体が、キラキラしたい気持ちに応えられなくても、無理して支えてた。',
      );
      await maya.say_and_wait(['……', callname, '！ マヤ、ここで諦めない。']);
      await maya.say_and_wait([
        'もしあの人が本当に『',
        arim_kin,
        '』を最後にするなら！',
      ]);
      await maya.say_and_wait([
        'その日、マヤは『マヤノトップガン』として出て、',
        maya.sex,
        'に勝って、',
        maya.sex,
        'に自慢する！',
      ]);
      await maya.say_and_wait([
        maya.sex,
        'に言うの。『マヤの全力のほうが、強いでしょ』って。',
      ]);
      await maya.say_and_wait('『マヤが、ワクワクさせたでしょ』って！');
      era.printButton('「その意気だ！」', 1);
      await era.input();
      await maya.say_and_wait('うん！ 絶対やる！');
      await maya.say_and_wait([
        '『',
        takz_kin,
        '』で強くなって、『',
        tenn_sho,
        '』で速くなる。',
      ]);
      await maya.say_and_wait(['そして『', arim_kin, '』で──']);
      await maya.say_and_wait(['──', maya.sex, 'を追い越せたら……']);
      await maya.say_and_wait([
        'そのとき ',
        callname,
        ' はマヤだけ見て、『だれよりキラキラしてる』って褒めてね。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '宝塚記念に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (maya, amazon, brian, call_16, a_call_m, takz_kin) => {
      await era.printAndWait(['「', takz_kin, '」当日。そして今回は──']);
      await maya.say_and_wait(['……', call_16, ' は出ない。']);
      await maya.say_and_wait('あはは☆ 最高のチャンス！ マヤだけが出る！');
      await maya.say_and_wait(
        'だから負けない。──目の前のことを、ちゃんとやる。',
      );
      era.printButton('「もっと成長してこい！」', 1);
      await era.input();
      await maya.say_and_wait('I copy☆ 指示どおり、すぐ伸びるよ♪');
      era.drawLine();
      await era.printAndWait('（わああああああ────！！）');
      await amazon.say_and_wait('おお、来たな。');
      await brian.say_and_wait('……ふん、断る理由がなかっただけだ。');
      await brian.say_and_wait('それで、用件は。こんな遠くまで呼び出すとは。');
      await brian.say_and_wait(
        '大したことでなければ、これ以降は口もきかねえ。',
      );
      await amazon.say_and_wait(
        'とにかく落ち着け。勘のいいお前なら、気づいてるだろ。',
      );
      await amazon.say_and_wait([
        '今回の『',
        takz_kin,
        '』に、『',
        a_call_m,
        '』が出る。',
      ]);
      await brian.say_and_wait('……それがどうした。');
      await amazon.say_and_wait('ふん、興味ないフリすんな。');
      await amazon.say_and_wait([
        'お前は',
        maya.sex,
        'に飢えてる。お前を解き放つ、何かだ。',
      ]);
      await brian.say_and_wait('……気づいていたのか。');
      await amazon.say_and_wait('お前の背中を、何年も追ってきたんだ。');
      await amazon.say_and_wait(
        'お前が欲しいものが何かは、結局わからなかったがな。',
      );
      await amazon.say_and_wait(
        'だが少なくとも、お前が何かを耐えてるのは見えた。',
      );
      await amazon.say_and_wait('このままじゃ、面白くねえこともな。');
      await brian.say_and_wait('ふん、だからあいつに期待を預けたのか。');
      await brian.say_and_wait([
        'お前は',
        maya.sex,
        'を特別に見て、育ててるらしいな。',
      ]);
      await amazon.say_and_wait('ほう、知ってたのか。');
      await brian.say_and_wait([
        maya.sex,
        'の、諦めの悪い鬱陶しい走りが、誰かに似てるからな。',
      ]);
      await amazon.say_and_wait([
        'ははっ、そうだな。',
        maya.sex,
        'はお前に似てる。どちらも欲深い。',
      ]);
      await brian.say_and_wait('……ふん。');
      await amazon.say_and_wait([
        'ついでに言っとく。',
        maya.sex,
        'は、まだ伸びる。',
      ]);
      await amazon.say_and_wait([
        '『これが最後だ』なんて弱音を吐くお前に、',
        maya.sex,
        'はきっと、でかい平手を食らわせるだろうよ。',
      ]);
      await amazon.say_and_wait('それで目が覚めたら──');
      await amazon.say_and_wait('次は俺が、お前を倒す。');
      await brian.say_and_wait(
        '……ふん、アマさんも丸くなったな。敵に手を貸すとは。',
      );
      await amazon.say_and_wait('何言ってんだ。敵じゃねえ、好敵手だろ。');
      await brian.say_and_wait('……ふっ。');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = 'コックピットへ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, amazon, brian, callname) => {
      await era.printAndWait('（わああああああ────！！）');
      await brian.say_and_wait('……');
      await amazon.say_and_wait('どうだ。');
      await brian.say_and_wait('……どうでもいい。');
      await brian.say_and_wait('用は済んだ。学園に戻る。');
      await amazon.say_and_wait('トレーニングに戻るのか。');
      await brian.say_and_wait('……うるせえ。');
      era.drawLine();
      await maya.say_and_wait(['はぁ……はぁ……ふぅ。', callname, '、どう？']);
      await maya.say_and_wait('ちゃんと成長できた？ 今のマヤに出せる全速で。');
      era.printButton('「成長してる！」', 1);
      await era.input();
      await maya.say_and_wait('えへへ、よかった♪ さすがマヤ、すごいね☆');
      await maya.say_and_wait(
        'ふふん。ほかの人の気流に流されるような、平凡な操縦なんてマヤはイヤだもん♪',
      );
      await maya.say_and_wait(
        'それじゃ！ 次のターゲット、ロックオン！ 目標は──',
      );
      era.printButton(`「『天皇賞（秋）』！」`, 1);
      await era.input();
      await maya.say_and_wait('I copy☆');
      await maya.say_and_wait('よし、次も全速前進♪');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（シニア級）';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, callname) => {
      await era.printAndWait('今日から、また「夏合宿」が始まる！');
      await maya.say_and_wait([
        callname,
        '、おかえり♪ マヤとのリゾート会場へようこそ～☆',
      ]);
      await maya.say_and_wait('今年も二人で、アツい夏を過ごそ☆');
      era.printButton('「みんなで過ごす、暑い夏だ」', 1);
      await era.input();
      await maya.say_and_wait('ふん──！ またそういうこと言う～！');
      await maya.say_and_wait('でも今年は──');
      await maya.say_and_wait(
        'ほんとに、今まででいちばん熱い夏になりそう。えへへ☆',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, brian, you, callname) => {
      await maya.say_and_wait('ふぅ……『夏合宿』、今日で終わり……');
      await maya.say_and_wait(
        'えへへ……マヤもエンジン全開で、ちゃんとトレした……',
      );
      await maya.say_and_wait('だから帰りのバスで……ちょっと……休む……');
      await maya.say_and_wait('着いたら……起きるから……');
      await maya.say_and_wait('ふー……ふー……');
      await era.printAndWait([
        '……こうして ',
        you.get_colored_name(),
        ' は今年も、',
        maya.sex,
        'をバスでしっかり休ませた。',
      ]);
      era.drawLine();
      await maya.say_and_wait('ん……学園、着いた……？ ふあぁ……うん。');
      await maya.say_and_wait(
        'えへへ。車でぐっすり寝た。追加トレもちゃんと頑張れる……よ……',
      );
      era.printButton('「まだ眠そうだぞ」', 1);
      await era.input();
      await maya.say_and_wait('むっ……そんなことない…………ん？');
      await brian.say_and_wait('ふぅ……ふぅ…………まだ……！');
      await brian.say_and_wait('俺は……まだ……！');
      await maya.say_and_wait(['……！ ', callname, '、今の──']);
      era.printButton(`「ブライアンだ」`, 1);
      await era.input();
      await maya.say_and_wait('うん……そうだね……');
      await maya.say_and_wait([
        '……',
        maya.sex,
        '、すごくキラキラしてる。まぶしいくらい。',
      ]);
      await maya.say_and_wait('前より……もっとキラキラ。');
      await maya.say_and_wait([
        '……',
        callname,
        '。マヤ、今からトレしたい。いい？',
      ]);
      await era.printAndWait([
        'こうして',
        maya.sex,
        'は目をこすったあと、トレーニング場へ走っていった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '天皇賞（秋）に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      callname,
      call_3,
      t_call_a,
      t_call_m,
      a_call_m,
      tenn_sho,
      arim_kin,
    ) => {
      await era.printAndWait([
        '──ついに「',
        tenn_sho,
        '」。このレースを越えれば、',
        maya.get_colored_name(),
        ' は……',
      ]);
      await maya.say_and_wait(['……行ってくる！ ', callname, '！']);
      await maya.say_and_wait([
        'このレースに勝って、力をつける！ 絶対……『',
        arim_kin,
        '』に出る！！',
      ]);
      era.printButton('「いってらっしゃい！」', 1);
      await era.input();
      await maya.say_and_wait('うん！');
      await teio.say_and_wait('あ、ああ……ごめん！');
      await maya.say_and_wait(['わっ、', call_3, '！？']);
      await teio.say_and_wait('正解！ そのとおり！');
      await teio.say_and_wait([
        t_call_m,
        ' に伝言だよ！ 依頼人は ',
        t_call_a,
        '！',
      ]);
      await teio.say_and_wait([
        { color: amazon.color, content: '『' },
        a_call_m,
        { color: amazon.color, content: '！ 春からお前は俺の──』' },
        '……以下、省略～',
      ]);
      era.printButton('「それでいいのか！？」', 1);
      await era.input();
      await teio.say_and_wait('いいよいいよ！ 大事なのは最後！');
      await teio.say_and_wait([
        {
          color: amazon.color,
          content:
            '『強くなったお前と走るのが楽しみだ。今日から俺は──お前の好敵手だ。』',
        },
      ]);
      await teio.say_and_wait([
        maya.sex,
        'はそう言ってた！ 私もわかるよ。だって私も、あなたと走りたいし！',
      ]);
      await teio.say_and_wait(['だから負けないで！ 勝つの、', t_call_m, '！']);
      await teio.say_and_wait('頂点に立って、みんなに追わせてあげて！');
      await maya.say_and_wait('あはは、逃げて、みんなに追わせるってこと？');
      await teio.say_and_wait(['あらら。', t_call_m, ' は追うだけなの？']);
      await maya.say_and_wait([
        'ふふん～、そんなことない☆ ね、',
        callname,
        '！',
      ]);
      era.printButton(`「マヤは、なんでもできる」`, 1);
      await era.input();
      await maya.say_and_wait('えへへ！ そうだね☆');
      await maya.say_and_wait(
        'ふふん。マヤがどんな走りするか、二人とも見逃しちゃダメだよ♪',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '空へと続く滑走路';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} b_call_l ナリタブライアンのシンボリルドルフへの呼び方
     * @param {PrintedSpan} l_call_b シンボリルドルフのナリタブライアンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      callname,
      t_call_m,
      b_call_l,
      l_call_b,
      arim_kin,
    ) => {
      await era.printAndWait('（わあああああああ────！！）');
      await maya.say_and_wait([callname, '！ マヤ、1着だよ！ 1着！']);
      era.printButton('「よく頑張ったな！」', 1);
      await era.input();
      await maya.say_and_wait('うん！ マヤ頑張った！ でも、まだ頑張れる！');
      await maya.say_and_wait('えへへ、だって──');
      await teio.say_and_wait([
        'おお！ ',
        t_call_m,
        '、すごい！ 次は『',
        arim_kin,
        '』だね！',
      ]);
      await era.printAndWait('（わあああああああ────！！）');
      await maya.say_and_wait(
        'みんなも、マヤはもっとキラキラできるって思ってる♪',
      );
      era.drawLine({ content: '数日後' });
      await maya.say_and_wait('ふぅ……ふぅ……うん、また記録更新！');
      await maya.say_and_wait(['これで『', arim_kin, '』も──']);
      await maya.say_and_wait('……あっ。');
      await luna.say_and_wait(['……', l_call_b, '、君の言葉は本当なのか。']);
      await luna.say_and_wait(['『', arim_kin, '』で──']);
      await brian.say_and_wait([b_call_l, '、未来の話に意味はない。']);
      await brian.say_and_wait('併走を頼んだんだ。そうだろ。');
      await luna.say_and_wait('それは……そうだが。');
      await brian.say_and_wait('……散る時は、俺が決める。');
      await brian.say_and_wait('話したいなら、そこで見ていろ。');
      await brian.say_and_wait('……そのときは、先に行く俺が勝つだけだ。');
      await luna.say_and_wait('おい、おい！');
      await luna.say_and_wait('……我が道を行く、か。だが──');
      await luna.say_and_wait('誰もが置いていかれると思うな！');
      await maya.say_and_wait(['……', maya.sex, '、またキラキラしてる。']);
      await maya.say_and_wait([
        '見てるだけで悔しい。なんで',
        maya.sex,
        '、まだキラキラできるの。',
      ]);
      await maya.say_and_wait('あの人、もう──沈むのに。');
      era.printButton('「……夕陽は、赤く光るから」', 1);
      await era.input();
      await maya.say_and_wait('……え？');
      await era.printAndWait('夕方の太陽は、朝や昼より赤く見える。');
      await era.printAndWait('沈む直前、一瞬のまぶしさが、人の心を掴む。');
      era.printButton('「その光に、負けるな」', 1);
      await era.input();
      await maya.say_and_wait('……うん。');
      await maya.say_and_wait('あの光に負けたら、一生勝てない気がする。');
      await maya.say_and_wait(['マヤ、全力で行く。『', arim_kin, '』で──']);
      await maya.say_and_wait('全力で……あの人に勝つ！！');
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, you, callname, arim_kin) => {
      await era.printAndWait([
        '「',
        arim_kin,
        '」が近づいたある日、',
        maya.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を呼び出した。',
      ]);
      await maya.say_and_wait([callname, '、早く早く☆']);
      await maya.say_and_wait('見て見て☆ こっちに雪だるま、あっちにツリー♪');
      era.printButton('「楽しそうだな」', 1);
      await era.input();
      await maya.say_and_wait('うん♪ だって今日は特別デートの日だもん！');
      await maya.say_and_wait('今日は……恋人たちのクリスマスイブ☆');
      era.printButton('「まだ夜じゃないぞ」', 1);
      await era.input();
      await era.printAndWait('それに今日は──');
      await maya.say_and_wait('えへへ、わかってるよ～');
      await maya.say_and_wait(
        '今日は『クリスマス当日』でもないし、夜でもない……でもね。',
      );
      await maya.say_and_wait('だから『予約』しちゃおうって思ったの！');
      era.printButton('「予約？」', 1);
      await era.input();
      await maya.say_and_wait(
        'そう！ 本当はイブにデートしたかった……でもその日、大事な予定あるでしょ？',
      );
      await maya.say_and_wait(['だから……', callname, '！']);
      await maya.say_and_wait(['マヤを撮って☆ ', callname, ' のスマホで！']);
      era.printButton('「俺の？」', 1);
      await era.input();
      await maya.say_and_wait('うん！ 準備できた？ シャッター、逃さないでね！');
      await maya.say_and_wait('3、2、1……');
      await era.printAndWait('（カシャ）');
      await maya.say_and_wait(
        'あはは、かわいく撮れた？ この写真、大事にしてね。',
      );
      await maya.say_and_wait('イブの夜、そのポーズでプレゼントする！');
      await era.printAndWait([
        maya.sex,
        'の言葉を聞いて、',
        you.get_colored_name(),
        ' は写真を確認した──',
      ]);
      await era.printAndWait([
        '写真の ',
        maya.get_colored_name(),
        ' は笑いながら、大きく手を振っている。',
      ]);
      await maya.say_and_wait([
        'えへへ☆ マヤ、',
        arim_kin,
        ' は1着しか取らない！',
      ]);
      await maya.say_and_wait([
        '今年の『クリスマス』、いちばんキラキラなマヤを ',
        callname,
        ' にプレゼント！',
      ]);
      await maya.say_and_wait([
        'だから ',
        callname,
        '、イブの日はマヤに取っといて！',
      ]);
      await maya.say_and_wait(['──マヤの『', arim_kin, '』に！！']);
      await era.printAndWait([
        '──',
        maya.sex,
        'の宣言を聞いて、',
        you.get_colored_name(),
        ' は今年の「',
        arim_kin,
        '」が、なおさら楽しみになった。',
      ]);
      await era.printAndWait([
        '……写真の ',
        maya.get_colored_name(),
        ' は、レンズに向かって投げキッスをしている。',
      ]);
      await maya.say_and_wait([
        'えへへ、今年のイブ……『',
        arim_kin,
        '』のあと、ライブも楽しみにしててね。',
      ]);
      await maya.say_and_wait('マヤがセンターで、あなたにだけ『ちゅっ』する☆');
      era.printButton('「えっ！？」', 1);
      await era.input();
      await maya.say_and_wait(
        'えへへ、大丈夫大丈夫～☆ ほかの人にはバレないから！',
      );
      await maya.say_and_wait('えへへ……オトナでしょ？');
      era.printButton('「おい！」', 1);
      await era.input();
      await maya.say_and_wait(
        'え～、いいじゃん☆ ステージが暗くなったとき、こっそりやるから！',
      );
      await maya.say_and_wait([
        'だ・か・ら～☆ 『',
        arim_kin,
        '』のライブ、センターのマヤから目、離しちゃダメ♪',
      ]);
      await maya.say_and_wait([
        'それとも……',
        callname,
        ' は、舞台降りてからの『ちゅっ』がいい～？',
      ]);
      await maya.say_and_wait('……それもアリだよ。えへへ☆');
      await era.printAndWait([
        '……そう言う ',
        maya.get_colored_name(),
        ' に、',
        you.get_colored_name(),
        ' はダンスの振りを勝手に変えないよう、きちんと釘を刺すことにした。',
      ]);
      await era.printAndWait(['だが今年の「', arim_kin, '」──']);
      await era.printAndWait([
        maya.get_colored_name(),
        ' はきっと1着を取り……センターに立つ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '有馬記念に向けて';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} b_call_m ナリタブライアンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, brian, callname, call_16, b_call_m, arim_kin) => {
      await maya.say_and_wait(['『', arim_kin, '』、また来たよ。']);
      await maya.say_and_wait([
        'えへへ、',
        callname,
        '。去年より、マヤ、成長した？',
      ]);
      era.printButton('「ずいぶん成長した」', 1);
      await era.input();
      await maya.say_and_wait('ふふ……そっか。そっか、そっか☆');
      await maya.say_and_wait('でも、変わってないところもある。');
      await maya.say_and_wait(
        'マヤは、まだキラキラしたい！ このトゥインクル・シリーズで！！',
      );
      await maya.say_and_wait(['だから ', callname, '、最後までマヤ見てて☆']);
      await maya.say_and_wait('だれよりキラキラしてるマヤを♪');
      era.drawLine();
      await maya.say_and_wait(['あっ、', call_16, '！ ハロー☆']);
      await brian.say_and_wait(['……', b_call_m, ' か。']);
      await maya.say_and_wait(
        'えっ☆ マヤの名前、覚えてくれた！？ わっ！ うれしい！！',
      );
      await brian.say_and_wait('ふん……こんなに何度も走れば、覚えずとも残る。');
      await maya.say_and_wait(
        'えへへ、そっか。じゃあ今日は、マヤと走ることに集中してね。',
      );
      await maya.say_and_wait('モヤモヤも痛みも忘れるくらい、ワクワクさせる！');
      await maya.say_and_wait('マヤだけ見てて！');
      await brian.say_and_wait('……！');
      await maya.say_and_wait('えへへ。マヤ、理解力あるんだよ！');
      await maya.say_and_wait([
        'でもね、わからないこともある。だって ',
        call_16,
        '、ずっとキラキラしてるから。',
      ]);
      await maya.say_and_wait(['だからマヤ、', call_16, ' に勝つ。']);
      await maya.say_and_wait([call_16, ' より全力で、キラキラする。']);
      await maya.say_and_wait('そしたら絶対、ワクワクさせる！');
      await brian.say_and_wait('……ふん。');
      await brian.say_and_wait('いいだろう。全力で来い。潰してやる。');
      await maya.say_and_wait('ふんふん☆ その言葉、お返しするね♪');
      await maya.say_and_wait('だってマヤ、負けないもん！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = 'ファイナルアプローチ';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} l_call_b シンボリルドルフのナリタブライアンへの呼び方
     */
    const f = async (maya, brian, luna, you, callname, call_16, l_call_b) => {
      await you.say_as_passer_by_and_wait('観客たち', [
        { color: maya.color, content: 'マヤノ！ マヤノ！ マヤノ！ マヤノ！' },
      ]);
      await maya.say_and_wait('…………勝った。');
      await maya.say_and_wait(['……勝った。', call_16, ' に、勝った。']);
      await maya.say_and_wait([callname, '！ マヤ……マヤ……！']);
      era.printButton(`「マヤ、すごいぞ」`, 1);
      await era.input();
      await maya.say_and_wait('うん……うん……！');
      await maya.say_and_wait('マヤ、すごいでしょ？ キラキラしてた？');
      era.printButton('「ずっと、いちばんキラキラしてる」', 1);
      await era.input();
      await maya.say_and_wait(['わ～～～～！！ ', callname, '～！！']);
      era.drawLine();
      await brian.say_and_wait('……は……ははっ、まだ息が上がってる。');
      await brian.say_and_wait(
        '完敗だ。全力を出して……負けた。だが……悪くねえ。',
      );
      await brian.say_and_wait('ふん、これが──');
      await luna.say_and_wait(['──', call_16, '！']);
      await luna.say_and_wait('……本当に、いいのか。');
      await brian.say_and_wait('……ああ、そうだ。あれが残ってたな。');
      await brian.say_and_wait('──俺の『引退式』だ。');
      await luna.say_and_wait('揺るがない……その気持ちは、変わらないのか。');
      await luna.say_and_wait(
        '……記者たちはもう集まっている。君の式だ。せめて盛大にやらせてくれ。',
      );
      await brian.say_and_wait('……礼を言う。');
      await you.say_as_passer_by_and_wait('スタッフ', [
        '……',
        brian.get_colored_name(),
        ' 選手、式は5分後の開始予定です。',
      ]);
      await brian.say_and_wait('ああ……わかった。');
      await brian.say_and_wait(
        '──止まるなら、レース場でよかった。学園じゃなく、この芝の上で。',
      );
      await you.say_as_passer_by_and_wait('観客A', [
        'うそだろ！？ ',
        brian.get_colored_name(),
        '！ もっと伝説を見せてくれ！！',
      ]);
      await you.say_as_passer_by_and_wait('観客B', 'お願いだ、引退しないで！');
      await brian.say_and_wait(
        'はあ……何を悲しんでる。次の夢は、また見られる。',
      );
      await brian.say_and_wait('──あの子の上に、な。');
      await you.say_as_passer_by_and_wait('司会', [
        'それでは、',
        brian.get_colored_name(),
        ' の引退式を始めます──',
      ]);
      await maya.say_and_wait('待って──！');
      await maya.say_and_wait([
        'マヤ、反対！ ',
        call_16,
        ' の引退式、中止！！',
      ]);
      await you.say_as_passer_by_and_wait('司会', 'えっ！？ で、でも……');
      await maya.say_and_wait('でもも何も！ こんなのイヤ！ だからダメ！');
      await brian.say_and_wait('……おい。');
      await brian.say_and_wait('いきなり出てくるな。今日の勝者だろうが。');
      await brian.say_and_wait(
        '自分の影響力を考えろ。子供の駄々は、他所でやって──',
      );
      await maya.say_and_wait('マヤ、子供だもん！！');
      await maya.say_and_wait([
        'これから ',
        call_16,
        ' とたくさん走って、オトナの',
        maya.uma_sex_title,
        'になるんだから！',
      ]);
      await maya.say_and_wait(
        'だからこんなこと言っていい！ ワガママもしていい！ だってまだ子供！',
      );
      await maya.say_and_wait([
        'マヤ、まだ ',
        call_16,
        ' と走り足りない！ 次のレース、約束して！',
      ]);
      await brian.say_and_wait('な……なんだと！？');
      await brian.say_and_wait('こじつけがすぎる！ ったく、今日は俺の──');
      await maya.say_and_wait('あなたの引退式じゃない！！');
      await brian.say_and_wait('おい！！');
      await you.say_as_passer_by_and_wait('観客C', 'ぷっ……ははっ！');
      await you.say_as_passer_by_and_wait('観客D', [
        'そうだ、そうだ！ ',
        brian.get_colored_name(),
        '、引退するな！ 1着と走れ！',
      ]);
      await you.say_as_passer_by_and_wait('観客E', [
        '宣戦布告されて逃げるなんて、',
        brian.get_colored_name(),
        ' らしくないだろ！',
      ]);
      await brian.say_and_wait('おい、お前らまで乗っかるな……');
      await maya.say_and_wait([
        'あはは、みんな ',
        call_16,
        ' のこと、よく知ってる！',
      ]);
      await maya.say_and_wait([
        'でもマヤのほうが、もっと知ってる。ねえ、今日の ',
        call_16,
        '──',
      ]);
      await maya.say_and_wait(
        '──またマヤと走りたいでしょ？ もっとワクワクしたいでしょ？',
      );
      await brian.say_and_wait('……！');
      await maya.say_and_wait([
        'ふふん。だからマヤ、',
        call_16,
        ' の願い、叶える！',
      ]);
      await maya.say_and_wait(
        'キラキラしてる人と走り続ければ、マヤ、もっとキラキラなオトナになれるから！',
      );
      await brian.say_and_wait('……なんだ、これは。');
      await brian.say_and_wait('自分のワガママのために、俺に走り続けろ、と。');
      await maya.say_and_wait('うん！');
      await brian.say_and_wait('……ったく。先が思いやられる子供だ。');
      await maya.say_and_wait('すぐオトナになるよ☆');
      await brian.say_and_wait('そういう意味じゃねえ……');
      await luna.say_and_wait(['ふふ……負けを認めなさい、', l_call_b, '。']);
      await luna.say_and_wait('ここにいる誰も、君の引退を望んでいない。');
      await luna.say_and_wait('──君自身も、だ。');
      await luna.say_and_wait('今からでも、別の式に変えられる。');
      await maya.say_and_wait('そうだ、じゃあ！ マヤの宣戦布告式にしよ！');
      await brian.say_and_wait('おい！？ それじゃ主役がお前になる──');
      await maya.say_and_wait('ふん、いいじゃん！ ね、会長！');
      await luna.say_and_wait(
        'ああ、構わない。場が盛り上がる式に変えれば、記者たちも受け入れるだろう。',
      );
      await maya.say_and_wait('I copy☆');
      await brian.say_and_wait('……本当に子供だ。');
      await maya.say_and_wait(
        'あはは☆ だからこそ、大きくなったマヤが楽しみでしょ？ ワクワクするでしょ？',
      );
      await brian.say_and_wait('……ああ。');
      await brian.say_and_wait('悔しいほど、な。');
    };
    f.title = title;
    return f;
  })(),
  sa_adv_game: (() => {
    const title = 'マヤのドキドキ☆肝試し！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     */
    const f = async (maya, teio, you, callname, call_3, t_call_m) => {
      await era.printAndWait([
        '門限を過ぎて、静まり返った校内。',
        you.get_colored_name(),
        ' がトレーナールームへ忘れ物を取りに行く途中──',
      ]);
      await maya.say_and_wait(['あっ！ ', callname, '！ 奇遇だね♪']);
      era.printButton('「こんな夜更けに、何してる？」', 1);
      await era.input();
      await maya.say_and_wait('マヤたちね～、お化け見に来たの☆');
      await maya.say_and_wait(
        'テレビの心霊番組見てたら、学園にも心霊スポットあるって話になって──',
      );
      await teio.say_and_wait([
        'ぜ、絶対ウソだと思うんだけど、',
        t_call_m,
        ' が信じなくて……',
      ]);
      era.printButton('「門限は過ぎてる。戻ろう」', 1);
      await era.input();
      await teio.say_and_wait(
        'そ、そそそそそうでしょ！？ 気になるとこは全部行ったし、もう十分！',
      );
      await maya.say_and_wait(
        'え～！？ あと一か所だけ～！ トレーナールーム行きたい！',
      );
      await maya.say_and_wait([
        'むかしむかし、勝負服が届く前日に事故で亡くなった',
        maya.uma_sex_title,
        'がいて……',
      ]);
      await maya.say_and_wait([
        maya.sex,
        'の幽霊が夜のトレーナールームに出て、『私の勝負服はどこ……』って嘆くんだって！',
      ]);
      await teio.say_and_wait('ひ────！？');
      await teio.say_and_wait('わ、えっと……こ、これ、絶対作り話！');
      await maya.say_and_wait([
        'え、そうとも限らないよ！ ',
        callname,
        '、連れてって～！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は引き下がらないマヤノトップガンに負け、三人でトレーナールームへ向かった。',
      ]);
      await maya.say_and_wait('おーい、お化け～！ どこ～？');
      await teio.say_and_wait([
        maya.sex,
        'を呼ばなくていいよ！ 本当に出たらどうするの～！',
      ]);
      await era.printAndWait(
        '一度も着られなかった勝負服を探して、ここにさまよう幽霊、か……',
      );

      era.printButton('「その幽霊、残念だっただろうな」（パワー+20）', 1);
      era.printButton('「マヤノトップガンたちの後ろに……」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'その幽霊は勝負服を着て、レース場を走りたかったに違いない──そう話していると、',
        ]);
        await maya.say_and_wait([
          'そうだね。',
          maya.sex,
          '、走るの好きだったんだろうな……',
        ]);
        await maya.say_and_wait([
          'マヤが',
          maya.sex,
          'だったら、ひとりぼっちで残念で、ここに来ちゃうと思う！',
        ]);
        era.printButton('「' + maya.sex + 'の残念、埋めたいな」', 1);
        await era.input();
        await maya.say_and_wait('うん……');
        await maya.say_and_wait('そうだ！ マヤ、お化けの分まで走る！');
        await maya.say_and_wait(
          '出られなかったお化けのために、レースいっぱい出て、いい成績出す♪',
        );
        await era.printAndWait('（ガタガタ）');
        await teio.say_and_wait('ひっ！？ 窓が急に音出した！！');
        era.printButton('「' + maya.sex + '、お礼を言いたかったのかも」', 1);
        await era.input();
        await teio.say_and_wait(
          'うわーん～！ イヤ、帰ろ～！ 取り憑かれたらどうするの～！！',
        );
        await maya.say_and_wait('え？ お化けとお友達、楽しそう♪');
        await maya.say_and_wait('ね、お化け☆');
        await maya.say_and_wait('よし！ お化け、マヤ頑張るね！');
        await era.printAndWait([
          maya.get_colored_name(),
          ' は軽やかに走った。背中に追い風が吹いているみたいだった。',
        ]);
      } else {
        await teio.say_and_wait('きゃあああ！！ おばけ～～～～～！！');
        await teio.say_and_wait('わあああ！！ た～す～け～て～！！');
        era.printButton('「追うぞ！」', 1);
        await era.input();
        await maya.say_and_wait('う、うん！');
        await era.printAndWait([
          '急いで ',
          teio.get_colored_name(),
          ' を追ったが、完全に見失った。',
        ]);
        await maya.say_and_wait([
          call_3,
          '、',
          maya.sex,
          '、お化け苦手なんだ……',
        ]);
        era.printButton('「' + maya.sex + '、どこへ行った？」', 1);
        await era.input();
        await maya.say_and_wait('ん……暗くて怖いとこは通らないよね？');
        await maya.say_and_wait('じゃあ簡単！ 行こ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          teio.get_colored_name(),
          ' の通った道を知っている ',
          maya.get_colored_name(),
          ' の後ろについて──',
        ]);
        await maya.say_and_wait(['よかった！ 見つけた、', call_3, '！！']);
        await teio.say_and_wait('……………………');
        era.printButton('「ごめん、今の、脅かして」', 1);
        await era.input();
        await era.printAndWait([
          'なぜか黙っている ',
          teio.get_colored_name(),
          ' を連れて、三人で戻った。',
        ]);
        era.drawLine();
        await maya.say_and_wait(['ふあぁ～、', callname, '、おはよう～']);
        await maya.say_and_wait(
          '結局、昨日お化けに会えなかった～。つまんない。',
        );
        await teio.say_and_wait(
          '会わなくてよかったよ！ もう、心配したんだから！？',
        );
        await teio.say_and_wait('部屋に戻らないし、電話も出ないし！');
        await maya.say_and_wait(['え？ ', call_3, '、一緒に戻ったよね？']);
        await teio.say_and_wait('え？ 私、ひとりで戻ったよ。');
        await maya.say_and_wait([
          '……じゃあ昨日、となりにいた ',
          call_3,
          ' は──',
        ]);
        await you.say_as_passer_by_and_wait('2人', 'え～～～～～！？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_star_wish: (() => {
    const title = '星に願いを';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     */
    const f = async (maya, sunday, you, callname, call_55) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' と一緒に帰る途中、',
        maya.sex,
        'が行きたい場所があると言い、ここへ来た……',
      ]);
      era.printButton('「校舎に忘れ物か？」', 1);
      await era.input();
      await maya.say_and_wait([
        'ちがう！ 聞いて聞いて、今日 ',
        call_55,
        ' からすっごくすごい噂聞いたの～！',
      ]);
      await sunday.used_to_say_and_wait(
        '星空の下、屋上でドキドキした二人は幸せになれる',
      );
      await maya.say_and_wait('きゃ☆ ロマンチック、美しすぎ！');
      await maya.say_and_wait('ね？ ね？ 絶対楽しいよ、一緒に行こ！');
      era.printButton('「仕方ないな」', 1);
      await era.input();
      await maya.say_and_wait(['やった！ これで ', callname, ' と……えへへ！']);
      await maya.say_and_wait(
        'あっ、そうだ！ 途中でだれかに見つかったら失敗！',
      );
      await maya.say_and_wait('You copy？');
      era.printButton('「I copy！」', 1);
      await era.input();
      await maya.say_and_wait('よし！ じゃあステルスモード……テイクオフ☆');
      await maya.say_and_wait('──隊長機より各部隊へ！ 敵機の影なし……以上！');
      await maya.say_and_wait('えへへ！ これなら『シュッ──！』て屋上まで……');
      await era.printAndWait('（パタパタ……パタパタ……！）');
      await maya.say_and_wait(['……！！ ', callname, '、今の……']);
      era.printButton('「足音だ」', 1);
      await era.input();
      await maya.say_and_wait('しかも……こっちに来てない！？ ど、どうする！');
      era.printButton('「隠れて、相手が去るのを待つ」（賢さ+20）', 1);
      era.printButton('「屋上へダッシュ！」（スピード+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('う、うん！ じゃああの教室で──');
        await era.printAndWait('（……タタタ……タタ……）');
        await maya.say_and_wait(
          '……えへへ、隠れんぼみたいで、ドキドキしてきた♪',
        );
        era.printButton('「声、小さいほうがいい！」', 1);
        await era.input();
        await maya.say_and_wait('あわわ！ ダメダメ！ 小さく、しー……');
        await maya.say_and_wait(
          ['ふふ……', callname, ' のまつげ、くるんとしててかわいい♪'],
          true,
        );
        await maya.say_and_wait('それに……いつもより……かっこいい……', true);
        await maya.say_and_wait('……ふわ……ふわわ。', true);
        era.printButton('「マヤノトップガン？」', 1);
        await era.input();
        await maya.say_and_wait('……あぁ～～ダメ────！！');
        await sunday.say_and_wait([
          'わっ☆ びっくりした！ ',
          maya.get_colored_name(),
          ' も教室に忘れ物？？',
        ]);
        await maya.say_and_wait(['な、なに？ ', call_55, '！？']);
        era.printButton('「見つかったな」', 1);
        await era.input();
        await maya.say_and_wait(
          'あぁ────！！ そうだった！ 緊張しすぎて忘れてた～～！',
        );
        await sunday.say_and_wait('そっか！ あの魔法、使った？？ でもでも……');
        await sunday.say_and_wait(
          'ハートがドキドキしてたら、もう美しい☆ でしょ★',
        );
        await maya.say_and_wait('む…………たしかに、そうかも。魔法なくても……');
        era.printButton('「どういう意味だ？」', 1);
        await era.input();
        await maya.say_and_wait(
          'あわわ！！ なんでもない、なんでもない！ 失敗したし、早く帰ろ！！',
        );
        await era.printAndWait([
          'マヤノトップガンに急かされ、',
          you.get_colored_name(),
          ' は魔法の本当の意味がわからないまま戻った……',
        ]);
      } else {
        await maya.say_and_wait(
          'そっか！ 走って逃げて、見つからなきゃいいんだ！',
        );
        await maya.say_and_wait(['じゃあ ', callname, '！ 手、出して。']);
        era.printButton('「え？」', 1);
        await era.input();
        await maya.say_and_wait(
          'マヤのほうが速いから！ ほらほら、早く、早く！',
        );
        await era.printAndWait([
          '近づく足音に急かされて、',
          maya.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手を握った──',
        ]);
        await maya.say_and_wait([
          callname,
          '、ファイトファイト！ あとちょっと──！',
        ]);
        await maya.say_and_wait(['到着！！ やった、', callname, '！']);
        era.printButton('「よ、よかった……」', 1);
        await era.input();
        await maya.say_and_wait('最後にここで星、見て……');
        await maya.say_and_wait(['わっ……！ ', callname, '、空！ 空見て！！']);
        await maya.say_and_wait(
          'すごい、超すごい！ 夜空ってこんなにキラキラしてた！？',
        );
        era.printButton('「頑張った甲斐があったな！」', 1);
        await era.input();
        await maya.say_and_wait(
          'そっか……うん！ 星がきれいなのも、マヤたちが頑張ったからかも！',
        );
        await maya.say_and_wait('……よし！ そろそろ帰ろ！');
        era.printButton('「もう帰るのか？」', 1);
        await era.input();
        await era.printAndWait(
          '噂どおりなら、「星空の下の屋上でドキドキ」しなければ……',
        );
        await maya.say_and_wait('うん！ 帰る！ だってマヤ、今わかっちゃった。');
        await maya.say_and_wait('なにもしなくても、マヤたち……');
        await maya.say_and_wait('と、とにかく！ そういうこと！ 早く帰ろ？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は照れる ',
          maya.get_colored_name(),
          ' を微笑んで見て……満天の星の下、一緒に帰った。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweet_present: (() => {
    const title = '甘いキモチをキミに♪';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} hishi ヒシアケボノ
     * @param {CharaTalk} flower ニシノフラワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_28 マヤノトップガンのヒシアケボノへの呼び方
     * @param {PrintedSpan} call_51 マヤノトップガンのニシノフラワーへの呼び方
     */
    const f = async (maya, hishi, flower, you, callname, call_28, call_51) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' が食堂の前を通ったとき──',
      ]);
      await maya.say_and_wait(
        '今日はがんばってお菓子作るよ～♪ お二人とも、よろしくね！',
      );
      await flower.say_and_wait('はい……♪ 指導役として、精一杯お手伝いします。');
      await hishi.say_and_wait(
        'アタシもお菓子得意だよ～。大きくておいしいの作ろ～♪',
      );
      era.printButton('「食堂でお菓子？」', 1);
      await era.input();
      await maya.say_and_wait(['あ、', callname, ' だ～！']);
      await maya.say_and_wait([
        'あのね、',
        callname,
        ' のいつも教えてくれるお礼に、お菓子作ろうと思って！',
      ]);
      await maya.say_and_wait([
        '厨房のおばちゃんに話したら、',
        maya.sex,
        '、ここのキッチン使っていいよって♪',
      ]);
      await maya.say_and_wait([
        'おいしいケーキできたら、',
        callname,
        ' のハート──',
      ]);
      era.printButton('「ハート？」', 1);
      await era.input();
      await maya.say_and_wait([
        'な、なんでもない！ よかったら見ててね、',
        callname,
        '♪',
      ]);
      await flower.say_and_wait('次はお砂糖を入れて、よく混ぜて……');
      await maya.say_and_wait('うんうん～♪');
      await era.printAndWait([
        maya.get_colored_name(),
        ' は慣れない料理に苦戦しつつも、すごく楽しそうだった。',
      ]);
      era.printButton(`「がんばれ、マヤ！」（スタミナ+20）`, 1);
      era.printButton('「俺も作るよ」（賢さ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          maya.sex,
          'の頑張る姿を見て、',
          you.get_colored_name(),
          ' はつい声をかけてしまった。',
        ]);
        await era.printAndWait('──同時に、お腹が空きすぎて、大きく鳴った。');
        await hishi.say_and_wait(
          'あはは♪ もうすぐできるから、もうちょっと待ってね～',
        );
        await flower.say_and_wait(
          'あの、空き時間に作ったマシュマロがあるんです……一つ、いかがですか？',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' はありがたく、',
          flower.get_colored_name(),
          ' と ',
          hishi.get_colored_name(),
          ' のマシュマロを受け取った。',
        ]);
        era.printButton('「おいしい！ 好みの味だ！」', 1);
        await era.input();
        await flower.say_and_wait('ほ、本当ですか？ よかった……お口に合って。');
        await maya.say_and_wait('ふん！！');
        await maya.say_and_wait(
          'おいしい……好みの味……それ、マヤが言われたいやつ！',
          true,
        );
        await maya.say_and_wait('こうなったら……', true);
        await maya.say_and_wait([
          call_51,
          '、',
          call_28,
          '！ マヤ、ひとりでケーキ作る！',
        ]);
        await hishi.say_and_wait('え？ 大丈夫～？');
        await maya.say_and_wait([
          '全然だいじょうぶ！ マヤ、',
          callname,
          ' の好みいちばんわかってるもん！',
        ]);
        await maya.say_and_wait(
          [
            maya.couple_title,
            'に勝つために、マヤひとりで、もっとすごいの作る！',
          ],
          true,
        );
        await maya.say_and_wait('う、ううう～');
        await era.printAndWait([
          maya.get_colored_name(),
          ' のケーキは完成した。ただし色も形も、うまく言葉にできない……',
        ]);
        await maya.say_and_wait([
          '味は合うはず！ ',
          callname,
          ' の好きな食べ物、参考にしたから！',
        ]);
        await maya.say_and_wait('マヤの愛、たっぷり入れてるし……食べないの？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は覚悟を決めて、',
          maya.get_colored_name(),
          ' のケーキを口に入れた──',
        ]);
        era.printButton('「う、おいしい！」', 1);
        await era.input();
        await maya.say_and_wait('ほんと！？');
        await maya.say_and_wait([
          '本当においしい！？ ',
          callname,
          ' の好きな味！？',
        ]);
        era.printButton(`「うん、マヤはすごいな！」`, 1);
        await era.input();
        await maya.say_and_wait('わ～♪ やった、やったぁ～～～～～！！');
        await era.printAndWait([
          '料理を褒められた ',
          maya.get_colored_name(),
          ' は、そのあとずっとご機嫌で、にこにこトレーニングを終えた。',
        ]);
      } else {
        await era.printAndWait([
          maya.couple_title,
          'の料理姿を見て、',
          you.get_colored_name(),
          ' も自分で作りたくなった。',
          you.get_colored_name(),
          ' がそう伝えると──',
        ]);
        await flower.say_and_wait(
          'え、興味があるなら一緒にどうですか？ 手順、お伝えします……！',
        );
        await maya.say_and_wait([
          'ちょっとちょっと！ ',
          callname,
          ' はマヤの料理、見てる係だよ～！',
        ]);
        era.printButton('「俺もお礼がしたいんだ」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……！']);
        await maya.say_and_wait('I copy☆ それなら大歓迎♪');
        await hishi.say_and_wait(
          'みんなで仲よく作ると～、お菓子もっとおいしくなるよ♪',
        );
        await era.printAndWait(
          'がんばってケーキはできた。ただし、ちょっと焦げて……',
        );
        await maya.say_and_wait(['わ～！ ', callname, ' がケーキくれた～♪']);
        await maya.say_and_wait('もぐもぐ……あむ！');
        await maya.say_and_wait('に、にがみはあるけど、これが大人の味だよね♪');
        era.printButton('「焦げただけだ！ 食べなくていい！」', 1);
        await era.input();
        await maya.say_and_wait('やだ～！');
        await maya.say_and_wait([
          'マヤ、',
          callname,
          ' の気持ち、残さず全部食べる！',
        ]);
        await maya.say_and_wait([
          'だから ',
          callname,
          ' も、マヤのケーキ食べて。',
        ]);
        await maya.say_and_wait('はい～♪');
        await maya.say_and_wait('えへへ～！ マヤの感謝、届いた？');
        era.printButton('「もちろん！」', 1);
        await era.input();
        await maya.say_and_wait('よかった～♪');
        await flower.say_and_wait(
          'そ、そんなに近く……見てるだけでドキドキします！',
        );
        await hishi.say_and_wait('いいね、いいね。めでたし、めでたし～♪');
        await era.printAndWait([
          '友達ふたりの助けで、',
          maya.get_colored_name(),
          ' のお菓子は大成功だった。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_dokidoki_live: (() => {
    const title = 'マヤのドキドキ☆配信！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     */
    const f = async (maya, sunday, you, callname, call_3, call_55) => {
      await era.printAndWait([you.get_colored_name(), ' と出かけた帰り道──']);
      await maya.say_and_wait([
        'ねえねえ！ ',
        callname,
        '、ネット配信って見る？',
      ]);
      era.printButton('「急にどうした？」', 1);
      await era.input();
      await maya.say_and_wait('実はね、マヤも配信はじめたの！');
      await maya.say_and_wait([
        '流行りの曲、踊ったり～ ',
        call_3,
        ' とゲームしたり～',
      ]);
      await maya.say_and_wait('楽しいこと、いっぱいするの！');
      await maya.say_and_wait([callname, ' も見てよ！ ね？ ね？']);
      era.printButton('「わかった」', 1);
      await era.input();
      await era.printAndWait([
        maya.get_colored_name(),
        ' の熱いお願いで、',
        you.get_colored_name(),
        ' は次の配信を見る約束をした。',
      ]);
      era.drawLine({ content: '数日後' });
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        maya.get_colored_name(),
        ' の配信チャンネルを開くと──',
      ]);
      await maya.say_and_wait(
        'みんなのハートに Landing☆ マヤチャンネル、はじまるよ～♪',
      );
      await maya.say_and_wait(['今日のゲストはお友だち、', call_55, '！']);
      await sunday.say_and_wait('ハロー☆ みんな、Marvelous な一日？');
      await you.say_as_passer_by_and_wait('視聴者A', 'マヤ、待ってたよ～！！');
      await you.say_as_passer_by_and_wait(
        '視聴者B',
        'よくわかんないけど、Marvelous☆',
      );
      await maya.say_and_wait('コメントありがとう～！ マヤもみんな、待ってた♪');
      await sunday.say_and_wait('今日はふたりで、Marvelous な場所に突撃☆');
      await maya.say_and_wait(
        'いくよ～！ コーヒーカップで超高速回転チャレンジ！',
      );
      await sunday.say_and_wait('あはははは～☆ くるくるして、Marvelous★');
      await maya.say_and_wait([
        'つぎはゲームセンター！ ',
        call_3,
        ' のスコア、超える！',
      ]);
      await sunday.say_and_wait('イエーイ☆ 超ハイスコア、Marvelous★');
      await era.printAndWait(
        'そのあとふたりはあちこちの名所を駆け回り、元気いっぱいに遊んで視聴者を笑わせた。',
      );
      await era.printAndWait('太陽みたいなあかるさ。人を惹きつける魅力──');
      await era.printAndWait([
        '配信を見て、',
        you.get_colored_name(),
        ' はまた ',
        maya.get_colored_name(),
        ' の魅力を確かめた気がした。',
      ]);
      await maya.say_and_wait('あ、そろそろお別れ。みんな、楽しかった？');
      await era.printAndWait([
        maya.get_colored_name(),
        ' の問いかけを聞いて、',
        you.get_colored_name(),
        ' は気づいたらコメントを送っていた。',
      ]);
      era.printButton('「こっちも楽しかった！」（スタミナ&パワー+10）', 1);
      era.printButton('「ずっと応援する。レース、がんばれ！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('えへへ、ありがとう！');
        await maya.say_and_wait(
          'ワクワクとドキドキ、画面の向こうまで届いたんだね♪',
        );
        await maya.say_and_wait('みんなのコメント、マヤもすっごく嬉しい☆');
        await era.printAndWait([
          'そう言って笑う ',
          maya.get_colored_name(),
          ' は、とてもキラキラしていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は決めた──この笑顔をこれからも見るために、',
          you.get_colored_name(),
          ' はこれからも',
          maya.sex,
          'の味方でいる。',
        ]);
      } else {
        await maya.say_and_wait([
          'もちろん！ マヤは、かわいいだけの',
          maya.phy_sex_title,
          'じゃないもん♪',
        ]);
        await maya.say_and_wait([
          'レースで見せてあげる。大人の',
          maya.phy_sex_title,
          'には、いろんな顔があるって！',
        ]);
        await maya.say_and_wait('だ・か・ら☆ レースも配信も、応援してね♪');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、競技者としての ',
          maya.get_colored_name(),
          ' の魅力をよく知っている。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、配信だけで',
          maya.sex,
          'を知った視聴者にも、',
          maya.sex,
          'がレースで輝く姿を見てほしいと思った。',
        ]);
      }
      era.drawLine();
      await maya.say_and_wait(['わ～！ ', callname, '、昨日の配信見た？']);
      era.printButton('「コメントもしたぞ」', 1);
      await era.input();
      await maya.say_and_wait('えっ～！？ もしかしてこの人～！？');
      await era.printAndWait([
        maya.get_colored_name(),
        ' が指したコメントは、たしかに ',
        you.get_colored_name(),
        ' のものだった。',
      ]);
      await maya.say_and_wait('ねえねえ、マヤ当たった？');
      era.printButton('「すごいな！ よくわかったな」', 1);
      await era.input();
      await maya.say_and_wait([
        'このコメント、',
        callname,
        ' がそばにいるときみたいで、見てたら落ち着いてあったかくなった！',
      ]);
      await maya.say_and_wait(
        'ていうか、いつも一緒なんだから、直接言えばいいのに～♪',
      );
      await era.printAndWait([
        'そう言いながらも、',
        maya.get_colored_name(),
        ' は嬉しそうだった。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_excited_live: (() => {
    const title = 'マヤのルンルン☆配信！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([maya.get_colored_name(), ' と出かけた帰り道──']);
      await maya.say_and_wait([
        'そうだ、',
        callname,
        '！ 前にネット配信の話したよね？',
      ]);
      await maya.say_and_wait(
        'そのあと視聴者がどんどん増えて、マヤのチャンネル、いま超人気♪',
      );
      await era.printAndWait('スマホで配信のアーカイブを見ると、たしかに──');
      await you.say_as_passer_by_and_wait('視聴者A', 'マヤ、いつもかわいい！');
      await you.say_as_passer_by_and_wait('視聴者B', 'マヤ大好き☆');
      await era.printAndWait('熱いコメントがたくさん並んでいた。');
      await maya.say_and_wait('でしょ？ マヤの人気、ウナギのぼり☆');
      await maya.say_and_wait(
        'それでねそれでね！ 次の配信では、今までと違うマヤを見せたいの！',
      );
      await maya.say_and_wait([
        '……でも、なにしよう～？ ',
        callname,
        '、いいアイデアある？',
      ]);
      era.printButton('「練習してるところ、見せたらどうだ？」', 1);
      await era.input();
      await maya.say_and_wait(['それだ！ ', callname, '、頭の回転はやい！']);
      await maya.say_and_wait(
        'マヤの本気、見たら、みんなもっと好きになるよね！',
      );
      await maya.say_and_wait([
        'だ・か・ら☆ アイデア出した ',
        callname,
        ' に、撮影お願いしていい～？',
      ]);
      await maya.say_and_wait(
        '配信が人気になったら、レースの走りも注目されるよ～',
      );

      era.printButton('「わかった。歌ってるところを撮る！」（スピード+20）', 1);
      era.printButton('「わかった。走ってるところを撮る！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('うん！ ステージへ、Take Off☆');
        era.drawLine();
        await maya.say_and_wait(
          'みんなのハートに Landing☆ マヤチャンネル、はじまるよ～♪',
        );
        await you.say_as_passer_by_and_wait('視聴者C', 'うおおおおおおお！！');
        await you.say_as_passer_by_and_wait(
          '視聴者D',
          'マヤ、今日も元気だね～☆',
        );
        await you.say_as_passer_by_and_wait('視聴者E', 'ここどこ～？');
        await maya.say_and_wait('えへへ♪ コメントありがとう！');
        await maya.say_and_wait('今日はね、ライブの練習、見せちゃう！');
        await maya.say_and_wait([
          '撮影してくれるのはこちら！ マヤの安心パートナー、',
          callname,
          '！',
        ]);
        await maya.say_and_wait([
          you.sex,
          '、トレーニングも手伝ってくれるし、マヤも褒めてくれる♪',
        ]);
        await you.say_as_passer_by_and_wait('視聴者F', 'ライブ、楽しみ～');
        await you.say_as_passer_by_and_wait(
          '視聴者G',
          '俺もトレーナーになりたい！！',
        );
        await you.say_as_passer_by_and_wait('視聴者H', '超うらやましい。');
        await maya.say_and_wait(
          'もう、みんなったら～♪ じゃあ、マヤのライブ、はじまるよ！',
        );
        await maya.say_and_wait('いち、に☆キラ、キラ☆ヘビー☆セクシー☆');
        await maya.say_and_wait('さいごは、かわいく着地！');
        await you.say_as_passer_by_and_wait('視聴者I', 'か～わ～い～い～！！');
        await you.say_as_passer_by_and_wait('視聴者J', '歌もダンスも最高！');
        await maya.say_and_wait('たしかに……いい感じでしょ♪');
        await maya.say_and_wait(
          'マヤがレースで勝ったら、ウイナーズステージで本人見せちゃう☆',
        );
        await maya.say_and_wait('だからみんな、応援してね！');
      } else {
        await maya.say_and_wait('うん！ グラウンドへ、Take Off☆');
        era.drawLine();
        await maya.say_and_wait(
          'みんなのハートに Landing☆ マヤチャンネル、はじまるよ～♪',
        );
        await you.say_as_passer_by_and_wait('視聴者C', 'やったーーー！！');
        await you.say_as_passer_by_and_wait('視聴者D', 'Landing 了解☆');
        await you.say_as_passer_by_and_wait('視聴者E', 'ジャージ！？');
        await maya.say_and_wait('えへへ～♪ コメントありがとう！');
        await maya.say_and_wait('今日はね、マヤのトレーニング、見せちゃう！');
        await maya.say_and_wait([
          '撮影してくれるのはこちら！ マヤの安心パートナー、',
          callname,
          '！',
        ]);
        await maya.say_and_wait([
          you.sex,
          '、トレーニングも手伝ってくれるし、マヤも褒めてくれる♪',
        ]);
        await you.say_as_passer_by_and_wait(
          '視聴者F',
          'トレーニング、がんばれ～',
        );
        await you.say_as_passer_by_and_wait('視聴者G', 'わたしもマヤの味方！');
        await you.say_as_passer_by_and_wait(
          '視聴者H',
          'トレーナー、交代して。？',
        );
        await maya.say_and_wait(
          'もう、みんなったら～♪ じゃあ、トレーニングはじめるよ！',
        );
        await maya.say_and_wait('はあ……はあ……！');
        await maya.say_and_wait('ゴール！ みんな、マヤの走りどうだった？');
        await you.say_as_passer_by_and_wait('視聴者I', '超はやい！');
        await you.say_as_passer_by_and_wait('視聴者J', 'かっこよすぎ！');
        await maya.say_and_wait('たしかに……いい感じでしょ♪');
        await maya.say_and_wait(
          'こうなったら今日は、マヤのかっこいいとこ、たっぷり見せちゃう！',
        );
        await maya.say_and_wait('まばたき、禁止だよ♪');
        await era.printAndWait([
          '本人もやる気満々だったので、',
          you.get_colored_name(),
          ' はチャンスと見て、',
          maya.sex,
          'にいつもの倍、トレーニングさせた。',
        ]);
      }
      era.drawLine({ content: '翌日' });
      await maya.say_and_wait('わ～！ 視聴者、また増えた♪');
      await maya.say_and_wait('コメント数も、今まででいちばん！');
      era.printButton(`「よかったな、マヤ！」`, 1);
      await era.input();
      await maya.say_and_wait([
        'うん♪ ',
        callname,
        ' もニコニコしてるから、マヤも嬉しい♪',
      ]);
      await maya.say_and_wait('よーし！ このまま、もっと人気者になる！');
      await era.printAndWait([
        '人気が伸び続ける ',
        maya.get_colored_name(),
        ' は、配信にますます熱を入れていた。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_kirakira_kessin: (() => {
    const title = 'マヤのキラキラ☆決心！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '配信を始めた ',
        maya.get_colored_name(),
        ' は、生まれ持った魅力で有名配信者になった。',
      ]);
      await era.printAndWait([
        'なのに、なぜか',
        maya.sex,
        'は配信をしなくなった。今日もこうして、一日中外出──',
      ]);
      era.printButton('「……もう配信しないのか？」', 1);
      await era.input();
      await maya.say_and_wait(
        'あのね……飽きちゃった！ 遊びに出たほうが楽しいし！',
      );
      await maya.say_and_wait('褒められるのは嬉しいけど、もう十分！');
      era.printButton('「配信、楽しそうだったのに」', 1);
      await era.input();
      await maya.say_and_wait('も、もう！ 配信の話はなし！');
      await maya.say_and_wait('マヤ、今日発売の雑誌買いに行かなきゃ。行くね！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' は話を切り上げ、振り向かずに去っていった。',
      ]);
      era.printButton('「でも、気になるな……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        maya.sex,
        'の配信アーカイブを開き、手がかりがないか探した──',
      ]);
      era.printButton('「俺への批判コメントが増えてる……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' が以前',
        maya.sex,
        'の撮影を手伝ってから、',
        you.get_colored_name(),
        ' を妬むコメントが増えていた。',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' はそれを見て、落ち込んだのかもしれない。',
      ]);
      era.printButton(`「マヤと話さないと……」`, 1);
      await era.input();
      await era.printAndWait([
        maya.sex,
        'がいそうな場所は多い。',
        you.get_colored_name(),
        ' は一つずつ探し始めた。',
      ]);
      await maya.say_and_wait(['わ、', callname, '！？']);
      era.printButton('「やっと見つけた……！」', 1);
      await era.input();
      await maya.say_and_wait('もしかして……マヤのこと、探してた？');
      era.printButton('「配信をやめた理由、わかったから」', 1);
      await era.input();
      await maya.say_and_wait('そ、その話はもういいの。理由は今言ったとおり……');
      era.printButton(
        '「気を遣ってくれてありがとう」（スピード&スタミナ+10）',
        1,
      );
      era.printButton('「批判コメント、気にしてない」（パワー+20）', 2);
      era.printButton('「配信をやめるのはもったいない」（賢さ+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            maya.sex,
            'に、',
            you.get_colored_name(),
            ' への批判コメントを見たこと、そして',
            maya.sex,
            'の優しさに礼を言った──',
          ]);
          await maya.say_and_wait('ち、ちがうよ！ マヤ、本当に飽きたの！');
          await maya.say_and_wait(
            '配信やめてからわかった。マヤがいちばん輝けるの、やっぱりレース場！',
          );
          await maya.say_and_wait([
            'これからもマヤは ',
            callname,
            ' のそばで、レースいっぱい出て、いい成績出して──',
          ]);
          await maya.say_and_wait(
            '今よりずっと、たくさんの人をメロメロにする～！',
          );
          era.printButton(`「マヤ……」`, 1);
          await era.input();
          await maya.say_and_wait('も、もう～！ そんな顔しないで！');
          await maya.say_and_wait([
            callname,
            ' と一緒なら、なにしても楽しいもん！',
          ]);
          await era.printAndWait([
            maya.get_colored_name(),
            ' の言葉を聞いて、',
            you.get_colored_name(),
            ' は黙ってうなずいた。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' はわかった。',
            maya.sex,
            'が ',
            you.get_colored_name(),
            ' のためについた優しい嘘を、わざわざ暴く必要はない。',
          ]);
          await era.printAndWait([
            'その代わり、',
            you.get_colored_name(),
            ' はトレーナーとして',
            maya.sex,
            'の願いを叶え、',
            maya.sex,
            'をキラキラさせる──',
          ]);
          era.printButton('「必ず、幸せにしてみせる！」', 1);
          await era.input();
          await maya.say_and_wait('えっ！？');
          await maya.say_and_wait([callname, '！ 今の、それ……！？']);
          era.printButton(
            '「誰より輝く' + maya.uma_sex_title + 'にしてみせる！」',
            1,
          );
          await era.input();
          await maya.say_and_wait('あ……なんだ、そういう意味か。');
          await maya.say_and_wait('じゃあマヤも誓う！');
          await maya.say_and_wait([
            'マヤ、星よりキラキラな',
            era.get('cflag:24:性别') === 1 ? '紳士' : '淑女',
            'になってみせる！',
          ]);
          await maya.say_and_wait(['──', callname, ' と一緒に☆']);
          break;
        case 2:
          await era.printAndWait([
            'だから前みたいに配信を続けてほしい、と ',
            you.get_colored_name(),
            ' が',
            maya.sex,
            'に伝えると──',
          ]);
          await maya.say_and_wait('マヤ、気になる！');
          await maya.say_and_wait([
            '悔しいし、むかつく！ ',
            callname,
            '、いつもあんなに頑張ってるのに！',
          ]);
          await maya.say_and_wait([
            'トレーニングも撮影も、',
            callname,
            ' はずっとマヤを助けてくれて──',
          ]);
          await maya.say_and_wait('なのにマヤのせい……マヤのせいなのに……');
          await maya.say_and_wait([
            callname,
            ' の大バカ！ もっとマヤを叱ってよ～～～～～！！',
          ]);
          await maya.say_and_wait('……うっ。');
          era.printButton('「悪い」', 1);
          await era.input();
          await maya.say_and_wait('うぅ～、そこなんだよ……');
          await maya.say_and_wait([
            callname,
            ' の優しさは好き。でも優しすぎるのは、マヤにだけ向けて！',
          ]);
          await maya.say_and_wait(
            '『邪魔』とか『消えろ』のコメントには、怒っていいんだよ！',
          );
          era.printButton('「邪魔かどうかは、レースで決めよう」', 1);
          await era.input();
          await maya.say_and_wait([callname, '……']);
          await maya.say_and_wait('……もう！ ほんと、困っちゃう！');
          await maya.say_and_wait([
            'だいじょうぶ。優しい ',
            callname,
            ' のために、マヤが勝つ！',
          ]);
          await maya.say_and_wait('そしたらみんなに、思い知らせてやる！');
          await era.printAndWait([
            you.get_colored_name(),
            ' はうなずき、夜空を見上げた。未来を予告するように、星がいっぱい瞬いていた。',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' への批判コメントを見ていた。だが、それで配信をやめるのはもったいない。',
          ]);
          await era.printAndWait([
            '「みんな、配信見て楽しんでたじゃないか」と ',
            you.get_colored_name(),
            ' が',
            maya.sex,
            'に言うと──',
          ]);
          await maya.say_and_wait([
            'それはそう。でも、',
            callname,
            ' にひどいこと言うのは、マヤイヤ……',
          ]);
          era.printButton('「今の気持ちを伝えれば、わかってもらえる」', 1);
          await era.input();
          await maya.say_and_wait('……わかった。マヤ、もう一回みんなに話す。');
          await maya.say_and_wait(
            'あの……みんな、久しぶり。マヤチャンネルへようこそ。',
          );
          await you.say_as_passer_by_and_wait('視聴者A', 'マヤ！？ 本人！？');
          await you.say_as_passer_by_and_wait(
            '視聴者B',
            '会えなくて寂しかった！',
          );
          await you.say_as_passer_by_and_wait('視聴者C', '元気なさそうだね。');
          await maya.say_and_wait(
            'えへへ、ごめん。今日はみんなに伝えたいことがあって──',
          );
          await era.printAndWait([
            'そこまで言って、',
            maya.get_colored_name(),
            ' はうつむいた。',
            maya.sex,
            'はどう切り出せばいいか、迷っているのだろう。',
          ]);
          era.printButton(`（マヤ、がんばれ……！）`, 1);
          await era.input();
          await maya.say_and_wait(
            '……配信、楽しかった。みんな見てくれて、嬉しかった。',
          );
          await maya.say_and_wait([
            'でもね、',
            callname,
            ' へのよくないコメント、マヤは辛かった。',
          ]);
          await maya.say_and_wait([
            'マヤと ',
            callname,
            ' は『レースで勝つ～！』って、ずっと頑張ってて……',
          ]);
          await maya.say_and_wait(
            '応援してほしい。でもみんな、遊んでないマヤは……嫌い？',
          );
          await you.say_as_passer_by_and_wait('視聴者D', '大好き！！');
          await you.say_as_passer_by_and_wait('視聴者E', 'マヤ、ごめん。');
          await you.say_as_passer_by_and_wait('視聴者F', '言いすぎちゃった……');
          await maya.say_and_wait(
            'よかった……でも、マヤチャンネルは、しばらくお別れ。',
          );
          era.printButton('「えっ！？」', 1);
          await era.input();
          await maya.say_and_wait(
            '休み時間に走っててわかった！ マヤがいちばんキラキラできるの、レース場だよ。',
          );
          await maya.say_and_wait(
            'ちょっと寂しいけど……もっとすごいマヤ、見せたい！',
          );
          await you.say_as_passer_by_and_wait('視聴者G', '本当にお別れ？');
          await you.say_as_passer_by_and_wait('視聴者H', 'つらい……');
          await maya.say_and_wait('みんな……');
          await you.say_as_passer_by_and_wait('視聴者I', 'マヤ、応援する。');
          await you.say_as_passer_by_and_wait('視聴者J', 'わたしも！');
          await you.say_as_passer_by_and_wait('視聴者K', 'マヤ、見に行く！');
          await maya.say_and_wait(
            'うん！ レースならいつでも会える！ マヤもレース場で待ってる！',
          );
          await era.printAndWait(
            'そのあと開かれた模擬レースでは、現地に来て応援するファンが、いつもより多かった。',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_taisecu_hito: (() => {
    const title = 'マヤの大切な人！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} fuji フジキセキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} f_call_m フジキセキのマヤノトップガンへの呼び方
     */
    const f = async (maya, fuji, you, callname, f_call_m) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は一緒に出かけた ',
        maya.get_colored_name(),
        ' を、寮の前まで送った。',
      ]);
      await maya.say_and_wait([
        'えへへ！ 今日も超楽しかった！ ',
        callname,
        ' との……デ、デート♪',
      ]);
      era.printButton('「楽しめてよかった」', 1);
      await era.input();
      await maya.say_and_wait(
        'そうだ！ マヤの部屋来てよ～！ ドラマみたいに、まずお茶して──',
      );
      await fuji.say_and_wait(
        'おやおや、寮長として見逃すわけにはいきませんね。',
      );
      await maya.say_and_wait('あっ！ パパに見つかった～');
      era.printButton('「パパ……？」', 1);
      await era.input();
      await maya.say_and_wait(
        'あれだよ！ ドラマって、玄関先でパパにバッタリ、よくあるでしょ？',
      );
      await fuji.say_and_wait(
        'ははは、パパですか～。寮長は養父母のようなもの、とも言えますね。',
      );
      await maya.say_and_wait(
        'じゃあ……パパ、紹介するね！ この人、マヤの大切な人☆',
      );
      await fuji.say_and_wait([
        'なんと？ 私の',
        era.get('cflag:24:性别') === 1 ? '息子' : '娘',
        'の大切な人、ですか～？ 本当ですか？',
      ]);
      era.printButton('「それは……」（スピード+20）', 1);
      era.printButton('「……実は、ほかに大切な人がいる」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait([
          'きゃ☆ ',
          callname,
          '、照れてる！ かわいい！',
        ]);
        await fuji.say_and_wait(
          'ふふ、冗談はここまで。お二人の仲は、本当に良さそうですね。',
        );
        await fuji.say_and_wait([
          f_call_m,
          ' がこんなに元気なのも、そのおかげですか？',
        ]);
        await maya.say_and_wait(
          'えへへ！ だってマヤたち、将来を約束したもん～♪',
        );
        era.printButton('「契約、ってところかな」', 1);
        await era.input();
        await maya.say_and_wait([
          'ふん～！ ',
          callname,
          ' ったら、こういうときは『うん』……でしょ？',
        ]);
        await fuji.say_and_wait([
          'ははは、なるほど。',
          f_call_m,
          ' の言うとおりですね。',
        ]);
        await fuji.say_and_wait([
          'これから ',
          f_call_m,
          ' を、よろしくお願いします。',
        ]);
        await fuji.say_and_wait(
          '……冗談です。本物の父親みたいでしょう？ ふふ。',
        );
        await fuji.say_and_wait([
          'では私はこれで。もうすぐ夕食です、',
          f_call_m,
          ' も一緒にどうぞ。',
        ]);
        await maya.say_and_wait('うん！ ……あ、行く前に。');
        await maya.say_and_wait([
          callname,
          '、褒められたね！ これで正式な顔合わせもだいじょうぶ☆',
        ]);
        era.printButton('「正式な顔合わせ……？」', 1);
        await era.input();
        await maya.say_and_wait('じゃあ行くね！ また明日～♪');
        await era.printAndWait([
          '……とにかく、この先も ',
          maya.get_colored_name(),
          ' と一緒に頑張ろうと思って、',
          you.get_colored_name(),
          ' は気合を入れた。',
        ]);
      } else {
        await maya.say_and_wait('ええええ～～～！？');
        await maya.say_and_wait(
          'なにそれ！？ マヤ知らない！ どういうこと──！？',
        );
        await fuji.say_and_wait('なるほど。遊び上手ですね～？');
        await maya.say_and_wait('う、うそ……マヤとは遊び……！？');
        era.printButton('「冗談だ」', 1);
        await era.input();
        await maya.say_and_wait('……え？ 冗談？');
        await fuji.say_and_wait('はははは！ そうです。からかいもここまで。');
        await maya.say_and_wait(
          'えっ！？ 今の、ふたりともマヤをからかってた！？',
        );
        await maya.say_and_wait(
          'ふん！ ひどい、ひどすぎ！ マヤ、今ほんとうに辛かった～！',
        );
        era.printButton('「ごめんごめん」', 1);
        await era.input();
        await maya.say_and_wait('ふん──！ なに言っても、マヤ許さない！');
        await fuji.say_and_wait([
          'おやおや、',
          maya.sex,
          'は本当にあなたが好きなんですね。このまま仲が悪くなるのは、私も忍びない……',
        ]);
        await fuji.say_and_wait([
          'そうだ！ ',
          f_call_m,
          '、食堂でケーキフェスをやっているのは知っていますか？',
        ]);
        await maya.say_and_wait(
          '……知ってる。行きたいけど、チケット取れなくて……',
        );
        await fuji.say_and_wait(
          '部屋に二枚余っています。どうです？ 仲直りのお茶、二人でいかがですか。',
        );
        await maya.say_and_wait([
          'わ～～！！ 行く行く！ マヤ、',
          callname,
          ' と行きたい！',
        ]);
        await fuji.say_and_wait(
          'それはよかった。チケットは入ってすぐの机に置いてあります。取ってきてください。',
        );
        await maya.say_and_wait('うん♪');
        await fuji.say_and_wait('ふう……よし、なんとか収まりました。');
        era.printButton('「ありがとう……」', 1);
        await era.input();
        await fuji.say_and_wait(
          'いえ、こちらこそ。実は前からお礼が言いたくて。',
        );
        await fuji.say_and_wait([
          f_call_m,
          ' ',
          maya.sex,
          'は好奇心が旺盛で……いろいろ心配になるものですから。',
        ]);
        await maya.say_and_wait([
          callname,
          '！ はやくはやく～！ お店閉まっちゃう！',
        ]);
        await fuji.say_and_wait('ふふ。楽しんできてください。');
        await era.printAndWait(
          'そのあと二人でお茶を……そして、ちゃんと仲直りできた。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_race_lesson: (() => {
    const title = 'マヤちんのレース講座☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} urara ハルウララ
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_52 マヤノトップガンのハルウララへの呼び方
     * @param {PrintedSpan} callname_52 ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} u_call_m ハルウララのマヤノトップガンへの呼び方
     */
    const f = async (maya, urara, callname, call_52, callname_52, u_call_m) => {
      await era.printAndWait([
        maya.get_colored_name(),
        ' と模擬レースを見た帰り道──',
      ]);
      await urara.say_and_wait([
        'あ、',
        u_call_m,
        ' と ',
        callname_52,
        ' だ～！ ウララの応援に来てくれたの！？',
      ]);
      await maya.say_and_wait(['うん！ ', call_52, '、がんばってたよ～☆']);
      await urara.say_and_wait('えへへ、ありがとう～！');
      await urara.say_and_wait(
        '今日も走るの、すっごく楽しかった！ ビリだったけど、満足だよ♪',
      );
      await maya.say_and_wait([
        'へえ～ ',
        call_52,
        '、すごい～！ マヤは負けたらすぐ拗ねちゃう☆',
      ]);
      await urara.say_and_wait(
        'ウララはいつも楽しいよ！ だって走るの大好きだから！',
      );
      await urara.say_and_wait([
        'でも……勝つのは難しい！ ',
        u_call_m,
        ' はどうやって勝ってるの？',
      ]);
      await maya.say_and_wait('マヤ？');
      await urara.say_and_wait('うん！ いつも速いじゃん～？');
      await urara.say_and_wait([
        'ウララも ',
        u_call_m,
        ' みたいになれたら、勝てるかも！',
      ]);
      era.printButton('「一緒に練習しないか？」', 1);
      await era.input();
      await maya.say_and_wait('いいね☆');
      await maya.say_and_wait([call_52, '、一緒に練習して、次は勝つ！！']);
      await maya.say_and_wait([
        'マヤと ',
        callname,
        ' のレース講座～☆ 生徒は ',
        call_52,
        ' さん♪',
      ]);
      await urara.say_and_wait('はい！ ウララです！');
      await maya.say_and_wait([
        'じゃあすぐはじめるよ～！ まずは ',
        callname,
        ' に質問☆',
      ]);
      await maya.say_and_wait([call_52, ' に今必要なのは、なに！？']);
      era.println();
      era.printButton(
        '「スタミナをつけて、力尽きないように！」（スタミナ+20）',
        1,
      );
      era.printButton('「相手を交わすコツを掴め！」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['ピンポーン☆ ', callname, '、さすが♪']);
        await maya.say_and_wait(['……ふんふん！ あのね、', call_52, ' さん！']);
        await maya.say_and_wait(
          'ズバリ☆ 前のレース、途中で力尽きてたでしょ！？',
        );
        await urara.say_and_wait('うん！ 楽しかったけど、ヘトヘト～');
        await maya.say_and_wait(
          '体力もっとあれば、もっと楽に走りきれるよね～☆',
        );
        await urara.say_and_wait(['そっか！ ', u_call_m, '、頭いい～♪']);
        await maya.say_and_wait(
          'ぷぷっ！ 今日のマヤは先生だから、『マヤノトップガン先生』って呼んで！',
        );
        await urara.say_and_wait([
          'はい、',
          maya.get_colored_name(),
          ' 先生！',
        ]);
        await era.printAndWait([
          'こうして ',
          maya.get_colored_name(),
          ' の指導で、',
          urara.get_colored_name(),
          ' はトレーニングをした──',
        ]);
      } else {
        await maya.say_and_wait(
          'きゃ～☆ 以心伝心！？ マヤも同じこと考えてた～♪',
        );
        await maya.say_and_wait([call_52, '、聞くけど、いつもどう走ってる？']);
        await urara.say_and_wait('いつも？ 全力で走ってるよ！');
        await maya.say_and_wait('ふーん……じゃあ、困ってることある？');
        await urara.say_and_wait(
          'うーん、前に出るのが難しい～。ぶつかりそうになると、焦っちゃう！',
        );
        await maya.say_and_wait('おお、なるほど～！');
        await maya.say_and_wait('じゃあ次のレースは、前を見て走ろう！');
        await maya.say_and_wait('前を見てれば、前が空くときが来る──');
        await maya.say_and_wait('そのとき、まっすぐ突っ走る☆');
        await urara.say_and_wait('わかった！ やってみる♪');
      }
      era.drawLine({ content: '翌日' });
      await urara.say_and_wait('聞いて聞いて！ 一人追い抜いたよ！');
      await maya.say_and_wait('わ、すごい～！ 一人追い抜いて──');
      await maya.say_and_wait('一人！？');
      await urara.say_and_wait(
        'えへへ～！ こうして一人ずつ抜いて、最後は一番になる～♪',
      );
      await maya.say_and_wait(
        '抜き続けたら、いつか一番！ 絶対一番取るよ～！！',
      );
      await urara.say_and_wait('おー！！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' への指導は、',
        maya.get_colored_name(),
        ' にもいい影響を与えたようだ。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_model_secret: (() => {
    const title = '大人なモデルの秘訣！';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} yukino ユキノビジン
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_29 マヤノトップガンのユキノビジンへの呼び方
     * @param {PrintedSpan} call_40 マヤノトップガンのゴールドシチーへの呼び方
     * @param {PrintedSpan} y_call_c ユキノビジンのゴールドシチーへの呼び方
     * @param {PrintedSpan} c_call_m ゴールドシチーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} c_call_y ゴールドシチーのユキノビジンへの呼び方
     */
    const f = async (
      maya,
      yukino,
      city,
      you,
      callname,
      call_29,
      call_40,
      y_call_c,
      c_call_m,
      c_call_y,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        maya.get_colored_name(),
        ' に資料整理を手伝ってもらっていると──',
      ]);
      await maya.say_and_wait(['あっ！ これ、', call_40, ' が載ってる雑誌！']);
      await maya.say_and_wait([
        call_40,
        '、やっぱりきれい～♪ 肌見せの服も似合う！',
      ]);
      await maya.say_and_wait('……そうだ！ マヤ、いいこと思いついた～！');
      await era.printAndWait(['書類を片付けたあと、外を歩いていると──']);
      await city.say_and_wait(['おっ、', c_call_m, '。']);
      await yukino.say_and_wait('こんにちはです～！');
      await maya.say_and_wait([
        call_29,
        ' と ',
        call_40,
        ' だ～！ ちょうどよかった☆',
      ]);
      await maya.say_and_wait([
        'ねえねえ～！ ',
        call_40,
        '、読者モデルだよね？',
      ]);
      await maya.say_and_wait([
        call_40,
        ' は大人のモデルさんたくさん知ってる、かっこいい大人──',
      ]);
      await maya.say_and_wait([
        '大人の',
        maya.phy_sex_title,
        'になる秘訣、教えてほしいな～♪',
      ]);
      await city.say_and_wait([
        '『大人の',
        maya.phy_sex_title,
        '』か……ほんとに好きだね、それ。',
      ]);
      await yukino.say_and_wait([
        'お、大人の',
        maya.phy_sex_title,
        '！？ わあ……！',
      ]);
      await yukino.say_and_wait([
        '……で、でもそれが『シティ',
        maya.child_sex_title,
        '』のコツなら……私にも教えてほしいです！',
      ]);
      await city.say_and_wait(['え……', c_call_y, ' まで？']);
      await city.say_and_wait('……いいよ。私の見方だけど、参考程度に。');
      await city.say_and_wait('読者モデルやってるとき、気にしてるのは二つ。');
      await city.say_and_wait('まず『コンディション』。');
      await city.say_and_wait('いつもベストを保って、いちばんいい自分を出す。');
      await maya.say_and_wait(
        'いちばんいい自分……かっこいい！！ それでそれで！？',
      );
      await city.say_and_wait('もう一つは『スピード』。');
      await city.say_and_wait('今の流行を掴んで、いちばん先を行く。');
      await yukino.say_and_wait('す、すごく参考になります～！');
      await maya.say_and_wait([
        call_40,
        ' がいつもキラキラなのも、この二つだよね～！',
      ]);
      await maya.say_and_wait('マヤが覚えたら、大人に一歩近づけるかも♪');
      era.println();
      era.printButton('「コンディションは大事だ」（スタミナ+20）', 1);
      era.printButton('「スピードは大事だ」（スピード+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('でしょでしょ～♪ コンディションね～！');
        await maya.say_and_wait(
          'コンディション……身体を鍛える……うん！ マヤわかった！',
        );
        await maya.say_and_wait([
          '体力つければいいんでしょ！ ね！？ ',
          callname,
          '♪',
        ]);
        era.printButton('「え？」', 1);
        await era.input();
        await maya.say_and_wait('ほら、行こ行こ！ マヤが大人になるとこ見てて♪');
        await city.say_and_wait('そういう意味じゃないんだけど……まあ、いいか。');
        await city.say_and_wait([
          maya.sex,
          'のやり方で大人になる、ってことで。',
        ]);
        await yukino.say_and_wait([
          'か、かっこいいです……！ 私も早く ',
          call_40,
          ' みたいになりたいです～',
        ]);
        await era.printAndWait([
          'ベストを保つためにトレーニングを重ねた ',
          maya.get_colored_name(),
          ' は、体力をかなりつけた。',
        ]);
      } else {
        await maya.say_and_wait('でしょでしょ～♪ スピードね～！');
        await maya.say_and_wait('速さなら……そうだ！');
        await maya.say_and_wait('先生が前に言ってた、『往復走が効く』って～！');
        era.printButton('「まあ、そうだけど……」', 1);
        await era.input();
        await maya.say_and_wait([
          '決まり♪ ',
          callname,
          ' も認めたんだから、間違いない！',
        ]);
        await maya.say_and_wait('グラウンドへ Take Off☆ 誰より速く走る♪');
        await yukino.say_and_wait([
          y_call_c,
          '……あの、私も『シティ',
          maya.child_sex_title,
          '』になりたいので……！',
        ]);
        await city.say_and_wait('うん、私は気にしないで……しっかり頑張って。');
        await yukino.say_and_wait('はい！ よーし、がんばります～！');
        await era.printAndWait([
          '速さを上げるための往復走は、',
          maya.get_colored_name(),
          ' にとっていいトレーニングになったようだ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_reading: (() => {
    const title = '勉強はマヤにおまかせ☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '打ち合わせの時間なのに、',
        maya.get_colored_name(),
        ' がまだ来ない……',
      ]);
      await maya.say_and_wait('ハローハロー～！ 待たせた～！？');
      era.printButton('「いや、今着いたところだ」', 1);
      await era.input();
      await maya.say_and_wait('わわ☆ 今の、デートみたい！？ きゃ～～～！');
      await maya.say_and_wait([
        'そういう話じゃなくて！ ',
        callname,
        '、ごめん！ クラスの子に捕まっちゃって～',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        maya.uma_sex_title + 'A',
        'はぁ、明日から試験かぁ～',
      );
      await you.say_as_passer_by_and_wait(
        maya.uma_sex_title + 'B',
        '憂鬱～ 休みにしちゃおうかな？',
      );
      await maya.say_and_wait('わかるわかる！ マヤも試験キライ～！！');
      await maya.say_and_wait(
        'すぐ書き終わるのに、寝られないし遊べない！ もう、お絵かきしかできないじゃん～！！',
      );
      await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'A', [
        maya.get_colored_name(),
        '、あんたねぇ～！',
      ]);
      await you.say_as_passer_by_and_wait(
        maya.uma_sex_title + 'B',
        'うらやましい～ 次の試験も全部『わかる』んでしょ？',
      );
      await maya.say_and_wait('まあね～');
      await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'A', [
        'そうだ、',
        maya.get_colored_name(),
        '！ 出そうなとこ教えてよ！',
      ]);
      await you.say_as_passer_by_and_wait(
        maya.uma_sex_title + 'B',
        'お願い～！ 友だち助けて！ ね？',
      );
      await maya.say_and_wait('I copy☆ このマヤノトップガン様にまかせて♪');
      era.drawLine();
      await maya.say_and_wait([
        'そんな感じで、',
        maya.couple_title,
        'にマヤのわかるとこ教えた！ ',
        maya.couple_title,
        '、喜んでた！',
      ]);
      await maya.say_and_wait([
        maya.couple_title,
        '、『次もよろしく』って！ えへへ、モテる',
        maya.phy_sex_title,
        'は大変だね～♪',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' は嬉しそうだ。だが',
        maya.sex,
        'のトレーナーとして、',
        you.get_colored_name(),
        ' は、これが',
        maya.sex,
        'の負担にならないか少し心配だった……',
      ]);
      era.printButton('「お礼も頼んだらどうだ？」（パワー&根性+10）', 1);
      era.printButton('「イヤなときは断れ」（賢さ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '教えるだけじゃなく、お礼をもらえれば負担も減るはずだ。',
          you.get_colored_name(),
          ' はそう提案した──',
        ]);
        await maya.say_and_wait('あっ！！ マヤ、完全に忘れてた！');
        await maya.say_and_wait('お礼か～♪ なに頼もう～？');
        await maya.say_and_wait([
          '……そうだ！ ',
          maya.couple_title,
          'に遊んでもらお！',
        ]);
        await maya.say_and_wait(
          '試験のあいだ、みんな勉強で、マヤと遊んでくれないんだ～',
        );
        era.printButton(
          '「教えたおかげで、' + maya.sex + 'たちも暇になるだろ」',
          1,
        );
        await era.input();
        await maya.say_and_wait([
          'そうそう！ 明日、',
          maya.couple_title,
          'に聞く♪',
        ]);
        era.drawLine();
        await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'A', 'お礼？');
        await maya.say_and_wait('うん！ マヤと遊んでほしい♪');
        await maya.say_and_wait(
          '最近みんな試験ばっかりで、付き合ってくれない～',
        );
        await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'B', [
          'つまり『',
          maya.get_colored_name(),
          ' 新兵訓練所』……みんなで全力で遊んで、ヘトヘトになるやつだね。',
        ]);
        await you.say_as_passer_by_and_wait(
          maya.uma_sex_title + 'A',
          'いいね。リラックスしたかったんだ！',
        );
        await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'B', [
          'わたしも！ かかってこい、',
          maya.get_colored_name(),
          ' 新兵訓練所♪',
        ]);
        await maya.say_and_wait('やったぁ～～～～～！ 思いっきり遊ぶ！！');
        await era.printAndWait([
          '数日後、門限ぎりぎりまで遊んだ ',
          maya.get_colored_name(),
          ' は、元気いっぱいの顔で戻ってきた。',
        ]);
      } else {
        await maya.say_and_wait(['もう！ ', callname, '、心配性～♪']);
        await maya.say_and_wait('頼られるの嬉しいし、みんなわかると喜ぶし！');
        await maya.say_and_wait('でしょ？ いいことだらけ♪');
        era.printButton('「じゃあ俺も、楽しませてくれ」', 1);
        await era.input();
        await maya.say_and_wait('だいじょうぶだいじょうぶ！ なんでも言って♪');
        await era.printAndWait([
          '約束をもらったので、',
          you.get_colored_name(),
          ' は ',
          maya.get_colored_name(),
          ' にみっちりトレーニングを組んだ。',
        ]);
        await maya.say_and_wait('わ～！ これ、マヤ全然楽しくない──────！');
        era.drawLine();
        await maya.say_and_wait(['うぅ～！ ', callname, '、いじわる……']);
        await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'A', [
          'あはは、お疲れ、',
          maya.get_colored_name(),
          '！',
        ]);
        await you.say_as_passer_by_and_wait(maya.uma_sex_title + 'B', [
          'あのトレーナー、やるね～！ ',
          maya.get_colored_name(),
          ' との付き合い方、わかってる。',
        ]);
        await maya.say_and_wait([
          'でしょでしょ！ ',
          callname,
          '、すごいんだから♪',
        ]);
        await you.say_as_passer_by_and_wait(
          maya.uma_sex_title + 'A',
          '……拗ねてるの、嬉しいの？',
        );
        await maya.say_and_wait('だ、だって乙女心は複雑だもん～！');
        await era.printAndWait([
          '痛い目を見たあと、',
          maya.get_colored_name(),
          ' は少し賢い',
          maya.phy_sex_title,
          'になったようだ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_takeoff: (() => {
    const title = 'マヤノ・テイクオフ☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        ' の勝負服が、ようやく届いた。',
      ]);
      await era.printAndWait([
        maya.sex,
        'が ',
        you.get_colored_name(),
        ' に「デザインは届いてからのお楽しみ！」と言っていたので、',
        you.get_colored_name(),
        ' が見るのはこれが初めてだ。',
      ]);
      await maya.say_and_wait('じゃじゃーん──☆');
      await maya.say_and_wait([
        '見て見て、',
        callname,
        '！ 超きれいでしょう～♪',
      ]);
      era.printButton('「もっとふわふわかと思ってた……」', 1);
      await era.input();
      await maya.say_and_wait('うん、そこはマヤもけっこう悩んだよ～');
      await maya.say_and_wait(
        'でも、これもセクシーでマヤに似合うと思って！ どう？',
      );
      era.printButton('「かっこいい。いいと思う」', 1);
      await era.input();
      await maya.say_and_wait('やったぁ～！！');
      await maya.say_and_wait('マヤのパパとママも、デザイン画ほめてくれた～♪');
      await maya.say_and_wait('『パパの若いころみたいに、かっこいい』って！');
      era.printButton('「確かにお父さんの仕事は……」', 1);
      await era.input();
      await maya.say_and_wait('うん！ 空を飛ぶパイロットだよ☆');
      await maya.say_and_wait(
        'マヤ、前にパパが操縦する小型ジェットに乗ったことある～♪',
      );
      await maya.say_and_wait(
        '空がすごく広くて、住んでる街は遠くて小さかった！',
      );
      await maya.say_and_wait(
        '広い景色の中を『シュッ──！』って飛ぶ感じ、マヤ大好き～♪',
      );
      await maya.say_and_wait(
        '空を飛ぶのは、レース場を走るのと同じ！ ワクワクして刺激的♪',
      );
      await maya.say_and_wait('だから勝負服も、こんなデザイン☆');
      await maya.say_and_wait(
        'コースを走るとき、自由で楽しい空を飛んでるみたい～！',
      );
      era.println();
      era.printButton(
        '「たくさんのレースへ、Take Off だ！」（スピード+20）',
        1,
      );
      era.printButton('「原点が、やっとわかった」（スタミナ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('うんうん！ するよ～！');
        await maya.say_and_wait(
          'マヤのフライト、観客みんなにきれいな景色見せる♪',
        );
        await maya.say_and_wait([callname, ' も乗り遅れないでね！']);
        era.printButton('「楽しみだ」', 1);
        await era.input();
        await maya.say_and_wait(['ありがとう、', callname, '！']);
        await maya.say_and_wait('これからもっと速くなるから、ずっと見ててね♪');
        await maya.say_and_wait('I copy？');
        era.printButton('「I copy！」', 1);
        await era.input();
        await maya.say_and_wait('えへへ～♪ ふたりの約束！');
        await maya.say_and_wait(
          'OK Smile☆Lucky Peace！ マヤノトップガン、いくよーーーー♪',
        );
        await era.printAndWait([
          '勝負服を着たあと、',
          maya.get_colored_name(),
          ' の勝ちたい気持ちは、さらに上がったようだ。',
        ]);
      } else {
        await maya.say_and_wait('ほんと、ほんと？');
        await maya.say_and_wait([
          callname,
          '、マヤのことだんだんわかってきたね～♪',
        ]);
        await maya.say_and_wait(
          '将来はパパとママよりマヤのことわかるかも……きゃ～☆',
        );
        era.printButton('「ということは、ご両親にはもう見せたのか？」', 1);
        await era.input();
        await maya.say_and_wait('え？ まだだよ！');
        await maya.say_and_wait([
          'ずっと、最初に ',
          callname,
          ' に見せるって決めてた♪',
        ]);
        await maya.say_and_wait('……そうだ！ パパとママに写真送ろ！');
        await maya.say_and_wait([callname, ' も一緒に写って！ いい？']);
        era.printButton('「いいのか？」', 1);
        await era.input();
        await maya.say_and_wait('もちろん全然だいじょうぶ！');
        await maya.say_and_wait([
          'パパとママも、',
          callname,
          ' 見てみたいって～！',
        ]);
        await maya.say_and_wait('ほら、もっと近く～！ せーの……Take Off☆');
        await maya.say_and_wait('えへへ、いい感じ♪ 送信！');
        await maya.say_and_wait('あ！ パパたちからメッセージ！ うんうん……');
        await maya.say_and_wait('あはは♪ いい人そうだね、だって！');
        await maya.say_and_wait([
          '『',
          maya.get_colored_name(),
          ' をよろしく』って！ これでご両親公認の ',
          callname,
          ' だね☆',
        ]);
        await era.printAndWait([
          '少し照れくさかったが、',
          you.get_colored_name(),
          ' はまた決めた。これからも',
          maya.sex,
          'の味方でいる、と。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
