/**
 * @file マルゼンスキー - 恋慕
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_m マルゼンスキーのマヤノトップガンへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async 49(maru, you, callname, m_call_m, m_call_t, y_call_m) {
    await maru.print_and_wait('最近、何かが足りない気がする。');
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' は悩んでいた。いつもどおりかわいい後輩たちの成長を見守り、',
      maru.couple_title,
      'が自分に追いつくのを期待しているのに。',
    ]);
    await maru.print_and_wait([
      callname,
      ' と一緒にトレーニングの成果も確認した。それでも、少し元気がない。',
    ]);
    await maru.print_and_wait([
      'それは',
      callname,
      'の目からも逃げなかった。理由はわからないが、次のレースまで時間がある。だからトレーナーに様子を見せよう、ということらしい。',
    ]);
    await maru.print_and_wait([
      '普段から後輩の面倒を見ているせいか、',
      maru.get_colored_name(),
      ' が最近困っていることは、',
      maru.uma_sex_title,
      'たちが作った小さな輪のなかで、こっそり広がっていた。',
    ]);
    await maru.print_and_wait([
      '時が経つにつれ、',
      m_call_t,
      ' まで何度もトレーナーに ',
      maru.get_colored_name(),
      ' の様子を聞いてきた。',
    ]);
    await maru.print_and_wait([
      'ある日、カフェテリアで話しているとき、',
      m_call_m,
      'が ',
      maru.get_colored_name(),
      ' に恋の話を尋ねた。',
    ]);
    await maru.say_and_wait([
      '……そういうことだったのね。ありがとう、',
      m_call_m,
      '。',
    ]);
    era.println();
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' は、トレーナーへの好感に気づいた。',
    ]);
    await maru.print_and_wait([callname, ' を呼び出そう']);
    era.drawLine();
    await era.printAndWait([
      'ある朝早く、',
      you.get_colored_name(),
      ' がトレーナー室に入り、下駄箱を開けると、薄い青の封筒が入っていた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' はそっと封筒を手に取った。感触はよく、封はされておらず、折り目にわざと小さな隙間が残してある。',
    ]);
    await era.printAndWait('封筒を開けると、中には一行だけ');
    await era.printAndWait([
      maru.elder_sibling_sex_title,
      '、屋上で待ってるわよ～',
    ]);
    await era.printAndWait(
      '午の刻、つまり十一時から一時のあいだか。とにかく、先にこの手紙をしまっておこう。',
    );
    await era.printAndWait([
      '十一時ちょうど、',
      you.get_colored_name(),
      ' はトレセン学園の屋上へ着いた。',
    ]);
    await era.printAndWait([
      '陽が屋上いっぱいに降り、そよ風が ',
      you.get_colored_name(),
      ' の髪を優しく撫でる。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は、自分を屋上へ呼んだ謎の人物を探し始めた。突然、屋上への扉が閉まった。',
    ]);
    era.printButton('「カフェの言ってた霊現象、か？」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は震えながらドアノブを握り、力いっぱい開けた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' の予想に反して、扉は開いた。',
    ]);
    await era.printAndWait('屋上へ続く階段は、いつものように静かだ。');
    era.printButton('「いったい誰の悪戯だ」', 1);
    await era.input();
    await era.printAndWait([
      '数秒で扉を閉められるのは、',
      maru.uma_sex_title,
      'だけだろう。',
    ]);
    await era.printAndWait([
      '担当トレーナーを探しているのに、恥ずかしがる内気な',
      maru.uma_sex_title,
      'に出会ったのか？',
    ]);
    await era.printAndWait([
      '懐かしい香りがして、',
      you.get_colored_name(),
      ' は夏の気配を思い出した。',
    ]);
    await era.printAndWait([
      'その香りの主は近くにいるらしい。',
      you.get_colored_name(),
      ' は、この唯一の手がかりを辿り始めた。',
    ]);
    await era.printAndWait([
      'だが現実はがっかりだった。',
      you.get_colored_name(),
      ' は屋上をくまなく探しても、香りの主には会えなかった。',
    ]);
    era.printButton('「まさか?!」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は屋上の貯水槽へ目をやった。そこに',
      maru.uma_sex_title,
      'が座っている。',
    ]);
    await era.printAndWait([
      '白いワンピースで、優しい顔をしてグラウンドの',
      maru.uma_sex_title,
      'たちを見下ろしている。',
    ]);
    era.printButton(`${y_call_m}？`, 1);
    await era.input();
    await maru.say_and_wait([callname, '、やっと見つけてくれたのね。']);
    era.printButton('「そんな脚の組み方だと、スカートの下が見えるぞ？」', 1);
    await era.input();
    await maru.say_and_wait('きゃっ！ 変態！ 痴漢！ えっち！');
    await era.printAndWait([
      maru.get_colored_name(),
      ' は慌てて裾を押さえ、貯水槽から屋上へ跳んだ。',
    ]);
    await maru.say_and_wait([
      'もっと',
      maru.elder_sibling_sex_title,
      'らしく見せたかったのに、',
      callname,
      'ったら、そんなにえっちだなんて。',
    ]);
    era.printButton('「こんな天気なら、ここでランチ会議にしよう」', 1);
    await era.input();
    await maru.say_and_wait('ん〜、いい案だけど、もっと大事なことが先よ。');
    await maru.say_and_wait(['……', callname, '、私とデートしてくれない？']);
    era.printButton('「デートのとき、もっと優しくしてくれるなら、いいよ」', 1);
    await era.input();
    await maru.say_and_wait('うん！ じゃあ決まりね！');
    await era.printAndWait([
      maru.get_colored_name(),
      ' は顔を真っ赤にして ',
      you.get_colored_name(),
      ' を見ている。',
    ]);
    await era.printAndWait(
      'この新しい気持ちは、土に埋めた種みたいに、うまく芽吹くだろう。',
    );
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   */
  async '74-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait([
      callname,
      '、今度はプールでデート、試してみない？',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' はソファに寝転がり、手の漫画を見ながら、次のトレーニングを計画している ',
      you.get_colored_name(),
      ' に提案した。',
    ]);
    await era.printAndWait([
      '屋上で ',
      maru.get_colored_name(),
      ' とのデートを引き受けてから、二人の距離はさらに近くなっていた。',
    ]);
    await era.printAndWait([
      '暇な雑談や、毎日の予定をこなすあいだ、',
      you.get_colored_name(),
      ' は',
      maru.sex,
      'が以前より ',
      you.get_colored_name(),
      ' を気にしている気がした。',
    ]);
    era.printButton('「なんでプールなんだ」', 1);
    await era.input();
    await maru.say_and_wait([
      '少女漫画にはそう書いてあるの。主人公が入学園したあと、自分に好意を持つ格好いいトレーナーと出会う。',
    ]);
    await maru.say_and_wait(
      'それから同チームの名門お嬢さまがトレーナーを好きなのに、トレーナーは主人公のほうを見ている。',
    );
    await maru.say_and_wait(
      '幼馴染で婚約まで決まっている矜持から、名門お嬢さまは主人公に皐月賞で勝負を挑む。',
    );
    await maru.say_and_wait(
      '名門の圧倒的な強さに、主人公はトレーナーの励ましでプール特訓を始める。',
    );
    await maru.say_and_wait(
      'もともと好意のあった二人が、プールでドキドキの事故！ 最後はプールの真ん中でキスするの。',
    );
    await era.printAndWait([
      maru.sex,
      'はソファで体を起こし、手の少女漫画を指した。',
    ]);
    await maru.say_and_wait([callname, '、ロマンチックだと思わない？']);
    era.printButton('「悪くないな」', 1);
    await era.input();
    await maru.say_and_wait('でしょ〜、だから明日はプールでデートよ');
    era.printButton('「水泳館、早すぎると開いてないだろ」', 1);
    await era.input();
    await maru.say_and_wait([
      'あとで',
      m_call_t,
      'に言っておくから、そこは心配いらないわ。',
    ]);
    era.printButton(`デートが長すぎると、${maru.uma_sex_title}が来ないか？`, 1);
    await era.input();
    await maru.say_and_wait([
      '朝早いと',
      maru.uma_sex_title,
      'たちは朝走ってるし、水泳の授業も明日は十時までないの。',
    ]);
    await maru.say_and_wait([callname, '、まだ聞きたいことはある？']);
    era.printButton('「今のところない。」', 1);
    await era.input();
    await maru.say_and_wait([
      'じゃあ決まり！ こんな優しい大',
      maru.elder_sibling_sex_title,
      'とデートできるなんて、',
      callname,
      '、夜、興奮して眠れないでね♪',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の頭を撫でて訓練室を出た。',
      you.get_colored_name(),
      ' は、明日のデートをひどく楽しみにした。',
    ]);
  },
  /**
   * マルゼンスキーがプールでトレーナーを待った
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async '74-2'(maru, you, callname, y_call_m) {
    await you.say_and_wait('水、まだ冷たい');
    await era.printAndWait([
      you.get_colored_name(),
      ' は片膝をついて池の縁に座り、手を入れると水がひんやりしていた。',
    ]);
    await era.printAndWait([
      '朝六時。せっかちな太陽が地面を照らしているが、朝のプールには生気がまったくない。いるのは ',
      you.get_colored_name(),
      ' と、友達以上恋人未満の ',
      maru.get_colored_name(),
      ' だけだ。',
    ]);
    await era.printAndWait(
      '二人の距離を縮めようとしてはいるが、いろいろな事情で、この気持ちはなかなか熱を帯びない。',
    );
    await maru.say_and_wait([callname, '、こっち見て⭐']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' は水着に着替えて ',
      you.get_colored_name(),
      ' に手を振り、手足を動かして準備運動をしている。',
    ]);
    await era.printAndWait(
      '曲線を際立たせた水着が、真っ青な水面に銀色の輪郭を映している。',
    );
    await maru.say_and_wait('うん。こういう静かな空気も悪くないわね。');
    await era.printAndWait([
      '少し前、',
      maru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を屋上に呼び出し、ようやく二人の関係を確かめた。',
    ]);
    await maru.say_and_wait(
      'やっと二人だけの空間ね。こんな朝なら、テイオーたちもまだ寝てるでしょう？',
    );
    await maru.say_and_wait([callname, '♪ 降りて一緒に泳がない？']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' はプールの中央から ',
      you.get_colored_name(),
      ' を呼んでいる',
    ]);
    await era.printAndWait([
      '普通の人間には微妙な水温でも、体温が人より少し高い',
      maru.uma_sex_title,
      'には、ちょうどいいのかもしれない。',
    ]);
    await maru.say_and_wait([callname, '！ 降りて一緒に泳がない？']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' の誘いが ',
      you.get_colored_name(),
      ' の思考を壊した',
    ]);
    era.printButton(
      '「こっちから見る分には、目の保養だな」（関係を進める）',
      1,
    );
    era.printButton('急用を思い出した（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait([
        callname,
        '、えっちね〜。でも素直な',
        callname,
        'も好きよ♪',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のほうへ投げキスして、頭から水へ潜った。',
      ]);
      await era.printAndWait([
        '底まで透き通る水のなか、',
        maru.sex,
        'の姿は魚みたいに楽しそうに泳いでいる。',
      ]);
      era.printButton(`${y_call_m}、泳ぎが上手いな`, 1);
      await era.input();
      await era.printAndWait([
        maru.sex,
        'が水面へ出て次の目標へ進もうとしたとき、',
        maru.sex,
        'の体が思わず硬直した',
      ]);
      era.printButton('「足がつったのか？」', 1);
      await era.input();
      await era.printAndWait([
        '今は考える余裕がない。',
        you.get_colored_name(),
        ' は素早くプールへ飛び込み、必死に頭を出して暴れる',
        maru.sex,
        'のほうへ泳いだ。',
      ]);
      era.printButton('「待ってろ、すぐ行く！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' も泳ぎは得意ではないが、それでも力を尽くして',
        maru.sex,
        'のほうへ泳いだ。',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await maru.say_and_wait([callname, '、大丈夫よ。']);
      await era.printAndWait(['どうやら、', maru.sex, 'に騙されたらしい。']);
      await maru.say_and_wait('……ごめん。ちょっとやりすぎたかしら。');
      await era.printAndWait('こんな冗談、やりすぎだ。');
      await maru.say_and_wait([
        '本当にごめんなさい。でも',
        callname,
        '、やっと降りてきたし、この角度から見ると、空気も悪くないでしょう？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        maru.get_colored_name(),
        ' が無事だとわかって、ようやく息をついた。空気はともかく、この静けさはたしかに珍しい。',
      ]);
      await era.printAndWait(
        'さっきの騒ぎで激しく揺れていた水面も、今は落ち着いている。',
      );
      era.printButton('「寒い」', 1);
      await era.input();
      await era.printAndWait([
        maru.uma_sex_title,
        'にはちょうどいい水温でも、普通の人間にはまだ冷たい。',
      ]);
      await maru.say_and_wait([
        'じゃあ',
        maru.elder_sibling_sex_title,
        'が温めてあげる？',
      ]);
      era.printButton('「いやだ」', 1);
      await era.input();
      await era.printAndWait([
        maru.get_colored_name(),
        ' は問答無用で、まだ拗ねている ',
        you.get_colored_name(),
        ' を抱きしめた。"実際、全部 ',
        maru.get_colored_name(),
        ' のせいだろ？" そう思いながらも',
      ]);
      await era.printAndWait([
        maru.sex,
        'の体温を感じた瞬間、その不満はきれいさっぱり消えた。',
      ]);
      await maru.say_and_wait(
        'こんな顔の赤くなる空気のなか、何もしないつもり？',
      );
      await era.printAndWait([
        maru.get_colored_name(),
        ' の匂わせはもうはっきりしていた。',
        you.get_colored_name(),
        ' も',
        maru.sex,
        'の首に腕を回し、ゆっくり',
        maru.sex,
        'の頬へ近づいた。',
      ]);
      await maru.say_and_wait('漫画の展開とそっくりね♪');
      await era.printAndWait([
        you.get_colored_name(),
        ' は舌を',
        maru.sex,
        'の口へ押し込み、',
        maru.sex,
        'もあまり抵抗せず、その不満を優しく受け止めた。',
      ]);
      await era.printAndWait(
        'プールの水温はまだ低いのに、二人のまわりだけは春みたいに温かい。',
      );
      await maru.say_and_wait([
        'うちの隣に、ずっと使ってない空き部屋があるの。',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '唇が離れたあと、二人はプールを出て、乾いたタオルで体を拭いているとき、',
        maru.get_colored_name(),
        ' が突然 ',
        you.get_colored_name(),
        ' に提案した。',
      ]);
      era.printButton('「じゃあ、これからよろしく」', 1);
      await era.input();
      await era.printAndWait([
        'こちらこそよろしくね。',
        callname,
        '、今夜、荷物を運んできて♪',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        maru.get_colored_name(),
        ' と同棲を始めた',
      ]);
    } else {
      await maru.say_and_wait([
        callname,
        '、いじわる！ じゃあ先に一人で泳ぐわ。',
      ]);
      era.drawLine();
      await era.printAndWait('チリンチリン!!!');
      await era.printAndWait([
        you.get_colored_name(),
        ' は目覚ましで起こされた。変な夢を見たらしい',
      ]);
      era.printButton('「今日のトレーニング計画を立てるか」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' はあくびをして、さっきの変な夢を忘れようとした。',
      ]);
      await maru.say_as_unknown_and_wait(
        'ずっと迷っていると、最後は後悔するわよ。',
      );
      await era.printAndWait([
        '胸の奥のもう一つの声が、',
        you.get_colored_name(),
        ' に言っている。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   */
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      'あなたが言ってくれたあの一言が好き。「風を追うマルゼンスキーは、本当に楽しそうだ」って。',
    );
    await maru.say_and_wait(
      '嫌になっちゃう。歳は私より上なのに、立ち居振る舞いが高校生みたい。',
    );
    await maru.say_and_wait([
      '……でも、だからこそ',
      callname,
      'は余計にかわいいの。',
    ]);
    await maru.say_and_wait([
      '初めて会ったとき、私はあなたを何歳か下の',
      you.younger_sibling_sex_title,
      'みたいに思った。',
    ]);
    await maru.say_and_wait(
      'だから無意識に抱きしめて頭を撫でて、顔が真っ赤なのを見て、やっと手を離した。',
    );
    await maru.say_and_wait('悪いと思ったけど、謝らないわ。ふん〜');
    await maru.say_and_wait(
      'あなたが興奮した顔で、私の走るときの笑顔を話してくれたとき、本当に嬉しかった。',
    );
    await maru.say_and_wait([
      '契約した夜、私は',
      m_call_t,
      'を近くのバーに誘って祝ったの。',
    ]);
    await maru.say_and_wait(['興奮した顔であなたの様子を話したら。']);
    await maru.say_and_wait([
      '『相性のいいトレーナーに出会えたみたいね』、グラスを揺らしながら',
      maru.sex,
      'はふらふらと相槌を打った。',
    ]);
    await maru.say_and_wait(
      '『レースの栄光より、風を楽しむほうが好きなの』。口ではそう言っても',
    );
    await maru.say_and_wait(
      '胸の奥では、あなたが私の背中に追いつけるか、静かに期待していた',
    );
    await maru.say_and_wait(
      '初めてのトレーニングのとき、あなたはすごく緊張してた。',
    );
    await maru.say_and_wait('トレーナーの正装まで着て、握手までした。');
    await maru.say_and_wait('……上から二番目のボタン、掛け違えてたわ。');
    await maru.say_and_wait(
      '指摘されたとき、慌ててボタンを外して、顔を真っ赤にした。',
    );
    await maru.say_and_wait([
      '何歳か下の',
      you.younger_sibling_sex_title,
      'が目の前に立って、「',
      maru.elder_sibling_sex_title,
      '、今の私は大人よ」と言ってるみたい。',
    ]);
    await maru.say_and_wait([
      'そんなにかわいい',
      you.younger_sibling_sex_title,
      'の頭を撫でて励まさないのは、もったいないわね。',
    ]);
    await maru.say_and_wait([
      'あら、また無意識に',
      you.younger_sibling_sex_title,
      '扱いしてしまった。',
    ]);
    await maru.say_and_wait('そのあと、私たちは目標を一つずつ片付けた。');
    await maru.say_and_wait(
      'いつの間にか、あなたは今、私の隣の部屋に住んでいる。',
    );
    await maru.say_and_wait('毎朝起こすのも、私の日課になった。');
    await maru.say_and_wait(
      'うんうんと二つ返事して、また寝返りを打って寝ようとするとき。',
    );
    await maru.say_and_wait('『今は起きる時間よ』。');
    await maru.say_and_wait('抗議を無視して、あなたと布団を無理やり引き離す。');
    await maru.say_and_wait('あなたがあくびをしながら今日の計画を始めるとき。');
    await maru.say_and_wait('そよ風が私の心を撫でるみたい。');
    await maru.say_and_wait('毎日が、いい天気。');
    await maru.say_and_wait('トレーニングのときも同じ。');
    await maru.say_and_wait('毎回、私の姿に心を奪われてるわね');
    await maru.say_and_wait(
      '緊張しながら毎回のタイムを記録して、限界に一つずつ挑む',
    );
    await maru.say_and_wait('私が前の記録を破るたび、子どもみたいにはしゃぐ。');
    await maru.say_and_wait('その子どもっぽい顔……抱きしめて頭を撫でたくなるわ');
    await maru.say_and_wait('風が止まるときもあった');
    await maru.say_and_wait(
      'トレーニングの失敗で怪我して、保健室まで支えられたとき',
    );
    await maru.say_and_wait(
      'あなたがそばで最近の学園の面白い話をして、痛みを逸らそうとしてくれたとき。',
    );
    await maru.say_and_wait(
      '退屈な時間は、愛車に置いていかれた車みたいに、跡形もなく消えた。',
    );
    await maru.say_and_wait(
      '新年の挨拶、ファン感謝祭の祝福、一緒に見た日没、クリスマスの約束。',
    );
    await maru.say_and_wait('見えないリボンみたいに、私とあなたを固く結んだ。');
    await maru.say_and_wait([
      'いつの間にか、',
      callname,
      'も世話が要る',
      you.younger_sibling_sex_title,
      'くんから、頼れる大人になったわね',
    ]);
    await maru.say_and_wait(
      'この宝石みたいに輝く記憶、私はいつまでも大切にする。',
    );
    await maru.say_and_wait(
      '……そろそろ、胸の奥のこの気持ちと向き合わないとね。',
    );
    await maru.say_and_wait([
      '私も',
      maru.elder_sibling_sex_title,
      'としての矜持はある。後輩たちに流行と',
      maru.elder_sibling_sex_title,
      'の知恵を分けている。',
    ]);
    await maru.say_and_wait([
      'でも、いちばん好きで好きな',
      callname,
      'の前では、だめ！',
    ]);
    await maru.say_and_wait(
      '流行はずっと変わる。でも、こんなにかわいいトレーナーは一人だけ。',
    );
    await maru.say_and_wait(['じゃあ、そろそろ', callname, 'を呼び出さないと']);
    await maru.say_and_wait([
      callname,
      'が私を好きかどうかは別として、私はいつまでもあなたが好き。',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' の同棲は、もうしばらく続いている。',
    ]);
    await era.printAndWait('起きて、食べて、一緒に学園へ行く。');
    await era.printAndWait(
      '出る前に互いの身だしなみを確認して、車で一緒に学園へ着く。',
    );
    await era.printAndWait([
      maru.sex,
      'が授業のあいだ、',
      you.get_colored_name(),
      ' は次のレースの基準で午後のメニューを組む。行き詰まったときは、もっとベテランのトレーナーに聞くこともある。',
    ]);
    await era.printAndWait([
      '屋上はもう ',
      you.get_colored_name(),
      ' たちの黙契の拠点だ。',
      you.get_colored_name(),
      ' が屋上の最後の段を踏むころ、制服の ',
      maru.get_colored_name(),
      ' はもうそこで ',
      you.get_colored_name(),
      ' を待っている。',
    ]);
    await era.printAndWait([
      '天気がいい日は、校庭で群れをなす',
      maru.uma_sex_title,
      'たちを見下ろしながら、今日の学園の面白い話をする。',
    ]);
    await era.printAndWait(
      '雨が続く日は、訓練室のソファに寄りかかって身を寄せ合う。',
    );
    await era.printAndWait([
      '黄昏の最後の陽が ',
      maru.get_colored_name(),
      ' の裾に当たるころ、',
      you.get_colored_name(),
      ' は最後の書類を整え、門外で長く待っていた',
      maru.sex,
      'と一緒にアパートへ戻る。',
    ]);
    await era.printAndWait([
      '夜、ざあざあの水音とテレビのお笑い芸人の笑い声のなか、',
      you.get_colored_name(),
      ' は炒めた料理を皿に盛る。',
    ]);
    await era.printAndWait([
      '簡単な食前の挨拶のあと、',
      you.get_colored_name(),
      ' は黙って',
      maru.sex,
      'の少し自慢げな話を聞く。テイオー',
      maru.couple_title,
      'がもうすぐ',
      maru.sex,
      'を超える、と言いながら、大根を口へ運ぶ。',
    ]);
    await era.printAndWait([
      'おやすみを交わしたあと、',
      you.get_colored_name(),
      ' はなんとか、同じ部屋で寝たがる ',
      maru.get_colored_name(),
      ' を自分の部屋へ戻した。',
    ]);
    await era.printAndWait([
      '消灯前、',
      maru.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' に勧めた少女漫画を何ページかめくって、それから眠る。',
    ]);
    await era.printAndWait(
      '穏やかな日々は、晴れた空に浮かぶ白い雲のようで、雲が目的もなく漂うあいだに、時間まで遅くなった。',
    );
    await maru.say_and_wait([
      callname,
      '、今度の日曜、海へ行かない？ 海で遊ぶのは久しぶりね。',
    ]);
    await era.printAndWait([
      'ある日の夕食で、',
      maru.sex,
      'が ',
      you.get_colored_name(),
      ' に海へ行きたいと頼んだ。',
    ]);
    era.printButton('「海か。久しぶりだな。」', 1);
    await era.input();
    await maru.say_and_wait(
      '前に海へ行ったのは、夏季合宿で理事長のほうの浜だったわ。でも今度は、あなたと私だけがいい。',
    );
    era.printButton('「日曜は特に用事もない。じゃあ一緒に出よう」', 1);
    await era.input();
    await maru.say_and_wait('よかった♪ じゃあ私も海の用意をするわ。');
    era.printButton(
      `（${y_call_m} が無邪気な顔を見せるのは、こういうときだけだな）`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は最後の青菜を口へ運びながら、そう思った。',
    ]);
    era.println();
    await era.printAndWait([
      '時間は、',
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' の期待のなか、すぐに日曜になった。',
    ]);
    await era.printAndWait([
      '愛車を飛ばして、',
      you.get_colored_name(),
      ' は予定より早くここに着いた。',
    ]);
    await era.printAndWait(
      '観光の最盛期ではないのに、この浜にはまだ多くの客が名前を聞いて来ていた。',
    );
    await maru.say_and_wait([callname, '、この格好、どうかしら？']);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の手の袋を受け取り、中のビキニを見た。',
    ]);
    await maru.say_and_wait('この浜の視線、全部私に集まるわね。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の水着姿を想像して、妙に楽しみになった。',
    ]);
    await maru.say_and_wait([callname, '、砂浜で会いましょう。']);
    await era.printAndWait([
      '更衣室の前で、',
      you.get_colored_name(),
      ' はいったん ',
      maru.get_colored_name(),
      ' と別れた。',
    ]);
    era.println();
    await maru.say_and_wait(['じゃーん♪ ', callname, '、この格好どう？']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      ' は見せびらかすように ',
      you.get_colored_name(),
      ' を見ている。',
    ]);
    era.printButton('「なんだか、面白くないな」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      'は、こんなにいい',
      maru.sex_code === 1 ? '彼氏' : '彼女',
      'を独り占めしたいんでしょ♪ ふんふん。',
    ]);
    await era.printAndWait(
      '人の少ない場所にパラソルを立てた。今日の天気は特別に気持ちいい。',
    );
    await maru.say_and_wait([
      callname,
      '、日焼け止め塗ってくれる？ 籠のなかよ。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は籠から日焼け止めを取り、手に出して',
      maru.sex,
      'の背中へ均一に塗った。',
    ]);
    await maru.say_and_wait('ありがとう。');
    await era.printAndWait([
      '小刻みに動く耳が音楽のリズムで拍を取っている。',
      you.get_colored_name(),
      ' は急に、',
      maru.sex,
      'に悪戯したくなった。',
    ]);
    era.printButton(
      `${maru.sex}の耳にそっと近づいて大声を出す（まだ進めない）`,
      1,
    );
    era.printButton('……いや、やめよう（関係を進める）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' はそっと',
        maru.sex,
        'の耳へ近づいた。これから何が起きるか知らない',
        maru.sex,
        'は、手の動きが止まった理由を不思議がっている。',
      ]);
      era.printButton('「わっ！」', 1);
      await era.input();
      await maru.say_and_wait('きゃっ！');
      await era.printAndWait([
        maru.get_colored_name(),
        ' は驚いて体をびくりとさせ、しばらくしてから我に返った。',
      ]);
      await maru.say_and_wait([callname, '！']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は深呼吸して、気持ちを落ち着かせようとしている。',
      ]);
      era.printButton(
        `${y_call_m} の耳が魅力的に見えて、つい悪戯したくなった。`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        'はぁ〜、',
        callname,
        'ったら子どもみたい。他の人にもこんなことするの？',
      ]);
      era.printButton('「君にだけだ」', 1);
      await era.input();
      await maru.say_and_wait('つまり私は、最初の犠牲者を光栄に思うべき？');
      era.printButton('「あ、違う、聞いてくれ。」', 1);
      await era.input();
      await maru.say_and_wait('私も今の驚き、味わわせてあげる！');
      era.printButton('「うわあああああ！」', 1);
      await era.input();
      await era.printAndWait([
        'そのあと、',
        maru.sex,
        'が完全に機嫌を直すまで、かなり時間がかかった。',
      ]);
    } else {
      await era.printAndWait([
        '二つの激しい考えの争いの末、',
        you.get_colored_name(),
        ' は悪戯を諦め、',
        maru.get_colored_name(),
        ' のマッサージに集中した。',
      ]);
      await era.printAndWait('湿った気配の風が、海面から大地へ来た。');
      await era.printAndWait('砂浜に名残惜しそうに、なかなか去らない。');
      await maru.say_and_wait(['風が止んだわね、', callname, '。']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は長いあいだ、その海を見つめていた。',
      ]);
      await maru.say_and_wait('……。日没のあと、月も昇るわ。');
      await era.printAndWait(['突然', maru.sex, 'が口を開いた。']);
      era.printButton(
        '「日が昇っても月が沈んでも、風はそっと踊り始める。」',
        1,
      );
      await era.input();
      await maru.say_and_wait(['……', callname, '、もう少し近づいていい？']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は体の重みを全部 ',
        you.get_colored_name(),
        ' の腕に預け、',
        you.get_colored_name(),
        ' は',
        maru.sex,
        'の手を強く握った。',
      ]);
      await era.printAndWait('二人は黙って、月が空の中ほどまで昇るのを見た。');
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' はさまざまな困難を経て、ようやく互いの気持ちを確かめた。',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' から役所へ出す書類を受け取り、それぞれ記入する欄に、大切に自分の名前を書いた。',
    ]);
    await era.printAndWait(
      '結婚式の日時を決めたあと、習わしどおり、しばらく会ってはいけない。',
    );
    await era.printAndWait([
      '式の前夜、',
      you.get_colored_name(),
      ' はどうしても眠れず、枕元の ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の写真アルバムを手に取った。',
    ]);
    await you.say_and_wait(
      'これはメイクデビュー勝利後、サイゼリヤで祝ったときの写真だ',
      true,
    );
    await era.printAndWait([
      '携帯が苦手な',
      maru.sex,
      'は、写真で ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の思い出を残すほうが好きだ。',
      you.get_colored_name(),
      ' は二ページ目をめくった。',
    ]);
    await you.say_and_wait(
      [maru.sex, 'の代わりに車展で愛車の模型を取ってきたときの写真'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は顔を上げ、棚の愛車模型をちらりと見てから次のページへ進んだ。',
    ]);
    await you.say_and_wait(
      'これはトレーニング失敗のとき、医務室で撮った写真だ',
      true,
    );
    await era.printAndWait([
      maru.get_colored_name(),
      ' はそばの懐古曲を聞きながら休養していて、',
      maru.sex,
      'の耳が音楽のリズムで拍を取っている。',
    ]);
    await you.say_and_wait(
      [
        'あのときの',
        maru.sex,
        'は、まだ',
        maru.elder_sibling_sex_title,
        'の構えを下ろしていなかったのか',
      ],
      true,
    );
    await era.printAndWait([
      '妙に苛立った ',
      you.get_colored_name(),
      ' は、ページをざらざらとめくり、最後に ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'が夏季合宿で撮った写真で止まった。',
    ]);
    await you.say_and_wait(
      [maru.sex, 'はあのとき、もう私をかなり近い人だと思っていたのか'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は、',
      you.get_colored_name(),
      ' が',
      maru.sex,
      'に腕を掴まれて無理に撮られた写真を見た。慌てた ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の笑顔が、鮮やかに対比している。',
    ]);
    await you.say_and_wait('変な噂を避けるのに、本当に骨が折れたな', true);
    await era.printAndWait('ため息をついて、機嫌よく次のページをめくった');
    await era.printAndWait([
      '冬服の ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'が、ここから遠くない山で撮った写真',
    ]);
    await you.say_and_wait(
      [
        'あのとき',
        maru.sex,
        'と、来年のクリスマスに樺の並木道を歩く約束をした',
      ],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が次のページをめくろうとしたとき。',
    ]);
    await era.printAndWait('トントントン');
    era.printButton(`${y_call_m}?!`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' が扉を開けると、普段着の',
      maru.sex,
      'が立っていた。',
    ]);
    await maru.say_and_wait('こんなにいい夜、一緒にドライブしましょう');
    era.printButton('「うん、出よう」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の手を強く握り、愛車を停めた場所へ走った。',
    ]);
    await maru.say_and_wait([
      callname,
      '、あなたに出会えて本当によかった。ありがとう。',
    ]);
    await era.printAndWait('静かな深夜の道路に、また湿った自然の風が吹いた。');
  },
};
