/**
 * @file 调教 -系统提示
 * @author イーウィヤ
 * @author 黑奴队长
 */
const { get, input, printAndWait, printButton } = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');

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
          ' 饮下了那杯加料茶水，然后渐渐失神……',
        ]);
      }
    } else {
      await printAndWait([chara.get_colored_name(), ' 机敏地发现了异样……']);
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

  /** @param {CharaTalk} chara */
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    ' 取得了主导权',
  ],
  /** @param {CharaTalk} chara */
  get_escape_info: (chara) => [chara.get_colored_name(), ' 逃离了'],

  orgasm: '高潮了',
  orgasm_template: '发生了 %TIME% 重高潮',

  /**
   * 多重高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} orgasm 多重高潮名
   * @returns {TextContent}
   */
  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    ' 发生了 ',
    orgasm,
  ],
  /**
   * 部位高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} part 高潮的部位
   * @param {PrintedSpan} orgasm 高潮信息
   * @returns {TextContent}
   */
  get_chara_part_orgasm: (chara, part, orgasm) => [
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' ',
    orgasm,
  ],
  /**
   * 精神高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} cause 高潮的原因（施虐或受虐）
   * @param {PrintedSpan} orgasm 高潮信息
   * @returns {TextContent}
   */
  get_chara_spirit_orgasm: (chara, cause, orgasm) => [
    chara.get_colored_name(),
    ' 因 ',
    cause,
    ' ',
    orgasm,
  ],
  /**
   * 液体分泌报告
   * @param {CharaTalk} chara 分泌液体的角色
   * @param {PrintedSpan} part 分泌液体的部位
   * @param {[]} change 分泌信息
   * @returns {TextContent}
   */
  get_chara_have_liquid: (chara, part, change) => [
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' ',
    ...change,
  ],
  liquid_amount_template: '%AMOUNT%ml',
  /**
   * 颜射报告
   * @param {CharaTalk} chara 射精的角色
   * @param {[]} targets 颜射的目标
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_on_face: (chara, targets, semen) => [
    chara.get_colored_name(),
    ' 对着 ',
    ...targets,
    ' 的脸庞射出了 ',
    semen,
    ' 精液',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    ' 在避孕套中射出了 ',
    semen,
    ' 精液',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} item 飞机杯
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    ' 在 ',
    item,
    ' 中射出了 ',
    semen,
    ' 精液',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {CharaTalk} target 被射的角色
   * @param {string} part 射精位置
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_part: (chara, target, part, semen) => [
    chara.get_colored_name(),
    ' 在 ',
    target.get_colored_name(),
    ' 的 ',
    part,
    ' 射出了 ',
    semen,
    ' 精液',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    ' 射出了 ',
    semen,
    ' 精液',
  ],
  // 射精位置
  cum_in_anal: '屁穴中',
  cum_in_body: '身体上',
  cum_in_breast: '乳穴中',
  cum_in_clitoris: '阴核上',
  cum_in_foot: '足穴中',
  cum_in_hand: '手中',
  cum_in_mouth: '口穴中',
  cum_in_penis: '肉棒上',
  cum_in_virgin: '小穴中',
  /**
   * 获取母乳分泌报告
   * @param {number} cid 分泌母乳的角色
   * @param {[]} targets 分泌接触目标
   * @param {number} part 分泌接触部位
   * @param {PrintedSpan} amount 分泌量
   * @param {boolean} is_orgasm 是否高潮（取决于是喷出来还是流出来）
   */
  get_milk_info(cid, targets, part, amount, is_orgasm) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('在 ', ...targets, ' 的口中');
        break;
      case part_enum.hand:
        actions.push('在 ', ...targets, ' 的指间');
        break;
      case item_enum.milk_pump:
        actions.push(
          '在 ',
          { content: '榨乳器', color: buff_colors[2] },
          ' 中',
        );
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.push('猛然喷出了 ');
    } else if (is_orgasm) {
      actions.push('喷出了 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.push('泌出了 ');
          break;
        default:
          actions.push('流出了 ');
      }
    }
    actions.push(' ', amount, ' 乳汁');
    return actions;
  },
  /**
   * 获取爱液分泌报告
   * @param {number} cid 分泌爱液的角色
   * @param {[]} targets 爱液接触目标
   * @param {number} part 爱液接触部位，100 - 非接触口，101 - 非接触阴茎
   * @param {PrintedSpan} amount 分泌量
   */
  get_squirt_info(cid, targets, part, amount) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('向 ', ...targets, ' 的口中');
        break;
      case part_enum.hand:
        actions.push('在 ', ...targets, ' 的指间');
        break;
      case part_enum.foot:
        actions.push('在 ', ...targets, ' 的脚下');
        break;
      case part_enum.penis:
        return ['将 ', amount, ' 爱液浇在了 ', ...targets, ' 的龟头上'];
      case 100:
        actions.push('朝 ', ...targets, ' 的嘴唇');
        break;
      case 101:
        actions.push('朝 ', ...targets, ' 的肉棒');
    }
    if (get(`nowex:${cid}:潮吹`) > 0) {
      actions.push('喷出了 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.push('溅出了 ');
          break;
        default:
          actions.push('流出了 ');
      }
    }
    actions.push(' ', amount, ' 爱液');
    return actions;
  },

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

  /**
   * 调教结束后的总结情报
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} riko 㭴本理子
   * @param {CharaTalk} glasse 苦涩糖衣
   * @param {CharaTalk} cocon 小小蚕茧
   */
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('发 表！高潮播报～♫');
    minoru.say_as_unknown('以下报上这次马儿跳的结果简报～');
    // 1% 几率理子会说不下去，让糖衣和蚕茧打气
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('不……不喜欢……的话……');
      await cocon.say_as_unknown_and_wait('训练员～');
      await glasse.say_as_unknown_and_wait('加油！训练员～加油！');
      await riko.say_as_unknown_and_wait(
        '……请在下次马儿跳过程中在界面的设置里开启【马跳结果显示简报】……',
      );
      await riko.say_as_unknown_and_wait('……哦～');
    } else {
      await riko.say_as_unknown_and_wait(
        '不喜欢的话请在下次马儿跳过程中在界面的设置里开启【马跳结果显示简报】哦～',
      );
    }
  },
  // 各部位快感没有满足时的描述
  unsatisfied_mouth: '不满足的嘴唇仍微微张开着，好似在期待着什么……',
  unsatisfied_nipple: '不知足的莓果颤巍巍地凸起着……',
  unsatisfied_hidden_nipple: '不知足的莓果在保护它的凹坑之外颤巍巍地凸起着……',
  unsatisfied_body: '未被充分疼爱的身体泛着油亮的汗渍和红晕……',
  unsatisfied_penis: '处于在极限边缘的肉棒仍渴望着出击……',
  unsatisfied_clitoris: '完全肿起的通红豆豆妖艳而痛苦……',
  unsatisfied_vagina: '翕动的小穴泛起阵阵热气……',
  unsatisfied_sadism: '即将因施虐而感受的快乐仍然挥之不去……',
  unsatisfied_sadism_zero_stamina: '施虐的梦境袭扰了逐渐静息的身体……',
  unsatisfied_masochism: '即将因受虐而感受的快乐仍然挥之不去……',
  unsatisfied_masochism_zero_stamina: '受虐的梦境袭扰了逐渐静息的身体……',

  unsatisfied_lose_virgin_p: '但其中蕴含的洪荒之力并未能完全释放……',
  unsatisfied_lose_virgin_v:
    '破瓜的身体没能在初次咬下禁果的体验中尝及快乐的甜美……',
};
