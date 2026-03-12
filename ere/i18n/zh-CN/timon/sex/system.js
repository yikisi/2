/**
 * @file 调教 -系统提示
 * @author 黑奴队长
 */
const { input, printAndWait, printButton } = require('#/era-electron');

module.exports = {
  /**
   * 选择 [邀请上床] 之后的系统级地文演出
   */

  /** 选择性爱后结束当前回合的按钮 */
  bt_back_home: '邀请过夜',
  /** 马上开始，但是以强奸展开，会使用强奸的口上和地文 */
  bt_rape_play: '强奸Play',
  /** 没有任何负面作用的用药 */
  bt_use_medicine: '情趣用药',
  /**
   * 拥有合意（爱慕值达标且对方状态允许）的情况下，邀请上床时的提示信息和正常性爱（无强奸和用药、马上开始）按钮
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      ' 含情脉脉地看着 ',
      you.get_colored_name(),
      '……',
      { isBr: true },
      '要怎么做？',
    ],
    '正常求爱',
  ],
  /**
   * 不具有合意但身为性奴/孕袋的情况下，邀请上床时的提示信息和正常性爱（无强奸和用药、马上开始）按钮
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_slave: (chara, you) => [
    [
      chara.get_colored_name(),
      ' 略带轻浮地看着 ',
      you.get_colored_name(),
      '……',
      { isBr: true },
      '要怎么做？',
    ],
    '提议献身',
  ],
  /**
   * 是强奸对方还是要求对方强奸玩家
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {Promise<boolean>} true - 强奸对方; false - 对方强奸玩家
   */
  async choose_who_to_rape(chara, you) {
    printButton(`粗暴对待${chara.sex}`, 1);
    printButton('「请粗暴对待我」', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        ' 会意地装出了即将被强暴的惊恐神情……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' 露出惊恐柔弱的申请，激发了 ',
        chara.get_colored_name(),
        ' 的凶性……',
      ]);
    }
    return ret;
  },
  use_medicine_header: '要使用什么药物？',
  no_medicine_notification: '无药可用',
  /**
   * 使用超马跳Z
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_super_uma_z(chara, item) {
    await printAndWait([chara.get_colored_name(), ' 乖乖饮用了', item, '……']);
    await printAndWait([chara.get_colored_name(), ' 变得极其兴奋！']);
  },
  /**
   * 使用马跳S
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_uma_s(chara, item) {
    await printAndWait([chara.get_colored_name(), ' 乖乖饮用了', item, '……']);
    await printAndWait([chara.get_colored_name(), ' 面带潮红地睡着了……']);
  },
  /**
   * 没有合意，但对方拥有淫纹/欢愉刻印的情况下邀请上床
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    ' 不愿意和 ',
    you.get_colored_name(),
    ' 共度春宵……',
    { isBr: true },
    '但被肉体欢愉烧灼的内心已让',
    chara.sex,
    '无法说出拒绝的话语……',
  ],
  /**
   * 没有合意，但对方拥有同心刻印的情况下邀请上床
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    ' 不愿意和 ',
    you.get_colored_name(),
    ' 共度春宵……',
    { isBr: true },
    '但仍然顺从地准备好了自己……',
  ],
  /** 没有达成合意，但对方拥有刻印的情况下直接开始调教 */
  bt_start_train: '开始调教',
  /** 没有达成合意，但对方拥有刻印的情况下开始调教并结束回合 */
  bt_train_back_home: '带回过夜',
  /**
   * 没有合意也没有刻印，
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    ' 不愿意和 ',
    you.get_colored_name(),
    ' 共度春宵……',
    { isBr: true },
    '怎么办呢？',
  ],
  bt_rape: '尝试强奸',
  bt_drug: '尝试下药',
  /**
   * 没有合意也没有刻印，选择强奸
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @param {boolean} success 是否成功
   */
  async rape(chara, you, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        ' 的力量支持了 ',
        you.get_colored_name(),
        ' 的无耻行径……',
      ]);
      await printAndWait([chara.get_colored_name(), ' 露出了惊恐的神情……']);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' 并未成功制服 ',
        chara.get_colored_name(),
        '……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' 将 ',
        you.get_colored_name(),
        ' 推倒在地，迅速离开了……',
      ]);
      await printAndWait([
        '虽然 ',
        chara.get_colored_name(),
        ' 对此守口如瓶，但社会对 ',
        you.get_colored_name(),
        ' 的评价还是下降了！',
      ]);
    }
  },
  /**
   * 没有合意也没有刻印，选择下药
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @param {1|2} medicine_type 药品种类，1是超马跳Z，2是马跳S
   * @param {boolean} success 是否成功
   */
  async drug(chara, you, medicine_type, success) {
    if (success) {
      await printAndWait([you.get_colored_name(), ' 卑劣的小花招奏效了……']);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' 饮下了那杯加料茶水，然后被腾起的性欲烧灼了所有理智……',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          ' 饮下了那杯加料茶水，然后沉沉睡去……',
        ]);
      }
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' 机敏地发现了异样 ',
        chara.get_colored_name(),
        '……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' 将 ',
        you.get_colored_name(),
        ' 推倒在地，迅速离开了……',
      ]);
      await printAndWait([
        '虽然 ',
        chara.get_colored_name(),
        ' 对此守口如瓶，但社会对 ',
        you.get_colored_name(),
        ' 的评价还是下降了！',
      ]);
    }
  },
  /**
   * 使用超马跳Z下药迷奸后的特别演出
   * @param {CharaTalk} chara
   * @returns {Promise<void>}
   */
  async after_rape_by_super_uma_z(chara) {
    await printAndWait([
      '虽然一时情动，但当 ',
      chara.get_colored_name(),
      ' 回过神来，一定会对此羞愤难当吧……',
    ]);
  },
  /**
   * 对方睡着的情况下邀请上床
   * @param {CharaTalk} chara
   */
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    ' 睡得正香。',
    { isBr: true },
    '要袭击吗？',
  ],
  /** 选择睡奸 */
  bt_rape_in_sleeping: '袭击！',

  /**
   * 使用道具
   */
  lub_select_target: '要给谁使用润滑液？',
  select_entry_template: '%ITEM% (%COUNT%)',
  /** @param {CharaTalk} you */
  get_lub_give_up: (you) => [you.get_colored_name(), ' 放弃了使用润滑液'],
  lub_no_parts: '没有需要润滑的部位',
  /** @param {CharaTalk} chara */
  get_lub_select_part: (chara) => [
    '要润滑 ',
    chara.get_colored_name(),
    ' 的哪个部位？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_lub_confirm: (chara, part) => [
    '要润滑 ',
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 吗？',
  ],
  med_no_medicines: '暂时没有可用的药物',
  med_select_target: '要给谁喂食药物？',
  /** @param {CharaTalk} you */
  get_med_give_up: (you) => [you.get_colored_name(), ' 放弃了使用药物'],
  /** @param {CharaTalk} chara */
  get_med_no_medicines_for_chara: (chara) => [
    '没有可以喂给 ',
    chara.get_colored_name(),
    ' 的药物',
  ],
  med_no_medicines_for_you: '没有可以服用的药物',
  /** @param {CharaTalk} chara */
  get_med_select_medicine: (chara) => [
    '要给 ',
    chara.get_colored_name(),
    ' 喂食什么药物？',
  ],
  med_select_medicine_for_you: '要服用什么药物？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_med_confirm_for_chara: (chara, item) => [
    '要给 ',
    chara.get_colored_name(),
    ' 喂食',
    item,
    '吗？',
  ],
  /** @param {PrintedSpan} item */
  get_med_confirm_for_you: (item) => ['要服用', item, '吗？'],
  /** @param {PrintedSpan} item */
  get_med_give_up_medicine: (item) => ['放弃了使用', item],
  itm_no_items: '暂时没有可用的性玩具',
  itm_select_item: '要使用什么性玩具？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_select_part: (chara, item) => [
    '要对 ',
    chara.get_colored_name(),
    ' 的什么部位使用 ',
    item,
    '？',
  ],
  itm_no_parts: '没有可以使用该性玩具的部位',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   * @param {PrintedSpan} part
   */
  get_itm_confirm_with_part: (chara, item, part) => [
    '确定要对 ',
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 使用 ',
    item,
    ' 吗？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_confirm_without_part: (chara, item) => [
    '确定要对 ',
    chara.get_colored_name(),
    ' 使用 ',
    item,
    ' 吗？',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    ' 放弃了使用 ',
    item,
  ],
  itm_take_off_select_target: '要撤除谁身上的性玩具？',
  /** @param {CharaTalk} you */
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    ' 放弃了撤除性玩具',
  ],
  /** @param {CharaTalk} you */
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    ' 身上没有性玩具',
  ],
  itm_take_off_select_item: '要撤除什么性玩具？',
  itm_take_off_select_entry_template: '%ITEM% (%PART%)',
  itm_take_off_mirror_confirm: '确定要撤除【全身镜】吗？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   * @param {PrintedSpan} item
   */
  get_itm_take_off_confirm: (chara, part, item) => [
    '确定要从 ',
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 取下 ',
    item,
    ' 吗？',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    ' 放弃了撤除 ',
    item,
  ],

  /**
   * 榨乳结算
   */
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_ml: (amount, item) => ['用榨乳器收集到了 ', amount, 'ml ', item],
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_item: (amount, item) => ['，灌装处理后获得了 ', amount, ' 瓶', item],
  /**
   * @param {PrintedSpan} amount
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_your_milk_info: (amount, you) => [
    '（其中 ',
    amount,
    ' 瓶来自于 ',
    you.get_colored_name(),
    '）',
  ],
};
