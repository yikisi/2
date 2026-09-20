/**
 * @file メジロの呼び声 - システム提示
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  // 伴侣被呼唤状态下的提示
  calling_tip: 'メジロが呼んでいる……',
  /**
   * 被呼唤状态下 5% 概率会替换外出界面所有按钮都变成目白城，并且修改按钮内容，就是该数组的内容
   * @type {string[]}
   */
  calling_buttons: ['メ', 'ジ', 'ロ', 'が', '呼', 'ぶ'],
  // 带了不是麦吉罗呼唤对象的伴侣
  calling_not_chara_tip: 'メジロはこの人を呼んではいない',
  // 带了三女神
  calling_god_tip: 'メジロは三女神の下ではないかもしれないが、その上でもない',
  // 这周去过目白城了
  come_limited: '今週はもうメジロシティを見つけられない',
  /**
   * 进入目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と一緒にメジロシティへ入った……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} location
   * @returns {TextContent}
   */
  get_header: (chara, location) => [
    chara.get_colored_name(),
    ' と ',
    location,
    ' にいる',
  ],

  /**
   * 麦吉罗的的呼唤 - 迷雾
   */

  /** 进入目白城后提示处于迷雾探索 */
  async misty_notify() {
    await printAndWait('……それから霧が、ふたりを吞み込んだ……');
  },
  /**
   * 探索移动阶段，提示性欲状态
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @param {number} progress 离开进度
   * @returns {TextContent[]}
   */
  get_misty_info(chara, you, progress) {
    const ret = [];
    const lust = Math.max(get('base:0:性欲'), get(`base:${chara.id}:性欲`));
    ret.push([
      you.get_colored_name(),
      ' と ',
      chara.get_colored_name(),
      ' は、霧に包まれた街にいる……',
    ]);
    // 情动
    if (lust >= 7500) {
      ret.push(
        'まわりは対になって欲に溺れる人々。奔放な喘ぎ、肌がぶつかる音、飛び散る水音が空間を満たしている。',
      );
    } else if (lust >= 5000) {
      // 不安
      ret.push(
        'まわりは顔のぼやけた恋人たち。交わっては揺れ、低い嬌声と水音が絶えない。',
      );
    } else if (lust >= 4000) {
      ret.push(
        'まわりは顔のぼやけた伴侶たち。撫で合い、戯れ、時おり喘ぎと密な水音が聞こえる。',
      );
    } else if (lust >= 3000) {
      ret.push(
        'まわりは対になった伴侶たち。抱き合い、口づけし、時おり小さな情話が聞こえる。',
      );
    } else if (lust >= 2000) {
      ret.push('まわりは影のような旅人の対。時おりぼやけた囁きが聞こえる。');
    }
    if (progress === 1) {
      ret.push('前方の霧が薄れ、明るく整った街区が見える。');
    } else if (progress >= 0.66) {
      ret.push(
        '前方の霧はいくらか薄くなり、雲の切れ間から日が点々と差している。',
      );
    } else if (progress >= 0.33) {
      ret.push('来た道はもう見えない。前へ進むしかなさそうだ。');
    } else if (progress === 0) {
      ret.push(
        '一本の大道が前方へ真っすぐ伸びているが、どこへ続くかは分からない。来た道は灰色の靄だけだ。',
      );
    }
    return ret;
  },
  // 以下是探索选项
  bt_slow_forward: '慎重に進む（低リスク、性欲+++、体力--）',
  bt_normal_forward: '普通に進む（中リスク、性欲++、体力--）',
  bt_fast_forward: '大胆に進む（高リスク、性欲+、体力--）',
  bt_slow_search: '丁寧に探す（低リスク、性欲++、体力---）',
  bt_normal_search: '普通に探す（中リスク、性欲++、体力--）',
  bt_fast_search: 'ざっと探す（高リスク、性欲++、体力-）',
  bt_rest: '止まって休む（性欲++、体力+）',
  bt_surrender: '抵抗を捨てる（一心同体❤️）',
  /**
   * 性欲爆表，离开失败
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @returns {Promise<number[]>}
   */
  async fail_to_escape(chara, you) {
    const ret = [];
    await printAndWait([
      you.get_colored_name(),
      ' と ',
      chara.get_colored_name(),
      ' は霧に完全に囲まれた……',
    ]);
    await printAndWait(
      '目に入るのは霧と、狂ったように交わる恋人の対だけ。その顔には、どこかふたりの影がある。',
    );
    await printAndWait(
      '性愛の音がほかのすべてを覆い、吸う空気は淫らな匂いだらけだ……',
    );
    // 焦躁
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        ' は脳内で血が轟くのを聞き、自制は綺想の攻めに崩れ落ちた……',
      ]);
      await printAndWait([
        '隣の ',
        chara.get_colored_name(),
        ' も同じように頬を染め、脚を締めている。',
        you.get_colored_name(),
        ' はついに、思念に身を任せた……',
      ]);
    } else {
      printButton('そのなかへ沈む（「恩寵」+10）', 1);
      printButton('冷静になろうとする（体力 & 気力+50%）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' を見た。その瞳には暗い波が揺れている……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は自ら欲の泥へ足を踏み入れ、',
        ]);
        await printAndWait([chara.sex, 'と一緒に落ち、落ちていった……']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' を見た。その瞳には暗い波が揺れている……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は慌てて欲の泥から脚を上げようとしたが、',
        ]);
        await printAndWait('踏み込むほど沈み、ついには落ちた……');
      }
    }
    return ret;
  },
  /**
   * 离开目白城
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @param {string|false} vehicle 乗物。false なら複数用乗物なし
   * @param {boolean} success 成功したか
   * @returns {Promise<number[]>}
   */
  async leave_misty(chara, you, vehicle, success) {
    if (success) {
      if (typeof vehicle === 'string') {
        await printAndWait([
          you.get_colored_name(),
          ' と ',
          chara.get_colored_name(),
          ' は霧を抜け、',
          vehicle,
          'のそばにいた。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' と ',
          chara.get_colored_name(),
          ' は霧を抜け、バスのそばにいた。',
        ]);
      }
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' が意識を取り戻すと、メジロシティの外の長椅子にいた。隣では ',
        chara.get_colored_name(),
        ' が眠っている。',
      ]);
      await printAndWait([
        chara.sex,
        'が目覚めたあと、ふたりはどこからともなく聞こえる満ち足りた笑い声のなか、メジロシティを離れた……',
      ]);
      await printAndWait([
        '……だがそれ以来、',
        chara.get_colored_name(),
        ' は時おり、有るか無きかの囁きを耳にする……',
      ]);
    }
  },
  /** 恩宠自然扣光之后的提醒 */
  async notify_misty() {
    await printAndWait('メジロシティは再び霧に包まれた……');
  },
  /**
   * 被呼唤者 San 值掉光的提醒
   * @param chara
   * @returns {Promise<void>}
   */
  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' は耳元の囁きから、メジロの呼び声を聞いた……',
    ]);
  },

  /**
   * 麦吉罗的的呼唤 - 街道
   */
  money_header_template: 'いまの「恩寵」：%MONEY%',
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      ' と ',
      chara.get_colored_name(),
      ' は、きれいな通りに立っている。',
    ]);
    print('明るい陽の下、対になった人々が街を行き交う。');
  },
  city_change_target_template:
    'サービスを受けるキャラを切り替える。いまは %NAME%',
  city_upgrade_max: '（MAX）',
  city_leave: '立ち去る',
  city_bt_beauty_salon: '「美容院」',
  city_bs_welcome: 'いらっしゃいませ！ 美容を受けるのはどちら様ですか？',
  city_bs_height_up_template: '%HEIGHT%cm まで高くする（10「恩寵」）',
  city_bs_height_up_limit_tip: 'これ以上は高くできない',
  city_bs_height_down_template: '%HEIGHT%cm まで低くする（10「恩寵」）',
  city_bs_height_down_limit_tip: 'これ以上は低くできない',
  city_bs_boob_up_template: '胸を大きくする（5「恩寵」、いまは %CUP% Cup）',
  city_bs_boob_up_limit_tip: '［爆乳］より上にはできない',
  city_bs_boob_down_template: '胸を小さくする（5「恩寵」、いまは %CUP% Cup）',
  city_bs_boob_down_limit_tip: 'すでに絶壁だ',
  city_bs_nipple_deeper: '乳首の色素沈着を増やす（5「恩寵」）',
  city_bs_nipple_shallower: '乳首の色素沈着を消す（5「恩寵」）',
  city_bs_clean_milk: '［母乳体質］を消す（30「恩寵」）',
  city_bs_clean_milk_confirm:
    'あなたが施した小さな改変も消えます。消しますか？',
  city_bs_get_milk: '［母乳体質］を得る（30「恩寵」）',
  city_bs_re_virgin: '処女を戻す（20「恩寵」）',
  city_bs_penis_bigger_man_template:
    'ペニスを大きくする（10「恩寵」、いまは %SIZE%）',
  city_bs_penis_bigger_woman_template:
    'ふたなり化する（10「恩寵」、いまは %SIZE%）',
  city_bs_penis_bigger_limit_tip: 'これ以上は大きくできない',
  city_bs_penis_smaller_man_template:
    'ペニスを小さくする（10「恩寵」、いまは %SIZE%）',
  city_bs_penis_smaller_futa_template:
    '女体化する（15「恩寵」、いまは %SIZE%）',
  city_bs_penis_smaller_male_limit_tip: 'これ以上は小さくできない',
  city_bs_penis_smaller_female_limit_tip: 'もともと何もない',
  city_bs_ero_deeper: '性器の色素沈着を増やす（5「恩寵」）',
  city_bs_ero_deeper_limit_tip: 'すでに浅黒い性器だ',
  city_bs_ero_shallower: '性器の色素沈着を薄くする（5「恩寵」）',
  city_bs_ero_shallower_limit_tip: 'すでに桃色の性器だ',
  city_bs_skin_shallower_template: '美白（5「恩寵」、いまは %SKIN%）',
  city_bs_skin_shallower_limit_tip: '肌はこれ以上白くできない',
  city_bs_skin_deeper_template: '日焼け（5「恩寵」、いまは %SKIN%）',
  city_bs_skin_deeper_limit_tip: '肌はこれ以上濃くできない',
  city_bs_hair_color: '染髪',
  city_bs_hair_color_confirm: '何色に染める？',
  city_bs_hair_color_current_suffix: '（いまの髪色）',
  city_bs_uma_template: '%UMA%へ変える（100「恩寵」、不可逆！）',
  city_bs_body_hair_color: '体毛の色を変える（1「恩寵」）',
  city_bs_body_hair_color_current_suffix: '（いまの毛色）',
  city_bs_change_done: 'はい、力を抜いてください。すぐ終わります～',
  city_bs_bye: 'またお会いしましょう～',
  city_bt_hospital: '「病院」',
  /**
   * 目白城医院的开场白
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      'こちらはメジロシティ病院です！ 頭寒脳熱、腰痛背痛、手の震え、胸の痛み、脚の震え、足のしびれ、すべて——',
    );
    await waiter_say_cb('……完治は保証しませんよ……');
    await waiter_say_cb('冗談です。何かお手伝いできることは？');
  },
  city_hp_hp_medicine_template: '「大力丸」%PRICE%',
  city_hp_hp_medicine_price_template:
    '（%PRICE%「恩寵」：追加体力上限 %NOW% → %NEXT%）',
  city_hp_tp_medicine_template: '「醒神膏」%PRICE%',
  city_hp_tp_medicine_price_template:
    '（%PRICE%「恩寵」：追加気力上限 %NOW% → %NEXT%）',
  city_hp_b_scan: 'エコー（-10「恩寵」）',
  /**
   * 目白城医院买药
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {string} medicine 买的药
   */
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['はい、', medicine, ' を一つ～']);
    await waiter_say_cb('一週間後に効きますよ～');
  },
  /**
   * 目白城做 B超
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {CharaTalk} father 孩子的父亲
   * @param {CharaTalk} you プレイヤー
   */
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb(
      'おめでとうございます。お子さんの成長を見てみましょう……',
    );
    await printAndWait(
      [
        '＜器械の画面に子供の映像が映る。',
        you.get_colored_name(),
        ' は白黒の画面から、なぜか ',
        father.get_colored_name(),
        ' の顔を見た＞',
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('かわいい！ どなたかに似ている気がしますか？');
  },
  city_bt_massage: '「マッサージ店」',
  city_massage_welcome: 'こちらは精油マッサージです！ 少し休みませんか？',
  city_mg_get_talent: '部位ひとつの性能力を強化（60「恩寵」）',
  city_mg_get_talent_limit_tip: '性能力を上げられる部位はもうない',
  city_mg_trained_talent_template: '最高感度まで調教できる部位を増やす%PRICE%',
  city_mg_trained_talent_price_template:
    '（25「恩寵」：%NOW% 部位 → %NEXT% 部位）',
  /**
   * 目白城按摩店，得到名器特性
   * @param {CharaTalk} target
   * @param {PrintedSpan} talent
   * @returns {TextContent}
   */
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    ' は ',
    talent,
    ' を得た！',
  ],
  /**
   * 目白城按摩店，提高调教度
   * @param {CharaTalk} target
   * @returns {TextContent}
   */
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    ' はマッサージのあと、体がより滑らかになった……',
  ],
  city_mg_bye: 'どうか、良い旅を～',
  city_bt_library: '「図書館」',
  city_library_welcome:
    'メジロシティ立大図書館へようこそ！ どの本をお借りしますか？',
  // プレイヤー学鋼の意志
  city_lb_self_get_im_template:
    '《桐生院秘伝の調馬術》（10「恩寵」→ %NAME% が［鋼の意志］を習得）',
  // プレイヤー忘鋼の意志
  city_lb_self_rm_im_template:
    '《私と私のウマ娘の妻》（5「恩寵」→ %NAME% が［鋼の意志］を忘れる）',
  // 同伴学鋼の意志
  city_lb_chara_get_im_template:
    '《神聖なる一歩半》（5「恩寵」→ %NAME% が［鋼の意志］を習得）',
  // 同伴忘鋼の意志
  city_lb_chara_rm_im_template:
    '《鈍い男性でも一挙に落とせる！ 恋愛コースの極意》（10「恩寵」→ %NAME% が［鋼の意志］を忘れる）',
  // プレイヤー提高性技等级上限
  city_lb_update_abl_limit: '《性技向上入門——色欲の環出版社刊》（66「恩寵」）',
  /**
   * 目白城图书馆看书的处理
   * @param {CharaTalk} target 学習対象
   * @param {boolean} get_or_rm 習得 or 遺忘 鋼の意志
   * @param {PrintedSpan} iron_mind 鋼の意志
   * @param {boolean} unlimit 技能上限を上げる本を読んだか
   * @returns {Promise<void>}
   */
  async handle_city_library(target, get_or_rm, iron_mind, unlimit) {
    if (unlimit) {
      await printAndWait('……何を読んだ？');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        ' は ',
        iron_mind,
        ' を習得した！',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        ' は ',
        iron_mind,
        ' を忘れた！',
      ]);
    }
  },
  city_lb_bye: 'またお越しください～',
  city_bt_arcade: '「抽選箱」',
  city_ac_welcome: 'メジロシティへようこそ！ ここで運試しをしますか？',
  city_ac_confirm: '2「恩寵」で抽選する？',
  /**
   * 目白城中大奖
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('大～当～た～り～');
    await waiter_say_cb('券金を十倍でお渡しします！');
    await printAndWait('20「恩寵」を得た！');
  },
  city_bt_newspaper: '「新聞社」',
  /**
   * 报社开头
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('いらっしゃいませ～');
    await waiter_say_cb(
      'メジロシティ新聞社は、名誉の回復と名声の拡散をお手伝いします。',
    );
  },
  city_ns_welcome: '何かお手伝いできることは？',
  city_ns_button_template: '%PRICE%「恩寵」→ %HONOUR1%～%HONOUR2% 名声',
  city_ns_result_template: 'はい、%HONOUR% 名声、すぐにお手続きします～',
  city_ns_bye: 'ご利用ありがとうございました！',
  city_bt_bank: '「銀行」',
  city_bn_start: 'いらっしゃいませ～',
  city_bn_welcome: '出金のお手続きですか？',
  city_bn_button_template: '%PRICE%「恩寵」→ %MONEY1%～%MONEY2% ウマコイン',
  city_bn_result_template:
    'はい、出金 %MONEY% ウマコイン、すぐにお手続きします～',
  city_bn_bye: 'お気をつけて～',
  city_bt_gov: '「市役所」',
  /**
   * 市政府，转换目白城形态
   * @param {CharaTalk} mayor
   * @returns {Promise<boolean>}
   */
  async handle_gov(mayor) {
    await mayor.say_and_wait('メジロシティへようこそ。');
    await mayor.say_and_wait('何かお手伝いできることは？');
    printButton('「どうか、見逃して……」', 1);
    printButton('用事はない', 2);
    if ((await input()) === 1) {
      print(
        '（この操作は不可逆です。メジロシティの方針が永久に変わります！）',
        {
          color: 'red',
        },
      );
      printButton('確定', 1);
      printButton('やめる', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('分かりました。');
        await mayor.say_and_wait(
          '次にお越しのとき、メジロシティはあなたが望む姿になります。',
        );
        await mayor.say_and_wait('またお会いしましょう。');
        return true;
      }
    }
    await mayor.say_and_wait(
      'あなたとご同伴が、メジロシティを楽しまれますように～',
    );
    return false;
  },
  async city_notify_misty() {
    await printAndWait('店を出ると、眼前は通りではなく、郊外の景色だった。');
    await printAndWait('振り返ると、メジロシティは再び霧に包まれていた……');
  },
};
