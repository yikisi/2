/**
 * @file 持有道具 - 系统提示
 * @author 黑奴队长
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template: '现在独自行动时使用%ITEM%！要解除装备吗？',
  single_vehicle_canceled: '取消装备了%ITEM%',
  single_vehicle_replace_confirm_template:
    '现在独自行动时使用%ITEM%！要换用%NEW%吗？',
  single_vehicle_equip_confirm_template: '以后要乘%ITEM%独自行动吗？',
  single_vehicle_equip_template: '装备了%ITEM%作为单人载具',

  multiple_vehicle_info_template: '现在与他人外出时乘坐%ITEM%！要解除装备吗？',
  multiple_vehicle_canceled: '取消装备了%ITEM%',
  multiple_vehicle_replace_confirm_template:
    '现在与他人外出时乘坐%ITEM%！要换用%NEW%吗？',
  multiple_vehicle_equip_confirm_template: '以后要乘%ITEM%与其他人外出吗？',
  multiple_vehicle_equip_template: '装备了%ITEM%作为多人载具',

  no_glass_template: '没有地方安装%LENS%！',
  glass_have_lens_template: '已经给%GLASS%装上%LENS%了',
  glass_equip_confirm_template: '要给%GLASS%装上%LENS%吗？',
  glass_replace_confirm_template:
    '要给%GLASS%装上%NEW%吗？这会导致原有的%LENS%损坏！',
  glass_equip_template: '给%GLASS%装上了%LENS%',
  glass_lens_broken_template: '%LENS%损坏了',

  use_mind_reader_select: '请选择要使用的马语者点数卡数量',
  use_mind_reader_confirm_template: '要使用 %COUNT% 张马语者点数卡吗？',
  mind_reader_welcome_timer_template:
    '欢迎使用【马语者】App！您的会员身份将在 %TIMER% 周后过期。',
  mind_reader_continue_timer_template:
    '感谢续费【马语者】App！您的会员身份将在 %TIMER% 周后过期。',
  mind_reader_notify_timer_template: '您的会员身份将在 %TIMER% 周后过期。',

  in_ero_item_common_description: '仅能在调教中使用',
  before_ero_item_common_description: '仅能在调教前使用',

  drop_confirm_template: '要丢弃%ITEM%吗？',
  async drop_quilt() {
    await printAndWait('丢弃了【透明棉被】……');
    await printAndWait('……但是在丢弃之前从里面翻出了几张纸币……');
  },
  async drop_family_uma_s() {
    await printAndWait('丢弃了【马跳S家庭装】……');
    await printAndWait('……然后因为乱丢化学制剂被处以100马币罚款');
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  use_inmon_item(chara, iname) {
    print([
      '给 ',
      chara.get_colored_name(),
      ' 以「暖腹」的名义贴上了',
      iname,
      '……',
    ]);
    print([chara.get_colored_name(), ' 小腹上浮现一个花纹繁复的淫纹……']);
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' 服用了',
    iname,
  ],
  /** @param {CharaTalk} chara */
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' 开始分泌母乳了！',
  ],

  anti_condom_for_man: '男性不能使用【避孕套溶解剂】',
  anti_condom_duplicate: '已经使用过【避孕套溶解剂】了',
  anti_condom_confirm: '要使用【避孕套溶解剂】吗？',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' 将几滴',
      iname,
      '滴在了阴唇附近',
    ]);
  },

  eat_chocolate_confirm: '要吃【情人节巧克力】吗？',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [you.get_colored_name(), ' 已经很饱了'],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    ' 的压力降低了',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [chara.get_colored_name(), ' 的性欲降低了'],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [chara.get_colored_name(), ' 变得更冷静了'],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [chara.get_colored_name(), ' 变得有点兴奋'],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [chara.get_colored_name(), ' 不再发胖了'],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' 不再偏头痛了',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    ' 饮用了【健康茶】',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      '给 ',
      chara.get_colored_name(),
      ' 偷偷下了【讨厌药】',
    ]);
    await printAndWait([
      chara.sex,
      '对 ',
      you.get_colored_name(),
      ' 的好感开始消散……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      '给 ',
      chara.get_colored_name(),
      ' 偷偷下了【抑制药】',
    ]);
    await printAndWait([
      chara.sex,
      '对 ',
      you.get_colored_name(),
      ' 的恋心被抑制了……',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' 暂时不发胖了',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' 暂时不偏头痛了',
  ],

  to_sell_milk_template: '请选择要售出的%ITEM%数量',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  get_sell_milk_confirm: (count, item) => [
    '要通过暗网售出 ',
    count,
    ' 瓶',
    item,
    '吗？',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  get_sell_milk_result: (count, item, money) => [
    '售出了 ',
    count,
    ' 瓶',
    item,
    '，获得了 ',
    money,
    ' 马币',
  ],

  /** @param {CharaTalk} chara */
  async make_armpit_hair_longer(chara) {
    await printAndWait(['给 ', chara.get_colored_name(), ' 使用了【生毛膏】']);
    await printAndWait([chara.get_colored_name(), ' 的腋毛生长得更旺盛了']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛后的腋毛生长等级
   */
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait(['给 ', chara.get_colored_name(), ' 使用了【脱毛膏】']);
    if (talent > 0) {
      await printAndWait([chara.get_colored_name(), ' 的腋毛生长得更慢了']);
    } else {
      await printAndWait([chara.get_colored_name(), ' 的腋下变得光滑无毛了！']);
    }
  },
  /** @param {CharaTalk} chara */
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      '给 ',
      chara.get_colored_name(),
      ' 使用了【私处生毛膏】',
    ]);
    await printAndWait([chara.get_colored_name(), ' 的阴毛生长得更旺盛了']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛后的阴毛生长等级
   */
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      '给 ',
      chara.get_colored_name(),
      ' 使用了【私处脱毛膏】',
    ]);
    if (talent > 0) {
      await printAndWait([chara.get_colored_name(), ' 的阴毛生长得更慢了']);
    } else if (chara.sex_code > 0) {
      await printAndWait([chara.get_colored_name(), ' 的私处变得光滑无毛了！']);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' 的私处变成粉腻可人的白虎了！',
      ]);
    }
  },

  fixer_start: '【现实穿透启动中……】',
  fixer_stop: '【现实规律修复完毕。】',
};
