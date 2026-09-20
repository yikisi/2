/**
 * @file ライスシャワー - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} rice ライスシャワー */
  good_morning(rice) {
    const buffer = [];
    if (era.get('cflag:30:节日事件标记') === 1) {
      buffer.push(
        () => rice.say('もうすぐ何かあるみたい……どんなことをするんでしょう？'),
        () =>
          rice.say(
            'いまイベントをやってるみたい……ライス、迷惑をかけないようにします……こっそり見に行ってもいいですか……？',
          ),
      );
    } else {
      buffer.push(
        () => rice.say('どうか……ライスのこと、ちゃんと見ていてください。'),
        () => rice.say('ライスも……きっと、輝けるはず……'),
      );
      if (!era.get('status:30:熬夜')) {
        buffer.push(
          () => {
            rice.say('昨夜、とっても素敵な夢を見ました……！');
            rice.say('お兄ちゃんと一緒に、きらきらの星空の草原で。');
            rice.say('一緒にトレーニングするつもりだったのに……');
            rice.say(
              '星がきれいすぎて、途中から一緒に星を見ることになりました。',
            );
            rice.say(
              'だから、早起きして、ちゃんとトレーニングしなきゃって思ったんです！',
            );
          },
          () => {
            rice.say('ライス、花屋さんに行きました。');
            rice.say(
              '涼しいお店の中で、お花に囲まれて、気持ちがとても穏やかでした。',
            );
            rice.say('ふふ～だから今日のトレーニング、ライス、がんばります！');
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} awake ライスが起きているか
   */
  select(rice, you, awake) {
    if (!awake) {
      era.print([
        rice.get_colored_name(),
        ' は、絵本より繊細な笑顔のまま、ぐっすり眠っている。',
      ]);
    } else {
      const buffer = [];
      if (era.get('cflag:30:节日事件标记') === 1) {
        buffer.push(
          () =>
            rice.say('もうすぐ何かあるみたい……どんなことをするんでしょう？'),
          () =>
            rice.say(
              'いまイベントをやってるみたい……ライス、迷惑をかけないようにします……こっそり見に行ってもいいですか……？',
            ),
        );
      } else {
        buffer.push(
          () =>
            era.print([
              rice.get_colored_name(),
              ' は静電気にびくりとし、耳を撫でてから ',
              you.get_colored_name(),
              ' の指示を静かに待つ。',
            ]),
          () =>
            era.print([
              rice.get_colored_name(),
              ' は前髪を脇へ寄せ、生き生きとした双眸を ',
              you.get_colored_name(),
              ' の視線に合わせる。',
            ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_study(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          'ライスが選んだ絵本です。',
          callname,
          '、読んでみてください。',
        ]),
      () =>
        rice.say_and_wait([callname, '、レースのことは何でもお上手ですね……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async talk(rice, callname) {
    const buffer = [];
    if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
      buffer.push(
        () => rice.say_and_wait('ふう……なんだか、ちょっと疲れ……た気が……'),
        () => rice.say_and_wait('ライス、大丈夫です！疲れて、なんかいません……'),
      );
    } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:30:干劲')) {
        case -2: //やる気極悪
          buffer.push(
            () =>
              rice.say_and_wait([
                'あうっ！',
                callname,
                ' に迷惑をかけたくなかったのに……ごめんなさい。',
              ]),
            () => rice.say_and_wait('ライス……またダメな子に戻っちゃうの……'),
          );
          break;
        case -1: //やる気不調
          buffer.push(
            () => rice.say_and_wait('うんうん……がんばれライス……がんばれ…'),
            () => rice.say_and_wait('ライスに手伝えること、ありますか……'),
          );
          break;
        case 0: //やる気普通
          buffer.push(
            () => rice.say_and_wait('どんなトレーニングをしますか？'),
            () =>
              rice.say_and_wait('ライス、がっかりさせないようにがんばります。'),
          );
          break;
        case 1: //やる気好調
          buffer.push(
            () =>
              rice.say_and_wait('がんばりまーす！今日もよろしくお願いします。'),
            () =>
              rice.say_and_wait([
                callname,
                '、トレーニング、始めましょうか？今のライスなら、たくさんこなせそうです。',
              ]),
          );
          break;
        case 2: //やる気絶好調
          buffer.push(
            async () => {
              await rice.say_and_wait(
                'ライス、今ならすごく、すごくがんばれます！',
              );
              await rice.say_and_wait([
                'ライスを信じてください、',
                callname,
                '。',
              ]);
            },
            async () => {
              await rice.say_and_wait(
                'あの、ライス、もう準備運動は終わってます。',
              );
              await rice.say_and_wait('だから、今から何をしても大丈夫です。');
            },
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            '毎日、ほんの少しずつですけど、理想の自分に近づけてる……気がします。',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '……あの、言ってもいいですか……ライス、毎日がんばってます……ライスは変われるって、信じてください。',
          ]),
        () =>
          rice.say_and_wait(
            '今はね……ライス、自分のことが、前ほど嫌いじゃないんです。',
          ),
        () =>
          rice.say_and_wait([
            '……えっと、',
            callname,
            '……今日も、ライスの面倒を、み、見てくれますか……？',
          ]),
        () =>
          rice.say_and_wait([
            'ほ……本当はライス、チョコレートを作ったんです……ライスのチョコレート、食べてくれますか……？受け取ってくれたら、ライス、嬉しいです。',
          ]),
        () =>
          rice.say_and_wait(
            'お星さまはみんなの願いを叶えて、みんなを幸せにしてくれる。すごいです。ライスも……がんばらなきゃ。',
          ),
        () =>
          rice.say_and_wait([
            callname,
            ' に出会ってから、毎日があっという間で……',
            'ライス、がんばります！',
          ]),
        () => rice.say_and_wait('ライスの制服、似合ってますか？'),
        () =>
          rice.say_and_wait('ずっと見つめられると……ちょっと恥ずかしいです。'),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async office_cook(rice) {
    const buffer = [
      () => rice.say_and_wait('えへへ、新婚さんみたいですね。'),
      () =>
        rice.say_and_wait(
          '意外、ですか？ライス、食欲はあるほうなので、お母さんに教わったんです。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_rest(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          '、あの……膝枕……わあ、ライスが ',
          callname,
          ' にしてあげる、って意味です……',
        ]),
      () =>
        rice.say_and_wait('本当に、上着をライスの毛布にしなくても……いい匂い……'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_game(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '『',
          rice.uma_sex_title,
          'のお風呂だいすき』、ふふ、',
          callname,
          ' も好きなんですね。',
        ]),
      () =>
        rice.say_and_wait([callname, '、優等生なのに、ゲームもすごく上手！']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '泣いちゃ……だめ。',
          callname,
          ' と約束したんです。ライスは強い子になるって。',
        ]),
      () =>
        rice.say_and_wait(
          '三女神さま、ライス、自分を信じてみることにしました。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async s_a_dating(rice) {
    const buffer = [
      () =>
        rice.say_and_wait('ベンチの皆さん、大胆ですね……ちょっと羨ましいです。'),
      () =>
        rice.say_and_wait(
          'トレセンなのに、こんなにデート向きの場所があるんですね。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async s_r_lunch(rice) {
    await rice.say_and_wait(
      'ライスは朝ごはんはパン派ですけど、お弁当には、ちょっと自信あります！',
    );
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   * @param {number} jpy 釣りで売ったウマコイン。0は釣果なし
   */
  async o_r_fishing(rice, callname, jpy) {
    if (jpy > 0) {
      await rice.say_and_wait(
        'うわああ！禁漁区でこんなに釣っちゃって、本当にごめんなさい！',
      );
    } else {
      await rice.say_and_wait([callname, '、今は禁漁期ですよ？']);
      await rice.say_and_wait(
        'え……一人一竿、一線、一鉤？生態系の改善？えええ？',
      );
    }
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_r_walking(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '昔はひとりで鍛えてると、孤独を感じることがありました。でも ',
          callname,
          ' と一緒だと、心が慰められるみたいです！',
        ]),
      () =>
        rice.say_and_wait([
          'ライスが一番ほっとする時間——自分にいちばん近い時間は、',
          callname,
          ' とゆっくり歩いている、この道のりなんです。',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_arcade(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          'なんでゲームセンターはコインじゃなくてメダルなんですか？店員さん、大変じゃないですか……',
        ),
      () =>
        rice.say_and_wait([
          callname,
          '、この機械、故障してるかもしれません。だって、こんなに遅い弾幕、',
          callname,
          ' が避けられないはずないですよね？',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_drawing(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          'ライス、いつもティッシュばかり……過程を楽しむ？じゃあ、ライス、もう一回やってみます。',
        ),
      () =>
        rice.say_and_wait([
          'あの、お金はライスが出します。',
          callname,
          ' は、ご自身の幸運をください！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_ktv(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          ' への歌なら、ライス、何曲でも歌います。',
        ]),
      () =>
        rice.say_and_wait([
          'ライスの小さな願い、',
          callname,
          ' に届きましたか？',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_movie(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          '。どうして好きな人のこと、嫌いになることがあるんですか？',
        ]),
      () =>
        rice.say_and_wait(
          '『火〇忍者 劇場版』、ライスに似た格好いい役がいるんですか？楽しみです！',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_restaurant(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          'たっ、食べられる、って……あ、',
          callname,
          ' はご飯派なんですね。',
        ]),
      () =>
        rice.say_and_wait(
          'やっぱり割り勘にしましょう？ライス、自分の食べっぷりは分かってますから。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_dating(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('へへ、ライス、絵本のヒロインみたいな気分です。'),
      () =>
        rice.say_and_wait([callname, '、そういうタイプの雌が好きなんですね……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_shopping(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('絵本コーナー、一緒に見ましょうか？'),
      () =>
        rice.say_and_wait([
          'カップル限定……でも、',
          callname,
          ' は ',
          callname,
          ' ですから。',
        ]),
    ];
    await get_random_entry(buffer)();
  },
};
