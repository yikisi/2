/**
 * @file トウカイテイオー - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {number} b_escape 地下室からの脱出方法
   */
  good_morning(teio, you, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('そうなんだ……はあ。');
          } else {
            teio.say('テイオーさまのトレーナー……はは。');
          }
          break;
        case escape_enum.beat:
          teio.say('本当に……ごめん。');
          era.print([
            teio.sex,
            'は頭を下げ、そのあとも言葉と態度で最大限に詫びた。',
          ]);
          era.print([
            you.get_colored_name(),
            ' は受け止めた。だが ',
            you.get_colored_name(),
            ' は、担当が最近、体力トレーニングにのめり込みすぎている気がする……',
          ]);
          break;
        case escape_enum.strike:
          teio.say('本当に……ごめん。');
          era.print([
            teio.sex,
            'は頭を下げ、そのあとも言葉と態度で最大限に詫びた。',
          ]);
          era.print([
            you.get_colored_name(),
            ' は受け止めた。だが ',
            you.get_colored_name(),
            ' は、最近どこか暗い場所から、ずっと目をつけられている気がしてならない……',
          ]);
      }
    } else if (era.get('status:0:熬夜') > 0) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content:
            '「あ……おはよ、トレーナー。なに、ボク昨日は夜更かししてないよ」',
        },
        '（あくび）',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => teio.say('今日のトレーニング……これだけ！ちゃんとやりきるから！'),
        () => teio.say('えっ、もう始まるの！'),
        () => teio.say('ハチミツ飲みすぎた……ちょっとキツいなあ。'),
      );
      if (era.get('love:3') >= 50) {
        buffer.push(() =>
          era.print([
            teio.get_colored_name(),
            ` は他の${teio.uma_sex_title}と話していたらしい。`,
            you.get_colored_name(),
            `が${teio.sex}の名を呼ぶと、会話を切り上げて駆け寄ってきた。`,
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} b_escape 地下室からの脱出方法
   */
  select(teio, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('トレーナー……ああ。');
          } else {
            teio.say([callname, '、昔のボクより悪戯だね。']);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('また、キミを……全部を、裏切っちゃった。');
            era.print([
              teio.sex,
              'は目を強く閉じ、拳を握る。掌が、血が滲みそうなほど赤い。',
            ]);
          } else {
            teio.say('あ、ボク……');
            teio.say('ごめん、トレーナー。');
            era.print([teio.sex, 'は、以前より素直になった気がする。']);
          }
      }
    } else {
      teio.say(
        Math.random() < 0.5
          ? `ん～無敵のテイオーさまを呼んで、なに？`
          : `ふふん、いつでも準備万端だよ！`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_study(teio, you) {
    await you.say_and_wait('テイオーさまにも、わからないことがあるんだな。');
    await era.printAndWait(
      `${you.name} が少しからかうと、${teio.sex}は唇を尖らせて ${you.name} をじっと睨む。咳払いしてから、まともに講義を始めた。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async talk(teio, you) {
    if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
      if (Math.random() < 0.5) {
        await teio.say_and_wait(
          'ああ……無敵のテイオーさまだって、疲れるときは疲れるよ……',
        );
      } else {
        await era.printAndWait([
          teio.get_colored_name(),
          ' は顔を上げ、視線をふらふらと ',
          you.get_colored_name(),
          ` へ向ける。${teio.sex}を休ませるべきだ……`,
        ]);
      }
    } else {
      switch (era.get('cflag:3:干劲')) {
        case -2:
          await era.printAndWait([
            teio.get_colored_name(),
            ` は焦って足踏みし、全身の毛並みまで逆立っている……今は${teio.sex}に仕事をさせないほうがいい`,
          ]);
          break;
        case -1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' の口元の微笑みが消えている……少し様子がおかしい。',
          ]);
          break;
        case 0:
          await era.printAndWait([
            teio.get_colored_name(),
            ' はあまり元気がなさそうだ。相変わらず明るいが、何かが足りない気がする。',
          ]);
          break;
        case 1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' はグラウンドを自由に走り、ウォーミングアップしている。やる気に満ちている。',
          ]);
          break;
        case 2:
          await era.printAndWait([
            teio.get_colored_name(),
            ' は興奮してその場でハイニーを繰り返し、若々しく逞しい姿が ',
            you.get_colored_name(),
            ' を誘っているようだ。',
          ]);
      }
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async office_gift(teio, callname) {
    await teio.say_and_wait([
      'えっ！これ、',
      callname,
      ' からのプレゼント？今、開けていい？ん……帰ってから、か。わかった。でも、すごく嬉しい！ありがとう！',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_cook(teio, you) {
    await teio.say_and_wait('無敵のテイオーさま……うん、こっちも、できるよ！');
    await era.printAndWait(
      `${you.name} は${teio.sex}のまだ拙い手つきを見て、一緒に手伝い始めた。ほどなく、見た目も香りも整った一卓が出来上がる。`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: 'ボク', color: teio.color },
      '（自分）',
      { content: '、いただきます！', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `微笑み交わしてから、ふたりは自分たちで作った味に顔を埋める。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`起きて、テイオー${teio.adult_sex_title}。`);
      await teio.say_and_wait(`ん——ん～`);
      await era.printAndWait(
        `${teio.teen_sex_title}の体が ${you.name} のうえへ倒れ込み、ふたりともソファへ沈む。`,
      );
      await era.printAndWait(
        `吐息の気流が ${you.name} の首筋をくすぐる。${you.name} は担当${teio.uma_sex_title}の背を気ままに撫で、片手で毛並みも整えてやる。`,
      );
    } else {
      await era.printAndWait(
        `テイオーが珍しく静かになっている。${you.name} は${teio.sex}とソファに並び、のんびりを分け合う。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_game(teio, you) {
    await teio.say_and_wait('やあやあやあ！無敵のテイオーさまは負けないよ！');
    await era.printAndWait(
      `画面のキャラが暴れ回るさまは、今の操作者そのものだ。${you.name} は横で没頭する${teio.sex}を呆れ気味に一瞥する。小さな${teio.uma_sex_title}は真剣にコントローラを握り、額に細かな汗まで浮かべている。${you.name} は微笑んで、視線をゲームへ戻した。`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('今のボクは……はは、ははは、うっ——');
    } else {
      await teio.say_and_wait(
        'くっ……勝ちたい、勝ちたいんだ！ボクはテイオーだ！無敵なんだ！絶対に……',
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `学園のなかで……これは大丈夫なのか？${you.name} の胸に疑問が湧く。だがそばに張りついているテイオーは、顔がやけに赤いだけで、様子は崩れていない。`,
    );
    await era.printAndWait(
      `${teio.sex}のその顔を見て、${you.name} はかえって安心し、他人の視線など気にせず、恋人同士のように${teio.sex}と戯れ始めた。`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  async s_r_lunch(teio) {
    await teio.say_and_wait('ここでご飯、意外といい感じだね！');
    await era.printAndWait(
      '弁当を広げた場所は……「天井」のうえ？ ふたりで、いい昼を味わう。',
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, '、こっち！']);
    await era.printAndWait(
      `${teio.sex}はそう言いながら靴を脱ぎ、素足で浅瀬へ踏み込む。潤んだ白い両足が水のなかで、いっそう愛らしい。`,
    );
    await era.printAndWait(
      `残念ながら、これだけはしゃげば魚は逃げる。${you.name} は呆れて溜息をつき、${teio.sex}の隣に座って釣り支度を始めた。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`川沿いを歩くの～気持ちいい！`);
    await era.printAndWait(
      `${you.name} の担当は鼻歌を歌いながら、踊るような歩幅を見せる。また来よう、と ${you.name} は${teio.sex}の楽しそうな顔を見て思う。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name} と ${teio.name} はゲームセンターで思いきり遊び、帰る前に余ったコインをクレーンゲームで『浪費』することにした。`,
    );
    await era.printAndWait(
      `そうは言っても、ふたりともかなり真剣にスティックを操作し、何度も考えてからボタンを押す……`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '……無敵のテイオー運、分けてあげる！']);
      await era.printAndWait(
        `${teio.sex}は ${you.name} の体に寄り、片腕を掴む。温かく弾力のある感触と、いい匂いが同時に押し寄せ、${you.name} は少しぎこちなくもう一方の手を箱へ入れる……`,
      );
    } else {
      await teio.say_and_wait(
        'うん……運だって、無敵のテイオーさまは負けないよ！たぶん……',
      );
      await era.printAndWait(
        `${teio.sex}が ${you.name} を見る。${you.name} が頷くと、${teio.sex} は手を箱へ入れた……`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '！ボクの歌、どうだった！']);
      await era.printAndWait(
        `${you.name} は唇まで持っていった水杯を慌てて置き、満面の笑みの担当へ思案する顔を作る。さっき${teio.sex}は一心に『恋はダービー☆』を歌い切り、今も頬の赤みが残っている。`,
      );
      await era.printAndWait(
        `${you.name} は腹を探って褒め言葉を並べ、${teio.sex}は ${you.name} のその様子を見て、さらに嬉しそうに笑った。`,
      );
    } else {
      await era.printAndWait(
        `気づくとカラオケ店の前にいた。${teio.sex}の強い希望で中へ入り、しばらく楽しむ——ただし歌うのはほとんど${teio.sex}だった。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `テイオーは ${you.name} の左腕に絡み、つま先立ちで耳元に作品名を囁く。`,
      );
      await era.printAndWait(
        `${you.name} が見ると甘ったるい恋愛映画で、少しおかしくなり、右手でテイオーの頭を撫でようとして、${teio.sex}の恥ずかしさと決意の混じった目とぶつかる。`,
      );
      await era.printAndWait('うん……なら、恋人同士みたいに見に行こう。');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `テイオーの強い希望で、${you.name} は『挑戦しがいのあるホラー』を選んだ。`,
      );
      await era.printAndWait(
        `案の定、山場になるたび小さな${teio.uma_sex_title}は耐えきれず、${you.name} の${teio.sex}側の腕は、感覚がなくなるまで強く掴まれている……`,
      );
    } else {
      await era.printAndWait(
        `${you.name} はテイオーと家族向けのコメディを見て、内容に思わず笑った。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} dice おみくじの出目。0-1の小数で、小さいほど良い
   */
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([
      callname,
      '～はやくはやく、一緒におみくじ引こう！',
    ]);
    await era.printAndWait(
      `小さな${teio.uma_sex_title}が ${you.name} の手を引き、社へ走る。${you.name} は慌てて大股でついていく。目的地に着くころ、${you.name} はすでに汗だくだ……`,
    );
    await era.printAndWait(
      `柔らかい感触が手から離れ、${teio.name} は筒を掲げ、目を細めて笑いながらでたらめに振る——`,
    );
    await teio.say_and_wait('えへへ——はあっ！');
    await era.printAndWait(
      `子供のようなはしゃぎのあと、一本の竹籤が筒から飛び出す。${you.name} は手を上げて指で挟み、目を凝らす。`,
    );
    if (dice < 0.2) {
      await era.printAndWait('（大吉）');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name} は歩み寄り、テイオーへ竹籤を振る。${teio.sex}はそれを奪い取り、驚喜の顔をして ${you.name} へ飛びつき、腰を抱いた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} は大吉だと声に出して読む。テイオーの耳が嬉しそうに跳ね、${teio.sex}は一歩で前へ出て、${you.name} の竹籤を握る手を掴み、中身を確かめてからくすくす笑う。`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('（中吉）');
      await era.printAndWait(
        `${you.name} が文字を読むと、テイオーはその場で胸を張り、腰に手を当て、自分の振り方を自慢しているようだ。`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('（小吉）');
      await era.printAndWait(
        `${you.name} はそれをテイオーへ渡し、${teio.sex}は嬉しそうに笑った。`,
      );
    } else {
      await era.printAndWait('（凶）');
      await era.printAndWait(
        `${you.name} は一瞬迷い、声に出さなかった。テイオーは何かを察し、気まずい顔でその場に立ち、ふたりはこの件を忘れることにした。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async good_night_normal(teio, you, callname) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${teio.name} を学生寮の入口まで送る。`,
    );
    teio.say(['また明日ね！', callname, '！']);
    era.print(
      `疲れる一日だったのに、${teio.sex}は相変わらず元気だ。${you.name} はそう思いながら、${teio.sex}と手を振って別れる。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  gn_sex_intro(teio, you) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${teio.name} を学生寮の入口まで送る。`,
    );
    era.print(
      'いつもどおり別れようとしたところで、なぜか双方の動きが止まり、短い沈黙が落ちる……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: 'ん、', color: teio.color },
      'うん——」',
    ]);
    era.print(
      `沈黙のあと同時に声が出て、また気まずい。だが少し滑稽でもあり、${teio.uma_sex_title}の眉目に笑みが浮かび、${teio.sex}は大胆になって、${you.name} より先に口を開く。`,
    );
    teio.say('あの、外泊届は出してあるから、今日は……');
  },
  gn_sex_confirm: (teio, you) => [
    '声が徐々に細くなる。血が頬へ上り、',
    you.get_colored_name(),
    ' は',
    teio.sex,
    'のその顔に我慢できなくなり、決めた——',
  ],
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} check 求愛判定。大成功なら拒否しても逆に押し切られる
   */
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('ん……そうなんだ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、なお胸を張って自分を見ているのに、目だけが沈んでいく',
        teio.sex,
        'を見て、胸が痛み、片手を',
        teio.sex,
        'の頭へ伸ばす。',
      ]);
      await era.printAndWait([
        'だが突然、',
        teio.sex,
        'が手を上げ、筍のような五本の指が ',
        you.get_colored_name(),
        ' の掌をしっかりと掴む。',
        you.get_colored_name(),
        ' は力を入れて引き抜こうとするが、びくともしない——',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        'はますます ',
        you.get_colored_name(),
        ' へ近づく。',
      ]);
      await teio.say_and_wait('ボクは……どこでも、離したくない、離さないよ。');
    } else {
      await teio.say_and_wait(
        'そ——う——な——の？ じゃあ行こ！準備はできてるよ、場所もね！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が何か言い出すより先に、体力で勝る',
        teio.uma_sex_title,
        'に風のように連れていかれた……今この場では、',
        you.get_colored_name(),
        ' の意見は重要ではないのかもしれない。',
        teio.get_colored_name(),
        ' はただ、これから何が起きるかを ',
        you.get_colored_name(),
        ' に知らせただけだ。',
      ]);
    }
  },
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'お正月だよ！',
        callname,
        '、準備できた？なに遊ぶ？今日は一緒に夜通しはしゃごう！',
      ]);
      await era.printAndWait(
        `${you.name} は慌てて${teio.sex}に声を小さくするよう示す。このまま叫ばせていたら、自分の評判は生徒を誘う変態教師になりかねない。世話が焼ける子だ。`,
      );
      await era.printAndWait(
        `だが……担当${teio.uma_sex_title}がそばで嬉しそうに跳ね、活力に満ちているのを見ると、${you.name} は一年の忙しさも報われる気がした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('ハチミツハチミツ～えへへ～');
      await era.printAndWait(
        `${you.name} が机から顔を上げると、両手を後ろに回し、にこにこと ${you.name} を見ている${teio.uma_sex_title}${teio.teen_sex_title}がいた。`,
      );
      await teio.say_and_wait([
        callname,
        '～これ、ボクが作ったプレゼントだよ～',
      ]);
      await era.printAndWait(
        `${teio.sex}が手を前へ出す。あまり洗練されていないが、心のこもった包装の小さな箱が ${you.name} の眼前に現れる。`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('贈り物を受け取る', 1);
      era.printButton(`${teio.sex}ごと食べてしまう`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は受け取り、礼を言い、${teio.sex}の前で慎重に包装を開け、中のチョコレートを口にする。`,
        );
        await era.printAndWait(
          `担当した生徒や同僚から届いた七、八個のチョコレートを片付けてから、${you.name} は執務机の向こうに座り、仕事の準備をする。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} は${teio.sex}の手から箱を受け取るが、急いで食べず、もう一方の手でゆっくり包装を解きながら、${teio.sex}の手を握ったままにする。`,
        );
        await era.printAndWait(
          `${teio.sex}の顔が耳まで赤くなったところで、${you.name} は突然${teio.sex}を懐へ引き寄せ、チョコレートを含んだまま${teio.sex}の唇へ口づける。`,
        );
        await era.printAndWait(
          `ハチミツとカカオの甘さが、${teio.teen_sex_title}の小さな舌へ絡む……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_temple_fair: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} がメッセージで誘うと、すぐに ${teio.name} から返事が来た。`,
      );
      await teio.say_and_wait(`トレ——ナー——`);
      await era.printAndWait(
        `${teio.teen_sex_title}は、幼さをすべて可愛さへ変え、どこか色気も匂わせる浴衣に着替え、${you.name} の前で一回転する。`,
      );
      await teio.say_and_wait(`この格好、どう？`);
      era.printButton('「うん……」', 1);
      await era.input();
      await era.printAndWait(`答えにくい。`);
      await era.printAndWait(`胸の奥で、何かがプツリと切れた気がする。`);
      await era.printAndWait(
        `小柄な${teio.teen_sex_title}が着ると、まだ育ちきっていないが、それでも充分に色気のある体つきが透けて見える。`,
      );
      await era.printAndWait(
        `いちばん上の純白の耳当てが、小さな${teio.uma_sex_title}を純情な生徒だと指名しているようだ。その下、ゆったりした布は曲線を強調するほど体に密着せず、脇と側腹を透けさせている。`,
      );
      await era.printAndWait(
        `普段は隠れている、滑らかで白い敏感な肌が、今は ${you.name} の視線にさらされている。${you.name} が望めば、手を伸ばして感触を確かめることすらできる……`,
      );
      await teio.say_and_wait(`んっ？`);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.teen_sex_title,
        'の美しさに沈み、しばらく抜けられない。',
      ]);
      era.printButton('我慢できない！', 1, {
        disabled: era.get('love:3') < 75,
      });
      era.printButton('鋼の意志！', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は大きく息を吸い、重くなった体で${teio.uma_sex_title}のそばへ歩み、大きな手を伸ばす——`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '今日の仕事を片付け、執務室を整えた ',
        you.get_colored_name(),
        ' は足を休め、学園の鐘を待つ。',
      ]);
      await era.printAndWait('今日は、何かが起きる。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、定められた運命を待つ。',
      ]);
      era.println();
      await era.printAndWait('「ドン——、トントントン、ドン——」');
      await era.printAndWait([
        '奇妙なノックが届く。',
        you.get_colored_name(),
        ' は息を潜め、扉の陰へ回り、勢いで開ける——',
      ]);
      era.println();
      await era.printAndWait('赤い塊が飛び込む。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は音もなく飛びかかる。',
      ]);
      era.println();
      await teio.say_and_wait('わあ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の奇襲は決まらず、',
        teio.sex,
        'は間に合って振り返り、ちょうど ',
        you.get_colored_name(),
        ' と抱き合うようにぶつかる。',
      ]);
      era.println();
      await teio.say_and_wait('テイオーさまは、驚かされないよ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の担当は腰に手を当て、赤いずきん姿で、片手に籠、もう片方で ',
        you.get_colored_name(),
        ' を掴みに来る。',
      ]);
      era.println();
      await teio.say_and_wait('悪い大人、ボクと遊ぼ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は連呼して承知し、約束どおり',
        teio.sex,
        'と外出した……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'クリスマス！うん、',
        callname,
        ' はサンタになってプレゼントくれるか、ボクと夜通し遊ぶか、どっちかだよ！',
      ]);
      await era.printAndWait(
        `${you.name} は抗議するが、この気力旺盛な担当には、どうやら敵わない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async load_talk(teio, callname) {
    await teio.say_and_wait([callname, '……この子を捨てるの？なんで……']);
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「なんで……なんでなんでなんでなんでなんでなんでなんでなんでなんでなんでなんでなんでなんでなんで」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「なんで……なんでな——」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '一緒に退場するときが、来ちゃったみたい……やっぱり、ちょっと悔しいな。',
          );
        } else {
          await teio.say_and_wait(
            'トレーナー……どんなことがあっても、ボクはずっとそう呼ぶよ。',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          '言葉はない。',
          teio.sex,
          'は最後に ',
          you.get_colored_name(),
          ' を一目見る。青黒い瞳には、涙でも洗い流せない汚れが満ちていた。',
        ]);
      } else {
        await teio.say_and_wait(
          'いつから、ふたりの進む道がずれ始めたんだろう……？',
        );
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            'まさか、こんな結末……だめ！キミもずっとボクのそばにいて！人がどう見ても、キミはボクのトレーナーなんだから！',
          );
        } else {
          await teio.say_and_wait(
            'ひえっ——ば、バレた？じゃ、じゃあこれから、コッソリ……責任、取ってよね！',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('いつから、お互いの目が逸れたんだろう……');
      } else {
        await teio.say_and_wait('……解約、同意する。');
      }
    }
  },
};
