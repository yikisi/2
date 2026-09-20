/**
 * @file サンデーサイレンス - 育成
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  race_end_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await ss.say_and_wait('ん、勝ったわよ。場での私の走り、どう見えた？');
      if (Math.random() < 0.5) {
        await you.say_and_wait('余裕だった。戻って、次のレースの準備をしよう');
      } else {
        await you.say_and_wait(
          '難しくはなさそうだった。でもこれから先のトレーニングは気を抜かないでほしい',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着！';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await ss.say_and_wait(
        '正直、少し悔しいわね。どこがまずかったのかしら。あとで一緒に振り返りましょう。',
      );
      if (Math.random() < 0.5) {
        await you.say_and_wait(
          '想定どおりではなかったけど、十分よく走れていた',
        );
      } else {
        await you.say_and_wait('負けたくないなら、次はもっと上を取らないと');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'レース敗北！';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait([
        callname,
        '、考え方を切り替えないとね。このまま負けが続くと、困ったことになるわ。',
      ]);
      if (Math.random() < 0.5) {
        await you.say_and_wait(
          'その通りだ。こっちも発想を変える必要がある。次はよくなる',
        );
      } else {
        await you.say_and_wait(
          '結果はよくなかった。でもここで自分を追い込むのは得策じゃない',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = 'サンデーサイレンス登場';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(['よう、ご機嫌ね、', callname, '。']);
      await ss.say_and_wait(
        'さて、トレーニングを始めましょうか。あなたの目標も、ひとつずつ一番を取ることでしょう？',
      );
      await era.printAndWait([
        '美しい黒髪の',
        ss.uma_sex_title,
        'が ',
        you.get_colored_name(),
        ' に手を差し出す。自信に満ちた顔は、咲き誇る花のようで、',
      ]);
      await era.printAndWait([
        '健康で豊かな肉体に、',
        you.get_colored_name(),
        ' は本格化した',
        ss.uma_sex_title,
        'の美しさを改めて感じてしまう。',
      ]);
      await era.printAndWait([
        '午前の温かな陽がガラス窓を抜け、',
        ss.sex,
        'と ',
        you.get_colored_name(),
        ' の体に落ちる。ごく自然で、それでも温かい光景だった。',
      ]);
      await ss.say_and_wait(
        '互いを選んだ相棒なら、私のことは全部知ってもらう必要があるわ。だから、トレーニング場へ行きましょう？',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は会話の主導権を完全に握っていた。',
        you.get_colored_name(),
        ' に異論はなく、',
        ss.sex,
        'の提案に従ってトレーニング場へ向かう。',
      ]);
      await era.printAndWait([
        'この日、',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の現状を一通り洗い出し、経験に基づいてトレーニング計画を組み始めた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = '最初のすり合わせ';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('そう。わかったわ。');
      await ss.say_and_wait(
        '私は自分の目を信じているし、あなたの才覚も信じている。だから一緒に前へ進みたい。',
      );
      await ss.say_and_wait(
        'でも先に言っておく。私の目標は勝利だけ。目標を果たせないなら、',
      );
      await ss.say_and_wait(
        'トレーナーを替えることも厭わない。どちらも足を引っ張るような事態は避けたいの。',
      );
      await ss.say_and_wait(
        'もちろん、私があなたの歩みについていけないなら、私を外しても構わない。',
      );
      await era.printAndWait([
        ss.sex,
        'は本気でそう思っているらしい。',
        you.get_colored_name(),
        ' の気持ちなどお構いなしに、剥き出しの言葉を口にした。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' は気づく。',
        you.get_colored_name(),
        ' が',
        ss.sex,
        'を外してもよい、と言ったとき、',
        ss.get_colored_name(),
        ' の尻尾の振り方が、少し速くなっていた。',
      ]);
      await ss.say_and_wait(
        '最初はスピードのトレーニング？ それともスタミナ？ ウォーミングアップが終わったら、はっきりした答えが欲しいわ。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は陽の下で体をほぐし始める。日差しを浴びて額に細かな汗が浮かび、頬にも薄い紅が差した。',
      ]);
      era.printButton(
        '「今の君には、パワーとスタミナを先に伸ばしたい。そこを重点的に鍛えるよ。」',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        '、今の自信、気に入ったわ。なら、全部あなたの采配に従うわ。',
      ]);
      await era.printAndWait([
        '号砲の音のなか、',
        ss.get_colored_name(),
        ' は確かな一歩を踏み出す。芝に浅いくつの跡が並び、',
        ss.get_colored_name(),
        ' は慌てず、ウォーミングアップの二千メートルをこなしていく。',
      ]);
      await era.printAndWait([
        '誰の目にもわかる。目の前の少女には、並の',
        ss.uma_sex_title,
        'では敵わない天賦がある。しかも',
        ss.sex,
        'は自分で、すでにその一端を掘り起こしている。鉱脈の表面に露出した黄金のように、本当に掘り下げてみなければ、',
        you.get_colored_name(),
        ' にも、その価値がどれほど凄まじいかはわからない。',
      ]);
      await era.printAndWait(
        'それでも、中央という強者がひしめく場所では、天賦だけでは足りない。十分なトレーニングと戦術がなければ、天賦は永遠に、勝ち切る力にはならない。',
      );
      await era.printAndWait([
        'だからこそ、',
        you.get_colored_name(),
        ' と',
        ss.sex,
        'がすべきことがある。',
        ss.sex,
        'が求める、勝ち切れる競走',
        ss.uma_sex_title,
        'に仕上げることだ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  perfect_beginning: (() => {
    const title = '完璧なスタート';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' は危なげなくメイクデビューを制した。',
      ]);
      await era.printAndWait([
        ss.sex,
        'がゴールを駆け抜けた瞬間、',
        you.get_colored_name(),
        ' はようやく肩の力を抜く。だが勝ち切った',
        ss.sex,
        'は、そのままトレーナーである ',
        you.get_colored_name(),
        ' の前まで歩いてきた。',
      ]);
      await ss.say_and_wait(
        '言ったでしょう。勝利は、あなたと分け合うって。これで最初の一歩は踏み出せたわ。',
      );
      await era.printAndWait([
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' の手を握りしめる。完璧な頬に、柔らかい笑みが浮かんだ。',
      ]);
      await ss.say_and_wait([
        callname,
        '、私たちの目標へ、一緒に歩みを進めましょう……',
      ]);
      await era.printAndWait([
        '観客の歓声と称賛が、ふたりの後ろで鳴り続ける。',
        ss.sex,
        'の、レース前にあった不安げな色はもうなく、残っているのは嬉しさだけだった。',
      ]);
      await era.printAndWait([
        'そのとき ',
        you.get_colored_name(),
        ' は気づく。',
        ss.sex,
        'の体はすでに汗まみれで、運動着まで濡れ、整った体の輪郭がわずかに浮かび上がっていた。',
      ]);
      era.printButton(
        '「本当に、すごく……すごかった。でもまずは頭と体を拭かないと。このままだと体に悪い」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'タオルが',
        ss.sex,
        'の頭にかけられる。',
        ss.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' に額の汗を拭いてもらうのを拒まなかった。',
      ]);
      await ss.say_and_wait(
        'このレースはここまで。振り返りが必要なら、時間を取って連絡して。なければ、次のレースに向けた対策と、いつものトレーニングに入れそうね。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' の笑顔は長くは残らない。',
        ss.sex,
        'は真剣な目で ',
        you.get_colored_name(),
        ' を見つめ、その視線には真剣さと勝ち気がいっぱいだった。',
      ]);
      await era.printAndWait([
        'こうして、',
        ss.get_colored_name(),
        ' はメイクデビューを終えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  good_beginning: (() => {
    const title = 'いいスタート';
    /** @param {CharaTalk} ss サンデーサイレンス */
    const f = async (ss) => {
      await ss.say_and_wait(
        'やっぱりね。前回は少しずれただけ。私たちの組み合わせは、間違った選択じゃなかった。',
      );
      await ss.say_and_wait('一緒に進みましょう。私たちは勝ったんだから。');
    };
    f.title = title;
    return f;
  })(),
  ws_31: (() => {
    const title = '積乱雲';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '今日の空模様はよくない。',
        ss.get_colored_name(),
        ' の機嫌もかなり苛立っているらしく、尻尾が休憩室のソファの上で行ったり来たりしている。',
      ]);
      era.printButton('「どうした？ 雨の日が嫌いなのか？」', 1);
      await era.input();
      await era.printAndWait([ss.get_colored_name(), ' はきっぱり首を振る。']);
      await ss.say_and_wait([
        '違う。ただ、こういう大雨は少し嫌なの。屋外でトレーニングできないでしょう。',
        callname,
        ' は大雨、好き？',
      ]);
      era.printButton('「好き」', 1);
      era.printButton('「好きじゃない」', 2);
      await era.input();
      await ss.say_and_wait([
        'そう。私は大雨が好きじゃない、それだけ。人も',
        ss.uma_sex_title,
        'も、理由もなく何かが嫌いになること、あるでしょう。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' はそう言い、少し苛立ちが収まったように見えた。だが ',
        you.get_colored_name(),
        ' は察する。',
        ss.sex,
        'はこの話題を、わざと外している。',
      ]);
      await ss.say_and_wait([
        'それでも、室内のトレーニングはあるわ。',
        callname,
        '、よければ、少し監督してくれない？',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は休憩室に置いてあったダンベルを手に取り、ウォーミングアップを始める。',
        ss.sex,
        'は本当に、一秒たりとも無駄にしたくないらしい。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = '始まり・約束';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(
        '今年も、もう終わりそうね。時間の感覚が鈍くなった気がするわ。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' はコーヒーを両手で包み、ゆっくり口を開く。もう冬の制服に着替えていて、黒いタイツが豊かな太ももを包んでいた。',
      ]);
      await era.printAndWait([
        'ソファに身を預け、黒タイツの足先を尻尾のそばで丸め、時おり尻尾を挟んで弄ぶ仕草に、',
        you.get_colored_name(),
        ' は唾を飲み込む。',
      ]);
      await ss.say_and_wait([
        'ん、',
        callname,
        '。満足してるわ。あなたの担当になれたこと。たぶん、それが私のいちばんの幸運。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' はソファに横たわり、いつもの闘志満々な様子とは違って少し怠惰に見える。それから',
        ss.sex,
        'は、',
        you.get_colored_name(),
        ' には聞こえないほどの小さな声で続けた。',
      ]);
      await ss.say_and_wait(
        'これが、あのことを果たせる最後の機会なのかもしれない。どうしてもやり遂げること……いちばん高い舞台に立つこと。',
      );
      await era.printAndWait([
        'なぜか、',
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' に少し寄ってきた。胸に凭れたいようにも見える。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が ',
        ss.get_colored_name(),
        ' を見た瞬間、',
        ss.sex,
        'はすぐに距離を取り、',
        you.get_colored_name(),
        ' の目すら見ない。',
      ]);
      await ss.say_and_wait('相変わらず、私は幸運ね……皆さん。', true);
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '最初の一歩';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, you, callname, call_25) => {
      await ss.say_and_wait('出走登録、済んだ？');
      era.printButton('ああ。ほかに問題がなければ、三冠へ進める', 1);
      await era.input();
      await ss.say_and_wait([
        'いいわ。そういえば、',
        call_25,
        ' のほうで新しいコーヒー豆を買っていて、',
      ]);
      await ss.say_and_wait(
        '少しもらってきたの。飲み終わったら、一緒にトレーニング場へ行きましょう。前回プールで足首をひねりかけたけど、今回は大丈夫なはず。',
      );
      await era.printAndWait([ss.sex, 'は湯気の立つコーヒーを出す。']);
      await ss.say_and_wait([callname, '、私のこと、どう思う？']);
      era.printButton('「すごく頑張ってる、いい子だ」', 1);
      await era.input();
      await ss.say_and_wait(
        'そういう意味じゃないわ。今の私の状態よ。いずれ同期と三冠を争う相手と比べて、どうかって。',
      );
      era.printButton(`「君のほうが${ss.couple_title}より強いと思う」`, 1);
      era.printButton('「まだトレーニングが必要だと思う」', 2);
      await era.input();
      await ss.say_and_wait([
        'どちらにせよ、',
        callname,
        '。私は、ずっとあなたを信じるわ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, coffee, you, callname) => {
      await era.printAndWait([
        '神社で ',
        ss.get_colored_name(),
        ' と出会う。不思議な縁だった。特に、',
        you.get_colored_name(),
        ' が、ほとんど',
        ss.sex,
        'と瓜二つの',
        ss.uma_sex_title,
        'と、楽しそうに話し込む',
        ss.sex,
        'を見たとき。',
      ]);
      await era.printAndWait([
        'まるで同じ型から生まれたようなふたりの',
        ss.uma_sex_title,
        'が、',
        you.get_colored_name(),
        ' の前に立っている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、もう二度と ',
        ss.get_colored_name(),
        ' を間違えてはいけないと知る。元日から保健室、では縁起が悪すぎる。',
      ]);
      await era.printAndWait([
        '幸い、',
        ss.get_colored_name(),
        ' は相変わらず、少し苛立った顔を見せる。',
      ]);
      await era.printAndWait(
        '人混みが苦手らしい。それがいちばんの手がかりになった。',
      );
      await ss.say_and_wait([
        '新しい一年も、よろしくお願いします……',
        callname,
        '。今年はクラシック級に踏み込む年。トレーニングの指導、どうか緩めないで……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を脇へ引き、',
        ss.get_colored_name(),
        ' は少し親しく手を握る。だが',
        ss.sex,
        'の緊張した表情は、',
        coffee.get_colored_name(),
        ' にその仕草を見られたくないらしい。',
      ]);
      era.printButton('「じゃあ、新しい一年、よろしく。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' のその言葉を聞くと、',
        ss.get_colored_name(),
        ' は嬉しそうに着物に手をやり、それから急に頬を赤らめた。',
      ]);
      await ss.say_and_wait('あの、着物の帯が緩んで……手伝ってもらえるかしら……');
      await era.printAndWait([
        '言うほど ',
        ss.get_colored_name(),
        ' の声は細くなり、頭もだんだん下がっていく。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' にその遠慮はない。あっという間に着物を整え直し、手柄を隠すように髪を撫でつける。',
      ]);
      await era.printAndWait([
        'そのあと ',
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を連れて、',
        you.get_colored_name(),
        ' ひとりでは到底手が届かない豪勢な食事へ向かった。だが',
        ss.sex,
        'は、ただ ',
        you.get_colored_name(),
        ' が食べるのを見ていたかったらしい。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kent_der_win: (() => {
    const title = '勝利の大舞台';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} prea_sta プリークネスステークス（色付き名前）
     * @param {PrintedSpan} belm_sta ベルモントステークス（色付き名前）
     */
    const f = async (ss, coffee, you, callname, prea_sta, belm_sta) => {
      await ss.say_and_wait(['勝ったのよね？ ', callname, '！！！']);
      await era.printAndWait([
        ss.sex,
        'からいつもの落ち着きは消えていた。子供のようにはしゃぎ、興奮して ',
        you.get_colored_name(),
        ' に抱きつく。',
      ]);
      await ss.say_and_wait('三冠の一冠目……私たち、本当に取ったのよね？！');
      era.printButton('うなずく', 1);
      await era.input();
      await ss.say_and_wait(
        'よかった……よかった。やっぱり、あなたが私にいちばん合うトレーナーだった',
      );
      await ss.say_and_wait([
        'これから……まだ ',
        prea_sta,
        ' と ',
        belm_sta,
        ' がある。私の体のことは気にせず、トレーニング量を上げて。そうしないと、もっと大きな優位は取れない。',
      ]);
      await coffee.say_and_wait('おめでとう……場での姿、本当にすごかった。');
      await ss.say_and_wait('うん……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' が出ていったあとで、',
        coffee.get_colored_name(),
        ' は続けた。',
      ]);
      await coffee.say_and_wait([
        ss.sex,
        'を、お願いします。',
        ss.sex,
        'はずっと柔らかい人だから。少し、気持ちを見てあげて。',
      ]);
      await era.printAndWait([
        'そのあとの取材でも、',
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' への称賛を惜しまなかった。',
        you.get_colored_name(),
        ' にはわかる。',
        ss.sex,
        'は嬉しいだけじゃない。安堵している。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_before_prea_sta: (() => {
    const title = '深夜の嵐';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '夜。疲れを抱えた ',
        ss.get_colored_name(),
        ' が',
        ss.sex,
        'の部屋へ戻る。',
        you.get_colored_name(),
        ' が帰ろうとしたちょうどそのとき、窓の外で土砂降りの雨が降り始めた。',
      ]);
      await ss.say_and_wait([
        'あいにくの雨ね。',
        callname,
        '、少しここで座っていって……',
      ]);
      await era.printAndWait([
        '窓の外で雷が鳴り、暴風と大雨がホテルを叩く。耳をつんざく雷のあと、ホテル全体が停電したらしい。',
      ]);
      await ss.say_and_wait([
        '待って……待って待って待って、はあ……はあ……はあ……',
        callname,
        '！！',
        callname,
        '、どこ？！',
      ]);
      await era.printAndWait([
        '暗いなか、',
        ss.sex,
        'はしばらく ',
        you.get_colored_name(),
        ' の姿を見つけられない。声のパニックが、溢れそうになっていた。',
      ]);
      await ss.say_and_wait('嫌……ひとりにしないで……お願い、姿を見せて？');
      await era.printAndWait([
        '稲妻の光に乗って、',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の顔をはっきり見る。かつての ',
        ss.get_colored_name(),
        ' とはまるで違う。',
      ]);
      await era.printAndWait([
        'どうしようもない悲しみが、',
        ss.sex,
        'を飲み込みそうだった。瞳の涙は、',
        you.get_colored_name(),
        ' が',
        ss.sex,
        'から見たことのないものだった。',
      ]);
      await era.printAndWait([
        'その稲妻のおかげで、暗い部屋のなか、',
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' の位置を掴む。ほとんど飛びかかるように、',
        you.get_colored_name(),
        ' へ向かってきた。',
      ]);
      await era.printAndWait('どん！');
      await era.printAndWait([
        '当然、',
        ss.sex,
        'の目はまだ真っ暗な部屋に慣れていない。何かにつまずき、強く床へ倒れ、かすかな啜り泣きが混じる。',
      ]);
      era.printButton('「慌てないで。ここにいる。今そっちへ行く」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' はすぐ駆け寄る。声を頼りに、',
        you.get_colored_name(),
        ' は ',
        ss.get_colored_name(),
        ' の手を握った。',
      ]);
      await era.printAndWait([
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' の掌を必死に掴み、指の骨が悲鳴を上げそうになる。だが ',
        ss.get_colored_name(),
        ' は、それに気づいていないらしい。',
      ]);
      await ss.say_and_wait(
        '大丈夫……大丈夫。すぐ終わる。すぐ終わるから……一緒に外へ出られる。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        ss.sex,
        'の様子がおかしいと感じ、手を引いてベッドに座らせる。',
      ]);
      await era.printAndWait([
        '窓の外の風雨が、窓を叩いている。',
        you.get_colored_name(),
        ' は携帯を取り出し、柔らかい光が',
        ss.sex,
        'の怯えた頬を照らした。',
      ]);
      era.printButton(
        '「どこにも行かない。ここで一緒にいる」（好感+50、やる気+1……）',
        1,
      );
      era.printButton(
        '「今タオルを取ってくる。すぐ戻る」（好感+20、やる気-1）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait('うん……手、離さないで。お願い……');
        await era.printAndWait([
          ss.sex,
          'はようやく少し落ち着き、張り詰めていた体もゆっくり緩む。それから',
          ss.sex,
          'は ',
          you.get_colored_name(),
          ' を引き、自分のベッドの縁に並んで座った。',
        ]);
        await ss.say_and_wait([
          callname,
          '……本当に怖かった……あのときも、こうして',
          ss.sex,
          'の手を握ってた……',
        ]);
        await ss.say_and_wait(
          '……どうやって耐えたのか、自分でもわからない。車がひっくり返って……',
        );
        await ss.say_and_wait([
          '出られなかった……最初は',
          ss.couple_title,
          'も話しかけて、慰めて、手を握ってくれて……',
        ]);
        await ss.say_and_wait(
          'でも……でも……静かになって。私……何か飲んだみたいで……だんだん眠って……離さないって言ったのに',
        );
        await ss.say_and_wait([
          '手放したのは私……私が手を離さなければ……',
          ss.couple_title,
          'は、もしかしたら……もしかしたら。',
        ]);
        await era.printAndWait([
          'それは ',
          ss.get_colored_name(),
          ' が心のいちばん奥に埋めた傷だった。人里離れたところで事故に遭い、大人である運転手はその場で亡くなり、',
        ]);
        await era.printAndWait([
          '車内に残された数人の幼い',
          ss.uma_sex_title,
          'は、救助を待つしかなかった。だが救助は遅すぎた。',
        ]);
        await era.printAndWait([
          '遅すぎて、生きて出られたのは ',
          ss.get_colored_name(),
          ' だけ。',
          ss.sex,
          'は誰にも話していない。',
          you.get_colored_name(),
          ' 以外には。',
        ]);
        era.printButton(
          '「大丈夫。私の手を握って。離さない。君も離さないと信じてる。一緒に先へ行く。」',
          1,
        );
        await era.input();
        await ss.say_and_wait(
          'うん……いい……一生、離さない。約束……三冠を取る……私……先へ行く。',
        );
        await era.printAndWait([
          ss.sex,
          'の疲れが溢れ、まぶたが重くなっていく。',
        ]);
        await era.printAndWait([
          'それでも',
          ss.sex,
          'は、',
          you.get_colored_name(),
          ' を握ったその手を離さない。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          ss.sex,
          'の手を握り直し、',
          ss.sex,
          'が少しずつ眠りへ落ちるのを見ていた。眠気が押し寄せ、',
          you.get_colored_name(),
          ' はそのまま',
          ss.sex,
          'と一晩を過ごした。',
        ]);
        await era.printAndWait([
          '翌朝。',
          you.get_colored_name(),
          ' は壁に凭れてベッドの縁に座り、自分が ',
          ss.get_colored_name(),
          ' の部屋で眠ってしまったことに気づいて顔を上げる。',
        ]);
        await era.printAndWait([
          ss.sex,
          'はもうベッドにいなかった。振り返ると、運動着に着替えた ',
          ss.get_colored_name(),
          ' が洗面所から出てくる。',
        ]);
        await ss.say_and_wait([
          callname,
          '、起きた？ 少し休む？ 今日のトレーニング計画は、あなたが昨日組んでくれたものよ。安心して。怠けたりしない。',
        ]);
        await era.printAndWait([
          ss.sex,
          'は気遣うように ',
          you.get_colored_name(),
          ' のこめかみを揉む。腰を痛そうにする ',
          you.get_colored_name(),
          ' を心配しているらしい。',
        ]);
        await era.printAndWait([
          'それから ',
          you.get_colored_name(),
          ' を部屋まで送り、扉が閉まる寸前、',
          you.get_colored_name(),
          ' は妙な一言を聞いた。',
        ]);
        await ss.say_and_wait([
          callname,
          '、約束よ……あなたは手を離さない。だから……あのことが果たせたら、私は……一生、あなたの手を握っていいのよね。',
        ]);
      } else {
        await era.printAndWait([
          ss.sex,
          'は慌てて手を伸ばす。だが闇のなか、',
          you.get_colored_name(),
          ' はそれに気づかなかった。',
        ]);
        await era.printAndWait([
          '振り返って走り、タオルを見つけ、ねんざで動きにくい',
          ss.sex,
          'の足を手当てする。',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          ' は苛立ちと怯えが混じった顔をしていた。',
        ]);
        await ss.say_and_wait('ありがとう。夜分に、すみません。');
        await era.printAndWait([
          ss.sex,
          'の声はひどくかすれていた。',
          ss.sex,
          'は ',
          you.get_colored_name(),
          ' の袖を掴み、離れてほしくないらしい。それで ',
          you.get_colored_name(),
          ' は、子どものころに聞いた子守歌を口ずさみ、',
          ss.sex,
          'を寝かしつけた。',
        ]);
        era.drawLine({ content: '翌朝' });
        await ss.say_and_wait('昨夜は……お見苦しいところを。すみません。');
        await era.printAndWait([
          ss.sex,
          'の目は少し赤く腫れていて、昨夜はよく眠れていないのがわかる。',
          you.get_colored_name(),
          ' は',
          ss.sex,
          'を寝かしつけたあと自分の部屋へ戻ったので、そのあと何が起きたかはわからない。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  double_crowns: (() => {
    const title = '二冠目';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} belm_sta ベルモントステークス（色付き名前）
     */
    const f = async (ss, you, callname, belm_sta) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' は勝負服のままゴール付近に立ち、ぼうっと空を見てから手を上げる。その姿に、場内が沸いた。',
      ]);
      await era.printAndWait([
        '新しい二冠王。ほとんど止められない勝者。誰もが',
        ss.sex,
        'に祝福を送り、新しい三冠馬の誕生を願っていた。',
      ]);
      await era.printAndWait([
        'それを見て ',
        you.get_colored_name(),
        ' は先に休憩室へ戻り、',
        ss.get_colored_name(),
        ' がこのあと使うものを揃える。タオル、湯、果物、そのほかの雑貨。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' が入ってきたとき、',
        you.get_colored_name(),
        ' はまず汗を拭かせようとした。だが',
        ss.sex,
        'は一言も言わず、',
        you.get_colored_name(),
        ' に飛びつき、抱きしめた。',
      ]);
      await ss.say_and_wait([
        callname,
        '……まだ夢じゃないわよね？ 最初の目標まで、あと一戦、よね？',
      ]);
      await era.printAndWait([
        ss.sex,
        'の声はかなり興奮している。',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の背を撫で、',
        ss.sex,
        'の体温を感じた。',
      ]);
      era.printButton(
        `「ああ。最初の目標まで、あと一歩だ。おめでとう、${ss.name}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '本当に……本当に、ありがとう。トレーナーとして、私のトレーニングも生活も気にかけてくれた。この勝ちは、あなたと私で取ったもの。これが、私の答えよ！',
      );
      await era.printAndWait([
        ss.sex,
        'は顔を上げる。金色の瞳に輝く自信が、',
        ss.sex,
        'を生まれつきの主役のように見せた。',
      ]);
      await ss.say_and_wait([
        'だから、',
        callname,
        '。これからお願いするわね。',
        belm_sta,
        '、三冠の最後の一戦。',
      ]);
      await era.printAndWait([
        '今日の祝勝会で、',
        ss.get_colored_name(),
        ' はとても嬉しそうで、話し方もいつものより柔らかかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  triple_crowns: (() => {
    const title = '宿願成就！';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      era.printButton(
        `「おめでとう、三冠王${ss.name}。今年いちばん強い競走${ss.uma_sex_title}になったな。」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        'あなたのおかげで……ようやく息がつける。正直……この感謝を、言葉にできない。',
      );
      await ss.say_and_wait(
        'あなたが、私の願いを叶えてくれた……いちばん高い舞台に立たせてくれた。',
      );
      await era.printAndWait([
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' に頭を下げ、なかなか顔を上げない。',
      ]);
      await ss.say_and_wait(
        'あなたの助けがなければ、ここまで来られなかった。それはわかっている……だから、これから先、安心できる。',
      );
      await era.printAndWait([
        ss.sex,
        'は顔を上げ、',
        you.get_colored_name(),
        ' に抱きついた。場外の熱気は噴き出しそうな火山のようだが、コースの廊下では、',
        ss.get_colored_name(),
        ' はいつにもまして優しい。',
      ]);
      await era.printAndWait([
        ss.sex,
        'はそっと ',
        you.get_colored_name(),
        ' に凭れ、',
        you.get_colored_name(),
        ' の体に張り付く。',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の吐息が体に当たる、その柔らかさまで感じ取れた。',
      ]);
      await ss.say_and_wait(
        '少しだけ、少しだけ凭れさせて？ あなたがずっと黙ってしてくれていたように。今度は、表立って凭れさせて。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '楽しくて暑い夏の始まり';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {number} crowns 米国三冠の勝利数
     */
    const f = async (ss, coffee, you, callname, crowns) => {
      await era.printAndWait([
        '見渡す限りの水平線と、紺碧の海が、心をほどいてくれる。',
      ]);
      await ss.say_and_wait([
        'ん、浜辺でトレーニングしたことはないわ。',
        callname,
        '、本当に効果があるの？',
      ]);
      era.printButton(
        '「私を信じなくてもいい。トレセン学園は信じてくれ。先輩たちが残した経験談だ」',
        1,
      );
      await era.input();
      await ss.say_and_wait(
        'それもそうね。ではこの二か月、よろしくお願いします。海でのトレーニングは、私、まったく経験がないから。',
      );
      await ss.say_and_wait([
        '笑い話や事故になったら困るわ。そこは ',
        you.get_colored_name(),
        ' に、しっかり見てほしい。',
      ]);
      await era.printAndWait([
        ss.sex,
        'は目を細める。冷たい外見を剥げば、静かで端正で、それでも活気のある',
        ss.uma_sex_title,
        'が ',
        you.get_colored_name(),
        ' の前にいる。',
      ]);
      await era.printAndWait([
        '口では一秒も無駄にせずトレーニングを詰めろと言いながら、',
        ss.get_colored_name(),
        ' はそれでも浜辺で、いろいろなことを楽しそうに試していた。',
      ]);
      await era.printAndWait([
        'バレー、サーフボード、砂遊び。陽の下で、',
        ss.sex,
        'の深い黒のビキニが、誇らしい体をきれいに支えている。',
      ]);
      if (ss.sex_code !== 1) {
        await era.printAndWait([
          '白い胸がビキニに縛られて揺れるたび、親戚の ',
          coffee.get_colored_name(),
          ' より、ずっと育ちがいいように見えた。',
        ]);
      }
      await era.printAndWait([
        'そしてその午後、',
        you.get_colored_name(),
        ' はビーチチェアにぐったり伏せた ',
        ss.get_colored_name(),
        ' を見ることになった。',
      ]);
      await ss.say_and_wait([
        'ふう、',
        callname,
        '。この天気、本当に暑い。トレーニングは、できるだけ水のなかか日陰にして。ごめんね。',
      ]);
      if (crowns === 3) {
        await era.printAndWait([
          '強い三冠王でも、自然とは戦えないらしい、と ',
          you.get_colored_name(),
          ' は思う。',
        ]);
      } else {
        await era.printAndWait([
          '強い二冠王でも、自然とは戦えないらしい、と ',
          you.get_colored_name(),
          ' は思う。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_christmas: (() => {
    const title = 'クリスマスの準備';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, coffee, you, callname) => {
      await ss.say_and_wait(
        'んんん、クリスマスはトレーナーさんにも贈り物をするものなの？',
      );
      await era.printAndWait([
        '家政の教室で、',
        ss.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' とひそひそ話している。あいだに鏡があるみたいで、片方は影のようにも見える。',
      ]);
      await ss.say_and_wait([
        'わかった、わかった。あなたの言うとおり。',
        callname,
        ' への贈り物、考えないと。',
      ]);
      await era.printAndWait([
        ss.sex,
        'は振り返って目を細め、',
        you.get_colored_name(),
        ' を見て考え込み、それから伸びをした。',
      ]);
      await ss.say_and_wait([
        'まあいいわ。まずは ',
        callname,
        ' に食事をおごって、お礼にしましょう。',
      ]);
      await era.printAndWait([
        'こうして ',
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を食堂へ連れていき、豪勢な一食をごちそうした。ただし',
        ss.sex,
        'が頼んだものには、ニラのようなものがやけに多い。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '自分だけの勝利';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('夢を見ているみたい……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' は顔を上げて ',
        you.get_colored_name(),
        ' を見る。瞳に涙が光り、今にも泣き出しそうだった。',
      ]);
      await ss.say_and_wait([
        'もし……もし ',
        callname,
        ' がいなければ、今日みたいな結果は取れなかったでしょう。これは私だけの、捧げるための勝利……',
      ]);
      await era.printAndWait([
        '言いながら、今ここにはもう誰もいないと気づいたのか、',
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の襟を掴み、顔を寄せて抱きついた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の体から出る熱と、その熱い感情を感じ取る。',
      ]);
      await ss.say_and_wait(
        'これから先も、『私』と一緒に歩いてくれる？ あの日、互いの担当になると決めたときみたいに。一緒に。',
      );
      era.printButton('「君は私の担当だ。置いていくわけがない」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        ' は、困ったように綺麗な眉を寄せる ',
        you.get_colored_name(),
        ' を見ながら、黒タイツのふくらはぎで ',
        you.get_colored_name(),
        ' の脚を二度すり寄せた。',
      ]);
      await ss.say_and_wait([
        callname,
        ' が私の意味をわかっても、わからなくても、私はやりたいことを貫くわ。',
      ]);
      await era.printAndWait([
        '何か面白いことを思い出したのか、',
        you.get_colored_name(),
        ' を軽く押し、振り返りざまに目を合わせる。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_2: (() => {
    const title = 'サンデーサイレンスと神社へ';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' は優しく ',
        you.get_colored_name(),
        ' の手を引く。',
      ]);
      await era.printAndWait([
        ss.sex,
        'の華やかな黒い着物は、',
        ss.sex,
        'を俗世離れした美しい女性のように見せていた。',
      ]);
      await era.printAndWait([
        'それほど寒くない朝、',
        ss.sex,
        'は自分から ',
        you.get_colored_name(),
        ' の家の扉を叩き、',
        you.get_colored_name(),
        ' を引っ張り出した。',
      ]);
      await ss.say_and_wait([callname, '、寒かったら手を入れていいわよ。']);
      await era.printAndWait([
        ss.sex,
        'は自分の細身の着物を指し、頬に薄い紅を浮かべ、',
        you.get_colored_name(),
        ' の動きを待っているらしい。',
      ]);
      await era.printAndWait([
        'だが',
        ss.sex,
        'は少し慌てていたのか、誘惑のタイミングが明らかに悪い。一分も経たないうちに、ふたりは神社の門の前に立っていた。',
      ]);
      await ss.say_and_wait([
        'ああ、もういいわ。',
        callname,
        ' みたいな朴念仁は、風情がわからない。',
      ]);
      await era.printAndWait([
        'そのまま神社に入り、いつもの参拝どおり、賽銭箱に硬貨を入れて柏手を打ち、願をかける。',
      ]);
      await ss.say_and_wait([callname, '、どんな願いをしたの？']);
      era.printButton(
        '「ふたりとも体が丈夫で、安心して幸せに暮らせますように。」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '言い終えると、',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の小さな手を取る。黒いレースの手袋ごしに触れる感触は、妙なものだった。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は手袋越しに ',
        you.get_colored_name(),
        ' の温度を感じ取り、それから ',
        you.get_colored_name(),
        ' の手を',
        ss.sex,
        'の着物のなかへ入れる。',
      ]);
      await ss.say_and_wait([
        'ん、私の願いは秘密。',
        callname,
        ' が太い棒で口をこじ開けない限り、言わないわ。',
      ]);
      await era.printAndWait([
        'そう言って',
        ss.sex,
        'は頬にキスを残し、逃げるように神社を出ていった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_rainy: (() => {
    const title = '嵐の前';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, coffee, you, callname, call_25) => {
      await ss.say_and_wait('また雨……この天気、本当に嫌になる。');
      await era.printAndWait([
        you.get_colored_name(),
        ' はそっとタオルを ',
        ss.get_colored_name(),
        ' の頭にかける。',
        ss.sex,
        'は顔を上げ、',
        you.get_colored_name(),
        ' の顔拭きをとても嬉しそうに受けている。',
      ]);
      await era.printAndWait([
        'その顔に、',
        you.get_colored_name(),
        ' は湯上がりの子猫を連想する。だがそんなことは、絶対に口にできない。',
      ]);
      await era.printAndWait([
        '扉がノックされ、',
        you.get_colored_name(),
        ' が適当に「どうぞ」と答えると、',
        coffee.get_colored_name(),
        ' が扉を開けた。',
      ]);
      await coffee.say_and_wait('久しぶり。元気？');
      await ss.say_and_wait('ええ、かなりいいわ。特に、あの人と一緒のときは。');
      await era.printAndWait([
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を指さす。',
      ]);
      await coffee.say_and_wait(
        '来る？ あと半月。雨季は来月まで続きそうだけど。',
      );
      await ss.say_and_wait([
        '知ってる？ 嵐でも大雨でも、',
        callname,
        ' がいれば、もう大丈夫だって思えるの。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を一度見て、うなずいて去った。',
      ]);
      await ss.say_and_wait([
        'あらら、困ったわね。',
        call_25,
        ' は真面目な性格だし、もっと困るのは、私もそうだってこと。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は後ろから ',
        you.get_colored_name(),
        ' に抱きつき、ますます猫に出会った気分にさせる。',
      ]);
      await ss.say_and_wait([
        callname,
        '、手伝ってくれるわよね。なにせ ',
        call_25,
        ' ',
        ss.sex,
        'は、長距離では敵なしの天才競走',
        ss.uma_sex_title,
        'なんだから。',
      ]);
      await era.printAndWait([
        '窓の外で、また大雨が降り始める。',
        ss.get_colored_name(),
        ' の声はひどく静かだった。',
      ]);
      await era.printAndWait([
        ss.sex,
        'はこうして ',
        you.get_colored_name(),
        ' を抱き、時間がここで止まったみたいに、この瞬間を味わっている。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '雨の勝者';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {string} y_call_s プレイヤーのサンデーサイレンスへの呼び方
     */
    const f = async (ss, coffee, you, callname, y_call_s) => {
      await era.printAndWait([
        '暴雨のなか、全身ずぶ濡れの ',
        ss.get_colored_name(),
        ' の表情は淡い。天皇賞で一着を取った直後には見えない。',
      ]);
      await era.printAndWait([
        'だが',
        ss.sex,
        'の向かい側では、押し寄せる歓声と実況の熱い称賛が、潮のように',
        ss.sex,
        'へ向かっていた。',
      ]);
      await ss.say_and_wait([
        'できた……',
        callname,
        '、私、本当に……やったのよね？',
      ]);
      await era.printAndWait([
        '振り返ると、',
        coffee.get_colored_name(),
        ' が拍手をしている。',
        ss.sex,
        'は血のつながった相手を見て、微笑んだ。',
      ]);
      await era.printAndWait([
        '自分が勝っていなくても、',
        coffee.get_colored_name(),
        ' は遠慮なく祝福を ',
        ss.get_colored_name(),
        ' へ送る。',
      ]);
      await ss.say_and_wait('よかった……本当に……本当に。');
      await era.printAndWait([
        ss.sex,
        'は衆目のなか、',
        you.get_colored_name(),
        ' の胸へ飛び込む。周囲の驚きや興奮など、気にしていない。',
      ]);
      era.printButton(`「${y_call_s}……少し楽になったか？」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の背を叩く。',
        ss.sex,
        'の水と泥が、',
        you.get_colored_name(),
        ' の服まで濡らした。',
      ]);
      await era.printAndWait([
        'だが ',
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に答えず、ただ胸のなかで荒い息をしていた。',
      ]);
      await ss.say_and_wait(
        '少し……もう少し落ち着かせて。あなたの胸のなかでいいから。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は周囲の視線など気にせず、',
        ss.get_colored_name(),
        ' を抱えて休憩室へ戻った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '今年も夏合宿';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await era.printAndWait([
        'また一年、海辺。',
        ss.get_colored_name(),
        ' の水着は、学園支給のものから、',
        ss.sex,
        'の好みの大胆な黒いビキニに変わっていた。',
      ]);
      await era.printAndWait([
        '均整のとれた豊かな肉体が ',
        you.get_colored_name(),
        ' の前で揺れるたび、若いトレーナーの胸に火が灯る。だが ',
        ss.get_colored_name(),
        ' はまったく気づいていないみたいで、何気ない仕草まで',
        ss.sex,
        'の魅力を放っている。',
      ]);
      await ss.say_and_wait(
        '何を見てるの？ 計画どおりなら、そろそろ場所を取りに行くんでしょう？',
      );
      await era.printAndWait([
        '豊かで力のある太ももが砂を踏む。陽を浴びた ',
        ss.get_colored_name(),
        ' は、あまりに美しい。',
      ]);
      await era.printAndWait([
        '言い終えると、',
        ss.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を引き、砂浜へ連れていく。今年の夏合宿の、トレーニングと遊びが始まった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win: (() => {
    const title = '春秋の覇者';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' は淡々と額を拭き、休憩室の大画面で繰り返される、最後の追い込みを見ている。',
      ]);
      await ss.say_and_wait(
        'あなたと並んでいると、勝ちが日常になってくるわね……春秋天皇賞の一着。聞くだけで、すごい功績みたい。',
      );
      era.printButton(
        `「でも君はやり遂げた。それが ${ss.name} の力だ。絶対的に強い競走${ss.uma_sex_title}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        '、そんなこと言うと照れるわ。この数年でいちばん頑張っていたのは、',
        callname,
        ' でしょう。私、ちゃんと覚えてるんだから。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' の黒タイツの足先が ',
        you.get_colored_name(),
        ' の脚を挟み、体ごと ',
        you.get_colored_name(),
        ' にぶら下がる。レースが終わっても、',
        ss.sex,
        'の興奮はまだ収まっていないらしい。',
      ]);
      era.printButton(
        'それでも、最後のいちばん大きなレースが残っている。今年最後の一戦だ',
        1,
      );
      await ss.say_and_wait([
        '当然の勝ちを取るわ。',
        callname,
        '。最初に言ったとおり、私たちは勝つ。私が、勝利をあなたに届ける。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(
        '漆黒の帝王？ 解説者たちは、また妙なことを言ってるわね。',
      );
      era.printButton(
        '君につけたあだ名らしい。シリーズの歴史でも、君の功績は珍しいから',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        'なら新人のほうを見てくれたらいいのに。でも、',
        callname,
        '、一緒にトロフィーを取りに行かない？',
      ]);
      await era.printAndWait([
        ss.sex,
        'の突然の誘いに、',
        you.get_colored_name(),
        ' は少し戸惑う。',
      ]);
      await ss.say_and_wait(
        '文字どおりよ。これは私ひとりの勝ちじゃない。あなたと私が一緒に掴んだもの。',
      );
      await ss.say_and_wait(
        'だから、一緒に称賛を受けましょう。これは私たちの勝利。',
      );
      await ss.say_and_wait(
        '漆黒の帝王なんて、あなたが嫌でなければ、好きに言わせておけばいい。',
      );
      await ss.say_and_wait(
        'もっと良いあだ名があると思うなら、教えてくれてもいいわ。あなたの耳に心地よければそれでいい。',
      );
      await era.printAndWait([
        ss.sex,
        'はにこやかに ',
        you.get_colored_name(),
        ' の手を取り、休憩室から引っ張り出す。',
        ss.sex,
        'と一緒に、もっと遠い未来へ向かって。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  play_dice: (() => {
    const title = '運試し、する？';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' はトランプを取り出し、',
        you.get_colored_name(),
        ' に手を振る。',
      ]);
      await ss.say_and_wait([callname, '、ババ抜きしない？ 今は休憩時間よ。']);
      await era.printAndWait([
        'ババ抜きの進行は早く、あっという間に ',
        ss.get_colored_name(),
        ' の手札は二枚だけになる。',
      ]);
      await ss.say_and_wait([
        'ふふふ、',
        callname,
        '、ちゃんと選んでちょうだい。',
      ]);
      era.printButton('左の札を引く（スタミナ＆賢さ+10）', 1);
      era.printButton('右の札を引く（スピード+10、スキルPt+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait(
          'どうやら私のほうが運がいいみたい。これでトレーナーは担当に負けたわね。代償として、ご飯を取ってきてくれない？',
        );
        await era.printAndWait([
          '結局、食堂へ行って ',
          ss.get_colored_name(),
          ' の好きな食事とお菓子を届けた。',
        ]);
      } else {
        await ss.say_and_wait([
          'え、',
          callname,
          ' のほうが上手だった……なら、',
          callname,
          ' は昼、何が食べたい？ 取りに行くわ。ついでに、私のタイムも計ってくれない？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は快く引き受けた。すると',
          ss.sex,
          'は長い行列に当たり、ずいぶん待たされたあと、困った顔で弁当を提げて戻ってきた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  enjoy_cat: (() => {
    const title = '猫と仲良くしてみる';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' は茂みのそばで待ち、何か困っているらしい。',
      ]);
      await ss.say_and_wait([
        callname,
        '！！ ちょうどいい、手伝って。ここに子猫が隠れてるの。このあと雨が降ったら、濡れて風邪をひいたら大変！',
      ]);
      era.printButton(
        '「やっぱり、まずは餌で釣るだろう。」（根性＆賢さ+10）',
        1,
      );
      era.printButton(
        '「先手必勝で、猫を捕まえる。」（スタミナ＆パワー+10）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          ss.get_colored_name(),
          ' は聞いてうなずき、',
          you.get_colored_name(),
          ' の困った視線のなか、パンで子猫を釣ろうとする。',
        ]);
        await era.printAndWait([
          'だが、',
          ss.sex,
          'のやり方はほとんど効かない。',
        ]);
        await you.say_and_wait('私がやってみよう。ちょうど食材を持っていた。');
        await era.printAndWait([
          '魚肉ソーセージが茂みの前に置かれる。子猫は警戒して頭を出し、人間ふたりを見てすぐ引っ込む。だが空腹が理性に勝ち、我慢できずに飛び出し、ソーセージに噛みついて、',
          ss.get_colored_name(),
          ' の手のなかへ収まった。',
        ]);
      } else {
        await ss.say_and_wait(
          'それもそうね。こういうときは、私の長所を出す番。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' は伸びをし、目が鋭くなる。ゆっくり茂みを分け、すでに警戒して毛を逆立てている子猫を見つける。',
        ]);
        await ss.say_and_wait('警戒してるわね……でも、こうすれば。');
        await era.printAndWait([
          ss.sex,
          'は素早く手を伸ばし、子猫の首筋を摘む。さっきまで ',
          ss.get_colored_name(),
          ' を威嚇していた子猫が、一瞬で大人しくなった。',
        ]);
        await era.printAndWait([
          'おとなしく持ち上げられ、',
          ss.get_colored_name(),
          ' の手のなかへ収まる。',
        ]);
      }
      await era.printAndWait([
        '子猫を捕まえたあと、',
        ss.get_colored_name(),
        ' は休憩室の近くまで連れていき、窓の外の大雨を見て笑った。',
      ]);
      await ss.say_and_wait(
        '大雨にずぶ濡れになったら、あなた、大変なことになるわよ。小さな子。',
      );
      await era.printAndWait([
        '子猫はキャットフードに顔を埋め、',
        ss.get_colored_name(),
        ' の言葉など聞いていない。',
      ]);
      await ss.say_and_wait('あとで動物病院へ連れていって診てもらうわ……');
      await era.printAndWait(
        'それからこの子猫はついでに駆虫と避妊去勢までされ、トレセンに戻ってきたころには、生きた心地がしない顔をしていた。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sugar_or_milk: (() => {
    const title = 'コーヒーはどんな味がいい？';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, you, call_25) => {
      await ss.say_and_wait('コーヒーは砂糖？ ミルク？ それとも何も入れない？');
      era.printButton('「何？」', 1);
      await era.input();
      await ss.say_and_wait([
        'あなたのコーヒーよ。砂糖とミルク、どっち？ ',
        call_25,
        ' ',
        ss.sex,
        'に淹れ方を少し習ったの。今、試してもらう。何にする？',
      ]);
      era.printButton('「やっぱり角砂糖を多めに。」（スタミナ+20）', 1);
      era.printButton('「ミルクを足すのも良さそう。」（賢さ+20）', 2);
      const ret = await era.input();
      await ss.say_and_wait(
        'そう？ じゃあ味見して。私の淹れたコーヒー、どう？',
      );
      await era.printAndWait([
        '口当たりも甘さもとてもよく、初めて淹れた新人の出来とは思えない。',
        you.get_colored_name(),
        ' の顔を見て、',
        ss.get_colored_name(),
        ' は愉快そうに口角を上げた。',
      ]);
      await ss.say_and_wait(
        '美味しいなら、次も持ってくるわ。どこか足りなければ、すぐ言ってね。',
      );
      await era.printAndWait([
        'こうして ',
        ss.get_colored_name(),
        ' は、休憩室の飲み物供給を独占した。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
