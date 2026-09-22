/**
 * @file アグネスタキオン - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-a'),
  ...require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-b'),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
   * @param {number} rel アグネスタキオンのプレイヤーへの好感度
   * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
   * @param {number} moti アグネスタキオンのやる気
   * @param {number} stmn_rat アグネスタキオンの体力割合
   */
  async train(tachyon, you, callname, call_25, rel, love, moti, stmn_rat) {
    const buffer = [];
    if (love >= 90 && rel > 75 && stmn_rat > 0.45) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '行きましょう行きましょう、',
            callname,
            '～～今日の実験、早く始めるですわ',
          ]);
          await tachyon.say_and_wait(
            '……それとも、ダーリンって呼ばれたいのかしら❤️',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            '調子がいい？ フフ、',
            callname,
            ' と一緒なら、どの日も私の調子は同じように上々ですわ',
          ]);
          await tachyon.say_and_wait(
            '……もちろん、別の意味での調子も、ですわね❤️',
          );
        },
      );
      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            callname,
            '～～今日のトレーニング、手を抜いてはいけませんわよ',
          ]);
          await tachyon.say_and_wait(
            'なぜですって？ まったく……基礎的な生物学すらご存じないの？',
          );
          await tachyon.say_and_wait(
            '母体の鍛錬が足りなければ、後代の健康に響きますわ❤',
          );
          await tachyon.say_and_wait(
            '妊活のためですもの、手加減なんて許しませんわよ、お父様❤',
          );
        });
      }
    } else if (love >= 75 && rel > 75 && (moti >= 0 || stmn_rat > 0.45)) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '……ひとつ、考えごとをしていますの',
              ]);
              await tachyon.say_and_wait([
                '最近のトレーニング、',
                callname,
                ' に見られていると思っただけで、妙に力が湧くのですわ',
              ]);
              await tachyon.say_and_wait(
                'ふむ……愛情の影響、ですかしら。研究テーマとして悪くないですわね。次は愛情表現の変数を変えて、トレーニング成果の差を見てみましょう',
              );
            },
            async () => {
              await tachyon.say_and_wait([
                'こういう言い方がありますわ。トレーナーとは',
                tachyon.uma_sex_title,
                'を『馴らす』存在——だから「馴」は馬偏、だから「馴」と「訓」の響きが近い、と',
              ]);
              await tachyon.say_and_wait([
                'そうであるなら、この私を馴らしたモルモット君は、今日、私に何をさせたいのですかしら❤',
              ]);
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait(
                'あらあら～～調子の悪い恋人の身体を、無理に使って悦ぶおつもり？',
              );
              await tachyon.say_and_wait([
                '……',
                callname,
                '、そんな人だったなんて……しくしく……',
              ]);
              await tachyon.say_and_wait(
                'ちっ、冗談ですわ。真に受けないでくださいまし……ただし、もう少し過激な遊びがお望みなら、私は構いませんわよ❤',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                'トレーニング？ 実験のほうが有意義ですわ……今日の分も終わっていないのに、何を急ぐの',
              );
              await tachyon.say_and_wait(
                'あら？ 遠慮はなし、ですって？ フフ、なら手段はお好きに。拝見しますわ',
              );
              await tachyon.say_and_wait(
                'ちょっと……お姫様抱っこなんて……恥ずかしいですわ……',
              );
            },
          );
        }
      } else if (moti >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              'ふぅ……たまには本気で汗をかくのも悪くないですわ。休み？ この調子で休むなんて、もったいなすぎますわよ。',
            );
            await tachyon.say_and_wait([
              'ちょっと、',
              callname,
              '、何を……嗅がないで……今、臭いですわ……',
            ]);
            await tachyon.say_and_wait(
              'わ、わかりましたわ……戻って休みます。だから嗅がないで……',
            );
            await tachyon.say_and_wait([
              '続けていい、ですって！？ ',
              callname,
              '、あなた……本当に変態ですわね',
            ]);
            await tachyon.say_and_wait(
              'まったく。それで興奮してしまう私も、変態で確定ですわ❤',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '体力が持たない、休みが必要、ですって？',
            );
            await tachyon.say_and_wait(
              '……それもこれも、数日前の誰かのせいですわ……腰が、今でも痛いんですもの……',
            );
            await tachyon.say_and_wait(
              'ちょっと！ ……まったく、腰が痛いのは比喩ですわよ……大騒ぎしないで……そんなに心配、ですの❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('はあ……はあ……');
            await tachyon.say_and_wait(
              'なんでもありませんわ。スタミナ切れだなんて、まだ先の話ですわよ！',
            );
            await tachyon.say_and_wait([
              'ただし……本当に限界なら、『精』力の補充をお願いしますわね、',
              callname,
              '❤️',
            ]);
          },
        );
      }
    } else if (rel > 225 && (moti >= 0 || stmn_rat > 0.45)) {
      if (moti >= 0) {
        if (stmn_rat > 0.45) {
          buffer.push(
            () =>
              tachyon.say_and_wait(
                '早く早く！ 時間は待ってくれませんわ！ 今日の実験データ、論文なら五本は水増しできますわよ！ これで二ヶ月分の研究費は安心ですわ！',
              ),
            async () => {
              await tachyon.say_and_wait([
                'トレーニング？ 構いませんわ。ただし条件があります。',
                callname,
                '、今日はあなたも併走しなさいな？',
              ]);
              await tachyon.say_and_wait([
                '大丈夫大丈夫、今のあなたの身体能力なら、短時間の爆発なら',
                tachyon.uma_sex_title,
                'に負けない速度も出せますわ……',
              ]);
              await tachyon.say_and_wait(
                '大丈夫大丈夫。ええ、短時間なら、だいたい……五秒以内、かしら？',
              );
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                'トレーニング？ またグラウンドを走るんですの……ねえ、',
                callname,
                '、もっと面白いメニューはありませんの？',
              ]);
              await tachyon.say_and_wait(
                'たとえば……薬剤ロシアンルーレット？ 先に効果不明の薬を五本ずつ飲んでからレース、ですわ',
              );
              await tachyon.say_and_wait([
                'まず付き合ってくれる',
                tachyon.uma_sex_title,
                'を探す、ですって？ ',
                call_25,
                '……あら、ダメですの？',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                'ねえ ',
                callname,
                '、冷静に分析しましょう。毎日こうして鍛える効率は、本当に研究より高いですの？',
              ]);
              await tachyon.say_and_wait(
                'なんですって？ 私のスペシャルイベント、一度で+5程度。トレーニングと比べる自信はどこから？',
              );
              await tachyon.say_and_wait([
                'いいえ待って、',
                callname,
                '、何を言っているの……聞き取れませんわ……',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                'はぁ……トレーニング、面倒ですわ。走りたいならあなたが走ればいいじゃない',
              );
              await tachyon.say_and_wait([
                'いい子いい子、ですって……ねえ ',
                callname,
                '、私を子ども扱いしていますの？',
              ]);
              await tachyon.say_and_wait(
                'まあ……たまには走ってみるのも、悪いことではない、かもしれませんわ。',
              );
            },
          );
        }
      } else if (stmn_rat > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '……光が見えますわ……もっと、もっと努力すれば追いつける……すぐ先に……',
            ]),
          async () => {
            await tachyon.say_and_wait([
              callname,
              '……薬を……早く……もう持ちませんわ……',
            ]);
            await tachyon.say_and_wait(
              'ああ、そうですそうです、これですこれ。これなしでは生きていけませんわ……',
            );
            await tachyon.say_and_wait(
              'あら？ 口調がおかしい？ ただの栄養剤ですわよ。何がおかしいの。キマってる、ですって？ 頭の中がそういうもので埋まっている人だけが、変な想像をするのですわ',
            );
          },
        );
      }
    } else if (rel > 75) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            () => tachyon.say_and_wait([callname, '！ 研究を始めますわよ！']),
            () =>
              tachyon.say_and_wait(
                '調子は絶好調！ 今日はプランク時間に匹敵する記録が出ますわ！',
              ),
            () =>
              tachyon.say_and_wait(
                '光速を超えるまで！ 可能性の彼方へ至るまで！',
              ),
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait('……退屈ですわね');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は独りごちた。',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                callname,
                '……実験に閃きは不可欠ですわ。成功は努力99%と閃き1%——ですが1%の閃きがなければ、99%でも99.99%でも同じように無意味。わかりますわね？',
              ]);
              await tachyon.say_and_wait(
                'いいえ、トレーニングをサボるために言っているのではありません。事実を述べているだけですわ、',
              );
              await tachyon.say_and_wait(
                'ただ、あなたがそう切り出した以上、代入して考えてみてもいいですわね。なので今日のトレーニングは……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' は首を横に振った',
              ]);
              await tachyon.say_and_wait('ちっ');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は舌打ちした',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                'トレーニング？ 今日の実験も終わっていないのに？ はぁ……いいですわ、実験が済んだら行きます',
              );
              await era.printAndWait([
                '結局、',
                tachyon.get_colored_name(),
                ' がトレーニングに来るまで ',
                you.get_colored_name(),
                ' は丸三時間待たされ、陽が沈んでから',
                tachyon.sex,
                'はようやくトレーニング場に現れた',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'はあはあ……体力？ 問題ありませんわ。今日こそ突破してみせます……はあ、はあ……',
            ),
          () =>
            tachyon.say_and_wait(
              '限界まで……体力の限界でこそ、本物の突破が見えるのですわ！',
            ),
          () =>
            tachyon.say_and_wait(
              '理性は休めと命じるのに、感性はどうしても止めたくない……幸せな悩みですわ、ハハハハ！',
            ),
        );
      }
    } else if (stmn_rat > 0.45) {
      if (moti >= 0) {
        buffer.push(
          () => tachyon.say_and_wait('では、実験を始めますわ。'),
          () =>
            tachyon.say_and_wait(
              '早く。実験データの記録を準備して。気を散らさないでくださいまし。',
            ),
          async () => {
            await tachyon.say_and_wait('ふん……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は何も言わない。だが ',
              you.get_colored_name(),
              ' には、',
              tachyon.sex,
              'から溢れるやる気が見て取れた。',
            ]);
          },
        );
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '何を悠長にしているの。早く実験データの記録を。しくじったら皮を剥ぎますわよ。',
            ),
          () =>
            tachyon.say_and_wait(
              '方向を誤った、ですの……なぜ……体力は十分あるのに、限界を超える自信だけがない……',
            ),
          async () => {
            await tachyon.say_and_wait(
              '……最近、あなたの提案する実験、ますます退屈ですわね',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は危険な目で ',
              you.get_colored_name(),
              ' を見た。',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……実験を始めますわ。');
          await tachyon.say_and_wait(
            '疲れ？ そんなものありませんわ。予感がありますの。今度こそ、今度こそ壁を破れる……',
          );
        },
        () => tachyon.say_and_wait('もっと速く……くっ……身体が……動かない……'),
        async () => {
          await tachyon.say_and_wait(
            '冗談じゃありませんわ……限界突破の第一条件は、まず限界に達すること。',
          );
          await tachyon.say_and_wait(
            'まだ速く。限界にすら届かないなら……超越など、語る資格もありませんわ……！',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 恋慕が熱恋以上、好感が好意以上、体力>45%、やる気高、30%で発動
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async train_kiss(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      '、今日は珍しくやる気が出てトレーニングしたい気分ですの。こんな愛馬に、ご褒美の一つもないのはおかしいと思いませんこと？',
    ]);
    await tachyon.say_and_wait(
      '……トレーニングが終わってから？ そんなに待てませんわ',
    );
    await tachyon.say_and_wait('ん……くちゅ……ちゅる……ちゅぽ……ちゅ……ちゅく');
    await tachyon.say_and_wait(
      'ふぅ……とりあえず合格にしておきますわ。続きは、トレーニングが終わってから❤️',
    );
  },
  /**
   * 恋慕が熱恋以上、好感が好意以上、体力>45%、やる気低、30%で発動
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async train_sex(tachyon, you) {
    await tachyon.say_and_wait(
      'トレーニング？ ええ……今日の薬を飲んでからですわ',
    );
    await tachyon.say_and_wait(
      '全身が熱い？ 意識が霞む？ 大丈夫大丈夫、正常な反応ですわ',
    );
    await tachyon.say_and_wait('ふん……頃合いは、もう来ていますわね、');
    await tachyon.say_and_wait(
      '今日の薬は、雌性ホルモン・雄性ホルモン・コルチゾール・成長ホルモン・バソプレシンを平均以上に引き上げるもの。通俗に言えば、媚薬ですわ❤️',
    );
    await tachyon.say_and_wait('トレーニングなど、終わってからで結構ですわ❤️');
    era.printButton('ここは下半身の声に従う……', 1);
    era.printButton('「ふざけるな、早くトレーニングへ！」', 2, {
      disabled: era.get('talent:0:钢之意志') > 0,
    });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の誘惑に負け、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'を実験室の小さなベッドへ押し倒した……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は学んだ鋼の意志で誘惑を押し切った',
      ]);
      await tachyon.say_and_wait('そんなことが、できるんですの！？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は突っ込む ',
        tachyon.get_colored_name(),
        ' を無視して、',
        tachyon.sex,
        'を無理くりトレーニング場へ担いでいった。',
      ]);
    }
    return ret;
  },
  tr_help_tyr: (() => {
    const title = '悪に手を貸す（？）';
    /**
     * 好感が熱意以上、やる気中〜高、体力<45%、25%で発動、周回あたり1回
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, c_call_t) => {
      await tachyon.say_and_wait([
        callname,
        '、なぜ自分が',
        tachyon.uma_sex_title,
        'の力に勝てるとお思いですの？',
      ]);
      era.println();
      await era.printAndWait([
        '実験室内、',
        tachyon.get_colored_name(),
        ' は面白がるように言った',
      ]);
      await era.printAndWait('口調は悠然として、絶対の自信を滲ませている');
      await era.printAndWait('種族の差、天賦の差が与えた自信だ');
      era.println();
      await tachyon.say_and_wait(
        'もうおわかりでしょう。これが私たちの差。ですから、できれば……',
      );
      era.println();
      await era.printAndWait([
        'いくら力を込めても微動だにしない身体。あれほど華奢な体躯なのに——それが',
        tachyon.uma_sex_title,
        'という生物の不思議さだ',
      ]);
      !you.race &&
        (await era.printAndWait('だが……人間である以上、矜持というものもある'));
      era.println();
      await tachyon.say_and_wait(
        'おや？ まだ余力がありますの？ フフ、粘りだけは認めてあげますわ。ただし、褒めて差し上げられるのはそこまでですわよ',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の徒労を嘲笑う。だが飽きやすい',
        tachyon.sex,
        'にとって、',
        you.get_colored_name(),
        ' が同じ徒労を繰り返す様も、もう退屈になりつつあった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……抗うのはやめなさい。わかっているはずですわ。この抗い、徒労にすぎないことを。ええ……',
      ]);
      era.println();
      await era.printAndWait([
        'ああ、',
        tachyon.sex,
        'は、あらゆるトレーナーを奈落へ落とすに足る宣告を放った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'いくら引っ張っても、私は絶対にトレーニングへは行きませんわ',
      );
      era.println();
      await era.printAndWait('つまり、そういうことだ');
      await era.printAndWait([
        'トレーニングを拒む ',
        tachyon.get_colored_name(),
        ' と、今日こそはと食い下がる ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '椅子にしがみついて ',
        you.get_colored_name(),
        ' に引き抜かれまいとする者と、腰を掴んで実験机から引き剥がそうとする ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        'そう、二人のあいだで繰り広げられる、退屈極まりない引っ張り合いだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、諦めなさい。人間にできるはずが……痛っ！？',
      ]);
      era.println();
      await era.printAndWait([
        '調子に乗った',
        tachyon.sex,
        'は、忘れていたらしい。',
        tachyon.sex,
        'の改造のおかげで、',
        you.get_colored_name(),
        ' はもう',
        tachyon.uma_sex_title,
        'と同等とはいかずとも、七八割の力を持っていることを',
      ]);
      await era.printAndWait([
        'その怪力に、',
        tachyon.get_colored_name(),
        ' の傲慢と油断が重なり、',
        you.get_colored_name(),
        ' はあっさり ',
        tachyon.get_colored_name(),
        ' の下半身を根こそぎ抱き上げた。残ったのは実験台にしがみつく',
        tachyon.sex,
        'の両手だけだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'ま……まだあなたを甘く見ていたようですわ、',
        callname,
        '……ですが、この油断は二度とありませんわ。両手だけで実験台を掴んでいても、このアグネスタキオンは実験室内では無敵ですわ！ くふふ……くハハハハハハ！ ……うわっ！？',
      ]);
      era.println();
      await era.printAndWait([
        'この退屈な戦争がまだ十〜二十分は続くと思った、まさにそのとき、奇妙なことが起きた',
      ]);
      await era.printAndWait([
        '未知の力に憑かれたように、',
        tachyon.get_colored_name(),
        ' にとって実験台全体が突然マグマのように灼熱し、',
        tachyon.sex,
        'は手を離さざるを得なかった',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は揃って倒れ込んだ。',
        tachyon.get_colored_name(),
        ' は起き上がると慌てて手を確かめたが、焦げ跡ひとつない。錯覚だったかのようだ',
      ]);
      era.println();
      await coffee.say_and_wait([
        '……早く ',
        c_call_t,
        ' を連れていって……',
        tachyon.sex,
        '、うるさい……',
      ]);
      era.println();
      await era.printAndWait([
        '口を開いたのは、',
        tachyon.get_colored_name(),
        ' と同じ空き教室を使う、霊異系の黒鹿毛の',
        tachyon.uma_sex_title,
        '、',
        coffee.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        '相手がどうやって ',
        tachyon.get_colored_name(),
        ' の手を離させたのかはわからない。だが、',
        tachyon.sex,
        'がまた実験室に居座る隙を与えぬよう、',
        you.get_colored_name(),
        ' は礼も後回しに ',
        tachyon.get_colored_name(),
        ' を掴んでトレーニング場へ急いだ',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tr_incm_cmb: (() => {
    const title = '不完全燃焼';
    /**
     * やる気低、体力<45%、男T×ウマ娘
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('今日の目標は……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は心配そうに ',
        tachyon.get_colored_name(),
        ' の様子を見た',
      ]);
      await era.printAndWait([
        '今日も',
        tachyon.sex,
        'は限界突破のための実験——言い換えれば、トレーニング——を続けている',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'の体力が十分で、調子だけが悪いなら、',
        you.get_colored_name(),
        ' は心を鬼にして実験へ押しやるだろう。厳しさも、時には必要だからだ',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'の体力が足りなくても、調子がやけに良いなら、',
        you.get_colored_name(),
        ' は考えた末、',
        tachyon.sex,
        'に鍛錬を続けさせるだろう、',
      ]);
      await era.printAndWait([
        '先輩トレーナーたちも言っていた。',
        tachyon.uma_sex_title,
        'の心に寄り添うことこそ、トレーナーの最も大切な仕事だと',
      ]);
      await era.printAndWait('だが……');
      era.println();
      era.print([
        '体力が明らかに持たず、意識も上の空な',
        tachyon.sex,
        'に、',
        you.get_colored_name(),
        ' は本当に鬼になれるのか？',
      ]);
      era.printButton('「……続けよう」（従順因子+100）', 1);
      era.printButton('「……休もう」（やる気上昇）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の目標と夢のため……そして、自分のほんの少しの私心のため',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は今の ',
          tachyon.get_colored_name(),
          ' を見た',
        ]);
        await era.printAndWait([
          '汗に濡れた運動着から透ける白い肌と、走行で付いた泥の斑点が鮮やかに対比し、密着した服が',
          tachyon.sex,
          'の肢体をいっそう際立たせる',
        ]);
        await era.printAndWait(
          '丸みを帯びた胸と尻、疲労の吐息と赤らんだ頬。ただのトレーニングなのに、想像が勝手に走る',
        );
        await era.printAndWait(
          '跳ね続けるその丸みを、自分のものとして掌で思うままに揉めたなら',
        );
        await era.printAndWait(
          '普段はそっけないその口を唇と舌で塞ぎ、甘い吐息しか出せなくできたなら',
        );
        await era.printAndWait(
          'トレーナーとして、一人の大人として、許されるはずのない想念だ',
        );
        await era.printAndWait([
          'だが男としての欲望は、',
          you.get_colored_name(),
          ' に反対を許さない',
        ]);
        await era.printAndWait([
          '迷い、惜しみながらも、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の不調を見て見ぬふりをして、トレーニングを続けさせた',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' の内心の汚さを察したのか、あるいはトレーニングの続行自体が気に入らないのか、',
          tachyon.get_colored_name(),
          ' は何も言わず、それでも ',
          you.get_colored_name(),
          ' を一睨みした',
        ]);
      } else {
        await era.printAndWait(
          'トレーナーとして、理不尽な過度トレーニングは避けるべきだ',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が一周走り終えると、すぐ停止を告げた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……終わり、ですの？ 実験は始まったばかりですわ。今日やる対照実……実験がまだ……あっ……',
        );
        await era.printAndWait([
          tachyon.sex,
          'の強気な言葉は途中で途切れ、抑えきれない吐息が漏れた',
        ]);
        await era.printAndWait(
          '誰が想像しよう。ふくらはぎの内側を軽く押しただけで、あれほど強気な口から、こんな甘い声が出るとは',
        );
        await era.printAndWait([
          'もちろん、',
          you.get_colored_name(),
          ' の指圧に即発情させる魔法があるわけではない。主因は ',
          tachyon.get_colored_name(),
          ' 自身だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はもう力が抜けた ',
          tachyon.get_colored_name(),
          ' を支え、腫れ始めた',
          tachyon.sex,
          'のふくらはぎを優しく押した',
        ]);
        era.println();
        await tachyon.say_and_wait('……ん……やぁ……そんな……だめ……やめて……あん……');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の口から、酔わせるような嬌声が止まない',
        ]);
        await era.printAndWait([
          '白い肌はすでに赤みを帯び、押す場所が変わるたび',
          tachyon.sex,
          'は想像を誘う声を上げる。まるで ',
          you.get_colored_name(),
          ' がしているのは健全なマッサージではなく、もっと邪悪で下品な行為であるかのように',
        ]);
        await era.printAndWait([
          '神聖な競技場でそんなことをすれば、当然人目は集まる。いつの間にか、まだ鍛えている年下の',
          tachyon.uma_sex_title,
          'たちも ',
          tachyon.get_colored_name(),
          ' の嬌声に引き寄せられていた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '待って……',
          callname,
          '……いっ……だめ……人が……ああ～～♡',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は聞こえないふりをして押し続けた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の脚は、',
          you.get_colored_name(),
          ' の想像以上に細く柔らかい。軽く握った感触は、',
          you.get_colored_name(),
          ' に、',
          tachyon.sex,
          'の生殺与奪を握った錯覚を与えた',
        ]);
        await era.printAndWait([
          'ベッドの上で、不服そうにしながらも喘ぎを抑えられない',
          tachyon.sex,
          'を見て、両脚を掴んで開いたなら——その征服感は、世の何物にも勝るだろう',
        ]);
        era.println();
        await tachyon.say_and_wait('……！ そこはだめですわ！');
        era.println();
        await era.printAndWait([
          'いつの間にか熱を帯びた ',
          you.get_colored_name(),
          ' の手は、腿のほうへ上がっていた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が両脚を強く引き抜いた力が、',
          you.get_colored_name(),
          ' の理性を呼び覚ました。目の前の',
          tachyon.teen_sex_title,
          'は、実際には成人男性の三倍の力を持つ',
          tachyon.uma_sex_title,
          'なのだと',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて',
          tachyon.sex,
          'に謝った',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……わ、わかりましたわ……今日は、ここまでに……わ、私、少し休みが必要ですわ……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は早口で言い終えると実験室へ戻ろうとしたが、力の抜けた膝が折れ、',
          you.get_colored_name(),
          ' の胸へ倒れ込んだ',
        ]);
        await era.printAndWait([
          '今の二人は、まともなトレーニング中のトレーナーと',
          tachyon.uma_sex_title,
          'には見えなかった。恋人の胸に甘える彼女と、優しく',
          tachyon.sex,
          'を抱く伴侶——そう見えたはずだ',
        ]);
        await era.printAndWait([
          '人に恐れられる狂気の科学者は、今は小鳥のように ',
          you.get_colored_name(),
          ' に寄りかかっている',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、思わず誇りと得意を覚えた',
        ]);
        era.println();
        await tachyon.say_and_wait('……実験室へ連れていって。今すぐ');
        era.println();
        await era.printAndWait([
          'だが直後、科学者の睨みが ',
          you.get_colored_name(),
          ' を従順なモルモットへ戻した',
        ]);
        await era.printAndWait([
          'こうして二人は、周囲の',
          tachyon.uma_sex_title,
          'たちから半分は感心、半分は羨望の視線を浴びながら、実験室へ戻っていった',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
   * @param stmn_rat アグネスタキオンの体力割合
   * @param plan_b Plan B に入っているか
   */
  async train_success(tachyon, you, callname, call_25, stmn_rat, plan_b) {
    era.print([
      tachyon.get_colored_name(),
      ' のトレーニングは順調に終わった！',
    ]);
    era.println();
    const buffer = [];
    if (plan_b && era.get('cflag:32:育成回合计时') < 95 + 16) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([' ', call_25, ' を……もう一段上へ']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は格別に力を込めてトレーニングを終えた。だが',
            tachyon.sex,
            'が口にする標語には、どう向き合えばいいかわからない',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '私が努力しなければ、',
            call_25,
            ' に追いつけない……',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はトレーニングを終えた',
          ]);
          await era.printAndWait('走りは相変わらず絢爛だ');
          await era.printAndWait('だが、何かが欠けている気がする');
        },
        async () => {
          await tachyon.say_and_wait('実験の成功のため……私であっても……');
          era.println();
          await era.printAndWait([
            'トレーニングを終えた ',
            tachyon.get_colored_name(),
            ' は呟いた。言葉はそうでも、',
            tachyon.sex,
            'の口調には迷いが混じっているようだった',
          ]);
          await era.printAndWait([
            '……いや、それは ',
            you.get_colored_name(),
            ' の深読みかもしれない',
          ]);
        },
      );
    } else if (era.get('love:32') >= 75) {
      if (stmn_rat > 0.45) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '！']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はトレーニングを終えると、汗まみれも構わず ',
            you.get_colored_name(),
            ' へ飛びついた',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて',
            tachyon.sex,
            'を押しのけようとした',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '構いませんわ、恋人の体液ですもの……夜に、あなたの体液で返せばいいだけ♡',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の反対を無視して抱きしめ、',
            you.get_colored_name(),
            ' の耳元で囁いた',
          ]);
        });
      } else {
        buffer.push(async () => {
          await tachyon.say_and_wait(
            'ふぅ……トレーニング、終わりましたわね……やっと',
          );
          await tachyon.say_and_wait(
            'まったく……運動なら、ただ走るより、夜のほうを好みますわ……',
          );
          await tachyon.say_and_wait([
            'どう？ ',
            callname,
            '、満たしてくれますわよね♡',
          ]);
        });
      }
    } else if (era.get('love:32') >= 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('ふんふん、どうですの');
          await tachyon.say_and_wait(
            'また私に魅了されました？ フフ、大げさですわね',
          );
          await tachyon.say_and_wait('でも、嫌いではありませんわ♡');
        },
        async () => {
          await tachyon.say_and_wait([callname, '！ ', callname, '………あ']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はいつものように ',
            you.get_colored_name(),
            ' へ走ろうとして、ふと足を止めた',
          ]);
          era.println();
          await tachyon.say_and_wait('………いいえ、今はやめておきますわ');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は汗でびしょ濡れの運動着を見て、なぜか ',
            you.get_colored_name(),
            ' と距離を取った',
          ]);
          await era.printAndWait('まさか……匂いを気にしている？');
          await era.printAndWait([
            'いや、あの ',
            tachyon.get_colored_name(),
            ' が……あり得ないはずだ',
          ]);
        },
      );
    } else if (era.get('relation:32:0') > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'ふんふんふん、',
            callname,
            '、今日の走りはどう！ 褒めすぎても構いませんわよ！',
          ]);
          era.println();
          await era.printAndWait('三十分後');
          era.println();
          await tachyon.say_and_wait('………そこまで褒めなくても……');
        },
        async () => {
          await tachyon.say_and_wait('ふぅ……疲れましたわ……');
          await tachyon.say_and_wait([
            callname,
            '……おんぶして連れていって～～～～',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('このままなら……必ず届きますわ');
          await tachyon.say_and_wait('限界という目標に……');
        },
      );
    } else if (era.get('relation:32:0') > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            'ふん……この速度、着実に伸ばせれば、限界超越は確実ですわ',
          );
          await tachyon.say_and_wait([
            '……そんなに急がなくていい、少し休んでも？ ',
            callname,
            '、研究は立ち止まれば後退ですわ。自己を上げるには、一瞬たりとも緩めてはいけません',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('ふハハハ！ そうです、この速度ですわ！');
          await tachyon.say_and_wait(
            'もっと速く、もっと速く、やがて……光速を超えるまで！',
          );
        },
        () =>
          tachyon.say_and_wait(
            'タイムを見せて……ふんふんふん……よろしい。この調子なら、私たちの夢はもう遠くありませんわ！',
          ),
      );
    } else if (era.get('relation:32:0') > 75) {
      buffer.push(
        () => tachyon.say_and_wait('よろしい、今日の走りは最適解ですわ！'),
        () =>
          tachyon.say_and_wait([
            'ふぅ……',
            callname,
            '、データを見せて……フフ、よろしいよろしい。前回のトレーニングより大幅に上がっていますわ。このままなら問題ありません',
          ]),
        () =>
          tachyon.say_and_wait(
            'よろしいよろしい、研究進捗がまた 0.02 ポイント進みましたわ',
          ),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            'ふう、なるほど……今日の実験成果は悪くありませんわ',
          ),
        () =>
          tachyon.say_and_wait(
            'こんな簡単なトレーニング、難なく終わりますわ……実力測定の対照群、ですの？',
          ),
        () => tachyon.say_and_wait('当然の成果ですわ'),
      );
    }
    await get_random_entry(buffer)();
  },
  ts_add_high_rel: (() => {
    const title = '追いかけっこ';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '！ ', tachyon.sex, 'を止めて！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の今日のトレーニングは終わったばかりだった',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が手を振って ',
        tachyon.get_colored_name(),
        ' を呼び寄せようとした瞬間、',
        tachyon.get_colored_name(),
        ' がある',
        tachyon.uma_sex_title,
        'を追って ',
        you.get_colored_name(),
        ' のほうへ走ってくるのが見えた',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        'た、助けて！',
      );
      await tachyon.say_and_wait(
        '怖がらないで……大丈夫ですわ！ 少し時間を借りて、調査をいくつか、質問をいくつか、それから……それから……薬も少し試せたら……！',
      );
      era.println();
      await era.printAndWait([
        'その',
        tachyon.uma_sex_title,
        'は ',
        you.get_colored_name(),
        ' にどんどん近づいてくる',
      ]);
      era.print([you.get_colored_name(), ' は決めた……']);
      era.printButton('二人を通す', 1);
      era.printButton('タキオンを止める', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          'トレーナー',
          you.adult_sex_title,
          '、なぜ見ているだけなんです！？',
        ]);
        await tachyon.say_and_wait([
          callname,
          '、なぜ',
          tachyon.sex,
          'を止めてくれないの！？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は身を引いて、二人を通した',
        ]);
        await era.printAndWait(
          '二人同時に詰問の声が上がった。だが中身は正反対だ',
        );
        await era.printAndWait([you.get_colored_name(), ' は肩をすくめた']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' のやり方がよくないのはわかっている。だが',
          tachyon.sex,
          'のモルモットである以上、実験も手伝わねばならない',
        ]);
        await era.printAndWait('……板挟みだ');
        await era.printAndWait([
          'だから ',
          you.get_colored_name(),
          ' は考えるのをやめ、どちらにも与しないことにした',
        ]);
        era.drawLine();
        await era.printAndWait([
          '翌日、',
          you.get_colored_name(),
          ' が実験室へ来ると、いつもの机に並ぶ自分用の薬が倍になっていた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          tachyon.get_colored_name(),
          ' を見ると、',
          tachyon.sex,
          'は無表情のまま ',
          you.get_colored_name(),
          ' を見つめている',
        ]);
        await era.printAndWait('…………被害者は、結局自分だった');
      } else {
        await era.printAndWait('実験の是非はひとまず置く');
        await era.printAndWait([
          '今日のトレーニングで ',
          tachyon.get_colored_name(),
          ' はもう十分走っている。これ以上は身体を傷めかねない',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          'トレーナー',
          you.adult_sex_title,
          '！ ありがとうございます！',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を捕まえた',
        ]);
        await era.printAndWait([
          '年下の',
          tachyon.uma_sex_title,
          'は遠ざかり、',
          tachyon.get_colored_name(),
          ' はもう追いつける見込みがないと悟ると、恨めしげに ',
          you.get_colored_name(),
          ' を睨んだ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸に、不吉な予感がよぎった',
        ]);
        era.drawLine();
        await era.printAndWait([
          '翌日、',
          you.get_colored_name(),
          ' が実験室へ来ると、いつもの机に並ぶ自分用の薬が倍になっていた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          tachyon.get_colored_name(),
          ' を見ると、',
          tachyon.sex,
          'は無表情のまま ',
          you.get_colored_name(),
          ' を見つめている',
        ]);
        await era.printAndWait('……………昨日の予感は正しかった');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ts_add_low_rel: (() => {
    const title = '追加実験';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.say_and_wait(
        '足りませんわ、実験データがまだ山ほど欠けて……',
      );
      await tachyon.say_and_wait(
        '続けなければなりません……続きたくないなら帰りなさい。私ひとりでやりますわ',
      );
      era.println();
      era.print([you.get_colored_name(), ' は決めた']);
      era.printButton('任せる', 1);
      era.printButton('止める', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          'ただの追加トレーニングなら止められたかもしれない',
        );
        await era.printAndWait('だが実験データの不足は……');
        era.println();
        await you.say_and_wait('確かに、致命的だな……なら今日はもう少し残ろう');
        await tachyon.say_and_wait(
          '……帰りなさいと言ったはずですわ。追加トレではありません。私自身の実験にデータが要るだけです',
        );
        you.say('ああ、だから');
        era.printButton('「実験に、助手なしは困るだろう」', 1);
        era.printButton(
          '「トレーナーとしてじゃなく、退勤後の自由時間だ。使い方は俺の自由だろう？」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…………フフ');
        await tachyon.say_and_wait('では、データの記録をお願いしますわ');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は頷き、',
          tachyon.sex,
          'が再び走り出すのを見た',
        ]);
      } else {
        await era.printAndWait('だめだ');
        await era.printAndWait(
          '名目が何であれ、追加トレーニングは認められない',
        );
        await era.printAndWait([
          'それに ',
          tachyon.get_colored_name(),
          ' もわかっているはずだ。こうしても効率は上がらない。無理に進度を急げば、かえってミスが増える',
        ]);
        era.println();
        await tachyon.say_and_wait('…………ちっ');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は何も言わずに帰った',
        ]);
        await era.printAndWait([
          '筋の通った説得なら素直に聞く。それも',
          tachyon.sex,
          'の美点だろう',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '立て直し＆再出発';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     * @param {boolean} reg_toky_yus 日本ダービーに出走登録しているか
     * @param {number} fail_count 愛欲以上でトレーニング失敗した回数
     * @param {boolean} fail_again 努力を選んだ場合に再失敗するか
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      plan_b,
      reg_toky_yus,
      fail_count,
      fail_again,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は場を走る ',
        tachyon.get_colored_name(),
        ' を見ていた',
      ]);
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' はずっと落ち着かない',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の走りに見た目の問題はない。それでも心配が消えない',
      ]);
      await era.printAndWait([
        '事故だけは起きないでくれ、と ',
        you.get_colored_name(),
        ' は祈った',
      ]);
      era.println();
      await era.printAndWait('だが、案の定、こういうときの事故は起きる');
      await era.printAndWait([
        you.get_colored_name(),
        ' の眼前で、',
        tachyon.get_colored_name(),
        ' の足取りがふらついた',
      ]);
      era.print('このままでは転びそうだ————');
      era.printButton('「タキオン！ 止まれ！」（失敗を受け入れる）', 1);
      era.printButton('—————！（挽回を試みる）', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                '痛い……',
                callname,
                '、少し押してくれませんこと？',
              ]);
              era.println();
              await era.printAndWait([
                '倒れた ',
                tachyon.get_colored_name(),
                ' の傍へ駆け寄った ',
                you.get_colored_name(),
                ' は、手早く',
                tachyon.sex,
                'の靴と靴下を脱がせた',
              ]);
              era.println();
              await tachyon.say_and_wait('そうです……甲……裏……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' はそっと',
                tachyon.sex,
                'の足のつぼを押した',
              ]);
              await era.printAndWait('本来なら、ごく普通の行為のはずだ');
              await era.printAndWait(
                'だが……走り終えたばかりで、靴下に蒸された足裏は汗に濡れている',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' のマッサージにつれ、粘つく汗が ',
                you.get_colored_name(),
                ' の両手にもついた',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は自分に言い聞かせた。ただの人体分泌物だ、と',
              ]);
              await era.printAndWait(
                'それでも手つきは、自然と優しくなっていく',
              );
              era.println();
              await tachyon.say_and_wait('ん……ぅ……');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' が時折漏らす吐息が、さらに ',
                you.get_colored_name(),
                ' を昂ぶらせた',
              ]);
              await era.printAndWait([
                '足裏と甲を押せば、理屈の上では手を止めるべきだった。だが手には、まだ別の考えがあるらしい',
              ]);
              era.println();
              await tachyon.say_and_wait('待って……つま先は……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' の指が、ゆっくり',
                tachyon.sex,
                'のつま先を摘まんだ',
              ]);
              await era.printAndWait('普通の指圧なら、油を塗って行うものだ');
              await era.printAndWait([
                'だが ',
                tachyon.get_colored_name(),
                ' の滴る汗が、油の代わりになった',
              ]);
              era.println();
              await tachyon.say_and_wait(['待って……', callname, '……痛っ！']);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の呼び声が、',
                you.get_colored_name(),
                ' の理性を呼び戻した',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' が顔を上げると、',
                tachyon.sex,
                'の頬は上気し、スイッチが入ったように見えた',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '……続きは、室内に戻ってから、いいですわね？',
              );
              break;
            case 1:
              await tachyon.say_and_wait('痛い～～♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は今日のトレーニングでもまた「うっかり」転んだ',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は、芝に触れた瞬間に靴と靴下を脱ぎたがる',
                tachyon.sex,
                'を見て、半ば欲情し、半ば呆れた',
              ]);
              era.println();
              await tachyon.say_and_wait([
                callname,
                '～～早くマッサージして……♡♡',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' が動かないと、',
                tachyon.sex,
                'は甘えるように裸足で芝を踏み、',
                you.get_colored_name(),
                ' の注意を引いた',
              ]);
              await era.printAndWait(
                '白く細く、壊れそうな芸術品のような裸足。跳ねた土がかえって白さを際立たせる',
              );
              era.println();
              await tachyon.say_and_wait('早く早く、揉んでくださいまし～～');
              era.println();
              await you.say_and_wait(
                'この悪習は、もう続けさせられない……',
                true,
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' は優しく',
                tachyon.sex,
                'の足を押した',
              ]);
              era.println();
              await tachyon.say_and_wait('んん♡～～そうです……あ♡っ♡は♡');
              era.println();
              await era.printAndWait('相変わらず、媚びた声だ');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' が口を開くたび、',
                you.get_colored_name(),
                ' の欲情を煽る嬌声が漏れる',
              ]);
              await era.printAndWait([
                'このまま',
                tachyon.sex,
                'を放置してはおけない',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は手の圧し方を変えた',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '……いっ———']);
              era.println();
              await era.printAndWait('さっきまでの、優しい愛撫の力加減が');
              await era.printAndWait(
                '一瞬で、足を碾き潰すかのような猛烈な圧力に変わった',
              );
              era.println();
              await tachyon.say_and_wait([
                '痛い！ 待って、',
                callname,
                '！ だめ！ やめて！ 折れる、あああああ！',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は',
                tachyon.sex,
                'の言葉を聞かず、厳しく押し続けた',
              ]);
              await era.printAndWait([
                tachyon.uma_sex_title,
                'へのマッサージと、その力加減について、トレーナー以上に知る者はいない',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は骨を折らず、なおかつ ',
                tachyon.get_colored_name(),
                ' に痛みを与える範囲で、思うままに押した',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '待って、私が悪かった！ お願い！ 助けて！ いや！ 離して！ だめ！ っ………！',
              );
              await tachyon.say_and_wait('っ……は……はあっ……は……');
              era.println();
              await era.printAndWait([
                'ほどなく ',
                tachyon.get_colored_name(),
                ' は声にならず、痛みの吐息だけになった',
              ]);
              await era.printAndWait([
                'まだ足りない。',
                tachyon.sex,
                'にきちんと教訓を叩き込まねば',
              ]);
              era.println();
              await tachyon.say_and_wait('ん……っ……はあっ……ん♡');
              await tachyon.say_and_wait('ぅ♡ん……はあっ♡');
              era.println();
              await era.printAndWait('……錯覚か');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の声が、どこか色を変えた気がする',
              ]);
              await era.printAndWait([
                '引き際を知る ',
                you.get_colored_name(),
                ' は、',
                tachyon.sex,
                'がほぼ学んだと判断し、力を緩めた',
              ]);
              era.println();
              await tachyon.say_and_wait('う～～～～～');
              await tachyon.say_and_wait(
                'さっきまであんなに痛かったのに、急に優しく…………',
              );
              await tachyon.say_and_wait('だめ……待って……もう……もうだめ……♡');
              era.println();
              await era.printAndWait(
                '……自分は、マッサージをしているだけのはずだ',
              );
              await era.printAndWait('ほどなく、マッサージは終わった');
              await era.printAndWait([
                you.get_colored_name(),
                ' は、なぜか全身の力が抜けた ',
                tachyon.get_colored_name(),
                ' を連れて寮へ戻った',
              ]);
              await era.printAndWait([
                'これで',
                tachyon.sex,
                'も、教訓はわかったはずだ',
              ]);
              era.println();
              await era.printAndWait('…………わかった、はずだよな？');
              break;
            case 2:
              await tachyon.say_and_wait([
                'ん～～',
                callname,
                '、マッサージして～～',
              ]);
              await tachyon.say_and_wait('……そっちの、ですわよ♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は自分の両脚を撫で、暗示的に ',
                you.get_colored_name(),
                ' へ言った',
              ]);
              await era.printAndWait('こいつ……やっぱり懲りていない');
              await era.printAndWait([
                '今度こそ、本当に',
                tachyon.sex,
                'へ教訓を叩き込まねば',
              ]);
              await era.printAndWait([
                '…………だが、自分の「教訓」は、',
                tachyon.sex,
                'にとって別の意味のご褒美になっていないか？',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は慌てて頭の中の考えを引っ込めた',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' がそこまで落ちているはずはない',
              ]);
              await era.printAndWait('…………ないよな？');
              break;
            case 3:
              await tachyon.say_and_wait(['痛い……', callname]);
              await tachyon.say_and_wait('いいえ、脚は大丈夫ですわ……');
              await tachyon.say_and_wait(
                'ですが、誰かの下半身が無事かは、わかりませんわね',
              );
              await tachyon.say_and_wait(
                '私が靴下を脱いだのを見て、急に腰を折ったのはなぜですの♡',
              );
              await tachyon.say_and_wait('怪我をしていたら大変……見せなさいな♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の言葉を聞き、',
                you.get_colored_name(),
                ' はその場で固まった',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' を診に行きたいのに、',
                tachyon.sex,
                'が本当に何かをしかねないと恐れた',
              ]);
              era.println();
              await tachyon.say_and_wait('ん……来ないですの？ 残念ですわ～～');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は埃を払い、自分で立ち上がった',
              ]);
              await era.printAndWait('こいつ……やっぱり演技だった');
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  '立てませんわ……',
                  callname,
                  '、おんぶして～～',
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は ',
                  you.get_colored_name(),
                  ' の声を聞くなり、芝にどかりと座り込んだ',
                ]);
                await era.printAndWait([
                  '潤んだ目で ',
                  you.get_colored_name(),
                  ' に呼びかけた',
                ]);
                await era.printAndWait([
                  '元々の',
                  tachyon.sex,
                  'は、こんなに甘えん坊だったか……？',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れつつも、今日はもう続けられないと認めた',
                ]);
              },
              async () => {
                await tachyon.say_and_wait('まったく……まだ走れたのに……');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' が ',
                  tachyon.get_colored_name(),
                  ' の両脚を診ていると、',
                  tachyon.get_colored_name(),
                  ' は頬を膨らませて言った',
                ]);
                era.println();
                await you.say_and_wait(
                  'だがタキオンにそんな危険は冒させない……タキオン（の脚）は、俺にとって何より大事なんだ',
                );
                await tachyon.say_and_wait('！…………そこまで言うなら');
                era.println();
                await era.printAndWait([
                  'なぜか、',
                  tachyon.get_colored_name(),
                  ' の顔が赤くなった',
                ]);
                await era.printAndWait('検査に応じてくれたのは、ありがたい');
              },
              async () => {
                await tachyon.say_and_wait([
                  'ふんふん、実験失敗ひとつで私が倒れるとでも？ ',
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は心配そうに ',
                  tachyon.get_colored_name(),
                  ' の両脚を診た',
                ]);
                await era.printAndWait('この期に及んで、気になるのは実験か');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れと苛立ちを覚えた',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  'それに……私は ',
                  callname,
                  ' を信じていますわ。あなたが私を危うくするはずがない、でしょう？',
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  'よく考えれば、',
                  tachyon.sex,
                  'がこれほど夢に純な',
                  tachyon.uma_sex_title,
                  'でなければ',
                ]);
                await era.printAndWait([
                  '自分も',
                  tachyon.sex,
                  'の無茶に付き合いはしなかった',
                ]);
                await era.printAndWait([
                  '夢しか見えない狂想者が暴走するとき、',
                  tachyon.sex,
                  'の足元の窪みに気を配る',
                ]);
                await era.printAndWait(
                  'それが、モルモットとしての自分の務めだ',
                );
                era.println();
                await tachyon.say_and_wait(
                  'ですから……戻って反省して、明日また実験ですわ！',
                );
                await you.say_and_wait('いや、少なくとも三日後だ');
                era.println();
                await era.printAndWait(
                  '夢も遠方もいったん置く。最低でも、あと二日は様子を見ねばならない',
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, '……痛い……']);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は涙を浮かべて芝に座り、',
                  you.get_colored_name(),
                  ' に慰めを求めた',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は慌てて',
                  tachyon.sex,
                  'の傷を確認し、大事ないとわかってから息を吐いた',
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  '……構いませんわ。一時の失敗です……実験は最初から……',
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は呟いた',
                ]);
                await era.printAndWait('……この期に及んで実験か');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れつつ、',
                  tachyon.sex,
                  'の両脚に異常がないか診た',
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  'くっ……',
                  callname,
                  '……だ、大丈夫ですわ',
                ]);
                await era.printAndWait('少し休めば……はあ');
                era.println();
                await you.say_and_wait('だめだ');
                await tachyon.say_and_wait('！？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は一番運びやすい体勢で、',
                  tachyon.get_colored_name(),
                  ' の首と膝の内側を抱え、抱き上げた',
                ]);
                await era.printAndWait([
                  '今は',
                  tachyon.sex,
                  'の我儘を聞く時ではない。すぐ保健室で診てもらわねば',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '待って！ ',
                  callname,
                  '！ わかりましたわ！ 行きます、下ろしてくださいまし！',
                ]);
                await you.say_and_wait('だが、こうするほうが効率的だろう？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は ',
                  tachyon.get_colored_name(),
                  ' の制止を無視し、衆人環視の中で ',
                  tachyon.get_colored_name(),
                  ' を保健室へ運んだ',
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait('くっ……やはり無理でしたか');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は言われるままに止まり、',
                  you.get_colored_name(),
                  ' は慌てて',
                  tachyon.sex,
                  'の脚を診た',
                ]);
                await era.printAndWait('……今日のトレーニングは、ここまでだ');
              },
              async () => {
                await tachyon.say_and_wait('脚が……動きませんわ');
                await tachyon.say_and_wait('実験、失敗ですわね……');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' はよろけながら数歩歩いてから止まった',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は慌てて ',
                  tachyon.get_colored_name(),
                  ' の状態を診た',
                ]);
                await era.printAndWait(
                  '幸い……少し捻った程度で、大事にはならないだろう',
                );
                await era.printAndWait('ただし、まず保健室で休ませねば……');
              },
              async () => {
                await tachyon.say_and_wait('私の限界……これだけ、ですの');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は駆け寄り、',
                  tachyon.get_colored_name(),
                  ' がよろける瞬間に',
                  tachyon.sex,
                  'を支えた',
                ]);
                await era.printAndWait([
                  '衝動の行動で、かえって ',
                  tachyon.get_colored_name(),
                  ' に咎められるかもしれない。それでも ',
                  you.get_colored_name(),
                  ' は迷わず前に出た',
                ]);
                await era.printAndWait([
                  'そのおかげで、',
                  you.get_colored_name(),
                  ' は ',
                  tachyon.get_colored_name(),
                  ' の呟きを聞いた',
                ]);
                era.println();
                await you.say_and_wait(
                  'まだ強くなれる……タキオンの限界は、絶対にそんなものじゃない',
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は黙ったまま、',
                  you.get_colored_name(),
                  ' の言葉を聞いたかどうかもわからない',
                ]);
                await era.printAndWait([
                  'だが',
                  tachyon.sex,
                  'はゆっくり歩き出し、',
                  you.get_colored_name(),
                  ' は傍で支えて保健室へ向かった',
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、諦めたほうがいいのかしら', true);
          await tachyon.say_and_wait(
            ['どうせ、', call_25, ' ももう育っているではありませんか'],
            true,
          );
          await tachyon.say_and_wait('残念ですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……なぜ、そんなに焦るの');
          await tachyon.print_and_wait(
            '本当に、私の夢を信じる者がいなければ、それでもよかった',
          );
          await tachyon.print_and_wait([
            'でも……',
            you.sex,
            'だけは、',
            you.sex,
            'の期待は……',
          ]);
          await tachyon.print_and_wait(
            'いいわ、もう少し頑張ってみましょう……この身体が、どこまで持つか',
          );
          // 47+20＝シニア級5月4週＝日本ダービー
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、こうなったら諦めましょう', true);
          await tachyon.say_and_wait(
            '構いませんわ、予備計画がありますもの……',
            true,
          );
          await tachyon.say_and_wait('悔しいですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……だめですわ');
          await tachyon.print_and_wait('もう、引き返せない');
          await tachyon.print_and_wait([
            you.sex,
            'の支えが、私をここまで連れてきた',
          ]);
          await tachyon.print_and_wait(
            '今さら身を引いたら、笑い話にもなりませんわ',
          );
          await tachyon.print_and_wait(
            '私を信じた人のために……もう少し、持ちこたえます',
          );
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、こうなったら諦めましょう', true);
          await tachyon.say_and_wait(
            '構いませんわ、予備計画がありますもの……',
            true,
          );
          await tachyon.say_and_wait('悔しいですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……なぜ、そんなに焦るの');
          await tachyon.print_and_wait(
            '本当に、私の夢を信じる者がいなければ、それでもよかった',
          );
          await tachyon.print_and_wait([
            'でも……',
            you.sex,
            'だけは、',
            you.sex,
            'の期待は……',
          ]);
          await tachyon.print_and_wait(
            'いいわ、もう少し頑張ってみましょう……この身体が、どこまで持つか',
          );
        } else {
          await tachyon.say_and_wait('痛い');
          await tachyon.say_and_wait('怖い');
          await tachyon.say_and_wait('やはり……私の限界は……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はここで我に返り、',
            tachyon.get_colored_name(),
            ' へ走った',
          ]);
          await era.printAndWait([
            'だが',
            tachyon.sex,
            'は独り言を繰り返すばかりで、自分を見ていないようだった',
          ]);
          await era.printAndWait([
            'しばらくしてから正気に戻り、',
            you.get_colored_name(),
            ' に支えられて保健室で手当てを受けた',
          ]);
          await era.printAndWait('…………本当に大丈夫なのか。身体も、心も');
          await era.printAndWait([you.get_colored_name(), ' は問いたかった']);
          await era.printAndWait([
            'だが……あのとき止められなかった自分に、今さら口を出す資格があるだろうか',
          ]);
        }
      } else {
        await era.printAndWait('間に合わない');
        await era.printAndWait('声を出す暇もない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はもう、足を踏みしめ直していた',
        ]);
        await era.printAndWait('自分の胸にずっとあった不安を、消すように');
        await era.printAndWait('前方へ、次の一歩を踏む');
        await era.printAndWait('そのまま、トレーニングが終わるまで');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {boolean} do_sex 興奮したままの行為か（男/フタナリトレーナー×女/フタナリタキオンのみ）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton('「最高の走りだった！」', 1);
      era.printButton('「まだ改良の余地がある」', 2);
      const ret = await era.input();
      if (do_sex) {
        await era.printAndWait('ドン');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' が称賛も激励も言い終える前に、',
          tachyon.get_colored_name(),
          ' は詰め寄り、',
          you.get_colored_name(),
          ' を壁へ押し付けた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'はあ……はあ……ごめんなさい、',
          callname,
          '……走りすぎて、興奮が止まらなくて……身体、少し貸してくださいまし',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は右手で壁を押さえ、',
          you.get_colored_name(),
          ' の逃げ道を塞ぎ、左膝を上げて ',
          you.get_colored_name(),
          ' の股間に押し当てた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '大丈夫……大丈夫……一度だけ……少しだけでいい……',
        );
        era.println();
        await era.printAndWait([
          '誰を説得しているのかわからない言葉が続く。',
          you.get_colored_name(),
          ' に逃げる気がないと見極めると、',
          tachyon.sex,
          'はゆっくり蹲り、震える両手で ',
          you.get_colored_name(),
          ' のズボンを下ろした',
        ]);
        era.println();
        await era.printAndWait('ぴん');
        await era.printAndWait([
          '一日こもった熱気と一緒に、肉棒が ',
          tachyon.get_colored_name(),
          ' の顔へ弾ける',
        ]);
        await era.printAndWait(
          '狂っていた両目が、突然焦点を失い、微かに震える生殖器しか映さなくなる',
        );
        await era.printAndWait(
          '猫じゃらしを見た子猫のように、揺れるそれを追い始める',
        );
        await era.printAndWait(
          'だがレースの刺激で発情した身体は、その熟れた匂いを嗅いだ瞬間に力を失い、追えるのは腥い匂いを嗅ぎ続ける鼻だけになった',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            '身体に力の入らない ',
            tachyon.get_colored_name(),
            ' は、かろうじて懇願の声だけを出せた',
          ]);
          await era.printAndWait('感情では無関心、むしろ嫌悪するこの人');
          await era.printAndWait('身体では渇望し、満たされたいと願うこの人');
          await era.printAndWait('ついには、身体の渇望が感情の冷淡を上回った');
          era.println();
          await era.printAndWait('幸い、相手は悪い意味で期待を裏切らなかった');
          await era.printAndWait([
            'やはり、担当の',
            tachyon.uma_sex_title,
            'に手を出すことを躊躇わない屑だ',
          ]);
          era.println();
          await era.printAndWait([
            '一歩前に出たトレーナーの肉棒で、涎の出るほど飢えた口を満たされながら、',
            tachyon.get_colored_name(),
            ' は幸福にそう思った',
          ]);
        }
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の幸福そうな顔を見て、',
          you.get_colored_name(),
          ' も続けたい気持ちはある……',
        ]);
        era.println();
        era.printButton('「……このあと Winning Live だ」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          'は睨んだが、',
          you.get_colored_name(),
          ' は無情にも肉棒を',
          tachyon.sex,
          'の口から引き抜いた',
        ]);
        await era.printAndWait([
          '先の',
          tachyon.sex,
          'の計画のためにも、少なくとも競馬場にいるあいだは、',
          tachyon.get_colored_name(),
          ' の名声を傷つけることはできない',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は理性と感性のあいだで揺れつつ、ついに情欲を抑え、振り返らずに控え室へ向かった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はようやく息を吐いた。レースの刺激が、健全な精神的昂ぶりだけでなく、そちら方面にまで及ぶとは……',
        ]);
        await era.printAndWait([
          '今後のレースでも、今日のようなことが起きるのか？ ',
          you.get_colored_name(),
          ' は思わず身震いした',
        ]);
      } else if (ret === 1) {
        if (era.get('relation:32:0') > 225) {
          await tachyon.say_and_wait(
            'でしょうでしょう？ フフ、これが光速を超える走りですわ',
          );
        } else {
          await tachyon.say_and_wait([
            '実験の検算にすぎないのに、そんなに喜んで。',
            callname,
            '、おめでたいですわね',
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            'ちっ……反論はできませんわ。でも、もう少し褒めてもいいでしょう？ あれだけ頑張って勝ったのですもの',
          );
        } else {
          await tachyon.say_and_wait([
            'ひどいですわ、',
            callname,
            '。愛馬が勝ったのに、そんな顔をして誰に見せるの。早く早く、もっと褒めて、早～～く～～！',
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait(
          'ふん……わかっていますわ。余計な口は不要です',
        );
      } else {
        await tachyon.say_and_wait(
          'よろしい。新しい発見があれば、今回の実験も無駄ではありませんわ',
        );
      }
      return [];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '実験の始まり';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'ここは府中のトレセン学園。今日も ',
        you.get_colored_name(),
        ' の夢は、ここで育ち続けている',
      ]);
      await tachyon.say_and_wait('トレーナー君、口を開けて');
      era.println();
      await era.printAndWait('育ち続けている');
      era.println();
      await tachyon.say_and_wait('トレーナー君、一周走って速度を測りなさい');
      era.println();
      await era.printAndWait('育ち続け');
      era.println();
      await tachyon.say_and_wait(
        'トレーナー君、錠剤は含んだまま。飲み込めと言ってから飲みなさい',
      );
      era.println();
      await era.printAndWait('育ち……？');
      era.println();
      await era.printAndWait([
        '朝から実験室に呼び出され、午前中ずっと実験に付き合わされた ',
        you.get_colored_name(),
        ' の疑念は、すでに頂点に達していた',
      ]);
      era.println();
      await you.say_and_wait(
        ['今は授業時間のはずだ。', tachyon.sex, 'は登校しなくていいのか？'],
        true,
      );
      await you.say_and_wait('俺は、今ごろ事務作業をしているべきでは？', true);
      await you.say_and_wait(
        'なぜ自分はここで、怪しい薬を山ほど飲まされ、実験されている？',
        true,
      );
      era.println();
      await tachyon.say_and_wait('トレーナー君？ 何をぼんやりしていますの？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は訝しげに ',
        you.get_colored_name(),
        ' を見、顔には苛立ちが浮かんでいた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は、数日前に ',
        you.get_colored_name(),
        ' がトレーニング場で見かけた',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        '当時の ',
        you.get_colored_name(),
        ' は、',
        tachyon.sex,
        'の光のような速度と走りに惹かれ、衝動のまま契約を結んだ',
      ]);
      await era.printAndWait('そして衝動のまま、奇妙な契約をいくつも書いた');
      await era.printAndWait('どうやら、その中には試薬も含まれていたらしい');
      await era.printAndWait('当時の自分は、疑うことなくサインしたのか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、当時の判断力を疑わずにはいられなかった',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' はふと我に返った']);
      await era.printAndWait([
        '回想に時間を取られすぎた。',
        tachyon.get_colored_name(),
        ' が呼んだのに、返事ができていなかった',
      ]);
      await era.printAndWait('まずい、叱られないか');
      await era.printAndWait([
        you.get_colored_name(),
        ' は大人げなく、恐る恐る担当',
        tachyon.uma_sex_title,
        'を見上げ、ちょうど',
        tachyon.sex,
        'が ',
        you.get_colored_name(),
        ' を見つめる目とぶつかった',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        'その暗紅色の両目は、ブラインドのように ',
        you.get_colored_name(),
        ' の視線を吸い込む',
      ]);
      await era.printAndWait('—————いや、正確には、吸い込んではいない');
      await era.printAndWait(
        'その視線はただ静かにそこにある。だがそれ自体が、一枚の窓のようだ',
      );
      await era.printAndWait('窓の向こうを、探らずにはいられなくなる');
      await era.printAndWait([
        '人を引き込むのは',
        tachyon.sex,
        'の視線ではなく、自分の好奇心だ',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, 'の限界は、どこにある？']);
      await era.printAndWait([tachyon.sex, 'の頭の中では、何が巡っている？']);
      await era.printAndWait([tachyon.sex, 'の未来は、どれほど輝き得る？']);
      await era.printAndWait([tachyon.sex, 'の好みのタイプは？']);
      await era.printAndWait([tachyon.sex, 'の下着の色は？']);
      await era.printAndWait('避妊は、装着派か服薬派か？');
      await era.printAndWait('性感帯は耳か、胸か？');
      await era.printAndWait('ベッドでは、どの体位を好む？');
      era.println();
      await era.printAndWait('すべて、すべて');
      await era.printAndWait([
        tachyon.sex,
        'のすべてを、',
        you.get_colored_name(),
        ' は知りたい',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の目を見て、ふと笑った',
      ]);
      era.println();
      await tachyon.say_and_wait('その渇望の目……小動物のようですわ');
      era.println();
      await era.printAndWait('小動物？ 自分が？');
      await era.printAndWait([you.get_colored_name(), ' は、少し赤面した']);
      await era.printAndWait('大人である自分が、小動物扱いされる');
      era.println();
      await tachyon.say_and_wait('ええ……小動物。たとえば……実験動物のように');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はふと考え込み、何を考えているのかわからない',
      ]);
      await era.printAndWait('それから、ふと頷いた');
      era.println();
      await tachyon.say_and_wait('……ええ、決まりですわ');
      era.println();
      await era.printAndWait([tachyon.sex, 'は自信満々に言った']);
      era.println();
      await tachyon.say_and_wait(['これから、モルモット君 と呼びますわ！']);
      era.printButton('「モ、モルモット？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'フフ、似合っていますわよ？ モルモット君……モルモット君……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は何か言おうとして、また口を閉じた。呼び名など、好きに呼べばいい',
      ]);
      await era.printAndWait('あの、人を狂わせる双眸のためなら');
    };
    f.title = title;
    return f;
  })(),
  ws_15: (() => {
    const title = '実験課題の策定';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait('走りたいレース、ですの？');
      era.println();
      await era.printAndWait([
        'かつての理科準備室、すなわち ',
        tachyon.get_colored_name(),
        ' の実験室で、',
        you.get_colored_name(),
        ' は小さなソファに座り、実験机の前の ',
        tachyon.get_colored_name(),
        ' に頷いた',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        'と契約した初日に聞くべきことだった。だが当時の ',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' に魅了されすぎて、ほぼ完全に忘れていた',
      ]);
      await era.printAndWait([
        'いずれにせよ、トゥインクル・シリーズに出るなら日程の設計は必須だ。',
        tachyon.sex,
        'の選択を聞いてこそ、',
        tachyon.sex,
        '向けのトレーニング方針が立てられる',
      ]);
      await era.printAndWait('三冠路線か、牝馬三冠か、あるいはマイルか');
      await era.printAndWait([
        '短距離……たぶん無理だろう。申し訳ないが、',
        tachyon.get_colored_name(),
        ' にその適性はないはずだ',
      ]);
      era.println();
      await tachyon.say_and_wait('……レース？ 興味ありませんわ');
      await tachyon.say_and_wait(
        'そもそも私の研究は自身の可能性のため。他人がどうあろうと関係ありません。強弱の比較など、子どもの遊びですわ',
      );
      await era.printAndWait([
        'いかにも ',
        tachyon.get_colored_name(),
        ' らしい答えだ',
      ]);
      await era.printAndWait([
        '正直、',
        tachyon.sex,
        'がそう答えることに驚きはない',
      ]);
      await era.printAndWait('だがトレーナーとして、果たすべき責務はある');
      await era.printAndWait([
        'それに……',
        tachyon.sex,
        'に視線を奪われたファンとして、自分の推しがより大きな舞台で輝くのを見たいのも、当然ではないか？',
      ]);
      era.println();
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' は言葉を整え、口を開いた',
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「だって、君にはレースが要る。${tachyon.uma_sex_title}にはレースが要る」`,
          1,
        );
        await era.input();
        await era.printAndWait('推測でも虚勢でもない。事実の陳述だ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にはレースが要る。',
          tachyon.sex,
          'の実験の検証として',
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          'にはレースが要る。闘争心の発散として',
        ]);
        await era.printAndWait([
          '二つの必要を一度に満たせるなら、',
          tachyon.sex,
          'に拒む理由はない',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……言いたいことはわかりますわ。ですが、その言い方、まったく愛想がありませんわね',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は冷たく ',
          you.get_colored_name(),
          ' を見た',
        ]);
        era.println();
        await era.printAndWait('やはり、猛薬が要るか。それなら……');
        era.println();
        await you.say_and_wait(
          'ああ、タキオンが負けを恐れて出走を拒むなら、理解できる、',
        );
        await you.say_and_wait(
          'タキオンの矜持に関わるし、今期には強者も多い、',
        );
        await you.say_and_wait([
          'もし実力でタキオンを上回る',
          tachyon.uma_sex_title,
          'が出たら、限界超越などと言っていたタキオンは……',
        ]);
        era.println();
        await era.printAndWait('笑い話だ');
        await era.printAndWait([
          '両手を一振りして試験管を十本取り出し、こめかみに筋を浮かべた ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は続きを腹へ飲み込んだ',
        ]);
        await tachyon.say_and_wait([
          callname,
          '、あなたという人は……愛想がないだけならまだしも、自ら殴られにいくようなことを言う。死ぬのが怖くないのですか',
        ]);
        await you.say_and_wait('むぐぐぐ……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は弁解しようとしたが、',
          tachyon.get_colored_name(),
          ' に口を押さえられて声が出ない',
        ]);
        era.println();
        await tachyon.say_and_wait('考えさせて……ええ、これですわ');
        era.println();
        await era.printAndWait([
          'ずっと押さえておくのも面倒と思ったのか、',
          tachyon.get_colored_name(),
          ' に閃きが走った',
        ]);
        await era.printAndWait([
          '同時に、',
          you.get_colored_name(),
          ' の脳裏にも電流が走った。何か良くないことが起きる予告のように',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は白衣の裾をゆっくり持ち上げた。この時点で ',
          you.get_colored_name(),
          ' の危機の予感は頂点だ。だが逃げたくても、どこへ？',
        ]);
        await era.printAndWait([
          'まして',
          tachyon.uma_sex_title,
          'の手から逃げる？ ',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' に狂気と呼ばれても、愚か者ではない。不可能な妄想はしない',
        ]);
        era.println();
        await era.printAndWait('白衣の下は、潤んだ光を返す黒いパンストだった');
        await era.printAndWait(
          '朝から豊かな尻と細い脚を封じ込めてきた蒸れたパンストは、一日の熟成を経て、内も外も完全に味が沁みている',
        );
        await era.printAndWait([
          'しかも履いているのは、普段から生活がだらしない ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐怖で首を振った。だがもう遅い',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'はゆっくりパンストを下ろす。尻から外れた瞬間、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の身体が、その弾む尻の反動で小さく揺れたように見えた',
        ]);
        await era.printAndWait([
          'パンストが股まで下り、今まで醸してきた匂いを逃したくないかのように、黒い絹はまだ',
          tachyon.child_sex_title,
          'の両脚のあいだの神秘な部位と糸を引いていた————',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は今日、下着を履いていないのか？ ',
          you.get_colored_name(),
          ' はふと思った。この糸を見れば、答えは自明だ',
        ]);
        await era.printAndWait(
          '舞台の幕が上がるように、下の白い腿が露出する——それは、惨たらしい悲劇の開演でもあった',
        );
        era.println();
        await tachyon.say_and_wait(['さあ、', callname, '、口を開けて～～']);
        era.printButton('「むぐぐぐ！！」', 1);
        await era.input();
        await era.printAndWait([
          'このままではだめだ。内心に駆られ、',
          you.get_colored_name(),
          ' はそれでも徒労の抵抗を試みた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて四つん這いで実験室から逃げようとしたが、案の定、一歩目で ',
          tachyon.get_colored_name(),
          ' に人間には反応できない速度で背中に跨がれた',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の背に跨がり、パンストで ',
          you.get_colored_name(),
          ' の口を絞めた。口枷のように ',
          you.get_colored_name(),
          ' を固定し、締め付けに耐えかねた ',
          you.get_colored_name(),
          ' が口を開くと、パンストはそのまま頬と口角に食い込んだ',
        ]);
        await era.printAndWait([
          '瞬間、酸っぱく濃い臭いが ',
          you.get_colored_name(),
          ' の口に広がり、濡れた感触と、股間から来る淡い匂いが鼻腔を侵す。猛烈な匂いの襲撃に、',
          you.get_colored_name(),
          ' は四肢の力を失って膝をついた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ふん……少しは気が晴れましたわ。本題に戻りましょう。',
        );
        await tachyon.say_and_wait(
          'レースへの出走はもちろん必須ですわ。選ぶ競走は……',
        );
        await tachyon.say_and_wait(
          'フフ、では三冠を目標にしましょう。あれだけ言っておいて足を引っ張ったら、皮を剥ぎますわよ。異議はありませんね？',
        );
        era.println();
        await era.printAndWait([
          '匂いの目眩で意識が落ちる直前、',
          you.get_colored_name(),
          ' の最後の考えは——意見があっても、口を開かせてくれ、というものだった……',
        ]);
      } else {
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code - 1 &&
          you.sex_code > 0
        ) {
          era.printButton('だって……', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' が口を開こうとした瞬間、振り返った ',
            tachyon.get_colored_name(),
            ' に唇を押さえられ、声が出なかった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は立ち上がり、ソファの ',
            you.get_colored_name(),
            ' を押さえ、',
            you.get_colored_name(),
            ' と目を合わせた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '言いたいことはわかっていますわ。公にも私にも、レースに出る理由と必要性があることも。ですが……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は向きを変え、どかりと ',
            you.get_colored_name(),
            ' の腿に座り、',
            you.get_colored_name(),
            ' の腿の外側を叩いた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '今はレースに出る気がありませんの。だからうまく考えて、私を機嫌取る言葉を探しなさい。機嫌が良くなれば……出てもいいかもしれませんわよ？',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は苦笑し、',
            tachyon.get_colored_name(),
            ' の腰を抱いた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'はごく自然に身を寄せ、いちばん楽な姿勢に直した',
          ]);
          era.println();
          await you.say_and_wait('タキオンはいちばんかっこいい');
          await you.say_and_wait('タキオンはかわいい');
          await you.say_and_wait('タキオンは美しい');
          await you.say_and_wait([
            'いちばん強くてすごい',
            tachyon.uma_sex_title,
          ]);
          await you.say_and_wait([
            '超光速の',
            tachyon.sex_code === 1 ? '王子' : '姫',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の耳元で、',
            tachyon.sex,
            'を称える言葉を止めなかった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の耳も揺れ続け、その言葉が効いていることを示していた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は得意げな顔で、',
            you.get_colored_name(),
            ' の腿を強く叩き、続きを促した',
          ]);
          era.println();
          await tachyon.say_and_wait('ふんふん……もっと、もっと、言いなさい！');
          era.println();
          await era.printAndWait([
            '叩かれて少し痛い ',
            you.get_colored_name(),
            ' は心変わりし、悪戯を思いついた',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は抱いていた手を放し、',
            tachyon.sex,
            'の腿の外側へ移した',
          ]);
          era.println();
          await tachyon.say_and_wait(['……？ ', callname, '？']);
          era.printButton(
            '「タキオンが走るとき、その大きな尻が揺れるのを見たい」',
            1,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'の豊かな尻を強く叩いた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の全身が震え、ちょうど密着したパンストに黒い波が幾重も立った',
          ]);
          await you.say_and_wait(
            'レースのあと、控え室でタキオンの中を白く満たしたい',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' の口調はさっきの称賛と同じく柔らかい。中身だけが、ひどく下品だ',
          ]);
          await era.printAndWait([
            '錯覚かもしれないが、',
            tachyon.get_colored_name(),
            ' の耳はかえってピンと立ったように見えた',
          ]);
          era.println();
          await you.say_and_wait(
            'それからバイブで塞いで、そのまま Winning Live に立たせる',
          );
          await you.say_and_wait(
            '衣装を着たタキオンが、腹の膨らみを抱えたまま舞台中央に……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はゆっくり',
            tachyon.sex,
            'の腹を撫で、言葉を終えようとした……',
          ]);
          await era.printAndWait([
            'だが、',
            you.get_colored_name(),
            ' の手は握られた',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が振り返る。いつの間にか、暗紅色の瞳は情欲に濡れた薄桃色になっていた',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……そんな言葉で私を煽って……末路が何か、わかっていますわね……❤',
          ]);
          era.println();
          await era.printAndWait('ああ、やりすぎた');
          await era.printAndWait([
            'いつからか、',
            tachyon.get_colored_name(),
            ' の尻が ',
            you.get_colored_name(),
            ' の下腹に乗っている',
          ]);
          await era.printAndWait(
            '擦り続けている。主人の調教を待つ子犬のように',
          );
          era.println();
          await era.printAndWait([
            'このまま始めてもいい……だが、最初の ',
            you.get_colored_name(),
            ' の目的は何だったか……？',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'レースは出ますわ❤️三冠❤️目標は三冠でいい❤️さあ……',
            callname,
            '❤️早く❤️来て❤️',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は微笑み、身を翻して ',
            tachyon.get_colored_name(),
            ' を下に敷いた',
          ]);
        } else if (relation <= 225) {
          era.printButton('利で誘う', 1);
          await era.input();
          await you.say_and_wait(
            'レースに出れば、賞金を実験に回せる。研究費の問題はそれで片づくはずだ',
          );
          era.println();
          await era.printAndWait([
            'まず利で誘う。',
            tachyon.get_colored_name(),
            ' のような研究者に感情論は笑われる。道理で説くのが最善だ',
          ]);
          await tachyon.say_and_wait([
            '却下ですわ、',
            callname,
            '。私の研究の副産物はそれ自体が売れる。レース準備に費やす時間の機会費用は、賞金の利益をすでに大きく上回っています',
          ]);
          era.println();
          await you.say_and_wait(
            'だがレースが呼ぶファンは？ ファンの消費力も、かなりの資金になるだろう？',
          );
          era.println();
          await tachyon.say_and_wait(
            'その通りですわ。本当に人気が取れれば、利益は研究単体を上回るかもしれません……',
          );
          await tachyon.say_and_wait(
            'ですが、そうなればいわゆるファンサービス——Winning Live や社会的イメージの維持——に割く時間も増え、時間コストはさらに上がります',
          );
          await tachyon.say_and_wait(
            'それに、あなたは一事を忘れていますわ。私が金を要するのは実験費のため。根本の目的は実験であって、稼ぐことではありません',
          );
          era.println();
          await you.say_and_wait(
            '……レースを放棄すれば、トレセン学園の建学方針に反する行為になる…',
          );
          await you.say_and_wait(
            '普通ならそこまで深刻ではないが、前科のあるタキオンなら……最悪、退学もあり得る',
          );
          era.println();
          await era.printAndWait('利が効かないなら、威で押す');
          await era.printAndWait(
            '脅しは気持ちのいい手段ではない。だが、あり得ない話でもない……',
          );
          await era.printAndWait([
            'あの理事長が許すとは思えないが、今は ',
            tachyon.get_colored_name(),
            ' を脅す材料にはなる',
          ]);
          era.println();
          await era.printAndWait([
            'だが ',
            tachyon.get_colored_name(),
            ' の反応は、面白い冗談を聞いたかのようだった',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '、初めて会ったときを覚えていますか？ あのときすでに退学で脅されていますわ。私が気にすると、本気で思っていますの？',
          ]);
          era.println();
          await you.say_and_wait('！', true);
          await era.printAndWait('一瞬で盲点を突かれた');
          await era.printAndWait([
            '当時の自分は、退学の話を聞くなり飛んで ',
            tachyon.get_colored_name(),
            ' を探しに行った',
          ]);
          await era.printAndWait([
            '逆に当時の',
            tachyon.sex,
            'は、いつも通り実験室で実験をしていた',
          ]);
          await era.printAndWait(
            '契約を結んだときの態度を見ても、代替案があるようには見えなかった',
          );
          await era.printAndWait([
            'つまり……',
            tachyon.sex,
            'は本当に、退学を気にしていない',
          ]);
          era.println();
          await era.printAndWait([
            'どうする……利も威も通じない',
            tachyon.sex,
            'に、まだ手はあるのか……',
          ]);
          era.printButton('諦める', 1);
          era.printButton('考え続ける', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '手も足も出ない——今の ',
              you.get_colored_name(),
              ' は、たぶんそれだ',
            ]);
            await era.printAndWait([
              'もう手はない。',
              tachyon.get_colored_name(),
              ' にとって、',
              tachyon.sex,
              'の必要なものはレースから得る必要がない',
            ]);
            await era.printAndWait([
              'そんな ',
              you.get_colored_name(),
              ' に残るのは、自分が最も受け入れられないと思っていた手だけだ',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'では、',
              callname,
              '、まだ私を説得する手はありますの？',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は面白がるように ',
              you.get_colored_name(),
              ' を見たが、次の瞬間、興味は驚きに変わった',
            ]);
            await era.printAndWait(
              '理由は簡単だ。目の前で話していた人間が突然跪けば、誰でも驚く',
            );
            era.println();
            era.printButton('「だって……見たい」', 1);
            await era.input();
            await you.say_and_wait('タキオンが競馬場を走る姿が見たい');
            await you.say_and_wait([
              'タキオンが他の',
              tachyon.uma_sex_title,
              'と競り合った末に勝つ姿が見たい',
            ]);
            await you.say_and_wait(
              'タキオンが Winning Live のセンターで輝く姿が見たい！',
            );
            await era.printAndWait(
              '声はだんだん強くなり、人も熱を帯び、最後の一句はほとんど叫びだった',
            );
            await era.printAndWait([
              '最後の情による説得。胸の内をそのまま出し、',
              tachyon.get_colored_name(),
              ' に届いてほしいと願う',
            ]);
            await era.printAndWait('……たぶん、自分の独りよがりにすぎない');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は恐る恐る額を床に付け、答えを待った',
            ]);
            era.println();
            await tachyon.say_and_wait('………そんなことで……跪く？');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は顔を上げず、跪いたままだった',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '私はレースを気にしない。退学も気にしない',
            );
            await tachyon.say_and_wait([
              '率直に言えば、こんな',
              tachyon.uma_sex_title,
              'に付いていくのは迷惑でしょう……',
            ]);
            await tachyon.say_and_wait(
              '私があなたなら、協議が合わない今、担当契約の解除を出しますわ……なのにあなたは……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は ',
              you.get_colored_name(),
              ' の行為をどう形容すればいいかわからず、言葉が途切れた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…………あなたの頭は何を考えていますの。それほどの必要がある？ 見合う？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は黙ったまま顔を上げ、',
              tachyon.sex,
              'を見た',
            ]);
          } else {
            await era.printAndWait([
              'ふと、',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の言葉から何かを掴んだ気がした',
            ]);
            era.println();
            await era.printAndWait([
              '知り合ってから、たぶん、おそらく、それほど長くはない',
            ]);
            await era.printAndWait([
              'だが ',
              you.get_colored_name(),
              ' の、',
              tachyon.get_colored_name(),
              ' という',
              tachyon.uma_sex_title,
              'への理解によれば……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は、無意味なことに時間を使わない',
            ]);
            await era.printAndWait('そう、無意味なことには使わない');
            await era.printAndWait('つまり');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'が時間を割くことには、必ず意味がある',
            ]);
            await era.printAndWait('では、問い1');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がトレセン学園に入った理由は？',
            ]);
            era.println();
            await era.printAndWait([
              '本当に必要がなければ、',
              tachyon.sex,
              'はそう選ばない',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がトレセン入学で得る利益……',
            ]);
            await era.printAndWait([
              '考えるまでもない。',
              tachyon.sex,
              'の目標から十分だ——',
              tachyon.uma_sex_title,
              'の可能性を探し、可能性の境界を超えること',
            ]);
            await era.printAndWait([
              'ならば、まず',
              tachyon.uma_sex_title,
              'のすべてを解き明かしてから、限界を語る',
            ]);
            await era.printAndWait([
              'だから、質の高い',
              tachyon.uma_sex_title,
              'が最も集まるトレセン学園は、最良の研究場だ。他にない',
            ]);
            await era.printAndWait([
              'したがって退学は、',
              tachyon.sex,
              'が言うほどどうでもいい話ではない',
            ]);
            era.println();
            await era.printAndWait('問い2');
            await era.printAndWait([
              'なぜ ',
              tachyon.get_colored_name(),
              ' は生徒として学園に入ったのか',
            ]);
            era.println();
            await era.printAndWait([
              'トレセンには生徒以外の支援職もあり、非競走',
              tachyon.uma_sex_title,
              '学科もある。面倒を避けるなら、最初からそちらへ行けばよかったのではないか？',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は閃きを掴んだ気がした',
            ]);
            era.println();
            await era.printAndWait([
              '競走',
              tachyon.uma_sex_title,
              'になる理由は、レースに出るためだ',
            ]);
            await era.printAndWait([
              'レースに出ないなら、競走',
              tachyon.uma_sex_title,
              'を選ぶ必要はない',
            ]);
            await era.printAndWait([
              'ここまで来れば、',
              tachyon.get_colored_name(),
              ' が先ほど言った「レースに出たくない」は……',
            ]);
            await era.printAndWait([
              'わからない。',
              tachyon.sex,
              'が嘘をつく理由はわからない。だが',
            ]);
            await era.printAndWait(
              '目の前の関門を越えるだけなら、そこまで知る必要はない',
            );
            era.println();
            era.printButton('「気にしている。実験に検証が要るからだ」', 1);
            await era.input();
            await era.printAndWait('間違いない');
            await era.printAndWait('それがレースに出る理由だ');
            await era.printAndWait('すべては研究と、最終目的のため');
            era.println();
            await you.say_and_wait([
              '他の',
              tachyon.uma_sex_title,
              '、同期すら勝てないなら、速度の限界超越など語れない',
            ]);
            await you.say_and_wait([
              '君も俺も、',
              tachyon.get_colored_name(),
              ' が誰にでも勝てると信じている。それでも実験の検証は必須だ',
            ]);
            era.println();
            await era.printAndWait('1+1=2 と同じだ');
            await era.printAndWait(
              '誰もが答えを知っていても、検算と式は必要だ',
            );
            await era.printAndWait('余分な手順ではない。研究の厳密さだ');
            await tachyon.say_and_wait(
              '……よく言いましたわ。ですが、模擬レースは？',
            );
            await tachyon.say_and_wait(
              'レースでなくても、同期やより強い相手と競う機会は探せます。相手不足の心配もありません',
            );
            await tachyon.say_and_wait(
              '私が本当に強さを示せるなら、本能に沈む獣たちは、私との勝負を逃しませんわ。違いますか？',
            );
            era.println();
            await era.printAndWait('聞く分には、説得力がある');
            await era.printAndWait([
              '模擬でも、',
              tachyon.get_colored_name(),
              ' ほど強い',
              tachyon.uma_sex_title,
              'と競えるなら、相手が100%を出さない心配はない',
            ]);
            await era.printAndWait('だが……');
            era.println();
            era.printButton(
              `「120%を出した${tachyon.uma_sex_title}を、見たことがありますか？」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait('…………おや？');
            await era.printAndWait(
              '模擬レースが出せるのは、いつも日常の実力だけだ',
            );
            await era.printAndWait(
              '限界を超えるなら、本物の競馬場でしかできない',
            );
            await era.printAndWait('古今の大穴は、みなそうではなかったか？');
            era.printButton(
              `「${tachyon.uma_sex_title}の特性は、競馬場でしか限界を超える実力を出せないことだ」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              '…………なるほど。それがトレーナーとしての見解ですの？ 他には？ まだ理由はありますか？',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は相変わらず、言い切れない遊び心の目で ',
              you.get_colored_name(),
              ' を見る。',
              you.get_colored_name(),
              ' は少し落ち着かない',
            ]);
            await era.printAndWait([
              'それでも ',
              you.get_colored_name(),
              ' は、胸のいちばん奥に埋めていた理由を出した',
            ]);
            era.println();
            era.printButton('「…………見たい」', 1);
            await era.input();
            await tachyon.say_and_wait('ん？');
            await tachyon.say_and_wait('…………');
            await you.say_and_wait('タキオンが競馬場を走る姿が見たい、');
            await you.say_and_wait([
              'タキオンが他の',
              tachyon.uma_sex_title,
              'と競り合った末に勝つ姿が見たい',
            ]);
            await you.say_and_wait(
              'タキオンが Winning Live のセンターで輝く姿が見たい',
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の表情を仔細に見つめ、それから ',
            you.get_colored_name(),
            ' の目に留まった。初めて会ったときと同じように、',
            you.get_colored_name(),
            ' の瞳の奥を凝視する',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…………フフ、狂人に狂人、ですの？ 面白い、面白いですわ！',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は、突然笑い出した',
            tachyon.sex,
            'を落ち着かない目で見た',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の気分がなぜこれほど激しく動いたのかはよくわからない。だが……事態は ',
            you.get_colored_name(),
            ' に有利なほうへ傾いている？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'それなら、実験動物の積極性のため、適度な褒美も時には必要ですわね。',
          );
          await tachyon.say_and_wait(
            '承知しました。レースには出ますわ。走るなら、まずはクラシック三冠を軽く取ってから……',
          );
          await tachyon.say_and_wait([
            'できない、などとは言いませんわね、',
            callname,
            '？',
          ]);
          era.println();
          await era.printAndWait(['だが、', tachyon.sex, 'は付け加えた']);
          era.println();
          await tachyon.say_and_wait([
            'その代わり……私を退屈させないでくださいまし、',
            callname,
          ]);
        } else {
          era.printButton('「だって、見たい」', 1);
          await era.input();
          await tachyon.say_and_wait('……は？');
          await you.say_and_wait('タキオンが競馬場を走る姿が見たい、');
          await you.say_and_wait([
            'タキオンが他の',
            tachyon.uma_sex_title,
            'と競り合った末に勝つ姿が見たい',
          ]);
          await you.say_and_wait(
            'タキオンが Winning Live のセンターで輝く姿が見たい',
          );
          await era.printAndWait('それに、それ以外にも……');
          await era.printAndWait([
            you.get_colored_name(),
            ' は考え、さらに付け加えた',
          ]);
          era.println();
          await you.say_and_wait(
            'もちろん、もし、本当に、万一なら、タキオンが負けて地面に伏せ、悔しがる姿も見てみたい！',
          );
          await tachyon.say_and_wait('！');
          era.println();
          era.printButton('（おや、逆効果が効いた？）', 1);
          await era.input();
          await you.say_and_wait(
            '「ただし、タキオンが負けを恐れるなら理解もできる。それなら出ないほうがいい……」',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はわざと ',
            tachyon.get_colored_name(),
            ' を一瞥し、',
            tachyon.sex,
            'の態度がおかしいと見て、急いで口を閉じ、引き際を守った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……カリギュラ効果を私に使うとは、',
            callname,
            '、ずいぶん大胆ですわね',
          ]);
          await you.say_and_wait('違う……ぐぷっ！！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は反論しようとしたが、立ち上がった ',
            tachyon.get_colored_name(),
            ' に重力加速度で腹の上へ座られ、蛙を潰したような声を上げた',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ふん……一己の私欲のために、天才である私の貴重な時間を、こんな退屈な獣同士の争いに使えと？ 大胆不敵ですわね',
          ]);
          era.printButton('「そういう意味じゃない……」', 1);
          await era.input();
          await you.say_and_wait(
            'それに、レースに出れば必要な実験データも集められるだろう……',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は体勢を直し、',
            you.get_colored_name(),
            ' を',
            tachyon.sex,
            'がいちばん楽に座れる人肉の椅子に整えた',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' も自然に手を上げ、',
            tachyon.sex,
            'の肩を揉んだ',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ふぅ……助かりますわ。最近はずっと実験机の前で、全身が痛くて……',
          );
          await tachyon.say_and_wait('レースへの出走は……');
          await tachyon.say_and_wait(
            'できなくはありませんわ。目標は、まず三冠にしておきましょう、',
          );
          await tachyon.say_and_wait(
            '同期の第一にもなれないなら、限界を語る資格はありませんわ……',
          );
          await tachyon.say_and_wait([
            'では、',
            callname,
            '、私を全力で補佐しますわね？',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'の狂気じみた目を見て、笑って言った',
          ]);
          era.printButton('「当然だ」', 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' の目標が決まった',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '課題の実現可能性';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        tachyon.uma_sex_title,
        'とトレーナーの初対面が、二人の歯車が回り始める瞬間なら',
      ]);
      await era.printAndWait('この日は、その歯車の音が世界を震わせる瞬間だ');
      await era.printAndWait([
        '…………少なくとも、他の',
        tachyon.uma_sex_title,
        'にとっては',
      ]);

      era.printButton('「タキオン！」', 1);
      await era.input();
      await era.printAndWait([
        '自分の',
        tachyon.uma_sex_title,
        'が本当にそんな叙事詩の開巻のような感慨を持っているなら、大切なレース前の時間を他の',
        tachyon.uma_sex_title,
        'との雑談に費やしはしないだろう',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ですから、いわゆる時間とは人が与えた定義にすぎませんわ。人間が作った単位で、速いも遅いも相対の概念です…………',
      );
      await tachyon.say_and_wait(['おや、', callname, '？ 来ましたわね']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は言葉を失った。あと数分で出走',
        tachyon.uma_sex_title,
        'は入場する。生涯に理論上一度きりのメイクデビューだ、',
      ]);
      await era.printAndWait([
        '一番人気の主役である',
        tachyon.sex,
        'が、発走前まで人と雑談し、しかも中身はこの程度の話題だ',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        tachyon.get_colored_name(),
        ' の論にうっとりしている子供たちに別れを告げ、',
        tachyon.get_colored_name(),
        ' を地下道へ引っ張った',
      ]);
      if (you.sex_code === 1) {
        era.println();
        await tachyon.say_and_wait([
          '男があれほど焦ると嫌われますわよ、',
          callname,
        ]);
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は相変わらず悠然と ',
        you.get_colored_name(),
        ' の後ろを歩いた',
      ]);
      await era.printAndWait([
        '二人の足音が空洞の地下道に響き、空気が一瞬気まずい',
      ]);

      era.printButton('「……君、人付き合いが上手いんだな」', 1);
      await era.input();
      await era.printAndWait([
        '口を開けば明らかな間つなぎだ。だが ',
        tachyon.get_colored_name(),
        ' はその気まずさに気づかないか、気づいて気づかないふりをして言った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '当然ですわ。個人イメージを時々育てなければ、実験体が尽きてしまいますもの',
      );
      era.println();
      await era.printAndWait(
        '本当にイメージを気にするなら、普段から変なことをするな……',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、まだまだですわね。イメージというものは、人は悪人に理由を与え、善人に綻びを探すのを好むのです',
      ]);
      await tachyon.say_and_wait(
        '完璧な人格を作って暴かれるより、狂気の科学者に疎外の理由を見つけて同情するほうを、彼らは好みますわ',
      );
      era.println();
      await era.printAndWait([tachyon.sex, 'は冷たく笑った']);
      era.println();
      await tachyon.say_and_wait([
        'さっきの会話は種を植えただけ。このあとレースに勝てば、今日の話は',
        tachyon.couple_title,
        'の胸に根を張ります',
      ]);
      await tachyon.say_and_wait(
        '将来困ったとき、自然と『親切なタキオン先輩』を探しに来るでしょう、',
      );
      await tachyon.say_and_wait([
        '慈悲深い私は、もちろん無償で',
        tachyon.couple_title,
        'を助けますわ',
      ]);
      await tachyon.say_and_wait(
        'ただし、礼として実験データを記録させていただくのは当然、ですわね？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は冷や汗をかいた。イメージのためだろうとは思っていたが、ここまで先を読んでいたとは',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait('おやおや、誰かが嫉妬していますの？');
        era.println();
        await era.printAndWait([
          '何か勘違いしたのか、',
          tachyon.get_colored_name(),
          ' は突然 ',
          you.get_colored_name(),
          ' に身体を寄せた',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は後ろから ',
          you.get_colored_name(),
          ' を抱き、細い手が不潔に ',
          you.get_colored_name(),
          ' の身体を撫で回り、最後は書類の下の位置に留まった',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await era.printAndWait([
            tachyon.sex,
            'はズボン越しに膨らみの形をゆっくり辿り、',
            you.get_colored_name(),
            ' の身体が目覚めるにつれ、描く手つきは握り、扱くに変わった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '安心しなさい。女性より、満たされる感覚のほうが好みですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の耳に寄り、蘭のような息で言った',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ただし……あなたが女性になっても、受け入れられるかもしれませんわね？',
          );
          era.println();
        }
        await era.printAndWait([
          tachyon.sex,
          'はくっくと笑い、',
          you.get_colored_name(),
          ' を離し、一人で競馬場へ歩いていった',
        ]);
      }
      era.printButton(
        '「……いくらなんでも、勝てなければその算段は水泡に帰すだろう？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は振り返らず、光のほうへまっすぐ歩いた',
      ]);
      await era.printAndWait([
        '暗い地下道から突然外を見て、',
        you.get_colored_name(),
        ' はその光に目が痛いくらいだった',
      ]);
      await era.printAndWait([
        '涙に照らされ、場へ上がる',
        tachyon.sex,
        'は、光に溶けるように見えた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'あなたはここで、私の凱旋を大人しく待っていれば十分ですわ',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '研究基盤と労働条件';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      era.printButton('「最高の走りだった！ 光みたいだ！」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '実験の検算にすぎないのに、そんなに喜んで。',
        callname,
        '、おめでたいですわ……あっ！',
      ]);
      era.printButton('どうした！', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は突然声を上げた ',
        tachyon.get_colored_name(),
        ' を見て、胸が緊った',
      ]);
      await you.say_and_wait('レースのあと……まさか、脚が……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて ',
        tachyon.get_colored_name(),
        ' の脚を確かめようとしたが……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'だめだめ！ ゲートに付けた、スタート速度を記録する装置を回収し忘れていますわ！',
      );
      era.println();
      if (relation > 225) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は息を吐いた。それが理由か',
        ]);
        era.printButton('「問題ない。スタート速度はもう記録してある」', 1);
        await era.input();
        await era.printAndWait([
          '心が通じているとまでは言えない。だが ',
          tachyon.get_colored_name(),
          ' のトレーナーとして',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'が欲しいデータはだいたいわかる。そもそも場を走る',
          tachyon.sex,
          'が気にすることではない',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'おお！ よくやりましたわ、',
          callname,
          '！ 今すぐ確認しましょう！',
        ]);
        era.println();
        await era.printAndWait([
          '得たばかりの勝利も、これから始まる Winning Live も、二人の目には入らない。さっきレースを走ったのではなく、ただの研究だったかのようだ',
        ]);
        era.println();
        await era.printAndWait([
          '記録したデータを何度も見返し、仮説を重ね、Winning Live が始まり外から慌ただしいノックが聞こえて、やっと我に返った',
        ]);
      } else {
        await era.printAndWait('な、何だそれは！？');
        await era.printAndWait(
          'ゲートで発走を待っているあいだに、そんなことをする余裕があったのか？',
        );
        await era.printAndWait(
          'いや、そもそもゲートに勝手にセンサーを付けるな',
        );
        await era.printAndWait([you.get_colored_name(), ' は胃が痛んだ']);
        era.println();
        await era.printAndWait([
          'その後、機材回収のため ',
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' は競馬場へ潜入した……',
        ]);
        await era.printAndWait([
          '言うまでもなく URA に見つかり、何度も詫びた末、',
          tachyon.get_colored_name(),
          ' は機材を回収できた。すべては順調だ',
        ]);
        await era.printAndWait([
          '……ただし回収中、職員たちの視線が少し痛かっただけだ',
        ]);
        era.println();
        await era.printAndWait('【名声が下がった！】');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_36: (() => {
    const title = '年度研究計画の策定';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} pocket ダンツフレーム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hope_sta ホープフルステークス（色付き名）
     */
    const f = async (
      tachyon,
      pocket,
      you,
      callname,
      relation,
      love,
      hope_sta,
    ) => {
      await era.printAndWait([
        'メイクデビューから二ヶ月後、',
        you.get_colored_name(),
        ' は突然 ',
        tachyon.get_colored_name(),
        ' に実験室へ呼ばれた',
      ]);
      await era.printAndWait('いつもの実験薬かと思ったら……');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、十二月末の ',
        hope_sta,
        ' に出ますわ。手配しなさい',
      ]);
      era.printButton('「え？ ホープフルステークス？」', 1);
      await era.input();
      await tachyon.say_and_wait('ふん？ 何か問題ですの？');
      era.println();
      await era.printAndWait([
        '入った瞬間、',
        tachyon.get_colored_name(),
        ' は夕食の献立でも話すような軽い口調で ',
        you.get_colored_name(),
        ' に言った',
      ]);
      await era.printAndWait([
        'ホープフルステークス……十二月末の G1 中距離。ジュニア級の',
        tachyon.uma_sex_title,
        'にとって、最も重要な競走の一つだ',
      ]);
      await era.printAndWait('日程なら……まだ二ヶ月ある。今登録すれば間に合う');
      await era.printAndWait([
        '勝てるか……考えるまでもない。世界最速は光速で、光速より速いのが ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('唯一の問題は、why do it');
      await era.printAndWait([
        'レースに興味の薄かった ',
        tachyon.get_colored_name(),
        ' が、なぜ特定の一戦に出たがる？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は胸の疑問をそのまま口にした',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は答えず、机の新聞を叩いた。今日のスポーツ面だ。覚えている限り……',
      ]);
      await era.printAndWait([
        '今日いちばんのニュースは「',
        pocket.get_colored_name(),
        ' と クロフネ が ',
        hope_sta,
        ' 出走確定」',
      ]);
      era.println();
      await era.printAndWait([
        'なるほど……',
        pocket.get_colored_name(),
        ' も クロフネ も、この世代で最も注目される代表だ',
      ]);
      await era.printAndWait([
        'いくらなんでも、',
        tachyon.get_colored_name(),
        ' にも同世代の強者とぶつかる気持ちはあるだろう……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'もちろん新薬の試験ですわ！ 強敵のないレースで人を限界まで追い込めますか。限界に触れなければ、薬の補助も要りません',
      );
      era.println();
      await era.printAndWait('ああ……どうせそういう展開だと思っていた……ん？');
      era.printButton('「待て、レースでの薬物……規約違反だろう？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        'ん？ それを心配していますの、',
        callname,
        '。安心しなさい。三流の薬検技術で、私の薬がわかると思いますの？',
      ]);
      era.println();
      await you.say_and_wait('違う！ そこが問題じゃない！');

      era.printButton(
        '「それは……少し……スポーツマンシップに……反しないか……？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は言葉を慎重に選んだ。相手を刺激しそうな語は避ける',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'ん？ ',
        callname,
        '？ 私が使う薬を興奮剤の類だと思っているのでは？ あなたの中の私は、そんな人間ですの？',
      ]);
      era.println();
      await era.printAndWait([
        '悪人が先に訴える、というやつか？ ',
        you.get_colored_name(),
        ' は慌てて首を振った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……安心しなさい。興奮剤ではありませんし、場での速度を上げる効果もありません……',
      );
      await tachyon.say_and_wait(
        'ただし、十分強い相手がいなければ効果を測れない薬、ではありますわ',
      );
      era.println();
      era.print([tachyon.sex, 'の言葉を聞き、', you.get_colored_name(), '……']);
      era.printButton('信じる', 1);
      era.printButton('半信半疑', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          'そうか。',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の説明を聞いて頷き、何も言わず ',
          tachyon.get_colored_name(),
          ' の出走手続きに向かおうとした。それがかえって ',
          tachyon.get_colored_name(),
          ' を戸惑わせた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'いいえいいえ……',
          callname,
          '、私の言葉を、それほど信じますの？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は頷いた。なぜ ',
          tachyon.get_colored_name(),
          ' 本人が驚くのかわからない',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '万一私が、万一それが本当に……つまり、万一あなたを騙していたら？',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' に騙されたら……']);
        await era.printAndWait('考えたこともない。だが、もし、万一なら');

        era.printButton('「騙されても構わない」', 1);
        await era.input();
        await era.printAndWait('あの日から、決めていた');
        await era.printAndWait([tachyon.sex, 'の可能性と、すべてを信じる']);
        await era.printAndWait([
          tachyon.sex,
          'がより遠い世界を見られるなら、騙されて何だ',
        ]);
        era.println();
        await tachyon.say_and_wait('……信頼、いいえ、盲信、ですの？');
        era.println();
        await era.printAndWait('盲信');
        await era.printAndWait('よく考えれば、その通りだ');
        await era.printAndWait([
          '自分は ',
          tachyon.get_colored_name(),
          ' のせいで、他が見えなくなった盲人だ',
        ]);
        await era.printAndWait([
          '盲目だからこそ光を欲し、いちばん明るい',
          tachyon.sex,
          'を欲する',
        ]);
        era.println();
        if (relation <= 375) {
          await tachyon.say_and_wait([
            'フフフ、構いませんわ。それなら、私の歩みについてきなさい、',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は袖を払い、実験へ戻り、この話の終わりを告げた',
          ]);
          era.println();
          await era.printAndWait('終わる前に、最後の一句');
          era.println();
          await tachyon.say_and_wait(
            '褒美ですわ。約束します。あなたは特等席で、可能性の彼方を目撃しますわ！',
          );
        } else {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            'なぜか、',
            tachyon.get_colored_name(),
            ' は不満そうだった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '普通なら、今ごろ私は喜ぶはずですわ。モルモットとしての忠誠を示しているのですから',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は不機嫌に ',
            you.get_colored_name(),
            ' の胸を突いた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ですが、このような盲従は嫌いですわ。意見を出せない実験動物ではなく、助言をくれ、傍を歩く仲間であってほしい',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は自分の態度を少し反省し、変化として問いを選んだ',
          ]);
          era.printButton('「では、そうする理由は……？」', 1);
          await era.input();
          await tachyon.say_and_wait('…………ごめんなさい、今はまだ言えませんわ');
          await tachyon.say_and_wait(
            'いつか必ず。ですが……今ではない。保証しますわ。今はまず、私を信じて？',
          );

          era.printButton('「さっきまで盲信するなと言ったのに？」', 1);
          await era.input();
          await tachyon.say_and_wait(
            'それは、その……違いますわ。さっきは理由もなく信じることで、今は理由があるが言えないことを信じるのです',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' にはその差がまだよくわからない。だが賢明にも争いは避けた',
          ]);
          era.println();
          await era.printAndWait([
            'とにかく、',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の次の目標は ',
            hope_sta,
            ' に決まった',
          ]);
          await era.printAndWait([
            '事故がなければ、',
            tachyon.sex,
            'を出走させても問題はないはずだ……',
          ]);
        }
      } else {
        era.println();
        await you.say_and_wait('本当か？', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸には、まだ疑いが残る。だが……',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は肩をすくめ、',
          tachyon.get_colored_name(),
          ' の出走申請の準備を始めた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '？ 自分が言うのも変ですけれど、少しも疑わないのですか？ それほど信じる？',
        ]);
        era.printButton(
          '「信じない。だが薬なしでもタキオンは勝てると信じる」',
          1,
        );
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の行動は見当もつかず、薬の作用もわからない',
        ]);
        await era.printAndWait([
          'そもそも ',
          you.get_colored_name(),
          ' は、',
          tachyon.get_colored_name(),
          ' が「規約はだめだ」と言われて素直に手を引く人間だと思っていない',
        ]);
        await era.printAndWait('だがこの一点だけは、疑う余地がない');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は、薬物という外力がなくても、絶対に勝てる',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'に興奮剤は要らない。',
          you.get_colored_name(),
          ' は、それだけを信じている',
        ]);
        era.println();
        if (relation > 0 && love < 50) {
          await tachyon.say_and_wait(
            'それが答えですの？ 私は信じないが、私の才能は信じる？ よろしい！ それこそ研究者の態度ですわ！',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は自分の答えに満足したように、「うんうん」と頷いた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'では、私の勝利を信じなさい。後ろについてくれば、あなたが望む輝きを見せますわ',
          );
          era.println();
          await era.printAndWait([
            'こうして、',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の次の目標は ',
            hope_sta,
            ' に決まった',
          ]);
          await era.printAndWait(
            'ただ……格好いい言葉で締めたが、この出走は本当に大丈夫か。もう少し考える必要があるかもしれない',
          );
        } else {
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '……普段から、それくらい綺麗に言えればいいのに',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は冷たく言った。だが',
              tachyon.sex,
              'の尻尾は揺れていて、まんざらでもなさそうだ',
            ]);
          } else {
            era.println();
            await tachyon.say_and_wait([
              callname,
              '……その言い方、私を少しも信じていないみたいですわ',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は不満げに口を尖らせ、強く横を向いた',
            ]);
            era.println();
            await era.printAndWait('信じても信じなくてもだめなのか……');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は額を押さえ、子どもを宥めるように ',
              tachyon.get_colored_name(),
              ' へ、どれほど信じ、どれほど愛しているかを話し、やっと',
              tachyon.sex,
              'の機嫌を直した',
            ]);
          }
          era.println();
          await era.printAndWait([
            'こうして、',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の次の目標は ',
            hope_sta,
            ' に決まった',
          ]);
          await era.printAndWait([
            'ただ……そう言っても、こんな',
            tachyon.sex,
            'を場に出して本当に大丈夫か。やはり悩む必要があるかもしれない',
          ]);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_hope_sta: (() => {
    const title = '課題研究の推進';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, callname, hope_sta) => {
      await era.printAndWait('ついに、この日が来た');
      await era.printAndWait([
        hope_sta,
        '——デビューしたての',
        tachyon.uma_sex_title,
        'たちにとって、下半期で最も重要なレースと言っていい',
      ]);
      await era.printAndWait('三冠路線を目指すなら、なおさらだ');
      await era.printAndWait([
        'ジュニア級唯一の中距離G1。才能ある',
        tachyon.uma_sex_title,
        'が夢の旅へ踏み出す、最初の一歩。',
      ]);
      era.println();
      await era.printAndWait([
        'それほど大事な一日なのに、',
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' は……',
      ]);
      era.println();
      await you.say_and_wait('あれ？');
      era.println();
      await era.printAndWait([
        'どこかで走り回っていると思っていた ',
        tachyon.get_colored_name(),
        ' が、今日は珍しく控え室で大人しくしていた',
      ]);
      era.println();
      await tachyon.say_and_wait(['おや、', callname, '、来ましたわね']);
      era.println();
      await era.printAndWait([
        '控え室で、なにかのスプレーを脚に吹きかけている ',
        tachyon.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' を一度見上げただけで、また手元のスプレーに集中した',
      ]);

      era.printButton('「それが、言っていた薬か？」', 1);
      await era.input();
      await tachyon.say_and_wait('ええ、このレースで役立てばいいですわ……');
      await tachyon.say_and_wait(
        '今さら隠す意味もありませんわ。これは、脚の筋肉をほぐす薬……',
      );
      await tachyon.say_and_wait(
        '冷却スプレーに近いものですわね。レース後の怪我を防ぐための事前使用。今回の実験が成功すれば……',
      );
      era.println();
      await era.printAndWait('なるほど');
      await era.printAndWait([
        'それを聞いて、',
        you.get_colored_name(),
        ' は思わず息を吐いた',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' を信じているつもりでも、胸の奥にはどうしても一抹の不安が残る',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 本人への疑念ではない。',
        tachyon.get_colored_name(),
        ' の薬が毎回正確に効くわけではない、という話だ……でなければ、今も全身が光っているはずがない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'よろしい、準備は万全ですわ。',
        callname,
        '、行きましょう',
      ]);
      era.println();
      await era.printAndWait('声が高ぶっているのは、会場の空気のせいだろうか');
      await era.printAndWait('目が輝いているのは、ライバルへの期待だろうか');
      await era.printAndWait('それとも……');
      era.println();
      await tachyon.say_and_wait(
        '今日の相手が、薬効を最大限まで引き出してくれますように',
      );
      era.println();
      await era.printAndWait('やはり、実験のためか');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、いつものままの',
        tachyon.sex,
        'がコースへ向かうのを見送った',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = '希望';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, hope_sta) => {
      era.printButton('「強すぎる！」', 1);
      await era.input();
      await era.printAndWait([
        '初めてのG1。相手が ',
        tachyon.get_colored_name(),
        ' でも、',
        you.get_colored_name(),
        ' は冷や汗をかかずにいられなかった',
      ]);
      await era.printAndWait([
        'だが国内最高峰の舞台でも、',
        tachyon.sex,
        'が見せたのは、周囲を超える強さだった',
      ]);
      era.println();
      await tachyon.say_and_wait('くふふ、そんなに興奮して……大げさですわ');
      era.println();
      await era.printAndWait([
        'コースを下り、控え室へ戻った ',
        tachyon.get_colored_name(),
        ' の声にも、愉悦が混じっている',
      ]);
      await era.printAndWait([
        'その声を聞けば、',
        you.get_colored_name(),
        ' にもわかった',
      ]);
      era.printButton('「実験は成功したな？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'ええええ！ あら、やはり良い実験対象は大事ですわ！ 今日の実験は大成功ですわよ！',
      );
      era.println();
      await era.printAndWait([
        'やはり ',
        tachyon.get_colored_name(),
        ' にとって、G1ですら少し大きな実験場にすぎないのだろう',
      ]);
      await era.printAndWait([
        'それでも',
        tachyon.sex,
        'は、周囲を圧倒する走りを見せた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'そんなことより、早く戻りましょう。次のレースの準備ですわ！',
      );
      era.println();
      await you.say_and_wait('え？ 急に熱が……？');
      await you.say_and_wait(
        'まさか、レースへの情熱に目覚めた……わけではないだろうな',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        '次のレース実験の青写真が、もう頭の中にありますわ！ ははは！',
      );
      era.println();
      await era.printAndWait(
        '……まあいい。実験への情熱も、情熱の目覚めのうちだろう',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の ',
        hope_sta,
        ' は、終わった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_lose: (() => {
    const title = '希望';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        'レース後、',
        you.get_colored_name(),
        ' は黙って控え室へ戻る ',
        tachyon.get_colored_name(),
        ' を見た',
      ]);
      await era.printAndWait('道中、誰も口を開かなかった');
      await era.printAndWait([
        'この敗戦は、',
        you.get_colored_name(),
        ' にとっても',
        tachyon.sex,
        'にとっても、大きな打撃だった',
      ]);
      era.println();
      await tachyon.say_and_wait('……実験、失敗ですわね');
      era.println();
      await era.printAndWait([
        'このレースの ',
        tachyon.get_colored_name(),
        ' は、明らかに様子がおかしかった……',
      ]);
      await era.printAndWait([
        '普通の人にはわからないだろう。だが今日の走りには、',
        tachyon.sex,
        'が持つあの……光がなかった',
      ]);
      await era.printAndWait([
        '最初から鈍い光は、後半でほとんど消え、',
        tachyon.get_colored_name(),
        ' は敗れた',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「……気にするな。実験の失敗は一度だけだ。戻ろう。実験に絶対成功などない」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は思わず',
        tachyon.sex,
        'を慰めた',
      ]);
      await era.printAndWait([
        'だが床に座った',
        tachyon.sex,
        'の表情は、なぜかおかしい',
      ]);
      await era.printAndWait('悔恨ではない。むしろ……何かを耐えている？');

      era.printButton('「タキオン……？ 身体は……」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait(
          'なんでもありませんわ。心配いりません……行きましょう',
        );
        era.println();
        await era.printAndWait([
          'まだ、',
          tachyon.sex,
          'の心の壁は破れないのかもしれない',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は何も言わず、',
          tachyon.sex,
          'の後ろについて去った',
        ]);
      } else {
        await tachyon.say_and_wait([
          '……大丈夫ですわ、',
          callname,
          '。脚は……問題ありません。次、調整すれば大丈夫ですわ',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' のほうから慰め、',
          you.get_colored_name(),
          ' を安心させようとした',
        ]);
        await era.printAndWait([
          'いつもの、成算ありげな',
          tachyon.sex,
          'を思い出し、',
          you.get_colored_name(),
          ' の胸も徐々に落ち着いた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          {
            content: '…………代替案、ですかしら……あるいは……',
            fontSize: '0.75rem',
          },
        ]);
        era.println();
        await era.printAndWait([
          'だが、聞かれていないつもりで呟いたその言葉が、',
          you.get_colored_name(),
          ' の胸を再び吊り上げた',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '年度審査';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {boolean} hope_sta_win ホープフルステークスに勝ったか
     */
    const f = async (tachyon, you, callname, relation, hope_sta_win) => {
      await tachyon.say_and_wait([
        'おや、',
        callname,
        '、それは……書き初め、ですの？',
      ]);
      era.println();
      await era.printAndWait([
        'ノックもせずトレーナー室に入ってきた ',
        tachyon.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の手元を見て首を傾げた。',
        you.get_colored_name(),
        ' は頷いた',
      ]);
      era.println();
      await era.printAndWait([
        '今日は正月。',
        you.get_colored_name(),
        ' は、新しい年の願いを書きつけているところだった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '三冠……ねえ、',
        callname,
        '。私が言う資格は薄いですけれど、ずいぶん執念深いですわね。三冠に、特別な意味があるのですか？',
      ]);
      era.println();
      await you.say_and_wait('意味……特にはない。ただ、言うなら');
      era.printButton(
        '「タキオンが出走すると約束した……そしてタキオンは負けないと思う」',
        1,
      );
      await era.input();
      if (hope_sta_win) {
        if (relation > 0) {
          await tachyon.say_and_wait(
            'ふんふん、よろしい。天才の私は、たしかに無敗ですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は得意げに言った',
          ]);
        } else {
          await tachyon.say_and_wait(
            '勝ち負けなど、実験と無関係なものによくそこまで熱を上げられますわね',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は冷たく言った',
          ]);
        }
      } else {
        await tachyon.say_and_wait([
          '…………',
          callname,
          '、私はもう負けているのを忘れたのですか？',
        ]);
        era.println();
        await era.printAndWait('……ああ、そういえばそんなことも……');
        era.printButton('「それでも、タキオンは最強だ！」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '…………それほどまでにおめでたいと、言葉がありませんわ',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は思わず額を押さえた',
        ]);
      }
      await tachyon.say_and_wait('それなら、夢はもう少し遠くへ置きませんの？');
      era.println();
      await era.printAndWait('遠く……？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、すぐには ',
        tachyon.get_colored_name(),
        ' の意図がわからなかった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '夢を優先なさい、',
        callname,
        '。あなたの夢、私の夢。もっと大きな夢を書きなさい！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の両目が光り、熱が満ちた',
      ]);
      era.println();
      await era.printAndWait([
        'もっと大きな夢……',
        you.get_colored_name(),
        ' は少し考え、もう一枚の紙を取り出し、そこに……',
      ]);
      era.printButton('無敗（全能力+5）', 1, { disabled: !hope_sta_win });
      era.printButton('無限（スキルPt+20）', 2);
      era.printButton('無傷（スタミナ+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            '無敗。光速を超える粒子が、凡人に敗れるはずがない',
          );
          era.println();
          await tachyon.say_and_wait(
            'おや？ 年間無敗、という意味ですの？ くふふ、よろしい。期待できる目標ですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は興味深げに ',
            you.get_colored_name(),
            ' の目標を見た。そして、冷水を浴びせた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ただし……出走するかどうかは、私の気分次第ですわよ',
          );
          era.println();
          await era.printAndWait([
            '出走しなければ無敗、というわけですわね——',
            tachyon.get_colored_name(),
            ' は高笑いし、',
            you.get_colored_name(),
            ' にはまったく面白くない冗談を言った',
          ]);
          await era.printAndWait([
            'こういうこと……',
            tachyon.get_colored_name(),
            ' なら、本当にやりかねない……',
          ]);
          await era.printAndWait([
            '元日から ',
            you.get_colored_name(),
            ' の胃は、担当',
            tachyon.uma_sex_title,
            'のせいで痛み始めた。今年も楽な一年ではなさそうだ',
          ]);
          break;
        case 2:
          await era.printAndWait([
            '無限。夢というなら……',
            tachyon.get_colored_name(),
            ' の夢ほど、目標にふさわしいものはない',
          ]);
          await era.printAndWait('限界を超え、制約をなくす。だから無限');
          era.println();
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '……くふふ、あなたのような人が、そんなことを考える？ 幼い娘を釣る言葉はしまっておきなさい。あなたは私を補助する道具です。身分を弁えなさい',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は容赦なく ',
              you.get_colored_name(),
              ' を嘲った',
            ]);
            await era.printAndWait([
              '……たしかに、信じてもらえる振る舞いではなかった。だが ',
              you.get_colored_name(),
              ' は、本気でそう思っている',
            ]);
            era.println();
            await era.printAndWait([
              '苦笑しながら、',
              you.get_colored_name(),
              ' は今年も八割がた楽ではないと悟った',
            ]);
          } else if (relation <= 225) {
            await tachyon.say_and_wait(
              'おや？ 無限の可能性、ですの？ よろしい。私たちにふさわしい選択ですわ。新しい年は、その目標へ進みましょう',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は満足げだ。よかった！',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'ですので、可能性に届くために、今日の薬は……',
            );
            era.println();
            await era.printAndWait('いきなり本丸！？');
            await era.printAndWait([
              'さっきの大言壮語のせいで拒めない ',
              you.get_colored_name(),
              ' は、薬剤を飲み干した',
            ]);
            await era.printAndWait([
              '頭上に光輪を載せたまま、',
              you.get_colored_name(),
              ' は今年も楽ではないと予感した',
            ]);
          } else {
            await tachyon.say_and_wait([
              'ふんふん！ 当然ですわ、',
              callname,
              '。あなたなら、そう選びますもの！',
            ]);
            await tachyon.say_and_wait(
              '私たちの夢、私たちが追う可能性。より広い未来のため、限界を破り、無限へ至る！',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は熱に浮かされた目で ',
              you.get_colored_name(),
              ' を見た。その狂気の光が、',
              you.get_colored_name(),
              ' を引きつける',
            ]);
            await era.printAndWait('そうだ、私たちの夢のために……');
            era.println();
            await tachyon.say_and_wait(
              'ですので、今日のおせちもお願いしますわ',
            );
            era.println();
            await era.printAndWait(
              '待て、おせちまで自分で作る話は聞いていない！？',
            );
            await era.printAndWait([
              tachyon.sex,
              'の期待する目の下、',
              you.get_colored_name(),
              ' は観念してフライ返しを取った',
            ]);
            await era.printAndWait('今年も、楽な一年ではなさそうだ……');
          }
          break;
        case 3:
          await era.printAndWait(
            '無傷。レースはどうでもいい。可能性も、できる限り追えば足りる。いちばん大事なのは無病息災。より長い未来のために',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…………');

            era.printButton('「タキオン？」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が不意に黙り込んだ。',
              you.get_colored_name(),
              ' は首を傾げて尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait('……退屈な答えですわ');
            await tachyon.say_and_wait([
              '無傷で、どう歴史を作るのです？ 犠牲なくして創造はありません。無傷……',
              callname,
              '、あなたの答えがこれほど退屈だとは思いませんでしたわ',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は突然不機嫌だ。何か言い間違えただろうか',
            ]);
            era.println();
            await tachyon.say_and_wait('無傷……できれば……もし……');
            era.println();
            await era.printAndWait([
              'だが ',
              you.get_colored_name(),
              ' はすぐ気づいた。',
              tachyon.sex,
              'の怒りは ',
              you.get_colored_name(),
              ' に向けたものではない。何か別の……わからない。そもそも ',
              you.get_colored_name(),
              ' は、',
              tachyon.sex,
              'が怒っている理由すら把握できていない',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……好きになさい。そんな退屈な願い、そんな退屈な……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は憤ってトレーナー室を出ていき、ぽかんとした ',
              you.get_colored_name(),
              ' だけが残った',
            ]);
          } else {
            await tachyon.say_and_wait('…………ええ、そうですね');
            era.printButton('「タキオン？」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の様子がおかしい。',
              you.get_colored_name(),
              ' は思わず尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'ああ、なんでもありませんわ。ええ、トレーナーという立場なら、',
              tachyon.uma_sex_title,
              'の健康が最優先でしょう。ただし……少し退屈ですわね',
            ]);
            era.println();
            await era.printAndWait([
              '退屈、か……可能性を追う ',
              tachyon.get_colored_name(),
              ' なら、そう思うのもわかる。だが自分にとっていちばん大事なのは、',
              tachyon.get_colored_name(),
              ' の健康だ',
            ]);
            await era.printAndWait([
              'なぜか、',
              tachyon.get_colored_name(),
              ' は少し悲しそうだ。平静を装っているが、どうしようもない哀しみが滲む。こんなことを言うべきではなかったのか……',
            ]);
            await era.printAndWait('こんなことを言うべきではなかったのか……');
            era.println();
            await tachyon.say_and_wait(
              '…………なんでもありませんわ。くふふ。では、あなたの願いのために、今日は戻って休みますわ……',
            );
            await tachyon.say_and_wait('無傷……ですわね……');
            era.println();
            await era.printAndWait([
              'その提案は ',
              you.get_colored_name(),
              ' の本意に沿う。だが ',
              tachyon.get_colored_name(),
              ' は、いったいどうしたのだろう',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'を見送り、頭の中は相変わらず釈然としなかった',
            ]);
          }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '中間報告の提出';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      hope_sta,
      hoch_sho,
      sats_sho,
    ) => {
      await era.printAndWait(
        '正月は過ぎたが、二月のトレセン学園はまだ冬の底にある',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' はグラウンドを眺め、白い吐息を何度も漏らした',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'あの人、今日もそこに立ってるわね',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'しっ……小さい声。あれ、誰かのトレーナーらしいわよ',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'ええ……本当？ もう三日は立ってるのに、担当の',
        tachyon.uma_sex_title,
        'なんて見当たらないわよ',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'さあ……他学年に、存在感がなさすぎて見落とされる',
        tachyon.uma_sex_title,
        'がいるらしいわ。もしかして、その人の担当かも',
      ]);
      era.println();
      await era.printAndWait([
        'あはは……存在しない',
        tachyon.uma_sex_title,
        '扱いだぞ、',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '？',
      ]);
      await era.printAndWait([
        'かといって、自分から担当が ',
        tachyon.get_colored_name(),
        ' だと名乗っても、信じてもらえないだろう',
      ]);
      await era.printAndWait([
        '悲しい話だが、光ってもいない普通人が ',
        tachyon.get_colored_name(),
        ' のトレーナーだと、誰が信じる',
      ]);
      await era.printAndWait([
        'ここ数日、',
        tachyon.get_colored_name(),
        ' の薬を飲んでいないせいで、もう何日も光っていないのだ',
      ]);
      era.println();
      await era.printAndWait([
        '今日で、',
        tachyon.get_colored_name(),
        ' がトレーニングに来ない三日目になる',
      ]);
      await era.printAndWait([
        'それどころか、',
        you.get_colored_name(),
        ' は三日間、担当',
        tachyon.uma_sex_title,
        'の顔すら見ていない',
      ]);
      await era.printAndWait([
        '試薬すらない三日。',
        you.get_colored_name(),
        ' はグラウンドで、トレーニング時間に来るはずのその人を待ち続けた',
      ]);
      era.println();
      await you.say_and_wait('今日も来ないな……', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' がそう思った、そのとき',
      ]);
      if (relation <= 225) {
        await tachyon.say_and_wait([
          'おや、',
          callname,
          '？ なぜここに？ 探しましたわよ',
        ]);
        await you.say_and_wait('……');
        await era.printAndWait([
          '当然のように悠々と現れた ',
          tachyon.get_colored_name(),
          ' に、今の ',
          you.get_colored_name(),
          ' は怒る気力すら残っていなかった',
        ]);
        await era.printAndWait(
          'とにかくグラウンドへ……まあいい。どうせまた薬だ……',
        );
        era.println();
        await tachyon.say_and_wait('とにかく、計測を手伝いなさい');
      } else {
        await tachyon.say_and_wait([
          callname,
          '！ ここ数日、どこへ行っていたのです！ お弁当が何日も食べられませんわ！！！',
        ]);
        await era.printAndWait([
          '悪人が先に怒るとは。この数日、研究室の鍵をかけていたのは',
          tachyon.sex,
          '自身ではないか',
        ]);
        await tachyon.say_and_wait(
          'まあいい、そこは本題ではありません。早く測りなさい、新しい実験データですわ',
        );
      }
      era.println();
      await era.printAndWait('ん？ 待て、まさか');
      await era.printAndWait([
        '目の前のことに半信半疑の ',
        you.get_colored_name(),
        ' はぼんやりタイマーを押し、ぼんやり ',
        tachyon.get_colored_name(),
        ' が一周して戻るのを見、またぼんやり止めた',
      ]);
      era.println();
      await tachyon.say_and_wait('タイムは？');
      era.printButton('「前……前の記録より三秒速い」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は興奮した。数日トレーニングに来なかった？ そんな俗事はもうどうでもいい。この速度を持つ',
        tachyon.sex,
        'なら、絶対に、必ず……',
      ]);
      era.println();
      await era.printAndWait([
        'よろしい、と ',
        tachyon.get_colored_name(),
        ' は満足げに手を叩いた',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '、では良い知らせですわ']);
      await tachyon.say_and_wait([hoch_sho, '、出走します']);
      era.println();
      await era.printAndWait([hoch_sho]);
      era.println();
      await era.printAndWait([
        sats_sho,
        ' の前哨戦だ。',
        sats_sho,
        ' を目指す',
        tachyon.uma_sex_title,
        'の多くは、まず ',
        hoch_sho,
        ' か ',
        hope_sta,
        ' を目標にし、人気を得てから ',
        sats_sho,
        ' へ挑む',
      ]);
      await era.printAndWait([
        'だが……',
        hoch_sho,
        ' は所詮G2。人気に困らない ',
        tachyon.get_colored_name(),
        ' が、このレースに興味を持つ理由は……？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……いくつか、',
        sats_sho,
        ' の前に確認せねばならないものがありますの',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'の口調に、',
        you.get_colored_name(),
        ' はわずかに不安を覚えた',
      ]);
      await era.printAndWait('だが');
      era.printButton('「タキオンなら、大丈夫だ」', 1);
      await era.input();
      await tachyon.say_and_wait('ふん、G2すら取れないとでも？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑して、そういう意味ではないと釈明した',
      ]);
      await era.printAndWait([
        'とにかく、目標はとりあえず ',
        hoch_sho,
        ' に決まった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = '実験対照';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} vs_coffee 対戦相手にマンハッタンカフェがいる
     */
    const f = async (tachyon, you, callname, t_call_c, vs_coffee) => {
      await tachyon.say_and_wait(
        '覚悟はしていましたけれど……やはり、特筆すべき実験対照はありませんわね',
      );
      era.println();
      await era.printAndWait(['だが、このレースは皐月賞の前哨戦だ']);
      await era.printAndWait([
        '皐月賞を目指すなら、強弱にかかわらず、この結果は見逃せない',
      ]);
      era.println();
      if (vs_coffee) {
        await tachyon.say_and_wait([
          'そういえば、今日は ',
          t_call_c,
          ' も出走していますわね',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '……満足できる走りを見せてほしいですわ。なにしろ……',
        ]);
      } else {
        await tachyon.say_and_wait([
          t_call_c,
          ' が出走していれば……実験価値はもっと高かったでしょうに',
        ]);
      }
      await tachyon.say_and_wait([
        'ところで、',
        callname,
        '、あなたは ',
        t_call_c,
        ' をどう見ていますの？',
      ]);
      era.println();
      await era.printAndWait('え？');
      await era.printAndWait([
        '唐突な問いに、',
        you.get_colored_name(),
        ' は考え込んだ',
      ]);
      await era.printAndWait('灰色の脳細胞が回り始める');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' がそう聞く意図は……',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が身構えるのを見て、',
        tachyon.get_colored_name(),
        ' は笑った',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'そんなに緊張しないでくださいまし。ただの質問ですわ。個人的には、あなたが',
        tachyon.sex,
        'と良好な関係を築いてくれると嬉しいですの……万一のために',
      ]);
      era.printButton('「不安になる言い方だな……」', 1);
      era.printButton('「俺はいつまでもタキオンのトレーナーだ！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'どこへ想像を飛ばしているのです……もういいですわ。出場します',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はホープフルの前に見たスプレーを脚に吹き、出走の準備をした',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = '対照結果の分析';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (tachyon, you, callname, love, hoch_sho, sats_sho) => {
      await era.printAndWait([
        '当然のように、',
        tachyon.get_colored_name(),
        ' は ',
        hoch_sho,
        ' を制した',
      ]);
      era.printButton('「すごいレースだった！」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'ふぅ……ふぅ……くふふ、その反応、毎回大袈裟ですわね。本気で走ってもいないのに、何がすごいのです',
      );
      era.println();
      await era.printAndWait([tachyon.sex, 'は面白がるように言った']);
      era.println();
      await you.say_and_wait('大袈裟じゃない');
      await you.say_and_wait(
        '本気でもそうでなくても、タキオンの走りは同じように惹きつける。たとえば……そうだ、光電子だ',
      );
      era.println();
      await tachyon.say_and_wait('光電子……？');
      era.println();
      await you.say_and_wait(
        '電極に当たる光束は、強弱にかかわらず電子を飛ばす。周波数、つまり規格の違いだ',
      );
      await you.say_and_wait(
        '強弱も本気も関係ない。タキオンの走りは、自分にとって次元を超えた、電極から電子を引き出せる唯一の光だ',
      );
      era.println();
      await tachyon.say_and_wait('……なんです、その比喩は');
      era.println();
      await you.say_and_wait('ええ……だめか');
      await you.say_and_wait(
        '時間をかけて考えたのに、わりと自信あったんだが……',
      );
      era.println();
      if (love > 75) {
        await tachyon.say_and_wait(
          'まあ……言いたいことはわかりましたわ。つまり、私にしか外せない貞操帯を着けている、ということですの？',
        );
        await era.printAndWait('いや、その比喩のほうがひどい……');
      } else {
        await tachyon.say_and_wait(
          'まあ……言いたいことはわかりましたわ。走りがどうであれ、私なら満足させられる、ということですのね？',
        );
      }
      await you.say_and_wait('それでも、本気で走ってほしい');
      await era.printAndWait([
        'そこで ',
        you.get_colored_name(),
        ' は、',
        tachyon.get_colored_name(),
        ' がレース前に言った試験のことを思い出した……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……問題ありませんわ。少なくとも、',
        sats_sho,
        ' までは問題ありません',
      ]);
      era.println();
      await era.printAndWait('少なくとも……か');
      await era.printAndWait([
        '安心できない言葉に、',
        you.get_colored_name(),
        ' も黙り込んだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……その話はもういいですわ。早く戻って実験を続けましょう',
      );
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の ',
        hoch_sho,
        ' は終わった',
      ]);
      await era.printAndWait(['次の目標 ', sats_sho, ' は、もう目の前だ！']);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '単項実験と結果分析';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('今日はクラシック第一戦、皐月賞');
      await era.printAndWait(
        '観客は開幕を待ちわび、出走する者たちもレース前から高ぶっている',
      );
      await era.printAndWait([
        'そう、',
        tachyon.get_colored_name(),
        ' も例外ではない',
      ]);
      await era.printAndWait([
        'ただ……',
        tachyon.sex,
        'が高ぶる理由は、少しばかり周囲と違う',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！ 見てくださいまし。やはり……G1の舞台こそ、データ収集の価値がありますわ！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は興奮して行き来し、他の出走者の控え室に潜り込んで個体データを集めようとさえした',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が必死に止め、やっとその気を削いだ',
      ]);
      await era.printAndWait([
        'レース前から浮き立つ ',
        tachyon.get_colored_name(),
        ' に対し、',
        you.get_colored_name(),
        ' はなぜか落ち着かない',
      ]);
      era.println();
      await era.printAndWait([
        '弥生賞のとき、「少なくとも皐月賞までは問題ない」と言った',
      ]);
      await era.printAndWait(['だが……皐月賞の後は、わからない？']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の身体に……何かあるのか',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '？ どうしましたの。今日のあなたは、いつものあなたらしくありませんわ',
      ]);
      await era.printAndWait([
        '逆に ',
        tachyon.get_colored_name(),
        ' に心配されるとは。これはまずい',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて気を入れ直し、いつもの顔に戻した',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'まあいいですわ。今日は……本気の姿を見せます。本当の、',
        tachyon.uma_sex_title,
        'の限界を',
      ]);
      era.println();
      await era.printAndWait('限界……？');
      await era.printAndWait('いや、大丈夫だ。きっと');
      await era.printAndWait([
        you.get_colored_name(),
        ' は疑念と不安を置き、',
        tachyon.get_colored_name(),
        ' がコースへ上がるのを見送った',
      ]);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = (tachyon) => [tachyon.uma_sex_title, 'の限界'];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (tachyon, you, callname, sats_sho, toky_yus) => {
      await tachyon.say_and_wait([callname, '、見えましたか？']);
      era.println();
      await era.printAndWait([
        sats_sho,
        ' を走り終えた ',
        tachyon.get_colored_name(),
        ' は、これまでで最も熱い歓声を浴びた',
      ]);
      await era.printAndWait([
        '観客が高ぶる理由は、',
        you.get_colored_name(),
        ' にもわかる',
      ]);
      await era.printAndWait([
        '今日の ',
        tachyon.get_colored_name(),
        ' は、完璧と言っていい',
      ]);
      await era.printAndWait([
        'いや、',
        tachyon.uma_sex_title,
        'に限界があるなら、それは今日の ',
        tachyon.get_colored_name(),
        ' だ',
      ]);
      await era.printAndWait(
        '光のような速度、光のような輝き、光のような……儚さ',
      );
      era.println();
      await era.printAndWait('終われば光のように散ってしまうような走り');
      await era.printAndWait([
        'ゴールを切った瞬間、誰も声を出せなかった。',
        tachyon.get_colored_name(),
        ' の実力を信じ続けてきた自分すら、信じきれなかった',
      ]);
      await era.printAndWait([
        'あの走りは、',
        tachyon.uma_sex_title,
        'という生物の限界としか説明できない',
      ]);
      await era.printAndWait(
        '見た瞬間に「ああ、この走りを超える者はいない」と悟る走りだ',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……これですわ。私たちが超えるべき限界',
      ]);
      era.println();
      await era.printAndWait('自分を限界と定義する');
      await era.printAndWait('なんという傲慢か');
      await era.printAndWait(
        'だが先のレースを見れば、誰もがその傲慢に頷かざるを得ない',
      );
      era.println();
      await tachyon.say_and_wait(
        '……そうですわ。あの速度を超えねば、限界超越など呼べません。でなければ、すべては空論です',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はその言葉を言い、あなたの目をじっと見て答えを待った',
      ]);
      await era.printAndWait([
        'その含意は、',
        you.get_colored_name(),
        ' にもわかるはずだ',
      ]);
      await era.printAndWait('自分には、あの速度を超える自信があるか');
      era.printButton('「絶対にできる」', 1);
      era.printButton('「タキオンだから、絶対にできる」', 2);
      await era.input();
      await era.printAndWait('ほとんど一瞬だった');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の意味を汲んだ瞬間、',
        you.get_colored_name(),
        ' は答えた',
      ]);
      await era.printAndWait('考えるまでもない。迷うまでもない');
      await era.printAndWait([
        '目の前の',
        tachyon.uma_sex_title,
        'は、限界を超える力を持っている',
      ]);
      await era.printAndWait('初めて会ったときから、そう確信していた');
      await era.printAndWait([
        '今はただ、',
        you.get_colored_name(),
        ' と',
        tachyon.sex,
        'の目標が目の前にあるだけだ',
      ]);
      await era.printAndWait('目標が見えたなら、超えてみせる');
      era.println();
      await tachyon.say_and_wait(
        'その反応の速さ……思考、いいえ、本能ですの？ あなたは……',
      );
      era.println();
      await era.printAndWait([
        'なぜか、',
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を見て、微妙な顔をした',
      ]);
      await era.printAndWait([
        '少しして、',
        tachyon.sex,
        'はなにかを決めたように言った',
      ]);
      era.println();
      await tachyon.say_and_wait(['では、試してみましょう、', callname, '……']);
      await tachyon.say_and_wait('ただしまずは、次のレースを確認しますわ……');
      await tachyon.say_and_wait([
        '今のところ、',
        toky_yus,
        ' には出走できます。それで備えなさい、',
        callname,
      ]);
      era.println();
      await era.printAndWait('……まただ');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' について、',
        you.get_colored_name(),
        ' が不安になる点があるとすれば、これだけだ',
      ]);
      await era.printAndWait('……次が最後であるかのような、不確かな態度');
      await era.printAndWait([
        'だが、',
        tachyon.get_colored_name(),
        ' なら、その不確かさごと越えてみせるはずだ',
      ]);
      await era.printAndWait([you.get_colored_name(), ' は、そう楽観した']);
      era.println();
      await era.printAndWait(['次のレースは、', toky_yus, ' に決まった！']);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '実験結果は支持されない';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, callname, t_call_p) => {
      await tachyon.say_and_wait([
        'おやおや、さすが日本ダービーですわ……',
        t_call_p,
        ' も出走するでしょう。楽しみですわ、',
        tachyon.sex,
        'の可能性……',
      ]);
      era.println();
      await era.printAndWait([
        '日本ダービーは、いちばん幸運な',
        tachyon.uma_sex_title,
        'が勝つレースだと言われる',
      ]);
      await era.printAndWait([
        'いちばん速い',
        tachyon.uma_sex_title,
        'が皐月を、いちばん幸運な',
        tachyon.uma_sex_title,
        'がダービーを、いちばん強い',
        tachyon.uma_sex_title,
        'が菊花を取る',
      ]);
      await era.printAndWait([
        '最速・最強という確定した話より……運の曖昧さが、',
        you.get_colored_name(),
        ' をレース前から',
        tachyon.sex,
        'のことが心配にさせた',
      ]);
      era.printButton('「本当に大丈夫か？」', 1);
      era.printButton('「やっぱり、神社で引いた大吉を持っていくか……？」', 2);
      await era.input();
      await era.printAndWait([
        '今朝早く、',
        tachyon.get_colored_name(),
        ' のために百段の石段を登り、神社で引いてきたおみくじだ',
      ]);
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' の行動を聞いた ',
        tachyon.get_colored_name(),
        ' は、妙な顔をした',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……朝からそんなものを引きに行くとは……',
        callname,
        ' がそれほど迷信深い人だとは思いませんでしたわ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の言葉に、',
        you.get_colored_name(),
        ' は首を横に振った',
      ]);
      era.printButton(
        '「神頼みでも何でもいい。タキオンが速く走れるなら、何だってする！」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '……くふふ、そんな迷信はあなたが持っていればいいですわ。ですが、その気持ち……受け取りましたわ。今日の実験は、良い結果になるでしょう',
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '実験目的の調整';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, t_call_c, t_call_p) => {
      era.printButton('「タキオン！ かっこよかった！」', 1);
      await era.input();
      await tachyon.say_and_wait('む……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はいつものように ',
        tachyon.get_colored_name(),
        ' の走りを褒めようとした。だが',
      ]);
      era.println();
      await tachyon.say_and_wait('……実験は、成功しませんでしたわ');
      era.println();
      await era.printAndWait('ん？');
      await era.printAndWait('あれほど見事に走ったのに、実験は失敗なのか');
      era.println();
      await tachyon.say_and_wait([
        t_call_p,
        '……期待はしていましたが、',
        tachyon.sex,
        'の可能性は、私が探しているものと合いません……やはり、',
        t_call_c,
        '……',
      ]);
      era.println();
      await era.printAndWait([
        'なぜか、',
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' にはよくわからない言葉を呟いた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……とにかく、今はいいですわ。これから、実験の要所に入ります',
      );
      era.println();
      await era.printAndWait([
        'よくわからないが、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の厳しい顔を見て、思わず姿勢を正した',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '次のレースは……しばらく……決められません……考えねばならないことがありますの',
      );
      era.println();
      await era.printAndWait([
        '不確かな言葉に、',
        you.get_colored_name(),
        ' のレース後の喜びは、一瞬で不安に変わった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_23: (() => {
    const title = '最速？ 最強？';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.print_and_wait('もっと速く');
      await tachyon.print_and_wait('まだ、もっと速く');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は夜のグラウンドを走っている',
      ]);
      await tachyon.print_and_wait(
        '顧みず限界を追う。速度の限界、可能性の限界を',
      );
      await tachyon.print_and_wait(
        'まさに、光速を超える粒子（Tachyon）のように',
      );
      await tachyon.print_and_wait('だが……');
      era.println();
      await tachyon.say_and_wait('ちっ……やはり、だめですわ……');
      era.println();
      await tachyon.print_and_wait('万物には代価がある');
      await tachyon.print_and_wait([
        'かつて、',
        tachyon.uma_sex_title,
        'の限界を破った者が、命を対価にしたという',
      ]);
      await tachyon.print_and_wait(
        'その代価で本当に限界を破れるなら、まだいい',
      );
      await tachyon.print_and_wait([
        'だが ',
        tachyon.get_colored_name(),
        ' の両脚は、その資格すら許されていない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'どうしても、限界を破れない……凡庸に甘んじるか、それとも……',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は足を止めた',
      ]);
      era.println();
      await tachyon.say_and_wait('……私の限界は、ここですの？');
      era.println();
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        'の限界ではない。',
        tachyon.get_colored_name(),
        ' の限界だ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…………では、この道が通じないなら……Plan Bを選ぶべきですの',
      );
      era.println();
      await tachyon.print_and_wait(
        '「最速」の限界を捨て、「最強」の限界を選ぶ',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は失敗していい。失敗のあと、',
        tachyon.sex,
        'の代わりになれる者がいればいい',
      ]);
      await tachyon.print_and_wait('夢を他人に託す。自己逃避に近い選択だ');
      await tachyon.print_and_wait(
        '本来なら、これが最も理性的だと自分を説得できたかもしれない。可能性をより実現しうる者に預ける、と',
      );
      await tachyon.print_and_wait('だが……');
      era.println();
      await you.used_to_say_and_wait('タキオンを信じる');
      await you.used_to_say_and_wait('タキオンなら、絶対大丈夫だ');
      await you.used_to_say_and_wait([
        '三冠どころか、',
        tachyon.uma_sex_title,
        'の可能性を破ることだって問題ない……！',
      ]);
      era.println();
      await tachyon.print_and_wait('あの人の、自分への信頼');
      await tachyon.print_and_wait([
        you.sex,
        'への裏切りに等しいこの行い……本当に、いいのか',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……いいえ、裏切りではありません。',
        you.sex,
        'により良い選択を渡すだけ……ですから……',
      ]);
      era.println();
      await tachyon.print_and_wait('迷い');
      await tachyon.print_and_wait('恐れ');
      await tachyon.print_and_wait('戸惑い');
      await tachyon.print_and_wait('いったい……どうすればいい');
      era.println();
      await tachyon.say_and_wait('……それでいいですわ');
      era.println();
      await tachyon.print_and_wait('来月の月桂杯');
      await tachyon.print_and_wait(
        '生徒会長が催す、学年も本格化の進度も問わないレース',
      );
      await tachyon.print_and_wait(
        '……出れば、ダービーから今までの短い休養では……',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の両脚は、きっと耐えられない',
      ]);
      await tachyon.print_and_wait(
        'だが、このデータ収集の機会を逃して、また来るのか',
      );
      await tachyon.print_and_wait([
        'いや、そもそも……',
        tachyon.get_colored_name(),
        ' に「これから」はあるのか',
      ]);
      await tachyon.print_and_wait('いっそ……このレースで、全力を……？');
      era.println();
      await tachyon.print_and_wait('月下の光の粒子は、なお迷っている');
    };
    f.title = title;
    return f;
  })(),
  ws_a_or_b: (() => {
    const title = 'A or B';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, daiwa, coffee, you, callname, t_call_c) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩が月桂杯に出るって、本当！？',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '楽しみ……タキオン先輩の走り、本当に見とれちゃう……',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '絶対、絶対見に行く！',
      );
      era.println();
      await era.printAndWait('今、学園でいちばん話題の中心は月桂杯だ');
      await era.printAndWait('生徒会長が催し、URA決勝を意識したレース——月桂杯');
      await era.printAndWait(
        '学年も本格化の開始・終了も問わず、意思さえあれば誰でも出られる',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' も、このデータ収集の好機を逃すはずがない',
      ]);
      await era.printAndWait([
        'ここ数週はトレーニングに全力を注いでいる。',
        tachyon.sex,
        'の言い分では、自分が相応の水準まで上がらねば、相手の可能性を引き出せない、と',
      ]);
      era.println();
      await era.printAndWait([
        '今日も',
        tachyon.sex,
        'はグラウンドで自分を鍛え続けている',
      ]);
      era.printButton(
        '「タキオン！ 今日の成果も、過去記録を大きく超えた！」',
        1,
      );
      era.printButton('「すごいぞ、タキオン！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……ははは！ その大袈裟な言い方には慣れましたけれど、聞くたび、つい驚いてしまいますわ……',
      );
      await tachyon.say_and_wait(
        '本当に……真面目な話、恥じらいというものはありませんの？',
      );
      era.printButton('「本心から言っている！」', 1);
      era.printButton('「タキオンを助けるためなら、命だって惜しまない！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '大袈裟ですわ……そんな甘い言葉より、実験を実際に手伝ってくれたほうが有意義ですのよ',
      );
      era.println();
      await era.printAndWait([
        'そう言って、',
        tachyon.get_colored_name(),
        ' は白衣の下から何本かの試験管を取り出した',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'そういえば、ちょうど……今朝、閃いて作った薬ですわ……',
      );
      await tachyon.say_and_wait(
        'どうです？ 今飲んで、次の一周が終わったら効果を報告してくれれば、そのお世辞よりは……？',
      );
      era.println();
      await era.printAndWait([
        '言い終わる前に、',
        tachyon.get_colored_name(),
        ' は固まった',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の眼前には、すでに薬を飲み干し、空の試験管を三本持った ',
        you.get_colored_name(),
        ' がいる',
      ]);
      era.println();
      await tachyon.say_and_wait('あなた……');
      era.printButton('「これで、タキオンは安心できるだろ？」', 1);
      era.printButton('「これで、タキオンの役に立てるだろ？」', 2);
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、なぜか長く何も言えなかった',
      ]);
      era.printButton('「タキオン？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……まったく……どこまで掻き乱せば気が済むのです……',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は頭を押さえ、困った顔で、何か言いたげだった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、少し待って。研究室へ来なさい……',
        you.get_colored_name(),
        ' と話すことがありますわ',
      ]);

      era.drawLine();

      await tachyon.say_and_wait('では……話しますわ');
      era.println();
      await era.printAndWait([
        '研究室で ',
        you.get_colored_name(),
        ' は姿勢を正し、',
        tachyon.get_colored_name(),
        ' の話を待った',
      ]);
      era.println();
      await tachyon.say_and_wait('私の脚は……おそらく、もう走れなくなります');
      era.println();
      await era.printAndWait('天が落ちるような内容を、あっさりと言った');
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' が飲み込む時間を置き、少しして続けた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '覚悟は、とっくにできていましたわ……私の脚は、もともと普通の',
        tachyon.uma_sex_title,
        'より脆い。受け入れられないことなどありません',
      ]);
      await tachyon.say_and_wait(
        'ですが、それが夢を捨てる理由にはなりませんわ',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の夢……',
        tachyon.uma_sex_title,
        'の限界を超え、',
        tachyon.uma_sex_title,
        'の可能性を見る',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '私でなくても構いません。見ているだけでも構いません……踏み台でしかなくても、構いません',
      );
      await tachyon.say_and_wait([
        '誰であれ……これが',
        tachyon.uma_sex_title,
        'の限界ではないと証明できれば。これが ',
        tachyon.get_colored_name(),
        ' の限界にすぎないと証明できれば……それだけで足りますわ',
      ]);
      await tachyon.say_and_wait(
        '本心からですわ。今回の月桂杯も……私ではない誰かが成功するために……',
      );
      await tachyon.say_and_wait(
        '最も多いデータを集め、最も完全な計画を組む……全力を尽くしてでも……',
      );
      await tachyon.say_and_wait(
        'ですが……そんな私の決意を揺らがせたのは……あなたですわ',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は複雑な目で ',
        you.get_colored_name(),
        ' を見た',
      ]);
      await era.printAndWait('悲しみ？');
      await era.printAndWait('苦痛？');
      await era.printAndWait('希望？');
      await era.printAndWait('絶望？');
      await era.printAndWait([
        'いくつもの感情が混ざった視線が、',
        you.get_colored_name(),
        ' を捉える',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '諦めかけたとき、いつもあの目で私を見るあなた……',
      );
      await tachyon.say_and_wait(
        '正直に言いますわ。諦めたい者にとって、あの目がどれほど厭らしいか、わかりますの？',
      );
      await tachyon.say_and_wait('あれほど純粋な、信頼だけの目……');
      era.println();
      await era.printAndWait([
        '嫌いだと言いながら、',
        tachyon.get_colored_name(),
        ' の複雑な目にだけは、嫌悪が見えなかった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'ですから、',
        callname,
        '。掻き乱したあなたが、責任を負いなさい……道を選ぶ責任を',
      ]);
      await tachyon.say_and_wait([
        '……覚えているでしょう？ ',
        t_call_c,
        ' をどう見ているか、と尋ねたこと',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は頷いた。',
        tachyon.get_colored_name(),
        ' の ',
        coffee.get_colored_name(),
        ' への関心は、他の',
        tachyon.uma_sex_title,
        'より明らかに大きい……',
        daiwa.get_colored_name(),
        ' を除けば',
      ]);
      await era.printAndWait('その関心は、実験対象へのそれだけではなかった');
      await era.printAndWait('理由は何度も考えたが、どれも釈然としなかった');
      era.println();
      await tachyon.say_and_wait([
        '私が走り続けられないときの Plan B……すべてを ',
        t_call_c,
        ' に託し、',
        t_call_c,
        ' に私の代わりをさせ、可能性の世界を見せるつもりですわ',
      ]);
      await tachyon.say_and_wait([
        'そのあと、私はあらゆるレースを拒みます……',
        t_call_c,
        ' が育ち、',
        tachyon.sex,
        'が限界を破るまで。残った全力を使い切り、',
        tachyon.sex,
        'の踏み台になります',
      ]);
      await tachyon.say_and_wait(
        'すべてを犠牲にして、最も成功しやすい選択肢を成す。それが研究者ですわ。犠牲になるのが自分でも同じです',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は、感情を思考から外した選択肢を、あっさりと言った',
      ]);
      await era.printAndWait([
        '何度もリハーサルしたような口ぶりだ……あるいは、',
        tachyon.sex,
        'はいつかこの話を自分にする覚悟を、とっくに決めていたのかもしれない',
      ]);
      await era.printAndWait([
        'それから、',
        tachyon.sex,
        'の声がわずかに震えた',
      ]);
      era.println();
      await tachyon.say_and_wait('そして……二つ目。最初に諦めた Plan Aですわ');
      await tachyon.say_and_wait([
        'このまま続け、',
        callname,
        ' の言う三冠へ進み、私の目標である限界超えへ進む……',
      ]);
      await tachyon.say_and_wait(
        '……童話のように美しく、同じだけ儚い選択。あなたは私に付き添わねばなりません。夢が叶うまで、あるいは……すべてが散るまで',
      );
      era.println();
      await tachyon.say_and_wait(
        '選びなさい……認めますわ。これは責任の転嫁です。すべてをあなたに押しつける。ですが……',
      );
      await tachyon.say_and_wait(
        '希望を私に渡したのは、あなたですもの。負うべき責任でしょう',
      );
      await tachyon.say_and_wait([
        'さあ、',
        callname,
        '。あなたの番です。選びなさい',
      ]);
      era.println();
      era.print([you.get_colored_name(), ' は決める……']);
      era.printButton('Plan Aを選ぶ', 1);
      era.printButton('Plan Bを選ぶ', 2, {
        disabled:
          era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
      });
      era.print(
        '【警告：この選択はアグネスタキオンのトレーニングとレースを固定します】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  os_95_3: (() => {
    const title = '抽選と代償剤の効果';
    /**
     * Plan A / B 共通
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} dice 抽選結果。1=ティッシュ、2=ニンジン、3=大量のニンジン、4=ニンジンハンバーグ、5=温泉旅行券
     * @param {boolean} plan_b Plan B に入っているか
     * @param {number} cook_times アグネスタキオンに料理した回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      relation,
      love,
      dice,
      plan_b,
      cook_times,
    ) => {
      await tachyon.say_and_wait('まったく……あんなに簡単に爆発するとは');
      await tachyon.say_and_wait([
        call_25,
        ' もですわ……コーヒー粉に身体能力を上げる薬を少し足しただけですのに。なぜそこまで怒るのです……',
      ]);
      await tachyon.say_and_wait(
        'やはり今回は、呪いにも耐えるビーカーを買うべきですわね？',
      );
      era.printButton('「そんなもの、どこから仕入れるんだ……」', 1);
      era.printButton('「そもそも需要がないだろう……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'ふん、',
        tachyon.sex,
        'の呪いの原理が何であれ、結局は外力で壊すしかないのですわ',
      ]);
      await tachyon.say_and_wait(
        'つまり、外力をどう使っても壊れない強度まで上げればいい、ということですわ',
      );
      await tachyon.say_and_wait(
        'ですので今回探すのは、宇宙用素材で、極寒・極熱・気圧に耐える高規格ビーカーですわよ',
      );
      await tachyon.say_and_wait([
        'ああ、見つかりましたわ。',
        callname,
        '、見てくださいまし',
      ]);
      era.println();
      await era.printAndWait('本当か！ 商店街、すごいな！');
      era.drawLine({ content: '時間を、少しだけ戻す' });
      era.println();
      await era.printAndWait([
        'この日、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' と街へ実験器具を買いに出た',
      ]);
      await era.printAndWait('買い終えて帰るとき……');
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        'さあさあ！ 商店街、実験器具大放出！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        '宇宙特製ガラスビーカー、宇宙隕石るつぼ、ロケット燃料アルコールランプをまとめて買えば、抽選に一回参加できるぞ！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        '特等は温泉旅行券！ 一等は特大ニンジンハンバーグ！',
      );
      era.println();
      await era.printAndWait(
        'ええ……最初はともかく、後ろのいくつか、本当に買う人いるのか……',
      );
      era.println();
      await tachyon.say_and_wait([callname, '、抽選に行きましょう']);
      era.printButton('「全部買ったのか！？」', 1);
      era.printButton(
        '「……アルコールランプにロケット燃料は、本当に大丈夫か？」',
        2,
      );
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '当然ですわ。研究室で補充すべきものは多いのです',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は当然だと言った',
        ]);
        await era.printAndWait('……この商店街は、いったい何なんだ');
      } else {
        await tachyon.say_and_wait([
          callname,
          '、キャッチコピーもわかりませんの？ 当然、宣伝文句ですわよ、宣伝',
        ]);
        era.println();
        await era.printAndWait(
          '……いや、前が本物なら、最後を疑うのは普通だろう',
        );
      }
      era.printButton(
        '「それにしても、タキオンが抽選に興味を持つのは珍しいな」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'ええ……そうですわね。抽選より、賞品は金で買えますもの……私たちのレース賞金なら、この程度は困りませんわ',
      );
      era.println();
      await era.printAndWait('それなら……');
      era.println();
      await tachyon.say_and_wait('ですが目的は賞品ではありません。観察ですわ');
      era.println();
      await era.printAndWait('観察……？');
      era.println();
      await tachyon.say_and_wait(
        '正月に言ったのを覚えていますか？ 感情の影響を研究し始めたい、と……',
      );
      await tachyon.say_and_wait(
        'なら対照が必要ですわ。最良の対照は、ずっとそばにいるあなたです',
      );
      await tachyon.say_and_wait('見せなさい。抽選のあとの反応を');
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は前へ出て、抽選機を回した……',
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait('店主', '残念賞、ティッシュ一袋');
          await era.printAndWait('残念賞か……惜しいが、仕方ない');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('む……あまり反応がありませんわね');
            era.println();
            await era.printAndWait('いや……最初から期待していなかったし');
            era.println();
            await tachyon.say_and_wait(
              '期待しない、とは、最初から当たらないと思っていた、ですの？……結果を見る前に可能性を否定するやり方は、あまり好みではありませんわ',
            );
            era.println();
            await era.printAndWait('ああ……');
            era.println();
            await tachyon.say_and_wait('行きましょう。実験の続きですわ');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の機嫌が悪くなった',
            ]);
            await era.printAndWait(['二人は黙って学園へ戻った']);
          } else {
            await tachyon.say_and_wait(
              '残念賞ですわね……まあ、どうでもいいですわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' も相槌を打った。所詮、商店街の小さな催しだ',
            ]);
            era.println();
            await tachyon.say_and_wait('賞品など、私たちなら買えますもの');
            await tachyon.say_and_wait(
              'それに、ティッシュも役に立ちますわ……ほら、ものを拭けますでしょう？',
            );
            await tachyon.say_and_wait(
              'それから……その温泉旅行券……当たっても、旅行する暇はありませんわよね',
            );
            era.println();
            await era.printAndWait('ん？ なぜ急にそんなに言う');
            await tachyon.say_and_wait([
              '……そういえば、',
              callname,
              '。こういう抽選は、店によっては細工をするそうですわ……',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が抽選箱まで調べようとするのを見て、',
              you.get_colored_name(),
              ' は慌てて ',
              tachyon.get_colored_name(),
              ' を商店街から連れ出した',
            ]);
            await tachyon.say_and_wait([
              'くっ……離しなさい、',
              callname,
              '。賞品などどうでもいいですわ。ですが消費者として、公平かを確かめる権利と責任があります……！',
            ]);
            era.println();
            await era.printAndWait([
              '……実際は、',
              tachyon.sex,
              'も言っているほどどうでもよくないらしい',
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            '店主',
            '三等、特選ニンジン一本！',
          );
          era.println();
          await era.printAndWait('特選とは……在庫処分だろう');
          await era.printAndWait([
            you.get_colored_name(),
            ' は仕方なくニンジンを一本持った',
          ]);
          await era.printAndWait('突っ込むべきか迷うが、この抽選の賞品は');
          await era.printAndWait([
            '残念賞のティッシュと特等の温泉旅行券以外、全部',
            tachyon.uma_sex_title,
            '向けではないか？',
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              'ニンジンですわ……そういえば、賞品はどれも実用的ですわね',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は多くを言わず、自然に ',
              you.get_colored_name(),
              ' の手からニンジンを受け取り、小さく折って口に入れた',
            ]);
            era.println();
            await tachyon.say_and_wait('よろしい、甘いですわ');
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              'おや？',
              callname,
              '、今の顔、悪くありませんわ',
            ]);
            era.println();
            await era.printAndWait('え？ 顔？');
            era.println();
            await tachyon.say_and_wait('呆れ、落胆、慰め。複雑な顔ですわね');
            era.println();
            await era.printAndWait([
              'ああ……そういえば、',
              tachyon.get_colored_name(),
              ' の感情研究のために抽選したのだった',
            ]);
            await era.printAndWait(
              '……感情の研究とは、人の心がわからないロボットみたいだ',
            );
            await era.printAndWait([
              'だが目の前の、マッドサイエンティストのような ',
              tachyon.get_colored_name(),
              ' を思えば……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'が今「人心などわからない」と言っても、驚かないだろう',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '今日の実験はまず成功ですわ。次は別の感情も見せてくださいまし、',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は勝手に ',
              you.get_colored_name(),
              ' の手からニンジンを奪い、先の細いところを折って口に含んだ',
            ]);
            era.println();
            await tachyon.say_and_wait('味は悪くありませんわ');
          } else {
            await tachyon.say_and_wait('おや、ニンジン。悪くありませんわよ？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が寄ってきて、',
              you.get_colored_name(),
              ' を慰めた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '見栄えだけの品より、栄養を補えるもののほうが現実的ですわ',
            );
            await tachyon.say_and_wait(
              'ニンジンなら……戻って炒め卵にします？ それともニンジンハンバーグ？ ジュースにしても悪くありませんわ……',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の慰めを聞き、',
              you.get_colored_name(),
              ' も笑ってしまった',
            ]);
            era.printButton('「それなら一本じゃ足りないな」', 1);
            era.printButton('「もう少し買わないと」', 2);
            await era.input();
            await era.printAndWait([
              'こうして二人は商店街へ戻り、夕飯分のニンジンを買った',
            ]);
            await era.printAndWait('……商店街の売り込みに乗っただけではないか');
            await era.printAndWait([
              '帰り道で、',
              you.get_colored_name(),
              ' は遅れて気づいた',
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            '店主',
            '二等、山ほど積んだニンジンの山！',
          );
          era.println();
          await era.printAndWait('うわ！ 多い！');
          await era.printAndWait('文字どおり、小山のように積んである');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('おや、悪くありませんわね？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は嬉しそうな顔をした',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '今月、いいえ、半年はニンジンに困りませんわ',
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                'いや、',
                tachyon.uma_sex_title,
                'でも、こんな量は食べきれないだろ……',
              ]);
              era.println();
              await tachyon.say_and_wait([
                '一般に、',
                tachyon.uma_sex_title,
                'は消費エネルギーが多いほど補給も要ります。つまり、食べる量＝強さ、は成立しうるのですわ',
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は値踏みする目で ',
                you.get_colored_name(),
                ' の身体を見た',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '食欲を増す薬、ですの？……くふふ、悪くない選択かもしれませんわ',
              );
              era.println();
              await era.printAndWait([
                'このニンジンの山は、逃れようもなく ',
                you.get_colored_name(),
                ' 一人の責任になりそうだ',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は肩を落とし、一車のニンジンを引いて ',
                tachyon.get_colored_name(),
                ' とトレセン学園へ戻った',
              ]);
            } else {
              await era.printAndWait([
                'だが、人間がこんなにニンジンをどうする……',
                you.get_colored_name(),
                ' はその悩みを ',
                tachyon.get_colored_name(),
                ' に伝えた',
              ]);
              era.println();
              await tachyon.say_and_wait([
                'おや……人間を',
                tachyon.uma_sex_title,
                'へ変える可能性を実験する、という意味ですの？ その研究……やれなくもありませんわ……',
              ]);
              era.println();
              await you.say_and_wait('…………タキオン？');
              era.println();
              await tachyon.say_and_wait([
                'くふふ……新しい研究の可能性ですわ、',
                callname,
                '……これは、万一の Plan C にしておきましょう',
              ]);
              era.println();
              era.print([
                '危険で不穏な言葉に、',
                you.get_colored_name(),
                ' は背筋が凍った',
              ]);
              era.printButton('「や……やっぱりタキオンに渡す」', 1);
              era.printButton('「抽選券はタキオンのだから」', 2);
              await era.input();
              await tachyon.say_and_wait(
                '……まあいいですわ。惜しい。せっかくの機会なのに',
              );
              era.println();
              await era.printAndWait([
                'また危ういところを逃れた ',
                you.get_colored_name(),
                ' は、',
                tachyon.get_colored_name(),
                ' と一車のニンジンを引いてトレセン学園へ戻った',
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              '賞品を見た瞬間、',
              you.get_colored_name(),
              ' は考え始めた。こんなにニンジンがあれば……',
              tachyon.get_colored_name(),
              ' に何食分作れるか',
            ]);
            era.println();
            await tachyon.say_and_wait('多いですわね……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' も、この山に目を見開いた',
            ]);
            era.println();
            await tachyon.say_and_wait('これなら……閃きましたわ……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は考え込んだ',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'をよく知る ',
              you.get_colored_name(),
              ' は、すぐ危険を察した',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……無料のニンジン……薬……オグリキャップかスペシャルウィークを……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は慌てて',
              tachyon.sex,
              'の思考を遮った',
            ]);
            era.printButton(
              '「そ……そうだ、ニンジンのフルコースを作ろう！」',
              1,
            );
            era.printButton(
              '「こ、最近ニンジン主役の料理をたくさん覚えたんだ！」',
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait('やっぱり……だめか');
            era.println();
            await tachyon.say_and_wait([
              'なぜ早く言わないのです！ まあ、蒸す、煮る、炒める、揚げる……どう作りますの～～',
              callname,
              '、好きに作りなさい！ 食材は足りていますわね？ もっと要ります？',
            ]);
            era.println();
            await era.printAndWait([
              'もう十分だ、と ',
              you.get_colored_name(),
              ' は苦笑して首を横に振った',
            ]);
            await era.printAndWait([
              '食べ物で ',
              tachyon.get_colored_name(),
              ' の注意を逸らせたのは幸いだ……下手をすれば罰は受けるだろうが',
            ]);
            await era.printAndWait(
              '自分で薬を飲むほうが、学園中を巻き込むよりマシだ……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は一車のニンジンを引き、浮き立つ ',
              tachyon.get_colored_name(),
              ' とトレセンへ戻った。道中も、',
              tachyon.get_colored_name(),
              ' が満足する料理をどう作るか考えていた',
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            '店主',
            '一等、特大ニンジンハンバーグ！',
          );
          era.println();
          await era.printAndWait('え……？');
          await era.printAndWait('一等がこれか？');
          era.println();
          await era.printAndWait(
            '……なるほど、有名シェフの作だ。聞いたことのない人だが',
          );
          await era.printAndWait(
            '錯覚か。二等の一車のニンジンのほうが得な気がする',
          );
          era.println();
          await tachyon.say_and_wait([
            'おや、一等ですわ……ですが、',
            callname,
            '、あまり嬉しそうではありませんわね？',
          ]);
          era.printButton('「この賞品、タキオンしか食べられないだろ」', 1);
          era.printButton('「なんか……二等のほうがマシだ」', 2);
          await era.input();
          await tachyon.say_and_wait(
            'おや？……ええ、ある意味ではそうですわ。シェフが作ったとて、要するにニンジンと肉ですもの',
          );
          await tachyon.say_and_wait(
            '原料だけで見れば、価値は二等のニンジン量に及びませんわ',
          );
          if (love >= 75) {
            await tachyon.say_and_wait(
              'では、相応の価値を私が付けてあげますわ……',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              '愛する人と食べるハンバーグ……これで価値は上がりましたかしら？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' が答える前に、',
              tachyon.get_colored_name(),
              ' はハンバーグを ',
              you.get_colored_name(),
              ' の口へ押し込んだ',
            ]);
            await era.printAndWait([
              '噛み終わるまで、',
              tachyon.sex,
              'はフォークを引き抜かなかった',
            ]);
            era.println();
            await tachyon.say_and_wait('次はあなたですわ、ダーリン❤');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は口を開け、',
              you.get_colored_name(),
              ' の給餌を待った',
            ]);
            await era.printAndWait(['二人はそのハンバーグを分け合った']);
          } else if (love >= 50) {
            await tachyon.say_and_wait('……それに、味もあなたには及びませんわ');
            era.println();
            await era.printAndWait('え……？');
            await era.printAndWait(
              '褒められて嬉しいが、自分の腕がこの有名シェフに勝つとは思えない……',
            );
            era.println();
            await tachyon.say_and_wait(
              'くふふ……大事なのは栄養でも味でもなく、作る気持ち……それを教えたのは、あなたではありませんの？',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              'ですが、あなたの言う通りですわ……比較なしでは確定できません。科学は厳密でなければ',
            );
            await tachyon.say_and_wait(
              'ですから……技術はあるが愛はないものと、技術は劣るが愛があるもの。どちらが上か……❤',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はハンバーグを優しく ',
              you.get_colored_name(),
              ' の口へ入れた',
            ]);
            await era.printAndWait('そして小さく切り、自分の口へ入れた');
            era.println();
            await tachyon.say_and_wait([
              '戻ったらもう一枚作って比較してくださいまし、',
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait([tachyon.sex, 'の笑顔の前では']);
            await era.printAndWait(
              '自分は本当にモルモットになったようで、されるがままだった',
            );
          } else if (cook_times === 0) {
            await tachyon.say_and_wait(
              'ですが、私しか食べられない、は誤りですわ',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した。',
            ]);
            await you.say_and_wait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              'ニンジンの栄養は人間にも有益ですわ。ハンバーグの動物性たんぱくも……',
            );
            await tachyon.say_and_wait([
              'むしろ人間の消化速度なら、肉への需要は',
              tachyon.uma_sex_title,
              'より高いほどですわ',
            ]);
            era.println();
            await era.printAndWait(
              'いや、違う。つまりこれは……自分に食べさせたいのか？',
            );
            era.println();
            await tachyon.say_and_wait('ちっ……いい子ですから、あーん');
            era.println();
            await era.printAndWait('ま、まさか「あーん」まで');
            await era.printAndWait([
              you.get_colored_name(),
              ' は感動しながらハンバーグを食べた……',
            ]);
            era.drawLine();
            era.printButton('「…………いつ」', 1);
            await era.input();
            await era.printAndWait('ただでは転ばない');
            await era.printAndWait('だが……色仕掛けには防ぎようがない');
            await era.printAndWait([
              '相手が、',
              you.get_colored_name(),
              ' に食べさせようとする絶世の美',
              tachyon.teen_sex_title,
              'ならなおさらだ',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は、身体から点々と出る深い青の光を見て、呆れて尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'ふん、私の投薬があなたに見破られるようでは、毎日苦労して ',
              call_25,
              ' に調合を飲ませている甲斐がありませんわ',
            ]);
            await tachyon.say_and_wait(
              '残りは……あなたが食べなさい。こういうものに興味はありませんわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '……なぜか、',
              tachyon.sex,
              'の食事への要求は極端に低い',
            ]);
            await era.printAndWait('低いというより……要求がない');
            await era.printAndWait('栄養が取れれば、何でもいい');
            await era.printAndWait(
              'だが……まだ正月のうちだ……少しだけ図に乗ってもいいだろう',
            );
            era.printButton('「……本当にうまいぞ。タキオンも一口どうだ？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '結構ですわ。遠慮ではなく、本当に要りません',
            );
            era.printButton(
              '「でも、抽選券はタキオンのだ。自分で味見しなければ不公平だろ」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait('……そうですね。一口だけ');
            era.println();
            await era.printAndWait([
              '気づいたとき、',
              you.get_colored_name(),
              ' のフォークの肉は、',
              tachyon.get_colored_name(),
              ' に電光石火で噛み取られていた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'よろしい、味は悪くありませんわ。それで十分です',
            );
            era.println();
            await era.printAndWait('……速すぎ！？');
            await era.printAndWait('口を動かすのも見えなかった……！');
            await era.printAndWait([
              '……',
              tachyon.sex,
              'が本気で食事を楽しんだら、食卓の争奪戦では無敵だろう',
            ]);
            await era.printAndWait([
              'なぜか、',
              you.get_colored_name(),
              ' はそんな見当違いのことを考え始めた',
            ]);
          } else {
            await tachyon.say_and_wait('では……相応の価値を私が付けましょう');
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            if (relation <= 225) {
              await tachyon.say_and_wait([
                'G1を走る',
                tachyon.uma_sex_title,
                '、',
                tachyon.get_colored_name(),
                ' が自ら食べさせるハンバーグ。これで相応の価値はつきましたかしら？',
              ]);
            } else {
              await tachyon.say_and_wait([
                '超絶美',
                tachyon.teen_sex_title,
                'であり、G1を走る',
                tachyon.uma_sex_title,
                'である ',
                tachyon.get_colored_name(),
                ' が自ら食べさせるハンバーグ。一口にいくら払えますの？',
              ]);
            }
            era.println();
            await tachyon.say_and_wait('さあ、いい子ですから、あーん');
            era.println();
            await era.printAndWait('ま、まさか「あーん」まで');
            await era.printAndWait([
              you.get_colored_name(),
              ' は感動しながらハンバーグを食べた……',
            ]);
            era.drawLine();
            era.printButton('「…………いつ」', 1);
            await era.input();
            await era.printAndWait('ただでは転ばない');
            await era.printAndWait('だが……色仕掛けには防ぎようがない');
            await era.printAndWait([
              '相手が、',
              you.get_colored_name(),
              ' に食べさせようとする絶世の美',
              tachyon.teen_sex_title,
              'ならなおさらだ',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は、身体から点々と出る深い青の光を見て、呆れて尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'ふん、私の投薬があなたに見破られるようでは、毎日苦労して ',
              call_25,
              ' に調合を飲ませている甲斐がありませんわ',
            ]);
            await tachyon.say_and_wait('残りは……ちょっと！ 一口は残しなさい！');
            era.println();
            await era.printAndWait([
              '悲憤を食欲に変えた ',
              you.get_colored_name(),
              ' は、必死に ',
              tachyon.get_colored_name(),
              ' と残りのハンバーグを奪い合った',
            ]);
            await era.printAndWait(
              '…………認めざるを得ない。有名シェフの腕は、自分より上だ',
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait('……そうですわ。今です');
            await tachyon.say_and_wait('回しなさい！');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' を信じる ',
              you.get_colored_name(),
              ' は、',
              tachyon.sex,
              'の言葉を聞いてすぐ抽選機を回した',
            ]);
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('商店街のおじさんが鈴を激しく振った');
            await era.printAndWait('今日の一等が、いま出たと告げる');
            era.println();
            await tachyon.say_and_wait(
              'おや……温泉旅行券ですわね。悪くありませんわ',
            );
            era.println();
            await era.printAndWait('期限は……来年四月まで');
            await era.printAndWait('なら、URA決勝が終わったあとがちょうどいい');
            era.printButton('「タキオン、一緒に行くか？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '当然ですわ。私以外に、誰があなたと行くというのです？',
            );
            era.println();
            await era.printAndWait('容赦ない言い方だ');
            era.println();
            await tachyon.say_and_wait(
              '冗談ですわ。この券は、三年分のあなたへの褒美です……あらゆる困難と怪我を越えた先の……私たちの happy ending',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元で言った',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の口から出るとは思えない言葉に、',
              you.get_colored_name(),
              ' は驚いて目を上げようとした……',
            ]);
            era.println();
            await tachyon.say_and_wait('動かないで');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はなお ',
              you.get_colored_name(),
              ' のそばに寄り、二人は抽選箱の前で親しげに話した',
            ]);
            await era.printAndWait('おかしい……なぜ抽選箱から離れない……？');
            era.println();
            await tachyon.say_and_wait(['よろしい、行きましょう、', callname]);
            era.println();
            await era.printAndWait('え');
            await era.printAndWait([
              '傍らの熱が急に消え、',
              you.get_colored_name(),
              ' は慌てて ',
              tachyon.get_colored_name(),
              ' について商店街を出た',
            ]);
            await era.printAndWait([
              '商店街を出た ',
              tachyon.get_colored_name(),
              ' が、左目から何かを取り出すのが見えた',
            ]);
            era.println();
            await tachyon.say_and_wait('ふぅ、やっと楽になりましたわ');
            era.println();
            await era.printAndWait([
              '…………？',
              tachyon.get_colored_name(),
              ' の目……？',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' はよく見た。もともと',
              tachyon.sex,
              'の赤のグラデーションの両目のうち、片方だけがわずかに薄い',
            ]);
            era.println();
            await you.say_and_wait('……カラコン？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がそんなものを着ける人とは思えない',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'くふふ……これは、シャカールと共同で作ったものですわ',
            );
            await tachyon.say_and_wait(
              'まず、私の薬剤で、このレンズに非生物を透視する能力を持たせます',
            );
            await tachyon.say_and_wait(
              'シャカールは見たものの軌道を解析できます。もともとはレースの走者解析用ですわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が立て続けに話し、',
              you.get_colored_name(),
              ' は少し目が回った',
            ]);
            await era.printAndWait('だが……');

            era.printButton('「つまり……透視レンズか？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              'まあ、そんなところですわ……ただし、小さな欠陥がありまして',
            );
            await tachyon.say_and_wait(
              'たとえば着けていると、変わった視界に慣れるまで一歩も歩けません',
            );
            await tachyon.say_and_wait(
              '乱用すれば、情報量過多で脳が昏倒することもあります',
            );
            await tachyon.say_and_wait(
              'ですのでシャカールと、これは封印するつもりでした。くふふ、ここで役立つとは……',
            );
            era.println();
            await era.printAndWait('役立つ……？');
            await era.printAndWait('透視＋軌道解析……');
            await era.printAndWait('動けないから、福引の抽選箱の前に立つ……');
            await you.say_and_wait('ああ');
            era.printButton('「さっきの福引！」', 1);
            era.printButton('「タキオン、お前……」', 2);
            await era.input();
            await tachyon.say_and_wait('しっ');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は唇に指を当て、静かに、と合図した',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '言いましたわ。これは、あなたへの贈り物です',
            );
            era.println();
            await tachyon.say_and_wait('神でも、冥々たる運でもありません');
            await tachyon.say_and_wait([
              '私、',
              tachyon.get_colored_name(),
              ' が、愛する人へ贈る正月の祝いですわ',
            ]);
            await tachyon.say_and_wait([
              '明けましておめでとう、',
              you.get_colored_actual_name(),
              ' 君',
            ]);
            era.println();
            await era.printAndWait(
              '以前、正月と言えば、忘れがたい思い出がいくつも浮かんだ',
            );
            await era.printAndWait(
              '囲炉裏、一家団欒、おせち、テレビのつまらない新春番組',
            );
            await era.printAndWait(
              'だが今日から、正月の第一印象は一つだけになる',
            );
            await era.printAndWait([
              '灯り始めた街灯の下、悪戯が成功した子猫のように笑う',
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait('そして、あのキスの味');
            await era.printAndWait([
              'あのキスは甘かった。',
              tachyon.get_colored_name(),
              ' の紅茶より甘い',
            ]);
          } else {
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('商店街のおじさんが鈴を激しく振った');
            await era.printAndWait('今日の一等が、いま出たと告げる');
            era.println();
            await era.printAndWait('特等だ！');
            await era.printAndWait('二人用の温泉旅行券ではないか');
            era.println();
            await tachyon.say_and_wait(
              'おや……温泉旅行券ですわね。悪くありませんわ',
            );
            era.println();
            await era.printAndWait('期限は……来年四月まで');
            await era.printAndWait('なら、URA決勝が終わったあとがちょうどいい');
            era.println();
            if (love >= 50) {
              era.printButton('「タキオン、一緒に行こう！」', 1);
              await era.input();
              await tachyon.say_and_wait('ふむ……一緒に、ですの？');
              await tachyon.say_and_wait([
                callname,
                '、一般に『温泉旅行へ一緒に行く』関係が何か、理解したうえで誘っていますの？',
              ]);
              era.println();
              await era.printAndWait('一般に、温泉へ一緒に行く関係……');
              era.printButton('夫婦', 1);
              era.printButton('恋人', 2);
              era.printButton(
                `「……普通の${tachyon.uma_sex_title}とトレーナーは、もともと行くものでは？」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait('一般的には……新婚夫婦だろう');
                  await era.printAndWait('新婚旅行で温泉はよくある');
                  await you.say_and_wait(
                    '……俺とタキオンが、新婚夫婦……？',
                    true,
                  );
                  break;
                case 2:
                  await era.printAndWait('たぶん……恋人だろう');
                  await era.printAndWait(
                    'それほど親しくなければ、二人だけで温泉へは行かない',
                  );
                  await you.say_and_wait('俺とタキオンが……恋人か？', true);
                  break;
                case 3:
                  await era.printAndWait([
                    '……いや、普通',
                    tachyon.uma_sex_title,
                    'とトレーナーはよく行くのでは？',
                  ]);
                  await era.printAndWait([
                    '毎年四月、先輩たちが担当',
                    tachyon.uma_sex_title,
                    'と行く……しかも商店街の抽選らしい。不思議だ',
                  ]);
                  await era.printAndWait(
                    'だが……二人だけで温泉は、やはり少し変か……？',
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    'では、そのとき私とどんな関係になっていたいのです？',
                    callname,
                    '……来年四月、くふふ。楽しみですわ',
                  ]);
                  era.println();
                  await you.say_and_wait(
                    '来年四月、自分とタキオンの関係か……',
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                'ええ……一緒に行きます？ 実験場としては、悪くない場所ですわ',
              );
              await tachyon.say_and_wait(
                '温泉旅館といえば、事故が起きても、人が死んでもおかしくない場所ですわね',
              );
              await tachyon.say_and_wait(
                'なら、無害な小さな実験くらい、問題ないでしょう……',
              );
              era.printButton('「違う」', 1);
              await era.input();
              await era.printAndWait('実験や研究の場ではない');
              await era.printAndWait(
                '三年の二人三脚が終わったあとの、二人の休みだ',
              );
              era.printButton(
                '「トレーニングも実験も関係ない。ただ休むだけ……だめか？」',
                1,
              );
              await era.input();
              await tachyon.say_and_wait('……来年四月、ですの');
              await tachyon.say_and_wait(
                'くふふ、ではモルモットへの労いとしましょう',
              );
              await tachyon.say_and_wait(
                '来年四月、私たちの夢に一段落がついたとき……そのときもまだそばにいるなら、一緒に行きましょう',
              );
              era.printButton('「ああ！」', 1);
              await era.input();
              await tachyon.say_and_wait('ただし、褒美を出した以上……');
              await tachyon.say_and_wait(
                '残りの一年、あなたも頑張らねばなりませんわ',
              );
              await tachyon.say_and_wait([
                '実験を素直に受け、毎日料理をし、それから ',
                call_25,
                ' が逃げるときは捕まえて、私の実験に……',
              ]);
              era.println();
              await era.printAndWait('待て待て！ 最後のは明らかに無理だ！');
              era.println();
              await era.printAndWait([
                '笑いながら、二人はトレセン学園へ戻った',
              ]);
              await era.printAndWait('来年四月か……楽しみだ');
            } else {
              await era.printAndWait([
                'だが……',
                tachyon.get_colored_name(),
                ' は自分と行くだろうか',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'URA決勝のあと温泉旅行……悪くありませんわね',
              );
              era.println();
              await era.printAndWait('おや？ あっさり承諾した？');
              await era.printAndWait('面倒だと断ると思ったのに');
              era.println();
              await tachyon.say_and_wait(
                '温泉旅館といえば、事故が起きても、人が死んでもおかしくない場所ですわ。なら、無害な小さな実験くらい問題ないでしょう……',
              );
              era.println();
              await era.printAndWait('…………今のうちに券を返したほうがいいか？');
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      if (love >= 75) {
        await tachyon.say_and_wait([
          'さあ、',
          callname,
          '、バレンタインのチョコレートですわ',
        ]);
        era.println();
        await era.printAndWait([
          'トレーナー室に突然入ってきた ',
          tachyon.get_colored_name(),
          ' の淡々とした言葉で、',
          you.get_colored_name(),
          ' は今日がバレンタインだと気づいた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' のトレーニングに一日中追われ、日付すら忘れていた',
        ]);
        era.println();
        await you.say_and_wait('それにしても……タキオンからのチョコか', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.get_colored_name(),
          ' が後ろから出したハート型の箱を見た。小さな仕切りに、小粒のチョコが並んでいる',
        ]);
        await era.printAndWait('中身は、まさか……');
        era.println();
        await tachyon.say_and_wait(
          'ん？ なんです、その顔。中に薬を入れたと思いましたの？',
        );
        era.printButton('頷く', 1);
        era.printButton('「入っていないのか？」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '……ひどい言い方ですわ。反論はできませんけれど',
        );
        await tachyon.say_and_wait(
          'ですが今日は……特別な日ですもの。そんなことはしませんわよ',
        );
        await tachyon.say_and_wait(
          '信じられないなら、先に一つ食べましょうか？',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.get_colored_name(),
          ' がチョコをゆっくり口へ押し入れるのを見た',
        ]);
        await era.printAndWait(
          '前歯に当たったチョコは、桜色の唇がわずかに開くにつれ',
        );
        await era.printAndWait('一口、二口');
        await era.printAndWait([
          '指に押され、チョコは ',
          tachyon.get_colored_name(),
          ' の口の中へ消えていった',
        ]);
        era.println();
        await era.printAndWait('これなら……安心して食べられるかもしれない');
        await era.printAndWait([
          you.get_colored_name(),
          ' は手を伸ばし、机のチョコへ向かった',
        ]);
        await era.printAndWait('だが');
        era.printButton('「……？」', 1);
        await era.input();
        await era.printAndWait('手が伸びた瞬間、チョコの箱は引き抜かれた');
        await era.printAndWait([
          you.get_colored_name(),
          ' が首を傾げた、そのとき',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('無防備な唇が襲われた');
        await era.printAndWait(
          '器用な舌が歯をこじ開けると、流れ込んだのは甘い粘液',
        );
        await era.printAndWait(
          '押さえつけられ、押し当てられた舌が橋になり、濃い、濃い液体が流れ落ちる',
        );
        await era.printAndWait('甘い、甘い');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の好みどおりのチョコが口腔に染みる',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' には甘すぎるはずの味が、',
          tachyon.get_colored_name(),
          ' の舌に掻き混ぜられ、だんだん慣れていった',
        ]);
        await era.printAndWait([
          '身体から改造され、',
          tachyon.get_colored_name(),
          ' の好みへ整えられていくようだ',
        ]);
        await era.printAndWait(
          '……いや、整える、という言い方は適切ではないかもしれない',
        );
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、チョコは、まだたくさんありますわよ❤️',
        ]);
        era.println();
        await era.printAndWait('目の前の恋人の、情欲と獣欲に満ちた目を見る');
        await era.printAndWait('ああ……「料理」された食材は、食べられる番だ');
      } else if (love >= 50) {
        await tachyon.say_and_wait([
          'おや、',
          callname,
          '、ハッピーバレンタイン！',
        ]);
        era.println();
        await era.printAndWait([
          '晴れた朝を破り、扉を開けて入ってきたのは、大きな袋を背負った ',
          tachyon.get_colored_name(),
          ' だった',
        ]);
        await era.printAndWait('……おかしい。今日はクリスマスではないはずだ');
        era.println();
        await tachyon.say_and_wait([
          'ん？ これらですの？ 他の',
          tachyon.uma_sex_title,
          'たちからの贈り物ですわよ？',
        ]);
        await tachyon.say_and_wait(
          'まったく……要らないと言ったのに。こんなものより、実験に自ら身を提供してくれたほうが嬉しいですわ……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は……そんなに人気なのか',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸に、わずかな嫉妬が湧いた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'その話はいいですわ。とにかく ',
          callname,
          '、私のチョコを受け取りなさい！',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は袋の中を漁り、大きさは少しずつ違うが似たようなチョコを探した',
        ]);
        await era.printAndWait(
          'まさか……他人からもらったチョコを、そのまま回しているだけか？',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' との関係はそこまでではないのに、自分は違うはずだ、特別に扱われるはずだ、と思ってしまう',
        ]);
        era.printButton('「それは……義理チョコか？」', 1);
        await era.input();
        await era.printAndWait('指導者として、聞くべきではない質問だ');
        await era.printAndWait('だが……やはり');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の本音が知りたい',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' の言葉に、',
          tachyon.get_colored_name(),
          ' は袋を漁る手を止めた',
        ]);
        await era.printAndWait([
          '顔を上げ、',
          you.get_colored_name(),
          ' の目をじっと見た',
        ]);
        await era.printAndWait([
          'その美しい赤瞳は、',
          you.get_colored_name(),
          ' の内側を見透かすようだった',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'おや、その言葉はどういう意味ですの、',
          callname,
          '？',
        ]);
        await tachyon.say_and_wait('義理だとしたら、どうしますの？');
        await tachyon.say_and_wait([
          'それとも、あなたは……どんなチョコを望むのです？',
        ]);
        era.printButton('「タキオンが特別にくれたものであってほしい」', 1);
        era.printButton(
          '「タキオンが自分一人にだけくれるチョコであってほしい」',
          2,
        );
        await era.input();
        await era.printAndWait('最後まで、あの二字は言えなかった');
        await era.printAndWait([
          'トレーナーである自分が、担当',
          tachyon.uma_sex_title,
          'に「本命」かどうかを聞くなど、できるはずがない',
        ]);
        era.println();
        await tachyon.say_and_wait('では、差し上げますわ');
        era.println();
        await era.printAndWait(
          'ようやく袋の底から、七色で絶対に見間違えない小さな包装を取り出したあと',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はチョコを胸元の小さなポケットへ押し込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'さあ、愛しい実験動物へ。一年分の感謝……そして、感謝以外の❤',
        );
        await tachyon.say_and_wait('ご自身の手で、取り出してくださいまし');
        era.println();
        if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が明らかに胸を突き出すのを見た',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は震える手を伸ばした',
          ]);
          await era.printAndWait('胸に触れないよう、慎重にチョコを取り出した');
        } else {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が明らかに胸を突き出すのを見た',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は遠慮なく手を伸ばし、チョコを取った',
          ]);
          await era.printAndWait([
            '途中で摘んだ、眼前の',
            tachyon.uma_sex_title,
            'を甘い声にさせる肉塊は？',
          ]);
          await era.printAndWait(
            '錯覚だろう。チョコを置く棚が、声を出すはずがない',
          );
        }
        era.println();
        await era.printAndWait([
          '包装を剥き、',
          you.get_colored_name(),
          ' はチョコを口に含んだ',
        ]);
        await era.printAndWait('口に入れた瞬間、チョコは溶けた');
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('豚肉、玉ねぎ、ソース……');
        await era.printAndWait([
          'チョコにあるはずのない味が、',
          you.get_colored_name(),
          ' の口に広がった',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？ その顔、おかしいですわよ？']);
        await tachyon.say_and_wait(
          '早く早く、効果は？……肉体に変化は見えません。内面に出るのですかしら……',
        );
        await era.printAndWait([
          'さっきまでの曖昧な空気を一転させ、',
          tachyon.get_colored_name(),
          ' は興奮して ',
          you.get_colored_name(),
          ' の反応を尋ねた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '？ 研究室で半日かけて調合したチョコの評価を、しないつもりですの？',
        ]);
        era.println();
        await era.printAndWait('…………この人は');
      } else if (relation > 225) {
        await tachyon.say_and_wait(['ははは！ ', callname, '！']);
        era.println();
        await era.printAndWait([
          '明るい笑い声とともにトレーナー室の扉を開けたのは、大きな袋を背負った ',
          tachyon.get_colored_name(),
          ' だった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Merry Christmas？ Happy New Year？ とにかく何かの祝日ですわ。早く早く、私の贈り物を受け取りなさい！',
        );
        era.printButton('「……バレンタイン、ということか？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'む……どうでもいいですわ。要するに、合法的に他人へ食物を押し込める日ですわよね？',
        );
        era.println();
        await era.printAndWait('……その解釈も、間違いではない？');
        await era.printAndWait([
          'だが相手が ',
          tachyon.get_colored_name(),
          ' だと考えると……',
        ]);
        era.printButton('「……何の薬を入れた」', 1);
        era.printButton('「……何人に配った」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'そんなことはどうでもいいですわ！ 受け取りなさい、私のバレンタイン！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は袋を漁り、とりわけ大きなチョコを取り出し、',
          you.get_colored_name(),
          ' の許可も聞かず手に押し込んだ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'の手つきは慣れている。道中、すでに何人にも配ったのだろう',
        ]);
        await era.printAndWait(
          '……明日は各方面へ謝らねばならない。だがまず、この場を生き抜け',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐る恐るチョコを齧った',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('発光、変形、頭が二つ、背に翼、液化……');
        await era.printAndWait('どれも……起きなかった');
        await era.printAndWait(
          '言うなれば、たぶん、おそらく、ただの普通のチョコだ',
        );
        await era.printAndWait([
          'だが、これは ',
          tachyon.get_colored_name(),
          ' 基準の「正常」だ',
        ]);
        await era.printAndWait('普通の人にとってのチョコかどうかは……');
        era.printButton('なぜ……カツ丼味なんだ！？', 1);
        await era.input();
        await era.printAndWait('豚肉、玉ねぎ、ソース……');
        await era.printAndWait([
          'チョコにあるはずのない味が、',
          you.get_colored_name(),
          ' の口に広がった',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？ その顔、おかしいですわよ？']);
        await tachyon.say_and_wait(
          '早く早く、効果は？……肉体に変化は見えません。内面に出るのですかしら……',
        );
        era.println();
        await era.printAndWait(
          'この人は……自分でも薬効がわからないものを、他人に押しつけるのか',
        );
        await era.printAndWait([
          '他の日ならまだしも、カップルがきらめくこの日を ',
          tachyon.get_colored_name(),
          ' に壊されるとは…………',
        ]);
        await era.printAndWait([
          'おかしい。急に、',
          tachyon.get_colored_name(),
          ' が正しい気がしてきた',
        ]);
        await era.printAndWait([
          '…………とにかく、',
          tachyon.get_colored_name(),
          ' には少しお灸が必要だ',
        ]);
        era.printButton('「効果は出ていないみたいだ」', 1);
        era.printButton('「タキオンも食べてみろ」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の返事を待たず、',
          you.get_colored_name(),
          ' は一口齧ったチョコを ',
          tachyon.get_colored_name(),
          ' の口へ押し込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait('む！？ ぐうっ！？');
        era.println();
        await era.printAndWait([
          '不意を突かれた ',
          tachyon.get_colored_name(),
          ' は、口いっぱいにチョコを詰められた',
        ]);
        await era.printAndWait([
          '口を開こうとして、',
          tachyon.sex,
          'は仕方なく飲み込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ちょっと、何をするのです！ ',
          callname,
          '！？',
        ]);
        await tachyon.say_and_wait('うえ……なんです、この味は！？');
        await tachyon.say_and_wait([
          '変な味ですわ！！ なぜチョコにカツの味があるのです！',
        ]);
        era.println();
        await era.printAndWait([
          '明日は報復されるだろう。だが今、',
          tachyon.get_colored_name(),
          ' の驚愕と吐き気の顔を見て',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は、胸がすっとした']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' の、騒がしいバレンタインは終わった',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '！ ははは、ハッピーバレンタイン！',
        ]);
        era.printButton('「……タキオン？」', 1);
        await era.input();
        await era.printAndWait([
          'これほど高揚した ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は警戒した',
        ]);
        await era.printAndWait([
          '理由は単純だ。普段は冷たい ',
          tachyon.get_colored_name(),
          ' が、今日は異常に浮かれていた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ん？',
          callname,
          '？ どうしましたの。バレンタインおめでとうと言わないのですか？ もしかして……私のことが嫌い……ぐうっ……',
        ]);
        await tachyon.say_and_wait('うう……む……頭……くらくらしますわ……');
        era.println();
        await era.printAndWait([
          'おかしい。今日の ',
          tachyon.get_colored_name(),
          ' は……どこか変だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の顔をよく見た。寒さや興奮だと思っていた薄い赤と、とろんとした両目を捉えた',
        ]);
        era.printButton('「……タキオン、酒を飲んだな？」', 1);
        await era.input();
        await tachyon.say_and_wait('む……飲んでませんわ……');
        await tachyon.say_and_wait(
          'ただ……ただ……うっかり、エタノールの混合物を……少し……',
        );
        era.println();
        await era.printAndWait('エタノール混合物……それは酒だろう！？');
        await era.printAndWait([
          'だから ',
          tachyon.get_colored_name(),
          ' の様子がおかしいのか……',
        ]);
        await era.printAndWait('とにかく、今日のトレーニングは無理だ');
        await era.printAndWait(['まず', tachyon.sex, 'を休ませよう']);
        era.println();
        await era.printAndWait([
          'だが休む気のない ',
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手をかわし',
        ]);
        await era.printAndWait(
          '懐を探り、白衣の内ポケットにいつも隠している薬瓶の中から、実験用ろ紙に包んだものをようやく見つけた',
        );
        await era.printAndWait('開ければ、七色のチョコが一枚');
        era.println();
        await tachyon.say_and_wait(['む……そ……そうだ……', callname, '……？']);
        await tachyon.say_and_wait('バ……バレンタインの、チョコ……');
        era.drawLine();
        await era.printAndWait('これほど不穏なバレンタインは、初めて見る');
        await era.printAndWait('こんな怪しいチョコを、本当に食べるのか');
        era.printButton('「これは……何で作った？」', 1);
        await era.input();
        await tachyon.say_and_wait('何……で？ む……忘れましたわ……');
        await tachyon.say_and_wait(
          'たしか……たしか……ココアパウダー……牛乳……砂糖……醤油……玉ねぎ……生の豚肉？',
        );
        era.println();
        await era.printAndWait(
          '後ろのいくつかは、チョコに入るものではないだろう！？',
        );
        await era.printAndWait('だが……毒は入っていない、と喜ぶべきか');
        await era.printAndWait('味は、絶対に変だろうが');
        era.println();
        await tachyon.say_and_wait('な……なぜ食べないのです……');
        await tachyon.say_and_wait([
          '食べなさい……',
          callname,
          '……私の顔を……潰すつもりですの……',
        ]);
        era.println();
        await era.printAndWait('なぜ急に、酒を勧めるおじさん口調に！？');
        await era.printAndWait([
          you.get_colored_name(),
          ' がいつまでも手を出さないのを見て、',
          tachyon.get_colored_name(),
          ' は自分でチョコを取った',
        ]);
        await era.printAndWait('そして……口にくわえた');
        era.println();
        await tachyon.say_and_wait(
          'む……こゆすれば食べれるでしょ（こうすれば食べられるでしょう）',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はチョコを軽く歯で挟んだ',
        ]);
        await era.printAndWait([
          '桜色の唇がわずかに開き、',
          you.get_colored_name(),
          ' に、反対側から齧れと示した',
        ]);
        await era.printAndWait('……え？');
        era.println();
        await tachyon.say_and_wait(
          'ふふ……こゆすればチューできるかも（こうすればキスできるかもしれませんわよ）',
        );
        era.println();
        await era.printAndWait('……これが酒の魔力か');
        await era.printAndWait([
          'いつも自分に冷たい顔を向ける ',
          tachyon.get_colored_name(),
          ' が、こんなに柔らかく、色っぽい',
        ]);
        await era.printAndWait([
          '思わず、',
          you.get_colored_name(),
          ' は前へ出てチョコを齧った',
        ]);
        era.println();
        await era.printAndWait('近い、近い');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の吐息が、そのまま届く距離だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の目を見た',
        ]);
        await era.printAndWait('惹きつける、今は少し酔ったその瞳を');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は小さく齧った。チョコが終われば、この時間が消える気がして',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' もゆっくり近づき、蝶のような唇がほとんど触れそうになる……いや、もう触れているのかもしれない',
        ]);
        await era.printAndWait('だが……チョコの大きさは、それだけだ');
        await era.printAndWait(
          '温度のせいか、それともどちらかが先に、危うい繋がりを切ったのか',
        );
        await era.printAndWait([
          'チョコは二人の口で溶け、折れ、それぞれの口へ入った',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('……毒はない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の威圧の下で何度も試薬してきた ',
          you.get_colored_name(),
          ' なら、断言できる。毒ではない',
        ]);
        await era.printAndWait('だがこの味……この味は……');
        era.printButton('「なぜ……豚丼なんだ……？」', 1);
        await era.input();
        await era.printAndWait('最後の妙な材料を聞いた時点で、予感はあった');
        await era.printAndWait('それでも、この味は理解しがたい');
        await era.printAndWait('というより、どうやってこのチョコを作った……');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を見た。',
          tachyon.get_colored_name(),
          ' は黙ったままだ',
        ]);
        await era.printAndWait('まさか……何か問題が……');
        era.println();
        await tachyon.say_and_wait('……………ぷ');
        await tachyon.say_and_wait(
          'はははは！ なんです、この味は！ おかしいですわ！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が突然笑い出した',
        ]);
        await era.printAndWait('自分の知らない落ちがあるのか？');
        await era.printAndWait([you.get_colored_name(), ' は少し考えた']);
        await era.printAndWait('カツ丼味のチョコ');
        await era.printAndWait('…………よく考えれば、たしかに面白い');
        era.println();
        await era.printAndWait([
          'いつの間にか、',
          you.get_colored_name(),
          ' も笑っていた',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('zzz……むにゃ……すぅ……');
        era.println();
        await era.printAndWait('まったく……騒ぎ終わると、勝手に眠る');
        await era.printAndWait([
          'まさか、',
          tachyon.get_colored_name(),
          ' には酒癖の悪い酔っ払いの素質があるのか……？',
        ]);
        era.println();
        await tachyon.say_and_wait('ん……モルモット……あ……り……が……すぅ……');
        era.println();
        await era.printAndWait('………まさか');
        await era.printAndWait('恥ずかしくて言えず、だから……');
        await era.printAndWait([
          'いや、何を考えている。',
          tachyon.get_colored_name(),
          ' なら……八割、本当に事故……か？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の口元のよだれを拭った',
        ]);
        await era.printAndWait([
          'とりあえず……',
          tachyon.sex,
          'が目覚めたら確認しよう。せめて、チョコに入れていいものと、いけないものくらいは……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '束の間の休息';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} plan_b Plan B に入っているか
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      plan_b,
      prix_lat,
      arim_kin,
    ) => {
      const ret = [];
      await tachyon.say_and_wait('夏合宿、そして……');
      if (plan_b) {
        await tachyon.say_and_wait(['その次は……', prix_lat, ' ですわ']);
        await tachyon.say_and_wait(
          'ええ、世界の頂点を頂点の目標に……くふふ、これ以上ふさわしいものはありませんわ',
        );
      } else {
        era.println();
        await tachyon.say_and_wait(['その次は……年末の ', arim_kin, ' ですわ']);
        await tachyon.say_and_wait(
          'ええ、最も影響力のあるレースで理論の締めくくり……くふふ、これ以上ふさわしいものはありませんわ',
        );
      }
      era.printButton('「だが、その前に……」', 1);
      era.printButton('「まずは、しっかり楽しもう」', 2);
      await era.input();
      await era.printAndWait('陽射し、砂浜、ビキニ');
      await era.printAndWait([
        'そして ',
        tachyon.get_colored_name(),
        ' の水着',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), ' の、水着']);
      era.println();
      if (love >= 50 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          '見るだけ……で足りるのです？ 自分の手で、確かめたくはありませんの？',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は身を乗り出し、',
          you.get_colored_name(),
          ' の目を見て、誰かが踏み出すのを待った',
        ]);
        era.printButton('手を伸ばして触る', 1);
        era.printButton('拒む', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' は我慢できず手を伸ばした。',
            tachyon.get_colored_name(),
            ' の胸元、二枚の薄い布では到底収まらない実へ',
          ]);
          era.println();
          await tachyon.say_and_wait('ん……❤');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は低く鳴いた。だが瞳の色は、ほとんど変わらない',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は緊張した。自分の腕が足りないのか？',
          ]);
          era.println();
          await era.printAndWait('どう頑張っても、もっと強く、と言われる');
          await era.printAndWait([
            'そもそも人間の力で',
            tachyon.uma_sex_title,
            'を満たすのは、難しいのだろう……',
          ]);
          await era.printAndWait([
            'そのとき気づいた。水着の下に、さっきまではなかった、あるいは目立たなかった突起が二つある',
          ]);
          await era.printAndWait([
            '時短のチートボタンのようにも見える。思わず、丸い球体の上で唯一の突起を押した',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ちょっと……ひっ！',
            callname,
            '！ そこ、そこはだめですわ！',
          ]);
          era.println();
          await era.printAndWait([
            'さっきまで指図されていたのだ。止めろと言われて止まる道理はない。',
            you.get_colored_name(),
            ' は構わず、尖った先をいじめ続けた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'わ……私が悪かったですわ……さっきは言うべきではありませんでした……だめ、もう押さないで……だめ、いけません……',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の反応は、',
            you.get_colored_name(),
            ' の想像よりはるかに大きかった',
          ]);
          await era.printAndWait([
            '好奇心が湧いた ',
            you.get_colored_name(),
            ' は、童心に返り、どうすれば ',
            tachyon.get_colored_name(),
            ' がいちばん激しく反応するか試したくなった',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……はあっ……はあっ……']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は手を少し緩めた。危険を脱したと思ったモルモットさんが油断した、そのあと……',
          ]);
          era.println();
          await tachyon.say_and_wait('ひっ——————い、いきますわ');
          era.println();
          await era.printAndWait('搾乳するように、強く下へ引いた');
          await era.printAndWait([
            '全身が震え、',
            tachyon.get_colored_name(),
            ' は白目を剥き、前へ倒れ、',
            you.get_colored_name(),
            ' の上に覆いかぶさった',
          ]);
          era.println();
          await tachyon.say_and_wait('えへへ……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の背を撫で、',
            tachyon.sex,
            'の痙攣を緩めた',
          ]);
          era.printButton('「情けないな。乳首を摘んだだけでイったのか？」', 1);
          era.printButton(
            `「レースの${tachyon.uma_sex_title}より、繁殖用の牝馬のほうが似合っているな」`,
            2,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' の侮辱を聞き、',
            tachyon.get_colored_name(),
            ' はまた身を震わせた。',
            tachyon.sex,
            'に押し潰された ',
            you.get_colored_name(),
            ' は、',
            tachyon.sex,
            'の股間からわずかな熱が流れ出るのを感じた',
          ]);
        }
      } else if (relation >= 225 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          'どうしましたの？ そんなに見惚れて。くふふ、実験を手伝った褒美ですわ。もっと見ていいですわよ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は体をくねらせ、胸の大きさをさらに強調した',
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          'ふん、そんなに露出の多い服が好きですの？……いいえ、これなら空気抵抗は減り、速度は上がりうる……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は途中で、また自分の思考に沈んだ',
        ]);
        await era.printAndWait([
          '水着が走りに効くかどうか……',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の揃っていないホットパンツとサンダルを見た……問題は水着ではないだろう、と ',
          you.get_colored_name(),
          ' は思った',
        ]);
      } else {
        await tachyon.say_and_wait(
          '……私と同じく理性至上である必要はありませんわ。ですが、発情した猿のような目は、少し収めてくださいまし',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  try_drug: (() => {
    const title = '試薬';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {1|2|3|4|5} effect 薬効。1=火、2=霊視、3=石化、4=発情、5=発光
     * @param {boolean} do_sex 発情の薬効で行為に至るか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      effect,
      do_sex,
    ) => {
      const colors = [
        '虹色',
        '深い赤',
        '深い橙',
        '深い黄',
        '深い緑',
        '深い青',
        '深い藍',
        '深い紫',
        '深い灰',
        '深い銀',
        '深い金',
        '淡い赤',
        '淡い橙',
        '淡い黄',
        '淡い緑',
        '淡い青',
        '淡い藍',
        '淡い紫',
        '淡い灰',
        '淡い銀',
        '淡い金',
      ];
      await tachyon.say_and_wait([
        'おや、',
        callname,
        '、ちょうどいいですわ。今日の薬です',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は',
        get_random_entry(colors),
        'の薬を ',
        you.get_colored_name(),
        ' に渡した',
      ]);
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は言われるまま飲んだ']);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだ直後、喉がひどく痒くなった',
          ]);
          await era.printAndWait('咳き込んだら、出てきたのは火花だった');
          era.println();
          await tachyon.say_and_wait('おやおや、竜息の薬、効果は上々ですわね');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は嬉しそうにデータを記録していた。次の結果は予想していなかった。咳の火花が、',
            tachyon.sex,
            'のそばの実験記録に落ちたのだ',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'なんです…………焦げ臭い……………私の実験データですわ！！？？',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'はまだ燃えていない記録を救い始めた。',
            you.get_colored_name(),
            ' も手伝おうとしたが、喉の痒みが収まらない',
          ]);
          era.println();
          await tachyon.say_and_wait('こっほっ！！');
          era.println();
          await era.printAndWait([
            '薬効が消えるまで、',
            tachyon.get_colored_name(),
            ' は資料を救うため、走り回り続けた',
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、目に映る世界が急に鮮明になった。',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' は幻覚剤ではないか疑い始めた。目の前に、妙なものが見え始めたからだ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'おや？ 効果が出たようですわね。これは ',
            t_call_c,
            ' の言う、もう一つの世界を見る感覚を基に作った霊視の薬ですわ',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は何を作ったのだ！ 普通の化学の領域を超えている！？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ついでに、今見えるなら、私の身体も見てくださいまし',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はその言葉で、無意識に ',
            tachyon.get_colored_name(),
            ' を見た',
          ]);
          await era.printAndWait([
            '直後、',
            you.get_colored_name(),
            ' の意識は一瞬止まった',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '昨日 ',
            t_call_c,
            ' にまとわりついて、うっかり',
            coffee.sex,
            'を怒らせたようですわ。戻ってから、身体が重い……',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は見た。黒い影が両手で ',
            tachyon.get_colored_name(),
            ' の肩を押さえている',
          ]);
          await era.printAndWait([
            '影は ',
            you.get_colored_name(),
            ' の視線に気づき、顔らしき部分に指を当て、静かに、と示した',
          ]);
          await era.printAndWait([
            'それから ',
            you.get_colored_name(),
            ' は、何も言えなくなった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '………おかしいですわ。本当に何もないのですか。なぜこんなに重い',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の異常に気づかず、独りごちて部屋を出た',
          ]);
          await era.printAndWait([
            'そのときようやく ',
            you.get_colored_name(),
            ' は大きく息ができた。あの黒い影は、いったい……',
          ]);
          era.println();
          await era.printAndWait([
            'ちなみに翌日、',
            tachyon.get_colored_name(),
            ' は普通に戻っていた。たぶん ',
            coffee.get_colored_name(),
            ' の軽いお仕置きだったのだろう',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、身体がひどく硬くなった',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は恐怖した。口と頭以外、全身が動かない',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'あら………身体の耐打性を上げる薬のつもりが、石化に近い効果になってしまいましたわ………',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' に、',
            tachyon.get_colored_name(),
            ' の実験後感想を聞いている暇はない',
          ]);
          await era.printAndWait([you.get_colored_name(), ' は焦っていた']);
          await era.printAndWait('必死に動かそうとしても、動かない');
          await era.printAndWait(
            'このあとグラウンドの時間割り会議がある。今日出なければ、一ヶ月グラウンドが使えない',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はその重大さを ',
            tachyon.get_colored_name(),
            ' に伝えた',
          ]);
          await era.printAndWait([tachyon.sex, 'も、大変だと悟った']);
          era.println();
          await tachyon.say_and_wait(
            'グラウンドに出られなければ、薬の効果をどう確認するのです！？',
          );
          era.println();
          await era.printAndWait([
            'とにかく、理由はさておき、今は ',
            you.get_colored_name(),
            ' を会議室へ運ぶのが先だ',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は懸命に ',
            you.get_colored_name(),
            ' を抱え、会議室へ向かった',
          ]);
          await era.printAndWait([
            'なぜか薬を飲んだ ',
            you.get_colored_name(),
            ' は異常に重い。',
            tachyon.get_colored_name(),
            ' が',
            tachyon.uma_sex_title,
            'の力で持ち上げるのも一苦労だった',
          ]);
          await era.printAndWait([
            'ようやく会議室へ運び、様子を見られないよう、',
            tachyon.get_colored_name(),
            ' はそばで会議に同席した',
          ]);
          era.println();
          await era.printAndWait([
            'その日以降、なぜか学園では ',
            tachyon.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' の噂が流れた',
          ]);
          await you.say_as_passer_by_and_wait(
            `通りがかりの${tachyon.uma_sex_title}A`,
            'お姫様抱っこで会議に行ったらしいわよ',
          );
          await you.say_as_passer_by_and_wait(
            '通りがかりのトレーナーA',
            '会議もずっと付き添って、お茶まで。完全に内助の功だな',
          );
          await you.say_as_passer_by_and_wait(
            `通りがかりの${tachyon.uma_sex_title}B`,
            ['あの ', tachyon.get_colored_name(), ' が恋をするなんて…………'],
          );
          era.println();
          await era.printAndWait('……………なぜそんな噂になる');
          await era.printAndWait([
            'そして、その噂を聞いた ',
            tachyon.get_colored_name(),
            ' の顔が、少し赤いのはなぜだ',
          ]);
          break;
        case 4:
          await era.printAndWait([
            '薬は ',
            you.get_colored_name(),
            ' が飲む前に桃色の濃霧を噴き、',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' を包んだ',
          ]);
          era.println();
          await tachyon.say_and_wait('こっほっ！ なんですの！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は首を横に振った。薬効すら知らない自分が、理由を知るはずがない',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ただの普通の精力剤ですのに……まあいいですわ。窓と扉を開けて霧を出しましょう',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は急いで窓へ向かい、開けようとした。だが',
          ]);
          era.println();
          await tachyon.say_and_wait('くっ、力が入りません……！');
          era.println();
          await era.printAndWait([
            'その間、',
            you.get_colored_name(),
            ' は椅子に座ったまま動けなかった。余裕があるからではない。',
          ]);
          if (you.sex_code !== 1) {
            await era.printAndWait([
              you.get_colored_name(),
              ' のそこが、すでに溢れかえっていたからだ',
            ]);
          } else {
            await era.printAndWait([
              you.get_colored_name(),
              ' の下半身の兄弟が、すでに立ち上がっていたからだ',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の言う精力剤を思い出した。一般に精力剤とは……そちらの薬だろう',
          ]);
          await era.printAndWait([
            'なぜ ',
            tachyon.get_colored_name(),
            ' がそんな薬を作るのか、疑問は残る。だが今は考えるときではない。なぜなら……',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……身体が……熱いですわ……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はハートになった両目で ',
            you.get_colored_name(),
            ' を見た。わずかな恐慌と、それ以上の情欲が混じっている',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'のその姿を見て、',
            you.get_colored_name(),
            ' は……',
          ]);
          if (!do_sex) {
            era.println();
            await era.printAndWait([
              'だめだ。',
              tachyon.sex,
              'は ',
              you.get_colored_name(),
              ' の担当',
              tachyon.uma_sex_title,
              'だ。',
              you.get_colored_name(),
              ' は、そんなことをしてはいけない',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は冷静に',
              tachyon.sex,
              'を拒んだ。幸い、',
              tachyon.get_colored_name(),
              ' も一定の冷静は保っていた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '大丈夫ですわ……この薬の効きは、せいぜい一時間……一時間耐えれば……',
            );
            await era.printAndWait([
              'それ以上は誰も言わなかった。',
              you.get_colored_name(),
              ' と、力が抜けて床に座った',
              tachyon.sex,
              'は、黙って時を待った',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は必死に耐えた。だが視線は、どうしても ',
              tachyon.get_colored_name(),
              ' へ向く',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は全身が汗だくだ——',
              you.get_colored_name(),
              ' も同じだろう——白衣に隠され、透けては見えない',
            ]);
            era.println();
            await era.printAndWait([
              'だが抜けはあった。一回り大きい白衣が汗で湿り、',
              tachyon.get_colored_name(),
              ' の体の線にぴったり沿った。',
            ]);
            if (tachyon.sex_code !== 1) {
              await era.printAndWait([
                '丸い腰と、その奥の深い溝から、胸のさほど大きくないが張りのある峰まで、はっきり ',
                you.get_colored_name(),
                ' の目に描かれた',
              ]);
            }
            era.println();
            await tachyon.say_and_wait([callname, '……']);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の視線に気づき、少し責めるように呼んだ。だが情欲に染まったその一声の ',
              callname,
              ' は色っぽく、',
              you.get_colored_name(),
              ' は慌てて謝り、視線を戻した',
            ]);
            era.println();
            await era.printAndWait('耐える、耐える、耐える');
            await era.printAndWait([
              'ようやく薬効が薄れ、',
              tachyon.get_colored_name(),
              ' は辛うじて立ち上がり、今日はここまで、と置いてトレーナー室を慌てて出ていった……',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は頭を振り、今日のことを振り落とそうとした。だが ',
              tachyon.get_colored_name(),
              ' の美しい体は、頭の中に残り、忘れられない……',
            ]);
            era.println();
            await era.printAndWait([
              'ちなみに事後、',
              you.get_colored_name(),
              ' が尋ねると、その精力剤は学内のある秘密の店に卸しているのだという。',
            ]);
            await era.printAndWait([
              'それが',
              tachyon.sex,
              'の研究資金の主な出所らしい。学園を歩けば、見つかるかもしれない……？',
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、全身が光り始めた。',
            you.get_colored_name(),
            ' は少し恐れたが、',
            tachyon.get_colored_name(),
            ' は相変わらず興奮していた',
          ]);
          era.println();
          await tachyon.say_and_wait('早く、服を脱ぎなさい');
          era.println();
          await era.printAndWait(['この人は何を言っている！？']);
          await era.printAndWait([
            '変態か！？ トレセンで流行りの嫌がらせか！？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて服を掴んだ。だが人間は',
            tachyon.uma_sex_title,
            'の力に敵わない。三秒の抵抗のあと、引っ張られて服は裂けた',
          ]);
          era.println();
          await era.printAndWait([
            '抗えない ',
            you.get_colored_name(),
            ' は目を閉じた。抗えないなら楽しむしかない。さあ、か弱い花だと思って手加減するな！',
          ]);
          era.println();
          await tachyon.say_and_wait('…………なるほど、なるほどですわ');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' が待っていたことは、いつまでも起きなかった。そっと目を開けると、',
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の身体を見つめ、呟きながら記録帳に何か書いていた',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は自分の身体に視線を戻した。たしかに光っている。だが光る部位には一定の規則があり、まるで…………',
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait('具体的には、こう動いていたのですわ……');
          } else {
            await tachyon.say_and_wait(
              `人間の身体は、具体的にはこう動いていたのですわ……ですが……${tachyon.uma_sex_title}との違いが…………`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の独り言を聞き、これも',
            tachyon.uma_sex_title,
            'の神秘を探る実験だと察した',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は、浅はかな想像を少し恥ずかしく思った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'よろしい、今日の観察はここまでですわ。戻って実験します。',
            callname,
            '、服を着なさい！',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は記録を終え、急いでトレーナー室を出て、',
            you.get_colored_name(),
            ' 一人を残した',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は床の、もはや服とは呼べない破片を見て、夜にまぎれて帰るか、同僚に服を頼むか考えた',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  second_chance: (() => {
    const title = 'Eureka';
    /**
     * アグネスタキオンを再度育成する選択で発火
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, love) => {
      await era.printAndWait([
        '今日、',
        tachyon.get_colored_name(),
        ' は急に浮かれてトレーナー室へ飛び込んできた',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！わかりましたわ（Eureka）……わかった（Eureka）のです！',
      ]);
      era.println();

      await era.printAndWait([
        '妙に聞き覚えのある言い回しに、',
        you.get_colored_name(),
        ' は緊張して ',
        tachyon.get_colored_name(),
        ' を見た。だが',
        tachyon.sex,
        'はバスタオルではなく、風呂上がりでもなさそうで、少し安心した',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！見つけましたわ……最大の可能性……そうですわ……なぜ、今まで気づかなかった',
      ]);
      era.println();

      await era.printAndWait('いったい何の話だ');
      await era.printAndWait([
        you.get_colored_name(),
        ' はぽかんと ',
        tachyon.get_colored_name(),
        ' を見た',
      ]);
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' は急に、見知らぬ感触を覚えた',
      ]);
      await era.printAndWait(
        'あれほど一緒に過ごし、やっと最初の三年を越えたのに',
      );
      await era.printAndWait('互いのことは知り尽くしているはずだ');
      await era.printAndWait('なぜ、言葉にできない疎遠さがある');
      era.printButton('「何の話だ？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'おや、説明していませんでしたか？ まったく……興奮しすぎて、すっかり忘れていましたわ',
      );
      await tachyon.say_and_wait('まあ、簡単に言えば————平行世界ですわ');
      await tachyon.say_and_wait(
        '時間を大河に喩えるなら、その川にはさまざまな支流があります',
      );
      await tachyon.say_and_wait(
        'その支流の多くはごく細く、一本の川にはなりません',
      );
      await tachyon.say_and_wait(
        'ですが……ある条件では、川はある節で十分大きな分岐を生む——その節が、いわゆる可能性ですわ',
      );
      await tachyon.say_and_wait(
        'その分岐も川となって流れます。生まれたその支流こそ、平行世界の存在ですわ',
      );
      era.println();

      await era.printAndWait('平行世界');
      await era.printAndWait('SFやファンタジーでよく見る題材だ');
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' がそれを信じるとは思わなかった',
      ]);
      era.printButton('「だが結局、真偽を確かめられる者はいないだろう」', 1);
      await era.input();

      await tachyon.say_and_wait('ええ……その通りですわ');
      await tachyon.say_and_wait(
        '科学は慎重に検証せねばなりません……仮説はこうでも、平行世界の有無をどう証明するか……',
      );
      await tachyon.say_and_wait(
        'どう証明しますの……やはり、世界を渡り、元の記憶を乱さない者が必要ですわ。そんな人が、どこにいますの……まったく、悩みますわね',
      );
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は話しながら、何度も ',
        you.get_colored_name(),
        ' のほうへ目をやった',
      ]);

      era.printButton('「……」', 1);
      era.printButton('「どういう意味だ？」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait([
          'くふふ……何を言っているか、よくわかっていますわね、',
          callname,
          '……それとも、別の呼び方を……いいえ、やめますわ。他の場所で誰であろうと、ここでは私の',
          callname,
          'です。それ以外の身分はありません',
        ]);
      } else {
        await tachyon.say_and_wait([
          'おや？ 本当にわからない……それとも、とぼけていますの？ まあいいですわ。ここではあなたは私の ',
          callname,
          ' です。他の身分はありません',
        ]);
      }
      era.println();

      await tachyon.say_and_wait(
        'ですが、気になりますわ……他の世界、他の可能性を持つアグネスタキオンは、どんな姿でしょう……とっくに限界を越えた者も、その場に囚われ、可能性の手前で止まった者も……',
      );
      await tachyon.say_and_wait([
        callname,
        '、記録はきちんと残しなさい。今回の出張の研究課題ですわ',
      ]);
      era.println();

      await you.say_and_wait('……え？', true);
      await era.printAndWait('待て、どういうことだ');
      await era.printAndWait('さっきから、わからない話ばかりだ');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はもともと独り言が多いが、今日は度が過ぎている',
      ]);

      era.printButton(`「タキオン？」`, 1);
      await era.input();

      await tachyon.say_and_wait('それから————おや、時間のようですわ');
      era.println();

      await era.printAndWait('時間？');
      await era.printAndWait('何の時間だ');
      await era.printAndWait([
        you.get_colored_name(),
        ' が振り返ると、すべてが消えていた',
      ]);
      await era.printAndWait('白い空白だけが残る');
      await era.printAndWait('蒼白い空間の前に、古い深い桐の木の扉が一つ');
      await era.printAndWait([
        'どこかで見た気がする。色とりどりの光を踏んだ',
        tachyon.uma_sex_title,
        'が、扉から走り出てきた絵面を',
      ]);
      await era.printAndWait([
        '振り返ると、',
        tachyon.get_colored_name(),
        ' はいつの間にかいなく、空間には ',
        you.get_colored_name(),
        ' と眼前の扉だけが残っていた',
      ]);
      await era.printAndWait([
        '空間にはなお、',
        tachyon.get_colored_name(),
        ' の最後の言葉が残っている',
      ]);
      era.println();

      if (love < 50) {
        await tachyon.say_and_wait(
          '実験データは、絶対に忘れないでくださいまし！',
        );
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の熱に浮かされた声が、',
          you.get_colored_name(),
          ' の耳に残る',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、研究に狂った',
          tachyon.sex,
          'の顔を見た気がした',
        ]);
      } else if (love < 90) {
        await tachyon.say_and_wait('実験データは、必ず持ち帰ってくださいまし');
        era.println();

        await era.printAndWait([
          tachyon.sex,
          'の最後の言葉に、',
          you.get_colored_name(),
          ' は少し止まった',
        ]);
        await era.printAndWait([
          '表向きは、',
          tachyon.sex,
          'の実験データへの熱だ',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' は、もう一つの意味を聞いた',
        ]);
        await tachyon.say_and_wait('必ず、戻ってきてくださいまし', true);
      } else {
        await tachyon.say_and_wait([
          '悩みますわ……あの世界の私も、きっと ',
          callname,
          ' を好きになるでしょう。恋敵が増えますわね',
        ]);
        era.println();

        await era.printAndWait('最後の最後に、そんなどうでもいい閑話を');
        await era.printAndWait('なぜなら……それ以外は、もう説明がいらない');
        await era.printAndWait([
          '実験データ？ 恋人として、',
          tachyon.sex,
          'の好奇心を満たさない理由はない',
        ]);
        await era.printAndWait([
          '必ず戻れ？ ',
          tachyon.sex,
          'に言われなくても、戻る',
        ]);
        await era.printAndWait(
          'まるで、ちょっと買い物に出るだけの日常のように',
        );
      }
      era.println();

      await era.printAndWait('では……');
      await era.printAndWait([you.get_colored_name(), ' は扉へ手を伸ばした']);
      await era.printAndWait([
        '今度出会うのは、どんな ',
        tachyon.get_colored_name(),
        ' だろう',
      ]);
      if (era.get('cflag:32:育成次数') > 1) {
        const buffer = [
          () =>
            tachyon.say_and_wait([
              'おや？',
              callname,
              '、また新しい可能性を探しに行くのですか？',
            ]),
          () =>
            tachyon.say_and_wait(
              'おや、戻ったなら、まず実験データを出しなさい！',
            ),
          async () => {
            await tachyon.say_and_wait('そうですか……悪くありませんわね');
            await tachyon.say_and_wait('では、時間もそろそろ、ですわね？');
            await tachyon.say_and_wait(['また今度話しましょう、', callname]);
          },
        ];
        if (love >= 75) {
          buffer.push(async () => {
            await tachyon.say_and_wait([
              'おはようございます、',
              callname,
              '。あるいは……お久しぶり、ですかしら？',
            ]);
            await tachyon.say_and_wait(
              'いいえ、やはりこう言いましょう……おかえりなさい❤️',
            );
          });
        }
        await get_random_entry(buffer)();
      }
    };
    f.title = title;
    return f;
  })(),
  be_betray: (() => {
    const title = 'こうして、アグネスタキオンとは二度と会えなかった';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'あの日、わけもわからず ',
        tachyon.get_colored_name(),
        ' の研究室で昏倒したあと。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はトレーナーとして、担当する',
        tachyon.uma_sex_title,
        'を探すのが筋だった。',
      ]);
      await era.printAndWait([
        'だが誰一人、',
        you.get_colored_name(),
        ' の内側の渇望を満たせなかった。',
      ]);
      await era.printAndWait([
        '胸の声が言う。',
        tachyon.sex,
        'ではない。',
        tachyon.couple_title,
        'ではない。',
      ]);
      await era.printAndWait([
        'ほどなく、',
        tachyon.uma_sex_title,
        'を一人も募集できなかった ',
        you.get_colored_name(),
        ' は、トレセン学園を解雇された。',
      ]);
      await era.printAndWait(['だが、それでいい。']);
      await era.printAndWait([you.get_colored_name(), ' は、そう楽観した。']);
      await era.printAndWait([
        '合わない',
        tachyon.uma_sex_title,
        'と無理に組むくらいなら、やめてしまえばいい。',
      ]);

      era.drawLine();
      await era.printAndWait([
        '学園を出た ',
        you.get_colored_name(),
        ' は、トレセンから遠くない場所に小さな食堂を開いた。',
      ]);
      await era.printAndWait(['自分の腕は、なぜか悪くなかった。']);
      await era.printAndWait([
        '記憶を失う前に何があったかはわからない。だが、誰か大事な人に飯を作ってやりたい相手がいたのだろう。でなければ、ここまではできない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、妙に手慣れた腕で店の名を上げた。トレセン周辺、さらにはトレセン学園の',
        tachyon.uma_sex_title,
        'まで、',
        you.get_colored_name(),
        ' の店に通った。',
      ]);
      await era.printAndWait([
        '記憶を失う前に何があったかはわからない。だが、誰か大事な人に飯を作ってやりたい相手がいたのだろう。でなければ、ここまではできない。',
      ]);
      await era.printAndWait([
        'だから、その人がいないのだろう。厨房に立つたび、熱は湧かない。',
      ]);
      era.println();

      await era.printAndWait(['そうして、日は一日ずつ過ぎた。']);
      await era.printAndWait([
        '良いとまでは言えない。悪いとも、それほど不満はない。',
      ]);
      await era.printAndWait(['生きている。それだけだ。']);
      era.println();

      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！ ',
        tachyon.get_colored_name(),
        ' の復帰初戦！ 有馬記念で輝かしい勝利を掴みました！',
      ]);

      era.drawLine();
      await era.printAndWait(['突然。']);
      await era.printAndWait([
        'その',
        tachyon.uma_sex_title,
        'は、稲妻のように空を裂いた。',
      ]);
      await era.printAndWait([
        '稲妻のように、',
        you.get_colored_name(),
        ' の胸を打った。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '。あの、わけのわからない',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        'あの日、研究室で別れて以来、一度も会っていない',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '店のテレビで、年末の話題である有馬記念を流していただけだった。',
      ]);
      await era.printAndWait([
        'だが、相手が走り始めた瞬間、なぜか目が離せなくなった。',
      ]);
      await era.printAndWait([
        'ゴールを切った瞬間、',
        you.get_colored_name(),
        ' は気づいた。いつの間にか、涙が流れていた。',
      ]);
      era.println();

      await era.printAndWait([
        'レース後の取材で、',
        tachyon.get_colored_name(),
        ' は言った。復帰は、誰かを探すためだと。',
        tachyon.sex,
        'にとって、かけがえのない、欠かせない人を。',
      ]);
      await era.printAndWait(['誰だろう、と人々は噂した。']);
      await era.printAndWait([
        '誰だろう、と声が ',
        you.get_colored_name(),
        ' の頭の中で問うた。',
      ]);
      await era.printAndWait(['頭痛だ。頭痛だ。頭が割れそうだ。']);
      await era.printAndWait([
        tachyon.sex,
        'が走り出した瞬間の涙は、感動だった。',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'が取材を受け、その言葉を聞いた瞬間の涙は、ただの痛みだった。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が探しているのは、誰だ。',
      ]);
      await era.printAndWait(['自分と、何の関係がある。']);
      era.println();

      await era.printAndWait(['だが、超光速の粒子は誰のためにも止まらない。']);
      await era.printAndWait(['大阪杯。']);
      await era.printAndWait(['天皇賞（春）。']);
      await era.printAndWait(['安田記念。']);
      await era.printAndWait(['宝塚記念。']);
      await era.printAndWait(['天皇賞（秋）。']);
      await era.printAndWait(['ジャパンカップ。']);
      await era.printAndWait([
        'どのレースも、',
        tachyon.get_colored_name(),
        ' は圧倒的な大差で、人を魅せる走りで勝ち切った。',
      ]);
      await era.printAndWait([
        'どのレースのあとでも、',
        tachyon.sex,
        'は取材の前に語った。',
      ]);
      await era.printAndWait(['あるときは「あの人」と過ごした日常を。']);
      await era.printAndWait(['あるときは「あの人」への懺悔を。']);
      await era.printAndWait(['あるときは「あの人」への咎めを。']);
      await era.printAndWait([
        'あるときは、話しているうちに、カメラの前で声を詰まらせた。',
      ]);
      era.println();

      await era.printAndWait([
        'どのレースも、',
        you.get_colored_name(),
        ' は誰より熱く見つめた。',
      ]);
      await era.printAndWait([
        'どのレースのあと、',
        tachyon.sex,
        'の取材を聞くたび、',
        you.get_colored_name(),
        ' の頭痛は ',
        you.get_colored_name(),
        ' に、次は絶対見ない、少なくとも取材は飛ばす、と誓わせた。',
      ]);
      await era.printAndWait(['だが、一度も守れなかった。']);
      await era.printAndWait(['脹る痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
      });
      await era.printAndWait(['波打つ痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
      });
      await era.printAndWait(['鈍い痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
      });
      await era.printAndWait(['間欠の痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
      });
      await era.printAndWait(['刺す痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
      });
      await era.printAndWait(['激しい痛み。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
      });
      await era.printAndWait([
        '痛みのたび、',
        you.get_colored_name(),
        ' は感じた。',
      ]);
      await era.printAndWait(['近い。もうすぐだ。']);
      await era.printAndWait([
        '痛みが、記憶のヴェールを一枚ずつ剥がしていくようだった。',
      ]);

      era.drawLine();
      await era.printAndWait(['ついに、最後の有馬記念。']);
      era.println();

      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！ 有馬記念連覇、年間無敗！ ',
        tachyon.get_colored_name(),
        '！ 最終の勝利を掴みました！',
      ]);
      era.println();

      await era.printAndWait(['ああ。']);
      await era.printAndWait(['あの走りを見た瞬間。']);
      await era.printAndWait(['全身の力が、引き抜かれたようだった。']);
      await era.printAndWait(['これだ。ずっと追い求めていたもの。']);
      await era.printAndWait([
        'これだ。ずっと、「',
        tachyon.sex,
        '」と一緒に追い求めていたもの。',
      ]);
      await era.printAndWait(['限界……いいえ、限界を超えた、完璧な走り。']);
      era.println();

      await era.printAndWait([
        'テレビではレース後、レース前の取材が再放送され始めた。',
      ]);
      era.println();

      await era.printAndWait(
        '（記者A「有馬記念のあと、引退を発表されるのですか？」）',
      );
      await tachyon.used_to_say_and_wait([
        'ええ……これでも',
        you.sex,
        'が見つからないなら……やり方を変えるべきでしょうね。',
      ]);
      await tachyon.used_to_say_and_wait([
        'これから私は引退して場を離れます。それから……くふふ、わかりませんわ……一年？ 十年？ それとも……一生？ どうでもいいですわ。',
        you.sex,
        'を見つけるまで、諦めません。',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), ' が、引退する？']);
      await era.printAndWait(['場を離れ、「あの人」を探す………「誰」を？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の足が動き始めた。今すぐトレセン学園へ行き、',
        tachyon.sex,
        'が去る前に、探し、会い、そして……',
      ]);
      await era.printAndWait(['いつの間にか、また頭が痛む。']);
      era.println();

      await era.printAndWait('？？？「痛い……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
      });
      await era.printAndWait('？？？「怖い……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
      });
      await era.printAndWait('？？？「助けて……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
      });
      await era.printAndWait('？？？「助けて、モルモット君！」', {
        color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
      });
      await era.printAndWait('？？？「モルモット君、どこにいるの？」', {
        color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
      });
      await era.printAndWait('？？？「モルモット君？ 捨てないで……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
      });
      await era.printAndWait('？？？「そばに戻って……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
      });
      await era.printAndWait('？？？「お願い、戻ってきて……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
      });
      await era.printAndWait('？？？「あなたがいなくてはだめ！」', {
        color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
      });
      era.println();

      await era.printAndWait([
        { color: tachyon.color, content: '頭痛' },
        'の正体が、剥がれた。',
      ]);
      await era.printAndWait(['無数の声が、耳元で泣き、喚き続ける。']);
      await era.printAndWait(['誰だ。']);
      await era.printAndWait(['誰が泣いている。']);
      await era.printAndWait(['誰が喚いている。']);
      await era.printAndWait(['「モルモット君」…………誰だ。']);
      await era.printAndWait(['足が止まった。']);
      await era.printAndWait(['両脚が震え、全身が冷える。']);
      await era.printAndWait(['自分が恐れている……何を。']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と向き合うことを。',
      ]);
      await era.printAndWait(['真実を知ることを。']);
      await era.printAndWait(['自分が、どんな人間だったかを知ることを。']);
      era.println();

      await era.printAndWait(['—————————']);
      await era.printAndWait(['——————']);
      await era.printAndWait(['—————']);
      era.println();

      await era.printAndWait([
        '結局、',
        you.get_colored_name(),
        ' は一歩も動かなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、もう二度と ',
        tachyon.get_colored_name(),
        ' に会えなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の頭も、もう痛まなかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '止まった時計';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait('起きて');
      await tachyon.say_and_wait('起きて');
      await tachyon.say_and_wait('お願い……目を開けてくださいまし');
      era.drawLine();
      await era.printAndWait('俺は誰だ');
      era.println();
      await tachyon.say_and_wait(
        'あなたは……モルモット君。私の専属トレーナーですわ',
      );
      era.println();
      await era.printAndWait('……あなたは誰だ');
      era.println();
      await tachyon.say_and_wait([
        '……私は ',
        tachyon.get_colored_name(),
        '。あなたの担当',
        tachyon.uma_sex_title,
        'です',
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait('……覚えていますか？');
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        'だめ……黙らないで。私を覚えていますわよね？ 覚えていますか？ ここはトレセン学園の、私たちの研究室。あちらは ',
        t_call_c,
        ' の領域……',
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait('……すまない');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' は首を横に振った']);
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          '……なぜか、馴染みがある',
        ]);
        await era.printAndWait('だが自分は、本当に知らない');
        era.println();
        await tachyon.say_and_wait(
          '……構いませんわ。記憶喪失も、一つの……一つの可能性……思い出せばいいだけです',
        );
        era.println();
        await era.printAndWait('……可能性');
        await era.printAndWait('その言葉が、泥の中の閃きを起こした気がした');
        await era.printAndWait('だが……');
        await era.printAndWait('閃きは、いつも一瞬だけだ');
        era.println();
        await era.printAndWait('わからない');
        await era.printAndWait('考えるほど、頭の空白は増える');
        await era.printAndWait('それでも、思い出さねばならない');
        await era.printAndWait('さっきの閃きに、もう一度届くように');
        await era.printAndWait('理由は一つだけ');
        await era.printAndWait([
          '眼前の、',
          tachyon.get_colored_name(),
          ' という名の',
          tachyon.teen_sex_title,
          'を知らない',
        ]);
        await era.printAndWait([
          'だが潜在意識が叫ぶ。',
          tachyon.sex,
          'を傷つけていけない。',
          tachyon.sex,
          'を悲しませてはいけない',
        ]);
        era.println();
        await era.printAndWait([
          'だから、',
          tachyon.sex,
          'が周りを見て思い出してみよう、と言ったとき',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は拒まなかった']);
        await era.printAndWait([
          tachyon.sex,
          'について、学園（',
          tachyon.sex,
          'によればそうらしい）を歩いただけだ',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……見てくださいまし。こちらがグラウンド。私たちが出会った場所ですわ',
        );
        era.println();
        await era.printAndWait('出会い……か');
        era.println();
        await tachyon.say_and_wait(
          'ええ。当時の私は、あなたを本当には見ていませんでしたけれど……あなたがそう言ったのです',
        );
        era.println();
        await era.printAndWait('そうか……');
        await era.printAndWait(
          'なら当時の自分は、タキオンの走りに魅せられたのだろう',
        );
        era.println();
        await tachyon.say_and_wait('！……思、思い出しましたの！');
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait(
          'ただ、何かの感触で……タキオンが走れば、きっと綺麗だと思った',
        );
        era.println();
        await tachyon.say_and_wait(
          '………ええ、何度も言いましたわ……私にはわかりません。ただ走るだけなのに、何が人を惹きつけるのか',
        );
        era.println();
        await era.printAndWait('……違う');
        await era.printAndWait(
          '他人はそうかもしれない。だがタキオンの走りは……自分を必ず魅せる、という感触がある',
        );
        era.println();
        await tachyon.say_and_wait(
          '……そうですか。では、一度走って見せましょうか？',
        );
        era.println();
        await era.printAndWait('！ いいのか！');
        await era.printAndWait('だが……タキオンの脚は……');
        era.println();
        await tachyon.say_and_wait('……覚、覚えていますの？');
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait('沈黙が、いちばんの答えだった');
        await era.printAndWait([
          'ここで',
          tachyon.sex,
          'を欺き、思い出したと言えば',
        ]);
        await era.printAndWait([tachyon.sex, 'はきっと喜ぶ']);
        await era.printAndWait([tachyon.sex, 'を欺いて、いいのか']);
        era.println();
        await era.printAndWait('なぜか、胸の声がまた高く叫ぶ');
        await era.printAndWait([tachyon.sex, 'を「また」欺くな']);
        await era.printAndWait('自分を「また」欺くな');
        await era.printAndWait('……なぜ「また」だ');
        era.println();
        await tachyon.say_and_wait('……構いませんわ。一周走ってきます');
        await tachyon.say_and_wait(
          'そうすれば、何か思い出せるかもしれませんわ',
        );
        era.println();
        await era.printAndWait([tachyon.sex, 'は一周走り終えた']);
        await era.printAndWait([
          you.get_colored_name(),
          ' が思ったとおり、心を動かす走りだった',
        ]);
        await era.printAndWait('だが……それだけだ');
        era.println();
        await era.printAndWait([tachyon.sex, 'は一周を終え、止まろうとした']);
        await era.printAndWait([
          'だが、なお茫然とした ',
          you.get_colored_name(),
          ' の目を見て、',
          tachyon.sex,
          'はなぜか、また走り出した',
        ]);
        await era.printAndWait([
          '呆然とする ',
          you.get_colored_name(),
          ' の前で、',
          tachyon.sex,
          'は一周また一周、暗くなるまで走った',
        ]);
        era.println();
        await era.printAndWait('……すまない');
        era.println();
        await tachyon.say_and_wait(
          'いいえ、なんでも……ただ、走りたくなっただけですわ',
        );
        era.println();
        await era.printAndWait('嘘だ');
        await era.printAndWait([
          you.get_colored_name(),
          ' にはわかる。だが、指摘しなかった',
        ]);
        await era.printAndWait('指摘できるはずがない');
        await era.printAndWait([
          'その',
          tachyon.teen_sex_title,
          'の、徒労の哀しみを',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……明日も、一緒に探しましょう。必ず、いつか取り戻せますわ',
        );
        era.println();
        await era.printAndWait('だから、徒労だとわかっていても');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、拒む言葉を吐けなかった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……見てくださいまし。普段はここで実験しています。毎回、私が薬を作って、あなたに飲ませるのですわ',
        );
        era.println();
        await era.printAndWait('ええ……それ、実験対象じゃないか？');
        era.println();
        await tachyon.say_and_wait(
          '当然ですわ。モルモット君が何の意味だと思いましたの',
        );
        era.println();
        await era.printAndWait('……本当に実験動物のことだったのか');
        era.println();
        await tachyon.say_and_wait(
          '……ですので、近いうちに研究しますわ。記憶を戻す薬を……手伝ってくれますわね？',
        );
        era.println();
        await era.printAndWait('……もちろん');
        era.drawLine();
        await tachyon.say_and_wait([
          'モルモット君……あちらは ',
          t_call_c,
          ' の領域です。気をつけなさい。不用意に触ると、事故になりますわ……',
        ]);
        era.println();
        await era.printAndWait('え……？');
        await era.printAndWait('……何も起きないな');
        era.println();
        await tachyon.say_and_wait(
          'ん？ そんなはずは……私も試しますわ……ああ！ 研究資料が燃えていますわ！',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'モルモット君、紅茶の淹れ方は覚えていますか？',
        );
        era.println();
        await era.printAndWait('もちろん、紅茶くらいは淹れられる');
        era.println();
        await tachyon.say_and_wait('しっ……これでは全然だめですわ');
        era.println();
        await era.printAndWait('ええ？');
        era.println();
        await tachyon.say_and_wait('紅茶と砂糖の比は、最低でも1対1ですわ！');
        era.println();
        await era.printAndWait('甘すぎるだろ！？');
        era.drawLine();
        await era.printAndWait(
          'タキオン……記憶を失う前の俺と、どんな関係だった',
        );
        era.println();
        await tachyon.say_and_wait('……どうしましたの？ 何か思い出しましたか？');
        await era.printAndWait([
          '……ない。ただ、話を聞いていると、トレーナーと',
          tachyon.uma_sex_title,
          '、あるいは実験と実験動物だけでは足りない気がする',
        ]);
        era.println();
        await tachyon.say_and_wait('…………実は、恋人ですわ');
        await era.printAndWait('本当か？');
        era.println();
        await tachyon.say_and_wait([
          '……ええ。とても仲のいい恋人で、毎日くっついて、甘すぎて ',
          t_call_c,
          ' も',
          tachyon.sex,
          'も参っていたほどですわ',
        ]);
        await era.printAndWait('…………すまない');
        era.println();
        await tachyon.say_and_wait('謝ることはありませんわ');
        await era.printAndWait('もし……思い出せたら');
        era.println();
        await tachyon.say_and_wait(
          '……何を言っていますの。思い出せたら、ではありません。まだ思い出していないだけです……必ず、必ず思い出しますわ',
        );
        await era.printAndWait('……そうだな。ありがとう、タキオン');
        era.drawLine();
        await tachyon.say_and_wait(
          '見てくださいまし。ここが商店街……普段の実験器具は、ここで買っていますわ',
        );
        era.println();
        await era.printAndWait('……なあ、タキオン');
        era.println();
        await tachyon.say_and_wait('ん？ どうしましたの？');
        era.println();
        await era.printAndWait(
          '……なぜ、周りの人が幽霊を見るような目で俺たちを見る',
        );
        era.println();
        await tachyon.say_and_wait('そうですか？ 先月の実験かもしれませんわ');
        era.println();
        await era.printAndWait('……先月？');
        era.println();
        await tachyon.say_and_wait(
          'ええ、あのときの実験で、通りを血の赤に染めてしまいましたわ',
        );
        era.println();
        await era.printAndWait('…………タキオンは、危険な人なのか？');
        era.println();
        await tachyon.say_and_wait([
          '失礼ですわ。私は清廉潔白な青春美',
          tachyon.teen_sex_title,
          'ですもの',
        ]);
        await tachyon.say_and_wait(
          'モルモット君がそばにいなければ、暴走する地球最終兵器になるだけですわ',
        );
        era.println();
        await era.printAndWait('怖い！');
        era.println();
        await tachyon.say_and_wait(
          '……ですので、もう離れないでくださいまし。いいですわね？',
        );
        era.println();
        await era.printAndWait('…………ああ');
        era.drawLine();
        await tachyon.say_and_wait(
          '……モルモット君。あなたは、私を責めませんの？',
        );
        era.println();
        await era.printAndWait('なぜだ');
        era.println();
        await tachyon.say_and_wait(
          '私ですわ。あなたの人生をここに縛ったのは。もし……',
        );
        era.println();
        await era.printAndWait('……なぜ');
        await era.printAndWait('責めるべきは、あなたのほうではないのか');
        await era.printAndWait(
          '記憶のない俺に……あなたの愛を受ける資格があるのか',
        );
        era.println();
        await tachyon.say_and_wait('！ 違います……そんなことはありません！');
        await tachyon.say_and_wait(
          '必ず思い出せますわ……！ ですから、ですから……そんなことは言わないで……',
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の足跡は、かつて辿った場所をすべて踏んだ',
        ]);
        await era.printAndWait('グラウンド、レース場、河原、神社');
        await era.printAndWait('最後まで、モルモット君の記憶は戻らなかった');
        await era.printAndWait('だが、二人はそれを悲しまなかった');
        await era.printAndWait(
          'その場所に、いちばん美しい思い出を、新たに残したからだ',
        );
        era.println();
        await tachyon.say_and_wait('……こんな物語の終わり、気に入りましたか？');
        era.println();
        await era.printAndWait('……ああ、いい話だ');
        era.println();
        await tachyon.say_and_wait('……モルモット君');
        era.println();
        await era.printAndWait('もういい。これで、十分だ');
        await era.printAndWait('俺は……もう死ぬ');
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('タキオン……ありがとう');
        await era.printAndWait('短い人生だった');
        await era.printAndWait('だがこの日々は、幸せだった');
        await era.printAndWait('過去を覚えていなくても……胸を張って言える');
        await era.printAndWait(
          'タキオンと出会えたこと……それが、人生でいちばん美しいことだ',
        );
        await era.printAndWait('だから、すまない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の物語は……ここで終わる',
        ]);
        era.println();
        await tachyon.say_and_wait('もし、あなたが望むなら……');
        await era.printAndWait('……すまない');
        await era.printAndWait('だが、もうあなたの足を引っ張るのはやめたい');
        await era.printAndWait('物語は、ここで終わらせよう');
      } else {
        await era.printAndWait('すまない……本当に、覚えていない');
        era.println();
        await tachyon.say_and_wait('モル……');
        era.printButton('「——もちろん、嘘だ！」', 1);
        await era.input();
        await tachyon.say_and_wait('…………え？');
        era.printButton(
          '「何を考えている。タキオンを忘れるわけがないだろう？」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton('「……え？ タキオン？」', 1);
        await era.input();
        await era.printAndWait('タキオンは急に黙り、頭を下げた');
        await era.printAndWait('突然、タキオンがあなたの身体を押さえた');
        era.println();
        await tachyon.say_and_wait(
          'この……！ どれほど心配したか、わかりますの！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は顔を上げない。だが床に落ちた水滴が示す————',
          tachyon.sex,
          'は泣いている',
        ]);
        era.printButton('「タキオン？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'だめ……もう欺かないで。お願い、いいですわね。本当に、怖い……失いたくない……',
        );
        era.printButton('「…………わかった。すまない」', 1);
        await era.input();
        await era.printAndWait('すまない');
        await era.printAndWait('本当にすまない');
        await era.printAndWait([
          '何が起きたかはわからない。だが、また',
          tachyon.sex,
          'を欺いた',
        ]);
        await era.printAndWait([
          '欺いた——眼前の、',
          tachyon.get_colored_name(),
          ' という名の、見知らぬ',
          tachyon.uma_sex_title,
          'を',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……覚えていますか。以前、何があったか',
        );
        era.println();
        await era.printAndWait('これは……頷いてもいいだろう');
        await era.printAndWait([you.get_colored_name(), ' は首を横に振った']);
        await era.printAndWait('正直、何も知らない');
        await era.printAndWait([
          'ここはどこか、眼前の',
          tachyon.teen_sex_title,
          'は誰か',
        ]);
        await era.printAndWait('すべて、わからない');
        await era.printAndWait('だが一点だけ、胸に埋まって動かない');
        await era.printAndWait([tachyon.sex, 'を悲しませたくない']);
        await era.printAndWait([tachyon.sex, 'を苦しませたくない']);
        await era.printAndWait('そのためなら、嘘で過去を覆っても構わない');
        era.println();
        await tachyon.say_and_wait(
          '……なんでもありませんわ。もういいです。あなたは目を覚ました……それで、十分ですわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は、詳しく説明する気がなさそうだ',
        ]);
        await era.printAndWait('なら、仕方ない');

        era.printButton('「そうだ、今は————」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'モルモット君、疲れているでしょう。続きは明日ですわ',
        );
        era.println();
        await era.printAndWait([
          '今の時刻を聞こうとしたところで、',
          tachyon.sex,
          'に慌てて話題を変えられた',
        ]);
        await era.printAndWait('過去の記憶はないが、人としての常識はある');
        await era.printAndWait([
          tachyon.sex,
          'の顔を見れば、',
          tachyon.sex,
          'はこの問いを答えたくない',
        ]);
        await era.printAndWait('……なら、聞かない');
        await era.printAndWait([
          'この問いが、',
          tachyon.sex,
          'にそんな慌てた顔をさせるなら',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'さあ、モルモット君。目が覚めたのですから、まず最初にすべきこと、わかりますわね？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……なに、だ？');
        await tachyon.say_and_wait(
          '決まっていますわ、ご飯です！ ご飯！ お腹が空いて死にそうですわ。モルモット君、早く何か作ってきなさい！',
        );
        await you.say_as_passer_by_and_wait('モルモット', '…………わかった');
        era.println();
        await you.say_as_passer_by_and_wait('モルモット', '味は……どうだ？');
        await tachyon.say_and_wait('………ん');
        await tachyon.say_and_wait('ぐえっ……まずいですわ……');
        await tachyon.say_and_wait(
          'どうしてこんなにまずいの……モルモット君、あなた……',
        );
        await you.say_as_passer_by_and_wait('モルモット', '！？');
        await tachyon.say_and_wait(
          'きっと……身体がまだ完全に戻っていないのでしょう。あんなに長く寝ていたのですもの',
        );
        await tachyon.say_and_wait(
          '今回は見逃してあげますわ。でも、早く元に戻りなさいな',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……あはは、すまないな',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'では……次は、グラウンドでトレーニングですわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait('………モルモット君？');
        await you.say_as_passer_by_and_wait('モルモット', 'あ、どうした……');
        await tachyon.say_and_wait(
          '驚かないのですか？ この私が、自らトレーニングに行くと言ったのですよ？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……え');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……つい、またサボるつもりだと思った',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'タキオンが、本気でトレーニングに行くのか！？',
        );
        await tachyon.say_and_wait('いえ、それは大袈裟ですわ');
        await you.say_as_passer_by_and_wait('モルモット', 'あはは……そうか');
        era.drawLine();
        await you.say_as_passer_by_and_wait('モルモット', '商店街……？');
        await tachyon.say_and_wait(
          'ええ。実験器具が足りなくなってきましたもの。付き合ってくださいまし',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ああ、いい。もちろん',
        );
        await tachyon.say_and_wait(
          'モルモット君？ どちらへ行くのですの？ 商店街はあちらではありませんわ',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……あ、いや、なんでもない。ちょっと取りに行くものがあっただけだ',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'よく考えたら、大した用事じゃなかった。あははは',
        );
        await tachyon.say_and_wait('……変ですわね');
        era.println();
        await tachyon.say_and_wait('ふん～ふんふんふん');
        await you.say_as_passer_by_and_wait('モルモット', '……なあ、タキオン？');
        await tachyon.say_and_wait('ん？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'なぜ……商店街の人が、お前を見る目が妙なんだ',
        );
        await tachyon.say_and_wait(
          '……そ、そんなことありますの？ 気のせいですわよ、モルモット君',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'いや、明らかにそうだ。危険人物でも見るような……',
        );
        await tachyon.say_and_wait('見間違いですわ');
        await you.say_as_passer_by_and_wait('モルモット', 'でも');
        await tachyon.say_and_wait('見間違いですわ');
        await you.say_as_passer_by_and_wait('モルモット', '……わかった');
        era.drawLine();
        await tachyon.say_and_wait(
          '……モルモット君。今は、慎重に、手のものを下ろしなさい',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'え……どうした？');
        await tachyon.say_and_wait([
          'どうしたもこうしたも、それが ',
          t_call_c,
          ' のものですのよ？',
        ]);
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'え……でも、ちょっと触ったくらいなら大丈夫だろう',
        );
        await tachyon.say_and_wait(
          'そんなはずが！ この前、私が研究資料に軽く触れただけで、一瞬で燃え上がったのですわ！',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'でも……');
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait(
          'では私も試しますわ………わああ！ 燃えていますわ！ 早く資料を救いなさいあああ！',
        );
        era.drawLine();
        await tachyon.say_and_wait('ねえねえ、モルモット君');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ん？ タキオン、どうした？',
        );
        await tachyon.say_and_wait(
          '言いますけれど、目が覚めてから、一度も私と親しんでいませんわよね？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……え？');
        await tachyon.say_and_wait(
          '恋人を放ったらかしですわ。さっきまでは回復していないからだと思っていましたけれど……身体検査も問題ないのですから、そろそろちゃんと甘えなさいな？',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '待て、タキオンはまだ学生だろう',
        );
        await tachyon.say_and_wait('ええ、何か問題ですの？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '大問題だろう！？ 倫理とか……',
        );
        await tachyon.say_and_wait(
          '……急に何を興奮しているのですの。当初は、あなたからあんなに積極的だったのに♡',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '…昔の俺は、そんなに最低だったのか',
        );
        await tachyon.say_and_wait('？ モルモット君、今、何か言いました？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……いや、なんでもない',
        );
        await tachyon.say_and_wait('では早く。ちゃんと親しみましょう♡');
        era.drawLine();
        await tachyon.say_and_wait(
          'おお、今回の弁当は上出来ですわ！ モルモット君！ ようやく昔の水準に戻りましたわね！',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'そ……そうか？');
        await tachyon.say_and_wait(
          'あんなに必死にリハビリした甲斐がありましたわ！',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ああ…………レシピ本のおかげでもある',
        );
        await tachyon.say_and_wait(
          'まったく……こんな味、久しぶりですわ…………本当に、久しぶり………',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……タキオン、一つ聞いてもいいか？',
        );
        await tachyon.say_and_wait('ん？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '俺は一体……どれだけ眠っていた',
        );
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait('……………年ですわ');
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait('……モルモット君？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'すまない……そんなに長いあいだ、お前は……孤独だっただろう',
        );
        await tachyon.say_and_wait('！');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……もう戻った。もう大丈夫だ。もう、これ以上……',
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          'モルモット君……本当に……本当に、もう支えきれないところでしたわ……',
        );
        await tachyon.say_and_wait(
          'もし……目が覚めなかったら……もし……私を完全に忘れていたら……もし……もし……',
        );
        await tachyon.say_and_wait(
          '本当に……怖かった……悪夢のよう……何年も続いた悪夢……',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……………');
        await tachyon.say_and_wait(
          'でも……戻ってきましたわ。あなたは、戻ってきました',
        );
        await tachyon.say_and_wait(
          '約束してくださいまし……今度は、もう離れないで……いいですわね？',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……ああ、もう離れない',
        );
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'それで……あの日は、いったい……',
        );
        await tachyon.say_and_wait(
          '……あの日、あなたは商店街で……私は、ほんの少し席を外しただけ。なのに……自称ファンの者が、飛びかかって……それから……',
        );
        await tachyon.say_and_wait('……あのとき、もう少し早く戻れていれば、');
        await tachyon.say_and_wait('いいえ、ずっとそばにいれば……');
        await tachyon.say_and_wait(
          '絶対に、あんなことにはならなかった……ごめんなさい……',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'いいんだ……今は、もう無事なんだろう？',
        );
        await tachyon.say_and_wait(
          'でも……あいだの、あなたの人生……何年も…………恨まないのですか？',
        );
        await tachyon.say_and_wait(
          '私が原因でなければ……私が担当でなければ……あなたは、こんな目に遭わなかったかもしれませんわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'なぜ恨む必要がある');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'タキオンのせいじゃない……それなのに、タキオンは俺を救い出してくれた',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '感謝しても足りない。恨むわけがない',
        );
        await tachyon.say_and_wait(
          '…………そうですね。あなたなら、そう言いますわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', '？ どういう意味だ');
        await tachyon.say_and_wait('いいえ……なんでもありませんわ');
        era.drawLine();
        await era.printAndWait('こうして');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の足跡は、かつて辿った場所をすべて踏んだ',
        ]);
        await era.printAndWait('グラウンド、レース場、河原、神社');
        await era.printAndWait(
          '過去を味わい直し、何年も前に止まった時計を、また歩ませるために',
        );
        await era.printAndWait(
          'あいだに失った歳月は、埋められないかもしれない',
        );
        await era.printAndWait(
          'それでも二人は、自分たちだけの新しい人生を、懸命に作った',
        );
        era.println();
        await tachyon.say_and_wait('……こんな物語の終わり、気に入りましたか？');
        era.println();
        await era.printAndWait('……ああ、いい話だ');
        era.println();
        await tachyon.say_and_wait('……モルモット君');
        era.println();
        await era.printAndWait('もういい。これで、十分だ');
        await era.printAndWait('俺は……もう死ぬ');
        await tachyon.say_and_wait('…………');
        await era.printAndWait('タキオン……ありがとう');
        await tachyon.say_and_wait(
          '約束したでしょう……もう離れない、と。約束したのですわ',
        );
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait('また、お前を欺いたと思え');
        await era.printAndWait('この日々は、幸せだった');
        await era.printAndWait(
          'だが、この幸福は……俺のものではない。「モルモット君」のものだ',
        );
        await era.printAndWait(
          'タキオンと出会えたこと……それが、人生でいちばん美しいことだ',
        );
        await era.printAndWait('だから、もう欺きたくない');
        await era.printAndWait('だから、すまない');
        await era.printAndWait('だから、許してくれ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の物語は……ここで終わる',
        ]);
        await tachyon.say_and_wait('もし、あなたが望むなら……');
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait('だが、もうお前の足を引っ張りたくない');
        await era.printAndWait('モルモット君は、ここで終わらせよう');
      }
      era.println();
      await era.printAndWait('すまない、タキオン。本当に眠い……もう、いいか？');
      await tachyon.say_and_wait('……ええ。ゆっくり休みなさい。そばにいますわ');
      era.drawLine();
      await tachyon.print_and_wait('モルモット君は穏やかに目を閉じた');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は泣かなかった。なぜなら……これが初めてではないから',
      ]);
      era.println();
      await tachyon.print_and_wait('モルモット君との別れ');
      await tachyon.print_and_wait('最初は、あの日の商店街だった');
      await tachyon.print_and_wait('自分が席を外さなければ');
      await tachyon.print_and_wait([
        '無理にでも',
        you.sex,
        'をそばに留めていれば',
      ]);
      await tachyon.print_and_wait('もし……');
      await tachyon.print_and_wait('もし、などない');
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait('犯人を骨まで砕いて灰にしても');
        await tachyon.print_and_wait('商店街を真っ赤に染めても');
        await tachyon.print_and_wait([you.sex, 'は戻らなかった']);
        await tachyon.print_and_wait([
          'その赤では、',
          you.sex,
          'の腹から溢れた血は埋まらない',
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          'は、やはり……私を責めませんでしたわ',
        ]);
        era.println();
        await tachyon.print_and_wait('自分がこうしてしまっても');
        await tachyon.print_and_wait(
          '眼前のモルモット君の顔は、青春の名残に溢れている',
        );
        await tachyon.print_and_wait([
          you.sex,
          'は、ここで去るべきではなかった',
        ]);
        await tachyon.print_and_wait([you.sex, 'は、今去るべきではなかった']);
        await tachyon.print_and_wait([
          'なのに、',
          tachyon.get_colored_name(),
          ' のせいだ',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'が、誤った時間に、誤った場所で、出会ってしまった……誤った人に',
        ]);
      } else {
        await tachyon.print_and_wait('犯人を骨まで砕いて灰にしても');
        await tachyon.print_and_wait(
          '商店街で、自分が狂人のように駆け回っても',
        );
        await tachyon.print_and_wait([you.sex, 'は戻らなかった']);
        await tachyon.print_and_wait([
          '応急の処置では、',
          you.sex,
          'の腹から溢れた血は埋まらない',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'あんなに長く欺いてきたのですもの……もう一度欺いたところで、何ですの……',
        );
        era.println();
        await tachyon.print_and_wait('最初から、わかっていた');
        await tachyon.print_and_wait([
          you.sex,
          'であり、',
          you.sex,
          'ではない',
        ]);
        await tachyon.print_and_wait(
          '懸命に取り繕っても、記憶を失った者の顔の茫然は、そう簡単には隠せない',
        );
        await tachyon.print_and_wait(
          'まして……そのあとの嘘は、あまりに拙かった',
        );
        era.println();
        await tachyon.print_and_wait([
          'だが……',
          tachyon.get_colored_name(),
          ' は構わない',
        ]);
        await tachyon.print_and_wait([you.sex, 'でありさえすればいい']);
        await tachyon.print_and_wait(
          '生きてくれればいい。生き続けてくれればいい',
        );
        await tachyon.print_and_wait('記憶がない？ それが何だというの');
        await tachyon.print_and_wait([
          you.sex,
          'が続いてくれるなら、',
          tachyon.get_colored_name(),
          ' は一生欺かれても甘んじる',
        ]);
        await tachyon.print_and_wait('……なのに');
        await tachyon.print_and_wait([
          'また同じだ。「今度」も、',
          you.sex,
          'は自分を、一生分欺いた',
        ]);
        await tachyon.print_and_wait([
          'それでも最後の最後に、もう一度だけ ',
          tachyon.get_colored_name(),
          ' を欺くことは、しなかった',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('ベッド脇の紅茶を一口飲む');
      await tachyon.print_and_wait([
        '自分で淹れた紅茶は、',
        you.sex,
        'が淹れたものと、理論上の成分はまったく同じだ',
      ]);
      await tachyon.print_and_wait('何年も、自分で淹れてきたのだから');
      await tachyon.print_and_wait(
        '工夫できること、変えられることは、すでに最善まで研究し尽くした',
      );
      await tachyon.print_and_wait('だが、味は違う');
      await tachyon.print_and_wait(
        '同じにはならない。永遠に、同じにはならない',
      );
      await tachyon.print_and_wait('今日の紅茶は、永遠に昨日の味には勝てない');
      era.println();
      await tachyon.say_and_wait('————では、次の実験を始めますわ');
      era.drawLine();
      await tachyon.print_and_wait('トレセン学園の地下室');
      era.println();
      await tachyon.say_and_wait('前回ここに来たのは……いつでしたかしら');
      era.println();
      await tachyon.print_and_wait('三ヶ月？ 五ヶ月？ それとも……');
      await tachyon.print_and_wait(
        '「今度」は、モルモット君とどれだけ過ごした？',
      );
      era.println();
      await tachyon.say_and_wait('いいですわ。もう、どうでも');
      era.println();
      await tachyon.print_and_wait('灯を入れる');
      await tachyon.print_and_wait('目が光に慣れるのを待って');
      await tachyon.print_and_wait('眼前に現れたのは、数千に及ぶ培養槽だった');
      era.println();
      await tachyon.print_and_wait([
        'ああ、',
        you.sex,
        'が知ったら、',
        you.sex,
        'は絶対に許さないでしょうね',
      ]);
      await tachyon.print_and_wait([
        'でも……',
        you.sex,
        'は、やはり私を責めなかった',
      ]);
      await tachyon.print_and_wait('なら、それは黙認ですわ');
      era.println();
      await tachyon.say_and_wait(
        '第五十六回。記憶の回復傾向なし、身体に異状なし、生存期間五ヶ月……',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'が去った日から、ようやく動き出した計画',
      ]);
      await tachyon.print_and_wait('何度自分を呪ったかわからない');
      await tachyon.print_and_wait('なぜ、こんなに遅く気づいたのか');
      await tachyon.print_and_wait(
        '泡のような幸福に麻痺して、研究者として最低限の備えすら忘れたのか？',
      );
      await tachyon.print_and_wait('だから、こうなった');
      era.println();
      await tachyon.print_and_wait([
        '一滴ずつ、砂の城を積むように、',
        you.sex,
        'の身体を組み直した',
      ]);
      await tachyon.print_and_wait(
        'だが、すべてを組み直しても、形のないものは、もう一度は作れない',
      );
      await tachyon.print_and_wait('人体でもっとも秘密を孕む脳————記憶');
      await tachyon.print_and_wait(
        '最初から、あったかどうかすらわからないものを、どう形を取り戻すというの',
      );
      await tachyon.print_and_wait('こうするしかない');
      await tachyon.print_and_wait('何度も実験し、何度も目覚めさせ');
      await tachyon.print_and_wait('何度も……奇跡を待つ');
      era.println();
      await tachyon.say_and_wait(
        '失敗主因、多臓器不全による敗血症……生存意志、なし',
      );
      era.println();
      await tachyon.print_and_wait(
        '凡人の泥遊びでは、女神様には永遠に届かないのでしょうね',
      );
      await tachyon.print_and_wait([
        'だから、毎回造り上げた',
        you.sex,
        'は、いつもこうなる',
      ]);
      await tachyon.print_and_wait('長くて半年、短くて……二週間');
      await tachyon.print_and_wait('時が来れば、必ず何らかの理由で永眠する');
      await tachyon.print_and_wait('……もちろん');
      await tachyon.print_and_wait(
        'これらの病は、どれほど言っても、常人の範囲だ',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の研究成果があれば',
      ]);
      await tachyon.print_and_wait(
        '延命するなら、三年から五年は絶対に問題ない。それ以上も……可能だ',
      );
      await tachyon.print_and_wait(
        '望むなら、三年から五年が一つあれば、二つ目、三つ目、四つ目と、永久に続けられる',
      );
      era.println();
      await tachyon.say_and_wait([you.sex, 'は、やはり……言いませんでしたわ']);
      era.println();
      await tachyon.print_and_wait('何度繰り返しても');
      await tachyon.print_and_wait('身体をどう改変しても');
      await tachyon.print_and_wait([
        '最後の最後、',
        you.sex,
        'の言葉は、いつも大同小異だ',
      ]);
      era.println();
      await tachyon.say_and_wait('もう終わりです');
      await tachyon.say_and_wait('もう、十分です');
      era.println();
      await tachyon.say_and_wait(
        '冗談じゃありませんわ……冗談じゃありませんわ！',
      );
      await tachyon.say_and_wait(
        '誰が勝手に満足していいと言いましたの！ 言いなさい！ 私に言いなさい！ 生きたいと言いなさい！ 私と暮らし続けたいと言いなさい！',
      );
      await tachyon.say_and_wait(
        '記憶がなくても構いません。一生かけて思い出しても構いません。言って……なぜ言わないの……なぜ……私を一人にするの……',
      );
      era.println();
      await tachyon.print_and_wait([
        'もし、',
        you.sex,
        'が憎んでいたなら。自分の命を奪った ',
        tachyon.get_colored_name(),
        ' を憎み、死んでも ',
        tachyon.get_colored_name(),
        ' と暮らしたくないというなら、それなら受け入れられる',
      ]);
      await tachyon.print_and_wait([
        '本当にそうなら、',
        tachyon.get_colored_name(),
        ' は二言なく',
        you.sex,
        'の生活から離れ、最低限の医療接触だけにする',
      ]);
      await tachyon.print_and_wait([
        '最後に、ほんの少しの迷いがあれば、あるいは ',
        tachyon.get_colored_name(),
        ' への、ほんの少しの嫌悪を見せれば',
      ]);
      await tachyon.print_and_wait([
        '心拍が止まっても、最後の瞬間に',
        you.sex,
        'を救い出せる',
      ]);
      await tachyon.print_and_wait('だが……五十六回のなかで');
      await tachyon.print_and_wait('そんなことは、一度も起きなかった');
      era.println();
      await tachyon.print_and_wait('足を引っ張りたくない');
      await tachyon.print_and_wait('縛りたくない');
      await tachyon.print_and_wait('すべてを失っても、命も、記憶も');
      await tachyon.print_and_wait([
        '五十六回、毎回、',
        you.sex,
        'が最後まで想っていたのは ',
        tachyon.get_colored_name(),
        ' の可能性だった',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'だが、',
        tachyon.get_colored_name(),
        ' の可能性は、もう終わっている',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の時間は、もう止まっている',
      ]);
      await tachyon.print_and_wait('あの紅茶の味は、あの瞬間から固定された');
      era.println();
      await tachyon.say_and_wait('第五十七回、開始');
      era.println();
      await tachyon.print_and_wait(
        '培養槽が栄養液を排出し、槽のなかの人影が解き放たれる',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'を終わらせてはならない。',
        you.sex,
        'を終わらせはしない',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' とモルモット君の物語は、永遠に続けなければならない',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'こうして、過去を縛り、過去に縛られた科学者は、新たな実験を始めた',
      );
    };
    f.title = title;
    return f;
  })(),
};
