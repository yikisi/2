/**
 * @file エイシンフラッシュ - 育成
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, festa, you) => {
      await era.printAndWait(
        'エイシンフラッシュは、今回のトレーニング目標を見事に果たした。',
      );
      await era.printAndWait(
        `本来なら休めるはずの${flash.sex}が、グラウンドの端に立つナカヤマフェスタを見つけた。`,
      );
      await flash.say_and_wait('ナカヤマさん、今はトレーニングの時間ですか？');
      await era.printAndWait(
        `気怠そうな顔を見て、${flash.sex}は不思議そうに尋ねた。`,
      );
      await festa.say_and_wait('ああ……でも、どうもやる気が乗らなくてな。');
      await era.printAndWait('ナカヤマフェスタは肩をすくめて答えた。');
      await flash.say_and_wait('やる気が、乗らない？');
      await era.printAndWait(
        'それを聞き、エイシンフラッシュの顔に気遣いが浮かんだ。',
      );
      await flash.say_and_wait('お体の具合が悪いのですか？');
      await festa.say_and_wait(
        'ちがうよ。一人でやるトレーニングじゃ、刺激が足りないだけさ。',
      );
      await flash.say_and_wait('刺激、ですか？');
      await era.printAndWait(
        `目の前の人の言葉を聞き、${flash.sex}は考え込むようにうなずいた。`,
      );
      await flash.say_and_wait(
        'それでしたら、私と併走してみてはいかがでしょう。',
      );
      await festa.say_and_wait('併走？');
      await era.printAndWait(
        'エイシンフラッシュの提案を聞き、ナカヤマフェスタの顔から気怠さが消え、興味ありげな微笑みが浮かんだ。',
      );
      await festa.say_and_wait('そいつは面白い案だ。');
      await festa.say_and_wait('おい、そこのトレーナー。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `次の瞬間、${flash.sex}は視線を ${you.name} へ向けた。`,
      );
      await festa.say_and_wait(
        `正直、このままエイシンフラッシュを引っ張り出して走りたいが、${
          flash.sex
        }はお前の担当の${flash.uma_sex_title}だろ？`,
      );
      await festa.say_and_wait('お前の意見は？');
      era.printButton('「行ってこい、フラッシュ。」', 1);
      era.printButton('「もう休みの時間だ。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `エイシンフラッシュがナカヤマフェスタに熱い刺激を届けたいなら、${flash.sex}の望みどおりにしよう。`,
        );
        await era.printAndWait(
          `${you.name} はエイシンフラッシュに手を振り、応援の合図を送った。`,
        );
        await flash.say_and_wait('はい！');
        await era.printAndWait('それを見て、エイシンフラッシュはうなずいた。');
        await flash.say_and_wait('では、全力で参ります、ナカヤマさん！');
        await festa.say_and_wait('ははっ！ それでいい！');
        await era.printAndWait(
          'ナカヤマフェスタも、期待を乗せた笑い声を上げた。',
        );
        await era.printAndWait(
          'こうして二人はコースへ向かい、真剣に併走した。',
        );
      } else {
        await era.printAndWait(
          `エイシンフラッシュはナカヤマフェスタに熱い刺激を届けたいらしい。${you.name} も${flash.sex}の望みを叶えたい。`,
        );
        await era.printAndWait(
          'だが今日の運動量はもう足りている。やりすぎは身体を壊す。',
        );
        await era.printAndWait(
          `${you.name} はエイシンフラッシュに、首を振って見せた。`,
        );
        await flash.say_and_wait('む……');
        await era.printAndWait(
          'それを見て、エイシンフラッシュは残念そうな顔をした。',
        );
        await flash.say_and_wait(
          'わかりました。やりすぎは、よくありませんね。',
        );
        await flash.say_and_wait(
          'それではナカヤマさん、日を改めて、またご一緒に走れますか？',
        );
        await era.printAndWait(
          'こうしてエイシンフラッシュは後ろから計画帳を取り出し、ナカヤマフェスタと約束した日付に丸をつけた。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async train_in_fat(flash) {
    await flash.say_and_wait('……え？');
    await era.printAndWait(
      'ある日の定期検診で、エイシンフラッシュは体重計の数字が前回より増えているのに気づいた。',
    );
    await flash.say_and_wait('体重が……増えました？');
    await era.printAndWait(`${flash.sex}は眉を寄せた。`);
    await flash.say_and_wait(
      '予定の日程表の外に、減量の計画を足さなければなりませんね。',
    );
    await era.printAndWait(`${flash.sex}はそう思い、うなずいた。`);
    await era.printAndWait(
      'こうして、しばらく鍛えたあと、エイシンフラッシュの体重は元に戻った。',
    );
  },
  train_fail: (() => {
    const title = 'お大事に！';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('エイシンフラッシュのトレーニングは失敗した。');
      await flash.say_and_wait(
        'む、注意が足りませんでした……準備運動をもう少し丁寧にしていれば……この結果は避けられたかもしれません。',
      );
      await era.printAndWait(
        `トレーナールームで、${flash.sex}は沈んだ声で言った。`,
      );
      await flash.say_and_wait(
        'このままでは、この先の計画が遅れるかもしれません。',
      );
      era.printButton('「焦らず、まず休もう。」', 1);
      era.printButton('「無理はしないで、まず休もう。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '急いては事を仕損じる。運動でも、その道理は同じだ。',
        );
        await era.printAndWait(
          '休まず働けば、かえってバランスを崩し、もっと悪い結果になる。',
        );
        await flash.say_and_wait('む……');
        await era.printAndWait(
          `エイシンフラッシュにもその道理はわかっている。${flash.sex}はしばらく黙ったあと、ゆっくりうなずいた。`,
        );
        await flash.say_and_wait(
          'わかりました。ではご提案どおり、まず休みます。',
        );
      } else {
        await era.printAndWait(
          '急いては事を仕損じる。運動でも、その道理は同じだ。',
        );
        await era.printAndWait('無理を重ねれば、状況は悪くなるだけだ。');
        await flash.say_and_wait('む……');
        if (!fail_again) {
          await era.printAndWait(
            `エイシンフラッシュにもその道理はわかっている。${flash.sex}はしばらく黙ったあと、ゆっくりうなずいた。`,
          );
          await flash.say_and_wait(
            '無理だとは思いません。ですが、おっしゃる通りでもあります。',
          );
          await flash.say_and_wait('ではご提案どおり、まず休みます。');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は禁物！';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('エイシンフラッシュのトレーニングは失敗した。');
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait(
        '大変申し訳ありません。怪我をするとは思っていませんでした……',
      );
      await era.printAndWait(`保健室で、${flash.sex}は詫びるように言った。`);
      await flash.say_and_wait(
        'ですが、この程度の傷で行程を変えるわけにはいきません。',
      );
      await era.printAndWait(
        `次の瞬間、${flash.sex}はまた首を振り、立て直しを図った。`,
      );
      await flash.say_and_wait(
        '幸い、傷の程度は許容範囲です。少し休めば、トレーニングは続けられるはずです。',
      );
      era.printButton('「まず、しっかり治そう。」', 1);
      era.printButton('「本当に、まだトレーニングできるのか？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '前向きに取り組みたいのはよい。だが、そのために無理をしてはいけない。',
        );
        await flash.say_and_wait(
          'ですが、ここで時間を使いすぎれば、この先の計画が遅れるかもしれません……',
        );
        await era.printAndWait(
          `${you.name} の提案に、エイシンフラッシュの顔に迷いが浮かんだ。`,
        );
        era.printButton('「悪化したら、もっとひどいことになる。」', 1);
        await era.input();
        await era.printAndWait(`${you.name} は小さく息を吐き、そう言った。`);
        await flash.say_and_wait('……');
        await era.printAndWait(
          `${you.name} の言葉が、目の前の人をはっきり戒めた。`,
        );
        await era.printAndWait(
          `${flash.sex}は頭を下げ、目を揺らし、損得を測っているようだった。`,
        );
        await flash.say_and_wait('わかりました……');
        await era.printAndWait(
          `しばらくして、${flash.sex}の肩から力が抜けた。`,
        );
        await flash.say_and_wait(
          'おっしゃるとおりです。では、しばらくは治療に専念します。',
        );
      } else {
        await era.printAndWait(
          '前向きに取り組みたいのはよい。だが今のエイシンフラッシュの状態では、無理ではないか。',
        );
        await flash.say_and_wait(
          'ええ。強度の高い運動はしばらくできませんが、軽い持久走ならできます。',
        );
        await era.printAndWait(
          `${you.name} の疑問に、${flash.sex}は自信ありげに答えた。`,
        );
        if (fail_again) {
          await flash.say_and_wait('むっ！');
          await era.printAndWait(
            `……次の瞬間、${you.name} は${flash.sex}が急に立ち上がって小さく呻くのを見た。`,
          );
          era.printButton('「やはり、しっかり治そう。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} は小さく息を吐いた。`);
          await flash.say_and_wait('はい……');
          await era.printAndWait(
            '疑いようのない事実が目の前にある。どれほど歯痒くても、エイシンフラッシュは頭を下げるしかなかった。',
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '万事の始め・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'ついに、エイシンフラッシュのメイクデビューの時が来た。',
      );
      await flash.say_and_wait('ふぅ……レース開始まで、あと15分です。');
      await era.printAndWait(
        `選手控え室で、${you.name} はエイシンフラッシュが最後の準備をしているのを見た。`,
      );
      era.printButton('「緊張しているか？」', 1);
      await era.input();
      await flash.say_and_wait('はい。');
      await era.printAndWait(
        `少し意外だったが、エイシンフラッシュはうなずいた。`,
      );
      await flash.say_and_wait('緊張は、避けられません。');
      await flash.say_and_wait(
        'これから向かうのは、トゥインクル・シリーズへの道が決まるメイクデビュー。万事の始め、ですから。',
      );
      await flash.say_and_wait(
        'どれほど心を抑えても、多少の揺れは生じるはずです。',
      );
      era.printButton('「それは、普通のことだ。」', 1);
      await era.input();
      await flash.say_and_wait(
        'ええ。ですから、緊張はこれから起きることに影響しません。それに……',
      );
      await era.printAndWait(
        `そこまで言って、${you.name} はエイシンフラッシュの顔に、かすかな微笑みを見た。`,
      );
      await flash.say_and_wait(
        'すべては、計画どおりに進んでいます。そうではありませんか？',
      );
      era.printButton('「！」', 1);
      await era.input();
      await flash.say_and_wait(
        `走るためのトレーニングも、レースのための作戦も。担当契約を結んだ時から今日まで、私と ${callname} は、たくさんのことを一緒に積んできました。`,
      );
      await flash.say_and_wait(
        'そう考えると、メイクデビューも、私たちの成果を確かめるテストにすぎません。',
      );
      era.printButton('「そうか。」', 1);
      await era.input();
      await era.printAndWait(
        `自信ありげなエイシンフラッシュの肩を、${you.name} は叩いて、励ますように見た。`,
      );
      era.printButton('「なら、その成績を、場にいる全員に見せてこい。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(
        `エイシンフラッシュは力強くうなずき、${flash.sex}の中で戦意が立ち上がった。`,
      );
      await flash.say_and_wait('開始まで10分です。それでは、行ってきます。');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '万事の始め・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(`ただいま戻りました、${callname}。`);
      era.printButton('「レース、お疲れ。」', 1);
      await era.input();
      await flash.say_and_wait('ふぅ……忘れられない体験でした。');
      await era.printAndWait(
        'エイシンフラッシュは長く息を吐き、レースの疲れを少しほぐした。',
      );
      await era.printAndWait(
        `続いて ${you.name} は、${flash.sex}の本心からの感嘆を聞いた。`,
      );
      era.printButton('「忘れられない、か？」', 1);
      await era.input();
      await flash.say_and_wait(
        'ええ。これが本番と模擬レースの違いです。言葉だけでは、本当にはわかりませんね。',
      );
      await era.printAndWait(
        'そう言って、エイシンフラッシュは満足そうにうなずいた。',
      );
      await era.printAndWait(
        `新しい収穫を得た${flash.sex}が、このレースの過程を楽しんでいるのが、${you.name} にはわかった。`,
      );
      era.printButton('「次は、何をするつもりだ？」', 1);
      await era.input();
      await era.printAndWait('なら、今が鉄は熱いうちに打つ時だ。');
      await flash.say_and_wait(
        'これからの予定は、やはり計画どおりに進めるつもりです。',
      );
      era.printButton('「計画、か。」', 1);
      await era.input();
      await era.printAndWait(
        'メイクデビューで中長距離での走りを確かめ、クラシック級のクラシック三冠と、シニア級の春秋三冠へ備える。',
      );
      await era.printAndWait(
        `それが、エイシンフラッシュが自分の${flash.uma_sex_title}としての生涯に立てた計画だ。取れる栄誉はすべて手にしたい、という規模で、紙に書いただけでも豪華に見える。`,
      );
      await flash.say_and_wait('ただ……');
      await era.printAndWait(
        `……だが、本当にすべてが${flash.sex}の望みどおりなら。最後には${flash.sex}自身が言ったように、栄誉をもって、ご両親に誇ってもらえるはずだ。`,
      );
      await era.printAndWait(`${you.name} はそう思い、心の中で気合を入れた。`);
      era.printButton('「それなら、一緒に頑張ろう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(
        `エイシンフラッシュは ${you.name} にうなずき、${flash.sex}の顔に鮮やかな笑みが広がった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(
        `『Ich wünsche dir ein frohes neues Jahr!』あけましておめでとうございます、${callname}。`,
      );
      era.printButton('「あけましておめでとう」', 1);
      await era.input();
      await era.printAndWait(
        `新年の一日、トレーナールームで、${you.name} とエイシンフラッシュは互いに祝いの言葉を交わした。`,
      );
      await flash.say_and_wait('こちら、受け取っていただけますか。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `すると ${you.name} は、${flash.sex}が後ろから丁寧に包んだ箱を取り出すのを見た。`,
      );
      era.printButton('「これは……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はエイシンフラッシュから贈り物を受け取り、開けたあと、中身を見て少し目を丸くした。`,
      );
      era.printButton('「……目玉のついた、ピンクの丸いケーキ？」', 1);
      await era.input();
      await flash.say_and_wait('ふふふ～');
      await era.printAndWait(
        `エイシンフラッシュは ${you.name} の言い方に、小さく笑った。`,
      );
      await flash.say_and_wait(
        '客観的には正確ですが、これは『目玉のついたピンクの丸いケーキ』ではありませんよ。',
      );
      await era.printAndWait(
        `${flash.sex}は指を一本立て、${you.name} に贈り物の意味を説明し始めた。`,
      );
      await flash.say_and_wait(
        '『Glücksbringer』。幸運を運ぶ豚、という意味です。',
      );
      await flash.say_and_wait(
        'ドイツでは、豚は幸運と富をもたらすと考えられています。ですから新年には、豚をかたどった贈り物を親しい人へ渡し、祝福とします。',
      );
      era.printButton('「なるほど。それは貴重な贈り物だな。」（全能力+10）', 1);
      era.printButton(`「なるほど。つまり、豚か。」（スキルPt+70）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は箱を見た。エイシンフラッシュのわかりやすい説明を聞いても、このピンクの球体を、自分が知る豚と結びつけるのは難しい。`,
        );
        await era.printAndWait('だが、祝いの気持ちに値段はない。');
        await era.printAndWait(
          `だから ${you.name} は、この贈り物を大切にしまった。`,
        );
        await flash.say_and_wait('ふふ、そういえば……');
        await era.printAndWait(
          'そのとき、エイシンフラッシュは少し照れたように笑った。',
        );
        await flash.say_and_wait(
          `最初は写実で作るつもりでした。ですがファルコさんが、それだと少し怖いのではないかと。最終的に${flash.sex}の提案で、デフォルメした形にすることにしました。`,
        );
        await flash.say_and_wait(
          '残念ながら、美術では模写以外の技法に経験がありません……変形も、そのうちです。',
        );
        await flash.say_and_wait(
          '過程ではできるだけ実現しようとしましたが、やはり仕上がりは、やや不十分でしたね。',
        );
        era.printButton('「大事なのは外見じゃなく、中身だ。」', 1);
        await era.input();
        await flash.say_and_wait('！');
        await era.printAndWait(
          `${you.name} の言葉を聞き、エイシンフラッシュは考え込むようにうなずいた。`,
        );
        await flash.say_and_wait(
          '……おっしゃるとおりです。贈り物で重いのは、そこに込めた『礼』。『物』そのものは、その次です。',
        );
      } else {
        await era.printAndWait(
          `エイシンフラッシュの説明はわかりやすい。だが箱の中のピンクの球体を、自分が知る豚と結びつけるのは、やはり難しい。`,
        );
        await flash.say_and_wait('む。');
        await era.printAndWait(
          `${you.name} の言葉に、エイシンフラッシュは少し困った顔をした。`,
        );
        await flash.say_and_wait(
          `最初は写実で作るつもりでした。ですがファルコさんが、それだと少し怖いのではないかと。最終的に${flash.sex}の提案で、デフォルメした形にすることにしました。`,
        );
        await flash.say_and_wait(
          '残念ながら、美術では模写以外の技法に経験がありません……変形も、そのうちです。',
        );
        await flash.say_and_wait(
          '過程ではできるだけ実現しようとしました。ですが今見ると、仕上がりはやはり不十分でしたね……',
        );
        era.printButton('「……そうは言っても、おいしいぞ！」', 1);
        await era.input();
        await era.printAndWait(
          `エイシンフラッシュの顔色が沈んだのを見て、${you.name} は箱に付いていた器具を取り、球体に大きな欠けを作った。`,
        );
        await flash.say_and_wait('！');
        await flash.say_and_wait(`${callname}……ふふ～～`);
        await era.printAndWait(
          `${you.name} が次々と食べ進める様子を見て、エイシンフラッシュの顔に再び明るさが戻った。`,
        );
        await flash.say_and_wait(
          'もう。おいしくても、食べる速さには気をつけてください。',
        );
        await flash.say_and_wait(
          'ですが、嬉しいです。手作りの菓子を認めていただけて。',
        );
        await flash.say_and_wait(
          'この中には……私の気持ちも、込めているのですから。',
        );
        era.printButton('「気持ち？」', 1);
        await era.input();
      }
      await flash.say_and_wait(
        '今年は、これまでの人生でもっとも大切な一年になるかもしれません。',
      );
      await era.printAndWait(
        `エイシンフラッシュは口を開き、この贈り物に込めた${flash.sex}の気持ちを ${you.name} に説明した。`,
      );
      await flash.say_and_wait(
        '皐月賞、日本ダービー、菊花賞……クラシック三冠の挑戦が、すぐそこまで来ています。',
      );
      await era.printAndWait(
        `${you.name} は、${flash.sex}の声が少しずつ真剣になっていくのを聞いた。`,
      );
      await flash.say_and_wait(
        '夢を果たすため、ご両親に私を誇ってもらうため、私はやり遂げなければなりません。',
      );
      await flash.say_and_wait('ですから……');
      await era.printAndWait(
        `${you.name} が姿勢を正して、フラッシュの続きを待った、そのとき。`,
      );
      await era.printAndWait('次の瞬間、空気がふっと緩んだ。');
      await flash.say_and_wait(
        'この幸運の豚には、茨の道を、あなたと一緒に無事に最後まで歩ききれるように、という願いを込めました。',
      );
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} に優しい笑みを向けるエイシンフラッシュを見て、もう多くを言う必要はないと思った。`,
      );
      era.printButton('「ありがとう。」', 1);
      await era.input();
      await era.printAndWait(
        `だから ${you.name} は改まってうなずき、この祝いを受け取った。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_keis_hai: (() => {
    const title = '思いがけぬ喜び';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '京成杯。クラシック三冠の一つ、皐月賞の前哨戦で、同じコース、同じ距離だ。',
      );
      await era.printAndWait(
        'だからエイシンフラッシュは計画の初めから、王道へ進む予行としてこれを選んだ。これ以上ない選択だった。',
      );
      await you.say_as_passer_by_and_wait(
        '通行人A',
        'ところで今日のレース、誰を本命にしてる？',
      );
      await you.say_as_passer_by_and_wait(
        '通行人B',
        `え？ 聞くまでもないだろ。やっぱり${flash.sex}だよ。`,
      );
      await era.printAndWait(
        `だが ${you.name} も${flash.sex}も少し意外だったのは、本番の前に、思いがけない喜びまで受け取ったことだ。`,
      );
      await you.say_as_passer_by_and_wait(
        '通行人A',
        'だな。あの子、これまでの走りもいいし。',
      );
      await you.say_as_passer_by_and_wait(
        '通行人B',
        `陣容を見ても、${flash.sex}を応援するしかないだろ？`,
      );
      await you.say_as_passer_by_and_wait(
        '通行人A',
        `そう言うと他の子に悪い気もするけど……まあ、あとで一緒に${flash.sex}を応援しよう。`,
      );
      await you.say_as_passer_by_and_wait(
        '通行人B',
        'うんうん、頑張れ！ エイシンフラッシュ！！',
      );
      era.drawLine({ content: 'レース当日、選手控え室' });
      await flash.say_and_wait('……第一人気になるとは、思っていませんでした。');
      await era.printAndWait(
        `今日の新聞の予想を見て、${you.name} はエイシンフラッシュがわずかに眉を寄せるのを見た。`,
      );
      era.printButton('「嬉しくないのか？」', 1);
      await era.input();
      await flash.say_and_wait(
        'いいえ。嬉しくない、というより、正確には気持ちが少し複雑です。',
      );
      await flash.say_and_wait(
        '第一人気になった大きな理由は、ほかの出走メンバーがあまり評価されていないから、ですから……',
      );
      era.printButton('「言い換えれば、君への期待の証でもあるだろ？」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `${you.name} の言葉に、エイシンフラッシュは数秒黙った。それから、ゆっくりうなずいた。`,
      );
      await flash.say_and_wait(
        'おっしゃるとおりです。自分が優れていなければ、視線は集まりません。',
      );
      await flash.say_and_wait(
        'ですから、この期待を空振りさせないため、全力で応えなければなりません。',
      );
      await era.printAndWait(
        `そう言って、エイシンフラッシュの顔は真剣になった。${flash.sex}がファンの期待を重く見ているのが、${you.name} にはわかった。`,
      );
      await flash.say_and_wait('……それだけでなく、自分自身にも、応えたい。');
      await flash.say_and_wait(
        '京成杯と皐月賞は、同じコース、同じ距離です。つまり、このレースでさえ思うように走れなければ、この先の道は、もっと険しくなります。',
      );
      era.printButton('「人事を尽くして、己に恥じない。」', 1);
      await era.input();
      await flash.say_and_wait('はい！ そのとおりです。');
      await flash.say_and_wait(
        'すべてを最善まで尽くせば、得るべき結果は、自然と手に入ります。',
      );
      await flash.say_and_wait(`ふぅ……よし。行ってきます、${callname}。`);
      era.printButton('「頑張れ！」', 1);
      await era.input();
      await era.printAndWait(
        'そう言って、エイシンフラッシュは自信を持ってレース場へ向かった。',
      );
      await era.printAndWait(
        `${you.name} は${flash.sex}の背中を見て、少なくとも今回のレース、${flash.sex}の走りは見応えがあるはずだと思った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_13: (() => {
    const title = '突然の災い';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, callname, s_weak) => {
      await era.printAndWait(
        '京成杯で、エイシンフラッシュは見事な走りで自分の成績を残した。計画どおりなら、次は皐月賞だ。',
      );
      await flash.say_and_wait(`……${callname}。`);
      await era.printAndWait(
        '……そうなるはずだった。だが、レース一週間前、思わぬことが起きた。',
      );
      era.printButton('「熱か？」', 1);
      await era.input();
      await era.printAndWait(
        `学園の保健室で、${you.name} は病床のエイシンフラッシュを心配そうに見た。`,
      );
      await flash.say_and_wait('……はい。');
      await era.printAndWait(`${flash.sex}は、弱々しくうなずいた。`);
      await flash.say_and_wait(
        '昨夜18時に買い物へ出た際、出発前に天気予報の降水確率を信じすぎて傘を持たず、途中で急な大雨に打たれ、全身が濡れたことが原……けほっ、けほっ——。',
      );
      await era.printAndWait(
        'エイシンフラッシュの言葉は、激しい咳に遮られた。',
      );
      await era.printAndWait(
        `${flash.sex}の具合はかなり重い。それを見て、${you.name} は小さく息を吐いた。`,
      );
      era.printButton('「だったら……来週の皐月賞は、見送りにしようか？」', 1);
      await era.input();
      await era.printAndWait(
        `体の弱い病人は、しっかり休ませ、強い運動を避けるべきだ。${you.name} には、それがわかっている。`,
      );
      await flash.say_and_wait('！');
      await era.printAndWait('だがエイシンフラッシュは、そうは思っていない。');
      await flash.say_and_wait('いいえ！ 医師は、休めばすぐに回復すると！');
      await flash.say_and_wait(
        'それに皐月賞まで7日あります。時間は間に……けほっ、けほっ！',
      );
      era.printButton('「落ち着け、フラッシュ。」', 1);
      await era.input();
      await era.printAndWait(
        `急に熱くなり、起き上がりかけたエイシンフラッシュを見て、${you.name} は${flash.sex}を寝かせるように示した。`,
      );
      await flash.say_and_wait('……合います……');
      await flash.say_and_wait('…………');
      await era.printAndWait('エイシンフラッシュは黙ってベッドに戻った。');
      await era.printAndWait(
        `十数秒後、落ち着きを取り戻した${flash.sex}が、${you.name} のほうを向いた。`,
      );
      await flash.say_and_wait(
        `申し訳ありません、${callname}。取り乱しました。`,
      );
      era.printButton('「焦っても、何も解決しない。」', 1);
      await era.input();
      await flash.say_and_wait('……はい。おっしゃるとおりです。');
      await flash.say_and_wait(
        'ですが、立てた計画は崩せません。ですから、弱い身体でも、皐月賞には出なければなりません。',
      );
      era.printButton('「今の状態では、完璧には走れないだろう。」', 1);
      await era.input();
      await flash.say_and_wait(
        '……ですが、試みようともしなければ、本当にチャンスはゼロです。',
      );
      await era.printAndWait(
        `エイシンフラッシュは ${you.name} の言葉の含みを否定しなかった。それでも${flash.sex}は、出走を諦めなかった。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は何も言わず、今こちらを見つめている${flash.sex}の目を、きちんと見た。`,
      );
      await flash.say_and_wait(
        'ですから、お願いです。皐月賞への出走を、許してください。',
      );
      await flash.say_and_wait(
        'それは、夢を果たすために、私がやらなければならないことです。',
      );
      await era.printAndWait(
        `その視線から、${you.name} は折れない執念と、何としても目的を果たす意地を読んだ。`,
      );
      era.printButton('「……わかった。そのとき本当に問題なければ、行け。」', 1);
      await era.input();
      await era.printAndWait(
        `結局、${you.name} は小さく息を吐き、一歩引いた。`,
      );
      era.println();
      era.print([flash.get_colored_name(), ' は ', s_weak, ' になった！']);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = 'なすべきこと・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_keis_hai エイシンフラッシュが京成杯に勝ったか
     */
    const f = async (flash, you, callname, win_keis_hai) => {
      await era.printAndWait('クラシック三冠の第一戦——皐月賞が、ついに来た。');
      await you.say_as_passer_by_and_wait(
        '通行人A',
        '今回のレース、誰を応援する？',
      );
      await you.say_as_passer_by_and_wait(
        `通行人B`,
        `うーん、最初はエイシンフラッシュを応援するつもりだった。京成杯の${flash.sex}の走りがよかったから。`,
      );
      await you.say_as_passer_by_and_wait(
        `通行人A`,
        `エイシンフラッシュか。でも数日前、かなり重い病気だったって聞いた。治ったとはいえ、この状態で出て、走りは大丈夫なのか？`,
      );
      await you.say_as_passer_by_and_wait(
        '通行人B',
        'そうそう、それが心配なんだ。皐月賞はG1の重賞だ。レースの圧力も相手の強さも、前の京成杯とは比べものにならない。',
      );
      await you.say_as_passer_by_and_wait(
        `通行人A`,
        `ああ、皐月賞は競争が激しすぎる。最も速い${flash.uma_sex_title}だけが勝つ、って言うし。」`,
      );
      await you.say_as_passer_by_and_wait(
        '通行人B',
        'だな。それに病み上がりだ。今のエイシンフラッシュが、本当に全力を出せるのか、疑ってしまう。」',
      );
      era.drawLine();
      if (win_keis_hai) {
        await era.printAndWait(
          `司会「次の選手をご紹介。今年の京成杯の優勝者、本レースの3番人気——エイシンフラッシュ！！」`,
        );
      } else {
        await era.printAndWait(
          `司会「次の選手をご紹介。今年の京成杯で好走した、本レースの3番人気——エイシンフラッシュ！！」`,
        );
      }
      await flash.say_and_wait('………');
      await flash.say_and_wait('ふぅ……');
      era.printButton('「フラッシュ？」', 1);
      await era.input();
      await era.printAndWait('皐月賞当日、選手控え室。');
      await era.printAndWait(
        `放送に反応せず、うつむいて考え込んでいるエイシンフラッシュを見て、${you.name} は少し不思議に思って声をかけた。`,
      );
      await flash.say_and_wait('あ。ご安心ください。大丈夫です。');
      await era.printAndWait(
        'そう言って、エイシンフラッシュは立ち上がり、首を振った。',
      );
      await flash.say_and_wait(
        '少し感慨深いだけです。京成杯ではよく走れたつもりでしたが、皐月賞の人気には、それがまったく反映されていませんね。',
      );
      era.printButton('「数日前の病気の影響だろう？」', 1);
      await era.input();
      await era.printAndWait(
        `なぜそうなったか、${you.name} にはわかっている。`,
      );
      await era.printAndWait(
        '先週、エイシンフラッシュは雨に打たれて冷え、かなり高い熱を出した。',
      );
      await era.printAndWait(
        `数日休んで${flash.sex}の身体は回復し、望みどおり出走できた。`,
      );
      await era.printAndWait(
        'それでも、病み上がりの弱さはまだ身体に残っている。',
      );
      await era.printAndWait(
        'この状態で皐月賞のエイシンフラッシュを本命にする人が減るのは、道理だ。',
      );
      era.printButton('「とにかく、自分のことをやればいい。」', 1);
      await era.input();
      await era.printAndWait(
        `目の前の人がこれに揺らがないか心配して、${you.name} はそう言った。`,
      );
      await flash.say_and_wait(
        '……はい。クラシック三冠への挑戦は、私が実行しなければならない計画です。',
      );
      await era.printAndWait(
        `${you.name} の言葉に、エイシンフラッシュは一瞬黙った。それから${flash.sex}は、ゆっくり拳を握った。`,
      );
      await flash.say_and_wait(
        '誰の支持があってもなくても、私は最後までやります。',
      );
      era.printButton('「……なすべきことをなし、尽くすべき力を尽くす。」', 1);
      await era.input();
      await era.printAndWait(
        `レースを重く見すぎるエイシンフラッシュの態度に、${you.name} はわずかに眉を寄せた。だが今の${flash.sex}には、悪いことばかりでもない。`,
      );
      await flash.say_and_wait(`はい！ それでは、行ってきます、${callname}。`);
      era.printButton('「気をつけて。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}に手を振り、無事を祈った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = 'なすべきこと・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '途中に波はあったが、クラシック三冠の一つ、皐月賞はここで幕を閉じた。',
      );
      await flash.say_and_wait(`ただいま戻りました、${callname}。`);
      await era.printAndWait(
        `エイシンフラッシュが無事にコースから戻ってきたのを見て、${you.name} はほっと息をついた。`,
      );
      era.printButton('「お疲れ。」', 1);
      await era.input();
      await flash.say_and_wait('はい。おおむね、計画どおりに走れました。');
      era.printButton('「見事なレースだった。」', 1);
      await era.input();
      await era.printAndWait(
        `病み上がりの身体でも、${flash.sex}の走りは十分に見応えがあった。それは疑いようもなく、立派だった。`,
      );
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait(
        `${you.name} の称賛に、エイシンフラッシュは小さく笑った。${flash.sex}の瞳には、熱い光が揺れている。`,
      );
      await flash.say_and_wait('次のレースは、日本ダービーですね。');
      await flash.say_and_wait(
        '今の状態を維持しなければなりません。さらなるトレーニングも、予定に載せます。',
      );
      await flash.say_and_wait(
        'レースの作戦と、出走馬のデータも、あらかじめ用意します。',
      );
      await flash.say_and_wait('それに……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `日本ダービーまでの未来を、細かく計画し始めたエイシンフラッシュを、${you.name} は見ていた。`,
      );
      era.printButton(
        '「日本ダービーは大事だ。だが準備の合間に、休みも取れ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `緩急の大事さを知る ${you.name} は、そう注意した。`,
      );
      era.drawLine();
      await flash.say_and_wait('日本ダービー……エイシンフラッシュ……評価……');
      await era.printAndWait(
        `トレセン学園へ戻る新幹線の中で、${you.name} はエイシンフラッシュがスマホの検索欄に、その三語を打ち込むのを見た。`,
      );
      era.printButton('「自分への評価を調べてるのか？」', 1);
      await era.input();
      await era.printAndWait(
        `少し考えて、${you.name} はエイシンフラッシュの意図を理解した。`,
      );
      await flash.say_and_wait(
        'はい。皐月賞のあと、人々の私への見方がどう変わったか、知りたくて。',
      );
      await era.printAndWait(
        'そう言ってエイシンフラッシュは、議論の盛んな掲示板を開いた。目に入った書き込みは——',
      );
      await you.say_as_passer_by_and_wait(
        'ネット民A',
        '皐月賞の走りは意外だったな。病み上がりだったのに。',
      );
      await you.say_as_passer_by_and_wait(
        `ネット民B`,
        `これで日本ダービーの${flash.sex}の走りが、ちょっと楽しみになった。`,
      );
      await you.say_as_passer_by_and_wait(
        `ネット民C`,
        `皐月賞より日本ダービーはさらに難しい。${flash.sex}がどんな成績を出すか、わからないな。`,
      );
      era.printButton('「みんな、お前に期待してるな。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} は微笑んで言った。`);
      await flash.say_and_wait(
        `ええ……私だけではありません。他の出走馬にも、掲示板の人たちは${flash.couple_title}それぞれに、応援の理由を持っています。`,
      );
      await flash.say_and_wait(
        'わかります。日本ダービーは、誰にとっても特別なレースでしょうから。',
      );
      await flash.say_and_wait('だから……');
      await era.printAndWait(
        `そこでエイシンフラッシュは深く息を吸った。${flash.sex}の目が、一瞬で強くなった。`,
      );
      await flash.say_and_wait('もっと努力しなければなりません。');
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await flash.say_and_wait('日本ダービーの優勝は、必ず——この手に！');
    };
    f.title = title;
    return f;
  })(),
  ws_47_16: (() => {
    const title = '経験の話・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, s_weak) => {
      await era.printAndWait('日本ダービーは、クラシック三冠の第二戦だ。');
      await era.printAndWait(
        '終わった皐月賞にくらべ、2400メートルを抱えるこちらは、難度が一段と厳しい。',
      );
      await era.printAndWait(
        'だからこそエイシンフラッシュの言うとおり、優勝には倍の努力が要る。',
      );
      await era.printAndWait('……だが……');
      era.printButton(
        '「すまない。そのトレーニング計画には、賛成できない。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('え、どうしてですか？');
      await era.printAndWait(
        `皐月賞の三日後、エイシンフラッシュは書き換えた計画表を ${you.name} に渡した。`,
      );
      await era.printAndWait(
        `${you.name} は丁寧に目を通した。びっしり詰まった文字から、「高強度」の四字が浮かび上がる。`,
      );
      era.printButton(
        '「日本ダービーが大事なのはわかっている。だが、無茶の理由にはならない。」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} は短く意見を言った。`);
      await era.printAndWait(
        'だがエイシンフラッシュは、それを聞いて首を振った。',
      );
      await flash.say_and_wait(
        'いえ、誤解です。無茶ではありません。量質転化の理論から導いた結果です。',
      );
      era.printButton('「量質転化？」', 1);
      await era.input();
      await flash.say_and_wait('はい。');
      await era.printAndWait(
        `エイシンフラッシュは一本指を立て、${you.name} に説明した。`,
      );
      await flash.say_and_wait(
        '今日から日本ダービーの開幕まで、残り三十九日です。',
      );
      await flash.say_and_wait(
        '普通なら、一ヶ月半にも満たない期間で能力を上げ、レースでよりよく走るのは、ほぼ不可能です。',
      );
      await flash.say_and_wait(
        'そこで何度も考えた末、偏った解決を思いつきました。短期でトレーニング量を大きく増やし、成長に必要な時間を圧縮する、というものです。',
      );
      await flash.say_and_wait(
        `そのために、高強度トレーニングで知られるミホノブルボンさんに尋ね、${flash.sex}の助言で、今お見せしている計画を組みました。`,
      );
      era.printButton(
        '「……つまり、身体の潜在能力を限界まで搾るためのやり方か？」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの言葉に、${you.name} は考え込んだ。`,
      );
      await era.printAndWait(
        `たしかに、${
          flash.sex
        }の言う方法は ${you.name} も聞いたことがある。一部の${flash.uma_sex_title}には、奇効が出た例もある。`,
      );
      await era.printAndWait(
        `だが体質は人それぞれだ。${you.name} には、それがエイシンフラッシュにも効くかわからない。`,
      );
      await era.printAndWait(
        `${flash.sex}が怪我をする高い確率を、未知の可能性のために賭けることになる。`,
      );
      await era.printAndWait(
        `トレーナーとして、${you.name} はそれを絶対に受け入れられない。`,
      );
      era.printButton('「ほかのやり方を、先に試さないか？」', 1);
      await era.input();
      await era.printAndWait(
        `だから ${you.name} は、遠回しに自分の見方を述べた。`,
      );
      await flash.say_and_wait(
        'ですが、それ以外に、準備期間内で自分の能力をより有効に上げる方法はありません！',
      );
      await era.printAndWait(
        `${you.name} が${flash.sex}の提案を否定したのを見て、エイシンフラッシュの声に、珍しく焦りが混じった。`,
      );
      await flash.say_and_wait(
        '信じてください。ミホノブルボンさんと、よく考えた結果です。トレーニング中のリスクも、途中で起こりうる場面も、織り込み済みです。',
      );
      await flash.say_and_wait(
        '私の夢のため、両親に誇ってもらうため、日本ダービーに勝たなければなりません。この栄誉を、手にしなければなりません。',
      );
      await flash.say_and_wait('ですから——');
      era.printButton(
        '「だが俺が気にするのは、その過程でお前の身体が受ける傷だ。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('！');
      era.printButton(
        '「それに両親も、子供がそんなやり方で自分を証明するのを望まないだろう？」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `意外だった。エイシンフラッシュは ${you.name} の言葉を聞いて、驚き、揺らいだように見えた。`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('…………');
      await flash.say_and_wait('……そう、ですか……');
      await era.printAndWait(`${flash.sex}は黙り込んだ。`);
      await era.printAndWait(
        `${you.name} には、エイシンフラッシュの内心はわからない。だが今、${flash.sex}が ${you.name} を見つめる碧い瞳の中で、${you.name} には理解しきれない、複雑な感情が揺れていることだけは確かだった。`,
      );
      await flash.say_and_wait('……わかりました。');
      await era.printAndWait(
        '張りつめた空気が、少し緩む。数秒後、エイシンフラッシュは視線を外した。',
      );
      await flash.say_and_wait('考えが足りませんでした。申し訳ありません。');
      await era.printAndWait(
        `それから${flash.sex}は ${you.name} に深くお辞儀をした。立ち上がると、二人の争いの種になった計画表は、また${flash.sex}の手元に戻っていた。`,
      );
      await flash.say_and_wait('戻って、もう一度よく考えさせてください。');
      if (era.get('status:37:虚弱') > 0) {
        await era.printAndWait(
          `皐月賞前のあの言い合いと違い、今度は${flash.sex}のほうから一歩引いた。`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          ' はもう ',
          s_weak,
          ' ではなくなった！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '経験の話・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname_17 シンボリルドルフのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_57 ミスターシービーのプレイヤーへの呼び方
     */
    const f = async (flash, luna, mr_cb, you, callname_17, callname_57) => {
      await luna.say_and_wait([
        'つまり、それが私を訪ねた理由ですか、',
        callname_17,
        '。',
      ]);
      await era.printAndWait(
        `エイシンフラッシュに高強度の計画を諦めさせることには成功した。だが同時に、${you.name} は日本ダービーが${flash.sex}にとってどれほど大事かも知っている。`,
      );
      await era.printAndWait(
        `${you.name} は自分のやり方で${flash.sex}を助けると決めた。よく考えた末、${you.name} はここに来た。`,
      );
      era.printButton(
        '「ああ。エイシンフラッシュと模擬レースをしてほしい。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `トレセン学園・生徒会室。『皇帝』${luna.name} は穏やかな顔で ${you.name} を見ていた。`,
      );
      await luna.say_and_wait(
        `意外な頼みですね。私と走りたい${flash.uma_sex_title}は多い。だが、私が走ることを求めるトレーナーは珍しい。`,
      );
      era.printButton(`「${flash.sex}には、あなたの力が要る。」`, 1);
      await era.input();
      await luna.say_and_wait('ほう？');
      await era.printAndWait(
        `${you.name} の言葉に、${luna.name} の顔に興味が浮かんだ。`,
      );
      await luna.say_and_wait(
        'それはどういう意味でしょう。確かエイシンフラッシュは、今年の日本ダービーに備えているはずです。',
      );
      era.printButton('「具体的には……」', 1);
      await era.input();
      await era.printAndWait(
        '日本ダービーに勝つには、自分の能力を上げる以外にも、もう一本の道がある。',
      );
      await era.printAndWait(
        `その領域の、より強い者と戦うこと。その過程で${flash.couple_title}の力を肌で知り、経験を得て、次のレースの臨機応変に活かす。`,
      );
      await era.printAndWait(
        `理論を実戦に落とせば、こうなる——エイシンフラッシュは普段どおりの強度で日常トレーニングを続けつつ、ふさわしい相手と${flash.sex}で模擬レースをする。`,
      );
      await luna.say_and_wait('はっはっは。');
      await era.printAndWait(
        `${you.name} の考えを聞き終えると、${luna.name} は大笑した。`,
      );
      await luna.say_and_wait('なるほど。面白い考えです。');
      await luna.say_and_wait(
        'この『無敗三冠』から、日本ダービーの経験を得ようというのですか。大胆不敵な試みですね。',
      );
      era.printButton(`「${flash.sex}には、それが必要だからだ。」`, 1);
      await era.input();
      await luna.say_and_wait('ふむ………');
      await era.printAndWait(
        `${luna.name} は小さく唸り、${flash.sex}の指が机を軽く叩いた。何かを考えているようだった。`,
      );
      await luna.say_and_wait('わかりました。');
      await era.printAndWait(
        `しばらくして、再び口を開いた${flash.sex}は、わかったという微笑を浮かべた。`,
      );
      await luna.say_and_wait([
        callname_17,
        '、担当',
        flash.uma_sex_title,
        'への思いは、十分に伝わっています。ですから私からも、一つ提案を。',
      ]);
      era.printButton('「提案？」', 1);
      await era.input();
      await luna.say_and_wait(
        `私が相手を務めるのも、不可能ではありません。ですが私より、エイシンフラッシュ${flash.sex}には、もう一色、鮮やかな相手が要るかもしれません。`,
      );
      await luna.say_and_wait('一筋の……自由な風を。');
      era.drawLine();
      await era.printAndWait([
        'そのあと、',
        you.name,
        ' は ',
        luna.get_colored_name(),
        ' の指示どおり、重賞を終えたばかりの競馬場へ向かった。',
      ]);
      await era.printAndWait(`そこで ${you.name} は出会った……`);
      await mr_cb.say_as_unknown_and_wait(
        'はぁ～、今日のレースは最高だった。こんなに自由な空気、心が抑えきれない。',
      );
      era.printButton('「あなたは……」', 1);
      await era.input();
      await mr_cb.say_as_unknown_and_wait(
        '足音、呼吸、応援……感じたいものが、全部ここに集まっている。',
      );
      await mr_cb.say_as_unknown_and_wait([
        'そっちは？ 何しに来たんだ、',
        callname_57,
        '。',
      ]);
      await era.printAndWait(
        `そう言って、すらりとした身体から芝のような爽やかさを漂わせる${flash.uma_sex_title}が振り返り、${you.name} に微笑んだ。`,
      );
      era.printButton('「……ミスターシービー。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} の前に立っていたのは、魅せる走りで三冠の名を得た${flash.uma_sex_title}——ミスターシービーだった。`,
      );
      await mr_cb.say_and_wait('まあ、細かい話はもう聞いてるよ。');
      await mr_cb.say_and_wait(
        `要するに、ダービーに出る${flash.uma_sex_title}と併走してほしい、ってことだろ？`,
      );
      era.printButton('「ああ。」', 1);
      await era.input();
      await mr_cb.say_and_wait('はは、いいよ。');
      await era.printAndWait(
        'ミスターシービーはあっさりうなずいた。迷いがない。',
      );
      era.printButton('「……もう少し考えなくていいのか？」', 1);
      await era.input();
      await mr_cb.say_and_wait('いい。面白そうだから。');
      await mr_cb.say_and_wait('楽しいなら、何度でも付き合うよ。');
      era.printButton('「ありがとう！」', 1);
      await era.input();
      await era.printAndWait(
        `こうしてエイシンフラッシュの模擬レースの相手は決まった。三冠の${flash.uma_sex_title}、ミスターシービー本人だ。`,
      );
      await era.printAndWait('あとは、日時を決めるだけだ。');
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = '経験の話・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, mr_cb, you) => {
      await flash.say_and_wait(`三冠の${mr_cb.uma_sex_title}、ですか……`);
      await flash.say_and_wait(
        'いえ、怖くはありません。おっしゃるとおり、得難い機会です。掴まなければなりません。',
      );
      await flash.say_and_wait('それに……より強い者との対決、私も楽しみです。');
      era.drawLine({ content: '約束の日' });
      await era.printAndWait(
        `${you.name} とエイシンフラッシュは、トレセン学園のグラウンドへ向かった。`,
      );
      await mr_cb.say_and_wait('準備できたら、始めようか。');
      await flash.say_and_wait(
        'はい。よろしくお願いいたします、シービーさん。',
      );
      await era.printAndWait(
        'ミスターシービーは、とうに待っていた様子だった。',
      );
      await era.printAndWait(
        `それを見て、${you.name} はエイシンフラッシュの肩を励ますように叩いた。`,
      );
      era.printButton('「行ってこい！」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await mr_cb.say_and_wait(
        `ふふっ。いいね。三冠の${mr_cb.uma_sex_title}なんて肩書き、全然気にしてない。`,
      );
      await era.printAndWait(
        'エイシンフラッシュの、退かない落ち着いた様子に、ミスターシービーは感心してうなずいた。',
      );
      await mr_cb.say_and_wait('楽しいレースになりそうだ。手は抜かないよ。');
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} mr_cb ミスターシービー
   * @param {CharaTalk} you プレイヤー
   * @param {number} rank エイシンフラッシュの模擬レース着順
   */
  async ws_47_18_end(flash, mr_cb, you, rank) {
    await era.printAndWait([
      mr_cb.get_colored_name(),
      ' は',
      flash.uma_sex_title,
      'という仕事で名高い先輩だ。実力も経験も、三冠の王である',
      flash.sex,
      'は、疑いなく ',
      flash.get_colored_name(),
      ' を全方位で上回っている。',
    ]);
    if (rank === 1) {
      await era.printAndWait(
        'だがレースの勝ちは、そんな表面の要素だけでは決まらない。',
      );
      await flash.say_and_wait('ふぅ……私……勝ちました？');
      era.printButton('「よくやった！」', 1);
      await era.input();
      await era.printAndWait([
        'レースの途中、',
        flash.get_colored_name(),
        ' は強い勝ちへの執念を見せた。',
        mr_cb.get_colored_name(),
        ' に詰められ、絡まれ、何度か交わされても、',
        flash.sex,
        'は諦めずに攻めを組み直し、その粘りが、望み薄に見えた結果を書き換え、勝利を手にした。',
      ]);
      await mr_cb.say_and_wait('はっはっは、本当に面白かった。');
      await era.printAndWait([
        mr_cb.get_colored_name(),
        ' は大笑した。負けたのに、',
        mr_cb.sex,
        'は前より興奮しているように見えた。',
      ]);
    } else {
      await era.printAndWait(
        `だから後者の敗戦は、最初から ${you.name} の想定内だった。`,
      );
      await flash.say_and_wait('ふぅ……私の負けです。');
      era.printButton('「お疲れ。」', 1);
      await era.input();
      await era.printAndWait([
        'それでも、途中で ',
        mr_cb.get_colored_name(),
        ' に交わされたあと、',
        flash.get_colored_name(),
        ' は最後まで追い続け、勝利を自分の手に戻そうとした。その粘りに、',
        you.name,
        ' は胸を打たれた。',
      ]);
      await mr_cb.say_and_wait('ははは。');
      await era.printAndWait(`おそらく、${you.name} だけではない。`);
    }
    await mr_cb.say_and_wait('勝ちたい気持ち、かなり強いね。');
    await mr_cb.say_and_wait(
      `こっちまで伝わってきた……やっぱりエイシンフラッシュ、君は楽しいよ。`,
    );
    await flash.say_and_wait('楽しい……ですか。');
    await flash.say_and_wait(
      '……とにかく、本日はありがとうございました、シービーさん。',
    );
    await era.printAndWait(
      `エイシンフラッシュは何度か息を整え、${flash.sex}は目の前のミスターシービーにうなずいて礼を述べた。`,
    );
    await mr_cb.say_and_wait(`ねえ、どうしてそんなに勝ちを欲しがるの？`);
    await flash.say_and_wait('え。');
    await era.printAndWait(
      `次の瞬間、いきなりの問いが${flash.sex}を少し驚かせた。`,
    );
    await flash.say_and_wait(
      'なぜなら……勝利を目的としないレースに、意味はありません。',
    );
    await mr_cb.say_and_wait('それ以外は？');
    await flash.say_and_wait('それ以外、ですか？');
    await mr_cb.say_and_wait(`走るのは好き？ 君にとって、走る意味は何？`);
    await flash.say_and_wait('…………');
    await era.printAndWait(
      'ミスターシービーの言葉に、エイシンフラッシュは黙った。',
    );
    await flash.say_and_wait(
      '……申し訳ありません。シービーさんのその問いの意味が、私にはわかりません。',
    );
    await era.printAndWait(`しばらくして、${flash.sex}は首を振った。`);
    await flash.say_and_wait(
      '私にとって、走ることは走ることです。目的を果たす手段であり、必要な行為です。',
    );
    await flash.say_and_wait(
      'そこに余計な感情を乗せる必要はありません。私は勝つだけです。勝ち続けて、すべてが終わる日まで。',
    );
    await mr_cb.say_and_wait(
      `じゃあ日本ダービーは？ ダービーの${flash.uma_sex_title}になりたいのに、日本ダービーには特別な感情がないの？`,
    );
    await flash.say_and_wait('はい。');
    await mr_cb.say_and_wait('勝つために勝つだけか。つまらないね。');
    await era.printAndWait('ミスターシービーは肩をすくめた。');
    await mr_cb.say_and_wait(
      'そんな考えに縛られていたら、ちっとも自由じゃない。',
    );
    await flash.say_and_wait('……自由、ですか？');
    await mr_cb.say_and_wait(
      '日本ダービーに勝つコツは、勝つことだけを考えないことだよ。',
    );
    await flash.say_and_wait('え？');
    await mr_cb.say_and_wait(
      'ただ勝つより大事な感情を見つけて、それを力にする。',
    );
    await mr_cb.say_and_wait(
      '走って、また走る。限界も、相手も、運も、全部超えるまで。',
    );
    await flash.say_and_wait('………');
    await mr_cb.say_and_wait('わかる？');
    await flash.say_and_wait('……私は……');
    await mr_cb.say_and_wait('まあ、わからなくてもいい。');
    await era.printAndWait(
      '眉を寄せて考えるエイシンフラッシュを見て、ミスターシービーは微笑んだ。',
    );
    await mr_cb.say_and_wait(
      `よく考えて。あとは自分だ。一生に一度の日本ダービーで、何を悟るか。`,
    );
    await mr_cb.say_and_wait(
      'あ、でもまた相手が欲しくなったら、いつでも付き合うよ。',
    );
    await mr_cb.say_and_wait(
      '最初に言ったとおり、楽しいことなら何度でも大丈夫。',
    );
    era.printButton('「ありがとうございました、シービーさん。」', 1);
    await era.input();
    era.drawLine();
    await flash.say_and_wait('本日は、ありがとうございました。');
    await era.printAndWait(
      `ミスターシービーと別れたあと、エイシンフラッシュは急に振り返り、${you.name} に礼を言った。`,
    );
    era.printButton('「それが俺の仕事だ。」', 1);
    await era.input();
    await flash.say_and_wait('だからこそ、なおさら礼を述べるべきです。');
    await era.printAndWait(
      'エイシンフラッシュは首を振り、少し感慨のこもった声だった。',
    );
    await flash.say_and_wait(
      'シービーさんとの走りで、新しいものにたくさん触れました。',
    );
    await flash.say_and_wait(
      `……${flash.sex}の最後の言葉の具体的な意味は、まだよくわかりません。`,
    );
    await flash.say_and_wait(
      'ですが、わかっている分だけでも、しばらく消化して学ぶのに十分です。',
    );
    await era.printAndWait(
      `そう言って、${flash.sex}は手を胸に当て、${you.name} に優しい笑みを向けた。`,
    );
    await flash.say_and_wait(
      'ご助力がなければ、私ひとりでは、このようなトレーニング案には至らなかったでしょう。',
    );
    era.printButton('「それが、俺がいる意味だ。」', 1);
    await era.input();
    await flash.say_and_wait('！');
    await flash.say_and_wait(
      '……おっしゃるとおりです。私の誤りを指摘し、正しい道へ導いてくださる方。',
    );
    await flash.say_and_wait(
      'あなたと、本日のシービーさんには、ずいぶん助けていただきました。',
    );
    await flash.say_and_wait('ですから——');
    await era.printAndWait(
      `${you.name} はエイシンフラッシュが急に拳を握るのを見た。${flash.sex}の目に、揺がない意志が光っている。`,
    );
    await flash.say_and_wait(
      '日本ダービーに勝たなければなりません。皆さまへの報いとして。',
    );
  },
  before_toky_yus: (() => {
    const title = 'なすべきこと・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'クラシック三冠の第二戦——日本ダービーが、今日、幕を開けた。',
      );
      await flash.say_and_wait('それでは、私は出……');
      await era.printAndWait('「プルル。」');
      await flash.say_and_wait('え。');
      await era.printAndWait(
        '選手控え室。レース前の最終準備を終え、コースへ向かおうとしたエイシンフラッシュが、スマホの通知音に目を止めた。',
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait('あ、いえ、なんでもありません。');
      await era.printAndWait(
        `後ろのポケットからスマホを出し、画面を数秒見つめた${flash.sex}の顔に、安堵が浮かんだ。`,
      );
      await flash.say_and_wait('母からのメッセージです。');
      await flash.say_and_wait(
        `『自分の${
          flash.sex_code - 1 ? '娘' : '息子'
        }が日本ダービーに出るなんて、思ってもみなかった。』`,
      );
      await flash.say_and_wait(
        '『あなたが納得できる結果を残してほしい。パパと私は、こちらで応援している。』',
      );
      era.printButton('「ご両親からの祝福だな。」', 1);
      await era.input();
      await flash.say_and_wait('期待、ですね。');
      await era.printAndWait(
        'そう言って、エイシンフラッシュはスマホをしまった。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `海の向こうの両親の思いを受けた${flash.sex}に、わずかな変化が生まれた。`,
      );
      await flash.say_and_wait('ただ勝つより大事な感情を見つける……ですか。');
      era.printButton('「……フラッシュ？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}のつぶやきを聞き、何かあったのか尋ねようとした。`,
      );
      await flash.say_and_wait('ふぅ……');
      await flash.say_and_wait(`${callname}！`);
      era.printButton('「ん。」', 1);
      await era.input();
      await era.printAndWait(
        `向き合ったのは、${flash.sex}の揺がない目だった。`,
      );
      await flash.say_and_wait('私は、このレースに勝てますね？');
      era.printButton('「ずっと、そう信じている。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(
        `${you.name} の言葉に、エイシンフラッシュはうなずき、自信の笑みが${flash.sex}の頬に浮かんだ。`,
      );
      await flash.say_and_wait('それでは、行ってきます。');
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = 'なすべきこと・四';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('観客', 'おおおおお——！！！');
      await you.say_as_passer_by_and_wait(
        '実況',
        'エイシンフラッシュ——ゴール！！！',
      );
      await you.say_as_passer_by_and_wait(
        '実況',
        'まさかの結果です！ 今回の日本ダービーの優勝は——エイシンフラッシュ！！！',
      );
      await you.say_as_passer_by_and_wait(`実況`, `${flash.sex}に、拍手を！」`);
      await flash.say_and_wait('はあ……はあ……');
      await flash.say_and_wait('私……勝ちました？');
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `おめでとう、エイシンフラッシュ！ 応援してよかった！`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `ファンB`,
        `ダービー${flash.uma_sex_title}エイシンフラッシュ！ 今日は忘れない。`,
      );
      await flash.say_and_wait('みなさん……');
      era.printButton('「おめでとう、フラッシュ。」', 1);
      await era.input();
      await flash.say_and_wait(
        `${callname}……はい！ 日本ダービー、勝ちました！`,
      );
      era.printButton('「すごい実績だ。」', 1);
      await era.input();
      await flash.say_and_wait(
        '両親の期待も、あなたの期待も、裏切りませんでした。やりました！',
      );
      await era.printAndWait(
        `エイシンフラッシュの顔に、晴れやかな笑みが広がった。今の${flash.sex}は、勝利の喜びに浸っている。`,
      );
      await era.printAndWait('「プルル。」');
      await era.printAndWait(
        `そしてタイミングよく、スマホの通知音が${flash.sex}の耳に届いた。`,
      );
      await flash.say_and_wait('新しいメッセージ、ですか？');
      await era.printAndWait(
        'エイシンフラッシュがスマホを出すと、目に入ったのは——',
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `一位おめでとう、フラッシュ。日本ダービーの走りはとても super、toll、klasse。`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `勝ったと知って、パパはケーキ屋さんの中を行ったり来たりして喜んでいる。`,
      );
      await flash.say_and_wait('父が……ふふふ。');
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `正直、抱きしめて褒めたい。今回の優勝は簡単ではない。ここ数年の努力の縮図であり、進歩の証よ。`,
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `これからも、勝利から来るこの喜びが、あなたのそばにありますように。」`,
      );
      await flash.say_and_wait('母……');
      era.printButton('「ご両親も喜んでいるな。」', 1);
      await era.input();
      await flash.say_and_wait('……はい！');
      await era.printAndWait('喜びを伝えるメッセージは、ここで終わった。');
      await era.printAndWait(
        '両親の祝福を受けたエイシンフラッシュは、今、とても前向きだった。',
      );
      await flash.say_and_wait(
        '日本ダービーに勝った喜びは、人を酔わせやすいものです。ですが客観的に見れば、これも生涯の一段階にすぎません。',
      );
      await flash.say_and_wait(
        `ですから遅滞なく、次の計画を相談しましょう、${callname}！`,
      );
      await flash.say_and_wait('一緒に———菊花賞へ、進みましょう。');
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = '二者択一・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_toky_yus エイシンフラッシュが日本ダービーに勝ったか
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, win_toky_yus, s_distracted) => {
      await flash.say_and_wait('………');
      await flash.say_and_wait('………');
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await flash.say_and_wait(
        `……申し訳ありません、${callname}。ですが、私はどうしても受け入れられません。`,
      );
      await flash.say_and_wait('菊花賞の出走予定を取り消す、ということです。');
      era.drawLine();
      if (win_toky_yus) {
        await era.printAndWait(
          '先週、エイシンフラッシュは日本ダービーで立派な成績を残した。',
        );
        await era.printAndWait(
          `喜びの中で${flash.sex}は決めた。菊花賞で日本ダービーの輝きを継ぎ、衆目の優勝を手にする、と。`,
        );
        await era.printAndWait('だが……');
      }
      await era.printAndWait(
        `何事も順風満帆とはいかない。怪我と病は、${flash.uma_sex_title}から切り離せない話題だ。`,
      );
      await you.say_as_passer_by_and_wait(
        '医師',
        '痛みの原因は、脚の筋肉に疲労が溜まりすぎたことです。悪化を防ぐため、しばらくはしっかり休んでください。',
      );
      await era.printAndWait(
        '発端は、日本ダービーの翌日のトレーニングで、エイシンフラッシュが脚に妙な痛みがあると告げたことだった。',
      );
      await era.printAndWait(
        `不安になった ${you.name} は${flash.sex}を病院へ連れていき、そこで病名を知った。`,
      );
      await flash.say_and_wait(
        'それでも、菊花賞までに治る確率は、かなり高いはずです。',
      );
      await era.printAndWait(
        'だがエイシンフラッシュ本人は、この状況を受け入れようとしなかった。',
      );
      await era.printAndWait(
        `${you.name} が『菊花賞に勝つには高強度のトレーニングが要る。今それをすれば、身体はさらに悪くなる』と説明しても。`,
      );
      await era.printAndWait(`${flash.sex}はなお、出走にこだわった。`);
      era.printButton('「……とにかく、しばらくは体を休めろ。」', 1);
      await era.input();
      await era.printAndWait(
        `最終的に、${flash.sex}が悩まず静かに養生できるよう、${you.name} は一つ約束した。`,
      );
      era.printButton('「それまでに治れば、出走させる。」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await flash.say_and_wait('……わかりました……');
      await era.printAndWait(
        `これ以上争っても意味がないのは、わかっていたのだろう。${you.name} の言葉を聞いて、エイシンフラッシュは沈んだ顔でうなずいただけだった。`,
      );
      await flash.say_and_wait('では……まずは菊花賞を、計画から外しましょう。');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `悔しさを顔に残した${flash.sex}を見て、${you.name} はこれからの${flash.sex}の調子を心配した。`,
      );
      era.println();
      era.print([
        flash.get_colored_name(),
        ' は ',
        s_distracted,
        ' になった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_23: (() => {
    const title = '二者択一・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '菊花賞を目標から外してから、すでに一週間が過ぎた。',
      );
      await era.printAndWait(
        `${you.name} の予想どおり、このあいだエイシンフラッシュの調子は、以前よりかなり落ちていた。`,
      );
      await flash.say_and_wait('……あ。');
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(
        '控え室で、ノートを出して数日先の予定を確認していたエイシンフラッシュが、小さく声を漏らした。',
      );
      await flash.say_and_wait('……いえ、なんでもありません。');
      await flash.say_and_wait(
        'もともとの計画どおりなら、これから長距離を攻略するトレーニング段階に入るはずでした。',
      );
      await flash.say_and_wait(
        '……ですが……やはり悔しいです。菊花賞まで、あと一歩だったのに。',
      );
      await era.printAndWait(
        `${you.name} にはわかった。その言葉のエイシンフラッシュは、少し沈んでいた。`,
      );
      era.printButton('「しばらくは、調整した計画どおりに行こう。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}の迷いを理解できる。だが今は養生の大事な時期だ。身体を守ることが最優先である。`,
      );
      await flash.say_and_wait('はい……');
      await era.printAndWait(
        `……だが、${flash.sex}の沈んだ顔を見ると、${you.name} にもわかっていた。このまま悩み続けても答えにはならない。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。エイシンフラッシュはとても執念深い子だ。それは多くの場合、良いことだ。`,
      );
      await era.printAndWait(
        `だが自分でもどうしていいかわからない場面では、その性質がかえって${flash.sex}を袋小路へ追い込む。`,
      );
      await era.printAndWait(
        'そこから出るなら、もともとの軌跡を歩く——つまり菊花賞に出るか。',
      );
      await era.printAndWait(
        `あるいは、その軌跡から降りる——つまり……${flash.sex}に、菊花賞へ出られないことを認めさせるか。`,
      );
      await flash.used_to_say_and_wait(
        'それは、夢を叶えるために、私がしなければならないことです。',
      );
      await era.printAndWait(
        '（医師「悪化を防ぐため、しばらくはしっかり休んでください。」）',
      );
      await era.printAndWait('……正直、どちらも簡単ではない。');
      era.printButton('（どうすればいい。）', 1);
      await era.input();
      await era.printAndWait(`${you.name} は眉を寄せて考えた。`);
      await era.printAndWait(
        `トレーナーとして、${flash.sex}が夢のために流した汗と執念を、${you.name} より知る者はいない。`,
      );
      await era.printAndWait(
        `だから ${you.name} は、${flash.sex}に夢を叶えさせたいと、心から思う。`,
      );
      await era.printAndWait(
        `だが、トレーナーだからこそ、${you.name} は${flash.sex}に危険な行為を続けさせられない。`,
      );
      await era.printAndWait(
        '短い目標より、無事に最後まで走ることのほうが大事だ。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `二つの思いが頭の中でぶつかり、${you.name} の内側に、晴れない霧が立ち込めた。`,
      );
      await era.printAndWait(
        `${you.name} はわかっていた。局面を開く手が要る。`,
      );
      await era.printAndWait(
        `${you.name} が決めきれないと、エイシンフラッシュの立場はさらに苦しくなる。`,
      );
      await flash.used_to_say_and_wait(
        '……おっしゃるとおりです。私の誤りを指摘し、正しい道へ導いてくださる方。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `迷ううちに、${you.name} は思い出した。エイシンフラッシュがミスターシービーと走ったあと、${you.name} に言った言葉を。`,
      );
      await era.printAndWait(
        `${flash.sex}は信じている。${you.name} は${
          flash.sex
        }の${flash.uma_sex_title}としての道の、導き手だと。`,
      );
      await era.printAndWait(
        `事実、${flash.sex}は ${you.name} の指示のほとんどを、異論なく実行してきた。`,
      );
      await era.printAndWait(
        `では ${you.name} のほうは、今になって、${flash.sex}を信じられるか。`,
      );
      era.printButton('「………ふぅ。」', 1);
      await era.input();
      await era.printAndWait(
        `そこまで考えて、${you.name} はポケットに手を入れ、銅の勲章を取り出した。`,
      );
      await era.printAndWait('銀メッキの表面が、陽の光で光っている。');
      await flash.used_to_say_and_wait(
        'ご助力、ありがとうございました。どうかこれを、私からのお礼として受け取ってください。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `出会ったときの記憶が戻ってくる。${you.name} はそれを、長く見つめた。`,
      );
      await era.printAndWait(
        `最後に ${you.name} は振り返り、傍らで計画書に沈思するエイシンフラッシュを見た。`,
      );
      era.printButton('（最初から、争う話ではなかったな。）', 1);
      await era.input();
      await era.printAndWait(
        `次の瞬間、${you.name} は小さく笑って首を振った。`,
      );
      await era.printAndWait(
        `${you.name} は、答えはもう見つかったと思った。あとは、機を待つだけだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '胸の内・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '合宿とは、トレセン学園が主催し、実力向上を目的に、海辺で行う夏だけの行事だ。',
      );
      await flash.say_and_wait(
        'これが日本の海ですか。ドイツのほうとは、やはりかなり違いますね。',
      );
      await era.printAndWait(
        '月初、学園の専用バスを降り、眼前の青に、エイシンフラッシュは感嘆した。',
      );
      era.printButton('「遊びに行きたいか？」', 1);
      await era.input();
      await flash.say_and_wait('え、結構です。');
      await era.printAndWait(
        `だが次の瞬間、${you.name} の提案を聞くと、${flash.sex}は首を振った。`,
      );
      await flash.say_and_wait(
        '心は動きますが、今はトレーニングを最優先にしなければなりません。',
      );
      await era.printAndWait(
        'そう言ってエイシンフラッシュはうつむき、自分の脚を見た。',
      );
      await flash.say_and_wait(
        '菊花賞の開幕は目前です。勝つために、機会を一つも逃せません。',
      );
      await era.printAndWait(
        `これまでの養生で、${flash.sex}の症状は最初にくらべ、かなり和らいでいた。`,
      );
      await era.printAndWait(
        'そのおかげで、エイシンフラッシュの気持ちも明るくなっていた。',
      );
      await era.printAndWait(
        `計画が崩れないと踏んだ${flash.sex}は、また菊花賞を目標に据えようとしていた。`,
      );
      era.printButton('「それについてだ。」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}のその熱を見て、${you.name} は思った。そろそろ、だ。`,
      );
      era.printButton('「話がある。」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `トレーナーの目から見ると、今のエイシンフラッシュの状態は、${you.name} にとって少し厄介だった。`,
      );
      await era.printAndWait(
        `表向き、${flash.sex}の回復は動かぬ事実だ。${you.name} も、${flash.sex}がコースを思うまま走る姿は見たい。`,
      );
      await flash.say_and_wait('菊花賞のこと、ですか？');
      era.printButton('「ああ。」', 1);
      await era.input();
      await era.printAndWait(
        `だが慎重に考えれば、筋肉に根を張った疲れは、そう簡単には消えない。${you.name} は、レースに備え高強度のトレーニングを続けるうち、痛みが再発しないと保証できない。`,
      );
      await flash.say_and_wait(
        '……あの日、約束してくださいました。菊花賞までに回復すれば、出走を認める、と。',
      );
      era.printButton('「そうだ。」', 1);
      await era.input();
      await era.printAndWait(
        `言い換えれば、${you.name} の目には、菊花賞を外し、目標をその先のジャパンカップか有馬記念に移し、空いた期間で身体の火種を徹底的に消すのが最善だった。`,
      );
      await flash.say_and_wait('でしたら、今こそ優位を積むときです。');
      await era.printAndWait(
        `合宿の宿で、${you.name} が次に言うことを察したのか、エイシンフラッシュの態度は固かった。`,
      );
      era.printButton('「誤解するな。止めに来たわけじゃない。」', 1);
      await era.input();
      await flash.say_and_wait('え。');
      await era.printAndWait(`だが今回、${flash.sex}の読みは外れた。`);
      era.printButton(
        '「認める。菊花賞に出すかどうかは、俺にとって二者択一だ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `このあと ${you.name} は、${flash.sex}に自分の苦しさを話した。感性と理性のあいだで、${flash.sex}に夢を叶えさせたいのに、その過程で${flash.sex}が傷つくのは見たくない、という矛盾を。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `疑いなく、エイシンフラッシュは賢い子だ。${flash.sex}は ${you.name} の立場を理解できる。${you.name} が${flash.sex}を理解できるように。`,
      );
      era.printButton(
        '「身体の状態を知ってから、ずっと迷っていた。だが、その迷いこそが最大の誤りだったのかもしれない。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `そこで ${you.name} は手を伸ばし、出会いを表すその勲章を${flash.sex}の目の前に差し出した。`,
      );
      await flash.say_and_wait(`${callname}……`);
      await era.printAndWait(
        `エイシンフラッシュはうつむいて勲章を見、また顔を上げて ${you.name} を見た。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(`${flash.sex}は口を開きかけ、言葉を呑んだ。`);
      era.printButton('「俺が決められないなら、お前に決めさせよう。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}の肩を叩き、微笑んだ。`,
      );
      await era.printAndWait(
        `${flash.uma_sex_title}についての問いを、トレーナーの目では答えられないなら、当事者自身に預ければいい。`,
      );
      await era.printAndWait(
        '気を遣う必要はない。信頼は双方向だ。一心同体とは、そういうことだ。',
      );
      await era.printAndWait('迷う必要もない。これは逃げではない。なぜなら——');
      era.printButton(
        '「お前がどんな選択をしても、俺は最後まで一緒に背負う。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `薄暗い部屋で、異国の${flash.teen_sex_title}は ${you.name} の言葉に、しばし固まった。`,
      );
      await era.printAndWait(
        `まわりの時間が止まったようだった。一瞬の紅を除けば、${you.name} は${flash.sex}の顔にさざ波を見なかった。`,
      );
      await era.printAndWait(
        `そのあいだ、${flash.sex}の澄んだ碧い瞳は黙って ${you.name} を見つめていた。目の奥に、光が流れるようだった。`,
      );
      await flash.say_and_wait('……私は……');
      await era.printAndWait(
        '十数秒して、エイシンフラッシュは再び口を開いた。',
      );
      await flash.say_and_wait(
        '……おっしゃるとおりかもしれません。この道を自分で決めるのは、双方にとってよい選択です。',
      );
      await era.printAndWait(
        `だが先ほどの固さにくらべ、今の${flash.sex}の声には、少し迷いがあった。`,
      );
      await flash.say_and_wait(
        'ですから、もう少し時間をください。きちんと考える必要があります。',
      );
      await era.printAndWait(
        `そう言って、${flash.sex}は ${you.name} に、深く、深くお辞儀をした。`,
      );
      await flash.say_and_wait(
        '合宿が終わる日にお答えします。このあいだは、予定どおりに進めましょう。',
      );
      await era.printAndWait(
        `立ち上がると、${you.name} は見た。${flash.sex}が ${you.name} に、甘い微笑を向けているのを。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '胸の内・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, s_distracted) => {
      await flash.used_to_say_and_wait(
        '合宿が終わる日にお答えします。このあいだは、予定どおりに進めましょう。',
      );
      await era.printAndWait(
        'トレセンの合宿は短い。始まりから終わりまで、ひと月しかない。',
      );
      await era.printAndWait(
        `そのあいだ、${you.name} はエイシンフラッシュの調子が、秩序なく上下するのを感じた。時に固く、時に揺れ、時に ${you.name} に微笑み、時に空を見て迷う。`,
      );
      await era.printAndWait(
        `それでも ${you.name} は信じた。最後には理性で決める、と。どんな厳しいトレーニングにも文句を言わない相手にとって、これは取るに足らないことだ。`,
      );
      await flash.say_and_wait(
        `${callname}、本日の十七時から十八時、ご予定はありますか？`,
      );
      await era.printAndWait(
        `そして ${you.name} の期待を裏切らず、エイシンフラッシュは、完璧な答えを出した。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '実は、十年前の子どものころ、私は今のような、何事も正確を求める癖はありませんでした。',
      );
      await era.printAndWait('月末、合宿の宿のそばの浜辺。');
      await era.printAndWait(
        `エイシンフラッシュと ${you.name} は、海の縁を歩いていた。`,
      );
      await era.printAndWait('今、夕陽が向こうの果てへ、ゆっくり沈んでいく。');
      await era.printAndWait(
        '残光が金色に輝き、海岸線を一枚の壮麗な絵に染めていた。',
      );
      await flash.say_and_wait(
        '七歳のクリスマス前夜まで。その日、家に帰ると、父が Stollen を用意していました。ドイツのクリスマスの伝統パンです。',
      );
      await era.printAndWait(
        'そう言ってエイシンフラッシュは振り返り、無言でその絶景を見た。',
      );
      await era.printAndWait(`しばらくして、${flash.sex}はまた口を開いた。`);
      await flash.say_and_wait(
        '……作る過程で、一グラムの誤差も許さない真剣さでした。当時の私は理解できず、好奇心から尋ねました。',
      );
      await flash.say_and_wait(
        '『パパ、どうしてそんなに正確じゃなきゃいけないの？ 砂糖がレシピと少し違っても、味は変わらないでしょう。』',
      );
      era.printButton('「意外な発言だな。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} の知る相手からは、そんな投げやりな言葉は想像しにくい。`,
      );
      await flash.say_and_wait(
        'はい。だからこそ、父が次に言った言葉が、私の人生の軌跡を変えました。',
      );
      await era.printAndWait(
        `エイシンフラッシュはうなずいた。${flash.sex}の声に、懐かしさが混じっていた。`,
      );
      await flash.say_and_wait(
        '『もちろん品質だよ、フラッシュ。今日この誤差で基準を緩めたら、明日は？ 明後日は？』',
      );
      await flash.say_and_wait(
        '一度の緩みが次の緩みを呼び、ついには取り返しのつかない結果になる……わかりやすい道理ですよね。',
      );
      await flash.say_and_wait(
        '父は、それを私に知らせたかっただけだと思っていました。ですが次の言葉は、当時の私の理解をはるかに超えていました。',
      );
      await era.printAndWait(
        'そこでエイシンフラッシュはうつむき、手を胸に当てた。',
      );
      await flash.say_and_wait(
        '『だが品質が一番大事なわけじゃない。レシピさえあれば、誰でも完璧な菓子は作れる。』',
      );
      await flash.say_and_wait(
        '『だから肝心なのは、この心だ。菓子を通して、私たちの真心を感じてもらう。それがいちばんだ。』',
      );
      era.printButton('「大事なのは、込められた気持ちか？」', 1);
      await era.input();
      await flash.say_and_wait(
        'ですが心は調味料ではありません。食べ物をよりおいしくはできません。',
      );
      await era.printAndWait(
        'エイシンフラッシュは小さく息をつき、静かな瞳に、はっきりした揺らぎが走った。',
      );
      await flash.say_and_wait(
        '当時の私は、父にそう答えました。父は、まだ幼いからと詳しくは説明せず、あとで自然にわかる、と言っただけでした。',
      );
      era.printButton('「人生の経験と結びつく、ということか。」', 1);
      await era.input();
      await flash.say_and_wait(
        'はい。ですが幼い私は負けず嫌いで、あとまで待つ必要はないと思いました。',
      );
      await flash.say_and_wait(
        '親は子どものいちばんの手本だ、と言われます。当時の私は、二人のやり方を真似すれば、その言葉も理解できるのではないか、と考えました。',
      );
      await flash.say_and_wait(
        'ふふふ……現実離れした考えですね。今になっても、父のその言葉を、私はまだ完全には通じていません。',
      );
      await era.printAndWait(
        'エイシンフラッシュは自分をからかうように小さく笑った。過去の幼さを、少し滑稽に思っているようだった。',
      );
      await flash.say_and_wait(
        'ですが真似て学ぶうち、何事も厳密に、正しく、精密にやる難しさがわかり、それを日常にしている父と母を、ますます尊敬するようになりました。',
      );
      await flash.say_and_wait(
        'だからこそ、二人に誇ってもらいたいという思いが、胸の底から生まれました。',
      );
      era.printButton('「それが、すべての始まりか？」', 1);
      await era.input();
      await flash.say_and_wait('はい。それが、すべての始まりです。');
      await era.printAndWait(
        '言い終えると、エイシンフラッシュは後ろから、銀黒の勲章を取り出した。',
      );
      await flash.say_and_wait(
        'それから私はここに来て、あなたと出会いました。',
      );
      await era.printAndWait(
        `${flash.sex}はそれを長く見つめた。落日が光を収めるまで、口を開かなかった。`,
      );
      await flash.say_and_wait(
        `……${flash.uma_sex_title}として生まれ、コースを走れるのは誇らしいことだ、と聞きます。だから私はここで栄誉を得て、故郷へ帰りたいと願いました。`,
      );
      await flash.say_and_wait(
        'それが走る原動力であり、私がここまでこだわってきた理由です。',
      );
      await flash.say_and_wait('ですが……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `エイシンフラッシュは急に黙った。同時に ${you.name} は、${flash.sex}の手が力なく落ちるのを見た。`,
      );
      await flash.say_and_wait(
        '実行の途中で、その思いは、少しずつ偏った意志へ歪んでいきました。',
      );
      await era.printAndWait(`${flash.sex}は静かに言った。`);
      await flash.say_and_wait(
        '合宿の初日、あなたの言葉で、はっと気づきました。私の夢は、ずっと私ひとりのものではなかった、と。',
      );
      await flash.say_and_wait(
        '昔の私は、それがわかりませんでした……自分だけ前へ進み、あなたの考えを、一度も気にかけなかった。',
      );
      await flash.say_and_wait(
        'あなたの助けは、替えがきかないのに。私たちは一心同体であるはずなのに。',
      );
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await flash.say_and_wait(
        'よく思い返すと、私はあなたに、多くの恩を欠いています。',
      );
      await flash.say_and_wait(
        '皐月賞前の熱も、日本ダービー後の脚の傷も、あなたが一歩先にいちばん深いところまで考え、私の健康を最優先に計画を組み直してくれました。',
      );
      await flash.say_and_wait(
        '滑稽なことに、私はその緻密な計画を顧みず、未来の話ばかりしていました。',
      );
      await flash.say_and_wait(
        '……健康な身体がなければ、どんな夢も、意味のない空想になるというのに……',
      );
      await era.printAndWait(
        'そこでエイシンフラッシュは顔を上げ、まだ暗くなりきらない空へ、静かなため息をついた。',
      );
      era.printButton('「無事に回復できたのは、お前自身の努力だ。」', 1);
      await era.input();
      await era.printAndWait(
        `それを見て ${you.name} は眉を寄せた。${you.name} はこの様子を見たくない。エイシンフラッシュの言い方は、${flash.sex}自身の努力まで否定しているようだった。`,
      );
      await flash.say_and_wait(
        'ふ……こんなときまで慰めてくださるのですね。やはり、とても優しい方です。',
      );
      await era.printAndWait(
        `${flash.sex}は ${you.name} の言葉を聞き、${you.name} に小さく微笑んだ。`,
      );
      era.printButton('「事実だ。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} はもう一度強調した。`);
      await flash.say_and_wait('私の言葉も、事実です。');
      await era.printAndWait(
        `エイシンフラッシュは首を振り、その話題には深入りしなかった。${flash.sex}は手を伸ばし、月初に ${you.name} が${flash.sex}に渡した銀黒の勲章を、また ${you.name} へ戻した。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はうつむいて勲章を見、また顔を上げて${flash.sex}を見た。`,
      );
      await flash.say_and_wait(
        'クラシック三冠に挑むのは夢を叶えるためです。ですが夢を叶える道は、クラシック三冠だけではありません。',
      );
      await flash.say_and_wait(
        '本当はとっくにわかっているべきでした。なのに自分の固執に縛られ、ひとりで袋小路に入っていました。',
      );
      era.printButton(
        '「お前が前から決めていた計画だ。こだわるのはわかる。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        'ですが計画は変えられます。意固地になることこそ、未熟の現れです。',
      );
      await flash.say_and_wait('……あるいは……');
      await era.printAndWait(
        `そこで ${you.name} は、エイシンフラッシュが考え込むようにうなずくのを見た。`,
      );
      await flash.say_and_wait(
        'こんなに長くかかって、この道理に気づいた私は、やっと父と母に近づけたでしょうか。',
      );
      era.printButton('「ご両親も、お前が自分の道を歩くのを喜ぶはずだ。」', 1);
      await era.input();
      await flash.say_and_wait('おっしゃるとおりです。');
      await flash.say_and_wait(`ですから、${callname}。`);
      await flash.say_and_wait('ふぅ……');
      await era.printAndWait(
        '次の言葉の前に、エイシンフラッシュは深く息を吸った。今日いちばん大事な本題が、ここから始まるらしい。',
      );
      await flash.say_and_wait('今年のジャパンカップに、出走したいです。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}は ${you.name} の目を見て、一字一句、自分の考えを言った。`,
      );
      await flash.say_and_wait(
        `もし身体の都合で、同世代で最も強い${flash.uma_sex_title}だけが勝つ菊花賞に挑めないなら、目標をその上に置けばいい。`,
      );
      await flash.say_and_wait(
        '私は自分の絶頂で、私より経験の豊かな先輩に挑みたいのです。',
      );
      await flash.say_and_wait(
        `日本ダービーに勝った自分が、${flash.couple_title}に勝てるか、試したいのです。`,
      );
      era.printButton('「お前なら、できる。」', 1);
      await era.input();
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait(
        `${you.name} のためらいのない支持を聞き、エイシンフラッシュは優しく笑った。`,
      );
      await flash.say_and_wait(
        'ええ。あなたがそばで支えてくださるなら、私はきっとできます。',
      );
      await era.printAndWait(
        `夜の帳が下り始めた浜辺で、異国の${flash.teen_sex_title}は穏やかな顔で ${you.name} に左手を差し出した。`,
      );
      await flash.say_and_wait('これから、これを目標に頑張りましょう！');
      await era.printAndWait(
        `${flash.sex}の声には、とても深い感情があった。天が崩れても動かない信頼だ。`,
      );
      era.printButton('「ああ。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はうなずき、自然に${flash.sex}の手を取った。`,
      );
      await era.printAndWait(
        `疑いなく、この夏合宿を経て、${you.name} たちの未来は、より鮮やかな火花を散らすだろう。`,
      );
      era.println();
      await era.printAndWait([
        flash.get_colored_name(),
        ' はもう ',
        s_distracted,
        ' ではなくなった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '菊花賞に向けて';
    /** @param {CharaTalk} flash エイシンフラッシュ */
    const f = async (flash) => {
      await flash.say_and_wait('クラシック三冠の最後の一戦——菊花賞。');
      await flash.say_and_wait(
        '一度は目標から外しましたが、結局、出走することになりました。',
      );
      era.printButton('「予想より早く治って、よかった。」', 1);
      await era.input();
      await flash.say_and_wait('はい。');
      await flash.say_and_wait(
        'ですが今は、新しい目標に向かって努力しています。',
      );
      await flash.say_and_wait(
        'ですからクラシック三冠にこだわる必要はありません。菊花賞も、ほかのレースと変わりません。',
      );
      await flash.say_and_wait(
        'ですから、私がすべきことも、いつもと同じです。',
      );
      await flash.say_and_wait(
        'すべてを最善にして、あとは自然な結果を迎える。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_c: (() => {
    const title = '挑戦の道・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'ジャパンカップは、トゥインクル・シリーズ最高の栄誉の一つだ。出走メンバーは、強者ぞろい。',
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        '今回のジャパンカップのメンバー、見た？',
      );
      await you.say_as_passer_by_and_wait('観客B', 'うんうん、意外だったな。');
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `ゼンノロブロイ、スペシャルウィーク……しばらく出ていなかった${flash.uma_sex_title}なのに、このレースでまた${
          flash.couple_title
        }の走りが見られるとは。`,
      );
      await you.say_as_passer_by_and_wait(
        `観客B`,
        `それだけじゃない。すごいのは、${flash.couple_title}、前にジャパンカップを勝ってるってことだ。`,
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        'この偶然、前もって示し合わせたみたいだ。',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        'でもそうなると、経験の差が大きい。クラシック級には、かなり厳しい試練だな。',
      );
      era.drawLine();
      await flash.say_and_wait('ジャパンカップが、始まりますね。');
      await era.printAndWait('レース前、選手控え室。');
      await era.printAndWait(
        'エイシンフラッシュは深く息を吸い、状態を最善に整えた。',
      );
      await flash.say_and_wait(
        '予想どおり、出走表にはシニア級の先輩がたくさんいました。',
      );
      era.printButton('「緊張してるか？」', 1);
      await era.input();
      await flash.say_and_wait('はい。なにしろ『挑戦者』ですから。');
      await era.printAndWait(
        `${flash.sex}はうなずいた。だが ${you.name} は${flash.sex}の目に、わずかな期待も見た。`,
      );
      await flash.say_and_wait(
        'シービーさんとの併走で、新しい経験をたくさん得ました。今回のジャパンカップも同じでしょう。結果がどうであれ、レースの途中で必ず示唆を得られるはずです。',
      );
      await era.printAndWait(
        `エイシンフラッシュはやる気に満ちて言った。${flash.sex}の顔に、自信の微笑がある。`,
      );
      await flash.say_and_wait(
        'まあ、そうは言っても、勝利を簡単には渡しません。',
      );
      await flash.say_and_wait(
        'このあいだの養生で、身体は完全に治っていますから。',
      );
      era.printButton('「やっと、脇目も振らず走れるな。」', 1);
      await era.input();
      await flash.say_and_wait(`はい！ それでは行ってきます、${callname}。`);
      era.printButton('「がんばれ！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_c: (() => {
    const title = '挑戦の道・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'ジャパンカップは日本ダービーと距離もコースも近い。だから予想どおり、日本ダービーを勝ったエイシンフラッシュは、このレースでも鮮やかに走った。',
      );
      await flash.say_and_wait(`はあ……ただいま戻りました、${callname}。`);
      era.printButton('「レース、お疲れ。」', 1);
      await era.input();
      await era.printAndWait(
        '過程は険しかったが、エイシンフラッシュは自身の実力で世代の壁を越え、先輩たちを破った。',
      );
      await flash.say_and_wait('勝ちました。');
      await era.printAndWait(
        `レース後、控え室。コースから戻ったエイシンフラッシュは ${you.name} に、少し疲れた微笑を向けた。`,
      );
      await flash.say_and_wait(
        `スペシャルウィークさんとゼンノロブロイさんの実力は、本当に強いです。全力を尽くして、ようやく${flash.couple_title}を交わせました。`,
      );
      era.printButton('「見事なレースだった。」', 1);
      await era.input();
      await flash.say_and_wait('はい。今の自分の実力を、肌で感じられました。');
      await era.printAndWait(
        `エイシンフラッシュはうなずいた。${you.name} は${flash.sex}の声に、得難い勝利の喜びをはっきり聞いた。`,
      );
      era.printButton('「嬉しいな。」', 1);
      await era.input();
      await flash.say_and_wait(
        'ええ。勝っただけでなく、おかげで新しい収穫もたくさん得られました。',
      );
      await era.printAndWait(
        `それから${flash.sex}の顔に、考え込むような表情が浮かんだ。`,
      );
      await flash.say_and_wait(
        `このまま進み続ければ。いつか正面から${flash.couple_title}に勝ち、一頭抜けできるはずです。`,
      );
      era.printButton('「次のレースで、この成果を確かめよう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await flash.say_and_wait('有馬記念……ふ、楽しみなレースです。');
    };
    f.title = title;
    return f;
  })(),
  japa_cup_lose_c: (() => {
    const title = '挑戦の道・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'ジャパンカップは日本ダービーと距離もコースも近い。本来なら、日本ダービーを勝ったエイシンフラッシュは、ここでも光る走りをするはずだった。',
      );
      await flash.say_and_wait(`はあ……ただいま戻りました、${callname}。`);
      era.printButton('「レース、お疲れ。」', 1);
      await era.input();
      await era.printAndWait(
        'だが残念ながら、その利点だけでは、エイシンフラッシュと先輩たちの実力差は埋まらなかった。',
      );
      await flash.say_and_wait('負けました。');
      await era.printAndWait(
        `レース後、控え室。コースから戻ったエイシンフラッシュは ${you.name} に、少し疲れた微笑を向けた。`,
      );
      await flash.say_and_wait(
        '全力を尽くしたのに、スペシャルウィークさんとゼンノロブロイさんには届きませんでした。',
      );
      era.printButton('「見事なレースだった。」', 1);
      await era.input();
      await flash.say_and_wait(
        `はい。${flash.couple_title}との差を、肌で感じられました。`,
      );
      await era.printAndWait(
        'エイシンフラッシュはうなずいた。声に、重い落胆はなかった。',
      );
      await flash.say_and_wait(
        'ですが、おかげで新しい収穫もたくさん得られました。',
      );
      await era.printAndWait(
        `それから${flash.sex}の顔に、考え込むような表情が浮かんだ。`,
      );
      await flash.say_and_wait(
        `このまま進み続ければ。いつか正面から${flash.couple_title}に勝ち、一頭抜けできるはずです。`,
      );
      era.printButton('「次のレースで、この成果を確かめよう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await flash.say_and_wait('有馬記念……ふ、楽しみなレースです。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '挑戦の道・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '有馬記念は、トゥインクル・シリーズ年末の締めくくりだ。巷では『一年に一レースだけ見るなら有馬記念』と言われる。',
      );
      await era.printAndWait(
        `出走はファン投票制だ。今年、目を見張る走りを残した${flash.uma_sex_title}だけが、舞台に立てる。`,
      );
      await era.printAndWait(
        '日本ダービーを勝ったエイシンフラッシュも、言うまでもなくその列にいた。',
      );
      await you.say_as_passer_by_and_wait(`観客A`, `おいおい、見た？`);
      await you.say_as_passer_by_and_wait(
        '観客B',
        '信じられない。スペシャルウィークとゼンノロブロイの再登場だけで、見逃せないと思っていたのに。',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        '出走に、エアグルーヴとフジキセキまでいる！',
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        '有馬記念でも、この面子は豪華すぎる……',
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `今も、前のジャパンカップも。知名度の高い${flash.uma_sex_title}の再登場を、二度続けて見た。`,
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        'この先、何か大きなことが起きるみたいで、期待するよ。',
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        'でもクラシック級の子たちには、本当にいいことなのか？',
      );
      era.drawLine();
      await flash.say_and_wait('本当に……驚きますね。');
      await era.printAndWait(
        'レース前、控え室。エイシンフラッシュは今回の出走表を見て、眉を寄せた。',
      );
      await flash.say_and_wait(
        'スペシャルウィークさんとゼンノロブロイさんだけで、このレース最強の相手だと思っていました。',
      );
      await flash.say_and_wait(
        'エアグルーヴさんとフジキセキさんまで来るとは。',
      );
      era.printButton('「レースは、かなり険しくなるだろう。」', 1);
      await era.input();
      await flash.say_and_wait(
        'おっしゃるとおりです。ですが元から挑戦のために来ています。強い相手が多いほど、この旅の収穫も大きくなります。',
      );
      await flash.say_and_wait('それに……');
      await era.printAndWait(
        'エイシンフラッシュは拳を握り、恐れない顔をした。',
      );
      await flash.say_and_wait(
        'これだけ多くの障害を一緒に越えてきた私たちの実力も、侮れません。',
      );
      era.printButton(`「${flash.couple_title}に、お前の力を見せろ。」`, 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await flash.say_and_wait('走り続けます。頂に立つまで。');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '挑戦の道・四';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('観客A', '見事なレースだったな。');
      await you.say_as_passer_by_and_wait(
        '観客B',
        'ああ、さすが有馬記念。チケット代の価値はあった。',
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `長く出ていなかった${flash.uma_sex_title}たちの再登場だけでも興奮なのに、${
          flash.couple_title
        }がこんな走りをするとは。`,
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        'それよりすごいのは、エイシンフラッシュだ。',
      );
      await you.say_as_passer_by_and_wait(
        `観客B`,
        `まだ伸びきっていないクラシック級の${flash.uma_sex_title}なのに、途中で名のある先輩を次々交わした。`,
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `ああ、この実力は驚きだ。三年目の${flash.sex}が、ますます楽しみだ。`,
      );
      era.drawLine();
      await flash.say_and_wait(`ただいま戻りました、${callname}。`);
      era.printButton('「レースお疲れ。見事な走りだった。」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュがレース前に言ったとおり、ここまで多くの挑戦を越えた${flash.sex}の実力は、もう侮れない。`,
      );
      await era.printAndWait(
        `上の学年の先輩相手でも、${flash.sex}は渡り合い、最後には勝ち切った。`,
      );
      await flash.say_and_wait(
        'ふぅ……とても爽快なレースでした。過程は険しかったですが、私は勝ちました。',
      );
      await era.printAndWait(
        `エイシンフラッシュは長く息を吐いた。大戦のあと、望んだ結果を得た満足が${flash.sex}の顔に浮かぶ。`,
      );
      await flash.say_and_wait(
        'ジャパンカップと有馬記念、この二戦で、自分の成長をはっきり感じました。',
      );
      await flash.say_and_wait(
        'つまり今年の計画は、円満に締めくくれた、ということですね。',
      );
      await era.printAndWait(
        `そこでエイシンフラッシュはやる気に満ちてうなずいた。レースで励みを得た${flash.sex}は、三年目の計画を、もう始めたい様子だった。`,
      );
      era.printButton('「戻ってから、一緒に未来を組もう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '挑戦の道・四';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('観客A', '見事なレースだったな。');
      await you.say_as_passer_by_and_wait(
        '観客B',
        'ああ、さすが有馬記念。チケット代の価値はあった。',
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `長く出ていなかった${flash.uma_sex_title}たちの再登場だけでも興奮なのに、${
          flash.couple_title
        }がこんな走りをするとは。`,
      );
      await you.say_as_passer_by_and_wait(
        `観客B`,
        `後輩との差は歴然だな。来年も${flash.couple_title}が出たら、クラシック級はどうするんだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `クラシック級といえば、エイシンフラッシュの走り、見た？`,
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        'うん、客観的にはかなりいい。ただ、もっと強い相手がいただけだ。',
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `惜しいな。でも${flash.sex}の成長は、まだ途中だろう。来年が楽しみだ。`,
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        'ああ、来年は目が離せない。',
      );
      era.drawLine();
      await era.printAndWait(
        `エイシンフラッシュがレース前に言ったとおり、ここまで多くの挑戦を越えた${flash.sex}の実力は、もう侮れない。`,
      );
      await flash.say_and_wait(`ただいま戻りました、${callname}。`);
      era.printButton('「レースお疲れ。見事な走りだった。」', 1);
      await era.input();
      await era.printAndWait(
        '実戦では先輩との差はまだ残る。だが、受け入れられる範囲まで来ていた。',
      );
      await flash.say_and_wait(
        'ふぅ……とても爽快なレースでした。負けは避けられませんでしたが。',
      );
      await era.printAndWait(
        `来年、さらに伸びた${flash.sex}なら、本当の意味で同じ舞台で戦えるだろう。`,
      );
      await flash.say_and_wait(
        'ですがジャパンカップと有馬記念、この二戦で、自分の成長をはっきり感じました。',
      );
      await flash.say_and_wait(
        '次は、私を超えるのは、そう簡単ではありません。',
      );
      await era.printAndWait('目の前の人も、同じことを考えていた。');
      await era.printAndWait(
        `だから ${you.name} にはわかった。今のエイシンフラッシュの顔は、そこまで沈んでいない。むしろ、余韻が残っているように見えた。`,
      );
      await flash.say_and_wait(
        'まあ、有馬記念が終わった以上。今年の計画も、正式に幕を閉じましたね。',
      );
      await era.printAndWait(
        `そこでエイシンフラッシュはやる気に満ちてうなずいた。レースで励みを得た${flash.sex}は、三年目の計画を、もう始めたい様子だった。`,
      );
      era.printButton('「戻ってから、一緒に未来を組もう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} fuji フジキセキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_duty エイシンフラッシュ専用状態 [必行之事]
     */
    const f = async (flash, fuji, you, callname, s_duty) => {
      await era.printAndWait('また一年、春が来た。');
      await era.printAndWait('正月、初詣。');
      await you.say_as_passer_by_and_wait(
        `司会`,
        `最強世代、突入！？ 著名${flash.uma_sex_title}たちの再起！`,
      );
      await era.printAndWait(
        `${you.name} とエイシンフラッシュが穏やかに過ごすはずの午前を、テレビの突然のニュースが破った。`,
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `先日、ジャパンカップと有馬記念に久々に姿を見せた著名${flash.uma_sex_title}たちが、記者会見を開きました。`,
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `この会見で、${flash.couple_title}は明確に——今年一年のG1に、順次出走すると表明しました！！！`,
      );
      await you.say_as_passer_by_and_wait(
        '司会',
        '出席者はいずれも各分野で大きな功績を残した実力者です。今年のトゥインクル・シリーズに、どれほどの動揺が走るか、想像もつきません。',
      );
      await you.say_as_passer_by_and_wait('司会', 'では現場の記者へ——');
      await you.say_as_passer_by_and_wait(
        `記者`,
        `フジキセキ${flash.adult_sex_title}、この時点で今後のG1重賞への出走を表明した意図は何でしょう？`,
      );
      await fuji.say_and_wait(
        'ええ……具体的な意図は言いづらいですね。『高い壁』になるため、でしょうか。',
      );
      await you.say_as_passer_by_and_wait('記者', '高い壁、ですか？');
      await fuji.say_and_wait(
        '後輩の前の高い壁になるために、私たちは出走するのです。',
      );
      await fuji.say_and_wait(
        `ですから、大胆に挑んできてください。私はここで、${you.name} を待っていますよ。`,
      );
      await era.printAndWait('「ピッ。」');
      await era.printAndWait(
        '画面は、フジキセキがカメラへ手を差し伸べたところで止まった。',
      );
      await flash.say_and_wait('……高い壁、ですか。');
      await era.printAndWait(
        'ニュースを見終えたエイシンフラッシュは、少し眉を寄せた。',
      );
      await flash.say_and_wait(
        '怖くはありません。ですが、なぜ今、この決断を。後輩の道を塞ぐためだけ、ですか？',
      );
      era.printButton('「『試練』の意味だろう？」', 1);
      await era.input();
      await era.printAndWait(
        `だが ${you.name} は、フジキセキの最後の言葉の意味を、鋭く捉えた。`,
      );
      await flash.say_and_wait('試練、ですか？');
      await era.printAndWait(
        `${you.name} の言葉に、エイシンフラッシュは首をかしげ、少しわからなさそうだった。`,
      );
      era.printButton('「壁は阻む。だが力のある者は、それを越えられる。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は口を開き、${flash.sex}に自分の見方を短く説明した。`,
      );
      await flash.say_and_wait(
        `なるほど。フジキセキさんの本意は、後輩が${flash.couple_title}に挑む道で成長できるように、ということですね。`,
      );
      await era.printAndWait(
        'エイシンフラッシュはうなずき、わかった顔をした。',
      );
      era.printButton('「ジャパンカップと有馬記念のときの態度で臨め。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(`次の瞬間、${flash.sex}は自信に満ちて答えた。`);
      await era.printAndWait('「リンリンリン——」');
      await flash.say_and_wait('？');
      await era.printAndWait(
        `そのとき、連絡の着信音が${flash.sex}のスマホから鳴った。`,
      );
      await flash.say_and_wait('……母からの着信、ですか？');
      era.drawLine();
      await flash.say_and_wait('………');
      await era.printAndWait('フラッシュと両親の通話が終わった。');
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(
        `スマホを置いた${flash.sex}は、先ほどの気楽さが消え、とても真剣だった。`,
      );
      await flash.say_and_wait(
        '父と母が、来年の十月後半に、日本へ私のレースを見に来ると。',
      );
      era.printButton('「十月後半？」', 1);
      await era.input();
      await flash.say_and_wait(
        'はい。計画でその時期に決まっているレースは、天皇賞（秋）です。',
      );
      era.printButton('「予想より早いな。」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュのもとの考えでは、日本で各G1の栄誉を得てから故郷へ戻り、両親に成長を示すつもりだった。`,
      );
      await flash.say_and_wait(
        '私もそう思っていました。両親が自ら日本へ来る時間があるとは。普段はとても忙しい人たちなのに。',
      );
      era.printButton(
        `「どうしても、自分の${
          flash.sex_code - 1 ? '娘' : '息子'
        }がコースを走る姿を見たいのだろう。」`,
        1,
      );
      await era.input();
      await flash.say_and_wait(
        'ふふっ。まあ、見方を変えれば、悪いことではありません。',
      );
      await era.printAndWait(
        'そう言ってエイシンフラッシュはオレンジのマーカーを出し、計画書を直した。',
      );
      await flash.say_and_wait(
        '両親の目の前でレースの優勝を手にすることほど、二人に誇ってもらえることがあるでしょうか。',
      );
      await era.printAndWait(
        `${you.name} は見た。${flash.sex}が天皇賞（秋）の出走予定の横に、重点としていくつも丸を描いているのを。`,
      );
      era.printButton('「そうだな。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はうなずき、${flash.sex}の見方に同意した。`,
      );
      await era.printAndWait(
        `天皇賞（秋）に勝てば、エイシンフラッシュの夢は叶う。それが ${you.name} がトレーナーとしている理由だ。`,
      );
      await era.printAndWait(
        `では、${flash.sex}がその盾を得る道を滑らかにするため、${you.name} は決めた——`,
      );
      era.printButton('「神社で祈ろう！」（全能力+20）', 1);
      era.printButton(`「今後の計画を変えるか？」（【必行之事】を得る）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '祈りは、もともと人が神に願いを述べ、加護を求める儀式だった。',
        );
        await era.printAndWait('時代とともに、その行為には別の意味も乗った。');
        await era.printAndWait(
          '今では祈りは、よりよい暮らしを望む気持ちの器になっている。',
        );
        await flash.say_and_wait(
          'む、レース結果に実質的な助けがあるとは思いませんが……',
        );
        await era.printAndWait(
          `${you.name} の提案を聞き、エイシンフラッシュは少し考えて、ゆっくりうなずいた。`,
        );
        await flash.say_and_wait(
          'ですがおっしゃるとおりです。理想の未来を望む気持ちは、いつでもよいものです。',
        );
        await era.printAndWait(
          `そこで ${you.name} は見た。${flash.sex}が目の前の計画書を閉じ、立ち上がるのを。`,
        );
        await flash.say_and_wait(
          'それに今日は初詣です。神社は賑わっているでしょう。',
        );
        era.printButton('「近くで祭りもあるかもしれない。」', 1);
        await era.input();
        await flash.say_and_wait('祭り、ですか……ふふっ。');
        await era.printAndWait(
          'エイシンフラッシュは小さく笑い、明らかに興味を引かれた。',
        );
        await flash.say_and_wait(
          `それでは、これから一年の計画への祝福と、休暇中の娯楽として。行きましょう、${callname}。`,
        );
        await era.printAndWait(
          `そう言って${flash.sex}は ${you.name} の手を取り、外へ向かうよう促した。`,
        );
      } else {
        await era.printAndWait(
          '今のエイシンフラッシュの実力を疑っているわけではない。目標達成という一点だけで考えれば。',
        );
        await era.printAndWait(
          `先輩との高強度のG1を続けて身体を疲れさせるより、空気の緩いG2やG3のほうが、${flash.sex}が調子を保ちつつ力を温存するには向いているのではないか。`,
        );
        await flash.say_and_wait('む、客観的にはよい選択ですが……');
        await era.printAndWait(
          `${you.name} がその考えをエイシンフラッシュに話すと、${flash.sex}は少し考えて首を振った。`,
        );
        await flash.say_and_wait(
          `父と母は、自分の${
            flash.sex_code - 1 ? '娘' : '息子'
          }がそんな近道で勝つことを、望まないでしょう。`,
        );
        await era.printAndWait(
          `そう言って${flash.sex}は計画帳を閉じ、真剣に言った。`,
        );
        await flash.say_and_wait(
          '優勝は、正面から勝ち取ってこそ、意味があります。',
        );
        await flash.say_and_wait(
          '挑戦なら迎え、高い壁なら越える。そのやり方で叶えた夢でなければ、胸を張れません。',
        );
        era.printButton('「騎士らしい考えだな。」', 1);
        await era.input();
        await era.printAndWait(
          `${flash.sex}のその態度を見て、${you.name} はつい感嘆した。`,
        );
        await flash.say_and_wait('ふふっ。お褒めに預かり光栄です。');
        await flash.say_and_wait(
          'こうした考えを持っていたからこそ、小学校の学級劇で騎士役を出せたのかもしれません。',
        );
        await era.printAndWait(
          `そこでエイシンフラッシュは優しく笑った。いつのまにか、${flash.sex}の顔はまた軽やかになっていた。`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          ' は ',
          s_duty,
          ' の覚悟を得た！',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_6: (() => {
    const title = '出会いの花';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `バレンタインが近い。今年の新作チョコレートを見るため、エイシンフラッシュは ${you.name} を近くの菓子店へ誘った。`,
      );
      await era.printAndWait('だが……');
      await you.say_as_passer_by_and_wait(
        `客`,
        `待って、私のほうが先——痛っ、${you.name}、ぶつかった！`,
      );
      await you.say_as_passer_by_and_wait(
        '店員',
        '『チョコレート年輪ケーキ』をご希望のお客様はこちらへ。あ！ お客様、店内は走らないでください。',
      );
      await flash.say_and_wait('本当に……混乱していますね。');
      await era.printAndWait(
        '店内の押し合う人混みを見て、エイシンフラッシュは眉を寄せた。',
      );
      await flash.say_and_wait(
        'これではショーケースの菓子を丁寧に調べられません。少し困ります……',
      );
      era.printButton('「店を変えるか？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} はそう提案した。`);
      await flash.say_and_wait(
        '……バレンタイン前ですから、ほかも似たようなものでしょう。',
      );
      await era.printAndWait('そこでエイシンフラッシュは小さく息をついた。');
      await flash.say_and_wait(
        'まあ、欲しい品はネットで先に買えています。現場で実物を調べられなくても、大きな問題ではありません。',
      );
      await flash.say_and_wait('ですから、今は戻りましょう。');
      era.drawLine();
      await flash.say_and_wait(
        '実は、日本に来てから毎年、バレンタインに贈り物で言い争う光景を見ると、少し不思議に思います。',
      );
      await era.printAndWait(
        'トレセン学園へ戻る道で、エイシンフラッシュは突然、そう漏らした。',
      );
      era.printButton('「ドイツには、そういう習慣はないのか？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} は少し不思議に思った。`);
      await flash.say_and_wait(
        '正確にはあります。ですがチョコレートより、主流は花です。',
      );
      await era.printAndWait(
        `そう言ってエイシンフラッシュは一本指を立て、${you.name} に説明し始めた。`,
      );
      await flash.say_and_wait(
        'さらに言えば、贈る相手も、恋人以外にはなりません。',
      );
      await flash.say_and_wait('つまり、いわゆる義理の贈り物はありません。');
      era.printButton('「なるほど。」', 1);
      await era.input();
      await era.printAndWait(
        'つまり贈るなら、受け取る相手は、とても大切な存在だということだ。',
      );
      await era.printAndWait(`${you.name} はわかったようにうなずいた。`);
      await flash.say_and_wait(
        '身近な例で言えば、毎年バレンタインに、父が母へ薔薇の花束を贈るのを見ます。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait('そこで、なぜかエイシンフラッシュは黙り込んだ。');
      await era.printAndWait(
        `${you.name} は、${flash.sex}の視線がわずかに ${you.name} のほうへ向いた気がした。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait('……いえ、なんでもありません。');
      await era.printAndWait(
        '再び口を開いたエイシンフラッシュは、小さく首を振った。',
      );
      await flash.say_and_wait(
        'とにかく、ドイツでは告白を理由に贈り物はしません。',
      );
      await flash.say_and_wait('そうするなら、双方はもっと深い関係だけです。');
      await flash.say_and_wait(
        'ですからその意味では、日本でバレンタインに告白する習慣があるほうが、私には意外です。',
      );
      era.printButton('「流れに乗る口実、みたいなものだろう？」', 1);
      await era.input();
      await era.printAndWait(
        '告白には勇気が要る。バレンタイン告白という、祭日の習わしを理由に、成否どちらでも関係が変わる行為をするのは、ちょうどいい。',
      );
      await flash.say_and_wait(
        '本当の気持ちを隠すのに、ふさわしい理由が要る、ですか……',
      );
      await flash.say_and_wait('ふふっ……悪くない考えですね。');
      await era.printAndWait(
        '何か閃いたように、エイシンフラッシュは考え込むようにうなずいた。',
      );
      await flash.say_and_wait(
        `あ、学園の正門が見えました。では、このあと用事がありますので、ここで失礼します、${callname}。`,
      );
      era.printButton('「気をつけて。」', 1);
      await era.input();
      era.drawLine({ content: 'バレンタイン当日' });
      await flash.say_and_wait(`Guten Morgen、${callname}。`);
      await era.printAndWait(
        `トレーナールームの扉を開けると、${you.name} は見た。みずみずしい青い花が、机の横の花瓶に立っている。`,
      );
      era.printButton('「この花は？」', 1);
      await era.input();
      await flash.say_and_wait('青いヤグルマギクです。ドイツの国花です。');
      await era.printAndWait(
        `エイシンフラッシュは微笑んで ${you.name} に紹介した。`,
      );
      await flash.say_and_wait(
        '先日お別れしたあと、帰り道でよく考えました。今いる国が日本なら、伝統の祭日も、郷に従ってよい、と。',
      );
      era.printButton('「つまり、これがバレンタインの贈り物か？」', 1);
      await era.input();
      await flash.say_and_wait(
        `はい。${callname} は花を飾りにする習慣がありませんから、これを贈り物にすれば、周囲の環境もよくなります。それに……`,
      );
      era.printButton('「それに？」', 1);
      await era.input();
      await flash.say_and_wait(
        'ふとしたときにこの花を見て、贈った人を思い出すかもしれません。',
      );
      await flash.say_and_wait('ふふふ——');
      await era.printAndWait(
        '言い終えると、エイシンフラッシュは口元を覆って小さく笑った。とても嬉しそうだった。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '挑戦の道・五';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '春の三冠の第一冠——大阪杯が、始まろうとしている。',
      );
      await flash.say_and_wait(
        'ではレース前に、もう一度確認しましょう。これから注意すべき相手を。',
      );
      await era.printAndWait('レース前、選手控え室。');
      await era.printAndWait('エイシンフラッシュは出走表を出した。');
      await flash.say_and_wait(
        `まずフジキセキさん。大阪杯は${flash.sex}の得意距離ではありません。ですが実力のある${flash.sex}なら、この条件でも戦局を左右できます。`,
      );
      await flash.say_and_wait(
        `次にマンハッタンカフェさん。レース前のインタビューで、一ヶ月後の天皇賞（春）に運命のようなものを感じると。ですから大阪杯はその前哨戦です。${flash.sex}も、相当な力を出すでしょう。`,
      );
      era.printButton('「三人目はエイシンフラッシュ……」', 1);
      await era.input();
      await flash.say_and_wait('え。');
      await flash.say_and_wait('ふふふっ。');
      await era.printAndWait(
        `${you.name} の突然の割り込みに、エイシンフラッシュは嬉しそうに笑った。`,
      );
      await flash.say_and_wait(
        'あるいは、本当にそうかもしれません。去年にくらべ、私もずいぶん伸びましたから。',
      );
      await flash.say_and_wait(
        '強敵と戦い、知識を得、経験を積む。次のレースでそれを使って走り、進歩する。',
      );
      await flash.say_and_wait(
        'これまでの挑戦は、みなそうでした。今日の大阪杯も例外ではありません。',
      );
      era.printButton('「高い壁は、お前の次の段になるだけだ。」', 1);
      await era.input();
      await flash.say_and_wait('はい。');
      await era.printAndWait('エイシンフラッシュはうなずいた。');
      await flash.say_and_wait('胸を張って、壁を越え、夢を叶えて帰る……');
      await flash.say_and_wait(`行ってきます！ ${callname}。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, gs, festa, you) => {
      await era.printAndWait('四月、春のファン感謝祭が来た。');
      await era.printAndWait(
        `今日、${flash.uma_sex_title}たちはファンと一緒に楽しめる種目にいくつも出る。`,
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `ではG区の挑戦者をご覧ください。${flash.couple_title}はエイシンフラッシュ、ナカヤマフェスタ、ゴールドシップです。`,
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `${flash.couple_title}が挑むのは——ファンおんぶ競争！`,
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `ルールは簡単。ファンと一緒に最初にゴールした${flash.uma_sex_title}が優勝です。`,
      );
      await you.say_as_passer_by_and_wait(
        '司会',
        'さて、どの組が勝つのか。ご期待ください！',
      );
      await era.printAndWait(
        'トレセン学園のグラウンドで、司会の熱い声が場を盛り上げ、人混みがざわついた。',
      );
      await era.printAndWait('そして——');
      await gs.say_and_wait('最後に勝つのはこのアタシだ！ ゴルシ運命の——');
      await era.printAndWait(
        '素早く先手を取ったゴールドシップは、前の観客から乱暴に一人引っ張り出した。',
      );
      await gs.say_and_wait(`大・米・袋！ お前に決めた！`);
      await you.say_as_passer_by_and_wait(
        'ゴールドシップのファン',
        'うわああ——米俵抱き！？ 高い速い怖い！',
      );
      await festa.say_and_wait('ふむ……');
      await era.printAndWait(
        '傍らのナカヤマフェスタも、負けてはいられなかった。',
      );
      await festa.say_and_wait(`おい、そこのお前。`);
      await era.printAndWait(
        `${flash.sex}はあたりを見回してから、人混みの真ん中に立つファンを選んだ。`,
      );
      await festa.say_and_wait('運が向いてきそうな顔だ。ちょっと付き合え。');
      await you.say_as_passer_by_and_wait(
        'ナカヤマフェスタのファン',
        'ええっ、わあ……片手で持ち上げた……すごい！',
      );
      await flash.say_and_wait('む……');
      await era.printAndWait(
        `${flash.couple_title}にくらべ、エイシンフラッシュは慎重だった。`,
      );
      await era.printAndWait(
        `${flash.sex}は騒がしい人混みを、しばらく観察した。`,
      );
      await flash.say_and_wait('あの……力を貸していただけますか？');
      await era.printAndWait(
        `最終的に${flash.sex}は、人混みの隅で黒と白の旗を握る観客を選んだ。`,
      );
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        'え、わ……私ですか？',
      );
      await flash.say_and_wait('はい。その旗の配色は、私の勝負服ですね？');
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        'そ……そうですけど、わ……私でいいんでしょうか……」',
      );
      await flash.say_and_wait('では、失礼します。');
      await era.printAndWait(
        'ファンの返事が聞こえたかどうかはわからない。とにかくエイシンフラッシュは、その手を取った。',
      );
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        'お、お姫様抱っこ！！！',
      );
      await era.printAndWait(
        `悲鳴のなか、エイシンフラッシュはその少し怯えたファンを抱き上げ、先に差をつけた二人を追った。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '司会',
        '競技終了！ 今回のファンおんぶ競争の優勝は——ゴールドシップ！！',
      );
      await era.printAndWait(
        'ほどなく、ゴールドシップの歓声とともに、この娯楽の競技は幕を閉じた。',
      );
      await you.say_as_passer_by_and_wait(
        '司会',
        'ファンも肝を冷やす速さで、荒々しく勝利をもぎ取った！',
      );
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        'ごめんなさい、ごめんなさい！ 私が足手まといで……',
      );
      await era.printAndWait(
        '推すアイドルが優勝できず、エイシンフラッシュのファンは何度もうつむき、過ちを自分に帰した。',
      );
      await flash.say_and_wait('いえ、あなたの走りに問題はありません。');
      await era.printAndWait(
        'エイシンフラッシュは首を振り、傍らのゴールドシップを見て、困ったように息をついた。',
      );
      await flash.say_and_wait(
        'それに、この種の競技であの人に勝つのは、なかなか難しいでしょう。',
      );
      await flash.say_and_wait('なにしろ——');
      await era.printAndWait(`${flash.sex}は優しい笑みを浮かべた。`);
      await flash.say_and_wait(
        `${flash.sex}のように、大切なファンを無茶に扱うことなど、できませんから。`,
      );
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        '！！！！',
      );
      await you.say_as_passer_by_and_wait(
        'エイシンフラッシュのファン',
        `エ……エイシン${flash.adult_sex_title}、ありがとうございました！`,
      );
      await flash.say_and_wait(
        'ふふっ。そう言うべきなのは私です。一緒に出てくださって、ありがとうございます。',
      );
      await era.printAndWait(
        'エイシンフラッシュとファンは、顔を見合わせて笑った。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '挑戦の道・六';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait('春の三冠の第二冠——天皇賞（春）。');
      await era.printAndWait(
        '長距離のG1だ。3200メートルは、エイシンフラッシュが走った有馬記念より、まる700メートル長い。',
      );
      await era.printAndWait(
        `疑いなく、${flash.sex}のスタミナへの大きな試練だ。`,
      );
      await flash.say_and_wait('強いですね、マンハッタンカフェさん。');
      await era.printAndWait('レース前、選手控え室。');
      await era.printAndWait('エイシンフラッシュの声は、珍しく重かった。');
      era.printButton(`「${flash.sex}の得意分野だからな。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} には、${flash.sex}が何を案じているかわかっていた。`,
      );
      await era.printAndWait(
        '長距離に経験の薄いエイシンフラッシュと違い、マンハッタンカフェはそれで知られている。',
      );
      await era.printAndWait(
        `菊花賞、有馬記念、天皇賞（春）。どれも${flash.sex}がこれまでの生涯で得た栄誉だ。`,
      );
      await era.printAndWait(
        'つまりこの天皇賞（春）は、己の短を相手の長にぶつける形になる。',
      );
      await era.printAndWait(
        'この状況でレースの険しさを感じるのは、自然なことだ。',
      );
      await flash.say_and_wait('そうは言っても、諦める理由にはなりません。');
      await era.printAndWait(
        `エイシンフラッシュは首を振った。これから何が来ても、${flash.sex}は引かない。`,
      );
      era.printButton('「そういえば。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} は急に一事を思い出した。`);
      era.printButton(
        '「記者から、このレースのあと取材したいと言われた。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('え、取材ですか？');
      era.printButton(
        '「仮の見出しは『最強世代に咲く、まばゆい閃光』だ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '去年のジャパンカップから前の大阪杯まで、強い先輩相手にエイシンフラッシュの走りは光っていた。今回の天皇賞（春）も例外ではないだろう。熱を取りたい記者が、先にこの見出しを用意したのも無理はない。',
      );
      await era.printAndWait(
        `${you.name} は${flash.sex}に、その見出しの意図を詳しく説明した。`,
      );
      await flash.say_and_wait('まばゆい閃光、ですか……');
      await era.printAndWait(
        `${you.name} の言葉を聞き、エイシンフラッシュは考え込むようにうなずいた。`,
      );
      await flash.say_and_wait('簡潔でわかりやすい概括ですね。');
      await era.printAndWait(`${flash.sex}は小さく笑った。`);
      await flash.say_and_wait('ですが……');
      await era.printAndWait(
        `次の瞬間、${you.name} は${flash.sex}の顔が急に真剣になるのを見た。`,
      );
      await flash.say_and_wait('私は、一瞬で消える閃光とは違います。');
      await flash.say_and_wait('最後の一瞬まで、まばゆく走り続けます。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_23: (() => {
    const title = '未来のこと・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait('春の三冠の第三冠——宝塚記念が、近づいている。');
      await era.printAndWait(
        '上半期のレースでたびたび光ったエイシンフラッシュは、当然、出走の資格も得た。',
      );
      await era.printAndWait('だが……');
      await you.say_as_passer_by_and_wait(
        '医師',
        '健康のため、しばらくレースには出ないことを勧めます。',
      );
      await era.printAndWait(
        '……レース前の定期検診で、エイシンフラッシュの脚に、また火種が見つかった。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait('去年の日本ダービー後にくらべれば、程度は軽い。');
      await era.printAndWait(
        'だが安全を取るなら、目前の宝塚記念には、どうしても出られない。',
      );
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} が、病状報告を重い顔で見つめるエイシンフラッシュをどう説得しようか考えていると。`,
      );
      await flash.say_and_wait('わかりました。では、しっかり休みます。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `意外だった。${flash.sex}は長く息を吐いて、そう言った。`,
      );
      await flash.say_and_wait('え、そう言うのが意外ですか？');
      await era.printAndWait(
        `次の瞬間、驚いた ${you.name} の顔を見て、${flash.sex}は首をかしげた。`,
      );
      era.printButton('「去年のお前を思い出しただけだ。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} は、頭の中の考えをそのまま言った。`);
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait('それを聞き、エイシンフラッシュは小さく笑った。');
      await flash.say_and_wait(
        '去年の八月より前の私なら、決めてあった計画が急に変わるのを、どうしても受け入れられなかったでしょう。',
      );
      await flash.say_and_wait(
        'ですが人の性格は、経験によって変わりますよね。',
      );
      await era.printAndWait(
        `そう言って${flash.sex}は首を振り、${you.name} を見つめた。`,
      );
      await flash.say_and_wait(
        '今の私はもうわかっています。私の夢は私ひとりのものではない。だから何事も、慎重に考えてから決めます。',
      );
      await flash.say_and_wait('無理は、許されません。');
      era.printButton('「前向きな変化だな。」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュが真剣にそう言うのを聞き、${you.name} は感嘆し、同時にほっと息をついた。`,
      );
      await flash.say_and_wait(
        'それに、今年いちばん大事な目標は、十月の天皇賞（秋）です。',
      );
      await flash.say_and_wait(
        'それまでの行動はすべて、万全の状態で出走できることを前提に組む必要があります。',
      );
      era.printButton('「そのあと、はどうする？」', 1);
      await era.input();
      await flash.say_and_wait('……えっ？');
      await era.printAndWait(
        `好奇心が先走ったのか、${you.name} は唐突に訊いた。`,
      );
      await flash.say_and_wait('そのあと……、ですか？');
      await era.printAndWait(
        `トゥインクル・シリーズで栄誉を積み重ね、ご両親に誇ってもらうこと。それがエイシンフラッシュの夢だ。`,
      );
      await era.printAndWait(
        `だがよく考えると、${flash.sex}は ${you.name} に、夢を叶えたあと何をしたいかを、一度も話していない。`,
      );
      await flash.say_and_wait('ええ……');
      await era.printAndWait(
        `${you.name} は、エイシンフラッシュなら当然計画があると思っていた。だが、${flash.sex}が考え込み、時おり顔を上げて ${you.name} を窺う様子を見ると。`,
      );
      await era.printAndWait(`${you.name} は、少し疑いたくなった。`);
      era.printButton('「まだ決めてないのか？」', 1);
      await era.input();
      await flash.say_and_wait('……いいえ。最初から計画していたことです。');
      await era.printAndWait('エイシンフラッシュは小さく首を振り、続けた。');
      await flash.say_and_wait(
        '日本に来たその日から、心の中では決めていました。夢を叶え、理想の、認められる自分になれたら、故郷へ戻り、数年学んだあと、両親のケーキ店を継ぐ。',
      );
      era.printButton('「いい未来だな。」', 1);
      await era.input();
      await flash.say_and_wait('すべてが順調なら、そうですね。ですが……');
      era.printButton('「だが？」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `エイシンフラッシュは言葉を続けず、黙って ${you.name} を見つめた。`,
      );
      await flash.say_and_wait('……いいえ、何でもありません。');
      await era.printAndWait(`しばらくして、${flash.sex}は再び口を開いた。`);
      await flash.say_and_wait(
        'あなたと出会ってから経験したことが多すぎて、もう一度時間をかけて計画し直す必要があるのかもしれません。',
      );
      era.printButton('「そうか。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は気づいた。その言葉を口にした${flash.sex}の瞳に、${you.name} には読み取れない揺らぎが走っていたことに。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '未来のこと・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '去年とは違い、今回はエイシンフラッシュの脚の回復が早かった。',
      );
      await era.printAndWait(
        `理由は症状の軽さにもあるだろう。だが ${you.name} は、今年の${flash.sex}が前向きな気持ちで療養していたことの方が大きいと信じている。`,
      );
      await era.printAndWait(
        `そのため、今夏の合宿が始まる直前には、${flash.sex}の体はもう無事だった。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '気づけば、目標の天皇賞（秋）まで、もうすぐですね。',
      );
      await era.printAndWait(
        '月初、合宿の宿に荷物を置いたエイシンフラッシュが、窓の外の青い海を見て、感慨を漏らした。',
      );
      era.printButton(
        '「今回の夏合宿は、力を足す機会としてしっかりやろう。」',
        1,
      );
      await era.input();
      await era.printAndWait(`それを見て、${you.name} は励ました。`);
      await flash.say_and_wait(
        'はい！ 脚の傷ももう治っていますし、トレーニングに支障はありません。',
      );
      await era.printAndWait(
        'エイシンフラッシュは頷き、トレーニング場へ歩き出した。',
      );
      await flash.say_and_wait('ただ………');
      await flash.say_and_wait('……最後、ですね。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `ただ、完全に姿が見えなくなる前、${you.name} は${flash.sex}のほうから、つぶやきが聞こえた気がした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '未来のこと・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('夏の日々は、あっという間に過ぎた。');
      await era.printAndWait(
        `最後の夏合宿で、${you.name} はエイシンフラッシュの実力が着実に伸びていくのを見ていた。`,
      );
      await era.printAndWait(
        `最後の欠片をはめ込んだ鏡のように、今の${flash.sex}は状態がほぼ完璧で、出せる力もここ数年の頂点にある。`,
      );
      era.printButton('（これなら、天皇賞（秋）の走りも問題ないはずだ。）', 1);
      await era.input();
      await era.printAndWait(
        `それを見て、${you.name} は満足げに頷いた。${flash.sex}の夢がもうすぐ叶う喜びが、胸の内に湧いてくる。`,
      );
      await flash.say_and_wait(`${callname}？`);
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} の表情が妙だったのか、一通りのトレーニングを終えたエイシンフラッシュが、${you.name} の前に立ち、首を傾けて訊いた。`,
      );
      await flash.say_and_wait(
        '最近、私を見つめるあなたの目に、いつもとは違う感情が宿っている気がしまして。',
      );
      era.printButton('「使命が、もうすぐ果たせるからかもしれない。」', 1);
      await era.input();
      await flash.say_and_wait('使命を、果たす？');
      era.printButton('「お前の夢が叶うところを、見届けることだ。」', 1);
      await era.input();
      await era.printAndWait(
        `トレーナーとは、${flash.uma_sex_title}を助け、導き、管理し、最終的に${
          flash.couple_title
        }が円満な結末を迎えるよう支える存在だ。だから、${you.name} は自分の言い方に間違いはないと思っている。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `だが意外なことに、${you.name} の言葉を聞いても、エイシンフラッシュは嬉しそうな顔をせず、考え込んでしまった。`,
      );
      await flash.say_and_wait('では、そのあとは？');
      await era.printAndWait(`しばらくして、${flash.sex}は言った。`);
      era.printButton('「そのあと？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は瞬きした。エイシンフラッシュがそう訊く意図が分からない。`,
      );
      await flash.say_and_wait('言い換えると、あなたの夢は何ですか？');
      era.printButton('「もちろん、お前の夢を叶えることだ。」', 1);
      await era.input();
      await era.printAndWait(`それを聞いて、${you.name} は反射的に答えた。`);
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait(
        `${you.name} の答えを聞いて、エイシンフラッシュは小さく笑った。そう返すだろうと、分かっていたように。`,
      );
      await flash.say_and_wait('いいえ。知りたいのは、あなたの夢です。');
      await era.printAndWait(`次の瞬間、${flash.sex}は首を振った。`);
      await flash.say_and_wait('その件を除いたうえで、あなた自身の本音を。');
      await era.printAndWait(
        `そう言いながら、エイシンフラッシュは ${you.name} を見つめた。紺碧の瞳に、二ヶ月前にも ${you.name} が読み取れなかった揺らぎが、再び走っていた。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `だが今は、目の前の人の細かな表情の変化を見ているうちに、${you.name} にも別の考えが浮かび始めていた。`,
      );
      era.printButton('「もう少し、考えさせてくれ。」', 1);
      await era.input();
      await era.printAndWait(`最終的に、${you.name} はそう言った。`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「フラッシュ？」', 1);
      await era.input();
      await era.printAndWait(
        `トレセン学園へ戻る車の中で、${you.name} はエイシンフラッシュの視線が、ずっとどこかを見つめていることに気づいた。`,
      );
      await flash.say_and_wait(
        '何でもありません。合宿の場所を見ていただけです。',
      );
      era.printButton('「合宿の場所？」', 1);
      await era.input();
      await flash.say_and_wait('はい。こちらで、たくさん学びましたから。');
      await flash.say_and_wait(
        `たとえば ${callname} と一緒に、多くのトレーニングを重ねて、自分の力をさらに伸ばせたこと。`,
      );
      era.printButton('「そうか。」', 1);
      await era.input();
      await flash.say_and_wait(
        'だから、ここへ来るのはこれが最後かもしれないと思うと、どうしても名残惜しくなってしまいます。',
      );
      era.printButton('「その大切な思い出を、胸に刻もう。」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの微妙な表情を見て、${you.name} は慰めの言葉をかけた。`,
      );
      await flash.say_and_wait('はい。');
      await era.printAndWait(
        `${flash.sex}は頷き、それから ${you.name} のほうへ振り返った。`,
      );
      await flash.say_and_wait(`ところで、${callname}。`);
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait(
        '夢を叶えたあと、私が日本に残るとしたら、あなたはどう思いますか？',
      );
      era.printButton('「……えっ？」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの突然の問いが、${you.name} を不意打ちにした。`,
      );
      await flash.say_and_wait(
        '両親のケーキ店を継ぐことは決まっていますが、その計画を進める途中で、なにかの理由で日本にしばらく滞在することもあるかもしれません。',
      );
      await era.printAndWait(
        `自分の質問が唐突すぎると分かっていたのか、続けて${flash.sex}は説明した。`,
      );
      era.printButton('「嬉しいと思う。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `次の瞬間、${you.name} の率直な言葉に、${flash.sex}はわずかに目を見開いた。`,
      );
      await flash.say_and_wait('嬉しい……、ですか？');
      era.printButton('「お前が走る姿を、まだ見続けられるからな。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は頷き、エイシンフラッシュに優しい笑みを向けた。`,
      );
      await flash.say_and_wait('……そう、ですか。');
      await era.printAndWait(
        `エイシンフラッシュは黙り込んだ。${you.name} は、${flash.sex}が視線を逸らしたのに気づいた。`,
      );
      era.printButton('「……フラッシュ？」', 1);
      await era.input();
      await flash.say_and_wait('……いいえ、何でもありません。');
      await era.printAndWait(
        `しばらくして、再び口を開いた${flash.sex}は首を振った。`,
      );
      await flash.say_and_wait(
        'その話は、あとにしましょう。今は、天皇賞（秋）が最優先です。',
      );
      await era.printAndWait(
        `そう言いながら、${flash.sex}の表情はすぐに覚悟へと切り替わった。`,
      );
      await flash.say_and_wait('父と母が、あそこで待っています。だから——');
      era.printButton('「胸を張って、進もう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '輝ける秋・一';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('注目を集める天皇賞（秋）が、ついに始まった。');
      await era.printAndWait('観客「おおおお——！！」');
      await you.say_as_passer_by_and_wait(
        'フラッシュの母',
        'あらあら、これが日本のG1レースなのね。とても熱いこと。',
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの父`,
        `天皇賞（秋）、由緒あるレースのようだな。私たちのSchatzi${flash.sex}は……`,
      );
      await you.say_as_passer_by_and_wait(
        `エイシンフラッシュの母`,
        `${flash.sex}を信じましょう。頑張って、フラッシュ！`,
      );
      era.drawLine();
      await flash.say_and_wait('両親は、無事に会場へ着いたようです。');
      await era.printAndWait(
        `レース前、選手控室で、エイシンフラッシュはスマホの安否確認のメッセージを見て、ほっとした笑みを浮かべた。`,
      );
      await flash.say_and_wait(
        'これで、すべて計画どおりです。私の状態も良好。あとは……',
      );
      era.printButton('「フラッシュの名にかけて、このレースを勝とう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(
        'エイシンフラッシュは力強く頷き、自信の表情を浮かべた。',
      );
      await flash.say_and_wait(
        'これまでの経験は、すべてこのレースの結果への布石です。',
      );
      await flash.say_and_wait('だから、今日だけは。');
      await flash.say_and_wait('私は、勝たなければなりません！');
      era.printButton('「みんなに、お前の信念を証明しよう！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '輝ける秋・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait(
        '司会',
        '今レース、天皇賞（秋）の優勝は——エイシンフラッシュ！！！',
      );
      await you.say_as_passer_by_and_wait(
        `司会`,
        `${flash.sex}に、盛大な拍手を！！！`,
      );
      await you.say_as_passer_by_and_wait(
        `観客`,
        `エイシンフラッシュ！ おめでとう、${you.name}！！！`,
      );
      await flash.say_and_wait('ふぅ……Juhu! Geschafft! やりました！');
      await era.printAndWait(
        '燦然と輝く東京競馬場で、眩い姿のまま最先にゴールを駆け抜けたエイシンフラッシュが、賑わう観客席へ大きく手を振る。',
      );
      await flash.say_and_wait('みなさまの応援、ありがとうございました！');
      await era.printAndWait(
        `${flash.sex}の笑みは、この上なく輝いている。苦難を越えて理想に届いた、抑えきれない喜びだ。`,
      );
      await flash.say_and_wait(
        `ダービー${flash.uma_sex_title}となった、この東京競馬場で、再び勝利を手にできたなんて、本当に……`,
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `フラッシュ、おめでとう、${you.name}。`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `フラッシュの父`,
        `素晴らしいレースだった。${you.name} は、やはり私たちの誇りだ。`,
      );
      await flash.say_and_wait('！！');
      await era.printAndWait(
        `そして、観客席の前方で、海を越えてまで${
          flash.sex_code - 1 ? '娘' : '息子'
        }の走る姿を見届けに来た両親が立ち上がり、${flash.sex}へ拍手を送る。`,
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの母`,
        `もちろん、何もしなくても、${you.name} は私たちのいちばん可愛くて、いちばん大切な宝物よ。それは、いつまでも変わらないわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの父`,
        `それ以上に、${you.name} が自分の道を貫き通したことが、何より尊い。`,
      );
      await you.say_as_passer_by_and_wait(
        `フラッシュの父`,
        `だから、一人の人間として、${you.name} に敬意を表する。`,
      );
      await flash.say_and_wait('お父さん……お母さん……');
      era.printButton(
        '「おめでとう、フラッシュ。夢をちゃんと果たしたな。お前は、俺の誇りでもある。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('トレーナーも……');
      await flash.say_and_wait('ありがとうございます！');
      await era.printAndWait(
        'そこまで言うと、エイシンフラッシュは優雅に身を屈め、草の上に片膝をついた。',
      );
      await flash.say_and_wait('ふぅ——');
      await era.printAndWait(
        `${flash.sex}は深く息を吸い、心の中で用意していたのだろう台詞を口にした。`,
      );
      await flash.say_and_wait(
        '本日の勝利にあたり、心から敬意を捧げるべき方々へ、感謝を述べさせてください。',
      );
      await flash.say_and_wait(
        '厳しくも優しい父と、温かく慈愛に満ちた母。そして……いつも導く立場で傍にいて、力を惜しまず助けてくださったトレーナー。',
      );
      await flash.say_and_wait(
        '皆様の助けがなければ、今の私は、どうあってもこの高みには届かなかったでしょう。',
      );
      await flash.say_and_wait(
        'ですからどうか、この注目の場で、皆様へ、私の最も深い敬意をお捧げすることをお許しください。',
      );
      await era.printAndWait(
        'エイシンフラッシュは深く礼をした。満場の歓声が、光となって空から降り注ぐ。',
      );
      await era.printAndWait(
        '栄誉を携えて帰ってきた騎士へ、ふさわしい褒賞だ。',
      );
      era.drawLine();
      await flash.say_and_wait(`ただいま戻りました、${callname}。`);
      era.printButton('「おかえり、フラッシュ。」', 1);
      await era.input();
      await era.printAndWait('レース後、選手控室。');
      await era.printAndWait(
        `部屋に戻ったエイシンフラッシュは、晴れやかな顔で ${you.name} に挨拶した。`,
      );
      era.printButton('「ご両親との話は、済んだか？」', 1);
      await era.input();
      await era.printAndWait(`それを見て、${you.name} は訊いた。`);
      await era.printAndWait(
        `エイシンフラッシュはコースを下りた瞬間から両親と抱き合っていた。隣にいた ${you.name} も、その団欒を邪魔しにくく、控室で感情を吐き終えた${flash.sex}の帰りを待っていたのだ。`,
      );
      await flash.say_and_wait('はい。');
      await era.printAndWait(
        'エイシンフラッシュは頷き、とても嬉しそうだった。',
      );
      await flash.say_and_wait(
        '父と母に、ドイツを離れてからの数年のことを、簡単に話しました。',
      );
      await flash.say_and_wait(
        'とても楽しい時間でした。お二人の新しい話を聞くのも、私の新しい話を伝えるのも。',
      );
      await flash.say_and_wait('できれば、ずっとこうしていたいくらいです。');
      await era.printAndWait(`${flash.sex}は名残惜しげに感嘆した。`);
      await flash.say_and_wait(
        'ただ残念なことに、もう時間が遅く、両親は先に宿へ戻らなければなりません。',
      );
      era.printButton(
        '「お前も今日はお疲れだ。帰ってゆっくり休め。残りのことは、これからいくらでも時間がある。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '天皇賞（秋）で栄冠を掴み、両親の誇りとなったエイシンフラッシュは、すでに自分の夢を果たしている。',
      );
      await era.printAndWait(
        `つまり、${flash.sex}にはもう、トゥインクル・シリーズを続ける理由がない。そうなれば、家族と過ごす時間はこれからいくらでもあるはずだ。`,
      );
      await flash.say_and_wait(
        '……おっしゃるとおりです。だから、今はそのためにお話しに来ました。',
      );
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュは、${you.name} の言葉の意図を当然聞き取っていた。`,
      );
      await era.printAndWait(
        `次の瞬間、${you.name} は${flash.sex}が笑みを収めるのを見た。`,
      );
      await flash.say_and_wait(`お話ししたいことがあります、${callname}。`);
      era.drawLine();
      await flash.say_and_wait(
        '今年の六月、あなたは私に、夢を叶えたあと何をしたいかと訊きました。',
      );
      await era.printAndWait(
        '白い照明が、エイシンフラッシュの整った横顔を照らしている。',
      );
      await era.printAndWait(
        `${flash.sex}は ${you.name} を見つめ、声は穏やかだった。`,
      );
      era.printButton('「両親のケーキ店を継ぎたい、と言っていたな。」', 1);
      await era.input();
      await flash.say_and_wait('はい。最初から決めていたことです。');
      await flash.say_and_wait(
        'ですが同時に、こうも言いました。あなたと出会ってから経験したことが多すぎて、もう一度時間をかけて計画し直す必要がある、と。',
      );
      era.printButton('「計画し直した結果は？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はエイシンフラッシュの話の流れに乗って訊いた。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `それから、${you.name} は${flash.sex}が小さく息をつくのを聞いた。`,
      );
      await flash.say_and_wait(
        '言ったことは行う。恩は返す。それが私の信条です。',
      );
      await flash.say_and_wait(
        'あなたの助けで、私は両親に認められ、一人前として立てる人間になりました。それは、私がずっと願っていたことです。',
      );
      await era.printAndWait(
        `そう言いながら、エイシンフラッシュは手を伸ばし、${
          flash.sex
        }が${flash.uma_sex_title}として今まで組んできた計画を記したノートを ${you.name} に渡した。`,
      );
      await flash.say_and_wait(
        '率直に申し上げると、今この事実に向き合っても、まだ現実味のない気持ちになります。',
      );
      await flash.say_and_wait(
        'だからこそ、あなたが私にしてくださったことの大きさが分かります。',
      );
      await flash.say_and_wait('ですから、微力でも構いません。');
      await era.printAndWait(
        `${flash.sex}は信念を強調するように、声を強めた。`,
      );
      await flash.say_and_wait(
        'お返しとして、私もあなたを助けたい。あなたの夢を、叶えたいのです。',
      );
      era.printButton('「だから、前に俺の夢を訊いたのか？」', 1);
      await era.input();
      await flash.say_and_wait('はい。');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの揺るがない態度に、${you.name} は黙り込んだ。`,
      );
      await flash.used_to_say_and_wait(
        '栄誉を積み重ねて、両親に……私を誇りに思ってほしいのです。',
      );
      await era.printAndWait(
        `${you.name} は再び、すべての始まりを思い出した。あの選抜レースで、${flash.sex}が ${you.name} に言った言葉を。`,
      );
      await era.printAndWait(
        `当初、${you.name} が${flash.sex}の担当トレーナーを引き受けたのは、${flash.sex}から自ら頼まれたからにすぎなかった。`,
      );
      await you.used_to_say_and_wait('嬉しいと思う。');
      await you.used_to_say_and_wait(
        'お前が走る姿を、まだ見続けられるからな。',
      );
      await era.printAndWait(
        `だが一緒に過ごすうち、${you.name} は徐々に${flash.sex}の在り方に惹かれていった。`,
      );
      await era.printAndWait(
        'レース前、どんな相手にも臆さない勇気。レース中、ミスターシービーすら感嘆した勝ちへの執念。レース後、どんな結果でも冷静に受け止め、なお前へ進もうとする精神。',
      );
      await era.printAndWait(
        'エイシンフラッシュにしかない、その精神は魅力的だ。',
      );
      await era.printAndWait(
        `だから、合宿地からトレセン学園へ戻る車の中で、${flash.sex}が最終的に日本に残ったらどう思うかと訊いたとき、${you.name} は躊躇なく本音を口にしたのだ。`,
      );
      era.printButton('「俺の夢は、だな。」', 1);
      await era.input();
      await era.printAndWait('ここまで考えれば、答えはもう明らかだった。');
      await era.printAndWait(
        `${you.name} は思う。あのときエイシンフラッシュの瞳に宿っていた、深い揺らぎの意味を、ようやく読めたのだと。`,
      );
      era.printButton('「お前が、走り続けるところを、見ていたい。」', 1);
      await era.input();
      await flash.say_and_wait('！！！');
      await era.printAndWait(
        `選手控室で、もう心残りはないはずだった異国の${flash.teen_sex_title}は、${you.name} の言葉に目を見開いた。`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('ふ……ふふ……');
      await era.printAndWait(
        `しばしの沈黙のあと、${flash.sex}は突然、声を上げて笑った。`,
      );
      await flash.say_and_wait('ふふふふ——');
      await flash.say_and_wait('分かりました。それが、あなたの考えでしたら。');
      await era.printAndWait(
        `胸に湧いた感情を吐き切ってから、${flash.sex}は改めて ${you.name} を見た。`,
      );
      await era.printAndWait('紺碧の瞳は、優しさで満ちていた。');
      await flash.say_and_wait('では……');
      await flash.say_and_wait('ご希望どおりに。私のトレーナー。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '未来のこと・四';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        'トゥインクル・シリーズで毎年いちばん熱を帯びる祭典、有馬記念が、本日開幕する。',
      );
      await flash.say_and_wait('ふぅ……レースが、始まりますね。');
      await era.printAndWait(
        `レース前、選手控室。エイシンフラッシュは時刻を確認すると立ち上がり、${you.name} に別れを告げた。`,
      );
      await flash.say_and_wait(
        'ふふっ。考えてみれば、初めてです。自分の夢を前提にせず、レースに出るのは。',
      );
      await era.printAndWait(
        `次の瞬間、${flash.sex}はからかうように微笑んだ。`,
      );
      era.printButton('「一ヶ月の休みは、どうだった？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}の肩を叩き、気遣って訊いた。`,
      );
      await era.printAndWait(
        '夢を果たしたあと、レースへの執念が少し薄れたのか。エイシンフラッシュは当初の予定どおりジャパンカップへは出ず、遠路はるばる来た両親と、この一ヶ月を日本各地の旅に使っていた。',
      );
      await flash.say_and_wait('はい。体が、すっかりほぐれた気がします。');
      await era.printAndWait('エイシンフラッシュは頷き、視線を遠くへ向けた。');
      await flash.say_and_wait(
        '今頃、両親も家で、この有馬記念の結果を見守っているでしょう。',
      );
      era.printButton('「ご両親が見守る中で、もう一度勝とう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await era.printAndWait(
        `${flash.sex}は自信ありげに応え、扉の外へ歩き出した。`,
      );
      await flash.say_and_wait(`ところで、${callname}。`);
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(
        `だが完全に立ち去る前、${flash.sex}にはまだ ${you.name} に言うことがあったらしい。`,
      );
      await flash.say_and_wait(
        'もう一度、言っていただけますか。去年の皐月賞のレース前、選手控室であなたが私に言った、あの言葉を。',
      );
      era.printButton('「皐月賞のレース前？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は瞬きし、エイシンフラッシュの意図をすぐに理解した。`,
      );
      await era.printAndWait(
        `${you.name} は${flash.sex}に、励ましも導きも、たくさん言葉をかけてきた。だが今この場にいちばん似合うのは、おそらくその一句だけだ。`,
      );
      era.printButton('「なすべきことをなし……」', 1);
      await era.input();
      await flash.say_and_wait('尽くすべき力を尽くす。');
      await flash.say_and_wait('ふふふっ。');
      era.printButton('「ははっ。」', 1);
      await era.input();
      await era.printAndWait(
        `言葉がつながった。${you.name} たち二人は、同時に笑った。`,
      );
      await flash.say_and_wait('それでは、行ってきます。');
      await era.printAndWait(
        `こうして、その明るい空気のまま、${flash.sex}は大股でコースへ向かった。`,
      );
      era.printButton('「頑張れ！」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${flash.sex}の後ろ姿を見送り、力強く手を振った。`,
      );
      await era.printAndWait('なんとも、美しい光景だった。');
      await era.printAndWait(
        `約束どおり、${you.name} は信じている。この二人の見守りは、これからも、まだまだ長く続くのだと。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_black_treasure: (() => {
    const title = '漆黒の至宝';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `一人でショッピングモールの生活用品を買っていたとき、${you.name} は近くで、沈んだ顔のエイシンフラッシュを見かけた。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(`それを見て、${you.name} は気になって訊いた。`);
      await flash.say_and_wait(`ああ、${callname}。`);
      await era.printAndWait(
        `声の主が ${you.name} だと分かると、エイシンフラッシュは少し驚いた。`,
      );
      await flash.say_and_wait('いいえ、何でもありません。');
      await era.printAndWait(`次の瞬間、${flash.sex}はまた首を振った。`);
      await flash.say_and_wait(
        '故郷で食べた料理が急に恋しくなって、日本でも材料を探して再現してみようと思っただけです。',
      );
      await flash.say_and_wait('ただ……');
      await era.printAndWait(
        'そこまで言って、エイシンフラッシュの顔に一瞬、迷いが走った。',
      );
      era.printButton('「高いのか？」', 1);
      await era.input();
      await era.printAndWait(
        `その様子を鋭く捉えた ${you.name} は、${flash.sex}が沈んでいる理由を察した。`,
      );
      await flash.say_and_wait('……はい。');
      await era.printAndWait(
        `それを聞いて、${flash.sex}はしばし黙り、それからゆっくり頷いた。`,
      );
      await flash.say_and_wait(
        '料理に使う高級キャビアが、こちらの店では今月の小遣いの範囲を超えてしまって。',
      );
      await flash.say_and_wait(
        'もっと安いブランドで代用することもできますが、それでは最初に懐かしんでいた味にはなりません。',
      );
      await era.printAndWait(
        `言い終えると、${you.name} は${flash.sex}が小さく息をつくのを見た。`,
      );
      await era.printAndWait(
        `しょんぼりしたエイシンフラッシュを前に、${you.name} は——`,
      );
      era.printButton('「成り行きに任せる」', 1);
      if (era.get('flag:当前马币') > 50) {
        era.printButton(`「${flash.sex}にお金を貸す」`, 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} の心には、目の前の人の代わりに買ってあげようという考えがよぎった。だがよく考えると、エイシンフラッシュの性格では、きっと承諾しない。`,
        );
        await era.printAndWait(
          `結局、${you.name} は${flash.sex}が困った顔のまま店を出ていくのを見送るしかなかった。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} の心には、目の前の人の代わりに買ってあげようという考えがよぎった。だがよく考えると、エイシンフラッシュの性格では、きっと承諾しない。`,
        );
        await flash.say_and_wait('えっ？');
        await era.printAndWait('とはいえ、解決策がないわけでもない。');
        await flash.say_and_wait(
          `${callname} の仰ることは……私の分を払う、ということですか？`,
        );
        await era.printAndWait(
          `${you.name} の提案を聞いて、エイシンフラッシュは数秒、固まった。`,
        );
        await flash.say_and_wait(
          'お気持ちはありがたいのですが、このようなことはやはり……',
        );
        await era.printAndWait(
          `すぐ理解した${flash.sex}は、きっぱり首を振り、はっきりと拒んだ。`,
        );
        era.printButton('「未来の小遣いを、先に前借りするだけだ。」', 1);
        await era.input();
        await era.printAndWait(
          `それを見て、${you.name} はエイシンフラッシュに「貸す」と「おごる」の違いを改めて伝えた。`,
        );
        await era.printAndWait(
          `ただ貰うより、こちらのほうが公平で、${flash.sex}も受け入れやすいと ${you.name} は思った。`,
        );
        await flash.say_and_wait('む……');
        await era.printAndWait(
          `案の定、${you.name} の言葉を聞くと、${flash.sex}の顔に迷いが浮かんだ。`,
        );
        await flash.say_and_wait('……分かりました。');
        await era.printAndWait(
          `何度も考えた末、${flash.sex}は頷き、${you.name} の助けを受け入れた。`,
        );
        await flash.say_and_wait('このご恩は、忘れません。');
        await era.printAndWait(`${flash.sex}は改まった口調で言った。`);
        await flash.say_and_wait('約束します。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
