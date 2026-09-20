/**
 * @file ダイイチルビー - 日常
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} ruby ダイイチルビー */
  good_morning(ruby) {
    const buffer = [
      () => ruby.say('ごきげんよう。では、トレーニングを始めましょう。'),
      () =>
        ruby.say(
          '本日もよろしくお願いいたしますわ。歴代の一族に相応しい水準まで、徹底してご指導くださいまし。',
        ),
      () =>
        ruby.say(
          'わたくしのトレーナーになられた以上、覚悟はできていらっしゃいますわね。遺憾なく、その力を発揮していただきたいですわ。',
        ),
      () =>
        ruby.say(
          '皆様の威光を継ぐには、より多くの努力が要りますわ。ですが今のこの体なら、それも可能ですわ。',
        ),
      () =>
        ruby.say(
          'レースで成果を出すのは責務ですわ。目的は明らか。でしたら、怠らず進むだけですわ。',
        ),
      () =>
        ruby.say(
          'スポーツ医学会の最新発表はもちろん確認済みですわ。あとで一緒に検討いたしましょう？',
        ),
      () =>
        ruby.say(
          'わたくしは、ただ勝つことだけを求めませんわ。鮮やかな輝きを残せなければ、一族にとって勝利とは呼べません……ですわね？',
        ),
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(() =>
        ruby.say(
          'あなたはすでに、人々へ資格をお示しになりましたわ。恐れる必要も、怯える必要もありません。使命だけですわ。一緒に、これを成し遂げましょう。',
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() => ruby.say('あなたの道にも、輝く光が満ちますように。'));
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} r_awake ダイイチルビーが起きているか
   * @param {boolean} after_recruit 募集後、初めて選択した相手か
   */
  select(ruby, you, r_awake, after_recruit) {
    if (!r_awake) {
      era.print([
        ruby.get_colored_name(),
        ' は深く眠っている。もちろん、元凶である ',
        you.get_colored_name(),
        ' の腕の中で。',
      ]);
    } else if (after_recruit) {
      ruby.say('本日より、よろしくお願いいたしますわ。');
      ruby.say('華麗、至上。常に最も眩い光を咲かせること。');
      ruby.say('一族の玉条を胸に、ただ前へ進むだけですわ。');
      ruby.say('……以上ですわ。');
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' へ頭を下げて挨拶した。',
          ]),
        () => {
          era.print([
            ruby.get_colored_name(),
            ' はドレスを着ているかのように、',
            you.get_colored_name(),
            ' へカーテシーをした。',
          ]);
          era.print('膝を折りながら両膝をわずかに外へ開き、片足を後ろへ引く。');
          era.print([
            you.get_colored_name(),
            ' は仕方なく、少しわざとらしく衆人環視の中でお辞儀を返した。',
          ]);
        },
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() => {
          era.print([
            ruby.get_colored_name(),
            ' は少し仮眠し、',
            you.get_colored_name(),
            ' は',
            ruby.sex,
            'と一緒にベッドへ横たわっていた。',
          ]);
          era.print('窓の外は涼しい風。話し声はなく、枝が風に揺れるだけ。');
          era.print([
            'ゆっくり目を覚ました ',
            ruby.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の懐で伸びをし、それから起き上がった。',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_study(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          'まずゆっくり結びをほどき、梳かすときは根元側をしっかり摘んでくださいまし。髪を整えていただくのは、気まぐれではございませんわよね？',
        ),
      async () => {
        await ruby.say_and_wait(
          '人付き合いを整える、あるいは強い関係を持つには、他人へ価値を生むことを知る方が重要ですわ。',
        );
        await ruby.say_and_wait(
          '他人へ価値を生んでこそ、関係は続きますわ。さもなくば、いくら知人がいても無効な社交です。誰もあなたを覚えていませんもの。',
        );
      },
    ];
    if (ruby.sex_code !== 1 && era.get('love:85') >= 90) {
      buffer.push(
        async () => {
          await ruby.say_and_wait(
            '簡単に申しますと、規則正しい性生活があり、避妊をしなければ、受胎率はかなり高くなりますわ。',
          );
          await ruby.say_and_wait(
            '通常の人間の月あたりの受胎率は二割から三割ですが、ウマ娘は発情期に少なくとも倍になりますわ。',
          );
        },
        async () => {
          await ruby.say_and_wait(
            'ウマ娘の卵子は普通人より長く生きますわ。ですから、排卵当日に同衾しなければならないわけではありません。',
          );
          await ruby.say_and_wait(
            '前後二、三日は絶好の時期ですわ。週に五、六回同衾できるなら、わたくしの排卵日など気になさらなくて結構ですわ。',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   */
  async talk(ruby, you) {
    const buffer = [];
    if (era.get('base:85:体力') < 0.45 * era.get('maxbase:85:体力')) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '本日は疲れましたわ。ご指示を完全に理解する力は、恐れながらございません。ご容赦を。',
          ),
        () => ruby.say_and_wait('やはり……少し無理をいたしましたわ。'),
        () => ruby.say_and_wait('話し足りないことは、少々おいてから続きを……'),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(
          () =>
            ruby.say_and_wait(
              'あれは疲れますわ。ご予定なら、わたくしが沐浴する時間を空けてくださいまし。',
            ),
          () =>
            ruby.say_and_wait([
              '『疲れる』という字を、ご存じですの？ 先ほど、ある',
              you.sex_code === 1 ? '紳士' : '淑女',
              'がわたくしの上に伏せていた、あの状態ですわ。',
            ]),
        );
      }
    } else if (era.get('cflag:85:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:85:干劲')) {
        case 2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '心に華麗を、身を至上に。これは未来永劫、変わらぬ操ですわ。',
              ),
            () =>
              ruby.say_and_wait(
                '一族へより大きな栄光を。ですから、いかなる困難であれ、越える以外の選択肢はございませんわ。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => ruby.say_and_wait('何か鍛錬の方法をお考えですの？'),
            () =>
              ruby.say_and_wait(
                '本日のトレーニングメニューをお示しくださいまし。負荷が高くとも、構いませんわ！',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '準備は、できておりますわ。中途半端なトレーニングは、出さないでくださいまし。',
              ),
            () =>
              ruby.say_and_wait(
                'トレーニングについて、提案がございますわ。お手元の小冊子をご覧くださいまし。',
              ),
            () =>
              ruby.say_and_wait(
                'いいえ……遠慮は要りませんわ。時間は限られています。もっとすべきことがありますもの。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () => ruby.say_and_wait('くっ……一族を背負うなら、決して……'),
            () => ruby.say_and_wait('折れてはなりません……絶対に……'),
          );
          break;
        case -2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '本日の調子は……原因を早く突き止めねばなりませんわ。',
              ),
            () => ruby.say_and_wait('……感情の波は、厄介ですわね。'),
            () => ruby.say_and_wait('ふ……この程度、ええ……'),
          );
      }
      buffer.push(() =>
        ruby.say_and_wait(
          '明日の予定について。明日の会食は取りやめましたわ。追加の練習を組んでくださいまし。',
        ),
      );
    } else {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '今は休憩時間ですわ。ですが家庭教師のオンライン授業もありますので、まず外国語の課題を済ませますわ。',
          ),
        () =>
          ruby.say_and_wait(
            '『寒さの中にいるすべての人に笑顔を、それで新年を迎える。それがわたくしの仕事だ』……お父様はよくそう仰いましたわ。',
          ),
        () =>
          ruby.say_and_wait(
            '実家のサファイア——うちの犬ですわ——とても賢いですの。届いた新聞が誰宛てか分かり、相手の手元まで届けますわ。',
          ),
        () =>
          ruby.say_and_wait(
            '品位、機能、意匠。この衣装は、そのすべてを満たす最適解ですわ。',
          ),
        () =>
          ruby.say_and_wait(
            'あとで、わたくしの衣装をきちんと整え直す自信はおありですの？',
          ),
        () =>
          ruby.say_and_wait(
            '常に胸を張り、一つ一つを成し遂げるあなたを、わたくしたちは認めておりますわ。',
          ),
        () =>
          ruby.say_and_wait(
            '時折、似たようなことを尋ねられますが……実際、メイドに頼むことはほとんどございませんわ。何事も自分で済ませますの。',
          ),
        () =>
          ruby.say_and_wait(
            '『華麗一族』。皆様はその称号に相応しい高潔な方々ですわ。ですから、わたくしも頂点に立たねばなりません。',
          ),
        () =>
          ruby.say_and_wait(
            'あなたはわたくしのトレーナーですわ。職責を真剣に果たし、研鑽を怠らず、倦まずに。',
          ),
        () =>
          ruby.say_and_wait(
            'お母様もおばあさまも、レース場で偉業を残されましたわ。わたくしにその血が流れていると証明するには……レースしかありませんわ。',
          ),
        () =>
          ruby.say_and_wait(
            '赤い髪留め、そして蝶ネクタイ。『必ず出色の成績を出す』という決意を示す色ですわ。',
          ),
        () =>
          ruby.say_and_wait(
            '春は花のネックレスをしますわ。時期に合う装身具を着けることで、その人物の立場が見えますの。',
          ),
        () =>
          ruby.say_and_wait(
            '一族に相応しい輝きを咲かせねばなりませんわ。絢爛で、輝かしい——蠍の火のような輝きを。',
          ),
        () =>
          ruby.say_and_wait(
            '衣装も一種の記号ですわ。ウイニングライブがあるなら、観客の目を引く華麗が要りますわ。',
          ),
        () =>
          ruby.say_and_wait(
            '睡眠不足は判断力に影響しますわ。眠れないときは、ハーブティーなどを召し上がってくださいまし。',
          ),
        () =>
          ruby.say_and_wait(
            '一族には、寝る前の掟がございますわ。今日一日、その名を辱めなかったかを省みること。大切な時間ですわ。',
          ),
        () =>
          ruby.say_and_wait(
            '今朝の新聞はご覧になりました？ 一族についての報道がございますわ。ぜひお目通しくださいまし。',
          ),
        () =>
          ruby.say_and_wait(
            '幼い頃から、奔走する両親を見送って起きていましたので、今も目覚ましは要りませんわ。',
          ),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          ruby.say_and_wait(
            'あなたはわたくしが認めた伴侶ですわ。誇り高く、頭を上げなさい。',
          ),
        );
      }
      if (era.get('love:85') >= 90) {
        buffer.push(() =>
          ruby.say_and_wait(
            '本日は一族の来年の方針を決める大切な日ですわ。車がお迎えに参ります。くれぐれも遅刻なさらないで。',
          ),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_gift(ruby) {
    const buffer = [
      () => ruby.say_and_wait('ご援助、ありがとうございますわ。'),
      () =>
        ruby.say_and_wait(
          'お返しは、わたくしのあなたへの印象で選んでもよろしいですの？',
        ),
    ];
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '何を仰りたいかは分かっておりますわ。恥ずかしがる必要はありません。この国では、早婚などごく普通のことですもの。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_cook(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `ぐっ……そのお顔はなんですの？ わたくしにも不得手はございますわ。`,
      );
    } else {
      await ruby.say_and_wait([
        '見た目——相当よろしいですわ。味も申し分ありません。あなたなら',
        ruby.sex_code === 1 ? '男の子' : '女の子',
        'の胃を掴めるでしょうね。',
      ]);
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_rest(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `そのままで。肩を貸してくださいまし。少しだけ、少しだけで結構ですわ……`,
      );
    } else {
      await ruby.say_and_wait(
        `重くありませんの？ わたくし、髪量は多いはずですのに……んっ！ 優、しく。ええ、もっと優しく撫でて……`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} call_67 ダイイチルビーがサトノダイヤモンドを呼ぶ呼称
   */
  async office_game(ruby, call_67) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`面白いですわ。ほかのも試してみたいですわ。`);
    } else {
      await ruby.say_and_wait([
        'なるほど、',
        call_67,
        ' ',
        ruby.sex,
        'が夢中になる理由、少し見えてきましたわ。',
      ]);
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async s_a_tree_hollow(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        'あれの代わりに、わたくしという弱い',
        ruby.child_sex_title,
        'の愚痴を聞いていただけますの？',
      ]);
    } else {
      await ruby.say_and_wait(
        `ご先祖様方も、三女神の傍で一緒にわたくしたちを見ていらっしゃるのでしょうね。`,
      );
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async s_a_dating(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '公衆の面前で、年下の',
        ruby.child_sex_title,
        'と何事もなく手を繋ぐ。大したものですわ。',
      ]);
    } else {
      await ruby.say_and_wait(
        `そんなに強く掴まなくても、勝手に逃げたりはいたしませんわ。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   */
  async s_r_lunch(ruby, you) {
    const buffer = [];
    buffer.push(() =>
      era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は、執事が持ってきた豪華な弁当を一緒にいただいた。',
      ]),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '『生涯でいちばんいい枕』ですって？……お上手ですわね。目は、まだ開けないで。',
          ),
        () =>
          ruby.say_and_wait(
            '十分に満たされましたわ。午後のトレーニングでは、これ以上の嫌がらせは禁止ですわ。',
          ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          'ふ……もういいですわ、自分で脱ぎます。こういうとき、あなたは不器用になりますもの。服を破ったら困りますわ。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_r_fishing(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `実は、ダイイチ家にも専門の漁のチームがございますわ。`,
        ),
      () =>
        ruby.say_and_wait(
          `レイロスという名を、ご存じですの？ ここの魚がいつまでいられるか、分かりませんわ。`,
        ),
      () =>
        ruby.say_and_wait(
          `目方が小さいから、わたくしと二人で写真を、ですって？ あなたという人は……`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_r_walking(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait('道が遠くとも、この川はあの壮大な海へ向かいますわ。'),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `メジロ家の河岸に建つ新築の古いアパート、一族も建設に関わっておりますわ。暇があれば、一緒に体験いたしましょう。`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          '幼いのに、こんなに肌を出す服を着るなんて。',
          ruby.couple_title,
          'は何をお考えなのかしら。わたくしが着るのを見たい？ お断りですわ……少なくとも、今は。',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_arcade(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `存じておりますわ。サトノグループ最新のJRPGですわ。その起源、『真・三女神転生』の名は、わたくしでも耳にしたことがありますわ。`,
      );
    } else {
      await ruby.say_and_wait(
        `背景の考証が非常に丁寧ですわ。物語の設計を忠実に示した制作者は、称賛に値しますわ。`,
      );
    }
  },
  /**
   *  @param {CharaTalk} ruby ダイイチルビー
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   *  */
  async o_s_drawing(ruby, hot_spring) {
    if (hot_spring) {
      await ruby.say_and_wait('温泉旅行券を引きましたわ');
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        'なんですって？ ええ、まあいいですわ。お金を出した以上、娯楽と思っておきましょう。',
      );
    } else {
      await ruby.say_and_wait(
        'お母様には、莫逆の友がいらっしゃいますわ。愛人を三日三晩、姦して金銭観の歪みを正した、と。',
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
   * */
  async o_s_ktv(ruby, call_93) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        'ええ……',
        call_93,
        ' が以前仰っていたのは、ここですわね。遮音材……絶品ですわ。',
      ]);
    } else {
      await ruby.say_and_wait(
        `ナイトクラブの歌姫より上、ですって？ 後ほど、あなたの部屋へ伺わせていただきますわ。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   * */
  async o_s_movie(ruby, callname) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        callname,
        '。も……申し訳ございません。この……ホラーは、緊張しすぎて、少し……',
      ]);
      await era.printAndWait(
        `映画が終わると、椅子の上に小さな水溜まりができていた。`,
      );
    } else {
      await ruby.say_and_wait([
        '筋が面白く、心を掴む佳作だと伺いましたわ、',
        callname,
        '。ですがあなたの前科を考えますと、わたくしにはどのタイツを履いてほしいのですの？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   */
  async o_c_pray(ruby, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は最近調子の悪い ',
      ruby.get_colored_name(),
      ' と執事を連れ、三人で神社へ来た。',
    ]);
    await ruby.say_and_wait(
      `鳥居は、神の住まう領域と、わたくしたちの日常を分ける結界ですわ。`,
    );
    await era.printAndWait(`通るときは、必ず一礼を。`);
    await ruby.say_and_wait(`どうかなさいました？`);
    era.printButton(`「礼儀は完璧だと思います。」`, 1);
    await era.input();
    await ruby.say_and_wait(
      `一族は参拝の機会も多いですので、幼い頃から覚えておりますわ。`,
    );
    await ruby.say_and_wait(
      `もちろん、祈りは……頼りにするためではございません。道を拓けるのは自分だけですわ。`,
    );
    await ruby.say_and_wait(
      `神社は、志と向き合う場所ですわ。だからこそ、正しい礼儀で臨まねばなりません。`,
    );
    await ruby.say_and_wait(`では、参拝いたしますわ。`);
    era.drawLine();
    await ruby.say_and_wait([
      callname,
      ' も終わりましたか？ でしたら、それでは……',
    ]);
    await you.say_as_passer_by_and_wait(`神主`, [
      'おや、',
      ruby.actual_name_with_title,
      'ではございませんか。ご参拝、ありがとうございます。',
    ]);
    await ruby.say_and_wait(`神主さま。このあと、事務のご挨拶に伺いますわ。`);
    era.drawLine();
    await ruby.say_and_wait(
      `神主さまへのご挨拶と、参拝を終える礼は、これですべて済みましたわ。帰りましょう。`,
    );
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_restaurant(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `昼食は一人でいただきますわ。用事がなければ、他人と食卓を共にする必要はございませんもの。`,
        ),
      () =>
        ruby.say_and_wait(
          `お食事の様子は、もう十分にお綺麗ですわ。あら、ここにご飯粒が。`,
        ),
      () =>
        ruby.say_and_wait(
          `食事中に覗くのは品位に欠けますわ。お好みの衣装があれば、後ほど試着いたしますわ。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   */
  async o_s_dating(ruby, callname) {
    const buffer = [];
    buffer.push(
      () => ruby.say_and_wait(`美しい場所ですわ。気に入りました。`),
      () =>
        ruby.say_and_wait(`時折、あなたと出会えた縁に感謝したくなりますわね。`),
      () => ruby.say_and_wait(`これは、お仕事の一環ですの？`),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `強盗や暴行といった事件の多くは、こうした地下鉄街で起きますわ。本格化した${ruby.uma_sex_title}でも、油断すれば手を下されますわ。`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          callname,
          '、わたくしより車が来たかを見ないで、本当に大丈夫ですの？……待ちなさい！ 動いたら、人に見られますわ……',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_shopping(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        'これは商城の招待状と、会場の識別通行証ですわ。館内は広いですの。わたくしに手を引かせてはいただけませんの？',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          'お母様とお父様は、結婚三ヶ月で身籠られましたわ。母子用品に興味があるわけではございません。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '正月の幸せな気配に、',
        you.get_colored_name(),
        ' は朝から今まで興奮しっぱなしだった。',
      ]);
      await era.printAndWait(['新年の初撃ち、いくか？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は待ちきれず、こっそり ',
        ruby.get_colored_name(),
        ' の傍へ寄り、甘えた顔で示唆した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は怒ったように ',
        you.get_colored_name(),
        ' を睨み、「消えなさい」と手で示した。',
      ]);
      await era.printAndWait([
        '怒った顔がことのほか冷たく美しい。追い立てられた ',
        you.get_colored_name(),
        ' の決断は？',
      ]);
      era.printButton('部屋へ戻って寝る。', 1);
      era.printButton('ルビーを腰から抱き上げる。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '一晩中、',
          you.get_colored_name(),
          ' は寝返りを打ち、眠れなかった。',
        ]);
        await era.printAndWait([
          '結局、',
          you.get_colored_name(),
          ' は涙を流しながら、トイレで新年の初撃ちをした。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は悲鳴を上げ、靴も脱げぬまま ',
          you.get_colored_name(),
          ' にベッドへ押し倒された。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は乱暴に ',
          ruby.get_colored_name(),
          ' の上着を引き、微かに膨らんだ柔嫩な乳房へ顔を埋めて擦った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は久しぶりに、白い肌の香りを深く吸い込んだ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は続いてファスナーを下ろし、長く我慢した相棒に空気を吸わせた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' に逃げさせず、細い腰へ両手で軽く力をかけた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の硬い下体が ',
          ruby.get_colored_name(),
          ' の滑らかで狭い入り口に嵌り、それから幼い通路を何度も貫き始めた。',
        ]);
        await era.printAndWait([
          '最後、',
          ruby.get_colored_name(),
          ' の小さな子宮の内壁に突き当たって止まった。それでも根元の一部は、まだ空気に晒されている。',
        ]);
        await ruby.say_and_wait('壊……壊れますわ！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の小さな両手は ',
          you.get_colored_name(),
          ' の肩に乗って震えているが、暴れることはしない。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は止まった。']);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が少し慣れてから、腰を抱えて滑らせ始めた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の特殊な体質のせいか、',
          you.get_colored_name(),
          ' の下体は進むときほとんど負担を感じない。',
        ]);
        await era.printAndWait([
          '少し重みのある人形を抱いているような、軽さだった。',
        ]);
        await era.printAndWait([
          'そこから伝わる包容と摩擦が、',
          you.get_colored_name(),
          ' を雲の上へ連れていく。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の子宮の縁に当たるたび、彼女の激しい叫びと喘ぎが ',
          you.get_colored_name(),
          ' を笑わせる。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に、もっと優しく、もっと遅くと哀願した。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は腰のリズムを速め、',
          ruby.get_colored_name(),
          ' の喘ぎと叫びも増していった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の内側で、征服欲が燃え上がった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' のウイニングライブの歌声は、疑いなく心を奪う天使の声だ。',
        ]);
        await era.printAndWait([
          'だが今の嬌声は、',
          you.get_colored_name(),
          ' の魂を堕落の地獄へ引き下ろすだけだった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' がまだ欲の湧き上がりを感じる前に。',
        ]);
        await era.printAndWait([
          '突然、',
          ruby.get_colored_name(),
          ' の全身が後ろへ弓なりになり、膣も震え、締めつけてきた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の可愛い小さな顔を叩いた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は数分、意識を失い、ぼんやりと戻ってきた。',
        ]);
        await era.printAndWait([
          'そこで ',
          you.get_colored_name(),
          ' の下体は、また抽送を始めた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の白タイツを半分脱がせ、鼻先へ持っていった。',
        ]);
        await era.printAndWait([
          '脱いだばかりのタイツには、',
          ruby.get_colored_name(),
          ' の香りが残っている。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は強く吸い、香水を味わうようにした。',
        ]);
        await ruby.say_and_wait('変態。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は揺れる速度を上げた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は上下に揺らし、左右に回した。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は唇を強く噛み、快感の侵入に抗っているようだった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' が再び絶頂するまで我慢し、それから欲を解放した。',
        ]);
        await era.printAndWait([
          '彼女の失神ぶりは大げさで、涙も涎もすべて溢れていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は親切に舌を出し、残らず舐め取った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はこの間の圧力を、一度にぶちまけたかった。',
        ]);
        await era.printAndWait([
          'だが ',
          ruby.get_colored_name(),
          ' はもうぐったりで、死にかけの様子だった。',
        ]);
        await era.printAndWait([
          '絶頂する姿はますます可愛く、肌は潮紅の美しい光沢を帯びている。',
        ]);
        await era.printAndWait([
          '唇は紅く潤み、溶けかけの情趣キャンドルのようだった。',
        ]);
        await era.printAndWait([
          'とりわけ水を含んだ瞳は、湿って朧げで、一目見るだけで魂を吸い込まれそうになる。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が息絶えないか恐れ、自分も少し力尽きた ',
          you.get_colored_name(),
          ' は、来年また戦うことにした。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('欲しい贈り物は、決まりましたか？');
      era.printButton('「あなたが欲しい。」', 1);
      await era.input();
      await ruby.say_and_wait('真摯な答えですわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は手元の動きを止め、わずかに顔を赤らめた。',
      ]);
      await ruby.say_and_wait('でしたら、あなたの働き次第ですわ。');
      await era.printAndWait([
        '二人は飾り用にクリスマスツリーをまとめて買い込んだ。ある意味、',
        ruby.get_colored_name(),
        ' の子供心とも言える。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はぼんやり、自分はツリーを飾ったことがなかったと思い、今は ',
        ruby.get_colored_name(),
        ' と一緒にやることになった。',
      ]);
      await era.printAndWait(
        '杖のような小さなキャンディ、穴の開いた金貨、ジンジャーブレッドマンや様々なおもちゃが枝に掛かる。',
      );
      await era.printAndWait([
        'もちろん蹄鉄もある。',
        ruby.get_colored_name(),
        ' はそれが気に入ったらしい。',
      ]);
      await era.printAndWait([
        'それから身支度の時間だ。',
        ruby.get_colored_name(),
        ' の言葉は曖昧だったが、',
        you.get_colored_name(),
        ' には今夜を期待しているのが分かった。',
      ]);
      await era.printAndWait([
        '無事に風呂を終え、',
        ruby.get_colored_name(),
        ' が先に上がり、寝室の大きなベッドの縁に座った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も後を追った。ただし ',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' を抱いて、むしゃぶりついた。',
      ]);
      await era.printAndWait([
        '麻酔のように、',
        you.get_colored_name(),
        ' はもっと近く、もっと近く撫で、キスし、舐めたいだけだった。',
      ]);
      await era.printAndWait(
        '部屋にも飾りが多く、大ベッドの四本の柱には、優秀な素質に近い色のリボンが結ばれている。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は一本を取り、軽く ',
        ruby.get_colored_name(),
        ' の手を縛った。',
      ]);
      await era.printAndWait(
        '淡い黄色の肌は小麦の健康な色を透かし、脚の間の凶器は近頃の頻繁な使用で深紅になっていた。',
      );
      await era.printAndWait('反った先端は、紅から紫へ変わりかけている。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の髪を耳の後ろへやり、巨棒が小さな顔へ近づいていく。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は顔を上げ、',
        you.get_colored_name(),
        ' へ微笑み、舌を出して先を突いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の小さなトレーナーは震え、嬉しそうに ',
        ruby.get_colored_name(),
        ' の口を追った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は素直に ',
        you.get_colored_name(),
        ' を受け入れ、口を精一杯開けて、ようやく含めた。',
      ]);
      await era.printAndWait(
        '喉を鳴らし、ゆっくり引き、唇だけが先端に触れたところで、また含み直す。',
      );
      await era.printAndWait([
        '動きは遅いのに、',
        you.get_colored_name(),
        ' は叫びそうになった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の頭を抱えて前後に揺らし始めた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は少し抵抗したあと、懸命に ',
        you.get_colored_name(),
        ' のリズムに合わせた。',
      ]);
      await era.printAndWait([
        '人間が ',
        you.get_colored_name(),
        ' にこう口腔を犯されれば、出血せずとも皮が剥けるだろう。',
      ]);
      await era.printAndWait([
        'しばらくして、',
        ruby.get_colored_name(),
        ' の頬が酸っぱくなってから、',
        you.get_colored_name(),
        ' はようやく射精した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が飲みきれなかった分は、体へ噴きかかった。',
      ]);
      await era.printAndWait([
        '一時、口が閉じられず、',
        ruby.get_colored_name(),
        ' は横目で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton('「ルビー、ごめん。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は愛馬の肩を抱き、可愛い耳を撫で、口角にキスして、ようやく ',
        ruby.get_colored_name(),
        ' をなだめた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は姿勢を変え、背を向けて ',
        you.get_colored_name(),
        ' の胸の上に座り、わざと尻を突き出した。',
      ]);
      await era.printAndWait([
        '白い二つの瓣が ',
        you.get_colored_name(),
        ' の眼前で揺れ、',
        you.get_colored_name(),
        ' は初めて会ったときも、ここに視線を吸われたのを思い出した。',
      ]);
      await era.printAndWait([
        '臀を掴み、',
        you.get_colored_name(),
        ' は我慢できず揉みしだいた。',
      ]);
      await era.printAndWait('強く掴んで放し、それから平手で叩いた。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は二度震え、赤い指跡がすぐに浮かび、鮮やかだった。',
      ]);
      await ruby.say_and_wait('早く……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の言うとおり、舌を伸ばして深い股溝を舐め、上から下へ、小さな窪みまで滑った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は人差し指で開き、皺だらけで、ピンクに縮こまっている。',
      ]);
      await era.printAndWait([
        '肉欲の匂いが中から漂い、',
        you.get_colored_name(),
        ' を探索へ誘う。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はぐったり ',
        you.get_colored_name(),
        ' の脚へ倒れ、鼻先には屹立した硬さがある。彼女はこの温存を楽しんでいた。',
      ]);
      await ruby.say_and_wait('今日はここまでにいたしましょう。疲れましたわ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は残念そうにそこを見つめ、名残惜しそうだった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} ruby ダイイチルビー */
  async load_talk(ruby) {
    await ruby.say_and_wait('……それが、あなたのご意志ですの？');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('……分かりましたわ');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      '、は、トレーナーを、替え——',
    ]);
    await ruby.print_and_wait(
      `${ruby.sex}は言い終えないまま走り去り、点々と涙の跡を残した……`,
    );
  },
  basement_end: (() => {
    const title = '足の感度が高い';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('ルビーお母さん……ルビーお母さん……');
      era.println();
      era.print([
        you.get_colored_name(),
        ' にとって、こうした暮らしも悪くないのかもしれない。',
      ]);
      era.print(
        'ただ、呼吸はまだ通らない。顔に被さっているのは、ルビーが昨日履き替えた白いタイツで、すでに散った光を、さらに誘惑へと染めている。',
      );
      era.print('瞼の上からでも、夢はその薄い紗を纏う。');
      era.print(
        `ルビーの体を通ったタイツ、酔いそうな気配と、温かな体温が描く朦朧とした美しさが、${you.name} をじれったくさせる。`,
      );
      era.print(
        `ルビーの、とっくに ${you.name} を征服した美しい足が、${you.name} の前で止まり、時折鼻先を軽く突いて擦り、また上がる。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、体温の残る足裏に口づけしようとする。空虚なとき、何度も落ちる軽いキスが、何度も ${you.name} の体内の被虐の狂熱を誘う……`,
      );
      era.println();

      await era.printAndWait('たた、たた、たた……');
      era.println();

      era.print(
        `誘うリズムが規則正しく鳴り、${you.name} は虚無の中から、心を奪われてやまない姿が歩いてくるのを見た気がした。`,
      );
      era.print(
        `あの婀娜な曲線、妖しい姿、そして蕩ける双眸が、${you.name} の鼓動をさらに激しくする。`,
      );
      await era.printAndWait(
        `現実か夢か、もう分からない。${you.name} は自分の経緯を忘れ、今はベッドに寝ているのでもないような気がした。`,
      );
      era.println();

      await ruby.say_and_wait(
        '下賤な子犬、そんなにお母さんの匂いが好きですの？ もう空っぽに射精したのに、まだお母さんがいじめ続けてほしいんですの？',
      );
      era.println();

      era.print(
        `${you.name} は舌も口腔も痺れ、頭は空っぽで、射精しすぎて言語能力を忘れたようだった。`,
      );
      era.print(
        `ルビーお母さんの言葉を聞き、${you.name} は思わず間抜けに笑い、後庭のローターも電流が尽きて止まった。すべてが広がり、平凡に戻ったように。`,
      );
      era.print(
        `そして ${you.name} のルビーお母さんは、今は軽く笑い、立ち上がる。威厳があり、魅力に満ちている。`,
      );
      era.print(
        `美しい足が胸の蕾を突き、すでに濁液だらけの白いタイツを自分の足に履き、身を屈めて、${you.name} の胸の上でタイツを履き始めた。`,
      );
      era.print(
        `粗い感触に、慣性の滑らかさが混ざる。${you.name} は気持ちよさに呻き、${you.name} は生きる意味を見つけたように、ルビーお母さんの足敷きになり、肉便器になり、従順な下賤な犬になり、精液を捧げるのも悪くないと思った。`,
      );
      era.print(
        `${you.name} はこれまでの罪も過ちも、これで償えた気がし、この過程を楽しんでいた。`,
      );
      await era.printAndWait(
        `靴敷きのようにされ、ルビーお母さんが ${you.name} の好きな黒い革靴を履くのを見る。硬い模様が蕾を碾き、電撃のような感覚が、${you.name} を雲の間、黄泉の上で滋養されているように感じさせた。`,
      );
      era.println();

      await ruby.say_and_wait(
        'では、下賤な子犬の息子、床に大人しく寝ていなさい。ルビーお母さんは貞操帯を探しに行きますわ。これからあなたは、ルビーお母さんの傍の下賤な犬。命令の下でしか、屈辱的に射精できませんわ。',
      );
      era.println();

      era.print(
        `これが以心伝心か。${you.name} のルビー、いや、${you.name} のルビーお母さんは、すでに自分の心の中での重みを察していた。`,
      );
      era.print(
        `${you.name} も進んで、心から、心悦誠服して、ルビーお母さんの下賤な犬になる！`,
      );
      era.print(
        `足音が遠ざかると、${you.name} は胸の大石が下りた気がし、肉棒はこうして萎え、手で撫でても動かない。`,
      );
      era.print(
        `${you.name} は疲れ、昏々とまた眠りへ落ちた。そうすれば ${you.name} はルビーお母さんの足跡を追い、ルビーお母さんに会えるような、ルビーお母さんの足下へ沈み、永遠にルビーお母さんの美しい足の匂いを嗅げるような気がした。`,
      );
      era.print(
        `肉棒はまた徐々に立ち上がり、${you.name} は自分がどんな境遇にいるのか、どこにいるのか分からない……`,
      );
      await era.printAndWait(
        `だが夢のいちばん手前で、ルビーお母さんは妖艶な両足を伸ばし、足裏を ${you.name} の前へ向け、優しく笑い、${you.name} を見つめている……`,
      );
    };
    f.title = title;
    return f;
  })(),
};
