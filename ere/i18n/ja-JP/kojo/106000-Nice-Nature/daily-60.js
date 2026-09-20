/**
 * @file ナイスネイチャ - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  good_morning(nature, callname, self_call) {
    const buffer = [
      () => nature.say(`今日のトレーニング予定はなに？ リスト見せてよ`),
      () =>
        nature.say(
          `昨日、焼肉屋のおじさんが新メニュー出したって。あとで一緒に行かない？ おごるよ～`,
        ),
      () =>
        nature.say(
          `しーっ！ 声小さく！ 見て、あそこに猫が寝てる。場所変えよっか？`,
        ),
      () =>
        nature.say(`おっ！ ${callname}、なんだか嬉しそう。いいことあった？`),
      () =>
        nature.say(
          `そういえば、夕飯なににするか決めた？ まだなら ${self_call} が腕を振るっちゃうよ！`,
        ),
    ];
    if (era.get('status:60:熬夜') > 0) {
      buffer.push(() => {
        nature.say(`んはぁ——あ……${callname}？ なんで欠伸してるの？ あははは……`);
        nature.say(
          `もう隠せないね。実は、${self_call}、漫才の動画ひとつ見て寝ようと思ってたのに、面白すぎて気づいたら……`,
        );
        nature.say(
          `我に返ったらもう明け方。でもほんと面白かったよ？ ${callname}も見る？`,
        );
      });
    } else if (era.get('base:60:体力') === era.get('maxbase:60:体力')) {
      buffer.push(() => {
        nature.say(
          `おっ～${callname}、おはよう！ おかげさまで ${self_call}、よく休めたよ！ 美味しいものいっぱい食べて、ぐっすり眠って、今は元気いっぱい？`,
        );
        nature.say(
          `なんだか若返った気がする！ 唯一ちょっと残念なのは……あ、なんでもない。とにかく次の予定教えて？`,
        );
      });
    } else {
      buffer.push(() =>
        nature.say(
          `あ、${callname}、おはよう～ よく寝たら疲れもすっきり。誰かにマッサージしてもらえたらもっと最高なんだけど～ まあ、それは置いといて、次の予定は？`,
        ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  select(nature, self_call) {
    if (Math.random() < 0.5) {
      nature.say(`どうしたどうした？ ${self_call} に用？`);
    } else {
      nature.say(`ん？ やることある？ じゃあ ${self_call} も付き合うよ！`);
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_study(nature, callname) {
    await nature.say_and_wait(
      `へぇ——${callname}、こんな問題もわかるんだ？ 昔、優等生だったりして？`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_prepare(nature, callname) {
    await nature.say_and_wait(
      `商店街のみんなと ${callname} の期待、裏切れないからね！`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async talk(nature, callname, self_call) {
    const buffer = [];
    switch (era.get('cflag:60:干劲')) {
      case -2:
        buffer.push(
          () => nature.say_and_wait('あー……体が……動かない……'),
          () =>
            nature.say_and_wait(
              'あーだめ！ 頭の中が悪いことばっかり……早く落ち着かないと……',
            ),
        );
        break;
      case -1:
        buffer.push(
          () => nature.say_and_wait('うーん——なんか気力がわかないね。'),
          () =>
            nature.say_and_wait('全身どこかしっくりこない……休んだほうがいい？'),
        );
        break;
      case 0:
        buffer.push(
          () =>
            nature.say_and_wait(
              `こんにちは、${callname}。今日のトレーニングは？`,
            ),
          () =>
            nature.say_and_wait(
              `トレーニングでもレースでもその他でも、${callname} に任せるよ～ できる範囲でやるから。`,
            ),
          () => nature.say_and_wait(`はにゃ——あ、${callname}。今日の予定は？`),
        );
        break;
      case 1:
        buffer.push(
          () =>
            nature.say_and_wait(
              'ん～いい感じ。この調子なら……なんでもない！ はははは……',
            ),
          () => nature.say_and_wait('いい天気だね。今日はなにがあるかな？'),
          () =>
            nature.say_and_wait(
              `おっ～なにかいいこと起きそう？ どう思う、${callname}？`,
            ),
        );
        break;
      case 2:
        buffer.push(
          () =>
            nature.say_and_wait(
              'おっす～今日も全力で——冗談。でもできる範囲では頑張るよ。',
            ),
          () =>
            nature.say_and_wait(
              `${self_call}、絶好調！ いっそ二周走っちゃう？ 結果は期待しないでね。`,
            ),
          () =>
            nature.say_and_wait(
              `おっ？ ${callname}、おはよ～ 朝ごはんか散歩、一緒にどう？ おごるよ？`,
            ),
        );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_gift(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `えっ？ あたしに？ ありがとう、${callname}！ 好みわからない？ 大丈夫、${callname} の気持ちだけで十分嬉しいよ！`,
      );
    } else {
      await nature.say_and_wait(
        `なになに？ プレゼント？ わ！ ありがとう ${callname}！ 今開けていい？`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async office_cook(nature, callname, self_call) {
    await nature.say_and_wait(
      `料理は ${self_call} に任せて！ ${callname} は横で休んでて！ ほらほら行って行って！`,
    );
  },
  /** @param {CharaTalk} nature ナイスネイチャ */
  async office_rest(nature) {
    await nature.say_and_wait(
      'たまにはこうしてふたりでのんびりするのもいいね。たまになら。',
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  async office_game(nature, self_call) {
    await nature.say_and_wait(
      `おっ？ ${self_call} に勝負？ いい度胸！ 負けたほうは勝ちのお願いひとつ聞く、でどう？ そのほうがやる気出るでしょ！`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(nature, callname) {
    await nature.say_and_wait(
      `くそっ！！！！！ みんなも ${callname} もあんなに期待してくれてるのに、あたしは——`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async s_a_dating(nature, callname) {
    await nature.say_and_wait(
      `学園のなかでこう……周りの目、さすがに気になるね……でも ${callname} が気にしないなら——`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  async s_r_lunch(nature, self_call) {
    await nature.say_and_wait(
      `じゃーん！ ${self_call} の手作り弁当だよ！ 毎日栄養バランス大事！`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   * @param {PrintedSpan} call_20 ナイスネイチャのセイウンスカイへの呼び方
   */
  async o_r_fishing(nature, callname, self_call, call_20) {
    await nature.say_and_wait([
      'そういえば、前に ',
      call_20,
      ' と何回か釣りに出て、',
      nature.sex,
      'からコツたくさん教わったんだ！ どう、',
      callname,
      '？ ',
      self_call,
      ' が教えてあげよっか？',
    ]);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_r_walking(nature, callname) {
    await nature.say_and_wait(
      `今日はいい天気だね～ いっそ昼ごはん、この川沿いで食べない？ ${callname} も一緒？`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async out_river_talk(nature, callname) {
    await nature.say_and_wait('……それで、八百屋のおばさんがまた……');
    await era.printAndWait(
      `川風の爽やかさを感じながら、${nature.name} の商店街の世間話に耳を傾ける`,
    );
    await nature.say_and_wait(`……${callname}？ 聞いてる？`);
    await era.printAndWait(
      `返事がなかったのが気に入らなかったのか、${nature.name} が拗ねた声を出す`,
    );
    await era.printAndWait(
      `返事となだめのあと、${nature.name} はまたさっきの勢いに戻った……`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_arcade(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `この爪、力なさそうだけど、本当に掴めるの？……なに？ 昔特訓した秘技？ ${callname} にもそんな青春があったんだ。じゃあ ${self_call} に見せてよ？`,
      );
    } else {
      await nature.say_and_wait(
        `ゲームセンターか……若い子がよく来てるよね。あたし？ あたしはよく来る役じゃないって！ ${self_call} は家事派だよ？ まあ、たまに一緒に遊ぶのは悪くない、たまになら。`,
      );
    }
  },
  /** @param {CharaTalk} nature ナイスネイチャ */
  async o_s_drawing(nature) {
    await nature.say_and_wait(
      `なにが出るかな？ まあ十中八九は三等賞だけど……でも、万一はね？`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_ktv(nature, callname, self_call) {
    await era.printAndWait(`${nature.name} とカラオケへ……`);
    await nature.say_and_wait('——ど、どうだった、あたしの歌？');
    await era.printAndWait(
      `曲が終わり、${nature.name} は少し緊張して評価を待つ`,
    );
    await nature.say_and_wait(
      `天の声とか……大げさすぎ！ ${callname}、${self_call} に甘いこと言っても得しないよ？` +
        `はい！ 次は ${callname} の番！`,
    );
    await era.printAndWait(`${nature.name} と、楽しい時間を過ごした。`);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_s_movie(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `恋愛映画？ ${callname}、意外と乙女？ あたしが好きそう？ ははは——`,
      );
      await nature.say_and_wait(
        `そういうのは若い子とかイチャイチャしてるカップル向きだよ。でも ${callname} が見たいなら付き合うけど。`,
      );
      await nature.say_and_wait(`${callname} と一緒に見られるなら……`, true);
    } else {
      await nature.say_and_wait(
        'うわ……このポスター、迫力あるね。巨大ロボットと鶏型怪獣の大決戦。設定はわからないけど面白そう。今日はこれにしない？',
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   * @param {number} dice おみくじの出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(nature, self_call, dice) {
    await nature.say_and_wait(`どれどれ、${self_call} の今日の運勢は——`);
    await era.printAndWait(
      `${nature.name} が筒を軽く振ると、しばらくして紙籤が落ちてきた。`,
    );
    if (dice < 0.1) {
      await nature.say_and_wait(
        `おっ～大吉！ ${self_call} も輝けちゃう……なんてね。でもこの運、レースに残しておけたらいいのに！`,
      );
    } else if (dice < 0.25) {
      await nature.say_and_wait('中吉——悪くないね。最近、いいことあるかも？');
    } else if (dice < 0.6) {
      await nature.say_and_wait(
        'うーん、小吉。まあ及第点。上から数えると……これも3番目？',
      );
    } else {
      await nature.say_and_wait(
        'うわ……まさかこれが……ま、まあ、籤運が悪いだけ、気にしない気にしない！……変なこと起きない……よね……',
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_s_restaurant(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `こっちも食べものいっぱいだね、${callname} はなに食べたい？ ここ？ よし、行こ！`,
      );
      await nature.say_and_wait(
        'とりあえずトレーナーの好み、メモっとこ……',
        true,
      );
    } else {
      await nature.say_and_wait(
        'うーん……ちょっとお腹空いた。このあたりで何か食べない？',
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_dating(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `あの……手、つながない？ ほら……そのほうがデートっぽいじゃない？ いい！？ えへへ……${callname} の手、あったかいね——`,
      );
    } else {
      await nature.say_and_wait(
        `疲れた？ じゃあ……${self_call} の膝枕、試す？ あ、顔こっち向けないで！ はず、恥ずかしい……`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_shopping(nature, callname, self_call) {
    await era.printAndWait(`${nature.name} とお店を見て回る……`);
    await nature.say_and_wait('おっ～この服、かわいい感じ——');
    await era.printAndWait(
      `${nature.name} はショーウィンドウの服を見て感嘆する`,
    );
    await nature.say_and_wait(
      `でしょ？ ${callname} もそう思うよね？……ま、待って、着てみたいとは言ってないよ？`,
    );
    await nature.say_and_wait(
      `ほら、こういうふわふわは若い子向きでしょ？ ${self_call} には似合わないって！`,
    );
    await era.printAndWait(
      `勧められても ${nature.name} は何度も断り、結局逃げ出した。`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  good_night_normal(nature, you, callname) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${nature.name} を学生寮の前まで送る。`,
    );
    nature.say(`今日もお疲れさま！ また明日、${callname}！`);
    era.print(
      `手を振りながら ${nature.name} の背中を見送ったあと、${you.name} も踵を返し、自室へ戻って休む。`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {number} check 求愛判定値。大成功なら既定で同意
   */
  async good_night_sex(nature, you, callname, check) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${nature.name} を学生寮の前まで送る。`,
    );
    era.print(
      `${you.name} がいつもどおり手を振って別れようとした瞬間、袖をナイスネイチャに掴まれた。`,
    );
    era.print(
      '下を見ると、夕陽のせいなのか、うつむくナイスネイチャの頬がやけに赤い。',
    );
    era.print(
      `短い沈黙のあと、赤毛の${nature.teen_sex_title}が、もじもじと口を開いて気まずさを破る。`,
    );
    nature.say(
      '今日……外泊届、出してあるから……だから……もう少し一緒にいても、いいんだよ？ その……もし……',
    );
    nature.say(`もし ${callname} が望むなら……も、もっと先のことも——`);
    era.print(
      `ここまでで${nature.teen_sex_title}の頬は真っ赤に燃え、潤んだ瞳が ${
        you.name
      } の目を見つめている。${nature.sex}が続きを言わなくても、${
        you.name
      } にはもうわかっていた。`,
    );
    era.printButton('応じる', 1);
    era.printButton('断る', 2, { disabled: check === 2 });
    const ret = await era.input();
    if (ret === 1) {
      nature.say('ほ、ほんと！');
      era.print(
        `恥ずかしそうだったナイスネイチャの顔に、喜びが一気に広がる。${you.name} がもう一度確かめる暇もなく、腕に抱きつき、耳元で小さく囁いた。`,
      );
      nature.say(
        `今夜のトレーニングも、よろしくね？ トレ・ー・ナ・ー・${you.adult_sex_title} ❤️`,
      );
      era.print(
        `こうして ${
          you.name
        } はナイスネイチャに手を引かれ、下校中の${nature.uma_sex_title}たちに温かく見送られながら、通りの向こうへ歩いていった……`,
      );
    } else {
      nature.say('そっか……そうだよね……');
      era.print(
        `${nature.teen_sex_title}は袖を掴んでいた手を放し、隠しきれない寂しさを顔に浮かべる。`,
      );
      nature.say(
        `うん、大丈夫。あたしもね、${callname}、今日あんなに疲れてるのに。ちゃんと休んだほうがいい。さっきのは聞かなかったことにして。おやすみ、${callname}、また明日！`,
      );
      era.print(
        `寂しそうに去っていく${nature.teen_sex_title}の背中を見て、${
          you.name
        } の胸に言いようのない思いが残った。`,
      );
    }
    return ret;
  },
  cl_valentine: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`やあ、${callname}、おはよう`);
      await era.printAndWait(
        '朝早く学園に着くと、ナイスネイチャが校門で待ちかねていたように現れる。',
      );
      await nature.say_and_wait('えっと……その……まあ、あとでトレセンで！');
      await era.printAndWait(
        `${nature.teen_sex_title}は何か言いたげだったが、結局口に出せず、校門の中へ走っていった。`,
      );
      era.drawLine({ content: '⏰昼になった⏰' });
      await nature.say_and_wait(`おっ～${callname}、${self_call} だよ？`);
      await era.printAndWait(
        '食堂で食事中、ナイスネイチャが突然そばに現れる。',
      );
      await nature.say_and_wait(`${callname} にいいものあげる。これ、チョ……`);
      await era.printAndWait(
        'ナイスネイチャは言いよどみ、言いにくそうにしている。',
      );
      await nature.say_and_wait(
        `チョ……蕎麦の割引券！ 前に商店街のおばさんが何枚かくれて、あたし使い切れないから ${callname} に！ はははは……じゃあ、また！`,
      );
      await era.printAndWait(
        'ナイスネイチャは様子がおかしいまま、食堂から逃げていった',
      );
      era.drawLine({ content: '⏰夜になった⏰' });
      await nature.say_and_wait('ここまででいいよ？');
      await era.printAndWait(
        'ナイスネイチャを栗東寮の前まで送り、帰ろうとしたところで衣の裾を掴まれる。',
      );
      await nature.say_and_wait('こ、これ！ 受け取って！');
      await era.printAndWait(
        'ナイスネイチャは頬を真っ赤にして、勇気を出して後ろからチョコを差し出した',
      );
      await nature.say_and_wait(
        '一応……手づくりのチョコ。嫌いなら、受け取らなくてもいいよ……？',
      );
      await era.printAndWait('こんな大切な贈り物を、断れるはずがない。');
      await era.printAndWait('ナイスネイチャとの絆が、また一段深まった。');
    };
    f.title = title;
    return f;
  })(),
  cl_fans: (() => {
    const title = 'ファン感謝祭';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('わあ——すごい賑わいだね？');
      await era.printAndWait(
        '来客で埋まった校内を見て、ナイスネイチャが感嘆する',
      );
      await nature.say_and_wait(
        'でも大半はテイオーとかマックイーンみたいな、輝いてる大スターのファンでしょ？',
      );
      await nature.say_and_wait('あたしみたいな端役は裏方に——');
      await era.printAndWait('？？？「あ！ ネイチャちゃん見つけた！」');
      await era.printAndWait(
        `ナイスネイチャが踵を返して去ろうとしたとき、女の声が${nature.sex}を呼び止めた。`,
      );
      await nature.say_and_wait('えっ？ 八百屋のおばさん？ どうして来たの？');
      await era.printAndWait(
        '八百屋のおばさん「決まってるでしょ、ネイチャちゃんの学園生活を見に来たのよ！ あたしだけじゃない——」',
      );
      await nature.say_and_wait(
        'あ！ 焼肉屋のおじさん！ 売店のおばあちゃん……みんな来てる……',
      );
      await era.printAndWait(
        '八百屋のおばさん「来るに決まってるでしょ！ あたしたち、ネイチャちゃんのファンなんだから！」',
      );
      await nature.say_and_wait(
        'うっ……その気持ちは嬉しいよ……でも、こう……なんだか、恥ずかしい……',
      );
      await era.printAndWait(
        '三つ編みで顔を隠したナイスネイチャを、商店街の人たちが取り囲む。',
      );
      await era.printAndWait(
        `どうやら${nature.sex}は、このファン感謝祭をとても楽しく過ごしそうだ……`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(
        'もしもし？ あたしだよ？ 詐欺電話じゃない、本人だよ？',
      );
      await era.printAndWait(
        '受話器の向こうから、聞き慣れた声。ナイスネイチャだ。',
      );
      await nature.say_and_wait(
        'ねえ、公園まで来てくれない？ 今……うん、あとで！',
      );
      era.drawLine({ content: '⏰公園に着いた⏰' });
      await nature.say_and_wait(`あ、来た来た、${callname}！ こっちこっち～`);
      await era.printAndWait('遠くからでも、手を振るナイスネイチャが見える。');
      await era.printAndWait('今日はクリスマスだ');
      await nature.say_and_wait(
        `まあ、大した用事じゃないよ。${self_call}、予定なさそうだったから、一緒にクリスマスしようって誘っただけ！`,
      );
      await nature.say_and_wait('だめ……かな？');
      await era.printAndWait(
        '肯定の返事をもらうと、ナイスネイチャは再び笑みを浮かべ、後ろからギフトボックスを差し出した',
      );
      await nature.say_and_wait(
        'これ！ メリークリスマス！ 手編みのマフラー……あんまり上手じゃないし、柄も地味だけど……',
      );
      await nature.say_and_wait('でも！ よかったら、受け取って！');
      await era.printAndWait(
        '箱のなかは丁寧に編まれたマフラーで、ナイスネイチャの気遣いがよくわかる',
      );
      await nature.say_and_wait(
        '気に入った？ そ、そっか……気を遣って言ってるんじゃないよね？',
      );
      await era.printAndWait(
        'ナイスネイチャの不安を解いたあと、ふたりは穏やかなクリスマスを過ごした……',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {PrintedSpan} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async load_talk_normal(nature, callname, self_call) {
    await nature.say_and_wait([
      callname,
      ' なら、きっといいルートを見つけるよ……',
      self_call,
      ' は信じてるから。今も、前も、これから先も……',
    ]);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {PrintedSpan} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async load_talk_pregnant(nature, callname) {
    await nature.say_and_wait([
      'あは、そっか、やっぱりネイチャさんは……でも待って、だめ、',
      callname,
      '、あたしたちの子に、せめて、せめて名前だけは……',
    ]);
    await nature.say_and_wait(
      'この子はパパがいなくてもいい、あたしひとりで育てる。でもせめて、お願い、名前をひとつ……',
    );
    await nature.say_and_wait([
      '『ハナツキ・ネイチャー』？ 『エレガンス・ネイチャ』？ そういう、名前。ネイチャさんが頼む最後のこと、',
      callname,
      '、名前をちょうだい……',
    ]);
    await era.printAndWait(
      [nature.get_colored_name(), '「', callname, '————！！」'],
      { color: nature.color, fontSize: '3rem' },
    );
  },
};
