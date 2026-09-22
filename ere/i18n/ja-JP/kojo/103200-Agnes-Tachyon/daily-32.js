/**
 * @file アグネスタキオン - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（改訂）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require('#/i18n/ja-JP/snippets');

module.exports = {
  /**
   * 地下室脱出後のおはよう／選択時の共通台詞
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  select_when_escape(tachyon, callname) {
    tachyon.say(['不思議ですわね、', callname, '']);
    tachyon.say([
      '地下室にいたころのあなたの瞳は、ほとんど光を失っていたというのに……今はまた、人を吸い込む輝きを取り戻していますわ。',
    ]);
    tachyon.say([
      '『私の眼に特別があるなら、それはタキオンの光の反射です』？ ……ふふ、',
      callname,
      '、珍しく口が達者ですわね……',
    ]);
    tachyon.say([
      'では……もし私の瞳がまた埃をかぶったら、もう一度、あなたが拭き取ってくださいな。',
    ]);
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  good_morning(tachyon) {
    tachyon.say(
      '来ましたわね。ついでに玄関のゴミ袋を三つ捨てておきなさい……実験の手伝い？ 必要なときは呼びますわ。',
    );
    era.print([tachyon.get_colored_name(), ' は実験にかかりきりらしい。']);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          'ああ、',
          callname,
          '、この章、指導してもらえますかしら？',
        ]);
        await tachyon.say_and_wait(
          '『タキオンにもわからないことがあるなんて』ですって？ 褒めてはいますけど、褒めすぎですわ。自分の無知の大きさくらい、わきまえていますもの。',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          'ああ、',
          callname,
          '、こちらの話、教えてくれますかしら？',
        ]);
        await tachyon.say_and_wait(
          'ええ、この章ですわ。科学倫理。なぜかいつも頭に残らないのよ……不思議ですわね……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '試験のために学ぶ知識に、本当に意味があるのかしら？',
        );
        await tachyon.say_and_wait([
          '私の言いたいことはわかりますわね、',
          callname,
          '。',
        ]);
        await tachyon.say_and_wait(
          '生活で一切使わないものを学んでも、無駄ですわ。',
        );
        await tachyon.say_and_wait(
          'だから倫理だ道徳だといった、古臭い堅苦しい話は、学ばなくても構いませんでしょう。',
        );
        await tachyon.say_and_wait('……だめですの？');
      },
      async () => {
        await tachyon.say_and_wait([
          '地理？ いいえ、',
          callname,
          '……こんな簡単な科目まで補習が要ると思われては困りますわ。',
        ]);
        await tachyon.say_and_wait(
          '疑うなら試してみなさい。スイスの首都はベルン、ブラジルの公用語はスペイン語、アメリカの前身は十三の英領植民地……ほら、全部答えられましたでしょう？',
        );
        await tachyon.say_and_wait(
          '南がどちらかですって？ 愚問ですわ。地面の下に決まっています。',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          '、この作文のどこが問題なのか、さっぱりわかりませんわ。',
        ]);
        await tachyon.say_and_wait(
          '題は『なぜカーテンは青いのか』でしたわよね？',
        );
        await tachyon.say_and_wait(
          'だから発色の原理と、人間が錐体細胞から得る情報に基づいて二万字の分析を書いたのですけれど、何がおかしいのかしら？',
        );
        await tachyon.say_and_wait(
          '……なるほど、字数オーバーですのね。次は二千字以内に収めますわ。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '準備？ 準備など弱者のすることですわ、',
        callname,
        '。獅子が鍛えているところを見たことがあります？',
      ]);
    } else {
      await tachyon.say_and_wait(
        'ええ？ なぜまだレース前の準備をするのです？ レースは試験と同じ、普段の蓄積を測るものですわ……',
      );
      await tachyon.say_and_wait(
        'もしかしてあなた、試験前になって慌てて詰め込んで単位を祈るタイプですの？',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {PrintedSpan} call_9 アグネスタキオンからダイワスカーレットへの呼び方
   * @param {PrintedSpan} call_25 アグネスタキオンからマンハッタンカフェへの呼び方
   * @param {PrintedSpan} y_call_s プレイヤーからセイウンスカイへの呼び方
   * @param {number} relation アグネスタキオンのプレイヤーへの好感度
   * @param {number} love アグネスタキオンのプレイヤーへの恋慕
   * @param {number} talk_times 今週の会話回数
   * @param {number} cook_times アグネスタキオンに料理した回数
   */
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '……',
            callname,
            '、今日の実験報告は書き終えました？',
          ]);
          await tachyon.say_and_wait(
            'ここで雑談する暇があるなら、先にやるべきことを済ませなさい',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'さあ、今回の薬ですわ………『味が変』？ 忘れていますのね。あなたは実験動物ですわ。実験動物が薬の味を嫌う道理などありません。',
            ),
          async () => {
            await tachyon.say_and_wait([
              '限界……',
              tachyon.uma_sex_title,
              '……脚……いいえ、やはりだめですわ……',
              callname,
              '？ そこにいつから立っていますの？',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は何かを考え込んでいるようだった。',
            ]);
          },
          () =>
            tachyon.say_and_wait([
              coffee.get_colored_name(),
              '？ ええ、',
              tachyon.sex,
              'は興味深い観察対象ですわ。それに万一……いいえ、何でもありません。今の話は忘れてください。',
            ]),
          async () => {
            await tachyon.say_and_wait(
              '服……？ ああ、三日ほど風呂に入っていませんわね……',
            );
            await tachyon.say_and_wait(
              'あなたに何の関係がありますの。無駄にするなら実験に回しなさい……',
            );
            await tachyon.say_and_wait(
              'もう結構ですわ。あなたはモルモットです。私が何をしようと、あなたには関係ありません。',
            );
          },
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は、',
              tachyon.get_colored_name(),
              ' がミキサーで今日の昼食を掻き回しているのを見た。',
            ]);
            await tachyon.say_and_wait([
              '食事？ 必要ありませんわ。人であろうと',
              tachyon.uma_sex_title,
              'であろうと、最低限の栄養さえ補えば足ります。味を求める余分など、無駄な手間ですわ。',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              'たかがモルモットですわ。実験の手伝いをしながら私の機嫌も取っておきなさい。価値がなくなったとき、慈悲をかけてあげるかもしれませんもの。',
            ),
          () =>
            tachyon.say_and_wait(
              '用があるなら早く言いなさい。実験の時間を無駄にしないで。',
            ),
          async () => {
            await tachyon.say_and_wait('ふう……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は溜息をついた。機嫌は悪そうだ。今は構わないほうがいい……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait('ふんふんふん～～ふんふん～～');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はご機嫌らしい。だが',
              tachyon.sex,
              'の手にある、危険な墨緑色に光る薬剤を見て、',
              you.get_colored_name(),
              ' はその上機嫌を壊さないことにした。',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            '、暇なら料理の腕を磨きなさいな。人が口にできるもの、早く作れるようになってください',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            '、本当に用がないなら実験器具を全部洗いなさい。実験着を洗うでも、ゴミを捨てるでもいいわ。できることはいくらでもありますでしょう？ そこでぼうっとしていないで',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '、今日の薬ですわ……逃げますの？ ふふ、',
              tachyon.uma_sex_title,
              'の手から逃げられるとでも思ったのですか？',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
              'の限界……スパート……進化……生存……人類補完計画……腐敗した社会……救済……再生……閉じた現状からの脱出……',
            ]);
            await tachyon.say_and_wait(
              'ああ、わかりましたわ。すべての真実はエジプトにありますわね。',
            );
            await era.printAndWait([
              '……',
              tachyon.get_colored_name(),
              ' が突然おかしなことを言い出した。今は構わないほうがいい。',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              'ああ……丁度いいわ。白衣を洗ってくださいな。先日の実験で汚してしまって…………',
            );
            await tachyon.say_and_wait(
              'なぜすぐに渡さないの？ 忘れていただけですわ。第一、気づかなかったのはモルモットとしての怠慢でしょう？',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '食事？ ……見解は変わっていませんわ。食事は栄養を補うためだけに存在し、それ以上でも以下でもない……',
            );
            await tachyon.say_and_wait(
              'ただ、そうですね。最近はこの時間を、少し楽しみにしていますわ……',
            );
            await tachyon.say_and_wait(
              'いいえ、深読みしないで。天と地の差を思い知らせるためだけですわ。あのときの屈辱はそう簡単に帳消しになりません。毎日試薬を引き受けてくれるなら、考えなくもありませんけれど……',
            );
            await you.say_and_wait('それ、今と同じじゃないか？');
            await tachyon.say_and_wait(
              'そう言われると……待って、毎日……いいえ、何でもありません。忘れて。今、すぐに、直ちに。',
            );
          },
          () =>
            tachyon.say_and_wait(
              '最近のご飯……まあ及第点ですわ。もう少し甘く……いいえ、何でもありません',
            ),
          async () => {
            await tachyon.say_and_wait([
              'ああ、',
              call_9,
              '……『この前のクッキーと飲み物、ありがとうございました』？',
            ]);
            await tachyon.say_and_wait(
              '大したことではありませんわ。気に入ったなら、また取りにいらっしゃい…………',
            );
            await tachyon.say_and_wait(
              'その顔は何ですの。可愛い後輩に、そんなものは渡しませんわよ',
            );
          },
          async () => {
            await tachyon.say_and_wait('ふんふん～～ふんふんふん～～');
            await tachyon.say_and_wait(
              '十匹のモルモットお出かけ〜湾に落ちて九匹〜',
            );
            await tachyon.say_and_wait('火山に落ちて八匹〜宝穴で迷って七匹〜');
            await tachyon.say_and_wait(
              '怒涛に巻かれて六匹〜コンドルに襲われ五匹〜',
            );
            await tachyon.say_and_wait('食べ過ぎて四匹〜頂を目指して三匹〜');
            await tachyon.say_and_wait(
              'ターボ爆発で二匹〜コーヒー飲み過ぎて一匹〜',
            );
            await tachyon.say_and_wait(
              'ひとりぼっちのモルモットチューチュー〜薬を飲んでドカンと爆発〜〜',
            );
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' が妙な歌を口ずさんでいるのを聞いた……歌詞の意味はわからないが、今の',
              tachyon.sex,
              'には近づかないほうがいい気がした。',
            ]);
          },
        );
      }
    } else if (relation > 225 && love < 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'おや、',
            callname,
            '、どうして急に話しかけに来たのです？',
          ]);
          await tachyon.say_and_wait('ふふ、ただの気紛れですの？');
          await tachyon.say_and_wait(
            '他に目的があるはずですもの。いいえ、何でもありません。物事に好奇心を持つのは良いことですわ',
          );
          await tachyon.say_and_wait([
            '口上の探索も含めて、ですわ。そうでしょう、画面の向こうの ',
            callname,
            '？',
          ]);
          await tachyon.say_and_wait(
            '何の話かって？ ふふ、さあ、誰が知っているかしら',
          );
        },
        async () => {
          await tachyon.say_and_wait(['ああ、', callname, '、危ない！']);
          await tachyon.say_and_wait(
            'ふう、突然話しかけてくるからですわ。薬が零れるところでした',
          );
          await tachyon.say_and_wait(
            '何の薬かですって？ ふふ、以前集めたあなたのDNA、覚えていますわね？',
          );
          await tachyon.say_and_wait(
            '匂いを嗅いだ者をあなたに狂わせる薬ですわよ……ん？ 零れなくて後悔し始めました？ ……助平ですわね',
          );
          await tachyon.say_and_wait(
            '冗談ですわ。本当は、あの人のDNAを基にした指向性の毒……',
          );
          await tachyon.say_and_wait(
            '蒸気を嗅いだだけでも鼻腔に病変を起こし、癌細胞を作らせますわ……',
          );
          await tachyon.say_and_wait(
            'まあまあ、そんなに怯えなくても。はは、零れていないのですからいいでしょう',
          );
          await tachyon.say_and_wait(
            'ん？ どちらが本当か……それはご想像にお任せしますわ～～',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……今日の服……']);
          await tachyon.say_and_wait(
            'それから、その、考えたのですけれど。洗濯を頼むのはまだしも、下着まで洗うのはさすがに行き過ぎですわね',
          );
          await tachyon.say_and_wait(
            '……いいえ、匂いの話ではありませんわ。第一、臭くなどありませんわよ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'ここまで来ると、あなたの弁当にはすっかり慣れましたわね',
          );
          await tachyon.say_and_wait(
            'ふふ、今では食べられない日のほうが落ち着かないくらいですわ',
          );
          await tachyon.say_and_wait('こんな暮らし……このまま維持して……');
          await tachyon.say_and_wait(
            'ふふ、研究者にとって、維持など褒め言葉ではありませんわ',
          );
          await tachyon.say_and_wait(
            '維持ばかり考えていては、突破は訪れません……',
          );
          await tachyon.say_and_wait('その通りですわ……でも……');
          await tachyon.say_and_wait(
            'どうしてかしら。今の暮らしが、このまま続いてもいいと思えてしまって……',
          );
          await tachyon.say_and_wait('どうして……');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['おや、来ましたわね ', callname]);
        await tachyon.say_and_wait('今日の実験は……ん？ どうしました');
        await tachyon.say_and_wait(
          '近すぎます？ そうかしら。私は丁度いいと思いますわ',
        );
        await tachyon.say_and_wait('それとも、恥ずかしがっていますの？');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          '、もっと話すのは構いませんけれど、他にやるべきことがあるでしょう？',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '！今日の薬は、右の緑と左の赤、どちらにします？',
          ]);
          await tachyon.say_and_wait(
            'どちらもいや？ わかっていましたわ。やはり第三の選択、虹色ですわね！',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……明日の弁当']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に、明日は休みだと伝えようとした',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ええ……',
            callname,
            '、休みでも人は食事をしなくていいわけではありませんわよ',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は心配そうな目で ',
            you.get_colored_name(),
            ' を見た',
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は悟った。この状況で何を言っても無駄だ。',
            tachyon.sex,
            'の弁当を作ると約束するしかなかった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '～～今日の服もお願いしますわ',
          ]);
          await tachyon.say_and_wait(
            'はあ？ 自分で洗う？ 私の時間は風が運んでくるものだとでも？',
          );
          await tachyon.say_and_wait(
            'それに、これもあなたへのご褒美ですわよ～～',
          );
          await tachyon.say_and_wait('私が着ていた肌着ですもの～～');
          await tachyon.say_and_wait(
            '臭い！？ ちょっと！ 失礼にもほどがありますわ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'はあ？ 授業に出なくても成績に響くかですって？',
          );
          await tachyon.say_and_wait([
            callname,
            '、受験教育は凡人を育てるためのものですわ。天賦の才である私に、必要などあるはずがありません',
          ]);
          await tachyon.say_and_wait([
            '『では試験も出なくていいのですか？』？ 何を言っていますの、',
            callname,
            '。試験は明日……今日！？',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はいつもと違い、無言のまま体を預けてきた',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '、どうかしました？']);
          era.println();
          await you.say_and_wait('何でもない');
          await era.printAndWait([
            you.get_colored_name(),
            ' が答えたあと、',
            tachyon.sex,
            'は続けて ',
            you.get_colored_name(),
            ' に寄りかかった',
          ]);
          await era.printAndWait(
            '二人のあいだに言葉はなく、そのまま無言の時間が流れた',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '？ 丁度いいわ。これを全部、防炎の特殊紙に書き写して！',
          ]);
          await tachyon.say_and_wait([
            call_25,
            ' のやつ！ ',
            tachyon.sex,
            'で実験をしただけなのに、実験資料を全部焼くと脅してきましたわ！',
          ]);
          await tachyon.say_and_wait([
            'なんとか午後三時まで待ってもらいましたけれど、それまでに写し終えませんと！',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に急き立てられ、机に向かって書き写しに加わった',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' の胸に疑問が浮かぶ。本当に焼くなら、事前に知らせたりするだろうか……？',
          ]);
          era.println();
          await era.printAndWait(
            '案の定、午後三時を過ぎても研究資料は燃えなかった。実験室はいつものように穏やかで、',
          );
          await era.printAndWait([
            '被害を受けたのは、半日かけて部屋一杯の資料を書き写した ',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の手だけだった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            call_9,
            ' の子……可愛いではありませんか？',
          ]);
          await tachyon.say_and_wait([
            'なぜか',
            tachyon.sex,
            'を見ると、父性に近いものが湧いてくるのですわ',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('母性じゃないのか？');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              'もう',
              you.uma_sex_title,
              'になったのにわからないのですか？',
              callname,
              ' は鈍いですわね',
            ]);
            era.println();
            await you.say_and_wait('……何を言っているのかわからない');
          } else {
            await tachyon.say_and_wait([
              '違いますわ……この感覚は説明しにくいのです。あなたが',
              tachyon.uma_sex_title,
              'になれば、わかるでしょう',
            ]);
            era.println();
            await you.say_and_wait([
              'いつか自分が',
              tachyon.uma_sex_title,
              'になるみたいに言わないでくれ！？',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('sky君はいい子ですわね……');
          era.println();
          await you.say_and_wait([
            'ん？ タキオンは ',
            y_call_s,
            ' と知り合いなのか',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'いいえ……私が言っているのと、あなたの言っているのは、たぶん同じsky君ではありませんわ',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は首を傾げて ',
            tachyon.get_colored_name(),
            ' を見た。学園に他にもskyがいるのか',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……いいえ、やめましょう、',
            callname,
            '。今のは聞かなかったことにして',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 会話 - 低やる気の膝枕
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, '、疲れましたわ。寝かせてください']);
    era.printButton('承知する', 1);
    era.printButton('断る', 2);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' が心の中で選ぶより先に、',
      tachyon.get_colored_name(),
      ' はもう ',
      you.get_colored_name(),
      ' の膝に横たわっていた',
    ]);
    era.printButton('「おい、タキオン」', 1);
    await era.input();
    await tachyon.say_and_wait('ZZZ');
    era.println();
    await era.printAndWait('早すぎる！？');
    await era.printAndWait([
      tachyon.sex,
      'を起こさないため、',
      you.get_colored_name(),
      ' はおとなしく元の姿勢のまま動けなかった',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'が起きたら、ちゃんと注意しなければ。迷惑はまだしも、異性の膝にいきなり寝るのは危機感がなさすぎる',
    ]);
    era.println();
    await tachyon.say_and_wait('んぅ……');
    era.println();
    await era.printAndWait([
      '眠りは浅そうに',
      tachyon.sex,
      'は寝返りを打った。',
      you.get_colored_name(),
      ' の胸の説教は、',
      tachyon.sex,
      'の正面を見た瞬間に跡形もなく消えた',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'の目尻の隈、倒れ込むような疲労。',
      tachyon.sex,
      'の睡眠がいかに不安定かを、何度も示していた',
    ]);
    await era.printAndWait([
      'よく考えれば、最近の',
      tachyon.sex,
      'は研究の壁に当たり、ろくに眠れていないらしい',
    ]);
    await era.printAndWait([
      '唯一ほっとするのは、',
      you.get_colored_name(),
      ' の膝にいるとき、',
      tachyon.sex,
      'の眉間がほどけていることだった',
    ]);
    await era.printAndWait([
      '……これで',
      tachyon.sex,
      'が少しでも眠れるなら、たまにこれくらい、構わないかもしれない',
    ]);
  },
  /**
   * 会話 - 天皇賞（春）のあと
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色済みの名前）
   */
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      tachyon.get_colored_name(),
      ' と ',
      tenn_spr,
      ' の話をしたかったが、',
      tachyon.sex,
      'はすぐに姿を消した',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   * @param {boolean} plan_b Plan B に入っているか
   */
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait('私に料理を？ 口にできないものはお断りですわ');
      await era.printAndWait('厳しい食客だ……腕を上げてから出直すしかない');
    } else {
      const buffer = [];
      if (!plan_b) {
        buffer.push(async () => {
          await tachyon.say_and_wait(['頑張って、', callname, '～～']);
          await tachyon.say_and_wait(
            'ん？ 一緒に作るというのは、あなたが作って私が口を挟む、という意味ですわよ？',
          );
        });
        if (era.get('relation:32:0') > 375) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '！ 今日は自分で卵焼きを焼きましたわよ！ 早く食べなさい！',
              ]);
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
                ' は目の前の、少し焦げて卵が外に全部はみ出し、卵焼きというより炒め焼きに卵を足したものを見つめた……',
              ]);
              await era.printAndWait('まあ……味だけは、食べられる');
            },
            async () => {
              await tachyon.say_and_wait([
                '……',
                callname,
                '、知っていますわね。学園は安全のため、IHなどしか使えませんから、',
              ]);
              await tachyon.say_and_wait(
                'でも……IHは苦手なのです。だから……私のせいではありませんわ。IHが使いにくいのです。ガスコンロなら絶対にこうはなりません……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' は目の前の、真っ黒に焦げた卵を見た。',
              ]);
              await era.printAndWait(
                '……少し苦く、少し塩辛い。かろうじて食べられる、というところ。',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '考えてみれば、トレーナー室で食事を作るのは本来かなり不合理ですわね',
              );
              await era.printAndWait([
                '今日は',
                tachyon.sex,
                'が弁当を作ると約束していた ',
                tachyon.get_colored_name(),
                ' は、出前の箱を二つ取り出した。',
              ]);
              await era.printAndWait(
                '……食べられるのは確かだが、もう当初の趣旨から外れている。',
              );
            },
          );
        }
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              'もともと ',
              you.get_colored_name(),
              ' と ',
              tachyon.get_colored_name(),
              ' は、交代で弁当を作ると決めていた。',
            ]);
            await era.printAndWait([
              'だが最近は ',
              coffee.get_colored_name(),
              ' の訓練量が増え、',
              you.get_colored_name(),
              ' が立ち止まって弁当を作る暇がなく、',
            ]);
            await era.printAndWait([
              'だから最近はほとんど ',
              tachyon.get_colored_name(),
              ' が作り、',
              you.get_colored_name(),
              ' が食べ、食べながら',
              tachyon.sex,
              'と情報を交わす日々だった。',
            ]);
            era.printButton('「うまい！」', 1);
            await era.input();
            await tachyon.say_and_wait('ふふ、悪くありませんわね');
            await era.printAndWait([
              you.get_colored_name(),
              ' の驚きに対して、',
              tachyon.get_colored_name(),
              ' は最後まで波一つない顔だった。',
            ]);
            await tachyon.say_and_wait('他にすることも、ありませんもの');
            await era.printAndWait([
              'その一言を、',
              tachyon.sex,
              'は悲しみを乗せて言ったのだろうか。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' には、わからない。',
            ]);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の弁当を普通に食べ終えると、',
              coffee.get_colored_name(),
              ' の潜在を引き出す薬剤の研究へ戻っていった。',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' の弁当を食べた。',
            ]);
            await era.printAndWait([
              '今の',
              tachyon.sex,
              'は以前より無口だ。つまらない話より、',
              tachyon.sex,
              'は ',
              coffee.get_colored_name(),
              ' をどう速く走らせるかに集中している。',
            ]);
            await era.printAndWait([
              '寡黙で、集中力があり、料理がうまい。ある意味、今の ',
              tachyon.get_colored_name(),
              ' はかつての',
              tachyon.sex,
              'より、世間のいう優れた女性像に近い。',
            ]);
            await era.printAndWait([
              'だがやはり……あの頃の、勢いと熱に満ちた',
              tachyon.sex,
              'が恋しい。',
            ]);
          },
        );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait('休息など要りませんわ');
      await era.printAndWait([
        '明らかに調子の悪い ',
        tachyon.get_colored_name(),
        ' は、強がってそう言った。',
      ]);
      await tachyon.say_and_wait(
        'できること、やるべきことが山ほどあるのに、休めるはずが……',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は実験机の前に居座る ',
          tachyon.get_colored_name(),
          ' を、後ろから抱きしめた。',
        ]);
        await era.printAndWait([tachyon.sex, 'の体が、小さく震えた。']);
        await tachyon.say_and_wait([
          '……',
          callname,
          '、色仕掛けでも無駄ですわよ。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は実験机に座り続ける',
          tachyon.sex,
          'を、無理に立たせた。',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '疲れましたわ、',
            callname,
            '。紅茶を淹れてきなさい。',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            ' は自分で淹れた紅茶を飲み、',
            tachyon.get_colored_name(),
            ' とソファで緩い午後を過ごした。',
          ]),
        async () => {
          await tachyon.say_and_wait('閑ですわね。');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は日常に、そんな感想を漏らした。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        'ちっ……この機体、遅すぎますわ。',
        tachyon.uma_sex_title,
        'の出力に全く追いつきませんわよ！',
      ]);
    } else {
      await tachyon.say_and_wait('格闘ゲーム？ 負けたら相手の言うことを聞く？');
      await tachyon.say_and_wait(
        'ふふ、コマンド表を全部暗記した私に勝てますの？',
      );
      await tachyon.say_and_wait(
        '……待ちなさい！ 隅に籠って遠距離ばかりは、ひどすぎますわ！',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait(
          '悩みを樹洞に向かって叫ぶ？ それで何が変わるというのです。',
        );
        await tachyon.say_and_wait(
          '……退屈ですわ。愚痴るくらいなら、現状を変える努力をしなさい。',
        );
        await tachyon.say_and_wait(
          '『出せば心の圧は軽くなる』？ 私のそばにいるのに、まだ圧があるのですか？ 待ちなさい、その苦笑いの意味は何ですの。',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' を枯れた樹洞の前へ連れていった。',
              tachyon.sex,
              'は自分から、洞の縁に身を預けた。',
            ]);
            await era.printAndWait([
              'だが今日遊ぶのはそれではない。',
              you.get_colored_name(),
              ' は首を振り、',
              tachyon.get_colored_name(),
              ' の肩に寄りかかった。',
            ]);
            await you.say_and_wait(
              '愚痴と圧を吐く場所なら、君も、悔しいことを叫んでみろ。',
            );
            await era.printAndWait([
              'そう言って ',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の尻を軽く叩いた。聞きたいものが何か、それだけで十分だった。',
            ]);
            await era.printAndWait([
              '頭の回転が速い天才',
              tachyon.uma_sex_title,
              'は、即座に ',
              you.get_colored_name(),
              ' の意図を読んだ。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は責めるように ',
              you.get_colored_name(),
              ' を一目見て、それから樹洞へ『悔しい』を叫び始めた。',
            ]);
            await tachyon.say_and_wait([
              '乳頭を ',
              callname,
              ' に摘まれるだけでイってしまうのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'お穴が雑魚すぎて、',
              callname,
              ' に触られただけで濡れるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              callname,
              ' の匂いを嗅いだだけで頭が交尾しか残らない痴女になるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'おちんぽを含んだ瞬間、',
              callname,
              ' の一生オナホになりたくなるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              '我慢しろと命じられているのに、',
              callname,
              ' が射精するたび飲み込んで罰せられるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait(
              '毎回薬に頼っても、おちんぽ様に勝てないのが悔しいですわ❤️',
            );
            await tachyon.say_and_wait(
              'おちんぽ様を満足させる前に自分が先にイってしまうのが悔しいですわ❤️',
            );
            await era.printAndWait([
              '一声叫ぶたびに ',
              you.get_colored_name(),
              ' はご褒美に',
              tachyon.sex,
              'の尻を叩いた。叩かれるたび',
              tachyon.sex,
              'はより熱心に腰を揺らし、さらに過激な『悔しい』を吐き出した。',
            ]);
            await era.printAndWait([
              '最後、周囲の',
              tachyon.uma_sex_title,
              'の羞恥に染まった視線の中、',
              you.get_colored_name(),
              ' は両脚を震わせて歩けなくなった ',
              tachyon.get_colored_name(),
              ' の手を引き、実験室へ戻った。',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は枯れた樹洞に身を預け、中を退屈そうに覗いていた。',
            ]);
            await era.printAndWait([
              '外へ突き出した',
              tachyon.sex,
              'の尻を見て、',
              you.get_colored_name(),
              ' は欲を抑えきれなくなった。',
            ]);
            await tachyon.say_and_wait([callname, '……んっ❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の、まだ幼さを残す尻を叩いた。布越しの弾力が、打ち下ろした力を掌へ跳ね返した。',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              '、ここ、残響が……大きいですわ❤️……戻って、戻ってからにしましょう、いいですわね❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の懇願を聞かず、もう一度強く叩いた。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は慌てて口を押さえたが、それでも声は漏れ出た。',
            ]);
            await tachyon.say_and_wait('んひぃ❤️❤️❤️');
            await tachyon.say_and_wait('ん……❤️');
            await tachyon.say_and_wait('んぅ……❤️');
            await tachyon.say_and_wait('待って、入れないでええええ❤️❤️❤️');
            await era.printAndWait([
              '最後、',
              you.get_colored_name(),
              ' は樹洞の上でぐったりし、顔を赤くした ',
              tachyon.get_colored_name(),
              ' を抱き、トレーナー室へ連れて帰った。',
            ]);
            await era.printAndWait([
              '道行く生徒たちは、思わず ',
              you.get_colored_name(),
              ' たちに注目した。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' にとって、この視線はもう慣れたものだった。',
            ]);
            await era.printAndWait([
              '腕の中の ',
              tachyon.get_colored_name(),
              '……人目も構わず、力の抜けた両手で抱擁をねだる',
              tachyon.sex,
              'は、',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'を満たすまで、そんなことに構う余裕などないだろう。',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            'ん……',
            callname,
            ' ❤️……人の気持ちを吐く樹洞の前で、こんなこと……聞かれたらどうしますの❤️',
          ]);
          await tachyon.say_and_wait('性欲を吐くのも、発散のうち？');
          await tachyon.say_and_wait(
            'まったく❤️……見つかっても知りませんわよ❤️',
          );
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は枯れた樹洞の縁に寄り、中へ何か叫びたそうにしていたが、長く迷った末にやめた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の様子を見て、',
        you.get_colored_name(),
        ' はなぜか悲しみと、わずかな安心を同時に覚えた',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            'ああ、弁当は置いておいて。風速を測り終えたら食べますわ。',
          ),
        async () => {
          await tachyon.say_and_wait([
            '屋上で弁当ですわね……そういえば、',
            callname,
            '、屋上はもともと立入禁止だったのを知っています？',
          ]);
          await you.say_and_wait('え、そうだったのか？');
          await tachyon.say_and_wait([
            'ええ。ある',
            tachyon.uma_sex_title,
            'が屋上で実験をして、うっかり有毒物質を漏らしたとか。',
          ]);
          await tachyon.say_and_wait('……その顔は何ですの？');
          await tachyon.say_and_wait('いいえいいえ、私ではありませんわ');
          await tachyon.say_and_wait(
            'もっとも、あなたの言うとおり、こんなに経てば残留などないでしょう。',
          );
          await tachyon.say_and_wait([
            'それに、仮に残っていても……今の私の薬で鍛えられた ',
            callname,
            ' が、かつての私の薬に負けるはずがありませんわ。',
          ]);
          await you.say_and_wait('やっぱり君だろ！');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
            ' は弁当を持って、',
            tachyon.get_colored_name(),
            ' と屋上で昼食をとった。',
          ]);
          await era.printAndWait([
            '微風が ',
            tachyon.get_colored_name(),
            ' の髪先を撫で、',
            tachyon.sex,
            'はくすくすと笑い、楽しんでいるようだった。',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はこの場所が好きらしい。機会があれば、また',
            tachyon.sex,
            'を連れてこよう。',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            ' は屋上で静かに涼風を受けていた。無表情だ。また ',
            coffee.get_colored_name(),
            ' の訓練案を考えているのだろうか。',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            ' は気分転換に ',
            tachyon.get_colored_name(),
            ' を屋上へ連れて弁当を食べたが、',
            tachyon.sex,
            'は食べながらもずっと ',
            coffee.get_colored_name(),
            ' の話をしていた。',
          ]),
        async () => {
          await era.printAndWait([
            tachyon.sex,
            'はなぜか、柵の向こうの空ばかり見ていた',
          ]);
          await era.printAndWait(
            '眼に波はなく、空の景色を映しているだけだった。',
          );
          await tachyon.say_and_wait(['……どうかしました？ ', callname, '？']);
          await era.printAndWait([
            'なぜか、',
            you.get_colored_name(),
            ' は急に怖くなった',
          ]);
          await era.printAndWait([
            'その恐れに駆られ、',
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'の手を握り、すぐまた離した',
          ]);
          await tachyon.say_and_wait([
            '……安心なさい、',
            callname,
            '。どこへも行きませんわ',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} jpy 釣りで売ったウマコイン。0 は釣果なし
   */
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait(
        'おやおや、釣れた分は明日の弁当の材料にしましょう',
      );
    } else {
      await tachyon.say_and_wait([
        'くっ……なぜ釣れないのです……',
        callname,
        '、この魚たちが『うっかり』水中の『不明物質』を飲んで浮いてきたら、それも釣果に数えてよろしいですわよね？ だめですの？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} first2shop 売店に行ったことがないか
   */
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      '、早くついてこないと、明日の薬は倍ですわよ',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        'そういえばこの場所、以前出店したとき……いいえ、何でもありません、気にしないで',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_arcade(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait([
          'ええ？ なぜ ',
          callname,
          ' はそんなにクレーンが上手いのです？ やる気に白青回……いいえ、すみません、何のことかわかりませんわ',
        ]),
      () =>
        tachyon.say_and_wait([
          'おや、私のぬいぐるみがありますわね？ ……実物より可愛い？ 待ちなさい、',
          callname,
          '、その言葉の意味を説明しなさい',
        ]),
      async () => {
        await tachyon.say_and_wait(
          'ちっ……こんなに笑わなければいけないのですか？',
        );
        await tachyon.say_and_wait(
          'いいえ、私が面倒くさいのではありません。このプリクラという企画自体に不合理が多すぎますわ！ …………はあ、わかりましたわ。3、2、1、チーズ',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_drawing(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait(
          '抽選……運という当てにならないものより、金か別の力で賞品を得るほうが正当ではありませんか？',
        ),
      () =>
        tachyon.say_and_wait([
          'ええ～～こんなに操作しやすい箱のくじを、本気で引くのです？ ',
          callname,
          '？ ……いいえ、異存はありませんわ。ただ念のため……箱の中に本当に大当たりはあるのですか？',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '抽選ですわね。では準備を………よろしい、どうぞ。ん？ 急に眼鏡ですって？',
        );
        await tachyon.say_and_wait(
          '何でもありませんわ。箱を透視する眼鏡です。それとも、運などという当てにならないものを、私が信じると思います？',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_ktv(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait('Winning the soul～～');
        await tachyon.say_and_wait([
          '……ふふん、どうです、',
          callname,
          '？ 私の喉は悪くありませんでしょう？ ……何ですって？ NEXT FRONTIER が聴きたい？ それとも Special Record？',
        ]);
        await tachyon.say_and_wait(['……', callname, '、わざとですわね？']);
      },
      async () => {
        await tachyon.say_and_wait(
          'Выходила на берег Катюша,На высокий берег, на крутой……',
        );
        await tachyon.say_and_wait(
          'ロシア語はわからないはずなのに、歌っていると急に読める気がするのですわ……',
        );
        await tachyon.say_and_wait(
          'やはりそうですわね。生まれながらにして知るのも、天才の悩みですわ',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          'おや？ ',
          callname,
          '、なかなか上手ではありませんか……',
        ]);
        await tachyon.say_and_wait(
          'でもサビでそんなに昂ぶらないでくれますかしら？',
        );
        await tachyon.say_and_wait(
          'あなたが昂ぶるたび、個室が眩しすぎて何も見えなくなるのですもの。よく歌詞が読めますわね……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          'ええ……曲の雰囲気に合わせて色まで変えるのですか。七色ネオン版までありますの……',
        );
        await tachyon.say_and_wait(
          'いいえ、発明者の私が、自分の薬にそんな機能があるとは知りませんでしたわ。恐ろしい……',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async o_s_movie(tachyon) {
    await tachyon.say_and_wait('……この映画館……外見は綺麗ですわね……');
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('ちょっと、何か言いなさい……');
    await tachyon.say_and_wait(
      '連れの放つ光が明るすぎて入場を拒まれるなど、このアグネスタキオンでも初めてですわ……',
    );
    await tachyon.say_and_wait('何か言いなさい。謝罪でも何でも');
    era.printButton('「こうなったのは君のせいだろ！？」', 1);
    await era.input();
    await era.printAndWait(
      '結局ふたりは上機嫌で実験室に戻り、NetFlOx を観た。',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……神よ');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は退屈そうに神社を見つめ、何を考えているのかわからない',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('もし……神が、なら私は……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は独り言を呟いた',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '神など、本当にいるのかしら？ いいえ、三女神は知っていますわ。でも……突き詰めれば三女神も、より強い力を握った凡人……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて ',
            tachyon.get_colored_name(),
            ' の口を押さえた。',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            'まあまあ、',
            callname,
            '、神より実験に戻りましょう',
          ]),
        () =>
          tachyon.say_and_wait(
            '大吉か大凶か？ 構いませんわ。そんなものは神が決めるのではなく、私が作るのです',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   */
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '……不味い。全部レトルトの既製品、味付けは香料と化学調味料ばかり。普段の薬が足りないとでも？ こんなものを私に食べさせるなんて',
      );
      await era.printAndWait([
        '料理が出た瞬間から ',
        tachyon.get_colored_name(),
        ' に頭から尻尾まで酷評された。気晴らしのつもりが、かえって',
        tachyon.sex,
        'の機嫌を悪くしてしまった。',
      ]);
      await tachyon.say_and_wait('ただ……このデザートは悪くありませんわ');
      await era.printAndWait('え……歯が痛くなるほど甘いプリン？ 本当か');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の好みを、少し掴んだ気がした',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            'ねえ ',
            callname,
            '……外食に連れてきてくれるのはありがたいですけれど、あなたにも及ばない料理をわざわざ食べに来る意味は何ですの？',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は困惑した目で ',
            you.get_colored_name(),
            ' を見た',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '味は悪くありませんわ。でも ',
            callname,
            ' のと比べると……何かが足りない……ええ、そうですわ。甘さが足りません',
          ]);
          await tachyon.say_and_wait([
            'これ以上砂糖を取ったら糖尿病、ですって？ 心配いりませんわ。',
            tachyon.uma_sex_title,
            'の代謝がなんとかしますもの',
          ]);
        },
        async () => {
          await era.printAndWait(
            '紅焼肉、酢豚、和菓子、致死量まで砂糖を入れた紅茶、締めは蜂蜜プリン',
          );
          await tachyon.say_and_wait([callname, '？ 食べないのですか？']);
          await you.say_and_wait('……見ているだけで歯が痛い。遠慮する');
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          'ん？ 実験器具の買い出しをデートとは呼ばない、ですって？',
        );
        await tachyon.say_and_wait([
          callname,
          '、デートという言葉は極めて抽象的ですわ。あなたがデートだと思えば、それがデートです。わかりました？',
        ]);
        await tachyon.say_and_wait([
          '私のような超絶美',
          tachyon.teen_sex_title,
          'と外出できる時点で、もうデートと同義でしょう。',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('街歩き、お茶、雑談、食事');
        await tachyon.say_and_wait(
          'これが一般的なデートですの？ ……退屈ですわね',
        );
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          'デートが実験助手兼実験体のやる気をどれだけ上げるかの分析、ですの？ ええ……研究課題にしてみる価値はありますわ',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          'デート？ ……',
          callname,
          '、普通の科学者は自分の実験動物とデートなどしませんわ。私の言いたいことはわかります？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          'ねえ ',
          callname,
          '……服など通販で十分でしょう。人間の服と',
          tachyon.uma_sex_title,
          'の服に、何の関係がありますの',
        ]);
        await tachyon.say_and_wait(
          '尻尾の穴がないから、めくるたびに見えてしまう？',
        );
        await tachyon.say_and_wait([
          '………それはセクハラですわ、',
          callname,
          '。',
        ]);
      },
      async () => {
        await tachyon.say_and_wait(
          '調理器具？ そんなにたくさん買ってどうするのです……',
        );
        await tachyon.say_and_wait(
          'ええ、こんなに料理ができるのですか……くっ……実験費にこっそり算入できれば……',
        );
        await tachyon.say_and_wait(
          '構いませんわ、買いなさい。恐れなくていい。私が埋めれば、正当な実験器具として申請できる……たぶん',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '無料試飲……無料試用。やはり最強の売り文句は『無料』ですわね。売り込みだとわかっていても、',
        );
        await tachyon.say_and_wait([
          '無料と聞いた瞬間、他人の食べ物への警戒を忘れる……',
          callname,
          '、思いつきましたわ。薬の無料試飲！ ……だめですの？',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      '昼休み、なぜか ',
      tachyon.get_colored_name(),
      ' はわざと',
      tachyon.sex,
      'のミキサーを実験机に据え、出力を最大にして大きな音を立て、',
      tachyon.sex,
      'の「昼食」を掻き回し始めた',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' はふと思い出した。先週は忙しすぎて',
      tachyon.sex,
      'の弁当を忘れていた……今週は必ず覚えよう',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      '、九仞の功を一簣に虧く、という言葉はご存知でしょう、',
    ]);
    await tachyon.say_and_wait(
      '言い換えれば、百里を行く者は九十を半ばとす。続けられる者だけが成功するのです、',
    );
    await tachyon.say_and_wait(
      'レースの世界も同じですわ。ステータスは下がるしスキルは不発する。でも育成で学んだ知識は、あなたを欺きません、',
    );
    await tachyon.say_and_wait(
      'ええ、サポートカードが他人より劣っていても構いませんわ。6RでもSS級は育てられます。全ては努力と継続の問題……',
    );
    era.println();
    await era.printAndWait([
      '今日トレーナー室に入った途端、',
      tachyon.get_colored_name(),
      ' はわけのわからない長広舌を始めた',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'つまり、言いたいのは…………努力という点は、料理でも同じですわ',
    );
    era.println();
    await era.printAndWait([
      'その一言で、',
      you.get_colored_name(),
      ' はやっと気づいた。この二週間は忙しすぎて、',
      you.get_colored_name(),
      ' はまた忘れていた。だめだ、今度こそ覚えよう……',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、4週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '今日実験室に着いた瞬間、',
      you.get_colored_name(),
      ' は ',
      tachyon.get_colored_name(),
      ' の機嫌がひどく悪いと察した。しかも、',
      you.get_colored_name(),
      ' は理由を知っている',
    ]);
    era.println();
    await era.printAndWait(['原因は ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は三週間、',
      tachyon.get_colored_name(),
      ' に料理をしていない',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は慌てて',
      tachyon.sex,
      'に、この数週間は本当に忙しくて時間が取れなかったと弁解した……',
      you.get_colored_name(),
      ' 自身ですら信じられない嘘だった',
    ]);
    await era.printAndWait([
      '純粋に忘れたのか、他の',
      tachyon.uma_sex_title,
      'の育成に時間を割いたのか、',
    ]);
    await era.printAndWait(
      'あるいは、まだ違う台詞があるか確かめたかっただけなのか。「あなた」の時間は、いくらでもある',
    );
    await era.printAndWait([
      'だが今の ',
      you.get_colored_name(),
      ' は、そんな拙い言い訳で許しを乞うしかなかった',
    ]);
    era.println();
    await tachyon.say_and_wait('…………許すも何も、ありませんわ');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を一瞥して言った',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'これもあなたの可能性の一つ、立派な研究サンプルですわ。あなたの努力は否定しません、',
    );
    await tachyon.say_and_wait(
      '同様に、怠惰も唾棄しません。どちらにせよあなた自身の選択ですもの。私には一点の関係もありませんわ',
    );
    era.println();
    await era.printAndWait('そうだ。強いて言えば');
    await era.printAndWait([
      tachyon.sex,
      'はやっと振り返った。今日初めて',
      tachyon.sex,
      'が ',
      you.get_colored_name(),
      ' を見た',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'の眼に失望も、嫌悪も、怒りもなかった',
    ]);
    await era.printAndWait(
      '言いようのない感情だった。どうしても名づけるなら、それは————退屈',
    );
    era.println();
    await tachyon.say_and_wait('あなたの可能性とは、この程度ですのね');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      'は目標に届かなかった実験動物を見る目で ',
      you.get_colored_name(),
      ' を見て、それから口を開いた',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '価値を上げる努力を続けなさい、',
      callname,
      '……でないと、退屈した日に捨ててしまうかもしれませんわ',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('ん……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は今日、少し落ち着かない様子だった',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は緊張して',
      tachyon.sex,
      'に、何かあったのかと訊いた',
    ]);
    era.println();
    await tachyon.say_and_wait('…………ふん、何でもありませんわ');
    era.println();
    await era.printAndWait([tachyon.sex, 'は拗ねたように、大丈夫だと言った']);
    await tachyon.say_and_wait('ぐぅ～～～～');
    await era.printAndWait([
      'そのとき、あまりにも都合よく、',
      tachyon.sex,
      'の腹が大きな音を立てた',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' はふと思い出した。先週、',
      you.get_colored_name(),
      ' は完全に',
      tachyon.sex,
      'の弁当を忘れていた',
    ]);
    await era.printAndWait('まさか……');
    era.println();
    await tachyon.say_and_wait(
      '…………とにかく、食事は最低限の活動エネルギーさえ保てれば足りますわ',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      'はまだ強がっている。',
      you.get_colored_name(),
      ' は慌てて',
      tachyon.sex,
      'に詫び、今日こそ忘れないと約束した',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait(['ふん、', callname, '、今日の薬ですわ']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は突然トレーナー室に押し入り、',
      you.get_colored_name(),
      ' に色の奇妙な——いや、その点に限ればいつもどおりの——薬を飲ませた',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は飲んだあと、間もなく眠りに落ちた',
    ]);
    await era.printAndWait([
      '夢の中で、',
      you.get_colored_name(),
      ' は砂漠を歩いていた。もう何日も飲まず食わずで、',
    ]);
    await era.printAndWait([
      '突然場面が変わり、夢の中の ',
      you.get_colored_name(),
      ' は、誰かに泥状の栄養素を次々と押し込まれた。喉を通らないのに、',
    ]);
    await era.printAndWait([
      '先ほどの砂漠の夢を思い出し、',
      you.get_colored_name(),
      ' は仕方なくそれを飲み込んだ…………',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は夢から飛び起きた。眼前には ',
      tachyon.get_colored_name(),
      ' の得意げな顔があった',
    ]);
    era.println();
    await tachyon.say_and_wait(['どうです、悪夢でした？ ', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は苦笑した。この薬の意味はだいたいわかった。今週こそ ',
      tachyon.get_colored_name(),
      ' の弁当を忘れないと、急いで誓った',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、4週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} amazon ヒシアマゾン
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} akebono ヒシアケボノ
   * @param {CharaTalk} taste 秋川やよい／ノースフライト
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      '今朝、',
      you.get_colored_name(),
      ' が学園に着いた瞬間から、おかしかった',
    ]);
    await era.printAndWait('学園全体が、焦燥の空気に包まれている');
    await era.printAndWait(
      'その空気は昼休みに極まり、昼食時の食堂で頂点に達した',
    );
    era.println();
    await you.say_as_passer_by_and_wait('通りすがりのトレーナーA', [
      '全員の',
      tachyon.uma_sex_title,
      'が暴走してる！',
      tachyon.couple_title,
      'がいきなり担当トレーナーに弁当をせがみ始めたんだ！',
    ]);
    await you.say_as_passer_by_and_wait('通りすがりのトレーナーA', [
      '手製じゃないとダメだって！ ちくしょう、',
      tachyon.couple_title,
      'はどうやってトレーナー製かどうか見分けるんだ！',
    ]);
    era.println();
    await era.printAndWait([
      'モブのトレーナーは、なぜかトレーナー室に押し入ると現状解説のようにそう言い終え、戸口から飛び込んできた担当',
      tachyon.uma_sex_title,
      'に引きずり出された',
    ]);
    era.printButton('「い、いったい……何が……」', 1);
    await era.input();
    await tachyon.say_and_wait('おや、事情を訊く方がいらっしゃいましたわね？');
    await era.printAndWait([
      '突然、',
      you.get_colored_name(),
      ' の背後から聞き慣れた声がした。だが ',
      you.get_colored_name(),
      ' は、',
      tachyon.sex,
      'がいつトレーナー室に入ったのかすらわからなかった',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'そこまで誠心誠意訊くのですから、慈悲深く教えてあげますわ',
    );
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      'と弁当の悪を貫くため、愛らしく魅惑的な狂気の科学者',
    ]);
    await tachyon.say_and_wait([
      '長すぎるので以下略。要するにアグネスタキオンですわ。さあ、',
      callname,
      '、おとなしく弁当を出しなさい',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の座っている椅子の背に寄りかかり、座ったままの ',
      you.get_colored_name(),
      ' を見下ろして、侵略性の強い笑みを浮かべた',
    ]);
    era.printButton('「また何をした」', 1);
    await era.input();
    await tachyon.say_and_wait(
      'おや、ひどいですわ。すぐに私を疑うなんて。被害者かもしれませんのに',
    );
    era.println();
    await era.printAndWait([tachyon.sex, 'はあわれっぽい声で言った']);
    era.printButton('「今自分で認めただろう」', 1);
    await era.input();
    await tachyon.say_and_wait('ええ……たしかに、そんなこともありましたわね');
    await era.printAndWait('そんな些事は気にしないで');
    await era.printAndWait([tachyon.sex, 'は袖をひらりと振って言った']);
    era.println();
    await tachyon.say_and_wait([
      '重要なのは、',
      callname,
      '、弁当を出すことですわ',
    ]);
    era.printButton('「こんな強制で、おとなしく従うと思うか？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………ふふ、もちろんですわ。最終的には、おとなしく弁当を捧げますもの',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は謎めいた笑みを浮かべ、',
      you.get_colored_name(),
      ' は思わず後ろめたくなった',
    ]);
    await era.printAndWait([
      '今日、',
      you.get_colored_name(),
      ' はたしかに ',
      tachyon.get_colored_name(),
      ' の弁当を作った。だが仕事が忙しく、本当に忘れてしまった',
    ]);
    await era.printAndWait(
      'だがここは譲れない。トレーナーとしての尊厳のため！ 自由のため！ ……のためだ',
    );
    era.println();
    await taste.say_and_wait([
      '発表します！ 未知の要因により、学園内の全',
      tachyon.uma_sex_title,
      'が、トレーナー手製の弁当への不明な執着に陥っています、',
    ]);
    await taste.say_and_wait([
      '各トレーナーは直ちに愛馬の弁当を作ってください。料理ができないトレーナーは、事務局長、家庭科の先生、および ',
      tama.get_colored_name(),
      '、',
      amazon.get_colored_name(),
      ' または ',
      akebono.get_colored_name(),
      ' に支援を求めてください',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '得意満面の ',
      tachyon.get_colored_name(),
      ' を見て、',
      you.get_colored_name(),
      ' は苦笑するしかなかった',
    ]);
    await era.printAndWait([
      'やはり',
      tachyon.sex,
      'には勝てない。',
      you.get_colored_name(),
      ' はおとなしく弁当を差し出した',
    ]);
  },
  /**
   * 週開始 - 高好感、料理回数 10 以上、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   */
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      '昼休み、',
      you.get_colored_name(),
      ' がデータを打っていると、トレーナー室の扉が突き飛ばされた',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '！ 私のご飯は！ 早く早く！']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は入るなり机に飛びつき、ごろごろ転がり始めた',
    ]);
    era.println();
    await era.printAndWait('危ない危ない');
    await era.printAndWait([
      you.get_colored_name(),
      ' は慌てて机上のパソコンを退け、',
      tachyon.get_colored_name(),
      ' に落とされないようにした',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '！ もう一週間も弁当を作ってくれないんですの！ 餓死しそうですわ、早く、私の弁当は！',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は袖を振り、怒って ',
      you.get_colored_name(),
      ' の前で足を踏んだ。弾ければ割れそうな頬はフグのように膨らみ、とはいえ',
    ]);
    era.printButton('「作っただろう？」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait('あんな手抜き、弁当と呼べますか！？');
    } else {
      await tachyon.say_and_wait(
        '味の差はわかりませんけれど……直感が、いい加減に作ったと告げていますわ',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('今『面倒なやつだ』と思っていますわね？');
    await you.say_and_wait('……');
    await you.say_and_wait('なぜバレた', true);
    era.println();
    await tachyon.say_and_wait(
      'とにかく明日は弁当を見せなさい！ でないと後悔しますわよ',
    );
  },
  /**
   * 週開始 - 高好感、料理回数 10 以上、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は二週間、',
      you.get_colored_name(),
      ' に実験をしていない',
    ]);
    await era.printAndWait([
      '最初の一週間は正直、',
      you.get_colored_name(),
      ' に未練はなく、むしろ喜んでいた、',
    ]);
    await era.printAndWait([
      '毎日 ',
      tachyon.get_colored_name(),
      ' の姿は見られるし、日常は普通だ。ただ',
      tachyon.sex,
      'が ',
      you.get_colored_name(),
      ' に実験をしなくなっただけなのだから',
    ]);
    await era.printAndWait([
      'だが二週目、',
      you.get_colored_name(),
      ' はおかしいと感じ始めた。ストックホルム症候群……',
    ]);
    await era.printAndWait([
      'そうではない。ただ',
      tachyon.sex,
      'の様子が心配で、不吉な予感もある',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は',
      tachyon.sex,
      'の実験室の前まで行き、ノックした。中から返事はない',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' はまずいと感じ、そのまま押し入った',
    ]);
    era.println();
    await era.printAndWait([
      '見た目は ',
      tachyon.get_colored_name(),
      ' なのに、なぜか二頭身の、どこか愛らしい生き物になっていた、',
    ]);
    await era.printAndWait('後ろの尻尾は丸く太く、まるで……タヌキの尻尾？');
    await era.printAndWait([
      'ええ？？ 何が起きている？？ これが ',
      tachyon.get_colored_name(),
      ' なのか？？？',
    ]);
    era.println();
    await era.printAndWait('…………なるほど');
    await era.printAndWait([you.get_colored_name(), ' はすべてを理解した']);
    await era.printAndWait(
      '間違いない。来歴不明の薬、実験体を人として見ない態度、そして今ようやく現れた尻尾',
    );
    await era.printAndWait([
      'そう、',
      tachyon.get_colored_name(),
      ' は最初からタヌキの化けたものだった！',
    ]);
    era.println();
    await era.printAndWait('…………いや、この錯乱した妄想は一旦横へ置こう');
    await era.printAndWait(
      'なぜか周囲に奇妙なBGMが流れ始めた。アメリアの遺言らしい。美しい曲だが、この侘びた光景との対比が鮮やかすぎる',
    );
    await era.printAndWait([
      '慌てた ',
      you.get_colored_name(),
      ' は、以前 ',
      tachyon.get_colored_name(),
      ' が弁当について言っていたことを思い出し、自分用に残していた弁当を取り出した',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '？ 何をしていますの？']);
    await era.printAndWait([
      '正気に戻った ',
      tachyon.get_colored_name(),
      ' は一瞬で元の姿に戻った。空の弁当箱だけが、今しがたの出来事を証明している',
    ]);
    await era.printAndWait([
      '夢ではなかった……とにかく、これからは ',
      tachyon.get_colored_name(),
      ' の弁当を忘れないようにしよう',
    ]);
  },
  /**
   * 週開始 - 反抗刻印3
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      '突然、',
      tachyon.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' に口づけた',
    ]);
    await era.printAndWait([
      '熱い流れが二人の口を渡り、飲み下されたそれが ',
      you.get_colored_name(),
      ' の喉を伝った',
    ]);
    await era.printAndWait('通った箇所に、一瞬で灼けるような痛みが走った');
    era.println();
    await tachyon.say_and_wait(['痛いですの？ ', callname]);
    await tachyon.say_and_wait(
      '私も痛い……自分が作った薬なのに、こんなに効くとは思いませんでしたわ',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' の顔は笑っている。眼だけが、笑っていない',
    ]);
    era.println();
    await tachyon.say_and_wait('責めはしませんわ……騙された側が悪いのですもの');
    await tachyon.say_and_wait(
      'これはあなたへの罰であり、同時に、人を見誤った私への罰です',
    );
    await tachyon.say_and_wait(
      '出て行けとも言いません……認めたくありませんが、こんなことがあっても、あなたに離れられたくない',
    );
    await tachyon.say_and_wait([
      'だから、私の愛しい ',
      callname,
      '……これからの余 · 生、一緒に互いを責め続けましょう？',
    ]);
  },
  /**
   * 雑談 - 呼び方についての連続イベント
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} talk_times 呼び方についての何回目の雑談か
   */
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('ん？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' を呼んでいるように聞こえたので、振り返った',
        ]);
        era.println();
        await tachyon.say_and_wait('何でもありませんわ。呼んでみただけです');
        era.println();
        await era.printAndWait([
          'そこで ',
          you.get_colored_name(),
          ' はまた前を向き、自分の作業に戻った',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '君']);
        await era.printAndWait('！？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は急に振り返ったが、眼前の ',
          tachyon.get_colored_name(),
          ' はいつもの笑顔だった',
        ]);
        await era.printAndWait('今しがた何も起きなかったかのように');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の背に寄り、甘えるような囁きを漏らした',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' は、少しも顔を赤らめなかった',
        ]);
        await era.printAndWait(
          '前回、これに乗って振り返った瞬間に薬を飲まされた',
        );
        await era.printAndWait('今度は何度呼ばれても、絶対に振り返らない');
        era.println();
        await tachyon.say_and_wait([callname, '……']);
        await tachyon.say_and_wait([callname, '……❤']);
        await tachyon.say_and_wait([callname, '❤']);
        await tachyon.say_and_wait([callname, '❤']);
        era.println();
        await era.printAndWait([
          'なぜか、',
          tachyon.sex,
          'の口調はだんだん甘く、ねっとりしていった',
        ]);
        await era.printAndWait([
          '振り返れない ',
          you.get_colored_name(),
          ' は、焦りを堪えてその場に座り続けた',
        ]);
        era.println();
        await tachyon.say_and_wait('…………馬鹿');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の最後の小さな鼻息を聞いて、',
          you.get_colored_name(),
          ' はついに我慢できず、振り返ってしまった',
        ]);
        await era.printAndWait('そして……');
        era.println();
        await era.printAndWait('ごくん');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の手には、空の試験管があった',
        ]);
        await era.printAndWait([
          '中身は？ 今しがた ',
          you.get_colored_name(),
          ' が振り返った瞬間に、全部 ',
          you.get_colored_name(),
          ' の口へ押し込まれていた',
        ]);
        era.println();
        await tachyon.say_and_wait('まったく……今回は随分としぶといですわね');
        era.println();
        await era.printAndWait('薬が回り始めた。今度は麻痺作用らしい');
        await era.printAndWait([
          you.get_colored_name(),
          ' はなんとか振り返った。眼前には得意げな ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          'こぼそうとした文句は、',
          tachyon.sex,
          'の微かに赤い頬を見た瞬間、跡形もなく消えた',
        ]);
        era.println();
        await era.printAndWait(['やはり、', tachyon.sex, 'には敵わない']);
        await era.printAndWait([
          'そんな感想を抱いたまま、',
          you.get_colored_name(),
          ' は闇へ落ちた',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は実験をしているらしい',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の整った横顔を見つめ、ふと悪戯心が湧いた',
        ]);
        era.printButton('「アグネスタキオン」', 1);
        await era.input();
        await era.printAndWait([you.get_colored_name(), ' はそっと言った']);
        await era.printAndWait([
          tachyon.sex,
          'の背が小さく震えたが、振り返らず、何事もないように実験を続けた',
        ]);
        era.println();
        await era.printAndWait([
          'その様子が、さらに ',
          you.get_colored_name(),
          ' の子供心を煽った',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は声の調子をいろいろ変えてみた',
        ]);
        await era.printAndWait([
          '呼ぶたび、',
          tachyon.sex,
          'の体は前回より長く震えた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は横から、',
          tachyon.sex,
          'の顔がどんどん赤くなっていくのを見た',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の頬が朱に染まるのを見て、',
          you.get_colored_name(),
          ' も恥ずかしくなった',
        ]);
        await era.printAndWait('だがこのときの欲は、もう止まらせてくれない');
        await era.printAndWait([
          you.get_colored_name(),
          ' は呼び続け、声はますます優しくなった',
        ]);
        await era.printAndWait([
          'やがて悪戯心は消え、今の ',
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'がもっと恥じらい、もっと',
          tachyon.teen_sex_title,
          'らしい顔をするのを見たくてならなかった',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '？',
          tachyon.teen_sex_title,
          '？',
        ]);
        await era.printAndWait(
          '本来なら釣り合わない二つの語が、今は妙にしっくりくる',
        );
        await era.printAndWait('そうして、ずっと続いた');
        await era.printAndWait('一方が呼び続け、もう一方が知らないふりをする');
        era.drawLine();
        await era.printAndWait([
          '突然、',
          tachyon.sex,
          'の顔色が朱から青白へ変わった',
        ]);
        await era.printAndWait([
          'ずっと',
          tachyon.sex,
          'を見ていた ',
          you.get_colored_name(),
          ' はすぐに気づき、',
          tachyon.sex,
          'の視線を辿った',
        ]);
        era.println();
        await era.printAndWait([
          '視線の先は、',
          tachyon.sex,
          'が握る、三角の危険マークの薬だった',
        ]);
        await era.printAndWait('瓶はもう、完全に空になっている');
        await era.printAndWait('入れるときに手が震え、一度に全部入ったらしい');
        await era.printAndWait([
          'そして',
          tachyon.sex,
          'の手にある、危険薬を入れすぎたその試験管……',
        ]);
        await era.printAndWait(
          '液面が目に見える速さで膨れ、管から溢れ出す。それより致命的なのは噴き出す蒸気で、',
        );
        await era.printAndWait(
          'あんな小さな管から出るとは思えない量で室内を満たし、外へ流れていく',
        );
        era.println();
        await era.printAndWait([
          'そのとき、',
          tachyon.sex,
          'はやっと振り返った',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の顔が再び朱に染まるのを見た。今度は、',
          you.get_colored_name(),
          ' は確信した。これは羞恥ではない',
        ]);
        await era.printAndWait('これは……………');
        era.println();
        await tachyon.say_and_wait([callname, '！！！！！！！！！！！！！！']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【学園からのお知らせ】', { align: 'center' });
        await era.printAndWait(
          ['午後、', tachyon.get_colored_name(), '、薬剤、終了'],
          { align: 'center' },
        );
    }
  },
  /**
   * 会話 - 紅茶を淹れる
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, '、丁度いいわ']);
    await tachyon.say_and_wait('今日の新薬、試してくださいな');
    era.println();
    await era.printAndWait([
      'いつものように今日の薬を飲んだ……ん？ 紅茶の味がする',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は手元の試験管を怪訝に見た。怪しげな光を放ち、一目で ',
      tachyon.get_colored_name(),
      ' 製とわかる薬だ。なのになぜ……',
    ]);
    era.println();
    await tachyon.say_and_wait('いかがです？');
    era.println();
    await era.printAndWait([
      '戸惑いながら感想を訊かれ、',
      you.get_colored_name(),
      ' は反射で紅茶の味を評してしまった',
    ]);
    await era.printAndWait([
      '答え終えてから ',
      you.get_colored_name(),
      ' は思い出した。これは薬であって紅茶ではない。しまった、酷評される……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……香りが足りない、甘すぎる、それに色……そう。ええ……参考になる答えですわ……',
    );
    era.println();
    await era.printAndWait('え？ これで通ったのか？');
    era.println();
    await tachyon.say_and_wait(
      '……そういえば、あなたの身体能力も上がっていますから、今後は毎日の薬を一剤増やしますわ、',
    );
    await tachyon.say_and_wait(
      '従来の薬に加え、この剤も……あとであなたが文句を言えない味に改良してあげます',
    );
    era.printButton('「まさか……」', 1);
    era.printButton('「……まさか……」', 2);
    const ret = await era.input();
    await era.printAndWait('紅茶の味');
    await era.printAndWait('味の考察と改良');
    await era.printAndWait('つまり、そういうことだ');
    era.println();
    if (ret === 1) {
      await era.printAndWait(
        'よく考えると、甘いのは確かだが、香り以外、その「薬剤」は外見を無視すれば……',
      );
      await era.printAndWait([
        'いや、',
        tachyon.sex,
        'が紅茶を淹れるだけでどうしてあの色になるのかは疑問だが、',
      ]);
      await era.printAndWait([
        'よく考えれば、それは',
        tachyon.sex,
        'が普段いちばん好む紅茶の味ではないか？',
      ]);
      era.println();
      await tachyon.say_and_wait('楽しみにしておきなさい！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は少し負け惜しみのように言った',
      ]);
      await era.printAndWait([
        'そのとき ',
        you.get_colored_name(),
        ' は思い出した。かつて',
        tachyon.sex,
        'に弁当を出し、酷評されたときも、同じように負け惜しみていた',
      ]);
      await era.printAndWait([
        'よく考えれば、あのときの',
        tachyon.sex,
        'は何と答えたか？',
      ]);
      era.printButton('「楽しみにしているよ、研究者君」', 1);
      await era.input();
      await tachyon.say_and_wait('……たかがモルモットが');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の小さな独り言を聞き、つい笑った',
      ]);
    } else {
      await era.printAndWait([
        '今さら',
        tachyon.sex,
        'は自分で試薬するだけでは足りず、魔の手を他人へ伸ばそうとしている！',
      ]);
      await era.printAndWait([
        '今まさに紅茶味の薬を作ろうとしている。',
        tachyon.sex,
        'が色まで紅茶にする方法を見つけたら、それこそ大変だ！',
      ]);
      era.printButton('「タキオン！」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' は抑えきれず叫んだ']);
      era.println();
      await tachyon.say_and_wait([callname, '？ 何を……']);
      era.printButton('「どんな薬でもいい、いくらでも来い！」', 1);
      era.printButton('「一つだけ、約束してくれ」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'ええ……ちょっと、',
        callname,
        '……あなた、何か勘違いを……',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は何か言おうとしたが、',
        you.get_colored_name(),
        ' に容赦なく遮られた',
      ]);
      await era.printAndWait(
        'そうだ……何があっても、これだけは今、口に出さなければならない',
      );
      era.printButton(
        '「俺だけが、永遠に、唯一の（実）モルモット（験体）だ」',
        1,
      );
      await era.input();
      await era.printAndWait('そうだ……今の味は、もう紅茶に限りなく近い');
      await era.printAndWait([
        '万一、',
        tachyon.sex,
        'が他人の飲み物、あるいはもっと悪いことに飲料水へ混ぜたら……想像したくない',
      ]);
      await era.printAndWait([
        'だからここで自分の立場を強調し、',
        tachyon.sex,
        'に他人を実験体にする妄想を諦めさせなければならない',
      ]);
      era.println();
      await tachyon.say_and_wait('……あなた……やはり勘違い…………でも……ん……');
      era.println();
      await era.printAndWait([
        'なぜか ',
        tachyon.get_colored_name(),
        ' は狼狽して背を向けた。',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'が振り向く前に、真っ赤な顔を見た',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……私のモルモットは最初から最後まであなた一匹ですわ……とにかく毎日試薬に来なさい！ モルモットなら黙って薬を飲むのが本職でしょう！',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はぷんぷんして去り、実験室の後始末は ',
        you.get_colored_name(),
        ' 一人に残された',
      ]);
      era.println();
      await era.printAndWait([
        '……なぜ怒ったのだろう。',
        you.get_colored_name(),
        ' には見当もつかない',
      ]);
      await era.printAndWait([
        'ただ……',
        tachyon.sex,
        'が他の実験者を見つけたら、その瞬間、',
        you.get_colored_name(),
        ' の胸は、その可能性だけで少し縮んだ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'が自分のモルモットは自分だけだと言ったとき、その緊張は跡形もなく消えた',
      ]);
      era.println();
      await era.printAndWait('まさか……薬に依存しているのだろうか');
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて首を振り、その恐ろしい可能性を振り払った',
      ]);
    }
    return [];
  },
  /**
   * 聊天 - 喜欢的饮品
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_c プレイヤーからマンハッタンカフェへの呼び方
   */
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '～～何か飲みます？']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は突然、悪い笑みを浮かべて ',
      you.get_colored_name(),
      ' に訊いた',
    ]);
    await era.printAndWait('ただでは起きない親切');
    await era.printAndWait([
      'とはいえ、正面から断れば',
      tachyon.sex,
      'はきっと逆上する',
    ]);
    era.println();
    await tachyon.say_and_wait('どうです、何を飲みます？');
    era.println();
    era.print('どうしよう……');
    era.printButton('紅茶', 1);
    era.printButton('コーヒー', 2);
    era.printButton('サース', 3);
    era.printButton('飲まない', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('やはり王道の紅茶だろう');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は頷いた。',
          you.get_colored_name(),
          ' がこれを選ぶと知っていたように、後ろからもう仕込んである紅茶を取り出した',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…………',
          you.get_colored_name(),
          ' は、粉が溶けきっていない紅茶を見て、顔が引きつった',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'どうしました、',
          callname,
          '？ これは私が淹れたお茶ですわ。早く飲みなさい',
        ]);
        era.println();
        await era.printAndWait([
          '……まあいい。紅茶を選んだ時点で、',
          you.get_colored_name(),
          ' はこの展開を覚悟していたはずだ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は紅茶を一気に飲み干した',
        ]);
        await era.printAndWait('うん、美味くて爽やかだ');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            'コーヒーがいい。最近よく ',
            y_call_c,
            ' の淹れたコーヒーを飲んでいる',
          ]);
        } else {
          await you.say_and_wait('コーヒーがいい。最近仕事が忙しくてよく飲む');
        }
        era.println();
        await tachyon.say_and_wait(
          'どうしてあんな苦くて泥水みたいなものを飲むのです',
        );
        era.println();
        await you.say_and_wait(['それ ', y_call_c, ' に謝れ']);
        era.println();
        await tachyon.say_and_wait('まあいいわ、飲みたいならどうぞ');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は仕方なさそうに、すでに用意してあった飲み物を後ろから取り出した',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          ' は眼前の、粉が溶けきっていない深紅の液体を見て、突っ込みどころが多すぎて言葉が出ないという感覚を初めて味わった',
        ]);
        era.println();
        await you.say_and_wait('まず……コーヒー？');
        await tachyon.say_and_wait(
          '……カフェインは多いですわ。コーヒーということで',
        );
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '二人は黙り合い、',
          you.get_colored_name(),
          ' は諦めてそれを飲んだ',
        ]);
        break;
      case 3:
        await you.say_and_wait('サースがいい。マイナーだけど、たしかにうまい');
        era.println();
        await tachyon.say_and_wait('ええ……どうしてそんな妙な味が好きなのです');
        era.println();
        await you.say_and_wait('好きなんだよ、だめか？');
        era.println();
        await tachyon.say_and_wait(
          '………いいえ、あれは匂も味も薬ですわ。つまり私の薬を直接飲めばいいではありませんか',
        );
        era.println();
        await you.say_and_wait('！？');
        await era.printAndWait(['どうやら', tachyon.sex, 'はもう装う気がない']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は薬入りの紅茶を脇へ置き、白衣から蛍光色の薬剤を取り出した',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は形だけの抵抗を二度し、すぐに一気飲みさせられた',
        ]);
        await era.printAndWait(
          'というか、この薬、薬味がしない。なぜ親子丼の味なんだ！？',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          ' は断った。抵抗が無駄でも、',
          you.get_colored_name(),
          ' は自分の反抗を見せる',
        ]);
        era.println();
        await era.printAndWait(
          'これこそが、これこそが、人類の覚悟だああああああああ',
        );
        era.println();
        await tachyon.say_and_wait('うるさいですわ');
        era.println();
        await era.printAndWait([
          'だが覚悟は ',
          you.get_colored_name(),
          ' の小宇宙を爆発させなかった。人間は所詮',
          tachyon.uma_sex_title,
          'には勝てない。五秒後、',
          you.get_colored_name(),
          ' は顔を押さえられ、口を開けさせられ、液体を流し込まれた',
        ]);
        era.println();
        await tachyon.say_and_wait('最初からこうすれば手間が省けましたわね');
    }
    await era.printAndWait('ぱたん');
    await era.printAndWait([
      'それは ',
      you.get_colored_name(),
      ' が気を失って机に突っ伏した音だった',
    ]);
  },
  /**
   * 日常ランダム - 中庭の営業
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('タキオン———？');
    era.println();
    await era.printAndWait([
      '今日は朝から、なぜか ',
      tachyon.get_colored_name(),
      ' の姿がない。',
    ]);
    await era.printAndWait([
      'いつも研究に没頭している',
      tachyon.sex,
      'が、どこへ行ったのかわからない。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は学園を探し回り、通りがかりの生徒から',
      tachyon.sex,
      'が枯れた樹洞のそばにいると聞いた。',
    ]);
    await era.printAndWait([
      '樹洞……',
      tachyon.sex,
      'にも、吐きたい悩みがあるのか？',
    ]);
    await era.printAndWait('トレーナーとして機嫌が読めないのは、失職ものだ。');
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' は中庭へ来た。授業時間なので人は少なく、人がいないのを見計らって気持ちを吐く',
      tachyon.uma_sex_title,
      'が数人いるだけだった。',
    ]);
    await era.printAndWait([
      '人通りが少ないからこそ、',
      you.get_colored_name(),
      ' は「あれ」を目撃した。',
    ]);
    await era.printAndWait([
      tachyon.uma_sex_title,
      'へ近づき、',
      tachyon.couple_title,
      'の心の弱いところを突く黒い影。',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      'うわあああ！ 私は弱い……なぜ、どうしても勝てない……！',
    );
    await tachyon.say_as_unknown_and_wait('力を……欲しいですの？');
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, '……力？');
    await tachyon.say_as_unknown_and_wait('誰より強くなり、全員に勝つ力……');
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……ほ、本当ですか？ 対価は？',
    );
    await tachyon.say_as_unknown_and_wait(
      'ふふふ……知りたいなら、旧理科実験室へいらっしゃい……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      'なぜ……告白する勇気が出ない……あの鈍感……ここまでして、まだわからないなんて……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '本心を素直に伝えたいですの？ 口に出さなくても、相手に気持ちを悟られたいですの？',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      'あ、あなたは……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '旧理科実験室へ。欲しいものは、全部手に入りますわ……',
    );
    await you.say_and_wait('……あいつ、何をしてる', true);
    await era.printAndWait([
      '枯れた樹洞のそばで、人を惑わす悪魔のように囁き続けているのは、間違いなく ',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は悩みを樹洞に吐く者たちの前に現れ、堕落を誘う言葉を紡ぐ。神話の悪魔そのものだった',
    ]);
    await era.printAndWait([
      'そのときの',
      tachyon.sex,
      'は ',
      you.get_colored_name(),
      ' にも気づいた',
    ]);
    await tachyon.say_and_wait([
      callname,
      '、丁度いいわ。客を迎える準備をしましょう',
    ]);
    await you.say_and_wait('客？');
    await tachyon.say_and_wait([
      'もちろん、あの困っている',
      tachyon.uma_sex_title,
      'たちですわ。',
    ]);
    await tachyon.say_and_wait(
      'まあ、以前の私は失礼でしたわね。樹洞など不要だと思っていたのですもの。',
    );
    await tachyon.say_and_wait([
      '今思えば、心の意志が弱い',
      tachyon.uma_sex_title,
      'を自ら選別してくれる、私にぴったりな場所ではありませんか。',
    ]);
    await era.printAndWait('意志が弱いからこそ、外からの誘導で気持ちを吐く。');
    await era.printAndWait([
      '意志が弱いからこそ、目的のためなら魂を悪（タキ）魔（オン）に売りやすい。',
    ]);
    await era.printAndWait([
      'ある意味、不逞の輩から見れば、ここに来る',
      tachyon.uma_sex_title,
      'はいちばん狙われやすい、無垢な子たちだ。',
    ]);
    await era.printAndWait([
      'ただ、',
      tachyon.get_colored_name(),
      ' なら',
      tachyon.couple_title,
      'を傷つけはしない……だろうか？',
    ]);
    await tachyon.say_and_wait([
      'それはそれとして、',
      callname,
      '、急ぎましょう。',
    ]);
    await era.printAndWait(
      '急にどうした……良心が疼いた、ということはあるまい。',
    );
    await tachyon.say_and_wait(
      'あなたに見つかったということは、生徒会の連中もすぐ来るでしょう。説教される前に、行きなさい！',
    );
    await era.printAndWait([
      '…………たまには',
      tachyon.sex,
      'を説教に捕まらせてもいいかもしれない',
    ]);
  },
  /**
   * 日常ランダム - Plan A 屋上
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('ふんふんふん～～');
    await era.printAndWait([
      '今日も ',
      you.get_colored_name(),
      ' は弁当を持って ',
      tachyon.get_colored_name(),
      ' と屋上で昼食をとった。',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は微風を楽しみながら、嬉しそうに弁当の鶏唐を挟んだ。',
    ]);
    await era.printAndWait('突然、微風が一瞬で強風に変わった。');
    await tachyon.say_and_wait('あ');
    await era.printAndWait('箸に挟んだ鶏唐が、強まった風で地面へ落ちた');
    await era.printAndWait('ああ……惜しい');
    await era.printAndWait('でも大丈夫、弁当にはまだ……');
    await era.printAndWait([
      'そのとき、',
      you.get_colored_name(),
      ' は ',
      tachyon.get_colored_name(),
      ' が落ちた鶏唐をそのまま挟むのを見た',
    ]);
    await tachyon.say_and_wait('では、いただきます——');
    era.printButton('「待て！？」', 1);
    await era.input();
    await tachyon.say_and_wait([
      'ん？ 何か問題ですの ',
      callname,
      '。三秒ルールをご存じないのですか？',
    ]);
    await era.printAndWait([
      'いや、なぜ ',
      tachyon.get_colored_name(),
      ' が三秒ルールなどという根拠のない説を信じるのかはさておき、今のは明らかに三秒を超えている！？',
    ]);
    await tachyon.say_and_wait([
      '……はあ、',
      callname,
      '、科学的に言えば、',
      tachyon.uma_sex_title,
      'の胃腸はそんなことで壊れるほど脆弱ではありませんわよ',
    ]);
    await you.say_and_wait('そういう問題じゃないだろ！？');
    await tachyon.say_and_wait('とにかく私は鶏唐を食べますわ！');
    await you.say_and_wait('弁当にまだあるだろ！？');
    await era.printAndWait([
      you.get_colored_name(),
      ' の固持で、',
      tachyon.get_colored_name(),
      ' が落ちた鶏唐を食べるのは止められた',
    ]);
    await era.printAndWait([
      '代償として午後ずっと、',
      tachyon.sex,
      'は恨めしげな目で ',
      you.get_colored_name(),
      ' を見ていた',
    ]);
    await era.printAndWait([
      '夜、眠りについても、',
      you.get_colored_name(),
      ' の耳には ',
      tachyon.get_colored_name(),
      ' の恨めしい悲鳴が残っていた',
    ]);
    await tachyon.say_and_wait('私の鶏唐……');
    await you.say_and_wait(
      ['……明日また', tachyon.sex, 'に唐揚げを作ろう'],
      true,
    );
  },
  /**
   * 日常ランダム - Plan B 屋上
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は',
      tachyon.sex,
      'を屋上へ連れて弁当を食べ、気分を変えようとした',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は嬉しそうに ',
      you.get_colored_name(),
      ' が語る最近の ',
      coffee.get_colored_name(),
      ' の訓練の変化を聞き、たまに自分の考えを挟んだ',
    ]);
    await era.printAndWait('その過程で、自分の話は一切出なかった');
    await era.printAndWait([
      '訓練に出られない',
      tachyon.sex,
      'は、いくら時間を割いて傍にいても、他の',
      tachyon.uma_sex_title,
      'の訓練のあいだは離れなければならない',
    ]);
    await tachyon.say_and_wait(['最近の', tachyon.sex, 'は、どうです']);
    era.printButton('「……」', 1);
    era.printButton('「……君は？ 最近どうだ？」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の話が終わると、急に沈黙が落ち、その食事はすぐに終わった',
      ]);
    } else {
      await tachyon.say_and_wait(
        '私？ ……まあ、そんなところですわ。特別なことはありません。',
      );
      await era.printAndWait([tachyon.sex, 'は気のない返事をした']);
      await era.printAndWait([
        tachyon.sex,
        'と長く付き合ってきた ',
        you.get_colored_name(),
        ' にはわかる。',
        tachyon.sex,
        'ははぐらかしているのではなく、本当に自分の暮らしに語る話題がないと思っている',
      ]);
      await era.printAndWait([
        'それを思うと、',
        you.get_colored_name(),
        ' は胸が痛んだ。',
      ]);
    }
  },
  /**
   * 日常ランダム - 幼児退行したタキオン
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} bakushin サクラバクシンオー
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} pocket ジャングルポケット
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '！ 見て！ 鴨だよ！']);
    await tachyon.say_and_wait('あとあれ！ 蝶々！');
    await tachyon.say_and_wait('ここの景色、きれい！');
    await era.printAndWait([
      you.get_colored_name(),
      ' は呆れつつ、堤防を走り回る ',
      tachyon.get_colored_name(),
      ' を見た、',
    ]);
    await era.printAndWait([
      '無邪気な表情は、',
      tachyon.get_colored_name(),
      ' というより ',
      urara,
      ' や ',
      bakushin,
      ' たちの',
      tachyon.uma_sex_title,
      'に近い。眼のブラインドすら、桜の花びらに変わったかのようだった',
    ]);

    await era.printAndWait([
      '発端はいつものように、',
      tachyon.get_colored_name(),
      ' の薬だった',
    ]);
    await tachyon.say_and_wait('賢さを下げてスピードを上げる薬ですわ');
    await era.printAndWait([
      'まったく割に合わない薬に聞こえるが、',
      tachyon.get_colored_name(),
      ' は迷いなくそれを飲んだ',
    ]);
    await era.printAndWait([
      '結果、',
      tachyon.get_colored_name(),
      ' は ',
      coffee,
      ' や ',
      pocket,
      ' たちとの模擬レースに楽々勝った。だが代償は……',
    ]);
    await tachyon.say_and_wait([
      callname,
      callname,
      '！ 見て！ カタツムリ、ゆっくり！',
    ]);
    await era.printAndWait([
      'まあ、脳を休める行為、と言えなくもない。',
      you.get_colored_name(),
      ' は今の無邪気すぎる',
      tachyon.sex,
      'が事故……あるいは騙されないよう、',
      tachyon.get_colored_name(),
      ' から目を離さなかった',
    ]);
    era.drawLine();
    await era.printAndWait([
      '一日遊んだあと、ようやく ',
      tachyon.get_colored_name(),
      ' も疲れたらしく、足元がふらついていた',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は ',
      you.get_colored_name(),
      ' に両手を伸ばした',
    ]);
    await tachyon.say_and_wait([callname, '～～おんぶ～～']);
    await era.printAndWait([
      you.get_colored_name(),
      ' は一日遊び尽くした超光速の',
      tachyon.sex_code - 1 ? 'お姫さま' : '王子さま',
      'を背負った。本当に疲れたらしい。',
      you.get_colored_name(),
      ' の背に乗った瞬間、もう眠っていた',
    ]);
    await era.printAndWait('自分も一日で十分疲れた。帰ったら休まないと');
    await tachyon.say_and_wait([callname, '……ありがとう……']);
    await you.say_and_wait('……');
    await era.printAndWait('たまには、こんな一日も悪くないのかもしれない。');
  },
  event_church: (() => {
    const title = '神捕捉作戦';
    /**
     * 日常ランダム - 神社で猫を捕まえる
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '今日、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' と神社へ向かう途中……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！ 早く！ 『神さま』を待たせてはいけませんわ！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は興奮して神社の石段を駆け上がり、振り返って呼んだ',
      ]);
      await era.printAndWait([
        '人間の身で',
        tachyon.uma_sex_title,
        'に追いつける可能性はさておき、物理的に不可能なうえ、',
      ]);
      await era.printAndWait([
        '精神的にも ',
        you.get_colored_name(),
        ' はこの先の行為を死ぬほど拒みたかった。だが愛馬の我儘に、',
        you.get_colored_name(),
        ' は苦笑しながらついていくしかなかった',
      ]);
      era.println();
      await era.printAndWait('発端は……複雑に聞こえて、実は単純だ');
      await era.printAndWait('一言で言えば');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、知っていますわね。私は魂だ鬼神だといったものの存在を、もともと信じていません',
      ]);
      await tachyon.say_and_wait(
        'ですが、確認もせずに否定するのは研究者の態度ではありませんわ',
      );
      await you.say_and_wait('うんうん');
      await tachyon.say_and_wait(
        'ではどう検証するか。実は昔から、こんな説がありますわ',
      );
      await tachyon.say_and_wait(
        'いわゆる鬼神とは、自然界に遊離したエネルギー塊にすぎない',
      );
      await tachyon.say_and_wait(
        '偏った言い方ではありますが、これを基に検証はできますわ',
      );
      await you.say_and_wait('うんうん');
      era.println();
      await tachyon.say_and_wait(
        'ですから、かくかくしかじか、神社へ行って神を捕まえましょう！',
      );
      await you.say_and_wait('うん……うん？');
      era.println();
      await era.printAndWait(
        'もし一般の人間には感知も察知もできないものが本当にいるなら、',
      );
      await era.printAndWait('その存在自体にもエネルギーが要る');
      await era.printAndWait(
        'だからまず、異常なエネルギー消費を探知できる場所を基準に選ぶ、',
      );
      await era.printAndWait('だが都市内は雑音が多すぎる');
      await era.printAndWait('それに比べれば、探るなら辺鄙な神社が一番だ');
      await era.printAndWait(
        'それに、神と呼ぶ以上、エネルギーの階位は普通の幽霊とは違うはずで、',
      );
      await era.printAndWait(
        '神社でさえいわゆる神が捕まえられないなら、そんなものは存在しないと見ていい………',
      );
      era.println();
      await era.printAndWait('要するに、おおむねこんな不敬な理由から');
      await era.printAndWait(['二人は今日、人通りのない辺鄙な神社へ来た']);
      await you.say_and_wait(
        '南無三、三女神さまはどうか寛大に、こんな小事は気になさらず、どうかお願い、南無阿弥陀仏、アーメン',
        true,
      );
      era.println();
      await era.printAndWait([
        '気が進まないまま、',
        you.get_colored_name(),
        ' はどうにか神社まで登った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の死ぬ気の懇願で、',
        tachyon.get_colored_name(),
        ' は不承不承、',
        tachyon.sex,
        'の妙なエネルギー探知機を使う前に、一度参拝して敬意を示すと約束した',
      ]);
      era.println();
      await era.printAndWait(['こうして二人は手を合わせ、社へ拝んだ……']);
      await tachyon.say_and_wait(
        'よろしい！ では前置きは終わり、始めましょう……',
      );
      era.println();
      await era.printAndWait([
        '参拝が終わった瞬間、',
        tachyon.get_colored_name(),
        ' は脇に置いていたエネルギー探知機を取り上げ、社の方向へ向けて測り始めた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑しながら傍で、神さまはどうか子供の悪戯を大目に見てくださいと祈った',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          'ええ……ええ……！ 待ちなさい！',
          callname,
          '！ ここを見て、何かあるようですわ………',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の呼び声に慌てて駆け寄ったが、',
          tachyon.sex,
          'はある一点を捉えたあと、いきなり動かなくなっていた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が急いで肩を叩いて無事を確かめると、',
          tachyon.sex,
          'はいきなり ',
          you.get_colored_name(),
          ' を地面に押し倒した',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の両手を地に押さえ、',
          you.get_colored_name(),
          ' は仰向けのまま、自分の上に乗る ',
          tachyon.get_colored_name(),
          ' を見た',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'の目は冷たいのに、その奥には熱が隠れていそうだった',
        ]);
        await era.printAndWait(
          '獲物を捕まえて、これから喰らい始める猫科のようだ',
        );
        era.println();
        await you.say_and_wait(
          [
            'これで本当に天罰か……いや、天罰を食らうのが俺で',
            tachyon.sex,
            'じゃないのはなぜだ！？',
          ],
          true,
        );
        era.println();
        await era.printAndWait(
          '言いたいことはいくらでもあったが、無力な諦めに沈んだ',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'の次の動きを見守るしかなかった',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' が抵抗の意志を失ったと確認すると、',
          tachyon.sex,
          'は片手を離し、',
          you.get_colored_name(),
          ' のシャツを解き始めた',
        ]);
        era.println();
        await you.say_and_wait('ああ、これでトレーナー失格だな', true);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の上着を開き、そして……',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃ～～～');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は子猫みたいな声を出し、猫のように ',
          you.get_colored_name(),
          ' の懐へ潜り込んで、気持ちよさそうに喉を鳴らした',
        ]);
        await era.printAndWait([
          'もちろん、動きがどれだけ猫でも、',
          tachyon.sex,
          'の体が',
          tachyon.uma_sex_title,
          'の体だという事実は変わらない',
        ]);
        await era.printAndWait([
          '子猫みたいにシャツへ潜りたいつもりでも、',
          you.get_colored_name(),
          ' の目には、',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'のやっていることは、上着を開いたあと ',
          you.get_colored_name(),
          ' の裸の胸板に寝そべって擦り寄ることだった',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃ～～にゃぁ～にゃ');
        era.println();
        await era.printAndWait([
          'その触れ方に少し不満そうで、',
          tachyon.sex,
          'はやり方を変え、',
          you.get_colored_name(),
          ' の両手を引き上げ、',
          you.get_colored_name(),
          ' の両手を',
          tachyon.sex,
          'のお腹の上で重ねた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は隙を見て起き上がろうとしたが、動きを察したあとに圧し掛かる重みで、また動けなくなった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'に手を抱擁の形へ組み替えられるままにした',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の手を固定するとくるりと向きを変え、頬を ',
          you.get_colored_name(),
          ' の胸にぴたりとつけて、満足そうな声を出した',
        ]);
        era.printButton('「……タキオン？」', 1);
        await era.input();
        await era.printAndWait([
          '子猫は答えず、やがて',
          tachyon.sex,
          'の呼吸は穏やかになり、そして……',
        ]);
        era.println();
        await tachyon.say_and_wait('zzz……にゃ……zzz……');
        era.println();
        await era.printAndWait([
          'そうして ',
          you.get_colored_name(),
          ' の胸の上で眠ってしまった',
        ]);
        await era.printAndWait([
          '今なら ',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'を振りほどけるが……',
        ]);
        era.println();
        await era.printAndWait([
          '今の ',
          tachyon.get_colored_name(),
          ' の様子は、明らかに普通ではない',
        ]);
        await era.printAndWait('だが、ここまで振り回されたのだ');
        await era.printAndWait(
          '眠っている今、少しばかり埋め合わせをもらっても、いいだろう？',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'を抱く腕をそっと緩め、片手を上へ伸ばした…………',
        ]);
        era.println();
        await era.printAndWait([
          '柔らかい、気持ちいい……なるほど、これが',
          tachyon.uma_sex_title,
          'の………',
        ]);
        era.println();
        await era.printAndWait('耳か');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は子猫の頭を優しく撫で、ときどき頭頂から垂れた耳を揉んだ。柔らかくて弾力のあるふわふわに、つい何度も触ってしまう',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃぁ……ごろごろ……にゃにゃ');
        era.println();
        await era.printAndWait([
          '夢の中の子猫も可愛い声を出し、',
          you.get_colored_name(),
          ' の手を促すようだった',
        ]);
        await era.printAndWait('まずいな……このふわふわに……沈みそうだ………');
        era.println();
        await era.printAndWait([
          'いつの間にか、',
          you.get_colored_name(),
          ' も夢の中へ落ちた…………',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'あああああ！！！ 私の装置があああああ！！！',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は悲鳴を上げる ',
          tachyon.get_colored_name(),
          ' を見て、苦笑した',
        ]);
        await era.printAndWait([
          'さっき何が起きたのかは分からない。二人は神社で突然気を失い、再び目を覚ましたとき ',
          tachyon.get_colored_name(),
          ' は、',
          tachyon.sex,
          'が高額（らしい）で買った装置が動かなくなっていることに気づいた',
        ]);
        await era.printAndWait(
          '妙なことに、二人の記憶は参拝の瞬間で止まっており、そのあと何があったかはまったく思い出せない',
        );
        await era.printAndWait([
          'だがなぜか、',
          you.get_colored_name(),
          ' は体がすっきりしていて、気を失う前に何かストレスを発散したような気がした',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' は、目を覚ましたとき上着のボタンが全部外れていたことを思い出した。気を失う前に、いったい何があったのだろう',
        ]);
        await era.printAndWait(
          '……やはり、鬼神の類は多少信じておいた方がいいな',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を連れて神社を離れた',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.sex,
          'が探知機を持って神社の中をつついているのを見ていた。これで効き目があるのかどうかも分からない',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…………やはり、何もありませんわ');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はがっかりした顔で言った',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' にも、',
          tachyon.sex,
          'がなぜそこまで落ち込むのか分からない。鬼神がいないと証明できたのは、',
          tachyon.sex,
          'にとって良いことではないのか？',
        ]);
        await era.printAndWait([
          '訳も分からないまま、二人はそのまま山を下りて帰った',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  event_station: (() => {
    const title = 'ネタバラシ';
    /**
     * 日常ランダムイベント - 駅前デートでネタバラシ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '今日は ',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' が一緒に出かけてデートする日だ',
      ]);
      await era.printAndWait([
        '今日の商店街ではマジックのパレードがあるらしい。だから、ついでに',
        tachyon.sex,
        'を連れて賑わいを見せようと思っていた',
      ]);
      await era.printAndWait('ところが……');
      era.println();
      await tachyon.say_and_wait('あのマジック棒は袖の中ですわ');
      await tachyon.say_and_wait(
        'あの鳩は最初から挟みに隠してあるだけ、大したことありませんわ',
      );
      await tachyon.say_and_wait(
        'マグネシウムの酸化燃焼ですわ。研究室でも見せてあげられますわよ',
      );
      era.println();
      await era.printAndWait([
        '手品の種は毎回、',
        tachyon.get_colored_name(),
        ' が大きすぎず小さすぎず、周囲に聞こえる声量で即座に暴いてしまう',
      ]);
      await era.printAndWait([
        '飽きたならまだしも、言い終わるたび熱い目で ',
        you.get_colored_name(),
        ' を見つめて、褒められたいみたいだ',
      ]);
      await era.printAndWait([
        '褒められたがりの子犬か……',
        you.get_colored_name(),
        ' は頭に浮かんだ絵を振り払った',
      ]);
      await era.printAndWait([
        'とにかく、二人を睨んでいるマジシャンが堪忍袋の緒を切って舞台から降りて殴りかかる前に、',
        tachyon.get_colored_name(),
        ' を連れて離れよう',
      ]);
      era.println();
      await tachyon.say_and_wait('え～～もう行くんですの？');
      era.println();
      await era.printAndWait([
        'だが、',
        tachyon.get_colored_name(),
        ' はまだ不満そうだった',
      ]);
      await era.printAndWait([tachyon.sex, 'の気をそらすものが要る……あった！']);
      era.printButton('「変色野菜ジュース？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は驚いたふりをして屋台の目玉商品を読み上げ、',
        tachyon.get_colored_name(),
        ' の気をそらそうとした',
      ]);
      await era.printAndWait(
        '店主が手の紫の液体をカップへ注ぐと、液体は一瞬で赤になった',
      );
      await era.printAndWait(
        '……中学の教科書の、酸塩基反応の紫キャベツ汁じゃないか',
      );
      await era.printAndWait([
        'もういい。',
        tachyon.get_colored_name(),
        ' の気を引くためなら、少し演技するしかない',
      ]);
      era.printButton('「すごいな、あれ！」', 1);
      await era.input();
      await era.printAndWait([
        '案の定、',
        you.get_colored_name(),
        ' の大げさな声は、',
        tachyon.get_colored_name(),
        ' を手品から引き戻した',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はキャベツ汁が色を変える様子を見つめ、何か考えているようだった',
      ]);
      await era.printAndWait([
        'おかしいな。',
        tachyon.get_colored_name(),
        ' は見たことがないのか？',
      ]);
      await era.printAndWait([
        '……いや、さすがにそれはないだろう。もっとも基礎的な酸塩基指示薬だ。',
        tachyon.get_colored_name(),
        ' が知らないはずがない',
      ]);
      await era.printAndWait([
        'だがもし、',
        tachyon.sex,
        'が本当に触れたことがないなら……',
      ]);
      era.printButton('「なんだか不思議……だな？」', 1);
      await era.input();
      await era.printAndWait('だめだ。褒める言葉がもう出てこない');
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' の意識は、もう完全にこちらへ移っている',
      ]);
      await era.printAndWait('これなら問題ないはず……');
      era.println();
      await tachyon.say_and_wait('…………こんなもの');
      era.println();
      await era.printAndWait('え');
      era.println();
      await tachyon.say_and_wait(
        '…………こんなものを褒めるくらいなら、私を褒めてくれないんですの？',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' は怒った']);
      await era.printAndWait([
        '理由は分からないが、',
        tachyon.get_colored_name(),
        ' は明らかに怒っている',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'もっと色の多い薬だって、光る薬だって、私なら作れるのに……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はわけもなく泣いた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて',
        tachyon.sex,
        'を慰めるしかなかった',
      ]);
      era.println();
      await era.printAndWait([
        '翌日、',
        tachyon.get_colored_name(),
        ' は256RGBの色彩を含む薬剤を作ってみせた',
      ]);
      await era.printAndWait(
        '……どうやって256色を同じ薬剤の中で分割して並べたのだろう',
      );
      await era.printAndWait('モルモットは思わず疑問を抱いた');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '金の代価';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は飲みかけのウイスキーを手に、よろよろと五軒目のバーから出てきた',
      ]);
      await era.printAndWait('夜は相変わらず暗い。爛れた夜はまだ続く');
      era.println();
      await era.printAndWait('終わった……では、次はどこへ行けばいい');
      await era.printAndWait('ふらふらと歩き、全身から酒の匂いを漂わせている');
      await era.printAndWait([
        '通行人が鼻を覆って遠ざかる姿は、',
        you.get_colored_name(),
        ' がわざわざ作り上げようとしたものだ',
      ]);
      era.println();
      await era.printAndWait('二、三、五………二十三、二十九 ');
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭の中で黙って数えた',
      ]);
      await era.printAndWait([
        '素数を数えて冷静になるわけではない。今夜 ',
        you.get_colored_name(),
        ' が飲んだ酒の量だ',
      ]);
      await era.printAndWait('合計金額は……七桁……それとも八桁か？');
      await era.printAndWait([
        '驚くべき数字だが、それは ',
        you.get_colored_name(),
        ' が一晩で飲んだ酒の値段にすぎない',
      ]);
      await era.printAndWait(
        '最高級のバーで、高いものばかり選んで店を掃討した結果が、普通の人間なら想像もしたくない数字だった',
      );
      era.println();
      await era.printAndWait('だが……');
      await era.printAndWait('無駄だ。まったく効かない');
      await era.printAndWait([
        '値段も度数も関係ない。今夜飲んだ酒は、',
        you.get_colored_name(),
        ' を何度かトイレへ行かせた以外、何の役にも立たなかった',
      ]);
      await era.printAndWait([
        '意識はこれ以上ないほどはっきりしている。はっきりしすぎて、',
        you.get_colored_name(),
        ' は二日前のことを思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、神経抑制剤の排除に関するものですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はウイスキーを口に直接流し込んだ',
      ]);
      await era.printAndWait([
        '一口で普通の人間が酔うはずの強い酒が、',
        you.get_colored_name(),
        ' の頭をさらに澄ませる',
      ]);
      await era.printAndWait(
        '酒で憂さを晴らすのが、アルコールで神経を麻痺させて現実から逃げることなら、その麻痺すら許されない自分は、世界でいちばん惨めな酔客だろう',
      );
      era.println();
      await era.printAndWait(
        '賑やかな夜の街に、自分のような酔客はいくらでもいる',
      );
      await era.printAndWait([
        'ふらつく人々の姿を見て、',
        you.get_colored_name(),
        ' は心から羨んだ',
      ]);
      era.println();
      await era.printAndWait([
        '歩いていると、眼前に突然光が走り、',
        you.get_colored_name(),
        ' は思わず目を細めた',
      ]);
      await era.printAndWait(
        '目を刺すのは照明だけではない。きらめく内装と、一夜で金持ちになる夢がいくつもそこにある',
      );
      await era.printAndWait('賭けと酒、酒と賭け。昔からこの二つは離れない');
      await era.printAndWait(
        '酔いつぶれる酒豪たちが、ほろ酔いのうちに賭場へ手を出すのも、もう決まりごとのようだ',
      );
      era.println();
      await era.printAndWait([
        'だが、酔客の格好をした ',
        you.get_colored_name(),
        ' は賭場へ目すら向けず、ただ前方を見つめた',
      ]);
      await era.printAndWait('賭場の賭けが小物だから嫌ったわけではない———');
      await era.printAndWait([
        'ここの賭場には、',
        tachyon.uma_sex_title,
        'のレースに賭けるという、発覚したら二度と商売できない営業まであるらしい',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が潔癖だからでもない——こんな時間にこんな通りを徘徊する人間が、どれだけ綺麗でいられるというのか',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はまた一口飲み、過去を思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、脳の報酬系の調整と抑制ですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait('普通のサラリーマンの年収を超える金を勝っても');
      await era.printAndWait('一夜で海辺の別荘を一軒失っても');
      await era.printAndWait('感情はひとつも動かず、眉間に皺すら寄らない');
      await era.printAndWait('こんな状態で賭けて、何が楽しいというのか');
      era.println();
      await era.printAndWait(
        '賭場の中で、自分だけが世の外に孤立しているようだ',
      );
      await era.printAndWait('昔の自分がなぜこれに嵌まったのか、理解できない');
      await era.printAndWait('いや、理解はできる。だができないことはできない');
      await era.printAndWait('目が覚めた人間が、夢へ戻れないのと同じだ');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        '立ちんぼの少女',
        'お客さん、ひとりは寂しそうですよ……ご一緒に、春のひとときを過ごしませんか？♡',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、華やかな賭場も後ろに捨て、風俗街へ入った ',
        you.get_colored_name(),
        ' のもとへ、夜の女たちの柔郷が訪れた',
      ]);
      await era.printAndWait(
        'このまま彼女たちの肢体に沈めたら、きっとこの上なく幸せだろう……',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait('ただしいつもの決まりですわ……');
      era.println();
      await era.printAndWait('ああ');
      await era.printAndWait([you.get_colored_name(), ' は少女の誘いを断った']);
      await era.printAndWait('反応はゼロだ');
      await era.printAndWait(
        '本来なら好みのはずの娘でも、今は体にわずかな反応すら起きない',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、',
        you.get_colored_name(),
        ' は通りを出ていた',
      ]);
      await era.printAndWait([
        '広大な夜の街、華やかな夜の都なのに、',
        you.get_colored_name(),
        ' に欲を起こさせるものは何ひとつ見つからない',
      ]);
      await era.printAndWait('かつて興味を持ったものたち');
      await era.printAndWait('美食、酒と煙草、賭け、色……');
      await era.printAndWait(
        'かつて嵌まり、神経を麻痺させるために使ったものたち',
      );
      await era.printAndWait('今は神経を、かえって澄ませるだけだ');
      era.println();
      await era.printAndWait('もういい。もう十分だ');
      await era.printAndWait(
        '何でもいい。酔い沈めさえすれば、考えることをやめられさえすれば、何でもいい',
      );
      await era.printAndWait('理性がこれほど人を狂わせるとは、知らなかった');
      await era.printAndWait('暴力、痛み、血、傷');
      await era.printAndWait('それらでさえ、これ以上の刺激にはならない');
      await era.printAndWait('どれは、どの実験で売り払ったのだろう');
      await era.printAndWait('もう忘れた。そんなことはもうどうでもいい');
      era.println();
      await era.printAndWait(
        '人格が剥がれるように、焦って刺激を求め、それでも何も得られない',
      );
      await era.printAndWait(
        'このままでは……壊れる。神経も、体も、必ず壊れ、切れる',
      );
      await era.printAndWait('だからその前に、何でもいい……');
      await era.printAndWait('何でも、いい……');
      await tachyon.say_as_unknown_and_wait([callname, '？ どうしてここに']);
      await tachyon.say_as_unknown_and_wait('……おや、みっともない姿ですわね');
      await tachyon.say_as_unknown_and_wait(
        'どうしましたの。酒代がなくなった？ それとも賭け金がなくて賭場を追い出された……あるいは、誰か気になる娘でも？',
      );
      await tachyon.say_as_unknown_and_wait('もっと……お金が要りますの？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はぼんやりと相手を見た',
      ]);
      await era.printAndWait([
        '悪魔の囁きのように、',
        you.get_colored_name(),
        ' の耳元で綿のように細く語る',
      ]);
      await era.printAndWait('金');
      await era.printAndWait('まだ金が要る');
      await era.printAndWait('もっと金が要る');
      await era.printAndWait('もっと借りなければならない');
      era.println();
      await era.printAndWait('………………………なぜ？');
      await era.printAndWait('なぜ金が欲しい？');
      await era.printAndWait('なぜ借りる？');
      await era.printAndWait('酒を買うため？');
      await era.printAndWait('賭けのため？');
      await era.printAndWait('女遊びのため？');
      await era.printAndWait('なぜ？');
      await era.printAndWait('なぜ？');
      era.println();
      await era.printAndWait('何でもいい');
      await era.printAndWait('何をしてもいい');
      await era.printAndWait('考えろ');
      await era.printAndWait('どうすれば、考えることをやめられる');
      await era.printAndWait('どうすれば、頭を徹底的に麻痺させられる');
      era.println();
      await era.printAndWait('ああ……');
      await era.printAndWait('ああ！');
      await era.printAndWait('あった');
      await era.printAndWait(
        'あったあったあったあったあったあったあったあったあったあった',
      );
      era.println();
      await you.say_and_wait('……いい、金を貸してくれるか？');
      await tachyon.say_as_unknown_and_wait([
        'もちろんですわ……ただし、',
        callname,
        '、借りたお金で何をするつもりですの？',
      ]);
      era.println();
      await era.printAndWait('相手が残した唯一の隙間');
      await era.printAndWait('自分に残された最後の慈悲');
      await era.printAndWait('仕掛け？ 陰謀？ 計算？');
      await era.printAndWait('そんなものはもうどうでもいい');
      era.println();
      await you.say_and_wait(
        'タキオン……この金で……一晩、俺に付き合ってくれないか？',
      );
      era.println();
      await era.printAndWait(
        '口にした瞬間、限界まで張ったばねがようやく緩んだ',
      );
      await era.printAndWait('ああ……');
      await era.printAndWait('相手を想うときだけ、頭は息をつけた');
      await era.printAndWait('相手を念じるときだけ、内側は麻痺できた');
      await era.printAndWait('なぜ昔の自分は気づかなかった');
      await era.printAndWait('なぜずっと、意味のないことに金を借りていた');
      await era.printAndWait('心の唯一の安らぎは、ここにあったのに');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に食事がしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にドライブがしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に夜景が見たい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にラブホテルへ入りたい',
      ]);
      await era.printAndWait([
        '徹底的に、内側から外側まで、完全に ',
        tachyon.get_colored_name(),
        ' のものになりたい',
      ]);
      await era.printAndWait('そう想うほど、胸は軽くなり、楽になる');
      era.println();
      await tachyon.say_as_unknown_and_wait('ふふ……いい子、いい子ですわ');
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は本当の幸福を得た',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_punishment1: (() => {
    const title = '実験記録：ウマ娘化';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait(
          'おや、モルモット……いいえ、モルモットさん、来ましたわね……',
        );
        await tachyon.say_and_wait(
          'ん？ どうして分かったかですの？ ふふ、そうですわね。あのときは昏睡状態でしたもの。',
        );
        await tachyon.say_and_wait('手術は、この私が執刀しましたわ。');
        await tachyon.say_and_wait(
          'トレーナーとして無能なのは最大の罪。その点であなたは、十悪不赦と言えますわ。',
        );
        await tachyon.say_and_wait(
          'でも喜びなさい。私の研究のおかげで、あなたは二度目の機会を得たのですから。',
        );
        await tachyon.say_and_wait(
          'そもそも中央トレセンに入れる以上、どこか他人より強いところがあるはず。発掘されるかどうかだけですわ。',
        );
        await tachyon.say_and_wait(
          'ウマ娘になったあなた、案外この方面に才があるかもしれませんわよ？',
        );
        await tachyon.say_and_wait(
          'せいぜい頑張りなさい、モルモットさん……このもう一度の機会で、必死にもがきなさい。',
        );
        await tachyon.say_and_wait(
          'さもなくば……次に手術台で私を見たあとに起きること、あなたは絶対に体験したくないはずですわ……いいえ、そうでもないかしら？',
        );
        await tachyon.say_and_wait(
          '本当にそうなったとき、たっぷり可愛がってあげますわ。',
        );
      } else {
        await tachyon.say_and_wait(
          `モルモット……いいえ、${you.actual_name} 君。`,
        );
        await tachyon.say_and_wait('ごめんなさい。でも決まりは決まりですわ……');
        await tachyon.say_and_wait(
          'いいえ……私のせいです…………あなたの手術……執刀したのは私ですわ。',
        );
        await tachyon.say_and_wait('……ええ、ふふ。');
        await tachyon.say_and_wait(
          '安心なさい……私は気にしませんわ。どんな姿になっても、あなたの瞳の光がある限り、同じように愛していますわ。',
        );
        await tachyon.say_and_wait(
          '…………それに、ウマ娘になったら遊べることも増えますものね？',
        );
        await tachyon.say_and_wait('ふふ、たっぷり可愛がってあげますわ。');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_punishment2: (() => {
    const title = '実験記録：性奴隷改造';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「ぐちゅ……ぐちゅ……ちゅぽ……ちゅる……」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          'ちっちっち……モルモットさん、警告したはずですわよ？',
        );
        await tachyon.say_and_wait('もう一度やった末路……ふふ。');
      } else {
        await tachyon.say_and_wait('モルモット君……みっともないですわね。');
        await tachyon.say_and_wait(
          '恥ずかしい。こんな相手が恋人だなんて、認めたくもありませんわ。',
        );
      }
      era.println();
      await era.printAndWait('アグネスタキオンの研究室。');
      await era.printAndWait(
        'この時間は本来、タキオンが薬剤を調合し研究する時間だ。',
      );
      await era.printAndWait(
        `だが新しい身分で戻ってきた ${you.name} を迎えるため、${tachyon.sex}は今日の予定をわざわざ取り消し、祝いの薬まで自ら調合した。`,
      );
      era.println();
      await era.printAndWait('「しゅる……ちゅる……ちゅぐ……ぐちゅ……」');
      era.println();
      await tachyon.say_and_wait(
        'それとも、これが本当にあなたが望んでいたことですの？',
      );
      await tachyon.say_and_wait(
        '好き放題弄ばれ、自分の意志など持たない性奴隷になることを？',
      );
      era.println();
      await era.printAndWait(
        'タキオンは両脚を開き、いつもの回転椅子にだらしなく身を預けていた。',
      );
      await era.printAndWait(
        `${tachyon.sex}の両脚の間では、馬耳を生やした女性が蹲っている。着ているのはタキオンと同型の、袖の長い白衣だが、いくつか違う。`,
      );
      await era.printAndWait(
        '後ろ裾がわざわざ切り開いてあり、風が通るたび、丸い尻が白衣の下からむき出しになる。',
      );
      await era.printAndWait(
        '胸元には薬液で溶かしたような不定形の穴が二つ開き、乳首が空気に晒されている。',
      );
      await era.printAndWait(
        '下着？ ボタンを留めることすら許されない白衣の中央に見える肉色を見れば、そんなものがないのは分かるはずだ。',
      );
      await era.printAndWait(
        '情趣具より過激な服を着たウマ娘が、頭を前後に動かし、タキオンの脚の間の太い陰茎を含んでいる。',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          'ウマ娘の体にあるはずのない器官。その理由は、もちろんタキオンの薬が作ったものだ。',
        );
        era.println();
        await tachyon.say_and_wait(
          'ふふ……私のフロンP系列のおかげで、性奴隷の仕事をちゃんと体験できますわ。双方とも雌では、遊びようがありませんものね？',
        );
        era.println();
        await era.printAndWait(
          `地面に蹲るウマ娘———つまり ${you.name}——は聞こえないふりをして、眼前の巨物に奉仕し続けた。`,
        );
        await era.printAndWait(
          '雌が二人、という言い方は客観的には少し違うかもしれないが、結論はだいたい同じだ。',
        );
        await era.printAndWait(
          `誰が見ても、${you.name} の、限界まで張っているのに上に括ったローターより短い生殖器を、正常な雄が雌を孕ませる器官だとは認めないだろう。強いて言えば……そう、陰核と呼ぶ方がまだ相応しい。`,
        );
      }
      era.println();

      await era.printAndWait([
        `ふいに、一心に`,
        tachyon.uma_sex_title,
        `の主人へ奉仕していた ${you.name} の全身が震えた。`,
      ]);
      await era.printAndWait([
        `${you.name} の下で、限界まで勃起しても`,
        tachyon.uma_sex_title,
        `の主人の片方の睾丸より小さい「陰核」が、今日四発目、水のように薄い液を噴いた。`,
      ]);
      await era.printAndWait('それも、眼前の主人の不興を買った。');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          '自分の気持ちよさばかりで、いちばん基礎の口奉仕すらできない……性奴隷としても、こんなに落ちこぼれだとは思いませんでしたわ。',
        );
        era.println();

        await era.printAndWait([
          `${you.name} は慌てて気を取り直し、担当の`,
          tachyon.uma_sex_title,
          `兼主人へ奉仕を続けた。`,
        ]);
        await era.printAndWait(
          `だがもともと我慢のきかない${tachyon.sex}は、${you.name} の拙い奉仕に愛想を尽かしていた。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を ${you.name} の喉へさらに深く押し込んだ。`,
        );
        await era.printAndWait([
          '巨大な陰嚢が ',
          you.get_colored_name(),
          ' の顎にぶつかり、重く温かい流動感が、',
          you.get_colored_name(),
          ' の口へ噴き出す白濁の量を予告していた。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          'そういえば、モルモット……いいえ、性奴隷君。まだ覚えていますかしら。',
        );
        era.println();

        await era.printAndWait(
          `わざと性奴隷「君」に呼び戻したことで、${you.name} はその倒錯にますます興奮し、下の「陰核」は壊れた蛇口のように、さっきから水のように澄んだ液を流し続けていた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '改造手術は全部私がしましたわ。だからあなたの性感帯については、この世でいちばんよく知っているのは、間違いなく私ですわ。',
        );
        era.println();

        await era.printAndWait(
          `たとえば、${tachyon.sex}はいきなり ${you.name} の喉を何度も突き、何かを探しているようだった。`,
        );
        await era.printAndWait(
          `そんな乱暴な扱いを受け、${you.name} はまた、自分がただの物品、性欲を吐き出す道具だと自覚した。`,
        );
        await era.printAndWait(
          `突きの途中、どこかに擦れたのか、${you.name} の喉が急に収縮し、下半身は前後とも汁を噴き出した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ああ、見つけましたわ。ここですわね、あなたの喉の性感帯。',
        );
        await tachyon.say_and_wait(
          'ここを突けば、雄が千回射精するのにも劣らない快感……ふふ、でももう、雄だった頃のことは知らなくてもいいでしょうね。',
        );
        era.println();

        await era.printAndWait(
          `言葉を聞く余裕などなく、${you.name} の精力は今、潮のように押し寄せる快感をこらえることにしか使えない。`,
        );
        await era.printAndWait(
          `全力で抗わなければ、波ひとつで ${you.name} は地面に崩れ、止まらない噴水になる。`,
        );
        await era.printAndWait('だがその波も、主人の肉棒の一突きにすぎない。');
        await era.printAndWait(
          `積み重なる快感で ${you.name} の全身の筋肉は締まり、喉まで名器と呼べるほどに狭まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'おお……！ この締め付けですわ！ 出ますわよ、ちゃんと受け止めてなさい！',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は ${you.name} の頭を強く押さえ、前後に激しく突き動かした。`,
        );
        await era.printAndWait(
          '普通の人間の体なら、こんな弄り方では命に関わるだろう。',
        );
        await era.printAndWait(
          `幸か不幸か、今の ${you.name} はウマ娘で、しかも特殊な改造を受けたウマ娘だ。`,
        );
        await era.printAndWait(
          `だからどれだけ乱暴でも、${you.name} の体は耐え、それをすべて快感へ変える。`,
        );
        await era.printAndWait(
          `窒息の苦しさまで、${you.name} の体が勝手に快感へ変え、やがて ${you.name} は自らその感覚を味わい始めた。`,
        );
        await era.printAndWait(
          `${you.name} の喉は主人の出入りに合わせて締めを変え続ける。まるで、ではなく、${you.name} の喉そのものが名器だ！`,
        );
        era.println();

        await tachyon.say_and_wait(
          '受け止めなさい。漏らしたら終わりですわよ。',
        );
        era.println();

        await era.printAndWait(
          '冷たい命令のあと、灼熱の白濁が滾って押し寄せた。',
        );
        await era.printAndWait(
          `膨大な量が ${you.name} の口も鼻も喉も舌も埋め、今にも溢れそうになる……`,
        );
        await era.printAndWait([
          `${you.name} は慌てて口いっぱいになった腥い液を飲み込んだが、その努力でも`,
          tachyon.uma_sex_title,
          `さまの恵みをすべて収めることはできなかった。`,
        ]);
        await era.printAndWait([
          `結局……${you.name} は無力なまま手で、`,
          tachyon.uma_sex_title,
          `さまの貴重な種汁を受け止めるしかなかった。`,
        ]);
        era.println();

        await era.printAndWait(
          'それでも、口の中で撃ち続ける太い砲身は止まらない。',
        );
        await era.printAndWait(
          `長い酸欠は、酸欠の快感を味わえる ${you.name} でも、頑丈なウマ娘の体でも完全には耐えきれず、やがて ${you.name} の意識は霞んでいった……`,
        );
        era.println();

        await era.printAndWait('「ドン！」');
        era.println();

        await era.printAndWait([
          'ふいに、鋭い痛みで ',
          you.get_colored_name(),
          ' は目を覚ました。',
        ]);
        await era.printAndWait(
          `${you.name} は思わず声を上げようとしたが、開いた喉へすぐまた白濁が注がれた。`,
        );
        await era.printAndWait([
          `${you.name} が顔を上げると、見えたのは担当`,
          tachyon.uma_sex_title,
          '兼主人の脚だった。',
        ]);
        await era.printAndWait(
          '自分が何より大切にし、自分の脚より大事にしてきた美しい足。',
        );
        await era.printAndWait(
          `それが今、情け容赦なく ${you.name} の腹を踏んでいる。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '性奴隷としての能力……完全に不合格ですわね。',
        );
        await tachyon.say_and_wait('もっとちゃんと調教しないと……');
        era.println();

        await era.printAndWait(
          `飲みきれなかった白濁が ${you.name} の全身に落ち、服も濃い液でまみれた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'せっかくの研究室をこんな有様に……ちっ、我慢なりませんわ。',
        );
        era.println();

        await era.printAndWait(
          `タキオンは厭わしげに言い、ふと何か思いついたように身をかがめ、${you.name} に囁いた。`,
        );
      } else {
        await tachyon.say_and_wait(
          'こんな薄い汁しか出せないなんて、この役立たずの器官に、まだ存在する意味がありますの？',
        );
        await tachyon.say_and_wait(
          'ねえモルモット君、私はあなたを満たせる他の雄を探した方がいいのかしら……今のあなたじゃ、いったい誰を満たせますの？',
        );
        era.println();

        await era.printAndWait(
          `その言葉を聞き、${you.name} は慌てて恋人兼主人さまへさらに真剣に奉仕し、見捨てないでと頼んだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は満足げに ${you.name} の頭を撫で、もっと勤勉に奉仕するよう促した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'そんなに捨てられるのが怖いですの？ いい子、いい子。',
        );
        await tachyon.say_and_wait(
          '安心なさい。他人に体を触らせるつもりもありませんわ……でも恋人なら、相手の性欲を満たすのも義務でしょう？',
        );
        era.println();

        await era.printAndWait(
          `優しい言葉とともに、${tachyon.sex}は ${you.name} の尻を叩いて合図した。`,
        );
        await era.printAndWait(
          `${you.name} はすぐ従順に主人に背を向け、自分を雌にした入口を自ら開いた。`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を、もう濡れた ${you.name} の穴へ深く満たした。`,
        );
        await era.printAndWait(
          `巨大な陰嚢が ${you.name} の丸い尻にぶつかり、重く温かい流動感が、穴の中へ噴き出す白濁の量を予告していた。`,
        );
        await era.printAndWait(
          `入った瞬間、${you.name} は堪らず甘い声を漏らし、後ろの主人は満足そうに息を吐いた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ふふ、性奴隷になっても、私たちの体はいちばん噛み合っていますわね。',
        );
        await tachyon.say_and_wait(
          '当然ですわ。モルモット君の体は私が改造したんですもの。全部、私の基準で調整してありますわ。',
        );
        era.println();

        await era.printAndWait('自分の体は、主人に合わせて改造された。');
        await era.printAndWait('自分は主人の専用性奴隷だ。');
        era.println();

        await era.printAndWait(
          `その考えで ${you.name} はますます興奮し、穴も思わず締まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ん……急にこんなに締めて。どうしましたの？ 今の話で興奮したんですの？ こんな状況でもこれほど感じるなんて、昔の私は優しさが足りず、あなたの願いを見逃していたようですわね。',
        );
        era.println();

        await era.printAndWait(
          `言い終わるころ、後ろの突きはますます強く激しくなり、${you.name} は察して腰を後ろへ合わせ、主人の褒美を迎えた。`,
        );
        era.println();

        await tachyon.say_and_wait('出ますわ……ちゃんと受け止めなさい！');
        era.println();

        await era.printAndWait(
          `${tachyon.sex}の手が ${you.name} の尻を強く叩き、肉が波打つ。${you.name} が堪らず漏らす喘ぎが、主人の興をさらに煽った。`,
        );
        await era.printAndWait(
          `最後、${you.name} の震えを伴う絶頂とともに、熱い肉柱が ${you.name} の体内へ濃い白濁を注いだ。`,
        );
        await era.printAndWait(
          `${you.name} は体内の満ち足りた感覚を抱えたまま、意識を闇へ落とした……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ねえねえ、溢れてばかりじゃありませんこと？ せっかくの研究室をこんなにして……',
        );
        era.println();

        await era.printAndWait(
          `主人の不機嫌な声を聞き、${you.name} は一瞬で目が覚めた。`,
        );
        await era.printAndWait(
          `床に自分が無駄にした主人の精を見て、${you.name} は慌て、いちばん無駄にしない方法を選ぶしかなかった……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'いい子、いい子。きちんと綺麗にするのがいい子ですわ。',
        );
        era.println();

        await era.printAndWait(
          `主人は床で子犬のように精を舐める ${you.name} を撫で、${you.name} は嬉しくてもっと熱心に舐めた。`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。`,
        );
      } else {
        await tachyon.say_and_wait('ええ……そうしましょう');
        await tachyon.say_and_wait(
          'いい子。十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。',
        );
      }
      await tachyon.say_and_wait(
        'もう片付いていれば、『ご褒美』をあげますわ。',
      );
      if (love < 75) {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい、性奴隷『君』～',
        );
      } else {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい～',
        );
        await tachyon.say_and_wait(
          'でも安心なさい。どちらにせよ、たっぷり可愛がってあげますわ❤️',
        );
      }
      era.println();

      await era.printAndWait(
        '言い終えると、タキオンはズボンを履いて研究室を出た。',
      );

      if (love < 75) {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、口角から白汁を流したまま、室内で力なく息をしていた。`,
        );
        await era.printAndWait(
          `ご褒美か、罰か……${you.name} は隅の掃除道具棚を見た。`,
        );
      } else {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、まだ白汁を噴きながら、力なく床を掃除していた。`,
        );
        await era.printAndWait(`ご褒美か、罰か……`);
      }
      await era.printAndWait('では、どう選ぶ？');
    };
    f.title = title;
    return f;
  })(),
  ws_punishment3: (() => {
    const title = '実験記録：孕袋と複数ウマ娘の体液研究';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk|false} child アグネスタキオンとプレイヤーの子。いなければ false
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_5 アグネスタキオンがフジキセキを呼ぶ名前
     * @param {PrintedSpan} call_9 アグネスタキオンがダイワスカーレットを呼ぶ名前
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名前
     * @param {PrintedSpan} call_36 アグネスタキオンがエアシャカールを呼ぶ名前
     * @param {PrintedSpan} call_94 アグネスタキオンがジャングルポケットを呼ぶ名前
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('ふんふんふん～～');
      era.println();

      await era.printAndWait(
        'アグネスタキオンは嬉しそうに鼻歌を口ずさみ、見慣れた廊下を歩いていた。',
      );
      await era.printAndWait(
        '普段、この階の廊下は奇妙な薬が吹き出す研究室のせいで生徒に敬遠されている……が、最近はまた少し人が戻ってきたらしい。',
      );
      await era.printAndWait(
        `だが${tachyon.sex}は自分の研究室を通り過ぎ、ある掃除道具棚の前で止まった。`,
      );
      era.println();

      await tachyon.say_and_wait([
        'ちっち……容赦ないですわね。一般的な',
        tachyon.uma_sex_title,
        'の性欲を、見くびっていたかしら。',
      ]);
      era.println();

      await era.printAndWait(
        `掃除道具棚の中には、目がとろんとし、口にボールギャグを填め、腹がぽっこり膨らみ、下の穴には二本の巨根が栓として刺さり、全身が愛液と精液にまみれ、正の字と下品な言葉を書き殴られた ${you.name} がいた。`,
      );
      era.println();

      await tachyon.say_and_wait('モルモット君？ 起きなさい。');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}は ${you.name} への呼び方で声を掛けたが、三日三晩弄ばれた ${you.name} の目はまだとろんとしており、答えようともがいても、視線は虚空を泳ぐだけだった。`,
      );
      era.println();

      await era.printAndWait([
        'これほど惨めな光景を見ても、',
        tachyon.get_colored_name(),
        ' に憐れみも同情もなかった。',
      ]);
      await era.printAndWait(
        `${tachyon.sex}は容赦なく足を上げ、${you.name} の腹を踏んだ。`,
      );
      await era.printAndWait(
        `踏まれた瞬間、${you.name} はエビのように体を縮めたが、それでもしっかりと踏みつけられた。もともと膨らんだ腹を踏まれた瞬間、強制的に空気を抜かれた風船のように、栓にしていた二本の按摩棒を下の口から噴き出し、続いて腹いっぱいの愛液と精液が溢れた。縮こまる ${you.name} は全身を震わせ、その短い間にまた一度絶頂し、短い肉棒からも薄い種汁が漏れた。`,
      );
      era.println();

      await tachyon.say_and_wait(
        'いい量ですわ。これならしばらく実験に足りますわね。',
      );
      era.println();

      await era.printAndWait([
        `タキオンは、噴水が爆発した瞬間に間に合わせて取り出したビーカーを嬉しそうに見た。中は今集めた`,
        tachyon.uma_sex_title,
        `の体液で満たされている。だがこの一杯では ${you.name} の穴から出た量の三分の一にも満たず、残りは床に飛び散り、掃除係の厄介になった。`,
      ]);
      await era.printAndWait('まあ、汚した者が掃除する。当然のことだ。');
      era.println();

      await tachyon.say_and_wait('モルモット君～今回の実験は大成功ですわよ～');
      era.println();

      await era.printAndWait(
        'タキオンは何事もなかったように、興奮して実験の話を分け与えた。',
      );
      await era.printAndWait(
        `だが……何事もなかった、というのは ${you.name} の甘い錯覚にすぎない。`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` は意外と隠れスケベですわ……${tachyon.sex}ならこんな遊びは断ると思っていたのに、結果は……`,
        ]);
        era.println();
        await era.printAndWait(
          `タキオンは猟犬の痕跡が残る ${you.name} の首から肩まで撫で、それから……手を下ろし、歯形だらけの乳房に触れた。乳首の歯形が特に目立っていた。`,
        );
        await era.printAndWait(
          `触れた瞬間、${you.name} はまた体を震わせた。少し撫でただけと頭の中の想像で、今の ${you.name} は絶頂してしまう。`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_94,
          ' も……最初はあんなに恥ずかしがっていたのに……',
        ]);
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は、まだボールギャグで塞がれ声も出せない ${you.name} の唇を弄んだ。少し腫れた両唇が、この数日どれほど苛まれたかをタキオンに教えていた。`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' の声は、研究室にいてもはっきり聞こえましたわ。',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '……ふふ、さすが私が目をかけた子。この方面でも一位ですわ。',
        ]);
        era.println();

        await era.printAndWait(
          'まだ確かめてはいないが、今入れたビーカーの中身の七割くらいは、スカーレット一人が出した分だろう。',
        );
        await era.printAndWait([
          `閨でも一位でなければ気が済まない意地のおかげで、${tachyon.sex}はこの三日、いちばん長く ${you.name} に跨り続けた`,
          tachyon.uma_sex_title,
          'だった',
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'それに、',
          call_5,
          ' も私の提案を受けて実験に付き合ってくれましたわ。ちっち、うちのモルモット君の顔は大きいですわね。寮長まで魔の手から逃げられませんわ。',
        ]);
        era.println();

        await era.printAndWait(
          'タキオンはモルモットの太もも内側を撫でた。正の字だらけの両脚。そのうち四行は特別な筆跡で、微かに光っている。芸人はいつも大げさだ。正の字を書くときも例外ではない。',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'ちっち。毎日論理だ論理だと言いながら、閨では理性を全部忘れますわね……',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          `タキオンは ${you.name} の菊穴に触れた。この数日こちらを腫れるまで突いた主因はシャカールの肉柱だ。本当にすべて合理的なら、生産の意味のない穴に出すのはいちばん論理に反する行為だろう。だがこの三日、${tachyon.sex}が休みなく耕す様子を見て、${you.name} は口に出す気にもなれなかった。もちろん、聞く暇もなかった。`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? 'パパ' : 'ママ';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '……さすが私の',
          child.sex_code === 1 ? '息子' : '娘',
          'ですわ。こんなに早く独学で『',
          callname_c,
          '』の穴を使っていますわね……まあ子供ですもの、独占欲が強いのも分かりますわ。',
        ]);
        era.println();

        await era.printAndWait([
          'タキオンは ',
          you.get_colored_name(),
          ' の尻を叩いた。そこには幼い字で『',
          callname_c,
          'は私専用の便器』と書いてある。この子は本当に意味を分かっているのか……タキオンがその一文を読み上げ、もし理解したうえで書いたのだとしたら……',
          you.get_colored_name(),
          ' はまた堪らず絶頂した。',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          'お腹の子が哀れですわ……母親がこんな誰にでも股を開く娼婦だなんて。私なら精液で溺れた方がマシですわ。',
        );
        era.println();

        await era.printAndWait(
          'タキオンはまた強く一踏みし、嘲りと侮蔑を込めて言った。',
        );
        era.println();
        await tachyon.say_and_wait(
          '喜びなさい。ウマ娘の体は頑丈ですわ。こう踏んでも傷つくのはあなただけで、お腹の子には何もありません……でもそんなこと、どうでもいいのでしょうね。肉棒さえあればいい娼婦さん。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} は反論したかったが、下から噴く潮がそれを許さなかった。`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        'こちらは、『かつて』あなたに恋慕していた子たちが残したものですわ。',
      );
      era.println();
      await era.printAndWait([
        `タキオンは ${you.name} の体に書かれた『雌犬』、『便器10円一回』、『`,
        tachyon.uma_sex_title,
        `さまの精便器』、『性愛ダービー18着』を撫でた。`,
      ]);
      await era.printAndWait([
        'どれも、憧れていたトレーナーが淫らな孕袋になったのを見て、愛が恨に、恨が欲に変わった',
        tachyon.uma_sex_title,
        'たちが残したものだ。',
      ]);
      era.println();
      await tachyon.say_and_wait('でも、気持ちよかったのでしょう？ ねえ？');
      era.println();
      await era.printAndWait('タキオンの顔に、嗜虐の笑みが広がった。');
      era.println();
      await tachyon.say_and_wait([
        'その浮かれた顔を見るに、字を書かれたとき、',
        tachyon.couple_title,
        'に一字一句読み上げさせたんじゃありませんこと？ ねえ？ 淫乱、駄犬、精液のためなら床に跪いて靴を舐める雌豚？',
      ]);
      era.println();
      await era.printAndWait(`一言ごとに、${you.name} の下から潮が湧いた。`);
      await era.printAndWait(
        `${you.name} がしようとした抵抗は、どれも見せかけの拒絶にしか見えなかった。`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('冗談ですわ。');
        era.println();
        await era.printAndWait(
          `ふいにタキオンは ${you.name} の顔を支え、${you.name} の口を塞いでいたボールギャグを優しく外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐いた。`,
        );
        era.println();
        await era.printAndWait(
          `目の前のタキオンの白衣を汚してしまい、${you.name} の顔は青ざめた。先の責めだけでなく、その不敬のせいでもあった。`,
        );
        era.println();

        await tachyon.say_and_wait('……大丈夫ですわ、モルモット君。');
        era.println();
        await era.printAndWait(
          `タキオンは吐瀉物のついていない袖で、${you.name} の口元を優しく拭った。`,
        );
        era.println();
        await tachyon.say_and_wait(
          '言いましたわよね。あなたを捨てたりしません。どんな姿になっても同じですわ。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} が反応する前に、${tachyon.sex}は ${you.name} の唇に口づけた。この数日どれほど苛まれ、どれだけの相手に汚され、今また何を吐いたかなど、構わずに。`,
        );
        await era.printAndWait('柔らかく、温かく、包み込むようなキス。');
        await era.printAndWait(
          `いつの間にか ${you.name} は、昔の日々に戻ったような気がした。`,
        );
        era.println();

        await era.printAndWait('……だが、それも『ような』だけだ。');
        era.println();

        await era.printAndWait(
          `${you.name} はタキオンの白衣の下で、ますます膨らむ膨らみを見て、自分の立場を思い出した。`,
        );
        await era.printAndWait(
          `タキオンも気づき、照れたように ${you.name} へ笑った。`,
        );
        era.println();

        await tachyon.say_and_wait('いいですの？ モルモット君？');
        era.println();

        await era.printAndWait(
          `${you.name} は答えず、ただ従順に地へ跪き、今日最初の奉仕を始めた。`,
        );
      } else {
        await tachyon.say_and_wait('これでまだ言い逃れするつもりですの？');
        era.println();

        await era.printAndWait(
          `タキオンは荒々しく ${you.name} のボールギャグを外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐き出そうとした。`,
        );
        await era.printAndWait('だが……');
        era.println();

        await tachyon.say_and_wait('何をするつもりですの、モルモット君。');
        era.println();

        await era.printAndWait('ああ、とっくに分かっていたはずだ。');
        await era.printAndWait(
          `${tachyon.sex}がわざわざギャグを外して楽をさせてくれるはずがない。`,
        );
        await era.printAndWait(
          `${you.name} が口を開いた瞬間、${tachyon.sex}の下の巨根が、吐き出そうとしたものも言葉もすべて塞いだ。`,
        );
        era.println();
        await tachyon.say_and_wait(
          'この数日は実験で忙しくて、私自身はまだ使っていませんでしたわ。',
        );
        era.println();
        await era.printAndWait(
          `淫らな匂いと、尿の気配すらする巨根が ${you.name} の喉を塞いだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は荒々しく ${you.name} の口と舌を使い、無機物のオナホールを扱うようだった。`,
        );
        await era.printAndWait('情はなく、ただ性欲を処理するためだけに使う。');
        era.println();
        await tachyon.say_and_wait(
          'ふう、出ますわ出ますわ。受け止めなさい。さもなくばあとで……まあいいわ。床を汚しても片付けるのはあなたですもの。',
        );
        era.println();
        await era.printAndWait(
          `タキオンは遠慮なく ${you.name} の口を満たすと、足を止めず研究室へ戻り、今日の研究を続けた。`,
        );
        await era.printAndWait(
          `今日最初の奉仕を終えた ${you.name} は虚ろな目で虚空を見つめ、いったい何がこうなるまで進んだのかを考えた。`,
        );
        await era.printAndWait(
          '……だが、そんな思考にも意味はない。改造手術のときに聞いた通り、もう戻れない。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は三日分溜まった白濁を懸命に飲み込み、自分が汚した廊下の床を見た……',
        ]);
        era.println();
        if ((await degeneration_to_evil('口で', '掃除道具で')) === 1) {
          await era.printAndWait(
            'どうせもう戻れない。なら思い切って理性を捨て、全部味わえばいい。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は地に跪き、三日分の ',
            you.get_colored_name(),
            ' が残した痕を舐めた。',
          ]);
          await era.printAndWait('理由は何だろう。');
          await era.printAndWait([
            tachyon.uma_sex_title,
            'さまに道具で掃除しているところを見られたら、もっと惨めになるから？',
          ]);
          await era.printAndWait(
            'この惨めさで、こんな暮らしから抜け出そうと自分を戒めるため？',
          );
          await era.printAndWait(
            'それとも……タキオンの言う通り、精液と肉棒のためなら体面も捨てて床を舐める下衆なのか？',
          );
          era.println();
          await era.printAndWait('そんな理由は、もうどうでもよかった。');
          await era.printAndWait([
            '地に伏せた ',
            you.get_colored_name(),
            ' の目に映り、耳に入り、口に乗るのは、床にも、自分の体にも、挿れる穴から流れ出る白濁の精だけだった。',
          ]);
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を拾わせた。',
          ]);
          await era.printAndWait([
            'では、今度はどの',
            tachyon.uma_sex_title,
            'さまが奉仕を要するのだろう。',
          ]);
          await era.printAndWait([
            'いつの間にか、',
            you.get_colored_name(),
            ' は自ら尻を上げ、次の賓客の使用を待っていた。',
          ]);
        } else {
          await era.printAndWait(
            '肉体は改造されても、せめて精神までは捨てられない。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はもがいて立ち上がった——',
            you.uma_sex_title,
            'の体でも、三日弄ばれたばかりの ',
            you.get_colored_name(),
            ' には辛い動作だ——掃除道具棚から、この数日 ',
            you.get_colored_name(),
            ' とさまざまな',
            tachyon.uma_sex_title,
            'の体液にまみれた掃除道具を取り出し、床に残した痕を拭いた。',
          ]);
          era.println();
          await era.printAndWait([
            '立ち上がっただけで足裏への刺激が、',
            you.get_colored_name(),
            ' を一度小さな絶頂へ連れていく。',
          ]);
          await era.printAndWait([
            '今も ',
            you.get_colored_name(),
            ' の穴と尻穴からは白濁と愛液の混じった粘液が流れ続け、',
            you.get_colored_name(),
            ' の掃除を邪魔する。',
          ]);
          await era.printAndWait(
            '先の丸い箒の柄を見て、その匂いを嗅いだだけで、五分しか空いていない穴をそれで満たしたくなる衝動が走る。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、箒と塵取りで無駄な掃除を続けた。',
          ]);
          await era.printAndWait(
            '自分は人間だ。ウマ娘でも、性奴隷でも、孕袋でもない。',
          );
          await era.printAndWait([
            'その意地は、まだ ',
            you.get_colored_name(),
            ' の胸に残っている。',
          ]);
          await era.printAndWait('だが……');
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を正確に捉えさせた。',
          ]);
          await era.printAndWait(
            '今日の使用者か。答えるまでもない。薬が漏れやすいこの廊下へ近づく理由など、それ以外に思いつかない。',
          );
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、聞こえないふりをして、人間としての誇りを守った。',
          ]);
          era.println();
          await era.printAndWait([
            '——————たとえそれが、五分後には ',
            you.get_colored_name(),
            ' 自身が自ら捨てるものだとしても。',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
   * @param {boolean} hentai 倒錯行為があるか（あれば身敗名裂エンド、なければ追放）
   * @param {boolean} has_plan Plan A または B を選んだか
   * @param {boolean} plan_b Plan B に入ったか
   */
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '下半身に拘りますの？ 馬鹿らしい理由ですわ……でも次にまた何かするつもりなら、私を訪ねなさい。あの瞳のよしみですわ。',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '可能性の彼方へ向かう夢すら、あなたの視界を埋められないんですの？ 愚か者でないなら、空前の野心家ですわね。',
          );
        } else {
          await tachyon.say_and_wait([
            '夢が潰えたあとの自棄ですの？ それとも、先を失った',
            tachyon.uma_sex_title,
            'から逃れるための方便？',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          'ごめんなさい、',
          callname,
          '。少し遊びすぎたようですわ……次はもっと慎重にしましょう。',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          'おやおや、今度はやりすぎましたわね、',
          callname,
          '……次は気をつけなさい。',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        'つまらないモルモットですわ……でも次にまた何かするつもりなら、私を訪ねなさい。あの瞳のよしみですわ。',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '私をこの道へ誘っておいて、ひとりで去りますの？ 限界の彼方は、結局ひとりで歩く道ですわね。',
        );
      } else {
        await tachyon.say_and_wait([
          '教訓にしておきなさい。次は、無用の人に拘らないこと……',
          tachyon.sex,
          'の先は、あなたの分まで見届けますわ。',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        'この実験が終わったら、あなたを訪ねますわ。それまでは、私からの長い休暇だと思ってなさい。',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        'おやおや、今度はやりすぎましたわね、',
        callname,
        '……次は気をつけなさい。',
      ]);
    }
  },
};
