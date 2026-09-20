/**
 * @file マンハッタンカフェ - 恋慕
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async 49(coffee, you) {
    await coffee.print_and_wait([
      'ある夜、',
      coffee.get_colored_name(),
      ' は、いつもの夢とは違う夢を見た。',
    ]);
    await coffee.print_and_wait([
      '夢の中の自分は……',
      you.get_colored_actual_name(),
      ' と、口に出せないことをしていた……',
    ]);
    await coffee.print_and_wait([
      '勝手に思い出さないで、と ',
      coffee.get_colored_name(),
      ' の顔は熱く染まり、両手は少し疼く下腹を撫でて、パジャマの中へ潜った。',
    ]);
    if (you.sex_code === 1) {
      await coffee.say_and_wait('トレーナー、さん……');
    } else {
      await coffee.say_and_wait('トレーナー、さん……');
    }
    if (coffee.sex_code === 0) {
      await coffee.print_and_wait(
        '口の中で夢の相手の名を呼びながら、中指と人差し指はクリトリスの上で円を描き続ける。すでに昂った乳首は、幻想の大きな手に優しく揉まれ、赤く腫れていく。',
      );
      await coffee.print_and_wait([
        '重い吐息とともに、',
        coffee.get_colored_name(),
        ' は絶頂に達した。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async '74-1'(coffee, you, callname) {
    await coffee.print_and_wait([
      'ある日の午後、',
      coffee.get_colored_name(),
      ' はトレーニングの疲れで倒れ、寮へ運ばれて休んでいた。',
    ]);
    await coffee.print_and_wait([
      '誰もいない寮にいて、',
      coffee.get_colored_name(),
      ' は突然、孤独を感じた。',
    ]);
    await coffee.say_and_wait(['いま、', callname, ' が傍にいてくれたら……']);
    await coffee.print_and_wait([
      '倒れたあとの弱さか、ひとりきりだからか。いつもより素直な想いが ',
      coffee.get_colored_name(),
      ' の口からこぼれ、誰もいない寮に漂った。',
    ]);
    await coffee.print_and_wait(
      'いつから、ひとりでいることが、こんなに怖くなったのだろう……',
    );
    await coffee.print_and_wait([
      '言葉にしにくい感覚。だが ',
      coffee.get_colored_name(),
      ' は、自分と ',
      you.get_colored_actual_name(),
      ' の関係が、少し普通ではないことに薄々気づいていた。',
    ]);
    era.println();
    era.printButton(`「会いたい、${callname}……」（関係を進める）`, 1);
    era.printButton('「気のせいだ……」（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await coffee.print_and_wait([
        '目を閉じ、眠れば今の迷いと寂しさも消えると思った。だが ',
        you.get_colored_actual_name(),
        ' の顔が、幽霊のように目の前の闇へ這い上がってくる。',
      ]);
      await coffee.print_and_wait([
        '眠れない。落ち着かない。よく考えれば、',
        you.get_colored_actual_name(),
        ' と出会ってから、心はいつもその人で埋まっていた。',
      ]);
      await coffee.say_and_wait([
        '私は、',
        callname,
        ' を、好きになってしまったのでしょうか……',
      ]);
      await coffee.print_and_wait([
        '言葉が落ちたとたん、筋が通ったように、胸の奥からの温もりが ',
        coffee.get_colored_name(),
        ' の全身を満たした。',
      ]);
      await coffee.print_and_wait([
        you.sex,
        'と出会ってからの一言一句、傍にいた一瞬一瞬が、いま新しい意味を持った。',
      ]);
      if (era.get('cflag:25:育成回合计时') < 96) {
        await coffee.print_and_wait(
          'まだひとりで呟いているだけでも、このはっきりした恋心は、いつか花開くだろう。',
        );
        await coffee.print_and_wait('いつか……');
        await era.printAndWait([
          '（',
          coffee.get_colored_name(),
          ' がこの想いを考えるのは、シニア級に入ってからになりそうだ……）',
        ]);
      } else {
        await coffee.print_and_wait('花が、開いた……');
      }
    } else {
      await coffee.print_and_wait('弱いときの、取り留めのない妄想だ……');
      await coffee.print_and_wait([
        '考えるのを無理に止め、',
        coffee.get_colored_name(),
        ' はゆっくり夢の世界へ沈んでいった。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async '74-2'(coffee, you, callname) {
    await coffee.say_and_wait([callname, '、今夜は空いていますか……？']);
    await era.printAndWait([
      'ある日、',
      coffee.get_colored_name(),
      ' はめずらしく自分から ',
      you.get_colored_name(),
      ' を誘った。',
    ]);
    era.println();
    era.printButton('「ああ、空いてる。何がしたい？」（関係を進める）', 1);
    era.printButton('「悪い、今夜は少し……」（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '肯定の返事をもらって、',
        coffee.get_colored_name(),
        ' は少し迷った。',
      ]);
      await coffee.say_and_wait([
        '行きたい場所が……',
        callname,
        ' と一緒に見たいんです……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '迷子の子供みたいに、なぜか上機嫌な ',
        coffee.get_colored_name(),
        ' に手を引かれ、いくつもの路地と通りを抜けた先に、目立たない小さな店が現れた。',
      ]);
      await era.printAndWait(
        '黄ばんだガラス越しに、レトロな食器やさまざまな道具が並んでいるのが見える。',
      );
      era.printButton('「コーヒーを注ぐ道具もある……古道具屋か。」', 1);
      await era.input();
      await coffee.say_and_wait('ええ……偶然見つけたんです。面白い場所で……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' について店内へ入る。誰も見ていないセルフ販売の小さな店らしい。中はわりと片付いていて、定期的に掃除している跡がある。',
      ]);
      await coffee.say_and_wait(
        'ここは、あまり人が来ません……私は、たまに見に来ます。',
      );
      await era.printAndWait([
        '確かに ',
        coffee.get_colored_name(),
        ' の好みそうな場所だ。意匠の変わったコーヒーカップ、ロココ調のポット。人のいない午後、黒髪の ',
        coffee.teen_sex_title,
        ' がひとり棚の間を歩き、時にはそっと手に取って眺め、時には腰を屈めて足を止める。陽がガラスを通して店いっぱいに降り、すべてを夢のような金色に塗る——そんな光景が目に浮かぶ。',
      ]);
      await coffee.say_and_wait([
        '……でも、',
        callname,
        ' とふたりで来るのは、初めてです……',
      ]);
      await era.printAndWait([
        'いつの間にか、',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のすぐ前に来ていた。赤みを帯びた整った顔が、視界の大半を占めている。',
      ]);
      await coffee.say_and_wait(['……', callname, '、私——']);
      await you.say_as_passer_by_and_wait('ファンA', [
        'あっ、本当に ',
        coffee.get_colored_name(),
        ' だ！ 入ろう！',
      ]);
      await you.say_as_passer_by_and_wait('ファンB', 'わぁ、近い！ デート？');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の言葉は唐突な声に遮られた。振り返ると、',
        coffee.get_colored_name(),
        ' を認めたファンがふたり店に入っている。その声が通りの人を呼び、この調子なら、さらに人が入ってきそうだ……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' も固まって、店の入口のほうを向いたまま立ち尽くしている。',
      ]);
      await you.say_as_passer_by_and_wait('ファンA', '顔、赤い！');
      await you.say_as_passer_by_and_wait('ファンB', [
        '恋する',
        coffee.teen_sex_title,
        'の顔だ！',
      ]);
      era.printButton('「おふたり！ いまはプライベートなので、どうか——」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' が言い終わる前に、',
        coffee.get_colored_name(),
        ' が突然、',
        you.get_colored_name(),
        ' の手を強く引いた。',
      ]);
      era.printButton('「えっ！？ ど、どうした、カフェ？」', 1);
      await era.input();
      await coffee.say_and_wait('……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の問いに答えず、店の内外で声をかけようとするファンを無視して、強引に ',
        you.get_colored_name(),
        ' を連れて押し出した。',
      ]);
      await era.printAndWait([
        'それからまた、迷子の子供みたいに ',
        coffee.get_colored_name(),
        ' に手を引かれて走らされた。',
      ]);
      era.drawLine();
      await era.printAndWait('たどり着いたのは、商店街の片隅の路地だった。');
      await era.printAndWait(
        '商店街の店のほとんどは昼しか開いていない。遠くの居酒屋を除けば、ここにはほとんど人がいない。',
      );
      era.printButton('「どうしたんだ、カフェ……」', 1);
      await era.input();
      await era.printAndWait([
        '手を引かれて小走りした息が整うころ、傍の ',
        coffee.get_colored_name(),
        ' はもうしばらく俯いたままだった。',
      ]);
      await coffee.say_and_wait('……全部、あなたのせいです……');
      await era.printAndWait('しばらくして、少し震えた声が届いた。');
      await coffee.say_and_wait(
        '私は目立たない……誰も、私の存在なんて気にしない……',
      );
      await coffee.say_and_wait('なのに、あなたと出会ってしまった。');
      await coffee.say_and_wait('いつのまにか、心はあなたに引かれていました。');
      await coffee.say_and_wait(
        '私という存在が、あなたの存在で埋まって、膨らんでしまった。',
      );
      era.println();
      await coffee.say_and_wait(
        '私は、もともとひとりでうまくやっていけました。',
      );
      await coffee.say_and_wait('友達がいましたから。');
      era.println();
      await coffee.say_and_wait('それから、あなたが傍に来た。');
      await coffee.say_and_wait(
        '我慢できていた孤独が、だんだん、心を抉る毒になりました。',
      );
      era.println();
      await coffee.say_and_wait(
        'やっと勇気を出して、あなたとふたりきりでいられる場所を……それまで奪われて……',
      );
      await coffee.say_and_wait('私は……どうすればいいのでしょう……');
      await era.printAndWait(
        '恋心に気づいた日から胸の奥に埋めていた想いが、いま溢れ出した。',
      );
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' への恋慕だけではない。自分が一度も感じたことのない、周囲に侵食されることへの苛立ちと迷いだ。',
      ]);
      await era.printAndWait('頼りない涙が、目尻から一滴ずつ落ちる。');
      await era.printAndWait([
        'そんな ',
        coffee.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は前へ出た。',
      ]);
      era.printButton('「カフェ。」', 1);
      await era.input();
      await coffee.say_and_wait('……はい？');
      await era.printAndWait([
        '赤い目尻のまま、',
        coffee.get_colored_name(),
        ' は顔を上げて ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton(
        '「いまここには、俺とカフェのふたりだけだ……もう逃げないよな？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'そう言われて、',
        coffee.get_colored_name(),
        ' はつい周囲を見回し、すぐに自分の行動の不適切さに気づいて視線を戻し、',
        you.get_colored_name(),
        ' に頷いた。',
      ]);
      era.printButton(
        '「カフェは、ずっとそう思っていたのか……気づけなかったのは、俺のせいだ。」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('あ……あっ……！？');
      await era.printAndWait([
        'いまになって、自分が勢いで何を言ったのかようやく気づいたらしい。胸の秘密を自分で暴いたあと、',
        coffee.get_colored_name(),
        ' は「恋する',
        coffee.teen_sex_title,
        'の顔」のまま、',
        you.get_colored_name(),
        ' を見上げるしかなかった。',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}、いくつか聞いてもいいか。」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait('……はい。');
      era.printButton('「俺と一緒にいて、楽しいか？」', 1);
      await era.input();
      await coffee.say_and_wait('……ええ。');
      era.printButton('「じゃあ、俺と一緒にいて、幸せか？」', 1);
      await era.input();
      await coffee.say_and_wait('……幸せです。');
      await era.printAndWait([
        '最後に、覚悟を決めたように、',
        you.get_colored_name(),
        ' は深く息を吸った。',
      ]);
      era.println();
      era.printButton(
        '「……少し、自惚れかもしれない。最初から君の助けに頼ってばかりで」',
        1,
      );
      era.printButton('「そのあとも、いろいろな出来事の中で、それでも……」', 2);
      era.printButton('「こんな俺と、付き合ってくれないか？」', 3);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の表情は、まだ夢から醒めていないようだった。だがわずかに滲む色で、答えはもうわかっている——',
      ]);
      await era.printAndWait('突然。');
      era.printButton('「うわっ！？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の膝に何かが当たり、膝をついた。',
      ]);
      await coffee.say_and_wait('きゃっ！？');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の背中にも何かが当たり、前へ傾いた。',
      ]);
      await era.printAndWait('こうして、ふたりの影が重なった。');
      await era.printAndWait([
        you.get_colored_name(),
        '＆',
        coffee.get_colored_name(),
        '「……ん……！？」',
      ]);
      await era.printAndWait('互いの唇が、重なる。');
      await era.printAndWait([
        '十数秒して、',
        coffee.get_colored_name(),
        ' の顔が、驚いて固まっていた ',
        you.get_colored_name(),
        ' から離れた。',
      ]);
      await coffee.say_and_wait([
        '……友達の悪戯、まったく……でも、これが私の返事です、',
        callname,
        '……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の唇から垂れた糸を、熱い指先で拭った。',
      ]);
      await coffee.say_and_wait('少し自惚れ……そんなことまで言えるんですね……');
      await era.printAndWait([
        '小さく呟きながら、',
        coffee.get_colored_name(),
        ' はあなたの胸に体を預けた。',
      ]);
      await coffee.say_and_wait('そうです、あなたです。');
      await coffee.say_and_wait('ひとりで足りていた私を。');
      await coffee.say_and_wait('こんなに狂わせた。');
      era.println();
      await coffee.say_and_wait('いま……逃げると言っても……私は許しません……');
      await era.printAndWait([
        'そう言って、',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の服を強く握った。',
      ]);
      era.printButton('「……逃げない。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.sex,
        'と出会ったあとには、もう退路などなかった。',
      ]);
      await coffee.say_and_wait('それでは……これから、よろしくお願いします。');
      await era.printAndWait('誰もいない路地。');
      await era.printAndWait('いまは誰も入れない、ふたりだけの空間。');
      await coffee.say_and_wait(
        '……誰にも取られないように……印を、つけますか……？',
      );
      era.printButton('「どんな印だ？」', 1);
      await era.input();
      await coffee.say_and_wait('……こう、です……');
      await era.printAndWait(
        '今度は誰の悪戯でもなく、ふたり自身の意志だった。',
      );
      await era.printAndWait('両手を首の後ろに回し、顔をゆっくり近づける。');
      await coffee.say_and_wait('……もう、誰にも奪わせません……');
      await era.printAndWait('噛むように、甘く口づけた。');
      await era.printAndWait('また十数秒、その快い時間に沈んだ。');
    } else {
      await era.printAndWait([
        '少し落ち込む ',
        coffee.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は「次は必ず」と',
        coffee.sex,
        'と約束するしかなかった。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async 89(coffee, you, callname) {
    await era.printAndWait([
      'ある日、',
      you.get_colored_name(),
      ' と ',
      coffee.get_colored_name(),
      ' はいつものようにトレーナー室で日課をこなしていた。',
    ]);
    await era.printAndWait([
      '突然、鼻先にコーヒーの香りがした。いつの間にか ',
      coffee.get_colored_name(),
      ' が傍に来て、膝の上に座っている。',
    ]);
    era.printButton('「どうした？」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は何かを醸しているように黙ったまま、顔を ',
      you.get_colored_name(),
      ' の胸に埋めてすり寄った。白いアホ毛が首をくすぐる。',
    ]);
    await era.printAndWait([
      'しばらくして、何かにつつかれたように ',
      coffee.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' の腕の中で跳ねそうになったあと、顔を上げ、まっすぐ ',
      you.get_colored_name(),
      ' を見た。',
    ]);
    await coffee.say_and_wait([
      callname,
      '、いいえ、',
      you.get_colored_actual_name(),
      '……私と、結婚してくれますか？',
    ]);
    era.printButton('「だめだ。」（関係を進める）', 1);
    era.printButton('「俺たちには……まだ早い。」（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' のきっぱりした拒否に、腕の中の ',
        coffee.get_colored_name(),
        ' は一瞬固まった。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の反応を気にせず、',
        you.get_colored_name(),
        ' は素早く傍の引き出しを開け、とっくに用意してあったものを取り出した。',
      ]);
      era.printButton('「求婚するのは、俺のほうだ。」', 1);
      await era.input();
      await era.printAndWait([
        '手の小さな箱を開け、',
        coffee.get_colored_name(),
        ' に見せた。',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}、俺と結婚してくれるか？」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '指輪が明かりの下できらめき、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' の返事を待った。',
      ]);
      await coffee.say_and_wait('……意地悪ですね。');
      await era.printAndWait([
        '「ドン」という音とともに、',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を椅子ごと床へ押し倒した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が反応する前に、',
        coffee.get_colored_name(),
        ' は体を寄せ、少し強く ',
        you.get_colored_name(),
        ' の唇を噛んだ。',
      ]);
      await era.printAndWait(
        '滲んだ血とふたりの唾液が混ざり、口の中に甘い鉄の味が広がった。',
      );
      await coffee.say_and_wait(
        '……『求婚するのは俺のほう』、ですか……自分がかっこいいと、思っていますか？',
      );
      await era.printAndWait([
        '血の甘い口づけのあと、',
        coffee.get_colored_name(),
        ' は休まず ',
        you.get_colored_name(),
        ' の袖をまくり、腕に自分の噛み跡を残した。',
      ]);
      await era.printAndWait([
        'それから首も、鎖骨も、',
        coffee.get_colored_name(),
        ' に吸い続けられ、赤い痕がいくつも残った。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' に押し伏せられた ',
        you.get_colored_name(),
        ' は黙ったまま、目を閉じて ',
        coffee.get_colored_name(),
        ' の発散を受け入れた。',
      ]);
      await coffee.say_and_wait(
        'あなたは私のものです……その立場は……これから、しっかり教えてあげます……',
      );
      era.printButton('「……楽しみだ。」', 1);
      await era.input();
      await era.printAndWait(
        '傍で役に立てなかった指輪が、ふたりの姿を映し、この特別な誓いを記録している。',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' を断り、すぐさま慎重に',
        coffee.sex,
        'の顔色を窺った。拒否で',
        coffee.sex,
        'の顔が曇らないか、恐れるように。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の予想に反し、',
        coffee.get_colored_name(),
        ' の顔に失望も落ち込みも浮かばなかった。',
      ]);
      await coffee.say_and_wait([
        '私は、',
        you.get_colored_actual_name(),
        ' を信じています……準備ができる日まで、待ちます。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async 99(coffee, callname) {
    await coffee.say_and_wait('あの人は……');
    await coffee.print_and_wait([
      'ある日、トレーニングのあと、',
      coffee.get_colored_name(),
      ' は置き忘れたものを取りにトレーナー室へ戻った。',
    ]);
    await coffee.print_and_wait([
      'ドアを叩こうとしたとき、見知らぬ',
      coffee.phy_sex_title,
      'の声が聞こえた。',
    ]);
    await coffee.print_and_wait([
      '耳をそっと扉に当てると、',
      coffee.uma_sex_title,
      'の優れた聴覚には、この普通の扉などないも同然だった。',
    ]);
    await coffee.say_and_wait([
      '知らない',
      coffee.phy_sex_title,
      'が、',
      callname,
      ' の傍に座って、くつろいで話している……',
    ]);
    await coffee.print_and_wait('——自分のものが、奪われようとしている。');
    await coffee.print_and_wait(
      '中へ入って問い詰めたくなる衝動をこらえ、深呼吸して、さらに耳を澄ませる。通りがかった人にこの奇妙な姿をどう見られるかなど、構っていられない。',
    );
    era.drawLine();
    await coffee.say_and_wait([
      '結局、',
      callname,
      ' の後輩でした……しかも私のファンで……',
    ]);
    await coffee.print_and_wait([
      'ストーカーのように十五分も盗み聞きしたあと、',
      coffee.get_colored_name(),
      ' はほっと息をつき、すぐ自分の過剰反応に少し気恥ずかしさを覚えた。',
    ]);
    await coffee.print_and_wait('踵を返そうとしたとき、突然頭を叩かれた。');
    await coffee.say_and_wait('……想いが重すぎる、ですか。突然叩かないで……');
    await coffee.print_and_wait([
      '——でも、',
      callname,
      ' がいつか私から離れていくことだけは考えたくなくて……',
    ]);
    await coffee.print_and_wait('心臓を強く握られたように、胸が隠かに痛む。');
    await coffee.print_and_wait('考えただけで、こうなる……');
    await coffee.say_and_wait([
      '本当に',
      coffee.sex_code === 1 ? '重い男' : '重い女',
      'なのでしょうか、私……',
    ]);
  },
};
