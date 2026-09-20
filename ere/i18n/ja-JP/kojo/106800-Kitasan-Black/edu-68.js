/**
 * @file キタサンブラック - 育成
 * @author 小黑
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '追加で自主トレ！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, callname) => {
      await era.printAndWait([
        'トレーニングが終わっても、',
        kita.get_colored_name(),
        ' はまだ物足りなさそうだった。',
      ]);
      await era.printAndWait([
        kita.sex,
        'は遠くの空を見る。夕陽が沈み、最後の光が大地へ落ちていく。',
      ]);
      await era.printAndWait(
        `もうすぐ暗くなる。それでも足りない。まだ限界じゃない。`,
      );
      era.printButton('「このまま続けよう！」', 1);
      era.printButton('「今日はここまでにしよう。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait([
          '了解！ じゃ、',
          callname,
          '、ちゃんと見ててね！',
        ]);
      } else {
        await kita.say_and_wait(
          `そっか、うん～ じゃあしっかり休んで、明日また鍛えるね！`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '体を大事に！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`痛痛痛痛……捻っちゃった……`);
      await era.printAndWait(
        `保健室の椅子に座った ${kita.name} は、足首に巻いた湿布を指先でつつき、不服そうに口を尖らせた。`,
      );
      await era.printAndWait(
        `今日は休むしかない、と ${you.name} は ${kita.name} に告げた。`,
      );
      await kita.say_and_wait(`休みか……悔しいなあ……`);
      await kita.say_and_wait(
        `でも ${callname} がそう言うなら、従うしかないよね……`,
      );
      await era.printAndWait(
        `${kita.name} は寝返りを打って布団にくるまり、目を閉じて眠り始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は禁物！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(`痛いっ……今度のは、ちょっと本気でやばいかも……`);
      await era.printAndWait(
        `${kita.name} は保健室のベッドに座り、腰を押さえて、かなり歪んだ顔をしている。`,
      );
      await era.printAndWait(
        `今日は休むしかない、と ${you.name} は ${kita.name} に告げた。`,
      );
      await kita.say_and_wait(
        `え、休むの？ でも……今、みんなトレーニングしてるよね……？`,
      );
      await kita.say_and_wait(
        `ボクが……休んで、いいの？ 軽いメニューでもいいから、休みたくないよ……`,
      );
      await era.printAndWait(
        `${you.name} はキタの腫れた箇所を見る。どう転んでも休養一択だ。休まなければ、かえって悪化する。`,
      );
      await kita.say_and_wait(
        `……そうだよね。なら気持ちを切り替えて、ちゃんと休むしかないか……`,
      );
      await era.printAndWait(
        `${kita.name} は少し寂しそうに布団へ潜り、ぼんやりと天井を見つめた。`,
      );
      await kita.say_and_wait(
        `保健室って、こんなに静かなんだ……ちょっと寂しいね……`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}！ ボク、勝ったよ！`);
      await kita.say_and_wait(
        `見に来てくれたみんなも嬉しそうで、ほんとよかった！`,
      );
      await era.printAndWait(
        `尻尾を嬉しそうに振り、${kita.name} は楽しげな顔を見せた。`,
      );
      await era.printAndWait(
        `さっきキタが実家の父と電話しているのを見た。ちゃんと褒められて、夜は酒で祝うと言っていた。`,
      );
      await era.printAndWait(
        `じゃあ今日はジュースで祝おう、と言って ${you.name} は飲み物を出し、ジュースを二杯注いだ。`,
      );
      await kita.say_and_wait(`やった、${callname}、乾杯！`);
      await era.printAndWait(
        `紙コップを合わせ、手首に跳ねたジュースなど気にもせず、${kita.name} は勝ちを喜んだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着！';
    /**
     * 汎用・入着
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `控え室で ${kita.name} はごくごくと水を飲み、長く息を吐いた。`,
      );
      await kita.say_and_wait(
        `ぷはっ～ 大分楽になった！ ありがとう、${callname}……え？ どうしてそんな顔？`,
      );
      await era.printAndWait(
        `心配そうな ${you.name} を見て、${kita.name} はへへっと笑い、キャップを閉めた。`,
      );
      await kita.say_and_wait(
        `勝てなかっただけだよ。${callname}、そんなに心配しないで。`,
      );
      await kita.say_and_wait(
        `キタは悔しいけど、次は倍がんばって、絶対勝つから！`,
      );
      await era.printAndWait(
        `逆にこちらを慰めてくる黒い${kita.uma_sex_title}を見て、${
          you.name
        } は安堵し、同時に腹の底で決意した。`,
      );
      await era.printAndWait('次は、絶対に勝つ。');
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'レース敗北！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `控え室で、${kita.name} の携帯がしきりに震えている。`,
      );
      await kita.say_and_wait(
        `クラスの子からの励ましだよ。次は絶対取り返すって、${kita.sex}は言ってる。`,
      );
      await kita.say_and_wait(
        `商店街のおばちゃんからも来た。次も応援に行くって。`,
      );
      await era.printAndWait(
        `画面の光がキタの顔を照らす。${you.name} は、そこに落ち込みが一片もないことに気づいた。`,
      );
      await era.printAndWait(
        `それどころか、もう立て直した者だけがする顔だった。`,
      );
      await kita.say_and_wait(
        `こんなにみんな応援して、励ましてくれてる。そんなのに、落ち込む資格なんてないよ！`,
      );
      await kita.say_and_wait(`${callname}、帰ったら倍トレーニングしよう！`);
      await era.printAndWait(
        `そう言ってキタは立ち上がり、さっきより元気そうだった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_lose: (() => {
    const title = 'レース敗北！';
    /** @param {CharaTalk} kita キタサンブラック */
    const f = async (kita) => {
      await kita.say_and_wait('むむむむむ……また負けちゃった……');
      await era.printAndWait(
        'がっくりしたキタは、ストローでジュースに泡を立て、しょんぼりした顔をしている。',
      );
      await kita.say_and_wait('悔しいなあ……次は絶対取り返す……');
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = 'キタサンブラック登場';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '新学期前の最終日。春の陽射しが心地よい日だった。',
      );
      await era.printAndWait(
        `トレセンでは、キャリアの始まりがこんな好天に重なり、${kita.uma_sex_title}たちもご機嫌だ。`,
      );
      await era.printAndWait(
        `その良い日に、${you.name} は身だしなみを整え、挨拶を考え、担当と三年間ともに駆け抜ける準備をした。`,
      );
      await era.printAndWait(`そして${kita.sex}の名前は————`);
      await kita.say_and_wait(`よろしくお願いします！ ${callname}！`);
      await era.printAndWait(
        `キタサンブラックは極道みたいに立ち上がり、${you.name} へ深く一礼した。黒い短髪が、その大きな動きに揺れる。`,
      );
      await era.printAndWait(
        `その健康そうな姿に ${you.name} は満足げに頷いた。頑丈な体は勝利の実を結ぶ土台で、日々の鍛錬がその上に積み上がる。`,
      );
      await era.printAndWait(
        `この体だけでも、${
          you.name
        } は${kita.teen_sex_title}の力を信じられた。`,
      );
      await era.printAndWait(
        '陽に照らされたトレーニング場は眩しく、緑の芝コースの匂いが胸を高鳴らせる。',
      );
      await era.printAndWait(
        `思春期真っ盛りの${kita.uma_sex_title}とどう付き合うか。今後のメニューとローテ。負けたあと、担当とどう向き合うか。そんなことは未来の自分に任せよう。`,
      );
      await era.printAndWait(
        `今の ${you.name} は、コースで ${kita.name} の走る姿を見ていればいい。それで十分だ！`,
      );
      await kita.say_and_wait(
        `じゃあ${callname}、走ります！ ちゃんと、しっかり見ててください！`,
      );
      await era.printAndWait(
        `祭りそのもののような${kita.uma_sex_title}はコースに立ち、${
          you.name
        } へ手を振ると腰を落とし、小さな体に力を籠め、${
          you.name
        } の前で出し惜しみなく踏み出した。`,
      );
      await era.printAndWait(
        `胸を打つ脚取り。祭りのような熱。朝に咲く朝顔のように、${you.name} の前で開いた。`,
      );
      await era.printAndWait(`こうして、${kita.name} の物語が始まる。`);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kita) => `ごく平凡な${kita.teen_sex_title}`;
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}！ 今日もよろしくお願いします！`);
      await era.printAndWait(
        `${you.name} へ深く一礼すると、${kita.name} は柵を軽く越え、小鹿みたいに跳ねてコースへ入り、今日のメニューを始めた。`,
      );
      await era.printAndWait(
        `${kita.name} と一緒に鍛えてみて、トレーナーの ${you.name} は担当の地力をだいたい掴んだ。`,
      );
      await era.printAndWait(
        `まず、いちばん大事なのは、${kita.name} の体が相当頑丈だということ。`,
      );
      await era.printAndWait(
        `コースに入って二十分も経たないうちに、本来三十分は見る予定のウォーミングアップを${kita.name} は終わらせた。`,
      );
      await kita.say_and_wait(
        `${callname}、ウォーミングアップ終わったよ。次のメニューは！？`,
      );
      await kita.say_and_wait(
        'スピードトレ？ スタミナトレ？ どっちでも大丈夫だよ。',
      );
      await era.printAndWait(
        `コースに立ち、ウォーミングアップで頰をほのかに赤らめた${kita.uma_sex_title}が、こちらへ大声で尋ねる。`,
      );
      await era.printAndWait(`二つ目。${kita.sex}は計画がとても苦手な子だ。`);
      await era.printAndWait(
        'トレーニング中に気が散るほどではない。よく言えば、その場で動ける。',
      );
      await era.printAndWait(
        `だが ${
          kita.name
        } という${kita.uma_sex_title}は、自分の条件から作戦や計画を組むタイプではない。`,
      );
      era.println();

      era.printButton('「キタの走りの適性を測るトレーニングだよ。」', 1);
      await era.input();
      await era.printAndWait(
        `そう言いながら、${you.name} は視線をノートへ戻す。そして、いちばん大きな問題がある。`,
      );
      await kita.say_and_wait('適性を測るの？ 了解！ 全力で見せるよ！');
      await era.printAndWait(
        '乗り気のキタは尻尾を振り、白いペンキのスタートラインの後ろまで小走りで行った。',
      );
      await era.printAndWait(
        `耳が鳴るほどの号砲の中、黒い${kita.uma_sex_title}は踏み出して前へ駆けた。`,
      );
      await era.printAndWait(
        `濃い色のランニングシューズが芝に浅い足跡を残し、${kita.name} は身を低くして大股で先行する。`,
      );
      await era.printAndWait(
        `これが隊列なら、${kita.sex}は先行の前の方にいるだろう。`,
      );
      era.println();

      era.printButton('「だが……」', 1);
      await era.input();
      await era.printAndWait(`だが、絶対に勝つ材料は見えない。`);
      await era.printAndWait(
        `${
          you.name
        } は不安げにキタの漆黒の影を追い、${kita.teen_sex_title}の小さな体の下に隠れた何かの才能を探した。`,
      );
      await era.printAndWait(
        `${kita.sex}の地力は申し分ない。だが中央は実力者がひしめく。${kita.sex}を上回る武器がなければ……`,
      );
      await kita.say_and_wait('ふっ、ふっ、ふっ……');
      await era.printAndWait(
        `${
          you.name
        } は${kita.teen_sex_title}の整った息を見る。白い引き締まった脚が芝の上で見事な線を描き、${
          kita.sex
        }の姿が ${you.name} の網膜でどんどん近づく。`,
      );
      await era.printAndWait('地力だけでは、遠くまでは行けない。');
      await era.printAndWait(
        `${you.name} はストップウォッチを止めた。中の上、といった記録だった。`,
      );
      await era.printAndWait(
        `${kita.name} に、${kita.sex}だけの武器を見つけさせなければ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '初めて！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name} がゴールを駆け抜けた瞬間、${you.name} は長い息を吐いた。持ち上がっていた心臓が、ようやく降りた。`,
      );
      await era.printAndWait(
        `担当の地力は信じている。${kita.sex}が勝てる子だという確信もある。`,
      );
      await era.printAndWait(
        `それでも本当に勝つまで、${you.name} は無事に勝てるか、そして自分自身を、少し疑っていた。`,
      );
      await era.printAndWait(
        `いま、決着はついた。よろよろとこちらへ走る担当を見て、${you.name} はタオルと水を持って近づいた。`,
      );
      await kita.say_and_wait(
        `${callname}！ ボク……勝ったよね！ 勝ったんでしょ！ 勝ったんだよね！`,
      );
      await era.printAndWait(
        `熱い気配ごと急に迫り、${kita.name} は焦れた顔で ${you.name} に尋ねた。`,
      );
      await kita.say_and_wait('夢、じゃないよね！');
      era.println();

      era.printButton('「勝ったよ、キタ。」', 1);
      await era.input();
      await era.printAndWait(
        `競馬場の高い歓声と賛辞を聞きながら、${you.name} は勝利に飢えていた担当へそう答えた。`,
      );
      await era.printAndWait(
        `自分の熱と意志をみんなへ届けたかった ${kita.name} は、この勝ちで、間違いなく届けた。`,
      );
      await era.printAndWait(
        `${you.name} が見ると、担当の顔は張り詰めた焦りからふっと緩み、いつもの温かい笑みに戻った。`,
      );
      await kita.say_and_wait(
        `へえっ……なんだか、実感ないなあ。頭の中、まだ空っぽ。`,
      );
      await era.printAndWait(
        `キタらしい、と ${you.name} は感嘆して視線を外した。そのとき初めて気づく。キタの服は汗で完全に透けていた。`,
      );
      await kita.say_and_wait(`うわあっ～ ${callname}！？`);
      await era.printAndWait(
        `まずい……ろくでもない考えが浮かぶより先に、${you.name} は素早くタオルを広げてキタにかけ、${kita.sex}の体を丁寧に隠した。`,
      );
      await era.printAndWait(
        '？？？「午後第一レースは、これにて終了。素晴らしいレースでした。」',
      );
      await era.printAndWait(`？？？「それでは次のレースは……」`);
      await era.printAndWait(
        `こうして、${kita.name} のメイクデビューは終わった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_after: (() => {
    const title = '初めての……';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait('ボク……勝ったの？ 今度は、本当に勝った……？');
      await era.printAndWait(
        `ゴールの向こうで、${kita.name} は大きく息をつき、眼前の事実を信じられないようだった。`,
      );
      await era.printAndWait(
        `その場に長く立ったあと、ようやく ${you.name} の担当は笑った。`,
      );
      await kita.say_and_wait('ボク、勝ったんだ……');
      await era.printAndWait(
        `${kita.uma_sex_title}たちと競馬場の出口へ歩きながら、${
          kita.name
        } は勝ちの笑みを浮かべた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = 'ナイスネイチャ 登場';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, nature, you, callname) => {
      await era.printAndWait('十月後半のある日の午前。');
      await era.printAndWait(
        `メイクデビューから三ヶ月半。${you.name} とキタは、いつものようにコースで併走していた。`,
      );
      await era.printAndWait(`今日の併走相手は……`);
      await kita.say_and_wait(`あ、ネイチャ${nature.adult_sex_title}！`);
      await nature.say_and_wait(
        `やっほー～ ${callname}、来たよ～ キタ、待たせた？`,
      );
      await era.printAndWait(
        `手を振りながらゆっくり走って来る。時間が空いたネイチャさんは、もの憂げにへらへら笑い、キタと雑談を始めた。`,
      );
      await era.printAndWait(
        `今日のメニューは悪条件への忍耐。内容は、ダートコースでの二人の併走だ。`,
      );
      await era.printAndWait(
        `${kita.name} にダートの適性はない。だからこそ、鍛えになるだろう。`,
      );
      await kita.say_and_wait(
        `今日はよろしくお願いします、ネイチャ${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(`そんな改まらないでよ。ネイチャでいいって～`);
      await era.printAndWait(
        `十分ほど軽く体を温めたあと、${nature.name} と ${kita.name} は前後してコースへ入り、今日のトレーニングを始めた。`,
      );
      era.drawLine({ content: 'しばらくして' });
      await era.printAndWait(`結果だけ言えば、芳しくない。`);
      await nature.say_and_wait(`うわ～ キタ、${you.name}、大丈夫～？ 足は？`);
      await kita.say_and_wait(
        `はぁ、はぁ……だ、大丈夫……ネイチャ${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(`だからネイチャでいいって……`);
      await era.printAndWait(
        `${nature.name} に支えられ、ダートで転んだ${kita.name}はコースを出て、明らかに無理をした笑みを見せた。`,
      );
      await era.printAndWait(
        `担当が力みすぎたのか、トレーナーのメニューが悪かったのか。キタはメニューのあと、大きく転んだ。`,
      );
      await era.printAndWait(
        `トレーニング自体は効いている。だが通常メニュー以外の根性トレは、しばらく止めておこう。`,
      );
      await era.printAndWait(
        `無理して立ち上がり、こちらへ来る${kita.name}を見て、${you.name} はノートのその一行に大きくバツをつけた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sa_42: (() => {
    const title = 'のんびりした午後';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `授業もなく、メニューもないある午後、${you.name} は食堂横の通用口でキタを見つけた。`,
      );
      await kita.say_and_wait(`あ～ ${callname}、こんにちは。`);
      await era.printAndWait(
        `キタは缶ジュースの箱を二つ抱え、尻尾を左右に振りながら挨拶した。`,
      );
      await era.printAndWait(
        `${
          you.name
        } は${kita.teen_sex_title}の後ろを見る。普段閉まっている食堂の通用口が棒で支えられ、七、八箱のジュースが山になっている……何をしているんだ。`,
      );
      await kita.say_and_wait(
        'あ、これ、食堂売店のおばちゃんが箱を運んで腰をやっちゃったから、ボクが全部中へ運ぼうと思って。',
      );
      await kita.say_and_wait(
        `えへへ……${callname} に、普段と違うところ見られちゃった。ちょっと恥ずかしい……`,
      );
      await era.printAndWait(
        `${you.name} の驚いた顔を見て、${kita.name}は照れてへへっと笑い、箱で顔を隠した。`,
      );
      await kita.say_and_wait(`じゃあ ${callname}、またあとで。箱、運ぶね。`);
      await era.printAndWait(
        `そう言ってキタは箱をいくつか重ね、安定した足取りで通用口へ入っていった。`,
      );
      await era.printAndWait(
        `${you.name} はキタの小さくて頑丈な背中を見送り、考え込む。`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `神社の鳥居の脇で、${you.name} は熱を帯びた ${kita.name} を見つけた。ずいぶん前から ${you.name} を待っていたらしい。`,
      );
      await kita.say_and_wait(
        `${callname}、今年もよろしくお願いします！ えへへ～`,
      );
      await era.printAndWait(
        `${kita.name} は ${you.name} に声をかけ、たたたと走ってきた。小さなブーツが石畳に乾いた音を立てる。`,
      );
      await era.printAndWait(
        'クラシック級が無事に進むよう祈る、毎年の恒例が、この子を興奮させすぎているらしい。',
      );
      await kita.say_and_wait(
        'じゃあ早速、今年がうまくいくように、神社で参拝しよう！',
      );
      await era.printAndWait(
        `濃色の浴衣を着た ${kita.name} は可愛い馬耳を動かし、袖を引いてにこにこ急かす。`,
      );
      await era.printAndWait(
        `${you.name} はキタの頭を撫で、${kita.sex}と並んで社殿の喧騒を聞きながら、苔むした長い石段を上った。`,
      );
      await era.printAndWait('たた、たた、たた……');
      await era.printAndWait(
        `二人の静かで単調な足音を聞きながら、${you.name} と ${kita.name} は角の取れた八十八段を踏んだ。`,
      );
      await era.printAndWait(
        `先を急いだ${kita.teen_sex_title}を追い、最後の数段を越えると、眼前は笑い声の溢れる賑わいだった。`,
      );
      await kita.say_and_wait(
        'うはは～ 東京の神社も、実家のとあんまり変わらないね～',
      );
      await era.printAndWait(
        `${kita.name} は飾り提灯の並ぶ小道を抜け、賽銭箱の前まで小走りで行き、真剣に柏手を二度打ち、一礼した。`,
      );
      await kita.say_and_wait(
        'むむむ……来年三月、ファンが足りてレースに出られますように。みんな、絶対見に来てね……',
      );
      await era.printAndWait(
        `${kita.uma_sex_title}が小さく願いを唱えるのを聞き、${
          you.name
        } も柏手を打ち、祈り始めた。`,
      );
      era.printButton('（キタがもっと速く走れますように）（スピード+25）', 1);
      era.printButton(
        '（キタがもっと長いレースに耐えられますように）（スタミナ+20）',
        2,
      );
      era.printButton(
        '（キタがもっと技を身につけますように）（スキルPt+50）',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = '家族は大切';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `ある日の午前、${you.name} は ${kita.name} とトレーナー室にいた。`,
      );
      await era.printAndWait(
        `メニューがないので、キタは退屈そうにソファへうつ伏せで実家と電話し、${you.name} が明日のメニュー表を整えるのを待っている。`,
      );
      await kita.say_and_wait(`え、最近そんなこともあったの？ すごいなあ……`);
      await kita.say_and_wait(
        `うへへ。お母さんも、みんな甘やかしすぎないでよ。`,
      );
      await era.printAndWait(
        `楽しそうに実家と話す ${kita.name} を見て、${you.name} はふと、キタの母が気になった。`,
      );
      await era.printAndWait(
        `${kita.name} のお母さんって、どんな人なんだろう。`,
      );
      await kita.say_and_wait(`え、ボクのお母さん？`);
      await era.printAndWait(
        `その好奇心のまま、${you.name} はキタが切ったあと、自分から尋ねた。`,
      );
      await kita.say_and_wait(
        `どう言えばいいかな、うーん……どんな人かって、すごく普通、かな。`,
      );
      await kita.say_and_wait(
        `お母さんも引退したウマ娘だし、体つきもすごくいいんだけど、日常は普通。取り立てて特別なところはない、っていうか。`,
      );
      await kita.say_and_wait(
        `あ、でも演歌は上手いよ。${callname}、機会があったら一緒にどう？`,
      );
      await era.printAndWait(
        `${kita.name} が ${kita.sex} と母の日常を話すうち、${you.name} はいつの間にか、キタの家族に会う日を楽しみにしていた。`,
      );
      await era.printAndWait(
        `気づいたら、${you.name} のメニュー表も整っていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_10: (() => {
    const title = '悪気のない小さな悪戯';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `ホワイトデー。${you.name} は朝早くから芝コースで${kita.name}を待っていた。`,
      );
      await kita.say_and_wait(`${callname}！ 早いね～`);
      await era.printAndWait(`そう待たずに、キタは芝を踏んで走ってきた。`);
      await era.printAndWait(
        `澄んだ空気を吸い、${
          you.name
        } はジャージ姿の${kita.teen_sex_title}を見る。キタが贈り物をまだ知らないことへの小さな得意を胸に、ゆっくり近づいた。`,
      );
      await kita.say_and_wait(`？ ${callname}？ その変な笑顔、なに？`);
      await era.printAndWait(
        `警戒する小鹿みたいに ${you.name} の前で止まり、${kita.name}は慎重に腰を落とし、少しずつ近づく。`,
      );
      await era.printAndWait(
        `ふふふ。逃げもせず、寄ってくるのか。さすがキタ。だがもう遅い！`,
      );
      era.println();
      era.printButton(
        '「ホワイトデーおめでとう、キタ～ トレーナーからのプレゼントだよ～」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `大声でそう言い、${
          you.name
        } は贈り物を取り出してキタへ渡した。${kita.teen_sex_title}は驚いて空手の構えを取る。`,
      );
      await era.printAndWait(
        `しばらくからかったあと、${you.name} は微笑んで、キタが包装を開けて中のチョコを食べるのを見た。`,
      );
      await kita.say_and_wait(
        `ありがとう、${callname}、いただ……すっ酸っ！ これ梅干し……あっ！ 唾液、唾液！`,
      );
      await era.printAndWait(
        `口に入れた瞬間、刺すような酸味で${kita.teen_sex_title}の顔が反射的に歪んだ。`,
      );
      await era.printAndWait(
        `酸っぱい梅干しに唾液がどっと出る。それが ${you.name} の小さな悪戯だった。山のチョコのうち、たった二つの梅チョコだ。`,
      );
      await era.printAndWait(
        `そのあとキタが本気で仕返しし、${you.name} が残りの梅を一口で食べさせられて涎をたらしたことなどは。`,
      );
      await era.printAndWait(`まあ、気にしなくていいよね～`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_11: (() => {
    const title = '確かな支えと皐月の陰り';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, teio, you, callname) => {
      await kita.say_and_wait(
        `${callname}！ 書類、もう書いたよね！ ミスないよね？ 名前とか、年齢とか……`,
      );
      await kita.say_and_wait(
        `ああ、あと二分で確認が始まる、怖い！ テイオー${teio.adult_sex_title}のときもこうだったの！？`,
      );
      await era.printAndWait(
        `トレーナー室を悩みながら行き来し、${kita.name}は手元の出走登録を焦って見直し、不安げだった。`,
      );
      await era.printAndWait(
        `無理もない。ファン数は届いても、G1の出走登録は厳しい。`,
      );
      await era.printAndWait(
        `初めて登録するキタが緊張するのも、仕方ないだろう。`,
      );
      await teio.say_and_wait(
        `落ち着けってキタ～ このテイオーさまが ${you.name} の分まで十回は見たんだから。そんなにガチガチになるなよ。`,
      );
      await era.printAndWait(
        `ソファで蜂蜜ドリンクを悠々と飲み、${kita.name} の憧れ ${teio.name} は短い脚をぶらぶらさせている。`,
      );
      await kita.say_and_wait(
        `でも、テイオー${teio.adult_sex_title}！ 登録、もうすぐ始まるし、一番に——`,
      );
      await teio.say_and_wait(
        `登録期間、今日から一週間くらいだろ。急いでも審査は一週間後にまとめてだぜ。`,
      );
      await era.printAndWait(
        `そう言いながら ${teio.name} は手招きして ${kita.name} を引き寄せ、蜂蜜ドリンクを自分の小さなファンの手に押し込んだ。`,
      );
      await kita.say_and_wait(
        `うん～ 落ち着いて休む……あとは${callname}に任せればいいんだよね。`,
      );
      await kita.say_and_wait(`むむ……むむむむ……やっぱり不安だよ……`);
      await era.printAndWait(
        `そんなキタを見て、${you.name} はそっと送信を押した。もう出してあることは、少し後で言おう。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '勝利の大舞台';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`ありがとう、${callname}。`);
      await era.printAndWait(
        `『皐月賞』後の控え室で、${kita.name} は ${you.name} へ深く一礼した。`,
      );
      await kita.say_and_wait(
        `『皐月賞』の舞台を走れて、ドゥラメンテと同じレースで競えた……正直、今も胸がざわざわしてる。`,
      );
      await era.printAndWait(
        `レース前はバクシンさんのうっかりで出願を出し忘れかけたし、途中も何度か心臓が飛び出しそうだった。`,
      );
      await era.printAndWait(
        `波瀾のあと、老僧のような静けさの中、${you.name} は眠気の合間にようやく思い至る。${kita.name} は三冠の一冠目を取ったのだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '疲れの理由';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} baku サクラバクシンオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, baku, you, callname) => {
      await kita.say_and_wait(`はぁ……はぁ……え……走り終わった？`);
      await era.printAndWait(
        `ゴールを駆け抜けたあと、${kita.name} は横の着順掲示を見た。`,
      );
      await era.printAndWait(
        `距離が合わなかったのか。ただの体の問題か。今のキタには、勝ちの実感がない。`,
      );
      await kita.say_and_wait(`ボク、勝ったの？ あのドゥラメンテを相手に？`);
      await era.printAndWait(
        `勝ったというのに、${kita.name} は疲れた顔のままだった。ドゥラメンテという強敵の気配が、${kita.name} の気力を使い果たしたらしい。`,
      );
      await era.printAndWait(
        `控え室へ戻ってかなり経ってから、${kita.name} はようやく普通に口を開いた。`,
      );
      await kita.say_and_wait(`${callname}、日本ダービー、本当にすごいね……`);
      era.println();
      era.printButton('「落ち着いたか、キタ？」', 1);
      await era.input();

      await kita.say_and_wait(
        `うん、やっと、なんとか。でも、勝ちの実感はまだない。`,
      );
      await kita.say_and_wait(
        `変だよ、${callname}。キタ、自分の粘りには自信あったのに、でも……`,
      );
      await kita.say_and_wait(
        `勝ったあとも消えないこの疲れ、初めてなんだ。もしかして、こんな距離、向いてないのかな？`,
      );
      await era.printAndWait(
        `そう言う ${kita.name} は、少し落ち込んだ顔をした。`,
      );
      await era.printAndWait(
        `三冠の重み。2400メートルの長さ。強敵の威圧。この粘り強い子に、かなり応えている。`,
      );
      await era.printAndWait(
        `迷った末、${you.name} が口を開こうとしたとき、ドアの外から ${you.name} のよく知る声がした。`,
      );
      await baku.say_and_wait(`2400メートルが長すぎたんですよ、キタサンさん！`);
      await era.printAndWait(
        `ドアを押し、体操着の ${baku.name} が風のように入ってきて、自信満々にキタへ言った。`,
      );
      await era.printAndWait(
        `そういえば、観客席でも二人まとめて応援しているバクシンさんの姿を見た気がする。`,
      );
      await baku.say_and_wait(
        `いいえいいえ、キタサンさん、心配いりません！ その疲れは、距離に慣れていないだけ！ それだけです！`,
      );
      await baku.say_and_wait(
        `キタサンさんのよく走る2000メートルと2400メートル。差はたった400メートルでも、1200メートルの三倍、みたいな算数じゃないんです！`,
      );
      await baku.say_and_wait(
        `そのわずかな400メートルが、慣れるまでは体力にもスピードにも効く！ だから自分を疑って落ち込む必要はありません！ キタサンさん！`,
      );
      await kita.say_and_wait(`そ……そうなの！？ 慣れてないだけだったんだ！`);
      await era.printAndWait(
        `バクシンさんの教えを聞き、${kita.name} は腑に落ちた顔になり、声も弾んだ。`,
      );
      await era.printAndWait(
        `いつもの輝きを取り戻した ${kita.name} を見て、${you.name} は、普段のバクシンさんとは別人だという感想を腹にしまった。たまたまの閃きであってほしい。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_summer_start: (() => {
    const title = '夏合宿';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `若い${kita.uma_sex_title}たちにとって、中央の学園が毎年八月に行う夏合宿は、${
          kita.couple_title
        }がいくつかの休みに次いで楽しみにしている日だ。`,
      );
      await era.printAndWait(
        `トレセンの合宿といえば、陽射し、砂浜、南国の心地よい気温と、塩気のある潮風。`,
      );
      await era.printAndWait(
        `だが古参のトレーナーたちにとって、夏合宿は${kita.uma_sex_title}の力を伸ばす最上の時間だ。`,
      );
      await era.printAndWait(
        `合宿地の揃った器材。足首を捻りにくい柔らかい砂。泳ぎの練習に向いた澄んだ海。厳しいトレーナーでも、つい幸せそうな顔になる。`,
      );
      await era.printAndWait(
        `${kita.name}にとっても、夏合宿は自分の力を固める最上の時間だ。`,
      );
      await kita.say_and_wait(
        `うえあっ！ 砂、柔らかい！ ${callname}見て見て、足、全部埋まったよ！`,
      );
      await era.printAndWait(
        `白い砂浜を裸足で踏み歩き、黒い${kita.uma_sex_title}は笑って両手を高く上げ、餅のように滑らかな脇を見せた。`,
      );
      await kita.say_and_wait(
        `はは、すごいね${callname}！ これなら、どんなトレーニングでも耐えられそう～`,
      );
      await era.printAndWait(
        `子供みたいな${kita.name}を見て、${you.name} もつい、はしゃぎたくなった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_summer_end: (() => {
    const title = '夏合宿終了';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `まる一月の合宿メニューの下、${kita.name} の力は目に見えて伸びた。`,
      );
      await era.printAndWait(
        `調子のいいときの爆発する気迫。トレーナーの指導で得た勇気。そして怠らない鍛錬。`,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}を強くする材料が、水を混ぜた粉のように、目に見えて発酵し、形になり、すごい熱を放っている。`,
      );
      await era.printAndWait(
        `夏合宿が終わりに近づき、${
          you.name
        } もこの美味しい小さな${kita.uma_sex_title}に休みを出した。`,
      );
      await era.printAndWait(`${kita.sex}に、しっかり休ませよう。`);
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '昇り龍と伏せる龍';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `${kita.name} が廊下で ${you.name} にタオルでぎゅうぎゅうに包まれ、汗臭いタオルからようやく逃げ出したとき。`,
      );
      await era.printAndWait(
        `${kita.name} の幼なじみ、サトノ家の${
          daiya.sex_code - 1 ? 'お嬢さま' : '若さま'
        }ダイヤは蜂蜜ドリンクを二杯抱え、廊下の向こうに立っていた。`,
      );
      await era.printAndWait(
        `${you.name} の腕の中でタオルに擦られている ${kita.name} を、黙って見ている。`,
      );
      await kita.say_and_wait(`あ、ダイヤ！ レース、見に来てくれたんだ！`);
      await era.printAndWait(
        `汗で髪の濡れた ${kita.name} は振り返ってダイヤに声をかけ、急いで ${daiya.name} のもとへ走った。`,
      );
      await era.printAndWait(
        `二頭の子馬は親しげに抱き合い、豊かな体が密着して、淫らな肉の波を作る。`,
      );
      await daiya.say_and_wait(
        `ええ、見ましたわ、キタちゃん。こんなに素晴らしいレースを見せてくださって、ありがとう。`,
      );
      await daiya.say_and_wait(
        `胸が高鳴ります。私まで、もっと鍛えてレースに出たくなりましたわ。`,
      );
      if (era.get('cflag:67:招募状态') !== recruit_flags.yes) {
        await daiya.say_and_wait(
          `それに、あなたの ${callname} にも礼を言わねばなりませんわね。${callname} の鍛え方が、私の興味に火をつけましたの。`,
        );
        await era.printAndWait(
          `そう言ってサトノダイヤモンドは ${you.name} へ小さく頷き、会釈した。`,
        );
      }
      await kita.say_and_wait(`ええっ！？ ほんと、ダイヤ！ よかった`);
      await era.printAndWait(
        `キタは犬みたいに嬉しそうに尻尾を振り、ダイヤも親友の頰に軽く口づけした。`,
      );
      await daiya.say_and_wait(
        `ええ。だからキタちゃん、頑張って。『菊花賞』、必ずですわよ。`,
      );
      await kita.say_and_wait(
        `するよ！ えへへ、ダイヤの期待、絶対裏切れないから！`,
      );
      await era.printAndWait(
        `キタとダイヤのゆるい雑談を聞き、${you.name} は女の子同士の友情は面倒だなと呟きつつ、こっそり微笑んだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  three_crowns: (() => {
    const title = '喝采！ 三冠の祭り！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name} がゴールを駆け抜けたときの満場の歓声を聞くと、泣きたくなる。`,
      );
      await era.printAndWait(
        `最初の ${
          kita.name
        } は、ファンの一人もいない普通の${kita.uma_sex_title}だった。`,
      );
      await era.printAndWait(
        `才能はトレーナーたちにも認められていた。だが華のない地味な体では、走り始めのキタは本来の人気を得られなかった。`,
      );
      await era.printAndWait(
        `だがキタが力を証明し、『皐月賞』を勝ち、強敵から日本ダービーを奪った。`,
      );
      await era.printAndWait(
        `いま二冠の${kita.uma_sex_title}になったキタが、満場の歓声の中を走っている。`,
      );
      await era.printAndWait(
        `誰もがキタの名を呼び、ゴールの瞬間に必死に足を踏み鳴らし、馬券と入場券が狂ったように宙を舞い、ライブで嬉しさのあまり転ぶ者までいた。`,
      );
      await era.printAndWait(
        `治療費がキタ持ちにならなければいいが、と ${
          you.name
        } は苦笑しながら、舞台の${kita.teen_sex_title}を見続ける。`,
      );
      await era.printAndWait(
        `いまの ${kita.name} は音楽の拍に合わせてマイクを握り、ほとんど冷たく傲った顔で、指を客席の連なるファンへ滑らせている。`,
      );
      await era.printAndWait(
        `錯覚かもしれない。${you.name} は、キタがこちらを見たとき、表情が目に見えて柔らかくなるのに気づいた。`,
      );
      await era.printAndWait(
        `……錯覚だろう。そう思いながら、${you.name} も人混みと一緒に掛け声を合わせた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '見よ！ キタサン祭り！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name} がゴールを駆け抜けたときの満場の歓声を聞くと、泣きたくなる。`,
      );
      await era.printAndWait(
        `いちばん速い${kita.uma_sex_title}だけが勝てるレース。強者がため息をつき、怪我と無念に運命を呪う『菊花賞』。`,
      );
      await era.printAndWait(`いま、${kita.name} が自らの脚でそれを取った。`);
      await era.printAndWait(
        `最初は地味な性格と体しかなかった${kita.uma_sex_title}が、厳しい鍛錬の末、勝てる子へ変わった。`,
      );
      await era.printAndWait(
        `みんなの歓声、みんなの励ましが潮のように押し寄せる。キタが熱したこの空気は、祭りの掛け声のように競馬場に響き続ける。`,
      );
      await era.printAndWait(
        `キタが廊下の奥へ消えたあとも、名残はまだ聞こえた。`,
      );
      era.println();
      await kita.say_and_wait(
        `${callname}、ここでちょっと、一緒に座ってくれる？`,
      );
      await era.printAndWait(
        `廊下の曲がり角で、黒い${kita.uma_sex_title}は手探りでプラスチックの椅子に座った。`,
      );
      await era.printAndWait(
        `それから汗だくの ${kita.name} は、ぼんやり ${you.name} を見る。激しい運動でほんのり赤らんだ可愛い顔に、判然としない表情が浮かぶ。`,
      );
      await kita.say_and_wait(
        `えへへ、やっぱり実感ないなあ。いつもの『祭り』で走ったつもりなんだけど……`,
      );
      await kita.say_and_wait(
        `でも、やっぱり……${callname} がいなきゃ、ボク一人じゃここまで来られなかった。`,
      );
      await kita.say_and_wait(`だから、ありがとう！ ${callname}！`);
      await era.printAndWait(
        `そう言って ${kita.name} は ${you.name} へ深く一礼し、${kita.sex}の表情もようやくいつもの顔に戻った。`,
      );
      await era.printAndWait(
        `${you.name} は${kita.teen_sex_title}の頭を撫で、つい${
          kita.sex
        }と一緒に笑った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '聖夜の夕食';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `クリスマスのトレセンは、この十数年と同じように騒がしい。`,
      );
      await era.printAndWait(
        `いま ${you.name} と ${kita.name} も他の者と同じく、食堂で祝日を祝い、食堂の特別メニューを楽しんでいる。`,
      );
      await kita.say_and_wait(
        `むむむ……フライドポテト大盛り二つ、チキンナゲット四つにチキンバーガー、コーラ二杯……`,
      );
      await era.printAndWait(
        `${you.name} の隣で、担当はつま先立ちでカウンターのメニューを見、カロリーの高い品を遠慮なく頼んでいる。`,
      );
      await era.printAndWait(
        `今後のメニュー、増やさないとな……${you.name} は心のノートにそっと書き留めた。`,
      );
      await kita.say_and_wait(
        `うへへ～ ありがとう${callname}。せっかくのクリスマスなのに、付き合ってくれて。`,
      );
      await era.printAndWait(
        `大きな盆を抱えて空いた席に座り、${kita.name} は照れた顔でコーラを ${you.name} へ渡した。`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' はコーラを飲みながら周囲を見る。同じように山盛りを食べている子がちらほらいる。若者なら、これくらい頼んでもおかしくないのか……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が視線を戻すと、',
        kita.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の前でポテトを小口に食べていた。ただの庶民的な食べ物なのに、嬉しそうだ。',
      ]);
      era.println();
      era.printButton('「キタはポテトが似合う子だな。」（好感+10）', 1);
      era.printButton(
        '「キタはハンバーガーが似合う子だな。」（好感+5、恋慕+2）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(`え？ ポテトが似合うって？`);
        await era.printAndWait(
          `熱くて柔らかいポテトを二口で食べ、${kita.name} は首を傾げた。`,
        );
        await era.printAndWait(
          `${
            you.name
          } は少し迷って${kita.uma_sex_title}の口をじっと見る。薄く細い唇は健康な赤みを帯び、リップの光さえ残っている。`,
        );
        await you.say_and_wait(
          `いや、キタがポテトを衔えてる顔、子供っぽくて可愛いなって。`,
        );
        await kita.say_and_wait(`へえ？ そうかな……？`);
        await era.printAndWait(
          `${you.name} の言う通り一本衔えると、指くらいの長さの金色の棒が自然に垂れ、${kita.name} は顔を少し近づけた。`,
        );
        await era.printAndWait(
          `${kita.teen_sex_title}の無防備な顔が ${
            you.name
          } のすぐ前にある。まだ稚気の残る ${kita.name} は瞬きし、${
            you.name
          } の態度を不思議そうに見ている。`,
        );
        await era.printAndWait(
          `${you.name} は視線を下げた。制服の襟からキタの白い首が見え、色っぽい鎖骨がはっきり見える。`,
        );
        await kita.say_and_wait(`むむむ……`);
        await era.printAndWait(
          `ポテトを二三口で食べると、${kita.teen_sex_title}は背を椅子に預け直し、今度は大きな口でポテトを食べ始めた。`,
        );
        await era.printAndWait(
          `${you.name} はコーラを飲み、キタと過ごすこのクリスマスを楽しんだ。`,
        );
      } else {
        await kita.say_and_wait(`ハンバーガーって？`);
        await era.printAndWait(
          `ポテトを二三口胃へ送り、${kita.name} は首を傾げた。`,
        );
        await era.printAndWait(
          `……しまった、言い方を間違えた……${
            you.name
          } は少し迷って${kita.uma_sex_title}の口を見る。細くて潤んだ赤い唇。`,
        );
        await you.say_and_wait(
          `いや、キタの口、大きいから、ハンバーガー向きかなって。`,
        );
        await era.printAndWait(
          `${you.name} の理由を聞き、キタは頰を膨らませて不機嫌な顔をした。`,
        );
        await era.printAndWait(
          `わかる。そんなことを言われて喜ぶ${kita.child_sex_title}がいるわけがない……`,
        );
        await kita.say_and_wait(
          `${callname}……せっかくのクリスマスだよ？ キタを不機嫌にして、いいの？`,
        );
        await era.printAndWait(
          `口を尖らせ、カリカリとポテトを噛み、${kita.name} は脅しのように言った。`,
        );
        era.println();
        era.printButton(
          `「ごめん、ボクが悪かった……キタさま、許してください……」`,
          1,
        );
        await era.input();
        await era.printAndWait(`ふん～`);
        await era.printAndWait(
          `耳を上下に動かす ${kita.name} は体をそらし、目を閉じて手探りでポテトを口へ運ぶ。`,
        );
        await kita.say_and_wait(
          `むむむ……そんなこと言うなんて、キタ、${callname} にがっかりだよ。`,
        );
        await era.printAndWait(
          `その通りだ……こんな失言で大爆発していない時点で、キタは寛大すぎる……`,
        );
        await era.printAndWait(
          `${you.name} は両手を合わせ、不機嫌なキタへ取り入る言葉を並べた。`,
        );
        await era.printAndWait(
          `だが謝っているあいだ、キタはこっそり体を向けて ${you.name} の態度を見、得意げな悪い笑みを浮かべていた。`,
        );
        await era.printAndWait(
          `ハンバーガーを無理に食べさせられ、${callname} もハンバーガー向きだと証明されたあと、${
            you.name
          } の目には、キタがようやく機嫌が直ったように見えた。`,
        );
        await era.printAndWait(
          `${you.name} はハンバーガーを噛み、罰を受けつつ、キタと過ごす時間を楽しんだ。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_c: (() => {
    const title = '本物の祭り';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `満場の歓声の中、勝ちを手にした ${kita.name} は皆へ手を振る。`,
      );
      await era.printAndWait(
        `力のある走り。目に見える熱。そして ${kita.name} の万の思い。`,
      );
      await era.printAndWait(`競馬場で、またキタを見るみんなへ届いた。`);
      await era.printAndWait(`${you.name} にも。`);
      await daiya.say_and_wait(`見事な勝ちですわ、${callname}。`);
      await era.printAndWait(
        `${you.name} の隣で、${daiya.name} は小さく賛じた。`,
      );
      await daiya.say_and_wait(
        `キタちゃん${kita.sex}、『有馬記念』を勝ちましたのね。ふふ～ まるで祭りですわ。`,
      );
      await daiya.say_and_wait(
        `昔のキタちゃんには、今のようなことは絶対できなかった。その空気に、私も少し酔いましたわ。`,
      );
      await era.printAndWait(
        `ああ……${you.name} は心の中で、声に出さず ${daiya.name} に同意した。`,
      );
      await era.printAndWait(
        `昔のキタがどれだけ頑丈でも、勝てるのは昔のキタではない。今のキタだ。`,
      );
      await era.printAndWait(
        `${you.name} とサトノダイヤモンドは並んで、まだ手を振るキタを見送る。`,
      );
      await era.printAndWait(
        `クラシック級最後のレース、『有馬記念』は、こうして幕を閉じた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = 'キタの知り合い？';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} minoru 駿川たづな／ハーヴェストスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, minoru, you, callname) => {
      await era.printAndWait('一年はあっという間で、もう新年だ。');
      await era.printAndWait(
        `${you.name} の担当 ${kita.name} にとって、メニューの強化とローテの都合で、これから一年はかなり大事な一年になる。`,
      );
      await kita.say_and_wait(
        `んふんふん～ んふんふん～ ふんふん、んふんふん～`,
      );
      await era.printAndWait(
        `パジャマの ${kita.name} が門外で鼻歌を歌い、何かしている。${you.name} は部屋で正月の鍋を支度していた。`,
      );
      await era.printAndWait(
        '正月くらいはちゃんと過ごさないと。期待のあまり、キタに負荷をかけすぎてはいけない。',
      );
      await era.printAndWait(
        'トレーナー室で鍋を囲み、布団で寝るのは、どう考えても少し変だが。',
      );
      await era.printAndWait(
        `蜜柑とこたつを用意していると、${
          you.name
        } は${kita.teen_sex_title}がドアを開ける音と、複数の足音を聞いた。`,
      );
      era.println();
      era.printButton('「おかえり、キ……キタ！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} が振り返ると、いたのは大柄な男が二人だった。`,
      );
      await era.printAndWait(
        '二人とも異常にがっしりしていて、白いスーツ。眼鏡の男は顔中傷、もう一人の顎には小さな髭。',
      );
      await era.printAndWait(
        `冷酷な感覚、値踏みする目……どう見ても極道だ！ 駿川さん、${you.name} はこいつらをどう通したんだ！？`,
      );
      await kita.say_and_wait(
        `あ、花山兄さん、桐生兄さん。この人がボクの${callname}だよ～`,
      );
      await era.printAndWait(
        `二人の後ろから、担当がにこにこ顔を出し、紙袋の贈り物を抱えて ${you.name} に紹介した。`,
      );
      await kita.say_and_wait(
        `${callname}、前に話した花山兄さんと桐生兄さんだよ。`,
      );
      await kita.say_and_wait(
        `えへへ、顔は怖いけど、キタと仲のいい善人だから、怖がらないで。`,
      );
      await era.printAndWait('花山「あ。」');
      await era.printAndWait('桐生「ん。」');
      await era.printAndWait(
        `二人の男は揃って頷き、キタの後ろから ${you.name} へ朴訥な笑みを見せ、商店街で買った羊肉の袋をいくつか持ち上げた。`,
      );
      await era.printAndWait(
        `キタの声に従って、${you.name} は伝説の極道たちと、極道流の気楽な時間を過ごした。`,
      );
      era.drawLine({ content: 'しばらくして' });
      await kita.say_and_wait(`また来年！ 桐生兄さん、花山兄さん！`);
      await era.printAndWait(
        `鍋を食べ、極道伝説を何時間も語ったあと、${you.name} とキタは二人の兄さんが校門へ向かうのを見送った。`,
      );
      await era.printAndWait(
        `……そして、道端の東屋に座る ${minoru.name} へ、深く一礼した。`,
      );
      await era.printAndWait(
        `最後のあれは見なかったことにしよう、と ${you.name} は思い、振り返ってこの良い夜を楽しんだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = '新年の挨拶';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '弟子たち「師匠、明けましておめでとうございます！！！」',
      );
      await era.printAndWait(
        `午後三時十五分。トレーナーの ${you.name} は ${kita.name} の父の弟子たちの耳をつんざく挨拶を聞き、ようやく息を吐いた。`,
      );
      await era.printAndWait(
        `${you.name} は黒い着物を着て、畳の上で体を起こし、隣の男へ一礼した。`,
      );
      await era.printAndWait(
        `隣のキタの父は小さく頷く。大柄で、怒らなくても威がある。${you.name} は極道に雇われた文化人顧問みたいに見えた。`,
      );
      await era.printAndWait(
        `蓮の葉の紋の黒い着物を同じく着て、満面の笑みで気楽に ${you.name} の隣に正座するキタがいなければ、${you.name} はとっくに立ち上がって弟子の列へ並んでいただろう。`,
      );
      await kita.say_and_wait(
        `${callname}、こんなに人前は初めてで、緊張してるでしょ～`,
      );
      await era.printAndWait(
        `襖を閉め、キタはにこにこ ${you.name} のそばへ寄って言った。`,
      );
      await era.printAndWait(
        `${you.name} は担当の頭を撫で、けらけらした軽い騒ぎの中、新しい一年を楽しみ始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '少し砕けた甘酒の味';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `シニア級のバレンタイン、${kita.name} とトレーナー室で会う約束をしていた。`,
      );
      await era.printAndWait(
        `チョコを渡す日ではあるが、ドアを開けると、キタが珍しく装っていた。`,
      );
      await kita.say_and_wait(`あっ！ ${callname}、もう来てたの！`);
      await era.printAndWait(
        `高価な着物の ${kita.name} は慌てて机を整え、${you.name} へ緊張して深く一礼した。`,
      );
      await kita.say_and_wait(
        `${callname}、バレンタインおめでとう！ あの、これ、これ！ キタからトレーナーへの贈り物です。受け取ってください！`,
      );
      era.println();
      era.printButton(`「贈り物か？ ありがとう、キタ。」`, 1);
      await era.input();
      await era.printAndWait(
        `期待して箱を開けると、高級な箱の中は粉々に砕けたチョコだった。`,
      );
      await era.printAndWait(
        `小さな仕切りには、無色透明の液体の気配……甘酒だ！`,
      );
      await kita.say_and_wait(
        `うう……${callname} を驚かそうとしたのに、なんでかチョコ、全部割れちゃって……`,
      );
      await era.printAndWait(
        `箱の中を見て、この惨状をすでに知っていた ${kita.name} は不安な顔をした。`,
      );
      await era.printAndWait(
        `${you.name} はチョコを一粒口へ入れ、砕けた中の、ほのかに酒の香る餡を噛む。`,
      );
      await era.printAndWait(
        `うん、担当がバレンタインにくれた、すごくいいチョコだ。キタの頭を撫で、滑らかな髪が掌を滑る感触を味わう。`,
      );
      await era.printAndWait(
        `${you.name} は ${kita.name} の手を引いて机の前に座らせ、二人でバレンタインのチョコを味わい始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '「ご褒美」';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `ホワイトデーの朝、担当へ贈り物を渡すため、早くトレーナー室へ来た。`,
      );
      await era.printAndWait(
        `たぶんチョコのような甘いものが欲しいだけだろう。それでも ${you.name} は、キタに欲しいご褒美を尋ねた。`,
      );
      await kita.say_and_wait(
        `ご褒美？ 普通のチョコで……ううん、その……ご褒美なら……`,
      );
      await kita.say_and_wait(`別のやり方で、褒めて、もらえる……？`);
      era.drawLine({ content: '夜' });
      await kita.say_and_wait(`トレーナー……学園でこんなの…見られないよね…♡`);
      await era.printAndWait([
        '夜のトレセン学園の廊下で、',
        you.get_colored_name(),
        ' は全裸の ',
        kita.get_colored_name(),
        ' と今日のデートをしている。',
      ]);
      await era.printAndWait(
        `発情した匂いの染みた犬の首輪が、${kita.uma_sex_title}の白い首にきつく嵌まり、繋がったリードを ${
          you.name
        } が握っている。`,
      );
      await era.printAndWait(
        `ピンクの小さい舌が淫らに口から垂れ、${kita.teen_sex_title}の粗い息に合わせて甘い涎が止まらない。`,
      );
      await era.printAndWait(
        `普段は誇らしげで可愛い${kita.teen_sex_title}が、いま黒い透ける布の眼帯で目を隠され、顔で ${
          you.name
        } の裾を擦っている。`,
      );
      if (kita.sex_code !== 1) {
        await era.printAndWait(
          `${kita.uma_sex_title}の胸では、一本のリボンが二つの大きくてピンクの乳首を結び、乳房の重みで床を擦りながら引かれている。`,
        );
      }
      await kita.say_and_wait(
        `学園でトレーナーにリードを握られて…ペットみたい…はぁ…♡ 廊下でするって思うと…お腹の奥…熱い…すごい…♡`,
      );
      await era.printAndWait(
        `${you.name} の担当が露出もオナニーも好きな変態だと知られたら、${you.name} は間違いなく牢屋行きだ。`,
      );
      await era.printAndWait(
        `${
          you.name
        } がリードを引いて首輪を軽く締めると、${kita.teen_sex_title}は小さく唸ったあと、首の拘束に頰を赤らめ、顔で ${
          you.name
        } の靴を擦り、嬉しそうに尻尾を振った。`,
      );
      await era.printAndWait(
        `仕方ない……そう思いながら、${you.name} は ${kita.name} を連れて脇の部屋へ入る。`,
      );
      await era.printAndWait(
        `それから、${kita.name} のものとは思えない淫らな喘ぎと肉を打つ音が、隠すこともなく男子トイレから溢れ出した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = 'ファン感謝祭！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `ファンの支えに感謝するため、${you.name} とキタは商店街の食堂で感謝のおもてなしを開いた。`,
      );
      await era.printAndWait(
        `箱を積んだ台の後ろに立ち、キタはマイクを握り、明るい声でトレセン音頭を歌う。`,
      );
      await kita.say_and_wait(`ゆらりゆらり、ひらりひらり、舞い踊る花浴衣～`);
      await era.printAndWait(
        `手を振りながら楽しそうに音頭を歌う。${you.name} は台の後ろに座り、${you.name} 以外には見えないその姿を黙って見ていた。`,
      );
      await era.printAndWait(
        `キタが助けてきたみんなの支えの下、今回の感謝祭はこうして幕を閉じた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai: (() => {
    const title = 'ライバルのいない世界';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `レース前、実は ${kita.name} が『大阪杯』を取れるか、心配もしていた。`,
      );
      await era.printAndWait(
        'G2からG1へ上がったレースだけに、『大阪杯』は不確定が多い。出走メンバーも強敵揃いだ。',
      );
      await era.printAndWait('だから勝ったあと、キタも少し驚いて見えた。');
      await era.printAndWait(
        `驚きの奥で、${kita.name} の顔にあるのは、それ以上に喜びと興奮だった。`,
      );
      await kita.say_and_wait(`${callname}、ボク、今年の目標、突破したよ。`);
      await era.printAndWait(
        `トレーナーの手を握り、${kita.name} は興奮して言う。`,
      );
      await era.printAndWait(
        '取り立てて誇れる持ち味もなく、目を引く実績がある子でもない、と思っていた。',
      );
      await era.printAndWait(
        `だが苦手なレースでも、${kita.name} の努力で${kita.sex}は乗り越えた。`,
      );
      await era.printAndWait(
        `いま ${kita.name} は、その気持ちを自分のトレーナーへ届けたい。`,
      );
      await kita.say_and_wait(
        `${callname}！ うん！ できないことなんてないよ！ 走り切れないレースもない！`,
      );
      await kita.say_and_wait(
        '今回できた。次も絶対できる！ だから次の『天皇賞（春）』、楽しみにしてて！',
      );
      await kita.say_and_wait(
        '次のレース、勝ちの栄冠をあなたに捧げる！ やってみせる！ 努力したあと、できないことなんてないって証明する！',
      );
      await era.printAndWait(
        `その言葉の熱が胸を温める。いつもの温かい笑顔の中、${you.name} は密かに決意した。`,
      );
      await era.printAndWait('担当を、必ず勝たせる。');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr: (() => {
    const title = 'そびえる絶壁';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} ag エアグルーヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, ag, you, callname) => {
      await era.printAndWait(
        `${kita.name} がウイナーズステージでファンへ手を振るあいだ、勝ちに感動したファンの歓声は、屋根を飛ばしそうだった。`,
      );
      await era.printAndWait(`ファンA「よくやった、${kita.name}！」`);
      await era.printAndWait(
        `ファンB「これだよ、ボクらが待ってた${kita.uma_sex_title}！」`,
      );
      await era.printAndWait(`ファンC「絶対、春秋連覇しろよ！」`);
      await era.printAndWait(
        `全力の走りの下、${kita.name} を愛するファンもどんどん増えている。`,
      );
      await era.printAndWait(
        `顔を向けるみんなも、この勝ちのあと、${kita.name} の負けず嫌いな努力の姿に憧れ、生き方を少し変える者もいるだろう。`,
      );
      await era.printAndWait(`だが——`);
      await ag.say_and_wait(`${kita.name} の${callname}、少しお話できますわ？`);
      await era.printAndWait(
        `音楽が鳴った瞬間、${you.name} の耳元に女の声がした。`,
      );
      await era.printAndWait(
        `${you.name} が振り返ると、目の前にいたのはトレセン生徒会の副会長、『女帝』の異名を持つ${ag.name}だった。`,
      );
      await ag.say_and_wait(
        `${kita.name} さんの勝利ライブを楽しみたいお気持ちは分かりますわ。ですから、二言だけ申し上げて失礼します。よろしいですわね？`,
      );
      era.println();
      era.printButton('「構わない。どうぞ。」', 1);
      await era.input();
      await ag.say_and_wait(
        `ありがとうございます。今の世代で最強、世代を代表する${kita.uma_sex_title}の一人として、${
          kita.name
        } さんの努力は周知の事実ですわ。ライブが始まる前に、手短に済ませます。`,
      );
      await ag.say_and_wait(
        `昨年の『菊花賞』で果たせなかった、ドゥラメンテさんと ${kita.name} さんの対戦について、お考えはありますわ？`,
      );
      await era.printAndWait(
        `激しいドラムが耳元で鳴り、それに乗せてキタのよく通る、力のある歌声が響く。`,
      );
      await era.printAndWait(
        `昨年の『宝塚記念』のあと、今の世代で最強の${kita.uma_sex_title}の一人であり、キタの強敵でもあるドゥラメンテは、体の都合で『菊花賞』を回避した。`,
      );
      await era.printAndWait(
        `それ以来、キタに相手とやり合う機会はほとんどない。相手にとっても心残りだろう……だが、一人で決められる話ではない。`,
      );
      await ag.say_and_wait(
        `私は伝言に来ただけですわ。あの一戦に決着をつけるかどうかは、あなたと ${kita.name} の判断です。`,
      );
      await era.printAndWait(
        `${you.name} が ${kita.name} と相談したがっているのを察したのか、${ag.name} は微笑んで気迫を一歩引いた。`,
      );
      await era.printAndWait(
        `一言残すと、${you.name} に別れを告げ、踵を返して去っていく。`,
      );
      await ag.say_and_wait(
        `ご興味がおありなら、次は仁川へ。『宝塚記念』で相手と勝負なさってはいかがですわ。`,
      );
      await era.printAndWait(
        `舞台の上、${kita.name} のライブは新しい山場を迎えていた。${you.name} は『宝塚記念』で決する構想を考えつつ、担当の舞へ目を戻す。`,
      );
      await era.printAndWait(
        `${ag.name} の見立ては、一つだけ違っていた。最初から ${you.name} は、${kita.name} が逃げる可能性など考えていない。`,
      );
      await era.printAndWait(
        `その心配は、どうすれば勝てるか、ただそれだけだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_s: (() => {
    const title = '手渡されたバトン';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name} とドゥラメンテの一騎打ちは、最終的に ${kita.name} の勝ちで幕を閉じた。`,
      );
      await era.printAndWait(
        `話題性たっぷりのこの一戦に阪神競馬場は満員で、発売開始から三十分でチケットは奪い合いになった。`,
      );
      await era.printAndWait(
        `この伝説の対決をこの目で見ようと、人が殺到した————そして二人の強い${kita.uma_sex_title}は、その期待を確かに裏切らなかった。`,
      );
      await kita.say_and_wait(`限界、だったよ。ボク。`);
      await era.printAndWait(
        `${kita.teen_sex_title}たちの蹄に踏まれた芝はいまめくれ、下の湿った土を見せている。`,
      );
      await era.printAndWait(
        `すでに無人の阪神競馬場に座り、${kita.name} の眼前は斑に欠けた芝だ。${kita.sex}の体力は尽き、${kita.sex}の意志は張り詰めたまま限界だった。`,
      );
      await era.printAndWait(
        `それでも ${kita.name} は、足元の芝を見つめている。`,
      );
      await kita.say_and_wait(
        `引退間近のドゥラメンテさんとの勝負は楽しかった。でも、このあとのレースは、きっと厳しいよね。`,
      );
      await kita.say_and_wait(
        `天皇賞、ジャパンカップ、有馬記念。それにクラウンさんとシュヴァルグランさん、二人の強敵……うわあ～ 考えるだけで頭が痛くなる……`,
      );
      await era.printAndWait(
        `ため息混じりに恨めしい声を出し、${kita.name} はつま先でめくれた土を突く。`,
      );
      await kita.say_and_wait(
        `でも、これがボクたちの走りなんだ。勝者は敗者の分まで背負って、${callname} と一緒に勝ち続ける。ドゥラメンテさんと、そう約束したから。`,
      );
      await era.printAndWait(
        `${kita.name} は両腕を開き、競馬場に背を向けて、揺るがない顔をした。`,
      );
      await era.printAndWait(
        `合宿明けの十月からはG1の連戦だ。この先のレースは、きっとさらに厳しくなる。`,
      );
      await era.printAndWait(
        `経験を積んだ古馬と、頭角を現す新顔。連戦そのものが、すでに体力を削る。`,
      );
      await era.printAndWait(`だが。${kita.name} なら、きっと……`);
      await kita.say_and_wait(`${callname}、勝ち続けよう！`);
      await era.printAndWait(
        `そうだ。${kita.sex}はそう言って、温かい笑みを見せる。`,
      );
      await era.printAndWait(`それが ${kita.name}。黒い祭りだ。`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_s: (() => {
    const title = '泥の先は花道';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.print_and_wait(`勝った。勝ったんだ。このレースを取った。`);
      await kita.print_and_wait(
        `大きく息をつき、重い音を漏らして、${kita.name} はゴールの向こうでジョギングしながら止まった。`,
      );
      await kita.print_and_wait(
        `引きつる両足はもう限界で、実際、何度も両脚がぶつかった。`,
      );
      await kita.print_and_wait(
        `震えを止めようとしても止まらず、結局みんなの視線の中、両手で脚を押さえるしかなかった……`,
      );
      await kita.say_and_wait(
        `まずい。これ、恥ずかしいんじゃ……何か言わないと……`,
        true,
      );
      await kita.say_and_wait(`さすがG1、噂に違わないね～ あはは～`, true);
      await kita.print_and_wait(
        `そんな感想で恥ずかしさを消したかったのに、その感想すら出す余裕がない。`,
      );
      await kita.say_and_wait(
        `うわあ……これ、本当にちょっと恥ずかしい。それに、何笑ってるの……みんな寄ってきて見てるし……`,
        true,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}A「キタサンさん！ 顔！ 顔！」`,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}B「ぼうっとしてないで、大人を呼んで！」`,
      );
      await era.printAndWait(`${kita.uma_sex_title}C「うわあっ！」`);
      await kita.print_and_wait(
        `ん？ どうしてみんなそんなに慌ててるの。顔に土がついた？`,
      );
      await kita.print_and_wait(
        `いや、触っても何も。べたべたした汗の感触だけ……走って顔が赤くなって、変な顔してた？`,
      );
      await kita.print_and_wait(
        `うわあ、やだ……ダイヤ${kita.couple_title}みたいに、きらきらの${
          kita.sex_code - 1 ? 'お嬢さま' : 'スター'
        }でいたかったのに、これじゃ大人げない……`,
      );
      await kita.say_and_wait(
        `『天皇賞（秋）』の${kita.uma_sex_title}が、走って顔真っ赤の子だなんてやだ……うえぇ～ ${callname}、どこ？`,
        true,
      );
      await kita.print_and_wait(
        `きょろきょろと${callname}の姿を探し、${
          kita.name
        } は少し先で、${you.name} が柵を越えてこちらへ走ってくるのに気づいた。`,
      );
      era.println();
      era.printButton('「キタ！ 顔！ 鼻！ 大丈夫か！」', 1);
      await era.input();
      await kita.print_and_wait(
        `？ ${callname}まで、わけのわからないこと言ってる……？ あ、レースの感想？`,
      );
      await kita.print_and_wait(
        `${kita.name} は思い切り鼻をすする。鉄のような、妙に香ばしい土の匂いが喉まで入ってきた。`,
      );
      await kita.print_and_wait(
        `ゲート開放のとき、不具合で跳ね返った鉄扉に額と鼻を割られ、顔中血の ${kita.name} はこちらへ笑顔を向け、大声で言った。`,
      );
      await kita.say_and_wait(`味、すっごく甘いよ！`);
    };
    f.title = title;
    return f;
  })(),
  japa_cup_s: (() => {
    const title = '交わる源流';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name} が最初にゴールを駆け抜けたあと、${you.name} は柵を越え、急いで ${kita.name} のそばへ走った。`,
      );
      await era.printAndWait(
        `わずか一月の療養のあと、${you.name} の担当はなお『ジャパンカップ』への出走を選び、みんなの心配を背にコースへ立った。`,
      );
      await era.printAndWait(`だが結局、キタは勝った。それで十分だ。`);
      await kita.say_and_wait(
        `えへへ、走ってる途中で蹄鉄が落ちちゃって、裸足で走るしかなかった！`,
      );
      await era.printAndWait(
        `顔にまだガーゼを巻いた ${kita.name} がへへっと笑うのを見て、${you.name} は胸が引きつり、不憫でならなかった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_s: (() => {
    const title = '笑顔という名の花火';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(`実況「${kita.name}！ ゴールイン！」`);
      await era.printAndWait(
        `観客の拍手と歓声に乗せて、${kita.name} は空へ高く腕を上げ、勝ちを告げるように見えた。`,
      );
      await era.printAndWait(
        `二度『有馬記念』に挑んだこの${kita.uma_sex_title}が、いま競馬場で『有馬記念』を取った。`,
      );
      await era.printAndWait(
        `華やかでもなく、傷さえ残る姿のまま、年末の舞台でみんなに最上の締めを献じた。`,
      );
      await era.printAndWait(
        `気づくと ${
          you.name
        } はすでにキタのそばへ寄り、タオルで${kita.teen_sex_title}の額の汗を、痛ましげに拭いていた。`,
      );
      era.println();
      era.printButton('「キタ、調子はどうだ？」', 1);
      await era.input();
      await kita.say_and_wait(
        `頭の中、ごちゃごちゃ。正直キタ、頭あまり良くないから、走るのと考えるの、片方しかできない……`,
      );
      await kita.say_and_wait(
        `でも、みんなの応援も、全力の相手も、ボク自身の努力も、裏切れなかったと思う。`,
      );
      await era.printAndWait(
        `緩んだ顔の ${kita.name} はつま先立ちし、細い指が ${you.name} の腕を掴む。`,
      );
      await era.printAndWait(
        `人を灼くような熱を持ったきれいな瞳が、笑みを含んで ${you.name} と向き合った。`,
      );
      await kita.say_and_wait(`それに、${callname} のことも、裏切れなかった。`);
      await kita.say_and_wait(
        `へへへ～ これがボクの、人生最後のレース。よかった……`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}の頰は羞恥と走りで真っ赤で、この言葉を口にした${
          kita.sex
        }自身も、少し戸惑っている。`,
      );
      await era.printAndWait(
        `まだ子供なんだ、と ${you.name} は思い、両腕を開いて ${kita.name} を強く抱きしめた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = 'キタサンブラックとのバーの夜';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${you.name} の担当と、あるバーで会う約束をしていた。`,
      );
      await era.printAndWait(
        `${kita.name} と三年を過ごし、ついに終わりが来る。今月が、${
          kita.sex
        }と過ごす最後の月になるのかもしれない。`,
      );
      await era.printAndWait(
        `そんな寂しい思いを抱えたまま、${you.name} は地下バーの黒猫の看板を押し、中へ入った。`,
      );
      await kita.say_and_wait(`あ、${callname}……い……いらっしゃいませ～`);
      await era.printAndWait(
        `ドアを開けると、無人のバーに、制服の${kita.name}だけがカウンターに座っていた。`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}は空のグラスを揺らし、頰はほんのり赤い。そばにあるのは、封を切った炭酸飲料一本だけだ。`,
      );
      await kita.say_and_wait(
        `あの……はは……このお店、お母さんの知り合いがクリスマスに実家へ帰るから、静かな場所が欲しくて借りたの。`,
      );
      await kita.say_and_wait(`だから……お酒はないよ、${callname}～ あははは～`);
      era.println();
      era.printButton(`「キタと一緒じゃ、酒は飲まないさ……」`, 1);
      await era.input();
      await kita.say_and_wait(`そうだよね……`);
      await era.printAndWait(
        `窓際で脚付きグラスの炭酸を飲み、キタは外の寂しい街を見て、考え込んでいる。`,
      );
      await era.printAndWait(
        `黒い馬耳が冷たいガラスに触れ、トントンと軽く叩いている……`,
      );
      await kita.say_and_wait(`${callname}、こういう静かな感じ、好き？`);
      era.println();
      era.printButton(`「静か、か？」`, 1);
      await era.input();
      await kita.say_and_wait(
        `うん。窓を叩く雪。人のいない通り。かすかな風の音だけ。`,
      );
      await kita.say_and_wait(`こういうの、キタ、わりと好きなんだ……`);
      await era.printAndWait(
        `いつもはしゃいでいる ${kita.name} が、こんな景色を好むとは、少し意外だった。`,
      );
      await era.printAndWait(
        `${you.name} も ${kita.name} と一緒にガラスへ寄り、聖夜の静けさと冷たさを味わう。`,
      );
      await era.printAndWait(`最後の数日として、悪くない。`);
    };
    f.title = title;
    return f;
  })(),
  kitasan_touch: (() => {
    const title = '緊急開店・キタマッサージ！';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(
        `${callname}！ いらっしゃいませ、キタマッサージ店です！`,
      );
      await era.printAndWait(
        `トレーナー室のドアを開けると、着物の ${kita.name} がドアの内側に跪いていた。後ろの机には白い布がかかっている。`,
      );
      await era.printAndWait(
        `何をしているんだ……${
          you.name
        } は、今日メニューのないはずの${kita.teen_sex_title}を呆然と見る。`,
      );
      await kita.say_and_wait(
        `へへへ～ ${callname} に世話になってるお礼と、最近、体がきしきし鳴ってるから。`,
      );
      await kita.say_and_wait(
        `だから……うん、そう。今日のキタは臨時マッサージ係。${callname} の体をほぐすマッサージ${
          kita.sex_code - 1 ? '女将' : '大将'
        }、キタです！`,
      );
      await era.printAndWait(
        'そう言ってキタは額を床につけ、三指を額の前に揃え、滑らかで柔らかい背中を見せた。',
      );
      await era.printAndWait(
        `${
          you.name
        } はこのとき気づく。キタが着ているのは腹掛けに近い後ろ開きで、身をかがめれば${kita.uma_sex_title}の背に溢れる色気が丸見えだ。`,
      );
      era.printButton('「いやいや、いくらなんでもおかしいだろ……」', 1);
      era.printButton('「じゃあ、お願いするよ」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name} は後ろへ下がって逃げようとしたが、脊椎のきしむ音と感触で、${you.name} は苦しく腰を落とした。`,
        );
        await era.printAndWait(
          `……だめだ。キタの施術を受けるしかない……キタが許さなくても、この腰が許さない……`,
        );
        await era.printAndWait(
          `${you.name} は向き直り、よろよろとキタの方へ歩いた。`,
        );
        era.drawLine();
        await era.printAndWait(
          '体のあちこちできしきしと音はするが、たまに痛む以外は気持ちいい。',
        );
        await era.printAndWait(
          `疲れた体がキタの指の下で軽くなる。優しくて力のあるマッサージが体を癒やしていく。さすがキタ……そう思いながら、眠気に負けた ${you.name} はそのまま眠った。`,
        );
      } else {
        await era.printAndWait(
          `${kita.name} はトレーナーへたおやかな笑みを見せ、犬のように四つん這いで ${you.name} に服を脱がせ、つなぎ合わせた机へうつ伏せにさせた。`,
        );
        await era.printAndWait(
          `この子、誰に習ったんだ……？ ${
            you.name
          } は不思議そうな顔のまま、${kita.teen_sex_title}が立ち上がって ${
            you.name
          } の背中に跨るのを感じる。`,
        );
        await era.printAndWait(
          `三十秒ほど待ったあと、${kita.name} の細くて力のある指が、${you.name} の背の凝ったところを押していく。`,
        );
        await kita.say_and_wait(
          `${callname} の体、すごい凝ってる……${kita.uma_sex_title}と違って、体はちゃんと休めてね。`,
        );
        await era.printAndWait(
          '体のあちこちできしきしと音はするが、たまに痛む以外は気持ちいい。',
        );
        await era.printAndWait(
          `疲れた体がキタの指の下で軽くなる。優しくて力のあるマッサージが体を癒やしていく。さすがキタ……そう思いながら、眠気に負けた ${you.name} はそのまま眠った。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_event: (() => {
    const title = '温泉旅行';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     * @param {boolean} has_ticket 温泉旅行券を持っている（商店街の抽選）
     */
    const f = async (kita, you, callname, has_ticket) => {
      await era.printAndWait(`${you.name} はトレーナー室で書類を整えていた……`);
      await kita.say_and_wait(`${callname}！ あの、温泉券の話！`);
      await kita.say_and_wait(`この三年、ボク、ちゃんとがんばったよね！`);
      await kita.say_and_wait(`そうだよね、${callname}！`);

      await era.printAndWait(
        `突然トレーナー室へ飛び込んできたキタが、そう大声で ${you.name} に尋ねる。`,
      );
      await era.printAndWait([
        '急に何を言い出すんだ？',
        you.get_colored_name(),
        ' は少し驚いて、眼前の',
        kita.teen_sex_title,
        'を見た。',
      ]);
      era.println();
      era.printButton('「ああ、ちゃんとがんばったよ。」', 1);
      await era.input();
      await era.printAndWait(
        `何にせよ、この三年の勝ちは、誰の目にも明らかだ。`,
      );
      await era.printAndWait(
        `${kita.name} の努力は疑いない。自分の見込みすら超えていた。結果も、目に見えている。`,
      );
      await kita.say_and_wait(
        `ありがとう。この三年、キタはずっと自分を抑えてた……`,
      );
      await kita.say_and_wait(
        `でも、いまは${callname} の努力もあるんだから、ちょっとくらいキタにご褒美、いいよね！`,
      );
      await era.printAndWait(
        `黒髪の${kita.teen_sex_title}が一歩ずつ迫り、細い両手で ${
          you.name
        } の肩を押さえて動けなくする。`,
      );
      if (has_ticket) {
        await kita.say_and_wait([
          'だから ',
          callname,
          '、前の温泉券で温泉行こう！',
        ]);
        era.println();
        era.printButton(
          `「行ける！ キタ、手を離して、今すぐ行く！ だから離して！」`,
          1,
        );
        await era.input();
        await era.printAndWait([
          'そう言いながら、',
          you.get_colored_name(),
          ' は慌てて引き出しからしまっておいた温泉券を出し、',
          kita.get_colored_name(),
          ' の前で振った。',
        ]);
      } else {
        await kita.say_and_wait(['だから ', callname, '、温泉行こう！']);
        await era.printAndWait([
          kita.get_colored_name(),
          ' は言いながら温泉券を一枚見せた。うっすら「北」で始まる言葉が印してある……',
        ]);
      }
      era.drawLine({ content: '温泉旅館' });
      await era.printAndWait(
        `ご褒美に逸るキタが何かとんでもないことをしないよう、${you.name} はキタと温泉旅館へ来た。`,
      );
      await kita.say_and_wait(
        `ふああ～ ここの温泉、気持ちいい～ 体も心も、きれいさっぱり～`,
      );
      await era.printAndWait(
        `白い後ろ首をタオルで拭き、${kita.name} は柔らかい座布団に跪き、滑らかな馬の尻尾が柔らかく力のある両足のあいだで揺れている。`,
      );
      await era.printAndWait(
        `普段の張り詰めた空気は消え、温泉のあと、キタは大分ほぐれて見えた。`,
      );
      await era.printAndWait(`くすぐっ、くすぐっ。`);
      await era.printAndWait(
        `${you.name} はぞくりとし、いつの間にかキタが床へうつ伏せになり、尻尾で ${you.name} の足裏をくすぐっているのに気づいた。`,
      );
      await era.printAndWait(
        `${you.name} に見つかると、キタはすぐ畳の上で転がり、けらけら笑い出した。`,
      );
      await kita.say_and_wait(
        `ふふふ～ 普段ずっと張り詰めてるから、緩むと子供みたいにトレーナーの前で甘えたくなるんだ……わっ！`,
      );
      await era.printAndWait(
        `転がっていた ${kita.name} はいつの間にか壁にぶつかり、大声を上げて間の抜けた笑顔を見せた。`,
      );
      await era.printAndWait(
        `たまに馬鹿をして騒ぐのも悪くない。そう思いながら、${you.name} は ${kita.name} と部屋で、同じように馬鹿笑いして戯れ始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_wife_end: (() => {
    const title = '君だけの黒い夕陽';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `三年はあっという間に過ぎ、${you.name} と ${kita.name} は別れの日を迎えた。`,
      );
      await kita.say_and_wait(
        `あと数日で、あなたと離れちゃうね。なんだか、心細いよ。`,
      );
      await kita.say_and_wait(
        `${callname}、何か月かしたら新しい子を迎えて、その子専属のトレーナーになるんでしょ。`,
      );
      await kita.say_and_wait(`へへ、ちょっと嫌だなあ……`);
      await era.printAndWait(
        `トレーナー室に置いていた本と荷物を抱え、${kita.teen_sex_title}は少し寂しそうな顔をした。`,
      );
      await era.printAndWait(
        `黄昏の静けさの中を並んで歩く。廊下にキタのたたたという足音が響き、誰もいない教室に残る。`,
      );
      await era.printAndWait(
        `何度並んで歩いたか分からない道なのに、今日は格別に長い。`,
      );
      await era.printAndWait(`なにしろ ${kita.name} は、実家へ帰る予定だ。`);
      await era.printAndWait(
        `年を重ねた父へ無事を伝えるだけだし、戻ってこないと決まったわけではない。だがトレセンへ戻っても、${kita.teen_sex_title}があなたと組み続ける保証はない。`,
      );
      await kita.say_and_wait(`ボク、${callname} が好きだよ。`);
      await era.printAndWait(
        `曲がり角を過ぎ、${kita.teen_sex_title}はさらりと言った。`,
      );
      await era.printAndWait(
        `夕陽がキタの子供っぽい顔を照らし、いつもの温かい笑みを、いつもと違う色に染める。`,
      );
      await kita.say_and_wait(
        `というか、いちばん好き。${callname} の伴侶になって、ずっと一緒にいたい。`,
      );
      await era.printAndWait(
        `このとき ${you.name} は気づく。キタの頰の赤は、温かい夕陽のせいだけではなかった。手入れした黒髪が滑らかに落ち、香水の匂いさえする。`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}は照れた顔をし、いつものはしゃぎとは違う、臆病で取り入るような声で、${
          kita.name
        } は ${you.name} に尋ねた。`,
      );
      await kita.say_and_wait(
        `${callname}、ずっとボクのこと、好きでいてくれる？`,
      );
      await era.printAndWait(`たた、たた、たた。`);
      await era.printAndWait(
        `静かな廊下に二人の足音だけが残る。頰を染めた夕陽は、まだ引いていないらしい。`,
      );
      era.println();
      era.printButton('「キタ」', 1);
      await era.input();
      await kita.say_and_wait(`はい。`);
      era.println();
      era.printButton('「俺も、ずっと、いちばん好きだった。」', 1);
      await era.input();
      await era.printAndWait(
        `足音はぴたりと止み、夕陽の心臓だけが、ますます高鳴っていく。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_love_end: (() => {
    const title = 'キタサンブラックの小さな祭り';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `小さな${kita.uma_sex_title}A「うわあ！ キタ${
          kita.elder_sibling_sex_title
        }が来た！ 逃げろ！」`,
      );
      await kita.say_and_wait(`待て待て！`);
      await era.printAndWait(
        `小学校の芝生の校庭で、${
          kita.name
        } はけらけらと幼い${kita.uma_sex_title}を追い回し、一緒に騒いでいる。`,
      );
      await era.printAndWait(
        `地方の学校を対象にした公益のレース座談会だ。${kita.name} のローテが一段落したあと、トレセンが進める公益の計画である。`,
      );
      await era.printAndWait(
        `地方へ資金を出すだけでなく、トレーナーや${kita.uma_sex_title}になりたい者を掘り起こすことも目指している。`,
      );
      await era.printAndWait(
        `そして親善大使として地方の学園を回る人選が、キタサンブラックだった。`,
      );
      await era.printAndWait(
        `無名から一躍脚光を浴びるまで、この三年はキタサン劇場と言ってもいい。民間に積んだ人気が、キタに一目置かれる発言力を与えている。`,
      );
      await era.printAndWait(
        `仕事以外でキタがいちばん好きなのは、子供たちと楽しそうに追いかけっこをすることだ。`,
      );
      await era.printAndWait(
        `キタはすごい${kita.uma_sex_title}だ。遅い子も嬉しいし、速い子も嬉しい。先生たちも一息つける。`,
      );
      await kita.say_and_wait(
        `ふわあっ！ へへ～ ほんと可愛い子たちだね、${callname}。`,
      );
      await era.printAndWait(
        `額の汗をタオルで拭き、${kita.name} はにこにこと子供たちを連れて寄ってきた。`,
      );
      await era.printAndWait(
        `部外者を見て興奮したのか、子供たちは口々に何か言っている。`,
      );
      await era.printAndWait(
        `小さな${kita.uma_sex_title}B「ねえねえ！ トレーナー${you.adult_sex_title}とキタ${
          kita.elder_sibling_sex_title
        }、お付き合いしてるの！」`,
      );
      await era.printAndWait(`そう言う子が出るまでは……`);
      await kita.say_and_wait(`えっ！？ あの、その……え、付き合ってる？`);
      await kita.say_and_wait(
        `これは、あはは……どう言えばいいか……あまり言いたくないなあ……`,
      );
      await kita.say_and_wait(
        `でも、ボクと ${callname} は毎日一緒だから、付き合い、みたいなもの？`,
      );
      await era.printAndWait(
        `子供たちの頭を優しく撫で、${kita.name} は少し困った笑みを見せた。`,
      );
      await era.printAndWait(
        `答えてはいけない質問もある……そう思いながら、${you.name} はキタのトレーニングの話を始め、子供たちの気を引き始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_back_home: (() => {
    const title = '帰郷するキタサンブラック';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`ごめんね、${callname}。`);
      await era.printAndWait(
        `帰郷の駅に立ち、${kita.name} は ${you.name} へ深く一礼した。`,
      );
      await era.printAndWait(
        `いつものはしゃいだ${kita.teen_sex_title}はいま青白く、目の下は目に見えて腫れ、泣いた跡のようだった。`,
      );
      await era.printAndWait(
        `レースに負けたせいで、怒ったファンが学園へ押し寄せ、「元凶」の ${you.name} を処分しろと求めた。`,
      );
      await era.printAndWait(
        '最後はなぜか静まった。だがキタは、もうトレセン学園でトレーニングを続けられない。',
      );
      era.println();
      era.printButton(`「ごめん、キタ。」`, 1);
      await era.input();
      await kita.say_and_wait(
        `ううん、謝るべきなのはボクの方だよ。${callname} に、何の落ち度もない。`,
      );
      await era.printAndWait(
        `力のない笑みを浮かべ、${kita.name} はまた涙をこぼした。`,
      );
      await era.printAndWait(
        `この短い数日で、${kita.teen_sex_title}は何度泣いただろう。`,
      );
      await kita.say_and_wait(
        `やっぱりキタは、勝てる${kita.uma_sex_title}じゃなかった。`,
      );
      await kita.say_and_wait(
        '顔も普通で、頑丈なことしか取り柄がなくて。ごめんね、こんなに長い時間、無駄にさせちゃって。',
      );
      await kita.say_and_wait(`責任はボクが取る。さよなら、${callname}。`);
      await era.printAndWait(
        `帰郷のバスに乗り、${kita.name} は鳴り止まない携帯へ一言呟いた。`,
      );
      await era.printAndWait(
        `その声は風に散り、${you.name} の耳には届かなかった。`,
      );
      await era.printAndWait(
        `そのあと、${kita.name} への熱は、なぜか引いていった。`,
      );
      await era.printAndWait(
        `${you.name} のトレーナー人生は、${kita.name} など最初からいなかったみたいに、普通に続いていく。`,
      );
      await era.printAndWait(
        `だがたまに、${
          you.name
        } はあの${kita.teen_sex_title}が振り返ったときの、脆くて青い背中を思い出す。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_hello: (() => {
    const title = (callname) => `${callname}、最近元気？`;
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name} が卒業して、どれだけの時間が経っただろう。`,
      );
      await era.printAndWait(
        `もうはっきり覚えていない。あの黒い${kita.teen_sex_title}が去ったあと、${
          you.name
        } はこれまで通り、トレーナーとして働いた。`,
      );
      await era.printAndWait(
        `新しい子のトレーナーになり、少し鬼畜なメニューで鍛え上げる。`,
      );
      await era.printAndWait(`三年後、子供たちを見送る。`);
      await era.printAndWait(
        `たまに連絡してくる子もいれば、しない子もいる。だが毎年決まって、${kita.name} は ${you.name} の手が空いているときに電話をくれる。`,
      );
      await kita.say_and_wait(`${callname}、最近どう？`);
      await kita.say_and_wait(
        `新しい担当？ 疲れてない？ よく考えたら、あのころのキタ、すごく素直だったもんね～`,
      );
      await kita.say_and_wait(
        `ボクの方？ ああ～ 演歌歌手のデビューを準備してる。えへへ～ お父さんの歳も歳だしね。`,
      );
      await era.printAndWait(
        `そうして近況を雑談し、面白い話を分け合い、あの三年を語る。`,
      );
      await era.printAndWait(
        `${kita.name} はへへっと笑い、${you.name} と互いの近況を祝い合い、いつものように通話を終えた。`,
      );
      await you.say_and_wait(`これでいい。`);
      await you.say_and_wait(`これで、いいんだ。`);
    };
    f.title = title;
    return f;
  })(),
};
