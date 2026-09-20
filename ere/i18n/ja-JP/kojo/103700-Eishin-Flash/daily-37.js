/**
 * @file エイシンフラッシュ - 日常
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  good_morning(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `おはようございます、${callname}。新しい一日、新しい道のり、新しい希望。前向きに参りましょう。`,
        ),
      () =>
        flash.say(
          `Guten Tag、${callname}。どうか、よい一日をお過ごしください。`,
        ),
      () =>
        flash.say(
          `Guten Morgen、${callname}。また新しい一日です。本日の計画、準備はよろしいですか？`,
        ),
      () =>
        flash.say(
          `おはようございます、${callname}。忙しくても、そばの美しさに目を向ける余裕を、どうかお忘れなく。`,
        ),
    ];
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  select(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (relation < 0) {
      buffer.push(() =>
        flash.say(`……はあ。ご用件は何でしょうか、${callname}？`),
      );
    } else {
      buffer.push(() =>
        flash.say(`こちらです、${callname}。ご用件は何でしょうか？`),
      );
      if (relation > 75)
        buffer.push(() =>
          flash.say(
            `ふ……少し待ちきれなくなってきました。始めましょう、${callname}。`,
          ),
        );
      if (relation > 225)
        buffer.push(() =>
          flash.say(
            '時刻、相違なし。場所、正確。それから……ふふっ。計画、照合完了。エイシンフラッシュ、いつでもご指示を。',
          ),
        );
      if (era.get('love:37') > 76) {
        buffer.push(
          () =>
            flash.say(
              `ええ、多くは言いません。とっくに準備は整っています、${callname}。`,
            ),
          () =>
            flash.say(
              `ふふっ。こちらです、${callname}。ご用件は何でしょうか？`,
            ),
          () =>
            flash.say(`ふ……待ちきれません。今から始めましょう、${callname}。`),
        );
      }
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async office_study(flash) {
    const buffer = [
      () =>
        flash.say_and_wait(
          'ご存じですか？ ドイツには「こんにちは」に当たる言い方はなく、Guten Tag——「よい昼を」と申します。',
        ),
      () =>
        flash.say_and_wait(
          'ご存じですか？ ドイツでは豚が縁起物で、幸運と富をもたらすと考えます。新年には、大切な方へ子豚の形をした贈り物をすることが多いのです。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_prepare(flash, you, callname) {
    era.print(
      `${you.name} とエイシンフラッシュは、トレーナールームでレース前の準備をした。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '現在の天候、予報通り。馬場の状態、想定内。自身の状態……完璧。',
        );
        await flash.say_and_wait(
          `ふ……すべて、計画どおりのようです。それでは、行ってまいります、${callname}。`,
        );
      },
      () =>
        flash.say_and_wait(
          `toi、toi、toi……ふ……よし！ ${callname}、行ってまいります。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async talk(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (era.get('cflag:37:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:37:干劲')) {
        case -2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '状態……よくありません。この先の計画を、調整せざるを得ない段階でしょうか。',
              ),
            () =>
              flash.say_and_wait(
                '認めたくはありませんが、私の状態は計画の遂行に影響するほどです……本当に、変えなければいけないのかもしれません。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '状態……少し優れません。ですが、決めた計画をこれで乱してはいけません。そうですよね？',
              ),
            () => flash.say_and_wait('ふ……持ちこたえます！'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              flash.say_and_wait(
                'ええ、今の状態なら、現行の計画を進めて問題ありません。',
              ),
            () =>
              flash.say_and_wait(
                '平凡な一日にも、その日の計画はあります。成功とは、そうした積み重ねで届くものではないでしょうか。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '気分がよいです。この状態で計画を進めれば、想定どおりの結果はたやすく得られるでしょう。',
              ),
            () =>
              flash.say_and_wait(
                `充実した一日が来る前に、身体が昂ぶっています。今日の計画を始めましょう、${callname}！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '今の身体がとても軽いです。珍しい感触ですね。この先の計画を始めましょう！',
              ),
            () =>
              flash.say_and_wait(
                `この状態なら、何をしても事半ばで倍の成果が出るはずです。目標へ向けて励みましょう、${callname}！`,
              ),
          );
      }
    }
    if (relation > 525)
      buffer.push(() =>
        flash.say_and_wait(
          '私は永遠を信じていませんでした。末永さを象徴するダイヤモンドでさえ、いつかは酸化します。ですが、あなたとの出会いが、その考えを変えました。',
        ),
      );
    if (era.get('love:37') >= 75) {
      buffer.push(
        () =>
          flash.say_and_wait(
            '『To love and to be loved is the greatest happiness of existence.』この言葉の意味、おわかりになりますか。今の私は、その中身を、深く味わっています。',
          ),
        () =>
          flash.say_and_wait(
            'ふふっ。あなたにお会いするたび、胸の奥に甘い感情が生まれます。これが『心』の味、なのでしょうか。',
          ),
      );
    }
    if (relation > 225)
      buffer.push(() =>
        flash.say_and_wait(
          'あなたと過ごすたび、胸に特別な感情が生まれます。故郷の言葉で言えば、おそらく『Schmetterlinge im Bauch haben』——腹の中に蝶がいる、ですね。',
        ),
      );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          'レシピは律法です。ですが、スイーツ作りそのものが硬い営みだとは限りません。たとえば、誰かへの濃い想いを一匙足してみる。出来が一段とうまくなることがあります。ふふっ。奇妙ですが、確かな方法です。',
        ),
      );
    buffer.push(() =>
      flash.say_and_wait(
        '抽選について、どのようにお考えですか？ いえ、他意はありません。先日、休憩中に買い物リストどおり品を揃え終えたあと、無料の抽選券が付いていたので、ついでに試したのです。そうしたら一等が当たって……ですが当時の私は、喜びより戸惑いのほうが大きかった。客観的に見れば、ただの紙一枚で高価な品を得たのです。私には、まったく公平でない対価に思えました。',
      ),
    );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          'レシピは律法です。ですが、スイーツ作りそのものが硬い営みだとは限りません。たとえば、誰かへの濃い想いを一匙足してみる。出来が一段とうまくなることがあります。ふふっ。奇妙ですが、確かな方法です。',
        ),
      );
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5)
      buffer.push(
        () =>
          flash.say_and_wait(
            '『Der Frühling ist die Zeit der Pläne, der Vorsätze.』春は、私にとって大切な季節です。このあいだに、一年の計画を丁寧に考え、立てるのですから。',
          ),
        () =>
          flash.say_and_wait(
            '春、ですか……また、万物が蘇る季節です。ご存じですか。私は、この時期にきちんと花を開く植物に、特別な想いがあります。それができるということは、冬の厳しさを耐えたということです……容易なことではありません。どんな打撃を受けても、最後に自分の務めを正確に果たす。敬服します。',
          ),
      );
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8)
      buffer.push(
        () =>
          flash.say_and_wait(
            '夏はいつ熱中症の危険があります。水分の補給を忘れないでください。身体のためにも、それは大切です。',
          ),
        () =>
          flash.say_and_wait(
            '夏になりました……子供のころ、こうした避暑の季節になると、両親が湖畔の小屋へ連れていってくれました。ふふっ。忘れがたい、楽しい思い出です。',
          ),
      );
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11)
      buffer.push(
        () =>
          flash.say_and_wait(
            '秋になると、ドイツのミュンヘンのオクトーバーフェストを思い出します。遊園地のような楽しさと、遠慮のない飲酒が一緒になった、老若問わずの祭りです。とても賑やかです。いつか、あなたと一緒に行けたらと思います。',
          ),
        () =>
          flash.say_and_wait(
            `秋は、運動に向いた季節ですね。${callname}、ご一緒にサッカーをしませんか？`,
          ),
      );
    if (era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2)
      buffer.push(
        () =>
          flash.say_and_wait(
            '冬は、室内にいる時間が目に見えて長くなります。悪いことばかりではありません。新しいレシピを研究するには、よい機会です。',
          ),
        () =>
          flash.say_and_wait(
            '雪の季節になると、故郷のシュトーレンを思い出します。生地にドライフルーツとナッツをたっぷり練り込んだ、クリスマスのスイーツです。あの味が大好きで、毎年クリスマスには家族と一緒に作ります。ご興味があれば、よい機会に、ご賞味いただけるかもしれません。ふふっ',
          ),
      );
    if (era.get('cflag:49:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `ナカヤマさんの勝負への向き合い方は、私とはまったく違います。だからこそ、${flash.sex}から新しい考えを学べます……それは、とてもよいことです。`,
        ),
      );
    if (era.get('cflag:7:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `そういえば、先週の日曜日はゴールドシップさんとケーキ店の新作を試食する約束だったのに、気づいたら昔ながらの駄菓子の品評会になっていました……客観的に申しますと、${flash.sex}のおすすめは、どれも味がよかったです。ふふっ`,
        ),
      );
    if (era.get('cflag:48:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '自分のやり方で、多くの人との友情を軽やかに保てる。ジョーダンさんのその手腕は、本当に敬服します。',
        ),
      );
    if (era.get('cflag:38:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `ぬいぐるみ、ですか？ ああ、これはカレンさんからいただいた贈り物です。ふふっ。とても精巧でしょう？ ${flash.sex}のセンスは、${flash.sex}ご本人と同じく、かわいらしいです。`,
        ),
      );
    if (era.get('cflag:105:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          'ネオユニヴァースさんは、私の作るチョコクッキーがとてもお好きなようです。ふふっ。パティシエとしては、大きな励みです。ですので、もっと美味しいスイーツを開発しなくては！',
        ),
      );
    if (era.get('cflag:46:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          'ファルコさんは、私の匂いだけで、今日どのスイーツを作ったか当てられます。正直に申しますと、すごい能力ですが……少し恥ずかしいですね。',
        ),
      );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async talk_about_gacha(flash) {
    await flash.say_and_wait(
      '抽選について、どのようにお考えですか？ いえ、他意はありません。先日、休憩中に買い物リストどおり品を揃え終えたあと、無料の抽選券が付いていたので、ついでに試したのです。そうしたら一等が当たって……ですが当時の私は、喜びより戸惑いのほうが大きかった。客観的に見れば、ただの紙一枚で高価な品を得たのです。私には、まったく公平でない対価に思えました。',
    );
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async talk_about_falcon_and_gacha(flash) {
    await flash.say_and_wait(
      `ファルコさんには、抽選への向き合い方が奇異すぎると言われました。${flash.sex}は、不労所得ではなく、私にふさわしい褒美なのだから、安心して受け取ればいい、と……はあ。${flash.sex}の言うことが正しいのかもしれません。私は、考え方を変えてみるべきなのでしょう。`,
    );
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_gift(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          'え、贈り物？ 私に、ですか？ ……ふふっ、わかりました。お心遣い、ありがとうございます。この好意には、必ずお返しします。約束します。',
        ),
      () =>
        flash.say_and_wait(
          `besten Dank！ ${callname}、お気持ちに、背きません。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_cook(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `卵白100グラム、卵黄60グラム、それから……あっ！ ${callname}、グラニュー糖を2グラム多く入れていらっしゃいます。`,
        ),
      async () => {
        await flash.say_and_wait(
          '少々……適量……だいたい……む。どこでお探しになったレシピか存じませんが、作る側としては少し困りますね……',
        );
        await flash.say_and_wait(
          `とはいえ、困難は諦める理由ではありません。では今から、完璧な出来に必要な各材料の正確な分量を、一緒に見つけましょう、${callname}。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_rest(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `お疲れさまでした、${callname}。短い休みをうまく使えば、この先の用事も、十分な気力でこなせます。`,
        ),
      () =>
        flash.say_and_wait(
          `お疲れさまでした、${callname}。お疲れなら、どうかきちんと休んでください。『All work and no play makes Jack a dull boy』——そうでしょう？`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_game(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、トレーナールームで一緒にゲームをした。`,
    );
    flash.say(
      'え、私と一緒にゲームを？ もちろんです。お誘いいただけて嬉しいです。では、どの種類をご予定ですか？',
    );
    era.printButton('「もちろん協力プレイだ」', 1);
    era.printButton('「対戦はどうだ？」', 2);
    if ((await era.input()) === 1) {
      await flash.say_and_wait('協力プレイ、ですか。よい選択ですね');
      await flash.say_and_wait(
        `では早速、始めましょう。${callname} と手を取り合って難所を越えるのが、楽しみです。ふふっ`,
      );
    } else {
      await flash.say_and_wait('対戦、ですか。よい選択ですね。');
      await flash.say_and_wait('ええ……始める前に、一つ条件を足しませんか？');
      await flash.say_and_wait(
        'たとえば、負けたほうが勝ったほうの願いを一つ聞く、など。',
      );
      await flash.say_and_wait(
        'ふふっ。賭けを決めてからのほうが、遊びは一段と精彩を帯びます。ナカヤマさんに教えていただいた道理です。',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_tree_hollow(flash, you) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、中庭の枯れ木の洞へ行った。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '枯れ木の洞、ですか……挫折した人には、適度な発散の手段が必要です。',
        );
        await flash.say_and_wait(
          'ただ私個人としては、大切な方と話すほうに傾きます。',
        );
        await flash.say_and_wait(
          '吐露は手段にすぎません。挫折から抜け出す方法を見つけるのが目的、ではないでしょうか。',
        );
      },
      async () => {
        await flash.say_and_wait(
          '枯れ木の洞、ですか……この小さな切り株に、多くの人の想いが乗っているのですね。',
        );
        await flash.say_and_wait(
          '悲しいときは吐露し、嬉しいときは分かち合う。そうする人にとって、この洞はかけがえのない相棒です。',
        );
        await flash.say_and_wait(
          '……ええ。その中には、もちろん私も含まれます。ただ、今は少し違います。',
        );
        await flash.say_and_wait(
          '今の私は、もっと託するに足る方に出会いましたから。ふふっ',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async s_a_dating(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、中庭でデートをした。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `ベンチに並んで温かい陽を浴びるのは、とてもよい……あっ！ ${callname}、背中にテントウムシがいます。`,
        );
        await flash.say_and_wait(
          'しーっ、乱暴に払わないでください……テントウムシは、かわいい生き物です。そうでしょう？',
        );
      },
      async () => {
        await flash.say_and_wait(
          `本日分のお弁当です。どうぞごゆっくり……あら、${callname}、頭に落ち葉が乗っています。`,
        );
        await flash.say_and_wait(
          'ふふっ。『大樹の下は涼しい』とは言いますが、ときどきこんな可愛い事故も起きますね。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async s_r_lunch(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、屋上でお弁当を食べた。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          'ミントケーキ、ですか……これが、あなたのお菓子。',
        );
        await flash.say_and_wait(
          '……いいえ、なんでもありません。ミントは嫌いではありません。ただ、この香りに少し慣れていないだけです。',
        );
        await flash.say_and_wait(
          'ですが、これはあなたのお気持ちです。ですので、すべていただきます。それに客観的に見ても、クリームケーキは美味しいものです。そうでしょう？',
        );
      },
      async () => {
        await flash.say_and_wait(
          '盛り付けが美しい、ですか？ ふふっ。ありがとうございます。',
        );
        await flash.say_and_wait(
          'ただ、食べ物の評価は見た目だけではいけません。私は中身の味のほうを重く見ます。',
        );
        await flash.say_and_wait(
          `どうぞ召し上がってください、${callname}。食後のご感想が、楽しみです。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_r_fishing(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      flash.get_colored_name(),
      ' は川へ釣りに行った。',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait('気ままに釣れるのは、とてもよい体験です。');
        await flash.say_and_wait('え、なぜ急にそんなことを？');
        await flash.say_and_wait(
          'ドイツでは、釣りに専用の免許が必要だからです。',
        );
        await flash.say_and_wait(
          '免許の試験は理論が主ですが、先に日本で実地の技術を鍛えておくのも悪くありません。',
        );
        await flash.say_and_wait('ですので……');
        await flash.say_and_wait(
          `その折には、お力をお借りすることになるかもしれません、${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait(
          '釣り、ですか。子供のころ、避暑の季節になると、両親が名もない湖畔の小屋へ連れていってくれました。',
        );
        await flash.say_and_wait(
          'そこで、父が湖のほとりで一心に竿を振る姿を見ていました。',
        );
        await flash.say_and_wait(
          '父から多くの技術は教わっていません。ですが、あなたとこの楽しみを分かち合う分には、足りるはずです。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_r_walking(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      flash.get_colored_name(),
      ' は川沿いを散歩した。',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait('bildschön！ 印象に残る景色です。');
        await flash.say_and_wait(
          `ええ……記念写真も悪くない案です。いかがでしょう、${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('本日の外出、ご満足いただけましたか？');
        await flash.say_and_wait(
          'ふふっ。よく考えて組んだ、あなたに楽しんでいただけるはずの計画です。喜んでいただけて、本当によかった。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_c_pray(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、神社へ祈願に行った。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `二礼、二拍、一礼……ふ。細かいところはまだ掴みきれませんが、流れとしては誤りはなかったでしょうか？ ${callname}`,
        );
        await era.printAndWait(
          `帰路、エイシンフラッシュは ${you.name} に茶目っ気のある笑みを向けた。この参拝を楽しんでいるらしい。`,
        );
      },
      async () => {
        await flash.say_and_wait(
          '澄んだ空気と、神聖な気配。神社の環境が好きです。あそこにいると、ざわつく心まで静まります。',
        );
        await era.printAndWait(
          `帰路、エイシンフラッシュは微笑みながら ${you.name} に感想を話した。この旅に満足しているらしい。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade(flash, you) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、商店街のゲームセンターへ行った。`,
    );
    const buffer = [
      () =>
        flash.say_and_wait(
          'む。理屈では、アームとぬいぐるみの距離と角度を計算すれば、たやすく投入口へ入れられるはずです。なぜ途中で落ちるのでしょう……',
        ),
      () =>
        flash.say_and_wait(
          'え、なぜゲームの中に急にゾンビが！？ む、こうなっては勇気を出して対処するしかありませんね。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_drawing(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、商店街で抽選をした`,
    );
    await flash.say_and_wait(
      '抽選、ですか……む。こうした偶然に頼るものは、私にはあまり魅力がありません。',
    );
    await flash.say_and_wait('え、具体的な理由、ですか？');
    await flash.say_and_wait(
      '複雑な理由はありません。制御できない確率より、払った分だけ返ってくる公平な規則のほうが好きなだけです。',
    );
    await flash.say_and_wait(
      '……まあ、そうは言っても、ここまで来て何もせずに帰るのは、多少興醒めです。',
    );
    await flash.say_and_wait('ですので、今日の運勢を試してみましょうか。');
    await era.printAndWait(
      'エイシンフラッシュはルーレットを回した。これから何が起きるか期待させる演奏の中、上の画面に今回の結果がゆっくり浮かんだ。',
    );
    const buffer = [
      async () => {
        await flash.say_and_wait('特等？');
        await era.printAndWait('胸を揺さぶる旋律がスピーカーから流れた。');
        await era.printAndWait(
          '同時に、画面の鮮やかな大文字に、エイシンフラッシュは数秒固まった。',
        );
        await flash.say_and_wait('……まったく……予想外です。');
        await era.printAndWait(
          `それから、鮮やかな笑みが${flash.sex}の顔に浮かんだ。`,
        );
        await flash.say_and_wait(
          '結果には期待していなかったのに……これが運の魅力、ということでしょうか。',
        );
        await flash.say_and_wait(
          `ふふっ。今日の運勢はよいようですね。お祝いにお菓子でもいかがでしょう、${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('一等？');
        await era.printAndWait('耳に心地よい旋律がスピーカーから流れた。');
        await era.printAndWait(
          '同時に、画面の鮮やかな大文字に、エイシンフラッシュは数秒固まった。',
        );
        await flash.say_and_wait('……まったく……驚きです。');
        await era.printAndWait(
          `それから、愉快な笑みが${flash.sex}の顔に浮かんだ。`,
        );
        await flash.say_and_wait(
          '結果には期待していなかったのに……これが運の魅力、ということでしょうか。',
        );
        await flash.say_and_wait(
          `ふふっ。今日の運勢は悪くないようです。お祝いにお菓子でもいかがでしょう、${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('二等？');
        await era.printAndWait('起伏のある旋律がスピーカーから流れた。');
        await era.printAndWait(
          '同時に、画面の鮮やかな大文字に、エイシンフラッシュは一瞬迷った。',
        );
        await flash.say_and_wait('……まったく……想定を超えています。');
        await era.printAndWait(
          `それから、嬉しそうな微笑みが${flash.sex}の顔に浮かんだ。`,
        );
        await flash.say_and_wait(
          '結果には期待していなかったのに……これが運の魅力、ということでしょうか。',
        );
        await flash.say_and_wait(
          `ふふっ。今日の運勢は、わりあいよいようですね。お祝いにお菓子でもいかがでしょう、${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('三等？');
        await era.printAndWait(
          '画面の鮮やかな大文字を見て、エイシンフラッシュは瞬きした。',
        );
        await flash.say_and_wait(
          'まあ、想定どおりの結果、といったところです。',
        );
        await era.printAndWait(
          `次の瞬間、穏やかな微笑みが${flash.sex}の顔に浮かんだ。`,
        );
        await flash.say_and_wait(
          '払いと返りが釣り合う。やはりこうした公平な結果のほうがよいです。双方が釣り合わなければ、私はかえって落ち着かないでしょうから。',
        );
        await flash.say_and_wait(
          `ふふっ。円満に終われたお祝いにお菓子でもいかがでしょう、${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('もう一度、ですか？');
        await era.printAndWait('低い旋律がスピーカーから流れた。');
        await era.printAndWait(
          '同時に、画面の鮮やかな大文字に、エイシンフラッシュは数秒黙った。',
        );
        await flash.say_and_wait('……まあ、受け入れられる結果です。');
        await era.printAndWait(
          `それから、豁達な微笑みが${flash.sex}の顔に浮かんだ。`,
        );
        await flash.say_and_wait(
          '確率のことは、こういうものです。想定どおりより、期待を外す可能性のほうが高い。',
        );
        await flash.say_and_wait(
          `抽選の埋め合わせに、お菓子でもいかがでしょう、${callname}`,
        );
      },
    ];
    await get_random_entry(buffer)();
    await era.printAndWait(
      `口では魅力がないと言っていたが、やはり、こうした不確かさが生む未知に対して、${flash.sex}も多少は結果を気にしていた。`,
    );
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_ktv(flash, you) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、商店街のカラオケへ行った。`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        'そういえば、先週の日曜日、ジョーダンさんに今月新しく出たJ-POP三曲の歌い方を教わりました。お聞きになりますか？',
      );
    } else {
      await flash.say_and_wait(
        'え？ 得意な曲を、ですか……む。ですが、いちばんよく歌うのはドイツの童謡ですよ？ お気になさらないでしょうか。',
      );
      await flash.say_and_wait('……わかりました。では、お耳汚しを。');
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_movie(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、商店街で映画を見た`,
    );
    if (era.get('love:37') >= 75 && Math.random() < 0.34) {
      await flash.say_and_wait(
        '『初恋ニンジンケーキ 恋はニンジンより甘い2』？',
      );
      await era.printAndWait(
        '館内に並ぶ近作のポスターを見回して、エイシンフラッシュの視線がある掲示で止まった。',
      );
      await flash.say_and_wait(
        'ふふっ。聞き及んでいます。ルドルフ会長が見て高評価をつけた青春恋愛映画の続編、ですね。',
      );
      await flash.say_and_wait(
        `${callname}、ご一緒しませんか。次のデートの着想にもなりそうです。`,
      );
    } else if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `『${flash.uma_sex_title}の夜明け 頂点に立つとき』？`,
      );
      await era.printAndWait(
        '館内に並ぶ近作のポスターを見回して、エイシンフラッシュの視線がある掲示で止まった。',
      );
      await flash.say_and_wait(
        'ふふっ。聞き及んでいます。ルドルフ会長が推していた伝記シリーズの新作、ですね。',
      );
      await flash.say_and_wait(
        `${callname}、ご一緒しませんか。出走時の心境の描き方が、気になります。`,
      );
    } else {
      await flash.say_and_wait('『五時間地獄』？');
      await era.printAndWait(
        '館内に並ぶ近作のポスターを見回して、エイシンフラッシュの視線がある掲示で止まった。',
      );
      await flash.say_and_wait(
        'ふふっ。聞き及んでいます。マックイーンさんが話していた、長さで知られる、観客の辛抱を試す映画ですね？',
      );
      await flash.say_and_wait(
        `${callname}、ご一緒しませんか。あなたがいらしてくだされば、三百分でも問題にならない気がします。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(flash, you) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、駅近くで食事をした。`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait('え、今回の食事の手配を、私に？');
      await flash.say_and_wait(
        'む……それでしたら、日ごろ好んでいるものだけで組んだ献立でもよろしいでしょうか？',
      );
      await flash.say_and_wait(
        'そうは申しましても、栄養と美味しさの両立を軸に合わせています。失望はさせません。',
      );
      await flash.say_and_wait('ええ、わかりました。では、ご期待ください。');
      await flash.say_and_wait(
        'ふふっ。自分の好みを分かち合えるのが、嬉しいです。',
      );
    } else {
      await flash.say_and_wait('納豆は、お好きですか？');
      await flash.say_and_wait(
        'ああ、他意はありません。メニューに納豆があって、つい口に出ただけです。',
      );
      await flash.say_and_wait(
        '実は私、納豆が好きです。身体にいい健康食ですから。',
      );
      await flash.say_and_wait(
        '初めての味は戸惑うかもしれませんが、慣れると、かえって独特の引力があります。',
      );
      await flash.say_and_wait(
        'ですので、よければあなたにも試していただきたい……たとえば、今、などは？ ふふふっ',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_dating(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、駅近くでデートをした。`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(`手を、しっかり握ってください、${callname}。`);
      await flash.say_and_wait(
        'できれば、こちらへあと5センチ寄っていただけますか？ ええ、そのくらいです。',
      );
      await flash.say_and_wait(
        'え、い……いえ、他意はありません。ここの人通りが多すぎて、あなたのお体が心配で……ええ、それだけです。',
      );
    } else {
      await flash.say_and_wait(
        '今日の服がきれい、ですか？ ふふっ。ありがとうございます。',
      );
      await flash.say_and_wait(
        'あなたとの約束ですから、こうして大切にしなければいけません。',
      );
      await flash.say_and_wait(
        `とはいえ、デートは双方の身なりだけを見るものではありませんよね？ ご一緒に何をするか、計画はお済みですか、${callname}。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_shopping(flash, you, callname) {
    await era.printAndWait(
      `${you.name} とエイシンフラッシュは、駅近くの店を見て回った。`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `買うものは、あらかじめ決めてありますか？ ${callname}。`,
      );
      await flash.say_and_wait('え、なぜあらかじめ決めるのか、ですか？');
      await flash.say_and_wait(
        '買い物も計画の遂行と同じで、正確に向き合うべき行為だと、私は考えます。',
      );
      await flash.say_and_wait(
        'よく考えて決めたものだけを買う。余分な出費を最大限に避ける。長く続ければ、かなりの節約になります。あなたも試してみてはいかがでしょう。',
      );
      await flash.say_and_wait(
        'ええ……ご興味があれば、今日から始めませんか。今回の買い物リスト、一緒に組みましょうか。',
      );
    } else {
      await flash.say_and_wait('テディベア、ですか。');
      await era.printAndWait(
        `途中、${you.name} は${flash.sex}が玩具店のショーケースの前で考え込んでいるのに気づいた。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait(
        '……いいえ、なんでもありません。子供のころ両親がくれたテディベアを、ふと思い出しただけです。姿が似ていたので、少し物が言いたくなりました。',
      );
      await flash.say_and_wait(
        `え？ 待ってください！ ${callname}、これは興味が……`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait(
        '……はあ。あなたという方は。このぬいぐるみ、今回の買い物リストには入っていません。',
      );
      await flash.say_and_wait(
        'ですが……ふふっ。お気持ち、ありがとうございます。胸に刻んでおきます。',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  good_night_normal(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `今日はお疲れさまでした、${callname}。一日働いたあとは、どうか身体をほぐしてください。`,
        ),
      () =>
        flash.say(
          `今日はありがとうございました、${callname}。夜は、甘い夢を。`,
        ),
    ];
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.5) {
      buffer.push(
        () => flash.say('ふ……『Aus nichts wird nichts』。'),
        () =>
          flash.say(
            '身体が……少し重いです。ですが、ここで緩めてしまっては、理想の結果は得られないのでしょうか。',
          ),
      );
    }
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.25) {
      buffer.push(
        () =>
          flash.say(
            'ふ……身体に力が入りません。この先の計画は、少し改めたほうがよいでしょうか。',
          ),
        () =>
          flash.say(
            '労逸を合わせるのは、深い学問です。この言葉を理解するまで、私にはまだ長い道があります。',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * 読込会話 - 妊娠／出産済
   * @param {CharaTalk} flash エイシンフラッシュ
   */
  async load_talk_pregnant(flash) {
    await flash.say_and_wait(
      'そう、ですか……あなたは、結局そういう選択をなさったのですね。',
    );
    await era.printAndWait([
      flash.get_colored_name(),
      ' は小さく息を吐き、言葉の端に落胆が滲んだ。',
    ]);
    await flash.say_and_wait(
      '……ふ。以前の偽りの美しさに、目が眩んでいたようです。',
    );
    await era.printAndWait(
      `次の瞬間、もう覆せないと悟った${flash.sex}は、軽く笑って首を振った。`,
    );
    await flash.say_and_wait('では、最後に一つだけ、伺わせてください。');
    await era.printAndWait(
      `${flash.teen_sex_title}は目の涙を拭い、悲しみは澄んだ問いへと変わっていった。`,
    );
    await flash.say_and_wait(
      '妻を捨て、子を捨て、信を破る。あなたにとって誓いとは、一文の値もないものなのですか？',
    );
  },
};
