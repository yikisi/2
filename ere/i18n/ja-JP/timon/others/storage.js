/**
 * @file 所持道具 - システム提示
 * @author 黑奴队长
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template:
    'いま単独行動では%ITEM%を使っている！ 装備を外す？',
  single_vehicle_canceled: '%ITEM%の装備を外した',
  single_vehicle_replace_confirm_template:
    'いま単独行動では%ITEM%を使っている！ %NEW%に替える？',
  single_vehicle_equip_confirm_template: '以後、%ITEM%で単独行動する？',
  single_vehicle_equip_template: '%ITEM%を単独用の乗物として装備した',

  multiple_vehicle_info_template:
    'いま他人と外出するときは%ITEM%に乗っている！ 装備を外す？',
  multiple_vehicle_canceled: '%ITEM%の装備を外した',
  multiple_vehicle_replace_confirm_template:
    'いま他人と外出するときは%ITEM%に乗っている！ %NEW%に替える？',
  multiple_vehicle_equip_confirm_template: '以後、%ITEM%で他人と外出する？',
  multiple_vehicle_equip_template: '%ITEM%を複数用の乗物として装備した',

  no_glass_template: '%LENS%を取り付ける場所がない！',
  glass_have_lens_template: 'すでに%GLASS%へ%LENS%を取り付けてある',
  glass_equip_confirm_template: '%GLASS%に%LENS%を取り付ける？',
  glass_replace_confirm_template:
    '%GLASS%に%NEW%を取り付ける？ 元の%LENS%は壊れる！',
  glass_equip_template: '%GLASS%に%LENS%を取り付けた',
  glass_lens_broken_template: '%LENS%が壊れた',

  use_mind_reader_select: '使うウマ語りポイントカードの枚数を選んでください',
  use_mind_reader_confirm_template: 'ウマ語りポイントカードを %COUNT% 枚使う？',
  mind_reader_welcome_timer_template:
    '【ウマ語り】Appへようこそ！ 会員資格は %TIMER% 週後に期限切れになります。',
  mind_reader_continue_timer_template:
    '【ウマ語り】Appの継続、ありがとうございます！ 会員資格は %TIMER% 週後に期限切れになります。',
  mind_reader_notify_timer_template:
    '会員資格は %TIMER% 週後に期限切れになります。',

  in_ero_item_common_description: '調教中にのみ使える',
  before_ero_item_common_description: '調教前にのみ使える',

  drop_confirm_template: '%ITEM%を捨てる？',
  async drop_quilt() {
    await printAndWait('【透明な布団】を捨てた……');
    await printAndWait('……だが捨てる前に、中から何枚かの紙幣が出てきた……');
  },
  async drop_family_uma_s() {
    await printAndWait('【ウマ跳びS ファミリーパック】を捨てた……');
    await printAndWait(
      '……そして化学製剤の不法投棄で 100 ウマコインの罰金を科された',
    );
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  use_inmon_item(chara, iname) {
    print([
      chara.get_colored_name(),
      ' に「お腹温め」の名目で',
      iname,
      'を貼った……',
    ]);
    print([
      chara.get_colored_name(),
      ' の下腹に、複雑な模様の淫紋が浮かんだ……',
    ]);
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' は',
    iname,
    'を服用した',
  ],
  /** @param {CharaTalk} chara */
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' は母乳を分泌し始めた！',
  ],

  anti_condom_for_man: '男性は【コンドーム溶解剤】を使えない',
  anti_condom_duplicate: 'すでに【コンドーム溶解剤】を使っている',
  anti_condom_confirm: '【コンドーム溶解剤】を使う？',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' は',
      iname,
      'を数滴、陰唇のそばに垂らした',
    ]);
  },

  eat_chocolate_confirm: '【バレンタインチョコ】を食べる？',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    ' はもう満腹だ',
  ],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    ' のストレスが下がった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    ' の性欲が下がった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [
    chara.get_colored_name(),
    ' はより冷静になった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [chara.get_colored_name(), ' は少し興奮した'],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' はもう太らない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' はもう偏頭痛にならない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    ' は【健康茶】を飲んだ',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' にこっそり【嫌い薬】を盛った',
    ]);
    await printAndWait([
      chara.sex,
      'の ',
      you.get_colored_name(),
      ' への好感が薄れていく……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' にこっそり【抑制薬】を盛った',
    ]);
    await printAndWait([
      chara.sex,
      'の ',
      you.get_colored_name(),
      ' への恋心が抑えられた……',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' はしばらく太らない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' はしばらく偏頭痛にならない',
  ],

  to_sell_milk_template: '売りに出す%ITEM%の本数を選んでください',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  get_sell_milk_confirm: (count, item) => [
    '闇網で ',
    count,
    ' 本の',
    item,
    'を売る？',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  get_sell_milk_result: (count, item, money) => [
    count,
    ' 本の',
    item,
    'を売り、',
    money,
    ' ウマコインを得た',
  ],

  /** @param {CharaTalk} chara */
  async make_armpit_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【発毛クリーム】を使った',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' の腋毛がより旺盛に伸びるようになった',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の腋毛成長等級
   */
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【脱毛クリーム】を使った',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の腋毛の伸びが遅くなった',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' の腋は滑らかで毛がなくなった！',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【局部発毛クリーム】を使った',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' の陰毛がより旺盛に伸びるようになった',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の陰毛成長等級
   */
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【局部脱毛クリーム】を使った',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の陰毛の伸びが遅くなった',
      ]);
    } else if (chara.sex_code > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の局部は滑らかで毛がなくなった！',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' の局部は、粉膩で愛らしい白虎になった！',
      ]);
    }
  },

  fixer_start: '【現実透孔、起動中……】',
  fixer_stop: '【現実の法則、修復完了。】',
};
