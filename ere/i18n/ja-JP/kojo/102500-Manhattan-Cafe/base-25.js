/**
 * @file マンハッタンカフェ - 地下室
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  welcome(coffee, you, callname) {
    era.print([
      '……',
      you.get_colored_name(),
      ' はゆっくりと目を開けた。放り投げられたような姿勢のままベッドに横たわっていて、体がひどく痛む。頭も、重く膨らんだように疼いている。',
    ]);
    era.print([
      '見知らぬ天井を評する暇もないうちに、見慣れた顔が ',
      you.get_colored_name(),
      ' の視界に割り込んできた。',
    ]);
    era.println();

    coffee.say(['……おはよう、', callname, '。もうお昼かもしれませんけれど……']);
    coffee.say(['どうしてここで目が覚めたのか、ですか……？']);
    coffee.say([
      '今日はトレセン中を探しても ',
      callname,
      ' が見つからなくて……最後は友達に導かれて、居場所がわかったんです……',
    ]);
    coffee.say(['……そう答えれば、信じてくれますか？']);
    era.println();

    era.print([
      'まだ疼く後頭部を感じながら、',
      coffee.get_colored_name(),
      ' のその説明では、',
      you.get_colored_name(),
      ' は納得できない。',
    ]);
    era.println();

    coffee.say([
      '……最近、',
      callname,
      ' と二人きりでいられる時間が、減ってきましたね……',
    ]);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' は優しく ',
      you.get_colored_name(),
      ' のこめかみを押さえ、耳元で低く囁いた。',
    ]);
    era.println();

    coffee.say([
      '……',
      callname,
      ' の事情は、わかります。トレセン学園のトレーナーなら、疲れるのも当然です……',
    ]);
    coffee.say([
      '……でも、疲れていても、私たちの約束は忘れないでください……逃げるつもりなら、追うことについては、少し自信があります……',
    ]);
    coffee.say(['……ここでしばらく休んで、疲れを取ってはどうですか……？']);
    coffee.say([
      '最初に言ったことも、嘘ではありません……',
      callname,
      ' をここへ連れてきたのは、『私』ではないんです……反対もしませんでしたけれど……',
    ]);
    coffee.say([
      'それでは……私が満たされるまで、しばらく、ここにいてください……',
    ]);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' の言葉が落ちると、地下室の冷気が、静かに広がっていく……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async ask_release_agree(coffee, you, callname) {
    await coffee.say_and_wait(['出たい、ですか……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' の願いを聞いて、',
      coffee.get_colored_name(),
      ' は少し困ったような顔をした。',
    ]);
    era.println();

    await coffee.say_and_wait([
      'いいですよ……',
      callname,
      ' がここに来たこと自体が偶然ですし、私も、もう十分です……',
    ]);
    await coffee.say_and_wait(['扉は、あちらです……ご自由に……']);
    await coffee.say_and_wait([
      '開ける、ですか……？ 鍵なんて、最初からかかっていません……',
    ]);
    era.println();

    await era.printAndWait(['本当かよ……']);
    await era.printAndWait([
      you.get_colored_name(),
      ' がドアノブを回すと、カチャリと音を立てて、扉はあっさり開いた。',
    ]);
    await era.printAndWait([
      '……この瞬間、これまでの解錠の苦労が夢だったように思えた。',
    ]);
    era.println();

    await coffee.say_and_wait(['……', callname, '。']);
    era.println();

    await era.printAndWait([
      coffee.get_colored_name(),
      ' の声が、背中から届く。',
    ]);
    era.println();

    await coffee.say_and_wait(['どうか……私たちの約束を、忘れないでください……']);
    await coffee.say_and_wait([
      '次は、もしかしたら……私が自分の手で、',
      callname,
      ' をここへ連れてくるかもしれません……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} is_first 解放を初めて拒まれたかどうか
   */
  async ask_release_reject(coffee, you, callname, is_first) {
    if (is_first) {
      await coffee.say_and_wait([
        'いいですよ……最初から、私が ',
        callname,
        ' を連れてきたわけではありませんから……',
      ]);
      era.println();

      await era.printAndWait([
        'ギィ、と音を立てて、待ちわびた扉がひとりでに開いた。',
      ]);
      await era.printAndWait([
        '外へ続く階段を見て、',
        you.get_colored_name(),
        ' は泣きそうなほどに興奮し、すぐさま扉の向こうへ踏み出した。',
      ]);
      await era.printAndWait(['二段飛ばしで駆け、曲がり角をいくつも曲がる……']);
      await you.say_and_wait(['あれ……'], true);
      await you.say_and_wait(['階段、長くないか？'], true);
      era.println();

      await era.printAndWait([
        '地下室から逃れた興奮が冷めると、頭が少しずつ落ち着いてきた。',
      ]);
      await you.say_and_wait(['俺は……階段に、どれだけいたんだ？'], true);
      await era.printAndWait([
        'その考えと同時に、',
        you.get_colored_name(),
        ' は気づいた。地下室でずっとまとわりついていた冷気が、自分の傍から一度も消えていない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は狂ったように上へ走り続けた。気のせいだ、トレセンにこんな深い地下室があっても不思議じゃない——そう自分に言い聞かせながら。',
      ]);
      await era.printAndWait([
        'やがて ',
        you.get_colored_name(),
        ' は足を踏み外し、階段を転げ落ち、壁にぶつかってようやく止まった。',
      ]);
      era.println();

      await era.printAndWait([
        'おかしい……階段から落ちたのに、痛みがまったくない……',
      ]);
      await era.printAndWait([
        '顔を上げ、階段の下を見ると、地下室の扉は大きく開いたまま、自分が離れたときと何ひとつ変わっていない。',
      ]);
      await era.printAndWait([
        '長いこと歩いたはずなのに、一瞬で地下室の前に戻っている……',
      ]);
      await era.printAndWait([
        '戻りなさい、戻りなさい——耳元で、そんな囁きがした気がした。',
      ]);
      await era.printAndWait([
        '長い沈黙のあと、',
        you.get_colored_name(),
        ' はそれでも地下室へ戻った。',
      ]);
      era.println();

      await coffee.say_and_wait(['おかえりなさい、', callname, '……']);
      era.println();

      await era.printAndWait([
        '結末を知っていたかのように、',
        coffee.get_colored_name(),
        ' は微笑み、静かに ',
        you.get_colored_name(),
        ' を見ている。',
      ]);
      await era.printAndWait(['背後の扉が、ゆっくりと閉じた。']);
    } else {
      await coffee.say_and_wait([callname, '……もう一度、試してみますか？']);
      era.println();

      await era.printAndWait([
        '前回のことを思い出し、',
        you.get_colored_name(),
        ' は背筋が凍った。',
      ]);
      era.println();

      await coffee.say_and_wait([
        'ふふ……まだ、満たされていませんから、',
        callname,
        '……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee
   * @param {string} cur_time
   */
  async ask_time(coffee, cur_time) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(['時間、ですか……いまは ', cur_time]);
      await coffee.say_and_wait('心配いりません。時間は、十分にあります……');
    } else {
      await coffee.say_and_wait([cur_time, '……どうかしましたか？']);
      await coffee.say_and_wait(
        '何か急ぎの用事があるなら……『誰か』が代わりに済ませてくれます',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async battle_success(coffee, you) {
    await era.printAndWait([
      '心の中でごめん、と呟き、',
      you.get_colored_name(),
      ' はそのまま ',
      coffee.get_colored_name(),
      ' をベッドへ押し倒した。',
    ]);
    await era.printAndWait([
      '期待に濡れた相手の視線を受けながら、白い首へ両手を置く……',
    ]);
    era.println();
    await era.printAndWait(['……成功した。']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は最初から抵抗せず、むしろ ',
      you.get_colored_name(),
      ' の前腕に手を添えていた。',
    ]);
    await era.printAndWait([
      '激しい前戯だと、',
      coffee.sex,
      'は思っていたのかもしれない……',
    ]);
    await era.printAndWait([
      '愛してくれている担当を、自分の手で気絶させる……なんというか……',
    ]);
    await era.printAndWait(['…………とにかく、先に逃げる。']);
  },
  /** @param {CharaTalk} you プレイヤー */
  async battle_escape(you) {
    await era.printAndWait([
      'しばらく探って、',
      you.get_colored_name(),
      ' はようやく気づいた。扉には、そもそも鍵がかかっていない。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' がドアノブを回そうとするたび、反対側のノブを、強大な力が死ぬほど強く掴んでいたのだ。',
    ]);
    await era.printAndWait([
      '音もなく、それをできる存在……',
      you.get_colored_name(),
      ' が知っているのは、ひとりだけだ。',
    ]);

    era.printButton('「友達……だよな？」', 1);
    await era.input();

    await era.printAndWait(['返事はない。']);

    era.printButton('「カフェの様子に気づけなかったのは、俺のせいだ……」', 1);
    era.printButton(
      '「でも、俺を地下室に閉じ込めても解決しない。直す機会をくれ……！」',
      2,
    );
    await era.input();

    await era.printAndWait(['ノブがひとりでに回り、扉がゆっくり開いた。']);
    era.println();

    era.printButton('「ありがとう、俺は——」', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      ' が礼を言い終える前に、思いきり蹴り飛ばされて扉の外へ出され、扉は「バン」と閉まった。',
    ]);
    await era.printAndWait([
      '尻をさすりながら、',
      you.get_colored_name(),
      ' は地下室を出た。',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async battle_prison(coffee, you, callname) {
    await era.printAndWait([
      'こんな錠、',
      you.get_colored_name(),
      ' は見たことがない……',
    ]);
    await era.printAndWait([
      '解ける位置まで来ているはずなのに、ドアノブは溶接されたように微動だにしない。',
    ]);
    await era.printAndWait([
      '……',
      you.get_colored_name(),
      ' は、いったん諦めるしかなかった。',
    ]);
    era.println();
    await coffee.say_and_wait([
      callname,
      '、発散し終わったなら……次は、私の番です……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async battle_fail(coffee, you, callname) {
    await era.printAndWait([
      '心の中でごめん、と呟き、',
      you.get_colored_name(),
      ' はそのまま ',
      coffee.get_colored_name(),
      ' をベッドへ押し倒した。',
    ]);
    await era.printAndWait([
      '期待に濡れた相手の視線を受けながら、白い首へ両手を置く……',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は',
      coffee.uma_sex_title,
      'の体を甘く見ていた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' が力を使い果たしても、',
      coffee.get_colored_name(),
      ' は想像どおりには気絶しなかった。',
    ]);
    await era.printAndWait([
      '潤んだ瞳、紅潮した頬……どう見ても、',
      you.get_colored_name(),
      ' に発情させられただけだ……',
    ]);
    era.println();

    await coffee.say_and_wait([
      callname,
      '、発散し終わったなら……次は、私の番です……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} is_back マンハッタンカフェが戻ってきたのか、目覚めたのか
   */
  find_escape(coffee, you, callname, is_back) {
    era.print(['くそ、この錠、なぜこんなに開かない！']);
    era.print([
      you.get_colored_name(),
      ' が扉の錠に集中していると、すぐ横に顔が現れた。',
    ]);
    era.println();

    coffee.say([callname, '……何をしていますか？']);
    era.println();

    era.print('カフェ！？');
    if (is_back) {
      era.print(['いつ戻ってきたんだ、ずっと扉の前にいたはずなのに！']);
    } else {
      era.print(['いつ目覚めたんだ、これはまずい……']);
    }
    era.print([
      you.get_colored_name(),
      ' は飛び上がり、足が抜けた。',
      coffee.get_colored_name(),
      ' がちょうど支えてくれなければ、その場に膝をついていた。',
    ]);
    era.println();

    coffee.say(['変なことはしないでください……困ってしまいます……']);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async flatter(coffee, you) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は自ら ',
        coffee.get_colored_name(),
        ' に近づき、',
        coffee.sex,
        'のさらさらした長い髪を撫でた。',
      ]);
      await era.printAndWait([
        'どうやら気に入ったらしい。楽な姿勢を見つけて ',
        you.get_colored_name(),
        ' の肩に寄りかかり、髪から漂うほのかな香りに、',
        you.get_colored_name(),
        ' は少しぼんやりした。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' に甘い言葉を並べた。自分でも顔が熱くなるほど、気恥ずかしい内容だった。',
      ]);
      await era.printAndWait([
        'そんなことを言っても、無駄です——',
        coffee.get_colored_name(),
        ' の目が、そう語っている。',
      ]);
      await era.printAndWait([
        '……けれど、',
        coffee.sex,
        'の後ろで揺れている尻尾を見れば、事実は違うらしい。',
      ]);
    }
  },
  /**
   * PlanB タキオンの地下室からプレイヤーを救出する限定イベント
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
   */
  async rescue_from_tachyon(coffee, you, callname, c_call_t) {
    await coffee.say_and_wait(
      'いまさら心を見せるのですか……その姿、みっともないです……',
    );
    await coffee.say_and_wait('非難、疑問、糾弾……呪い……');
    await coffee.say_and_wait([
      'あなたの独走のせいで……',
      callname,
      ' はどれだけの困難を抱え、眠れない夜を過ごしたと思いますか……',
    ]);
    await coffee.say_and_wait([
      you.sex,
      'はあなたの犠牲品でも、夢を叶えるための『モルモット』でもありません……手放したのは、あなたです……',
    ]);
    await coffee.say_and_wait([
      callname,
      ' の傍に居続けたのは、私です……',
      c_call_t,
      '……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(coffee, you) {
    await era.printAndWait(['信じられない……']);
    await era.printAndWait([
      you.get_colored_name(),
      ' の突然の手刀に、',
      coffee.get_colored_name(),
      ' は小さく唸り、その場に倒れた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      coffee.get_colored_name(),
      ' の様子を確かめた。確かに気絶している。',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      'はこんなに脆いのか……それとも、誰かが助けてくれているのか。',
    ]);
    await era.printAndWait(['……とにかく、先に逃げる。']);

    await era.printAndWait(['地下室の冷気が、少し薄れた気がした。']);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async strike_fail(coffee, you, callname) {
    await era.printAndWait(['今だ！']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' の隙を突いて、',
      you.get_colored_name(),
      ' は手刀を',
      coffee.sex,
      'の後頸へ叩き込んだ……',
    ]);
    await era.printAndWait(['成功した……のか？']);
    era.println();

    await coffee.say_and_wait([callname, '……']);
    era.println();

    await era.printAndWait([
      '腕を引く前に、',
      coffee.get_colored_name(),
      ' にしっかりと掴まれた。',
    ]);
    era.println();

    await coffee.say_and_wait([
      '相手が、あなたを愛している私でなければ……',
      coffee.uma_sex_title,
      'にそんな攻撃をするのは、とても危険です……',
    ]);
    await coffee.say_and_wait([
      '……でも、この行いを、見過ごすわけにもいきません……',
    ]);
    await coffee.say_and_wait([
      'どちらが、どちらの所有物なのか……もう一度、説明が必要ですね……',
    ]);
    era.println();

    await era.printAndWait([
      '地下室の冷気が ',
      you.get_colored_name(),
      ' の四肢を這い上がり、感覚が凍りついていく……',
    ]);
  },
};
