/**
 * @file シンボリルドルフ - 日常
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say(
          '誰が思うでしょう。私たちが、こんな関係になるなんて……もう、引き返せません。',
        ),
      () =>
        luna.say(
          '私を信じ、期待してくれる人たちを……その想いを、叱ることなどできません。',
        ),
      () =>
        luna.say(
          'あなたが傍にいてくれるおかげで、虚ろだと笑われるエデンにも、一歩ずつ近づけています。',
        ),
      () =>
        luna.say(
          '相手の身になって考える？ 私の立場を理解できる人など、いないと思います。',
        ),
      () =>
        luna.say(
          '生徒会への要望は紙に書いて渡してください。できる限り、みなの願いを叶えます。',
        ),
      () =>
        luna.say(
          '勝負服が格好いい、ですか？ ……監獄を、格好いいとは呼びたくありません。',
        ),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('最近、ときどき頭が痛くて堪えられません。'),
        () => luna.say('眠る時間が、増えてきてはいませんか？'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () =>
          luna.say(
            '私の視界から離れないで！ あなたの気配が、消えてしまいそうで……！',
          ),
        () =>
          luna.say(
            `${you.actual_name}、まだルナを見ていてくれますか？ 私はもう……自分ではなくなりそうで——`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say('時を無駄にするな。'),
      () => emperor.say('過ちを犯すな。'),
      () => emperor.say('吾を失望させるな。'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say('眠る時間が減ってきた。良い。'),
        () => emperor.say('弄臣よ、調子の良い今のうちに、狩りをいくつか組め！'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => emperor.say('軟弱を消し、皇帝の名を遠くまで響かせよ！'),
        () =>
          emperor.say(`誰が吾の脳裏で騒いでいる。${emperor.sex}を黙らせよ。`),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say('寒い冗談が思い浮かびませんね……'),
      () => luna.say('今日の予定は？'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say('お前か、弄臣。'),
      () => emperor.say('吾の気分は良い。興を殺すな。'),
      () =>
        emperor.say(
          '万物には始まりと終わりがある。我がいずれ凋もうとも、後輩たちに香りを残せ。',
        ),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝 */
  select_sleep(chara17) {
    chara17.say('すぅ……はぁ……');
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'あなたが心理学の本を読むとは知りませんでした。教えてくれますか？',
        ),
      () =>
        luna.say_and_wait(
          'トレーナー免許の試験には、私が作った問題もあります。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('半可通の教授など、吾には不要だ。'),
      () => emperor.say_and_wait('いかなる時代であれ、智者は尊ばれるべきだ。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('私は、かつて走るのが好きでした……'),
      () => luna.say_and_wait('私たちの理想のためなら、私は退きません。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('美しき今この刻、血が躍る！'),
      () =>
        emperor.say_and_wait(
          '来い。英雄と勇者の足掻きを、見せてもらおう！！！',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait('私はまだ、続けられます！'),
        () =>
          luna.say_and_wait(
            'もう一周、追加しましょう。私の実力は、これだけではありません。',
          ),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '調子は『極めて』良い。訓練への心が『昂って』います！ ふふ……',
              ),
            () =>
              luna.say_and_wait('普段より調子が良い。良い走りができそうです。'),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('日々の積み重ねが大切です。'),
            () =>
              luna.say_and_wait(
                '訓練が終わったら、一緒に散歩でも……時間が空くなら、ですが。',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                '完璧な調子とは言えませんが、弱音は吐けません。',
              ),
            () => luna.say_and_wait('一歩ずつ行きましょう。私は耐えます。'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                '勝負服を着るのは身分の切り替えです。また皇帝にならねばなりません……',
              ),
            () =>
              luna.say_and_wait(
                'む……どうも調子が悪い。ですが、この疲れで弱音を吐くわけにはいきません。',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '困りました……身体が重い。それでも一日たりとも、無駄にしたくなくて……',
              ),
            () =>
              luna.say_and_wait(
                'いつもの調子が掴めません……このままではいけないとわかっているのに、それでも……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait('疲労が積もりつつある。'),
        () => emperor.say_and_wait('信じる必要はない。ただ従え。'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('出征の時は来た。'),
            () => emperor.say_and_wait('皇帝の名を、天まで響かせよ！'),
          );
          break;
        case 1:
          buffer.push(
            () => emperor.say_and_wait('帝国は、一磚一瓦より始まる。'),
            () =>
              emperor.say_and_wait('ん……？ 弄臣よ、笑話のひとつでも聞かせよ。'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('興が乗らぬ。'),
            () => emperor.say_and_wait('吾の興を殺すな。'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('ふん……'),
            () => emperor.say_and_wait('吾の視界から消えろ。'),
          );
          break;
        case -2:
          buffer.push(
            () => emperor.say_and_wait('弄臣よ、すべてを台無しにしたな？'),
            () => emperor.say_and_wait('吾に無礼を働くな。'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_gift_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'もう子供ではありません……！ えへへ、でも、ありがとう！',
        ),
      () =>
        luna.say_and_wait(
          '私たちは同じ理想を持つ『共犯』です。目標を果たすまで、止まってはいけません……すみません、少し重すぎましたか？',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'ほう？ 贈り物か？ ……ふん、欲しいものは、吾が自ら取る。',
        ),
      () => emperor.say_and_wait('貢ぎ物は宝庫へ積め。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '楽しい料理をたくさん作りましょう。ふふ、調理の過程も、愉しいものです。特に、あなたと一緒なら。',
        ),
      () =>
        luna.say_and_wait(
          '午前のうちに生徒会の仕事は済ませました。これで、集中できます。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('食物を成すにも、大いなる学がある。'),
      () => emperor.say_and_wait('汝に与える。畏れをもって食え。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '……恥ずかしいですね。大人になってから、昔は当たり前だった抱擁も、少し熱を帯びてしまいます。',
        ),
      () => luna.say_and_wait('すぅ……はぁ……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('……眠れ……'),
      () =>
        emperor.say_and_wait(
          '厄介なことがあれば、弄臣……吾は、起こすことを許す。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '遊び……？ 子供の頃、あなたはいつも私を抱えて遊んでくれましたね。',
        ),
      () =>
        luna.say_and_wait('遊ぶのは構いませんが、時間を無駄にはできません。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('慰みとしては、合格だ。'),
      () => emperor.say_and_wait('狩りに出る準備は、まだか？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '芽吹く意志は、熱情でしょうか、本能でしょうか。見えない力が、私を前へ促しています。',
        ),
      () =>
        luna.say_and_wait(
          `三女神よ、もし本当にエデンがあるのなら、私はすべての${luna.uma_sex_title}をそこへ導きます。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '聞こえる……失意と敗北の者が、ここに残した苦恨が。',
        ),
      () =>
        emperor.say_and_wait('帝国が崩れようとも、美景と古跡は残り続ける。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '光陰矢の如し、とはこのことでしょう。まだ幼い頃のように、シンボリ家で騒ぎ回っていた気がします。',
        ),
      () =>
        luna.say_and_wait(
          '何年も離れました。今からは、互いから遠く離れないほうがいい。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '吾が眠っているあいだ、吾の意志でこの離宮をきちんと整えたか？',
        ),
      () =>
        emperor.say_and_wait(
          '弄臣よ、吾に正しく仕えよ。さすれば、尽きせぬ栄を許してやろう。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'ふふふ……生姜がなければ、脱『ショウガ』の馬……ふふ、脱韁、です。ふふふふ！',
        ),
      () =>
        luna.say_and_wait(
          '実は味への要求は高くありません。ですが盛り付けが美しく、香りが良ければ、食欲も湧きます。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('日常の食事は、腹が満たされればよい。'),
      () => emperor.say_and_wait('食物に、要求はない。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '心を動かし性を忍ばせ、能わざるところを益す。釣りは、相当な学問ですね。',
        ),
      () =>
        luna.say_and_wait(
          '魚が釣れても、写真の記念だけにしてください。学園の財産ですから。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('コースでの狩りも、一種の釣りではないか？'),
      () => emperor.say_and_wait('水中の生霊よ……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '子供の頃を、少し思い出した気がします。あなたは、いつも私の傍にいましたね。',
        ),
      () =>
        luna.say_and_wait(
          '今は、並んで歩けます——見てください。背が伸びましたでしょう？',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('疆土を視るのも、皇帝の務めだ。'),
      () => emperor.say_and_wait('前方で何が騒がしい。弄臣よ、調べよ。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('む……もう一局！'),
      () =>
        luna.say_and_wait(
          `あれも、それも！ ${you.actual_name}、全部やってみましょう！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('騒がしい場所だ。'),
      () =>
        emperor.say_and_wait(
          '虚ろな遊戯が与える慰めも虚ろだ。真の愉しみが欲しければ、勇者と戦え。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'あなたが好きなら……いっそ、温泉ホテルを買い取りますか？',
        ),
      () => luna.say_and_wait('抽選する子たち全員に、幸運が訪れますように。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('確率学は、深奥な学問だ。'),
      () =>
        emperor.say_and_wait('温泉へ行くと決めたなら、なぜこの手段を取る？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('この機会に、少し休みましょう。'),
      () =>
        luna.say_and_wait(
          'あらゆる苦痛を、歌声として吐き出せたら、どれほど良いでしょう。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('劇場とは違う、別種の風味だ。'),
      () => emperor.say_and_wait('美しき音楽に耳を傾けるのは、極上の享受だ。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '良い作品でした。眠るつもりでしたが、筋が目を引きます。',
        ),
      () =>
        luna.say_and_wait(
          '今の映画は、ここまで本物なのですね。冷や汗をかきました。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('退屈だ。'),
      () => emperor.say_and_wait('次はない。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈祷の出目。0-1の小数、小さいほど良い
   */
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `神社は ${you.name} と ${luna.name} にとって、特別な場所ではない。`,
    );
    await era.printAndWait(
      `${you.name} は好運を祈る年を過ぎ、${luna.name} は常に実力で成績を取ってきた。`,
    );
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' が安堵したのは、',
      luna.get_colored_name(),
      ' が昔と変わらず、新しいものへの好奇心を尽きせずに持っていることだ。',
    ]);
    await era.printAndWait(
      `年に数度の祈福があれば、${luna.sex}の新鮮さは十分に保たれる。`,
    );
    await era.printAndWait(
      `${you.name} は ${luna.name} の傍らに立ち、${luna.sex}が『幸運』を示す籤を引くのを待った。`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('かなり良い啓示のようです。');
      await era.printAndWait([
        luna.get_colored_name(),
        ' は嬉しそうに吉籤を ',
        you.get_colored_name(),
        ' へ見せ、それから木に掛けた。',
      ]);
      await era.printAndWait(
        `${you.name} はふと思う。自分も吉籤を引いてみるか？`,
      );
      await era.printAndWait(
        `${luna.name} が喜んでくれればそれでいい。見えない前途の曲折に、わずかな希望を足すために。`,
      );
      await era.printAndWait(
        `どんな助力でもいい。ああ……三女神よ、${luna.name} をお守りください！`,
      );
    } else {
      await luna.say_and_wait('この先も、多くの妨げに遭いそうです。');
      await era.printAndWait([
        luna.get_colored_name(),
        ' は籤の文言を ',
        you.get_colored_name(),
        ' には見せず、丁寧にしまった。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' の顔色が、少し沈む。']);
      await era.printAndWait([you.get_colored_name(), ' は知っている。']);
      await era.printAndWait(
        '見えない前途の曲折に、神の呵責まで重ねることになれば……',
      );
      await era.printAndWait('少し、苛立つ。');
    }
  },
  /**
   * @param {CharaTalk} emperor 皇帝
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈祷の出目。0-1の小数、小さいほど良い
   */
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `神社は ${you.name} と ${emperor.name} にとって、特別な場所ではない。`,
    );
    await era.printAndWait(
      `${you.name} は好運を祈る年を過ぎ、${emperor.name} は常に実力で成績を取ってきた。`,
    );
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' が驚いたのは、',
      emperor.get_colored_name(),
      ' もルナと同じく、新しいものへの好奇心を尽きせずに持っていることだ。',
    ]);
    await era.printAndWait(
      `年に数度の祈福があれば、${emperor.sex}の新鮮さは十分に保たれる。`,
    );
    await era.printAndWait(
      `${you.name} は ${emperor.name} の傍らに立ち、${emperor.sex}が『幸運』を示す籤を引くのを待った。`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait('絶対の実力があれば、天さえも味方する。');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' は籤を後ろへ放り、',
        you.get_colored_name(),
        ' は慌てて受け取り、木に掛けた。',
      ]);
      await era.printAndWait(
        `${you.name} はふと思う。自分も吉籤を引いてみるか？`,
      );
      await era.printAndWait(
        `${emperor.name} が喜んでくれればそれでいい。見えない前途の曲折に、わずかな希望を足すために。`,
      );
      await era.printAndWait(
        `どんな助力でもいい。ああ……三女神よ、${emperor.name} をお守りください！`,
      );
    } else {
      await emperor.say_and_wait('面白い！ 吾は挑戦を好む。');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' は興味深げに手の籤を掲げ、高らかに笑った。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' の顔色が、少し沈む。']);
      await era.printAndWait([you.get_colored_name(), ' は知っている。']);
      await era.printAndWait(
        '見えない前途の曲折に、神の呵責まで重ねることになれば……',
      );
      await era.printAndWait('少し、苛立つ。');
    }
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `後輩がアイスをご馳走したいと騒いでいます……ふふ、時間を作って${luna.sex}と食べに行かねば。`,
        ),
      () =>
        luna.say_and_wait(
          '最近、食欲の旺盛な子が多い。食材の仕入れ量を、どう増やすか計算しなければ。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '征途の大きな愉しみは、足元の土地が育んだ糧を味わうことだ。',
        ),
      () => emperor.say_and_wait('美食と美酒を出せ！'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('悪夢を見たら教えてください。夜の番をしますから。'),
      () =>
        luna.say_and_wait(
          '沈んだときは『紅葉を賞で』、心を『防風』する……ふふ、傑作です。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '弄臣よ、愛想を尽くすと決めたなら、きちんと吾を愉しませよ。',
        ),
      () =>
        emperor.say_and_wait(
          '……ふん。爪先立ちすらできぬなら、随侍する必要もない。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '今の店は、こんなに流行っているのですか？ 子供たちが惹かれるのも無理はありません。',
        ),
      () => luna.say_and_wait('あちらが賑やかですね。見に行きましょうか？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('吾は活力ある街を好む。'),
      () => emperor.say_and_wait('臣民が和やかだ。良い。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_good_end GEかどうか（シンボリルドルフ形態）
   * @param {boolean} i_emperor 皇帝形態かどうか（でなければルナ）
   */
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait(
        '太陽と月が、これからもあなたに寄り添いますように',
      );
      await chara17.say_and_wait(
        '……ですが、皇帝を、そしてルナを、忘れないでください',
      );
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' は振り返り、震えている',
      ]);
      await chara17.say_and_wait('気をつけて……また会いましょう（すすり泣き）');
    } else if (i_emperor) {
      await chara17.say_and_wait('弄臣よ、無駄なことを何度繰り返す？');
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' は唇をわずかに開くが、声は出ない',
      ]);
      await chara17.say_and_wait('——！');
      await chara17.say_and_wait('——行かないで……');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' はすすり泣いている。だが ',
        you.get_colored_name(),
        ' はすでに遠ざかっている……',
      ]);
      await chara17.say_and_wait(
        '約束したでしょう……何があっても離れない、と——',
      );
    }
  },
};
