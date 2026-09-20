/**
 * @file 三女神の祈り - システム提示
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

const { money_color } = require('#/data/color-const');

module.exports = {
  /**
   * 三女神像。同行キャラの気性ごとの反応
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {number} chara_chara 気性。淫紋で歪められている場合あり
   * @returns {TextContent}
   */
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          '隣の ',
          chara.get_colored_name(),
          ' は自信に満ちた笑みを浮かべ、',
          you.get_colored_name(),
          ' へ信頼のまなざしを向けている。',
        ];
      case -1:
      case 0:
      case 2:
        return [
          '隣の ',
          chara.get_colored_name(),
          ' は三女神像をじっと見つめたあと、視線を ',
          you.get_colored_name(),
          ' へ戻し、',
          you.get_colored_name(),
          ' の次の行動を待っているようだ。',
        ];
      case -3:
      case -2:
        return [
          '隣の ',
          chara.get_colored_name(),
          ' は静かに尻尾を揺らし、',
          you.get_colored_name(),
          ' の次の動きを待っている。',
        ];
    }
  },
  /**
   * 三女神像に到着。祈りの前
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed すでに祈ったか
   * @param {TextContent} chara_react 同行キャラの反応
   */
  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('三女神像の上から、謎めいた気配が漂っている……');
        print([
          '誰かが ',
          you.get_colored_name(),
          ' と ',
          chara.get_colored_name(),
          ' を見つめている……',
        ]);
      } else {
        print([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' と一緒に三女神像の前へ来た。',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('三女神像の上から、謎めいた気配が漂っている……');
      print(['誰かが ', you.get_colored_name(), ' を見つめている……']);
    } else {
      print([you.get_colored_name(), ' はひとりで三女神像の前へ来た。']);
      print('荘厳な三女神像の肩から、瓶の水が絶え間なく流れ落ちている。');
      god.say_as_unknown('……');
    }
  },
  bt_pray_honour_buff: '有名になれるよう祈る（1,000 名声）',
  bt_pray_money_buff: '裕福になれるよう祈る（500 名声）',
  bt_pray_money: '今すぐ金が入るよう祈る（50+ 名声）',
  bt_pray_your_power: 'もっと強くなれるよう祈る（200 名声）',
  get_bt_pray_over_limit: (name) =>
    `${name} が限界を超えるよう祈る（50-500 名声）`,
  bt_pray_self_over_limit: '限界を超えるよう祈る（50-500 名声）',
  get_bt_pray_heal: (name) => `${name} が健康を取り戻すよう祈る（800 名声）`,
  bt_pray_self_heal: '健康を取り戻すよう祈る（800 名声）',
  /**
   * 名声ボーナスを祈る
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_honour_buff(you, uma, finish_cb) {
    print(
      '（これが、自分が望むものなのか？）\n頭の中に、ふとそんな思いがよぎる……',
    );
    printButton(
      `そうだ（名声獲得+${get('global:声望加成')}%→${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('そうではないかもしれない……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait('人々に囲まれ、称賛される光景を思い浮かべる……');
      await finish_cb();
      println();
      const honour = get('flag:当前声望');
      if (honour >= 2000) {
        await printAndWait([
          you.get_colored_name(),
          ' はスマホを開き、名声が日本を出て世界へ届いていないことを嘆いた。',
        ]);
      } else if (honour >= 1000) {
        await printAndWait([
          you.get_colored_name(),
          ' はスマホを開き、名声が優秀な生徒を直接連れてきてはくれないことを嘆いた。',
        ]);
      } else if (honour >= 500) {
        await printAndWait([
          you.get_colored_name(),
          ' はスマホを開き、親友と家族以外に本気で自分を見てくれる人が少ない事実を嘆いた。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' はスマホを開き、親友と家族以外の連絡先がほとんどないことを嘆いた。',
        ]);
      }
      await printAndWait(
        'そう思っていると、見知らぬ相手からメッセージが届く。',
      );
      await printAndWait([
        you.get_colored_name(),
        ' がどう',
        uma,
        'を育てているかに興味があり、育てた',
        uma,
        'の成績を見たい、という内容だった。',
      ]);
      await printAndWait(
        'その後、以前より多くの、同じような連絡が届くようになった……',
      );
    }
    return ret;
  },
  /**
   * 金銭ボーナスを祈る
   * @param {CharaTalk} you プレイヤー
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_money_buff(you, finish_cb) {
    print(
      '（これが、自分が望むものなのか？）\n頭の中に、ふとそんな思いがよぎる……',
    );
    printButton(
      `そうだ（ウマコイン獲得+${get('global:金钱加成')}%→${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('そうではないかもしれない……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' は貯金箱が日に日に重くなっていく様子を思い浮かべる……',
      ]);
      await finish_cb();
      println();
      await printAndWait(
        'なぜか、給料と歩合の数字が頭に浮かび、以前より少し多い気がした。',
      );
      await printAndWait('トレセンの給料はもともと高い。錯覚だろう……');
    }
    return ret;
  },
  /**
   * 金銭を祈る
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_money(you, uma, finish_cb) {
    print(
      '（では、だいたいいくらくらい欲しい？）\n頭の中に、突然そんな問いが浮かぶ……',
    );
    const honour = get('flag:当前声望');
    printButton('250 ウマコインでいい……（50 名声）', 1, {
      disabled: honour <= 50,
    });
    printButton('500 ウマコインでいい……（100 名声）', 2, {
      disabled: honour <= 100,
    });
    printButton('750 ウマコインでいい……（150 名声）', 3, {
      disabled: honour <= 150,
    });
    printButton('1,000 ウマコインでいい……（200 名声）', 4, {
      disabled: honour <= 200,
    });
    printButton('やめておく', 99);
    const ret = await input();
    switch (ret) {
      case 1:
      case 2:
        await printAndWait([
          you.get_colored_name(),
          ' は、手にした金で',
          uma,
          'にトレーニング機材を買う光景を思い浮かべる……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'ほどなく、',
          you.get_colored_name(),
          ' は学園から連絡を受けた。指導の仕方が怪我につながりかねない、とのことだった。',
        ]);
        await printAndWait([
          '続けて ',
          (250 * ret).toString(),
          ' ウマコインが送られ、トレーニング方針を改めるよう求められた……',
        ]);
        break;
      case 3:
      case 4:
        await printAndWait([
          you.get_colored_name(),
          ' は、金の海を泳ぐ自分を思い浮かべる……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'ほどなく、',
          you.get_colored_name(),
          ' は学園から特別手当として ',
          (250 * ret).toString(),
          ' ウマコインを受け取った。',
        ]);
        await printAndWait([
          'ただし、トレセン学園のトレーナーとして、これ以上おかしな噂を立てないこと、が条件らしい……',
        ]);
    }
    return ret;
  },
  /**
   * 自分の強化を祈る
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} god 三女神のうち一人
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {boolean[]} disabled_list その能力が上限か
   * @param {number} random_select ランダム選択時に実際に選ばれた能力
   * @param {function:Promise} pray_cb 自分が強くなったあとの共通反応
   * @param {function:Promise} finish_cb 祈りのあとの反応
   * @returns {Promise<[number,number]>} 一つ目は選択、二つ目は実際の能力
   */
  async pray_your_power(
    you,
    god,
    uma,
    disabled_list,
    random_select,
    pray_cb,
    finish_cb,
  ) {
    print('（いちばん伸ばしたいのは、どこだろう？）');
    print('頭の中に、そんな疑問が浮かぶ……');
    printButton('スピード（+80）', 0, { disabled: disabled_list[0] });
    printButton('スタミナ（+80）', 1, { disabled: disabled_list[1] });
    printButton('パワー（+80）', 2, { disabled: disabled_list[2] });
    printButton('根性（+80）', 3, { disabled: disabled_list[3] });
    printButton('賢さ（+80）', 4, { disabled: disabled_list[4] });
    printButton('どれもまだ足りない……（ランダム能力+100）', 5);
    printButton('もう伸ばすところはない', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] <= 5) {
      switch (ret[0]) {
        // スピード
        case 0:
          await printAndWait([
            'ジョギングする担当の',
            uma,
            'と並走しながら指導する光景を思い浮かべる……',
          ]);
          break;
        // スタミナ
        case 1:
          await printAndWait([
            '倦まず怠らず',
            uma,
            'たちを教える光景を思い浮かべる……',
          ]);
          break;
        // パワー
        case 2:
          await printAndWait([
            '担当の',
            uma,
            'が綱引きで優勝するよう助ける光景を思い浮かべる……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '声を枯らして担当の',
            uma,
            'を応援する自分を思い浮かべる……',
          ]);
          break;
        // 賢さ
        case 4:
          await printAndWait([
            '担当の',
            uma,
            'のために、完璧なトレーニング計画を次々と立てる光景を思い浮かべる……',
          ]);
          break;
        // ランダム
        case 5:
          await printAndWait(['担当の', uma, 'に慰められる光景が頭に浮かぶ……']);
          ret[1] = random_select;
      }
      await pray_cb();
      println();
      await finish_cb();
      switch (ret[1]) {
        // スピード
        case 0:
          await printAndWait([
            '温かい余韻が頭に残ったまま、',
            you.get_colored_name(),
            ' は体が軽くなったように感じた……',
          ]);
          break;
        // スタミナ
        case 1:
          await printAndWait([
            '温かい余韻が頭に残ったまま、',
            you.get_colored_name(),
            ' は呼吸が穏やかになったように感じた……',
          ]);
          break;
        // パワー
        case 2:
          await printAndWait([
            '温かい余韻が頭に残ったまま、',
            you.get_colored_name(),
            ' は筋肉が充実したように感じた……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '温かい余韻が頭に残ったまま、',
            you.get_colored_name(),
            ' は胸の奥に熱が湧き上がるのを感じた……',
          ]);
          break;
        // 賢さ
        case 4:
          await printAndWait([
            '温かい余韻が頭に残ったまま、',
            you.get_colored_name(),
            ' は頭が異常なほど澄んだように感じた……',
          ]);
      }
    } else {
      await god.say_as_unknown_and_wait('これからも、頑張れ……');
      await printAndWait('そんな声が聞こえた気がした。');
      println();
      await finish_cb();
      await printAndWait('三女神像は、いまも静かに立っている……');
    }
    return ret;
  },
  /**
   * 限界突破を祈る
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {string} limited 上限に達した能力の数
   * @param {string} cost 名声消費
   */
  async pray_over_limit(chara, you, uma, limited, cost) {
    print([
      '（',
      limited,
      ' 項目もの能力が極まった ',
      chara.get_colored_name(),
      ' に、さらに限界を求めるのか？）',
      { isBr: 1 },
      '頭の中に、そんな問いが浮かぶ……',
    ]);
    printButton(`同意する（${cost} 名声、トレーニング補正-10%）`, 1);
    printButton('もう少し、歩みを緩めてもいい', 2);
    const ret = await input();
    if (ret === 1) {
      if (chara.id > 0) {
        await printAndWait([
          '隣の',
          chara.uma_sex_title,
          'が前人を超え、レースで記録を塗り替える光景を思い浮かべる……',
        ]);
        await printAndWait([
          '祈りを終え、隣の ',
          chara.get_colored_name(),
          ' と、ほぼ同時に目を開けた。',
        ]);
        println();
        await printAndWait([
          '目を開けた ',
          you.get_colored_name(),
          ' は、隣の ',
          chara.get_colored_name(),
          ' の一挙手一投足に、新しい伸びしろをはっきり感じ取った！',
        ]);
      } else {
        await printAndWait(
          '夜更かしして、新しいトレーニング案を次々と書き上げる自分を思い浮かべる……',
        );
        await printAndWait([
          '暗闇のなか、かすかな光がゆらぎ、ゆっくりと ',
          you.get_colored_name(),
          ' の体へ流れ込んだ！',
        ]);
        println();
        await printAndWait('祈りを終え、ゆっくりと目を開ける……');
        await printAndWait([
          '温かい余韻が頭に残ったまま、',
          you.get_colored_name(),
          ' は、自分がさらに成長できると確信した。',
        ]);
      }
    } else if (chara.id > 0) {
      await printAndWait([
        '隣の ',
        chara.get_colored_name(),
        ' が毎日着実にトレーニングする光景を思い出す……',
      ]);
      await printAndWait([
        '祈りを終え、',
        you.get_colored_name(),
        ' は隣の ',
        chara.get_colored_name(),
        ' と、ほぼ同時に目を開けた。',
      ]);
    } else {
      await printAndWait([
        '自分と',
        uma,
        'たちが過ごした数えきれない日々を思い出す……',
      ]);
      await printAndWait('祈りを終え、ゆっくりと目を開けた。');
    }
    return ret;
  },
  /**
   * 健康回復を祈る
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {TextContent} chara_react 同行キャラの反応
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_heal(chara, god, you, uma, chara_react, finish_cb) {
    print([
      '（やはり、いちばん願うのは……）',
      { isBr: true },
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' の健康を案じている……',
    ]);
    printButton('祈りが、役に立つなら……', 1);
    printButton('祈りより、ほかの努力が要るだろう', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        chara.get_colored_name(),
        ' が再び健康で、活気に満ちた姿を思い浮かべる……',
      ]);
      await printAndWait([
        '祈りを終え、',
        you.get_colored_name(),
        ' は目を開けた。',
      ]);
      println();
      if (chara.id > 0) {
        await printAndWait([
          '活気に満ちた体を感じ、',
          you.get_colored_name(),
          ' は自分が三女神像の前へ来た理由を、少し疑問に思った。',
        ]);
      } else {
        await printAndWait(chara_react);
        println();
        await printAndWait([
          'さっきまで活気に満ちた ',
          chara.get_colored_name(),
          ' を連れて三女神像の前へ来た ',
          you.get_colored_name(),
          ' は、いったい何をしに来たのだろう？',
        ]);
        await printAndWait([you.get_colored_name(), ' は次の行動を考える。']);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' が休息を経て、だんだん回復していく姿を思い浮かべる……',
      ]);
      println();
      await god.say_as_unknown_and_wait('お前なら……できる……');
      await printAndWait('そんな声が聞こえた気がした。');
      println();
      await finish_cb();
      println();
      await printAndWait('三女神像は、いまも静かに立っている……');
    }
    return ret;
  },
  /**
   * 健康回復を祈るが、もともと健康
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      '女神さまが、これからも ',
      chara.get_colored_name(),
      ' の健康を守ってくださるよう祈る……',
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait('三女神像は、いまも静かに立っている……');
  },
  /**
   * 祈りの前の共通行動
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   */
  common_start_pray(chara, you) {
    if (chara.id > 0) {
      print([
        you.get_colored_name(),
        ' の指示で、',
        chara.get_colored_name(),
        ' も目を閉じ、三女神像の前で静かに祈った……',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' はひとり、三女神像の前で静かに祈った……',
      ]);
    }
  },
  /**
   * 祈りのあとの共通反応
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   */
  async common_finish_pray(chara, you) {
    if (chara.id > 0) {
      await printAndWait([
        '祈りを終え、',
        you.get_colored_name(),
        ' は隣の ',
        chara.get_colored_name(),
        ' と、ほぼ同時に目を開けた。',
      ]);
    } else {
      await printAndWait([
        '祈りを終え、',
        you.get_colored_name(),
        ' はゆっくりと目を開けた。',
      ]);
    }
  },
  /**
   * 自分が強くなったあとの共通反応
   * @param {CharaTalk} you プレイヤー
   */
  async common_pray_your_power(you) {
    await printAndWait([
      '暗闇のなか、かすかな光がゆらぎ、ゆっくりと ',
      you.get_colored_name(),
      ' の体へ流れ込んだ！',
    ]);
  },
  /** 選択を諦めたあとに平和を祈る */
  async common_pray_peace() {
    await printAndWait('トレセン学園の平安を祈る……');
  },
  /**
   * 三女神像を離れる
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed すでに祈ったか
   */
  async leave(chara, you, has_prayed) {
    if (chara.id > 0) {
      if (has_prayed) {
        await printAndWait([
          chara.get_colored_name(),
          ' と ',
          you.get_colored_name(),
          ' は一緒に三女神像を離れた。',
        ]);
      } else {
        await printAndWait([
          '三女神像に軽く礼拝してから、',
          chara.get_colored_name(),
          ' と ',
          you.get_colored_name(),
          ' は一緒に三女神像を離れた。',
        ]);
      }
    } else if (has_prayed) {
      await printAndWait([
        you.get_colored_name(),
        ' は振り返り、トレーナールームのほうへ向かった。',
      ]);
    } else {
      await printAndWait([
        '三女神像に軽く礼拝してから、',
        you.get_colored_name(),
        ' は振り返り、トレーナールームのほうへ向かった。',
      ]);
    }
  },
  /**
   * 三女神像の前へ来たが、三女神はすでに受肉している
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} god 受肉した女神のひとり
   */
  async start_with_no_god(you, god) {
    await printAndWait('三女神像は静かに立っている……');
    if (typeof god === 'object') {
      await printAndWait([
        you.get_colored_name(),
        ' は突然、背後から声をかけられた……',
      ]);
      await printAndWait([
        '振り返ると、いつのまにか ',
        god.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の後ろに立っていた……',
      ]);
    }
  },
  /**
   * 以下は三女神受肉後、肉体の三女神へ祈る文
   * <br>受肉後は女神像へ行かなくてよい
   */
  bt_pray: '女神に祈る',
  pray_select: '何を祈る？',
  /**
   * 肉体の三女神へ名声ボーナスを祈る
   * @returns {Promise<number>}
   */
  async handle_pray_honour_buff() {
    print('本当に？');
    printButton(
      `確定（名声獲得+${get('global:声望加成')}%→${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('やめておく', 2);
    return await input();
  },
  /**
   * 肉体の三女神へ金銭ボーナスを祈る
   * @returns {Promise<number>}
   */
  async handle_pray_money_buff() {
    print('本当に？');
    printButton(
      `確定（ウマコイン獲得+${get('global:金钱加成')}%→${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('やめておく', 2);
    return await input();
  },
  /**
   * 肉体の三女神へ強化を祈る
   * @param {boolean[]} disabled_list その能力が上限か
   * @param {number} random_select ランダム選択時に実際に選ばれた能力
   * @returns {Promise<[number,number]>}
   */
  async handle_pray_your_power(disabled_list, random_select) {
    print('どの能力が欲しい？');
    printButton('スピード（+80）', 0, { disabled: disabled_list[0] });
    printButton('スタミナ（+80）', 1, { disabled: disabled_list[1] });
    printButton('パワー（+80）', 2, { disabled: disabled_list[2] });
    printButton('根性（+80）', 3, { disabled: disabled_list[3] });
    printButton('賢さ（+80）', 4, { disabled: disabled_list[4] });
    printButton('どれでもいい！（ランダム能力+100）', 5);
    printButton('やめておく', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },
  select_target: '対象を選んでください',
  no_targets: '条件を満たす対象がいない',
  get_target_entry_over_limit: (name, cost) =>
    `${name}（-${cost} 名声、トレーニング補正-10%）`,
  get_target_entry_heal: (name, cost) => `${name}（${cost} 名声）`,
  /**
   * 限界突破を祈る
   * @param {CharaTalk} chara
   */
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), ' は限界を超えたようだ']);
  },
  /**
   * 祈りの終わり
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed 祈りを行ったか
   */
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の願いを叶えた',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' は ',
        god.get_colored_name(),
        ' への祈りを諦めた……',
      ]);
    }
  },
  /**
   * 三女神受肉後、借金は金運の祈りになる
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   */
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('名声が足りない');
    }
    print('いくらのウマコインが欲しい？');
    printButton('400 ウマコイン（50 名声）', 1);
    printButton('800 ウマコイン（100 名声）', 2, { disabled: honour < 100 });
    printButton('1200 ウマコイン（150 名声）', 2, { disabled: honour < 150 });
    printButton('1600 ウマコイン（200 名声）', 2, { disabled: honour < 200 });
    printButton('やめておく', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        ' は ',
        god.get_colored_name(),
        ' へウマコインを祈るのを諦めた……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' はトレセンから追加手当 ',
        { color: money_color, content: (400 * ret).toLocaleString() },
        ' ウマコインの通知を受け取った……ただし、その文面には見下すようなニュアンスがあった……',
      ]);
    }
    return ret;
  },
};
