/**
 * @file マンハッタンカフェ - 日常
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  good_morning(coffee, callname, b_escape) {
    if (b_escape > 0) {
      coffee.say([callname, '……休みは、取れましたか？']);
      coffee.say('……勝手に出ていってしまいましたが、何もしませんよ……');
    } else {
      const buffer = [];
      if (era.get('base:25:体力') < era.get('maxbase:25:体力') * 0.45) {
        buffer.push(
          () => coffee.say('私は……もう、無理はできないみたいです……'),
          () =>
            coffee.say('少し、時間をください……コーヒーを一杯、飲みたいので。'),
          () => coffee.say('足が、重い……根を張ったみたいです……'),
        );
      } else {
        buffer.push(
          () => coffee.say('あの子に……追いつくために。'),
          () => coffee.say('星を掴むなら、空へ飛べるかもしれません……！'),
          () => coffee.say('追うべき影は……もう、見えています。'),
          () => coffee.say('……始めましょう。友達も、そう言っています……'),
          () => coffee.say('竜には翼が、私にはコーヒーが……ふふ。'),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} c_awake カフェが起きているか
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  select(coffee, callname, c_awake, b_escape) {
    if (!c_awake) {
      era.print([
        '……',
        coffee.get_colored_name(),
        ' はいま、深く眠っている。睫毛がぴくぴく動いているのは、何の夢を見ているのだろう。',
      ]);
    } else if (b_escape > 0) {
      coffee.say([callname, '……休みは、取れましたか？']);
      coffee.say('……勝手に出ていってしまいましたが、何もしませんよ……');
    } else {
      const buffer = [
        () => coffee.say([callname, '、ここにいます。']),
        () => coffee.say('……ええ、いつもどおりです。'),
        () => coffee.say(['今日も……', callname, ' に、お世話になります。']),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_study(coffee, callname) {
    await coffee.say_and_wait([
      'なるほど……',
      callname,
      ' は、見た目以上にすごいんですね……',
    ]);
    await era.printAndWait('褒められた、のか……');
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_prepare(coffee, callname) {
    if (era.get('love:25') >= 75) {
      if (Math.random() > 0.5) {
        await coffee.say_and_wait([
          '友達に追いつくために、それから ',
          callname,
          ' のために……私、全力を尽くします……！',
        ]);
      } else {
        await coffee.say_and_wait([
          '今の私があるのは、',
          callname,
          ' のおかげです。だから私も……',
        ]);
      }
    } else {
      await coffee.say_and_wait('友達に追いつくために……全力を尽くします……！');
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} c_awake カフェが起きているか
   */
  async talk(coffee, callname, c_awake) {
    if (!c_awake) {
      await era.printAndWait([
        '……眠っている ',
        coffee.get_colored_name(),
        ' の顔を、そっと見つめる。人形のように白く整った顔が、すっかり力を抜いて、細い寝息を立てている。',
      ]);
    } else {
      const buffer = [];
      switch (era.get('cflag:25:干劲')) {
        case -2:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                '、『彼ら』が来ます……！ 私の傍を、離れないで……！',
              ]),
            () =>
              coffee.say_and_wait('調子が、よくない……影に、呑まれそうです。'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                '……すみません、いまは調子が……コーヒーが、一杯あれば……',
              ]),
            () =>
              coffee.say_and_wait(
                'もしかしたら……私たちが辿ってきたこと全部、蜃気楼のような夢なのかも……',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '時間は戻せません……できるのは、いまを尽くすことだけです。',
              ),
            () =>
              coffee.say_and_wait(
                '……あなたは、彼らに憑かれやすいみたいです……変なことがあったら、すぐ教えてください。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '小さい頃から、友達は傍にいました……ずっと背中を追ってきた私は、いつか、きっと……',
              ),
            () =>
              coffee.say_and_wait(
                '友達がいまどこか、ですか……？ ふふ、後ろを見てみますか。',
              ),
            () =>
              coffee.say_and_wait(
                'さっき、あなたの影がひとりで動きました……ふふ、冗談です。',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '鯨が七色の翼を生やして、ラピスラズリの空へ飛んでいく……ふふ、夢の世界は面白いですね。',
              ),
            () =>
              coffee.say_and_wait([
                callname,
                '、いまのあなたは……ええ、調子がいい。彼らには、遭わなさそうです。',
              ]),
            () =>
              coffee.say_and_wait(
                '今日のために選んだ、特別なコーヒーです……縞瑪瑙のように艶やかで……よければ、一緒に味わいませんか？',
              ),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_gift(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        'これは……私に、ですか？ 贈り物、ありがとうございます、',
        callname,
        '。',
      ]);
    } else {
      await coffee.say_and_wait(
        '私への、贈り物……？ あっ、友達！ 勝手に開けないで！',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_cook(coffee, you, callname) {
    await coffee.say_and_wait([
      '今日はビーフシチューはいかがですか、',
      callname,
      '……？',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は意外なほど料理が上手く、',
      you.get_colored_name(),
      ' は傍で手を出す隙がほとんどなかった。',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_rest(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        ' は、コーヒーの木の花言葉を知っていますか？ 『一緒に休みましょう』です。休むときにコーヒーを飲む、そこから来たそうです……',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        '、人の心拍を聞いたことはありますか？ 心臓が奏でる音には、人を眠らせる力があるそうです……それでは、',
        callname,
        '、いま、胸に耳を当てさせてください……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_game(coffee, callname) {
    await coffee.say_and_wait([callname, '、私は負けません……！']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は、わけもなく勝負心に火がついた。',
    ]);
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async s_a_tree_hollow(coffee) {
    await coffee.say_and_wait('友達、必ず超えてみせます……！');
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async s_a_dating(coffee, you, callname) {
    if (era.get('love:25') >= 75) {
      await coffee.say_and_wait([callname, '、これから、どこへ行きますか……']);
      await era.printAndWait([
        '周囲の',
        coffee.uma_sex_title,
        'やトレーナーの視線も気にせず、',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の腕にしっかりしがみつき、耳元で言った。',
      ]);
    } else {
      await coffee.say_and_wait([callname, '、トレセンの中では、やっぱり……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は慌てて周囲を見回している。学園でのデートは、',
        coffee.sex,
        'にはまだ荷が重いのか……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async s_r_lunch(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        '、今日の昼食はサンドイッチとコーヒーです。どうぞ……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' に見つめられながら、昼食を美味しくいただいた。',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        ' が作ったアップルパイ、とても美味しいです……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はアップルパイを食べながら、コーヒーを小さく口に含む。いかにも ',
        coffee.get_colored_name(),
        ' らしい取り合わせだ……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_r_fishing(coffee, you, callname) {
    await era.printAndWait([
      coffee.get_colored_name(),
      ' と一緒に、川へ釣りに行った……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, '、釣りがお上手なんですね……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は、こうした静かな時間の過ごし方が気に入っているらしい。竿は持っていないのに、傍に座って楽しそうに付き添っている。',
      ]);
      await era.printAndWait([
        '……ただ、',
        coffee.sex,
        'が時折こちらを見てくる気がする。',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        '、この川は『彼ら』でいっぱいですよ……',
      ]);
      await era.printAndWait('は？ 冗談だよな？');
      await era.printAndWait([
        'けれど、波の中で死んだように動かないウキを見て、',
        you.get_colored_name(),
        ' はそれでも ',
        coffee.get_colored_name(),
        ' の傍へ寄った……',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_r_walking(coffee) {
    await era.printAndWait([
      coffee.get_colored_name(),
      ' と一緒に、土手を散歩した……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait('……ねえ私に気づいて、This is my love song♪……');
      await era.printAndWait([
        '傍から小さな鼻歌が聞こえた。',
        coffee.get_colored_name(),
        ' は、楽しそうだ。',
      ]);
    } else {
      await era.printAndWait(
        '突然、氷のように冷たいもので手が掴まれた。振り返っても、何もない。',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は反応していない。つまり友達か。少し、慣れてきた気がする……',
      ]);
      await era.printAndWait(
        'そう思ったところで、もう片方の手も掴まれた。こちらは、温かい。',
      );
      await era.printAndWait([
        'ちらりと見ると、',
        coffee.get_colored_name(),
        ' の白い手がそこにある。',
        coffee.sex,
        'は俯いていて、表情は読めない。',
      ]);
      await era.printAndWait('……このまま、歩いていこう。');
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_arcade(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' と一緒に、クレーンゲームを始めた……',
      ]);
      await era.printAndWait([
        'ふたりで、筐体の中の ',
        coffee.get_colored_name(),
        ' のぬいぐるみに何度も挑んで失敗する。諦めかけたとき、ぬいぐるみが突然ひとりで動き、落とし口へ飛び込んだ。',
      ]);
      await coffee.say_and_wait([
        '友達です……返したほうがいいでしょうか、',
        callname,
        '？',
      ]);
      await era.printAndWait(
        '店員を困らせないよう、結局ぬいぐるみは持って帰った。',
      );
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' と一緒に、アーケードで対戦した……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は、こういうゲームがあまり得意ではないらしい。画面の中で',
        coffee.sex,
        'のキャラは一方的に攻められている。',
        you.get_colored_name(),
        ' が最後の一撃を入れようとした瞬間——反応が、ない？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' のキャラが画面中央で止まり、すぐさま持ち直した ',
        coffee.get_colored_name(),
        ' にあっさり倒された。',
      ]);
      await era.printAndWait('……また友達か？');
      await era.printAndWait([
        '向かいの ',
        coffee.get_colored_name(),
        ' を横目に見る。',
        coffee.sex,
        'は何が起きたのか気づいていないらしく、自分の勝利に微笑んでいる。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' が楽しそうなら、それでいいだろう。',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_drawing(coffee) {
    await coffee.say_and_wait(
      'くじ引き、ですか……何が出るでしょう。あっ、友達、邪魔しないで！',
    );
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_ktv(coffee) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait('歌う、ですか？ あまり得意では……');
      await era.printAndWait([
        '最初は気が進まなそうだったが、励ましたおかげで ',
        coffee.get_colored_name(),
        ' は声を出して歌い始めた。',
      ]);
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の前で歌っていると、',
        coffee.get_colored_name(),
        ' は微笑みながら拍子を取っている。',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_movie(coffee) {
    await coffee.say_and_wait(
      '映画なら、『トレセンの五日後宮』はいかがですか？',
    );
    await era.printAndWait([
      coffee.get_colored_name(),
      ' とホラー映画を観た。けれど ',
      coffee.get_colored_name(),
      ' の傍にいると、こういう映画は怖くなりにくい気がする……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} dice 祈祷の出目。0-1 の小数で、小さいほど良い
   */
  async o_c_pray(coffee, you, callname, dice) {
    await era.printAndWait([
      coffee.get_colored_name(),
      ' と外出している途中、神社の前を通った。',
    ]);
    await coffee.say_and_wait(['……', callname, '、中を見てもいいですか？']);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      coffee.get_colored_name(),
      ' の願いを受け入れた。',
    ]);
    await era.printAndWait('神社の中は、人があまり多くない。');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は入ると何かを探し始め、やがておみくじの台で止まり、',
      you.get_colored_name(),
      ' を手招きした。',
    ]);
    await coffee.say_and_wait([
      callname,
      '……おみくじのあと、少し奇妙なことが起きるかもしれません。驚かないでください。',
    ]);
    await era.printAndWait([
      '百戦錬磨の ',
      you.get_colored_name(),
      ' は頷き、傍で ',
      coffee.get_colored_name(),
      ' が一本引くのを見守った。結果は——',
    ]);
    if (dice < 0.5) {
      await era.printAndWait('大吉。');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' はほっとした様子だった。けれど ',
          you.get_colored_name(),
          ' が祝うより先に、目の前に奇妙な光景が広がった。',
        ]);
        await era.printAndWait([
          '主役は ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          '。年齢は今より何歳か上に見え、場所は見知らぬ部屋だ。',
        ]);
        await era.printAndWait('だが、それが肝心ではない。');
        await era.printAndWait([
          '目の前の ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          ' は一糸まとわず、部屋の中で激しく交わっている。',
        ]);
        if (you.sex_code > 0 && coffee.sex_code !== 1) {
          await era.printAndWait([
            '弱い陽が窓からふたりに当たり、汗が金色にきらめく。だがその描写に神聖さはない。今の ',
            coffee.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' に後ろから激しく突かれており、杭打ちのような速さに、生春画を見せられている当の ',
            you.get_colored_name(),
            ' 自身が肝を冷やしている。',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' の表情は普段とは別人だ。目尻の涙と汗、そして妙な液体の跡……そう、精液が混ざり、舌が力なく口から垂れ、体の前後の揺れに合わせて揺れている。',
          ]);
        }
        await era.printAndWait([
          'こうして ',
          you.get_colored_name(),
          ' は、自分と ',
          coffee.get_colored_name(),
          ' の無音の交わりを観た。途中で何度か体位も変わり、最後は ',
          coffee.get_colored_name(),
          ' の余韻に浸った顔で終わった……',
        ]);
        await era.printAndWait([
          '神社の中の ',
          you.get_colored_name(),
          ' と、真っ赤な顔の ',
          coffee.get_colored_name(),
          ' が目を合わせ、またゆっくり逸らし、ふたりとも黙った。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' との仲が、妙な形で深まった……',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' はほっとした様子だった。けれど ',
          you.get_colored_name(),
          ' が祝うより先に、目の前に奇妙な光景が広がった。',
        ]);
        await era.printAndWait([
          '主役は ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          '。年齢は今と大差なく、トレーナーの制服とトレセンの制服を着たまま、場所は見慣れたトレーナー室だ。',
        ]);
        await era.printAndWait('だが、それが肝心ではない。');
        await era.printAndWait([
          '目の前の ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          ' はトレーナー室のソファにぴったり寄り添って座っている。',
          you.get_colored_name(),
          ' は後ろから ',
          coffee.get_colored_name(),
          ' を抱き、顔を ',
          coffee.get_colored_name(),
          ' の首筋に埋め、匂いを深く吸い、落ち着かない両手を胸と脚の間で暴れさせている。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は潤んだ顔をし、制服は乱れ、赤い頬には情欲と期待が書いてある。',
        ]);
        await era.printAndWait('どう見ても、このあと何かが起きる！');
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の服が完全に脱がされそうになったところで、光景は消えた。',
        ]);
        await era.printAndWait([
          '神社の中の ',
          you.get_colored_name(),
          ' と、真っ赤な顔の ',
          coffee.get_colored_name(),
          ' が目を合わせ、黙った。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' との仲が、妙な形で深まった……',
        ]);
      }
    } else {
      await era.printAndWait('……大凶。');
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は少し落ち込み、',
          you.get_colored_name(),
          ' が慰めるより先に、目の前に奇妙な光景が広がった。',
        ]);
        await era.printAndWait([
          '主役は ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          '。年齢は今と大差なく、トレーナーの制服とトレセンの制服を着たまま、場所は見慣れたトレーナー室だ。',
        ]);
        await era.printAndWait('だが、それが肝心ではない。');
        await era.printAndWait([
          '目の前の ',
          you.get_colored_name(),
          ' は ',
          coffee.get_colored_name(),
          ' と喧嘩しているらしい。',
          you.get_colored_name(),
          ' の顔は冷たく、',
          coffee.get_colored_name(),
          ' は涙の跡だらけだ。傍の机には、何かの写真が置いてある——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が写真の中身を見極める前に、光景は唐突に消えた。',
        ]);
        await era.printAndWait([
          '神社の中の ',
          you.get_colored_name(),
          ' が我に返ると、',
          coffee.get_colored_name(),
          ' は無表情で手のおみくじを粉々に引き裂き、どこから出したのかライターで欠片を焼き尽くしていた。その間、幻覚かどうかもわからない、か細い悲鳴が聞こえた。',
        ]);
        await era.printAndWait([
          '帰り道、',
          you.get_colored_name(),
          ' は何度か探るように ',
          coffee.get_colored_name(),
          ' へさっきのことは何かと聞いたが、いずれも ',
          coffee.get_colored_name(),
          ' に煙に巻かれた。',
        ]);
        await era.printAndWait([
          '結局何が起きたのか、',
          you.get_colored_name(),
          ' にはわからない。',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は少し落ち込み、',
          you.get_colored_name(),
          ' は前へ出て',
          coffee.sex,
          'を慰めた。',
        ]);
        await era.printAndWait([
          'トレセンへの帰り道、',
          coffee.get_colored_name(),
          ' は一言も話さず、',
          you.get_colored_name(),
          ' も空気を読んで、',
          coffee.sex,
          'をそっとしておいた。',
        ]);
        await era.printAndWait('神社の秘密は、次の機会にしよう。');
      }
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_restaurant(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, '、何か食べますか？']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' とカフェで、コーヒーと軽い食事をいただいた。',
      ]);
    } else {
      await coffee.say_and_wait('ふぅ……やはり、コーヒーが一番です……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はコーヒーを両手で包み、小さく味わっている。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_dating(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' と手を繋ぎ、街を歩いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が本物かどうか確かめるように、',
        coffee.get_colored_name(),
        ' は時折そっと手を握る。',
        coffee.sex,
        'の細い指が上から下へ ',
        you.get_colored_name(),
        ' の指先を撫で、かすかな痒みを残す。',
      ]);
      await era.printAndWait([
        'お返しに、',
        you.get_colored_name(),
        ' も',
        coffee.sex,
        'の手を握りしめた',
      ]);
    } else {
      await era.printAndWait([
        '突然、柔らかさを感じた。目をやると、',
        coffee.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の腕に抱きつき、ほのかに膨らんだ胸が腕に密着している。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' にも、少し胸があるんだな、と ',
        you.get_colored_name(),
        ' はつい思ってしまった。',
      ]);
      await coffee.say_and_wait([callname, '、失礼なことを考えていませんか……']);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_shopping(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        '、何か買いますか？ たとえば……コーヒー豆、とか。',
      ]);
    } else {
      await coffee.say_and_wait(
        'インスタントコーヒー、ですか……ええ、少し、それは……',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} y_awake プレイヤーが起きているか
   * @param {boolean} c_awake マンハッタンカフェが起きているか
   */
  good_night_normal(coffee, you, callname, y_awake, c_awake) {
    if (y_awake && c_awake) {
      era.print([
        '忙しい一日が終わり、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' を美浦寮の入り口まで送った。',
      ]);
      coffee.say(['ありがとうございました、', callname, '……私も、友達も。']);
    } else if (y_awake) {
      era.print([
        '突然、裾を誰かに引かれた気がして後ろを見ると、',
        coffee.get_colored_name(),
        ' が少し離れた休憩用の椅子で眠っていた。休みを邪魔するのは忍びなく、',
        you.get_colored_name(),
        ' は上着をかけ、',
        coffee.sex,
        'をお姫様抱っこして学生寮へ送った。',
      ]);
    } else {
      coffee.say([
        callname,
        '？ ……ああ、眠ってしまった。働きすぎですか……おやすみなさい、',
        callname,
        '。獏に食べられない、いい夢を。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} check 求愛判定値。大成功なら同意扱い
   */
  async good_night_sex(coffee, you, callname, check) {
    era.print([
      '今日の予定は終わり、',
      you.get_colored_name(),
      ' はいつものように ',
      coffee.get_colored_name(),
      ' を',
      coffee.sex,
      'の寮へ送ろうとした。動き出したところで、袖を ',
      coffee.get_colored_name(),
      ' に掴まれた。',
    ]);
    era.print([
      '振り返ると、ちょうど ',
      coffee.get_colored_name(),
      ' の潤んだ瞳と目が合った。',
    ]);
    coffee.say([callname, '、外泊の申請はもう出してあります。だから……']);
    era.print([
      coffee.sex,
      'は言葉を最後まで言わなかったが、意味ははっきりしている。',
      you.get_colored_name(),
      ' は——',
    ]);
    let ret;
    if (check === 2) {
      ret = 1;
    } else {
      era.printButton('承諾する', 1);
      era.printButton('断る', 2);
      ret = await era.input();
    }
    if (ret === 1) {
      era.print([
        coffee.get_colored_name(),
        ' を優しく抱き寄せると、顔に当たる耳から、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' の喜びを感じ取った。',
      ]);
      await coffee.say_and_wait([callname, '……今夜は、よろしくお願いします……']);
    } else {
      era.print('——ごめん。');
      era.print([
        you.get_colored_name(),
        ' の顔から、',
        coffee.get_colored_name(),
        ' はその色を読み取った。',
      ]);
      coffee.say([
        callname,
        '、今日は疲れすぎましたね……今夜は、ゆっくり休んでください……',
      ]);
      era.print([
        coffee.get_colored_name(),
        ' の顔に浮かんだわずかな失望は、',
        you.get_colored_name(),
        ' の目を逃れていない。次で、埋め合わせよう……',
      ]);
    }
    return ret;
  },
  cl_fans: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait(
        'ファン感謝祭の当日。この日だけ、トレセンの中では……',
      );
      await era.printAndWait('——チリンチリン。');
      await coffee.say_and_wait('……いらっしゃいませ。');
      await era.printAndWait(
        '普段は存在しない、落ち着いた空気のカフェだけが営業する。',
      );
      await coffee.say_and_wait([
        callname,
        '……お待たせしました。特別に焙煎した、マンハッタン特製コーヒーです。',
      ]);
      await coffee.say_and_wait('どうぞ、味わってみてください……');
      await era.printAndWait('じーっ——');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        coffee.get_colored_name(),
        ' の熱い視線を感じた気がした。',
      ]);
      era.printButton('「……他のお客さんを、対応しなくていいのか？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '他のお客さんは、来ません。この静けさこそが、ここの魅力ですから。それに……',
      );
      await coffee.say_and_wait(
        '誰も、ここを見つけられないはずです。入口に入っても、出口へ通されてしまうので……',
      );
      await era.printAndWait('そんなカフェを開いて、何の意味があるんだ……');
      await era.printAndWait(
        '心の中でぼやきつつ、手元のコーヒーを丁寧に味わう。',
      );
      await era.printAndWait('——チリンチリン。');
      await coffee.say_and_wait('あれ……他にも、人が……');
      await era.printAndWait('——チリンチリンチリンチリン……');
      era.printButton('「……一気に、たくさん入ってきた！」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait('男性', [
        'おっ、ここだ！ あの ',
        coffee.get_colored_name(),
        ' がやってるカフェ！',
      ]);
      await you.say_as_passer_by_and_wait('女性', [
        'ほんと、雰囲気いい～！ 内装もきれい～！ 私、',
        coffee.sex,
        'のファンなんです～',
      ]);
      await coffee.say_and_wait('これは……');
      era.printButton('「結局、みんなに見つかったな。」', 1);
      await era.input();
      await coffee.say_and_wait(
        'ええ……でも、どういうことでしょう……？ なぜ、見つかったんでしょうか？',
      );
      era.printButton('「それだけ、みんな必死に探したってことだよ。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は最近、よく目立っている。',
        coffee.sex,
        'の支持も、それに合わせて上がっている。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の知名度が、ファンを呼び寄せたのだろう。',
      ]);
      await coffee.say_and_wait([
        '人は多いですけれど……来てくださった以上、お客さまです……頑張ります。',
      ]);
      await era.printAndWait([
        '数分後、目を回して忙しそうな ',
        coffee.get_colored_name(),
        ' を見て、客だったはずの ',
        you.get_colored_name(),
        ' も、臨時の店員を務めることになった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async end_talk(coffee) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          'カフェを開いてみるのは、どうでしょう……？ すべてが終わったら、会いに行きます。',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait(
          '私たちの約束を無視して、厄介な相手へ目を向けた……結末は、こうです……',
        );
      } else {
        await coffee.say_and_wait(
          '私から、彼らから、離れていく……あなたにとっては、いいことかもしれません……',
        );
      }
    } else {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '回数は、やっぱり多すぎますね……友達も、そう思っています……',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait([
          'これで約束から逃れよう、ですか……？ ……逃げられません。私も、',
          coffee.sex,
          'も……',
        ]);
      } else {
        await coffee.say_and_wait(
          'これからも、どうか気をつけて……彼らは、まだあなたの傍にいます……',
        );
      }
    }
  },
  basement_end: (() => {
    const title = '新しい「友達」';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' のトレーナーは、もう何日も行方不明だ。警察は学園の隅々まで捜したが、手がかりは何も出ていない。',
      ]);
      await era.printAndWait([
        '担当の',
        coffee.uma_sex_title,
        '——',
        coffee.get_colored_name(),
        ' が第一容疑者になった。だが詳しい調査と聴取のあと、すぐに',
        coffee.sex,
        'の嫌疑は晴れた。',
      ]);
      await era.printAndWait('いまも、捜査は続いている……');
      await era.printAndWait(
        '美浦寮で、一対の暗い黄色い瞳が、窓の外を行き来する警官を見つめている。',
      );
      await coffee.say_and_wait([
        {
          color: buff_colors[3],
          content: '——みんな、あなたを捜していますよ、',
        },
        callname,
        { color: buff_colors[3], content: '……' },
      ]);
      await coffee.say_and_wait([
        { color: buff_colors[3], content: 'でも、彼らは見つけられません。' },
      ]);
      await coffee.say_and_wait([
        { color: buff_colors[3], content: 'だって……' },
      ]);
      await coffee.say_and_wait([
        callname,
        {
          color: buff_colors[3],
          content: ' は、私にしか見えない『友達』ですから。',
        },
      ]);
      await era.printAndWait([
        'カーテンをゆっくり引き、暗い部屋の中で、',
        coffee.get_colored_name(),
        ' は背後の、うつろな霊体を抱きしめた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
