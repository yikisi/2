/**
 * @file サンデーサイレンス - 日常
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   * @param {PrintedSpan} s_call_t サンデーサイレンスのアグネスタキオンへの呼び方
   * @param {PrintedSpan} s_call_m サンデーサイレンスの駿川たづな／ハーヴェストへの呼び方
   */
  good_morning(ss, you, s_call_c, s_call_t, s_call_m) {
    const buffer = [];
    buffer.push(
      () =>
        ss.say('今日の空は悪くない。予定があるなら、早く始めたほうがいい。'),
      () =>
        ss.say(
          'あなたは私が強くなるために必要な存在。私の気持ちを気にする必要はない。',
        ),
      () =>
        ss.say([
          s_call_c,
          ' のコーヒーが少し恋しい……そんな目をしないで。',
          ss.sex,
          'の淹れるコーヒーは、本当に美味しいんだから。',
        ]),
      () => {
        ss.say(
          '最近、学園の近くにできた料理店が美味しい。トレーニングで十分な成果が出たら、連れていってあげる。どう？',
        );
        era.print([
          ss.get_colored_name(),
          ' は腹を撫で、まだ料理の味を思い出しているようだ。',
        ]);
      },
      () =>
        ss.say([
          s_call_t,
          ' の薬剤はどう？ 多くの場合は問題を解決してくれる。でも副作用や付随する問題を、あなたは処理できる自信がある？',
        ]),
      () =>
        ss.say([
          '目標を聞かれた？ 勝ちたい。競走',
          ss.uma_sex_title,
          'の戦場で、勝ち続けたい。それだけ。',
        ]),
      () => {
        ss.say([
          s_call_m,
          ' か……',
          ss.sex,
          'はとても強い……いや、なんでもない。忘れて。',
        ]);
        era.print([ss.get_colored_name(), ' は首を振り、話題を逸らした。']);
      },
    );
    if (era.get('love:400') === 100) {
      buffer.push(
        () => {
          ss.say('どうして？ 私たちはトレーナーと担当の関係なだけなのに……');
          ss.say('どうして、もう視線をあなたから外せないの。');
          era.print([
            ss.get_colored_name(),
            ' は小さな独り言のつもりらしいが、',
            you.get_colored_name(),
            ' には聞こえていた。',
          ]);
        },
        () => {
          ss.say('脚を揉んでくれない？ これもトレーナーの職務のうちでしょう……');
          era.print([
            ss.get_colored_name(),
            'は靴を脱ぎ、靴下に包まれた小さな足を差し出す。',
          ]);
          era.print([
            '口では ',
            you.get_colored_name(),
            ' に脚のマッサージを頼むだけだが、',
            ss.sex,
            'は目を閉じ、',
            you.get_colored_name(),
            ' が何をしてもいいと言わんばかりだ。',
          ]);
        },
      );
    } else if (era.get('love:400') >= 90) {
      buffer.push(
        () => {
          ss.say('追加のトレーニング予定がなければ……');
          ss.say(
            '今日は一緒に食事へ行きましょう。時間は気にしなくていい。最悪、抱えて走って戻ればいいだけ。',
          );
          era.print([
            ss.get_colored_name(),
            ' は身振りで示し、',
            ss.sex,
            'は冗談ではなさそうだった。',
          ]);
        },
        () => {
          ss.say(
            'ごめん、少し疲れた。支えてくれる？ やっぱり、あなたの匂いがいちばん安心する。',
          );
          era.print([
            ss.get_colored_name(),
            ' はそのまま胸に凭れ、',
            you.get_colored_name(),
            ' の匂いを十分に味わっているようだ。',
          ]);
        },
      );
    } else if (era.get('love:400') >= 75) {
      buffer.push(
        () =>
          ss.say(
            '今日のトレーニングのあと、一緒に何か飲まない？ 安心なさい、私のおごり。',
          ),
        () => ss.say('いいカフェを知っている。追加の報酬だと思って。どう？'),
        () =>
          ss.say(
            '本屋に付き合ってくれない？ 今日、新しい雑誌と漫画が出るらしい。誰かと一緒に買いに行きたい。',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  select(ss, you, callname) {
    const buffer = [];
    if (era.get('love:400') === 100) {
      buffer.push(() => {
        ss.say(
          `${callname}、どうか私の姿を見て。頭に刻んで、永遠に。そして、永遠に私から離れないで。`,
        );
        era.print([
          ss.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に両手を広げ、抱きしめたいようだった。',
        ]);
      });
    } else if (era.get('love:400') >= 75) {
      buffer.push(() => {
        ss.say(
          '次はもう少し早く来てくれない？ 早く会いたい。そうすればトレーニングも、もっと効く。',
        );
        era.print([
          ss.get_colored_name(),
          ' は微かな赤みの頬を逸らし、',
          you.get_colored_name(),
          ' の目を見られない。',
        ]);
      });
    } else if (era.get('love:400') >= 50) {
      buffer.push(() => {
        ss.say(
          'もう少し近づいてくれない？ いいえ、選んだトレーナーがどれほど優秀か見たいだけ。',
        );
        era.print([
          ss.get_colored_name(),
          ' の視線は、もう ',
          you.get_colored_name(),
          ' から離れない。',
        ]);
      });
    } else {
      buffer.push(
        () => {
          ss.say(
            'トレーナーとして、来る時間は妥当ね。少なくとも遅刻はしていない。',
          );
          era.print([
            ss.get_colored_name(),
            ' は頷き、',
            you.get_colored_name(),
            ' を認めているようだ。',
          ]);
        },
        () => {
          ss.say(`ちょうどいいところに、${callname}。今日はどう進める。`);
          era.print([ss.get_colored_name(), ' は興味深そうだ。']);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_study(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(`学習指導……${callname} の宿題を、私が見るの？`);
      await ss.say_and_wait(
        `冗談よ。${callname} が勉強を見てくれるなら、ありがたい。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は伸びをして、愉快な顔を見せる。',
      ]);
    } else {
      await ss.say_and_wait('勉強ね。うちで成績の悪い者は、ほとんどいないわ。');
      await ss.say_and_wait(
        `そうだ、${callname} がトレーナーの知識を教えてくれない？`,
      );
      await ss.say_and_wait(`いつか自分で自分を鍛えられるようになるかも！`);
      await era.printAndWait([
        ss.get_colored_name(),
        ' の言葉に、',
        you.get_colored_name(),
        ' は失業する惨めな未来を幻視した。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_prepare(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `心配はいらない、${callname}……隊伍に入ったとき言ったとおり、勝利を持ち帰ってくる私を見ていればいい。私だけを見て！`,
      );
    } else {
      await ss.say_and_wait(`来るわね。私たちの努力の成果が見えるとき……`);
      await ss.say_and_wait(
        `${callname}、見ていて。最初に言ったとおり、私を選んだあなたには、相応の栄光が届く。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   */
  async talk(ss, you, s_call_c) {
    const buffer = [];
    if (era.get('base:400:体力') < era.get('maxbase:400:体力') / 3) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '賢明な考えとは思えない。はっきり言っておく。私たちは対等な関係だ。あなたの職務を覚えておいてほしい。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の指示に、あまり乗り気ではなさそうだ。',
        ]);
      });
      if (era.get('love:400') >= 50) {
        buffer.push(async () => {
          await ss.say_and_wait(
            'それが確定なら……わかった。全力で、あなたの考えについていく。',
          );
          await era.printAndWait([
            ss.get_colored_name(),
            ' は少し考え、',
            you.get_colored_name(),
            ' の要求を受けた。',
          ]);
        });
      }
    } else {
      switch (era.get('cflag:400:干劲')) {
        case -2:
          buffer.push(
            () =>
              ss.say_and_wait(
                'あ……今は全身が苛立っている。用事があるなら早く言って。',
              ),
            () =>
              ss.say_and_wait(
                '私の好みに合うことを言ったほうがいい。でないと、手が出るのを止められる自信がない。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              ss.say_and_wait(
                'ん……今、何て言った？ ごめん、気力がわかない。もう一度お願い。',
              ),
            () =>
              ss.say_and_wait([
                'けほけほ、',
                s_call_c,
                ' のコーヒーを飲みすぎた……喉が少しおかしい。',
              ]),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ss.say_and_wait(
                '頭はまだはっきりしている。予定や日程があるなら、早く言って。',
              ),
            () =>
              ss.say_and_wait(
                'またこんな平凡な一日。こういう日が、もう少し少なければいいのに。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '空がいい。気に入った。だからトレーニングで、この気持ちを保たせてほしい。',
              ),
            () =>
              ss.say_and_wait(
                '早く始めないと、気力を発散するために柵を蹴るわよ。弁償？ もちろんあなたよ！',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '今日は活力十分。トレーナーとして、こんな好機を無駄にしないでしょう？',
              ),
            () =>
              ss.say_and_wait(
                '今日の量は倍でもいい。調子はあなたの想像よりずっと上。甘やかされた人間だと思わないで。勝てるなら、量はいくら増えても構わない。',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async office_gift(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '私への贈り物？……ありがとう。でも、こんなものをくれるなんて、私を機嫌取り？',
      );
      await era.printAndWait([
        '乗り気だった ',
        ss.get_colored_name(),
        ' は、Ｓ〇ＧＡのゲーム機だとわかると、すぐに耳を伏せた。',
      ]);
    } else {
      await ss.say_and_wait(
        '贈り物ね。他人からこんなものを受け取るのは珍しい。',
      );
      await ss.say_and_wait(
        'それに、なぜ……あなたの手からこれを受け取ると、心臓がこんなに激しく打つの？',
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_cook(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait('料理を学ぶ？ 家政の授業では少し習った。');
      await ss.say_and_wait(
        'では……よろしく。学ぶならちゃんと学ぶ。トレーニングと同じよ。',
      );
      await era.printAndWait([ss.get_colored_name(), ' は真剣な顔だ。']);
    } else {
      await ss.say_and_wait(
        '実はあまり料理はできない。普段、こういうことに触れてこなかったから。',
      );
      await ss.say_and_wait(
        `でも ${callname} が言うなら、一緒に進んで、ちゃんと学ぼう。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async office_rest(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `ごめん、休むなら、カーテンは開けたままでいい？ 私……少し闇が苦手。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は少し恥ずかしそうだ。',
      ]);
    } else {
      await ss.say_and_wait('……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' の眠った顔は穏やかではない。悪夢を見ているみたいだ。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の袖に触れた瞬間、',
        ss.sex,
        'は袖をしっかり掴み、表情が緩んだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_d サンデーサイレンスのサトノダイヤモンドへの呼び方
   */
  async office_game(ss, you, s_call_d) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `ゲームセンターの筐体より、ここのゲームのほうが面白い。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は手慣れた操作でキャラを動かす。担当として',
        ss.sex,
        'と ',
        you.get_colored_name(),
        ' の息はぴったりで、',
        you.get_colored_name(),
        ' はとても嬉しい。',
      ]);
    } else {
      await ss.say_and_wait([
        'ん、未プレイのゲームね……',
        s_call_d,
        ' の家が出したゲームか。試さないわけにはいかない。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は興味深そうに画面のロゴを見て、コントローラを取った。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_tree_hollow(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `実は叫ぶことはあまりない……まあいい。競走${ss.uma_sex_title}の道を、もっと遠くまで歩ませて！！！`,
      );
      await era.printAndWait([
        ss.sex,
        'は大きな枯れ木の洞に向かって叫び、言い終えると少し恥ずかしそうに ',
        you.get_colored_name(),
        ' を見る。',
      ]);
    } else {
      await ss.say_and_wait(
        '三女神が本当にここでこれを聞いているなら、煩わしく思わないかしら。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は意味ありげに枯れ木の洞を見つめ、本気でその可能性を考えているようだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async s_a_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `学園のなかでデート？ ${callname}！？ 師弟の恋愛は、はっきり禁止よ！！`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は乗り気ではなさそうだった。だが最後は',
        ss.sex,
        'が ',
        you.get_colored_name(),
        ' の手を引き、学園の図書室で「デート」を済ませた。',
      ]);
    } else {
      await ss.say_and_wait(
        'あ……学園のなかね……じゃあ食堂はどう？ あなたのおごり。',
      );
      await era.printAndWait([
        'そう言いつつ、',
        ss.get_colored_name(),
        ' は結局 ',
        you.get_colored_name(),
        ' の分までこの食事代を出した。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async s_r_lunch(ss, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      ss.get_colored_name(),
      ' は屋上で弁当を食べることにした',
    ]);
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `おかず、交換してもいい？ ${callname} の弁当に、好きな食材が入っている。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は大きな肉をあなたの弁当へ押し込み、微笑んで ',
        you.get_colored_name(),
        ' を見る。',
      ]);
    } else {
      await ss.say_and_wait(`${callname} の弁当は手づくり？ いいわね。`);
      await ss.say_and_wait(
        `家が持たせてくれる弁当、毎回食べきれなくて惜しい。一緒に食べましょう。食べ物を無駄にするのは大罪よ。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は超大の豪華弁当を取り出した。',
      ]);
      await era.printAndWait([
        '見なくても、中の豊富で美味しい食材が ',
        you.get_colored_name(),
        ' の財布の許容を超えているのはわかる。',
      ]);
      await era.printAndWait([
        'もちろん追及もしなかった。普段 ',
        ss.get_colored_name(),
        ' がこの弁当をどう処理しているのかは。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_r_fishing(ss, you, callname) {
    await era.printAndWait(['と ', ss.get_colored_name(), ' は釣りに出かけ……']);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          `${callname}、本当に魚はかかるの？ こんなにわかりやすい罠に、わざわざかかるものなの？`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' が静かな水面の波紋を見る顔は、少し可愛い。',
        ]);
        await era.printAndWait(
          `${ss.sex}はすぐ表情を引き締め、竿に全神経を向け、水のなかの魚と戦い始めた。`,
        );
      },
      async () => {
        await ss.say_and_wait(
          `うんうん、いい活動ね。${callname} の桶はなんで空なの？ 少し分けようか？`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' はかかった魚を針から外し、',
          you.get_colored_name(),
          ' を見る目は純粋だ。だが ',
          you.get_colored_name(),
          ' の心は、少し傷ついた気がした。',
        ]);
      },
      async () => {
        await era.printAndWait([
          ss.sex,
          'が静かな小川の面を穏やかに見つめる姿は、普段の勢いよく我を通す競走',
          ss.uma_sex_title,
          'とは全く違う。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、いつもの',
          ss.sex,
          'とかけ離れた姿を頭に焼きつけた。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_walking(ss, you) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '川沿いの空気は涼しい。次の朝走は、ここにしてみない？',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' は深く息を吸い、川風を味わう。',
        ]);
      },
      () =>
        era.printAndWait([
          ss.get_colored_name(),
          ' は黙って川沿いを歩き、ときどき後ろを歩く',
          you.get_colored_name(),
          'を振り返り、何かを考えているようだ。',
        ]),
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(() =>
        era.printAndWait([
          ss.get_colored_name(),
          ' はゆっくり ',
          you.get_colored_name(),
          ' に近づき、断りようなく ',
          you.get_colored_name(),
          ' の手を握る。十指を組み、指先で ',
          you.get_colored_name(),
          ' の甲に模様を描いた。',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_arcade(ss, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await ss.say_and_wait(
          'このゲーム、なんて言うの？ ジャストダンス？ 試してみましょう。面白そう……',
        );
        await era.printAndWait([
          '結局 ',
          ss.get_colored_name(),
          ' はハイスコアで筐体の記録を更新した。',
        ]);
      },
      async () => {
        await ss.say_and_wait([
          callname,
          ' の反応、私より鈍いみたい。ほらほら！',
        ]);
        await era.printAndWait([
          '画面のキャラを操り、',
          ss.get_colored_name(),
          ' は滑らかな連撃で ',
          you.get_colored_name(),
          ' の操作するキャラを倒す。',
        ]);
        await era.printAndWait([
          'それから ',
          you.get_colored_name(),
          ' に、少し挑発する笑みを向ける。',
          ss.sex,
          'は本当に楽しそうだ。',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async o_s_drawing(ss) {
    await era.printAndWait([
      'と ',
      ss.get_colored_name(),
      ' は商店街の抽選に参加した……',
    ]);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          'こういうのは商家の稼ぎ方でしょう。毎回大当たりなら、とっくに店を畳んでいる。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' はそう言いながら、賞品のぬいぐるみを見ている。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          '抽選？ 欲しいものがあるならお金をちょうだい。店員に妥当な値段で買ってくる。',
        );
        await era.printAndWait([
          'そう言いながらも、',
          ss.get_colored_name(),
          ' はおとなしくボタンを押し、結果を待った。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_ktv(ss, you, callname) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          'ひとりでここに歌いに来るのは、少し可哀想ね。でもあなたがいれば、ずっとマシ。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' はマイクを取り、小さく歌い始めた。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `ん、曲リストは聞いたことのない歌ばかり。${callname} が一曲聴かせてくれない？`,
        );
        await ss.say_and_wait(
          `ぷっははは、冗談よ。私は競走${ss.uma_sex_title}アイドルよ。歌えないわけないでしょう？`,
        );
      },
      async () => {},
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '一緒に歌って！！ この曲よ！！ ずっと誰かと歌いたかった！',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' は強引にマイクを ',
          you.get_colored_name(),
          ' へ押しつける。画面は男女のデュエットの恋歌で、終わりに二人は婚姻の殿堂へ入り、幸せな一生を送る。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   */
  async o_s_movie(ss, you, callname, s_call_c) {
    const buffer = [
      async () => {
        await ss.say_and_wait([
          '霊異ホラー？ ',
          callname,
          '、私が悪霊なんか怖がると思ったの？',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          ' は自信たっぷりに笑い、手のチケットを見る。',
        ]);
        await era.printAndWait([
          '事実そのとおりで、',
          ss.sex,
          'は心を凪のまま、そこそこ怖い映画を最後まで見終えた。出るとき',
          ss.sex,
          'は ',
          you.get_colored_name(),
          ' の腕を取った。',
        ]);
        await era.printAndWait([
          'こういうのは、',
          s_call_c,
          ' のところで見たものと比べたら、派手すぎる……しーっ、聞かないで。今のは忘れて。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `この作品は……あ、面白そう。${callname} が担当の気持ちをわかりすぎると、見過ごせないわね。`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' はチケットを受け取り、一緒に面白い古いSFを観た。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   * @param {number} dice おみくじの出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(ss, you, callname, dice) {
    await era.printAndWait([
      ss.get_colored_name(),
      ' と ',
      you.get_colored_name(),
      ' は神社へ祈願に向かった。',
    ]);
    await ss.say_and_wait(`こういうこと……本当に効くの？`);
    await era.printAndWait([
      ss.get_colored_name(),
      ' は半信半疑で手を洗い、参拝を済ませると、',
      ss.sex,
      'は ',
      you.get_colored_name(),
      ' を見て自分の疑問を口にした。',
    ]);
    await you.say_and_wait(
      '君の努力も僕の努力も、成績を取るいちばん堅い土台だ。でもそれ以外に、少しの運も要るんじゃないか。気休めだと思ってもいい。',
    );
    await ss.say_and_wait(
      `そう……なら遠慮なく願うわ。賽銭をもらった以上、働かないわけにはいかないでしょう！`,
    );
    await era.printAndWait([
      '賽銭箱に硬貨が落ちる音と、',
      ss.get_colored_name(),
      ' の言葉が重なる。',
      ss.sex,
      'は ',
      you.get_colored_name(),
      ' の説明を信じることにしたようだ。',
    ]);
    if (dice < 0.6) {
      await ss.say_and_wait(
        `ん、本当に反応がある！ ねえねえ、${callname}、これは大したことよ。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は少し驚き、',
        ss.sex,
        'は耳飾りを撫でる。',
      ]);
      await ss.say_and_wait(
        `神様まで私の願いに応えたなら……ますます休む理由はない。あとで戻ってトレーニングしましょう！`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は勢いよく ',
        you.get_colored_name(),
        ' の手を引き、トレセンへ戻ろうとする。',
      ]);
    } else {
      await ss.say_and_wait(
        `ちっ……みんな霊験あらたかと言う神も、万能ではないのね……`,
      );
      await ss.say_and_wait(
        `${callname}、早めに戻ったほうがいい。神が答えないなら、`,
      );
      await ss.say_and_wait(
        `その助けがなくてもできるところを、しっかり見せてあげましょう。`,
      );
      await era.printAndWait([
        'そう言いながら、',
        ss.get_colored_name(),
        ' は苛立たしげに尻尾を振る。',
        ss.sex,
        'は自分の言葉ほど平静ではなく、むしろ少し陰っている。',
      ]);
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' も苛立ちをはじめ、二人で神社を離れた。',
      ]);
    }
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async o_s_restaurant(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `コーヒーを頼むなら、砂糖とミルクを多めに。コーヒーは甘いほうが美味しいの。`,
      );
    } else {
      await ss.say_and_wait(
        `これを試さない？ 飲めないって？ 大丈夫、工程で酒を使っているだけ。問題は起きない。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `デート？ 私と？ ${callname}、本気？ それよりトレセンでデートして、中身はトレーニング、というのはどう？`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は驚いた顔で耳を撫で、聞き間違いでないか確かめる。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の揺るがない顔を見て、',
        ss.sex,
        'は困ったように息を吐いた。',
      ]);
      await ss.say_and_wait(
        `わかったわかった。でも……私みたいな${ss.uma_sex_title}とのデートは、面白くないわよ。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は断り続けているが、',
        ss.sex,
        'の瞳の期待は見て取れた。',
      ]);
      era.printButton(`一緒に遊びに行きたい。君がいれば、それで面白い。`, 1);
      await era.input();
      await ss.say_and_wait(
        `なに……なに！！ そんなこと言って……${ss.uma_sex_title}を騙すのが上手い、浮気者？`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は赤くなった頬を逸らし、直視できない。それでも ',
        you.get_colored_name(),
        ' の差し出した手は握った。',
      ]);
      await era.printAndWait(`それから二人は、思い切り遊んだ。`);
    } else {
      await ss.say_and_wait(`デート？ 本音ゲームに負けた罰ゲーム？`);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は半信半疑で ',
        you.get_colored_name(),
        ' を見つめ、それから息を吐く。',
      ]);
      await ss.say_and_wait(
        `何であれ、レースとトレーニングがいちばん大事でしょう？ それに私みたいな陰気な競走${ss.uma_sex_title}と出かけるのは、つまらないわよ。`,
      );
      await era.printAndWait([
        'そう言いながら、',
        ss.get_colored_name(),
        ' はつい ',
        you.get_colored_name(),
        ' を盗み見る。',
        you.get_colored_name(),
        ' が本気で',
        ss.sex,
        'を誘っているのか、確かめているようだ。',
      ]);
      await ss.say_and_wait(
        `ん……本気なの？ わかった……じゃあ出発しましょう。案内は私。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は、表情の一切変わらないあなたを見て、',
        you.get_colored_name(),
        ' の気持ちに気づいたらしい。',
      ]);
      await era.printAndWait(`顔は相変わらず不機嫌そうだが、`);
      await era.printAndWait([
        ss.sex,
        'が ',
        you.get_colored_name(),
        ' の手を握ったときの弾みは、',
        you.get_colored_name(),
        ' にははっきりわかった。それから',
        ss.sex,
        'は ',
        you.get_colored_name(),
        ' を本屋へ連れていき、一緒に本を読んだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_shopping(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `ここの服は私向きじゃない。いつも専門店で誂えている。${callname} も一緒に来る？ 私の勘定でいい。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は目を細めて微笑む。本気の誘いなのかはわからない。',
      ]);
    } else {
      await ss.say_and_wait(
        `あ、新入荷してる。${callname}、こっち。靴の蹄鉄、替え時だと思ってたし、新しい加重とジャージもある。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' は興奮気味に、器材店の品を見ている。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  good_night_normal(ss, you) {
    era.print([
      '忙しい一日のあと、',
      you.get_colored_name(),
      ' は ',
      ss.get_colored_name(),
      ' を寮の前まで送った。',
    ]);
    ss.say('ここまででいい。本当に、ありがとうございます……');
    era.print([
      ss.get_colored_name(),
      ' は小さく頭を下げ、嬉しそうに笑い、',
      ss.sex,
      'の寮へ戻った。',
    ]);
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {1|2} check 求愛判定。2は大成功
   */
  async good_night_sex(ss, you, check) {
    ss.say(`一緒に入る？`);
    era.print([
      ss.get_colored_name(),
      ' は両脚を擦り合わせ、',
      you.get_colored_name(),
      ' には',
      ss.sex,
      'の呼吸が速まっていくのがわかる。',
    ]);
    era.print([
      '場で電光石火だった肉感のある脚が、いまは落ち着かず、ゆっくり ',
      you.get_colored_name(),
      ' へ寄ってくる。',
      ss.sex,
      'は手を伸ばし、',
      you.get_colored_name(),
      ' を',
      ss.sex,
      'の部屋へ引き込もうとする。',
    ]);
    era.printButton('受け入れる', 1);
    if (check !== 2) {
      era.printButton('とぼける', 2);
    }
    return await era.input();
  },
  cl_temple_fair: (() => {
    const title = '打上花火';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(['だから……', callname, '、私の浴衣、似合ってる？']);
      await era.printAndWait([
        '年始の着物とは全く違い、今の ',
        ss.get_colored_name(),
        ' は夏の気配をまとった浴衣を着ている。',
      ]);
      await era.printAndWait([
        '長い髪を上げると、',
        ss.get_colored_name(),
        ' はおしとやかで優雅に見える。',
      ]);
      await era.printAndWait([
        ss.sex,
        'は自然に ',
        you.get_colored_name(),
        ' の手を取り、',
        you.get_colored_name(),
        ' の胸に凭れ、',
        you.get_colored_name(),
        ' に手を引かれ、夏祭りの会場を歩きまわる。',
      ]);
      await era.printAndWait([
        '二人はほぼすべての露店を回り、食べるものから遊ぶものまで一つも逃さなかった。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' は特別に運よくかんざしを引き、店の人の視線のなかで ',
        you.get_colored_name(),
        ' に',
        ss.sex,
        'の髪へ挿してもらった。',
      ]);
      await ss.say_and_wait(
        '今日はとても楽しかった……正直、あなたに会わなければ、花火すら見に来なかったかもしれない。',
      );
      await era.printAndWait([
        '盛大な花火の下、見つけにくい片隅に座り、甘い恋人同士のように見えた。',
      ]);
      era.printButton('「そうか。贈り物がある。こっちへ。」', 1);
      await era.input();
      await era.printAndWait([
        '花火が終わると、',
        you.get_colored_name(),
        ' は',
        ss.sex,
        'の手を取り、',
        ss.get_colored_name(),
        ' の困惑した顔を無視して、',
        ss.sex,
        'を開けた砂浜へ連れていった。',
      ]);
      await ss.say_and_wait(['え、', callname, ' の贈り物……は……なに？']);
      await era.printAndWait([
        ss.sex,
        'は不安と興奮を混ぜた目で ',
        you.get_colored_name(),
        ' を見つめ、すでに浴衣の帯へ手を伸ばしている。',
      ]);
      await era.printAndWait('（ドン！！！）');
      await era.printAndWait([
        '花火が空へ上がり、弾ける音が',
        ss.sex,
        'の耳に届く。',
        ss.sex,
        'は驚いて振り返った。',
      ]);
      await era.printAndWait(
        '一発また一発と遠方で開き、美しく輝く模様を描いていく。',
      );
      await ss.say_and_wait('こ……これは……？');
      await era.printAndWait([
        ss.sex,
        'の目が少し潤み、振り返ると手持ち花火を出した ',
        you.get_colored_name(),
        ' がいた。',
      ]);
      await you.say_and_wait(
        '夏は、一緒に花火をしてこそ楽しいだろう。僕からの花火だ。見終わったら、一緒に遊ばないか？',
      );
      await era.printAndWait([
        '直後、',
        you.get_colored_name(),
        ' は一陣の風を感じ、瞬時に ',
        ss.get_colored_name(),
        ' に柔らかい砂へ押し倒された。',
      ]);
      await era.printAndWait([
        ss.sex,
        'の声を聞きながら、そっと ',
        ss.get_colored_name(),
        ' の頭を撫で、ときどき',
        ss.sex,
        'の耳の中の産毛をくすぐる。',
      ]);
      await era.printAndWait([
        '水のように柔和な ',
        ss.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の上に伏せ、絶美の笑みを見せた。',
      ]);
      await ss.say_and_wait([
        callname,
        ' の贈り物は重すぎる……この重い贈り物は、体で返させて。',
      ]);
      await era.printAndWait([
        '結局、夜の砂浜で夜更けまで遊び、疲れ果てて部屋へ戻り、ベッドに触れた瞬間に眠って終わった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
