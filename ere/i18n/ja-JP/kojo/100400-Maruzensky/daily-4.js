/**
 * @file マルゼンスキー - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  good_morning(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say('ん〜、もう少し寝かせて');
          maru.say('昨日、つい漫画を遅くまで読んじゃったの');
          era.print([
            you.get_colored_name(),
            ` は仕方なく${maru.name}を揺り起こし、姿見の前で${maru.sex}の髪を整えてあげた`,
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say('頭がくらくら……こんな姿、後輩には見せられないわね');
          era.print([maru.get_colored_name(), ' は、かなり眠そうだ']);
        });
      }
    } else {
      buffer.push(() => {
        maru.say('今日のトレーニングメニューは何かしら？');
        maru.say([
          maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん',
          'の私は、もう準備できてるわよ',
        ]);
        era.print(`${maru.name}は、はやる顔をしている`);
      });
      buffer.push(() => {
        maru.say('芝を走る感じ、本当に気持ちいいわね');
        maru.say(`あら、${callname} だったの。`);
        era.print([
          you.get_colored_name(),
          ' が時間どおりコースへ着くと、',
          maru.get_colored_name(),
          ' はもう何周も走っていた',
        ]);
      });
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname} おはよう⭐`);
          maru.say('……なんで隣の部屋まで起こしに来たかって？');
          maru.say(
            `起こしてくれる優しい大${
              maru.elder_sibling_sex_title
            }がいるなんて、幸せだと思わない？`,
          );
          era.print([
            maru.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の布団を剥がして、早く身支度するよう急かした',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(() => {
          maru.say(`${callname} には、まだ目覚めてない力が眠ってそうね`);
          maru.say('まだ弱いけど、もうすぐ顔を出すんじゃないかしら');
          era.print([
            maru.get_colored_name(),
            ' は考え込むように ',
            you.get_colored_name(),
            ' を値踏みしている',
          ]);
        });
        buffer.push(() => {
          maru.say(
            `${callname}、困ったことがあったら${
              maru.elder_sibling_sex_title
            }に言ってちょうだい`,
          );
          maru.say(
            'ずっと胸にしまっておくと、万能キーでも錆びた鍵穴には入らないわ',
          );
          era.print([
            maru.get_colored_name(),
            'は心配そうに ',
            you.get_colored_name(),
            ' を見ている',
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say(
            '全力で走っていると、妙な感じがするの。ふわふわして、芝の上に浮かんでいるみたい。',
          );
          maru.say(`……あ、${callname}おはよう`);
          era.print(`芝を走っていた ${maru.name} は、考え込んでいる`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push(() => {
        maru.say('『この程度じゃ足りない。あなたはもっとできる』');
        maru.say(`あちゃー。${callname} の頼みなら……`);
        era.print([
          maru.get_colored_name(),
          ' は複雑な顔で ',
          you.get_colored_name(),
          ' を見ている',
        ]);
      });
    } else {
      buffer.push(
        () => {
          era.print([
            maru.get_colored_name(),
            ' は、走っているときに当たる風を楽しんでいる。',
          ]);
          maru.say(
            `${callname} に悩みがあるなら、${
              maru.elder_sibling_sex_title
            }に言ってちょうだい`,
          );
          era.print([
            maru.get_colored_name(),
            ' は余裕のある笑顔で ',
            you.get_colored_name(),
            ' を見ている',
          ]);
        },
        () => {
          maru.say(
            `今日のメニューは何？何でも${maru.elder_sibling_sex_title}は余裕よ`,
          );
          era.print(
            `いつの間にか周りに${maru.uma_sex_title}が集まっていた。これが ${
              maru.name
            } の魅力だ。`,
          );
        },
      );
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}、トレーニングのあと、愛車でドライブしない？`);
          maru.say(
            `夜の冷たい風に当たると、${maru.uma_sex_title}も人も、気分が上がるものよ`,
          );
          era.print([
            maru.get_colored_name(),
            ' は体ごと ',
            you.get_colored_name(),
            ' の腕に寄りかかり、いつの間にか尻尾も ',
            you.get_colored_name(),
            ' の太ももに巻きついていた',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(
          () => {
            maru.say(
              'ん〜、四季の風はそれぞれ違うけど、選ぶなら春風がいちばん好き。',
            );
            maru.say(`${callname} は、どの季節の風が好きかしら？`);
            era.print([
              maru.get_colored_name(),
              ' は微笑んで ',
              you.get_colored_name(),
              ' を見ている',
            ]);
          },
          () => {
            maru.say(
              '『春には魔力がある。「もっと良い自分になりたい」と思わせる魔力』',
            );
            maru.say(`${callname} はどう思う？`);
            era.print([
              'ストレッチの前、',
              maru.get_colored_name(),
              ' との雑談で',
              maru.sex,
              'が ',
              you.get_colored_name(),
              ' にそう聞いた',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          maru.say(
            `風の魅力を、私に憧れる後輩たちへ。希望の風の化身、${maru.name}よ〜`,
          );
          maru.say(`ふふ、${callname}、この台詞どうかしら？`);
          era.print(`笑顔の${maru.name}は、機嫌よく尻尾を揺らしている。`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_after_recruit(maru, you, callname) {
    maru.say(
      `ハイ〜${you.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}、私は ${maru.name} よ。`,
    );
    maru.say(
      `レース場で、憧れてくれる後輩たちに${maru.elder_sibling_sex_title}の格好いい背中を見せたいわね。`,
    );
    maru.say(
      `それにしても ${callname}、かわいいわね。夏が人に与える感じそのもの。`,
    );
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  select_sister_annoyance(maru) {
    maru.say('もっと大きな舞台で走ると、気持ちまでキラキラするわね♪');
    maru.say(`何かあったら、必ず${maru.elder_sibling_sex_title}に相談してね？`);
    maru.say('……私たちの間に秘密がなければいいのに。');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_girls_blue(maru, callname) {
    maru.say('膝が、前よりずっと痛い。', true);
    maru.say('あとどれくらい持つのかしら。', true);
    maru.say(`少なくとも、${callname} には悟られないように。`, true);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  select_true_end(maru) {
    maru.say('同じ後悔を、二度としないために。');
    maru.say('少なくとも、迷っている後輩たちに、参考になる道を残すために。');
    maru.say('これからも頑張らないと！');
    maru.say('こうして、かっかかっと Back step よ！');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_good_end(maru, you, callname) {
    maru.say(
      `苦しさも、孤独も、${callname} と一緒なら、たいしたものじゃないみたい。`,
    );
    maru.say(
      `ウマ娘の道で${callname}に出会えたのは、一生の幸運かもしれないわね。`,
    );
    maru.say('ずっと、助けてくれてありがとう。');
    maru.say('これからも一緒に頑張らないとね？');
    maru.say(`ん、${callname} に負荷かけすぎかしら？`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {number} wind マルゼンスキー育成用変数 wind の値
   * @returns {boolean} wind が特定値なら本文を出したので true、そうでなければ続行
   */
  select_by_wind(maru, you, callname, wind) {
    switch (wind) {
      case 1:
        maru.say(`これからもよろしくね。${callname}♪`);
        break;
      case 5:
        maru.say(
          `これは${maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん'}の私への？`,
        );
        maru.say(`じゃあ、${callname}、ありがとう♪`);
        maru.say('ふふ〜、きれいね。');
        break;
      case 10:
        maru.say(
          '芝の上を何度走っても、あの頃の感じが戻らない。生きてる甲斐がないわね。',
        );
        maru.say('……');
        maru.say('風が止んだ。');
        break;
      case 15:
        maru.say(`トレセンのあの夜、芝で走っていた${maru.uma_sex_title}たち。`);
        maru.say(`支えてくれる後輩たち、そしてそばにいる${callname}。`);
        maru.say('心から、幸せだと思ったわ。');
        break;
      case 20:
        maru.say('空と、芝と、徘徊する私たち。');
        maru.say('懐かしい湿った夏と、乾いた秋。');
        maru.say(
          `これからも一緒に歩いていきましょう？${you.sex_code === 1 ? 'ト・レ・ー・ナ・ー・くん' : 'ト・レ・ー・ナ・ー・ちゃん'}♪`,
        );
        break;
      default:
        return false;
    }
    return true;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_Self_contempt(maru, callname) {
    maru.say(`どうして、そんなに沈んでるの？`);
    maru.say('早く元気出して！');
    maru.say(`私はずっと ${callname} を待ってるんだから！`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_happiness_day(maru, callname) {
    maru.say(`真っ青な空、新しい芝。なんだか懐かしい感じがするわね。`);
    maru.say(`あら、${callname}、いつ来たの。`);
    maru.say('じゃあ、いい一日を一緒に楽しみましょう。');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_study(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          'いろんなレースに出るなら、いろんな走りを覚えるのも大事ね……思い切ってドリフト走法、試してみる？',
        ),
      () =>
        maru.say_and_wait(
          '導かれる位置より、こうして一気にゴールする感じ、たまらないわね♪',
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '歴代の重賞映像を見て逃げの要点を分析して、自分を上げていきましょう',
          ),
        () =>
          maru.say_and_wait(
            `${callname} の指導のおかげで、${
              maru.elder_sibling_sex_title
            }もずいぶん伸びたわ。すごっ！`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_prepare(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('後輩たちに、私のいい走りを見せないとね'),
      () =>
        maru.say_and_wait(
          `${callname} は助手席で、風のダンスを味わってちょうだい`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname} から受け取った炎を、後輩たちに見せてあげる`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}、もう少し抱きしめていい？ え、だめ？ けち。`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async talk(maru, callname) {
    const buffer = [];
    if (era.get('cflag:4:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:4:干劲')) {
        case -2:
          buffer.push(
            () =>
              maru.say_and_wait(
                '手に絆創膏？ あちゃー。今朝、自分で朝食を作ろうとして、音楽聞きながら指を切っちゃった……汗。本当に大丈夫よ。',
              ),
            () =>
              maru.say_and_wait(
                `今日はどうしてこんなに遅いの、髪もぼさぼさ……？ 起きたとき段ボールを倒して中身を全部散らかして、戻すのに時間がかかって慌てて来たの。でも大丈夫、今日のメニューは何？`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `${callname}、この携帯の開き方、見てくれる？ え？ そんなに簡単？`,
              ),
            () =>
              maru.say_and_wait(
                `昨日、漫画に夢中になっちゃって。${callname}、ごめんね。`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => maru.say_and_wait(`${callname}、今日の予定は何かしら。`),
            () =>
              maru.say_and_wait(
                `${callname} に何かあったら、私に話してちょうだい。というか${
                  maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん'
                }の私、大歓迎よ♪`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `今日の調子、悪くないわね。${callname} はどうかしら？`,
              ),
            () =>
              maru.say_and_wait(
                `頑張っている子たちが、私の背中を見て、風に吹かれる楽しさを追ってくれたらいいのに`,
              ),
            () =>
              maru.say_and_wait(
                `${callname}、トレーニングのあと、一緒にジュース飲まない？`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              maru.say_and_wait(`ハロー！ ${callname} の熱、伝わってくるわ♪`),
            () =>
              maru.say_and_wait(
                `絶好調！ ${callname} はここで、私が前回の記録を更新するのを見てて♪`,
              ),
            () =>
              maru.say_and_wait(
                `${callname} の奥に眠ってる熱、私が灯してあげる。Let's go!`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}、春風の気配、感じる？ 大地の縛りを破って、空で遊んでいる春風よ。`,
          ),
        () =>
          maru.say_and_wait(
            `かわいい後輩たちは、春の花みたいに香りを漂わせてるわね。${
              maru.sex
            }たちの香りが、この世界の隅々まで届いたらいいのに。`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '四季のなかでいちばん惹かれるのは夏ね。夜、気温がちょうどいいとき、愛車と一緒に自由に走る。私も夏の風とひとつになったみたい。',
          ),
        () =>
          maru.say_and_wait(
            `${callname}、夜は空いてる？ トレーニングが終わったら、一緒に海へ行かない？ 湿った海風が、あの苛立つ乾きを散らしてくれる。月の光の下で、全身が洗い流されるみたい`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          maru.say_and_wait(
            'ん〜、秋ね。秋って、このまま眠ってしまいたくなる気配があるの。トレーニングのあと、訓練室で少し休ませてくれる？',
          ),
        () =>
          maru.say_and_wait(
            `食欲の秋、読書の秋。秋には多感な空気があるわね。夏の湿りと熱も、秋が来ると少しずつ褪めていく`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '万物が休む冬の日、風の精だけがこの白い大地で踊っている。後輩たちも、芝で思いきり走りたがってるみたい',
          ),
        () =>
          maru.say_and_wait(
            `${callname}、あなた、なんだか暖かいわね。トレーニングのあと、商店街で温かい飲み物、一緒にどう？`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_gift(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(`このぬいぐるみ、私に？ ${callname}、ありがとう。`),
      () =>
        maru.say_and_wait(
          `大好きなココナッツドリンクね。ありがとう、${callname}`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `これはお返しを考えないとね。たまんないわ。夜、帰るとき${
              maru.elder_sibling_sex_title
            }の手料理、味わわせてあげる`,
          ),
        () =>
          maru.say_and_wait(
            `なに?! シャンパングラスで盛ったフルーツチョコ、どう見えるかしら？ ${callname} はいつも奇妙な発想ね……暇を見て試してみる？`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_cook(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('懐かしい味。じゃあ、遠慮なく？'),
      () =>
        maru.say_and_wait(
          `${callname} はそこに座って、私の料理を見てて……え？ 一緒に作りたいの？`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}、このオムライス、どう？ おいしいでしょ。${callname} の幸せそうな顔を見ていたら、私もお腹いっぱいみたい`,
          ),
        () =>
          maru.say_and_wait(
            `${
              maru.elder_sibling_sex_title
            }のために一品作ってほしいって……くらくらする、これが幸せの味？ 今、胸が dokidoki して止まらないわ♪`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_rest(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `せっかくの休みなんだから、${callname}、最新のトレンド誌、一緒に見ない？`,
        ),
      () =>
        maru.say_and_wait(
          `${callname}、お疲れ。あっ、ごめん、無意識に頭を撫でちゃった`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}、もう少し抱いてていい？ あなたには、いつも温かい気配があるの`,
          ),
        () =>
          maru.say_and_wait(
            `${callname} は毎日こんなに大変なのに、私に手伝えることはある？ それとも、前みたいに頭を私の胸に埋めたい？`,
          ),
        () =>
          maru.say_and_wait(
            'いい子いい子。毎日お疲れでしょう。私の腕のなかで、少し休みなさい。',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_game(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `${
            maru.elder_sibling_sex_title
          }はゲームが苦手なの。${callname}、おすすめはある？`,
        ),
      () =>
        maru.say_and_wait(
          `訓練室に座っているくらいなら、外でトレーニング……水着姿が見たいの？ ${callname}、えっちね。そのときは期待してて♪`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}、『秋〇の思い出』って知ってる？ 私も遊んだことはないけど、せっかくだから一緒にやってみましょう！`,
          ),
        () =>
          maru.say_and_wait(
            'またあの夏の風を感じたいわね。あの町の少年と少女が、初めて会ったときみたいに',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  async s_a_tree_hollow(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `悩みごと？ ふふ、${maru.elder_sibling_sex_title}には、今のところないわ`,
        ),
      () =>
        maru.say_and_wait(
          `私の走りは、${maru.uma_sex_title}たちに希望を届けてるのかしら、それとももっと深い絶望を……ううん、なんでもないわ⭐`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async s_a_dating(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `私もさっき着いたばかり。待たずに ${callname} に会えたわ。`,
        ),
      () =>
        maru.say_and_wait(`手作り弁当、用意したの。ピクニックで食べてみて♪`),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  async school_rooftop(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `屋上でお弁当を食べると、心まで風みたいに自由になるわ`,
        ),
      () =>
        maru.say_and_wait(
          `こうして頭を空にして、自分が穏やかな春風になって、柔らかい陽の下で踊っている想像をすると、気分まで弾むわね`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_r_fishing(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `ん、${
            maru.elder_sibling_sex_title
          }は釣りが苦手なの。じゃあ ${callname} にお願いするわね`,
        ),
      () =>
        maru.say_and_wait(
          `ふふ、${callname} の真剣な顔を見ていると、私も嬉しいわ`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_r_walking(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `岸の空気、新鮮ね。${callname} も、気分がよくなったんじゃない？`,
        ),
      () =>
        maru.say_and_wait(
          `岸で歌の練習をしている後輩の熱を見ていると、自分の気分まですごく良くなるわ`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_arcade(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} も一緒に踊らない？`);
        await era.printAndWait(
          `マルゼンスキーはダンスゲームが初めてなのに、柔らかい体と生まれつきのリズム感で、すぐにこのゲームの法則を掴んだ。`,
        );
      },
      async () => {
        await maru.say_and_wait(`次はあっちの遊び、試してみましょう`);
        await era.printAndWait(
          `${maru.name} は新しいものに出会った子どもみたいに、目を輝かせている`,
        );
      },
      async () => {
        await maru.say_and_wait(`こんなに頑張るトレーナー、かわいいわね`, true);
        await era.printAndWait([
          maru.get_colored_name(),
          ' は笑顔で、クレーンゲームを操作する ',
          you.get_colored_name(),
          ' の緊張した顔を見つめている',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_drawing(maru, you, callname) {
    await maru.say_and_wait(`${callname} も運試し、してみる？`);
    await era.printAndWait(`${maru.name} は商店街近くの抽選機を指した`);
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`大丈夫、次の機会もあるわ`);
        await era.printAndWait([
          maru.get_colored_name(),
          ' はティッシュを引いた ',
          you.get_colored_name(),
          ' を慰めている',
        ]);
      },
      async () => {
        await maru.say_and_wait(`夜はにんじんにしましょう`);
        await era.printAndWait(`${maru.name} は引いたにんじんを見ながら言った`);
      },
      async () => {
        await maru.say_and_wait(
          `うん、にんじんがこんなにあるなら、訓練室でパーティーしましょう`,
        );
        await era.printAndWait(
          `そのあと${maru.name}はテイオー${
            maru.couple_title
          }を訓練室に呼んで、にんじんパーティーを楽しんだ`,
        );
      },
      async () => {
        await maru.say_and_wait(`すごっ！ にんじんバーガー！`);
        await era.printAndWait([
          '夜、',
          you.get_colored_name(),
          ' と ',
          maru.get_colored_name(),
          ' は、この幸運の贈り物を一緒に味わった',
        ]);
      },
      async () => {
        await era.printAndWait(`チリンチリン`);
        await maru.say_and_wait('！', true);
        await era.printAndWait(`抽選箱のそばの店員「おめでとうございます」`);
        await era.printAndWait([
          maru.get_colored_name(),
          ' は、温泉旅行券を引いた ',
          you.get_colored_name(),
          ' を見ている',
        ]);
        await maru.say_and_wait(
          `運がいいわね。暇なときに、一緒に温泉へ行きましょう`,
        );
        await era.printAndWait(`そのあと、二人は機嫌よく訓練室へ戻った`);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_ktv(maru, you, callname) {
    await maru.say_and_wait(`${callname}、この最新の流行歌、聞いてみて`);
    await era.printAndWait([
      maru.get_colored_name(),
      ' はかなり懐古的な曲を選んだらしく、',
      you.get_colored_name(),
      ' は懐かしさに浸った',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_movie(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(
          `最近公開のラブコメが評判らしいわ。${callname}、一緒に見ない？`,
        );
        await era.printAndWait(
          `${maru.name} は映画おすすめの十大クラシック上映を指していた。`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `刺激的なスタント映画、見たい？ あのバンバンパァンって感じ`,
        );
        await era.printAndWait(`二人は最新公開の映画について話していた`);
      },
      async () => {
        await maru.say_and_wait(`${callname}……もうだめ、脚がまだ震えてる`);
        await era.printAndWait(
          `気分でホラーに手を出した二人は、支え合いながら上映室を出た`,
        );
      },
    );
    if (era.get('love:4') >= 75) {
      buffer.push(async () => {
        await maru.say_and_wait(`ん……今日はラブコメにしましょう`);
        await era.printAndWait(
          `おバカなカップルは、映画が山場に来たとき、主人公と同じようにキスした`,
        );
      });
    } else if (era.get('love:4') >= 50) {
      buffer.push(
        async () => {
          await maru.say_and_wait(
            `${callname} は結局、温かいのか、乾いているのかしら？`,
          );
          await era.printAndWait(
            `眠くなる映画の途中、${maru.name} が突然ひとりごとを始めた`,
          );
        },
        async () => {
          await maru.say_and_wait(
            `銀杏が落ち始める秋より、私は湿った夏のほうが好きね`,
          );
          await era.printAndWait(
            `${maru.name} は映画のおすすめを見ながらつぶやいた`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} darley ダーレーアラビアン
   * @param {CharaTalk} godolphin ゴドルフィンバルブ
   * @param {CharaTalk} byerley バイアリーターク
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async out_church(maru, darley, godolphin, byerley, you, callname) {
    darley.name = '優しい女神';
    godolphin.name = '賢い女神';
    byerley.name = '厳しい女神';
    await maru.say_and_wait(`${callname}、着いたわよ。`);
    await era.printAndWait(`ある休日、二人は神社へお参りに行くことにした`);
    await era.printAndWait(
      `伝承では、三女神が地上に降りたとき、ここの清水を飲んだという。それでこの山の小川は${
        maru.sex
      }の祝福を受けた`,
    );
    await era.printAndWait(
      `昔の人たちはこの小川を囲んで神社を建て、参拝する人たちは仕事や恋の成就を祈った`,
    );
    await maru.say_and_wait(
      `神社に掛かっている鈴が鳴ると、誠実に祈った人は三女神の祝福を得られるらしいわ。${
        maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
      }の私も、試してみたいの。`,
    );
    await era.printAndWait(
      `早起きして来たのに、前方のまばらな人だかりと、野営用のテントが見えた。`,
    );
    await era.printAndWait(`たぶん、昨夜から待っている人も多いのだろう。`);
    era.printButton(`じゃあ、私たちも急いで並ぼう`, 1);
    await era.input();
    await era.printAndWait(
      `願掛けに来た人たちは、割り込みの混乱で三女神を怒らせたくないのか、列は整っていた。`,
    );
    await era.printAndWait(`鳥居をくぐり、この三女神の神社へ入った`);
    await era.printAndWait([
      you.get_colored_name(),
      ' は前の参拝客を真似て賽銭箱に硬貨を入れ、柏手を打って両手を合わせ、目を閉じて祈り始めた',
    ]);
    await maru.say_and_wait(`……`);
    await era.printAndWait([
      you.get_colored_name(),
      ' はそっと ',
      maru.get_colored_name(),
      ` を見た。${maru.sex}の唇はわずかに開き、何か小さくつぶやいているようだった。`,
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait(`しばらく待っても、鈴の音は聞こえなかった。`);
      await maru.say_and_wait(`残念ね。`);
      await era.printAndWait(
        `${maru.name}は大事な願いをかけたらしく、耳を垂らして、とても惜しそうだ。`,
      );
      era.printButton(`${maru.sex}の手を握る`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ` は${maru.sex}の手を握った`,
      ]);
      await maru.say_and_wait(`……${callname}、ありがとう`);
      await maru.say_and_wait(
        `じゃあ、愛車でドライブして、この気持ちを発散しましょう`,
      );
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' は意識がぼんやりするなか、三女神の笑顔を見た気がした',
      ]);
    } else {
      const buffer = [
        () => darley.say_and_wait('頑張って、子どもたち'),
        () =>
          godolphin.say_and_wait('かわいい子どもたち、幸せでありますように'),
        () => byerley.say_and_wait('走りなさい。希望は疾走の先に'),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait(`チリンチリン`);
      await era.printAndWait(`三女神の低い声が聞こえた気がした。`);
      await era.printAndWait(
        `そっと目を開けて、${maru.name}のほうをちらりと見た。`,
      );
      await maru.say_and_wait(`……三女神さま、ありがとう、`);
      await era.printAndWait(
        `願いが認められたらしく、${maru.name}はほっとした笑顔を見せた。`,
      );
      await maru.say_and_wait(`${callname}`);
      await era.printAndWait(`${maru.name}は鳥居を出てから、後ろで足を止めた`);
      if (era.get('love:4') >= 90) {
        await era.printAndWait(
          `乾いた唇が、もう一枚の唇に潤された。あなたは思わず${maru.sex}の細い体を抱きしめた`,
        );
        await era.printAndWait(`今、二つの鼓動が、ようやく同じ気持ちになった`);
        await era.printAndWait(
          `時間も、名誉も、佳人以外のすべてが、もうどうでもよかった`,
        );
        await era.printAndWait(`今は、この優しさのなかに沈んでいたかった`);
        await era.printAndWait(
          `息が苦しくなるまで、風に踊る二人はやっと、名残惜しそうに離れた`,
        );
        await maru.say_and_wait(
          `${callname}、もしかしてあなたが、違う、あなたが、私がずっと探していた炎よ。`,
        );
        await era.printAndWait(
          `${maru.name}はあなたの手を強く握った。あなたは黙って、その痛みに耐えた`,
        );
        await era.printAndWait(`そして二人は、また唇を重ねた。`);
        await era.printAndWait(`炎は、結局あの乾きに勝った`);
      } else {
        await era.printAndWait(
          `湿った気配を感じた。${maru.name}は後ろを向いて、胸の高鳴りを抑えようとしている`,
        );
        await era.printAndWait(`微妙な空気のまま、二人は学園へ戻った`);
      }
    }
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(maru, you) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `このあたりに評判のいいスイーツ店があるらしいわ。次、一緒に行きましょう`,
        ),
      async () => {
        await maru.say_and_wait(`フルーツパフェ、もう一杯♪`);
        await you.say_and_wait(`そんなに食べて大丈夫か？`);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          maru.get_colored_name(),
          ' の胃が持つか、少し心配になった',
        ]);
        await maru.say_and_wait(
          `心配いらないわ。甘いものを食べるときは、甘いもの専用の胃があるのよ⭐`,
        );
        await maru.say_and_wait(
          `${maru.name}は大きな口でフルーツパフェを食べている`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_dating(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} の手、温かいわね`);
        await era.printAndWait([
          you.get_colored_name(),
          ' にとって、',
          maru.get_colored_name(),
          ' は何なのだろう？',
        ]);
      },
      () =>
        maru.say_and_wait(
          `できれば ${callname} に、ずっと頼っていてほしいけれど`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_shopping(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`${callname}、買いたいものはある？`),
      () =>
        maru.say_and_wait(
          `このあたりにスイーツ店が新しくできたらしいわ。あとで寄ってみましょう`,
        ),
    );
    await get_random_entry(buffer)();
  },
};
