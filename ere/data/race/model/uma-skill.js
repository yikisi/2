const skill_name_enum = { buff: 0, heal: 0, speed: 0, control: 0, debuff: 0 };
Object.keys(skill_name_enum).forEach((k, i) => (skill_name_enum[k] = i));
const skill_name_colors = [
  '#a7fe9e',
  '#98ccfa',
  '#ffe361',
  '#ff9e9d',
  '#ce7cff',
];
const skill_name_types = [];
skill_name_types[skill_name_enum.buff] = '常时';
skill_name_types[skill_name_enum.heal] = '恢复';
skill_name_types[skill_name_enum.speed] = '增幅';
skill_name_types[skill_name_enum.control] = '控制';
skill_name_types[skill_name_enum.debuff] = '劣势';

const skill_border_enum = {
  normal: 0,
  advanced: 0,
  spe: 0,
  evol: 0,
  cheat: 0,
  ero_normal: 0,
  ero_advanced: 0,
};
Object.keys(skill_border_enum).forEach((k, i) => (skill_border_enum[k] = i));
const skill_border_colors = [
  '#c6c5c5',
  '#eeb93f',
  '#71c2fe',
  '#f6aacb',
  '#ff7373',
  '#ee82ee',
  '#cf00cf',
];
const skill_border_types = [];
skill_border_types[skill_border_enum.normal] = '普通';
skill_border_types[skill_border_enum.advanced] = '传说';
skill_border_types[skill_border_enum.spe] = '独有';
skill_border_types[skill_border_enum.evol] = '进化';
skill_border_types[skill_border_enum.cheat] = 'ＧＭ';
skill_border_types[skill_border_enum.ero_normal] = '普通 · 调教';
skill_border_types[skill_border_enum.ero_advanced] = '强化 · 调教';

const ability_time_usage_enum = {
  normal: 1,
  top_distance: 2,
  stamina: 3,
  order_change: 4,
  blocked_side_continuetime: 5,
};

const ability_type_enum = {
  no: 0,
  // 速度
  Speed: 1,
  // 耐力
  Stamina: 2,
  // 力量
  Power: 3,
  // 根性
  Guts: 4,
  // 智力
  Wiz: 5,
  // 大逃
  RunningStyleExOonige: 6,
  // 体力下降
  // HpDecRate: 7,
  // 视野
  VisibleDistance: 8,
  // 体力恢复
  HpRate: 9,
  // 出闸
  StartDash: 10,
  // ForceOvertakeIn: 11,
  // ForceOvertakeOut: 12,
  // 延长焦躁
  TemptationEndTime: 13,
  // 当前速度
  CurrentSpeed: 21,
  // 自然衰减加速
  CurrentSpeedWithNaturalDeceleration: 22,
  // 目标速度
  TargetSpeed: 27,
  // 变道速度
  LaneMoveSpeed: 28,
  // 焦躁概率
  TemptationPer: 29,
  // PushPer: 30,
  // 加速度
  Accel: 31,
  // 全属性增加
  AllAttrIncrease: 32,
  // 目标道路
  TargetLane: 35,
  // 随机触发技能
  // ActivateRandomNormalAndRareSkill: 36,
  ActivateRandomRareSkill: 37,
  Connect: 41,
  // 育成继承活动使用
  // ChallengeMatchBonusXXX: 50,
  // 可以用性玩具
  HasItem: 90,
  // 性玩具带来 Buff
  HasItemBuff: 91,
};

const ability_usage_enum = {
  no: 0,
  // 直接使用
  Direct: 1,
  // 每个技能提升1%，最大20%
  MultiplySkillNum: 2,
  MultiplyTeamTotalSpeed: 3,
  MultiplyTeamTotalStamina: 4,
  MultiplyTeamTotalPower: 5,
  MultiplyTeamTotalGuts: 6,
  MultiplyTeamTotalWiz: 7,
  MultiplyRandom1: 8,
  // MultiplyRandom2: 9,
  // 胜场决定倍率：6、14、18、25，分别为0.8、0.9、1.0、1.1、1.2
  MultiplySingleModeWinCount: 10,
  // 终弯超过人数
  MultiplyOvertakeCount: 11,
  MultiplyFanCount: 12,
  MultiplyFanCount2: 25,
  MultiplyMaximumRawStatus: 13,
  // 发动绿技能数量决定倍率：3、5、6，分别+1，最高3
  MultiplyActivateSpecificTagSkillCount: 14,
  // MultiplyActivateHealSkillCount: 15,
  // MultiplyFinalCornerEndOrder: 16,
  // MultiplyInvTeamMemberCount: 17,
  // MultiplyBaseWiz: 18,
  // 和头马的距离影响（CB固有中长距离）：CB固有的说法是大于8马身+0.1m/s,可以先作为参考
  AddDistanceDiffTop: 19,
  // 中盘竞争时间计算倍率，2、4、6倍率分别+1，最高4
  MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1: 20,
  // MultiplyBlockedSideMaxContinueTimePhaseMiddleRun2: 21,
  // 根据速度决定加成 - 加速度
  MultiplyBaseSpeedForAcc: 22,
  // 根据速度决定加成 - 速度
  MultiplyBaseSpeed: 23,
  MultiplyForeignAdaptability: 24,
  MultiplyUAFWins: 26,
  MultiplyCookingPt: 27,
  MultiplyResearchLv: 28,
};

const target_type_enum = {
  no: 0,
  // 自身
  Self: 1,
  All: 2,
  // AllOtherSelf: 3,
  // 视野范围内
  Visible: 4,
  // RandomOtherSelf: 5,
  // Order: 6,
  // 头马开始目标数（小于）
  OrderInfront: 7,
  // OrderBehind: 8,
  // 前方所有
  SelfInfront: 9,
  // 后方所有
  SelfBehind: 10,
  TeamMember: 11,
  // Near: 12,
  // SelfAndBlockFront: 13,
  // BlockSide: 14,
  // NearInfront: 15,
  // NearBehind: 16,
  // RunningStyle: 17,
  // 跑法目标
  RunningStyleOtherSelf: 18,
  // 前方焦躁
  SelfInfrontTemptation: 19,
  // 后方焦躁
  SelfBehindTemptation: 20,
  // 对应跑法的焦躁马娘
  RunningStyleTemptationOtherSelf: 21,
  // 对应角色存在
  CharaId: 22,
  // 体力恢复的角色
  ActivateHealSkill: 23,
};

const adapt_tag_names = [
  '草地',
  '泥地',
  '短距离',
  '英里赛',
  '中距离',
  '长距离',
  '逃马',
  '先马',
  '差马',
  '追马',
];

const ability_tag_enum = {
  speed: 0,
  stamina: 1,
  power: 2,
  guts: 3,
  wiz: 4,
  startDash: 5,
  tempPer: 6,
  visible: 6,
  targetSpeed: 7,
  currentSpeed: 7,
  accel: 8,
  hpRate: 5,
  temp: 1,
  laneMove: 1,
  ero: 0,
};
Object.keys(ability_tag_enum).forEach((k, i) => (ability_tag_enum[k] = i));

const ability_tag_names = [];
ability_tag_names[ability_tag_enum.speed] = '速度';
ability_tag_names[ability_tag_enum.stamina] = '耐力';
ability_tag_names[ability_tag_enum.power] = '力量';
ability_tag_names[ability_tag_enum.guts] = '根性';
ability_tag_names[ability_tag_enum.wiz] = '智力';
ability_tag_names[ability_tag_enum.startDash] = '出闸';
ability_tag_names[ability_tag_enum.tempPer] = '焦躁概率';
ability_tag_names[ability_tag_enum.visible] = '视野';
ability_tag_names[ability_tag_enum.targetSpeed] = '目标速度';
ability_tag_names[ability_tag_enum.currentSpeed] = '即时速度';
ability_tag_names[ability_tag_enum.accel] = '加速度';
ability_tag_names[ability_tag_enum.hpRate] = '体力';
ability_tag_names[ability_tag_enum.temp] = '焦躁';
ability_tag_names[ability_tag_enum.laneMove] = '突围';
ability_tag_names[ability_tag_enum.ero] = '调教';

class UmaSkill {
  static skill_name_enum = skill_name_enum;
  static skill_border_enum = skill_border_enum;
  static ability_time_usage_enum = ability_time_usage_enum;
  static ability_type_enum = ability_type_enum;
  static ability_usage_enum = ability_usage_enum;
  static target_type_enum = target_type_enum;
  static ability_tag_enum = ability_tag_enum;
  static ability_tag_names = ability_tag_names;

  /**
   * @param {number} name
   * @param {number} border
   * @returns {number}
   */
  static get_skill_color(name, border) {
    return border + (name << 3);
  }

  /** @type {number} */
  id;
  /** @type {string} */
  name;
  /** @type {string} */
  desc;
  /**
   * 技能分组（同组技能最高者生效）
   * @type {number}
   */
  group_id;
  /**
   * 技能级别（同组内技能级别）
   * @type {number}
   */
  group_level;
  /**
   * 稀有度
   * @type {number}
   */
  rarity;
  /**
   * 类别
   * @type {number}
   */
  category;
  /**
   * 技能评分
   * @type {number}
   */
  grade_value;
  /**
   * 前置条件
   * @type {(function(ConditionParams):boolean)[]}
   */
  preconditions;
  /**
   * 触发条件
   * @type {(function(ConditionParams):boolean)[]}
   */
  conditions;
  /**
   * 技能时间
   * @type {number[]}
   */
  ability_times;
  /**
   * 冷却时间
   * @type {number[]}
   */
  cooldown_times;
  /**
   * 延长技能时间方式
   * @type {number[]}
   */
  ability_time_usages;
  /**
   * 作用类型
   * @type {number[][]}
   */
  ability_types;
  /**
   * 数值换算方式
   * @type {number[][]}
   */
  ability_value_usages;
  /**
   * 效果数值
   * @type {number[][]}
   */
  ability_values;
  /**
   * 目标类型
   * @type {number[][]}
   */
  target_types;
  /**
   * 目标数值
   * @type {number[][]}
   */
  target_values;
  /**
   * 人气计算加成属性
   * @type {number[]}
   */
  pop_types;
  /**
   * 人气计算加成值
   * @type {number[]}
   */
  pop_values;
  /**
   * 随机发动
   * @type {number}
   */
  is_random;
  /**
   * PT价格
   * @type {number}
   */
  price;
  /**
   * 适应性类型标签
   * @type {number[]}
   */
  adapt_tags;
  /**
   * 技能效果标签
   * @type {number[]}
   */
  ability_tags;

  /**
   * @param {number} id
   * @param {string} name
   * @param {string} desc
   * @param {number} group_id
   * @param {number} group_level
   * @param {number} category
   * @param {number} grade_value
   * @param {function[]} preconditions
   * @param {function[]} conditions
   * @param {number[]} ability_times
   * @param {number[]} cooldown_times
   * @param {number[]} ability_time_usages
   * @param {number[][]} ability_types
   * @param {number[][]} ability_value_usages
   * @param {number[][]} ability_values
   * @param {number[][]} target_types
   * @param {number[][]} target_values
   * @param {number[]} pop_types
   * @param {number[]} pop_values
   * @param {number} is_random
   * @param {number} price
   * @param {boolean} is_two_phase
   * @param {boolean} is_generated
   * @param {number[]} adapt_tags
   * @param {number[]} ability_tags
   */
  constructor(
    id,
    name,
    desc,
    group_id,
    group_level,
    category,
    grade_value,
    preconditions,
    conditions,
    ability_times,
    cooldown_times,
    ability_time_usages,
    ability_types,
    ability_value_usages,
    ability_values,
    target_types,
    target_values,
    pop_types,
    pop_values,
    is_random,
    price,
    is_two_phase,
    is_generated,
    adapt_tags,
    ability_tags,
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.group_id = group_id;
    this.group_level = group_level;
    this.category = category;
    this.grade_value = grade_value;
    this.preconditions = preconditions;
    this.conditions = conditions;
    this.ability_times = ability_times;
    this.cooldown_times = cooldown_times;
    this.ability_time_usages = ability_time_usages;
    this.ability_types = ability_types;
    this.ability_value_usages = ability_value_usages;
    this.ability_values = ability_values;
    this.target_types = target_types;
    this.target_values = target_values;
    this.pop_types = pop_types;
    this.pop_values = pop_values;
    this.is_random = is_random;
    this.price = price;
    this.is_two_phase = is_two_phase;
    this.is_generated = is_generated;
    this.adapt_tags = adapt_tags;
    this.ability_tags = ability_tags;
  }

  /** @param {PseudoUma} owner */
  // eslint-disable-next-line no-unused-vars
  get_colored_name(owner) {
    const border_color = skill_border_colors[this.category & 0b111],
      name_color = skill_name_colors[this.category >> 3];
    const title_list = [];
    title_list.push(
      this.adapt_tags.map((e) => adapt_tag_names[e]).join('＞＜'),
    );
    title_list.push(
      this.ability_tags.map((e) => ability_tag_names[e]).join('＞＜'),
    );
    return [
      { content: '【', color: border_color },
      {
        color: name_color,
        content: this.name,
        fontWeight: 'bold',
        title: `【${this.name}】（${skill_name_types[this.category >> 3]} · ${
          skill_border_types[this.category & 0b111]
        }）\n${this.desc}\n${title_list
          .map((e) => (e === '' ? e : `＜${e}＞`))
          .filter((e) => e)
          .join('\n')}`,
      },
      { content: '】', color: border_color },
    ];
  }
}

module.exports = UmaSkill;
