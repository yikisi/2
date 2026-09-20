/**
 * @file トレヴ - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} treve トレヴ */
  good_morning(treve) {
    const buffer = [
      () => treve.say('じゃあ次は、何して遊ぶ？'),
      () => treve.say('今すごく元気で、気力が余って困ってるの。'),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () => treve.say('あなた、私を甘やかしすぎ……ちょっと溺愛？'),
        () =>
          treve.say('朝から夕方まで、一分一秒、あなたのことばかり思ってる。'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () => treve.say('私は一途な人間だと思っていた。あなたに会うまでは。'),
        () =>
          treve.say('あなたの方へ歩くとき、心臓が初恋みたいにどきどきする。'),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  select(treve, callname) {
    const buffer = [() => treve.say(`Bonjour～指示はある？ ${callname}`)];
    if (era.get('love:205') >= 50) {
      buffer.push(() => treve.say('呼ぶときに、そんなところ突かないで。'));
    }
    if (era.get('love:205') >= 75) {
      buffer.push(() => treve.say('ふふ、いいわよ。'));
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_study(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '変ね。あなた、フランス語を習うときもこんなにたどたどしかった？ 違う……忌々しい天才。',
        ),
      () =>
        treve.say_and_wait(
          'あなたがそばにいると、もっと跳べる気がする……どう、悪くないでしょ？',
        ),
      () => treve.say_and_wait('やめて。変態でも、そんな指導はだめ！'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait('あなたに、いちばんいい贈り物を。'),
      () =>
        treve.say_and_wait(`今日の勝ちは、私が取る。${callname} のために。`),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async talk(treve) {
    const buffer = [];
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      buffer.push(
        () => treve.say_and_wait('あなたの胸、貸してくれる？'),
        () => treve.say_and_wait('今は歩くのも無理よ～'),
      );
    } else {
      switch (era.get('cflag:205:干劲')) {
        case 2:
          buffer.push(() =>
            treve.say_and_wait(
              '今のは自分でトレーニングしてたの。トレーニングよ。',
            ),
          );
          era
            .getAddedCharacters()
            .some((cid) => cid !== 205 && era.get(`love:${cid}`) >= 50) &&
            buffer.push(() =>
              treve.say_and_wait(
                `あなたと${treve.couple_title}がどう知り合ったか、教えてくれない？`,
              ),
            );
          era.get('love:205') >= 50 &&
            buffer.push(() =>
              treve.say_and_wait(
                'あなたに『私の恋人』と言えるの、すごくいい気持ち。',
              ),
            );
          break;
        case 1:
          buffer.push(
            () =>
              treve.say_and_wait('人の物語はみんな違う。私、聞くのが大好き。'),
            () => treve.say_and_wait('これからも、私の面倒を見てほしい。'),
          );
          break;
        case 0:
          buffer.push(
            () => treve.say_and_wait('あなたを待つのは、本当に大変だった。'),
            () =>
              treve.say_and_wait(
                '『新人』トレーナーに、お手本を見せてあげる。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              treve.say_and_wait('抱きしめてくれたら、少しは良くなるかも。'),
            () => treve.say_and_wait('私の情熱、影も形も、音もない……'),
          );
          break;
        case -2:
          buffer.push(
            () => treve.say_and_wait('休ませてくれたら、最高なんだけど。'),
            () => treve.say_and_wait('死は、生活の税金……'),
            () =>
              treve.say_and_wait(
                'あなたはトレーナーだけじゃない。恋の渡り鳥でもある……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait('世は移る。愛だけが痕を残す。'),
      () => treve.say_and_wait('これを愛だと思っていい？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_cook(treve) {
    const buffer = [
      () => treve.say_and_wait('フランス料理はね……あははは、今はいいわ。'),
      () => treve.say_and_wait('うっ、胃を悪い人に掴まれそう。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('これからどうなるか、分からない。'),
      () => treve.say_and_wait('私と一緒に休んで、楽しい？'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `${callname}！なんで Umaisoft をクソゲーメーカーって呼ぶ人がいるの？`,
        ),
      () =>
        treve.say_and_wait(
          '『〇サシンクリード：トレセン』……あらゆる意味で、シリーズの前作を全面的に超えている——',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_a_tree_hollow(treve) {
    const buffer = [
      () => treve.say_and_wait('遠くからの私のキスは、苦くて切ない。'),
      () => treve.say_and_wait('私たちの運命は、険しくて曲がりくねっている。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_a_dating(treve) {
    const buffer = [
      () => treve.say_and_wait('上手すぎて怖い……これが本業なんじゃないの！'),
      () =>
        treve.say_and_wait('今に比べたら、昔の生活は『死を待つ』だけだった。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_r_lunch(treve) {
    const buffer = [
      () => treve.say_and_wait('じゃーん！今日の品質、なかなかいいでしょ。'),
      () =>
        treve.say_and_wait(
          'ロブスター、大エビ、焼きエビ、ムール貝とイカ焼き。付け合わせはフライドポテトと海鮮の炊き込み。体をちゃんと補って。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_fishing(treve, you) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '大物がやっとかかった……あなたもこの前、いい品種を釣ったんでしょ？嘘。見てないもの。',
        ),
    ];
    if (you.sex_code === 1 && treve.sex_code !== 1) {
      buffer.push(() =>
        treve.say_and_wait(
          `釣れないわ……ふん、${you.actual_name}さま、お恵みありがとう。`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_r_walking(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '安心して私の手を取って。遠くへ飛んでいってもいいから。',
        ),
      () =>
        treve.say_and_wait('ぐっ……ロマンチックアレルギーの直男に殺されそう。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname トレヴのプレイヤーへの呼び方
   * @param {PrintedSpan|false} call_target トレヴが見たぬいぐるみ原型への呼び方。隊内に他のウマ娘がいなければ false
   */
  async o_s_arcade(treve, you, callname, call_target) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '知ってる？フランスのゲームセンターには、カップル以外にも、幼なじみの小さな子がたくさん来るの。',
        ),
      () =>
        treve.say_and_wait([
          'うん、負け負け……',
          you.get_colored_actual_name(),
          '、あっちの【パンチ力測定】で再戦しましょ。',
        ]),
    ];
    if (call_target) {
      buffer.push(() =>
        treve.say_and_wait([
          callname,
          '！',
          call_target,
          ' のぬいぐるみ！一つ掴んでもいい？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async o_s_drawing(treve, callname) {
    const buffer = [
      () => treve.say_and_wait(`わわわ……${callname}！お小遣い、前借りさせて。`),
      () => treve.say_and_wait('パリ5日4晩の豪華旅行……当たったら、どうする？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_ktv(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '歌声、すごく魅力的。『遠ざかる列車』とか『バラ色の人生』、習ったほうがいいかも……',
        ),
      () =>
        treve.say_and_wait(
          '先に言っておくけど、喉が疲れてる。ここであなたと……なんて無理。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_movie(treve) {
    const buffer = [
      () => treve.say_and_wait('没入感のある佳作。impeccable a tous les sens'),
    ];
    if (treve.sex_code !== 1 && era.get('cflag:0:性别') === 1) {
      buffer.push(() =>
        treve.say_and_wait(
          '師匠が、私たちに合う古い映画があるって。『Un homme et une femme』——男と女。変な題、ははは……',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname トレヴのプレイヤーへの呼び方
   * @param {number} dice 祈願のダイス。0-1の小数。小さいほど良い
   */
  async o_c_pray(treve, you, callname, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ` は ${treve.name} を近くの神社へ誘い、${treve.sex}は嬉しそうに頷いた。`,
    ]);
    await treve.say_and_wait('何考えてるの。上の空みたい。');
    await treve.say_and_wait('先におみくじ引いてくる！');
    if (dice < 0.5) {
      await treve.say_and_wait(
        `【大吉】え、もう一回いい？これ、${callname} に贈りたい`,
      );
    } else {
      await treve.say_and_wait('うおお、こういうの、一度で十分……');
    }
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_restaurant(treve) {
    const buffer = [
      () => treve.say_and_wait('こういう店、カップルのデートみたい……'),
      () =>
        treve.say_and_wait(
          'こんないい店、どうやって見つけたの！？安くて量が多い。食べきれない！',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_dating(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          'あなたが普段どう一日を過ごすか、ちゃんと見ておきたい。',
        ),
      () => treve.say_and_wait('花、くれないの？私も花は好きよ。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async o_s_shopping(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `スイカ……高っ！？しかも切れ売り。これ、合理的？ ${callname}`,
        ),
      () => treve.say_and_wait('私、いろいろ選ぶの、あまり得意じゃなくて…'),
      () => treve.say_and_wait('今日、割引があるのね。chanceux～'),
    ];
    await get_random_entry(buffer)();
  },
  basement_end: (() => {
    const title = '情愛の檻';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait('ある日、パリの街で。');
      await treve.say_and_wait([callname, '！']);
      await era.printAndWait(
        `聞き慣れた声に、${you.name} が振り返ると、${treve.name} が走ってくる。`,
      );
      await era.printAndWait(
        `幼く愛らしい${treve.sex}が、海のように澄んだ目で、下から ${you.name} を見つめている。`,
      );
      await era.printAndWait('風に揺れる髪から、薄いシャンプーの匂いがする。');
      await era.printAndWait(
        `${treve.name} は「はい！」と ${you.name} に手を振る。`,
      );
      await treve.say_and_wait('奇遇ね。');
      await era.printAndWait(
        `そう言いながら、${treve.name} の目がなぜか輝いている。`,
      );
      await treve.say_and_wait('観光、案内してあげる！');
      await era.printAndWait(`${treve.name} は胸を張る。`);
      era.printButton('「いいのか？」', 1);
      await era.input();
      await era.printAndWait(`一応聞くと、${treve.name} は元気よく頷く。`);
      await treve.say_and_wait(
        'じゃあまず、あそこに美味しい店があるから、入ろう。',
      );
      await era.printAndWait(
        `そう言って ${treve.name} が ${you.name} の手を引いた瞬間、一枚の紙が${treve.sex}のポケットから風に乗って落ちる。`,
      );
      await era.printAndWait(
        `落ちた紙を拾うと、${treve.name} の表情が一気に曇る。`,
      );
      await treve.say_and_wait('——あっ！');
      await era.printAndWait(
        `拾った瞬間——${treve.name} はすぐ手を伸ばして奪おうとする。`,
      );
      await era.printAndWait(
        `白い裏面を表に返すと、そこに映った写真を見て、${you.name} は思わず声を漏らす。`,
      );
      await era.printAndWait(
        `だがその写真は一瞬で奪われ、${treve.name} はすぐポケットに入れ、目を細める。`,
      );
      await treve.say_and_wait('見た……？');
      await era.printAndWait(
        `${treve.name} の問いに、${you.name} は無意識に首を振る。`,
      );
      await era.printAndWait(
        `${treve.sex}はすぐ微笑んで『よかった！』と言い、${you.name} の手を引いて走り出す。`,
      );
      await era.printAndWait(
        `${you.name} の頭からは、${treve.name} が隠そうとした写真が離れない。一瞬だったが、間違いない。`,
      );
      await era.printAndWait(`——そこに映っていたのは ${you.name} だ。`);
      await era.printAndWait(
        'この日は特に何もなく、気づくと空が赤く染まっていた。',
      );
      await era.printAndWait(
        `${treve.name} に案内され、フランスの名所を巡り、美味しいものを食べた。`,
      );
      await era.printAndWait(`${treve.name} との会話も弾み、楽しかった。`);
      await era.printAndWait('だが、あの写真だけが頭から離れない。');
      await era.printAndWait(
        `あれは ${you.name} がカメラに向かって撮られたものではない。撮った記憶がない。`,
      );
      await era.printAndWait(
        `暗がりから盗撮した写真だ。問題は、${treve.name} がなぜそんなことをしたかだ。`,
      );
      await era.printAndWait(
        'たまたま拾ったのか？それでも怖い。ストーカーか？',
      );
      await era.printAndWait(`だが ${treve.name} なら、大丈夫だろう。`);
      await era.printAndWait(`とにかく、あとで${treve.sex}本人に聞けばいい。`);
      await era.printAndWait(
        `${treve.name} は俯き、それから ${you.name} を見上げる。`,
      );
      await era.printAndWait(
        `その表情には一筋の悲哀がある。だが${treve.sex}の顔には強い覚悟が浮かんでいる。`,
      );
      await treve.say_and_wait(['私、', callname, ' のことが——']);
      await era.printAndWait('瞬間——肌が冷たい感触に濡れる。');
      await era.printAndWait(
        '続いて、空を覆う天蓋から雨粒が一気に溢れ、人々がいっせいに空を仰ぐ。',
      );
      await treve.say_and_wait([callname, '、こっち！']);
      await era.printAndWait(
        `細かい雨の中、${treve.name} は慌てて ${you.name} の手を引く。`,
      );
      await era.printAndWait(
        `${treve.name} に手を引かれて一心に走り、溜まった水たまりに波紋を広げ、気づくとある部屋の前に連れてこられていた。`,
      );
      era.printButton('「トレヴ、ここは？」', 1);
      await era.input();
      await era.printAndWait(
        `あまり見覚えのない道だが、${you.name} にはここが何か分かる——アパートだ。だが誰の部屋へ連れてこられたのかは、まったく分からない。`,
      );
      await era.printAndWait(
        `隣を見て ${treve.name} を見つめると、${treve.sex}はすぐ目を逸らす。`,
      );
      await era.printAndWait(
        `突然の雨で、${you.name} も ${treve.name} もびしょ濡れだ。`,
      );
      await era.printAndWait(`${treve.name} の服は量があるのに、透けている。`);
      era.printButton('「誰の部屋だ？」', 1);
      await era.input();
      await treve.say_and_wait('私の部屋。ちょっと待って。');
      await era.printAndWait(
        `${treve.name} は笑ってそう言う。それから部屋の扉を開け、タオルを一枚 ${you.name} に渡し、勢いで扉を閉じる。部屋の中から荒々しい音がする。${you.name} は渡されたタオルで顔を拭きながら待ち、数分後、${treve.name} が扉の隙間から顔を出す。`,
      );
      await treve.say_and_wait(['どうぞ、', callname, '、入って。']);
      await treve.say_and_wait('ちょっと散らかってるけど。');
      await era.printAndWait(
        `促されて、${you.name} は ${treve.name} の部屋へ入る。`,
      );
      await era.printAndWait(
        `${treve.name} は浴室へ向かおうとして、すぐ戻り、指でクローゼットを指す。`,
      );
      await treve.say_and_wait('あのクローゼット、絶対に開けないで。');
      era.printButton('「う、うん、分かった。」', 1);
      await era.input();
      await treve.say_and_wait('——絶対！');
      await era.printAndWait(`${you.name} は困惑して頷く。`);
      await era.printAndWait(
        'だがクローゼットの下の隙間から、写真のようなものが落ちている。',
      );
      await you.say_and_wait('これは何だ？');
      await era.printAndWait(
        `クローゼットは開けていない。大丈夫だろう。そんな軽い気持ちで、${you.name} は隙間に見えた写真を手に取り、背筋が凍る。`,
      );
      await era.printAndWait(
        `手が微かに震え始める。それは ${you.name} を盗撮した写真だ。`,
      );
      await you.say_and_wait('え、なぜ……');
      await era.printAndWait(
        `しかも、${treve.name} が持っていたのとは別物だ。`,
      );
      await era.printAndWait(
        `${you.name} は衝動的にそのクローゼットを開ける——一瞬、${you.name} は中に広がる光景に息を止める。`,
      );
      await you.say_and_wait('なぜ、ここ……全部俺……？');
      await era.printAndWait(
        `クローゼットの一面の壁に貼られた写真は、すべて ${you.name} を撮ったものだ。`,
      );
      await era.printAndWait(
        `どこで撮られたか議論する余地もない。だが ${you.name} は思わず恐怖を覚える。`,
      );
      await era.printAndWait(
        '唾を呑み、その光景に圧倒され、視線を落とすと、腰ほどの高さの箪笥があり、そこに日記帳が置いてある。',
      );
      await era.printAndWait(
        `震える手でそれを開き、中を適当に繰ると、可愛くきれいなフランス語で詳しく記された毎日——すべて ${you.name} のことだ。${you.name} が ${treve.name} に出会った日から、毎日そうだ。`,
      );
      await treve.used_to_say_and_wait(
        '日本から来たトレーナー。とても格好よくて、優しくて、笑顔がとても可愛い人。努力している姿も、ぎこちないフランス語も、好きになった。',
      );
      await treve.used_to_say_and_wait(
        'トレーナーは栗毛が好きらしい。私と一緒にいるから嬉しい。',
      );
      await treve.used_to_say_and_wait(
        'トレーナーが泊まるホテルは○○のホテル。私も一緒に泊まれないかしら。',
      );
      await treve.used_to_say_and_wait([
        '今日、',
        callname,
        ' に声をかけられた！たくさん聞けて嬉しかった。あの時間がずっと続けばいいのに。',
      ]);
      await treve.used_to_say_and_wait(
        '好き。とても好き。大好き。食べてしまいたいほど好き、好き好き好き好き好き好き——',
      );
      await era.printAndWait(`${you.name} は思わず日記を閉じ、口を押さえる。`);
      await era.printAndWait(
        '自身の危険を感じ、振り返ってこの場を逃げようとした瞬間——頭上に鈍器で殴られたような衝撃が走り、視界が揺れ、力なく倒れる。',
      );
      await era.printAndWait(
        `最後に聞こえたのは、${treve.name} の落ちた声色だ。`,
      );
      await treve.say_and_wait('見ちゃったのね……');
      await era.printAndWait(`それから ${you.name} の意識は消えた。`);
      era.drawLine();
      await era.printAndWait(
        `朦朧とした感覚の中で目覚め、${you.name} はあるベッドの上で眠っていた。`,
      );
      await era.printAndWait(
        '頭痛がする。何が起きたか分からず、とりあえず天井の淡い光を見つめ、記憶を探る。',
      );
      era.printButton(`「${treve.name} の部屋に来て、それから……」`, 1);
      await era.input();
      await era.printAndWait(`${you.name} はそこで思い出す。`);
      await era.printAndWait(
        `${treve.name} の異常さが、${you.name} の意識を一気に覚醒させる。`,
      );
      await era.printAndWait(
        `瞬間、${you.name} は自分の手足が手錠でベッドに繋がれていることに気づく。`,
      );
      era.printButton('「これは何だ？なぜ……？」', 1);
      await era.input();
      await era.printAndWait(
        `どれだけ力を入れても、手足は痛いだけだ。${you.name} が周囲を見回して助けを求めようとしたとき、隣から聞き慣れた声がする。`,
      );
      await treve.say_and_wait(['起きたのね、', callname, '。']);
      await era.printAndWait(`${treve.name}。`);
      await era.printAndWait(
        `${treve.sex}はベッドの脇に立ち、黒く染まった深海のような目で ${you.name} を見下ろしている。`,
      );
      era.printButton('「トレヴ、なぜ！？」', 1);
      await era.input();
      await treve.say_and_wait([
        '見るなって言った……',
        callname,
        ' が悪いのよ？',
      ]);
      await era.printAndWait(
        `${treve.name} は動けない ${you.name} の手に指を絡める。それからゆっくり ${you.name} の顔へ近づき、息が詰まる距離で ${you.name} を見つめる。`,
      );
      await treve.say_and_wait([
        '私は ',
        callname,
        ' に一目惚れした。それからずっと ',
        callname,
        ' のことだけ考えて、胸が苦しくて、とても好きで。',
      ]);
      await era.printAndWait(
        `${you.name} に跨った ${treve.name} が、手を ${you.name} の胸に置く。`,
      );
      await era.printAndWait(
        `本能がこのままでは危険だと叫ぶ。だがどれだけ暴れても手錠は外れない。${treve.uma_sex_title}に力で勝つことなど、なおさらあり得ない。`,
      );
      await treve.say_and_wait([
        callname,
        '、あなたはもう日本のものじゃない……ずっと私のもの。私のためだけに生きる人になるでしょ……？',
      ]);
      await era.printAndWait(
        `${treve.name} は無敵の笑顔を浮かべ、妖艶な目で、頬を微かに赤らめ、${you.name} の顔へ近づく。それから${treve.sex}は、呼吸すら遮る距離で囁く。`,
      );
      await treve.say_and_wait([
        '全部 ',
        callname,
        ' のせいよ？私をこうした ',
        callname,
        ' が悪いの。',
      ]);
      await era.printAndWait(
        `顔を逸らそうとしても、${treve.name} の手に押さえられる。それから ${treve.name} は容赦なく、唇を ${you.name} に重ねる。柔らかい感触が唇を塞ぎ、温かい感覚が脳を支配する。${treve.name} の舌が ${you.name} の固く閉じた唇を無理に開き、${you.name} の舌に絡む。`,
      );
      await treve.say_and_wait(['ん、ん……', callname, '……']);
      await era.printAndWait(
        `水音が口の中で響く。味わい尽くすように、${treve.name} はずっと唇で ${you.name} を求める。`,
      );
      await era.printAndWait(
        `呼吸が苦しくなってきたところで、${treve.sex}はやっと離れる。`,
      );
      await treve.say_and_wait(`ああ、ああ、${treve.name}……もう——`);
      await era.printAndWait(
        `思考が止まり、口に出そうとした瞬間、${treve.name} がまた唇を重ね、${you.name} の言葉を塞ぐ。`,
      );
      await era.printAndWait(
        `呼吸が苦しい。逃げようとしても、${treve.name} は ${you.name} を放さない。`,
      );
      await era.printAndWait(
        `ずっと、ずっと、ずっと、${treve.name} の愛は限りを知らず、唇を重ね、舌を絡め、愛を求める。`,
      );
      await era.printAndWait(
        `${treve.name} は離れ、遠く伸びた舌から糸を引く唾を呑み、笑う。`,
      );
      await treve.say_and_wait([
        callname,
        ' は私のもの。私以外には誰にも見せない。日本にも帰さない。ずっと、ずっと、ずっと愛してあげる。',
      ]);
      await era.printAndWait(
        `${treve.name} は手を ${you.name} の頬に置き、抑えきれない昂ぶりでもう一度唇を重ねる。`,
      );
      era.drawLine();
      await era.printAndWait('数日後、静かな部屋に置かれたテレビが音を出す。');
      await you.say_as_unknown_and_wait(
        '——フランスを訪れていた日本のトレーナーが行方不明になりました。現地警察と協力して捜索していますが、現時点で成果はなく、捜査は極めて困難です。',
      );
      await treve.say_as_unknown_and_wait('ふふ……');
    };
    f.title = title;
    return f;
  })(),
};
