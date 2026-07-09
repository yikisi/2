module.exports = class extends require('#/i18n/zh-CN/sex/main') {
  n_lust = '欲';
  l_mejiro = '一心同体';

  get_call_assistant_confirm = (title, chara) => [
    '要叫 ',
    title,
    ' ',
    chara,
    ' 一起来吗？',
  ];
  get_hd_location = (location, mirror) => [
    '位于 ',
    location,
    ' ',
    mirror,
    ' 前',
  ];
  hd_turn_template = '第 %TURN% 回合';
  rape_notification = '强奸事件发生！';
  raped_notification = '逆强奸事件发生！';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' · ❤️ ', love];

  n_select_lover = '对手';
  n_select_assistant = '助手';
  get_assistant_info = (assistant) => ['助手：', assistant];

  redo_action_template = '再次 %ACTION%';
  get_action_info = (chara, action) => [chara, ' 的行动：', action];

  stain_header_template = '%NAME% 的身体脏污';
  touch_header_template = '%NAME% 的身体接触';
  sm_header_template = '%NAME% 的身体接触';

  st_act_vagina_filter = '筛除樱花赏指令';
  st_act_anal_filter = '筛除菊花赏指令';
  st_act_sm_filter = '筛除 SM 指令';
  st_act_pet_filter = '筛除爱抚指令';
  st_act_breast_filter = '筛除零奶乳交';
  st_act_ask_filter = '筛除请求指令';
  st_act_force_filter = '筛除强制指令';
  st_simpler_report = '马跳结果显示简报';

  try_end = '尝试结束';
  end_info = '【性事结束了】';

  nipple_clamps = '乳头夹';
  clitoris_clamps = '阴蒂夹';

  // 姿势：
  // <br>二维平面，横轴为床，人于床上从床头转动向床尾，共有四种基本位置：躺（lie）、坐（sit）、站（stand）、反向趴着（rev）
  // <br>再考虑人朝向问题，面朝床尾在二维平面上是顺时针朝向（右回，right），面朝床头在二维平面上是逆时针朝向（左回，left）
  // <br>综合之后一共八种姿势
  m_lie_right = '朝向床头躺着';
  m_lie_left = '朝向床头趴着';
  m_sit_right = '面朝床尾坐着';
  m_sit_left = '面朝床头坐着';
  m_stand_right = '面朝床尾站着';
  m_stand_left = '面朝床头站着';
  m_rev_left = '朝向床尾趴着';
  m_rev_right = '朝向床尾躺着';

  get_sadism_touch_info = (chara) => ['之前虐待了 ', chara];
  get_masochism_touch_info = (chara) => ['之前被 ', chara, ' 虐待'];
  get_item_touch_info = (owner, verb, item) => [
    item,
    '（由 ',
    owner,
    ' ',
    verb,
    '）',
  ];
  get_touch_info = (owner, part) => [owner, ' 的 ', part];

  get_got_param_info = (chara, pname, has, got, total, limit) => [
    chara,
    ' 的 ',
    pname,
    '：',
    has,
    ' + ',
    got,
    ' → ',
    total,
    '/',
    limit,
  ];
  get_got_jewel_info = (chara, jname, has, got, _new, total) => [
    chara,
    ' 获得了 ',
    jname,
    '：',
    has,
    ' + ',
    got,
    ' → ',
    _new,
    ' (',
    total,
    ')',
  ];
  get_got_jewel_info_oot = (chara, jname, has, got, total) => [
    chara,
    ' 获得了 ',
    jname,
    '：',
    has,
    ' + ',
    got,
    ' → ',
    total,
  ];
  get_got_mark_info = (chara, mark) => [chara, ' 获得了 ', mark, '！'];
  get_hp_tp_change = (chara, change_info) => [chara, ' 的 ', ...change_info];

  orgasm_2 = '二重高潮';
  orgasm_3 = '三重高潮';
  orgasm_4 = '四重高潮';
  orgasm_5 = '五重高潮';
  orgasm_m = '多重高潮';

  result_title = '马跳结果';
  jewel_header_template = '%NAME% 的因子';
  mark_header_template = '%NAME% 的刻印';
  attr_header_template = '%NAME% 的属性';
  orgasm_header_template = '%NAME% 的高潮';
  no_change = '无变化';

  get_jewel_info_start = (self_protect) => [
    self_protect,
    ' 个自卫因子与其他因子相互抵消后：',
  ];
  get_jewel_row_start = (jewel_name) => [jewel_name, '：'];
  jewel_has = '具有';
  jewel_got = '获得';
  jewel_lose = '抵消';
  jewel_total = '总计';

  get_mark_row = (mark_name, old, new_level) => [
    mark_name,
    '：',
    old,
    ' → ',
    new_level,
  ];

  get_orgasm_count = (count) => ['在本次马儿跳中共高潮了 ', count, ' 次'];
  get_special_orgasm_count = (count) => ['特殊高潮 ', count, ' 次，包括：'];
  get_special_orgasm_detail = (orgasm, count) => [orgasm, ' ', count, ' 次'];
  orgasm_detail_start = '其中：';
  get_part_orgasm(part, count, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(part, '高潮了 ', count, ' 次');
      if (unknown_count) {
        ret.push('，但对其中 ', unknown_count, ' 次毫无感知');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_breast_orgasm(
    count,
    unknown_count,
    nipple_count,
    uk_nipple_count,
    unsatisfied_desc,
  ) {
    const ret = [];
    if (count) {
      ret.push('胸部高潮了 ', count, ' 次');
      if (unknown_count) {
        ret.push('，但对其中 ', unknown_count, ' 次毫无感知');
      }
      if (nipple_count) {
        ret.push('；有 ', nipple_count, ' 次高潮是在蓄积的乳汁喷出时发生');
        if (uk_nipple_count) {
          ret.push('，但有 ', uk_nipple_count, ' 次毫无察觉');
        }
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_penis_orgasm(count, semen, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('射精 ', count, ' 次，共射出 ', semen, ' 精液');
      if (unknown_count) {
        ret.push('，但对其中 ', unknown_count, ' 次毫无感知');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_spirit_orgasm(cause, count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('因', cause, '感高潮了 ', count, ' 次');
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_squirt_info = (squirt) => ['潮吹 ', squirt, ' 次'];
  get_secretion_info = (secretion) => ['分泌爱液 ', secretion];

  orgasm_event_start = '在本次马儿跳中：';
  get_lose_virginity = (virgin, unsatisfied_desc) =>
    unsatisfied_desc
      ? ['失去了 ', virgin, '，', unsatisfied_desc]
      : ['失去了 ', virgin];

  lust_down_plus = '性欲得到了大幅释放！';
  lust_down = '性欲基本得到了纾解';
  lust_up = '性欲反而进一步累积了……';

  pressure_down_plus = '压力得到了大幅纾解！';
  pressure_down = '一定程度上舒缓了紧绷的神经';

  get_milk_info = (milk) => ['喷出了 ', ...this.get_milk_amount(milk)];
  get_drink_info = (liquid_list) => ['饮下了 ', ...liquid_list];
  get_cum_in_womb_info = (semen) => [
    '用小穴接纳了 ',
    ...this.get_semen_amount(semen),
  ];
  get_cum_in_anal_info = (semen) => [
    '用屁穴接纳了 ',
    ...this.get_semen_amount(semen),
  ];
  get_milk_amount = (milk) => [milk, ' 母乳'];
  get_semen_amount = (semen) => [semen, ' 精液'];
  get_secretion_amount = (secretion) => [secretion, ' 精液'];

  get_wound_info = (parts) => [parts, ' 被撑裂了……一定很疼吧'];

  no_orgasm = '没有发生高潮';
};
