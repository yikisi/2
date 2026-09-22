/**
 * @file サトノダイヤモンド - 育成
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {PrintedSpan} call_68 サトノダイヤモンドのキタサンブラックへの呼び方
     */
    const f = async (daiya, kita, you, callname, call_68) => {
      await era.printAndWait('一日のトレーニングを終えたあと──');
      await daiya.say_and_wait([
        'お疲れさまでした、',
        callname,
        '。本日もご指導、ありがとうございますわ。',
      ]);
      await daiya.say_and_wait('……あっ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        daiya.get_colored_name(),
        ' の視線を追う……まだトレーニングに励む ',
        kita.get_colored_name(),
        ' が見えた。',
      ]);
      await kita.say_and_wait(
        'はあ、はあ……！ まだ足りない、足りない！ もう一周走る！',
      );
      await daiya.say_and_wait(
        '……あの、失礼いたしますわ。私も、追加のトレーニングをさせていただいてもよろしいでしょうか？',
      );
      era.printButton('「無理はしないほうが……」', 1);
      await era.input();
      await daiya.say_and_wait([
        '……実は昨日、',
        call_68,
        ' のレース映像を拝見しまして──',
      ]);
      await daiya.say_and_wait([
        call_68,
        ' の走り、今はますます速く、強くなっていらっしゃいますわ……',
      ]);
      await daiya.say_and_wait(
        '焦っているのは認めますわ。でも……それ以上に、走りたい衝動なんですの！',
      );
      await daiya.say_and_wait(
        '闘志が、燃えてしまいましたの！ ですから……お願いいたしますわ！',
      );
      era.printButton('「なら、やるか！」', 1);
      era.printButton('「その火は明日に取っておこう」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(['えへへ、さすがは ', callname, '！']);
        await daiya.say_and_wait(
          'ありがとうございますわ！ それでは、私も走ってまいります！',
        );
        await daiya.say_and_wait(['──', call_68, '。私……負けませんわよ！']);
        await era.printAndWait([
          'こうして ',
          daiya.get_colored_name(),
          ' は、ライバルへの闘志を胸に、',
          daiya.sex,
          ' の追加トレーニングをやり遂げた。',
        ]);
      } else {
        await daiya.say_and_wait(
          '明日に、取っておく……？ うぅ、我慢しきれる自信がありませんわ……！',
        );
        era.printButton('「闘志は貯めて、最後に一気に爆発させよう」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……わかりましたわ。それでは、そういうことに。明日は、徹底的にトレーニングさせてくださいませ……！',
        );
        await daiya.say_and_wait(
          '……そうですわ！ 今からトレーナー室へ戻って、一緒にレース映像を見ませんこと？',
        );
        await daiya.say_and_wait(
          'そうすれば、胸の衝動はますます高まりますわ。明日、きっとすごく頑張れますもの！',
        );
        era.printButton('「じゃあ、一緒に見よう！」', 1);
        await era.input();
        await daiya.say_and_wait('はい♪');
        await era.printAndWait([
          'こうして、',
          daiya.get_colored_name(),
          ' の熱い解説つきで、',
          kita.get_colored_name(),
          ' を軸にしたレース映像を一緒に見届けた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = 'お大事に！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、怪我をしたサトノダイヤモンドを保健室へ連れてきた。',
      ]);
      await daiya.say_and_wait(
        'トレーナーさん、こんなに気遣ってくださって、ありがとうございますわ。',
      );
      await daiya.say_and_wait(
        'でも……この程度の傷なら、まだトレーニングできると思いますの。',
      );
      await daiya.say_and_wait(
        '応急手当も済ませましたし、今から少し……動かしてもよろしいでしょう？',
      );
      era.printButton('「油断は禁物だよ」', 1);
      era.printButton('「なら、慎重にトレしてみるか」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'でも、ほとんど痛くありませんのよ。気をつければ大丈夫ですわ……！',
        );
        era.printButton('「悪化する前に、やめよう」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……おっしゃる通りですわね。軽い傷でも、うっかりすれば重症になりますもの。',
        );
        await daiya.say_and_wait(
          '申し訳ありません……今日は寮へ戻って、静養いたしますわ。',
        );
        await era.printAndWait(
          `サトノダイヤモンドはやる気に溢れている分、トレーニングできないことが悔しいようだった。それでも${daiya.sex}は、素直に寮へ戻って休んだ。`,
        );
      } else if (fail_again) {
        await daiya.say_and_wait(
          'はい！ 今日のメニュー、全部やり切りたいですわ！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ` はサトノダイヤモンドの意思を尊重し、${daiya.sex}にトレーニングを続けさせた。だが──`,
        ]);
        await daiya.say_and_wait('……はあ……はあ……');
        era.printButton('「……やっぱり、痛いんだろ？」', 1);
        await era.input();
        await daiya.say_and_wait('……っ！？');
        await daiya.say_and_wait(
          '……はい、実は、まだ痛むのです……申し訳ありません、甘く見ておりました……',
        );
        await era.printAndWait([
          '今度は ',
          you.get_colored_name(),
          ' がすぐにトレーニングを打ち切り、サトノダイヤモンドをしっかり休ませた。',
        ]);
      } else {
        await daiya.say_and_wait('……ふっ！ これで終わりましたわ！');
        era.printButton('「怪我したところは大丈夫か？」', 1);
        await era.input();
        await daiya.say_and_wait('大丈夫ですわ！ ご覧くださいまし！');
        await daiya.say_and_wait(
          '軽い運動なら、問題ないようですわね！ ふふ、よかったですわ！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ` は安心しきれなかったが、${daiya.sex}に目立った不調は見えない。傷は、本当に軽微だったのだろう。`,
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は厳禁！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        'サトノダイヤモンドがトレーニング中に怪我をしたため、',
        you.get_colored_name(),
        ` は急いで${daiya.sex}を保健室へ連れていった。`,
      ]);
      await daiya.say_and_wait('痛い……！');
      await daiya.say_and_wait(
        'ちょっと動かしただけで……想像以上に、重いのかもしれませんわ……',
      );
      era.printButton('「しばらく休もう」', 1);
      await era.input();
      await daiya.say_and_wait(
        'でも……ずっと静養していては、夢が遠ざかっていく気がしますの。',
      );
      await daiya.say_and_wait(
        '今は休むのが正しいのでしょう。でも私……この難関を乗り越えて、もっと先へ進みたいのですわ……！',
      );
      await daiya.say_and_wait(
        '痛みは、必ず克服してみせます……このままトレーニングを続けても、よろしいでしょうか？',
      );
      era.printButton('「無理はさせない」', 1);
      era.printButton('「……わかった、君を信じる」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'でも、私が休んでいるあいだに、レースのライバルたちはもっと先へ──',
        );
        era.printButton('「君なら、必ず追いつける」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……わかりましたわ。焦りすぎてはいけませんものね？',
        );
        await daiya.say_and_wait(
          '悔しくはありますわ。でも、この気持ちは傷が治ってから、トレーニングにぶつけます。',
        );
        await era.printAndWait(
          'サトノダイヤモンドは手当を終えると、名残惜しそうに寮へ戻った。',
        );
      } else if (fail_again) {
        await daiya.say_and_wait(
          'ありがとうございますわ！ それでは、コースへ戻りましょう。',
        );
        await daiya.say_and_wait('──大丈夫ですわ、この程度の傷……！', true);
        await daiya.say_and_wait('っ！？', true);
        await daiya.say_and_wait('…………！');
        era.printButton('「大丈夫か！？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '──甘く見ていましたわ。本当に、申し訳ありません……',
        );
        await era.printAndWait(
          `無理をしたせいで、かえって${daiya.sex}の傷は悪化し、回復にかかる時間も延びてしまった。`,
        );
      } else {
        await daiya.say_and_wait(
          '──この程度の痛み、まだ耐えられますわ！',
          true,
        );
        await daiya.say_and_wait(
          'あとは負担をかけすぎないよう、一歩ずつ……ゆっくりと、やり切ります！',
          true,
        );
        await daiya.say_and_wait('……きゃあああああああ！');
        await daiya.say_and_wait(
          'はあ、はあ……！ ふふ、トレーニング、やり遂げましたわ……！ 痛みには、負けませんでした……！',
        );
        await era.printAndWait(
          'サトノダイヤモンドは強い克己心で、傷に負担をかけないよう気を配りながら、トレーニングをやり遂げた。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_g1: (() => {
    const title = '私のあたたかな';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        'サトノダイヤモンドが初めて挑むG1まで、ついに残り一日。',
      );
      era.printButton('「服は持ったか？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい、バッグに入れてありますわ。替えの靴も、忘れずに一足多めに。',
      );
      era.printButton('「蹄鉄は？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'もちろん、打ち終えておりますわ……トレーナーさん、そんなに緊張なさらないでくださいまし。',
      );
      await era.printAndWait(
        `${daiya.sex}の緊張をほぐすつもりが、逆に慰められてしまった。`,
      );
      await era.printAndWait('ブルルルルル……');
      await daiya.say_and_wait(
        'あら、携帯が……お電話ですわ。少々、失礼いたします。',
      );
      await daiya.say_and_wait(
        'もしもし、お父様？ ええ、元気に準備しておりますわ──',
      );
      await era.printAndWait('……');
      await daiya.say_and_wait(
        'お話の途中で電話をいただいて、申し訳ありませんわ。',
      );
      era.printButton('「ご両親からの応援か？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい……ふふふ！ お父様もトレーナーさんと同じで、忘れ物がないかずっと心配していらっしゃいますの。',
      );
      await daiya.say_and_wait(
        'レース前はいつも、まわりの方のほうが私より緊張なさっている気がしますわ。',
      );
      await daiya.say_and_wait(
        '……私が『必ず勝利を持ち帰ります』と申し上げても、お二人はただ、無事で、怪我だけはしないで、と。',
      );
      era.printButton('「本当に、怪我してほしくないんだよ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ。お父様もお母様も、『勝て』とは一度も仰いませんでした。ただ、親として優しく接してくださるだけ。',
      );
      await daiya.say_and_wait(
        'だからこそ私……明日のレースで、勝ちたいのですわ。',
      );
      await daiya.say_and_wait(
        `娘であるこの私が『名だたる${daiya.uma_sex_title}』となり、サトノ家がずっと夢見てきた最初の栄光を、お二人へ捧げます。`,
      );
      await daiya.say_and_wait(
        `お父様もお母様も、どれほどお忙しくても、${daiya.uma_sex_title}界の発展に力を尽くすことを忘れません。`,
      );
      await daiya.say_and_wait(
        'ですから、お二人の努力には『ご褒美』が相応しいと思いますの♪',
      );
      era.printButton('「最高のご褒美を持って帰ろう！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい！ サトノ家、初のG1勝利。必ず、成し遂げてみせますわ！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = '臨戦の気構え';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait('ピンポン♪');
      await daiya.say_and_wait(
        'ふふ、また応援のメッセージですわ。朝から、ずっと鳴りっぱなしですの。',
      );
      await daiya.say_and_wait(
        'ご家族、お友だち、そして私を助けてくださった方々……元気が要るとき、みんな傍にいてくださいます。',
      );
      await daiya.say_and_wait(
        '皆様の想いを裏切らないためにも──このレース、必ず勝ちますわ！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利！';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait(
        'できましたわ！ できましたのよ！ ご覧になりました？ トレーナーさん！',
      );
      await daiya.say_and_wait(
        '今の力、すべて出し切りました……最高の走りができたと思いますわ！',
      );
      era.printButton('「本当に、最高の走りだった！」', 1);
      era.printButton('「この感覚のまま、先へ進もう！」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          'わあ……！ ありがとうございますわ！ トレーナーさんにそう言っていただけて、私……！',
        );
        await daiya.say_and_wait(
          'ふふ……次は、もっと輝く走りを見せますわ！ トレーナーさんとの、お約束ですのよ！',
        );
      } else {
        await daiya.say_and_wait('はい！ 夢へ、まっすぐ……！');
        await daiya.say_and_wait(
          'ふふ、今なら手が届きそうな気がいたしますわ。',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait('入着……サトノ家の名に泥は塗りませんでしたわ。');
      await daiya.say_and_wait('でも、勝利までは……あと一歩ですわね。');
      era.printButton('「十分、立派な結果だ」', 1);
      era.printButton('「この経験を、次のレースに活かそう！」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          'ふふ、お褒めいただき、ありがとうございますわ♪',
        );
        await daiya.say_and_wait(
          'でも、私の夢はこれだけでは済みませんの。もっと強く、もっと強く……！',
        );
      } else {
        await daiya.say_and_wait('はい！ 心を合わせて、次こそ勝ちましょう！');
        await daiya.say_and_wait(
          '学園に戻ったら、作戦会議ですわね！ 今の弱点、徹底的に洗い出しましょう！',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'レース敗北';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait('…………これが、今の私の実力……');
      await daiya.say_and_wait(
        '……申し訳ありません。ご期待に、応えられませんでした。',
      );
      await daiya.say_and_wait(
        '実力も、ペースの読みも外れ……まだ、課題がたくさん残っていますわね。',
      );
      era.printButton('「一緒に片付けよう」', 1);
      era.printButton('「目標へ、もう一度出発しよう」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          'はい！ またお世話になりますわ！ トレーナーさん！',
        );
        await daiya.say_and_wait(
          '鍛え、鍛え……次こそ、いちばん輝く走りを見せますわ！',
        );
      } else {
        await daiya.say_and_wait(
          'ええ、もちろんですわ！ 果たすべき夢は、まだ失っておりませんもの。',
        );
        await daiya.say_and_wait('夢のため……もう一度、精進いたしますわ！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '今度こそ負けません！';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait(
        '……できませんでした。勝てませんでした。また、負けてしまいました……',
      );
      await daiya.say_and_wait(
        'たくさんの期待を、裏切りましたわ。お父様、お母様、サトノ家の皆様……そしてトレーナーさんも。',
      );
      await daiya.say_and_wait(
        '……ゼロから始めるつもりで、努めます。今までの努力が足りないのなら、もっと、もっと……ですから──',
      );
      era.printButton('「そんなに焦らなくていい」', 1);
      era.printButton('「二人三脚で、一緒にスパートしよう！」', 1);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          '大丈夫ですわ！ 次こそ勝つためなら、どんなトレーニングでもやり切ります……！',
        );
        era.printButton('「まずは深呼吸だ」', 1);
        await era.input();
        await daiya.say_and_wait('はい！');
        await daiya.say_and_wait('吸って……吐いて……！ 吸って……吐いて……');
        era.printButton('「……落ち着いたか？」', 1);
        await era.input();
        await daiya.say_and_wait('……あっ！ は、はい。');
        era.printButton('「無理せず、前へ進もう」', 1);
        await era.input();
        await daiya.say_and_wait('トレーナーさん……！ ……はい！');
        await daiya.say_and_wait(
          'はい！ 何度でも、立ち上がりますわ……！ あなたと一緒に、頑張りたいのです！',
        );
      } else {
        await daiya.say_and_wait(
          'それでは……まずは、脚を縛る布が要りますわね！',
        );
        await daiya.say_and_wait('今すぐ、探してまいります！');
        await era.printAndWait(
          '……『二人三脚』は比喩にすぎないのだが、元気は戻ったようだ。また一緒に、頑張ろう──',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビューに向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `メイクデビューのスタンドに立ち、${you.name} はふと、デビューが目前に迫っていたある日を思い出す──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait('──失礼いたします。');
      era.printButton('「マックイーン？」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        'お節介かもしれませんが、知っておいていただいたほうがよいことがございますわ。',
      );
      await mcqueen.say_and_wait(
        'サトノのメイクデビュー、いつも以上に注目を集めそうですのよ。',
      );
      await era.printAndWait(
        `『RKSTスコア合計五億のメイクデビュー！！』メジロマックイーンが ${you.name} に渡した雑誌には、大きな見出しが躍っていた。`,
      );
      await era.printAndWait('『Rookie Knowledge, Stats, and Talent』');
      await era.printAndWait(
        `RKSTスコアとは、毎年七月に発表される、デビュー前の${daiya.uma_sex_title}への評価点だ。`,
      );
      await era.printAndWait(
        `引退したトレーナーや${daiya.uma_sex_title}評論家などが能力を分析し、総合評価を数値化したもの。`,
      );
      await era.printAndWait(
        'サトノダイヤモンドは二億三千万点。記録史上、圧倒的な高得点だ。だからデビュー前から、これほど注目されている。',
      );
      await mcqueen.say_and_wait(
        `サトノより高いスコアの${daiya.uma_sex_title}も、同じメイクデビューに出走するとか。`,
      );
      await mcqueen.say_and_wait(
        `他にも高スコアの${daiya.uma_sex_title}が出走するそうで、合計五億点のメイクデビューになった、ということですわね。`,
      );
      era.printButton('「だから五億対決、か」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        'どれほど注目されても、サトノなら大丈夫だとは思いますけれど……',
      );
      era.printButton('「ありがとう、気をつける」', 1);
      await era.input();
      await era.printAndWait(
        'サトノダイヤモンドは落ち着いた子だ。それでもメイクデビュー。用心に越したことはない。',
      );
      await mcqueen.say_and_wait(
        'ええ。これだけ注目されれば……さまざまな声も生まれますもの。',
      );
      await daiya.say_and_wait(
        'トレーナーさん、本日もよろしくお願いいたしますわ！',
      );
      await you.say_as_passer_by_and_wait(
        '記者A',
        'おい、サトノダイヤモンドが出てきたぞ！',
      );
      await daiya.say_and_wait('……今日は、記者の方が多いようですわね。');
      await you.say_as_passer_by_and_wait(
        '記者B',
        'サトノダイヤモンドさん、取材はよろしいでしょうか？',
      );
      era.printButton('「これからトレーニングなので……」', 1);
      await era.input();
      await daiya.say_and_wait('トレーナーさん、大丈夫ですわ。短い取材なら。');
      await you.say_as_passer_by_and_wait(
        '記者B',
        `ありがとうございます！ メイクデビューは高スコア${daiya.uma_sex_title}たちの対決になりますが、このレースへの抱負を！`,
      );
      await daiya.say_and_wait(
        'あら、そのような呼び方をされておりましたのね。',
      );
      await daiya.say_and_wait(
        '注目していただけるのは嬉しいことですわ。評価に見合うメイクデビューをお見せできるよう、努めます。',
      );
      await you.say_as_passer_by_and_wait(
        '記者B',
        'プレッシャーは感じますか？',
      );
      await daiya.say_and_wait('それは、皆様同じかと存じますわ。');
      await era.printAndWait(
        `サトノダイヤモンドの受け答えは、隙がなかった。高スコア${daiya.uma_sex_title}対決を、ことさら気にしている様子もない。`,
      );
      await daiya.say_and_wait(
        'ふう……お待たせして申し訳ありませんわ。取材は終わりました。',
      );
      era.printButton('「大丈夫か？」', 1);
      await era.input();
      await daiya.say_and_wait('えへへ、少し喉が渇きましたわ。');
      era.printButton('「学園に頼んで、記者を抑えてもらおうか？」', 1);
      await era.input();
      await era.printAndWait(
        'メイクデビューの準備は大切な時期だ。手綱さんに頼めば、取材を適度な範囲に収めてくれるだろう。',
      );
      await daiya.say_and_wait(
        `いえ、結構ですわ。取材を受けるのも、${daiya.uma_sex_title}の務めですから。`,
      );
      await daiya.say_and_wait(
        '私のメイクデビューが話題になり、熱を帯びるなら、むしろ嬉しいことですわ。',
      );
      await daiya.say_and_wait(
        'サトノ家の皆様も、喜んでくださるはずですもの。',
      );
      era.printButton('「これだけの注目は、負担にならないか？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふ、慣れていますわ。小さい頃から、サトノ家でいちばん注目される存在でしたもの。',
      );
      await daiya.say_and_wait(
        'パーティーでも訊かれますの──近頃の成績は？ 将来はトレセン学園へ？ などと。',
      );
      await daiya.say_and_wait(
        `同い年の親戚や${daiya.uma_sex_title}たちからは、私だけが注目されるのは不公平だと、羨ましがられたこともありますわ♪`,
      );
      await era.printAndWait(
        `${daiya.sex}に、無理をしている様子はない。注目に慣れているというのは、本当なのだろう。`,
      );
      await daiya.say_and_wait(
        'もしかして……この状況、トレーナーさんはご迷惑では？',
      );
      await daiya.say_and_wait(
        'トレーニングに差し支えるようでしたら、取材はお断りしても構いませんわ。',
      );
      era.printButton('「君が平気なら、問題ない……！」', 1);
      await era.input();
      await era.printAndWait(
        `かえって${daiya.sex}に ${you.name} を心配されてしまった。ご本人が気にしていないなら、${you.name} が過剰に案じる必要もない。`,
      );
      era.drawLine();
      await era.printAndWait('そして、メイクデビュー当日──');
      await daiya.say_and_wait('──いよいよ、ですわ。');
      era.printButton('「嬉しそうだな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい。私のトゥインクル・シリーズが、始まると思うと……',
      );
      await daiya.say_and_wait('鳥肌が立つほど、ワクワクいたしますわ……！');
      await era.printAndWait(
        'サトノダイヤモンドに緊張はなく、ちょうどいいやる気だけがあった。',
      );
      era.printButton('「行ってこい！」', 1);
      await era.input();
      await daiya.say_and_wait('はい！ サトノダイヤモンド、参りますわ！');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '黎明';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait('はあ、はあ、はあ……');
      await daiya.say_and_wait('…………うん！');
      await you.say_as_passer_by_and_wait(
        '観客A',
        'おお～、サトノダイヤモンド、いい走りだったな……！ あの高スコア、伊達じゃないぜ！',
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        '安定感が、メイクデビューのレベルじゃないね。将来が楽しみだよ！',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        'G1でも勝ってくれよな！！ 『サトノ家の呪い』を破って……！',
      );
      await daiya.say_and_wait('トレーナーさん！！');
      await daiya.say_and_wait('ようやく、無事にデビューできましたわ！');
      era.printButton('「ああ」', 1);
      await era.input();
      await daiya.say_and_wait('走り終えて、やっと実感が湧きました。');
      await daiya.say_and_wait(
        'レース中の歓声……他の選手の圧、吐息。毛穴の奥まで感じる緊張……',
      );
      await daiya.say_and_wait(
        'どれも、初めての空気ですわ。これが、本物のレース……！',
      );
      await daiya.say_and_wait(
        'マックイーンもキタちゃんも、この空気の中で走っていたのですね……',
      );
      await daiya.say_and_wait('私もようやく、同じ舞台に立てましたわ……！');
      await era.printAndWait(
        `サトノダイヤモンドは、かなり興奮している。このメイクデビューが、${daiya.sex}に深く染みたのだろう。`,
      );
      await daiya.say_and_wait(
        '……この脚で走り続け、勝ち、また勝ちます。サトノ家の悲願、必ず果たしますわ！',
      );
      await era.printAndWait(
        `帰り際の人波に乗り、競馬場から駅へゆっくり歩いていく。`,
      );
      await you.say_as_passer_by_and_wait(
        '観客C',
        `あのサトノダイヤモンドって${daiya.uma_sex_title}、${
          daiya.sex
        }の走り、すごく綺麗だったよ！ 五億対決の！`,
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        `${daiya.sex}の末脚、すごそうだったな！`,
      );
      await you.say_as_passer_by_and_wait(
        '観客C',
        'そのうちG1にも出るんじゃない？ 日本ダービーも期待できそう！',
      );
      await you.say_as_passer_by_and_wait(
        `観客B`,
        `……ん？ ところで──サトノグループから、G1を勝った${daiya.uma_sex_title}は出てるのか……？`,
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `いないよ。昔はサトノ家の${daiya.uma_sex_title}も結構出ていたけど、G1は一度も勝ってない。`,
      );
      await you.say_as_passer_by_and_wait(
        `観客A`,
        `だから雑誌にも──『今なおG1${daiya.uma_sex_title}のいないサトノ家の呪い』なんて見出しが……`,
      );
      await era.printAndWait(
        '観客C「へえ──そんな噂があるのか。呪いのせいでG1が勝てない、ってこと？」',
      );
      await era.printAndWait(
        `観客A「そうだよ。サトノダイヤモンドはサトノ家に久々に生まれた${daiya.uma_sex_title}だ。G1を勝ってほしいよな。」`,
      );
      await era.printAndWait(
        `${you.name} は先を歩く人たちの話を聞きながら、ちらりとサトノダイヤモンドを見る。`,
      );
      await daiya.say_and_wait('ふふ、呪いなら、必ず解いてみせますわ！');
      await era.printAndWait(
        `サトノダイヤモンドは明るい微笑みを浮かべ、${you.name} に気合たっぷりの応援ポーズを向けた。`,
      );
      await era.printAndWait(
        `${you.name} は思う。心の強い、揺るがない${daiya.sex}なら、噂も呪いも、きっと消せるだろう。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = '私をつくるもの';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus, kiku_sho) => {
      await era.printAndWait(
        `メイクデビューのあと、${you.name} はサトノダイヤモンドと次の目標を話し合った。`,
      );
      await era.printAndWait(
        `「G1を勝てる名だたる${daiya.uma_sex_title}になる」──${
          daiya.sex
        }のその目標を思えば、ジュニア級のG1を選ぶのが筋だろう──`,
      );
      era.printButton('「次のレース、どう考えている？」', 1);
      await era.input();
      await daiya.say_and_wait('クラシック三冠に、挑みたいですわ。');
      era.printButton('「ジュニア級のG1は選ばないのか？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'G1で勝つことも目標ではありますわ。ですが、それは過程にすぎません。',
      );
      await daiya.say_and_wait(
        `サトノ家が望む『名だたる${daiya.uma_sex_title}』とは、${daiya.uma_sex_title}界の発展を支えられる${daiya.uma_sex_title}のことですわ。`,
      );
      await daiya.say_and_wait(
        `ご存じの通り、サトノ家は${daiya.uma_sex_title}界へ貢献するため、長年、運営の協力や慈善活動に力を注いできました。`,
      );
      await daiya.say_and_wait(
        `『G1を勝てる名だたる${daiya.uma_sex_title}』を数多く育てることも、${daiya.uma_sex_title}界を支える貢献のひとつですわ。`,
      );
      await daiya.say_and_wait(
        `私の目標は、内側から${daiya.uma_sex_title}界と、${daiya.uma_sex_title}競走の文化を支える存在になることです。`,
      );
      await daiya.say_and_wait(
        `そうであるなら、いちばん正統な道を歩まねばなりませんわ。私の出走がクラシック三冠を盛り上げるなら、それも${daiya.uma_sex_title}界への貢献でしょう。`,
      );
      await daiya.say_and_wait([
        'できれば、万全の状態で ',
        sats_sho,
        ' に挑みたいのです。',
      ]);
      era.printButton('「次の目標は『皐月賞』か？」', 1);
      await era.input();
      await era.printAndWait(
        '万全に仕上げるなら、ジュニア級を優先すべきではない。目標は「皐月賞」がふさわしい。',
      );
      await daiya.say_and_wait('はい。いかがでしょう？');
      era.printButton('「わかった」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} に反対する理由はない。クラシック三冠を制せば、G1勝利も必然だ。ただ──`,
      );
      await daiya.say_and_wait('……どうかなさいました？ そんなに、お顔を見て。');
      era.printButton('「いつも、そんなに揺るがないんだなと思って」', 1);
      await era.input();
      await daiya.say_and_wait(
        '目標のことで？ それが、私がこの世に生まれた理由ですから。疑う余地はありませんわ。',
      );
      await daiya.say_and_wait(
        `……そういえば、私と両親がなぜ名だたる${daiya.uma_sex_title}にこれほどこだわるのか、まだお話ししていませんでしたわね。`,
      );
      await daiya.say_and_wait(
        `先ほども申しました通り、サトノ家は${daiya.uma_sex_title}界の発展に熱を抱いてきました。ですが、名だたる${daiya.uma_sex_title}を育てた経験は、今まで一度もありません。`,
      );
      await daiya.say_and_wait(
        `サトノ家の${daiya.uma_sex_title}で、G1を勝った者は一人もおりませんの。`,
      );
      await daiya.say_and_wait(
        'いつしか、それは『サトノ家の呪い』と呼ばれるようになりました。',
      );
      await daiya.say_and_wait(
        `それに、長いあいだ男の子ばかりが生まれ、一族に新しい${daiya.uma_sex_title}が現れず……`,
      );
      await daiya.say_and_wait(
        `サトノ家は一時、${daiya.uma_sex_title}が生まれないことまで呪いのせいだと考えたほどですわ。`,
      );
      await daiya.say_and_wait(
        `そして私は、その呪いを解いて生まれた${daiya.uma_sex_title}──`,
      );
      await daiya.say_and_wait(
        'サトノ家の夢を叶えるために生まれたのが、私ですわ。',
      );
      await daiya.say_and_wait(
        'それに両親はサトノグループの中心にいる方々。小さい頃から、たくさんの支えと助力をいただきました。',
      );
      await daiya.say_and_wait(
        'サトノ家すべての期待があって、今の私があります。',
      );
      await daiya.say_and_wait('──それは、私の心の支柱でもありますわ！');
      await daiya.say_and_wait(
        'だから私、サトノ家の期待に応えたいのです。それが私の夢！ 揺るぐことなど、絶対にありませんわ！',
      );
      await daiya.say_and_wait(
        `サトノ家の${daiya.uma_sex_title}はG1を勝てないという呪い、私なら解ける──`,
      );
      await daiya.say_and_wait(
        'クラシック三冠を勝って、それを証明してみせますわ！',
      );
      era.printButton('「わかった、クラシック三冠を目指そう」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ありがとうございますわ！ それでは第一戦は、『皐月賞』ですわね。',
      );
      await era.printAndWait([
        'クラシック三冠に挑むなら、',
        sats_sho,
        ' より長い ',
        toky_yus,
        ' と ',
        kiku_sho,
        ' にも備えねばならない。',
      ]);
      await era.printAndWait([
        `今から始めれば、丁寧に準備する時間は足りる。その先の目標も見据えながら、来年の `,
        sats_sho,
        ' へ備えよう。',
      ]);
      era.drawLine();
      await daiya.say_and_wait(
        '──ウォーミングアップは終わりましたわ。最初のメニューは……',
      );
      await kita.say_and_wait('あっ────！！ ダイヤ、ダイヤ！');
      await daiya.say_and_wait(
        'わわっ！ キタちゃん、どうなさいました？ そんなに慌てて……',
      );
      await kita.say_and_wait(
        'ねえねえ、見たよ！ ダイヤのメイクデビュー、見たよ！！',
      );
      await kita.say_and_wait(
        '現場には行けなかったけど、映像で見たんだ！ 超～～～興奮した！',
      );
      await kita.say_and_wait(
        '寮の大画面でみんなと見たの！ テレビに向かって『ダイヤ、頑張れ──！』って叫んじゃった。',
      );
      await kita.say_and_wait('声がデカすぎて、みんなに怒られちゃったけど。');
      await kita.say_and_wait(
        'でもダイヤのあのレース、手に汗握るほど凄かったよ！',
      );
      await daiya.say_and_wait(
        'ふふ、キタちゃんらしいですわ。応援、ありがとうございますわ！',
      );
      await kita.say_and_wait(
        'なんか……自分のメイクデビューのときとは違う嬉しさだった。見てて、胸が躍っちゃった！',
      );
      await kita.say_and_wait(
        'ダイヤのレース中の顔、学園の模擬レースや併走のときと全然違ってて……',
      );
      await kita.say_and_wait(
        'そのとき初めて、ああ、ダイヤも本当にアタシと同じ場所まで来たんだ、って思ったんだ。',
      );
      await kita.say_and_wait('……ダイヤ、デビューおめでとう！');
      await daiya.say_and_wait('ええ、お待たせいたしましたわ……キタちゃん！');
      await kita.say_and_wait(
        'へへ、ダイヤがアタシの後ろを追い始めそうだと思うと、アタシももっと頑張らないとね！',
      );
      await kita.say_and_wait([
        'アタシは ',
        sats_sho,
        ' と ',
        toky_yus,
        ' を逃しちゃったけど、',
        kiku_sho,
        ' は絶対勝つから！！',
      ]);
      await kita.say_and_wait('ダイヤの姉貴分として、先にG1を勝たないとね！');
      await daiya.say_and_wait('私の次の目標も、クラシック三冠ですわ。');
      await kita.say_and_wait('えっ！？ そうなの！？');
      await daiya.say_and_wait([
        'ええ。ですからキタちゃんの ',
        kiku_sho,
        ' ……しっかり参考にさせていただきますわね。',
      ]);
      await kita.say_and_wait(
        'むむ～！ ならなおさら負けられない！ 悪い見本には絶対ならないから！',
      );
      await kita.say_and_wait(
        'じゃあ先にトレーニング戻るね！ ばいばい、ダイヤ！',
      );
      await daiya.say_and_wait(
        '私も、自分のレースをしっかり走りますわ！ もう少しだけ、待っていてくださいまし！',
      );
      await kita.say_and_wait('了解──！ お互い頑張ろうな！');
      await era.printAndWait(
        'キタサンブラックは風のように駆けていった。話しているだけで相手に活力をくれる、不思議な子だ。',
      );
      era.printButton('「確か……一緒に走ると、約束していたんだったな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい、小さい頃からの約束ですわ。ずっと一緒に走ると、約束したのです。',
      );
      await daiya.say_and_wait(
        'キタちゃんは、同い年で出会った人のなかで、初めて私より『強い』方でした。',
      );
      await daiya.say_and_wait(
        'それから親友になりました……キタちゃんは、外の世界を知らなかった私を、たくさん連れていってくださいました。',
      );
      await daiya.say_and_wait(
        '私はいつも、先を走るキタちゃんを追いかけて、ずっと、ずっとその背中を……',
      );
      await daiya.say_and_wait(
        '追いつきたい、超えたいと、小さい頃からずっと思っていました。',
      );
      await daiya.say_and_wait(
        'キタちゃんは親友であると同時に、ずっと勝ちたい目標でもありますの。',
      );
      await daiya.say_and_wait(
        'それに、キタちゃんは本当に素晴らしいのですよ。私にない粘り強さ……超えた意志の力、と申しましょうか？',
      );
      era.printButton('「なんとなく、わかる気がする……！」', 1);
      await era.input();
      await daiya.say_and_wait([
        'ふふふ、でしょう？ ',
        sats_sho,
        ' と ',
        toky_yus,
        ` は${kita.sex}、残念ながら敗れてしまいましたけれど……`,
      ]);
      await daiya.say_and_wait(
        'キタちゃんは絶対に諦めない子ですわ。これからのレースこそ、勝負ですのよ！',
      );
      await daiya.say_and_wait(
        'ですから私も、歩みを速めねばなりませんわ。『皐月賞』、必ず勝ちます！',
      );
      await era.printAndWait(
        `勝ちたい目標──キタサンブラックの存在がサトノダイヤモンドをさらに伸ばす。その話を聞き、${you.name} はいっそう確信した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = '今はまだ遠き';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho 皐月賞（色つき名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色つき名前）
     */
    const f = async (daiya, nature, dictus, pama, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `今日 ${you.name} はサトノダイヤモンドと一緒に、キタサンブラックが出走する『菊花賞』を観戦しに来ていた。`,
      );
      await daiya.say_and_wait('あ、キタちゃんたちが出てきましたわ！');
      await daiya.say_and_wait('あれ……？ キタちゃん、元気がなさそう……？');
      await daiya.say_and_wait('緊張、でしょうか……？');
      await nature.print_and_wait('？？？「……あの人が出てないからだろ。」');
      await era.printAndWait(
        `ナイスネイチャが人混みからふいに現れた。${daiya.sex}はサトノダイヤモンドの入学当時、歓迎会を開いてくれた先輩のひとりだという。`,
      );
      await daiya.say_and_wait([
        'ああ……！ きっとそうですわ、',
        sats_sho,
        ' と ',
        toky_yus,
        ' を勝った、あの方……',
      ]);
      await nature.say_and_wait(
        `そう、${nature.sex}は今日出てない。キタサンは『菊花賞』であの人に勝つために、ここまで頑張ってきたんだからね。`,
      );
      await nature.say_and_wait(
        'そりゃ気も沈むわ……それに見てよ、会場にも主役不在の空気が漂ってる。',
      );
      await daiya.say_and_wait('主役が、不在ですって……');
      await daiya.say_and_wait('……っ！');
      await daiya.say_and_wait('キタちゃん──！！');
      await daiya.say_and_wait('あっ……！');
      await daiya.say_and_wait(
        'キタちゃん、今は集中していらっしゃいますわ……私たちの心配は、いらなかったようですわね！',
      );
      await daiya.say_and_wait(
        `${daiya.sex}なら、今日の主役は自分だと、皆様に見せつけられますわ！`,
      );
      await era.printAndWait(
        '実況「祭りだ！ 淀の祭りだ！ キタサンの祭りが始まった！ 菊花賞を制したのはキタサンブラック──！」',
      );
      await daiya.say_and_wait('すごい……！ さすがキタちゃん！！');
      await nature.say_and_wait('……はあ、キタサンも主役の光を持ってたのか……');
      await daiya.say_and_wait(
        'でも……キタちゃん、最後の進路争いで少し苦戦なさっていたようですわ……',
      );
      await daiya.say_and_wait(
        '……私なら、末脚で勝負しますから、内側に閉じ込められないよう、第四コーナーで外へ出して、それから……',
      );
      await nature.say_and_wait(
        '…………うそでしょ？ わあ～、こっちの子も眩しすぎるわ～',
      );
      await era.printAndWait('そして、『菊花賞』を観戦した翌日──');
      era.printButton('「今日のメニューはここまで！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'トレーナーさん、まだやれますわ！ ちょうどスタミナも伸ばしたくて……追加トレーニング、お願いいたしますわ！！',
      );
      era.printButton('「今はまだ、スタミナを追い込む段階じゃない」', 1);
      await era.input();
      await daiya.say_and_wait('では、坂道スパートなどはいかがでしょう！？');
      await era.printAndWait(
        `サトノダイヤモンドは、かなり積極的だ。だが ${you.name} は、まだジュニア級の${daiya.sex}に負担の大きいトレーニングをさせるつもりはない。`,
      );
      await era.printAndWait(
        `${you.name} は${daiya.sex}に説明した。体が育ち切る前に大きな負荷をかければ、怪我につながりかねない。`,
      );
      await daiya.say_and_wait(
        'ああ……おっしゃる通りですわ。申し訳ありません……キタちゃんの『菊花賞』を見て、自分ももっと頑張らねばと……',
      );
      await era.printAndWait(
        `昨日のレースに刺激されたらしい。今は、やる気に満ちている。`,
      );
      await era.printAndWait(
        `ならば、体に負担をかけずに、${daiya.sex}の熱をきちんと発散させるなら──`,
      );
      era.printButton('「学園の呪いを解くトレーニングは、どうだ？」', 1);
      await era.input();
      await daiya.say_and_wait('やりますわ！！');
      await daiya.say_and_wait(
        'では早速参りましょう！ その呪い、どこにありますの！？',
      );
      await era.printAndWait(
        `${daiya.sex}は ${you.name} の提案に、目を輝かせた。`,
      );
      await daiya.say_and_wait('始めましょう、最初の呪いは何ですの！？');
      era.drawLine();
      await era.printAndWait(
        `学園の呪い、その一『屋上でメンコをして勝った者は、下りで滑る』。${you.name} が急いでメンコを取り出した、そのとき──`,
      );
      await pama.print_and_wait('？？？「あれ？ サトノとトレーナーじゃん！」');
      await pama.say_and_wait(
        'なになに？ メンコやるならアタシも入れてよ！ ちょうど暇してたとこ──！',
      );
      await era.printAndWait(
        `声をかけてきたのはメジロパーマー。傍らにはイクノディクタスとナイスネイチャもいる。`,
      );
      await daiya.say_and_wait(
        'ご一緒いただけるなら、もちろんですわ！ 実は今、呪い解きのトレーニングをしておりますの。',
      );
      await nature.say_and_wait(
        '……はあ？ 呪い解きのトレーニング？ どういうこと？',
      );
      await pama.say_and_wait(
        'なるほど、そういうことね。じゃあアタシたちも手伝うよ！',
      );
      await dictus.say_and_wait(
        'ええ、そうね。学園の呪いなら多くはないけれど、十個ほどは把握しているわ。',
      );
      await dictus.say_and_wait(
        'ここの呪いは『屋上でメンコをして勝った者は、下りで滑る』、でしょう。',
      );
      await dictus.say_and_wait(
        'サトノがメンコに勝って、下りで滑らなければ、呪いを解いたことになるはずよ。',
      );
      await pama.say_and_wait('そういえばネイチャ、メンコ強いよね！');
      await nature.say_and_wait(
        '強くはないよ……よくやるだけ。で、サトノはメンコ、できるの？',
      );
      await daiya.say_and_wait('経験は少ないですが、努めますわ！');
      await pama.say_and_wait(
        '……となると、ネイチャに勝つだけでも一苦労かもね。',
      );
      await daiya.say_and_wait('──着きましたわ！');
      await pama.say_and_wait('おお～！ 階段、全然滑らなかった！');
      await daiya.say_and_wait('えへへ！ 最初の呪い、解けましたわ！');
      era.drawLine();
      await dictus.say_and_wait(
        '購買の呪い『最後の一本のジュースを買った者は、一日中ついていない』。',
      );
      await daiya.say_and_wait('あ、ちょうど最後の一本ですわね。');
      await dictus.say_and_wait(
        '運の良し悪しを見るなら……私とサトノで、くじを引いてみましょう。',
      );
      await nature.say_and_wait(
        '──イクノは四等、サトノは一等。いやー、運いいね。',
      );
      await daiya.say_and_wait(
        'えへへ！ 二つ目の呪いも解けましたわ！ 成功です～！！',
      );
      era.drawLine();
      await daiya.say_and_wait(
        '──これで十個目ですわ！ 十個連続で、呪いを解きましたわ！！',
      );
      await pama.say_and_wait(
        '十個も解いちゃうなんて。サトノ、すごすぎ……尊敬するよ。',
      );
      await daiya.say_and_wait('ふふ、お褒めいただき恐縮ですわ。');
      await pama.say_and_wait(
        '謙遜しないでよ。呪いも家の夢も、逃げずに真正面から向き合うサトノは、本当に立派だと思う。',
      );
      await pama.say_and_wait('その点、マックイーンに似てるね。');
      await daiya.say_and_wait('本当ですの！？ 嬉しいですわ！');
      await daiya.say_and_wait('私……マックイーンを、崇拝しておりますの。');
      await daiya.say_and_wait(
        '自律して目標へ進み、どれほど大きな圧力にも揺るがない、凛とした姿が、私の目標ですわ。',
      );
      await daiya.say_and_wait(
        'マックイーンがメジロ家の使命を背負い果たしたように、私もサトノ家の悲願を叶えたいのです。',
      );
      await pama.say_and_wait(
        'ふふ、マックイーンも、家の夢のために頑張るサトノのこと、いつも褒めてるよ。',
      );
      await daiya.say_and_wait(
        'まだまだですわ。今のところ、特筆すべき成績も残しておりませんもの。',
      );
      await nature.say_and_wait(
        `……なんか……主役の光を持つ${daiya.uma_sex_title}って、楽でもないみたいだね……`,
      );
      await pama.say_and_wait(
        'アタシたちも応援するから。サトノ、頑張れよ！ 絶対に負けるな！',
      );
      await daiya.say_and_wait('はい！ ありがとうございますわ！');
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {CharaTalk} callname_68 キタサンブラックのプレイヤーへの呼び方
     * @param {CharaTalk} k_call_d キタサンブラックのサトノダイヤモンドへの呼び方
     */
    const f = async (daiya, kita, you, callname, callname_68, k_call_d) => {
      await daiya.say_and_wait([callname, '！']);
      if (era.get('cflag:68:招募状态') === recruit_flags.yes) {
        await kita.say_and_wait([k_call_d, ' のトレーナー！']);
      } else {
        await kita.say_and_wait([callname_68, '！']);
      }
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「初詣、そのときはよろしくお願いいたしますわ！」',
      ]);
      await era.printAndWait(
        `二人からの、熱のこもった今年最初のお願いだった。新年の願いを込めるため、三人で神社へ向かう。`,
      );
      await daiya.say_and_wait('うーん～～、何をお願いいたしましょう。');
      era.printButton('「クラシック三冠の勝利、じゃないのか？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'それは、私自身が成し遂げることですわ。神様にお願いするものではありません。',
      );
      era.printButton('「呪い解きは？」', 1);
      await era.input();
      await daiya.say_and_wait('呪いは、私の力で打ち破りますわ！');
      await daiya.say_and_wait(
        '……いつもこうなのです。神様にお願いする段になると何を願うべきか分からず、毎年長く悩んでしまいます……',
      );
      await era.printAndWait(
        `そこで ${you.name} は${daiya.sex}に、『今年の抱負』を神前で宣する案を出した。`,
      );
      await daiya.say_and_wait(
        'よいお考えだわ！ 神様に宣した以上、果たさないわけにはいきませんもの！',
      );
      await daiya.say_and_wait('つまり必勝祈願ではなく、必勝の使命ですわ！');
      await era.printAndWait(
        `……${daiya.sex}は、神前にかなり重い誓いを立てるつもりらしい。`,
      );
      await daiya.say_and_wait(
        '今年の抱負……クラシック三冠を勝つだけでは、あまりに当然すぎますわ。',
      );
      await daiya.say_and_wait(
        `サトノ家の${daiya.uma_sex_title}として、名だたる${daiya.uma_sex_title}はどのような走りをすべきか……`,
      );
      await daiya.say_and_wait('なりたい姿──', true);
      await daiya.say_and_wait('特に大切にすべきこと……', true);
      await daiya.say_and_wait(
        '胸を張って誇れる走りを、自信を持って見せますわ。',
      );
      await daiya.say_and_wait(
        'マックイーンのように、誇りと栄光を帯びて。サトノ家を代表する気品を、皆様にお見せします。',
      );
      era.printButton('「君らしい。いいと思う」', 1);
      await era.input();
      await era.printAndWait(
        `ダイヤモンドのような気品ある走り。小さい頃から一流の教育を受けてきた${daiya.sex}ならではの抱負だ。`,
      );
      await daiya.say_and_wait(
        'キタちゃん、もうお決まりのようですわね。では、一緒に神様へお願いしましょう。',
      );
      await kita.say_and_wait('うん……！');
      await kita.say_and_wait(
        '『春のシニア三冠』……！ もっとたくさんの人に応援してもらえるよう、しっかり走る！ そして笑顔を届ける！',
      );
      await daiya.say_and_wait(
        `私は『クラシック三冠』を勝ちますわ！ サトノ家の${daiya.uma_sex_title}として、まばゆい走りをお見せすると誓います！`,
      );
      await era.printAndWait(
        `目指すレースは違っても、${daiya.couple_title}の瞳の光は同じだった──`,
      );
      await era.printAndWait(
        `分かれ道の手前まで並走するその在り方に、${you.name} は${daiya.couple_title}の幼い頃からの交わりを強く感じた。`,
      );
      await kita.say_and_wait(
        'へへ！ アタシもだんだん注目されてきたんだ！ もっと支持してもらえるよう、頑張るよ！',
      );
      await daiya.say_and_wait(
        'あら、私もダイヤモンドの名に恥じぬよう、皆様を魅了する走りをお見せしますわ。',
      );
      await kita.say_and_wait(
        'む……！ アタシが先に『春のシニア三冠』でみんなをメロメロにするからね！',
      );
      await daiya.say_and_wait(
        'む……私の『クラシック三冠』のときには、皆様の目は私へ向きますわ！',
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「むむ～～～勝つのは私ですわ！！ むむ～～～勝つのはアタシだー！！」',
      ]);
      await kita.say_and_wait('じゃあ新年対決で勝負だ！');
      era.printButton('「二人とも、落ち着いて……！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'トレーナーさん、ご心配なく。新年対決は毎年の恒例ですわ。',
      );
      await daiya.say_and_wait(
        '勝敗をつけるには、これ以上なく相応しいのです！',
      );
      await era.printAndWait(
        '二人とも熱が上がり、対抗をやめそうにない。まあ、毎年の恒例なら、危険はあるまい……',
      );
      await daiya.say_and_wait(
        '対決の内容は、トレーナーさんにお決めいただきましょう！',
      );
      await kita.say_and_wait(
        'よろしく！ 全力で勝負できるやつ、考えてくれよな！',
      );
      await era.printAndWait(
        `${daiya.couple_title}が二人とも全力を出せて、新年らしい対決……`,
      );
      era.printButton('「長距離駅伝の応援隊をする」（スタミナ+20）', 1);
      era.printButton('「餅まきで餅を拾う」（体力+200）', 2);
      era.printButton('「凧揚げをする」（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kita.say_and_wait(
            `『新春${daiya.uma_sex_title}長距離駅伝』のことだろ！ 今の時間なら……もうすぐこのあたりを通るはず！`,
          );
          await daiya.say_and_wait(
            'どちらがより応援できるかの勝負ですわね！ 審判はトレーナーさんにお任せしますわ！',
          );
          era.printButton('「よし！」', 1);
          await era.input();
          await daiya.say_and_wait('あ、先頭集団が見えましたわ！');
          await kita.say_and_wait(
            '頑張れ────！！ 後ろが迫ってるぞ！ 今が勝負だ！',
          );
          await daiya.say_and_wait(
            'いけますわ、必ず追いつきますわよ！！ そうです、その調子！ そのペースを保って！',
          );
          await era.printAndWait(
            `先頭集団の${daiya.uma_sex_title}たちが、目の前を猛スピードで駆け抜けていく。`,
          );
          await kita.say_and_wait('よし、次の応援ポイントへ行こう！');
          await daiya.say_and_wait('次は上り坂ですわ！');
          era.printButton('「……は？」', 1);
          await era.input();
          await kita.say_and_wait(
            '上りはみんな同じように辛い！ 耐えて！ 負けるな！！',
          );
          await daiya.say_and_wait(
            '今は忍耐が肝要ですわ！ 無理は禁物、自分のペースを守って！！',
          );
          await daiya.say_and_wait('次の地点へ参りましょう！');
          era.printButton('「待て！？ いつまで付いていくんだ……！」', 1);
          await era.input();
          await era.printAndWait([
            daiya.get_colored_name(),
            '&',
            kita.get_colored_name(),
            '「最後の直線ですわ────！！ 抜けていけ──────！！」',
          ]);
          await era.printAndWait(
            '実況「両チーム、ほとんど同時にゴール────！！ 最後まで譲らなかった！！」',
          );
          await kita.say_and_wait('あー、スッキリした！ いっぱい汗かいた～！');
          await daiya.say_and_wait(
            'つい一緒に熱くなってしまいましたわ！ ──ところで、応援隊の勝敗は……',
          );
          era.printButton('「…………っ！ …………むむっ！！」', 1);
          await era.input();
          await era.printAndWait(
            `……${daiya.couple_title}が正月太りする心配は、なさそうだ。よかった。`,
          );
          break;
        case 2:
          await daiya.say_and_wait('餅まき……？');
          await kita.say_and_wait(
            '参拝客に向かって餅を投げる行事だよ！ だから、どっちが多く拾えるか勝負だろ？',
          );
          await daiya.say_and_wait('なるほど、たくさん拾えばよいのですね！');
          await era.printAndWait('餅まきの係「い──────け！」');
          await era.printAndWait('人だかり「きゃ────！ わああああああ！」');
          await kita.say_and_wait('あっちにいっぱい落ちそう！ 行くぞ────！！');
          await daiya.say_and_wait('えっ？ えっ……きゃっ！');
          await daiya.say_and_wait(
            `人……人波に押し出されてしまいましたわ……${daiya.uma_sex_title}エリアも一般エリアも、どちらも……人でいっぱい……`,
          );
          era.printButton('「後ろの地面を探してみて」', 1);
          await era.input();
          await era.printAndWait(
            '視線は、今まさに撒かれる餅に集まっている。少し遠くへ落ちた分や取り損ねた分は、意外と誰も見ていない。',
          );
          await daiya.say_and_wait('あ、本当ですわ！ 後ろの地面に、たくさん！');
          await daiya.say_and_wait('よーし──たくさん拾ってまいりますわ！');
          await daiya.say_and_wait('えへへ、こんなに拾えましたわ！');
          await kita.say_and_wait(
            '大漁大漁～はあ～ああ♪ 帰ったらおしるこにしよう！',
          );
          await daiya.say_and_wait('はい！');
          await era.printAndWait(
            `帰り道で小豆を買い、学園へ戻った三人は、おしるこをたっぷり味わった。`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            'たこ『揚げ』！ 美味しそうですわ！ どちらが多く食べられるかの勝負ですの？',
          );
          await kita.say_and_wait(
            'あー、ダイヤ。揚げるんじゃなくて、凧を空に飛ばすんだよ。',
          );
          await daiya.say_and_wait(
            'ああ、そういうことでしたの！ テレビで見たことがありますわ！ 凧揚げ、面白そうですわね！',
          );
          await kita.say_and_wait(
            'じゃあアタシはあっちで揚げる──飛ばすね！ どっちがうまく上げられるか、ダイヤのトレーナーに審判お願い！',
          );
          await era.printAndWait(
            `サトノダイヤモンドは凧揚げの経験がなさそうなので、${you.name} が先に手本を見せた。`,
          );
          await daiya.say_and_wait(
            'ええ……糸はこう操って……助走のときは風向きにも注意して……',
          );
          await kita.say_and_wait('うおお────────！！');
          await kita.say_and_wait('うお──────！！ …………あれ～？');
          await kita.say_and_wait('おかしいな、全然上がらない。');
          await daiya.say_and_wait('ふふ、次は私ですわ！');
          await era.printAndWait(
            `サトノダイヤモンドが軽く小走りすると、凧も軽やかに空へ上がった。${daiya.sex}は風向きに合わせて助走の向きを変え、うまくいった。`,
          );
          await kita.say_and_wait('わあ、ダイヤすごい！ よーし、アタシも！');
          await kita.say_and_wait('えい──────！！ ……あ！ 上がった上がった！');
          await daiya.say_and_wait(
            '上がるのをお待ちしておりましたわ、キタちゃん！ ここからが勝負ですのよ！',
          );
          await era.printAndWait(
            '理論と技を重んじるサトノダイヤモンド。勢いと粘りで押すキタサンブラック。',
          );
          await era.printAndWait(
            '性格の違いで上げ方も違うが、二人の凧は思い思いに空を舞っていた。',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '皐月賞に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} first_g1 サトノダイヤモンドの初G1出走か
     */
    const f = async (daiya, you, first_g1) => {
      if (first_g1) {
        await era.printAndWait(
          '明日はいよいよ、待ち望んだサトノダイヤモンド初のG1、『皐月賞』だ。',
        );

        era.printButton('「服は持ったか？」', 1);
        await era.input();
        await daiya.say_and_wait(
          'はい、バッグに入れてありますわ。替えの靴も、忘れずに一足多めに。',
        );
        era.printButton('「蹄鉄は？」', 1);
        await era.input();
        await daiya.say_and_wait(
          'もちろん、打ち終えておりますわ……トレーナーさん、そんなに緊張なさらないでくださいまし。',
        );
        await era.printAndWait(
          `${daiya.sex}の緊張をほぐすつもりが、逆に慰められてしまった。`,
        );
        await era.printAndWait('ブルルルルル……');
        await daiya.say_and_wait(
          'あら、携帯が……お電話ですわ。少々、失礼いたします。',
        );
        await daiya.say_and_wait(
          'もしもし、お父様？ ええ、元気に準備しておりますわ──',
        );
        await era.printAndWait('……');
        await daiya.say_and_wait(
          'お話の途中で電話をいただいて、申し訳ありませんわ。',
        );
        era.printButton('「ご両親からの応援か？」', 1);
        await era.input();
        await daiya.say_and_wait(
          'はい……ふふふ！ お父様もトレーナーさんと同じで、忘れ物がないかずっと心配していらっしゃいますの。',
        );
        await daiya.say_and_wait(
          'レース前はいつも、まわりの方のほうが私より緊張なさっている気がしますわ。',
        );
        await daiya.say_and_wait(
          '……私が『必ず勝利を持ち帰ります』と申し上げても、お二人はただ、無事で、怪我だけはしないで、と。',
        );
        era.printButton('「本当に、怪我してほしくないんだよ」', 1);
        await era.input();
        await daiya.say_and_wait(
          'ええ。お父様もお母様も、『勝て』とは一度も仰いませんでした。ただ、親として優しく接してくださるだけ。',
        );
        await daiya.say_and_wait(
          'だからこそ私……明日のレースで、勝ちたいのですわ。',
        );
        await daiya.say_and_wait(
          `娘であるこの私が『名だたる${daiya.uma_sex_title}』となり、サトノ家がずっと夢見てきた最初の栄光を、お二人へ捧げます。`,
        );
        await daiya.say_and_wait(
          `お父様もお母様も、どれほどお忙しくても、${daiya.uma_sex_title}界の発展に力を尽くすことを忘れません。`,
        );
        await daiya.say_and_wait(
          'ですから、お二人の努力には『ご褒美』が相応しいと思いますの♪',
        );
        era.printButton('「最高のご褒美を持って帰ろう！」', 1);
        await era.input();
        await daiya.say_and_wait(
          'はい！ サトノ家、初のG1勝利。必ず、成し遂げてみせますわ！',
        );
        await era.printAndWait(
          `『皐月賞』での勝利へ、気合はいよいよ高まった。初のG1勝利を、心待ちにしている。`,
        );
        await era.printAndWait(
          '──だが、冷や水を浴びせるように、テレビの天気予報は気がかりな情報を映していた。',
        );

        era.printButton('「明日は嵐になるらしい……」', 1);
        await era.input();
        await daiya.say_and_wait(
          'そうみたいですわね。でも、ご安心を！ 最悪の馬場にも備えておりますわ！',
        );
        await era.printAndWait(
          `サトノダイヤモンドの答えは、とても頼もしかった。念のため ${you.name} は、明日はトレセン学園から早めに出発することにした。`,
        );
        era.drawLine({ content: '翌朝' });
        await era.printAndWait(
          '雨は予想ほどではなかったが、止まない強風が吹いている。',
        );
        await era.printAndWait(
          `この風では、電車が止まるかもしれない。${you.name} はタクシーで中山競馬場へ向かうことにした。`,
        );
        await era.printAndWait(
          'だが高速道路も天候の影響で渋滞していた。競馬場に着く予定の時刻になっても、まだ高速を下りられない──',
        );
        await era.printAndWait(
          'インターを下りてからも渋滞は続き、このままでは遅刻する……！',
        );
        era.printButton('「降りて、走って競馬場へ行くしかない！」', 1);
        await era.input();
        await daiya.say_and_wait('はい！ では、先に参りますわ！');
        await daiya.say_and_wait('っ……！ 風が、強い……！');
        await era.printAndWait(
          '強風はサトノダイヤモンドを吹き飛ばしそうなほどだった。この時期には珍しい春の嵐だ。天候に阻まれて途中で足止めされ、遅刻しかけようとは──',
        );
        await daiya.say_and_wait(
          '珍しい春の嵐……渋滞……今日に限って、こんなに悪いことが続くなんて……',
          true,
        );
        await daiya.say_and_wait('……まさか…………呪い、ですの？', true);
        await daiya.say_and_wait(
          'このままでは出走すら危ない……この焦りが、走りにも響いてしまいますわ……！',
          true,
        );
        await daiya.say_and_wait(
          `『名だたる${daiya.uma_sex_title}』になるための、通らねばならない道。呪いが、私を止めようとしているのですか……！？`,
          true,
        );
        await daiya.say_and_wait('……っ！ なら、絶対に負けませんわ！！', true);
        await daiya.say_and_wait('うあああああっ！');
        await era.printAndWait(
          `サトノダイヤモンドは叫びながら、${daiya.uma_sex_title}専用通路を駆けた。`,
        );
        era.printButton('「間に合え……！」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait(
          '中山競馬場に着いたときは、すでに『皐月賞』発走の三十分前だった。',
        );
        await era.printAndWait(
          `${you.name} は${daiya.sex}が間に合ったことを祈りながら──パドックへ向かう。`,
        );
        await era.printAndWait(`サトノダイヤモンドの姿は……`);
        await daiya.say_and_wait('……っ！');
        era.printButton('（間に合った……！）', 1);
        await era.input();
        await daiya.say_and_wait('……ふう……');
        await daiya.say_and_wait('あ、トレーナーさん！');
        era.printButton('「大丈夫か？」', 1);
        await era.input();
        await daiya.say_and_wait('ええ、なんとか間に合いましたわ！');
        await daiya.say_and_wait(
          'ペースは少し乱れましたけれど……かえって、冷静になれたようですわ！',
        );
        await era.printAndWait(
          `サトノダイヤモンドは微笑んだ。${daiya.sex}の精神の強靭さに、${you.name} はまた驚かされる。`,
        );
        await daiya.say_and_wait(
          'クラシック三冠の、最初の一冠……絶対に負けませんわ！！',
        );
        await era.printAndWait(
          `${daiya.sex}のやる気に呼応したのか。厚い雨雲はいつの間にか晴れ、まばゆい陽射しが場内へ戻っていた。`,
        );
      } else {
        await era.printAndWait(
          '明日はいよいよ待ち望んだ皐月賞だ。だが、天気予報は芳しくない。',
        );

        era.printButton('「明日は嵐になるらしい……」', 1);
        await era.input();
        await daiya.say_and_wait(
          'そうみたいですわね。でも、ご安心を！ 最悪の馬場にも備えておりますわ！',
        );
        await era.printAndWait(
          `サトノダイヤモンドの答えは、とても頼もしかった。念のため ${you.name} は、明日はトレセン学園から早めに出発することにした。`,
        );
        era.drawLine({ content: '翌朝' });
        await era.printAndWait(
          '雨は予想ほどではなかったが、止まない強風が吹いている。',
        );
        await era.printAndWait(
          `この風では、電車が止まるかもしれない。${you.name} はタクシーで中山競馬場へ向かうことにした。`,
        );
        await era.printAndWait(
          'だが高速道路も天候の影響で渋滞していた。競馬場に着く予定の時刻になっても、まだ高速を下りられない──',
        );
        await era.printAndWait(
          'インターを下りてからも渋滞は続き、このままでは遅刻する……！',
        );
        era.printButton('「降りて、走って競馬場へ行くしかない！」', 1);
        await era.input();
        await daiya.say_and_wait('はい！ では、先に参りますわ！');
        await daiya.say_and_wait('っ……！ 風が、強い……！');
        await era.printAndWait(
          '強風はサトノダイヤモンドを吹き飛ばしそうなほどだった。この時期には珍しい春の嵐だ。天候に阻まれて途中で足止めされ、遅刻しかけようとは──',
        );
        await daiya.say_and_wait(
          '珍しい春の嵐……渋滞……今日に限って、こんなに悪いことが続くなんて……',
          true,
        );
        await daiya.say_and_wait('……まさか…………呪い、ですの？', true);
        await daiya.say_and_wait(
          'このままでは出走すら危ない……この焦りが、走りにも響いてしまいますわ……！',
          true,
        );
        await daiya.say_and_wait(
          `『名だたる${daiya.uma_sex_title}』になるための、通らねばならない道。呪いが、私を止めようとしているのですか……！？`,
          true,
        );
        await daiya.say_and_wait('……っ！ なら、絶対に負けませんわ！！', true);
        await daiya.say_and_wait('うあああああっ！');
        await era.printAndWait(
          `サトノダイヤモンドは叫びながら、${daiya.uma_sex_title}専用通路を駆けた。`,
        );
        era.printButton('「間に合え……！」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait(
          '中山競馬場に着いたときは、すでに『皐月賞』発走の三十分前だった。',
        );
        await era.printAndWait(
          `${you.name} は${daiya.sex}が間に合ったことを祈りながら──パドックへ向かう。`,
        );
        await era.printAndWait(`サトノダイヤモンドの姿は……`);
        await daiya.say_and_wait('……っ！');
        era.printButton('（間に合った……！）', 1);
        await era.input();
        await daiya.say_and_wait('……ふう……');
        await daiya.say_and_wait('あ、トレーナーさん！');
        era.printButton('「大丈夫か？」', 1);
        await era.input();
        await daiya.say_and_wait('ええ、なんとか間に合いましたわ！');
        await daiya.say_and_wait(
          'ペースは少し乱れましたけれど……かえって、冷静になれたようですわ！',
        );
        await era.printAndWait(
          `サトノダイヤモンドは微笑んだ。${daiya.sex}の精神の強靭さに、${you.name} はまた驚かされる。`,
        );
        await daiya.say_and_wait(
          'クラシック三冠の、最初の一冠……絶対に負けませんわ！！',
        );
        await era.printAndWait(
          `${daiya.sex}のやる気に呼応したのか。厚い雨雲はいつの間にか晴れ、まばゆい陽射しが場内へ戻っていた。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = 'ジンクス';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {number} rank 着順
     * @param {PrintedSpan} toky_yus 日本ダービー（色つき名前）
     */
    const f = async (daiya, you, callname, rank, toky_yus) => {
      await you.say_as_passer_by_and_wait(
        '実況',
        '各馬、第四コーナーから直線へ！',
      );
      await daiya.say_and_wait('──ここ！ ここから……！', true);
      await daiya.say_and_wait('あれ……？');
      await daiya.say_and_wait(
        '脚が……重い……！ ここから加速しなければ……！！',
        true,
      );
      await daiya.say_and_wait('うううううああああああ……！');
      if (rank === 1) {
        await era.printAndWait(
          '実況「ゴールイン！ 優勝はサトノダイヤモンド！！ 嵐のあとの陽射しに、このダイヤが輝く！」',
        );
        await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
        await daiya.say_and_wait('はあ、はあ……はあ、はあ……');
        await you.say_as_passer_by_and_wait(
          '観客A',
          'すごいぞ、サトノダイヤモンド！！ まだまだ伸びそうだ、楽しみだな！',
        );
        await you.say_as_passer_by_and_wait(
          '観客B',
          '最後は苦しそうだったけど、耐えたな！',
        );
        era.printButton('（違う……）', 1);
      } else {
        await era.printAndWait(
          '実況「……注目のサトノダイヤモンドは、『皐月賞』の栄冠を逃した！！」',
        );
        await daiya.say_and_wait('はあ、はあ……はあ、はあ……');
        await era.printAndWait(
          '観客A「あー、ダメだったか。サトノダイヤモンド、期待したほどじゃなかったな。」',
        );
        await era.printAndWait(
          '観客B「最後も苦しそうだったし。この感じだと、長距離は厳しいんじゃないか……？」',
        );
        era.printButton('（あれは、万全の状態じゃなかった……）', 1);
      }
      await era.input();
      await era.printAndWait(
        `${you.name} は${daiya.sex}のレースから、異変に気づいていた。終盤、サトノダイヤモンドは明らかに疲れを見せていた。`,
      );
      await era.printAndWait(
        `${you.name} は思う……発走前に競馬場まで走ったせいで、${daiya.sex}の体力をかなり削ってしまったのではないか……？`,
      );
      await era.printAndWait(
        '走らなければ、間に合わなかった。やむを得ない状況ではあったが……',
      );
      await daiya.say_and_wait(
        '……2000メートルを走り切っただけで限界だなんて……こんな走りで、どうして一番になれるのでしょう……',
        true,
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          '実際、終盤は本当に辛かった……末脚をまったく出せませんでしたわ……',
          true,
        );
        await daiya.say_and_wait(
          'これは……想定していた走りから、あまりに遠い……',
          true,
        );
        await daiya.say_and_wait(
          `いちばん速い${daiya.uma_sex_title}が勝つ『皐月賞』で、勝者がこの走りだなんて……！`,
          true,
        );
        await daiya.say_and_wait(
          `名だたる${daiya.uma_sex_title}だなんて、私、まったく資格がありませんわ！`,
          true,
        );
      } else {
        await daiya.say_and_wait('でも、私の実力がもう少し強ければ……！', true);
      }
      await daiya.say_and_wait('っ……！');
      era.printButton('ダイヤ……！', 1);
      await era.input();
      await daiya.say_and_wait('……トレーナーさん……');
      era.printButton('「自分で競馬場まで走らせてしまって、すまない」', 1);
      await era.input();
      await daiya.say_and_wait(
        'えっ！？ トレーナーさんが謝ることはありませんわ！',
      );
      await daiya.say_and_wait(
        'あの状況では、私も降りて走ったほうがよいと思いましたもの！',
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          '……でも……今日はあいにくの天気でした。100%の力を出せませんでしたわ……',
        );
        await daiya.say_and_wait(
          'これも、サトノ家の呪いの影響、なのでしょうか……？',
        );
        await daiya.say_and_wait('でも、もし本当に呪いのせいなら──');
        await daiya.say_and_wait('私が、解いてみせますわ！');
        await daiya.say_and_wait([
          '次の ',
          toky_yus,
          ' で呪いを打ち破ります！ 最高の走りを見せて、勝ってみせますわ！！',
        ]);
      } else {
        await daiya.say_and_wait(
          '……でも……今日はあいにくの天気でした。100%の力を出せず、負けてしまいましたわ……',
        );
        await daiya.say_and_wait(
          `『サトノ家の${daiya.uma_sex_title}はG1を勝てない』という呪い、私も……`,
        );
        era.printButton('「ダイヤ……」', 1);
        await era.input();
        await daiya.say_and_wait('でも、次は負けませんわ！');
        await daiya.say_and_wait('必ず、呪いを解いてみせます！！');
        await daiya.say_and_wait([
          '次の ',
          toky_yus,
          '！ 必ず呪いを打ち破り、勝ってみせますわ！！',
        ]);
      }
      await era.printAndWait(
        `サトノダイヤモンドは強く誓った。不運な経験が、かえって${daiya.sex}の呪いを打ち破る決意を燃やした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_win_g1: (() => {
    const title = '私を支えるたくさんの';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await era.printAndWait(
        'サトノダイヤモンドが初のG1を勝ったあとのある日。街を歩いていると──',
      );
      await you.say_as_passer_by_and_wait(
        'ゲームセンターの店員',
        'お一人様一回、豪華景品が当たるチャレンジ無料！ ただいま『サトノダイヤモンドG1優勝記念キャンペーン』実施中でーす！！',
      );
      era.printButton('「サトノダイヤモンドのキャンペーン！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は気になってゲームセンターへ入った。店内は派手に飾られ、これまでのレース写真の看板が至る所に貼られている。`,
      );
      await daiya.say_and_wait('あら、トレーナー。こんにちはですわ。');
      await kita.say_and_wait('おっす！ トレーナーも遊びに来たのか？');
      era.printButton('「いや、ダイヤのキャンペーンに驚いて……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は ${daiya.couple_title} に、なぜサトノダイヤモンドのキャンペーンがあるのか尋ねた。`,
      );
      await daiya.say_and_wait(
        'こちらは、サトノグループが開発したゲーム機を置いているゲームセンターですの。',
      );
      await daiya.say_and_wait(
        '私がG1で勝った記念に、グループの関連施設でキャンペーンを実施しているのですわ。',
      );
      await daiya.say_and_wait(
        '『慶事があればお客様へ還元し、喜びを分かち合う』──それがサトノグループの経営方針ですわ。',
      );
      await daiya.say_and_wait(
        '学園側の許可も、すでにいただいているはずですの……',
      );
      await era.printAndWait(
        `レースと直接関係のない雑務だから、学園が ${you.name} の分まで手続きを済ませてくれたのだろう、と ${you.name} は思う。`,
      );
      await kita.say_and_wait(
        'これからファミレス行くところなんだ。トレーナーも一緒にどうだ？',
      );
      await daiya.say_and_wait('そうですわ！ ご一緒いたしましょう！');
      era.printButton('「じゃあ、付き合うよ」', 1);
      await era.input();
      await daiya.say_and_wait('よかったですわ！ えへへ♪');
      await daiya.say_and_wait(
        'あ……そうですわ。その前に、少々お待ちくださいませ。',
      );
      await era.printAndWait(
        'そう言ってサトノダイヤモンドは店員に声をかけ、サインボードを渡し、ゲーム機の一台にもサインをした。',
      );
      await kita.say_and_wait(
        'ダイヤ、こうやってグループの施設を回ってサインしてるんだよな！',
      );
      await kita.say_and_wait(
        '来店した人が少しでも喜べるようにって、自分で思いついたらしいぞ！',
      );
      await kita.say_and_wait(
        '全国の店には回りきれないから、G1で使った蹄鉄をサインボードに押して配ってるんだって！',
      );
      await daiya.say_and_wait('お待たせいたしましたわ。参りましょう。');
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「『ダイヤハンバーグ』を三人前お願いしますわ──！」',
      ]);
      await era.printAndWait('ファミレス店員「はい。少々お待ちください。」');
      era.printButton('「キャンペーン限定メニューまで……」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふふ、実はこの『ダイヤハンバーグ』、母が作ってくれたハンバーグを再現したものですの。',
      );
      await daiya.say_and_wait(
        '……レースの前日、母はシェフに代わって、自らハンバーグを作ってくれましたわ。',
      );
      await daiya.say_and_wait(
        '丸いハンバーグの上にダイヤ型のチーズ……真ん中には、母の手作りの旗が立っていますの。',
      );
      await daiya.say_and_wait(
        'どんなに忙しくても、母は必ず、私を応援するハンバーグを作ってくれましたわ。',
      );
      await kita.say_and_wait('だから『ダイヤハンバーグ』なんだな！');
      await daiya.say_and_wait(
        'ええ。味までは完全に同じ、とはいきませんでしょうけれど……楽しみですわ♪',
      );
      await era.printAndWait(
        'ファミレス店員「お待たせいたしました。『ダイヤハンバーグ』でございます。」',
      );
      await daiya.say_and_wait('わあ、来ましたわ！ いただきます──！');
      await daiya.say_and_wait('もぐもぐ…………んん！');
      await daiya.say_and_wait(
        'このお味……母のにとても近いですわ！ 中のふんわりした食感が、とくにですの……！',
      );
      await daiya.say_and_wait('……ふふふ、母が監修したに違いありませんわ♪');
      await era.printAndWait(
        'ファミレスのメニューにしては、『ダイヤハンバーグ』は手作り感の強い一品だった。',
      );
      await kita.say_and_wait(
        'ここまで盛大にやってるってことは、伯父さんと伯母さん、ダイヤの初G1優勝、相当喜んでるよな？',
      );
      await daiya.say_and_wait(
        'ええ──お電話でお祝いの言葉はいただきましたけれど、特別変わった様子、というほどでもありませんの。相変わらずお忙しそうですわ。',
      );
      await kita.say_and_wait('えっ？ そうなのか？');
      await daiya.say_and_wait(
        'ええ。ただ、次に帰省した折には祝ってくださる、とのことでしたわ。',
      );
      await daiya.say_and_wait('……お二人とも、まだ召し上がれますか？');
      await daiya.say_and_wait(
        'グループ経営の別のカフェでは、G1優勝記念の銅板ケーキセットも実施中ですの。',
      );
      await daiya.say_and_wait(
        'デザートはそちらでいただきましょう♪ そのあとは屋内の遊戯施設も、いまならすべて無料ですわ……',
      );
      era.printButton('「ダイヤのご両親が忙しいの、まさかそのせいで……」', 1);
      await era.input();
      await kita.say_and_wait('G1優勝記念の準備で、忙しくしてるんだと思うぞ。');
      await kita.say_and_wait(
        '……グループ関連、全部でキャンペーンやってたりしないよな……',
      );
      await daiya.say_and_wait(
        'あ、サトノグループのリゾートホテルも、本日予約限定の特別宿泊料金ですわ。',
      );
      await daiya.say_and_wait(
        'よければ、トレーナーも体験なさってくださいませ♪',
      );
      await kita.say_and_wait('本当に全部やってるじゃねえか！！');
      await era.printAndWait(
        '──この祝いの規模は尋常ではない。サトノダイヤモンドの両親と一族が、どれほど喜んでいるかありありと伝わってくる。',
      );
      await era.printAndWait(
        'サトノ家、初のG1勝利。サトノダイヤモンドが成し遂げた偉業は、たくさんの人に喜びを届けた。',
      );
      await era.printAndWait(
        `これからも${daiya.sex}と一緒に、もっとたくさんの勝利を届ける──`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '日本ダービーに向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho 皐月賞（色付き）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き）
     */
    const f = async (daiya, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `数多の${daiya.uma_sex_title}が夢見る舞台──『日本ダービー』。明日に本番を控え、サトノダイヤモンドはいつにも増して気合が入っている。`,
      );
      await daiya.say_and_wait(
        '勝負服と蹄鉄は、昨日のうちに整えてありますわ。',
      );
      await daiya.say_and_wait(
        'ですから今日は、最後のトレーニングに集中できますわ！',
      );
      era.printButton('「とはいえ、微調整くらいしかできないな」', 1);
      await era.input();
      await daiya.say_and_wait(
        '疲れを残したままレースには出られませんものね。大丈夫ですわ。すべてトレーナーのご指示どおりに。',
      );
      await daiya.say_and_wait('──明日は、お天気も良さそうですわ。');
      era.drawLine({
        content: `日本ダービー当日`,
      });
      await daiya.say_and_wait(
        'そろそろ時間ですわ。ふふ、今日は万事順調ですわね♪',
      );
      await era.printAndWait(
        `サトノダイヤモンドの調子は良い。${daiya.sex}の言うとおり、今日は『皐月賞』のときと違い、会場までの道のりも滞りなかった。`,
      );
      await daiya.say_and_wait('最後に蹄鉄を確認して──');
      await daiya.say_and_wait('きゃあっ！');
      era.printButton('「どうした！？」', 1);
      await era.input();
      await daiya.say_and_wait('靴が……');
      await daiya.say_and_wait(
        '靴底が破れているようですわ……蹄鉄を打ったあたりから、割れてしまっている……',
      );
      await daiya.say_and_wait('………………昨日見たときは、何ともなかったのに……');
      await era.printAndWait(
        `${you.name} が靴の状態を見る限り、修理は難しい。予備の靴に履き替えるしかない。`,
      );
      await era.printAndWait(
        '幸い、サトノダイヤモンドは予備の靴にもあらかじめ蹄鉄を打ってあった。',
      );
      await daiya.say_and_wait('…………ええ、大丈夫ですわ！');
      era.printButton('「出走前に見つかってよかった！」', 1);
      await era.input();
      await daiya.say_and_wait('……そうですわね。');
      await daiya.say_and_wait('…………');
      era.printButton('「……ダイヤ？」', 1);
      await era.input();
      await daiya.say_and_wait('また、普段なら起きないことが……');
      await daiya.say_and_wait([
        sats_sho,
        ' も ',
        toky_yus,
        ' も。大事なクラシック三冠のたびに、どうして……！',
      ]);
      await daiya.say_and_wait(
        'まるで、サトノ家の悲願を阻もうとしているみたいですわ。',
      );
      await daiya.say_and_wait('……何かが、私の足を引っ張っているような……');
      await daiya.say_and_wait('……これが、サトノ家の呪いの強さ……');
      era.printButton('「ダイヤ、今は……」', 1);
      await era.input();
      await daiya.say_and_wait(
        'でも！！ 私は負けませんわ！ 呪いなど、すべて打ち破ります！！',
      );
      await daiya.say_and_wait('必ず、やってみせますわ！！ ですから……！');
      await daiya.say_and_wait([
        '私は ',
        toky_yus,
        ' に勝ちますわ！ 絶対に！！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = '不甲斐なさ';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き）
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き）
     */
    const f = async (daiya, etsuko, you, rank, tenn_spr, takz_kin) => {
      await daiya.say_and_wait('……大丈夫ですわ！ 靴も履き替えましたわ！', true);
      await daiya.say_and_wait(
        '予備の靴にも、あらかじめ蹄鉄を打ってありますわ！ ……ほら、履き心地も普通ですわ。',
        true,
      );
      await daiya.say_and_wait('……心配することなど……', true);
      await daiya.say_and_wait('何もありませんわ！！', true);
      await daiya.say_and_wait('あああああああああああ！！');
      await era.printAndWait(
        '何かを振り切るような……剥き出しの咆哮。サトノダイヤモンドは凄まじい気迫で芝を駆ける。',
      );
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          '実況',
          `先頭は……サトノダイヤモンド──！ 今年のダービー${daiya.uma_sex_title}はサトノダイヤモンド！`,
        );
        await you.say_as_passer_by_and_wait('観客', 'うわあああああああ！');
        await you.say_as_passer_by_and_wait(
          '観客A',
          'サトノダイヤモンドが1着！！ 末脚がすごい！',
        );
        await you.say_as_passer_by_and_wait(
          '観客B',
          'スタミナにも余裕がありそうだな。『菊花賞』もいけるんじゃないか！',
        );
      } else {
        await you.say_as_passer_by_and_wait(
          '実況',
          `……サトノダイヤモンド、届かず！ ダービー${daiya.uma_sex_title}の夢は${daiya.sex}から遠ざかる──！！`,
        );
      }
      await daiya.say_and_wait('はあ、はあ……');
      await daiya.say_and_wait(
        '靴は……無事だったのに、私は……靴のことが気になって仕方なくて……',
        true,
      );
      await daiya.say_and_wait('不甲斐ない走りですわ……！！', true);
      if (rank === 1) {
        await etsuko.say_and_wait(
          `サトノダイヤモンド${daiya.adult_sex_title}、おめでとうございます！ ダービー${daiya.uma_sex_title}になったご感想は？`,
        );
        await daiya.say_and_wait(
          `……ありがとうございます。${daiya.uma_sex_title}の歴史に名を残せることは、光栄ですわ。`,
        );
        await daiya.say_and_wait(
          '『日本ダービー』での勝利は、サトノ家にとっても至高の栄誉ですわ。',
        );
        await etsuko.say_and_wait(
          'サトノグループの皆さんも、さぞお喜びでしょう！',
        );
        await daiya.say_and_wait(
          'ええ、もちろんですわ。ただ、慢心するな、とも言われるでしょうね。',
        );
        await etsuko.say_and_wait(
          `あら！ その真面目な向上心こそが、サトノダイヤモンド${daiya.adult_sex_title}を強くしてきたのでしょうね！`,
        );
        await daiya.say_and_wait(
          'はい。グループの皆さんは、常に私をもっと伸ばせと励ましてくださいますわ。',
        );
        await daiya.say_and_wait(
          'ですから次は、今日以上の走りをお見せしますわ！',
        );
        await era.printAndWait('観客A「おお、楽しみだ──！」');
        await daiya.say_and_wait('ええ！ 必ず！！');
        await you.say_as_passer_by_and_wait('観客', 'うわあああああああ……');
        await daiya.say_and_wait('……ふう……');
        await era.printAndWait(
          '地下道に入ると、サトノダイヤモンドの張りつめていた気がほどける。長い溜息のあと、いつもの表情に戻った。',
        );
        await daiya.say_and_wait('……行きましょう。');
        era.drawLine();
        await era.printAndWait(
          `控え室に戻ると、${daiya.sex}の顔にはどこか不満が残っている。`,
        );
        era.printButton(
          `「おめでとう。今日から君はダービー${daiya.uma_sex_title}だ」`,
          1,
        );
        await era.input();
        await daiya.say_and_wait('ありがとうございます。ですが……');
        await daiya.say_and_wait(
          `ダービー${daiya.uma_sex_title}を争うレースで……あの走りでは、自分が不甲斐なく思えて……`,
        );
        era.printButton('「どうした？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '私……レース中、靴の具合が気になって仕方ありませんでしたわ。',
        );
      } else {
        era.drawLine();
        await era.printAndWait(
          '控え室に戻ったあと、サトノダイヤモンドは黙ったままだった。',
        );
        era.printButton('「勝てなくて悔しいだろうけど……」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……いいえ、トレーナー。負けたのは、私自身が不甲斐ないからですわ。',
        );
        era.printButton('「不甲斐ない？」', 1);
        await era.input();
        await daiya.say_and_wait(
          'はい。レース中、靴のことが気になって仕方なかったからですわ。',
        );
      }
      await daiya.say_and_wait(
        '異常など何もなかったのに、何度も自分で確かめて、問題ないと判断したのに！',
      );
      await daiya.say_and_wait(
        '……あのときの私は……呪いを恐れすぎていましたわ……',
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          `呪いに気を取られて、ベストを出せませんでしたわ！`,
        );
        await daiya.say_and_wait('そんな自分は、許せませんわ！！');
      } else {
        await daiya.say_and_wait(
          '呪いに気を取られてベストを出せず、だから負けましたわ！',
        );
        await daiya.say_and_wait('恥ずかしくて、許せませんわ！！');
      }
      await daiya.say_and_wait(
        '呪いには絶対に負けない！ そう誓ったはずなのに！！',
      );
      await daiya.say_and_wait(
        '……サトノ家の夢を叶える道に、不安など一片も残してはなりませんわ！',
      );
      await daiya.say_and_wait(
        '先に強大な呪いが待っているなら、私の実力を、その上に置きますわ！',
      );
      await daiya.say_and_wait(
        'どんな困難にも揺るがない強さ！ 何が起きても対応できる準備！',
      );
      await daiya.say_and_wait('不運も呪いも、圧倒的な実力で踏み潰しますわ！');
      await era.printAndWait(
        `完全勝利を誓う宣言。──${you.name} は、ただ感服した。`,
      );
      await daiya.say_and_wait('トレーナー！');
      era.printButton('「トレーニングの段取りは、俺に任せろ！」', 1);
      await era.input();
      await daiya.say_and_wait('ふふふ！ さすが私のトレーナーですわ♪');
      await daiya.say_and_wait(
        '『菊花賞』では、必ず完璧なレースをお見せしますわ！',
      );
      era.drawLine();
      await era.printAndWait(
        `会場からの帰り道、${you.name} はサトノダイヤモンドをカフェへ誘った。`,
      );
      await era.printAndWait(
        `呪いに挑もうとする${daiya.sex}を励ますつもりで、甘いものを奢ることにした。`,
      );
      await daiya.say_and_wait(
        '何を頼んでもよろしいのですか……？ ええと……フルーツパフェに、チーズケーキを足しても……？',
      );
      era.printButton('「いいよ！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ではアイスを三スクープ足して、白玉とゼリーも、フルーツ増量で……',
      );
      era.printButton('「好きなだけ足してくれ！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふ、これ以上は入りませんわ。ごちそうさまでした、トレーナー♪',
      );
      await era.printAndWait('──そのとき、隣の席から馴染みの名前が聞こえた。');
      await you.say_as_passer_by_and_wait('観戦帰りの男性客A', [
        'この前の ',
        takz_kin,
        '、ファン投票の中間発表！ 1位はキタサンブラックだ！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観戦帰りの男性客B',
        `そうそう！ 俺も${daiya.sex}に入れたから、めちゃくちゃうれしい！`,
      );
      await era.printAndWait([
        '出走馬をファン投票で決める ',
        takz_kin,
        '。中間発表で、キタサンブラックが1位になっていた。',
      ]);
      await you.say_as_passer_by_and_wait('観戦帰りの男性客A', [
        `${daiya.sex}の `,
        tenn_spr,
        ' は本当にすごかった！ キタサンブラック、一度は交わされかけたのに、最後に差し返してハナ差で1着！！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観戦帰りの男性客B',
        `あのレース、熱かったよな～！ 最後は${daiya.sex}の意地が勝った！！`,
      );
      await you.say_as_passer_by_and_wait(
        '観戦帰りの男性客A',
        `${daiya.sex}、必死に走ってる感じがするんだよ。ブレないところが、応援したくなるんだよな。`,
      );
      await you.say_as_passer_by_and_wait(
        '観戦帰りの男性客B',
        `わかるわかる！ ${daiya.sex}って特別キラキラしてるわけじゃなくて、普通で、こっちに近い感じなんだよ。`,
      );
      await you.say_as_passer_by_and_wait(
        '観戦帰りの男性客B',
        `だから余計に勝ってほしい！ 自分が成し遂げたみたいな気分になるんだよな！`,
      );
      await daiya.say_and_wait(
        '私もそう思いますわ！ そちらのお二人、キタちゃんの良さをご存じですわね！',
      );
      await daiya.say_and_wait(
        `キタちゃん……${daiya.sex}は初詣のとき、自分を応援してくれる人を増やす、と目標にされましたわ……`,
      );
      await daiya.say_and_wait('叶いましたわね。');
      era.printButton('「ファン投票1位だもんな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ。ファンの方々も、楽しそうにキタちゃんのレースを話していらっしゃいますわ。',
      );
      await daiya.say_and_wait(
        '応援してくれる人に笑顔を届けたい──その目標にも、近づいていますわ。',
      );
      await daiya.say_and_wait('……私も、負けていられませんわ。');
      await daiya.say_and_wait(
        'キタちゃんと並んで走るライバルとして、その名に恥じぬよう努めなければ……！',
      );
      await daiya.say_and_wait(
        'いまはキタちゃんのほうが先を走っていますわ。でも私は私の道を進んで、必ず追いつきますわ！',
      );
      era.printButton('「『菊花賞』は、なおさら負けられないな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ。キタちゃんが去年勝った『菊花賞』。このレースは、絶対に負けられませんわ！',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（クラシック級）開始！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait('今日から、待ちに待った『夏合宿』だ！');
      await daiya.say_and_wait(
        'この夏合宿で、呪いに左右されない強さを身につけますわ！',
      );
      await era.printAndWait(
        '強さを作るため、夏合宿は基礎トレを厚くする予定だ。まずは体の土台を固めることが大切になる。',
      );
      await era.printAndWait(
        '『菊花賞』の3000メートルを走り切るスタミナを作るのも、今合宿の課題だ。',
      );
      await kita.say_as_unknown_and_wait('ダイヤ──！');
      await kita.say_and_wait('ほらほら、さっさと部屋行こうぜ！');
      await daiya.say_and_wait('もう、キタちゃんったら、そんなに浮かれて。');
      await kita.say_and_wait(
        '海だぞ！ ワクワクするに決まってるだろ！ 今年もちゃんと鍛え込むぞ～！',
      );
      await daiya.say_and_wait('おーっ！');
      await kita.say_and_wait('あはは、ダイヤだって浮かれてるじゃねえか！');
      await daiya.say_and_wait(
        'ふふ、もちろん気合は十分ですわ。『菊花賞』、必ず勝ちますもの。',
      );
      await daiya.say_and_wait(
        'キタちゃんが勝った『菊花賞』で勝って……サトノ家の呪いを打ち破って……キタちゃんのライバルにふさわしい私になりますわ！',
      );
      await kita.say_and_wait(
        'ダイヤ……！ だな！ いつか同じレースを走るために。',
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「がんばるぞ、おーっ！」',
      ]);
      await era.printAndWait(
        '二人の気合の声が、この夏の空に響く。──熱い夏合宿になりそうだ。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '夏季合宿（クラシック）にて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} turbo ツインターボ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await daiya.say_and_wait('はあ、はあ……ペース走……終わりましたわ……');
      era.printButton('「お疲れ。休もう」', 1);
      await era.input();
      await daiya.say_and_wait('はい……');
      await era.printAndWait(
        '夏合宿も折り返しの日。サトノダイヤモンドの動きは、明らかに鈍い。',
      );
      await era.printAndWait(
        `酷暑のトレーニングは体力を大きく削る。連日の負荷で、${daiya.sex}は疲れているのだろう。`,
      );
      await kita.say_as_unknown_and_wait('うおおおお──！');
      await kita.say_and_wait(
        'ふう、10本終わった！ だんだん楽になってきたな～',
      );
      await kita.say_and_wait('よし──負荷倍にして、もう1セットだ──！');
      await daiya.say_and_wait('……トレーナー、次のメニューに入りましょう！');
      era.printButton('「もう少し休んだほうがいい……」', 1);
      await era.input();
      await daiya.say_and_wait('いいえ、大丈夫ですわ！ それでは始めますわ！');
      era.drawLine();
      await daiya.say_and_wait('はあ、はあ、はあ……');
      era.printButton('「午前のトレーニングはここまでにしよう」', 1);
      await era.input();
      await daiya.say_and_wait('で、でも……予定のメニューがまだ……');
      await era.printAndWait(
        `${you.name} は、疲れたまま続けても効果は薄い、と説明した。実際、いまの数字は大きく落ちている。`,
      );
      await daiya.say_and_wait(
        '体が限界だからと止めていては……先には行けませんわ！ 呪いの上を行く実力を取るなら、もっと必死に！！',
      );
      await daiya.say_and_wait(
        'それに、キタちゃんはまだ頑張っていますわ！ 私も負けられませんわ！',
      );
      await era.printAndWait(
        `${daiya.sex}の視線は、少し離れたところで汗だくのままメニューを消化し続けるキタサンブラックに留まっている。`,
      );
      await era.printAndWait(
        `だが ${you.name} は、気合と意地で限界を超えるキタサンブラックのやり方が、サトノダイヤモンドには向かないと考えている。`,
      );
      await daiya.say_and_wait(
        'トレーナー、よろしければ、こちらを参考にどうぞ。',
      );
      await daiya.say_and_wait(
        '以前指導してくださった先生方がまとめてくださった、私のトレーニング資料ですわ。成績データとレース映像も入っていますの。',
      );
      await daiya.say_and_wait(
        'サトノ家のトレーニング環境は最新の機器を使っていますから、データの精度も非常に高いですわ。',
      );
      await era.printAndWait(
        `これまで${daiya.sex}は恵まれた環境で積んできた。酷暑での経験は少なく、慣れない環境が体力と気力を余計に削っている。`,
      );
      era.printButton('「とりあえず昼にしよう」', 1);
      await era.input();
      await daiya.say_and_wait('……はい……');
      await turbo.say_as_unknown_and_wait(
        'おおーい！ サトノ！ そこのトレーナーも！',
      );
      await turbo.say_and_wait('ターボが一緒にトレーニングしてやる！');
      await daiya.say_and_wait('……え？ ターボ？');
      await turbo.say_and_wait(
        'みんなでできるトレーニングだ！ サトノも入れたる！',
      );
      await dictus.say_and_wait('ターボ、慌てない。説明は私がします。');
      await era.printAndWait(
        `戸惑っていると、サトノダイヤモンドが話していた『${daiya.sex}の新歓をしてくれた先輩たち』が次々と現れた。`,
      );
      await era.printAndWait(
        'イクノディクタスだけでなく、今日はツインターボ、マチカネタンホイザ、ダイタクヘリオスもいる。',
      );
      await dictus.say_and_wait(
        'サトノ、よければ一緒に合同トレーニングしませんか？',
      );
      await dictus.say_and_wait(
        '大勢と交流できるのも夏合宿の利点です。この機会に、試してみます？',
      );
      await daiya.say_and_wait('なるほど……');
      await pama.say_and_wait(
        '難しく考えなくていいよ。去年はテイオーたちがキタサンを手伝ったから──',
      );
      await turbo.say_and_wait(
        'テイオーだけ手伝うなんて不公平！ ターボもせーんぱいになりたい！',
      );
      await pama.say_and_wait('そういうわけ。付き合ってくれると助かるよ。');
      await turbo.say_and_wait('いいだろ！ な、サトノ！ な──な──な──な──！！');
      await nature.say_and_wait(
        'よかったら、あたしたちと一緒にトレーニングしてくれないかな？',
      );
      await daiya.say_and_wait('そうですね……どういたしましょう、トレーナー。');
      era.printButton('「どんなトレーニングのつもりだ？」', 1);
      await era.input();
      await dictus.say_and_wait('案は、二つあります──');
      await era.printAndWait(
        'イクノディクタスの提案を見る──なるほど、体力を使いすぎず、無理のない範囲で進められる内容だ。',
      );
      await era.printAndWait('何より楽しそうだ。気分転換にもなりそうだ。');
      era.printButton('「じゃあ、合同トレーニングに入れてもらおう」', 1);
      await era.input();
      await turbo.say_and_wait(
        'やった──！！ サトノ、あとはターボ先輩に任せとけ────！',
      );
      await daiya.say_and_wait('ふふふ、よろしくお願いしますわ！ ターボ先輩♪');
      await tannhauser.say_and_wait(
        '決まりましたわね、では昼食ですわ～♪ カレー？ 焼きそば？ それとも両方～？',
      );
      await helios.say_and_wait(
        'イェイ☆ 食べるなら全部だろ！ 全員、三品完食がルール！',
      );
      await nature.say_and_wait('早っ！？');
      await dictus.say_and_wait('では、昼食のあと集合しましょう。');
      await dictus.say_and_wait(
        'どちらにします？ トレーナーは、どちらがいいですか？',
      );
      await era.printAndWait('いまのサトノダイヤモンドに合うトレーニングは──');
      era.printButton('「砂でトンネルを掘る」（スタミナ+20）', 1);
      era.printButton('「長く漂う紙風船バレー」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await dictus.say_and_wait(
          '砂のトンネルですね。海の家から、店の近くの砂浜の使用許可は取ってあります。行きましょう。',
        );
        await daiya.say_and_wait(
          'あの～ 質問ですわ。砂でトンネルを作るのは、本当にトレーニングになりますの？',
        );
        await nature.say_and_wait(
          'なるよ──あたしたちが通れるトンネルを作るんだから。',
        );
        await nature.say_and_wait(
          'トンネル用の砂も大量に掘るし。ずっと、ずっと、ずっと掘るの。',
        );
        await daiya.say_and_wait('なるほど……それなら、鍛えられそうですわ！');
        await daiya.say_and_wait('ふう、これくらいで足りましょうか？');
        await tannhauser.say_and_wait(
          'ええ、いい感じですわ～ 自分が掘った穴に落ちないよう、気をつけてくださいまし！',
        );
        await dictus.say_and_wait('タンホイザ、あなたも落ちないように。');
        await tannhauser.say_and_wait(
          'あっ！ そうですわね～！ ……『気を、つけますわ』……',
        );
        await tannhauser.say_and_wait(
          'では──次は基礎工事ですわ。砂にた～っぷり水を足して、踏んで固めるのです。',
        );
        await tannhauser.say_and_wait(
          'トンネルの高さまで砂を盛って、踏んで、盛って、踏んで……私とご一緒に──♪',
        );
        await era.printAndWait('一同「トンネル、完成ですわ～！」');
        await daiya.say_and_wait('わあ～！ 本当に通れるんですわ！');
        await pama.say_and_wait('素人仕事にしては、完成度高いね！');
        await nature.say_and_wait('ふう～ 終わった瞬間、どっと疲れた……');
        await daiya.say_and_wait(
          '砂を掘って、海水を運んで、砂山を踏み固めて……ずっと体を動かしていましたものね。',
        );
        await daiya.say_and_wait('でも、楽しかったですわ！');
        await era.printAndWait(
          '砂のトンネル作りは力のトレーニングになるだけでなく、気分転換にもなったようだ。',
        );
        await turbo.say_and_wait(
          'へっへっへ──ラストだ！ いっしょに壊すぞ～～！！',
        );
        await daiya.say_and_wait('……え！？');
        await nature.say_and_wait(
          '言いたいことはわかるけど、砂浜に穴だらけは残せないよ。',
        );
        await era.printAndWait(
          '砂のトンネルはあっという間に崩れ、跡形もなくなった。合同トレーニングは、少しほろ苦い思い出になった。',
        );
      } else {
        await dictus.say_and_wait(
          'はい。普通のバレーボールの代わりに紙風船を使います。一度やればわかります。',
        );
        await dictus.say_and_wait(
          'では第一戦！ パーマー＆ヘリオス対サトノ＆ターボです！',
        );
        era.printButton('「太陽」', 1);
        await era.input();
        await era.printAndWait([
          pama.get_colored_name(),
          '&',
          helios.get_colored_name(),
          '「イェイイェイ☆」',
        ]);
        await turbo.say_and_wait('サトノ、ターボについてきゃいい──！');
        await daiya.say_and_wait('は～い♪');
        await pama.say_and_wait('サーブいくよ～！ せい──！');
        await era.printAndWait(
          `紙風船は${daiya.sex}に高く打ち上げられ……いつまでも落ちてこない。`,
        );
        await turbo.say_and_wait(
          'よーし来い来い来い来い！ 来い来い…………まだ来ない────！？',
        );
        await daiya.say_and_wait(
          '落ちる位置はこのあたり……あっ！ 風向きが……！ ネットを越えて……！',
        );
        await daiya.say_and_wait('あ……越えませんでしたわ……');
        await turbo.say_and_wait('なんだよ──！ 遅すぎだろこの風船！！');
        await daiya.say_and_wait(
          '長く漂う……そういうことでしたのね。紙風船は普通のボールよりずっと軽いから、空中にいる時間が長い。',
        );
        await daiya.say_and_wait(
          'それに、ネットを越えるには力加減が要りますわ。つまり、動かずに待つことにもなりますの。',
        );
        await pama.say_and_wait(
          'そう。タイミングまで我慢して、ちょうどいい力で打つ。冷静じゃないとできないよ。',
        );
        await helios.say_and_wait(
          '風で遠くに飛ばされることもあるし！ 走り回らされて超ウケる☆',
        );
        await daiya.say_and_wait('機を待つ……レースの仕掛け時と同じですわね。');
        await daiya.say_and_wait(
          '周りに流されず、自分の最善のタイミングまで耐える。相当な忍耐が要りますわ。いいトレーニングになりそうですわ！',
        );
        await era.printAndWait(
          'こうして──サトノダイヤモンドは風向きと紙風船の落下を冷静に読み、試合に勝った。',
        );
        await dictus.say_and_wait(
          'よくできました。とくにサトノ。何が起きても揺れない精神力、感心しました。',
        );
        await daiya.say_and_wait(
          'えへへ、つい熱中してしまいましたわ。楽しかったですわ！',
        );
        await era.printAndWait(
          'サトノダイヤモンドは合同トレーニングで忍耐を鍛え、気分転換にも成功したようだ。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿（クラシック）終了';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        '夏合宿最終日。サトノダイヤモンドは、何かを考えている様子だった。',
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await daiya.say_and_wait('……これから先のことを考えておりましたわ。');
      await daiya.say_and_wait(
        '『菊花賞』まで、およそ二ヶ月……このあいだに、どこまで伸びるのでしょう。',
      );
      await daiya.say_and_wait(
        'まだ、呪いにまったく左右されない強さ、とまでは言えない気がしますわ。',
      );
      era.printButton('「まだ二ヶ月ある」', 1);
      await era.input();
      await era.printAndWait(
        '夏合宿は基礎トレが中心だった。『菊花賞』に向けた本調整は、これからになる。',
      );
      await daiya.say_and_wait(
        '……そうですわね。トレーニングはすぐには効かない、とわかってはいるのですが、焦ってしまうのですわ。',
      );
      await daiya.say_and_wait(
        'こんなに揺れてはいけませんわ！ 呪いには負けません！ 絶対！ 必ず打ち破ってみせますわ！',
      );
      await daiya.say_and_wait(
        'ええ！ 気持ち、整えましたわ！ 『菊花賞』のために、もっと頑張りますわ！',
      );
      await era.printAndWait(
        `『菊花賞』で勝つ決意は、${daiya.sex}を焦らせるほど大きいのだろう。`,
      );
      await era.printAndWait(
        'ただ──力が入りすぎている気もする。悪い結果に繋がらなければいいが……',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_34: (() => {
    const title = '私を絡めとるもの';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (
      daiya,
      mcqueen,
      you,
      sats_sho,
      toky_yus,
      kiku_sho,
      tenn_spr,
    ) => {
      await daiya.say_and_wait('うおおおおお──！');
      await daiya.say_and_wait(
        'はあ、はあ……まだ足りませんわ。これだけでは勝てません……',
      );
      await daiya.say_and_wait(
        '『菊花賞』で勝つなら、どんな突発にも揺れない強さまで……！',
      );
      await era.printAndWait(
        `サトノダイヤモンドは『菊花賞』のため、連日トレーニングに打ち込んでいる。日ごとに${daiya.sex}の成長が感じられる。`,
      );
      await era.printAndWait(
        '体の調子は良い。だがサトノダイヤモンドの精神は、かなり張りつめている。',
      );
      await era.printAndWait(
        `とくに${daiya.sex}はいま、『呪いを制する実力を』という言葉をよく口にする。`,
      );
      await daiya.say_and_wait('はあ、はあ……ふっ！');
      await daiya.say_and_wait(
        'トレーナー、坂道スプリントは、いまは楽にこなせるようになりましたわ。',
      );
      era.printButton('「あと二本、いけるか？」', 1);
      await era.input();
      await daiya.say_and_wait('はい。では、もう一本走ってみますわ！');
      await era.printAndWait(
        '呪いにこれほど執着するのは、サトノ家の期待を背負っているからか。それなら──',
      );
      await era.printAndWait(`『${daiya.sex}』に、助けを求めてみよう。`);
      await mcqueen.say_and_wait('本日はよろしくお願いいたしますわ、サトノ。');
      await daiya.say_and_wait(
        'マ、マ……マックイーン！？ マックイーンが一緒にトレーニングを！？',
      );
      era.printButton('「学ぶことが多いはずだ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい！！ マックイーン、貴重なお時間をありがとうございますわ！',
      );
      await mcqueen.say_and_wait(
        'ふふ、そう堅くならなくてよろしいですわ。私のほうも、あなたから刺激をいただけますもの。',
      );
      await mcqueen.say_and_wait(
        'さて、時間は限られていますわ。まずはスタミナ走で体を温めて、そのあと併走練習にいたしましょう。',
      );
      await daiya.say_and_wait('よろしくお願いいたしますわ！');
      await era.printAndWait('二人「うおおおおお！ うおおおおお！」');
      await daiya.say_and_wait('はあ、はあ……もう少し、でしたのに……');
      await mcqueen.say_and_wait(
        '前半で離されすぎですわね。先行の歩調に合わせて仕掛けを変える型を、もっと積んだほうがよろしいですわ。',
      );
      await daiya.say_and_wait(
        'おっしゃるとおりですわ……おかげで、足りないところがわかりましたわ！',
      );
      await mcqueen.say_and_wait(
        'ふふ、それでこそですわ。最後はロング走でクールダウンといたしましょう。',
      );
      await daiya.say_and_wait('はい！');
      await era.printAndWait(
        'サトノダイヤモンドの表情は明るい。張りつめていた色は、もう見えない。',
      );
      await era.printAndWait(
        `${you.name} は、境遇の近いメジロマックイーンならサトノダイヤモンドの気持ちがわかるはずだ、と踏んでいた。${daiya.sex}に頼んだのは正解だった。`,
      );
      await daiya.say_and_wait(
        'はあ、はあ…………あっ！ 申し訳ありませんわ、マックイーン！',
      );
      await mcqueen.say_and_wait('どうかなさいましたの？');
      await daiya.say_and_wait(
        'はちみつドリンクの屋台が見えましたわ！ その……買ってきてもよろしいでしょうか？',
      );
      await mcqueen.say_and_wait(
        'あら、本当ですわね。ではここでひと息入れて、水分を補給いたしましょう。',
      );
      await daiya.say_and_wait('ありがとうございますわ！');
      await mcqueen.say_and_wait('……サトノ、ずいぶん大きな一杯ですわね……');
      await daiya.say_and_wait(
        'えへへ、実はこの屋台、有名な呪いがあるのですわ。',
      );
      await daiya.say_and_wait(
        'レース前に『LLサイズのはちみつレモン・はちみつ控えめ・特濃・特盛』を飲むと負ける、という呪いですの！',
      );
      await daiya.say_and_wait(
        'だから『菊花賞』の前に、わざと一杯飲んで、この呪いを打ち破ろうと思いまして！',
      );
      await mcqueen.say_and_wait('呪いを、打ち破る……？');
      await daiya.say_and_wait([
        '実は私、',
        sats_sho,
        ' と ',
        toky_yus,
        ' で呪いに振り回されて──',
      ]);
      await mcqueen.say_and_wait([
        '──なるほど。だから ',
        kiku_sho,
        ' では、なおさら呪いを断ちたいのですわね。',
      ]);
      await daiya.say_and_wait([
        'はい！ 呪いには絶対に頭を下げませんわ！ ',
        kiku_sho,
        ' で、それを証明しますわ！',
      ]);
      await mcqueen.say_and_wait(
        '呪いに負けまいとするその心持ちは、本当に立派ですわ。',
      );
      await mcqueen.say_and_wait('ですが──');
      await mcqueen.say_and_wait(
        '不運を呪いとみなしているから、平常心を失い、揺れやすくなっているのではありませんこと？',
      );
      await daiya.say_and_wait('え……？');
      await mcqueen.say_and_wait(
        'レースでは、とくに長距離では、平常心を保って自分の走りを貫く必要がありますわ。',
      );
      await mcqueen.say_and_wait(
        '揺れると集中が欠け、心の負担が体力まで削ります。自分の走りを出す余裕がなくなってしまいますわ。',
      );
      await mcqueen.say_and_wait(
        '私も似た経験がございますわ。大事なレースで、不運が起きたことがありますの。',
      );
      await daiya.say_and_wait('マックイーンにも……あ……');
      await daiya.say_and_wait(['', tenn_spr, ' のこと、ですわね……？']);
      await mcqueen.say_and_wait(
        'ええ……あのレースは、連覇がかかった大事な一戦でしたわ。',
      );
      await mcqueen.say_and_wait(
        'ゲートに入る前、右脚が引っかかる気がして、確かめたら……蹄鉄が外れておりましたの。',
      );
      await daiya.say_and_wait(
        '存じておりますわ。蹄鉄の半分が歪んで……その場で打ち直された、と。',
      );
      await mcqueen.say_and_wait(
        'そのとおりですわ。ですが当時の私は、蹄鉄が外れたことを不運とは捉えませんでした。',
      );
      await mcqueen.say_and_wait(
        'ただ冷静に、打ち直しに集中しただけですわ。レースが始まってからは──',
      );
      await mcqueen.say_and_wait(
        '意識は右の蹄鉄にも、当時のライバルとされたテイオーにもありませんでしたわ。',
      );
      await mcqueen.say_and_wait(
        '勝つために、自分の走りだけを見ていましたわ。',
      );
      await mcqueen.say_and_wait(
        '自分の走りに集中して、3200メートルを走り切りました。だから勝てたのですわ。',
      );
      await daiya.say_and_wait('……自分の走りだけを……');
      await daiya.say_and_wait([
        '私……',
        toky_yus,
        ' のとき、靴が壊れて予備で走りましたわ。レース中も、靴のことが気になって……',
      ]);
      await daiya.say_and_wait(
        '集中できず、力を出し切れなかったのが、悔しくて……',
      );
      await mcqueen.say_and_wait(
        'あら、ではもう、その道理はご存じだったのですわね。',
      );
      await daiya.say_and_wait(
        '……呪いに執着しすぎて、かえって呪いに絡めとられていた……？',
      );
      await daiya.say_and_wait(
        'そこまで気にしなければ、呪いに手足を縛られずに済む……',
      );
      await mcqueen.say_and_wait('私は、そう思いますわ。');
      await daiya.say_and_wait(
        '……考えたこともありませんでしたわ……でも、よくよく思えば……',
      );
      await daiya.say_and_wait(
        '……マックイーンが揺るがない強さを保てる理由が、わかった気がしますわ……',
      );
      await daiya.say_and_wait(
        'いつも自分の走りと目標だけを見ていらっしゃるから……いつでも凛として、揺るがないのですわね。',
      );
      await daiya.say_and_wait(
        '地に足がついている、ということでしょうか。えへへ、マックイーンは本当に立派な方ですわ！',
      );
      await mcqueen.say_and_wait('そう言っていただけるのは光栄ですわ。');
      await mcqueen.say_and_wait(
        'それに……呪いと呼ばれるものの多くは、結果論から生まれますわ。',
      );
      await mcqueen.say_and_wait(
        'あのレースで負けていれば、呪いと言われていたかもしれません。勝てば、呪いと呼ぶ余地はなくなるのですわ。',
      );
      await daiya.say_and_wait(
        'そう言われると、本当にそうですわね！ では、はちみつレモンを飲むと負ける呪いも……',
      );
      await mcqueen.say_and_wait(
        'おそらく……太るから、ではありませんこと？ あれだけ飲めばカロリー過多ですし、レモンが甘さを隠してしまいますわ。',
      );
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait('あの……も、もう全部、飲んでしまいましたわ……');
      await daiya.say_and_wait(
        'ト……トレーナー！！ さっきのはちみつレモンのカロリー……追加トレーニングで消費させてくださいませ～！',
      );
      era.drawLine({ content: '翌日' });
      await daiya.say_and_wait([
        '私……昨夜、',
        kiku_sho,
        ' までに片づける課題を書き出しましたわ。',
      ]);
      await daiya.say_and_wait(
        '3000メートルのペース配分、ポジション争いの研究、仕掛けの想定……スタミナも、もっと要りますわ。',
      );
      await daiya.say_and_wait(
        'やることは山ほどありますわ！ 呪いを気にしている暇など、もうありませんわ！',
      );
      await daiya.say_and_wait(
        'サトノダイヤモンドの走りを完成させてみせますわ！ そして、『菊花賞』で必ず勝ちますわ！',
      );
      await era.printAndWait(
        'サトノダイヤモンドは晴れやかな顔で、揺るぎなく勝利を誓った。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '菊花賞に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus) => {
      await daiya.say_and_wait('何度経験しても、この空気は刺激的ですわね。');
      era.printButton('「緊張してる？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'いいえ。自分のペースで走ればいい……そう思うと、不思議と落ち着きますわ。',
      );
      await daiya.say_and_wait(
        'クラシック三冠の最後、『菊花賞』。私の目標は、今日で一段落しますわ。',
      );
      await daiya.say_and_wait('この目標を果たすまで、絶対に緩みませんわ！');
      await kita.say_and_wait('ダイヤのトレーナー！ どうだ？ ダイヤの調子は？');
      era.printButton('「いつもどおりだ」', 1);
      await era.input();
      await era.printAndWait(
        '今度は、事故なくレースができそうだ。今日一日、サトノダイヤモンドは呪いの話を一度もしていない。',
      );
      await era.printAndWait(
        `${you.name} は、サトノダイヤモンドにとって良い兆しだと思った。`,
      );
      await kita.say_and_wait('あ、ダイヤ出てきた！');
      await you.say_as_passer_by_and_wait(
        '観客A',
        'おお、サトノダイヤモンドだ！ 気合十分って感じで、いいね！',
      );
      await you.say_as_passer_by_and_wait('観客B', [
        `取材の受け答えからすると、${daiya.sex}は`,
        sats_sho,
        ' と ',
        toky_yus,
        ' で本領を出し切れなかったと思ってるらしいぞ。',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客B',
        `なら、${daiya.sex}のベストは見てみたいな！`,
      );
      await kita.say_and_wait('……うん、俺も……！');
      await kita.say_and_wait('ダイヤ──！ がんばれ────！！');
      await kita.say_and_wait('あ、聞こえた！');
      await kita.say_and_wait('…………っ！');
      await kita.say_and_wait(
        '……トレーナー。今日のダイヤは、絶対に最高の走りをすると思う！',
      );
      await kita.say_and_wait(
        'だって、あんなに集中した顔のダイヤ、初めて見たから……！',
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_end: (() => {
    const title = '克己';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, kita, you, rank, sats_sho, toky_yus, arim_kin) => {
      await daiya.say_and_wait(
        'この流れなら……このあと位置取りが始まるわね。いまは、この位置で耐えて……',
        true,
      );
      await era.printAndWait(
        '実況「内から仕掛けた！ このタイミングで仕掛けた！ 後方の面々も追いかける！」',
      );
      await daiya.say_and_wait('まだよ。耐える。私のペースで……', true);
      await daiya.say_and_wait('──いまよ！！');
      await daiya.say_and_wait('はあああああああああああ！！');
      await era.printAndWait(
        '実況「来た──！！ サトノダイヤモンド！ 鮮やかな末脚を炸裂させた──！」',
      );
      if (rank === 1) {
        await era.printAndWait(
          `実況「1着はサトノダイヤモンド！！ ${daiya.sex}は金剛石のように、あらゆる障害を打ち砕いた──！」`,
        );
        await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
        await kita.say_and_wait(
          'やった！ よかった、よかった、よかった──────！！',
        );
        await kita.say_and_wait('ダイヤ！ やったんだ、ダイヤ！！');
        await you.say_as_passer_by_and_wait(
          '観客A',
          'すごい……鳥肌が立った……！ サトノダイヤモンド、本当に強い！！',
        );
        await you.say_as_passer_by_and_wait('観客B', [
          `はは、これが${daiya.sex}の本当の力か！ ${daiya.sex}が `,
          sats_sho,
          ' と ',
          toky_yus,
          ' で自分の走りに不満だったのもわかるぜ！',
        ]);
        await kita.say_and_wait('……ダイヤ、やっぱりすごい！');
      } else {
        await era.printAndWait(
          '実況「サトノダイヤモンドは1着こそ逃したが、最高級のダイヤにふさわしい走りを見せた！！」',
        );
        await you.say_as_passer_by_and_wait('観客', 'ぱちぱちぱちぱちぱち！');
        await kita.say_and_wait('すごい……ダイヤ、いつの間にこんなに……！');
        await kita.say_and_wait('へへへ！ 一緒に走れるのが楽しみだ！');
        await you.say_as_passer_by_and_wait(
          '観客A',
          '俺も……鳥肌が……サトノダイヤモンド、本当にいい走りだった。',
        );
        await you.say_as_passer_by_and_wait('観客B', [
          '',
          sats_sho,
          ' と ',
          toky_yus,
          ' のときとは全然違う！ これがサトノダイヤモンドの本当の力……！',
        ]);
        await you.say_as_passer_by_and_wait(
          '観客A',
          `${daiya.sex}の次走が楽しみだな！`,
        );
      }
      await daiya.say_and_wait('はあ……はあ……');
      await daiya.say_and_wait('脚が……軽い…………こんなに……', true);
      await daiya.say_and_wait('私……', true);
      await daiya.say_and_wait('私…………っ！', true);
      await daiya.say_and_wait('トレーナー……！');
      if (rank === 1) {
        era.printButton('「1着、おめでとう！ 最高の走りだったぞ！」', 1);
        await era.input();
        await daiya.say_and_wait('はい……！ ありがとうございます！！');
      } else {
        era.printButton('「いい走りだったぞ！」', 1);
        await era.input();
        await daiya.say_and_wait('はい……！');
      }
      await daiya.say_and_wait(
        'あの、今日は脚が特別に軽くて！ 走り切っても、まったく疲れませんわ！！',
      );
      await daiya.say_and_wait('自分でも満足のいく走りができましたわ！！');
      await daiya.say_and_wait('脚の枷が外れたみたいで……！');
      await daiya.say_and_wait('……身体も…………心も……軽いですわ……！');
      era.printButton('「どうやら、呪いを『克服』したみたいだな」', 1);
      await era.input();
      await daiya.say_and_wait('……！');
      await daiya.say_and_wait('…………ふう…………うっ……');
      await era.printAndWait(
        '大粒の涙が、サトノダイヤモンドの目からこぼれ落ちる。そして──',
      );
      await daiya.say_and_wait('うわああああああ……！！');
      await era.printAndWait('地下道に、泣き声が満ちた。');
      await era.printAndWait(
        `${daiya.sex}が生まれる前から途切れることのなかった、サトノ家の呪いの噂。${daiya.sex}が背負ってきたその重さは、容易に想像がついた。`,
      );
      await era.printAndWait(
        `いつも皆に、呪いには負けないと宣してきたのも、${daiya.sex}が自分を奮い立たせる術だったのだろう。`,
      );
      await era.printAndWait(
        `${daiya.sex}は、ようやくその束縛から解き放たれた。`,
      );
      await daiya.say_and_wait('……えへへ……うっ……失礼いたしますわ……');
      await daiya.say_and_wait(
        '……本当に、マックイーンの仰ったとおりですわ。ずっと、呪いを気にしすぎて……かえって自分で枠を作っていたのですね。',
      );
      await daiya.say_and_wait('でも、もう大丈夫ですわ。もう、囚われません！');
      await daiya.say_and_wait(
        'これからも今日のように、自分のペースで他のG1も勝ってみせますわ！',
      );
      await kita.say_and_wait('そうはいかないぞ！');
      await daiya.say_and_wait('キタちゃん！');
      if (rank === 1) {
        await kita.say_and_wait('『菊花賞』1着、おめでとう、ダイヤ！');
        await daiya.say_and_wait(
          'ありがとう！ 去年キタちゃんが勝ったレース……私も勝ちましたわ！ だから、自信を持って言います！',
        );
        await daiya.say_and_wait('キタちゃん！ 『有馬記念』で勝負しましょう！');

        await kita.say_and_wait('喜んで！！');
        await daiya.say_and_wait('よろしいですわね？ トレーナー？');
        era.printButton('「もちろん！」', 1);
        await era.input();
      } else {
        await kita.say_and_wait('いい走りだったぞ、ダイヤ！');
        await daiya.say_and_wait(
          'ありがとう！ 私の走り……キタちゃんの相手をする資格、ありましたかしら……？',
        );
        await kita.say_and_wait('──ダイヤ。');
        await kita.say_and_wait('『有馬記念』で、一緒に勝負しよう！');
        await daiya.say_and_wait('キタちゃん……！');
        await daiya.say_and_wait('……トレーナー、『有馬記念』は……');
        era.printButton('「ああ、次は『有馬記念』だ！」', 1);
        await era.input();
        await daiya.say_and_wait('はい！！');
      }
      await kita.say_and_wait(
        'でもダイヤ、覚悟しとけよ！ 『有馬記念』のアタシは、今までとは違うからな！',
      );
      await kita.say_and_wait(
        'ダイヤと走る前に、『ジャパンカップ』でアタシの走りを、日本の想いを世界に届ける！',
      );
      await daiya.say_and_wait('ふふ、その日が楽しみですわ！');
      await daiya.say_and_wait([
        arim_kin,
        '……いまの私たちにできる、最高の一戦にしましょう！',
      ]);
      era.drawLine();
      await era.printAndWait('その日、京都競馬場からの帰り道。');
      await daiya.say_and_wait(
        'ふふふ、トレーナー。今日はずっと、胸が高鳴ったままでしたわ♪',
      );
      era.printButton('「いまでもか？」', 1);
      await era.input();
      await daiya.say_and_wait('はい、いまでも。');
      await daiya.say_and_wait([
        'キタちゃんと ',
        arim_kin,
        ' を走れると思うと、心臓が早鐘のまま止まりませんの。あ、興奮というより、期待のほうが大きいですわね。',
      ]);
      await daiya.say_and_wait(
        '幼い頃に無邪気に描いた夢が、もうすぐ現実になるなんて……',
      );
      era.printButton('「キタちゃんと一緒に走る夢か？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふ、当時思い描いていた舞台はG1でしたけれど、現実のほうがずっと素敵ですわ。',
      );
      await daiya.say_and_wait(
        `一流の${daiya.uma_sex_title}になるという私の夢の途上に、キタちゃんもいる……${kita.sex}はライバルとして、前に立っている。`,
      );
      await daiya.say_and_wait(
        'これ以上に運命的で、胸が躍る状況はありませんわ！',
      );
      era.printButton('「最高の舞台だな」', 1);
      await era.input();
      await daiya.say_and_wait(
        `ええ、先を走るキタちゃんに追いつき、超えて、私の夢を叶えます。私とサトノ家の夢を。`,
      );
      await era.printAndWait(
        `サトノダイヤモンドの瞳に、迷いは一片もない。${daiya.sex}の瞳の奥で燃える炎は、出会ったときと同じだ。熱く、激しく燃えている。`,
      );
      era.printButton('「まずは『有馬記念』だ！」', 1);
      await era.input();
      await daiya.say_and_wait('ええ！ 今度は、誰の力も借りませんわ。');
      await daiya.say_and_wait(
        '呪いを克服したこのダイヤが、キタちゃんにも、シニア級の皆さんにも、完敗させてみせますわ！',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '有馬記念に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait(
        `『有馬記念』。ファン投票で出走${daiya.uma_sex_title}を決める特別なレース。`,
      );
      await era.printAndWait(
        'サトノダイヤモンドの得票は2位。1位はキタサンブラック。',
      );
      await era.printAndWait(
        `観客A「今日の勝ちはキタサンブラックだろ！ 最後の粘りが、段違いなんだよ！！」`,
      );
      await era.printAndWait(
        '観客B「毎回、最後でもう一段上げてくる！ 並の末脚じゃ追いつけないよ！」',
      );
      await era.printAndWait(
        `観客A「キタサンは俺たちの希望の星だ！ ${daiya.sex}、頑張ってほしい！」`,
      );
      await daiya.say_and_wait('皆さん、開口一番キタちゃんのお話ですわね。');
      era.printButton('「ダイヤも僅差の2位だぞ！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'あら、トレーナーったら……肩入れが過ぎますわ。2万票差を僅差とは申しませんもの。',
      );
      await daiya.say_and_wait(
        'でも、たくさんの方に投票していただけたのは、本当に嬉しくて、光栄ですわ♪',
      );
      await daiya.say_and_wait(
        '……ただ、キタちゃんのファンの声援が、とても熱いなと感じていただけですの。',
      );
      await daiya.say_and_wait(
        '皆さん、『頑張れ』ではなく、『頑張ってほしい』と仰るのですよ。',
      );
      era.printButton('「……羨ましいのか？」', 1);
      await era.input();
      await daiya.say_and_wait('ええ……羨ましくないと言えば、嘘になりますわ……');
      await daiya.say_and_wait('人は、つい他人を羨んでしまうものですもの。');
      await daiya.say_and_wait(
        'それに、キタちゃんのファンの方々をがっかりさせてしまうと思うと、少し申し訳なくもありまして。',
      );
      await era.printAndWait(
        `言い終えると、サトノダイヤモンドは悪戯っぽく微笑んだ。勝つ、という宣言に等しい。${daiya.sex}は強くて、頼もしい。`,
      );
      await daiya.say_and_wait('時間ですわ。では、参ります！');
      await era.printAndWait(
        '実況「至宝の名を冠したお嬢様、登場！ ファン投票2位、サトノダイヤモンド！」',
      );
      await era.printAndWait('観客「わあああああああ！」');
      await era.printAndWait(
        '実況「お待ちかね、最後の一頭！ ファン投票1位、キタサンブラック！」',
      );
      await era.printAndWait('観客「わああああああああああああ！」');
      await daiya.say_and_wait('……キタちゃん、お待たせいたしましたわ！');
      await kita.say_and_wait(
        'うん！ ずっとこの日を楽しみにしてたんだ、ダイヤ！',
      );
      await daiya.say_and_wait(
        'この機会をくださって、ありがとう。今日のレースで、キタちゃんに追いついたと証明してみせますわ！',
      );
      await daiya.say_and_wait('いいえ、一気に超えてみせますわ！');
      await kita.say_and_wait('先頭は譲らないぞ！！ 勝負だ、ダイヤ！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = '昂揚';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} arim_kin
     * @param {PrintedSpan} sank_hai
     */
    const f = async (
      daiya,
      kita,
      etsuko,
      you,
      rank,
      sats_sho,
      arim_kin,
      sank_hai,
    ) => {
      if (rank === 1) {
        await daiya.say_and_wait(
          'ずっと、前の背中を追いかけてきました。',
          true,
        );
        await daiya.say_and_wait('いま──この背中を超えます！！', true);
        await daiya.say_and_wait('やあああああああああ！！');
        await you.say_as_passer_by_and_wait(
          '実況',
          `サトノダイヤモンド、先頭でゴールイン！！ ダイヤの硬度で、ライバルを打ち破った──！`,
        );
        await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
        await daiya.say_and_wait('はあ、はあ、はあ……');
        await kita.say_and_wait('……ああ────！ くやしい！ 負けた────！！');
        await kita.say_and_wait('でも、超────楽しかった！！');
        await daiya.say_and_wait(
          'ふふふふ！ 私もですわ！ 本当に、超────楽しかった！！',
        );
        await daiya.say_and_wait(
          'これから、何度でもこの楽しさを味わえますわね！',
        );
        await you.say_as_passer_by_and_wait(
          '観客C',
          'ダイヤ、おめでとう────！ いまの、本当にかっこよかったぞ────！！',
        );
        await you.say_as_passer_by_and_wait(
          '観客D',
          '最高のレースだった！！ よく走ったな、キタサン──！',
        );
        await kita.say_and_wait('みんな、ダイヤを待ってるよ！ 行ってこい！');
        await etsuko.say_and_wait(
          `サトノダイヤモンド${daiya.adult_sex_title}、おめでとうございます！ いまのお気持ちを！`,
        );
        await daiya.say_and_wait(
          'クラシック級の締めくくりに、こんな素晴らしいレースができたこと、本当に嬉しく思います。',
        );
        await daiya.say_and_wait(
          'この一年……クラシック三冠を目指して歩んできました。決して楽な道ではございませんでした。',
        );
        await daiya.say_and_wait(
          '途中、いろいろなことがありました。予想もできないことも、ございましたわ。',
        );
        await etsuko.say_and_wait('具体的には、どのようなことでしょう？');
        await daiya.say_and_wait([
          'たとえば ',
          sats_sho,
          ' の悪天候……想像を超える荒れようでした。',
        ]);
        await daiya.say_and_wait(
          'トゥインクル・シリーズは、ときに厳しいレースでもあります……でも、今日は本当に素晴らしい一戦でした。',
        );
        await daiya.say_and_wait(
          'ここまで一緒に歩んでくださった皆さんに、心から感謝いたします。ありがとうございました。',
        );
        await kita.say_and_wait(
          'へへへ、アタシこそありがとう！ でも次は負けないぞ、ダイヤ！！',
        );
        await you.say_as_passer_by_and_wait(
          '観客A',
          'おお、いいぞ──！ キタサン！ 次も応援するからな！',
        );
        await you.say_as_passer_by_and_wait('観客C', 'ダイヤも頑張れよ──！');
        await etsuko.say_and_wait(
          'お二人は幼なじみで、ライバルでもあると公言されていますね！ 次の対決は、もう決まっていますか？',
        );
        await daiya.say_and_wait('いいえ、まだ……');
        await kita.say_and_wait([sank_hai, '！']);
        await kita.say_and_wait([
          'アタシ、',
          sank_hai,
          ' に出る！ あそこで雪辱する！！',
        ]);
      } else {
        await daiya.say_and_wait('はあ、はあ、はあ……');
        await kita.say_and_wait(
          'はあ、はあ……ダイヤ……本当に、追いついてきた……！',
        );
        await kita.say_and_wait(
          'ダイヤの気迫、肌で感じたよ。いまでも、ピリピリしてる。',
        );
        await daiya.say_and_wait(
          '私もですわ。キタちゃんの熱い闘志で、火傷しそうですわ。',
        );
        await kita.say_and_wait('これが、レースのときのダイヤ……！');
        await daiya.say_and_wait('これが、レースのときのキタちゃん……！');
        await kita.say_and_wait(
          'これから何度でも、今日みたいにダイヤと勝負できるんだ！ 本当に楽しみ！',
        );
        await daiya.say_and_wait(
          'ええ！ これからずっと、キタちゃんと一緒に走れますわ！',
        );
        await you.say_as_passer_by_and_wait(
          '観客A',
          'いいぞ──！ キタサン！ 次も応援するからな！',
        );
        await you.say_as_passer_by_and_wait('観客C', 'ダイヤも頑張れよ──！');
        await kita.say_and_wait([
          'うん！！ ありがとう！ アタシの次走は……',
          sank_hai,
          '！',
        ]);
      }
      await you.say_as_passer_by_and_wait('観客', 'おおおおおおおおお！');
      await you.say_as_passer_by_and_wait(
        '観客A',
        'つまり『春のシニア三冠』だな！ 絶対取れよ、キタサン！！',
      );
      await kita.say_and_wait('うん！ ぜひ現地で見てください！');
      await daiya.say_and_wait(['私も出ますわ！', '！！']);
      era.printButton('「えっ……ダイヤ！？」', 1);
      await era.input();
      await era.printAndWait(
        `次走どころか、シニア級の方針すら、まだ話し合っていない。`,
      );
      await era.printAndWait(
        `それでもサトノダイヤモンドは ${you.name} を一度見てから、客席へもう一度繰り返した。`,
      );
      await daiya.say_and_wait([
        '私は ',
        sank_hai,
        ' でキタちゃんと勝負しますわ！！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客B',
        `サトノダイヤモンド対キタサンブラック、${daiya.couple_title}の対決はまだ続くのか！`,
      );
      await you.say_as_passer_by_and_wait('観客A', [
        arim_kin,
        'は始まりにすぎない……おおお！ これからも追うぞ！！',
      ]);
      await era.printAndWait(
        `客席を包む大歓声は、しばらく止まなかった。そのときキタサンブラックは、出走した${daiya.uma_sex_title}たちをウイナーズサークルへ呼んだ。`,
      );
      await era.printAndWait(
        `${daiya.uma_sex_title}たちは一列に並び、客席へ向く。両手を大きく左右に振った。`,
      );
      await kita.say_and_wait('皆さん、来年もよろしくお願いします──！！');
      await you.say_as_passer_by_and_wait('観客', 'わああああああああああ！');
      era.drawLine();
      await daiya.say_and_wait(
        '……勝手に決めてしまって、本当に申し訳ありません。',
      );
      await era.printAndWait(
        '控え室に戻ると、サトノダイヤモンドは深く頭を下げた。',
      );
      era.printButton('「次の目標は、本当に『大阪杯』でいいのか？」', 1);
      await era.input();
      await era.printAndWait(
        `距離も日程も問題はない。ただ念のため、${you.name} は${daiya.sex}に確認した。一流の${daiya.uma_sex_title}になる夢のための決断か、と。`,
      );
      await daiya.say_and_wait(
        'はい。『大阪杯』もG1ですもの。問題ございませんわ。',
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          `今日、ウイナーズサークルでのキタちゃんを見て……また${kita.sex}のすごさを知りました。`,
        );
        await daiya.say_and_wait(
          'レースには勝ちましたけれど、キタちゃんの歩みには、まだ追いつき切れていませんわ……',
        );
      } else {
        await daiya.say_and_wait(
          `今日、レース後のキタちゃんを見て……また${kita.sex}のすごさを思い知りました。`,
        );
        await daiya.say_and_wait('……キタちゃんとの距離は、まだ遠い……');
      }
      await daiya.say_and_wait(
        'トレーナーもご覧になりましたわね？ あのときの客席の笑顔と、会場を揺るがす歓声を。',
      );
      await daiya.say_and_wait(
        `キタちゃんは、${kita.sex}の走りで皆を笑わせ、トゥインクル・シリーズ全体を熱くする。`,
      );
      await daiya.say_and_wait(
        `あれこそが『一流の${daiya.uma_sex_title}』の姿だと、深く感じましたわ。`,
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』がどうあるべきか、私はまだ答えを持てていません。`,
      );
      await daiya.say_and_wait(
        `キタちゃんの場合、${kita.sex}が真剣に走る姿そのものが、応援したくなるのです。`,
      );
      await daiya.say_and_wait(
        'ファンの心を惹き、揺さぶる。それがキタちゃんの流儀ですわ。',
      );
      await daiya.say_and_wait(
        '……サトノ家の令嬢である私には、ああいう熱を起こすことはできません。',
      );
      era.printButton('「ダイヤには、ダイヤの良さがある」', 1);
      await era.input();
      await era.printAndWait(
        `揺るがない強い意志。気品を保ち、弱さを見せないのが${daiya.sex}の流儀だ。`,
      );
      await era.printAndWait(
        `その分、${daiya.sex}の努力は見えにくい。だが${daiya.sex}の努力はキタサンブラックに負けていない。いつだって、いちばん強く輝いている。`,
      );
      await daiya.say_and_wait(
        'ふふ、そう言っていただけるのは嬉しいですわ……でも、ご心配なく。',
      );
      await daiya.say_and_wait(
        `私は、自分だけの『一流の${daiya.uma_sex_title}』の姿を見つけますわ。`,
      );
      await daiya.say_and_wait(
        `サトノダイヤモンドこの私が、どんな形で${daiya.uma_sex_title}界を支えられるのか……`,
      );
      await daiya.say_and_wait(
        `キタちゃんの姿を見ながら、${kita.sex}の背中を追いながら……そうすれば、答えに届く気がいたしますの。`,
      );
      era.printButton('「わかった、次走は『大阪杯』だな！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい！ トレーナー、これからもよろしくお願いいたしますわ！',
      );
      await era.printAndWait(
        `『一流の${daiya.uma_sex_title}』の姿。その未知の答えを探すため、${you.name} とサトノダイヤモンドはシニア級へ踏み出す。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait(
        'あけましておめでとうございます。『新年会』へようこそ！',
      );
      await era.printAndWait(
        `新年。サトノダイヤモンドに招かれ、${you.name} はサトノグループ主催の新年会へ来た。`,
      );
      await era.printAndWait(
        'サトノ家の者とグループ関係者が、年始の挨拶を交わしやすいように開かれているらしい。',
      );
      await daiya.say_and_wait(
        '始まったばかりで申し訳ありませんが、両親がトレーナーにご挨拶したいと申しておりまして。',
      );
      await era.printAndWait(
        'ダイヤの父「あけましておめでとうございます。ダイヤがお世話になっております。」',
      );
      await era.printAndWait(
        'ダイヤの父「娘は昨年のクラシック級で、予想以上の結果を残しました。トレーナーのご指導の賜物です。」',
      );
      await era.printAndWait(
        'ダイヤの父「ダイヤの直感は間違っていなかった、ということですね──シニア級も、よろしくお願いいたします。」',
      );
      era.printButton(
        `「はい。『一流の${daiya.uma_sex_title}』へ導きます」`,
        1,
      );
      await era.input();
      await era.printAndWait('ダイヤの父「ええ、期待しております。」');
      await daiya.say_and_wait(
        'これから皆さまへご挨拶回りがございますので、少し席を外しますわね。',
      );
      await daiya.say_and_wait(
        'トレーナーはご自由に、おくつろぎくださいまし。',
      );
      await era.printAndWait(
        `サトノダイヤモンドの両親は、サトノ家でも中心に近い。ゆえに${
          daiya.sex_code === 1 ? '息子' : '娘'
        }である${daiya.sex}も、忙しいらしい。`,
      );
      await era.printAndWait(
        'ダイヤの元トレーナー「ダイヤ、あけましておめでとう！ トゥインクル・シリーズ、いい走りだったよ！」',
      );
      await era.printAndWait(
        'ダイヤの元担当医「ふふふ、あんなに小さかったダイヤが、もうこんなに。レースを見るたびに感慨深いですよ。」',
      );
      await daiya.say_and_wait(
        'あけましておめでとうございます。トレーナー、先生、お久しぶりですわ。',
      );
      await daiya.say_and_wait(
        'お二人のおかげで、今の私があります。走る基礎も、トレーナーのお二人が築いてくださいました。心から感謝しております。',
      );
      await era.printAndWait(
        'ダイヤの元トレーナー「実は今でも生徒に自慢してるんだ、昔ダイヤのトレーナーだったってね！ みんな感心するよ！」',
      );
      await daiya.say_and_wait(
        'あら、ふふふ。光栄ですわ♪ でも、私をご指導くださる前から、すでに名の知れたトレーナーでいらっしゃいましたもの。',
      );
      await daiya.say_and_wait(
        '先生も栄養学では高名な教授ですわ。お二方のような方にご指導いただけた私こそ、羨ましい立場ですわね。',
      );
      await era.printAndWait(
        'ダイヤの元担当医「あら、お上手ね。もうサトノグループの看板にふさわしい気品ですよ。」',
      );
      await daiya.say_and_wait('いえ、まだまだですわ。');
      await daiya.say_and_wait(
        `私はまだ、『一流の${daiya.uma_sex_title}』のあるべき姿を探している途中ですもの。`,
      );
      await era.printAndWait(
        `ダイヤの元トレーナー「一流の${daiya.uma_sex_title}になった……ということは、海外遠征も視野に入るのかな？」`,
      );
      await era.printAndWait(
        'スポーツ用品会社の担当「海外遠征のご予定がございましたら、海外向けのトレーニング機器やシューズをご用意できます。」',
      );
      await era.printAndWait(
        'スポーツ用品会社の担当「ダイヤ様専用の製品開発も可能です。いつでもお申し付けください。」',
      );
      await daiya.say_and_wait(
        '御社に作っていただいたトレーニング機器は、家でも愛用しておりますわ。',
      );
      await daiya.say_and_wait(
        '新しい機械が要るときは、また開発をお願いしてもよろしいかしら？',
      );
      await era.printAndWait(
        'スポーツ用品会社の担当「もちろんです。ダイヤ様はサトノグループの星。弊社も全力でお応えします。」',
      );
      await daiya.say_and_wait(
        'ありがとうございます。近日中にご連絡いたしますわ♪',
      );
      await era.printAndWait(
        '優れたトレーナー、一流の医師、スポーツ用品会社の協力……',
      );
      await era.printAndWait(
        `サトノダイヤモンドは幼い頃から、恵まれた環境で育ってきた。多くの期待を背負っているからこそ、だろう。`,
      );
      await era.printAndWait(
        `その分、${daiya.sex}の責任も重い。受けた恩は、成績で返さねばならない。期待の裏には、逃れられない責任がある。`,
      );
      era.printButton(
        `──シニア級のこの一年、${daiya.sex}と一緒に、勝利という結果を残す！`,
        1,
      );
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `新年会のあと、${you.name} はサトノダイヤモンドと初詣へ向かった。`,
      );
      await daiya.say_and_wait(
        '──トレーナー、ずいぶん長くお祈りなさっていましたわね。',
      );
      era.printButton('「神様に、決意を伝えるためだ」', 1);
      await era.input();
      await daiya.say_and_wait('私のレースに関わることでしょうか？');
      era.printButton('「もちろん」', 1);
      await era.input();
      await daiya.say_and_wait(
        'でしたら、私もご一緒に決意を申し上げたかったですのに……',
      );
      await daiya.say_and_wait(
        'でも、トレーナーの真剣なお顔を見てしまいましたから、今回は不問といたしますわ♪ ふふふ！',
      );
      await daiya.say_and_wait(
        'では、このあと……トレーナーはどのようにお過ごしになるおつもりですの？',
      );
      await daiya.say_and_wait(
        'よろしければ、トレーナーがどう新年を過ごすのか、知りたいですわ！',
      );
      await daiya.say_and_wait(
        '我が家もキタちゃんのお家も、人が大勢集まる宴会ばかりですので。',
      );
      await daiya.say_and_wait(
        'パーティーや宴会以外に、どんな過ごし方があるのか知りたいのです！ ご一緒させてくださいまし！',
      );
      await era.printAndWait(
        '口頭で説明するだけかと思いきや、いつの間にか一緒に過ごす話になっていた。',
      );
      await era.printAndWait(
        `新年といえば、${you.name} が毎年していることは──`,
      );
      era.printButton('「寝正月をする」（体力+300）', 1);
      era.printButton('「福袋を買う」（全能力+10）', 2);
      era.printButton('「新年の抱負を書く」（スキルPt+70）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait(
            '……もう、お休みになるのですか？ 初夢の練習、ですの──',
          );
          await era.printAndWait(
            '本当に眠る人もいるが、外出せずに家でゆっくり過ごす、という意味だと説明した。',
          );
          await daiya.say_and_wait(
            'あら、明けて早々、家でのんびり……罪悪感がありそうですわね♪ では、一緒に寝正月をいたしましょう！',
          );
          await era.printAndWait(
            `トレーナー室でお菓子をつまみながら、二人で新年特番を見ることにした。`,
          );
          await daiya.say_and_wait(
            '……バスツアーなのに、ほとんど歩いていらっしゃいますわね……',
          );
          await daiya.say_and_wait('わあ！ この鰻重、おいしそうですわ……！');
          era.printButton('「見てると、食べたくなるな」', 1);
          await era.input();
          await daiya.say_and_wait(
            '今日も営業しているようですし、出前でいただきましょうか。',
          );
          era.printButton('「出前で届く距離じゃないぞ！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '大丈夫ですわ。トレーナーも私も、これだけ頑張ったのですもの。このくらいのわがまま、父も聞いてくれますわ♪',
          );
          await era.printAndWait(
            `こうして──新幹線で運ばれてきた鰻重を、二人で味わった。`,
          );
          break;
        case 2:
          await daiya.say_and_wait(
            '福袋！ あれは期待で胸がいっぱいになりますわね！ 私も欲しいですわ！',
          );
          await era.printAndWait(
            `福袋を買いに、${you.name} とサトノダイヤモンドはショッピングモールへ向かった。`,
          );
          await daiya.say_and_wait(
            'どのお店にいたしましょう……あら、食べ物やお茶の福袋もありますわね。',
          );
          era.printButton('「それにしてみるか？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '食べ物なら、好みでなくても皆さんにお分けできますもの。では、それにいたしましょう！',
          );
          await daiya.say_and_wait(
            '行列が長いですわね……しばらく待ちそうですし、待つあいだは観察クイズをいたしましょう。',
          );
          await daiya.say_and_wait('通る方が、どの店に入るか当てるのです！');
          era.printButton('「いいぞ！」', 1);
          await era.input();
          await daiya.say_and_wait(
            'では、あちらのダウンを着た男性から。私はカフェと予想いたしますわ！',
          );
          era.printButton('「俺は上の書店だと思う」', 1);
          await era.input();
          await daiya.say_and_wait(
            '…………あ、カフェに入りましたわ！ ふふふ、私の勝ちですわね♪ お疲れのお顔でしたもの。',
          );
          await daiya.say_and_wait(
            '遊んでいると、時間があっという間ですわ。さあ、福袋を開けに戻りましょう！',
          );
          await era.printAndWait(
            `楽しい待ち時間の末、福袋も無事に手に入った！`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            '新年の抱負を書く……でしたら、大きな紙に書きたいですわ！',
          );
          era.printButton('「書道パフォーマンスか？」', 1);
          await era.input();
          await daiya.say_and_wait(
            'はい！ 大筆と画仙紙は、家の者に買ってこさせますわ！',
          );
          await era.printAndWait(
            `幸い正月は空いており、体育館を借りて書道パフォーマンスをすることになった。`,
          );
          await daiya.say_and_wait(
            'うん……下書きで流れを決めておかないと、バランスが取れませんわね。',
          );
          await era.printAndWait(
            `サトノダイヤモンドは画仙紙の前で丁寧にシミュレーションしたあと、${daiya.sex}とほぼ同じ高さの筆で一気に書き始めた。`,
          );
          await daiya.say_and_wait(
            'せいあああああああ！ はっ！ せいっ！ はっ！',
          );
          await daiya.say_and_wait('ふう────！ いかがでしたか？ トレーナー！');
          await era.printAndWait(
            `こうして${daiya.sex}は、非常に美しい字で『宿願成就』と大書した！`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = '福引で運試し！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {number} result 抽選結果。0 - 特等温泉旅行券、1-3 - 一等〜三等（にんじんハンバーグ、にんじん山、にんじん一本）、4 - トイレットペーパー
     */
    const f = async (daiya, you, result) => {
      await era.printAndWait(
        `帰り道、${you.name} とサトノダイヤモンドが商店街を通ると──`,
      );
      await era.printAndWait(
        '商店街の人「さあさあ、新春大抽選会やってますよ～！ 特等は『温泉旅行券』！」',
      );
      await era.printAndWait(
        '商店街の人「一等は『特上にんじんハンバーグ』、二等は『にんじん山盛り』、三等は『にんじん一本』！」',
      );
      await era.printAndWait(
        '商店街の人「さあさあ、楽しい福引だよ！ どなたでもどうぞ～！」',
      );
      await daiya.say_and_wait('わあ、福引ですわ！');
      await daiya.say_and_wait(
        'あれは……手回しの抽選機！ 福引は、ああいうのがいちばん気分が乗りますわ！',
      );
      era.printButton('「こだわりがあるのか？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '手回しなら、自分で回す力と速さを調整できますもの？',
      );
      await daiya.say_and_wait(
        '自分の力で運を掴む感じがするのです。その感じが、たまらなくよろしいのですわ！',
      );
      era.printButton('「引いてみるか？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は買い物でもらった抽選券を思い出し、${daiya.sex}に勧めた。`,
      );
      await daiya.say_and_wait('引きますわ！！ 必ず特等を当ててみせます！');
      await daiya.say_and_wait('せいっ～～！！');
      await era.printAndWait(
        'サトノダイヤモンドは凄まじい勢いで、抽選機のハンドルを回した！',
      );
      await era.printAndWait('結果は──');
      switch (result) {
        case 0:
          await era.printAndWait(
            '商店街の人「なんと！ おめでとう────！！ 特等『温泉旅行券』だ～～～～！！」',
          );
          await era.printAndWait('「温泉旅行券」を手に入れた。');
          await daiya.say_and_wait(
            '成……成功ですわ～～！！ 特等！ 特等ですわ、トレーナー！！',
          );
          await daiya.say_and_wait(
            'ほら、でしょう？ 言ったとおりでしょう？ 運は気迫で掴むものなのですわ！！',
          );
          era.printButton('「ああ、すごいな……！」', 1);
          await era.input();
          await era.printAndWait(
            `${daiya.sex}の言葉どおり特等が当たった。本当に、気迫で運を掴んだ気がする。`,
          );
          await daiya.say_and_wait('ふふふ、今年は良い年になりそうですわ♪');
          era.printButton('「キタサンと温泉に行けばいい」', 1);
          await era.input();
          await daiya.say_and_wait(
            'いいえ、トレーナーに差し上げますわ。抽選券はトレーナーのですもの。',
          );
          await daiya.say_and_wait('福引の体験だけで、私は十分ですわ！');
          era.printButton('「でも当たったのは君だぞ……」', 1);
          await era.input();
          await daiya.say_and_wait('では、私とトレーナーで参りましょう。');
          await daiya.say_and_wait(
            '労いの旅、ということで。ええ、そのほうがよろしいわ！ 決まりですわ！',
          );
          await daiya.say_and_wait(
            'トゥインクル・シリーズ最初の三年が一段落したら、一緒にこの労いの旅へ行きましょう！ 区切りは、祝ってこそですもの！',
          );
          await daiya.say_and_wait(
            'それに、ご褒美があれば、やることも張り合いますわよね？',
          );
          era.printButton('「そうだな」', 1);
          await era.input();
          await daiya.say_and_wait('では決まりですわ！ 約束ですよ！');
          await era.printAndWait(
            `シニア級のこの一年で納得のいく成績を残し、そのあとで旅行券を使う約束をした。`,
          );
          break;
        case 1:
          await era.printAndWait(
            '商店街の人「一等おめでとう～！ 賞品は『特上にんじんハンバーグ』！」',
          );
          await era.printAndWait('「特上にんじんハンバーグ」を手に入れた。');
          await daiya.say_and_wait('あら、にんじんハンバーグ……！');
          await daiya.say_and_wait(
            'この豪快な盛りつけ、よろしいですわね。家でにんじんをいただくときは切り分けてしまいますから、こういう外食は前から楽しみにしておりましたの♪',
          );
          await daiya.say_and_wait(
            'このにんじん、立てたまま綺麗にいただけますわよ！',
          );
          era.printButton('「最初から最後まで立てたまま！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            'ええ♪ まずはにんじんの上から……実演したほうが早そうですわ。トレーナー、ご一緒にいただきましょう！',
          );
          await daiya.say_and_wait(
            'ふふふ、ご覧なさいませ……ダイヤの秘技ですわ！',
          );
          await era.printAndWait(
            'サトノダイヤモンドは上品にナイフとフォークを使い、にんじんを一度も倒さずにハンバーグを食べ進めた。',
          );
          await daiya.say_and_wait(
            '……ごちそうさまでした。さすが特上、とてもおいしいですわ！',
          );
          era.printButton('「刀工が凄すぎる……！」', 1);
          await era.input();
          await daiya.say_and_wait(
            'えへへ……昔、にんじんハンバーグのにんじんが倒れた方角が不幸になる、という呪いを聞いたことがありまして。',
          );
          await daiya.say_and_wait(
            'でしたら、倒さなければ不幸な方角も生まれない、と思って、この技を磨きましてよ。',
          );
          era.printButton('「呪いを解くために練習したのか？」', 1);
          await era.input();
          await daiya.say_and_wait(
            'ええ、ご覧になった方は皆驚かれますし、話題にもなりますわ。トレーナーも試されます？',
          );
          await era.printAndWait(
            `そのあとサトノダイヤモンドは ${you.name} に秘技を伝授し、にんじんを倒さない食べ方を教えてくれた！`,
          );
          break;
        case 2:
          await era.printAndWait(
            '商店街の人「二等～！！ 賞品は『にんじん山盛り』！」',
          );
          await era.printAndWait('「にんじん山盛り」を手に入れた。');
          await daiya.say_and_wait('わあ～、にんじんがいっぱいですわ♪');
          await daiya.say_and_wait(
            'トレーナー、お持ち帰りくださいまし。抽選券はトレーナーのですもの。',
          );
          era.printButton('「こんなに食べきれない！」', 1);
          await era.input();
          await daiya.say_and_wait(
            'あら……では、寮の皆さんにお分けしましょう。',
          );
          await daiya.say_and_wait(
            'このまま食べるのも芸がありませんし、料理にしてからお配りいたしましょう♪',
          );
          era.printButton('「何を作るつもりだ？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '実は、ずっと作ってみたかった料理がありまして……にんじんたい焼きですわ！！',
          );
          await daiya.say_and_wait(
            'たい焼きの中に、皆が大好きなにんじん餡を。さらに酢にんじんでアクセントを。',
          );
          await daiya.say_and_wait(
            '生地にもにんじんを……にんじんのスライスも加えて！ オレンジ色のかわいいたい焼きになりますわ♪',
          );
          await daiya.say_and_wait(
            'そして上に、丸ごとのにんじんを一本！ にんじんハンバーグのように！！',
          );
          era.printButton('「す、すごい新発想だ……」', 1);
          await era.input();
          await daiya.say_and_wait(
            'トレーナーもそう思われます？ うまくいけば、グループの食事部門の新メニューにもいたしますわ♪',
          );
          await era.printAndWait(
            `料理があまりに斬新で不安になり、${you.name} は一緒に作ると申し出た。`,
          );
          await era.printAndWait(
            `翌日──サトノダイヤモンドは ${you.name} に報告した。栗東寮の皆が「にんじんたい焼き」をとても気に入った、と。`,
          );
          break;
        case 3:
          await era.printAndWait(
            '商店街の人「三等～！ 賞品は『にんじん一本』！」',
          );
          await era.printAndWait('「にんじん一本」を手に入れた。');
          await daiya.say_and_wait(
            '一本……本当に申し訳ありません、トレーナー。貴重な抽選券を無駄に……',
          );
          await daiya.say_and_wait('私の気迫が足りなかったのでしょう……');
          era.printButton('「じゃあ、このにんじんで元気を補おう！」', 1);
          await era.input();
          await daiya.say_and_wait('えっ……？ 本当に、私にくださるのですか……？');
          era.printButton('「食べてくれ！」', 1);
          await era.input();
          await daiya.say_and_wait(
            'たった一本の、大切なにんじんを私に……ありがとうございます。',
          );
          await daiya.say_and_wait('…………ふふ。');
          await daiya.say_and_wait(
            'トレーナーがくださったにんじん……世界に一本だけの、私だけのにんじん……',
          );
          await daiya.say_and_wait('世界一おいしいに違いありませんわ♪');
          await era.printAndWait(
            'サトノダイヤモンドが喜んでくれるのがいちばん大切だ。──だが商店街の人は、世界一おいしいという言葉にプレッシャーを感じていた。',
          );
          break;
        case 4:
          await era.printAndWait(
            '商店街の人「残念、ハズレ！ 参加賞は『トイレットペーパー』だよ～」',
          );
          await era.printAndWait('「トイレットペーパー」を手に入れた。');
          await daiya.say_and_wait('…………ハズレ、ですの…………？');
          await daiya.say_and_wait('…………もう一度。');
          await daiya.say_and_wait('もう一度、引きますわ！');
          await daiya.say_and_wait(
            'ハズレという結果は認めません！ 必ず覆してみせますわ！！',
          );
          await era.printAndWait(
            '商店街の人「えっと……抽選券、まだお持ちですか？」',
          );
          await daiya.say_and_wait('いいえ。どこで購入できますの？');
          await era.printAndWait(
            '商店街の人「抽選券は売ってないんですよ～。商店街でお買い物すると付いてくるんで──」',
          );
          await daiya.say_and_wait(
            'お買い物でいただけるのですね！？ では買いに参りますわ！',
          );
          era.printButton('「待て！ まず落ち着こう！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            `止めないでくださいまし！！ サトノ家の${daiya.uma_sex_title}として、この困難から逃げるわけにはいきませんわ！`,
          );
          await era.printAndWait(
            `${daiya.sex}の不運に抗う決意が火を噴いたらしい。呪いを破ろうとする執念と同じだ。──いや、単なる負けず嫌いだけかもしれない……`,
          );
          await daiya.say_and_wait('お財布は……あっ！？');
          await era.printAndWait(
            `この日、サトノダイヤモンドは財布を寮に置いたまま出ていた。おかげで、福引への再挑戦は止まった。`,
          );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait('ハッピーバレンタイン♪ トレーナー！');
      await daiya.say_and_wait('参りましょう！');
      era.printButton('「どこへ！？」', 1);
      await era.input();
      await daiya.say_and_wait('ふふふ、着いてからのお楽しみですわ♪');
      await era.printAndWait(
        `バレンタイン。サトノダイヤモンドはなぜか ${you.name} の手を引いて外へ出た。着いた先は……`,
      );
      await era.printAndWait(
        '特に変わった場所ではない。栗東寮の前だ。寮の門前に、見慣れない大きな機械が据えられている。',
      );
      era.printButton('「そのクレーンと大量の箱は何だ！？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'えへへ、トレーナーへのバレンタインのサプライズですわ！',
      );
      await daiya.say_and_wait(
        'トレーナーのために用意した、巨大クレーンゲームですの！',
      );
      await daiya.say_and_wait(
        'ルールは普通のクレーンゲームと同じですわ。これからクレーンで人を吊り、ご自身で景品を取っていただきます。',
      );
      await era.printAndWait('つまり、人がクレーンのアーム役になるゲームだ。');
      await daiya.say_and_wait(
        'せっかくのバレンタインですもの。サプライズがあったほうがよろしいと思い、いろいろ調べましてよ。',
      );
      await daiya.say_and_wait(
        'そしたら、サトノグループの子会社が巨大クレーンゲームを開いた記事を見つけまして！',
      );
      await daiya.say_and_wait(
        'とても面白そうでしたから、機材とスタッフをお借りしたのです♪',
      );
      await daiya.say_and_wait(
        '景品はバレンタインのチョコレート！ 種類をたっぷり用意しましたから、お好きなものを取ってくださいまし！',
      );
      await daiya.say_and_wait(
        '駄菓子屋のチョコから、有名店の限定チョコまで、かなり豊富ですわ。',
      );
      await daiya.say_and_wait(
        '行きたい方向を仰っていただければ、スタッフがクレーンを操作してくれますわ♪',
      );
      era.printButton('「アーム役って、つまり……」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい、トレーナーですわ！ ダイヤ特製のバレンタイン、心ゆくまでお楽しみくださいまし！',
      );
      await era.printAndWait(
        `……好奇心旺盛なサトノダイヤモンドらしい発想だ。${daiya.sex}のトレーナーとして、${you.name} も覚悟を決めるしかない……！`,
      );
      await daiya.say_and_wait(
        'トレーナー～！ 行きたい方向を仰ってくださいまし～！',
      );
      era.printButton('「こ、このあたりでいい……！」', 1);
      await era.input();
      await daiya.say_and_wait(
        `は～～い！ ではゆっくり ${you.sex} を下ろしてください──！`,
      );
      await era.printAndWait(
        `さすがクレーン操作に慣れたスタッフだ。安定した操作のおかげで、${you.name} は安心してチョコの山へ降りられた。`,
      );
      await era.printAndWait(
        `というより、${you.name} は面白くなってきた！ 手元のチョコを集め、両手がいっぱいになる。`,
      );
      await daiya.say_and_wait(
        'わあ！ トレーナー、お上手ですわ！ このバランス感覚……やりますわね！',
      );
      await daiya.say_and_wait(
        'あら、まだもう一つ！？ 落とさないようお気をつけて……！',
      );
      await daiya.say_and_wait(
        `ふふ、夢中になられていますわね。${you.sex}が楽しんでくださって、何よりですわ♪`,
      );
      era.drawLine();
      await daiya.say_and_wait(
        'トレーナー、本当にお上手でしたわ！ 見入ってしまいました！',
      );
      await daiya.say_and_wait('それに……ふふふ、楽しそうなお顔でしたわ。');
      era.printButton('「すごく楽しかったよ！」', 1);
      await era.input();
      await daiya.say_and_wait('えへへ、嬉しいですわ……♪');
      await daiya.say_and_wait(
        'レース以外の、こういう嬉しいことも……トレーナーと分かち合えたら、素敵ですわね。',
      );
      era.printButton('「そうだな！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'あ、チョコレート！ 遠慮なく、どうぞ召し上がってくださいまし！',
      );
      await daiya.say_and_wait(
        '帰ってからも、今日のことを思い出しながら、私もチョコをいただきますわ。',
      );
      await era.printAndWait(
        `巨大クレーンゲームで、チョコを大量に手に入れた。これから一口ごとに、${daiya.sex}の笑顔を思い出すだろう。`,
      );
      await era.printAndWait(
        `${you.name} は面白くなってきた！ 手元のチョコを手に取る。`,
      );
      era.printButton('「これは……？」', 1);
      await era.input();
      await daiya.say_and_wait('あっ……！ そのチョコは……！');
      await era.printAndWait(
        `ひとつだけ、包装が少し歪んだチョコがある。${you.name} は体を揺らし、手作り感のあるその一個へ手を伸ばした。`,
      );
      await daiya.say_and_wait('ト、トレーナー！ 無理なさらないで……！');
      await daiya.say_and_wait('ああ、さっき苦労して取ったチョコが落ちて……');
      await daiya.say_and_wait(
        `……${you.sex}、気づいてしまったのでしょうか……？`,
      );
      await era.printAndWait(
        `${you.name} は巨大クレーンゲームでまずまずの戦果を得た。それ以上に、包装の歪んだチョコを取り切った！`,
      );
      era.drawLine();
      await daiya.say_and_wait('……あれは……私が作ったチョコレートですわ。');
      era.printButton('「だと思った！」', 1);
      await era.input();
      await daiya.say_and_wait('やはり、手作りだと見抜いて取られたのですね……');
      await daiya.say_and_wait('もう……');
      era.printButton('「食べてもいいか？」', 1);
      await era.input();
      await daiya.say_and_wait('……はい、どうぞ。');
      await era.printAndWait(
        `${you.name} は包装を開け、整然と並んだチョコから一粒口に入れた。`,
      );
      await era.printAndWait(
        '……なんと言えばいいだろう。奇妙な味だ。おいしい部類ではあるが、言葉にしにくい。',
      );
      await daiya.say_and_wait('変な味、ですわよね……？');
      era.printButton('「おいしいけど、味が奇妙だ……」', 1);
      await era.input();
      await daiya.say_and_wait(
        'そうですわ。珍しい味に挑戦したつもりが、こんな不思議な味になってしまって……',
      );
      await daiya.say_and_wait(
        '自分で試食したときはまずくはなかったのですが、このチョコをお渡ししてよいものか、迷っておりまして……',
      );
      await daiya.say_and_wait(
        '召し上がっていただけただけでも、本当に感謝ですわ！ 私には、それで十分です……！',
      );
      era.printButton('「このチョコに合うものを、一緒に探さないか？」', 1);
      await era.input();
      await daiya.say_and_wait('えっ……？');
      await era.printAndWait(
        `${you.name} は、あと一味足せばもっとおいしくなると思い、食材探しを提案した。`,
      );
      await daiya.say_and_wait(
        'なるほど……果物やお菓子と合わせて、どの組み合わせがいいか試すのですね。',
      );
      await daiya.say_and_wait('面白そうですわ！ そういたしましょう！');
      await era.printAndWait(
        `チョコをおいしくするため、いろいろな組み合わせに挑戦した。`,
      );
      await era.printAndWait(
        '結果、サトノダイヤモンド手作りのチョコはドラゴンフルーツがいちばん合った。',
      );
      await daiya.say_and_wait(
        'ふふふ、トレーナーと私が一緒に完成させた、世界に一つのチョコですわね。',
      );
      await daiya.say_and_wait(
        'とてもおいしいですけれど……この配合は、誰にも教えませんわ。私たち二人だけの秘密ですもの♪',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '大阪杯に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await era.printAndWait(
        'キタサンブラックも出走する『大阪杯』。サトノダイヤモンドは黙々と準備を進めている。',
      );
      era.printButton('「ずいぶん落ち着いているな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ、キタちゃんと走れるのは楽しみですけれど、それで冷静を失ってはなりませんわ。',
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』であるなら、自分がどんな姿を目指すのか、はっきりさせねばなりません。`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}界にどう貢献するか？ 『一流の${daiya.uma_sex_title}』として何を成すべきか？ その答えを見つけねばなりませんわ。`,
      );
      await daiya.say_and_wait(
        `キタちゃんは、観客に笑いと賑わいを届け、それで${daiya.uma_sex_title}界を支える存在になると思いますわ。`,
      );
      await daiya.say_and_wait(
        'だから、キタちゃんを参考にしながら、私にできることを見つけられれば……',
      );
      era.printButton(
        `「それに、『一流の${daiya.uma_sex_title}』には強い実力も要る」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait(
        `おっしゃるとおりですわ。考えすぎて負けてしまっては、『一流の${daiya.uma_sex_title}』とは言えませんもの。`,
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』にふさわしい走りで勝ちます。まずは、それが私の務めですわ。`,
      );
      await era.printAndWait(
        'パドックの観客は、皆サトノダイヤモンドとキタサンブラックの話で持ちきりだった。',
      );
      await era.printAndWait(
        `観客A「キタサンブラック対サトノダイヤモンド……またこの対決が見られるなんて！ ${daiya.couple_title}、どっちも頑張ってほしいな！」`,
      );
      await era.printAndWait(
        `観客B「キタサンブラックは去年の『大阪杯』で惜しくも2着だった。今回は勝ちたいだろうな。」`,
      );
      await era.printAndWait('観客C「あ！ ダイヤが出てきた！」');
      await era.printAndWait(
        '観客B「ダイヤ──！ 今日もいい走り、期待してるぞ──！」',
      );
      await era.printAndWait('観客D「キタサン──！ 去年の雪辱を果たせ！！」');
      await kita.say_and_wait('うん、絶対だ！');
      era.printButton('（あれ……？ なんだか……）', 1);
      await era.input();
      await era.printAndWait(
        `……いつもと違う。${you.name} は、キタサンブラックの空気が普段と違うことに気づいた。`,
      );
      await kita.say_and_wait(
        '──ダイヤ。あのさ、発走前に言っておきたいことがある。',
      );
      await daiya.say_and_wait('ええ……？ キタちゃん、どうかなさいましたの？');
      await kita.say_and_wait(
        'シニア級の王道路線を制するのが、アタシの目標だ！',
      );
      await kita.say_and_wait('だからこの『大阪杯』は、絶対に譲らない！');
      await daiya.say_and_wait('…………っ！？');
      await kita.say_and_wait('お互い、いい走りしようぜ、ダイヤ！');
      await daiya.say_and_wait('……ええ……！');
      await era.printAndWait(
        `観客A「今日のキタサンブラック、貫禄があるな。さすが去年の年度代表${daiya.uma_sex_title}だ。」`,
      );
      await era.printAndWait(
        `……その気迫に、のまれた。キタサンブラックの泰然とした姿に、いつも冷静なサトノダイヤモンドさえ、一瞬言葉を失った。`,
      );
      await daiya.say_and_wait('今、一瞬……キタちゃんに畏れを抱いた……', true);
      await daiya.say_and_wait(
        '気迫で先に負けては、勝てない！！ なのに私は……！',
        true,
      );
      await daiya.say_and_wait('……負けませんわ！');
      await daiya.say_and_wait('負けない、負けませんわ！！');
      era.printButton(`「ダイヤ、${kita.sex}に負けるな！！」`, 1);
      await era.input();
      await daiya.say_and_wait('はい！ 必ず勝ってみせますわ！！');
    };
    f.title = title;
    return f;
  })(),
  sank_hai_end: (() => {
    const title = '共鳴';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (daiya, teio, mcqueen, kita, you, rank, tenn_spr) => {
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          '実況',
          'ダイヤの輝きに、翳りはない！ 『大阪杯』を制したのはサトノダイヤモンド！',
        );
        await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
        await you.say_as_passer_by_and_wait(
          '観客C',
          '本当に隙がないな、サトノダイヤモンド！ 今日の走りも鮮やかだった。',
        );
        await you.say_as_passer_by_and_wait(
          '観客B',
          `${daiya.sex}の実力は、去年台頭したキタサンブラック並み……いや、超えていると言ってもいい……`,
        );
        await you.say_as_passer_by_and_wait(
          '観客A',
          'キタサンブラックも、これで沈む相手じゃない。ダイヤ対キタサン、これからが楽しみだ……！',
        );
      } else {
        await you.say_as_passer_by_and_wait(
          '実況',
          `キタサンブラック、寄せつけない！ ${daiya.sex}は去年の雪辱を果たした、今日もキタサン祭りだ！」`,
        );
        await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
        await you.say_as_passer_by_and_wait(
          '観客B',
          'いやあ、立派な貫禄だ！ また強くなったな、キタサンブラック！！',
        );
        await you.say_as_passer_by_and_wait(
          '観客A',
          `年度代表${daiya.uma_sex_title}の実力、今年も衰えてないな！`,
        );
        await you.say_as_passer_by_and_wait(
          '観客C',
          'サトノダイヤモンドも将来有望だよ。このまま負け続ける相手じゃない。キタサン対ダイヤの対決、これからも見逃せない！',
        );
      }
      await teio.say_and_wait(
        'うんうん、キタちゃんもダイヤも、大きくなったね！',
      );
      await mcqueen.say_and_wait(
        'あなたがどの立場で仰っているのか……でも、私もそう思いますわ。',
      );
      await teio.say_and_wait(
        `${daiya.couple_title}の走りを見てると、ボクと君が対決してた頃を思い出すよ。`,
      );
      await mcqueen.say_and_wait([
        'あなたは ',
        tenn_spr,
        ' のことでしょうね。',
      ]);
      await mcqueen.say_and_wait(
        `もしかすると……${daiya.couple_title}の次走も、そうなるかもしれませんわ。`,
      );
      await teio.say_and_wait('かもね～。ねえ、マックイーン。');
      await teio.say_and_wait('ボク、いま超～～～～走りたくなってきた！');
      await mcqueen.say_and_wait(
        'あら、奇遇ですわ。私も同じことを考えておりました。',
      );
      await teio.say_and_wait('じゃあ、駅まで一緒に走ろう！');
      await mcqueen.say_and_wait('ええ、そういたしましょう。');
      era.drawLine();
      if (rank === 1) {
        await kita.say_and_wait(
          'うわあああああ、くやしい！！ アタシの目標はシニア級の王道路線制覇なのに！',
        );
        await kita.say_and_wait('初戦から失敗するなんて、くそ──！！');
        await daiya.say_and_wait('キ、キタちゃん……！');
        await kita.say_and_wait(
          'ダイヤを振り切れなかった！ アタシ、ずっと厳しいトレーニングしてたのに。',
        );
        await kita.say_and_wait(
          'それでもダイヤは追いついてきた！ いや、最後に油断したから、抜かれたんだ！',
        );
        await kita.say_and_wait('くそくそくそ！ さすがダイヤだよ！');
        await daiya.say_and_wait(
          'えへへ！ キタちゃんに置いていかれないよう、本当に必死でしたわ！',
        );
        await kita.say_and_wait(
          '本気のダイヤと勝負できて、本当に楽しかった！ もっと一緒に走りたい！',
        );
        await kita.say_and_wait([
          '本気のダイヤに勝ちたい！ だから……',
          tenn_spr,
          ' に出てほしい！',
        ]);
      } else {
        await kita.say_and_wait(
          'やった────！！ 大阪杯取った──！ 最初の目標、達成！！',
        );
        await daiya.say_and_wait('っ……！');
        await daiya.say_and_wait(
          'やはり、キタちゃんは『有馬記念』のときより、さらに強くなって……！',
          true,
        );
        await daiya.say_and_wait(
          '走る力では追いついたつもりでいたのに……',
          true,
        );
        await daiya.say_and_wait(
          'キタちゃんは、もっと先へ行ってしまった！',
          true,
        );
        await daiya.say_and_wait(
          '……追いつけると思っていたのに。また、置いていかれた……',
        );
        await kita.say_and_wait(
          'ダイヤに負けないように、アタシめちゃくちゃ頑張ったんだ！',
        );
        await kita.say_and_wait(
          '『有馬記念』でダイヤの実力を知ってから、ずっと！',
        );
        await daiya.say_and_wait(
          '私も十分頑張ったつもりでいましたが、まだまだ足りませんでしたわ……',
        );
        await daiya.say_and_wait(
          'でも！ 私はまだ、もっと頑張れますわ！ 次は必ず、私が勝ちますわ！！',
        );
        await kita.say_and_wait(
          'うん、また勝負しよう、ダイヤ！ アタシも、もっとダイヤと走りたい！',
        );
        await kita.say_and_wait(
          'ダイヤに勝ちたいって気持ちが、アタシを強くするんだ！',
        );
        await kita.say_and_wait([tenn_spr, '！！ ダイヤにも出てほしい！']);
      }
      await daiya.say_and_wait([
        tenn_spr,
        '……キタちゃんの連覇がかかるレース、ですわね。',
      ]);
      await kita.say_and_wait(
        'うん！ G1最長の3200メートル。ダイヤと走ってみたいんだ！',
      );
      await kita.say_and_wait('トレーナーと相談して、考えてみて。');
      await kita.say_and_wait('京都で待ってるから！！');
      era.drawLine();
      await daiya.say_and_wait('……トレーナー、次走について……');
      era.printButton('「出たいのは『天皇賞（春）』だな？」', 1);
      await era.input();
      await daiya.say_and_wait('はい！ でも……どうしてわかりましたの？');
      await era.printAndWait(
        `サトノダイヤモンドは以前、キタサンブラックの背中を追い、『一流の${daiya.uma_sex_title}』の姿の答えを探すと言っていた。`,
      );
      await era.printAndWait(
        `だから ${you.name} は、${daiya.sex}がキタサンブラックと同じレースを望むだろうと踏んでいた。`,
      );
      await era.printAndWait([
        `それにサトノダイヤモンドの気質なら、キタサンブラックに有利で、連覇に臨む `,
        tenn_spr,
        ' をあえて選ぶだろう。',
      ]);
      await daiya.say_and_wait(
        '全部、見抜かれていましたわ……ふふ、これなら今後、私一人で決めても大丈夫そうですわね。',
      );
      era.printButton('「ダメだ、ちゃんと相談しろよ！？」', 1);
      await era.input();
      await daiya.say_and_wait('ふふふ、冗談ですわ♪');
      if (rank === 1) {
        await daiya.say_and_wait([
          'では次走は ',
          tenn_spr,
          ' に決まりですわ。サトノ家のために、由緒ある栄誉の盾を取りに参ります。',
        ]);
      } else {
        await daiya.say_and_wait(
          `今日負けたのは、『一流の${daiya.uma_sex_title}』になる実力がまだ足りないからですわ。`,
        );
        await daiya.say_and_wait([
          'だから次は必ず、',
          tenn_spr,
          ' でキタちゃんに勝ちます……！！',
        ]);
        await daiya.say_and_wait(
          'そして、サトノ家のために、由緒ある栄誉の盾を取りに参ります。',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} condor エルコンドルパサー
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait(
        `今日は春のファン感謝祭。${daiya.uma_sex_title}たちと大勢のファンが、さまざまな交流をしている。`,
      );
      await era.printAndWait(
        `サトノダイヤモンドも女性ファンに囲まれ、${daiya.couple_title}は談笑していた。`,
      );
      await era.printAndWait(
        'ダイヤのファンA「ダイヤの走る姿、本当に大好きなんです！！」',
      );
      await era.printAndWait(
        'ダイヤのファンA「まっすぐ前を見て加速する姿、綺麗でかっこよくて……！」',
      );
      await daiya.say_and_wait(
        'わあ、嬉しいですわ！！ いつも応援してくださって！',
      );
      await era.printAndWait(
        `ダイヤのファンA「はい！ ダイヤを生で見たくて、前に${daiya.sex}と初めて現地観戦したんです！」`,
      );
      await era.printAndWait(
        'ダイヤのファンB「『菊花賞』を現地で見て、私もダイヤのファンになりました！！ ウィナーズライブもかわいかった！」',
      );
      await daiya.say_and_wait(
        'あら、初めての競馬場でしたの！？ 私のために足を運んでくださって、ありがとうございます！',
      );
      await era.printAndWait(
        'ダイヤのファンA「声をかけるのも遠慮してたんですけど……こうしてお話しできて……ほ、本当に感動です……！」',
      );
      await daiya.say_and_wait(
        'えへへ、お話ししてくださって、私もとても楽しいですわ♪',
      );
      await era.printAndWait(
        'ダイヤのファンB「あの、ダイヤは今日、何か企画に出ますか？」',
      );
      await daiya.say_and_wait(
        '私は『非情神経衰弱』に出ますわ！ 大きなカードをグラウンドに並べて、神経衰弱をするのです♪',
      );
      await era.printAndWait('ダイヤのファンB「……『非情』って、どういう……？」');
      await daiya.say_and_wait(
        '走りながら、めくる速さを競うからですわ。順番にめくるのではなく、早い者勝ちなのです。',
      );
      await daiya.say_and_wait(
        '『挑戦状カード』をめくると他の選手と勝負して、勝った方が負けた方のカードをいただけますの♪',
      );
      await era.printAndWait('ダイヤのファンB「そ、それは激しいですね……」');
      await era.printAndWait(
        'ダイヤのファンA「でもダイヤなら勝てます！ 応援しに行きますから！」',
      );
      await daiya.say_and_wait(
        'ふふふふふ！ 皆さんが応援してくださるなら、ダイヤ、全力で頑張りますわ♪',
      );
      await era.printAndWait('ダイヤのファンたち「か……かわいい～～！」');
      await daiya.say_and_wait(
        'もう！ 物陰から覗くなんて、トレーナーはいけませんわ！',
      );
      era.printButton('「邪魔するのも悪いと思って」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は、${daiya.sex}とファンの交流が楽しそうで、声をかけにくかったと伝えた。`,
      );
      await daiya.say_and_wait(
        '私も、つい興奮してしまって……失礼いたしました……',
      );
      await you.say_as_passer_by_and_wait(
        `実況担当の${daiya.uma_sex_title}`,
        '大会連絡。『非情神経衰弱』の出場者は、準備エリアへ集合してください。',
      );
      await daiya.say_and_wait('あ、集合ですわ。では、先に参ります！');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `実況担当の${daiya.uma_sex_title}`,
        '──続いては、知略と体力を試す『非情神経衰弱』！ 出場者6名、入場です！',
      );
      await condor.say_and_wait(
        '直感、計略、熱血！ 勝者の座はエルコンドル・パサーのものだ────！！',
      );
      await gs.say_and_wait(
        'ズワイ、ケガニ、松葉ガニ！！ よっしゃ、カニ祭りだ！！',
      );
      await festa.say_and_wait('ふっ……面白い面子が揃ったな。');
      await sirius.say_and_wait('おいおい……子供の親睦会に、興味はねぇな。');
      await coffee.say_and_wait('……うん、そう……同じ絵柄をめくるの……');
      await daiya.say_and_wait('？ カフェ、どなたとお話しですの……？');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「6名、それぞれスタート位置につきました！ では、『非情神経衰弱』、スタートです！！」`,
      );
      await era.printAndWait('パン！！');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「はい、この競技はコース上のカードをめくり、同じ絵柄を揃えれば得点になる神経衰弱です！」`,
      );
      await condor.say_and_wait('No──────！！ 絵柄が違う────！！');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「出場者は同時にめくりますから、普通の神経衰弱より記憶力が試されます！」`,
      );
      await daiya.say_and_wait('……よし！ 一組揃えましたわ♪');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「サトノダイヤモンド、着実に得点を積み上げています！」`,
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「……これは！？ マンハッタンカフェが立て続けにペアを決め、現在得点トップ！」`,
      );
      await coffee.say_and_wait(
        '……同じ絵柄は……右の隅……そう、よかった……ありがとう……',
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「開始から一度もミスなし！ ${daiya.sex}は独り言で正誤を確かめている。この慎重さが、無失点の秘訣か！」`,
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「残り5分を切りました！ ……おや？ ナカヤマフェスタが動いた！ 先ほどのあれを使うつもりか！？」`,
      );
      await festa.say_and_wait('悪いな、お嬢さん。切り札を使うぜ。');
      await daiya.say_and_wait('！！ 挑戦状……！');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「おっと──ナカヤマフェスタ！ ${daiya.sex}がサトノダイヤモンドに挑戦状を突きつけた！」`,
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「挑戦状カードは、双方合意で賭ける点数を決め、次の勝負に勝った方がその点数を奪えます！」`,
      );
      await sirius.say_and_wait('待て！！ アタシも挑戦状を使う！');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「シリウスシンボリもここで参戦！！ 挑戦状の勝負が三つ巴になった！」`,
      );
      await sirius.say_and_wait('で？ 何点賭けるつもりだ？');
      await daiya.say_and_wait(
        '……500点はいかがでしょう。これなら、カフェの得点に追いつきますわ。',
      );
      await sirius.say_and_wait(
        'ふっ、冷静だな。衝動で全得点を賭けたら、もっと面白かったんだがな。',
      );
      await festa.say_and_wait('じゃあ一発勝負だ。いくぜ──');
      await era.printAndWait('三人「じゃんけん、ぽん！！」');
      await daiya.say_and_wait('やりましたわ！！ 私の勝ちです！');
      await sirius.say_and_wait(
        'おっ？ 騙されなかったか。いいぞ、点は持っていけ！',
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「サトノダイヤモンド、1000点獲得！ 暫定1位のマンハッタンカフェと並んだ──！！ ──だが！！」`,
      );
      await coffee.say_and_wait('…………勝った。');
      await gs.say_and_wait(
        'ああああああくそっ────！！ 1位から点を奪う作戦、失敗だ！',
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「マンハッタンカフェ対ゴールドシップの挑戦状は、カフェの勝ち！！ ${daiya.sex}はゴールドシップの全得点を手にした！」`,
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「試合終了！！ 『非情神経衰弱』の勝者は──マンハッタンカフェ！」`,
      );
      await era.printAndWait('ダイヤのファンB「ダイヤ、惜しかったね！」');
      await era.printAndWait(
        'ダイヤのファンA「でも、ダイヤのいろんな表情が見られて、私は満足です！」',
      );
      await daiya.say_and_wait('ふふふ、お楽しみいただけて何よりですわ！');
      await era.printAndWait(
        'ファンと直接触れ合えたこの日は、サトノダイヤモンドにとっても、とても楽しいファン感謝祭になった。',
      );
      await daiya.say_and_wait('全得点を賭けますわ！！');
      await festa.say_and_wait('はは！ 全賭けはたまんねぇな！ 乗るぜ！！');
      await sirius.say_and_wait('アタシも異存なし！ 来い！！');
      await era.printAndWait('三人「じゃんけん、ぽん！！」');
      await daiya.say_and_wait('やりましたわ！！ 私の勝ちです！');
      await festa.say_and_wait('……心理戦で俺に勝つとは……大したお嬢さんだ。');
      await festa.say_and_wait('俺の点は、全部持っていけ。');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「サトノダイヤモンドがナカヤマフェスタとシリウスシンボリの得点を獲得！！ これで${daiya.sex}はカフェを抜き、1位に──！」`,
      );
      await gs.say_and_wait(
        'あーっはっはっはっは！！ 待ってました！ THE・漁夫の利！ ダイヤに挑戦状だ──！',
      );
      await gs.say_and_wait('さあさあ勝負だ──！！');
      await gs.say_and_wait('じゃんけん、ぽん！！');
      await daiya.say_and_wait('ふふふ、私の勝ちですわね♪');
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「おっと──サトノダイヤモンド、ゴールドシップの策を完全看破！！ 最後の刺客──ゴールドシップを撃破！」`,
      );
      await era.printAndWait(
        `実況担当の${daiya.uma_sex_title}「試合終了！！ 『非情神経衰弱』の勝者は──サトノダイヤモンド！」`,
      );
      await era.printAndWait('ダイヤのファンB「ダイヤ、優勝おめでとう！」');
      await era.printAndWait(
        'ダイヤのファンA「ダイヤに、こんな大胆な一面が……！」',
      );
      await daiya.say_and_wait(
        'えへへ♪ 皆さんが応援してくださったから、思い切れたのですわ！',
      );
      await era.printAndWait(
        'ダイヤのファンA「す……すごくかっこいいです～～！！ これからも応援させてください！」',
      );
      await daiya.say_and_wait(
        'こちらこそ、これからもよろしくお願いいたしますわ！ 引き続き、応援よろしくお願いしますね♪',
      );
      await era.printAndWait(
        'ファンと直接触れ合えたこの日は、サトノダイヤモンドにとっても、とても楽しいファン感謝祭になった。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '天皇賞（春）に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     */
    const f = async (daiya, teio, mcqueen) => {
      await era.printAndWait(
        '『天皇賞（春）は二強対決の構図！！』『キタサンブラックVSサトノダイヤモンド』',
      );
      await era.printAndWait(
        '『幼なじみが最強の座を争う！ 勝利の女神は、どちらに微笑むのか！？』',
      );
      await era.printAndWait(
        '──『天皇賞（春）』の関連報道は、どれも『二強対決』の見出しを掲げていた。',
      );
      await era.printAndWait(
        '観客A「二強対決、二人がまったくタイプ違いなのが面白いよな～」',
      );
      await era.printAndWait(
        '観客A「デビュー前から2億3000万分の1の令嬢と呼ばれ、評価も知名度も高いサトノダイヤモンドと──」',
      );
      await era.printAndWait(
        `観客C「最初は無名だったのに、努力と粘りに観客が共鳴して、徐々に頭角を現したキタサンブラック……」`,
      );
      await era.printAndWait(
        `観客A「しかも${daiya.couple_title}は幼なじみだろ。運命の対決って感じがする！」`,
      );
      await era.printAndWait(
        `観客C「でも今日はキタサンブラックのほうが有利だろうな。去年勝ったのも${daiya.sex}だし。」`,
      );
      await era.printAndWait(
        '眼鏡の男性「『天皇賞（春）』は3200メートル、G1最長距離だ。淀の坂は高低差も大きく、スタミナだけでなく位置取りも問われる。」',
      );
      await era.printAndWait('パーカーの男性「急にどうした？」');
      await era.printAndWait(
        `眼鏡の男性「キタサンブラックには去年の出走経験がある。それが${daiya.sex}の優位……以前も、似た会話をした気がするな。」`,
      );
      await era.printAndWait(
        'パーカーの男性「……ああ、あれだ！ 同じ『天皇賞（春）』、メジロマックイーン対トウカイテイオーのとき！」',
      );
      await era.printAndWait(
        '眼鏡の男性「なるほど……確かに、あのときと重なる……」',
      );
      await teio.say_and_wait(
        'はっ、みんなも今日のレース、ボクたち当時に似てるって思ってるんだね！',
      );
      await mcqueen.say_and_wait(
        '私とテイオーに憧れた二人が、私たちと同じ『天皇賞（春）』で対決する……',
      );
      await mcqueen.say_and_wait('不思議な縁ですわね。');
      await teio.say_and_wait(
        '二人とも、ボクたちのあの一戦は見てるはずだ。当時のボクたちより、いい走りをしてほしいね！',
      );
      await mcqueen.say_and_wait(
        'ええ、少なくとも当時の私たちに匹敵する走りを、ですわ。',
      );
      await daiya.say_and_wait(
        '二強対決……この熱の一端になれること、光栄ですわ。',
      );
      era.printButton('「ダイヤにとっては、そういう意味なのか」', 1);
      await era.input();
      await daiya.say_and_wait(
        `ええ、かつてのサトノ家にはできなかったことですもの。『出走者として、${daiya.uma_sex_title}界に貢献する』こと。`,
      );
      await daiya.say_and_wait(
        'デビュー前から取材してくださった記者の方々にも、感謝しなくてはなりませんわ。',
      );
      era.printButton('「いつも真摯に取材を受けてきたからだ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふふ♪ キタちゃんにも感謝しなくてはなりませんわね。',
      );
      await daiya.say_and_wait(
        'キタちゃんが、皆を笑わせようと走り続けてくださったから、今日これほど注目されているのですもの。',
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』のあるべき姿……やはり、キタちゃんと一緒に走らなければ見つからないと思いますわ。`,
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』になるためにも、勝たねばなりません。`,
      );
      await daiya.say_and_wait(
        'キタちゃんは去年『天皇賞（春）』を経験している分、有利に見えるかもしれません。だからこそ、この一戦に勝つ意味は大きいですわ。',
      );
      await daiya.say_and_wait(
        `このレースに勝ち、皆が実力を認める${daiya.uma_sex_title}になってみせますわ！`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = '二強';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     */
    const f = async (
      daiya,
      teio,
      mcqueen,
      kita,
      you,
      rank,
      takz_kin,
      kyot_dai,
      tenn_sho,
      japa_cup,
    ) => {
      await era.printAndWait(
        '実況「二つ目の坂を越えて、いま第3コーナー！ 苦しい、だがここからが勝負だ！」',
      );
      await daiya.say_and_wait('はあ、はあ、はあ、はあ！');
      await kita.say_and_wait('はあ、はあ、はあ、はあ────！');
      await era.printAndWait('観客A「ダイヤ、頑張れ────！」');
      await era.printAndWait('観客B「キタサン、行け────！！」');
      if (rank === 1) {
        await era.printAndWait(
          '実況「キタサンブラック、サトノダイヤモンド！ 二強対決の勝者は……サトノダイヤモンド──！」',
        );
      } else {
        await era.printAndWait(
          '実況「キタサンブラック、サトノダイヤモンド！ 二強対決の勝者は……キタサンブラック──！ キタサンブラック、連覇達成────！！」',
        );
      }
      await you.say_as_passer_by_and_wait(
        '観客',
        'わあああああああああああああ！',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        '……すごい……とんでもない走りだった……',
      );
      await you.say_as_passer_by_and_wait(
        '観客C',
        'うわ、鳥肌が……！ 背筋が震える……！',
      );
      await you.say_as_passer_by_and_wait(
        'パーカーの男性',
        'うう……二人とも……！ どちらも素晴らしかった……！！',
      );
      await teio.say_and_wait(
        `はっ……あはは！ ${daiya.couple_title}、どっちもすごいじゃん！`,
      );
      await teio.say_and_wait('……ねえ、マックイーン。');
      await mcqueen.say_and_wait('ええ、行きましょう。');
      if (rank === 1) {
        await kita.say_and_wait('はあ、はあ……へへへ、まだ心臓が速い……');
        await daiya.say_and_wait('私もですわ……はあ、はあ……');
        await kita.say_and_wait(
          '……うん、全力で負けたなら、認めるしかない！ 今日はアタシの完敗だ！',
        );
        await kita.say_and_wait('おめでとう、ダイヤ！');
        await daiya.say_and_wait(
          '勝てたのは、キタちゃんがいたからですわ！ キタちゃんが前で私を引き出してくださったから、限界を超えられました。',
        );
      } else {
        await daiya.say_and_wait('はあ、はあ……脚が、震えていますわ……');
        await kita.say_and_wait(
          'はあ、はあ……へへへ、アタシも……！ 本当に超────級に疲れた──！！',
        );
        await daiya.say_and_wait('……くやしい……全力を出し切ったのに……');
        await daiya.say_and_wait(
          '自分の限界を超えるほど頑張ったのに……それでも、勝てない……',
        );
        await kita.say_and_wait('ダイヤ……');
        await daiya.say_and_wait(
          '私の完敗ですわ……連覇、おめでとう、キタちゃん。',
        );
        await kita.say_and_wait('……ありがとう、ダイヤ。');
        await daiya.say_and_wait(
          'えへへ、でも……キタちゃんが前で私を引き出してくださったから、今日は限界を超えられましたわ……',
        );
      }
      await daiya.say_and_wait(
        'キタちゃんと一緒に走ると、もっと先へ行ける気がしますわ！',
      );
      await kita.say_and_wait(
        'それはアタシも同じ！ このまま一緒に頂点へ行こう！',
      );
      await teio.say_and_wait('ふふふ、頂点ねえ～！ 軽く言うね！');
      await teio.say_and_wait(
        '頂点で待つ相手が誰か、わかってる？ キタちゃん！',
      );
      await kita.say_and_wait('えっ、テイオー！？');
      await daiya.say_and_wait('マックイーンも！');
      await teio.say_and_wait(
        '君の言う頂点は、ボクの領域だよ！ ボクの庭に立ちたければ、まず帝王様に勝たないとね～！',
      );
      await mcqueen.say_and_wait('テイオー、からかいが過ぎますわ。');
      await daiya.say_and_wait('えっ……？');
      await teio.say_and_wait(
        '宣戦布告だ！！ ボクとマックイーンは秋のレースに出る！',
      );
      await teio.say_and_wait(
        '頂点に行きたいんだろ！ じゃあ、ボクたちに挑んでみな！',
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「えええええ～～！？」',
      ]);
      await daiya.say_and_wait(
        'ほ、本当に出走なさるのですか！？ そんな話、聞いておりません……急すぎますわ……',
      );
      await mcqueen.say_and_wait('ええ、当初の予定にはありませんでしたわ。');
      await mcqueen.say_and_wait(
        'ですが、ダイヤとキタサンのレースを見て、考えが変わりました。',
      );
      await mcqueen.say_and_wait('お二人と、一度走ってみたくなったのです。');
      await mcqueen.say_and_wait(
        'お二人の走りが、私たちの闘志を掻き立てましたわ。',
      );
      await daiya.say_and_wait('……！');
      await mcqueen.say_and_wait(
        '──いかがです？ 私たちの挑戦、受けていただけますか？',
      );
      await daiya.say_and_wait(
        'っ！ 光栄ですわ！！ どうか、その機会をくださいまし！',
      );
      await kita.say_and_wait('アタシも！ よろしくお願いします！！');
      await teio.say_and_wait('それでこそだね！');
      await teio.say_and_wait('ボクは『ジャパンカップ』に出る！');
      await mcqueen.say_and_wait(
        'では私は、『天皇賞（秋）』でお待ちしておりますわ。',
      );

      await teio.say_and_wait(
        '楽しみだなあ～！ 久しぶりにトゥインクル・シリーズを走れる！',
      );
      await mcqueen.say_and_wait('それでは、私はこれで。');
      await kita.say_and_wait('ダイヤ……！ 夢、じゃないよな……？');
      await daiya.say_and_wait(
        'ええ！ でも……二人同時に夢を見ている可能性も、なくはありませんわ……',
      );
      era.printButton('「俺も全部聞いていた。夢じゃないぞ」', 1);
      await era.input();
      await kita.say_and_wait(
        'うわあああ！！ 本当に夢じゃなかった！ テイオーと走れるんだ！！',
      );
      await daiya.say_and_wait(
        'マックイーンと、トゥインクル・シリーズの舞台で……！',
      );
      await daiya.say_and_wait('嬉しい……こんな日が来るなんて……');
      await era.printAndWait(
        'サトノダイヤモンドは感動で目を潤ませた。キタサンブラックも同じだった。',
      );
      await era.printAndWait(
        `${daiya.couple_title}はそれぞれ、メジロマックイーンとトウカイテイオーに憧れてトレセンへ入ったのだ。反応が大きいのも当然だろう。`,
      );
      await kita.say_and_wait([
        tenn_sho,
        ' も ',
        japa_cup,
        ' も、アタシは出る！',
      ]);
      await kita.say_and_wait(
        'もともと『秋のシニア三冠』の目標レースだもん。ダイヤは？',
      );
      await daiya.say_and_wait([
        '私は ',
        tenn_sho,
        ' に出たいですわ！ マックイーンに挑みたい！！',
      ]);
      era.printButton('「『天皇賞（秋）』か……」', 1);
      await era.input();
      await era.printAndWait(
        `そうなると、先に夏合宿がある。${daiya.sex}はもともと酷暑のトレーニングが得意ではない……`,
      );
      await era.printAndWait(
        `夏が明けていきなり正面対決は、${you.name} としても不安だ。『天皇賞（秋）』の前に、別のレースで状態を見ておきたい。`,
      );
      era.printButton('「その前に『京都大賞典』へ出よう」', 1);
      await era.input();
      await daiya.say_and_wait([
        'つまり ',
        kyot_dai,
        ' で状態を見て、必要なら調整する、ということですわね。異論はございません。',
      ]);
      await kita.say_and_wait([
        'アタシは、ファン投票で出走できる ',
        takz_kin,
        ' に出てから、',
        tenn_sho,
        ' に出る！',
      ]);
      await kita.say_and_wait([
        'マックイーンに勝つために、',
        tenn_sho,
        ' へ向けてしっかり頑張ろう！',
      ]);
      await daiya.say_and_wait('ふう…………いまも、夢の中のような気がしますわ……');
      era.printButton('「そのうち、現実味が増してくるさ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ……ですから、喜んでいるばかりではいけませんわ。せっかくマックイーンと走れるのですもの。',
      );
      await daiya.say_and_wait(
        `マックイーンもテイオーも、すでに『一流の${daiya.uma_sex_title}』として各方面で活躍されていますわ。`,
      );
      await daiya.say_and_wait(
        `${teio.couple_title}のお二方から、『一流の${daiya.uma_sex_title}』の姿を学ばせていただきます。`,
      );
      await daiya.say_and_wait(
        `とりわけマックイーンは、メジロ家の責任を背負っていらっしゃる。私と近い立場に感じますわ。`,
      );
      await daiya.say_and_wait(
        `サトノ家の代表として、私はどんな『一流の${daiya.uma_sex_title}』になるべきか──`,
      );
      era.printButton('「悩みはいつでも聞いてやる」', 1);
      await era.input();
      await era.printAndWait(
        `『G1を勝てる一流の${daiya.uma_sex_title}になる』。${you.name} は${daiya.sex}とその夢を、一緒に叶えると約束した。`,
      );
      await era.printAndWait(
        `${daiya.sex}のトレーナーとして、${daiya.sex}の将来に役立つことなら、${you.name} はできる限り力になるつもりだ。`,
      );
      await daiya.say_and_wait('えへへ、そのときは頼らせていただきますわ♪');
      await daiya.say_and_wait('……もし、マックイーンに勝てたら──');
      await era.printAndWait(
        `『一流の${daiya.uma_sex_title}』メジロマックイーンに勝つことは、実質的に『一流の${daiya.uma_sex_title}』の実力に達した証明になる。`,
      );
      await era.printAndWait(
        `サトノ家の宿願も、遠くはない──${you.name} は、言い淀んだ言葉の続きを察し、改めて自分の責任を意識した。`,
      );
      await era.printAndWait([
        'まずは ',
        kyot_dai,
        '。前哨戦で、取りこぼすわけにはいかない。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '影';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await daiya.say_and_wait('……キタちゃん……');
      await kita.say_and_wait('………………っ。');
      await era.printAndWait(
        '観客A「おい、キタサンどうしたんだ……今日は調子が悪いのか……？」',
      );
      await era.printAndWait(
        '観客B「最後、いつもの粘りがなかったな。キタサンなら、もっとやれなきゃ……」',
      );
      await era.printAndWait(
        '観客C「しょげてる場合じゃないぞ！ いつもの気迫はどこだ、キタサン！！」',
      );

      await kita.say_and_wait('…………っ！');
      await daiya.say_and_wait('キタちゃん！！');
      await era.printAndWait(
        '今日のキタサンブラックには、いつもの切れがなかった。力を出し切れなかった理由は──',
      );
      await daiya.say_and_wait('はあ、はあ…………キタちゃん。');
      await kita.say_and_wait('か、観客の声……もう、聞いていられない……');
      await kita.say_and_wait('自分の走りがダメだったのは、わかってる……');
      await kita.say_and_wait('……っ……でも…………');
      await kita.say_and_wait('アタシが、がっかりさせたんだ────！！');
      await kita.say_and_wait('うわあああああああああああああ！');
      await daiya.say_and_wait('……キタちゃん……');
      await daiya.say_and_wait(
        '……キタちゃん、今日は万全の状態で走れたわけではなかったでしょう……？',
      );
      await kita.say_and_wait(
        'うん……うっ……今日、なんでだろう……変で……身体が重くて……',
      );
      await kita.say_and_wait(
        'ペースを上げなきゃってわかってるのに……うっ、脚が……どんどん出なくなって……！',
      );
      await kita.say_and_wait('……こんなに頑張ったのに……');
      await kita.say_and_wait(
        '……『宝塚記念』……うっ……ファン投票1位をもらえて……本当に嬉しかった……！',
      );
      await kita.say_and_wait(
        '期待に応えなきゃって……だから本当に、本当に頑張ったのに！！',
      );
      await kita.say_and_wait('なんで、こうなるの！？');
      await daiya.say_and_wait(
        'たぶん……身体に疲れが残っていたのでは？ 私も『天皇賞（春）』のあと、疲れが残っていましたわ。',
      );
      await era.printAndWait(
        `『天皇賞（春）』の激戦で、キタサンブラックの身体にも疲労が溜まっていた。${kita.sex}本人は、気づいていなかった。`,
      );
      await era.printAndWait(
        `${kita.sex}は期待に応えたい一心で疲れを感じず、だが疲れは消えず、${kita.sex}の身体に静かに積み重なっていた。`,
      );
      await daiya.say_and_wait(
        '頑張りすぎてしまったのですわ……キタちゃんらしいですわね。',
      );
      await kita.say_and_wait('……疲れてた……？ そんな……でも……');
      await kita.say_and_wait(
        '自分の疲れに気づけなかった……それで、みんなの期待を裏切った……',
      );
      await kita.say_and_wait('くやしい……本当にくやしい……！');
      await daiya.say_and_wait(
        '──大丈夫ですわ。キタちゃんが頑張りすぎてしまったこと、ファンの方々はわかってくださいます。',
      );
      await daiya.say_and_wait(
        'だって皆さんは、頑張るキタちゃんを見守り、キタちゃんから力をもらってきた方々ですもの。',
      );
      await kita.say_and_wait(
        '……でも、わざわざ票を入れてくれたのに、こんな結果……がっかりされてるよ……',
      );
      await daiya.say_and_wait(
        '……期待に応えられなかったら、もう応援してもらえない、と……？',
      );
      await kita.say_and_wait(
        'うん……だって、目立たなかったアタシが注目されるようになったのは、勝ち続けたからだし……',
      );
      await kita.say_and_wait('勝ち続けたから、応援してくれる人が増えたんだ！');
      await kita.say_and_wait(
        `勝てなかったら、アタシは注目されない普通の${daiya.uma_sex_title}で……`,
      );
      await kita.say_and_wait(
        'ダイヤみたいな凄い末脚もない。武器もなくて、努力しか知らない、平凡な……',
      );
      await daiya.say_and_wait('それが、キタちゃんの素晴らしいところですわ。');
      await kita.say_and_wait('えっ……？');
      await daiya.say_and_wait(
        '揺るがず努力できること。皆さんが応援したくなるのは、その姿を見たからですわ。',
      );
      await daiya.say_and_wait(
        'キタちゃんがここまでずっと頑張ってきた姿を見て、深い想いを抱くようになったのですわ。',
      );
      await era.printAndWait(
        `観戦帰りの男性客A「キタサンブラックが毎回全力で走るから、つい応援したくなるんだ。本当に、揺るがないんだよ。」`,
      );
      await era.printAndWait(
        `観戦帰りの男性客B「わかるわかる！ ${kita.sex}って特別キラキラしてるわけじゃなくて、普通で、こっちに近い感じなんだよ。」`,
      );
      await era.printAndWait(
        `観戦帰りの男性客B「だから余計に勝ってほしい！ 自分が成し遂げたみたいな気分になるんだよな！」`,
      );
      await daiya.say_and_wait(
        '観客の方々は、キタちゃんが勝つと自分のことのように喜ぶと仰っていましたわ。',
      );
      await daiya.say_and_wait(
        '『キタサンが頑張ってるから、自分も頑張れる』……キタちゃんは私と違って、そうやって応援されているのですわ。',
      );
      await daiya.say_and_wait(
        'ときどき、そんなキタちゃんが少し羨ましくもありますの。',
      );
      await kita.say_and_wait('あ……');
      await era.printAndWait(
        '観客A「つまり『春のシニア三冠』だな！ 絶対取れよ、キタサン！！」',
      );
      await era.printAndWait('観客A「キタサン──！ 去年の雪辱を果たせ！！」');
      await daiya.say_and_wait(
        '観客が自分のことのように応援してくださる。それは本当にすごいことですわ。',
      );
      await daiya.say_and_wait(
        'ファンの方々は、強いから好きなのではなく、キタちゃんそのものを愛していらっしゃる。',
      );
      await daiya.say_and_wait('ですから、大丈夫ですわ。');
      await kita.say_and_wait('ダイヤ……');
      await daiya.say_and_wait(
        '今日は本当にがっかりさせたかもしれません。でもファンの方々は、まだキタちゃんに『期待』していますわ。',
      );
      await kita.say_and_wait('……期待……');
      await daiya.say_and_wait('私も、期待していますわ。');
      await kita.say_and_wait('…………');
      await daiya.say_and_wait('……キタちゃんなら、できると信じていますから。');
      era.drawLine();
      await era.printAndWait(
        '控え室を出ると、サトノダイヤモンドは何かを考えているようだった。',
      );
      await daiya.say_and_wait(
        '……トレーナーは、どんな私を見たいとお思いですの？',
      );
      era.printButton('「ん……？ どういう意味だ？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は意味がわからず、${daiya.sex}に聞き返した。`,
      );
      await daiya.say_and_wait(
        'さっきから考えておりましたの。皆さんがキタちゃんに自分を重ねて応援するなら、私を応援してくださる方は、何を見ていらっしゃるのでしょう？',
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』としての貢献……キタちゃん${kita.sex}は、すでに笑顔を届けるという貢献を果たしていますわ。`,
      );
      await daiya.say_and_wait(
        '私は、何をすべきかさえ、まだ思いついておらず……',
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}界の発展のために、私がすべきこと……`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}として、私の走りが皆さんに届けられるものは何なのか……`,
      );
      await era.printAndWait(
        `皆がサトノダイヤモンドに求めるもの。${daiya.sex}の走りがファンにどんな夢を見せるか。`,
      );
      await era.printAndWait(
        `『一流の${daiya.uma_sex_title}』はそれぞれ、違う夢を届けられる。`,
      );
      era.printButton('「俺は、君から『可能性』を感じる」', 1);
      await era.input();
      await daiya.say_and_wait('可能性……');
      await era.printAndWait(
        `揺るがない意志を秘めた${daiya.sex}には、不可能さえ覆しそうな力が宿っている。`,
      );
      await era.printAndWait(
        `サトノ家を長年縛ってきた呪いを克服した${daiya.sex}なら、何だってできるかもしれない──そう感じさせる。`,
      );
      await daiya.say_and_wait('なるほど……ありがとうございます。');
      await daiya.say_and_wait('……もう少し、自分で考えてみますわ……');
      await era.printAndWait(
        `サトノダイヤモンドは再び沈思した。${daiya.sex}の思考を妨げぬよう、二人は黙って駅へ向かった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '宝塚記念に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await daiya.say_and_wait('……はあ、はあ……');
      era.printButton('「どこか痛いところ、重いところはないか？」', 1);
      await era.input();
      await daiya.say_and_wait('……ええ、大丈夫ですわ。');
      await daiya.say_and_wait(
        '身体は軽いですし、動きが鈍い感じもありませんわ。',
      );
      era.printButton('「無理はするなよ」', 1);
      await era.input();
      await daiya.say_and_wait('無理は怪我のもと、ですわね？');
      await daiya.say_and_wait(
        '『天皇賞（春）』のあとの疲れは、本当に顕著でしたわ。私自身、身をもって知りました。',
      );
      await era.printAndWait(
        '『天皇賞（春）』の激戦の影響で、サトノダイヤモンドの疲労はしばらく続いていた。',
      );
      await era.printAndWait(
        'そのため調教の強度を落とし、回復を優先したが、身体が鈍った様子はない。',
      );
      await daiya.say_and_wait(
        '投票してくださった皆さんに、予定どおりレースをお見せできるのは、何よりですわ。',
      );
      await daiya.say_and_wait('『宝塚記念』、参りますわ。');
      await daiya.say_and_wait(
        'キタちゃん、今日もよろしくお願いいたしますわ。',
      );
      await daiya.say_and_wait('……キタちゃん？');
      await kita.say_and_wait(
        'えっ？ あ、ダイヤ！ ごめんごめん、今呼ばれたのに気づかなくて。',
      );
      await daiya.say_and_wait('今、よろしくと申しましたの……');
      await kita.say_and_wait('うん！ 負けないから！！');
      await daiya.say_and_wait('…………？');
      await daiya.say_and_wait(
        '……キタちゃんは『大阪杯』と『天皇賞（春）』のとき、もっと……',
        true,
      );
      await daiya.say_and_wait('気のせいだと、いいのですけれど……', true);
    };
    f.title = title;
    return f;
  })(),
  we_95_24: (() => {
    const title = 'それは唯一の輝き';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     */
    const f = async (daiya, kita, you, tenn_spr, takz_kin) => {
      await era.printAndWait([
        `${you.name} はサトノダイヤモンドと一緒に、キタサンブラックが出走する `,
        takz_kin,
        ' を観戦しに来ていた。',
      ]);
      await daiya.say_and_wait([
        '予定どおり ',
        takz_kin,
        ' に出られるなんて、キタちゃんは本当にタフですわね。',
      ]);
      await era.printAndWait([
        '実は今回の ',
        takz_kin,
        '、ファン投票でサトノダイヤモンドにも出走資格があった。',
      ]);
      await era.printAndWait([
        'ただ ',
        tenn_spr,
        ` の激戦の影響で疲労が大きく、安全を見て今回は見送りにしたのだ。`,
      ]);
      await era.printAndWait(
        `同じレースを走り終えたばかりのキタサンブラックが、なお出走できるのは本当にタフだ。──そう思っていたのだが……`,
      );
      await era.printAndWait(
        '実況「苦しい！ キタサンブラック！ 前へ出られない、出られない！ いつもの脚が使えない！！」',
      );
      await era.printAndWait(
        '実況「──キタサンブラック、敗れた！！ キタサンブラックは後方の集団に沈んだ！」',
      );
      await daiya.say_and_wait('……キタちゃん……');
      await kita.say_and_wait('………………っ。');
      await era.printAndWait(
        '観客A「おい、キタサンどうしたんだ……今日は調子が悪いのか……？」',
      );
      await era.printAndWait(
        '観客B「なんで『宝塚記念』で負けるんだよ。負ける理由なんて、なかったのに……」',
      );
      await era.printAndWait(
        `観客C「これがキタサンの本当の実力じゃない！！ ${kita.sex}は次、絶対勝つ！ だよな？ キタサン！」`,
      );

      await kita.say_and_wait('…………っ！');
      await daiya.say_and_wait('キタちゃん！！');
      await era.printAndWait(
        '今日のキタサンブラックには、いつもの切れがなかった。力を出し切れなかった理由は──',
      );
      await daiya.say_and_wait('はあ、はあ…………キタちゃん。');
      await kita.say_and_wait('か、観客の声……もう、聞いていられない……');
      await kita.say_and_wait('自分の走りがダメだったのは、わかってる……');
      await kita.say_and_wait('……っ……でも…………');
      await kita.say_and_wait('アタシが、がっかりさせたんだ────！！');
      await kita.say_and_wait('うわあああああああああああああ！');
      await daiya.say_and_wait('……キタちゃん……');
      await daiya.say_and_wait(
        '……キタちゃん、今日は万全の状態で走れたわけではなかったでしょう……？',
      );
      await kita.say_and_wait(
        'うん……うっ……今日、なんでだろう……変で……身体が重くて……',
      );
      await kita.say_and_wait(
        'ペースを上げなきゃってわかってるのに……うっ、脚が……どんどん出なくなって……！',
      );
      await kita.say_and_wait('……こんなに頑張ったのに……');
      await kita.say_and_wait(
        '……『宝塚記念』……うっ……ファン投票1位をもらえて……本当に嬉しかった……！',
      );
      await kita.say_and_wait(
        '期待に応えなきゃって……だから本当に、本当に頑張ったのに！！',
      );
      await kita.say_and_wait('なんで、こうなるの！？');
      await daiya.say_and_wait(
        'たぶん……身体に疲れが残っていたのでは？ 私も『天皇賞（春）』のあと、疲れが残っていましたわ。',
      );
      await era.printAndWait(
        `『天皇賞（春）』の激戦で、キタサンブラックの身体にも疲労が溜まっていた。${kita.sex}本人は、気づいていなかった。`,
      );
      await era.printAndWait(
        `${kita.sex}は期待に応えたい一心で疲れを感じず、だが疲れは消えず、${kita.sex}の身体に静かに積み重なっていた。`,
      );
      await daiya.say_and_wait(
        '頑張りすぎてしまったのですわ……キタちゃんらしいですわね。',
      );
      await kita.say_and_wait('……疲れてた……？ そんな……でも……');
      await kita.say_and_wait(
        '自分の疲れに気づけなかった……それで、みんなの期待を裏切った……',
      );
      await kita.say_and_wait('くやしい……本当にくやしい……！');
      await daiya.say_and_wait(
        '──大丈夫ですわ。キタちゃんが頑張りすぎてしまったこと、ファンの方々はわかってくださいます。',
      );
      await daiya.say_and_wait(
        'だって皆さんは、頑張るキタちゃんを見守り、キタちゃんから力をもらってきた方々ですもの。',
      );
      await kita.say_and_wait(
        '……でも、わざわざ票を入れてくれたのに、こんな結果……がっかりされてるよ……',
      );
      await daiya.say_and_wait(
        '……期待に応えられなかったら、もう応援してもらえない、と……？',
      );
      await kita.say_and_wait(
        'うん……だって、目立たなかったアタシが注目されるようになったのは、勝ち続けたからだし……',
      );
      await kita.say_and_wait('勝ち続けたから、応援してくれる人が増えたんだ！');
      await kita.say_and_wait(
        `勝てなかったら、アタシは注目されない普通の${daiya.uma_sex_title}で……`,
      );
      await kita.say_and_wait(
        'ダイヤみたいな凄い末脚もない。武器もなくて、努力しか知らない、平凡な……',
      );
      await daiya.say_and_wait('それが、キタちゃんの素晴らしいところですわ。');
      await kita.say_and_wait('えっ……？');
      await daiya.say_and_wait(
        '揺るがず努力できること。皆さんが応援したくなるのは、その姿を見たからですわ。',
      );
      await daiya.say_and_wait(
        'キタちゃんがここまでずっと頑張ってきた姿を見て、深い想いを抱くようになったのですわ。',
      );
      await era.printAndWait(
        `観戦帰りの男性客A「キタサンブラックが毎回全力で走るから、つい応援したくなるんだ。本当に、揺るがないんだよ。」`,
      );
      await era.printAndWait(
        `観戦帰りの男性客B「わかるわかる！ ${kita.sex}って特別キラキラしてるわけじゃなくて、普通で、こっちに近い感じなんだよ。」`,
      );
      await era.printAndWait(
        `観戦帰りの男性客B「だから余計に勝ってほしい！ 自分が成し遂げたみたいな気分になるんだよな！」`,
      );
      await daiya.say_and_wait(
        '観客の方々は、キタちゃんが勝つと自分のことのように喜ぶと仰っていましたわ。',
      );
      await daiya.say_and_wait(
        '『キタサンが頑張ってるから、自分も頑張れる』……キタちゃんは私と違って、そうやって応援されているのですわ。',
      );
      await daiya.say_and_wait(
        'ときどき、そんなキタちゃんが少し羨ましくもありますの。',
      );
      await kita.say_and_wait('あ……');
      await era.printAndWait(
        '観客A「つまり『春のシニア三冠』だな！ 絶対取れよ、キタサン！！」',
      );
      await era.printAndWait('観客A「キタサン──！ 去年の雪辱を果たせ！！」');
      await daiya.say_and_wait(
        '観客が自分のことのように応援してくださる。それは本当にすごいことですわ。',
      );
      await daiya.say_and_wait(
        'ファンの方々は、強いから好きなのではなく、キタちゃんそのものを愛していらっしゃる。',
      );
      await daiya.say_and_wait('ですから、大丈夫ですわ。');
      await kita.say_and_wait('ダイヤ……');
      await daiya.say_and_wait(
        '今日は本当にがっかりさせたかもしれません。でもファンの方々は、まだキタちゃんに『期待』していますわ。',
      );
      await kita.say_and_wait('……期待……');
      await daiya.say_and_wait('私も、期待していますわ。');
      await kita.say_and_wait('…………');
      await daiya.say_and_wait('……キタちゃんなら、できると信じていますから。');
      era.drawLine();
      await era.printAndWait(
        `地下道を出ると、サトノダイヤモンドは何かを考えているようだった。`,
      );
      await daiya.say_and_wait(
        '……トレーナーは、どんな私を見たいとお思いですの？',
      );
      era.printButton('「ん……？ どういう意味だ？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は意味がわからず、${daiya.sex}に聞き返した。`,
      );
      await daiya.say_and_wait(
        'さっきから考えておりましたの。皆さんがキタちゃんに自分を重ねて応援するなら、私を応援してくださる方は、何を見ていらっしゃるのでしょう？',
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』としての貢献……キタちゃん${kita.sex}は、すでに笑顔を届けるという貢献を果たしていますわ。`,
      );
      await daiya.say_and_wait(
        '私は、何をすべきかさえ、まだ思いついておらず……',
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}界の発展のために、私がすべきこと……`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}として、私の走りが皆さんに届けられるものは何なのか……`,
      );
      await era.printAndWait(
        `皆がサトノダイヤモンドに求めるもの。${daiya.sex}の走りがファンにどんな夢を見せるか。`,
      );
      await era.printAndWait(
        `『一流の${daiya.uma_sex_title}』はそれぞれ、違う夢を届けられる。`,
      );
      era.printButton('「俺は、君から『可能性』を感じる」', 1);
      await era.input();
      await daiya.say_and_wait('可能性……');
      await era.printAndWait(
        `揺るがない意志を秘めた${daiya.sex}には、不可能さえ覆しそうな力が宿っている。`,
      );
      await era.printAndWait(
        `サトノ家を長年縛ってきた呪いを克服した${daiya.sex}なら、何だってできるかもしれない──そう感じさせる。`,
      );
      await daiya.say_and_wait('なるほど……ありがとうございます。');
      await daiya.say_and_wait('……もう少し、自分で考えてみますわ……');
      await era.printAndWait(
        `サトノダイヤモンドは再び沈思した。${daiya.sex}の思考を妨げぬよう、二人は黙って駅へ向かった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（シニア級）開始！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (
      daiya,
      kita,
      you,
      tenn_spr,
      takz_kin,
      japa_cup,
      arim_kin,
    ) => {
      await era.printAndWait('毎年恒例の夏合宿が、今年も始まった！');
      await kita.say_and_wait('ダイヤ、ちょっといい？');
      await daiya.say_and_wait('どうかなさいましたの？');
      await kita.say_and_wait([
        'あのさ……',
        takz_kin,
        ' のとき、ダイヤが言ってくれたこと。',
      ]);
      await kita.say_and_wait('みんなアタシに『期待』してる、って……');
      await daiya.say_and_wait('ええ。');
      await kita.say_and_wait(
        'アタシなりに考えたんだ。みんなの『期待』って何だろうって。',
      );
      await kita.say_and_wait('それで……決めた！！');
      await kita.say_and_wait(
        'アタシが頑張る姿が皆の力になるなら、諦めない姿を見せ続ける！',
      );
      await kita.say_and_wait(
        '谷底から逆転する姿を、みんなは期待してるんだと思う！',
      );
      await kita.say_and_wait(
        '意志の力で絶対諦めない、最後まで食い下がる。それがアタシの走りだ！',
      );
      await daiya.say_and_wait('ふふふ！ それこそがキタちゃんですわ！');
      await kita.say_and_wait([
        'だから目標は、',
        tenn_spr,
        '、',
        japa_cup,
        '、',
        arim_kin,
        '、全部勝つこと！',
      ]);
      await kita.say_and_wait('つまり、テイオーにもマックイーンにも勝つ！！');
      await kita.say_and_wait(
        'ずっと憧れてきた相手だから、強さも、勝つのがどれだけ難しいかもわかってる……',
      );
      await kita.say_and_wait('だからこそ、勝ちたい！！ 憧れを超えたいんだ！');
      await kita.say_and_wait([
        takz_kin,
        ' でがっかりさせた分、憧れを超える姿を見せたい！',
      ]);
      await daiya.say_and_wait('……私も同じですわ。憧れを超えたい。');
      await daiya.say_and_wait('勝者の座は、キタちゃんには譲りませんわ！');
      await kita.say_and_wait('うん！！ お互い頑張ろう！ じゃあ、またあとで！');
      await daiya.say_and_wait('えへへ、よかった……！');
      await daiya.say_and_wait(
        'あ、そうでした。トレーナー、お願いしたいことがありまして……',
      );
      await daiya.say_and_wait(
        '今後の調教方針についてですわ。どんな状況にも対応できるよう、パワーを伸ばしたいのです。',
      );
      await daiya.say_and_wait(
        '先日、研究のためにマックイーンのレース映像を拝見しまして……',
      );
      await daiya.say_and_wait(
        '悪い馬場でも動じない強い脚力。力強い踏み込みが、とても印象的でしたわ。',
      );
      await daiya.say_and_wait(
        '私にもああいう脚力があれば……集団から前へ出やすくなり、今後のレースにも効くと思いますわ。',
      );
      await daiya.say_and_wait(
        '……いいえ──今足りない部分を補うことは、マックイーンたちに勝つために必要なことですわ。',
      );
      era.printButton('「なるほど」', 1);
      await era.input();
      await daiya.say_and_wait(
        'マックイーンたちがくださった貴重な機会ですもの。万全の状態で臨み、勝ちたいのです……！',
      );
      await daiya.say_and_wait(
        `それに、私が『一流の${daiya.uma_sex_title}』であるなら、いずれ海外遠征も考えねばなりませんわ。`,
      );
      await era.printAndWait(
        `${you.name} は新年会で、海外遠征の話が出たのを思い出した。`,
      );
      await era.printAndWait(
        'より厳しい海外の舞台で結果を出すには、確かに十分なパワーが要る。',
      );
      era.printButton('「急に海外を目標に据えたのは、なぜだ？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '決めたわけではございません。ただ……以前、私の走りが皆さんに何を届けられるか、ご相談しましたわよね？',
      );
      await daiya.say_and_wait(
        'あのときトレーナーが下さった答えが『可能性』で、そこから海外遠征を思い至りましたの。',
      );
      await daiya.say_and_wait(
        `日本の${daiya.uma_sex_title}界が、長く破れなかったフランスの伝統的な大レース──`,
      );
      await daiya.say_and_wait(
        'サトノ家の呪いを破った私なら、新しい歴史を作る可能性を見せられるかもしれませんわ。',
      );
      await daiya.say_and_wait(
        'でしたら、今から海外遠征も将来の目標に入れておくべきかもしれません。',
      );
      era.printButton('「わかった」', 1);
      await era.input();
      await era.printAndWait(
        `パワーを鍛えれば、${daiya.sex}の言うとおり対応力は上がる。${you.name} に拒む理由はなかった。`,
      );
      await daiya.say_and_wait(
        '申し訳ありません、ご負担が増えてしまいますわね。よろしくお願いします。',
      );
      await daiya.say_and_wait('力のある新しい走り……必ず身につけますわ！');
      await daiya.say_and_wait(
        'でなければ、マックイーンに顔向けできませんわ！',
      );
      await era.printAndWait(
        '憧れに挑み、将来の方向も定まったサトノダイヤモンドは、やる気に満ちていた。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, dictus, kita) => {
      await daiya.say_and_wait('はあ、はあ、はあ……！');
      await daiya.say_and_wait(
        'こ……脚への負担が相当ですわ……でも、踏み込みは確かにしっかりしてきました。',
      );
      await daiya.say_and_wait('この走り、必ずものにしますわ……！');
      await daiya.say_and_wait('もう一周……！');
      await daiya.say_and_wait('はあああああああ！！');
      await dictus.say_and_wait(
        `……トレーナー。おせっかいかもしれませんが、${daiya.sex}は大丈夫なのでしょうか……？`,
      );
      await dictus.say_and_wait(
        '力みすぎ、というか、力任せに見えます。もうダイヤらしい走りではありません。',
      );
      era.printButton('「ああ……」', 1);
      await era.input();
      await era.printAndWait(
        'メジロマックイーンとの『天皇賞（秋）』と、将来の海外も見据え、踏み込みを強くする調教を始めていた。',
      );
      await era.printAndWait(
        'だが、想定外のことが起きた。サトノダイヤモンドの走りが乱れ始めている。',
      );
      await era.printAndWait('力の入れ方が偏った走りになってしまっていた。');
      await dictus.say_and_wait(
        '砂浜を走っているせいもあるのでしょう。一時的であることを願います。',
      );
      await era.printAndWait(
        'イクノディクタスの言うとおりであってほしい……とりあえず、しばらく様子を見よう。',
      );
      await era.printAndWait('気づくと、夏合宿は最終日を迎えていた。');
      await daiya.say_and_wait('キタちゃん、帰りのバス、ご一緒しましょう♪');
      await kita.say_and_wait('荷物はもう置いてあるよ！ 行こう！');
      await kita.say_and_wait('……ん？ ダイヤ？');
      await daiya.say_and_wait('……ふう…………ふう…………');
      await kita.say_and_wait('寝ちゃった……');
      await daiya.say_and_wait('んっ……もっと力強く走らなきゃ……');
      await kita.say_and_wait('ふふ、合宿中のダイヤ、本当に頑張ってた。');
      await kita.say_and_wait('……おやすみ、ダイヤ。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_33: (() => {
    const title = '遠き先、追い続けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     */
    const f = async (daiya, kita, you, takz_kin, kyot_dai, tenn_sho) => {
      await daiya.say_and_wait('…………はっ！');
      await era.printAndWait(
        '芝の調教コースに戻っても、サトノダイヤモンドの走りはまだおかしい。',
      );
      await era.printAndWait(
        'それどころか、完全に崩れていると言っていい。タイムも大きく落ちていた。',
      );
      await daiya.say_and_wait('………………トレーナー。');
      await daiya.say_and_wait([
        'このままでは、',
        tenn_sho,
        ' までに間に合うのでしょうか……？',
      ]);
      era.printButton('「今から整えれば、ぎりぎり間に合うかもしれない」', 1);
      await era.input();
      await era.printAndWait([
        '前哨戦の ',
        kyot_dai,
        ' は100%で臨まなくてもよいが、',
        tenn_sho,
        ' まで、もう時間がない。',
      ]);
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait('……まずは、走りを戻しますわ。');
      await daiya.say_and_wait(
        'こんな状態で、マックイーンとの一戦に臨むわけにはいきませんもの……！',
      );
      era.printButton('「ああ、『天皇賞（秋）』までに整えるぞ！」', 1);
      await era.input();
      await era.printAndWait(
        `${daiya.sex}にとっても苦しい決断だろう。その想いに応えるためにも、${you.name} は${daiya.sex}を万全で『天皇賞（秋）』へ送り出す！`,
      );
      await daiya.say_and_wait('はあ、はあ…………どうして……？');
      await daiya.say_and_wait(
        '以前は、もっとピッチを速くできたのに……だから……',
      );
      await daiya.say_and_wait('っ……！');
      await era.printAndWait(
        `だが、${daiya.sex}は元の走りを取り戻せないままだった。`,
      );
      await era.printAndWait(
        `${daiya.sex}は元の走りに戻そうと焦るあまり、バランスがさらに乱れ、それがまた焦りと意識の偏りを生む。`,
      );
      await era.printAndWait(
        'この悪循環を、どう断つか。──もしサトノダイヤモンドが本当に元の走りを忘れたのなら、いっそ……',
      );
      era.drawLine();
      await kita.say_and_wait('お邪魔します。トレーナー、相談って何？');
      era.printButton('「実は、ダイヤの走りのことで……」', 1);
      await era.input();
      await kita.say_and_wait(
        'あー、だいたいわかる。最近のダイヤの走り、確かにおかしいよね。',
      );
      await era.printAndWait(
        `${you.name} は説明した。サトノダイヤモンドは元の走りを取り戻そうとしているが、うまくいかず、行き詰っている、と。`,
      );
      await kita.say_and_wait('うんうん……だったら、アタシと一回走ってみない？');
      await kita.say_and_wait(
        '解決法はわからないけど、実際に走ったら何か掴めるかも！',
      );
      era.drawLine();
      await daiya.say_and_wait('キタちゃんと一緒に走る、ですの？');
      await kita.say_and_wait([
        'うん！ ',
        takz_kin,
        ' と同じ2200メートル。あのときの感覚を復習したいんだ。',
      ]);
      await daiya.say_and_wait('……トレーナー。');
      era.printButton('「その頼み、聞こう！」', 1);
      await era.input();
      await daiya.say_and_wait([
        '……そうですわね。距離もちょうど ',
        tenn_sho,
        ' と ',
        kyot_dai,
        ' の中間ですもの。私にも良い負荷になりますわ。',
      ]);
      await kita.say_and_wait('ありがとう、ダイヤ！！');
      await daiya.say_and_wait('もう……お礼を言うべきは、私のほうですわ。');
      await era.printAndWait(
        'こうして、キタサンブラックとの2200メートルが始まった。',
      );
      await kita.say_and_wait('はあああああああ！');
      await daiya.say_and_wait(
        'ここで差を広げられてはいけない。少しペースを上げて……',
        true,
      );
      await daiya.say_and_wait('はああ……っ！ うっ……！');
      await daiya.say_and_wait(
        '……前へ出られない！ 踏み込みが重い……？ だめ、差が開いていく……！',
        true,
      );
      await daiya.say_and_wait('……思いどおりに走れない……', true);
      await daiya.say_and_wait('……はあ、はあ………………');
      await kita.say_and_wait('うーん──ダイヤ、調子よくなさそうだね。');
      await kita.say_and_wait('無理しないで、今日はここまでにしよう！');
      await daiya.say_and_wait('だめですわ、まだ……');
      await kita.say_and_wait('でもダイヤ、併走にも集中できてない感じだよ。');
      await kita.say_and_wait(
        '集中できないと、怪我するかもしれない。今日は休もう。',
      );
      era.printButton('「ああ、今日はここまでにしよう。しっかり休め」', 1);
      await era.input();
      await daiya.say_and_wait('……わかりました。お疲れさまでした。');
      await era.printAndWait(
        `サトノダイヤモンドは、${daiya.sex}の怪我を案じる気持ちを察したのだろう。素直に頷いた。`,
      );
      await kita.say_and_wait('ねえ、まだ早いし。ちょっと散歩して帰ろうよ！');
      await daiya.say_and_wait('キタちゃん……ごめんなさい、私──');
      await kita.say_and_wait('行こう！！');
      await daiya.say_and_wait('わっ！ ……キタちゃん、私……！');
      await kita.say_and_wait('お腹空いた！ 先に商店街行こう！');
      era.drawLine();
      await kita.say_and_wait('んーーー！ おいしい！');
      await kita.say_and_wait('ダイヤは何味にしたの？');
      await daiya.say_and_wait(
        'スパイシーチーズドッグとチョコミント、半分ずつですわ。',
      );
      await kita.say_and_wait('ま、また変な組み合わせ……');
      await daiya.say_and_wait(
        '変わった組み合わせのほうが面白いでしょう。辛くて冷たい、刺激的な味ですわ♪',
      );
      await kita.say_and_wait('ダイヤは挑戦者だね。');
      await kita.say_and_wait(
        '喉乾いた、飲み物買おう！ 買ったら景色のいいところで飲もうよ！',
      );
      await daiya.say_and_wait(
        'キタちゃん！ 手を……急に引かれたら、たい焼きが落ちますわ！',
      );
      await kita.say_and_wait('ごめんごめん！ でも落ちてないでしょ！');
      await daiya.say_and_wait(
        '……小さい頃も、こうしてキタちゃんに手を引かれて……',
        true,
      );
      await daiya.print_and_wait(
        '【幼いダイヤ「キタちゃん……まだ歩くのですか……？」】',
      );
      await kita.print_and_wait('【幼いキタサン「もう着くよ。ほら……」】');
      await daiya.print_and_wait('【幼いダイヤ「わあ～！ 高いですわ……！」】');
      await kita.print_and_wait(
        '【幼いキタサン「ここがアタシの秘密基地！ ずっとダイヤを連れてきたかったんだ！」】',
      );
      await daiya.say_and_wait('たくさん、連れていってくださいました……', true);
      await kita.say_and_wait('はあ、はあ……一気に登ると、やっぱり疲れるね……！');
      await daiya.say_and_wait('ええ……はあ、はあ……');
      await daiya.say_and_wait(
        '以前も、ここに参りましたわ……あのときも、キタちゃんが手を引いてくださいました。',
      );
      await daiya.say_and_wait(
        'ここだけではなく、いろいろなところへ。キタちゃんが、外の世界を教えてくださったのです。',
      );
      await daiya.say_and_wait(
        '……私は、ずっとキタちゃんをお姉さんのように見ていましたわ。',
      );
      await kita.say_and_wait(
        'あはは、ダイヤといるときは、できるだけお姉さんらしくしようと思ってたよ！',
      );
      await kita.say_and_wait(
        'ダイヤの前を歩いて、いろんなところへ連れていく……',
      );
      await kita.say_and_wait(
        '──ねえ、ダイヤ！ 競争しよう！ 川までどっちが早いか！',
      );
      await daiya.say_and_wait('えっ？ 競争？ 急ですわね？');
      await kita.say_and_wait(
        'ちょっと走るくらいいいでしょ。はい！ よーい……どん！！',
      );
      await daiya.say_and_wait('待ち……ずるいですわ、キタちゃん！！');
      await kita.say_and_wait('へへへ、アタシの勝ち！ 次は……公園まで！');
      await daiya.say_and_wait('えっ！？ もう……！');
      await kita.say_and_wait('早くしないと置いてくよ！');
      await kita.print_and_wait(
        '【幼いキタサン「早く早く、ダイヤ！ はやく──！ 置いてくよ！」】',
      );
      await daiya.print_and_wait(
        '【幼いダイヤ「待ってくださいまし──！ キタちゃん！！」】',
      );
      await daiya.print_and_wait(
        '【幼いダイヤ「はあ、はあ……えへへ、もう少しでしたわ……！」】',
      );
      await daiya.say_and_wait('ふう……置いていかれませんわよ！');
      await kita.say_and_wait('じゃあ最後は寮まで！ 寮がゴールね！');
      await daiya.say_and_wait('……ふふ、今度こそ追いつきますわ。');
      await daiya.say_and_wait(
        '……昔も、こうしてただその背中だけを追っていましたわね……',
        true,
      );
      await daiya.say_and_wait('ただ、キタちゃんに追いつきたくて。', true);
      await daiya.say_and_wait('……よし──！');
      await daiya.say_and_wait('……あれ？ 私……普通に走れている……', true);
      await daiya.say_and_wait('何も考えず……ただ自然に走っている……！', true);
      await daiya.say_and_wait(
        '……そうでしたわ。キタちゃんを追っているとき、私はいつも走ることだけに集中していた……',
        true,
      );
      await daiya.say_and_wait(
        'ただ想像するのです──あの背中に追いつき、追い越したとき、キタちゃんがどんな顔をするかを。',
        true,
      );
      await daiya.say_and_wait(
        'そうすると、楽しくて……走るのが、楽しくて！！',
        true,
      );
      await kita.say_and_wait('ゴール────！');
      await daiya.say_and_wait('はあ、はあ、はあ…………');
      await daiya.say_and_wait('…………キタちゃん。');
      await kita.say_and_wait('どうしたの？ ダイヤ。');
      await daiya.say_and_wait('えへへ、とても楽しく走れましたわ！');
      await kita.say_and_wait('うん！！ アタシも！');
      await daiya.say_and_wait('次は、必ず追い越しますわ！');
      await kita.say_and_wait('…………！ へへ、いつでもかかってこい！！');
      await daiya.say_and_wait('心のままに走りましょう。昔のように……', true);
    };
    f.title = title;
    return f;
  })(),
  before_kyot_dai_s: (() => {
    const title = '京都大賞典に向けて';
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        '『京都大賞典』の発走前。観客のあいだに、心配の空気が漂っていた。',
      );
      await era.printAndWait(
        `観客C「報道ではサトノダイヤモンドの状態がよくないらしい。今日の${daiya.sex}は大丈夫なのか……」`,
      );
      await era.printAndWait(
        `観客A「記者まで${daiya.sex}をおかしいと思ってるなら、かなり深刻なんじゃ……？」`,
      );
      await era.printAndWait('観客C「ああ、何があったんだろう……」');
      await daiya.say_and_wait('ふう……');
      era.printButton('「大丈夫か？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'あ、ええ……今日ばかりは、少し緊張してしまいまして……',
      );
      await era.printAndWait(
        'サトノダイヤモンドの状態は調整の末、少しずつ戻ってきている。だが、あれ以来の初戦だ。',
      );
      await daiya.say_and_wait('……今日は、大丈夫ですわ。');
      await daiya.say_and_wait('キタちゃんと走って、思い出しましたから……');
      await daiya.say_and_wait('ただ前を見て走る、あの感覚を。');
      await daiya.say_and_wait('追いつきたい、一心に走る感覚を。');
      await daiya.say_and_wait('走る理由を、私は取り違えていただけですわ。');
      era.printButton('「走る理由……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        `はい。これまで私は、『一流の${daiya.uma_sex_title}』らしく走ることが責務だと思っていました。`,
      );
      await daiya.say_and_wait(
        'マックイーンを超え、海外へ行けると思わせる走りを──それが、もともとの考えでした。',
      );
      await daiya.say_and_wait('でも、それは違いますわ。');
      await daiya.say_and_wait('──私は、皆さんに可能性を感じてもらいたい。');
      await daiya.say_and_wait(
        `サトノ家の宿願を叶えたい、マックイーンを超えたい、『一流の${daiya.uma_sex_title}』として${daiya.uma_sex_title}界に貢献したい。`,
      );
      await daiya.say_and_wait(
        'それらはすべて、キタちゃんに追いつきたい気持ちと同じですわ。',
      );
      await daiya.say_and_wait('どれも、私自身の願いです。');
      await daiya.say_and_wait('誰かのためではなく、自分の願いのために走る。');
      await daiya.say_and_wait(
        '初心を取り違えたから、道を見失い、目標への進み方を忘れてしまったのですわ。',
      );
      await daiya.say_and_wait(
        '本当は、ただ前を見て走ればよかった。自分の心のままに。',
      );
      await daiya.say_and_wait('心のままに走ることは、楽しいことですわ。');
      await daiya.say_and_wait('走るのが楽しい。その感覚を、取り戻しました。');
      era.printButton('「そういうことか……」', 1);
      await era.input();
      await era.printAndWait(
        `その言葉は、間違っていない。家族の宿願を背負うのも、${daiya.sex}自身が選んだ道だと、以前言っていた。`,
      );
      await era.printAndWait(`${daiya.sex}は、自分の夢へ進んでいる。`);
      await daiya.say_and_wait(
        `ですから今日は、『一流の${daiya.uma_sex_title}』になりたいという夢だけを胸に、レースへ参ります。`,
      );
      await daiya.say_and_wait('──サトノダイヤモンドらしく、走りますわ。');
    };
    f.title = title;
    return f;
  })(),
  kyot_dai_win_s: (() => {
    const title = '結果';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await you.say_as_passer_by_and_wait(
        '実況',
        'サトノダイヤモンド、先頭でゴールイン！',
      );
      await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
      await you.say_as_passer_by_and_wait(
        '観客C',
        `なんだ、${daiya.sex}の状態、悪くなんかなかったじゃないか！`,
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        `${daiya.sex}、本当にいい走りだった！！ ダイヤが走るときは、ただ前を見て加速する……`,
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        '何にも揺さぶられないあの姿。俺、大好きなんだ……',
      );
      await mcqueen.say_and_wait('……ふふ、当然の結果ですわ。');
      await mcqueen.say_and_wait(
        'ここで敗れていては、私の相手にはなれませんもの。',
      );
      await daiya.say_and_wait('……ええ！');
      await daiya.say_and_wait('これが、私の走り……！');
      await daiya.say_and_wait('トレーナー、ようやく伸び伸び走れましたわ！');
      era.printButton('「そのように見えたぞ！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'トレーナーまで問題ないと仰るなら、本当に安心ですわ！',
      );
      era.printButton('「踏み込みに、力が乗っていた」', 1);
      await era.input();
      await era.printAndWait(
        `まだ非常に強いとまでは言えないが、${you.name} は踏み込みに力と安定を感じたと${daiya.sex}に伝えた。`,
      );
      await daiya.say_and_wait(
        '本当ですの……？ 私はただ、自然に走っただけなのですが……',
      );
      era.printButton('「もう、その走りが身についてきたんだ」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は思う。${daiya.sex}が自分の走りを取り戻したから、これまでの調教の成果も表に出たのだろう。`,
      );
      await daiya.say_and_wait(
        'よかった……！ でしたら、踏み込みの力を安心して鍛え続けられますわ……！',
      );
      await daiya.say_and_wait(
        'つまり、海外のレースへ進む可能性もある、ということですわね……',
      );
      era.printButton('「君に合うやり方を、一緒に探そう」', 1);
      await era.input();
      await era.printAndWait(
        `この先の調教で、また走りに影響が出る可能性はある。だが、今の${daiya.sex}なら大丈夫だろう。`,
      );
      await era.printAndWait(
        `走る理由を取り戻した${daiya.sex}なら、自分に合う伸び方を見つけられるはずだ。`,
      );
      await daiya.say_and_wait('はい、ご心配なく。もう迷いませんわ。');
      await daiya.say_and_wait('ただ夢だけを見て、前へ進みます！');
      era.printButton('「『天皇賞（秋）』でも、そのままでいけ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい！ ついにマックイーンと……！ それに、キタちゃんも！！',
      );
      await daiya.say_and_wait('ずっと夢見た舞台が、ついに……！');
      await daiya.say_and_wait(
        `それに、勝てば、『一流の${daiya.uma_sex_title}』の実力があると証明できますわ。`,
      );
      await daiya.say_and_wait(
        `憧れの方と、長年のライバル……${daiya.couple_title}と勝負できるこの機運──`,
      );
      await daiya.say_and_wait('すべてを賭ける覚悟で、挑みますわ！！');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '天皇賞（秋）に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await kita.say_and_wait('──ついにこの日だ……『天皇賞（秋）』。');
      await daiya.say_and_wait('ええ……！ ついにマックイーンと……！');
      await daiya.say_and_wait('私の憧れたメジロマックイーン──', true);
      await daiya.say_and_wait(
        `メジロ家の${daiya.uma_sex_title}として、${daiya.sex}の務めを果たした『一流の${daiya.uma_sex_title}』。`,
        true,
      );
      await daiya.say_and_wait(
        `${daiya.sex}の気高く、気品ある姿に憧れ、自分もそうなりたいと思いました。`,
        true,
      );
      await daiya.say_and_wait(
        'トレセン学園に入ってからは、近くでマックイーンの走りを拝見できるだけでも、とても嬉しかった。',
        true,
      );
      await daiya.say_and_wait(
        'サトノ家の宿願を果たすため、夢を追い続け……気づいたら、ここまで来ていました。',
        true,
      );
      await daiya.say_and_wait('ついに、憧れの方と同じ舞台に立てる──', true);
      await daiya.say_and_wait(
        '……そして今日、私はライバルとして、憧れに挑みますわ！！',
        true,
      );
      await daiya.say_and_wait(
        '伝説級の最強ステイヤーを超える。その可能性を、私から見せてみせますわ！',
        true,
      );
      await era.printAndWait(
        '実況「続いて登場はキタサンブラックとサトノダイヤモンド！ 二人、同時入場！」',
      );
      await era.printAndWait('観客A「ダイヤ──！ 頑張れ────！！」');
      await era.printAndWait('観客B「『天皇賞（秋）』も取れ、キタサン！！」');
      await era.printAndWait(
        `実況「お待たせいたしました！！ ${daiya.sex}の出走を、誰が予想できたでしょうか！？」`,
      );
      await era.printAndWait(
        `実況「『天皇賞（春）』連覇を成し遂げた${daiya.uma_sex_title}、メジロマックイーン！！」`,
      );
      await you.say_as_passer_by_and_wait('観客', 'おおおおおおおおお！！');
      await era.printAndWait(
        '実況「この歓声を聞いてください！ 東京競馬場全体が揺れている！！」',
      );
      await era.printAndWait(
        '実況「大雨のなか、これほどの観客が訪れた。夢の顔合わせを一目見ようと！」',
      );
      await daiya.say_and_wait('……マックイーンは、やはりすごいですわね。');
      await kita.say_and_wait('うん……でも、アタシたちも負けてられない！');
      await daiya.say_and_wait('ええ！ ここまで来た私たちなら！');
      await daiya.say_and_wait('必ずマックイーンに勝てますわ！');
      await era.printAndWait(
        '二人「1着は私のものですわ！！ 1着はアタシのだ！！」',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '到達';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, mcqueen, kita, you, tenn_sho, arim_kin) => {
      await daiya.say_and_wait(
        '馬場が悪くても関係ありませんわ！！ 私の走りで、ゴールへ向かうだけ！',
        true,
      );
      await daiya.say_and_wait('はああああああああああああ！！');
      await you.say_as_passer_by_and_wait(
        '実況',
        '1着はサトノダイヤモンド────！！ 最高級のダイヤに曇りなし！ 澄み切った輝きだ！',
      );
      await you.say_as_passer_by_and_wait(
        '観客',
        '（わあああああああああああ！）',
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        '心を揺さぶる走りだった、サトノダイヤモンド！！ マックイーンに勝つなんて、非の打ちどころがない実力だ！',
      );
      await you.say_as_passer_by_and_wait(
        '観客A',
        '泥だらけでも凛として揺るがない……あの姿、本当に美しい……',
      );
      await kita.say_and_wait(
        'うわああああああああ！！ くやしい、くやしい、くやしい！！',
      );
      await kita.say_and_wait('アタシ、状態は完璧だったのに！');
      await kita.say_and_wait('……でも、それだけダイヤがすごかったってことだ。');
      await kita.say_and_wait('アタシは、もっと精進しないと！');
      await daiya.say_and_wait(
        'ええ、私もキタちゃんに追い抜かれないよう努めますわ。',
      );
      await mcqueen.say_and_wait('ダイヤ、素晴らしい走りでしたわ。');
      await daiya.say_and_wait('マックイーン！ ありがとうございます、でも──');
      await mcqueen.say_and_wait('どうかなさいましたの？');
      await daiya.say_and_wait(
        '距離では私に分がありました。ステイヤーのマックイーンには、長距離のほうがお得意でしょう。',
      );
      await mcqueen.say_and_wait([
        'ええ、ですが ',
        tenn_sho,
        ' を指定したのは私ですわ。',
      ]);
      await daiya.say_and_wait('ぜ、是非、長距離でもご一緒したいですわ！！');
      await daiya.say_and_wait('長距離でマックイーンに勝ちたいのです……！');
      await mcqueen.say_and_wait('……！');
      await teio.say_as_unknown_and_wait('立派な心意気だね～、ダイヤ！');
      await daiya.say_and_wait('テイオー！');
      await teio.say_and_wait('だったら、こうするのはどう？');
      await teio.say_and_wait('ボクたちみんなで、同じレースを走ろう！！');
      await daiya.say_and_wait('……！ わ、喜んで！ その機会をくださいまし！！');
      await mcqueen.say_and_wait(
        'もう……テイオーご自身も、ダイヤと走りたいのでしょう？',
      );
      await teio.say_and_wait('へへ♪ バレちゃった。');
      await mcqueen.say_and_wait(['──', arim_kin, '！']);
      await mcqueen.say_and_wait([
        '皆さんよろしければ、',
        arim_kin,
        ' で再戦いたしましょう！',
      ]);
      await teio.say_and_wait('ボクも出るよ！ ファン投票、よろしくね！');
      await you.say_as_passer_by_and_wait(
        '観客B',
        'マジかよ！？ 絶対入れる！ テイオー、マックイーン！！',
      );
      await daiya.say_and_wait('マックイーン……！ ありがとうございます！！');
      await daiya.say_and_wait('私、『有馬記念』に出ますわ！！');
      await kita.say_and_wait(
        'アタシも！！ そのときはよろしくお願いします！！',
      );
      await you.say_as_passer_by_and_wait(
        '観客',
        'うおおおおおおおおおおおお！！',
      );
      await era.printAndWait([
        '6万人のざわめきがスタンドを揺るがす。',
        arim_kin,
        ' は、世紀の夢の一戦になるだろう。',
      ]);
      await era.printAndWait([
        '府中の熱い歓声を前に、',
        arim_kin,
        ' を回避する選択肢など、存在しなかった。',
      ]);
      await daiya.say_and_wait('──あの、マックイーン！');
      await daiya.say_and_wait('一つ、お伺いしてもよろしいでしょうか？');
      await mcqueen.say_and_wait('なんでしょう？');
      await daiya.say_and_wait(
        'マックイーンは……なぜ、私たちと走ろうとお思いになったのですか？',
      );
      await mcqueen.say_and_wait(
        `……お二人のレースが、私の闘志を掻き立てました。それに、メジロ家の${daiya.uma_sex_title}として、そうすべきだと考えたのです。`,
      );
      await daiya.say_and_wait(`メジロ家の${daiya.uma_sex_title}として……`);
      await mcqueen.say_and_wait(
        'ダイヤが知りたいのは、今の私の立場と心境、ですわね？',
      );
      await daiya.say_and_wait(
        `はい。マックイーンは、サトノ家が目指す『一流の${daiya.uma_sex_title}』として、各方面で活躍していらっしゃいます。`,
      );
      await daiya.say_and_wait(
        `ですから今回、マックイーンが私たちと走ると決めたのも、『一流の${daiya.uma_sex_title}』としての判断ではないかと。`,
      );
      await mcqueen.say_and_wait('ええ、そのとおりですわ。');
      await mcqueen.say_and_wait(
        `──新味がないと言われるほど絶対的な実力で、${daiya.uma_sex_title}界にメジロ家の名を轟かせる。それが、私に課してきた課題です。`,
      );
      await mcqueen.say_and_wait(
        `ですから、メジロ家も私も特に重んじる『天皇賞（春）』に……強力な${daiya.uma_sex_title}が出走したなら、立ち上がらねばなりません。`,
      );
      await mcqueen.say_and_wait(
        `それだけではありません。トゥインクル・シリーズで好成績を残した${daiya.uma_sex_title}と走るだけでなく──`,
      );
      await mcqueen.say_and_wait(
        `あなた方のような、新世代で頭角を現した${daiya.uma_sex_title}の挑戦も受け、圧倒的な実力で勝つ。`,
      );
      await mcqueen.say_and_wait(
        'そうして──メジロ家の名声を、決して萎れさせない。',
      );
      await mcqueen.say_and_wait('それが、今の私の立場と心境ですわ。');
      await daiya.say_and_wait('メジロ家が実力で誇り続けられるように……');
      await mcqueen.say_and_wait(
        '……ですが、サトノ家とメジロ家の立場は同じではありません。',
      );
      await mcqueen.say_and_wait(
        `サトノ家の${daiya.uma_sex_title}界における歴史は、ダイヤから始まると言ってよいでしょう。`,
      );
      await mcqueen.say_and_wait(
        'ですからダイヤには、私とは違う道が選べるはずですわ。',
      );
      await daiya.say_and_wait('……サトノ家の歴史は、私から始まる……');
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait(
        'ありがとうございます、マックイーン。よく考えてみますわ。',
      );
      await mcqueen.say_and_wait('ええ、よくお考えなさい。');
      await mcqueen.say_and_wait(
        'ダイヤの前途を、先にお祝いしておきますわ。それでは。',
      );
      await daiya.say_and_wait(
        '……やはり、マックイーンは本当に立派な方ですわ！',
      );
      await daiya.say_and_wait(
        `${mcqueen.sex}は『一流の${daiya.uma_sex_title}』の定義と目標を、あれほど明確に持っていらっしゃる……本当に尊敬いたしますわ……！`,
      );
      era.printButton('「参考になってよかったな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ！ マックイーンの仰るとおり、自分に何ができるか、よく考えますわ……',
      );
      await daiya.say_and_wait(
        'できれば『有馬記念』までに、思いついた答えをお伝えしたいですわ！',
      );
      await era.printAndWait([
        arim_kin,
        `──サトノダイヤモンドが『一流の${daiya.uma_sex_title}』になる夢の答えは、そこで見つかるかもしれない。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = 'ジャパンカップに向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, teio, kita) => {
      await era.printAndWait(
        '『ジャパンカップ』──トウカイテイオーが出走を宣言したレースに、サトノダイヤモンドも挑む。',
      );
      await kita.say_and_wait(
        'ダイヤまで、このレースに出るとは思わなかったよ。',
      );
      await daiya.say_and_wait(
        'どうしてですの？ テイオーも、私が超えたいお方ですもの！',
      );
      await daiya.say_and_wait(
        'マックイーンにとって特別なライバルですわ。テイオーとも、ぜひ走りたいのです！',
      );
      await kita.say_and_wait(
        'ふふ、そっか！ ダイヤもアタシと一緒に、テイオーのすごさを見てきたもんね！',
      );
      await daiya.say_and_wait(
        'それに、テイオーから学びたいことが一つありますの。',
      );
      await daiya.say_and_wait(
        `テイオーが『一流の${daiya.uma_sex_title}』の姿を、どう体現されているか、この目で見たいのです。`,
      );
      await kita.say_and_wait(
        'うん……よくわからないけど、ダイヤにはそうしたい理由があるんだよね。',
      );
      await kita.say_and_wait(
        'でもね！ テイオーはアタシがずっと憧れてきた人だ！',
      );
      await kita.say_and_wait(
        'だからこのレースの勝ちは譲らない！ テイオーに勝つのはアタシだ！！',
      );
      await daiya.say_and_wait(
        `キタちゃんにも、テイオーにも勝ち、『一流の${daiya.uma_sex_title}』になってみせますわ！！`,
      );
      await teio.say_and_wait(
        'ふふ、二人とも強くなったけど、トウカイテイオー様はもっと強いよ！',
      );
      await teio.say_and_wait('ボクの実力、見せてあげる！');
      await teio.say_and_wait('キタちゃん、ダイヤ！ 全力でかかってこい！！');
      await era.printAndWait('二人「負けませんわ！！ 負けないよ！！」');
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '挑戦';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, kita, you, arim_kin) => {
      await you.say_as_passer_by_and_wait(
        '実況',
        'いま先頭でゴールイン！ 1着は──',
      );
      await you.say_as_passer_by_and_wait('観客', 'わあああああああああ！');
      await daiya.say_and_wait('はあ、はあ……');
      await teio.say_and_wait(
        'まさか、こんな実力があるなんて……！ いい走りだったよ、ダイヤ。',
      );
      await daiya.say_and_wait('ありがとうございます！');
      await teio.say_and_wait('キタちゃんも、ボクの想像以上に強くなってた！');
      await kita.say_and_wait([
        '本当！？ でもアタシは ',
        arim_kin,
        ' で、今日以上の走りを見せる！',
      ]);
      await daiya.say_and_wait('私も、現状に満足はいたしませんわ。');
      await daiya.say_and_wait(
        'いまの私は、ようやく一歩先に出ていたキタちゃん、マックイーン、テイオーと同じスタートラインに立てたのだと思います。',
      );
      await teio.say_and_wait('──いいね。キタちゃんもダイヤも、すごくいい。');
      await teio.say_and_wait('ボクたちに勝つと決めた、その目がいいんだよ。');
      await teio.say_and_wait('つい、昔の自分を思い出しちゃった。');
      await daiya.say_and_wait('昔の……テイオー、ですの？');
      await teio.say_and_wait(
        'うん、昔のボクも会長に憧れながら……いつか必ず超えたいって、トゥインクル・シリーズを走ってた。',
      );
      await teio.say_and_wait('やっと会長と正面からぶつかったとき──');
      await teio.say_and_wait(
        '憧れが一瞬でライバルになった。絶対に倒す、って思ったんだ。',
      );
      await teio.say_and_wait(
        '今の二人も、当時のボクと同じ気持ちでしょ。ふと、そう思ったんだ！',
      );
      await teio.say_and_wait(
        'でもね、会長に挑んだあの感覚を、ボクは一度も忘れてない。',
      );
      await teio.say_and_wait(
        '二人の素晴らしい走りを見て、ボク自身もまた走りたくなった！',
      );
      await teio.say_and_wait(
        '次の『有馬記念』は、挑戦者としてダイヤとキタちゃんに挑むよ！',
      );

      await teio.say_and_wait('覚悟しといて！！');
      await daiya.say_and_wait('──っ！ はい！！');
      await kita.say_and_wait('うん！！ 本気で迎えるよ！');
      await daiya.say_and_wait(
        `いついかなるときも、挑む心を忘れない……それがテイオー${teio.sex}の、『一流の${daiya.uma_sex_title}』としての在り方……`,
      );
      await daiya.say_and_wait(
        'マックイーンは挑戦を受ける側、テイオーは挑戦する側。',
        true,
      );
      await daiya.say_and_wait('では、私は……', true);
      await daiya.say_and_wait(
        'サトノ家初のG1勝利……呪いに挑み、呪いを破り、勝つ。',
        true,
      );
      await daiya.say_and_wait(
        'キタちゃんに追いつき、夢見たトゥインクル・シリーズの舞台で走る。',
        true,
      );
      await daiya.say_and_wait('私にいちばん合う在り方は……！', true);
      await daiya.say_and_wait('……トレーナー。');
      await era.printAndWait(
        'しばしの沈黙のあと、口を開いたサトノダイヤモンドは、覚悟の決まった顔をしていた。',
      );
      await daiya.say_and_wait('私は、これからも挑み続けますわ。');
      era.printButton('「挑み続ける……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい。これまでも私はいろいろなことに挑んできました。サトノ家を阻む呪いも、キタちゃんも。',
      );
      await daiya.say_and_wait(
        `ですから『一流の${daiya.uma_sex_title}』としての私も、挑み続けることが、いちばん似合う在り方ではないかと。`,
      );
      await daiya.say_and_wait(
        'マックイーンとテイオーに挑み、サトノ家の歴史に新しい頁を開いたように。',
      );
      await daiya.say_and_wait(
        `いろいろなことに挑み、サトノ家と${daiya.uma_sex_title}界に新しい歴史を拓きたい。`,
      );
      await daiya.say_and_wait(
        'そう思ったとき、改めて気づいたのです。海外のレースに挑みたい、と。',
      );
      await daiya.say_and_wait(
        '皆さんに可能性を感じてもらうためだけではなく、私自身の願いとして。',
      );
      await daiya.say_and_wait(
        `歴史ある海外のレースで勝ち、サトノの名を${daiya.uma_sex_title}界の歴史に刻みたい。`,
      );
      await daiya.say_and_wait(
        `そして、サトノ家と日本の${daiya.uma_sex_title}に、新しい歴史を拓く──`,
      );
      await daiya.say_and_wait(
        `それが、私にできる${daiya.uma_sex_title}界への貢献だと思いますわ。`,
      );
      era.printButton('「自分の答えが見つかったんだな」', 1);
      await era.input();
      await daiya.say_and_wait('はい！');
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』としてのサトノダイヤモンドの姿……目標は、決まりましたわ。`,
      );
      await daiya.say_and_wait(
        `『有馬記念』に勝ち、『一流の${daiya.uma_sex_title}』の列に加わりますわ！`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_44: (() => {
    const title = '挑み、拓く';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_cup
     */
    const f = async (daiya, teio, kita, you, japa_cup) => {
      await era.printAndWait([
        `${you.name} はサトノダイヤモンドと一緒に `,
        japa_cup,
        ' を観戦しに来ていた。',
      ]);
      await kita.say_and_wait('テイオー……！ 本当に、憧れのテイオーと……！');
      await teio.say_and_wait(
        'そんなに落ち着かないと、レースで痛い目見るよ、キタちゃん。',
      );
      await teio.say_and_wait(
        `今日は海外から招かれた${daiya.uma_sex_title}もいる。不確定要素の多い一戦だ……`,
      );
      await teio.say_and_wait('でも相手が誰でも、帝王様が叩き潰す！！');
      await kita.say_and_wait('潰されないよ！ アタシは……テイオーに勝つ！！');
      await daiya.say_and_wait(
        'よかった！ キタちゃん、気迫では負けていませんわね！',
      );
      await era.printAndWait('観客A「キタサン、頑張れ！！ 憧れを超えろ！」');
      await era.printAndWait(
        '観客B「『帝王』を超えろ！ 私たちのキタサンならできる！！」',
      );
      await era.printAndWait(
        `観客C「${daiya.couple_title}に『帝王』の貫禄を見せてやれ！ トウカイテイオー！！」`,
      );
      await daiya.say_and_wait('……双方の声援、互角といったところでしょうか……');
      await era.printAndWait(
        `${daiya.couple_title}はもともと熱いファンを多く抱える二人だ。今回の『ジャパンカップ』も、例年より賑わっている。`,
      );
      await daiya.say_and_wait('キタちゃん……頑張って──！');
      await era.printAndWait(
        '実況「おっと、トウカイテイオー！ ここから一気に上がってきた！ すでにキタサンブラックの直後だ！」',
      );
      await daiya.say_and_wait(
        'えっ……！？ 速い……！ いつものテイオーなら、ここでは加速しないはず……！',
      );
      await era.printAndWait(
        'トウカイテイオーは果敢に、キタサンブラックの背後へ食らいついた。',
      );
      await era.printAndWait('テイオーには珍しい攻めの形だ。');
      await teio.say_and_wait('はあああああああ！');
      await kita.say_and_wait('っ……あああああああ！');
      await daiya.say_and_wait(
        'キタちゃんも加速した……いいえ、違う。これは……！',
      );
      await era.printAndWait(
        'キタサンブラックはテイオーの圧力で一度ペースを上げつつ、また元のリズムへ戻していく。',
      );
      await era.printAndWait(
        'トウカイテイオーとキタサンブラックのあいだで、激しい攻防が繰り広げられた。',
      );
      await daiya.say_and_wait(
        `キタちゃんもテイオーも、${kita.couple_title}は『ジャパンカップ』の経験があるのに……`,
      );
      await daiya.say_and_wait('自分の走りに閉じず、積極的に仕掛けている……！');
      await daiya.say_and_wait('……これが私なら……');
      await era.printAndWait(
        'サトノダイヤモンドは展開を見ながら、もし自分が走っていたらとシミュレーションし始めているようだった。',
      );
      await era.printAndWait(
        '実況「トウカイテイオー、なお加速！ キタサンブラックは先頭を守れるか、テイオーに交わされるか──」',
      );
      await era.printAndWait('観客「わあああああああああああ！」');
      await kita.say_and_wait(
        'びっくりした……！ テイオーがあんなに食らいついてくるなんて……',
      );
      await teio.say_and_wait('何言ってるの、守りに入ったらすぐ負けるよ！');
      await teio.say_and_wait(
        'ボクはいつだって、挑む心を忘れない。もっと上へ行くためにね！',
      );
      await teio.say_and_wait(
        'だから『有馬記念』も同じ。挑戦者として、ダイヤとキタちゃんに挑むよ！',
      );

      await teio.say_and_wait('覚悟しといて！！');
      await daiya.say_and_wait('──っ！ はい！！');
      await kita.say_and_wait('うん！！ 本気で迎えるよ！');
      await daiya.say_and_wait(
        `いついかなるときも、挑む心を忘れない……それがテイオー${teio.sex}の、『一流の${daiya.uma_sex_title}』としての在り方……`,
      );
      await daiya.say_and_wait(
        'マックイーンは挑戦を受ける側、テイオーは挑戦する側。',
        true,
      );
      await daiya.say_and_wait('では、私は……', true);
      await daiya.say_and_wait(
        'サトノ家初のG1勝利……呪いに挑み、呪いを破り、勝つ。',
        true,
      );
      await daiya.say_and_wait(
        'キタちゃんに追いつき、夢見たトゥインクル・シリーズの舞台で走る。',
        true,
      );
      await daiya.say_and_wait('私にいちばん合う在り方は……！', true);
      await daiya.say_and_wait('……トレーナー。');
      await era.printAndWait(
        'しばしの沈黙のあと、口を開いたサトノダイヤモンドは、覚悟の決まった顔をしていた。',
      );
      await daiya.say_and_wait('私は、これからも挑み続けますわ。');
      era.printButton('「挑み続ける……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'はい。これまでも私はいろいろなことに挑んできました。サトノ家を阻む呪いも、キタちゃんも。',
      );
      await daiya.say_and_wait(
        `ですから『一流の${daiya.uma_sex_title}』としての私も、挑み続けることが、いちばん似合う在り方ではないかと。`,
      );
      await daiya.say_and_wait(
        'マックイーンとテイオーに挑み、サトノ家の歴史に新しい頁を開いたように。',
      );
      await daiya.say_and_wait(
        `いろいろなことに挑み、サトノ家と${daiya.uma_sex_title}界に新しい歴史を拓きたい。`,
      );
      await daiya.say_and_wait(
        'そう思ったとき、改めて気づいたのです。海外のレースに挑みたい、と。',
      );
      await daiya.say_and_wait(
        '皆さんに可能性を感じてもらうためだけではなく、私自身の願いとして。',
      );
      await daiya.say_and_wait(
        `歴史ある海外のレースで勝ち、サトノの名を${daiya.uma_sex_title}界の歴史に刻みたい。`,
      );
      await daiya.say_and_wait(
        `そして、サトノ家と日本の${daiya.uma_sex_title}に、新しい歴史を拓く──`,
      );
      await daiya.say_and_wait(
        `それが、私にできる${daiya.uma_sex_title}界への貢献だと思いますわ。`,
      );
      era.printButton('「自分の答えが見つかったんだな」', 1);
      await era.input();
      await daiya.say_and_wait('はい！');
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』としてのサトノダイヤモンドの姿……目標は、決まりましたわ。`,
      );
      await daiya.say_and_wait(
        `『有馬記念』に勝ち、『一流の${daiya.uma_sex_title}』の列に加わりますわ！`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} turbo ツインターボ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await pama.say_and_wait(
        'やっほーお邪魔しまーす！ トレーナー、クリスマスパーティー始まるよ！',
      );
      era.printButton('「……は？」', 1);
      await era.input();
      await era.printAndWait(
        '突然現れたメジロパーマーはそう言うと、勝手に部屋へ入ってきた。続いてナイスネイチャたちも入ってくる。',
      );
      await daiya.say_and_wait(
        '急にお邪魔して申し訳ありません。ネイチャたちと、クリスマスパーティーをすることにいたしまして。',
      );
      await daiya.say_and_wait('トレーナーも、ご一緒されませんか？');
      await pama.say_and_wait(
        'ついでにここを会場に借りられたら、もっと最高なんだけどね！',
      );
      await nature.say_and_wait('あー、トレーナー固まってるね。');
      await daiya.say_and_wait('実は、こういうわけでして……');
      await tannhauser.say_and_wait(
        'えっ！？ ダイヤのお家ではクリスマスパーティーをなさらないの！？',
      );
      await daiya.say_and_wait(
        'はい。クリスマスは父も母も、お仕事か慈善活動がございますので。',
      );
      await daiya.say_and_wait(
        'たまに父たちと取引先のパーティーへ伺ったり、サトノグループ主催のパーティーへ出たりはしますけれど……',
      );
      await daiya.say_and_wait(
        '家族だけのパーティーは、一度もございませんでしたわ。',
      );
      await helios.say_and_wait('マジ？ プレゼントもらえないとか辛すぎだろ！');
      await daiya.say_and_wait(
        'あ、プレゼントはありますわ！ サンタクロースが夜、靴下に入れてくださいます！',
      );
      await daiya.say_and_wait(
        'ただ、映画のような家庭のクリスマスパーティーは経験がなくて……実は、憧れておりましたの。',
      );
      await pama.say_and_wait('じゃあ、やろうよ！');
      await daiya.say_and_wait('えっ！？');
      await dictus.say_and_wait(
        'ええ。ダイヤのご両親はお招きできませんが、家庭的なパーティーなら私たちにもできます。',
      );
      await nature.say_and_wait(
        'ほのぼのした小さな家庭パーティーなら、あたしたち経験豊富だし──やろうよ。',
      );
      await turbo.say_and_wait('やったー！ パーティーパーティー！');
      await tannhauser.say_and_wait(
        'あ、ご両親は無理でも、ダイヤのトレーナーはお呼びできるわよね？',
      );
      await helios.say_and_wait(
        `タンホイザ天才じゃん！ じゃあ直接${you.sex}のとこ行こ！`,
      );
      await dictus.say_and_wait(
        '──という経緯です。会場提供兼ご参加、よろしいですか？',
      );
      era.printButton('「もちろん！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'わあ、本当によろしいのですか！？ ありがとうございます！',
      );
      await dictus.say_and_wait('では、さっそく飾りつけを。');
      await nature.say_and_wait('ふう──だいたいこんな感じかな。');
      await daiya.say_and_wait(
        '素敵……素敵ですわ！ 飾りは全部手作りなのに、こんなに綺麗に……！',
      );
      await tannhauser.say_and_wait(
        'ただいま～！ お料理とお菓子、買ってきたわよ──！',
      );
      await helios.say_and_wait('フライドチキンにピザ☆イエーイ！');
      await kita.say_and_wait('こんばんは──！');
      await daiya.say_and_wait('えっ？ キタちゃん！？');
      await kita.say_and_wait(
        'へへへ、校門でばったり会って、誘ってもらったんだ！',
      );
      await daiya.say_and_wait('大歓迎ですわ！ いらっしゃい、キタちゃん！');
      await kita.say_and_wait(
        'ていうか、今の面子、新入生歓迎会のときと同じだね！',
      );
      await daiya.say_and_wait('ええ、あの頃を思い出しますわ！');
      await tannhauser.say_and_wait(
        'わあ～、当時の新入生がもうこんなに立派に……',
      );
      await pama.say_and_wait('はいはい、昔話はあと！ 冷めないうちに食べよ！');
      await daiya.say_and_wait(
        'ピザ、サラダ、フライドチキン……スルメ、エイヒレ、酢昆布……？',
      );
      await daiya.say_and_wait(
        'なるほど、いわゆる一般家庭のパーティーメニューですわね。',
      );
      await kita.say_and_wait(
        '違う……でも当たってる気もする。アタシんちのクリスマスもおつまみ出るし、否定できない……！',
      );
      await tannhauser.say_and_wait(
        'いやー、商店街の方がたくさんくださって～。昔ながらのお菓子やおつまみが混ざってるの。本当にありがたいわ～',
      );
      await daiya.say_and_wait(
        '手札がなくなりましたわ！ あとはキタちゃんとターボ、どちらが負けかですわ！',
      );
      await kita.say_and_wait('うーん──じゃあ一番右……');
      await kita.say_and_wait('いや、一番左……');
      await kita.say_and_wait('うん、一番左にする！');
      await turbo.say_and_wait('だめだめだめだめ──！！ 左はあげない！');
      await nature.say_and_wait('……ターボ、諦めな。顔に出しすぎ……');
      await era.printAndWait(
        `こうして楽しい時間を過ごし……クリスマスパーティーは幕を閉じた。`,
      );
      era.drawLine();
      await era.printAndWait(
        '残って片付けを手伝ったサトノダイヤモンドとキタサンブラックを、寮まで送る。',
      );
      await daiya.say_and_wait('えへへ、今日は本当に楽しかったですわ！');
      await daiya.say_and_wait('私のクリスマスの印象は、お仕事、でしたから……');
      await kita.say_and_wait(
        'そうだね、毎年クリスマスはダイヤ、用事があるって言ってた。',
      );
      await daiya.say_and_wait('ええ、今度は弟も誘いたいですわ。');
      await kita.say_and_wait(
        'あ、そうだ！ 絶対喜ぶよ！ 来年も一緒にクリスマスパーティーしよう！',
      );
      await daiya.say_and_wait('来年……トレーナーも、ご参加いただけますか？');
      era.printButton('「いいぞ！」', 1);
      await era.input();
      await daiya.say_and_wait('本当ですの？ では、約束ですよ？');
      await daiya.say_and_wait(
        'お時間は先に予約いたしましたから、他の方との約束はできませんわよ。',
      );
      await era.printAndWait(
        'まだ何の予定もなかった来年に、サトノダイヤモンドと過ごすクリスマスの約束が増えた。',
      );
      await dictus.say_and_wait('ではそろそろ、ケーキをいただきましょう──');
      await tannhauser.say_and_wait('あっ！？ ケーキ……買い忘れたわ！！');
      await era.printAndWait(
        `${you.name} とサトノダイヤモンドはケーキを買いに出た。だが近所の店は売り切れで、もう少し遠くへ行くことになった。`,
      );
      await daiya.say_and_wait('イルミネーション、綺麗ですわ。');
      await daiya.say_and_wait(
        'ふふ、こうしてクリスマスの街を歩くのも、ずっと憧れていた映画の一場面ですわ。',
      );
      await daiya.say_and_wait(
        'あ、父たちが慈善活動をなさっていることへの不満ではございませんわよ。',
      );
      await daiya.say_and_wait(
        '一緒に慈善活動をするなかで学んだことも多く、私も誇りを持って手伝っております。',
      );
      await daiya.say_and_wait('ただ、こういう時間も、悪くないなと……');
      era.printButton('「ゆっくり歩こう」', 1);
      await era.input();
      await daiya.say_and_wait(
        'でも……皆さんがケーキを待っていらっしゃいますわ……',
      );
      era.printButton('「お菓子はまだたくさんある。大丈夫だ」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ふふふ、そうですわね。お菓子、食べきれないほどありましたもの！',
      );
      await daiya.say_and_wait('……では、ゆっくり歩きましょう。');
      await daiya.say_and_wait(
        'クリスマスの街は、外国にいるような気分ですわね。',
      );
      await daiya.say_and_wait('……昔、海外旅行で歩いた街を思い出しますわ。');
      await daiya.say_and_wait(
        '……私も……トレーナーと、異国の街を歩いてみたいですわ。',
      );
      await daiya.say_and_wait('トレーナーは、いかがですの？');
      await daiya.say_and_wait(
        '契約トレーナーになってくださったとき、少し無理を申し上げたようなところもありました。',
      );
      await daiya.say_and_wait(
        'ですから今回は、トレーナーのお気持ちをきちんと伺いたいのです。',
      );
      await daiya.say_and_wait('私と一緒に、海外へ行っていただけますか？');
      era.printButton('「君が望むなら、一緒に行く」', 1);
      await era.input();
      await daiya.say_and_wait('……えへへ。');
      await daiya.say_and_wait(
        'よかった！ トレーナー、これからもよろしくお願いいたしますわ！',
      );
      await daiya.say_and_wait('そのときは、一緒に外国の街を歩きましょうね！');
      await era.printAndWait(
        `異国情緒のあるクリスマスの街を見ながら、${you.name} とサトノダイヤモンドは、遠くない将来の約束を交わした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '有馬記念に向けて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await daiya.say_and_wait(
        `──サトノ家の夢。『G1を勝てる${daiya.uma_sex_title}』を、数多く育てること。`,
      );
      await daiya.say_and_wait(
        `その『一流の${daiya.uma_sex_title}』になるため、私は幼い頃から走り続けてきました。`,
      );
      await daiya.say_and_wait(
        'トゥインクル・シリーズのG1で勝ち、今日挑むのは──',
      );
      await daiya.say_and_wait(
        `『一流の${daiya.uma_sex_title}』の先輩方。憧れであり、今日の相手でもあるお二方。`,
      );
      await daiya.say_and_wait('マックイーンとテイオー。');
      await daiya.say_and_wait(
        'そして──出会ってからずっと、私の傍にいてくださったあなた。',
      );
      await daiya.say_and_wait(
        'いつも私の前を走る人。走るレースも、目指すものも違っても。',
      );
      await daiya.say_and_wait('私たちは、ずっと一緒でした。');
      await kita.say_and_wait('──ダイヤ！');
      await daiya.say_and_wait('ええ、キタちゃん！');
      await daiya.say_and_wait(
        'トレセン学園に入る前から、憧れの方と同じ舞台に立つことを夢見て……',
      );
      await daiya.say_and_wait(
        'キタちゃんと競い合ってきたからこそ、今日まで来られましたわ。',
      );
      await daiya.say_and_wait('でも、栄冠を手にできるのは一人だけ！');
      await daiya.say_and_wait(
        'キタちゃんにも！ マックイーンにも！ テイオーにも！ 負けませんわ！！',
      );
      await daiya.say_and_wait('勝って、サトノ家と私の夢を叶えますわ！！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '至宝';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, teio, mcqueen, kita) => {
      await era.printAndWait(
        '実況「第2コーナーの下りを過ぎ、向正面の直線！ 先頭集団のペースはいかがか！」',
      );
      await era.printAndWait(
        '眼鏡の男性「中山の芝2500メートルは6つのコーナーを回る。高低差も大きく、粘りが問われる。スピードだけで押し切るのは難しい。」',
      );
      await era.printAndWait('パーカーの男性「急にどうした？」');
      await era.printAndWait(
        '眼鏡の男性「ゴール前には急な『ハートブレイクヒル』が待っている。結果は最後までわからない。」',
      );
      await era.printAndWait('誰もが息を詰めてレースを見つめる。そして──');
      await daiya.say_and_wait('はああああああああああああ！！');
      await era.printAndWait(
        '実況「抜け出した！ サトノダイヤモンド！ 先頭はサトノダイヤモンド！！」',
      );
      await kita.say_and_wait('うわああああああ！！');
      await era.printAndWait('マックイーン&テイオー「はああああああああ！」');
      await era.printAndWait(
        '実況「サトノダイヤモンド、最後の坂へ！ 親友も憧れも、一気に交わして──」',
      );
      await era.printAndWait('実況「サトノダイヤモンド、1着でゴールイン！！」');
      await era.printAndWait('（わあああああああああああ！）');
      await daiya.say_and_wait('はあ、はあ、はあ……');
      await mcqueen.say_and_wait('おめでとう、ダイヤ。あなたの勝ちですわ。');
      await daiya.say_and_wait('マックイーン……！');
      await mcqueen.say_and_wait(
        '長距離でも、あなたに負けましたわね。実力は、もはや疑いようがありません。',
      );
      await mcqueen.say_and_wait(
        `──もう、お持ちですわよ。あなたが仰っていた『一流の${daiya.uma_sex_title}』の実力を。`,
      );
      await daiya.say_and_wait('ありがとうございます……！');
      await teio.say_and_wait(
        'うーん～、ダイヤもキタちゃんも、もうこんなに強くなってるなんて……ボクの想像を超えてたよ。',
      );
      await kita.say_and_wait('テイオー……！ う、うれしいよ～～！！');
      await teio.say_and_wait(
        'おいおい、これで終わりじゃないでしょ。むしろこれからでしょ！',
      );
      await teio.say_and_wait(
        '足を止めたら、すぐ追い抜かれる。ボクはまた、二人に挑むつもりだよ。',
      );
      await teio.say_and_wait(
        `それに、二人みたいなすごい${daiya.uma_sex_title}は、これからもどんどん出てくるはずだ。`,
      );
      await kita.say_and_wait(
        'うん！ 油断しない！ みんなを笑わせるために、もっと強く、もっと強くなる！',
      );
      await mcqueen.say_and_wait(
        '……ダイヤ、あなたは？ 進むべき方向は、見えていますか？',
      );
      await daiya.say_and_wait(
        `……はい。サトノ家の${daiya.uma_sex_title}として、サトノ家を率い、歴史を拓いていきます。`,
      );
      await daiya.say_and_wait(
        `成績で${daiya.uma_sex_title}界に記録を残し、そうしてサトノ家の歴史を築いていきますわ。`,
      );
      await mcqueen.say_and_wait(
        'なるほど。では、どんな道を拓くおつもりですの？',
      );
      await daiya.say_and_wait(
        '──頂点へ続く道ですわ。私の名のように、最高級のダイヤの輝きに挑みます。',
      );
      await daiya.say_and_wait(
        `日本と、世界各地の頂点に挑み、${daiya.uma_sex_title}界を盛り上げますわ。`,
      );
      await daiya.say_and_wait(
        `それが私──サトノダイヤモンドの考える、『一流の${daiya.uma_sex_title}』の姿です。`,
      );
      await daiya.say_and_wait(
        `いま、私はその道の入口に立ったばかりです。これからこの志で、『一流の${daiya.uma_sex_title}』へ歩み続けますわ。`,
      );
      await mcqueen.say_and_wait('ふふ、立派な志ですわね。');
      await mcqueen.say_and_wait(
        `では『一流の${daiya.uma_sex_title}』らしく、参りましょう！ 皆が待っていますわ！`,
      );
      await daiya.say_and_wait('はい！');
      await daiya.say_and_wait('皆さん、応援ありがとうございました！');
      await era.printAndWait('観客A「ダイヤ────！！ おめでとう────！」');
      await era.printAndWait(
        `観客B「${daiya.uma_sex_title}界の至宝！！ ダイヤの輝きに勝るものはない！」`,
      );
      await daiya.say_and_wait('ふふふ、この輝きを、ずっと保ちたいですわ。');
      await daiya.say_and_wait(
        `サトノダイヤモンドはサトノ家の${daiya.uma_sex_title}として、日本の${daiya.uma_sex_title}界の発展に、力の限り貢献いたします。`,
      );
      await daiya.say_and_wait('そしてこの道は、これからも──');
      await daiya.say_and_wait('キタちゃん！！');
      await daiya.say_and_wait(
        'これからも、キタちゃんと一緒にいろいろなことに挑みたいですわ。',
      );
      await daiya.say_and_wait(
        '走るレースが違っても、目標も進む方向も違っても。',
      );
      await daiya.say_and_wait('それぞれの道を進んでも──');
      await daiya.say_and_wait('キタちゃんと並んで、前へ行きたいのです！');
      await kita.say_and_wait('ダイヤ……！');
      await daiya.say_and_wait('一緒に、走り続けましょう！！');
      await kita.say_and_wait('うん！！ これからもずっと一緒！');
      await kita.say_and_wait(
        'でもその前に！ 次のレース！！ アタシはダイヤに勝つ！',
      );
      await kita.say_and_wait('今のアタシの目標は、まずそれだ！');
      await daiya.say_and_wait('ふふふ！ 負けませんわ！');
      await era.printAndWait(
        '観客C「うおおおお！ いいぞお前たち！！ 楽しみにしてる！」',
      );
      await era.printAndWait(
        '眼鏡の男性「約束する。サトノの、そして二人の歴史を、ずっと見守り続ける！！」',
      );
      await era.printAndWait(
        'パーカーの男性「俺たちの心は、いつまでもお前たちと一緒だ！ 応援する！ ずっとな！！」',
      );
      await daiya.say_and_wait(
        'ありがとうございます！ こんなに温かい応援をいただいて……',
      );
      await daiya.say_and_wait('えへへ、ダイヤは幸せ者ですわ！');
      await era.printAndWait(
        '言い終えると、サトノダイヤモンドは晴れやかに微笑んだ。',
      );
      await era.printAndWait(
        'それはどんな宝石よりも、ダイヤよりも輝いていた──サトノダイヤモンドの光。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = '憧れと共に';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, mcqueen, tenn_sho, japa_cup, arim_kin) => {
      await era.printAndWait([
        tenn_sho,
        '、',
        japa_cup,
        '、そして',
        arim_kin,
        '。',
      ]);
      await era.printAndWait(
        'サトノダイヤモンドはすべて勝ち、『秋のシニア三冠』を達成した！',
      );
      await daiya.say_and_wait(
        '──送信。これで、お返事はすべて済みましたわね。',
      );
      era.printButton('「盛大なイベントになりそうだな」', 1);
      await era.input();
      await era.printAndWait(
        'サトノグループ関連の施設で、サトノダイヤモンドの『秋のシニア三冠記念』が開かれるらしい。',
      );
      await daiya.say_and_wait(
        'はい。私の『秋のシニア三冠』記念……全力でお手伝いすると、先ほどお返事したところですわ。',
      );
      await daiya.say_and_wait(
        '今日にもカフェで『秋のシニア三冠サンデー』が出るはずですわ。ご挨拶に伺おうと思っておりまして。',
      );
      await daiya.say_and_wait(
        'トレーナー、お時間がありましたら、ご一緒されませんか？',
      );
      era.printButton('「一緒に行こう！」', 1);
      await era.input();
      await daiya.say_and_wait('えへへ、よかったですわ♪ では参りましょう。');
      await mcqueen.say_and_wait('あら、ダイヤ。ちょうどお探しでしたの。');
      await daiya.say_and_wait('マックイーン！ 私に御用でしょうか？');
      await mcqueen.say_and_wait(
        'ええ、お祝いをと思いまして……お忙しいところでしたか？',
      );
      await daiya.say_and_wait(
        '実は今、サトノグループのカフェへ向かうところでして……',
      );
      await daiya.say_and_wait(
        'あ！ よろしければマックイーンも、『秋のシニア三冠サンデー』を召し上がりませんか？',
      );
      await mcqueen.say_and_wait('サンデー！？');
      await daiya.say_and_wait(
        'はい、『秋のシニア三冠』達成の限定サンデーが出ますので、ご挨拶がてら試食に伺うのです。',
      );
      await mcqueen.say_and_wait(
        '限定……！ そ、そうでしたの。せっかくですし、ご一緒いたしますわ。',
      );
      await mcqueen.say_and_wait(
        '改めて……お二人、そして『秋のシニア三冠』達成、おめでとうございます。',
      );
      await mcqueen.say_and_wait(
        '私とテイオー、それにキタサンを破って得た『秋のシニア三冠』ですわ。',
      );
      await mcqueen.say_and_wait(
        `ダイヤ個人の功績であるだけでなく、サトノ家が${daiya.uma_sex_title}界に残した輝かしい成績でもあります。`,
      );
      await mcqueen.say_and_wait('……本当によく頑張りましたわね、ダイヤ。');
      await daiya.say_and_wait('……！ あ……ありがとうございます！！');
      await mcqueen.say_and_wait(
        'ふふ、先輩面でお祝いしておりますが、立場は同じですわ。',
      );
      await mcqueen.say_and_wait(
        `私たちは互いのライバルであり、同じく家名を背負う${daiya.uma_sex_title}。これからも切磋琢磨いたしましょう。`,
      );
      await daiya.say_and_wait('はい！ 精進を続けますわ！');
      await daiya.say_and_wait(
        'まだマックイーンから学ぶことはたくさんございますが……',
      );
      await daiya.say_and_wait('自分でも試し、探り続けねばなりませんわね。');
      await daiya.say_and_wait(
        'サトノ家の代表である自覚も、胸に深く刻みますわ！',
      );
      await mcqueen.say_and_wait(
        'ええ。でも、悩みがありましたらご相談なさい。同じ学園の者同士ですもの。',
      );
      await daiya.say_and_wait('わ……マックイーン……！');
      await daiya.say_and_wait(
        '本当に素晴らしい方ですわ……私の、永遠の憧れ……！',
      );
      await mcqueen.say_and_wait(
        'ふふ、光栄ですわ。ですがこれから、ダイヤに憧れる人も現れるでしょう。',
      );
      await mcqueen.say_and_wait('次は、あなたが良い先輩になる番ですわ。');
      await daiya.say_and_wait(
        'はい。マックイーンが私を助けてくださったように、誰かの力になれたら……',
      );
      await mcqueen.say_and_wait('大丈夫ですわ。そうですわね？ トレーナー。');
      era.printButton('「ああ！ 大丈夫だ！」', 1);
      await era.input();
      await daiya.say_and_wait(
        'お二人とも……ありがとうございます！ えへへ、嬉しいですわ……♪',
      );
      await daiya.say_and_wait(
        'あ、サンデーが溶け始めておりますわ！ いただきましょう！ マックイーンも、どうぞごゆっくり。',
      );
      await era.printAndWait(
        'メジロマックイーンの言葉は、サトノダイヤモンドにとって何より嬉しい祝賀だった！',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_sos: (() => {
    const title = 'しゃっくりSOS';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `放課後、${you.name} はメジロマックイーンへ駆け寄るサトノダイヤモンドを見た。`,
      );
      await mcqueen.say_and_wait('……ひくっ！');
      await daiya.say_and_wait(
        'マックイーン、こちらを。これで止まるかもしれませんわ！',
      );
      await mcqueen.say_and_wait(
        'あら、ありがとうございます。では、いただきますわ。',
      );
      await mcqueen.say_and_wait('……ひくっ！');
      await mcqueen.say_and_wait(
        '止まりませんわね……このあと、会合でご挨拶があるのですけれど。',
      );
      await mcqueen.say_and_wait(
        '今この瞬間も、時間が過ぎていきますわ……どうしたものか……！',
      );
      await daiya.say_and_wait('マックイーン……');
      await daiya.say_and_wait(
        '……あの、パーティーまでのお時間、私にいただけますか？ 別の方法を試したいのです！',
      );
      await daiya.say_and_wait(
        '……あ、トレーナー！ 申し訳ありません、お願いがございます！',
      );
      await daiya.say_and_wait(
        '学園内放送で、屋上への立ち入りを禁止してくださいまし！',
      );
      era.printButton('「何をするつもりだ？」', 1);
      await era.input();
      await daiya.say_and_wait('今は説明する時間が……お願いします！');
      await mcqueen.say_and_wait('な、なんだか大ごとになってきましたわ……');
      await era.printAndWait(
        `${daiya.sex}に頼まれ、${you.name} は仕方なく放送した。${daiya.sex}はこれから、何をするつもりだろう……？`,
      );
      await mcqueen.say_and_wait('…………ひくっ。会合の時間、もうすぐですわ……');
      await daiya.say_and_wait('もう少しだけ……あ、来ましたわ！');
      await you.say_and_wait('プロペラの音……！', true);
      await era.printAndWait(
        '医療スタッフ「HQ！ HQ！ トレセン学園に到着！ これよりお嬢様の同級生の支援に入ります！」',
      );
      await mcqueen.say_and_wait('へ、ヘリコプター！？ これはどういう……！？');
      await daiya.say_and_wait(
        'グループのプライベート医療チームを呼びましたわ。',
      );
      await you.say_and_wait('医療機器の音……！', true);
      await daiya.say_and_wait(
        'ICUなど最新の医療設備を積んだ、移動式の集中治療ユニットですわ！',
      );
      await mcqueen.say_and_wait('それはやりすぎでは！？');
      await daiya.say_and_wait(
        'さあ、中へお入りくださいまし！ これでしゃっくりは止まるはずですわ。',
      );
      await mcqueen.say_and_wait('む、無茶ですわ～！？');
      await mcqueen.say_and_wait(
        '……あれ、あら？ あまりに衝撃的で、しゃっくりが止まったようですわ。',
      );
      await daiya.say_and_wait(
        'あっ？ 本当ですの？ つまり、しゃっくりに勝った、ということですわね！',
      );
      await mcqueen.say_and_wait(
        'もう、こんなに驚かさないでくださいまし。でも……ありがとう、ダイヤ。',
      );
      await daiya.say_and_wait(
        'いいえ、こんなこと何でもありませんわ！ 少しでもお役に立てれば……嬉しいですわ！',
      );
      era.printButton('「よくここまで動員したな、お疲れ！」（スタミナ+20）', 1);
      era.printButton('「想像を超えた規模だ……」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('えへへ、マックイーンのお手伝いですもの♪');
        await daiya.say_and_wait(
          'また何かございましたら仰ってくださいまし！ 必ず全力でお手伝いしますわ！',
        );
        await mcqueen.say_and_wait(
          'は、はい……そのときは、常識の範囲でお願いしますわ……',
        );
        await daiya.say_and_wait('ふふふ、はい！');
        await era.printAndWait(
          'サトノダイヤモンドの本気の姿は、普段よりいっそう頼もしく見えた。',
        );
      } else {
        await daiya.say_and_wait(
          'なるほど、もう少し控えめにしたほうがよろしいのですね。',
        );
        await daiya.say_and_wait(
          'あ、そうですわ……！ プライベートジェットでマックイーンを病院へお連れすべきでしたわ！',
        );
        await mcqueen.say_and_wait('……そ、そういうことでしたの……');
        await era.printAndWait(
          `常識の外で考えるサトノダイヤモンドに、${you.name} はただ驚いた。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweepy5: (() => {
    const title = 'スイーピー5☆入団テスト！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} sweepy スイープトウショウ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, tachyon, sweepy, kita, you) => {
      await era.printAndWait(
        `それは ${you.name} とサトノダイヤモンドが廊下を歩いているときに起きた。`,
      );
      await sweepy.print_and_wait('？？？「見つけた──────！！！！」');
      await sweepy.say_and_wait(
        'ダイヤ！ 今日からあなたを『魔法少女・ダイヤ』に任命するわ！',
      );
      await daiya.say_and_wait('えっ？ 『魔法少女・ダイヤ』……ですの？');
      await kita.say_and_wait(
        '『魔法少女☆Sweepy5』。魔法少女・キタサン、登場！ へへ♪',
      );
      await daiya.say_and_wait('わあ、キタちゃんまでそれを！？');
      await kita.say_and_wait(
        'へへ♪ スイープが作った団体で、『魔法少女☆Sweepy5』っていうの。',
      );
      await kita.say_and_wait(
        'アタシもさっき、魔法少女・キタサンに任命されたばっかり！',
      );
      await kita.say_and_wait('で、ダイヤも一緒に入ってくれたらなって……どう？');
      await sweepy.say_and_wait(
        '団員は私──天才魔法少女Sweepyと魔法少女・キタサン、それにタキオン博士よ。',
      );
      await daiya.say_and_wait(
        'あら、皆で魔法をするのですか？ それとも何かの遊びですの？ 面白そうですわ♪ ぜひ参加させてくださいまし！',
      );
      await sweepy.say_and_wait(
        '本当！？ よかった♪ じゃあ早速、魔法の練習よ！ えーっと──',
      );
      await sweepy.say_and_wait(
        '──あ！ あそこのやつ！ あの敵を倒してみなさい！',
      );
      era.printButton('「えっ！？」', 1);
      await era.input();
      await sweepy.say_and_wait(
        '敵はいつ現れるかわからないもの。しっかり練習しないと！',
      );
      await daiya.say_and_wait(
        `トレーナーを倒す……？ でも、どうやって${you.sex}を倒せばよろしいのでしょう？`,
      );
      await you.say_and_wait('倒される前提なのか……', true);
      await sweepy.say_and_wait(
        'それは教えてあげる♪ よく見て。こうやって呪文を唱えるの──',
      );
      await tachyon.print_and_wait(
        '？？？「……ふふふ、敵を倒す手段は魔法だけではないよ。」',
      );
      await tachyon.say_and_wait(
        '薬物で己を強化して敵を倒す方法もある。そちらを選ぶなら、私が手伝おう。',
      );
      await sweepy.say_and_wait(
        'ちょっと、今は私の見せ場よ！！ ダイヤ、タキオンに教わるより私に教わりたいわよね！？',
      );
      await daiya.say_and_wait(
        'ふふ、どちらも面白そうですわ♪ ところでトレーナーは、どちらに教わるのがよろしいと思われます？',
      );
      era.printButton('「スイープトウショウに教わろう」（スピード+20）', 1);
      era.printButton('「アグネスタキオンに手伝ってもらおう」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sweepy.say_and_wait(
          'ふんふん～、言わずもがなね！ じゃあ魔法の見本を見せてあげる♪ いくわよ──',
        );
        await sweepy.say_and_wait(
          'ラブラブ・ラブフラワー☆星の光よ降りなさい！',
        );
        await era.printAndWait(
          '……何も起きなかった。だが構えは十分で、自称魔法少女らしい。',
        );
        await sweepy.say_and_wait(
          'ふふ、覚えた？ 自分らしい呪文を唱えればいいのよ♪',
        );
        await daiya.say_and_wait(
          'なるほど、自分らしい呪文……よし、試してみますわ！',
        );
        await kita.say_and_wait('頑張れ！ ダイヤなら大丈夫だよ！');
        await daiya.say_and_wait('ご覧あれ、眩いダイヤの輝き！ 静謐なる光──！');
        await era.printAndWait(
          `その瞬間 ${you.name} は本当に──眩い光を見た気がして、倒れることにした。`,
        );
        await sweepy.say_and_wait(
          'わあ、本当にキラキラして見えた……！ ダイヤ、やるじゃない♪',
        );
        await sweepy.say_and_wait(
          '魔法少女・ダイヤ！ 正式に入団を許可するわ！ 今日からあなたは『魔法少女☆Sweepy5』の団員よ♪ わかった？',
        );
        await daiya.say_and_wait(
          'はい！ 魔法少女・ダイヤ、これからもっと輝きますわ！',
        );
        await era.printAndWait(
          `魔法のことはよくわからないが、同年代の生徒たちが楽しそうなのを見て、${you.name} もつい嬉しくなった。`,
        );
      } else {
        await tachyon.say_and_wait(
          'ふふふ、いい選択だ！ ではダイヤ、まず薬物で身体を強化する。一気に飲みなさい。',
        );
        await era.printAndWait(
          `アグネスタキオンが怪しい色の薬を取り出そうとした……${you.name} は危険を感じる。`,
        );
        await kita.say_and_wait('すごい色……ダイヤ、本当に飲むの？');
        era.printButton('「やめよう！」', 1);
        await era.input();
        await tachyon.say_and_wait('ええー！ なんだ、今更やめるのか？');
        await daiya.say_and_wait(
          'いいえ、一度決めたら覆しませんわ。トレーナーでも、私の決意は変えられません！',
        );
        await you.say_and_wait('でも——');
        await daiya.say_and_wait('サトノダイヤモンド、一気にいただきますわ！');
        await era.printAndWait(
          `${daiya.sex}はアグネスタキオンから薬を受け取り、一気に飲み込んだ。`,
        );
        await daiya.say_and_wait('うん──食べたことのない味ですわ！ 面白い！');
        await tachyon.say_and_wait(
          'おお──！ 血行促進のためにカプサイシンをたっぷり入れたのに、何も感じないのか！',
        );
        await tachyon.say_and_wait(
          'ふふふ……やるな君は！ よし、そのままで走ってみなさい！',
        );
        await you.say_and_wait('カプサイシン……！？', true);
        await sweepy.say_and_wait(
          'あ、あんたやるわね……！ 魔法少女・ダイヤ！ 今日から正式に『魔法少女☆Sweepy5』の団員よ♪',
        );
        await era.printAndWait(
          `スイープトウショウたちが去ったあと、${you.name} はサトノダイヤモンドのそばへ行った……さっきカプサイシンを飲んだことが気になる。`,
        );
        era.printButton('「今の……辛くなかったか？」', 1);
        await era.input();
        await daiya.say_and_wait('……気づかれましたの？');
        await daiya.say_and_wait(
          'ふふ、実は舌がとてもヒリヒリしておりましたけれど、皆の前で顔をしかめるわけにもいきませんもの♪',
        );
        await era.printAndWait(
          `${daiya.sex}はこっそり本音を教えてくれた。強がっていたのだ。年相応の仕草に、${you.name} は思わず微笑んだ。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_high_dream: (() => {
    const title = '大きすぎる志';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, you) => {
      await era.printAndWait(
        `${you.name} がサトノダイヤモンドと歩いていると、真剣な顔のゴールドシップが見えた。`,
      );
      await gs.say_and_wait('だいたいこの大きさか？ いや、もっと入るように……');
      await daiya.say_and_wait('ゴルシ、何か考えていらっしゃいますの？');
      await gs.say_and_wait('ダイヤか……よし、教えてやる。ついてこい。');
      await gs.say_and_wait('おい、このプール見て、どう思う？');
      await daiya.say_and_wait('そうですね……普段の調教でよく使いますわ？');
      await daiya.say_and_wait(
        'あとは……うーん、もう少し広ければ、もっと楽しそうですわ。海外で大きなプールに入ったとき、とても楽しかったのです！',
      );
      await gs.say_and_wait('いいこと言うじゃねえか、ナイス！ 564点やる！');
      await daiya.say_and_wait('わあ、ありがとうございます♪');
      await gs.say_and_wait('このプールの広さ、調教には十分かもしれねえが……');
      await gs.say_and_wait(
        `${daiya.uma_sex_title}の可能性を、アタシはもっと信じてんだ！ 広いプールの解放感が${daiya.uma_sex_title}にどんな新境地をもたらすか、この目で見たいんだよ！`,
      );
      await daiya.say_and_wait(
        `あら！ ゴルシはそんなに……${daiya.uma_sex_title}のことを考えていらっしゃるのですね！`,
      );
      await gs.say_and_wait('ああ、だから決めた……アタシは──');
      await gs.say_and_wait('このプールをオホーツク海にする！');
      await daiya.say_and_wait(
        'オホーツク海！ ……オホーツク海？ つまり、どういうことですの？',
      );
      await gs.say_and_wait(
        'オホーツク海をプールに持ってくるんだよ！ そしたら好きなだけ調教できる！',
      );
      await daiya.say_and_wait(
        'それは壮大な工事ですわね……！ 本当にできるのでしょうか？',
      );
      await gs.say_and_wait(
        'できるだろ！ 全校生徒で五十年、バケツリレーすりゃあできる！',
      );
      era.printButton('「難易度が高すぎる……」', 1);
      await era.input();
      await daiya.say_and_wait(
        'でも、現実面を除けば、とても素晴らしい理想だと思いますわ。',
      );
      await daiya.say_and_wait(
        '……それに、伺っていて、とても楽しみになりましたわ！',
      );
      await gs.say_and_wait('ダイヤ……てめぇはよ！');
      await daiya.say_and_wait('プールを広くすることにも、賛成ですわ。');
      await daiya.say_and_wait(
        'やりましょう、ゴルシ！ 全力でお手伝いいたしますわ！',
      );
      era.printButton('「今の広さで十分だ」（パワー+20）', 1);
      era.printButton('「学園にこの案を伝えよう！」（賢さ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'それはそのとおりですけれど、改造すればもっと良い環境になりますわよ？',
        );
        await you.say_and_wait('貴重な時間が、全部バケツリレーに消えるぞ？');
        await daiya.say_and_wait('あっ……！？ そ、それは……');
        await gs.say_and_wait(
          '困ったなあ……そこまで言われちゃ、無理強いもできねえな。',
        );
        await gs.say_and_wait(
          'だがいつかやる。実行の前には万全の準備をして、牙を研いでおく……大根おろし器でな。',
        );
        await daiya.say_and_wait('……ええ！');
        await era.printAndWait(
          `二人は力強く握手して約束した。実行の日が来たら……そのときは ${you.name} が止めよう。`,
        );
      } else {
        await daiya.say_and_wait('でしたら……企画書を作るべきですわね？');
        await gs.say_and_wait('いい考えだ！ 具体的に書けば説得力が増す！');
        await daiya.say_and_wait('ふふふ、どんどん面白くなってきましたわ♪');
        await daiya.say_and_wait(
          '『トレセン学園のプールをオホーツク海にする計画』、始動ですわ！',
        );
        await era.printAndWait(
          'その後、計画は実現しなかったが、サトノダイヤモンドにとっては良い経験になった！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_chase: (() => {
    const title = '憧れを追いかけて';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(`ある日、${you.name} が広場を歩いていると──`);
      await daiya.say_and_wait('…………');
      era.printButton('「何をしているんだ？」', 1);
      await era.input();
      await daiya.say_and_wait('トレーナー！？');
      await daiya.say_and_wait('しーっ！ 今、マックイーンを調査中ですの……！');
      await mcqueen.say_and_wait('……');
      await mcqueen.say_and_wait(
        '視線を感じますわ？ ……いいえ、気のせいでしょう。',
      );
      await daiya.say_and_wait('……ふう。危ないところでしたわ……！');
      await daiya.say_and_wait(
        'マックイーンの強さの秘密がわかるまで、観察していることを気づかれてはなりませんわ。',
      );
      await you.say_and_wait(`いっそ直接${mcqueen.sex}に聞けばいい`);
      await daiya.say_and_wait('だめですわ！ 自分で調べるほうが面白いのです！');
      await daiya.say_and_wait('……あら？ マックイーンがいませんわ！？');
      await daiya.say_and_wait(
        '少し目を離しただけなのに……どちらへ行かれたのでしょう？',
      );
      era.printButton('「練習室で歌の練習かもな」（根性+20）', 1);
      era.printButton('「食堂で頭を抱えていそうだ」（賢さ+20）', 2);
      era.printButton(
        `「${mcqueen.sex}なら、きっと調教コースで鍛えている！」（パワー+20）`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait('わかりました、行ってみましょう！');
          await daiya.say_and_wait(
            '練習室は何部屋もありますわね。どこから探せば──',
          );
          await mcqueen.print_and_wait('？？？「うおー、燃えろー！」');
          await daiya.say_and_wait('歌声……この部屋からですわ。');
          await mcqueen.say_and_wait('夢を乗せて、ああ──私たちの～勝利……♪');
          await daiya.say_and_wait(
            'わあ～！ 透明感があって、力強い歌声……素敵ですわ♪',
          );
          await mcqueen.say_and_wait(
            'ダイヤ！？ えっ？ あの、どうしてここに……？',
          );
          await mcqueen.say_and_wait(
            'もしかして……防音だからと、つい大きな声で……！',
          );
          await daiya.say_and_wait(
            'ふふ、おかげで見つけられましたわ！ マックイーンの秘密。',
          );
          await mcqueen.say_and_wait(
            'ひ、秘密！？ 意味がわかりませんわ。た、ただ気分転換に歌っていただけで……！',
          );
          await daiya.say_and_wait(
            '……いいえ、もうすべてわかりました。マックイーン、あなたは実は──',
          );
          await daiya.say_and_wait(
            '歌声で自分を鼓舞し、パフォーマンスを高めているのですわね！',
          );
          await mcqueen.say_and_wait(
            '……えっ？ あ、ああ……そういうことですわね？ お、おほほほ～',
          );
          await daiya.say_and_wait(
            'あの……私にも教えてくださいまし。今の、聴いていると胸が高鳴る歌を……！',
          );
          await mcqueen.say_and_wait(
            '胸が高鳴る……？ つまり……気に入っていただけたのですか？',
          );
          await daiya.say_and_wait(
            'はい。旋律がとても情熱的で、いつの間にか楽しくなって──',
          );
          await daiya.say_and_wait(
            'この歌に込められた想いを、もっと知りたいですわ！',
          );
          await mcqueen.say_and_wait('……！');
          await mcqueen.say_and_wait(
            '……先に二つ、申し上げます。一つ、今日のことは誰にも言わないこと。',
          );
          await mcqueen.say_and_wait('二つ──私の指導は、甘くありませんわよ。');
          await daiya.say_and_wait('……！ 承知いたしました！');
          await mcqueen.say_and_wait(
            'さあ、胸を張って！ 空に響く声量で……さん、はい。',
          );
          await daiya.say_and_wait('燃えろー！');
          await era.printAndWait(
            'サトノダイヤモンドは限界の声量で歌い、超熱血ソングを身につけた。',
          );
          break;
        case 2:
          await daiya.say_and_wait(
            'ふふふ、そのお姿、つい想像してしまいましたわ。では参りましょう。',
          );
          await mcqueen.say_and_wait(
            'パンケーキ、フルーツタルト……大学芋に杏仁豆腐……！',
          );
          await mcqueen.say_and_wait(
            'どれも魅力的ですわ……でもカロリー過多は避けねば！ 考えなさい……よく考えなさい……！',
          );
          await daiya.say_and_wait(
            'マックイーンがデザート選びに、ここまで真剣だなんて……！',
          );
          await daiya.say_and_wait(
            '……わかった気がしますわ。マックイーンの強さの秘密。',
          );
          await daiya.say_and_wait(
            '日常の些細なことまで真剣に考え、一歩一歩を慎重に踏むこと……大切なのですわね！',
          );
          await daiya.say_and_wait('マックイーン！');
          await mcqueen.say_and_wait(
            'きゃっ！ ダ、ダイヤ……！？ もしかして……全部、見て……！？',
          );
          await daiya.say_and_wait(
            'はい、とても真剣なお顔を拝見しました……かっこよかったですわ、マックイーン！',
          );
          await mcqueen.say_and_wait(
            'そ、そう言われると……嬉しいのか恥ずかしいのか……！',
          );
          await daiya.say_and_wait(
            '私もマックイーンのように、慎重にデザートを選びますわ。',
          );
          await daiya.say_and_wait('うーん、どれにいたしましょう……あら？');
          await daiya.say_and_wait(
            'いま開催中……『珍奇デザート展』ですわ！ では、そちらにしますわ♪',
          );
          await mcqueen.say_and_wait(
            '『イカのチーズケーキ』、『プリン寿司』……これは何のメニューですの！？',
          );
          await mcqueen.say_and_wait(
            'あの、ダイヤ……今、慎重に選ぶと仰いませんでしたか？',
          );
          await daiya.say_and_wait(
            'ええ！ この神秘的で奇妙なデザートたち……選んで食べる価値があると思いませんこと♪',
          );
          await mcqueen.say_and_wait(
            '……！ 立派な探究心ですわ……！ デザートとの正面対決、ですのね？',
          );
          await mcqueen.say_and_wait(
            '……私も挑みますわ！ 『珍奇デザート展』に！',
          );
          await daiya.say_and_wait(
            'マックイーン……！ 一緒にデザートの新境地を拓きましょう。',
          );
          await daiya.say_and_wait(
            'では……あの『きのこモンブラン』はいかがでしょう？',
          );
          await mcqueen.say_and_wait(
            '……あの、ダイヤ。もう少し考えてもよろしいかしら？',
          );
          await era.printAndWait(
            '二人は苦慮の末に選び、おいしいデザートを味わった！',
          );
          break;
        case 3:
          await daiya.say_and_wait(
            '秘密特訓の定番ですわね。見に参りましょう……！',
          );
          await mcqueen.say_and_wait(
            'あの……コースの真ん中で、何をなさっているのです？',
          );
          await gs.say_and_wait('関所の役だよ。通したきゃ笑わせろ。');
          await mcqueen.say_and_wait(
            '他の方の邪魔ですわ。どいてください、ゴルシ。',
          );
          await gs.say_and_wait('……ん？今の芸、どこが面白いんだ？');
          await mcqueen.say_and_wait('芸ではありませんわ！ もう、力ずくで……！');
          await mcqueen.say_and_wait('せーの──っ！！');
          await gs.say_and_wait('おわ！？ 押し返せねえ……！？');
          await gs.say_and_wait(
            'そのまま行っちまった……力、ありすぎだろ。あいつ、只者じゃねえ。',
          );
          await daiya.say_and_wait(
            'あの、今のは何をなさっていたのですか？ 相撲のように見えましたけれど……',
          );
          await gs.say_and_wait(
            'そのとおり、見せ場に出くわしたな。アタシは完全に歯が立たなかった。',
          );
          await daiya.say_and_wait(
            'つまりマックイーンの強さの理由は、非常にしっかりした腰と脚……！？',
          );
          await daiya.say_and_wait(
            '……ゴルシ。私とも相撲をしていただけますか……お願いします！',
          );
          await gs.say_and_wait('ふー……まだ早いな。先にボケ方を覚えろ。');
          await daiya.say_and_wait('ボケ、ですの……？');
          await mcqueen.say_and_wait('……ふう、成績が伸びませんわね。');
          await mcqueen.say_and_wait(
            'さっき力を使いすぎたのかしら。ゴルシ……また誰かに迷惑をかけていなければよいのですが。',
          );
          await mcqueen.say_and_wait('……あら？ あれは？');
          await gs.say_and_wait('きんきん、きんきん──');
          await gs.say_and_wait('ヒラメキン！！');
          await daiya.say_and_wait('ヒラメ筋！');
          await gs.say_and_wait(
            'だめ、だめ！ 腰が全く入ってねえ！ マックイーンのほうがよっぽど真剣だぞ！',
          );
          await daiya.say_and_wait('……はい！！');
          await mcqueen.say_and_wait(
            '私がそんなことをした覚えはありませんわ！',
          );
          await daiya.say_and_wait('マックイーン！？');
          await daiya.say_and_wait(
            'えっと、これはどういう……あら、ゴルシがいませんわ？',
          );
          await era.printAndWait(
            'サトノダイヤモンドは奇妙なボケ特訓のおかげで、思いがけず筋肉を鍛えられた！',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_diamond_cotton: (() => {
    const title = '剛なるダイヤは真綿の中に';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await era.printAndWait('今日は勝負服の撮影を含む取材日だ。');
      await era.printAndWait(
        `${you.name} とサトノダイヤモンドは少し早めにスタジオへ向かった。いま──`,
      );
      await daiya.say_and_wait('ふん、ふん、ふん～♪');
      await era.printAndWait(
        `勝負服に着替えた${daiya.sex}はカメラの前で動き、ポーズを取り、ときどき画面で仕上がりを確認している。`,
      );
      era.printButton('「真剣に確認しているな」', 1);
      await era.input();
      await daiya.say_and_wait(
        'ええ、伝えたい感覚がきちんと出ているか、確認しておりますの。',
      );
      await you.say_and_wait('伝えたい感覚？');
      await daiya.say_and_wait(
        'はい、この勝負服は、日頃大切にしている想いを題材にデザインされていますわ。',
      );
      await daiya.say_and_wait(
        '取材をご覧になる方に、その想いを感じていただきたいのです。',
      );
      await era.printAndWait(
        `そう言われてみると、${daiya.sex}の勝負服には、特に印象に残る部分がある。`,
      );
      era.printButton('「ダイヤの飾りがいちばん印象的だ」（根性+20）', 1);
      era.printButton('「フリルがいちばん印象的だ」（スタミナ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('はい、そのとおりですわ！');
        await daiya.say_and_wait(
          'もちろん名前にも関わりますが、同時に、意志の堅さを表してもおりますの。',
        );
        await daiya.say_and_wait('たとえば、鍾乳石ですわ。');
        await daiya.say_and_wait(
          '雨が大地に降り、石灰岩を含んだ水が落ちて生まれるものです。',
        );
        await daiya.say_and_wait(
          '何万年、何十万年と、同じ場所に積み重なって、硬く大きくなる。',
        );
        await daiya.say_and_wait(
          `${daiya.uma_sex_title}の強さは、それに近いと思いますわ。`,
        );
        await daiya.say_and_wait('──言い換えれば、貫き通すことですわ。');
        await daiya.say_and_wait(
          '目標を定め、進み続ける。その努力が勝利を連れてくると、信じております。',
        );
        await era.printAndWait(
          `${daiya.sex}がそう語る瞳には、ダイヤの飾りと同じ、強い信念と意志が浮かんでいた。`,
        );
      } else {
        await daiya.say_and_wait('あら、そこにお気づきでしたの！');
        await daiya.say_and_wait(
          'フリルがかわいくて好き、というのもありますが、いちばんはあの柔らかさですわ。',
        );
        await daiya.say_and_wait(
          '目標が高く遠いほど、進む途中で苦難は増えます。',
        );
        await daiya.say_and_wait(
          '一つ一つの困難に力でぶつかっていたら、どんな硬い宝石にもひびが入りますわ。',
        );
        await daiya.say_and_wait(
          'ですから──ときには柔で剛を制することも大切ですわ。',
        );
        await daiya.say_and_wait(
          'そうすれば無駄な気兼ねを減らし、進むべき方向に集中できると信じております。',
        );
        await era.printAndWait(
          `${daiya.sex}がそう語る瞳には、フリルへの想いと同じ、優しい光が浮かんでいた。`,
        );
        await era.printAndWait(
          `そのあともしばらく話し込み、本撮影まではまだ時間がある。`,
        );
        era.printButton('「何か飲みながら待とう」', 1);
        await era.input();
        await daiya.say_and_wait(
          'よろしいですわね！ では一緒にお茶をいただきましょう！',
        );
        await daiya.say_and_wait('ところでお茶……どこで買えますの？');
        era.printButton('「廊下に自販機があったはずだ──」', 1);
        await era.input();
        await daiya.say_and_wait(
          '自動販売機！ さっき見かけたとき、普通の機種と違うのに気づいて、気になっておりましたの！',
        );
        await daiya.say_and_wait(
          'トレーナー、それは私にお任せください。自販機でお茶を買って参りますわ。',
        );
        await era.printAndWait(
          `${you.name} は意気込むサトノダイヤモンドを見送った……さっきの『普通と違う』という言葉が、気になり始める。`,
        );
        await era.printAndWait(
          `ついて行ったほうがよさそうだ。${you.name} が${daiya.sex}を追いかけようとしたとき──`,
        );
        await daiya.say_and_wait(
          '……あら、缶もペットボトルもありませんわね。このパネルは？ 押せばよろしいのかしら？ それともこちらのボタン……？',
        );
        await era.printAndWait('カシャン、カシャン——');
        await daiya.say_and_wait('あら！ 出てきたのはカップですわ！');
        await era.printAndWait('シャァァァァ！');
        await daiya.say_and_wait(
          'わあ、氷が落ちてきましたわ！？ お茶を入れる気配がありませんわ。止めたほうがよろしいのかしら？',
        );
        era.printButton('「今すぐ行く、その場で動かないでくれ！」', 1);
        await era.input();
        await era.printAndWait(
          `${daiya.sex}には非常に落ち着いた頼もしい面と、その反対もある。今回、${you.name} は改めて、これからも${daiya.sex}をしっかり見守ると決めた。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_high_place: (() => {
    const title = '憧れの人が待つ高みへ';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(
        `休日、${you.name} はカフェでサトノダイヤモンドとメジロマックイーンの姿を見た。`,
      );
      await daiya.say_and_wait('あ、トレーナー！ こんにちは！');
      await daiya.say_and_wait(
        'ふふ、今日はマックイーンが、おすすめのカフェへ連れてきてくださったのです！',
      );
      await mcqueen.say_and_wait(
        'お好きなものを、どうぞ。ここのメニューは、何を頼んでも失望いたしませんわ。',
      );
      await daiya.say_and_wait('ありがとうございます！ 拝見しますわ……！');
      await daiya.say_and_wait(
        '素晴らしい……！ こちらのお店、デザートが全部で129種類も……！',
      );
      await daiya.say_and_wait(
        '……えっ？ 『全品制覇したお客様には特別な栄誉が……！？』これは……どういうことですの？',
      );
      await mcqueen.say_and_wait(
        'こ、これは……私も噂で聞いただけですが、全品を食べた方には『マスター』の称号が贈られるそうですわ。',
      );
      await mcqueen.say_and_wait('今まで、その称号を得た方はいないと……');
      await gs.say_and_wait('そうだ──（減量中の）マックイーン以外はな。');
      await mcqueen.say_and_wait('なぜご存じですの！？ それに、なぜここに！？');
      await daiya.say_and_wait(
        'マックイーンだけが得た称号……それは興味が尽きませんわ！',
      );
      await daiya.say_and_wait(
        '挑戦してみたいですわ！ まずはメニュー左側の二十品から！',
      );
      era.printButton('「カロリーが必要以上だ」（体力+100）', 1);
      era.printButton('「挑戦してみるか」（体力+300、体重増加）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'それはそのとおりですけれど……うーん、だめですの……？',
        );
        await mcqueen.say_and_wait(
          '賢明な判断ですわ。私は十日かけて必死に完走し、体重が──',
        );
        await mcqueen.say_and_wait(
          'こほん。美食は適量でこそ。さあ、改めて食べたいものを選びましょう──',
        );
        await gs.say_and_wait(
          'アタシのおすすめはカツ丼に漬物キュウリ、それにアサリ汁だぜ。',
        );
        await daiya.say_and_wait('そうでしたら……そちらを──');
        await mcqueen.say_and_wait(
          'そんなメニューはございませんわ！ ゴルシは早くお帰りなさい！',
        );
        await era.printAndWait(
          'その後、サトノダイヤモンドはメジロマックイーンおすすめのデザートを頼んだ……カロリーを考えての選択である。',
        );
      } else {
        await daiya.say_and_wait('はい！ 必ずマックイーンに追いつきますわ！');
        await daiya.say_and_wait(
          'うぅ……も、もうだめですわ……全身からデザートの甘さが出てくる気が……',
        );
        await daiya.say_and_wait(
          'まだ、マックイーンの境地には届きませんでしたわ……',
        );
        await mcqueen.say_and_wait(
          '当然ですわ。私も十日かけて完走したのですもの。一度に二十品など……',
        );
        await gs.say_and_wait(
          'いやいや、十分立派だろ。いいじゃねえかマックイーン、後継者ができたな。',
        );
        await mcqueen.say_and_wait(
          '何の後継者ですの！？ はあ、私の過ちで後輩まで巻き込むとは……！',
        );
        await era.printAndWait(
          `サトノダイヤモンドは膨大なカロリーを摂取した。${daiya.sex}はこのまま二代目『マスター』になるのか……！？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_fresh: (() => {
    const title = 'フレッシュ！';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait(
        'サトノダイヤモンドと外出していると、八百屋の店主と話すキタサンブラックが見えた。',
      );
      await daiya.say_and_wait(
        'あれ？ キタちゃん、どうかなさいましたの？ 悩んでいらっしゃるお顔……',
      );
      await kita.say_and_wait('あ、ダイヤ。八百屋のおじさんが困ってて……');
      await era.printAndWait(
        '八百屋のおじさん「いやー、今日は野菜がたくさん余っちまって……客足も全然だ。」',
      );
      await era.printAndWait(
        '八百屋のおじさん「安いよ、安いよ～。新鮮でおいしい野菜だよ……」',
      );
      era.printButton('「…………本当に誰も来ないな」', 1);
      await era.input();
      await era.printAndWait(
        '八百屋のおじさん「だろ？ 応援してる野球チームが負けると、毎回こうなんだ。本当に嫌な呪いだよ……」',
      );
      await kita.say_and_wait('おじさん、この呪いに何度もやられてるんだって。');
      await daiya.say_and_wait('……っ！');
      await daiya.say_and_wait(
        'おじさん、呪いは破れますわ！ 諦めず、呪いに立ち向かいましょう！',
      );
      await daiya.say_and_wait(
        'たとえば……残った野菜を、私が全部買うというのはいかがでしょう？',
      );
      era.printButton('「それはちょっと……」', 1);
      await era.input();
      await kita.say_and_wait(
        'じゃあ別のやり方で……！ アタシも困ってる人を助けたい！',
      );
      await kita.say_and_wait('……そうだ！ 一緒に売らせて！');
      await daiya.say_and_wait('私も！ 一緒に呪いを破りましょう！');
      await kita.say_and_wait('商店街の皆さん！');
      await kita.say_and_wait('野菜、いかがですか──！');
      await era.printAndWait('通行人「どうしたどうした！？」');
      await era.printAndWait(
        'キタサンブラックの大きな呼び込みが商店街に響き、通りかかる人の足が止まった。',
      );
      await daiya.say_and_wait(
        'みずみずしいトマトに、つややかなナス！ 夕飯の食材はいかがですの～？',
      );
      await era.printAndWait(
        '主婦「あら、元気のいい声ね～。ちょっと見ていこうかしら。」',
      );
      await daiya.say_and_wait(
        'どれもおすすめですわ♪ どうぞご覧くださいまし。',
      );
      await kita.say_and_wait('へへへ、いい感じ！ 効果抜群だ！');
      await daiya.say_and_wait('キタちゃんの力強いお声のおかげですわ♪');
      await kita.say_and_wait(
        'ダイヤの接客もいいよ！ 普段から礼儀正しいのが活きてるね！',
      );
      await era.printAndWait('人だかりができ、盛況だった……');
      await era.printAndWait(
        '八百屋のおじさん「これは……！ 応援してるチームが負けたあとで、こんなに売れたのは初めてだ！」',
      );
      await daiya.say_and_wait(
        'ふふふ、特別なことはしておりませんわ。おじさんも普段どおり元気なら、私たちがいなくてもよく売れるはずですもの。',
      );
      await kita.say_and_wait(
        'あ、確かに！ おじさんの今日の呼び込み、いつもの元気がなかったかも！',
      );
      await era.printAndWait(
        '八百屋のおじさん「ああ、そうだな……！ 言われてみりゃ、落ち込みで沈んでた。」',
      );
      await daiya.say_and_wait(
        '『呪いに負けない！』『気にせず、楽しく過ごす！』。',
      );
      await daiya.say_and_wait(
        'その気持ちで呼び込めば、呪いはすぐに破れるはずですわ♪',
      );
      era.printButton(
        '「いつでも前向きでいるのがいちばんだ！」（スピード+20）',
        1,
      );
      era.printButton('「どんな呪いでも破れるのか？」（スタミナ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('ふふ、そのとおりですわ！');
        await daiya.say_and_wait(
          'そうですわ。他にも呪いに悩む方を探しましょうか？ お役に立てるかもしれませんわ！',
        );
        await kita.say_and_wait(
          'アタシも、アタシも！ 商店街の他の人にも聞いてみよう！',
        );
        await era.printAndWait(`三人は商店街を歩き、未知の呪いを探した！`);
      } else {
        await daiya.say_and_wait(
          'あら、信じていらっしゃいませんの？ ではもう一つ、呪いを破ってお見せしますわ！',
        );
        await era.printAndWait(
          '八百屋のおじさん「呪いの話なら、まだあるよ！ 『商売がいいときは、キュウリが必ず余る』って呪いだ！」',
        );
        await kita.say_and_wait(
          'じゃあキュウリを食べる利点を宣伝しよう。たとえば……おいしく食べる実演とか？',
        );
        await daiya.say_and_wait(
          'いい案ですわ！ よくいただく三つ星シェフの作法を聞いてみますわ♪',
        );
        await era.printAndWait(
          '実演販売は好評で、サトノダイヤモンドたちはキュウリも売り切った！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_heartbeat_excite: (() => {
    const title = 'ハートビート・エキサイト';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await era.printAndWait(
        '外出中、サトノダイヤモンドは巨大なポスターの前で足を止めた。',
      );
      await daiya.say_and_wait(
        '『遊園地史上最恐のジェットコースター──ヘブン誕生……勇敢なる挑戦者を求む』？',
      );
      await daiya.say_and_wait(
        '高さでしょうか……それとも速さでしょうか？ どんなコースターなのかしら……！',
      );
      await daiya.say_and_wait('遊園地へ行かねばなりませんわ！');
      era.printButton('「えっ！？ 待て……」', 1);
      await era.input();
      await daiya.say_and_wait('さあ、トレーナー。参りましょう♪');
      await daiya.say_and_wait(
        'あ、あれですわ！ 高いところの軌道……伝説の最恐コースター、間違いありませんわ！？',
      );
      await era.printAndWait(
        'それが『ヘブン』……雲を貫くような高さは、名に恥じない規格だった！',
      );
      await era.printAndWait(
        '通行人A「うわ……本当に『ヘブン』へ行ってきた気分だ……！ あんなの、予想外だった……」',
      );
      await era.printAndWait(
        '通行人B「だめだめ、無理……五代前の先祖まで見えた……！」',
      );
      await daiya.say_and_wait(
        'あら、乗った方があんなにおびえて……！ こうなりますと──',
      );
      await daiya.say_and_wait(
        '私も緊張と刺激を感じ始めましたわ！ まったく新しい体験になりそうですわ♪',
      );
      era.printButton('「面白そうではあるが……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は試したい気持ちと怖い気持ちが、せめぎ合っていた……`,
      );
      await daiya.say_and_wait(
        'トレーナー、どうかなさいましたの？ あまり乗りたくない、ですの……？',
      );
      await daiya.say_and_wait('でしたら……乗りたくなるまで、お待ちしますわよ♪');
      await era.printAndWait(
        `とりあえず園内をぶらつき、のんびり過ごすことにした。`,
      );
      await daiya.say_and_wait('もぐもぐ……');
      await daiya.say_and_wait('ごちそうさまでした♪');
      await daiya.say_and_wait('あ、コースター。今、少し列が短いようですわ？');
      era.printButton('「一人で乗ってもいいんだぞ？」', 1);
      await era.input();
      await daiya.say_and_wait(
        'うーん、それは遠慮いたしますわ！ 一人でも楽しいとは思いますけれど……',
      );
      await daiya.say_and_wait(
        '一人分の緊張と刺激では、足りない気がしますの。',
      );
      await daiya.say_and_wait(
        '……思い返せば、トレーナーと本当にいろいろなところへ参りましたわね。',
      );
      await daiya.say_and_wait('未知の世界を覗き、新しいものを見つけ──');
      await daiya.say_and_wait('新しい体験をし、もっと楽しいことを探し……');
      await daiya.say_and_wait(
        '少し思い出しただけで、素敵な思い出がいっぱい……それで、わかりましたわ。',
      );
      await daiya.say_and_wait(
        'トレーナーが傍にいるとき……すべての興奮は倍になりますの！',
      );
      await daiya.say_and_wait(
        'ですから、いつまででも待ちますわ♪ 一緒にその緊張と刺激を味わってくださるまで！',
      );
      era.printButton('「まだ覚悟ができていない……」（スタミナ+20）', 1);
      era.printButton('「よし、乗ろう！」（根性+20）', 2);
      era.printButton('「他の冒険を探さないか？」（賢さ+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait('はい──わかりましたわ♪');
          await era.printAndWait(
            `だが ${you.name} は決心がつかないまま、門限が近づいてしまった……`,
          );
          await daiya.say_and_wait('では……帰りましょう！');
          era.printButton('「いいのか？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '大丈夫ですわ。私、好きなものは最後に残していただく性分なのです。',
          );
          await daiya.say_and_wait(
            'ですから、将来のいつか、一緒に体験しましょうね♪',
          );
          await era.printAndWait(
            `その日が来たら、${you.name} は勇気を出す。${daiya.sex}の笑顔のために、心の中でそう誓った！`,
          );
          break;
        case 2:
          await daiya.say_and_wait(
            'わあ～、そのお言葉をお待ちしておりましたわ！ 行きましょう、行きましょう！',
          );
          await era.printAndWait('ガタンガタンガタンガタン……ヒュー────！');
          await daiya.say_and_wait('きゃああああ──────！');
          era.printButton('「ヘブン────────！！」', 1);
          await era.input();
          await daiya.say_and_wait(
            '本当にすごい体験でしたわ、トレーナー！ さっき、とても綺麗な花畑が見えましたの！',
          );
          await daiya.say_and_wait(
            '……一番前の席では、何が見えるのでしょうね！',
          );
          await era.printAndWait(
            `一番前に乗れるまで並び直し、楽しくて目が回る一日を過ごした！`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            'あら、良い案ですわ！ 実は他のアトラクションも気になっておりましたの♪',
          );
          await daiya.say_and_wait(
            'コーヒーカップに、お化け屋敷……最後の一秒まで遊びましょう！',
          );
          await daiya.say_and_wait(
            'さあ、トレーナー！ 最初はお化け屋敷ですわよ～',
          );
          await daiya.say_and_wait(
            '拝見しますわ──最恐のお化け屋敷……『ヘル』！',
          );
          await era.printAndWait(
            `コースターには乗らなくても、${you.name} はサトノダイヤモンドと楽しい時間を過ごせた！`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_practice: (() => {
    const title = 'ダンスレッスン';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, teio, you) => {
      await era.printAndWait(
        `サトノダイヤモンドに見てほしいと頼まれ、${you.name} は${daiya.sex}のダンス練習に付き合っている。`,
      );
      await daiya.say_and_wait('こうして、それからこう……それからこう──');
      await daiya.say_and_wait(
        '……うーん、何か違いますわ。技の達人がこうは踊りませんわ。',
      );
      await daiya.say_and_wait('もっと気迫を──');
      await daiya.say_and_wait('……わっ！');
      era.printButton('「大丈夫か！？」', 1);
      await era.input();
      await daiya.say_and_wait('大丈夫ですわ、失礼いたしました……');
      await era.printAndWait(
        'なぜかサトノダイヤモンドの踊りは、空回りしているように見えた。',
      );
      era.printButton('「何か悩んでいるのか？」', 1);
      await era.input();
      await daiya.say_and_wait('……');
      await daiya.say_and_wait('実は……キタちゃんは歌がお上手でしょう？');
      await daiya.say_and_wait(
        '私も練習はしておりますが、あれは一朝一夕で届く水準ではございません。',
      );
      await daiya.say_and_wait(
        'ですから、せめてステップでは誇れる水準まで行きたいと思いまして。',
      );
      era.printButton('「基礎から見直してみるか」（スピード+20）', 1);
      era.printButton(
        '「キタサンブラックの曲で踊ってみるか？」（パワー+20）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'ええ、キタちゃんがあれほど歌えるのも、基礎ができているからでしょう。',
        );
        await daiya.say_and_wait(
          '私も基礎のステップからやり直し、少しずつ積み上げれば──',
        );
        await teio.print_and_wait('？？？「なになに？ ステップの話？」');
        await daiya.say_and_wait(
          'わあ、テイオー！？ ……今の話、聞こえていましたの？',
        );
        await teio.say_and_wait('うん、基礎のステップとか言ってたでしょ？');
        await teio.say_and_wait(
          'ふんふん──ステップといえばボクの出番だね！ 教えてあげてもいいよ～？',
        );
        await daiya.say_and_wait(
          '確かにステップといえばテイオーですわ。でもテイオーは、キタちゃんも敬愛していらっしゃる方。',
          true,
        );
        await daiya.say_and_wait(
          '私だけが教えていただくのは、少し申し訳なく……',
          true,
        );
        await daiya.say_and_wait(
          '──いいえ、遠慮している場合ではありませんわ。ダンスを仕上げると決めたのですから！',
          true,
        );
        await daiya.say_and_wait(
          'テイオー、よろしければご指導いただけますか？ ただし──',
        );
        await teio.say_and_wait('ただし？');
        await daiya.say_and_wait(
          '……キタちゃんには内緒にしていただきたいのです。私一人がテイオーを独占したようで、気が引けますので。',
        );
        await teio.say_and_wait(
          'そういうことね！ ダイヤとボクの秘密だね。ひひひ、了解！',
        );
        await era.printAndWait(
          'トウカイテイオーの指導のあと、サトノダイヤモンドの動きは以前より柔らかくなった。',
        );
      } else {
        await daiya.say_and_wait(
          'あら、キタちゃんの曲で踊る……？ それは考えたこともありませんでしたわ！',
        );
        await daiya.say_and_wait(
          'でも、よさそうですわね。キタちゃんの歌声に負けていられない、という気持ちが強まりますもの！',
        );
        await daiya.say_and_wait('では──');
        await daiya.say_and_wait('……！', true);
        await daiya.say_and_wait(
          'キタちゃんの歌声は力強くて、躍動感がある……',
          true,
        );
        await daiya.say_and_wait(
          '私に足りないのは、この力なのかもしれませんわ……！',
          true,
        );
        await daiya.say_and_wait(
          'よし、私ももっと力強く！！ もっと強く、もっと強く──！！',
          true,
        );
        await daiya.say_and_wait(
          'あれ？ 踊れば踊るほど熱くなって……この感じ、楽しいですわ！！',
          true,
        );
        await era.printAndWait(
          'サトノダイヤモンドは独り言を言いながら、しばらく踊り続けた。',
        );
        await era.printAndWait(
          `少し心配ではあるが……${daiya.sex}のステップは、とてもキレがよくなった！`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_banned_coffee: (() => {
    const title = '禁断のブレンド';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} coffee マンハッタンカフェ
     */
    const f = async (daiya, coffee) => {
      await era.printAndWait(
        '「おいしいコーヒーの淹れ方を覚えたい」。マンハッタンカフェは、サトノダイヤモンドのその願いを助けることにした。',
      );
      await daiya.say_and_wait('今日はよろしくお願いいたしますわ！');
      era.printButton('「よろしく！」', 1);
      await era.input();
      await coffee.say_and_wait(
        'ええ、よろしく……おいしいコーヒーを淹れましょう。',
      );
      await coffee.say_and_wait(
        'コーヒーは農園によって味が違う……品種や育ち方も大きく影響する。',
      );
      await coffee.say_and_wait('好きな豆を見つけるのも楽しみ……選んでみて……');
      await daiya.say_and_wait(
        'こんなに……！ どれを選べばよろしいのかわかりませんわ。',
      );
      await coffee.say_and_wait(
        'そういうときは……ブレンドを試すのもいい。未知の世界……君だけの一杯が生まれる。',
      );
      await daiya.say_and_wait(
        '未知の世界……素敵ですわ！ ではブレンドに挑戦しますわ！',
      );
      await daiya.say_and_wait(
        'ホンジュラス……チョコの香りとパッションフルーツの風味……これも！',
      );
      await coffee.say_and_wait('これで十種……あの、まずはこのあたりで──');
      await coffee.say_and_wait(
        '……えっ？ 新しい味が生まれるかも？ それは……間違ってはいない、けれど……',
      );
      await daiya.say_and_wait('よし──これも……あ、こちらも！');
      await daiya.say_and_wait(
        'ふふ……自分で淹れた手作りブレンド♪ いただきますわ。',
      );
      await era.printAndWait([
        { color: daiya.color, content: '二', fontWeight: 'bold' },
        { color: coffee.color, content: '人', fontWeight: 'bold' },
        '「',
        { color: daiya.color, content: 'ごくん' },
        '、',
        { color: coffee.color, content: 'ごくん' },
        '……」',
      ]);
      await daiya.say_and_wait(
        'うーん……苦味と酸味が引っ張り合っていますわ。あまり好みでは……！',
      );
      era.printButton('「失敗、だな……」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……豆の種類が多いほど、味は複雑になる。それぞれの自己主張が……強すぎた。',
      );
      await daiya.say_and_wait(
        'なるほど……うーん──味が喧嘩しないようにするには……',
      );
      await daiya.say_and_wait(
        'あ！ 方法がありますわ！ 味同士を仲良くさせる助っ人が！',
      );
      await daiya.say_and_wait('ほら！ 野菜畑ですわ！');
      await daiya.say_and_wait(
        '野菜はいろいろなものと炒めたり、煮たりしますわよね？',
      );
      await daiya.say_and_wait(
        '野菜で煎じたお茶もありますし、豆同士の味を中和できるかもしれませんわ！',
      );
      era.printButton('「それはやめておいたほうが……」', 1);
      await era.input();
      await coffee.say_and_wait('……ダイヤの案に、賛成する。');
      await coffee.say_and_wait(
        'コーヒーの概念そのものを覆す……常識を壊すやり方は、私には思いつかなかった……',
      );
      await daiya.say_and_wait('カフェ……！');
      await coffee.say_and_wait(
        'きっと面白いコーヒーが生まれる……『お友達』も……そう言っている。',
      );
      await daiya.say_and_wait(
        'えへへ、でしょう？ 私も、どんなコーヒーになるか想像もつきませんわ。',
      );
      await daiya.say_and_wait(
        'だからこそ挑みたいのです……たとえおいしくないコーヒーになっても……！',
      );
      era.printButton('「その前に、基礎を身につけないか？」（根性+20）', 1);
      era.printButton('「おいしくなるまで挑み続けよう！」（賢さ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('なるほど……まずは基礎、ということですわね。');
        await daiya.say_and_wait(
          'わかりました……基礎を身につけてから、冒険はあとでいたしますわ。',
        );
        await daiya.say_and_wait(
          '……よし、お湯を入れれば完成ですわ！ あ……でも、この豆も足したら──',
        );
        await coffee.say_and_wait('あの、レシピでは……');
        await daiya.say_and_wait('──そうですわね！ レシピどおりに……！');
        await era.printAndWait(
          'サトノダイヤモンドは好奇心を抑え、おいしいコーヒーを淹れることに成功した！',
        );
      } else {
        await daiya.say_and_wait('任せてくださいまし！ ご期待ください！');
        await coffee.say_and_wait(
          '野菜入りのコーヒー……できた。ほうれん草、ピーマン……色が緑だね。',
        );
        await daiya.say_and_wait(
          '香りも野菜そのものですわ……い、いただきますわ！',
        );
        await era.printAndWait([
          { color: daiya.color, content: '二', fontWeight: 'bold' },
          { color: coffee.color, content: '人', fontWeight: 'bold' },
          '「',
          { color: daiya.color, content: 'ごくん' },
          '、',
          { color: coffee.color, content: 'ごくん' },
          '……」',
        ]);
        await daiya.say_and_wait(
          'これは……おいしくありませんわ……！ あは、あははは！',
        );
        await coffee.say_and_wait('……うん……ふふ。');
        await era.printAndWait('味はともかく、笑いを連れてきた一杯だった！');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_satono_uma: (() => {
    const title = (daiya) => `サトノ家として、${daiya.uma_sex_title}として`;
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} bright メジロブライト
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, ryan, bright, you) => {
      await era.printAndWait('休日の夕暮れ、校門付近を通ると──');
      await ryan.say_and_wait('ダイヤ、まだ戻ってないのか？');
      await bright.say_and_wait(
        'そうみたいですわ～。もう少し、ここで待ちましょう～',
      );
      era.printButton('「サトノダイヤモンドに何かあったのか？」', 1);
      await era.input();
      await ryan.say_and_wait('君は……ダイヤのトレーナーだよね。');
      await ryan.say_and_wait(
        '実は今朝、ネイチャがダイヤの外出を見かけたらしくて。会社へ行くって言ってたんだ。',
      );
      era.printButton('「会社！？」', 1);
      await era.input();
      await era.printAndWait(
        `意外な単語に ${you.name} は驚き、メジロライアンから詳しい話を聞いた。サトノ家のある会社へ向かったらしい。`,
      );
      await ryan.say_and_wait(
        '夕方には戻るって言ってたんだけど、まだ戻ってこないから心配で……',
      );
      era.printButton('「教えてくれてありがとう」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は${daiya.couple_title}に、この先は自分が対応すると伝え、サトノダイヤモンドへ電話することにした。`,
      );
      await daiya.say_and_wait('あら、トレーナーですの？');
      era.printButton('「まだ会社にいるのか？」', 1);
      await era.input();
      await era.printAndWait(
        `状況を聞き、${you.name} はメジロライアンたちが心配していると伝えた。`,
      );
      await daiya.say_and_wait(
        '『あら、ご心配をおかけしてしまいましたわ。でも今はもう大丈夫です。用事はほぼ片付いております。』',
      );
      era.printButton('「それでも心配だ。迎えに行く」', 1);
      await era.input();
      await daiya.say_and_wait(
        '迎えに来てくださるのですか？ では社の者に、そのまま通すよう申し伝えておきますわ。',
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} は${daiya.sex}が教えてくれたビルに入り、サトノダイヤモンドのいる階へ向かった。`,
      );
      await era.printAndWait(
        `${daiya.sex}はどこにいるのだろう。${you.name} が周囲を見渡すと──`,
      );
      await era.printAndWait(
        'サトノグループの社員「──では、チャリティーレースの件はどういたしましょう？」',
      );
      await daiya.say_and_wait('まずは日程と開催地を決めねばなりませんわ。');
      await daiya.say_and_wait('来週の会議までに、母と大枠は考えておきます。');
      await daiya.say_and_wait(
        '皆で力を合わせて、当日はより多くの方に来ていただきましょう♪',
      );
      await era.printAndWait('社員らしき人が一礼して去った。');
      era.printButton('「チャリティーレース？」', 1);
      await era.input();
      await daiya.say_and_wait('トレーナー、お着きになりましたわね！');
      await daiya.say_and_wait(
        'サトノグループの慈善事業の一環で、いまチャリティーレースを計画しておりますの。',
      );
      await daiya.say_and_wait(
        `私もサトノ家の一員であり、${daiya.uma_sex_title}でもありますから、何かお手伝いできないか、微力でも尽くしたいと思いまして。`,
      );
      await era.printAndWait(
        `${daiya.sex}がそう語る表情は普段より凛としており、大きな責任感が感じられた。`,
      );
      era.printButton('「さすがサトノ家の一員だな」（賢さ+20）', 1);
      era.printButton(
        '「チャリティーレースには、君も出るのか？」（スタミナ&パワー+10）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('ふふ、お褒めいただき光栄ですわ♪');
        await daiya.say_and_wait(
          'いずれサトノ家を率いる立場になりますもの。今のうちに視野と見識を広げておきたいのです。',
        );
        await daiya.say_and_wait(
          'それに、こうしてサトノ家の一員として動くと、かえって頑張ろうという気持ちになりますの！',
        );
        await era.printAndWait(
          'そう語る笑顔には、サトノ家の代表としての誇りが見えた。',
        );
        await ryan.say_and_wait(
          'あ、戻ってきた！ ダイヤ、仕事を終えたばかりなのに元気だね。',
        );
        await daiya.say_and_wait(
          'サトノ家を担う者として、この程度でへこんでいられませんわ♪',
        );
        await ryan.say_and_wait(
          'あはは、本当にネイチャの言うとおりだ！ そのところ、マックイーンに似てるよ。',
        );
        await daiya.say_and_wait(
          'あら、本当ですの！？ ライアン、今仰ったこと、もっと詳しく聞かせてくださいまし！',
        );
        await daiya.say_and_wait('ええ、そのつもりですわ。');
        await daiya.say_and_wait(
          `先ほど申しましたとおり、私はサトノ家の一員であり、${daiya.uma_sex_title}でもあります。`,
        );
        await daiya.say_and_wait(
          `今はまだ若い後輩ですが、いつかサトノ家にも、${daiya.uma_sex_title}業界にも貢献したいですわ！`,
        );
        await era.printAndWait(
          `今だけでなく先まで見据えた${daiya.sex}の瞳に、${you.name} は将来活躍する姿を重ねた。`,
        );
      } else {
        era.drawLine();
        await bright.say_and_wait(
          'あら、お帰りなさいませ～。お仕事のほうは、いかがでしたの？',
        );
        await era.printAndWait(
          `サトノダイヤモンドは出迎えた二人に、チャリティーレースの話をした。`,
        );
        await bright.say_and_wait(
          'あら、面白そうですわね～！ あのレース、私も出てみたいですわ～',
        );
        await daiya.say_and_wait(
          'もちろん大歓迎ですわ！ メジロ家の皆様、ぜひ！',
        );
        await bright.say_and_wait(
          'ふふふ♪ 出ると決めたからには、優勝を目指しますわよ～',
        );
        await daiya.say_and_wait(
          'ええ、レースとはそういうものですわ！ 私も本気でお相手いたします♪',
        );
        await ryan.say_and_wait(
          '似た気質の子が揃いそうだね。あはは、当日がどんなことになるやら……',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_street_adv: (() => {
    const title = '路地裏アドベンチャー';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, jordan, you) => {
      await era.printAndWait(
        `${you.name} とサトノダイヤモンドの外出の帰り道──`,
      );
      await daiya.say_and_wait('あら？ あらあらあら！？');
      await daiya.say_and_wait(
        'トレーナー、大変なものを見つけましたわ！ あそこに『小路』が！',
      );
      await daiya.say_and_wait(
        'わあ～、今まで気づきませんでしたわ！ あの道……どこへ続いているのでしょう！',
      );
      await era.printAndWait(
        `${you.name} が止める間もなく、サトノダイヤモンドは小路へ駆けていった……`,
      );
      await daiya.say_and_wait(
        'ふふふ、少し奇妙な場所ですわね。お化けが出てもおかしくありませんわ……',
      );
      await jordan.say_and_wait('それって～、こんな幽霊？');
      await daiya.say_and_wait('あら、ジョーダン。こんにちは♪');
      await jordan.say_and_wait(
        'ちょっと、全然驚かないの？ あなたが平気だと、気まずいのはこっちなんだけど～！',
      );
      await jordan.say_and_wait('ていうか、ここで何してんの？');
      await daiya.say_and_wait(
        'この小路がどこへ続いているのか知りたくて……いま冒険中ですの。',
      );
      await daiya.say_and_wait(
        'ここの景色は特別違って、別世界に入ったよう……ふふふ、興奮して期待で胸がいっぱいですわ♪',
      );
      await jordan.say_and_wait(
        'へー、じゃあ一緒に歩く？ いいとこ連れてってあげるよ！',
      );
      await jordan.say_and_wait(
        '……でさ～、ここの家の犬、めちゃくちゃ怖いんだよね！ 目が合うとすぐ吠え出すの！',
      );
      await daiya.say_and_wait(
        '元気なワンちゃんですわね！ どんな子なのかしら……？',
      );
      await era.printAndWait('大きな犬「ワンワン！ ワン！！」');
      await daiya.say_and_wait('わあ、本当ですわ！ ふふふ、かわいいですわ～！');
      await jordan.say_and_wait(
        '楽しそうだね～！ ついでに、気分が上がる店も回る？',
      );
      await daiya.say_and_wait('あら、面白そうですわ──');
      await daiya.say_and_wait('──あら？ あちらの路地、特に暗いですわね。');
      await jordan.say_and_wait('ちょっと待って！ そっちはだめ！');
      era.printButton('「そっちに何か問題が？」', 1);
      await era.input();
      await jordan.say_and_wait(
        'あー、なんか～、ちょっと悪いお姉さんがよく集まってる的な？',
      );
      await jordan.say_and_wait(
        'あたしに何かしてきたわけじゃないけど～、自分から行く必要もないでしょ？',
      );
      await jordan.say_and_wait('だからダイヤ、そっちじゃなくてこっち──');
      era.printButton('「もういない！？」', 1);
      await era.input();
      await jordan.say_and_wait('やっば！？ おい、ダイヤ──！');
      await daiya.say_and_wait(
        'あら、不良少女、ですの……？ 連続ドラマで拝見した、あの……',
      );
      await era.printAndWait('不良少女「はあ？ 何だって！？」');
      await daiya.say_and_wait(
        'あ、サトノダイヤモンドと申します。いくつかお伺いしたくて。',
      );
      await daiya.say_and_wait(
        '不良少女といえば、雨の日に濡れた子犬を助ける場面が好きでして……あなたにも、そういうご経験は？',
      );
      await jordan.say_and_wait('ちょっとちょっと！ ストップストップ！');
      await jordan.say_and_wait('いやー、すみません！ 今すぐ撤収します～！');
      await daiya.say_and_wait('えっ？ あ、でも……！');
      era.printButton('「さあ、早く戻ろう！」（賢さ+20）', 1);
      era.printButton(
        '「いきなり話しかけたことを、まず謝ろう」（パワー+20）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('わ、わかりました？');
        await daiya.say_and_wait('では、失礼いたしますわ。さようなら♪');
        await daiya.say_and_wait(
          `ああ、不良の${daiya.teen_sex_title}……もう少しお話しできれば……惜しいですわ。`,
        );
        await jordan.say_and_wait('まさか、怖くないの！？');
        await daiya.say_and_wait(
          `怖くはありませんわよ？ 連続ドラマの不良の${daiya.teen_sex_title}は、野良の子犬を助ける、心の優しい方ばかりですもの♪`,
        );
        await jordan.say_and_wait('ダイヤ、ヤバい意味で強いね～！');
        await era.printAndWait(
          `サトノダイヤモンドが寂しそうだったので、${you.name} もそれ以上は責められなかった。`,
        );
      } else {
        await daiya.say_and_wait(
          'それは確かに失礼でした……申し訳ありません、私の不作法ですわ。',
        );
        await era.printAndWait(
          `不良の${daiya.teen_sex_title}「ちっ、一般人と揉める趣味はねぇよ。次から気をつけろ。」`,
        );
        await daiya.say_and_wait(
          `ありがとうございます！ 不良の${daiya.teen_sex_title}は道理の通った硬派な方、本当なのですね！`,
        );
        await era.printAndWait(
          `不良の${daiya.teen_sex_title}「おっ？ わかってるじゃねえか。へへ、一緒に飲みに行くか？」`,
        );
        await daiya.say_and_wait(
          'あら、よろしいのですか？ ぜひその機会をくださいまし♪',
        );
        await jordan.say_and_wait('マジ？ ダイヤ強すぎ！？');
        await era.printAndWait(
          `その後、サトノダイヤモンドは好奇心いっぱいに、不良の${daiya.teen_sex_title}の話に耳を傾けた。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_shopping: (() => {
    const title = 'コンビニ前にはご注意を';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} condor エルコンドルパサー
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait([
        you.name,
        ' とサトノダイヤモンドの外出の帰り道、コンビニの前で……二人の',
        daiya.uma_sex_title,
        'が集まっていた。',
      ]);
      await gs.say_and_wait(
        'くそ！ また──フラミンゴ子かよ！ もう五枚目だぜ……！？',
      );
      await festa.say_and_wait('俺もだ……またゴロゴロイモムシだ。');
      await daiya.say_and_wait(
        'あら、ゴルシとフェスタですわ？ お二人、ここで何を……伺ってまいりますわ！',
      );
      await era.printAndWait(
        `嫌な予感がする……${you.name} はそう思いつつ、サトノダイヤモンドを追いかけた。`,
      );
      await daiya.say_and_wait('こんにちは。お二人は何をなさっていますの？');
      await gs.say_and_wait(
        'お、ダイヤか！ さっき『驚異の生物チョコ』を大量に買ったんだよ！',
      );
      await gs.say_and_wait(
        'でも一番レアのアンモナイトナイトが全然出なくて……ここでチョコを食い続けてんだ。',
      );
      await daiya.say_and_wait(
        'あら、新しい挑戦、ということですの？ 面白そうですわ！ 私も参加してもよろしいかしら？',
      );
      await festa.say_and_wait(
        'はは、好奇心旺盛なお嬢さんだ……いいぜ、どの袋にする？ 選べ。',
      );
      await daiya.say_and_wait(
        'そうですね、トレーナーはどれがよろしいと思われます？',
      );
      era.printButton('「包装のきれいなほう」（スタミナ+20）', 1);
      era.printButton('「包装のくしゃくしゃなほう」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '私もそちらがよろしいかと！ では開けますわ、いきますよ──',
        );
        await daiya.say_and_wait('開封──！');
        await daiya.say_and_wait('これは──えっと、プテラノドン……？');
        await gs.say_and_wait(
          '──プテラノドン首領！！！！ うおお、プテラノドン首領だ！！',
        );
        await festa.say_and_wait(
          'へえ、ゴールド級か……運は悪くないな、ダイヤ。',
        );
        await daiya.say_and_wait(
          'あら、良いものが当たりましたの！？ ではもっと開けてみたいですわ！',
        );
        await gs.say_and_wait(
          'いいぜ、開けろ！ カードはこっちに投げろ、チョコはアタシが食う！',
        );
        await daiya.say_and_wait('はい！ では始めますわ──');
        await condor.print_and_wait('？？？「待った！」');
        await daiya.say_and_wait('？');
        await condor.say_and_wait(
          'その『驚異の生物チョコ』、私も買うつもりだった！！',
        );
        await condor.say_and_wait(
          '売り切れとは……ゴルシとフェスタ先輩の仕業だな！？',
        );
        await gs.say_and_wait(
          'コンドル、そんなに怒るなよ……仕方ねえなあ。じゃあ──',
        );
        await gs.say_and_wait(
          '──勝負だ！ お前が勝てばプテラノドン首領をやる！ 負けたら眠眠ゼミだけな！！',
        );
        await condor.say_and_wait(
          'いいだろう！ 受けて立つ！ 必ずプテラノドン首領を勝ち取る！',
        );
        await condor.say_and_wait('では、正々堂々と──！！');
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          condor.get_colored_name(),
          '「──勝負だ！！」',
        ]);
        await daiya.say_and_wait(
          'うーん──大変なことになりましたわね。トレーナー。',
        );
        era.printButton('「ああ……」', 1);
        await era.input();
        await coffee.print_and_wait(
          '？？？「──心配いらない。放っておけば、そのうち飽きる……」',
        );
        await daiya.say_and_wait('カフェ！ お買い物ですの？');
        await coffee.say_and_wait(
          'うん、行きつけのカフェが閉まっていて……だからここに……',
        );
        await coffee.say_and_wait('でも──別の店にする……先に行く……');
        await daiya.say_and_wait(
          'あら、そんなにカフェの候補をお持ちなのですね。よろしければ、私もご一緒してよろしいかしら！？',
        );
        await era.printAndWait(
          'すぐ傍の戦争より、好奇心を優先するサトノダイヤモンド……その素直さが、またよくわかった。',
        );
      } else {
        await daiya.say_and_wait(
          'あえてこういう挑戦を、ですわね！ 面白そうですわ、開けますよ──',
        );
        await era.printAndWait(
          'だがサトノダイヤモンドが包装を開けようとした瞬間──突風がチョコの袋を誰かの足元へ飛ばした。',
        );
        await sirius.print_and_wait('？？？「ん……なんだこれ？」');
        await sirius.say_and_wait(
          '……ったく、お菓子の袋か。ここで何の親睦会だ？',
        );
        await festa.say_and_wait(
          'ふふ……いいところに来たな。お前も乗るか？ シリウス。',
        );
        await sirius.say_and_wait(
          '乗るって、お菓子で勝負か？ おいおい、いくつだと思って──',
        );
        await sirius.say_and_wait('──ん？');
        await sirius.say_and_wait(
          '……おお──無邪気なお嬢さんか。相手がお前なら、面白いかもな。',
        );
        await daiya.say_and_wait('？ 私と勝負、ですの？');
        await sirius.say_and_wait(
          'ああ。今アタシの足元に飛んできた袋が当たりなら、お前の勝ち。',
        );
        await sirius.say_and_wait(
          '逆に外れならお前の負け。アタシの要求を一つ聞け。──どうだ？',
        );
        era.printButton('（何……！？）', 1);
        await era.input();
        await daiya.say_and_wait(
          'ふふ、面白そうですわ。その条件なら、絶対に負けられませんわね♪',
        );
        await daiya.say_and_wait('お受けしますわ！');
        await daiya.say_and_wait('では──！');
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「……！！」',
        ]);
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「',
          { color: gs.color, content: '隠しキャラ！！' },
          { color: festa.color, content: 'ケンタドロ……！！' },
          '」',
        ]);
        await era.printAndWait(
          'カードを見た瞬間、ゴールドシップとナカヤマフェスタが激しく反応した……！！',
        );
        await sirius.say_and_wait(
          '！？ 隠しキャラ……？ つまり最高じゃないが、外れでもない、か？',
        );
        await sirius.say_and_wait(
          '……ったく、この勝負はノーカウントだ。まあ、お前を負かせんかったが、いい見世物は見れた。',
        );
        await daiya.say_and_wait('ふふ♪ では勝負は、次に持ち越し、ですわね？');
        await sirius.say_and_wait('……おっ？');
        await daiya.say_and_wait(
          '勝敗がついておりませんもの。もう一度、挑む機会をくださいまし！',
        );
        await sirius.say_and_wait(
          'ふふ、ははは！ 危うく逃げ切れたのに、自分から危険に飛び込むのか！？',
        );
        await sirius.say_and_wait(
          '……いいだろう。頂点で待ってる。お前がアタシのところまで登ってくる日をな。',
        );
        await daiya.say_and_wait('ふふふ♪ こうして、また目標が増えましたわ。');
        await era.printAndWait(
          `サトノダイヤモンドは先輩の前でも臆さず進む。${you.name} は改めて${daiya.sex}の強さを知った。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_in_colorful: (() => {
    const title = 'たくさんの彩の中で';
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} creek スーパークリーク
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, maya, creek, you) => {
      await era.printAndWait(
        `${you.name} とサトノダイヤモンドの外出の帰り道、ショッピングモールへ寄ると──`,
      );
      await daiya.say_and_wait(
        'お店が多すぎて目移りしますわ。いつか、全部回ってみせる──あら？',
      );
      await maya.say_and_wait(
        '……ねえねえ、こっちはどう？ 大人っぽい？ それともこっちのほうが──',
      );
      await maya.say_and_wait('あ！ ダイヤだ☆ やっほー！');
      await daiya.say_and_wait('マヤにクリーク！ お買い物ですの？');
      await maya.say_and_wait(
        'えへへ、そうだよ～。クリークに大人っぽい服を選んでもらってるの♪',
      );
      await maya.say_and_wait(
        'でも決まらないんだ。だって全部欲しくなっちゃう☆',
      );
      await creek.say_and_wait(
        'ふふ、マヤちゃんは何を着てもかわいいから、私も選べなくて～',
      );
      await daiya.say_and_wait(
        'あら！ では私も選ばせてくださいまし？ マヤに似合う服を見つける挑戦ですわ！',
      );
      await era.printAndWait(
        'こうして、マヤノトップガンに似合う服を探すことになった。',
      );
      await daiya.say_and_wait(
        'うーん、思ったより難しいですわ。自分の服ならすぐ決まるのに……',
      );
      await daiya.say_and_wait(
        'やはり、自分のものを選ぶときと条件も基準も違うからでしょうね。',
      );
      await daiya.say_and_wait(
        'トレーナーは、どう選ぶのがよろしいと思われます？',
      );
      era.printButton('「大人っぽさを優先しよう」（スピード+20）', 1);
      era.printButton('「マヤに似合うことを優先しよう」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          'なるほど、まず方向を決めることが大切ですわね！',
        );
        await daiya.say_and_wait(
          'では、もう一度考えますわ！ ……ふふ、どういたしましょう♪',
        );
        await daiya.say_and_wait(
          '決まりましたわ！ マヤ、あちらの組み合わせはいかがですの？',
        );
        await era.printAndWait(
          'サトノダイヤモンドは落ち着いた配色で一セットを組み、マヤに試してもらった。',
        );
        await maya.say_and_wait(
          'わあ、白いトップスにネイビーのスカート！ 定番で上品で大人っぽい～！',
        );
        await maya.say_and_wait(
          'ハイウエストだから、脚も長く見えて、セクシーな感じ♪',
        );
        await maya.say_and_wait(
          'こういう組み合わせもあるんだね～！ 勉強になった☆',
        );
        await daiya.say_and_wait('ふふ、お気に召していただけて何よりですわ。');
        await maya.say_and_wait(
          'でもダイヤ、なんでそんな大人っぽい着こなし知ってるの？',
        );
        await daiya.say_and_wait(
          'そうですね……よくサトノ家の一員として、いろいろな場に出るからですわ。',
        );
        await daiya.say_and_wait(
          '特に社交パーティーは、大人の方が多いですから。',
        );
        await daiya.say_and_wait(
          '皆さんの傍で見劣りしないよう、定番色で合わせることも多いのです。',
        );
        await maya.say_and_wait(
          'わあ～、社交パーティーってすごく大人っぽい！！',
        );
        await maya.say_and_wait(
          'ねえねえ、マヤもいつか大人の女として、社交パーティーに行けるかな？',
        );
        await daiya.say_and_wait(
          `もちろんですわ！ 選手の${daiya.uma_sex_title}は、よく宴会にお招きされますもの！`,
        );
        await maya.say_and_wait(
          '本当！？ じゃあ社交パーティーの準備、急がなきゃだね☆',
        );
        await maya.say_and_wait(
          'ねえダイヤ、もっと大人っぽい組み合わせ教えて～♪',
        );
        await daiya.say_and_wait('はい、もちろんですわ！ お任せください！');
        await creek.say_and_wait(
          'ふふ、お二人ともかわいいですわ～。楽しそうにお話しして♪',
        );
      } else {
        await daiya.say_and_wait(
          'なるほど……！ ご本人に似合わなければ意味がありませんもの！',
        );
        await daiya.say_and_wait('うーん……では、少し考えますわ。ふふ♪');
        await daiya.say_and_wait(
          '決まりましたわ！ マヤ、あちらの組み合わせはいかがですの？',
        );
        await era.printAndWait(
          'サトノダイヤモンドはかわいく元気な雰囲気で一セットを組み、マヤに試してもらった。',
        );
        await daiya.say_and_wait(
          'フリルがとてもかわいいと思いますが、お好みですの？',
        );
        await maya.say_and_wait(
          'わあ、本当に超かわいい～！ 袖のリボンがアクセントになってて素敵☆',
        );
        await daiya.say_and_wait('そうですわ！ そこにお気づきでしたの！');
        await daiya.say_and_wait(
          'リボンの大きさは袖口の邪魔にならない程度で、ちょうどいいアクセントになっていますの♪',
        );
        await maya.say_and_wait(
          'うんうん、パンツも短めで、マヤの好きなかわいい感じ☆',
        );
        await daiya.say_and_wait('それに、靴を合わせるなら──');
        await maya.say_and_wait('──あ、わかった！！ 短いブーツでしょ？');
        await daiya.say_and_wait('正解ですわ！ さすがマヤ、お詳しい！');
        await daiya.say_and_wait(
          'パンツが短めなので、ブーツも短めにすると、脚がより長く見えますの！',
        );
        await maya.say_and_wait(
          'うんうん、わかる～！ 脚を出すとセクシーな感じもするし。',
        );
        await maya.say_and_wait(
          'マヤとダイヤ、センス合いそう☆ ねえねえ、もっと一緒に組み合わせ探そう！',
        );
        await daiya.say_and_wait(
          'はい、喜んで！ ではあちらから順に回りますわ♪',
        );
        await creek.say_and_wait(
          'ふふ、お二人ともかわいいですわ～。楽しそうにお話しして♪',
        );
        await daiya.say_and_wait(
          'トレーナー、クリーク！ よろしければ、ご一緒にいかがですの～？',
        );
        era.printButton('「ああ、今行く」', 1);
        await era.input();
        await era.printAndWait(`その後、四人で楽しい服選びの時間を過ごした。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
