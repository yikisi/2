/**
 * @file ハルウララ - 地下室
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async first_prison(urara, inner_urara, you, callname) {
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      'はあ、あなた……どうしてこうなったの？',
    );
    await inner_urara.say_as_unknown_and_wait([
      '幸い、ウララはトレーナーの',
      urara.uma_sex_title,
      '（あなた）に、そこまで残酷にはなれない。ほかの子とは違うみたい……',
    ]);
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' は戸惑いながらベッドから上体を起こす。見知らぬ寝具、目の前は暗い天井だけ。だが傍らでは、途切れ途切れの嗚咽が続いている。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' の目覚めに気づき、ベッドの際で丸くなっていた小',
      urara.uma_sex_title,
      'は慌てて力なく耳を立て、泣き赤らんだ小さな顔をこすりながら ',
      you.get_colored_name(),
      ' に背を向けた。',
    ]);
    await urara.say_and_wait([
      'ごめんね、でも今回だけ！ 残ってくれる？ あとでウララ、いい子に戻るから！ だから……！',
    ]);
    await era.printAndWait([
      '涙が丸めた膝へ止まりなく落ちても、言葉が隠しのない罠のようでも、',
      urara.teen_sex_title,
      'は結局、「卑劣」にはなれなかった。',
    ]);
    await era.printAndWait([
      '少なくとも、密室の半開きの扉に鍵はかかっていない。',
    ]);

    era.println();

    await inner_urara.say_as_unknown_and_wait([
      '……はあ……ではトレーナー',
      you.adult_sex_title,
      '（あなた）の選択は——',
    ]);
    era.printButton('ここに残る', 1);
    era.printButton('背を向けて出ていく', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'ゆっくり小',
        urara.uma_sex_title,
        'の背中へ寄り、',
        you.get_colored_name(),
        ' は後ろから',
        urara.sex,
        'の冷たい小さな手を握った。',
      ]);
      await urara.say_and_wait([
        'え？ ',
        callname,
        ' が残ってくれるの……本当？ ウララ、本当に悪い子になっていいの……？',
      ]);
      await era.printAndWait([
        '泣き崩れた頬を雑に拭い、涙の中で笑った ',
        urara.get_colored_name(),
        ' は身を返して ',
        you.get_colored_name(),
        ' を優しく押し倒す。',
      ]);
      await urara.say_and_wait([
        'じゃあ、今日も、明日も、明後日も……だめ、そんなのわがまますぎるよね。だから今だけでいい、だよね……？',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '見ての通り、ここへ連れてこられても、',
        urara.sex,
        'は決心しきれなかった。とにかく、楽しんでいって。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ただ出ていくときは、ウララを寝かしつけた方がいいわよ？ ',
        urara.sex,
        '、今日はずいぶん泣いたんだから。',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        ' を見ないまま、',
        you.get_colored_name(),
        ' は黙って立ち上がり、振り返らず部屋の奥の扉へ向かった。',
      ]);
      await urara.say_and_wait([
        '……ウララ、わかったよ。悪い子になっちゃだめだよね、ごめん……でも、',
        callname,
        ' をほかの子に……',
      ]);
      await urara.say_and_wait([
        'でも、そばのひとつだけでいいから……',
        callname,
        '、もし次が、もし次があったら……！',
      ]);
      await era.printAndWait([
        '重い扉が押し開かれ、鈍い跳ね返りが響く。返事をもらえなかった小',
        urara.uma_sex_title,
        'は、穴だらけの昏がりに取り残された。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '……優しすぎたかしら。『決心して卑劣になる』なんて、',
        urara.sex,
        'にはまだ難しすぎる……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あなたもやりすぎよ。わかっているでしょう、ウララが本当に何かしたら、私はたいていあなたの味方にはならないわよ？',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  welcome(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'こういうことは、結局は最初の一回と、あとの無数回……しかも選ぶ権利もない。',
    );
    inner_urara.say_as_unknown(
      'あまり焦らないで。来てしまった以上、ウララのわがままに付き合ってみたら？',
    );
    era.drawLine();
    era.print([
      '見知らぬようで見慣れた部屋で目を覚ます。',
      you.get_colored_name(),
      ' のいる昏がりは意外と温かい。傍らに横たわる ',
      urara.get_colored_name(),
      ' の、赤らんだ桜の瞳は熱く、粘ついている。',
    ]);
    urara.say([
      'ウララ、やっぱり悪い子になっちゃった。ならもっとわがままになっていいよね。だから ',
      callname,
      '……',
    ]);
    urara.say([
      '今度はもっと一緒にいて。それに……',
      callname,
      ' には、断る権利はないんだよ？',
    ]);
    era.print([
      you.get_colored_name(),
      ' の返事を待たず、小',
      urara.uma_sex_title,
      'の両腕が力強く ',
      you.get_colored_name(),
      ' を下に抱きとめ、幼い笑顔もだんだん紅に染まっていく。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'ごめんね、ウララは結局悪い子になってしまった。こうなると、私も手がないわ。',
    ]);
    inner_urara.say_as_unknown([
      'あなたが何かしたいなら、たいていの場合、私は見て見ぬふりをする。楽しんでいって？',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async ask_release_agree(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' の言い分に根拠があれば、',
      urara.get_colored_name(),
      ' はだいたい頷く。牢の中でも、その微妙な息は通っている。',
    ]);
    await urara.say_and_wait([
      'うん！ 大丈夫だよ、',
      callname,
      ' がそう言うのも、ウララのためだよね？ じゃあ今は、もうわがまま言っちゃだめだね……',
    ]);
    await urara.say_and_wait([
      callname,
      '、外に出たらウララはしばらく守ってあげられないよ。だから気をつけてね！ また明日……？',
    ]);
    await era.printAndWait([
      '涙をこらえ、',
      urara.get_colored_name(),
      ' は赤らんだ目尻を軽く揉み、名残惜しそうに ',
      you.get_colored_name(),
      ' のために扉の仕掛けを外した。',
    ]);
    await era.printAndWait([
      '影の中で寂しげな小',
      urara.uma_sex_title,
      'を見て、一瞬 ',
      you.get_colored_name(),
      ' は、もう少し',
      urara.sex,
      'に付き合いたい気持ちが湧いた？',
    ]);
    await era.printAndWait([
      'だが今は、残ることはもうできない。重くなった足を引きずり、',
      you.get_colored_name(),
      ' は少し空虚な「自由」へ向かった……',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'でもウララの言う通り、気をつけて。安易にここへ戻らない方がいいわよ？',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_reject(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '短すぎるわ。雑事はしばらく忘れて。少なくとも今は、簡単には口を開かせない。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'あなたが何を追い求めていようと、私にとっては『ウララの今』より大事なものはないの。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'よし、しばらく出る考えは捨てて。いま、呼吸していいわ。',
    ]);
    await era.printAndWait([
      '宣言が終わるころ、息を詰まらせていた力が ',
      you.get_colored_name(),
      ' の、声を出そうとしていた喉を離す。だが背後を見据えられる冷たい感触が、首筋を這い上がった。',
    ]);
    await era.printAndWait([
      '余光で後ろを見る。灰黒く透けて、ほとんど場に溶けている「',
      inner_urara.get_colored_actual_name(),
      '」が、冷たい目で ',
      you.get_colored_name(),
      ' を見つめ返していた。',
    ]);
    await era.printAndWait(['計略と言い訳のほかに、忍耐も欠かせない……']);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} cur_time 現在時刻
   */
  async ask_time(urara, callname, cur_time) {
    await urara.say_and_wait([
      'え？ あ、ちょっと待って……いまの時間は ',
      cur_time,
      ' だよ。',
    ]);
    await urara.say_and_wait([
      callname,
      '、大事なこと思い出したの？ ごめんね、ウララ、普段から時間守れないし、今もそこまで考えてなかった……',
    ]);
    await urara.say_and_wait([
      'でもせっかく残ってくれたんだから、もう少しウララに付き合ってくれる？ ウララ、まだ……',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  back_basement(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'こういうことは、結局は最初の一回と、あとの無数回……しかも選ぶ権利もない。',
    );
    inner_urara.say_as_unknown(
      'あまり焦らないで。来てしまった以上、ウララのわがままに付き合ってみたら？',
    );
    era.drawLine();
    era.print([
      '見知らぬようで見慣れた部屋で目を覚ます。',
      you.get_colored_name(),
      ' は温かい昏がりの中で上体を起こすが、部屋には誰もいない。',
    ]);
    era.print([
      you.get_colored_name(),
      ' が主犯は誰だろうと首を傾げたとき、視線の先の扉の向こうから細かな足音がし、続いて鍵の音がした。',
    ]);
    urara.say([
      callname,
      '、起きたんだね！ えへへ……今度も、もっと一緒にいてね？',
    ]);
    era.print([
      '桜色の小さな主犯が跳ねるように、力強く笑いながら飛びかかってくるのを見て、',
      you.get_colored_name(),
      ' の目覚めたばかりの意識は、また目を回した。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'ごめんね、ウララは結局悪い子になってしまった。こうなると、私も手がないわ。',
    ]);
    inner_urara.say_as_unknown([
      'あなたが何かしたいなら、たいていの場合、私は見て見ぬふりをする。楽しんでいって？',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async battle_escape(urara, inner_urara, you) {
    await era.printAndWait([
      '全力で ',
      urara.get_colored_name(),
      ' の絡みを振り切り、',
      you.get_colored_name(),
      ' は重い体を引きずって最後の仕掛けの前まで来た。',
    ]);
    await era.printAndWait([
      '幸い、残りの気力はまだここから逃げ出せる程度には残っていた。重い扉を押し、',
      you.get_colored_name(),
      ' は遠くの、自由を示す光点へ一歩を踏む。',
    ]);
    await era.printAndWait([
      '部屋を出た瞬間、理由のない悪寒が、脳へ直に届く低い呻きとともに、後ろから ',
      you.get_colored_name(),
      ' の背筋を登った。',
    ]);
    await era.printAndWait([
      '振り返った瞬間、',
      you.get_colored_name(),
      ' はもうひとりの ',
      inner_urara.get_colored_name(),
      ' が扉際に立ち、怨みの冷気が立ち込めているのを見た気がした。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'こうして主人公は、無責任に逃げ出した。めでたしめでたし？',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……走りなさい。今度は、捕まえ損ねたことにしてあげる。',
    ]);
    await era.printAndWait([
      '背を刺す視線を浴びながら、',
      you.get_colored_name(),
      ' は必死に地下室を逃げ出し、硬い地面に倒れて、ようやく終わった。',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async battle_prison(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は思いのほかすんなり ',
      urara.get_colored_name(),
      ' の絡みを振り切り、最後の仕掛けの前まで来た。これを解けば——',
    ]);
    await you.say_and_wait('……');
    await era.printAndWait([
      '惜しいことに、その場で固まった ',
      you.get_colored_name(),
      ' は、何度でも解けない。あまりにも残酷なほど単純な仕掛けだ。',
    ]);
    await era.printAndWait([
      '重い閉じた扉のそば、「',
      callname,
      '」と「ウララ」の写真。ふたりの笑顔は、陽の下の蝉の翅のように薄く、脆い。',
    ]);
    await era.printAndWait(['続いて来るのは、「悪魔の嘲り」。']);
    await inner_urara.say_as_unknown_and_wait([
      '簡単よ。トレーナーは取っ手を握って、この写真を、ウララの側から引き裂けばいい。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'んー、迷っている？ ウララに暴力を振るうあなたなら、大したことないでしょう？',
    ]);
    await era.printAndWait([
      '写真の笑顔を見つめ、',
      you.get_colored_name(),
      ' は力なく、震える手を引っ込めた。耳元の呪詛も、冷笑のあとに消えていく。',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} is_back ハルウララが戻ってきたばかりか、目覚めたばかりか
   */
  find_escape(urara, inner_urara, you, callname, is_back) {
    if (is_back) {
      era.print([
        urara.get_colored_name(),
        ' の不在を幸いに、',
        you.get_colored_name(),
        ' は急いで逃げようとした。だが重なる仕掛けに頭を抱えている最中、扉が突然開いた。',
      ]);
      urara.say([
        'え？ ',
        callname,
        '、これも解けないの？ ウララ、しばらくいなかったのに、逃げられなかったんだね！',
      ]);
      era.print([
        '扉がゆっくり光を外側へ閉じ、',
        urara.teen_sex_title,
        'の小さく無邪気な顔も、昏がりに包まれて、ほんの少し戯れと嘲りを帯びた。',
      ]);
    } else {
      era.print([
        urara.get_colored_name(),
        ' がまだ目覚めていないうちに、',
        you.get_colored_name(),
        ' は逃げようと決めた。だが重なる仕掛けに頭を抱えている最中、後ろから',
        urara.teen_sex_title,
        'の声がした。',
      ]);
      urara.say([
        'え？ ',
        callname,
        '、まだ解けてないの？ ウララ、もう起きちゃったよ？ ',
        callname,
        ' の頭、ウララより弱いの？',
      ]);
      era.print([
        '静かに背後で ',
        you.get_colored_name(),
        ' の無駄骨を眺め、',
        urara.teen_sex_title,
        'の小さく無邪気な顔は、昏がりの中で戯れと嘲りを帯びている。',
      ]);
    }
    urara.say([
      callname,
      '、固まっちゃったね。言い訳、考えなくていいよ？ だって、怒ってないから。',
    ]);
    era.print([
      '小さな大人のように、',
      you.get_colored_name(),
      ' の前で立ち止まった ',
      urara.get_colored_name(),
      ' は、いたずらな生徒を諭す先生のように、「興味深そう」な目を向けた。',
    ]);
    era.print([
      'そう軽く言いながらも、このあとの時間、笑顔に笑みのない ',
      urara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' にもっと密着してきた。',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async flatter(urara, you, callname) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait([
        'え？ ',
        callname,
        '、本気？ でも言ってくれるだけで嬉しいよ。だから……んちゅ……はぁん……',
      ]);
      await urara.say_and_wait([
        'えへへ～ ',
        callname,
        ' へのご褒美。トレーナーが、もっとウララのこと好きになってくれたら、もっと嬉しいな！',
      ]);
      await era.printAndWait([
        '頬を赤らめて ',
        you.get_colored_name(),
        ' の膝へ崩れるように座り、小',
        urara.uma_sex_title,
        'は湿った深いキスで ',
        you.get_colored_name(),
        ' の甘い言葉を封じた。',
      ]);
    } else {
      await urara.say_and_wait([
        'え？ あっ！ ',
        callname,
        ' の言いたいこと、わかるよ。本気じゃなくてもいい。だってウララにも、悪いところがあるから。',
      ]);
      await urara.say_and_wait([
        'ウララは ',
        callname,
        ' と一緒にいられるだけで幸せだよ。でも外のこと考えると、不安になっちゃう……',
      ]);
      await urara.say_and_wait([
        '今、',
        callname,
        ' がいいって言ってくれるなら……ウララも、しばらく悩み忘れられる、だよね？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  get_up(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'こういうことは、結局は最初の一回と、あとの無数回……しかも選ぶ権利もない。',
    );
    inner_urara.say_as_unknown(
      'あまり焦らないで。来てしまった以上、ウララのわがままに付き合ってみたら？',
    );
    era.drawLine();
    era.print([
      '見知らぬようで見慣れた部屋で目を覚ます。傍らの温もりを辿ると、小',
      urara.uma_sex_title,
      'は夢の中でも、しっかり ',
      you.get_colored_name(),
      ' の体を抱いていた。',
    ]);
    era.print([
      you.get_colored_name(),
      ' の目覚めに誘われるように、長い髪をほどいた ',
      urara.get_colored_name(),
      ' も、昏がりの中で、潤んでいるのに光の足りない桜の瞳を開けていく。',
    ]);
    urara.say([
      'ん～ ',
      callname,
      '、よく眠れた？ 今、何時だっけ？ もう少し寝てよ？ えへへ～ んちゅ……',
    ]);
    era.print([
      '身を返して ',
      you.get_colored_name(),
      ' の上に覆い被さり、口を開く暇も与えず、',
      urara.teen_sex_title,
      'は柔らかい唇と舌で、優しく、拒否を許さず、言葉を封じた。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'ごめんね、ウララは結局悪い子になってしまった。こうなると、私も手がないわ。',
    ]);
    inner_urara.say_as_unknown([
      'あなたが何かしたいなら、たいていの場合、私は見て見ぬふりをする。楽しんでいって？',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'こうして、トレーナー',
      you.adult_sex_title,
      '（あなた）は小さな担当を奇襲して、地下室から逃げおおせた……はあ……',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……よく手を出せたものね。でもあなたが選んだ以上、私がとやかく言うことでもない。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'どこにそんな必要があるのかわからないけれど、まあいい。しばらく、あなたの顔も見たくないわ。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……心配しないで。ウララは私が慰めてあげる。元に戻るわ、全部……',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async strike_fail(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'こうして、トレーナー',
      you.adult_sex_title,
      '（あなた）は小さな担当を奇襲しようとして、案の定、殴り飛ばされて気を失った。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'GAME OVER のあとの、なになに道場……そんなものはないし、あったとしても建設的な助言はないわよ？',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'よく考えて。ウララだって、ずっと上昇期を保っている',
      inner_urara.uma_sex_title,
      'よ。この結果は、おかしくないでしょう？',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '最後に……ごめんね。先に間違えたのはあなたでも、ウララの加減がなっていないことは、ちゃんと',
      inner_urara.sex,
      'に言っておく……',
    ]);
  },
};
