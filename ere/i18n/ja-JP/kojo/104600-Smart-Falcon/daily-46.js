/**
 * @file スマートファルコン - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  good_morning(falcon, you, callname) {
    const buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`はぁ～朝って、ほんと眠いよね`);
          falcon.say('昨日のライブ、つい遅くまで歌っちゃったんだよ');
          falcon.say(`今日のトレーニング、ちょっと後ろにずらしてもいい？`);
          era.print([
            you.get_colored_name(),
            ` は、ファル子のまん丸い頭を自分の太ももに預け、ソファで少しでも楽に眠れるようにした`,
          ]);
        });
      } else {
        buffer.push(() => {
          falcon.say(
            `このくらい、${falcon.uma_sex_title}アイドルのファル子には問題ないよ⭐`,
          );
          era.print([
            '口ではそう言うのに、ふらつく体が本音を漏らしてしまい、仕方なく ',
            you.get_colored_name(),
            ' は',
            falcon.sex,
            'をソファで先に休ませることにした',
          ]);
        });
      }
    } else {
      buffer.push(
        () => {
          falcon.say(`${callname}、ファル子、準備ばっちりだよ！`);
          era.print(`腕を鳴らすファル子は、ずいぶん調子が良さそうだ`);
        },
        () => {
          falcon.say(
            'ダートを走るずっしり感、可愛いファル子とはちょっと合わないかも……',
          );
          falcon.say(
            `強いファル子も可愛い？ さすがファン1号の${callname}だね！ 日常のトレーニングでも、ファル子は輝いちゃうよ！`,
          );
          era.print(
            `迷いが晴れて、可愛い笑顔を取り戻したファル子は、再びトレーニングへの熱を燃やした`,
          );
        },
      );
      // 恋慕100の暗示
      if (era.get('love:46') === 100) {
        buffer.push(() => {
          falcon.say(`おはよう、大好き。今日は何するの？`);
          falcon.say(
            `アイドルでも、ただの小さな${falcon.uma_sex_title}でも、${callname}に出会えたおかげで、ふわふわしてた世界にも、だんだん手触りが出てきたんだよ`,
          );
          era.print(
            `朝から元気いっぱいの${falcon.name}が、${you.name}にあいさつした`,
          );
        });
      } else if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`${callname}、おはよう⭐`);
          falcon.say(
            `${falcon.uma_sex_title}アイドルのファル子、今日もキラキラ頑張るよ！`,
          );
          falcon.say(
            `だからファン1号の${callname}も、頑張ってるファル子をちゃんと見ててね！`,
          );
          era.print(
            `ファル子が${you.name}の周りではしゃぐ様子に、周囲の視線が集まった`,
          );
        });
      } else if (era.get('love:46') >= 50) {
        buffer.push(
          () => {
            falcon.say(`フラッシュさんって、歩いてる予定表みたいだよね`);
            falcon.say(
              `ファル子も${falcon.sex}みたいに、きちんと物事を片付けられたら、悩みも減るのに`,
            );
            era.print(`トレーナー室で、ファル子が${you.name}に話しかけた`);
          },
          () => {
            falcon.say(`アイドルの道って、ずっと辛さと痛みでいっぱいなんだよ`);
            falcon.say(
              'ファル子も、ときどき、このまま続けられるかわからなくなる',
            );
            era.print(
              `トレーナー室でファル子と雑談していると、${falcon.sex}は${you.name}に悩みを打ち明けた`,
            );
          },
        );
      } else {
        buffer.push(() => {
          falcon.say(`${callname}、おはよう！`);
          falcon.say(
            `昨日の夜、よく眠れた？ 今日も輝くファル子を見て、ちゃんと笑ってね`,
          );
          era.print(
            `トレセンへ向かう途中、${falcon.name}とばったり出会い、並んで歩くことになった。`,
          );
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   * @param {string} f_call_m スマートファルコンの駿川たづなへの呼び方
   */
  select(falcon, you, callname, f_call_m) {
    const buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      buffer.push(() => {
        falcon.say('んぅ、ちょっと疲れちゃったね。');
        falcon.say('気合い入れなきゃ！ ファル子はファンの期待に応えないと！');
        falcon.say('ファル子、頑張る！');
        era.print([
          '無理に気力を振り絞った ',
          falcon.get_colored_name(),
          ' が、少し疲れた顔で ',
          you.get_colored_name(),
          ' を見る',
        ]);
      });
    } else {
      buffer.push(
        () => {
          falcon.say(
            `ファンの期待に応えないなんて、合格な${falcon.uma_sex_title}アイドルじゃないよ！`,
          );
          falcon.say(`${callname}、今日のトレーニングメニューは？`);
          era.print(
            `早めにトレーナー室へ来た${falcon.name}が、${you.name}の指示を待っている。`,
          );
        },
        () => {
          falcon.say(
            `……ふぅ。体力も戻ったし、次はファル子のステージを待ってるファンのみんなに見せなきゃ。`,
          );
          falcon.say(
            `……え？ アイドル活動が長引いて門限に間に合いそうになかったから、今月${callname}はもう${f_call_m}に三回も叱られてるよ。`,
          );
          falcon.say(
            `む——そうなんだ。じゃあ今日のライブは、時間に気をつけないと！`,
          );
          era.print(
            `そのあと川辺で開いたゲリラライブは、またしても門限直前まで延びてしまった。`,
          );
        },
      );
      if (era.get('love:46') === 100) {
        buffer.push(() => {
          falcon.say(`${callname}に出会えて、本当によかった！`);
          falcon.say(
            `ファル子はまだアイドルの立場だけど……アイドルなら、ファン1号にちょっと特別なご褒美があってもいいよね`,
          );
          falcon.say(
            `${falcon.uma_sex_title}アイドルへの道、それでもファン1号の${you.adult_sex_title}と一緒に頑張りたいな`,
          );
          era.print(
            `ファル子は${you.name}がトレーナー室に入った瞬間、ぎゅっと抱きついた`,
          );
        });
      } else if (era.get('love:46') >= 90) {
        buffer.push(() => {
          falcon.say(`え？ ${callname}、どうしてここがわかったの。`);
          falcon.say(
            `……訊かなくてもいいか。${callname}なら、きっと来てくれるもん。`,
          );
          falcon.say(
            `……夢に見た大きなステージに、もう手が届いてるのに、なんでファル子、ちっとも楽しくないんだろ？`,
          );
          era.print(
            `いつもの元気な${falcon.name}とは別人みたいに、ファル子は迷いの中にいた。`,
          );
        });
      } else if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(
            `最近、街角ライブで会うファンが増えてきたよ。ファル子、トップアイドルへの道も遠くないかもね。`,
          );
          falcon.say(`……でも、${callname}なら、弱音吐いてもいいよね？`);
          falcon.say(
            `……動きを間違えたら、ファンのみんな、ファル子に失望しちゃうかな？`,
          );
          era.print(`迷いと、苦しさ。`);
        });
      } else if (era.get('love:46') >= 50) {
        buffer.push(
          () => {
            falcon.say(`${callname}！`);
            falcon.say(
              `ファル子、トレーナー室でトレーナーの${you.adult_sex_title}を待ってたよ！`,
            );
            falcon.say(`今日のトレーニングも頑張る！`);
            era.print(
              `思いついたらすぐ動く${falcon.name}は、今日も${you.name}の到着を待っていた。`,
            );
          },
          () => {
            falcon.say(`今日の汗は、明日いちばん輝く星になるよ。`);
            falcon.say(
              `ステージの真ん中に立てるトップアイドルになるには、ファル子、もっと頑張らないと！`,
            );
            falcon.say(`よし！ 今からトレーニング！`);
            era.print(
              `${falcon.name}はトレーニング場で${you.name}の指示を待っている。`,
            );
          },
        );
      } else {
        buffer.push(() => {
          falcon.say(`トレーニングのあとの休み時間、何しようかな？`);
          falcon.say(
            `アイドルのコツを勉強する？ それとも昨日覚えたステップを先に練習する？`,
          );
          falcon.say(
            `どっちがいいかな。うぅ～ファル子が二人に分かれればいいのに。`,
          );
          era.print(
            `トレーニング中に気が散っていたら、トップの${falcon.uma_sex_title}アイドルにはなれない。`,
          );
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   */
  select_after_recruit(falcon, you) {
    falcon.say(
      `いち、に、め・ざ・せ！ TOP UMAIDOL（トップ${falcon.uma_sex_title}ドル）⭐`,
    );
    falcon.say(
      `いちばん大きくていちばん輝くステージの真ん中へ、一気にスパート♪`,
    );
    falcon.say(`ファル子は、そういう${falcon.uma_sex_title}だよ！`);
    falcon.say(
      `今はまだ、どこにでもいる草の根アイドル。で・も、ファル子がステージの真ん中に立てば、観客のみんなの目を全部集められる！`,
    );
    falcon.say(`そしたらファル子のファンも、わーって一気に増えるはずだよ。`);
    falcon.say(
      `ファンが増えれば増えるほど、ファル子がトップ${falcon.uma_sex_title}ドルになる目標も、一気に叶っちゃう！`,
    );
    falcon.say(`ファン1号の${you.adult_sex_title}、これからもよろしくね⭐`);
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_study(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          'うぅ、ファル子、本を読むの苦手なんだよ。テストはフラッシュさんがくれた要点ノートで、前日に詰め込んでギリギリ滑り込みなんだ',
        ),
      () =>
        falcon.say_and_wait(
          `${falcon.uma_sex_title}アイドル史が試験科目なら、ファル子絶対満点取れるよ！ なんで出ないんだろ`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname}と一緒にこんな幸せな時間を過ごせるなんて、夢の泡にしては贅沢すぎるよ`,
          ),
        () =>
          falcon.say_and_wait(
            `えっ！ な……なんでもないよ⭐ やぁ！ やめて……ごめん、次から数学の教科書に漫画挟まない！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname}が教えてくれると、いちばん苦手な数学も、低空飛行から抜け出せそうだよ⭐`,
          ),
        () =>
          falcon.say_and_wait(
            `前はずっとフラッシュさんに教えてもらってたのに、今は自分のトレーナーさんに訊きなよって言うんだ。変だよね`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_prepare(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `髪型OK、勝負服OK、蹄鉄の形も問題なし！ 準備は全部できたよ！`,
        ),
      () =>
        falcon.say_and_wait(
          `次はファンのみんなに、ダートのトップアイドルってこういうことだよって見せちゃうよ！`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `絶対、絶対、大好き大好きな${callname}に、ファル子がスタートから勝つまでの一秒ずつ、ちゃんと見ててほしい！`,
          ),
        () =>
          falcon.say_and_wait(
            `迷ったり彷徨ったりしたあとでも、${callname}が支えてくれたからいちばん大きなステージに立てた。アイドルとしても${falcon.uma_sex_title}としても、${falcon.name}はこ～んなに（両手を広げて大きなハートを描く）好きだよ、${callname}！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `次はファル子の得意なダンスだよ。${callname}、ファル子のパフォーマンス、ちゃんと見ててね！`,
          ),
        () =>
          falcon.say_and_wait(
            `レースの準備って、まだちょっと緊張するね。でも${callname}がそばにいてくれて、本当によかった！`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async talk(falcon, callname) {
    const buffer = [];
    if (era.get('cflag:46:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:46:干劲')) {
        case -2:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `う——頭がくらくらする。違う！ 気合い入れなきゃ、ファル子頑張る！`,
              ),
            () =>
              falcon.say_and_wait(
                `もう一人でこんなに孤独でいたくない……な、なんでもないよ？ ファル子頑張る！`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `ファル子の顔、なんか付いてる？ え？ 顔色悪い？`,
              ),
            () =>
              falcon.say_and_wait(
                `今日の調子、あんまり良くないな。世界がぐるぐる回ってるみたい。あれ！ ${callname}、いつ来てたの？`,
              ),
          );
          break;
        case 0:
          buffer.push(() =>
            falcon.say_and_wait(`${callname}、ファル子の髪飾り、気になる？`),
          );
          break;
        case 1:
          buffer.push(
            () => falcon.say_and_wait(`なんだか今日、調子いいね♪`),
            () =>
              falcon.say_and_wait(
                `トップアイドルになるって決めたから、ダートだって前へ進むよ！`,
              ),
            () =>
              falcon.say_and_wait(
                `アイドルとして、ステージのパフォーマンスはレースよりやりすぎなくらいがいいんだよね。ゴールドシティさんに訊いてみよう……かな？`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `最強の${falcon.uma_sex_title}アイドル——${falcon.name}、参上♪ 今日こそこの気持ち、${callname}に届けるよ⭐`,
              ),
            () =>
              falcon.say_and_wait(
                `${callname}、可愛い${falcon.name}を追いかけないの？ 逃げないよ❤️`,
              ),
            () =>
              falcon.say_and_wait(
                `地平線の向こうには何があるかな～もちろんファル子の大ステージだよ！ 一緒にファル子のステージ、見に行かない？`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `万物が芽吹く季節は、今のファル子にぴったりだよ！ 春のファル子も、ぐんぐん育つはず！`,
          ),
        () =>
          falcon.say_and_wait(
            '土を割って出てくる小さな草を見てると、ファル子、なんでかすごく感動しちゃう！',
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `夏といえばビーチだよね。優しい潮風が暑さをさらって、波の湿った匂いが胸を高鳴らせるよ。早く砂浜に飛び込みたい！`,
          ),
        () =>
          falcon.say_and_wait(
            `夏なら、ファル子がみんなに涼しさと楽しさを届けるライブだよ！ 夏合宿のとき、ビーチで開くコンサートなら、もっと注目されるはず！`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `芸術の秋、食欲の秋……それから${falcon.uma_sex_title}アイドルの秋⭐ 紅葉の下でライブしよ！`,
          ),
        () =>
          falcon.say_and_wait(
            `${callname}、一緒に紅葉見に行かない？ 秋って、みんな物思いに沈む季節だって言うけど……ファル子はみんなを笑顔にするよ！`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `冬はファンのみんなも震えてるよね……だから${falcon.uma_sex_title}アイドルのファル子が、この暖かさを冬の手からファンの手へ返すよ！ 今からライブ行こ！`,
          ),
        () =>
          falcon.say_and_wait(
            `冬は温かいこたつの前に座って、みかんを食べながらテレビの芸人さんを見るのが似合うね。そうやって春を待つんだ。`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_gift(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      () => falcon.say_and_wait(`これ、ファル子に？ ありがとう！`),
      () =>
        falcon.say_and_wait(
          `ファンからのプレゼントをもらったなら、ん——はい、ファル子手作りの握手券だよ！`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${you.actual_name}がくれた贈り物より、${you.actual_name}の優しさが胸に染みるよ。だからこれからも、${callname}と一緒に過ごしたいな。`,
          ),
        () =>
          falcon.say_and_wait(
            `この贈り物で、${you.actual_name}の全身の愛と魂の重さが伝わってきたよ。だからファル子も、${falcon.name}として、${falcon.uma_sex_title}アイドルとして、全身の愛と魂をファン1号の${you.adult_sex_title}に贈るね。大好きだよ、${callname}！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `えっ！ ファン1号の${you.adult_sex_title}からのプレゼント！ ファル子、お返し考えなきゃ！`,
          ),
        () =>
          falcon.say_and_wait(
            `大好きなファン1号からの贈り物だから、ファル子、大切にしなきゃね～ん、ちゅ❤️ お返し、これでいい？`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_cook(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          'レシピどおりに作るより、ファル子、別のやり方も試してみたいんだ。よく失敗するけど……',
        ),
      () =>
        falcon.say_and_wait(
          `アイドルが、自分を慕ってくれるファン1号の${you.adult_sex_title}のために厨房に立つの、ファル子にとっても新鮮だよ`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `ファル子にとって、ずっと気にかけてくれる人のために料理できるのは、世界でいちばん幸せなことだよ。`,
          ),
        () =>
          falcon.say_and_wait(
            `${falcon.name}を本当にわかってくれる、大好きな${callname}のためにご飯を作るなら、何度だって愛情たっぷりに作るよ！ はい、${callname}、口開けて、あーん——`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `お母さんの台所ノート、今日はファル子が作る番だよ。ファン1号に、すっごく美味しいオムライスを作るから❤️`,
          ),
        () =>
          falcon.say_and_wait(
            `はい——味はどう……本当！ やった！ ファル子、いつも不器用だけど、${callname}が嬉しい顔してくれて、本当によかった！`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_rest(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `アイドルにとって休みも大事だよ！ だから${callname}も、ちゃんと息抜きして！`,
        ),
      () =>
        falcon.say_and_wait(
          `ときどきゴールドシティさんが羨ましいんだ。アイドルとして、ね`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `ずっと引っ越してきたファル子にとって、故郷って、すごく遠い言葉なんだよ。`,
          ),
        () =>
          falcon.say_and_wait(
            `小さい頃は引っ越しが多くて、友達も少なかったから、ちょっと内気だったんだ……街角ライブのアイドルに出会ってから、少しずつ明るくなれたよ`,
          ),
        () =>
          falcon.say_and_wait(
            `ファル子のキラキラきらめく世界の中で、${callname}がいちばん輝いて、いちばん大切な宝石だよ。だから${callname}、人生の道、ずっと一緒に歩いてくれる？`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname}の膝、座っていい？ ${callname}、いい匂いがするよ♪`,
          ),
        () =>
          falcon.say_and_wait(
            `ファル子、よくフラッシュさんに説教されるんだ～でも${callname}が勉強見てくれるようになってから、フラッシュさん、ちょっと安心した感じ？`,
          ),
        () =>
          falcon.say_and_wait(
            `ファル子、夜はだいたいアイドル関係の動画を見て、人気アイドルの真似して着飾るんだ。`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_game(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `ファル子、ゲームあんまり得意じゃないんだ……でも、音ゲーは別だよ⭐`,
        ),
      () =>
        falcon.say_and_wait(
          `そういえば最近、配信者さんがすごく人気だよね……え？ ${callname}、ファル子にも配信してほしいの？`,
        ),
      () => falcon.say_and_wait(`それなら、流行に乗らないわけにはいかないね！`),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () => falcon.say_and_wait(`えへへ⭐……${callname}の匂い、いいな♪`),
        () =>
          falcon.say_and_wait(
            `恋人同士で遊ぶゲームなら、ん……オーバークック、やってみる？`,
          ),
        () =>
          falcon.say_and_wait(
            `毎日15分だけ、${callname}とゲームしてるところを配信するのも悪くないね。そうしよ！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `ファル子、ノリノリのリズムに合わせて画面を叩くゲームは得意なんだ……えっ、${callname}、スマホ掲げて動画撮ってる？`,
          ),
        () =>
          falcon.say_and_wait(
            `そういえばギャルゲーって文字アドベンチャーとしても歴史が長いよね。${callname}も興味ある？`,
          ),
        () =>
          falcon.say_and_wait(
            `街角ライブで培った経験のおかげで、配信の人数もどんどん増えてるよ！`,
          ),
        () =>
          falcon.say_and_wait(
            `オンラインでもオフラインでも、トップアイドルのファル子はファンを平等に扱うよ！`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async s_a_tree_hollow(falcon) {
    const buffer = [
      () => falcon.say_and_wait(`数学、難しすぎ！ また補習だよ！`),
      () =>
        falcon.say_and_wait(
          `なんであの鈍感トレーナー、ファル子の合図、まだわかってくれないの！！！`,
        ),
      async () => {
        await falcon.say_and_wait(
          `……友達もたくさんできたし、自分のトレーナーさんもできたのに`,
        );
        await falcon.say_and_wait(`どうして、ときどきまだ怖いんだろ？`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async s_a_dating(falcon, callname) {
    const buffer = [
      () =>
        falcon.say_and_wait(
          `${falcon.name}流その一、ファンを待たせるアイドルは失格！ 次の目的地は？`,
        ),
      () =>
        falcon.say_and_wait(
          `味はどう、${callname}？ 今日のデートのために家庭科で練習した、${falcon.name}の愛情たっぷり弁当だよ！ たっぷりの愛情、伝わった？`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async school_rooftop(falcon, callname) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(
          `屋上で風を感じて……急に歌いたくなっちゃった⭐`,
        );
        await falcon.say_and_wait(`このあとウマツイに載せよ♪`);
      },
      async () => {
        await era.printAndWait(
          [
            falcon.get_colored_name(),
            '「もしいつか、ファンと',
            callname,
            'のあいだで選ばなきゃいけなくなったら……」',
          ],
          { color: falcon.color, fontSize: '0.75rem' },
        );
        await falcon.say_and_wait(`……ファル子、今なんにも言ってないよ⭐`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_r_fishing(falcon) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(`……！ すごい——こんな大きい魚、釣れるんだ。`);
        await era.printAndWait(
          `バケツの中でパタパタ暴れるフナを、隣に座ったファル子は一部始終見ていた。`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `序盤で先頭を争うときみたいに、ゲートが開くその瞬間を冷静に待つんだ。`,
        );
        await falcon.say_and_wait(`そして——こう！`);
        await era.printAndWait(
          `針にかかった欲張りな魚が、すごい力で水面から引き上げられ、バケツへすとんと落ちた。`,
        );
        await falcon.say_and_wait(`これがファル子流の釣り方だよ！`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_r_walking(falcon) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(`川辺の芝でライブさせてもらってるお礼だよ。`);
        await falcon.say_and_wait(
          `ファル子、休みのときはときどき高架下でボランティアしてるんだ。`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `そういえば逃げウマ姉妹のみんな、今なにやってるのかな？`,
        );
        await falcon.say_and_wait(`ファル子、気になる！`);
      },
      async () => {
        await falcon.say_and_wait(
          `マルゼン先輩は実力もあるし、優しく指導してくれるけど、なんか微妙に噛み合わない感じ？`,
        );
        await falcon.say_and_wait(
          `ファル子がマルゼン先輩の立場だったら……んぅ、ファル子の小さい頭じゃ、そんなプレッシャー耐えられないよ。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_arcade(falcon, you, callname) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(
          `${callname}、ファル子の活躍、ちゃんと見ててね！`,
        );
        await falcon.say_and_wait(
          `新しいことでも全力でいくよ。ファル子、頑張る♪`,
        );
        await era.printAndWait(
          `全パーフェクトの${falcon.name}と、かろうじて完走した自分を見て、${you.name}は黙り込んだ。`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `この記録を破れたら、もっとたくさんの人にファル子を知ってもらえるかも！`,
        );
        await era.printAndWait(
          `新記録の前で、${falcon.name}は妙なところで勝負欲に火がついた。`,
        );
      },
      async () => {
        await falcon.say_and_wait(`……やった！ ${callname}！`);
        await era.printAndWait(
          `クレーンゲームを緊張して見つめていた${falcon.name}は息を殺し、ぬいぐるみを掴むまで歓声で肩の力を抜かなかった`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   */
  async o_s_drawing(falcon, you, callname, hot_spring) {
    // 商店街のイベントでスマートファルコンが抽選券を一枚もらった
    // プレイヤーが自分で引くか、スマートファルコンに引かせるかを決める
    await you.say_as_passer_by_and_wait(
      `雑貨店の店主`,
      `どれどれ……ポスターにチラシ、うん……今回は空白の絵葉書も余分に買ってくれたな。`,
    );
    await you.say_as_passer_by_and_wait(
      `雑貨店の店主`,
      `揃ったよ。気をつけてな。`,
    );
    await falcon.say_and_wait(`はい⭐`);
    await you.say_as_passer_by_and_wait(
      `雑貨店の店主`,
      `ああ、そうだ。おまけの抽選券だ。`,
    );
    await era.printAndWait(
      `店主はにこにこと、${falcon.name}に抽選券を一枚渡した。`,
    );
    await you.say_as_passer_by_and_wait(
      `雑貨店の店主`,
      `入ってきた入口のほうで、あのおじいちゃんを探して、この券を渡せばいい。`,
    );
    await falcon.say_and_wait(
      `ありがとうございます。今日、ファル子のラッキーデーかも⭐`,
    );
    await you.say_as_passer_by_and_wait(
      `雑貨店の店主`,
      `ラッキー星の${falcon.adult_sex_title}、次も元気いっぱいでな。気をつけて。`,
    );
    await falcon.say_and_wait(`次の印刷も、ちょっとした景品も、お願いします⭐`);
    await era.printAndWait(
      `お土産をいっぱい抱えて、${falcon.name}がパタパタと${you.name}のそばへ来た。`,
    );
    await falcon.say_and_wait(`${callname}、次に買いたいものある？`);
    await era.printAndWait(
      `${you.name}は首を振り、${falcon.name}がしっかり握っている抽選券を見た。`,
    );
    await falcon.say_and_wait(`……じゃあ、${callname}に引いてもらお！`);
    await era.printAndWait(`ファル子は${you.name}を抽選機のそばへ押した`);
    era.printButton(`それなら`, 1);
    await era.input();
    if (hot_spring) {
      await you.say_as_passer_by_and_wait(
        `店主`,
        `特等賞、温泉旅行券！ おめでとう！`,
      );
      await era.printAndWait(
        `抽選機から落ちた桃色の玉を拾い上げ、店主は何度も見てから、大きな声で結果を告げた。`,
      );
      await era.printAndWait(`チリンチリン`);
      await falcon.say_and_wait(`え……`);
      await falcon.say_and_wait(`やっぱり今日はファル子のラッキーデーだね！`);
      era.printButton(`え？ 本当に当たった？`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `店主`,
        `この温泉旅行券に使用期限はないから、大事にしてくれよ。`,
      );
      await era.printAndWait(`店主は満面の笑みで、旅行券を二人に渡した。`);
      await falcon.say_and_wait(`これ、いつ使えばいいんだろ？`);
      era.printButton(`三年目が終わってから使おう！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `${callname}がそう言うなら、${callname}に任せるよ？`,
      );
      await falcon.say_and_wait(`ちゃんと大切にしてね！`);
      await era.printAndWait(
        `トレーナー室に戻り、${falcon.name}に見つめられながら、${you.name}はその温泉券を引き出しの奥へしまった。`,
      );
    } else {
      const buffer = [
        async () => {
          await you.say_as_passer_by_and_wait(`店主`, `四等賞、ティッシュ！`);
          await era.printAndWait(
            `抽選機から落ちた白い玉を見て、店主は手の鈴を鳴らす。`,
          );
          await falcon.say_and_wait(
            `……ティッシュか。大丈夫！ ファル子の笑顔を見て、元気出そう！`,
          );
          await era.printAndWait(
            `ファル子は精一杯場を盛り上げようとしたが、ティッシュではさすがに気が滅入る。`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(`店主`, `三等賞、人参一本！`);
          await era.printAndWait(
            `抽選機から落ちた黄色い玉をちらりと見て、店主は手の鈴を鳴らす。`,
          );
          await falcon.say_and_wait(`ん……この人参、マイクにぴったりかも。`);
          await era.printAndWait(
            `${falcon.name}は買い物袋からシールを一枚取り出し、人参に貼った。`,
          );
          await falcon.say_and_wait(
            `明日のステージ、よろしくね～人参の${you.adult_sex_title}！`,
          );
          era.printButton(`食べ物で遊ぶな！`, 1);
          await era.input();
          await falcon.say_and_wait(`む——ファル子は可愛いと思ったんだけど。`);
          await era.printAndWait(
            `今夜の副菜になるまで、人参は細い紐で${falcon.name}の腰に結ばれていた。`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(`店主`, `二等賞、人参どか盛り！`);
          await era.printAndWait(
            `抽選機から落ちた人参色の玉をちらりと見て、店主は手の鈴を鳴らす。`,
          );
          await era.printAndWait(
            `${you.name}は店主から人参の箱を受け取り、どう持ち帰るか悩んだ、そのとき。`,
          );
          await era.printAndWait(`小さな手が、難物を軽々と持ち上げた。`);
          await falcon.say_and_wait(
            `わ……思ったより人参が多い。半月は食べられそう。`,
          );
          await falcon.say_and_wait(
            `次のライブに来てくれたファンへのお土産にしよ！`,
          );
          era.printButton(
            `人参を立てて仮想観客にして、アイドル練習しよう！`,
            1,
          );
          await era.input();
          await falcon.say_and_wait(
            `え？ 仮想練習？ さすが${callname}、じゃあそうしよ。`,
          );
          await era.printAndWait(`その夜`);
          era.println();
          await falcon.say_and_wait(
            `逃げてもキラキラし続ける、${falcon.uma_sex_title}アイドル——${falcon.name}、参上♪`,
          );
          await you.say_as_passer_by_and_wait(
            `${you.name}と、立てて並べた人参たち`,
            `おおおおお！`,
          );
          await falcon.say_and_wait(
            `うんうん！ ファル子、みんなの熱、受け取ったよ！ じゃあ Let's go!`,
          );
          await you.say_as_passer_by_and_wait(
            `${you.name}と、立てて並べた人参たち`,
            `（応援棒を必死に振る）`,
          );
          await falcon.say_and_wait(
            `……こんなに熱いなんて思わなかった。ファル子、感動で泣きそう……よし！ ファンの期待に応えて、ファル子の本気、見せちゃうよ！`,
          );
          await era.printAndWait(
            `それから間もなく、真夜中のトレーナー室で人参が${falcon.uma_sex_title}になってライブする、という怪談が学園に広まった。`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(`店主`, `一等賞、人参バーガー！`);
          await era.printAndWait(
            `抽選機から落ちた赤い玉をそっと拾い、店主は手の鈴を鳴らす。`,
          );
          await falcon.say_and_wait(`え？ 人参バーガー……美味しそう！`);
          await falcon.say_and_wait(`運がいいね！`);
          await falcon.say_and_wait(`先にウマツイに載せよ！`);
          await era.printAndWait(
            `#商店街一等賞の景品が人参バーガー？！ #トレーナーさんとのおはなし が、すぐにトレンドを占めた。`,
          );
          await era.printAndWait(
            `そのあと、トレーナーまで一緒に写してしまったせいで大きな騒ぎになり、たづなさんに呼び出されてしっかり説教された。`,
          );
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_ktv(falcon, you, callname) {
    await falcon.say_and_wait(
      `${callname}、なに聞きたい？ ここの曲、ファル子全部歌えるよ⭐`,
    );
    await era.printAndWait(
      `ノリに入ったファル子を見て、${you.name}も黙ってサイリウムを掲げた。`,
    );
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_movie(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await falcon.say_and_wait(
          `『アイドルの悩み』、${callname}、これ一緒に見よ。`,
        );
        await era.printAndWait(
          `アイドルの男性芸能人がごく普通の${falcon.uma_sex_title}に想いを寄せ、何度合図しても${falcon.uma_sex_title}は動じない。男優があきらめかけたとき、${falcon.uma_sex_title}のほうから告白する。`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `『熱血！ アイドル奮闘記！』、面白そう！ ${callname}、一緒に見る？`,
        );
        await era.printAndWait(
          `草の根アイドルとして一人きりだった男優が、優しい${falcon.uma_sex_title}の世話で勇気を取り戻し、物語の最後、ずっと黙って支えてくれたその${falcon.uma_sex_title}に告白する`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `『白玉の詩』……たまには趣向を変えるのもいいね⭐`,
        );
        await era.printAndWait(
          `幸せに暮らす${falcon.uma_sex_title}が落ちぶれた孤独な詩人に一目惚れして猛アタックし、定まらない運命に翻弄されながら二人は流浪の日々を送る。クライマックス、大切な原稿を失って絶望した詩人が住処に火を放ち、${falcon.uma_sex_title}に救い出される`,
        );
        await era.printAndWait(
          `生死の境で、ようやく生きる勇気を得た詩人と${falcon.uma_sex_title}が、固く抱き合う。`,
        );
      },
    );
    if (era.get('love:46') === 100) {
      buffer.push(async () => {
        await falcon.say_and_wait(
          `『桜は散りやすく、今宵君を待つ』、${callname}、この映画見る？`,
        );
        await era.printAndWait(
          `${you.actual_name}と${falcon.name}は熱く映画を語り合い、二人の手はしっかり絡まっていた`,
        );
      });
    } else if (era.get('love:46') >= 50) {
      buffer.push(
        async () => {
          await falcon.say_and_wait(
            `『桃華月譚』、有名らしいよ。${callname}、一緒に見る？`,
          );
          await era.printAndWait(
            `意外なほど雅な空気と、男女の恋の物語に、二人はハンカチで涙を拭いた。`,
          );
        },
        async () => {
          await falcon.say_and_wait(
            `ファル子、実はどんな映画でもOKだよ。${callname}と一緒なら`,
          );
          await era.printAndWait(
            `${falcon.name}は目を輝かせて${you.name}を見ている`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  church_idol: (() => {
    const title = '巫女のバイト';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} darley ダーレーアラビアン
     * @param {CharaTalk} godolphin ゴドルフィンバルブ
     * @param {CharaTalk} byerley バイヤーズターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, darley, godolphin, byerley, you, callname) => {
      // 伝えられるところでは、三女神がこの地に降りたとき、ここの清水を啜った。それで山あいの小川は祝福を受けた
      // 古代の人々はその小川を囲んで神社を建て、参拝する人は事業や恋の成就を祈った
      // 宣伝するなら、なぜファル子はボランティアや巫女のバイトをしないのか？
      // こういう場所で活躍すれば、スマートファルコンの印象に残る人は多いはず
      darley.name = '優しい女神';
      godolphin.name = '叡智の女神';
      byerley.name = '厳格な女神';
      await era.printAndWait(`休みの日の午前。`);
      await era.printAndWait(
        `自分から神社にボランティアを申し込んだ${falcon.name}が、${you.name}の手を引いて神社へやってきた。`,
      );
      await falcon.say_and_wait(`おはよう⭐`);
      await falcon.say_and_wait(
        `——逃げてもキラキラ可愛い${falcon.uma_sex_title}、ファル子♪ 神社からのお招きでボランティアとして、後ろの名所をご紹介するよ。`,
      );
      await era.printAndWait(
        `巫女装束で一日ボランティアの${falcon.name}が、手の御幣を振る。`,
      );
      await falcon.say_and_wait(
        `それから！ ファル子、毎朝河岸の芝でライブしてるから、応援よろしくね♪`,
      );
      await era.printAndWait(
        `そう言いながら、${falcon.name}は腕を大きく振り、手の御幣が空に銀の線を描く。`,
      );
      await you.say_as_passer_by_and_wait(
        `観光客A`,
        `ボランティアの${falcon.adult_sex_title}、初めて来たんですけど、この神社の由来、教えてもらえますか？`,
      );
      await falcon.say_and_wait(
        `——そうだよ！ アイドルならファンの期待にちゃんと応えないと！`,
      );
      await falcon.say_and_wait(`ファル子、全力で答えるよ、${callname}！`);
      await era.printAndWait(
        `突然の元気な声に、初めて来た観光客は少し驚いたようだが、もっと多くの人が好奇心で近づいてくる。`,
      );
      await falcon.say_and_wait(
        `むかしむかし、この小川は今よりずっと大きかったんだ。`,
      );
      await falcon.say_and_wait(
        `ある日、世界中に${falcon.uma_sex_title}を生み出すために歩き続けていた三女神がここへ来て、${falcon.couple_title}は喉が渇いて小川のほとりへ寄った。`,
      );
      await falcon.say_and_wait(
        `この小川から生まれた神様が、${falcon.couple_title}を丁重にお迎えしたんだ。`,
      );
      await falcon.say_and_wait(
        `心からのもてなしに満足した三女神は、小川の神様に提案した。`,
      );
      await you.say_as_passer_by_and_wait(
        `三女神`,
        `私たちは${callname}の温かいおもてなしを受けました。どうか祝福をお受けください。`,
      );
      await falcon.say_and_wait(
        `神様は${falcon.couple_title}の好意を辞退したよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `小川の神`,
        `女神の祝福など恐れ多い。どうかその祝福を、この小川とともに生きる命たちへ。`,
      );
      await you.say_as_passer_by_and_wait(
        `小川の神`,
        `あの子たちのほうが、私よりずっと大切なのです。`,
      );
      await falcon.say_and_wait(
        `神様の無欲に心を動かされた三女神は願いを許し、祝福を小川へ移した。`,
      );
      await falcon.say_and_wait(
        `それから、この小川の水を飲んだ命たちは、三女神の祝福を受けたんだ。`,
      );
      await falcon.say_and_wait(
        `この無欲な神様を記念して、昔の人はこの小川を囲んで神社を建てた。環境が変わって、流れは池くらいまで小さくなったけど。`,
      );
      await falcon.say_and_wait(
        `それでも仕事や幸せを祈る人は、今も絶えないよ。`,
      );
      await falcon.say_and_wait(`以上、この神社の由来でした。`);
      await you.say_as_passer_by_and_wait(`観光客A`, `よし、もう一丁！`);
      await you.say_as_passer_by_and_wait(`観光客B`, `やっぱり？`);
      await you.say_as_passer_by_and_wait(`観光客C`, `言うまでもない！`);
      await era.printAndWait(
        `話に引き込まれた観光客たちが、いつの間にかファル子をぎゅうぎゅうに囲んでいた。`,
      );
      await falcon.say_and_wait(
        `みんな……こんなに熱いなんて！ ファル子もみんなの炎、受け取ったよ！`,
      );
      await falcon.say_and_wait(`それなら！ ${falcon.name}のゲリラライブ——`);
      era.printButton(`コホン。`, 1);
      await era.input();
      await falcon.say_and_wait(`え？ ${callname}？`);
      await era.printAndWait(
        `突然遮られた${falcon.name}が、驚いて${you.name}を見る。`,
      );
      era.printButton(`来た目的、忘れないで！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `——そうだ！ ファル子、毎朝河岸でゲリラライブしてるから、応援よろしくね♪`,
      );
      era.printButton(`ファル子！`, 1);
      await era.input();
      await falcon.say_and_wait(`えー`);
      await you.say_and_wait(
        `すみません、神社はこの可愛い${falcon.uma_sex_title}のすぐ後ろです。今出発しないと、前の列が長くなりますよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `観光客D`,
        `たしかに！ 急いで並ばないと、待ち時間がもっと長くなる！`,
      );
      await falcon.say_and_wait(`ファル子の案内についてきてね——`);
      await era.printAndWait(
        `集まってきた観光客は、${you.name}と${falcon.name}の誘導で長い列になった。`,
      );
      await era.printAndWait(`しばらくして`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `神主`,
        `${falcon.name}、それからトレーナーさん、お疲れさまでした。`,
      );
      await falcon.say_and_wait(`ファル子、すごく楽しかったよ⭐`);
      await you.say_as_passer_by_and_wait(
        `神主`,
        `ボランティアのお礼に、そうですね——`,
      );
      await era.printAndWait(`少し準備してから、彼は三女神の像へ祈り始めた。`);
      await you.say_as_passer_by_and_wait(
        `神主`,
        `美しく慈悲深き三女神よ、従者である私の言葉をお聞きください。`,
      );
      await era.printAndWait(
        `神主が三女神に祈るあいだ、二人は傍らで黙って返事を待った。`,
      );
      if (era.get('love:46') >= 75) {
        await you.say_as_passer_by_and_wait(`神主`, `……わかりました。`);
        await era.printAndWait(`儀式が終わり、神主は二人を見る。`);
        await you.say_as_passer_by_and_wait(
          `神主`,
          `三女神が、お二人へお言葉を残されています。`,
        );
        await falcon.say_and_wait(`え？`);
        await you.say_as_passer_by_and_wait(
          `神主`,
          `緊張なさらず。三女神は、ただ少し興味をお持ちなだけです。`,
        );
        await you.say_as_passer_by_and_wait(`神主`, `では、私の案内に従って……`);
        await era.printAndWait(`玄人の導きのもと、二人は目を閉じた。`);
        const buffer = [
          () => darley.say_and_wait('……強い子だこと'),
          () =>
            godolphin.say_and_wait(
              '可愛い子よ、何もかも自分一人で背負わぬように',
            ),
          () =>
            byerley.say_and_wait(
              'すべての問いの果て、それはエデンの中にある。止まらず走れ',
            ),
        ];
        await get_random_entry(buffer)();
        await era.printAndWait(`チリンチリンチリン`);
        await era.printAndWait(`三女神の囁きが聞こえた気がした。`);
        await falcon.say_and_wait(`……ファル子、もう十分幸せだよ。`);
        await era.printAndWait(
          `予想と違い、ファル子は憂いを帯びた顔をしていた。`,
        );
        await falcon.say_and_wait(`${callname}は、どんなお願いをしたの⭐`);
        await era.printAndWait(
          `憂いはすぐに${falcon.teen_sex_title}の笑顔に隠れた。`,
        );
      } else {
        await you.say_as_passer_by_and_wait(`神主`, `……わかりました。`);
        await era.printAndWait(
          `儀式が終わり、神主は懐からお札を一枚取り出した。`,
        );
        await you.say_as_passer_by_and_wait(`神主`, `つまらないものですが。`);
        await era.printAndWait([
          falcon.get_colored_name(),
          '/',
          you.get_colored_name(),
          '「',
          { content: 'どうも', color: falcon.color },
          'ありがとうございます！」',
        ]);
        await you.say_as_passer_by_and_wait(
          `神主`,
          `お二人の仲がもっと深まった折には、またこちらへお越しください。どうか、それぞれの目標が叶いますように。`,
        );
        await era.printAndWait(
          `トレーナー室に戻ると、${you.name}は${falcon.name}との距離が少し縮まった気がした。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(falcon, you) {
    const buffer = [
      async () => {
        await you.say_as_passer_by_and_wait(
          `店員`,
          `お待たせしました、フルーツパフェ二つです。`,
        );
        await falcon.say_and_wait(`思ったより美味しいね。`);
      },
      async () => {
        await falcon.say_and_wait(`ファル子、これだけで十分だよ！`);
        await era.printAndWait(
          `${falcon.name}の前にあるのは、少量の人参と野菜だけだった。`,
        );
        await you.say_and_wait(`……そんなに少なくて足りる？`);
        await falcon.say_and_wait(`最近、つい予算オーバーしちゃって……`);
        await era.printAndWait(`${you.name}たちはメニューのピザセットを見た。`);
        await you.say_and_wait(`一枚頼む？ おごるよ。`);
        await falcon.say_and_wait(`ありがとう⭐`);
        await era.printAndWait(
          `翌日の体重測定で二キロ増えて慌てふためく${falcon.name}は、意外と可愛かった。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_s_dating(falcon) {
    const buffer = [
      async () => {
        await era.printAndWait(
          `アイドルとファンのデートなんて、怒ったファンに炎上されるだろ？`,
        );
        await falcon.say_and_wait(
          `トレーナーと担当${falcon.uma_sex_title}の、すごく健全な関係だよ！`,
        );
        await era.printAndWait(`気持ちは微妙だ。`);
      },
      async () => {
        await era.printAndWait(
          `${falcon.name}は現役アイドルだ。こんなふうに誰かとデートしたら。`,
        );
        await falcon.say_and_wait(`気づかれてないみたい。`);
        await era.printAndWait(
          `芝を走る${falcon.uma_sex_title}に比べれば、ダートのアイドルは観客の視線から遠いのだろう。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_s_shopping(falcon) {
    const buffer = [
      async () => {
        await era.printAndWait(
          `モールをぶらついていると、${falcon.uma_sex_title}グッズの店の前を通った。`,
        );
        await falcon.say_and_wait(
          `ファル子のグッズ、先週よりちょっと増えてる♪`,
        );
        await era.printAndWait(
          `ダートテーマの棚には、${falcon.name}のぬいぐるみがずらりと並んでいた。`,
        );
      },
      async () => {
        await falcon.say_and_wait(`さん、に、いち、はい♪`);
        await falcon.say_and_wait(
          `トレーナーさんと一緒のモール散策♪ ん——この写真、投稿しないほうがいいかな。`,
        );
        await era.printAndWait(
          `（自分では）炎上を一つ回避できた。めでたしめでたし。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
};
