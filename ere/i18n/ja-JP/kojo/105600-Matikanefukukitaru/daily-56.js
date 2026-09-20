/**
 * @file マチカネフクキタル - 日常
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_98 マチカネフクキタルのコパノリッキーへの呼び方
   */
  good_morning(kitaru, you, callname, call_58, call_98) {
    const buffer = [];
    if (era.get('base:56:体力') <= era.get('maxbase:56:体力') / 3) {
      buffer.push(
        () => {
          kitaru.say('今日の運勢……つかれました……');
          era.print([
            you.get_colored_name(),
            ' がトレーニング場へ来ると、',
            kitaru.get_colored_name(),
            ' はもう芝生に寝転がっていた。',
          ]);
        },
        () => {
          kitaru.say(
            'もう、なんでもいいです……運命の人のお願いなら、精一杯やりますから。',
          );
          era.print([
            kitaru.get_colored_name(),
            ' は笑って ',
            you.get_colored_name(),
            ' に手を振った。けれど尻尾は、はっきり両脚のあいだに垂れている。',
          ]);
        },
      );
    } else if (era.get('cflag:56:干劲') < 0) {
      buffer.push(
        () => {
          kitaru.say('ん……');
          era.print([
            '柵に伏せていた ',
            kitaru.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' を見ると、形ばかり耳を揺らした。',
          ]);
        },
        () => {
          kitaru.say(['おはよ……', callname, '。']);
          era.print([
            kitaru.get_colored_name(),
            ' の機嫌は、あまり良くなさそうだ。',
          ]);
        },
      );
    } else {
      if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 1) {
        buffer.push(() => {
          kitaru.say(['ん！ 朝の ', callname, ' も元気ですね！']);
          kitaru.say([
            'ただ ',
            callname,
            ' に見つめられるだけで、すこし興奮してしまいます……',
          ]);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 2) {
        buffer.push(() => {
          kitaru.say('はあっ……はあっ！');
          kitaru.say([
            '脚が、すこし柔らかくて……',
            callname,
            ' に見られるだけで、こうなって……',
          ]);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 3) {
        buffer.push(() => {
          kitaru.say(['ほしい……', callname, '……']);
          era.print([
            'そう言いながら、朝のランニングで体温の高い',
            kitaru.teen_sex_title,
            'が ',
            you.get_colored_name(),
            ' に抱きついた。',
          ]);
        });
      }
      if (era.get('love:56') > 75 && era.get('relation:56:0') > 400) {
        buffer.push(
          () => {
            kitaru.say('はあっ……ちょっと早起きしすぎました！');
            era.print([
              you.get_colored_name(),
              ' の前で伸びをすると、ジャージの下の胸が、存在をことさら主張してくる。',
            ]);
          },
          () => {
            kitaru.say('やっぱり！ 毎日、運命の人を見ないと安心できないんです');
            kitaru.say([callname, ' も、そう思いますか？']);
            era.print([
              you.get_colored_name(),
              ' の腕に絡みつき、栗色の細い耳が ',
              you.get_colored_name(),
              ' の肩を叩く。',
            ]);
          },
          () => {
            kitaru.say([
              '占ったら、',
              callname,
              ' は今日、桃花運が出てますよ！',
            ]);
            kitaru.say('ほら、私、そばにいるじゃないですか？');
            era.print([
              'つま先立ちで、',
              kitaru.sex,
              'の吐息が ',
              you.get_colored_name(),
              ' の首筋に当たる。',
            ]);
          },
          () => {
            kitaru.say(['今日は ', callname, '、私から離れちゃだめですよ！']);
            kitaru.say('だって！ 占いの開運アイテムは、小福なんですから！');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              ' は柵に寄りかかり、',
              you.get_colored_name(),
              ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
            ]);
            kitaru.say(['えへへ、', callname, '、見えちゃいました？']);
            era.print([
              '狐のような艶っぽい笑みを浮かべ、',
              kitaru.teen_sex_title,
              'は慌てず裾を直す。白いパンツに包まれた尻が、はっきり見えた。',
            ]);
          },
        );

        if (era.get('love:56') > 89 && era.get('relation:56:0') > 400) {
          buffer.push(
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' は柵に寄りかかり、',
                you.get_colored_name(),
                ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
              ]);
              kitaru.say(['あの……', callname, '、好き、ですか？']);
              era.print([
                '妖狐のような艶っぽい笑みとともに、',
                kitaru.teen_sex_title,
                'は裾を少し持ち上げた。安産型の尻を半ば包む白いレースのパンツから、その下の肌色が透けている。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' は柵に寄りかかり、',
                you.get_colored_name(),
                ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
              ]);
              kitaru.say(['あの……', callname, '、好き、ですか？']);
              era.print([
                '妖狐のような艶っぽい笑みとともに、',
                kitaru.teen_sex_title,
                'は裾を少し持ち上げた。少しきつい黒いパンツが、フクキタルの安産尻に誘惑的な溝を刻んでいる。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' は柵に寄りかかり、',
                you.get_colored_name(),
                ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
              ]);
              kitaru.say(['あの……', callname, '、好き、ですか？']);
              era.print([
                '妖狐のような艶っぽい笑みとともに、',
                kitaru.teen_sex_title,
                'は裾を少し持ち上げた。細い布だけの情趣パンツが、',
                kitaru.get_colored_name(),
                ' の尻肉をほとんど晒している。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' は柵に寄りかかり、',
                you.get_colored_name(),
                ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
              ]);
              kitaru.say('ひゃあっ！！！');
              era.print([
                kitaru.get_colored_name(),
                ' が気づく前に、',
                you.get_colored_name(),
                ' がいたずらに叩くと、',
                kitaru.teen_sex_title,
                'は抑えきれず、かわいい声を上げた。',
              ]);
            },
          );
        }
      }

      if (era.get('love:56') >= 50 && era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('運命の人！ 今日のトレーニング計画はなんですか？');
            era.print([
              'そう言いながら、',
              kitaru.sex,
              'の尻尾が ',
              you.get_colored_name(),
              ' の脚に絡みついた。',
            ]);
          },
          () => {
            kitaru.say('そうだ！ トレーニングのあと、一緒に屋台出ませんか？');
            kitaru.say(['ちょうど ', call_58, ' は今日、暇じゃないんです！']);
          },
          () => {
            kitaru.say([
              callname,
              ' が改運するなら、私のほうが ',
              call_98,
              ' より、ちょっと得意ですよ！',
            ]);
            era.print([
              kitaru.get_colored_name(),
              ' は、最近の噂に、少し膨れて応えた。',
            ]);
          },
          () => {
            kitaru.say(['今日、', callname, ' に朝食を作ってみたんです！']);
            kitaru.say('味は、あんまり期待しないでくださいね。');
            era.print([
              kitaru.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' に、手に提げた弁当を掲げた。',
            ]);
          },
          () => {
            kitaru.say(['あの、', callname, '！']);
            kitaru.say('終わったら、商店街で晩ご飯、どうですか？');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              ' は柵に寄りかかり、',
              you.get_colored_name(),
              ' に背を向けている……制服のスカートが柵に捲れていることに、まったく気づいていない。',
            ]);
            kitaru.say(['えっ！ エッチな ', callname, '！']);
            era.print([
              '声をかける前に、足音で見つかってしまった。頬を赤らめた',
              kitaru.teen_sex_title,
              'は、意外と落ち着いて裾を直している。',
            ]);
          },
        );
      } else if (era.get('love:56') < 50 || era.get('relation:56:0') < 226) {
        buffer.push(
          () => kitaru.say('ん……どこでトレーニングするか、占いましょうか？'),
          () =>
            kitaru.say([
              'おはようございます！ ',
              callname,
              '、今日のトレーニング計画はなんですか？',
            ]),
          () => kitaru.say([callname, '！ 今日の運勢、占いましょうか？']),
        );
      }
      if (era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('今日の運勢、とてもいいですよ！ では……');
            kitaru.say(['……どうか ', callname, '、存分にお使いください！']);
            era.print([
              'テレビで見た真似をして、',
              kitaru.sex,
              'は ',
              you.get_colored_name(),
              ' に、あまり正確ではないお辞儀をした。',
            ]);
          },
          () => {
            kitaru.say(
              'だるままるが震えてます。今日の霊力、たっぷりみたいです！',
            );
            era.print([
              kitaru.sex,
              'は ',
              you.get_colored_name(),
              ' に、左耳の赤い達磨を指さした。',
            ]);
          },
          () => {
            kitaru.say('先に占っておきました！');
            kitaru.say([callname, ' の今日の運勢は、大吉ですよ！']);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async select(kitaru, you, callname) {
    const buffer = [];
    if (era.get('relation:56:0') > 375) {
      buffer.push(
        () =>
          kitaru.say([
            'やっぱり、',
            callname,
            ' が私の運命の人なんです！ 占いも、私の心も、そう言ってます！',
          ]),
        () =>
          kitaru.say([
            '私、',
            callname,
            ' を完全に信じてます！ だって運命の人ですから！',
          ]),
      );
    } else {
      buffer.push(
        () =>
          kitaru.say([
            '占いと ',
            callname,
            ' を信じれば！ 絶対だいじょうぶです！',
          ]),
        () => kitaru.say([callname, ' の今日のご意志はなんですか？！']),
      );
    }
    switch (era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() => kitaru.say('淫紋……物語の、あの堕落みたいですね……'));
        break;
      case 2:
        buffer.push(() =>
          kitaru.say('また光ってます。もう一枚着たほうが……はあっ……暑い……'),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say(
            '参拝客に祈っていると、淫紋がときどき、場違いに熱くなるんです……',
          ),
        );
    }

    switch (era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() =>
          kitaru.say([callname, '！ あの……今夜、どうですか？']),
        );
        break;
      case 2:
        buffer.push(() =>
          kitaru.say([
            callname,
            ' を見ると、体が反応する、っていうんでしょうか？',
          ]),
        );
        break;
      case 3:
        buffer.push(() => {
          kitaru.say('パンツ、替えないと……');
          kitaru.say(['ん……', callname, '、またわかってて聞いてますね。']);
        });
    }

    switch (era.get('mark:56:同心')) {
      case 1:
        buffer.push(() =>
          kitaru.say([
            '毎朝目を開けたら ',
            callname,
            ' がいるなんて、これぞ大吉、ですよね！',
          ]),
        );
        break;
      case 2:
        buffer.push(() =>
          kitaru.say([callname, '！ 小福の開運ハグ、しますか？']),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say([
            '私と ',
            callname,
            ' がこんなにくっついてたら、白興様もきっと喜んでくださいます！',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} sp スペシャルウィーク
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_study(kitaru, sp, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait(
          'この前、追試になりかけました！ 白興様のご加護のおかげです！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の占い用鉛筆を取り上げたあと、',
          you.get_colored_name(),
          ' は次の試験の要点を一緒に整理し始めた。',
        ]);
        await era.printAndWait([
          'それにしても、同じ占い用鉛筆を使ったのに、どうして ',
          sp.get_colored_name(),
          ' は追試になるんだろう。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('えっ！ 私、書道の段位、持ってますよ！');
        await kitaru.say_and_wait('だから、この方面は得意なんです！');
      },
      async () => {
        await kitaru.say_and_wait([callname, '！ この絵、どうですか？']);
        await era.printAndWait([
          'そう言いながら、',
          kitaru.teen_sex_title,
          'は神意が宿ったような線の絵を、',
          you.get_colored_name(),
          ' に掲げた。',
        ]);
      },
      () =>
        kitaru.say_and_wait([
          'ん！ 走る以外のことも、',
          callname,
          ' はいろいろ詳しいんですね！',
        ]),
      async () => {
        await kitaru.say_and_wait(['おお！ この本ですか！']);
        await kitaru.say_and_wait([
          '昔、屋根裏に隠れてたとき、読んだことがあります！',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          'この雑誌、',
          callname,
          ' は興味ありますか？',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は、目の前の『The Rhode Island Journal of Astronomy』の占い欄を指した。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          'ブルー型、グリーン型……？ 聞いたことない概念ですね？',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は、表紙に薄い青の五芒星がある本を指して、',
          you.get_colored_name(),
          ' に尋ねた。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_prepare(kitaru, callname) {
    const buffer = [
      () =>
        kitaru.say_and_wait([
          'ありがとうございます、',
          callname,
          '！ 開運の儀式、あとは助手だけです！',
        ]),
      () =>
        kitaru.say_and_wait([
          'この儀式に必要なのは……あっ、',
          callname,
          '、手伝ってくれて助かります！',
        ]),
      () =>
        kitaru.say_and_wait([
          callname,
          '！ この請神術、あなたのPOW値を足せば絶対だいじょうぶです！',
        ]),
      () =>
        kitaru.say_and_wait('置閏の儀式？ やると、すごく明るくなりそうです……'),
      () =>
        kitaru.say_and_wait(
          '交信術、請神術、破魔術……この儀式は、どれに入るんでしょう？',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} luck_train 開運トレーニングの種類。1〜5 はスピード〜賢さ
   */
  async talk(kitaru, you, callname, luck_train) {
    const buffer = [];
    if (era.get('mark:56:淫纹') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.sex,
          'は ',
          you.get_colored_name(),
          ' に、淫紋を描かれた下腹を指さした。',
        ]);
        await kitaru.say_and_wait(
          'あの、トレーニング中、人に見られないか、ずっと心配で……',
        );
      });
    } else if (era.get('mark:56:淫纹') >= 2) {
      buffer.push(async () => {
        await era.printAndWait([
          'あたりを見回してから、',
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に服の裾をたくし上げ、下腹を見せた。',
        ]);
        await era.printAndWait([
          'ピンクに光る紋様が、',
          kitaru.teen_sex_title,
          'の体で、忠実に役目を果たしている。',
        ]);
      });
    }

    if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 1) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          'あの、',
          callname,
          '、トレーニングのあと、時間ありますか？',
        ]);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 2) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の顔に、はっきり赤みが乗っている。両手でジャージ越しに下腹を押さえた。',
        ]);
        await kitaru.say_and_wait(['んっ、全部 ', callname, ' のせいですよ！']);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 3) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の、どんどん過ぎた要求に応えて、キスをした。',
        ]);
        await kitaru.say_and_wait('ぐっ……');
        await era.printAndWait([
          kitaru.sex,
          'の指先が、',
          you.get_colored_name(),
          ' の股のあたりを、あるかなきかに這う。',
        ]);
      });
    }

    if (era.get('mark:56:同心') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          '開運だのと騒ぎながら、',
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に飛びついた。',
        ]);
      });
    } else if (era.get('mark:56:同心') >= 2) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '一心同体！ ',
          callname,
          '、私、ずっとそばにいますから！',
        ]);
      });
    }

    if (era.get('base:56:体力') < era.get('maxbase:56:体力') * 0.45) {
      buffer.push(
        () => kitaru.say_and_wait('今日は、休みが吉……'),
        async () => {
          await era.printAndWait('星の瞳が、くすんでいた。');
          await era.printAndWait([kitaru.sex, 'を休ませるべきだ。']);
        },
      );
    }
    switch (era.get('cflag:56:干劲')) {
      case -2:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '占いの運勢が最下位……おみくじも大凶……黒猫に道を横切られて、もう、だめです！',
          );
        });
        break;
      case -1:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            'おみくじが凶でした……悪いことが起きますか？',
          );
        });
        break;
      case 0:
        buffer.push(async () => {
          await kitaru.say_and_wait('今日の運勢も、良くも悪くもないですね……');
          await kitaru.say_and_wait('普通、も悪くない、でしょうか？');
        });
        break;
      case 1:
        buffer.push(async () => {
          await kitaru.say_and_wait('準備も占いも終わりました。始めましょう……');
        });
        break;
      case 2:
        buffer.push(async () => {
          await kitaru.say_and_wait([
            callname,
            '、聞いてください！ いまの運勢は、大吉を超えた超吉なんです！',
          ]);
          await kitaru.say_and_wait('ふふふ、いまの私は超無敵です！');
        });
    }
    await get_random_entry(buffer)();
    if (luck_train > 0) {
      era.drawLine();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' が机に残したメモを見つけた。',
      ]);
      switch (luck_train - 1) {
        case attr_enum.speed:
          await kitaru.used_to_say_and_wait(
            'そうだ、今日はスピードトレーニングが吉みたいですよ！',
          );
          break;
        case attr_enum.endurance:
          await kitaru.used_to_say_and_wait(
            '今日の吉は、スタミナトレーニングですよ！',
          );
          break;
        case attr_enum.strength:
          await kitaru.used_to_say_and_wait(
            'パワートレーニング、よさそうです！',
          );
          break;
        case attr_enum.toughness:
          await kitaru.used_to_say_and_wait(
            '根性トレーニングのほうが、合うかもしれません！',
          );
          break;
        case attr_enum.intelligence:
          await kitaru.used_to_say_and_wait('賢さトレーニングは大吉です！');
      }
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_gift(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('おお————！');
        await kitaru.say_and_wait('枕元に飾りますね！');
      },
      async () => {
        await kitaru.say_and_wait('ありがとうございます！');
        await kitaru.say_and_wait([
          'お返しなら、',
          callname,
          ' は何かほしいもの、ありますか？',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          callname,
          ' が何をくれたか、占いでもわかりません！',
        ]);
        await kitaru.say_and_wait('帰ってからじゃないと、開けられないんです……');
      },
    ];
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['もし ', callname, ' が望むなら！']);
        await kitaru.say_and_wait('お返しは、小福本人でもいいですよ！');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_cook(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 84) {
      buffer.push(() =>
        kitaru
          .say_and_wait(['小福の味噌汁、試してみますか！'])
          .then(() =>
            kitaru.say_and_wait([
              '気に入ったら！ 毎日 ',
              callname,
              ' に作れますよ！',
            ]),
          ),
      );
    } else if (era.get('love:56') > 75) {
      buffer.push(() =>
        kitaru
          .say_and_wait('手伝わせてください！ 今度こそだいじょうぶです！')
          .then(() =>
            era.printAndWait([
              kitaru.get_colored_name(),
              ' は、このところいろいろ覚えたらしい。',
            ]),
          ),
      );
    } else if (era.get('love:56') > 49) {
      buffer.push(() =>
        kitaru
          .say_and_wait('えっと、今度は横で見てるだけでいいです！')
          .then(() =>
            kitaru.say_and_wait('将来、使うときが来るかもしれないので！'),
          )
          .then(() =>
            era.printAndWait([
              you.get_colored_name(),
              ' の顔を見て、',
              kitaru.get_colored_name(),
              ' はそう言った。',
            ]),
          ),
      );
    } else {
      buffer.push(() =>
        kitaru
          .say_and_wait([callname, ' がよければ！ 私も手伝えますよ！'])
          .then(() =>
            era.printAndWait([
              kitaru.get_colored_name(),
              ' のさまざまな奇想のせいで、料理はかえって遅くなった。',
            ]),
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_rest(kitaru, you, callname) {
    if (era.get('love:56') > 49) {
      await you.say_and_wait('もういいか、フク');
      await kitaru.say_and_wait('ん――ん～');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' という栗毛の団子が、',
        you.get_colored_name(),
        ' の上に伏せている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の頼みどおり、担当の',
        kitaru.uma_sex_title,
        'のふわふわした髪を梳いている。',
      ]);
      await era.printAndWait([
        '指先が ',
        kitaru.get_colored_name(),
        ' の敏感な耳の根を掠めるたび、',
        kitaru.sex,
        'の体が小さく震える。',
      ]);
      await kitaru.say_and_wait(['ふふ……', callname, '……']);
      await era.printAndWait([
        kitaru.sex,
        'が休み足りるまで、まだずいぶんかかりそうだ。',
      ]);
    } else {
      await kitaru.say_and_wait('ふ……ふ……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はめずらしく静かになり、寺の仏像のように入定していた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、先に二人で買ってきた林檎の準備を始めた。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} game_times フクキタルと遊んだ回数
   */
  async office_game(kitaru, you, callname, game_times) {
    const buffer = [
      () =>
        kitaru.say_and_wait(
          '文章を書いて思いどおりになるんですか？ 面白い設定です！',
        ),
      () =>
        kitaru.say_and_wait(
          '銀に輝く大気……私の夢にも、似た景色が出ることがあります！',
        ),
      () => kitaru.say_and_wait('私の霊力でも念動ができたら、いいのに！'),
      () =>
        kitaru.say_and_wait('……意志が試されてます……ん、まさに運の出番です！'),
      () =>
        kitaru.say_and_wait(
          '白蛇神社ですか……うちの神社よりまだ辺鄙ですね、参拝客、来るんでしょうか！',
        ),
      () => kitaru.say_and_wait('運命COOP、同業者ですね！'),
    ];
    if (game_times >= 5) {
      buffer.push(() =>
        kitaru.say_and_wait(
          'ふふ……占いでコマンドを読むの、やっぱりすごく便利です！',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} kitaru マチカネフクキタル */
  async s_a_tree_hollow(kitaru) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait(
        '白興様、私の祈りが届きますように。今日の運勢、もっとよくなりますように！',
      );
      if (era.get('cflag:56:育成回合计时') > 120) {
        await kitaru.say_and_wait(
          'ん！ もちろん、なくても、私は頑張りますから！',
        );
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、底の見えない枯れ木の洞に向かって叫んだ。',
      ]);
    });
    if (era.get('cflag:56:育成回合计时') > 42) {
      // いわゆる白興様についての判定
      buffer.push(async () => {
        await kitaru.say_and_wait([
          kitaru.elder_sibling_sex_title,
          '！ 私、立派な',
          kitaru.uma_sex_title,
          'になりますから！',
        ]);
        await kitaru.say_and_wait('だから……うっ……ちゃんと見ててくださいね！');
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait(
            'それに……一緒に歩いてくれる人も、見つけました！',
          );
          await kitaru.say_and_wait('もう、心配しなくていいですよ！');
        }
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(kitaru, you) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait(
        '学園のなかのパワースポット、一緒に回りませんか？',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の案内どおり、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'と学園をひと巡りした。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の目的が果たせたかはわからない。ただ、担当に尻尾で抱かれた ',
        you.get_colored_name(),
        ' は、今日のトレセン掲示板の話題になった。',
      ]);
    });
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の腕を取り、生徒のあいだを歩いていく。',
        ]);
        await kitaru.say_and_wait('たくさん、見られてますね……');
        await era.printAndWait([
          'そう言いながらも、',
          you.get_colored_name(),
          ' は ',
          kitaru.get_colored_name(),
          ' の行動が、さらに大胆になっているのに気づいた。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async s_r_lunch(kitaru, you, callname) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait('おおおおおっ！！！');
      await kitaru.say_and_wait([
        callname,
        ' のお弁当、すごくおいしそうです！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は結局、',
        kitaru.get_colored_name(),
        ' の熱い視線に負けて、弁当箱を',
        kitaru.sex,
        'の前へ押し出した。',
      ]);
    });
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          'あの、',
          callname,
          ' のお箸、ちょっと貸してください！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の割り箸が、',
          kitaru.get_colored_name(),
          ' の手のなかで、ぱきっと分かれた。',
        ]);
        await kitaru.say_and_wait([
          'おお！ この占いだと、',
          callname,
          ' の今日の運勢、よさそうですよ！',
        ]);
      });
    }
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait('トレ――ナー――さ――ん！ ほしい！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の柔らかい体が ',
          you.get_colored_name(),
          ' に張りつき、滴りそうな目で ',
          you.get_colored_name(),
          ' を見る。',
        ]);
        await era.printAndWait([
          '肉を一切れ挟んで、',
          kitaru.sex,
          'の口を塞いだ。',
        ]);
        await kitaru.say_and_wait('んっ……これも、悪くないです！');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_fishing(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('……');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、水面を一心に見つめている ',
          kitaru.get_colored_name(),
          ' を見た。',
        ]);
        await era.printAndWait([
          'めずらしく静かな ',
          kitaru.get_colored_name(),
          ' は、普段とはまったく違う顔を見せている。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、その厳かな外見に、ほんの少しの神性さえ感じ取れた。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('釣りは、七分が運ですよ！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' はそう言いながら、餌を水へ入れた。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('何か面白いものが釣れたりしませんかね！');
        await kitaru.say_and_wait('神話みたいに！');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_r_walking(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait(
          '流れている水は、霊体の動きを止められるそうですよ！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は先を歩きながら、どこで仕入れたのかわからない知識を ',
          you.get_colored_name(),
          ' に説いている。',
        ]);
        await kitaru.say_and_wait([callname, '、聞いてますか？']);
      },
      async () => {
        await kitaru.say_and_wait(
          '白興様は、一日のなかの一刻を司っていたことがあるそうですよ！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は先を歩きながら、どこで仕入れたのかわからない知識を ',
          you.get_colored_name(),
          ' に説いている。',
        ]);
        await kitaru.say_and_wait([callname, '、聞いてますか？']);
      },
      async () => {
        await kitaru.say_and_wait(
          'パワースポットの成立には、途切れない集団の信念が関係しているそうですよ！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は先を歩きながら、どこで仕入れたのかわからない知識を ',
          you.get_colored_name(),
          ' に説いている。',
        ]);
        await kitaru.say_and_wait([callname, '、聞いてますか？']);
      },
    );
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait('ん！ ちょっと冷たいです！');
        await era.printAndWait([
          '靴と靴下を脱いだ ',
          kitaru.get_colored_name(),
          ' が裸足を水へ入れると、きめ細かい艶が自然ににじむ。',
        ]);
        await kitaru.say_and_wait([callname, ' も、やってみますか！']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_arcade(kitaru, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait(
          'おおおっ！ やっぱり大吉です！ ぬいぐるみ一つに、こんなについてるなんて！',
        );
        await era.printAndWait([
          '調子に乗った ',
          kitaru.get_colored_name(),
          ' がクレーンゲームにぶつかりそうになったとき、',
          you.get_colored_name(),
          ' は素早く',
          kitaru.sex,
          'を引っ張った。',
        ]);
        await kitaru.say_and_wait('えへへ～ すみません！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の様子を見て、',
          you.get_colored_name(),
          ' はつい笑ってしまった。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          'ん！ 新しい格闘ゲームですか？ 対戦、してみますか、',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '連敗したあと、',
          kitaru.get_colored_name(),
          ' の先読みのような操作に、',
          you.get_colored_name(),
          ' は降参せざるを得なかった。',
        ]);
        await kitaru.say_and_wait('あら、白興様のご加護のおかげです！');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_drawing(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, '、あっちに抽選がありますよ！']);
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      await era.printAndWait([
        '言うまでもなく、',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' は一緒に抽選の屋台へ歩いた。',
      ]);
      await kitaru.say_and_wait([callname, ' の好運、すこし分けてください！']);
      await era.printAndWait([
        'それから温かい感触と弾力が同時に伝わってきた。',
        kitaru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の腕に抱きつき、離す気配がない。',
      ]);
      await kitaru.say_and_wait('えへへ～！');
      await era.printAndWait([
        '自分の胸が ',
        you.get_colored_name(),
        ' の腕に押し潰されていることにも気づかない様子で、',
        kitaru.get_colored_name(),
        ' は箱へ手を入れた。',
      ]);
    } else {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の強い頼みで、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'と屋台の前まで来ざるを得なかった。',
      ]);
      await kitaru.say_and_wait('あああっ！ 白興様、ご加護を！');
      await kitaru.say_and_wait('はっ！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は箱へ手を入れた。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_ktv(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      buffer.push(
        async () => {
          await kitaru.say_and_wait('ふっ……はっ！ 私の歌、どうでした！');
          await era.printAndWait([
            '何曲も歌ったあと、',
            kitaru.get_colored_name(),
            ' は息を切らして ',
            you.get_colored_name(),
            ' を見ている。評価を待っている。',
          ]);
          await era.printAndWait(
            '汗に濡れた白いシャツの下、豊かな胸が、あるかなきかに見える。',
          );
        },
        async () => {
          await kitaru.say_and_wait('はっ……はっ！ 私の歌、どうでした！');
          await era.printAndWait([
            '何曲も歌ったあと、',
            kitaru.get_colored_name(),
            ' は息を切らして ',
            you.get_colored_name(),
            ' を見ている。評価を待っている。',
          ]);
          await era.printAndWait(
            '裾と白いニーソックスのあいだの絶対領域が、汗で濡れて油光を帯びている。',
          );
        },
      );
    } else {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' にとって、カラオケの難易度は、神社で歌って踊る祭りの舞には到底及ばない。',
        ]);
        await kitaru.say_and_wait([callname, ' も、一曲どうぞ！']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_movie(kitaru, you, callname) {
    await era.printAndWait([
      '二度と同じに再現できそうにない占いの仕草のあと、',
      kitaru.get_colored_name(),
      ' は宣伝ポスターの一枚を指した。',
    ]);
    const buffer = [
      async () => {
        await era.printAndWait('名状しがたい恐怖を主にした民俗ホラー。');
        await era.printAndWait([
          '終わったあと、脚の力があるかないかの ',
          kitaru.get_colored_name(),
          ' が、いかにもという顔で ',
          you.get_colored_name(),
          ' に怨霊の払い方を教えた。',
        ]);
      },
      async () => {
        await era.printAndWait('舞台が異星のSF。');
        await kitaru.say_and_wait(
          'ん！ 主人公の予言能力、うらやましい、っていうんでしょうか？',
        );
      },
      async () => {
        await era.printAndWait('頭を使う推理もの。');
        await kitaru.say_and_wait('……占いの結果と同じ、ですね？');
      },
    ];
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await era.printAndWait('甘いラブコメ');
        await kitaru.say_and_wait([
          'はははっ！ こういうの、私、',
          callname,
          ' にもしたことありますよ！',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {0|1|2|3} luck 運勢の値
   */
  async out_church(kitaru, you, callname, luck) {
    await era.printAndWait([
      '担当と一緒に、',
      kitaru.couple_title,
      'の家の神社へ来た。',
    ]);
    await kitaru.say_and_wait('では、おみくじの時間です！');
    await kitaru.say_and_wait('どれどれ！ 今日の運勢は！');
    await kitaru.say_and_wait('白興様～ 白興様～');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' は独自のやり方で筒を振り、唱えながら、一本の紙籤が筒から滑り落ちた。',
    ]);
    await kitaru.say_and_wait('えいっ！');
    switch (luck) {
      case 0:
        await era.printAndWait('（小吉！）');
        await kitaru.say_and_wait('悪くないです！');
        break;
      case 1:
        await era.printAndWait('（中吉！）');
        await kitaru.say_and_wait('おお！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に笑顔を向けた。',
        ]);
        break;
      case 2:
        if (era.get('love:56') >= 50) {
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は紙籤を ',
            you.get_colored_name(),
            ' に渡し、読んでほしいと目で合図した。大吉と聞くと、',
            kitaru.sex,
            'は驚喜して ',
            you.get_colored_name(),
            ' に飛びついた。',
          ]);
          await kitaru.say_and_wait([
            '好運、私にも分けてください！ ',
            callname,
            '！',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の腰をきつく抱きしめ、',
            you.get_colored_name(),
            ' は',
            kitaru.sex,
            'の体温と鼓動を感じた。',
          ]);
        } else {
          await kitaru.say_and_wait('わあ！ 大吉です！');
          await kitaru.say_and_wait([callname, '！ 見ましたか？']);
          await era.printAndWait(
            'というより、この神社の巫女が大吉を引けないほうが、よほどおかしい。',
          );
        }
        break;
      case 3:
        await era.printAndWait('（凶）');
        await kitaru.say_and_wait('ん……');
        await era.printAndWait([
          you.get_colored_name(),
          ' がどう慰めるか考えていると、疾風が吹き、',
          kitaru.get_colored_name(),
          ' の手の紙籤をさらっていった。',
        ]);
        await kitaru.say_and_wait('白興様、ご加護を……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は飛んでいった紙籤を見つめて呟く。',
          you.get_colored_name(),
          ' は、何と言えばいいかわからなかった。',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_restaurant(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait([
          callname,
          '、あの店のアップルパイ、おいしそうですよ！',
        ]);
        await kitaru.say_and_wait('試してみますか？');
      },
      async () => {
        await kitaru.say_and_wait('いまは食事の吉時ですよ！');
        await kitaru.say_and_wait('一緒に食べに行きませんか？');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_dating(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait(
          'ん！ あまり堅苦しい服は、私には向かない気がします！',
        );
        await kitaru.say_and_wait('もちろん！ 巫女装束は別ですよ！');
        await kitaru.say_and_wait('これは、どうですか？');

        const buffer2 = [];
        buffer2.push(
          async () => {
            await era.printAndWait([
              'かわいい柄のワンピースを着て更衣室から出てきた ',
              kitaru.get_colored_name(),
              ' が、そう ',
              you.get_colored_name(),
              ' に尋ねる。',
            ]);
            await era.printAndWait([
              '少し涼しい着こなしが、',
              kitaru.sex,
              'の誘うような白い肩を見せている。',
            ]);
          },
          async () => {
            await era.printAndWait([
              '会社員のようなシャツにネクタイを合わせ、更衣室から出てきた ',
              kitaru.get_colored_name(),
              ' が、そう ',
              you.get_colored_name(),
              ' に尋ねる。',
            ]);
            await era.printAndWait(
              '脚には職場向けの黒いストッキング。ちょうどいいデニールで、肌色がほんのり透ける。',
            );
          },
          async () => {
            await era.printAndWait([
              '改まった場向けのドレスを着て更衣室から出てきた ',
              kitaru.get_colored_name(),
              ' が、そう ',
              you.get_colored_name(),
              ' に尋ねる。',
            ]);
            await era.printAndWait([
              '裾が',
              kitaru.sex,
              'の回転で舞い、ガーターが肉感のある太ももに跡をはっきり残している。',
            ]);
          },
        );
        if (kitaru.sex_code !== 1) {
          buffer2.push(async () => {
            await era.printAndWait([
              'どこから出したのかチャイナドレスを着て更衣室から出てきた ',
              kitaru.get_colored_name(),
              ' が、そう ',
              you.get_colored_name(),
              ' に尋ねる。',
            ]);
            await era.printAndWait([
              'かなりタイトなチャイナドレス。胸の生地の悲鳴が、かすかに聞こえる気がする。',
            ]);
          });
        }
        await get_random_entry(buffer2)();

        await kitaru.say_and_wait([
          'ちょっと！ ',
          callname,
          '、どこを見てるんですか？',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('えいっ！');
        await kitaru.say_and_wait('握手の術です！');
        await kitaru.say_and_wait('運を人に渡せるそうですよ！');
        await era.printAndWait(
          'そのあと、周りの視線のなかで、恋人のようにどんどん近づいていった。',
        );
      },
    );
    if (era.get('love:56') >= 50 && era.get('exp:56:接吻次数') > 0) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['あの……', callname, '！']);
        await kitaru.say_and_wait('ちゅ！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' にキスをした。',
        ]);
        await era.printAndWait(
          'キス、というより、唇と唇をぶつけた、という感じだ。',
        );
      });
    }
    await get_random_entry(buffer)();
  },
  haircut: (() => {
    const title = 'フクキタルの髪型';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_2 マチカネフクキタルのサイレンススズカへの呼び方
     * @param {PrintedSpan} call_62 マチカネフクキタルのマチカネタンホイザへの呼び方
     * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_74 マチカネフクキタルのメジロパーライトへの呼び方
     */
    const f = async (
      kitaru,
      you,
      callname,
      call_2,
      call_58,
      call_62,
      call_74,
    ) => {
      await era.printAndWait([
        'また ',
        kitaru.get_colored_name(),
        ' と商店街の美容院の前を通った。',
      ]);
      await era.printAndWait(
        '店の前を過ぎるとき、視線がポスターに、つい数秒留まってしまう。',
      );
      await kitaru.say_and_wait([
        'えっ！ ',
        callname,
        '、何を見てるんですか？',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の視線を追い、ポスターの、丁寧に整えた髪の',
        kitaru.uma_sex_title,
        'モデルを見ると、無意識に、いつものボサボサ髪を触った。',
      ]);
      await kitaru.say_and_wait(
        'あら！ 普段、自分の髪型なんて、あまり気にしてないんです……',
      );
      await kitaru.say_and_wait([
        call_62,
        '、',
        call_74,
        '、',
        call_2,
        ' の髪型……',
      ]);
      await kitaru.say_and_wait([call_58, ' は、私と似たようなものです']);
      await era.printAndWait([
        'たしかに、',
        you.get_colored_name(),
        ' の担当 ',
        kitaru.get_colored_name(),
        ' は、髪の手入れにあまり気を使わないタイプだ。',
        kitaru.uma_sex_title,
        '特有の髪の芯の強さで、だいたいの形が保たれているだけである。',
      ]);
      await kitaru.say_and_wait([
        'そういえば、',
        callname,
        ' は、私の長い髪、見たいですか？',
      ]);
      await kitaru.say_and_wait([
        '小学校のころ、伸ばしてみたことはあります。でも鏡を見ると、いつも写真の',
        kitaru.elder_sibling_sex_title,
        'を思い出してしまって',
      ]);
      await kitaru.say_and_wait(['でも、', callname, ' が好きなら！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の無意の仕草で、わけのわからない危機感を刺激されたらしい。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} kitaru マチカネフクキタル */
  get_haircut_confirm: (kitaru) => [
    kitaru.get_colored_name(),
    ' を美容院へ連れていきますか？',
  ],
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async haircut_intro(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, '、また髪型、変えたいんですか？']);
    switch (era.get('cstr:56:后发')) {
      // ロングストレート
      case 'long_straight':
        await era.printAndWait([
          '滝のように真っ直ぐなオレンジの長髪の ',
          kitaru.get_colored_name(),
          ' が振り返って ',
          you.get_colored_name(),
          ' を見る。',
        ]);
        break;
      // ショート／肩につくストレート
      case 'shor_hair':
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' が振り返って ',
          you.get_colored_name(),
          ' を見る。上品なオレンジの髪が肩にかかっている。',
        ]);
        break;
      // 外ハネ
      case 'wing_style':
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' が振り返って ',
          you.get_colored_name(),
          ' を見る。頬のあたりに、香る汗で髪が少し張りついている。',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async haircut_select(kitaru, you) {
    await era.printAndWait([
      'では、',
      you.get_colored_name(),
      ' は',
      kitaru.sex,
      'に、どんな髪型を試してほしいだろう。',
    ]);
    era.printButton('肩につくストレート', 1);
    era.printButton('腰まで届くロングストレート', 2);
    era.printButton('「今の髪型が、フクキタルに一番似合う」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await era.printAndWait([
          you.get_colored_name(),
          ' の提案で、',
          kitaru.get_colored_name(),
          ' は肩につくストレートにした。',
        ]);
        await kitaru.say_and_wait('どうですか？');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は首を傾けて ',
          you.get_colored_name(),
          ' を見る。肩までの柔らかい髪が、蜂蜜のようなオレンジに光っている。',
        ]);
        break;
      case 2:
        await era.printAndWait([
          you.get_colored_name(),
          ' の提案で、',
          kitaru.get_colored_name(),
          ' は腰まで届くロングストレートにした。',
        ]);
        await kitaru.say_and_wait('長い髪……やっぱり、まだ慣れません！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は無造作に、腰まで垂れた髪を指でまとめる。',
        ]);
        await era.printAndWait('こう見ると、たしかに落ち着いた印象になった。');
        break;
      case 3:
        await era.printAndWait([
          you.get_colored_name(),
          ' の提案で、',
          kitaru.get_colored_name(),
          ' は髪型を変えなかった。',
        ]);
        await kitaru.say_and_wait('うん！ やっぱり、これがいいです！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の様子を見て、',
          you.get_colored_name(),
          ' はつい手を伸ばし、ふわふわのオレンジ髪の感触を確かめた。',
        ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_shopping(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('おお！ 新しい占い道具ですよ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、歴代の名',
          kitaru.uma_sex_title,
          'を題材にしたタロットを指す ',
          kitaru.get_colored_name(),
          ' を見た。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('私の長い髪、見たいですか？');
        await kitaru.say_and_wait('……すみません');
        await era.printAndWait([
          '美容院の前を通ったとき、',
          kitaru.get_colored_name(),
          ' は、',
          you.get_colored_name(),
          ' が持ち出した話題を、もごもごと避けた。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  good_night_normal(kitaru, you, callname) {
    era.print([
      '忙しい一日が終わり、',
      kitaru.get_colored_name(),
      ' を生徒寮の玄関まで送った。',
    ]);
    const buffer = [];
    if (era.get('love:56') >= 75) {
      buffer.push(
        () => {
          era.print([
            you.get_colored_name(),
            ' が気づかないうちに、',
            kitaru.get_colored_name(),
            ' が突然抱きついた。',
          ]);
          kitaru.say('ちゅ……');
          kitaru.say('やりましたね！');
          era.print([
            you.get_colored_name(),
            ' が反応する前に、',
            kitaru.get_colored_name(),
            ' はもう寮の中へ駆け込んでいた。',
          ]);
          era.print(['唇に、', kitaru.sex, 'の甘い匂いが残っている。']);
        },
        () => {
          kitaru.say([
            callname,
            ' と一緒の時間は、いつもこんなに早いんですね！',
          ]);
          era.print([
            '満面の笑みの ',
            kitaru.get_colored_name(),
            ' と目が合い、突然 ',
            you.get_colored_name(),
            ' にキスしてきた。',
          ]);
          era.print([
            'ほかの',
            kitaru.uma_sex_title,
            'の指さしを、かなり集めてしまった。',
          ]);
        },
      );
    } else if (era.get('love:56') >= 50) {
      buffer.push(() => {
        kitaru.say('また明日！');
        era.print([
          you.get_colored_name(),
          ' に、人目を引く抱擁を飛ばしてから、',
          kitaru.get_colored_name(),
          ' は寮へ駆け込んだ。',
        ]);
      });
    } else {
      buffer.push(() => {
        kitaru.say('今日もお疲れさまでした！');
        era.print([
          kitaru.sex,
          'は ',
          you.get_colored_name(),
          ' に手を振り、小走りで寮へ入った。',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {1|2} check 求愛判定。2＝大成功、断ると押し切られる
   */
  async good_night_sex(kitaru, you, callname, check) {
    era.print([
      '忙しい一日が終わり、',
      kitaru.get_colored_name(),
      ' を生徒寮の玄関まで送った。',
    ]);
    const buffer = [];
    buffer.push(async () => {
      era.print([
        'いつものように別れようとしたら、',
        kitaru.get_colored_name(),
        ' がいつもと違い、',
        you.get_colored_name(),
        ' の手を握っていた。',
      ]);
      kitaru.say(
        'あの！ 占いで今日が吉だったので、外泊届はもう出してあります……',
      );
      era.print([
        '頬を赤らめた ',
        kitaru.get_colored_name(),
        ' は膝をすり合わせ、指先で ',
        you.get_colored_name(),
        ' の服を摘んでいる。',
      ]);
    });
    if (kitaru.sex_code !== 1) {
      buffer.push(async () => {
        era.print([
          'いつものように別れようとしたら、',
          kitaru.get_colored_name(),
          ' がいつもと違い、',
          you.get_colored_name(),
          ' の手を握っていた。',
        ]);
        kitaru.say('あの……');
        era.print([
          '頬を赤らめた ',
          kitaru.get_colored_name(),
          ' がジャージのファスナーを下げる。目に飛び込んできた二つの豊かな胸が、',
          kitaru.sex,
          'のますます不安定な立ち姿とともに、恥ずかしそうに揺れている。',
        ]);
        kitaru.say([callname, '、わかりますよね……？']);
      });
    }
    await get_random_entry(buffer)();
    era.print([
      'もうハートになった星の瞳が、熱を帯びて ',
      you.get_colored_name(),
      ' を見ている。',
    ]);
    era.printButton('受け入れる', 1);
    era.printButton('断る', 2);
    const ret = await era.input();
    if (ret === 2) {
      if (check === 2) {
        await kitaru.say_and_wait(
          '……本当に、本当にだめですか。いま、大吉なのに？',
        );
        await era.printAndWait([
          'アイアンクローを繰り出そうとした右手の手首を、つま先立ちの ',
          kitaru.get_colored_name(),
          ' が掴む。骨の音がした気がする。それでも満面の笑みのオレンジの',
          kitaru.uma_sex_title,
          'が、強引に ',
          you.get_colored_name(),
          ' を生徒寮から引きずっていった。',
        ]);
      } else {
        await kitaru.say_and_wait('次は……先に占ったほうがいい、ですかね？');
        await kitaru.say_and_wait('それとも、私も、もう少し強く出たほうが？');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' が生徒寮へ戻るのを見送りながら、',
          you.get_colored_name(),
          ' は',
          kitaru.sex,
          'がそう呟くのを聞いた。',
        ]);
      }
    }
    return ret;
  },
  punishment_1: (() => {
    const title = '懲戒のあと';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        'うわあっ！ 運命の人が',
        kitaru.uma_sex_title,
        'になっちゃったんですか！',
      ]);
      await kitaru.say_and_wait([
        '心配いりません！ ',
        callname,
        '、慣れるまで手伝いますから！',
      ]);
      await kitaru.say_and_wait(
        'そういえば……まだトレーナーさん、でいいんでしょうか？',
      );
      await kitaru.say_and_wait('お姉さん、はどうですか？');
    };
    f.title = title;
    return f;
  })(),
  punishment_2: (() => {
    const title = '懲戒のあと';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait('ん！ お姉さんは、何がしたいんですか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' が抵抗に繰り出したアイアンクローは、あっさり捕らえられた。',
      ]);
      await era.printAndWait([
        'そのあと、',
        kitaru.get_colored_name(),
        ' の半ば強引な頼みで、',
        kitaru.sex,
        'とそっくりの服に着替えさせられた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = '懲戒のあと';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('だいじょうぶ……');
      await kitaru.say_and_wait([
        'こうなっても、私は ',
        callname,
        ' を見捨てません……',
      ]);
      await kitaru.say_and_wait('だって、約束したことですから……');
      await kitaru.say_and_wait('ふぅ……');
      await era.printAndWait([
        '湯上がりで濡れた ',
        you.get_colored_name(),
        ' の耳を伸ばし、拭いて、オレンジの',
        kitaru.uma_sex_title,
        'は耳飾りを ',
        you.get_colored_name(),
        ' の耳につけた。',
      ]);
      await era.printAndWait([
        '耳が敏感すぎるのか、',
        you.get_colored_name(),
        ' の視界に、だんだん水気がかかる。',
      ]);
      await era.printAndWait([
        '尻尾が主を覚えるように、',
        kitaru.get_colored_name(),
        ' の腰に絡みついた……',
      ]);
      await era.printAndWait([
        '以前なら片手で ',
        kitaru.get_colored_name(),
        ' を制していた ',
        you.get_colored_name(),
        ' に、こんなことが起きるとは、想像もできなかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async load_talk(kitaru, you, callname) {
    if (era.get('cflag:56:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
      await kitaru.print_and_wait([
        you.get_colored_name(),
        ' が去ってから、',
        kitaru.get_colored_name(),
        ' はずっと家の書庫に閉じこもっていた。',
      ]);
      await kitaru.say_and_wait('そうです！ そうです！ 見つかりました！');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content:
              '「見つかった見つかった見つかった見つかった見つかった見つかった見つかった！！！！！」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
      await kitaru.say_and_wait([
        '生贄には子供の血が要ります。そうすれば ',
        callname,
        ' を追えます！',
      ]);
      await kitaru.print_and_wait([
        '少し膨らんだお腹を撫で、髪を振り乱した ',
        kitaru.get_colored_name(),
        ' の顔には、歪んでいるとしか言いようのない笑みが浮かんでいた。',
      ]);
    } else if (era.get('love:56') < 49) {
      await kitaru.say_and_wait([
        'この目覚まし時計は ',
        callname,
        ' の開運道具ですか？',
      ]);
      await kitaru.say_and_wait('ん！');
      await kitaru.say_and_wait('いま、お返ししますね！');
    } else if (era.get('love:56') > 89) {
      await kitaru.say_and_wait('いなくなった……');
      await kitaru.say_and_wait('運命の人が……いなくなった……');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content:
              '「いや……いやだいやだいやだいやだいやだいやだいやあああ！」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
    }
  },
  cl_temple_fair: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '今日は ',
        kitaru.get_colored_name(),
        ' と、夏季合宿の縁日に行った。',
      ]);
      await era.printAndWait([
        '薄い緑の浴衣の ',
        kitaru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の前を歩いている。ゆったりしているが厚くない浴衣が、元気な',
        kitaru.sex,
        'に、かなりの上品さを足している。',
      ]);
      await era.printAndWait([
        '白い甲を見せた下駄が、',
        kitaru.get_colored_name(),
        ' の軽い足取りに合わせて、乾いた音を立てる。',
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        'は艶っぽい笑みで ',
        you.get_colored_name(),
        ' を見、体を傾ける。もともと美しい尻の線が、さらに際立つ。',
      ]);
      await kitaru.say_and_wait(['どうですか！ ', callname, '！']);
      era.printButton('マチカネフクキタルの腰を抱く', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('「好きだ」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '手を ',
          kitaru.get_colored_name(),
          ' の腰に置くと、',
          kitaru.teen_sex_title,
          'の体が小さく震えた。',
        ]);
        await era.printAndWait([
          'オレンジの尻尾が、むしろ自ら起き上がり、恋人を抱くように ',
          you.get_colored_name(),
          ' の腕に絡みついた。',
        ]);
        await kitaru.say_and_wait('えっ！');
        await era.printAndWait([
          'それから手を上げ、引き締まって丸い尻を軽く叩くと、',
          kitaru.teen_sex_title,
          'は合わせて、かわいい声を上げた。',
        ]);
        await kitaru.say_and_wait('ひっ！');
        await era.printAndWait([
          '尻の割れ目に沿って中へ滑らせ、',
          kitaru.sex,
          'の両脚のあいだへ入り、パンツ越しに敏感な場所を、焦らすように何度も触る。',
        ]);
        await kitaru.say_and_wait('まわり……まわりに人が……ひゃあっ！');
        await era.printAndWait('止めようとしても、下の刺激で声にならない。');
        await era.printAndWait([
          'ますます ',
          you.get_colored_name(),
          ' の胸に寄りかかり、周りには、担当とトレーナーが少し密着しすぎた恋人に見えることだけを願う。',
        ]);
        await kitaru.say_and_wait('んっ！');
        await era.printAndWait([
          'わざと抑えた吐息とともに、熱く粘る感触が ',
          you.get_colored_name(),
          ' の指先の布から伝わってきた。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は完全に ',
          you.get_colored_name(),
          ' の腕のなかで崩れ、両脚が小さく震え、瞳の星にも水気がかかる。',
        ]);
        await kitaru.say_and_wait([callname, '……いい、です……']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' を抱いたまま、',
          you.get_colored_name(),
          ' は傍らの人のいない林へ入った。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' に褒められた',
          kitaru.teen_sex_title,
          'は、何回転もして、かなりの視線を集めた。',
        ]);
        await era.printAndWait([
          'こんなに整った服を着ていても、',
          kitaru.sex,
          'は相変わらず、びくっとしてはしゃぐ ',
          kitaru.get_colored_name(),
          ' のままだ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        'ハロウィンの夜、トレセン学園も周囲の商店街も、ハロウィンらしい飾りで埋まっている。',
      );
      await era.printAndWait([
        '巨大な蝙蝠の飾りとカボチャ頭の影で、',
        kitaru.uma_sex_title,
        'たちもファン感謝祭のように屋台を出していた。',
      ]);
      await kitaru.say_and_wait(['あっ！ ', callname, ' です！']);
      await kitaru.say_and_wait('HAPPY HALLOWEEN！');
      await era.printAndWait([
        you.get_colored_name(),
        ' の担当の占い小屋のなかで、占い机の奥に座る ',
        kitaru.get_colored_name(),
        ' は、ハロウィン用に用意した装いを着ている。',
      ]);
      await era.printAndWait(
        '黒を基調にした修道服に白をあしらい、素朴で、十分に清らかだ。',
      );
      await era.printAndWait(
        '鮮やかなオレンジ髪と星の瞳が、重厚な服の圧をちょうど打ち消し、かえって狐のような艶が、あるかなきかに漂う。',
      );
      await kitaru.say_and_wait('あらあらあら！');
      await kitaru.say_and_wait('珍しいでしょう！');
      await kitaru.say_and_wait(
        'ここの飾りも告解室みたいにしたかったんですけど、時間が足りなくて！',
      );
      era.printButton('「その格好、よく似合ってる。」', 1);
      await era.input();
      await kitaru.say_and_wait('うん！ どっちも神職だから、でしょうか！');
      await kitaru.say_and_wait([
        'では！ ',
        callname,
        '、小福に懺悔したいことはありますか？',
      ]);
      await era.printAndWait([
        '両手を組む仕草をして、修道女の十字架のような瞳が ',
        you.get_colored_name(),
        ' を見つめる。',
      ]);
      era.printButton('飴を渡す', 1);
      era.printButton('マチカネフクキタルにキスする', 2, {
        disabled: era.get('love:56') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '用意しておいた飴を ',
          kitaru.get_colored_name(),
          ' に渡し、修道女の祈りの声を背に戻った。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' が少し前へ傾くと、察した ',
          kitaru.get_colored_name(),
          ' も椅子を前へずらした。',
        ]);
        await kitaru.say_and_wait('んっ、ぐっ！');
        await era.printAndWait([
          '二人の舌が絡み、担当の舌先が ',
          you.get_colored_name(),
          ' の口のなかを歩き、ハロウィンのさまざまな飴の味がする。',
        ]);
        await kitaru.say_and_wait('はっ！');
        await era.printAndWait('涎の糸が修道服に落ちた。');
        await kitaru.say_and_wait(['……', callname, '。']);
        await kitaru.say_and_wait('うっ……ちょっと、大胆すぎましたね。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
