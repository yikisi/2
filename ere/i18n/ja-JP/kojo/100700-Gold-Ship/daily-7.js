/**
 * @file ゴールドシップ - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  good_morning(gs, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say('さすが侠客、ゴルシの隙を突いて逃げおおせたか。');
          gs.say([
            {
              color: gold_color,
              content: 'ふふ、次はもっと厳しく見張らねえとな……',
            },
          ]);
          break;
        case escape_enum.beat:
          gs.say('やるじゃねえか、正面からゴルシ大魔王を倒すなんて。');
          gs.say([
            {
              color: gold_color,
              content: 'そんな強い勇者なら、もっと挑戦されても怖くねえよな？',
            },
          ]);
          break;
        case escape_enum.strike:
          gs.say('くっくっく、まさかてめえにやられるとはな。');
          gs.say([
            { color: gold_color, content: '『次』は、もっと本気出すからな。' },
          ]);
      }
    } else if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        gs.say('疲れた……セミの寿命、二週目に突入したセミ並に疲れた……');
      } else {
        gs.say('もう無理～お願い……今日は休みにしろよ。');
      }
    } else {
      const buffer = [
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                'RED・HOT・ゴルシ、登場！ この世界を真っ赤に染め上げてやるぜ！！！',
            },
          ]),
        () => {
          gs.say('今日の予定は？ 相撲の練習か？');
          gs.say([
            {
              color: gold_color,
              content: 'よし、任せろ！',
            },
          ]);
        },
        () => gs.say('次は舌出しながら走ってみるか'),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                'おお、休みか？ 休みかよ！？ じゃあシャンティーの森へ探検に行くぞ！',
            },
          ]),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '最初は『暇そうなやつがいる……』ってだけだったんだぜ。でもアタシに出会ってから、てめえの人生、だいぶ面白くなっただろ？',
            },
          ]),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   * @param {number|false} b_escape 地下室からの脱出手段。0 は通常、false はプレイヤーが寝ているため該当台詞なし
   */
  select_awake(gs, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say([
            callname,
            ' って、自分で外に遊びに出て、自分で帰ってくるペットか？',
          ]);
          gs.say([{ color: gold_color, content: 'まあいい、手間が省ける。' }]);
          break;
        case escape_enum.beat:
          gs.say('くっくっく、まさかてめえにやられるとはな。');
          gs.say([
            { color: gold_color, content: '『次』は、もっと本気出すからな。' },
          ]);
          break;
        case escape_enum.strike:
          gs.say('おいおい、自分の愛馬にそんな手を出すとか、薄情すぎね？');
          gs.say([
            {
              color: gold_color,
              content: 'でもゴルシは、度胸のあるトレーナー、嫌いじゃねえな❤️',
            },
          ]);
      }
    } else {
      if (Math.random() < 0.5) {
        gs.say('おっ！ ゴルシ様に用か？');
      } else {
        gs.say('ゴルシ様についてこい！');
      }
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_study(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '知ってるか？ ドーナツの穴を生地に開ける、そういうバイトがあるんだぜ。あれはすげえ……虚無感においては……',
      );
    } else {
      await gs.say_and_wait(
        '知ってるか？ サーモンは赤く見えるけど、生物学上は白身魚なんだぜ……',
      );
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_prepare(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: 'はいやー、万人に功は練れるよー、拳あれば懦夫なしだおー',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '今日、アタシは太陽系第九惑星に立つ！ 行くぞ、トレーナー！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async talk(gs) {
    if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        await gs.say_and_wait(
          '疲れた……セミの寿命、二週目に突入したセミ並に疲れた……',
        );
      } else {
        await gs.say_and_wait('もう無理～お願い……今日は休みにしろよ。');
      }
    } else {
      const buffer = [];
      switch (era.get('cflag:7:干劲')) {
        case -2:
          buffer.push(
            () => gs.say_and_wait('やば……意識が溶けてく……'),
            () => gs.say_and_wait('うわ……眠い……用が済んだら起こしてくれ……'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              gs.say_and_wait(
                'ん…ああ、トレーナー……？ 悪い、『eraUMA』のこと考えてた……',
              ),
            () => gs.say_and_wait('ひょいひょい……！ だめだ……やる気が出ねえ！'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `おっ、喧嘩か？ いいぜ、かかってこい！`,
                },
              ]),
            () =>
              gs.say_and_wait(
                'あーー？ 予定があるなら、まあ聞いてやらなくもない。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `てめぇ、何かやらねえなら、${
                    era.get('cflag:7:性别') === 1 ? 'オレ' : 'アタシ'
                  }は勝手に街ぶらするぞー！`,
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    'おいおい、もう走っていいか！？ 走らせねえと、アタシの気力が無駄になる！',
                },
              ]),
          );
          break;
        case 2:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '早く……早くアタシに指示しろ！ 待ちきれねえ、はやくしろ！！！',
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    'ゴールドシップ大・噴・火！ やる気MAX、マジでハイって感じだぜ！！！',
                },
              ]),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_gift(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('だんなぁ、いじわるだねぇ～ほっほっほ～');
    } else {
      await gs.say_and_wait([
        'なんてこった……ゴルシにこんな高い贈り物なんて……',
        {
          content: 'よし！ ならアタシも、ちゃんと走って見せる！',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_cook(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'ん？ トレが飯おごってくれるのか？',
        {
          color: gold_color,
          content: 'は？ 中学特有の格安栄養定食！？ やめろあああ！！！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        'トレーナー、塩回せ！',
        {
          color: gold_color,
          content: 'うおっ、いい焼きそばの匂い！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_rest(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('ゴルシ、もう心が折れた——抱け——');
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '——はっ！！！',
        },
        'アリを数えてたら、うっかり意識失ってた……',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_game(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'トレ～今日は何する？ 『ウマ娘タイクーン』？ 『URA2K』？ それとも……',
        { color: gold_color, content: 'ゴ、ル、シ？' },
      ]);
    } else {
      await gs.say_and_wait([
        'トレ、',
        { color: gold_color, content: 'セガ三四郎が窓の外から見てるぜ。' },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_a_tree_hollow(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、枯れ木のうろへ行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        `${gs.uma_sex_title}はな、最後の最後まで泣くなよ……`,
      );
    } else {
      await gs.say_and_wait([
        '三女神が聞いてるなら、',
        {
          content: '鼓膜はまだ無事か？',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_a_dating(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、デートに行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '思い出？ ……一緒に海底で過ごした七日の休暇、懐かしいな～',
      );
    } else {
      await gs.say_and_wait([
        'やだ～裾がひらひらして恥ずかしいよ～',
        {
          color: gold_color,
          content: 'おい、ちゃんとアタシを見ろよ。',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_r_lunch(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、弁当を食べた……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        'このポテトサラダ、うまいだろ？ 粉をふやかしたやつだぜ。',
      );
    } else {
      await gs.say_and_wait([
        '見ろ、この完璧な肉の五重塔！ まさに精緻を極めた',
        {
          color: gold_color,
          content: '……梅干しの豚ばら煮だ。',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_r_fishing(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、釣りに行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '釣りに必要なのは精神力……自分との戦いだ！ 池の主を釣り上げたとき、アタシの心は『塩素』に勝ったんだぜ！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            'ふっふ～服の下に防弾チョッキ着てるからな。天上から銛が落ちようがサーモンが落ちようが、傷一つねえぜ！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_r_walking(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、散歩に行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            'やば、部屋で飼ってる画用紙を預け忘れた！ あーあ、アタシがいないと寂しがるのに……',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            'コースの向こうの空を眺めれば、この身の故郷・黄金星が見えるんじゃ……ほっほっほ……',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_arcade(gs, callname) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、ゲーセンへ行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('おら！ 一爪でこいつら全部掴んで……なくなった！？');
    } else {
      await gs.say_and_wait([
        callname,
        '！ 弾切れだ、カバーしてくれ！ うおっ！',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_drawing(gs, callname) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、くじを引きに行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        callname,
        {
          content: '！ 金出せ、アタシの10連の心はもう止まらねえ！！！',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait(
        '超小型潜水艦でタイタニックの残骸を探検する旅行券、当たんねえかな？',
      );
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_ktv(gs, callname) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、カラオケへ行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '誰もが君に瞳を奪われる～♪ 君こそ完璧で究極の～',
        {
          content: 'ゲッター！！！',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        'いまの若いのはニコニコ超組曲すら知らねえ……',
        callname,
        ' はまだまだ坊ちゃん……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_movie(gs, callname) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、映画を見に行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'おっ！ クロフネパパが出てる映画じゃねえか？',
        callname,
        ' も見るか？',
      ]);
    } else {
      await gs.say_and_wait([
        '最近のヒーロー映画、つまんねえな……',
        {
          content: 'そうだ、『帰ってきたゴールドシップ』撮るか！',
          color: gold_color,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈りの出目。0-1 の小数、小さいほど良い
   */
  async o_c_pray(gs, you, dice) {
    await gs.say_and_wait([
      { color: gold_color, content: 'はっ——ひょいひょい！' },
    ]);
    await era.printAndWait([
      gs.get_colored_name(),
      ' は他人の神社の門口で、強風に煽られた草の根みたいに揺れ始め、口の中で何やら呟いている。',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: `${gs.uma_sex_title}をよこせ！ ${gs.uma_sex_title}をよこせ！`,
      },
    ]);
    era.printButton('「何やってんの？」', 1);
    await era.input();
    await gs.say_and_wait([
      { color: gold_color, content: '見て分からねえのか？ 神降ろしだよ。' },
    ]);
    await era.printAndWait([
      gs.sex,
      'の得意げな顔に、',
      you.get_colored_name(),
      ' は少し苛立つ。だが',
      gs.sex,
      'は気にもしていない',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: '古来、神の前で舞って悦ばせるのは常識だろ！',
      },
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content:
          '神に愛されしゴールドシップがディスコるんだ、神憑りくらいちょろいちょろい！',
      },
    ]);
    await era.printAndWait([
      'そのとき、',
      gs.get_colored_name(),
      ' の体が硬直し、目が見開かれた！',
    ]);
    if (dice < 0.8) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            'イエスよ！ 御心は分かった、『よく食べてよく寝て、心を明るく保て』ってこったな！',
        },
      ]);
      await era.printAndWait([
        '右頬を引きつらせた ',
        you.get_colored_name(),
        ' は、なぜ神社にイエスがいるのか突っ込みたいし、そのお告げが末期の緩和ケアみたいなのも突っ込みたい。',
      ]);
      await era.printAndWait(`だが${gs.sex}は楽しそうだ。好きにさせておけ。`);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '仏よ！ なぜアタシを見捨てる！ 『トレーナーの言うことをよく聞け』だと……',
        },
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        ' の落ち込む姿を見て、',
        you.get_colored_name(),
        ' の左頬の神経も引きつった。',
      ]);
      await era.printAndWait(
        `だが${gs.sex}が素直に言うことを聞くなら、悪くはない……`,
      );
      await era.printAndWait('……だめだ、やっぱり少し苛立つ。');
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_s_restaurant(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、食事に行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'コーヒー飲むか？',
        {
          color: gold_color,
          content: 'ミルク、辣・油・に替えるよ♪',
        },
      ]);
    } else {
      await gs.say_and_wait([
        'そういえばライスのやつ、パン派だってよ……',
        {
          color: gold_color,
          content: `まさか${gs.sex}、自分の黒子なのか！？`,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_s_dating(gs) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、デートに行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        'なあ、百年後ひまか？ ひまだったら一緒に宇宙行こうぜ。',
      );
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            'ゴルシから目を離すなよ！ 一秒後に何が起きるか、アタシにも分かんねえからな！',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_shopping(gs, callname) {
    await era.printAndWait([
      'と ',
      gs.get_colored_name(),
      ' は、ショッピングモールへ行った……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'なあ ',
        callname,
        '、手、繋ぐか？',
        {
          color: gold_color,
          content: '……あっちの店、カップル八割引きだぜ！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        callname,
        '、アタシでもマクドナルドでオリジナルチキンは頼まねぇだろ？',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async load_talk(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '『あれ』使うのか？ 濫用するなよ、',
        {
          content: '時空を弄ぶやつは、最後は時空の連続性に報いを受けるからな。',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '『あれ』が便利なのは分かってるけど、たまには',
        {
          content: '成り行きに任せたほうが面白ぇだろ？',
          color: gold_color,
        },
      ]);
    }
  },
  slave_end: (() => {
    const title = '金の奴隷';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        'オフィスで、',
        you.get_colored_name(),
        'はデスクの前に座り、スーツに眼鏡、電卓を叩いている',
        gs.uma_sex_title,
        'を、気まずい顔で見ていた。',
      ]);
      await era.printAndWait([
        gs.sex,
        'はTN液晶に浮かぶ数字を見て、綺麗な眉をひそめ、困ったように',
        you.get_colored_name(),
        'を見る。',
      ]);
      era.println();
      await gs.say_and_wait(
        'お客様、そのウマコインじゃ、今月の利息にも届きませんねえ。',
      );
      era.println();
      await gs.say_and_wait(
        '土下座して泣きつき、必ず返すとおっしゃっても、弊社はすでに損失を出しております。',
      );
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        ' が口を開き、',
        gs.sex,
        'の手元の電卓には、胆を冷やす数字が出ていた。',
      ]);
      await era.printAndWait([
        gs.sex,
        'はペンを取り、廃紙の裏に書き殴る。内容は「サンクコスト」「資産流用」「事務手数料」といったものばかり。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        'はなすすべなく頭を垂れ、黙った——反論の余地など、最初からない。',
      ]);
      era.println();
      await gs.say_and_wait(
        'はぁ、ゴルシ銀行は慈善事業じゃありませんからねえ。',
      );
      era.println();
      await era.printAndWait([
        'ところが',
        gs.sex,
        'の口調が一転する。客を気遣うフリをしていた担当者は、一転して、眼前の獲物を罠へ誘う甘い餌になった。',
      ]);
      era.println();
      await gs.say_and_wait([
        '「でも、ご興味はありますか……',
        {
          color: gold_color,
          content: 'ひょっとしたら人生を一発逆転できる、そんなゲームに？',
        },
      ]);
      era.println();
      await era.printAndWait([
        'ローンを一気に返す、唯一の救命綱にすがるため、',
        you.get_colored_name(),
        'はゴールドシップに、『ホープゴルシ号』という名の遊覧船へ連れ込まれた……',
      ]);
      await era.printAndWait([
        '命がけの博打からどう生還するかは、もはや流れに身を任せた',
        you.get_colored_name(),
        'の手にはない。',
      ]);
      era.println();
      await era.printAndWait([
        '金の縁に囚われ、',
        you.get_colored_name(),
        'は結末を迎えた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  basement_end: (() => {
    const title = '愛の檻';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        'は目を開けた。周囲は薄暗く、頭上の黄色い電球だけが懸命に働いている。',
      ]);
      await era.printAndWait([
        '必死に動いてみて、',
        you.get_colored_name(),
        'は手足の金属枷が、力だけでは外れないと悟った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        'の正面、少し左の床には古い真空管テレビが据えられている。',
        you.get_colored_name(),
        'は、このあと何が起きるか、もう分かっている気がした。',
      ]);
      era.println();
      await era.printAndWait(
        '案の定、耳を刺すカチッという音とともに、画面が点く。',
      );
      await era.printAndWait([
        'そこに映ったのは、小さな',
        gs.uma_sex_title,
        'の人形。顔には不気味な仮面がついている。',
      ]);
      await era.printAndWait([
        '人形がある角度へ動いたとき、',
        you.get_colored_name(),
        'は、その下で誰かの手が操っているのを見た。',
      ]);
      era.println();
      await gs.say_as_unknown_and_wait([
        'こんにちは、',
        you.get_colored_actual_name(),
        '。ゲームをしよう——',
      ]);
      era.println();
      await era.printAndWait([
        'ひどく歪ませた',
        gs.sex_code === 1 ? '男声' : '女声',
        'だ。だが',
        you.get_colored_name(),
        'はソフトの助けなどなくても、犯人の見当がつく。',
      ]);
      era.println();
      await gs.say_and_wait([
        '長いあいだ、契約を結んだ',
        gs.uma_sex_title,
        'を放っておいた。そのせいで',
        gs.sex,
        'の恋心は行き場を失った。',
      ]);
      era.println();
      await gs.say_and_wait([
        {
          color: gold_color,
          content: `いま、その${gs.uma_sex_title}が部屋に入り、貴様と死闘を始める。`,
        },
      ]);
      era.println();
      await era.printAndWait(
        '画面の中で適当に揺れていた人形が置かれ、見慣れた影がその下から現れた。',
      );
      await era.printAndWait([
        gs.sex,
        'はカメラに向かってにっこり笑い、変顔をした。',
      ]);
      await era.printAndWait([
        gs.sex,
        'は拳を開く。コンドームの袋が滝のように落ち、それから撮影範囲から消えた。',
      ]);
      era.println();
      await era.printAndWait('鍵が開いた。');
      era.println();
      await era.printAndWait([
        'ゴールドシップの想いの檻に囚われ、',
        you.get_colored_name(),
        'は結末を迎えた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
