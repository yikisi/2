/**
 * @file サンデーサイレンス - 恋慕
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '愛欲';
    /**
     * @param {CharaTalk} silence サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (silence, you, callname) => {
      await silence.print_and_wait([
        silence.get_colored_name(),
        ' は自分のベッドに横たわり、胸に手を当て、呼吸がだんだん荒くなる。',
      ]);
      await silence.say_and_wait([
        'どうして？ ',
        callname,
        '、どうしてこの時間にあなたを思い出すの。',
      ]);
      await silence.print_and_wait([
        '本来ならもう眠って、明日のトレーニングに気力を残すべきなのに、',
        silence.get_colored_name(),
        ' の顔には、',
        silence.sex,
        '自身にもわからない色が浮かんでいた。',
      ]);
      await silence.say_and_wait('私まで……こんなに人を恋しくなるなんて。');
      await silence.print_and_wait(
        '心臓が激しく打つ。窓の外の白い月を見て、苦笑が漏れる。',
      );
      await silence.say_and_wait(
        '夜が焦燥になってきた。でも、なぜ……あなたといる時間が美しいから……離れたくないから？',
      );
      await silence.print_and_wait([
        silence.sex,
        'の手は、気づかないうちにもっと秘めた場所へ伸びる。',
        silence.get_colored_name(),
        ' はかつて ',
        you.get_colored_actual_name(),
        ' の腕のなかを知っている。この瞬間、',
        silence.sex,
        '自身も気づかない種が、ゆっくり根を張りはじめていた。',
      ]);
      await silence.say_and_wait([
        'ふ……は……明日もトレーニングがあるのに……',
        silence.name,
        '、救いようのない馬鹿ね。',
      ]);
      if (silence.sex_code !== 1) {
        await silence.print_and_wait([
          '上衣のボタンを外し、蕾のように赤い乳尖をつまみ、もう一方の手で湿りはじめた入口を軽く擦る。',
          silence.get_colored_name(),
          ' は体を快感に預けた。',
        ]);
      }
      await silence.print_and_wait([
        silence.get_colored_name(),
        ' の低い喘ぎが、やがて弱まっていく。',
      ]);
      await silence.say_and_wait([
        'シーツまで少し濡れた。でも……少し、楽になった。三冠',
        silence.uma_sex_title,
        'になる前は、こんな思いを抱いてはいけなかったはずなのに。でも……',
        you.sex,
        'を忘れられない。',
      ]);
      await silence.say_and_wait(
        'だめ……この段階まで来たなら、私たちの願いのために、絶対に気を散らしては……',
      );
      await silence.print_and_wait([
        'そう言いながら、',
        silence.get_colored_name(),
        ' は自分の頬をつまみ、ベッドを整えてから目を閉じた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-title': (silence) => [silence.name, ' の愛'],
  /**
   * @param {CharaTalk} silence サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async '74-3crown-a'(silence, you, callname) {
    await silence.say_and_wait([callname, '……話したいことがある。']);
    await era.printAndWait([
      silence.get_colored_name(),
      ' は何も言わず ',
      you.get_colored_name(),
      ' の手を引き、初めて会ったあの小さな林へ入っていく。',
    ]);
    await era.printAndWait([
      silence.sex,
      'が三冠の競走',
      silence.uma_sex_title,
      'になってから、',
      you.get_colored_name(),
      ' は',
      silence.sex,
      'の心持ちが少し変わったのを、薄々感じていた。',
    ]);
    await silence.say_and_wait('私……あなたに伝えたいことがある。');
    await era.printAndWait([
      silence.get_colored_name(),
      ' は、口にしにくそうだった。',
    ]);
    await era.printAndWait([
      '艶やかな唇が開いては閉じ、',
      you.get_colored_name(),
      ' は最悪の想像をしはじめる。',
    ]);
    era.printButton('「君……引退するつもりじゃないよね？」', 1);
    await era.input();
    await silence.say_and_wait(
      'そんなわけない！！ 私たちの競走の道は、始まったばかりでしょう？',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      ' は困ったように言い返す。だが',
      silence.sex,
      'の緊張は少し解け、深呼吸してから再び口を開いた。',
    ]);
    await silence.say_and_wait([callname, '、私と恋愛してください！！']);
    era.printButton('「な……なに」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は自分の耳を疑う。トレーニングとレース以外ほとんど顧みなかった ',
      silence.get_colored_name(),
      ' が、恋愛を求めてきたのだ。',
    ]);
    era.printButton('受け入れる（関係を進める）', 1);
    era.printButton('一旦断る（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('わかった。では……よろしく……僕の恋人。');
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう言いながら、その呼び方にまだ慣れない自分を感じていた。',
      ]);
      await era.printAndWait([
        'だが',
        silence.sex,
        'のほうが ',
        you.get_colored_name(),
        ' より羞じらっている。いつも波のない顔が、いまは紅に染まり、',
      ]);
      await era.printAndWait([
        '泳ぐ視線と落ち着かない尻尾が、',
        silence.sex,
        'が見かけほど平静でないことを示していた。',
      ]);
      await silence.say_and_wait([
        'よ……よろしく。ちゃんとした彼女の責任は果たす。',
        callname,
        '……私はもう、あなたのそばを離れられないかもしれない。',
      ]);
      await era.printAndWait([
        silence.sex,
        'は ',
        you.get_colored_name(),
        ' の体を抱き、顔を両手で支えて口づけを奪う。',
        silence.sex,
        'のキスは拙く、いきなり ',
        you.get_colored_name(),
        ' の唇を噛み破った。',
      ]);
      await era.printAndWait([
        'それでも二人は何も言わず、小さな林で抱き合った。誰かが近づいてきた気配で、鶏を盗んだイタチのように慌てて逃げた。',
      ]);
    } else {
      await you.say_and_wait(
        'その……ごめん。もう少し、二人で考えたほうがいい。',
      );
      await era.printAndWait([
        silence.get_colored_name(),
        ' はその言葉を聞くと、今にも泣きそうな顔になった。',
        silence.sex,
        'は無理に目を細め、頭を下げて ',
        you.get_colored_name(),
        ' に顔を見せず、むっつりと頷く。',
      ]);
      await silence.say_and_wait([
        'わかった……',
        callname,
        ' の言うとおりだ。私が軽率だった。ごめんなさい……でも……よければ、ちゃんとした返事をください。',
      ]);
      await era.printAndWait([
        '言い終えると',
        silence.sex,
        'は逃げるように林を出て、',
        you.get_colored_name(),
        ' の見つけられない場所へ走った。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} silence サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async 74(silence, you, callname) {
    await silence.say_and_wait([
      '結局……結局私は惨めな敗者のまま……',
      silence.couple_title,
      'の願いすら果たせなかった。ごめんなさいごめんなさいごめんなさいごめんなさい……',
    ]);
    await silence.say_and_wait('………');
    await era.printAndWait([
      silence.get_colored_name(),
      ' は壁の隅で涙を流している。ここはトレセンという巨大な学園の、目立たない片隅だ。',
      silence.get_colored_name(),
      ' は暇があると、よくここに来て空を眺めてぼんやりしていた。',
    ]);
    era.printButton('「ここにいたのか……話がある。」', 1);
    await era.input();
    await silence.say_and_wait([
      'わかってる……',
      callname,
      '……いいえ、',
      you.actual_name,
      'さん。前に言ったとおり、今回は私の問題だ。',
    ]);
    await silence.say_and_wait(
      '私たちの目標を果たせなかったのは私。あなたはできる限りの責任を果たした。',
    );
    await silence.say_and_wait(
      '望むなら、いつでも契約を解いていい。ごめんなさい。私の問題で、あなたの時間をあんなに無駄にした。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は手を',
      silence.sex,
      'の額に当てる。本来ならすぐ払いのけられる手が、いまはしっかり ',
      silence.get_colored_name(),
      ' の頬に残る。',
    ]);
    await era.printAndWait([
      'それは',
      silence.sex,
      'が一度も見せたことのない表情だった。疲れ、失望、とまどい。ずっと',
      silence.sex,
      'を支えてきた柱が、突然砕けたみたいに。',
    ]);
    await you.say_and_wait(
      'サイレンス。人は他人のために生きるものじゃない。君が話してくれたこと、あの雨の夜のことも、全部はっきり覚えてる。',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      ' は顔を上げ、',
      you.get_colored_name(),
      ' の続きを待っている。',
    ]);
    await you.say_and_wait([
      '君は失敗したかもしれない。',
      silence.couple_title,
      'の最後の願いを果たせなかったかもしれない……でも、いちばんの友人たちなら、',
      silence.couple_title,
      'は今の君を望まない……違うか？',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      ' は自分の頬に触れ、',
      silence.sex,
      'はそっと立ち上がると、',
      you.get_colored_name(),
      ' の胸へ崩れ落ちた。',
    ]);
    await silence.say_and_wait([
      'わからない……',
      silence.couple_title,
      'が競走',
      silence.uma_sex_title,
      'の話をするときの、光るような目。',
    ]);
    await silence.say_and_wait('三冠の話をするときの興奮……なのに私は負けた。');
    await era.printAndWait([
      you.get_colored_name(),
      ' はそれ以上言わず、黙って ',
      silence.get_colored_name(),
      ' を抱き、',
      silence.sex,
      'が胸のなかで静かに泣くに任せた。',
    ]);
    await silence.say_and_wait([
      'ごめん……',
      callname,
      '、みっともないことをした。',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      ' は顔を上げず、声は細い。だが ',
      you.get_colored_name(),
      ' にはわかる。',
      silence.sex,
      'の気持ちは落ち着きはじめている。',
    ]);
    era.printButton(
      '「そんなことない。挫折と失敗に正面から向き合えるのは、すごいことだ。だから聞く。有馬記念、出るかい？」',
      1,
    );
    await era.input();
    await silence.say_and_wait(
      'もちろん。三冠をあなたに捧げられなかったとしても、この道を一緒に歩き続けてほしい。',
    );
    await silence.say_and_wait([
      'トレーナーとしてだけじゃなく……そばにいてくれてありがとう……',
      callname,
      '。これは小さな',
      silence.uma_sex_title,
      'の、取るに足りないけれど本気の気持ち。好きです。',
    ]);
    await silence.say_and_wait(
      'あなたの恋人になりたい。一緒に婚姻の殿堂へ入りたい。一生、並んで歩きたい。あなたは……どう思う？',
    );
    era.printButton('受け入れる（関係を進める）', 1);
    era.printButton('一旦断る（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('わかった。では……よろしく……僕の恋人。');
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう言いながら、その呼び方にまだ慣れない自分を感じていた。だが',
        silence.sex,
        'のほうが ',
        you.get_colored_name(),
        ' より羞じらっている。',
      ]);
      await era.printAndWait([
        'いつも波のない顔が紅に染まり、泳ぐ視線と落ち着かない尻尾が、',
        silence.sex,
        'が見かけほど平静でないことを示していた。',
      ]);
      await silence.say_and_wait([
        'よ……よろしく。ちゃんとした彼女の責任は果たす。',
        callname,
        '……私はもう、あなたのそばを離れられないかもしれない。',
      ]);
      await era.printAndWait([
        silence.sex,
        'は ',
        you.get_colored_name(),
        ' の体を抱き、顔を両手で支えて口づけを奪う。',
        silence.sex,
        'のキスは拙く、いきなり ',
        you.get_colored_name(),
        ' の唇を噛み破った。',
      ]);
      await era.printAndWait([
        'それでも二人は何も言わず、長く口づけしたまま、やがて唇を離す。',
        silence.get_colored_name(),
        ' は口のなかの血の味を舐め、嬉しそうな笑みを浮かべた。',
      ]);
      await silence.say_and_wait([
        callname,
        '、これから先、',
        you.get_colored_name(),
        ' の手は二度と離さない……絶対に。',
      ]);
    } else {
      era.printButton('その……ごめん。もう少し、二人で考えたほうがいい。', 1);
      await era.input();
      await era.printAndWait([
        silence.get_colored_name(),
        ' はその言葉を聞くと、今にも泣きそうな顔になった。',
        silence.sex,
        'は無理に目を細め、頭を下げて ',
        you.get_colored_name(),
        ' に顔を見せず、むっつりと頷く。',
      ]);
      await silence.say_and_wait([
        'わかった……',
        callname,
        ' の言うとおりだ。私が軽率だった。ごめんなさい……でも……よければ、ちゃんとした返事をください。',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        ' は振り向かず、いた場所を去る。',
        you.get_colored_name(),
        ' に表情を見られたくないのか、',
        silence.get_colored_name(),
        ' はとても速く走った。',
      ]);
    }
    return ret;
  },
};
