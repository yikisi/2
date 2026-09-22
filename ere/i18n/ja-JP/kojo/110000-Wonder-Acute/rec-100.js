/**
 * @file ワンダーアキュート - 募集
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} you
   * @param {{ct:CharaTalk,cl:PrintedSpan}} nn
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tannhauser
   * @param {{ct:CharaTalk,cl:PrintedSpan}} mcqueen
   * @param {{ct:CharaTalk,cl:PrintedSpan}} gs
   * @param {{ct:CharaTalk,cl:PrintedSpan}} ardan
   * @param {{ct:CharaTalk,cl:PrintedSpan}} halo
   * @param {{ct:CharaTalk,cl:PrintedSpan}} oguri
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tama
   * @param {{ct:CharaTalk,cl:PrintedSpan}} grass
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tachyon
   * @param {{ct:CharaTalk,cl:PrintedSpan}} coffee
   */
  async rec_start(
    acute,
    you,
    {
      nn,
      tannhauser,
      mcqueen,
      gs,
      ardan,
      halo,
      oguri,
      tama,
      grass,
      tachyon,
      coffee,
    },
  ) {
    await you.say_and_wait(
      '……うちの門前に木が二本ある。一本は棗の木で、もう一本も棗の木だ。',
      true,
    );
    await you.say_and_wait(
      '悪い。この名言を引いたのは、文人の言葉で気どりたかったわけじゃない。',
      true,
    );
    await you.say_and_wait(
      'ただ、何か言いたかっただけだ……あるいは、本当に言うことがなかっただけかもしれない。',
      true,
    );
    await you.say_and_wait(
      '仕事の疲れが、トレーナーとしての自信を押し潰したのか？',
      true,
    );
    await you.say_and_wait(
      '立て続けのレースが、重すぎる圧力になったのか？',
      true,
    );
    await you.say_and_wait(
      [
        'それとも、真心を傾けた',
        acute.uma_sex_title,
        'に、トレーナーとしてどこまで距離を取るべきか決めきれず、結局お互いを傷つけてしまったのか？',
      ],
      true,
    );
    await you.say_and_wait(
      '全部そうかもしれない……どれでもないかもしれない。',
      true,
    );
    era.drawLine();
    if (nn) {
      await nn.ct.used_to_say_and_wait(
        'はいはい、普通の人間なんだから、疲れるのも当然でしょ。',
      );
    }
    if (tannhauser) {
      await tannhauser.ct.used_to_say_and_wait([
        '大丈夫だよ、',
        tannhauser.cl,
        '～元気出して～',
      ]);
    }
    if (mcqueen) {
      await mcqueen.ct.used_to_say_and_wait([
        'まあ……とにかく、一緒に紅茶でもいかがかしら、',
        mcqueen.cl,
        '？',
      ]);
    }
    if (gs) {
      await gs.ct.used_to_say_and_wait([
        'おっ、',
        gs.cl,
        '～ラーメン一丁、どうだァ？',
      ]);
    }
    if (ardan) {
      await ardan.ct.used_to_say_and_wait([
        '大丈夫ですわ、',
        ardan.cl,
        '！ 目白家の財力があれば——',
      ]);
    }
    if (halo) {
      await halo.ct.used_to_say_and_wait([
        'おーっほっほっほ！ 凡人の目など気になさるな。いついかなる時も、あなたの才能と姿は、この ',
        halo.ct.name,
        ' が認めて差し上げますわ！',
      ]);
    }
    if (oguri) {
      await oguri.ct.used_to_say_and_wait(['……', oguri.cl, '、お腹空いた。']);
    }
    if (tama) {
      await tama.ct.used_to_say_and_wait([
        'ほら、',
        tama.cl,
        '。これお好み焼きや。お前と ',
        tama.cl,
        ' の分、作ったんや。食べたら元気出るで。',
      ]);
    }
    if (grass) {
      await grass.ct.used_to_say_and_wait([
        'ふふっ～かわいいわね、',
        grass.cl,
        '～',
      ]);
    }
    if (tachyon) {
      await tachyon.ct.used_to_say_and_wait([
        'おや、',
        tachyon.cl,
        '！ そんなに気になるなら、すべてを忘れられる薬を試してみるかい？ タダだよ～',
      ]);
    }
    if (coffee) {
      await coffee.ct.used_to_say_and_wait([
        '……このまま続けていると、',
        coffee.cl,
        '……殺されるわよ？',
      ]);
    }
    era.drawLine();
    await era.printAndWait('屋上で、一本吸うか……');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} taste 秋川やよい/ノースフライト
   * @param {CharaTalk} minoru 駿川たづな/ハープスター
   * @param {CharaTalk} you プレイヤー
   */
  async rec_rooftop(acute, taste, minoru, you) {
    await era.printAndWait(
      '黄昏の屋上で、すべてをしばらく忘れさせてくれる煙草に、つい手が伸びる。',
    );
    await era.printAndWait('ポケットを探る。');
    await era.printAndWait('——何もない。');
    era.drawLine();
    await era.printAndWait(
      '黄昏の夕陽の下、一機の飛行機が空の果てを進み、オレンジ色の直線を残していく。',
    );
    await era.printAndWait(
      '欄干に凭れて空を見る。これほど自由だったことも、これほど息苦しかったこともない。',
    );
    await era.printAndWait([
      'かつて百二十一億という途方もない借金を背負ったとき、',
      taste.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' を引き受け、トレーナーとして返済地獄を潜り抜け、その穴を埋めさせてくれた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は思う。今でも、',
      taste.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を信じてくれているのかもしれない、と。',
    ]);
    await era.printAndWait([
      taste.get_colored_name(),
      ' だけでなく、',
      minoru.get_colored_name(),
      '、そして他の担当',
      acute.uma_sex_title,
      'たちも……',
      you.get_colored_name(),
      ' は思う。',
      acute.couple_title,
      'はまだ ',
      you.get_colored_name(),
      ' に期待している、と。',
    ]);
    await era.printAndWait('だが、その期待は重荷でもあるのではないか。');
    await era.printAndWait([
      '突き詰めれば、',
      you.get_colored_name(),
      ' もただの【凡人】にすぎない。',
    ]);
    await era.printAndWait(
      '何もかもを完璧にはこなせない。これほどの厚望を受ける器ではない。世間で必死に足掻き、できれば後ろへ逃げだしたいとすら思う、ごく普通の【凡人】なのではなかったか。',
    );
    await you.say_and_wait('……………………');
    await you.say_and_wait('…………');
    await you.say_and_wait('……');
    await you.say_and_wait('逃げたい……な。', true);
    era.printButton('「はぁ……（溜息）」', 1);
    await era.input();
    await acute.say_as_unknown_and_wait(
      'あらあら……溜息ばかりついていると、福が逃げてしまいますよ？',
    );
    await era.printAndWait([
      'そのとき、',
      you.get_colored_name(),
      'の前に現れたのは、夕陽と同じ色に輝く',
      acute.uma_sex_title,
      'だった。',
    ]);
    await era.printAndWait([
      'トレセン学園の屋上、落日の余暉の中。',
      you.get_colored_name(),
      ' は声のした方へそっと振り返る。終始穏やかに微笑む',
      acute.uma_sex_title,
      'が、',
      you.get_colored_name(),
      ' の眼前に浮かんだ。',
    ]);
    await era.printAndWait(
      `${acute.sex}の身には、漫画にしか出てきそうな特別な輝きはない。それでも${acute.sex}の姿は、忘れがたい。`,
    );
    await era.printAndWait(
      `なぜなら${acute.sex}は——この落日に、あまりにも馴染んでいたから。`,
    );
    await acute.say_as_unknown_and_wait(
      'あらあら……そんな、困った顔をしないでくださいね。',
    );
    await acute.say_as_unknown_and_wait(
      'わたしの名前はワンダーアキュート……ええ——はじめまして、ですよね？',
    );
    await acute.say_and_wait(
      'ごめんなさいね、いきなり声をかけて、驚かせてしまいましたか？ 泣き出しそうな顔をされていたので、つい心配になって。',
    );
    await acute.say_and_wait(
      '学園の悪い子にいじめられたのですか？ それとも職場でのいじめ？ あるいは、ただお腹が空いただけ、でしょうか？',
    );
    await acute.say_and_wait(
      'お腹が空いているなら……ほら、たくあんですよ～ 遠慮せず、手づかみでどうぞ～',
    );
    await era.printAndWait(
      `終始穏やかに微笑み、夕陽と同塵する${acute.sex}は、後ろからたくあんを盛ったガラス皿を取り出した。`,
    );
    await era.printAndWait(
      '愛想でも、取り入りでも、もちろん日常のファン対応でもない——',
    );
    await era.printAndWait([
      'ちょうどよい、近づきすぎず離れすぎない距離。',
      acute.sex,
      'はガラス皿を載せた手を伸ばし、たくあんを ',
      you.get_colored_name(),
      ' の前へ差し出した。',
    ]);
    await era.printAndWait(`気がつけば、${you.name} も右手を伸ばしていた。`);
    await era.printAndWait('ポリ、ポリ、ポリ、ポリ——');
    await era.printAndWait('少し苦くて、それでも意外なほど歯応えのいい味。');
    await era.printAndWait('お腹は空いていなかったのに……なぜか——');
    await era.printAndWait('止まらない、そんな気がした。');
    await era.printAndWait(
      '最初は指先で、一番上の、いちばん乾いた一片の端を摘み、口元へ運び、歯で噛む。',
    );
    await era.printAndWait(
      '次は指先で一片の真ん中を挟み、そのまま口へ放り込んで噛む。',
    );
    await era.printAndWait('最後は、何枚もまとめて掴み、一気に口へ運ぶ。');
    await era.printAndWait('食べるほどに、渇きが増す。');
    await era.printAndWait('渇くほどに、なぜか涼やかになる。');
    await era.printAndWait([
      'ガラス皿のたくあんは、あっという間に ',
      you.get_colored_name(),
      ' の腹へ収まった。',
    ]);
    await acute.say_and_wait('あらあら……豪快な食べ方ですね～');
    await era.printAndWait('終始穏やかで静かな顔に、笑みがひとつ増えた。');
    await acute.say_and_wait('どうでした、おいしかったですか？');
    era.printButton('「……あ、うん。」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は黙って頷き、箱ごとたいらげたことへの詫びを、胸の奥へ飲み込んだ。',
    ]);
    await acute.say_and_wait(
      'おいしいなら、よかったです～ それでは、座りましょう。',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' という名の',
      acute.teen_sex_title,
      'は、屋上の壁に凭れ、夕陽を受けて腰を下ろした。',
    ]);
    await era.printAndWait(
      `${acute.sex}は座りながら、傍らの空き地を軽く叩く。`,
    );
    await acute.say_and_wait(
      '困ったときは、ひとりでいるのはよくありませんよ～',
    );
    await acute.say_and_wait(
      '時間はまだたくさんありますから。何かあれば、ゆっくり話してくださいね～',
    );
    era.drawLine();
    await era.printAndWait('あの日、日が沈む前。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は、夕陽と同じ色に輝く',
      acute.teen_sex_title,
      '——のちに ',
      you.get_colored_name(),
      ' の担当となる',
      acute.teen_sex_title,
      '、',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('たくさん、たくさんの話をした——');
    era.println();
    await era.printAndWait([
      acute.get_colored_name(),
      ' のトレーナーになった！',
    ]);
  },
};
