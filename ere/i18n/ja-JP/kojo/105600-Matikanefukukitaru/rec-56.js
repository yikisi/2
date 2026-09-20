/**
 * @file マチカネフクキタル - 募集
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async rec(kitaru, you) {
    await era.printAndWait([
      '選抜レース。',
      kitaru.uma_sex_title,
      'とトレーナーが出会う場所だ。',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        'トレーナーを務めて、もうしばらくになる。',
        you.get_colored_name(),
        ' はこの仕事にも、いくらか勘どころを掴んできた。',
      ]);
      await era.printAndWait([
        'そのひとつが――',
        kitaru.uma_sex_title,
        'とトレーナーが担当の契りを結べば、三年にも及ぶ契約は、人生という長い旅路のなかで、互いの運命を一瞬でも絡ませる、ということ。',
      ]);
      await era.printAndWait(
        'この先、人生の風雨をともに受けることになるかもしれない。',
      );
    } else {
      await era.printAndWait([
        '先輩トレーナーから伝わる心得は多い。そのひとつが――',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'とトレーナーが担当の契りを結べば、三年にも及ぶ契約は、人生という長い旅路のなかで、互いの運命を一瞬でも絡ませる、ということ。',
      ]);
      await era.printAndWait(
        'この先、人生の風雨をともに受けることになるかもしれない。',
      );
    }
    await era.printAndWait([
      you.get_colored_name(),
      ' は両手でポケットを探りながら、神社の石畳を歩いていく。',
    ]);
    await era.printAndWait([
      'トレセンの生徒がよく通うあの神社は、選抜レースを控えて神頼みをするトレーナーと',
      kitaru.uma_sex_title,
      'たちで、いまごろごった返しているはずだ。',
    ]);
    await era.printAndWait([
      'だから ',
      you.get_colored_name(),
      ' は、その名高い神社には向かわず、勘に従って、トレセンへ行く途中の寄り道に小さな神社を選んだ。',
    ]);
    await era.printAndWait([
      '人里離れた、どの神を祀っているのかもわからないこの神社は、平日と変わらず閑散としている。',
    ]);
    await era.printAndWait([
      '朱色の鳥居をくぐると、',
      you.get_colored_name(),
      ' は神域に足を踏み入れた。太い注連縄を巻いた大木と、石灯籠がそこかしこに立っている。',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '神社の厳かな空気は、次の担当を心待ちにしている ',
        you.get_colored_name(),
        ' にさえ、つかの間の静けさをもたらした。',
      ]);
    } else {
      await era.printAndWait([
        '神社の厳かな空気は、まだ先行きに迷っている ',
        you.get_colored_name(),
        ' にさえ、つかの間の静けさをもたらした。',
      ]);
    }
    era.printButton('祈願', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は目を閉じ、深く息を吸った……',
    ]);
    await kitaru.say_as_unknown_and_wait('おおおおおっ——————！！！！');
    await era.printAndWait([
      you.get_colored_name(),
      ' が参拝の次の所作に入るより早く、背後の叫び声に遮られた。',
    ]);
    era.printButton('振り返る', 1);
    await era.input();
    await era.printAndWait([
      '残念ながら、言い伝えとは違い、鐘の音とともに現れたのは神ではなく、ひとりの',
      kitaru.uma_sex_title,
      'だった。',
    ]);
    await era.printAndWait([
      'やや乱れたオレンジの短髪。ピンと張った胸にリボンが持ち上げられ、稲荷神の狐使を思わせる細長い耳が、興奮に合わせてひらひらと揺れている。',
    ]);
    await era.printAndWait([
      '溢れんばかりの元気な外見とは裏腹に、すぐ目の前に立つこの',
      kitaru.uma_sex_title,
      'からは、この神社にも似た清涼で静かな体香がする。左耳には厳かな達磨、右耳には黄色い雛菊。',
    ]);
    await era.printAndWait([
      'まったく違う二つの要素が、',
      you.get_colored_name(),
      ' の眼前にいるこの',
      kitaru.uma_sex_title,
      'の上に重なっている。',
    ]);
    await era.printAndWait([
      'そして、顔を上げて ',
      you.get_colored_name(),
      ' を見たとき――星形の瞳は、',
      kitaru.uma_sex_title,
      'のなかでも珍しい部類だ。',
      you.get_colored_name(),
      ' とぶつかった喜びに、きらきらと輝いている。',
    ]);
    era.printButton('よく見る', 1);
    await era.input();
    await era.printAndWait([
      'この賑やかな栗毛は、たしかにトレセンの生徒だ。着ている制服を見れば、',
      you.get_colored_name(),
      ' にもわかる。',
    ]);
    await era.printAndWait('ただ……今は選抜レースの時間ではないのか？');
    await era.printAndWait([
      you.get_colored_name(),
      ' の視線に疑問が混じっていると見て、',
      kitaru.get_colored_name(),
      ' はすぐ応えた。',
    ]);
    await kitaru.say_as_unknown_and_wait(
      'そうですそうです！ 自己紹介を忘れていました！',
    );
    await kitaru.say_as_unknown_and_wait([
      '私の名前は【',
      kitaru.get_colored_name(),
      '】！ 白興様のお導きで、ここに参りました！',
    ]);
    await kitaru.say_and_wait([
      '運命の人が来るのを待っていたんです！ つまり、トレーナー',
      you.adult_sex_title,
      '、あなたのことですよ！',
    ]);
    await era.printAndWait([
      'そう言うと、',
      kitaru.sex,
      'は ',
      you.get_colored_name(),
      ' に向かって両腕を広げた。',
    ]);
    await kitaru.say_and_wait(
      'どうか！ どうか私のトレーナーになってください！',
    );
    await era.printAndWait([
      'この神社が効きすぎたのか。それとも三女神か、別の神の視線が、たまたま ',
      you.get_colored_name(),
      ' に落ちたのか。',
    ]);
    await era.printAndWait('たとえば、あの白興様、だろうか。');
    era.printButton('学んだ民俗の知識を思い出す', 1);
    era.printButton('似た神話を聞いたことがないか思い出す', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は断言できる。学んだ範囲では、この神の名を聞いた覚えはない。',
      ]);
    } else {
      await era.printAndWait([
        'ない。',
        you.get_colored_name(),
        ' は、この神の名を聞いたことがないと確信した。',
      ]);
      await era.printAndWait([
        '目の前の',
        kitaru.uma_sex_title,
        'の妄想かもしれない。',
      ]);
    }
    await kitaru.say_and_wait(
      'さあ！ トレーナーさん！ トゥインクル・シリーズで、一緒に幸運をつかみましょう！',
    );
    era.printButton('断る', 1);
    era.printButton('受け入れる', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '何も知らないまま、',
        kitaru.uma_sex_title,
        'のトレーナーになるのは、どちらにとっても無責任だ。',
      ]);
      await kitaru.say_and_wait('うぅ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' に断られた',
        kitaru.teen_sex_title,
        'は、みるみる沈んでいく。跳ねていた両耳も、尻尾といっしょに力なく垂れた。',
      ]);
      await era.printAndWait([
        '少し胸が痛む。それでも ',
        you.get_colored_name(),
        ' はわかっている。この ',
        kitaru.get_colored_name(),
        ' の言葉だけで',
        kitaru.sex,
        'のトレーナーになるのは、どちらにとっても無責任だ。',
      ]);
      await era.printAndWait('ただ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' が気づくと、断ってから数秒も経たないうちに、',
        kitaru.get_colored_name(),
        ' の顔に、また笑顔が戻っていた。',
      ]);
      await era.printAndWait(
        '笑顔、というより、長いあいだ身につけた癖のような、型どおりの笑みだ。',
      );
      await you.say_and_wait('……はあ');
      await era.printAndWait([
        'トレーナーとしての責任が、',
        you.get_colored_name(),
        ' を見過ごさせない。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'のことをほとんど知らない。それでも、ついさっき祈った神に、自分の運命を預けることにした。',
      ]);
      await era.printAndWait([
        'とはいえ、このまま',
        kitaru.uma_sex_title,
        'のトレーナーになるのは、どちらにとっても無責任だ。',
      ]);
    }
    era.printButton(
      '「君の選抜レースを見に行く。そのあとで決めよう、でどうだ？」',
      1,
    );
    await era.input();
    await kitaru.say_and_wait('おお――！');
    await kitaru.say_and_wait('そうですそうです！ まさにそれです！');
    await kitaru.say_and_wait(
      'もうすぐの選抜レースで！ 私の実力、お見せしますから！',
    );
    await kitaru.say_and_wait([
      'じゃあ、指切りしましょう！ えっと……',
      you.actual_name,
      ' トレーナーさん！',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' は胸の名札から ',
      you.get_colored_name(),
      ' の名前を、少しぎこちなく読み上げ、',
      you.get_colored_name(),
      ' に手を差し出した。',
    ]);
    await kitaru.say_and_wait('ん？');
    await era.printAndWait([
      you.get_colored_name(),
      ' が戸惑っていると見て、',
      kitaru.get_colored_name(),
      ' は説明した。',
    ]);
    await kitaru.say_and_wait('これはお姉さんが教えてくれた儀式なんです！');
    await kitaru.say_and_wait('指切りの儀式です！');
    await kitaru.say_and_wait('約束したら、もう運命なんです！');
    era.printButton('手を伸ばす', 1);
    await era.input();
    await kitaru.say_and_wait('よし！ じゃあ、決まりですね！');
    await kitaru.say_and_wait(
      '絶対に、トレーナーさんに！ 契約してもらいますから！ どうか、見に来てくださいね～！',
    );
    era.drawLine({ content: '翌日' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' の選抜レースが、ついに始まった。',
    ]);
    await era.printAndWait([
      '今日の運勢が悪かったのか、渋滞で少し遅れた。やっと人混みをかき分けて、',
      you.get_colored_name(),
      ' は観衆の輪に滑り込む。',
    ]);
    await era.printAndWait([
      'なにしろこの選抜レースには、新入生のあいだですでに大逃げで名を馳せた',
      kitaru.uma_sex_title,
      'も、メジロ家の新星も、三冠を狙える鹿毛の',
      kitaru.uma_sex_title,
      'もいる。ひとり取り出しても、トレーナーたちが殺到する相手だ。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' は、その添え物にすぎない。周囲の噂を聞く限り、',
      kitaru.sex,
      'を見ている者はほとんどいない。',
    ]);
    await era.printAndWait([
      'それでも、人混みに押し込まれた観客席の隅から、',
      you.get_colored_name(),
      ' はゲートへ向かう ',
      kitaru.get_colored_name(),
      ' を捉えた。',
    ]);
    await era.printAndWait([
      '体操服が、',
      kitaru.sex,
      'の起伏のある体の線をはっきり見せている。白いストッキングの脚は、白くて長い。',
    ]);
    await era.printAndWait([
      '外見だけなら、',
      kitaru.sex,
      'はたしかに愛らしい',
      kitaru.uma_sex_title,
      'だ。',
    ]);
    await era.printAndWait([
      'ただ、',
      kitaru.sex,
      'の表情は少し困っている。光を失った星の瞳が、観客席の誰かを探しているようだ。人混みの隅にいる ',
      you.get_colored_name(),
      ' には、気づいていないらしい。',
    ]);
    await era.printAndWait([
      '結局、スタッフに急かされて、',
      kitaru.get_colored_name(),
      ' はゲートインした。',
    ]);
    era.drawLine({ content: '選抜レース終了後' });
    await era.printAndWait('惨敗……');
    await era.printAndWait([
      '惨敗と言っていい。褒めるなら、',
      kitaru.sex,
      'の、かろうじて平均より上、と言える末脚くらいだ。',
    ]);
    await era.printAndWait([
      '走りのフォームさえぎこちなく、スパートのタイミングも外して、着順は最下位だった。',
    ]);
    await era.printAndWait([
      '本当に',
      kitaru.sex,
      'を担当にするのか。',
      you.get_colored_name(),
      ' は迷わずにいられなかった。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' には見えた。ちらほら声をかけてきたトレーナーを、',
      kitaru.get_colored_name(),
      ' は断っている。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' という',
      kitaru.uma_sex_title,
      'は、意外なほど、約束したら離さないタイプらしい。',
    ]);
    await kitaru.say_and_wait(
      '申し訳ありません！ でも、私にはもう運命の人がいるんです！',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は、近づこうとするトレーナーたちへ、',
      kitaru.sex,
      'が大きな声でそう言うのを聞いた。',
    ]);
    await era.printAndWait([
      'それでも笑顔を作ろうとしてはいる。だがサイコロの出目は失敗だけだ。栗色の尻尾が、力なく両脚のあいだに垂れている。',
    ]);
    era.printButton(`（${kitaru.name} の担当になる）（募集を試みる）`, 1);
    era.printButton('（やっぱりやめよう……）（募集を諦める）', 2);
    const ret = await era.input();
    if (ret === 1) {
      era.printButton(`「${kitaru.name}！」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の名前を大声で呼んだ。聞こえていないのでは、と、さらに大きな声で何度も繰り返した。',
      ]);
      era.printButton(`「${kitaru.name}！！！」`, 1);
      await era.input();
      await era.printAndWait([
        'まず垂れていた耳が跳ねた。火が戻った星の瞳が、',
        you.get_colored_name(),
        ' のほうを向く。',
      ]);
      await era.printAndWait([
        'それから、',
        you.get_colored_name(),
        ' がこれまで見たなかでいちばん速い末脚――鮮やかなオレンジの稲妻が、',
        you.get_colored_name(),
        ' へ一直線に飛んできた。',
      ]);
      await era.printAndWait([
        '距離感のない ',
        kitaru.get_colored_name(),
        ' が止まらず ',
        you.get_colored_name(),
        ' の胸へ倒れ込みそうになった瞬間、',
        you.get_colored_name(),
        ' は素早く頭を押さえて、ぶつかってくる動きを止めた。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'の力は人間の数倍、のはずだ。',
        you.get_colored_name(),
        ' に止められる道理はない。',
      ]);
      await era.printAndWait([
        'なのに ',
        you.get_colored_name(),
        ' の掌の下では、',
        kitaru.sex,
        'は力のない兎のように、ふらふらしている。',
      ]);
      await kitaru.say_and_wait(
        'やっぱり！ トレーナーさんは見に来てくれるって、わかってました！',
      );
      await kitaru.say_and_wait('今日はやっぱり――');
      await kitaru.say_and_wait('大吉です！ 福来たる！');
      await era.printAndWait([
        kitaru.sex,
        'は両手を空へ掲げる、妙なポーズをとってから、',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には、',
        kitaru.sex,
        'の意味がわかった。',
      ]);
      await era.printAndWait([
        '結局 ',
        you.get_colored_name(),
        ' は、藁にもすがるようなその視線の前で、契約書を取り出した。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' と、【運命？】の出会いを果たした。',
      ]);

      await era.printAndWait([
        kitaru.get_colored_name(),
        ' と、契約を結んだ。',
      ]);
    } else {
      await era.printAndWait([
        'この子の精神状態は、担当にするには向かない気がする。手を出さないほうがいい。',
        you.get_colored_name(),
        ' はそっとその場を離れた。',
      ]);
    }
    return ret;
  },
};
