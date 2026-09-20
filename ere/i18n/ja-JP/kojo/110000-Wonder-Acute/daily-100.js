/**
 * @file ワンダーアキュート - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  good_morning(acute, callname, slavery) {
    const buffer = [
      () =>
        acute.say(
          'あらあら……ちゃんとお仕事していらっしゃいますね～ 漬けたての砂糖がけトマト、召し上がりますか？ 糖分をしっかり摂れば、午後の調教も元気が出ますよ。',
        ),
      () =>
        acute.say([
          callname,
          ' の服、薄すぎますよ……秋になったら、もう少し着込んでくださいね。薄着のままで風邪をひいたら、本当に辛いですから。',
        ]),
      () =>
        acute.say([
          '調教が終わったら、たくあんを漬けようと思っているのです。そうすれば明日、',
          callname,
          ' が他のいい子たちに分けてあげて、',
          acute.couple_title,
          'と仲良くなれますよ？',
        ]),
      () =>
        acute.say([
          'あらあら……お元気そうですね、',
          callname,
          '、何かいいことでもありましたか？ ふふふ……赤飯を用意しないといけませんね～',
        ]),
      () =>
        acute.say([
          'あらあら……お元気そうですね、',
          callname,
          '、何かいいことでもありましたか？ ふふふ……砂糖がけトマトを用意しないといけませんね～',
        ]),
      () =>
        acute.say([
          'あらあら……お元気そうですね、',
          callname,
          '、何かいいことでもありましたか？ ふふふ……鯉の煮付けを用意しないといけませんね～',
        ]),
      () =>
        acute.say([
          'あらあら……お元気そうですね、',
          callname,
          '、何かいいことでもありましたか？ ふふふ……たくあんを用意しないといけませんね～',
        ]),
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say(
            '室内、屋上、駅、それともトレーニング場。どこでも構いませんよ？',
          );
          era.print([
            '他の子が必要なら、わたしが手伝います。ほかの子にとっては初めては少し痛いかもしれませんが、優しくしてあげれば、本能で ',
            callname,
            ' の魅力が分かるはずです。',
          ]);
        });
        break;
      case 2:
        buffer.push(() =>
          acute.say(
            'ふふっ～今度はそう簡単に下へは押し倒させませんよ？ 拳法には、そこそこ自信がありますから。',
          ),
        );
        break;
      case 3:
        buffer.push(() =>
          acute.say([
            '今日のたくあんはもう漬けて、冷蔵庫に入れてあります。時間どおりに食べてくださいね？ また栄養不足で脱水して倒れたら困りますから、',
            callname,
            '❤️～',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  select(acute, you, callname, slavery) {
    const buffer = [
      () =>
        acute.say([
          'あらあら……',
          callname,
          '～ 他の若くてかわいい子たちとお話しないのですか？',
        ]),
      () => {
        acute.say(
          'おはようございます。朝ごはんは食べましたか？ 抜いてはいけませんよ。',
        );
        acute.say(
          'まだなら、納豆ご飯か、おかゆにたくあんがおすすめです～ 体にいいですから。',
        );
      },
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say(
            'ふふふ～今日もお散歩ですか？ それなら、他の子も連れていきますか？',
          );
          era.print([
            '全裸の ',
            acute.get_colored_name(),
            ' は静かに地面へ伏せ、',
            you.get_colored_name(),
            ' が近づいて初めて、',
            acute.sex,
            'は耳を左右に揺らしながら、口に咥えた首輪を ',
            you.get_colored_name(),
            ' の手元へ差し出した。',
          ]);
        });
        break;
      case 2:
        buffer.push(() => {
          acute.say('むむむ……敗者は勝者に従う。自然界の必然ですね。');
          era.print([
            'そう言いながら、',
            acute.get_colored_name(),
            ' は落ち着いて、今日分の首輪を自分でつけた。',
          ]);
        });
        break;
      case 3:
        buffer.push(() => {
          acute.say(['あらあら……我慢してくださいね？', callname, '～']);
          era.print([
            you.get_colored_name(),
            ' の熱い下腹を押さえ、時おり下へ探るように触れながら、',
            acute.get_colored_name(),
            ' の顔には意味深な笑みが浮かんでいる。',
          ]);
        });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async office_study(acute, you) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait(
        'お勉強、ですか～？ ええ……しっかり頑張らないと～',
      );
      await era.printAndWait([
        '居間に座り、「五年ウマ娘、三年模試」を抱えた ',
        you.get_colored_name(),
        ' が、',
        acute.get_colored_name(),
        ' に問題を解説している——',
      ]);
    } else {
      await acute.say_and_wait('わあ……勉強って、こんなに難しいのですね……');
      await era.printAndWait([
        '目の前に広げられた「五年ウマ娘、三年模試」を前に、いつも穏やかな ',
        acute.get_colored_name(),
        ' が珍しく困った顔をしている。',
      ]);
      await era.printAndWait([
        '目新しさか、いたずら心か、',
        you.get_colored_name(),
        ' は苦笑を漏らした——',
      ]);
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async office_prepare(acute) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(
        '次のレース、ですか？……ええ～ どんな戦術にしましょうか。',
      );
    } else {
      await acute.say_and_wait('おや？ 次のレースの会場を見に行くのですか？');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづな/ハープスターへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  async talk(acute, you, callname, call_301, slavery) {
    const buffer = [];
    if (era.get('cflag:100:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:100:干劲')) {
        case -2:
          buffer.push(
            () => acute.say_and_wait('……ふぅ……まったく力が入りませんね～'),
            () =>
              acute.say_and_wait(
                'うーん……ところで、このあと何をするのでしたっけ。今日はぼんやりしていて、うっかり忘れてしまいました。',
              ),
            () =>
              acute.say_and_wait(
                'くふふ……もう少しで寝てしまうところでした。これはいけませんね。鼻の下に少し清涼膏を……',
              ),
            () =>
              acute.say_and_wait(
                'どすん……あら、カエルを踏みそうになりました（転びました）～',
              ),
            () =>
              acute.say_and_wait(
                'ええ……帰ったらたくあんも漬けないといけませんし、気を入れないと～',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              acute.say_and_wait(
                'ふう……継続は力なり、ですから。大丈夫ですよ。',
              ),
            () => acute.say_and_wait('えへへ……少し、力が入りませんね。'),
            () =>
              acute.say_and_wait('ふふふ、同年代と同じように頑張らないと。'),
            () =>
              acute.say_and_wait(
                '深呼吸——ふう、ふう～ 神経を張り詰め続けないと。',
              ),
            () =>
              acute.say_and_wait(
                '集中が……目の前をぶんぶん飛ぶ小さなハエに乱されました——',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              acute.say_and_wait(
                'よいしょ～ 壁に背をひと叩き。元気が出ました。',
              ),
            () => acute.say_and_wait([callname, '、調教を始めましょう～']),
            () => acute.say_and_wait('胸の運動——もう終わりましたよ～'),
            () => acute.say_and_wait('今日も着実に、一歩ずつ頑張りましょう～'),
            () => acute.say_and_wait(['行きましょう、', callname, '。']),
          );
          break;
        case 1:
          buffer.push(
            () =>
              acute.say_and_wait([
                'ええ～ それでは、',
                callname,
                '、今日の調教は何でしょう～？',
              ]),
            () =>
              acute.say_and_wait(
                'どんな調教でも、わ・た・しは真剣に向き合いますよ。',
              ),
            () =>
              acute.say_and_wait(
                '塩分の補給も大切です。たくあんを少し召し上がれ～',
              ),
            () =>
              acute.say_and_wait(
                'ふん、ふん～ ストレッチは準備完了～ これから本気ですよ。',
              ),
            () =>
              acute.say_and_wait([
                'あら～ ',
                callname,
                '、今、何と仰いました？',
              ]),
          );
          break;
        case 2:
          buffer.push(
            () =>
              acute.say_and_wait('ふふふ～ もっと厳しい調教でも構いませんよ。'),
            () => acute.say_and_wait('あらあら……もう調教の時間ですね～'),
            () =>
              acute.say_and_wait(
                '今日はいいお天気ですね～ お日様を見ていると、やる気が溢れてきます～',
              ),
            () =>
              acute.say_and_wait(
                'あらあら……コースが見えると、胸がむずむずしますね～',
              ),
            () =>
              acute.say_and_wait([
                '調教が終わったら、布団を干したいのです～',
                callname,
                '、あとで付き合っていただけますか？',
              ]),
          );
      }
    } else {
      buffer.push(() =>
        era.printAndWait([
          acute.get_colored_name(),
          ' は、いつものように楽な表情を保っている。',
        ]),
      );
    }
    switch (slavery) {
      case 1:
        buffer.push(async () => {
          await acute.say_and_wait(
            'あらあら……今日もトレセンの中をお散歩ですか？',
          );
          await acute.say_and_wait(
            '全裸で、首の首輪と手綱に繋がれたまま公共の場を歩かされるのは、心臓がどきどきして……これが、若者がよく言う『ロマン』なのでしょうか。',
          );
          await acute.say_and_wait(
            '根性も鍛えられて、ロマンも快楽も感じられるなんて。こんな優れた調教法は、広めないともったいないですね。',
          );
          await acute.say_and_wait([
            call_301,
            ' や、理事長',
            acute.couple_title,
            'なんて、すぐに沈んでしまいそうですね。',
          ]);
        });
        break;
      case 2:
        buffer.push(async () => {
          await acute.say_and_wait(
            'あら……今日の陽射しは気持ちいいですね。溜まった家事を一気に片付けるのに、ちょうどいい。',
          );
          await acute.say_and_wait(
            '洗濯、布団干し、たくあん漬け……むふふ、今日やることが意外と多いです。',
          );
          await acute.say_and_wait([
            'ですから、',
            callname,
            '。今日は、わたしを強姦してはいけませんよ？',
          ]);
          await acute.say_and_wait(
            '皆が調教している最中に中庭の枯れ木の洞へ連れていかれるのも、昼休みに屋上へ連れていかれるのも、午後のお出かけで駅の路地へ、というのも、今日はだめですよ？',
          );
        });
        break;
      case 3:
        buffer.push(async () => {
          await acute.say_and_wait(
            '今日は調子がとてもいいので、夜はわたしがあなたを可愛がります。',
          );
          await acute.say_and_wait([
            'ですから、',
            callname,
            '。体のすみずみまで、きちんと洗って待っていてくださいね。',
          ]);
          await era.printAndWait('いつもの笑顔なのに、拒めない迫力がある。');
          await era.printAndWait([
            '今夜、',
            you.get_colored_name(),
            ' はどうなってしまうのだろう……',
          ]);
        });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async office_gift(acute, callname) {
    const love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        'あらあら、わたしへの贈り物ですか？ そんなに気を遣わなくても～',
      );
      await acute.say_and_wait([
        'そうだ、',
        callname,
        '、前にお話しした避妊具は……',
      ]);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' の声が、ふいに低くなる。',
      ]);
      await acute.say_and_wait('あの……持ってきてくれましたか？');
      await acute.say_and_wait('……どちらの『持って』です？');
      await acute.say_and_wait('む…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' は、少し拗ねたように口を尖らせた。',
      ]);
      await era.printAndWait([
        'いつも沈着で動じない ',
        acute.get_colored_name(),
        ' が、こんなときだけ、同年代らしい恥じらいの',
        acute.teen_sex_title,
        'になる。',
      ]);
      await era.printAndWait([
        'つい、',
        acute.sex,
        'をからかいたくなる悪趣味が——',
      ]);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        '青空の下、恥じらう ',
        acute.get_colored_name(),
        ' と、楽しい時間を過ごした。',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        'あらあら、わたしへの贈り物ですか？ そんなに気を遣わなくても～',
      );
      await acute.say_and_wait([
        'そうだ、',
        callname,
        '、避妊具は使っていますか？',
      ]);
      await acute.say_and_wait([
        '若さが溢れるのはいいことですけど、トレーナーと担当',
        acute.uma_sex_title,
        'のあいだは、節度も大切ですよ～',
      ]);
      await acute.say_and_wait('卒業してから、本気でやりましょう～');
      await acute.say_and_wait([
        'そのときは、忘れずに ',
        callname,
        ' の子を抱かせてくださいね～',
      ]);
      await era.printAndWait([
        '……穏やかな ',
        acute.get_colored_name(),
        ' と、出産の話をした。',
      ]);
      await era.printAndWait('…………自分の顔が、熱くて仕方ない。');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait('あらあら、わたしへの贈り物ですか？ 恐縮です～');
      await acute.say_and_wait(['こちらへお座りください、', callname, '。']);
      await acute.say_and_wait(
        '動かないでくださいね。漬けたてのたくあんを取ってきますから、あとで一緒に食べましょう。',
      );
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' と、苦くて歯応えのあるたくあんを一緒に食べた。',
      ]);
    } else {
      await acute.say_and_wait('あらあら、わたしへの贈り物ですか？ 恐縮です～');
      await acute.say_and_wait([
        'そういえば、駿川',
        acute.sex,
        'が、今日は雨になりそうだと言っていました。',
      ]);
      await acute.say_and_wait([callname, ' は傘を持っていませんよね？']);
      await acute.say_and_wait(
        '予備の傘がありますよ～ そのままお使いください。',
      );
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' に、ビニール傘を強引に握らされた。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async office_cook(acute, callname) {
    if (Math.random() > 0.5) {
      await era.printAndWait([
        '夕方、',
        acute.get_colored_name(),
        ' に美味しい「たくあん」の作り方を教わった——',
      ]);
      await acute.say_and_wait(
        'たくあん漬けの秘訣、ですか？ ええ……秘訣といえば、やはりいい石の甕を……',
      );
      await era.printAndWait('………………');
      await era.printAndWait('「漬け物」について、かなり学んだ。');
    } else {
      await era.printAndWait([acute.get_colored_name(), ' と一緒に料理を……']);
      await era.printAndWait(
        'だが「手伝わなくていいですよ」といった言葉で、台所から追い出された。',
      );
      await acute.say_and_wait([
        '動いていただかなくて結構です、',
        callname,
        '。居間に座っていてください。ご飯はすぐできますよ～？ 少し待っていてくださいね～',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('ふと一瞬、母の姿が目の前に浮かんだ。');
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async office_game(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait(
        'ゲーム、ですか……機械の操作が、あまり分からなくて——',
      );
      await era.printAndWait([
        'ディスプレイとリモコンのあいだで視線を行き来させる ',
        acute.get_colored_name(),
        ' が、床に置いたコントローラーを、立てた人差し指二本でつついている。',
      ]);
      await era.printAndWait('……正直、かなりかわいい。');
    } else {
      await acute.say_and_wait(
        'ゲーム機——ああ、昔、故郷の隣の子供が言っていました。戦車で戦う、あれですよね？',
      );
      await era.printAndWait('ぷっ——笑いそうになった。');
      await era.printAndWait('戦車戦……何年前の子供だよ、それは。');
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async s_a_tree_hollow(acute) {
    await era.printAndWait([
      '中庭の奥の枯れ木の洞には、レース前の',
      acute.uma_sex_title,
      'が洞へ願いを叫び、プレッシャーを吐き出す姿がよくある。',
    ]);
    await era.printAndWait([
      'だが普段はのんびりして見える ',
      acute.get_colored_name(),
      ' は、洞の中に座る方が好きらしい。',
    ]);
    await acute.say_and_wait('ええ……ここは本当に静かですね～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' は相変わらず穏やかに話し、顔の表情が少しだけ変わったようだった……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(acute, you) {
    await era.printAndWait([
      '人通りの多い中庭で、他の',
      acute.uma_sex_title,
      'の視線に耐えながらデートするには、相当な覚悟が要りそうだ……',
    ]);
    await acute.say_and_wait(
      'あら……ここでデート、ですか？ わたしは構いませんよ～',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' は、周囲の',
      acute.uma_sex_title,
      'の目など気にしていないようだった……',
    ]);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait(
        '人通りの多い中庭、愛し合う二人が、隅で抱き合う——',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' と、とてもいい昼を過ごした。',
      ]);
    } else {
      await era.printAndWait([
        '本当に踏み出せないのは、',
        you.get_colored_name(),
        ' 自身だ。',
      ]);
      await era.printAndWait([
        '——',
        acute.get_colored_name(),
        ' の、期待する眼差しを感じる。',
      ]);
      await era.printAndWait(
        'この先は、「愛」がもっと増えてから探ろう。（苦笑）',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        'ちなみに——人通りの多い中庭でこの一歩を踏み出すには、鋼のような意志が要る——',
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async s_r_lunch(acute, you) {
    await era.printAndWait([
      '昼休み、',
      acute.get_colored_name(),
      ' と屋上で弁当を食べている。',
    ]);
    await era.printAndWait('ポリポリポリ——');
    if (Math.random() < 0.5) {
      await era.printAndWait('いつもの、穏やかで歯応えのある食感——');
      await acute.say_and_wait('ふふっ～大丈夫、まだたくさんありますよ～');
      await era.printAndWait([
        acute.get_colored_name(),
        ' の笑顔を見て、胸が幸せでいっぱいになる。',
      ]);
    } else {
      await era.printAndWait('いつものより、少し塩気が強い——');
      await acute.say_and_wait([
        '最近は少し暑いですから、たくさん汗をかくと体の塩分が足りなくなりますよ？ だから塩を多めにしました——',
        you.get_colored_name(),
        '、お好みですか？',
      ]);
      await era.printAndWait('言うまでもない。好きに決まっている。');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {number} jpy 釣れた魚の価値
   */
  async o_r_fishing(acute, you, jpy) {
    await era.printAndWait([acute.get_colored_name(), ' と川へ釣りに……']);
    if (Math.random() < 0.5) {
      await acute.say_and_wait('あらあら、いいお天気ですね～');
      await era.printAndWait([
        '竿を持った ',
        acute.get_colored_name(),
        ' が、浮雲と太陽へ穏やかな微笑みを向ける。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' の周りには、すべてを置いていけるような、怠惰な空気が漂っている。',
      ]);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は釣りに来たのではなく、日向ぼっこに来た気がする。',
      ]);
    } else {
      await era.printAndWait([
        '——そうは言っても、',
        acute.get_colored_name(),
        ' は竿を持っていない。浮きと針のついた糸に餌をつけ、握ったまま水へ放り投げた。',
      ]);
      await acute.say_and_wait(
        'よいしょ……ふぅ～ これでいいですね～ あとはお魚がかかるのを待って、一網打尽です～',
      );
      await era.printAndWait('……これで、釣れるのか？');
      if (jpy > 0) {
        await era.printAndWait(
          '——そう思った瞬間、浮きがぐるぐると沈み始めた。',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_r_walking(acute, callname) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(
        'よいしょ～ 風が来た、雨が来た、雷さまが太鼓を叩いてやって来た。',
      );
      await era.printAndWait([
        'ご機嫌な様子で、',
        acute.get_colored_name(),
        ' は川沿いで鼻歌を口ずさむ。',
      ]);
      await era.printAndWait([
        '……なぜか、',
        acute.get_colored_name(),
        ' の鼻歌を聞いていると、眠くなってくる。',
      ]);
    } else {
      await acute.say_and_wait([
        callname,
        '、川沿いの散歩は風雅ですけど、あまり岸に近づいてはいけませんよ。落ちたら大変ですから。',
      ]);
      await era.printAndWait([
        '川辺を歩く ',
        acute.get_colored_name(),
        ' が、珍しく真面目な顔で説教している。',
      ]);
      await era.printAndWait([
        '……それでも、',
        acute.get_colored_name(),
        ' は楽しそうだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_arcade(acute, you, callname) {
    await era.printAndWait([acute.get_colored_name(), ' とゲームセンターへ……']);
    await acute.say_and_wait([
      'あらあら～ ',
      callname,
      '、よければ、パンチングマシンを試してもいいですか？',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' は右腕をほぐし、上体を軽くかがめ、パンチングマシンへ全神経を集中させる。いつも穏やかな',
      acute.sex,
      'の目に、今は闘志が燃えている。',
    ]);
    await era.printAndWait([
      '……',
      acute.get_colored_name(),
      ' の、別の面を見た気がした。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづな/ハープスターへの呼び方
   * @param {boolean} special_item 闘魂注入鞭を引いたか
   */
  async o_s_drawing(acute, you, callname, call_301, special_item) {
    await era.printAndWait([
      acute.get_colored_name(),
      ' と商店街の抽選会に参加した……',
    ]);
    await acute.say_and_wait('新鮮な大根が当たるといいですね～');
    await era.printAndWait('ぐるぐるぐるぐる……');
    await era.printAndWait('びゅっ～');
    if (special_item) {
      await era.printAndWait('商店街の景品【闘魂注入鞭（S用）】を入手した！');
      await era.printAndWait(
        'おいおいおいおい！ 誰が全年齢の商店街の抽選に、子供向けでないものを入れたんだ！？',
      );
      await era.printAndWait('こんなものは成人向け通りの抽選機に——');
      await acute.say_and_wait('あらあら、かっこいい九節鞭ですね～');
      await era.printAndWait([
        '用途を誤解している？ 闘魂注入鞭（S用）を受け取った ',
        acute.get_colored_name(),
        ' の目が輝く……',
      ]);
      await acute.say_and_wait([
        'ええ……',
        callname,
        ' は、こういう道具にとても慣れていそうな気がします——',
      ]);
      era.printButton(
        `「${call_301.content} に目をつけられるようなことは言わないでください。」`,
        1,
      );
      await era.input();

      await acute.say_and_wait([
        'ん？ どうして ',
        call_301,
        ' に目をつけられるのですか？',
      ]);
      era.printButton('「ああ、それは……」', 1);
      await era.input();
      await era.printAndWait('………………');
      await era.printAndWait([
        'とりあえず、「なぜ ',
        call_301,
        ' に目をつけられるか」は説明せず、この場を濁した。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' から受け取った闘魂注入鞭（S用）は、とりあえずトレーニング室の倉庫の、蜘蛛の巣が張る隅へ置いた。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([
        'なお、',
        acute.get_colored_name(),
        ' が闘魂注入鞭（S用）の正しい使い方を知ったあと「大活躍」する、辛くて熱くて桃色の尻まで混ざる後日譚は、また別の話——',
      ]);
    } else {
      const buffer = [
        async () => {
          await era.printAndWait(
            '商店街の景品【ポップアップティッシュ】を入手した！',
          );
          await acute.say_and_wait([
            'あらあら～ ',
            callname,
            ' が夜に使えそうですね～',
          ]);
          await you.say_and_wait('………………');
          await era.printAndWait('いやいや！ 使わないから！？');
        },
        async () => {
          await era.printAndWait(
            '商店街の景品【普通のティッシュ】を入手した！',
          );
          await acute.say_and_wait(
            '普通のティッシュ、ですか……食べ物の敷き紙に使えますね～',
          );
          await era.printAndWait([
            '最下位の景品なのに、',
            acute.get_colored_name(),
            ' はそれでも嬉しそうに、店員からティッシュを受け取った——',
          ]);
        },
        async () => {
          await era.printAndWait('商店街の景品【ニンジン】を入手した！');
          await acute.say_and_wait('おや？ 抽選で本当に大根が出るのですね～');
          await era.printAndWait([
            acute.get_colored_name(),
            ' の顔に、喜びが浮かぶ——',
          ]);
        },
        async () => {
          await era.printAndWait('商店街の景品【ニンジン一籠】を入手した！');
          await acute.say_and_wait(
            'ひとつ、ふたつ、みっつ……あらあら、この量なら、一週間分のたくあんが漬けられますね。',
          );
          await acute.say_and_wait([
            'たくあんができたら、',
            callname,
            '、トレセンの皆に分けましょうか？',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            ' は振り返り、穏やかな笑顔に仏光が差した——',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async o_s_ktv(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('歩み寄る～帝王よ～バビロンの軍団～');
      await era.printAndWait('時代を感じる曲。どこかの特撮の主題歌だろうか。');
      await era.printAndWait([
        '目を閉じると、バイクに跨った ',
        acute.get_colored_name(),
        ' が何かを追っている——',
      ]);
    } else {
      await acute.say_and_wait('狙うは～闇の影～三女神の平和を守る～');
      await era.printAndWait(
        '少年心をくすぐる曲で、たくあんを傍らに味わうのにぴったりだ。',
      );
      await era.printAndWait([
        '目を閉じると、',
        acute.get_colored_name(),
        ' が腰に手を当てて欄干に立つ姿が見える——',
      ]);
      await era.printAndWait('……待て！ 本当に上がるな！');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_movie(acute, callname) {
    await era.printAndWait([acute.get_colored_name(), ' と映画を見に……']);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        '生まれつき体の不自由な',
        acute.uma_sex_title,
        'が、自らを鍛え、敗れてもなお立ち上がる奮闘の末に三女神の加護を得、いくつものレースで奇跡を重ねる物語——',
      ]);
      await acute.say_and_wait([
        'ええ……熱いお話ですね、',
        callname,
        '——帰ったら、追加の調教を増やしてもいいですか？',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' の血が、燃えたようだ……',
      ]);
    } else {
      await era.printAndWait([
        '三十路の',
        acute.uma_sex_title,
        'が、若き日に亡きトレーナーの連れ合いと約束した世界一周の夢を叶えるため、道で出会った関西の小',
        acute.uma_sex_title,
        'と世界を駆け巡る伝説——',
      ]);
      await acute.say_and_wait(
        'ええ……ロマンチックなお話ですね～ できれば、わたしもこんな旅をしてみたい——',
      );
      await era.printAndWait([
        'そう漏らしたあと、上映が終わるまで、',
        acute.get_colored_name(),
        ' の視線を感じ続けた……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} dice 祈祷の出目。0-1の小数で、小さいほど良い
   */
  async o_c_pray(acute, you, callname, dice) {
    await acute.say_and_wait('あらあら……神社へお参りですか？');
    await era.printAndWait([
      '休みの前日、',
      acute.get_colored_name(),
      ' に、一緒に神社へお参りしようと提案した。',
    ]);
    await acute.say_and_wait(
      'そう、ですか……神社へ行くなら～ 準備をしっかりしないと……',
    );
    await era.printAndWait([
      '予想どおり、どこか年かさな ',
      acute.get_colored_name(),
      ' は「お参り」のような行事にとても気合いが入る。',
    ]);
    await acute.say_and_wait('ただ……神社へ行くなら、早く出ないと……');
    await acute.say_and_wait('お年玉と線香も、先に用意して……');
    await acute.say_and_wait(
      'お供えも……あらあら、今夜はたくあんを漬けないといけませんね……',
    );
    await acute.say_and_wait('……少し、気合いが入りすぎでしょうか。');
    await acute.say_and_wait(
      '神社参りは、早ければ早いほどいいのです。早いほど心が誠実ですから。だから明日は二時間早く起きて準備を——',
    );
    await acute.say_and_wait([
      'あ、',
      callname,
      ' はそんなに早く起きなくていいですよ？ 準備はわたしの方ですから。若者はもっと寝ないと～ 出発のときに、起こしに行きますね～',
    ]);
    await era.printAndWait([
      you.sex_code === 1 ? '孫' : '孫娘',
      '扱いされている気がする……',
    ]);
    await era.printAndWait([
      'というか、',
      acute.get_colored_name(),
      ' も若者だろう。',
    ]);
    if (dice < 0.5) {
      await acute.say_and_wait(
        'あらあら、大吉ですか？ いいことがありそうですね～',
      );
      await era.printAndWait([
        '大吉のおみくじを握った ',
        acute.get_colored_name(),
        ' が、穏やかに微笑む。',
      ]);
      await era.printAndWait(
        '当然だろう。わざわざ二時間早く起きて、神社参りを準備したのだから。',
      );
      await acute.say_and_wait('天道は勤勉に報いる——そういうことですよ。');
      await acute.say_and_wait([
        'どうしました、',
        callname,
        '？ 嬉しそうですね。',
      ]);
      await era.printAndWait('……顔の笑みが、バレたか。');
    } else {
      await acute.say_and_wait(
        '大凶、ですか……最近はもっと善いことをして功徳を積まないといけませんね～',
      );
      await era.printAndWait([
        '大凶のおみくじを握った ',
        acute.get_colored_name(),
        ' は、いつものように穏やかに話す。大凶も、',
        acute.sex,
        'の気持ちを揺らしていないらしい。',
      ]);
      await era.printAndWait('……そうは言っても、どうも腹立たしい。');
      await era.printAndWait(
        '二時間も早く起きて、神社参りを準備したというのに……',
      );
      await acute.say_and_wait([
        'どうしました、',
        callname,
        '？ ご機嫌がよくないようですね。',
      ]);
      await era.printAndWait('……顔の苛立ちが、バレたか。');
    }
    await era.printAndWait('とりあえず、何か理由をつけてごまかそう。');
    await era.printAndWait([
      'どちらにせよ、',
      acute.get_colored_name(),
      ' に子供っぽい自分を見られてはいけない……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_restaurant(acute, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        acute.get_colored_name(),
        ' と駅前で、湯気の立つ油揚げを味わった……',
      ]);
      await acute.say_and_wait('ふう、ふう……あむ～ んむ～ んむむ❤️～');
      await era.printAndWait('油揚げの熱を吹きながら、小さな口で噛む。');
      await era.printAndWait([
        '湯気が ',
        acute.get_colored_name(),
        ' の口からゆっくり散り、舌と喉が微かに震える。',
      ]);
      await acute.say_and_wait('ごく～ ん……はぁ——');
      await era.printAndWait([
        acute.get_colored_name(),
        ' の向かい側に座っていると、礼儀のためにわざと小さく隠した嚥下の音が聞こえる……',
      ]);
      await acute.say_and_wait('……？');
      await era.printAndWait([
        'あ、いけない。',
        acute.get_colored_name(),
        ' の口元、舌先と湯気に夢中になりすぎて、',
        acute.get_colored_name(),
        ' に気づかれた……',
      ]);
      await acute.say_and_wait('…………');
      await era.printAndWait([
        acute.sex,
        'は ',
        you.get_colored_name(),
        ' の丼の、まだ手つかずの油揚げを見て、眉を少し寄せ、不服そうだ。',
      ]);
      await era.printAndWait(
        '食事中なので声は出せず、頬を膨らませて小さな抗議をする。',
      );
      await era.printAndWait([
        'それから、丼を持っていない左手を伸ばし、',
        you.get_colored_name(),
        ' の少し下品な視線を避けるように、湯気の立つ唇の前にかざした。',
      ]);
      await era.printAndWait([
        'こうして、少し眉を寄せた ',
        acute.get_colored_name(),
        ' は、手で湯気の立つ半面を隠した——',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' は、もしかするとそっち方面の天才かもしれない。',
      ]);
    } else {
      await era.printAndWait([
        acute.get_colored_name(),
        ' と駅前のコンビニで、特価のたくあんを味わった……',
      ]);
      era.printButton('「ポリ——」', 1);
      await era.input();
      await era.printAndWait(
        'うん、入り口の歯応えはまだいい。コンビニのたくあんとしては、かなり健闘している……',
      );
      era.printButton('「ポリポリ——」', 1);
      await era.input();
      await era.printAndWait([
        'だがよく味わうと、やはり ',
        acute.get_colored_name(),
        ' のたくあんには遠く及ばない……',
      ]);
      await era.printAndWait(
        '置きすぎて水分が足りず、多少歯に当たるのもそうだし、',
      );
      await era.printAndWait(
        '賞味期限を延ばすためか、大衆の濃い味を狙ったのか、塩気の強い漬け方……',
      );
      await era.printAndWait('ポリポリポリ——');
      await era.printAndWait('噛むほどに、塩気が口の中へ広がる。');
      await era.printAndWait(
        'もともと水分の少ないたくあんが、この塩気の中で、わずかに出た唾液まで奪っていく……',
      );
      await acute.say_and_wait([callname, '、お水はこちらですよ～']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' が魔法瓶の蓋に注いだぬるま湯を受け取り、一気に飲む。',
      ]);
      era.printButton('「ごく、ごく——」', 1);
      await era.input();
      await era.printAndWait([
        'はぁ……',
        acute.get_colored_name(),
        ' のおかげで助かった。',
      ]);
      await era.printAndWait(
        'くそ、特価たくあんでペットボトルの甘い水を売り込むコンビニの陰謀に、もう少しで引っかかるところだった！',
      );
      await era.printAndWait('たくあんは、ああいうものじゃない。');
      await era.printAndWait('少し塩気はあっても、味わって乾きすぎない。');
      await era.printAndWait('唾液を刺激しつつ、体の水分は奪わない。');
      await era.printAndWait(
        '歯応えがあって塩気があって、それでも口に入れやすい。調教のあと、大量の水が飲めない時間に、たくあんで適度に唾液を出して渇きを和らげる、美味しくて栄養もあって調教の助けにもなる食べ物であるべきだ！',
      );
      await era.printAndWait(
        '美味しくて栄養のあるたくあんを、こんな陰謀だらけの工業製品にするなんて……コンビニ、許せない——',
      );
      await acute.say_and_wait([
        'ねえ、',
        callname,
        '。帰ったら、わたしの部屋でたくあんを食べませんか？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の胸の内を見透かしたように、傍らの ',
        acute.get_colored_name(),
        ' が、急がず、ちょうどいいタイミングで ',
        you.get_colored_name(),
        ' の独白へ割り込んできた。',
      ]);
      era.printButton('「はぁ！ 言うまでもない！！」', 1);
      await era.input();
      await era.printAndWait([
        acute.get_colored_name(),
        ' の誘いを豪快に受け、その夜は ',
        acute.get_colored_name(),
        ' の部屋で、腹いっぱい食べた。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {boolean} do_sex 性愛するか
   */
  async o_s_dating(acute, you, callname, do_sex) {
    await era.printAndWait([
      '休みに ',
      acute.get_colored_name(),
      ' と駅でデートする約束を——',
    ]);
    await acute.say_and_wait('ええ……最近、腰が少し痛いのです～');
    await era.printAndWait([
      '予告もなく、',
      acute.get_colored_name(),
      ' が突然そう言った。',
    ]);
    if (do_sex) {
      await acute.say_and_wait([callname, '、今夜、ほぐしていただけますか？']);
      await era.printAndWait([
        'そう言いながら、',
        acute.get_colored_name(),
        ' は通りで遠慮なく ',
        you.get_colored_name(),
        ' の腰を叩き、意味深な笑みを浮かべる。',
      ]);
      await era.printAndWait('………………');
      if (era.get('item:斗魂注入鞭（S用）') > 0) {
        await acute.say_and_wait([
          'ねえ。',
          callname,
          '、今夜は……【あれ】を使ってもいいですか？',
        ]);
        await era.printAndWait([
          '桃色の唇に透明な汁が光り、',
          acute.teen_sex_title,
          'である猛獣が、',
          acute.sex,
          'の牙を見せた。',
        ]);
        await era.printAndWait([
          '察して、',
          acute.get_colored_name(),
          ' を駅の人気のない隅へ、こっそり連れていく……',
        ]);
        await era.printAndWait('猛獣を調える闘魂注入鞭を取り出した——');
        await acute.say_and_wait('…………');
        await acute.say_and_wait('！');
        await acute.say_and_wait('————');
        await acute.say_and_wait('❤️～');
      } else {
        await era.printAndWait('言い終わる前に、すでに抱きつかれていた。');
        await era.printAndWait([
          acute.teen_sex_title,
          'である猛獣に強く抱かれ、逃げる余地はない。',
        ]);
        await era.printAndWait(
          '古来、「獣」を馴らす仕事の中で、給餌は極めて危険だ。',
        );
        await era.printAndWait(
          '相手を満足させられなければ、給餌する側が猛獣の餌になる——',
        );
        await acute.say_and_wait('❤️——————');
        await era.printAndWait('深い瞳が、桃色の光を散らす。');
        await era.printAndWait([
          'それが、',
          acute.get_colored_actual_name(),
          ' という猛獣の「捕食」の合図だ。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('今夜は、生死を分ける決闘になりそうだ。');
      }
    } else {
      await era.printAndWait([
        'マッサージしようと提案したが、',
        acute.get_colored_name(),
        ' に断られた……',
      ]);
      await acute.say_and_wait(
        'ええ……ふわふわしたマッサージより、もっと刺激のある治療がいいですね——',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' はいつもどおりふわふわと話し、視線は駅の隅のSM用具店へ流れていく。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('気のせい、だろう。');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_shopping(acute, you, callname) {
    await era.printAndWait([
      acute.get_colored_name(),
      ' と駅前のショッピングモールを歩いた……',
    ]);
    await acute.say_and_wait('たくあん～ たくあん～');
    await era.printAndWait([
      '軽快な鼻歌を口ずさみ、',
      acute.get_colored_name(),
      ' は値下げコーナーを信じられない速さで駆け、値札が下がったばかりの品をかごへ放り込む。',
    ]);
    await era.printAndWait(
      '「これは調教に使えそうだ」と感心する前に、かごはもういっぱいだった。',
    );
    era.drawLine();
    const buffer = [];
    buffer.push(
      async () => {
        await era.printAndWait('かごには値下げ食材が山積みになっている。');
        await era.printAndWait(
          '適当にひとつ取ると、緑色の「-60％」タグが目立つ。',
        );
        await acute.say_and_wait([
          'あはは、マイナス99％のニンジンですよ～ 今夜は、',
          callname,
          ' に口福がありそうです～',
        ]);
        await era.printAndWait(
          '言い終わるか終わらないかで、また緑タグの食材がかごへ——',
        );
      },
      async () => {
        await era.printAndWait(
          'かごにはトレーニング食品が山積みになっている。',
        );
        await era.printAndWait(
          '適当にひとつ取ると、「一日二回で脂肪燃焼！ 一ヶ月で腹筋八つ！」といった大げさな宣伝が印刷されている。',
        );
        await era.printAndWait([
          '……頭の中に、腹筋八つの ',
          acute.get_colored_name(),
          ' が浮かび始める。',
        ]);
        await acute.say_and_wait([
          'ええ……やはり ',
          callname,
          ' は、もう少し筋肉量を増やさないと～',
        ]);
        await era.printAndWait([
          '——なんだ、',
          you.get_colored_name(),
          ' のために買っていたのか。',
        ]);
        await era.printAndWait(
          '頭の中の見てはいけない絵を慌てて拭き、安心して息を吐く。',
        );
        await era.printAndWait('………………');
        await era.printAndWait([
          '会計では、',
          acute.get_colored_name(),
          ' より先に出た。',
        ]);
        await era.printAndWait([
          'かごの中身のほとんどが自分用だ。',
          acute.get_colored_name(),
          ' に払わせるわけにはいかない。',
        ]);
        await era.printAndWait(
          '家族にもらった黒い財布を出し、以前うっかり破れた穴を左手で隠し、レジの数字を緊張して見ながら、財布の中の残り少ない大札を名残惜しげに数える——',
        );
        await acute.say_and_wait(['腹筋八つの ', callname, '……えへへ～']);
        await era.printAndWait('………………');
        await era.printAndWait('今、妙な台詞を聞いた気がする。');
        await era.printAndWait([
          '振り返ると——',
          acute.get_colored_name(),
          ' は相変わらず優しくこちらを見ている。穏やかな笑顔はいつもどおりで、ただ口元になぜか液体の跡が残っている。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('気のせい、だろう。');
      },
    );
    if (era.get('love:100') >= 75) {
      buffer.push(async () => {
        await era.printAndWait('ニラ、レバー、卵……');
        await era.printAndWait('レバー、卵、ニラ……');
        await era.printAndWait('卵、ニラ、レバー……');
        await era.printAndWait('半額のニラ、新鮮なレバー、澄んだ溶き卵……');
        await era.printAndWait('……全部、「腎」を養う食材じゃないか。');
        await era.printAndWait([
          '立ち止まる暇もなく、恐る恐る ',
          acute.get_colored_name(),
          ' を見る。返ってきたのは、',
          acute.get_colored_name(),
          ' の少し意味深な微笑み——',
        ]);
        await era.printAndWait('…………');
        await era.printAndWait('今夜は長い夜になりそうだ——');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async possessive(acute, callname) {
    await acute.print_and_wait(['また枯れ木の洞へ来た……']);
    await acute.print_and_wait([callname, ' の体に、跡を残したい。']);
    await acute.print_and_wait(['キスだけじゃない。他の場所にも。']);
    await acute.print_and_wait([
      '耳たぶ、頬、顎、首、胸……全部に、わたしの跡を残したい。',
    ]);
    await acute.print_and_wait([
      'これが占有欲、というものなのでしょうか。正直、よく分かりません。',
    ]);
    await acute.print_and_wait([
      callname,
      ' の唇へ近づきたい。鼻と唇の吐息を交差させたい。左の心臓がどきどきと鳴り、すべてが耐えがたい。',
    ]);
    await acute.print_and_wait(['恋人同士のキス……危険な行いですね。']);
    await acute.print_and_wait([
      '本当に口づけて、体が ',
      callname,
      ' への依存になってしまったら、そのとき……わたしはどうなるのでしょう。',
    ]);
    await acute.print_and_wait([callname, '……責任を取ってくれますか。']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} you プレイヤー
   */
  async kiss(acute, tama, you) {
    tama.name = '某関西の' + acute.uma_sex_title;
    await era.printAndWait([
      '人通りの多い中庭で、他の',
      acute.uma_sex_title,
      'の視線に耐えながらデートするには、相当な覚悟が要る……',
    ]);
    await acute.say_and_wait(
      'あら……ここでデート、ですか？ わたしは構いませんよ～',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' は、周囲の',
      acute.uma_sex_title,
      'の目など気にしていないようだった……',
    ]);
    await era.printAndWait([
      '——',
      acute.get_colored_name(),
      ' の、期待する眼差しを感じる。',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('人通りの多い中庭で、愛し合う二人が互いを求める。');
    await era.printAndWait(
      '周囲の目などもう気にせず、激しい唾液が相愛の契約を交わす。',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      '小さな両手が ',
      you.get_colored_name(),
      ' の頭を抱き、桃色に光る視線が、昼も夜も ',
      you.get_colored_name(),
      ' ひとりだけを見つめている。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' も、いちばん熱い愛と、いちばん激しい口づけで応える——昼も夜も、互いを強く抱きしめて——',
    ]);
    await era.printAndWait('………………');
    await you.say_as_passer_by_and_wait(
      'タイムライン民',
      'あの二人、どれくらい続いてるの？',
    );
    await you.say_as_passer_by_and_wait(
      'ウマ垢ユーザー',
      '分からない……もう二時間は経ってるんじゃない？',
    );
    await tama.say_and_wait(
      'おいボケが、空も暗なってきてんのにまだここでチューしてんのか。なんや、ほんまに中庭でパーリィか？',
    );
    await era.printAndWait('………………');
    await era.printAndWait('昼も夜も、春夏秋冬も。');
    await era.printAndWait([
      'これからの人生は、もう',
      acute.sex,
      'と離れない。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async boxing(acute, you, callname) {
    await era.printAndWait([acute.get_colored_name(), ' とゲームセンターへ……']);
    await acute.say_and_wait([
      'あらあら～ ',
      callname,
      '、よければ、パンチングマシンを試してもいいですか？',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' は右腕をほぐし、上体を軽くかがめ、パンチングマシンへ全神経を集中させる。いつも穏やかな',
      acute.sex,
      'の目に、今は闘志が燃えている。',
    ]);
    await era.printAndWait([
      '……後ろから、かがんで持ち上がった ',
      acute.get_colored_name(),
      ' の豊かな尻を見て、胸に邪悪な考えが湧く。',
    ]);
    await era.printAndWait([
      'パンチングマシンに集中している ',
      acute.get_colored_name(),
      ' へそっと近づき、',
      acute.sex,
      'が拳を振るう準備で尻を突き出した隙に、罪深い右手を静かに溜める——',
    ]);
    era.printButton('「ぱっ！」', 1);
    await era.input();
    await acute.say_and_wait('ひゃあっ～！？');
    await era.printAndWait('恥じらいと、どこか興奮の混ざった顫音。');
    await era.printAndWait([
      '普段なら、年かさな ',
      acute.get_colored_name(),
      ' がこんな小さな',
      acute.child_sex_title,
      'みたいな声を出すとは、とても想像できない。',
    ]);
    await era.printAndWait(
      '豊かな尻の、弾む感触がまだ新しく、忘れがたい。満足と罪悪の混ざった加虐心が、胸の高鳴りを鎮められない。',
    );
    await era.printAndWait([
      'だが、感動が胸に残っているうちに、',
      acute.get_colored_name(),
      ' の溜めていた拳が、音もなく放たれた。',
    ]);
    await era.printAndWait('どん！！！！！！！');
    await era.printAndWait('尻への一撃より、はるかに激しい音。');
    await era.printAndWait(
      'アームは歪み、液晶は割れ、パンチングマシンから焦げ臭い白い煙が上がる。',
    );
    await era.printAndWait('……あれ？');
    await era.printAndWait([
      acute.get_colored_name(),
      ' の拳、こんなに強かったのか。',
    ]);
    await era.printAndWait(
      '前にゲームセンターへ来たときは、順位もトレセン学園の中の上くらいで、体育会系の人間でも届く水準だったはずでは。',
    );
    await era.printAndWait([
      '一撃でパンチングマシンを壊す？ えっ、もしかして ',
      acute.get_colored_name(),
      ' は今まで力を隠していた……',
    ]);
    await acute.say_and_wait('む～ む——！');
    await era.printAndWait([
      '片手で自分の豊かな尻を押さえた ',
      acute.get_colored_name(),
      ' が、ゆっくり振り返る。涙は浮かべていても泣いてはおらず、恥じらいとも嫌悪ともつかない、一言では言えない色が混ざっている。',
    ]);
    await era.printAndWait([
      acute.sex,
      'は口を尖らせ、小さな息で頬を膨らませる。',
      acute.sex,
      'がいちばん生き生きして、同年代らしくかわいく見える瞬間だ。',
    ]);
    await era.printAndWait(
      '——ゆっくり拳を構えて上げている右手がなければ、だが。',
    );
    era.drawLine();
    await era.printAndWait([
      'ともかく事後は説教という形で、なんとか ',
      acute.get_colored_name(),
      ' の許しを得た。',
    ]);
    await era.printAndWait([
      'ただあの日から、調教の最中、',
      acute.get_colored_name(),
      ' がときどき ',
      you.get_colored_name(),
      ' へ、妙な視線を送ってくる気がする。',
    ]);
    await era.printAndWait([
      '……',
      you.get_colored_name(),
      ' の気のせい、だろう。',
    ]);
  },
  basement_end: (() => {
    const title = '情愛の牢';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait('逃げ道の扉は封じられた。');
      await era.printAndWait('鍵ではない。純粋な腕力だ。');
      await era.printAndWait(
        '取っ手を原点に、扉全体が内側へ歪み、渦のように形を変えている。',
      );
      await era.printAndWait(
        'さらに恐ろしいのは、扉が外されていないことだ——扉と壁の脆い接続はまだ無事で、扉と一緒に歪んでいるのは、壁面そのものだった。',
      );
      await era.printAndWait(
        'そう……鉄筋で形を決めたコンクリートの壁が、生地のように柔らかく変形している！',
      );
      await era.printAndWait(
        'コンクリートを壊すだけでは、ここまではできない。凝固したコンクリートの構造を壊さず、何らかの力で壁に靭性を与え、鉄筋ごと壁面全体を、ばねを捏ねるように渦状へ歪めた……',
      );
      await era.printAndWait(
        'しかも、ばねを捏ねたですらない——壁全体を抱えてなどいない。取っ手を握っただけだ！',
      );
      await era.printAndWait(
        '物理学の奇跡……いや、奇跡では足りない。この閉じた部屋では、物理学がもう存在しない！',
      );
      await acute.say_and_wait([
        'ねえ、',
        callname,
        '、知っていますか。わたし、もう煩雑な決まりごとは飽き飽きなのです。',
      ]);
      await era.printAndWait(
        '自分がまだ恐慌の中にいるというのに。奇跡の扉の前で、灰色の影はいつもどおり、穏やかな声が閉じた部屋に響く。',
      );
      await acute.say_and_wait([
        '実はね、',
        callname,
        '、わたしはずっと耐えていたのですよ？ あなたを傷つけたくなかったから、回数も頻度も、自分で抑えていました。',
      ]);
      await acute.say_and_wait([
        'それなのに、',
        callname,
        ' は他の子たちと仲睦まじくしていたい、と考えている……',
      ]);
      await acute.say_and_wait([
        callname,
        ' が、自分の本当の気持ちに従うと言うなら……',
      ]);
      await acute.say_and_wait('わたしも、少し本気を出しても……いいですよね？');
      await era.printAndWait([
        'そう言って、',
        acute.get_colored_name(),
        ' はポケットから、畳むと親指一本分ほどの長さになった分解済みの小さな傘を取り出した。',
      ]);
      await era.printAndWait([
        'それから、細い両手を ',
        you.get_colored_name(),
        ' の眼前へ伸ばし、指一本分の厚さの小さな傘を、親指と人差し指で ',
        you.get_colored_name(),
        ' の前へ差し出す。',
      ]);
      await era.printAndWait('「じりじり……」');
      await era.printAndWait('ゴム製品が、ゴムでは絶対に出さない音を立てる。');
      await era.printAndWait([
        '指一本分の厚さのゴムの傘が、',
        you.get_colored_name(),
        ' の眼前で真っ二つに裂け、屑のように床へ落ちた。',
      ]);
      await acute.say_and_wait(
        '……今日は、わたしが飽きるまで、絶対に休ませませんよ。',
      );
      await acute.say_and_wait([callname, { color: 'pink', content: '❤️～' }]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait('暗い瞳に、桃色の輪が光る。');
      await era.printAndWait(
        'まもなく、閉じた部屋のあちこちへ、純白の血が流れる……',
      );
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '金の奴隷';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        '金は万能の鍵だ。この鍵を失えば、すべての扉が閉じる。',
      );
      await era.printAndWait([
        '大人として、',
        you.get_colored_name(),
        ' はその道理をよく知っている。',
      ]);
      await era.printAndWait([
        'それでも、',
        you.get_colored_name(),
        ' は教育者として踏み出してはいけない一歩を、踏んでしまった。',
      ]);
      await era.printAndWait(
        '全財産を、新発売のトレーディングカードゲーム【ダークトレセン】に注ぎ込み、さらには番号100、世界限定100枚のUR鏡面金レア【灰眼の絵女】を得るため、ある競売サイトで一時の高揚に負け、最終的に百三億二千万円でその稀少品を落札したのだ。',
      );
      await era.printAndWait([
        'だが、言うまでもなく、',
        you.get_colored_name(),
        ' に百三億二千万円などない。',
      ]);
      await era.printAndWait(
        'ただの競売ゲームだと思っていた。落札しても、あとで相手に金がないと伝え、少額の違約金を払って再競売すればいい……',
      );
      await era.printAndWait([
        '今朝、弁護士書と裁判所の召喚状が同時に届いて、',
        you.get_colored_name(),
        ' はようやく事態の重さを悟った。',
      ]);
      await era.printAndWait(
        '期限内に百三億の残金を払えなければ、競売サイトは「競売秩序攪乱」で自分を法廷へ送り、最高で三年以上の懲役になる。',
      );
      await era.printAndWait([
        'この裁判が有罪で終わるとは限らない。だが教職員として、法廷に立つこと自体が社会的な死だ。だから金がなくても、',
        you.get_colored_name(),
        ' はどうにかして百三億二千万円を揃えなければならない。',
      ]);
      await era.printAndWait('だが、どう揃える。');
      await era.printAndWait('銀行は、もう貸付の上限に達している。');
      await era.printAndWait([
        you.get_colored_name(),
        ' が困っていると、いつも胸の内を見抜く ',
        acute.get_colored_name(),
        ' が、そっと近づいてきた。',
      ]);
      await acute.say_and_wait([
        callname,
        '、何を悩んでいらっしゃいますか？……あら、お金のことでしょうか。',
      ]);
      await era.printAndWait([
        '裁判所の督促状を、後ろに現れた ',
        acute.get_colored_name(),
        ' に、うっかり見られてしまった。',
      ]);
      await acute.say_and_wait(
        '金額は書いてありませんが、とても大きな数字のようですね。',
      );
      await acute.say_and_wait(
        'お金なら、わたしにも余裕がありますよ……もう少しお渡ししましょうか。',
      );
      await era.printAndWait([
        '以前も ',
        acute.get_colored_name(),
        ' から金を借りたことはある。だが、こんな桁ではなかった。',
      ]);
      await era.printAndWait([
        '理性は告げている。教職員として、担当',
        acute.uma_sex_title,
        'とこれ以上腐った金銭関係を持ってはいけない、と。',
      ]);
      await era.printAndWait('だが、この借金は……');
      await acute.say_and_wait([
        '大丈夫ですよ、',
        callname,
        '。いつものように、家事で返してくださいね～',
      ]);
      await era.printAndWait([
        'その瞬間、',
        you.get_colored_name(),
        ' の顔に、楽で、それでも ',
        you.get_colored_name(),
        ' が拒めない笑顔が浮かんだ……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait(
        '金は万能の鍵だ。この鍵を得れば、すべての扉が開く。',
      );
      await era.printAndWait([
        'それが、',
        acute.get_colored_name(),
        ' が最近になって悟った道理だ。',
      ]);
      await era.printAndWait(
        '普通のガチャで当たった、なんだか稀少そうな一枚が、競売サイトで百三億二千万円もするとは思わなかった。',
      );
      await era.printAndWait([
        'その競売のおかげで、',
        acute.get_colored_name(),
        ' は大きな富を得、',
        you.get_colored_name(),
        ' の借金を返済できた。',
      ]);
      await era.printAndWait([
        '今や ',
        acute.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の金の上の主人だ。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' の作った家事賃金表によれば、',
        you.get_colored_name(),
        ' が仕事をひとつ終えるたび、',
        acute.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の借金を一部免除する。',
      ]);
      await era.printAndWait(
        'たとえば料理、洗い物、一緒の運動、手を繋いでの散歩。',
      );
      await era.printAndWait([
        'それからお話、頭なで、背中のマッサージ、舌を噛む……もちろん ',
        acute.get_colored_name(),
        ' の方から ',
        you.get_colored_name(),
        ' にしてあげる。',
      ]);
      // 二人とも男性ではない
      if (acute.sex_code * you.sex_code !== 1) {
        await era.printAndWait(
          'それに口づけ、愛撫、出産、育児、二子、三子といった追加手当……今は家事賃金表に表立っては書いていないが、もうすぐ書かれるだろう。',
        );
      }
      await era.printAndWait([
        'この家事賃金表どおり、',
        you.get_colored_name(),
        ' が毎日十回こなせるなら、あと三十年で、',
        you.get_colored_name(),
        ' は借金を完済できるはずだ。',
      ]);
      await era.printAndWait([
        'それまでに ',
        you.get_colored_name(),
        ' も拳法を修めないと。引退後、',
        acute.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' を故郷へ連れていったとき、父に認めてもらえないから。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' にとっては、悪くない結末の始まりかもしれない。だが ',
        you.get_colored_name(),
        ' にとっては、これほどの借金を負った時点で、結末はもう決まっていたのかもしれない。',
      ]);
      await era.printAndWait([
        '金の関係に囚われ、',
        you.get_colored_name(),
        ' は結末を迎えた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
