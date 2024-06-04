const skill_name_colors = [
  '#a7fe9e',
  '#98ccfa',
  '#ffe361',
  '#ff9e9d',
  '#ce7cff',
];

const skill_border_colors = ['#c6c5c5', '#eeb93f', '#ffc0cb', '#ee82ee'];

const rarity_enum = {
  // 普通技能
  normal: 1,
  // 金技能
  gold: 2,
  // 低星初始固有
  spe_n_2: 3,
  // 低星升星固有
  spe_n_3: 4,
  // 高星固有
  spe_r: 5,
  // 进化技能
  evol: 6,
};

const ability_type_enum = {
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
  HpDecRate: 7,
  // 视野
  VisibleDistance: 8,
  // 体力恢复
  HpRate: 9,
  // 出闸
  StartDash: 10,
  ForceOvertakeIn: 11,
  ForceOvertakeOut: 12,
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
  PushPer: 30,
  // 加速度
  Accel: 31,
  // 目标道路
  TargetLane: 35,
  // 随机触发技能
  ActivateRandomNormalAndRareSkill: 36,
  ActivateRandomRareSkill: 37,
  // 育成继承活动使用
  ChallengeMatchBonusXXX: 50,
};

const ability_type_usage_enum = {
  // 直接使用
  Direct: 1,
  // 每个技能提升1%，最大20%
  MultiplySkillNum: 2,
  // 队友属性和，受心情影响，1200、1800、2600、3600，每超过一档提升12.5%
  MultiplyTeamTotalSpeed: 3,
  MultiplyTeamTotalStamina: 4,
  MultiplyTeamTotalPower: 5,
  MultiplyTeamTotalGuts: 6,
  MultiplyTeamTotalWiz: 7,
  MultiplyRandom1: 8,
  MultiplyRandom2: 9,
  // 胜场决定倍率：6、14、18、25，分别为0.8、0.9、1.0、1.1、1.2
  MultiplySingleModeWinCount: 10,
  // 终弯超过人数
  MultiplyOvertakeCount: 11,
  // 粉丝数决定倍率：20k、50k、100k、160k，分别为0.8、0.9、1.0、1.1、1.2
  MultiplyFanCount: 12,
  MultiplyMaximumRawStatus: 13,
  // 发动绿技能数量决定倍率：3、5、6，分别+1，最高3
  MultiplyActivateSpecificTagSkillCount: 14,
  MultiplyActivateHealSkillCount: 15,
  MultiplyFinalCornerEndOrder: 16,
  MultiplyInvTeamMemberCount: 17,
  MultiplyBaseWiz: 18,
  // 和头马的距离影响（CB固有中长距离）：CB固有的说法是大于8马身+0.1m/s,可以先作为参考
  AddDistanceDiffTop: 19,
  // 中盘竞争时间计算倍率，2、4、6倍率分别+1，最高4
  MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1: 20,
  MultiplyBlockedSideMaxContinueTimePhaseMiddleRun2: 21,
  // 根据速度决定倍率
  MultiplyBaseSpeed: 22,
  Unknown: 25,
};

const target_type_enum = {
  // 自身
  Self: 1,
  All: 2,
  AllOtherSelf: 3,
  // 视野范围内
  Visible: 4,
  RandomOtherSelf: 5,
  Order: 6,
  // 头马开始目标数（小于）
  OrderInfront: 7,
  OrderBehind: 8,
  // 前方所有
  SelfInfront: 9,
  // 后方所有
  SelfBehind: 10,
  TeamMember: 11,
  Near: 12,
  SelfAndBlockFront: 13,
  BlockSide: 14,
  NearInfront: 15,
  NearBehind: 16,
  RunningStyle: 17,
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

class UmaSkill {
  static rarity_enum = rarity_enum;
  static ability_type_enum = ability_type_enum;
  static ability_type_usage_enum = ability_type_usage_enum;
  static target_type_enum = target_type_enum;

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
   * @param {number} id
   * @param {string} name
   * @param {string} desc
   * @param {number} group_id
   * @param {number} rarity
   * @param {number} category
   * @param {number} grade_value
   * @param {function[]} preconditions
   * @param {function[]} conditions
   * @param {number[]} ability_times
   * @param {number[]} cooldown_times
   * @param {number[][]} ability_types
   * @param {number[][]} ability_value_usages
   * @param {number[][]} ability_values
   * @param {number[][]} target_types
   * @param {number[][]} target_values
   * @param {number[]} pop_types
   * @param {number[]} pop_values
   * @param {number} is_random
   * @param {boolean} is_two_phase
   */
  constructor(
    id,
    name,
    desc,
    group_id,
    rarity,
    category,
    grade_value,
    preconditions,
    conditions,
    ability_times,
    cooldown_times,
    ability_types,
    ability_value_usages,
    ability_values,
    target_types,
    target_values,
    pop_types,
    pop_values,
    is_random,
    is_two_phase,
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.group_id = group_id;
    this.category = category;
    this.rarity = rarity;
    this.grade_value = grade_value;
    this.preconditions = preconditions;
    this.conditions = conditions;
    this.ability_times = ability_times;
    this.cooldown_times = cooldown_times;
    this.ability_types = ability_types;
    this.ability_value_usages = ability_value_usages;
    this.ability_values = ability_values;
    this.target_types = target_types;
    this.target_values = target_values;
    this.pop_types = pop_types;
    this.pop_values = pop_values;
    this.is_random = is_random;
    this.is_two_phase = is_two_phase;
  }

  get_colored_name() {
    const name_color = skill_name_colors[this.category & 0b111],
      border_color = skill_border_colors[this.category >> 3];
    return [
      { content: '【', color: border_color },
      {
        color: name_color,
        content: this.name,
        display: 'inline-block',
        fontWeight: 'bold',
        title: `[${this.name}] ${this.desc}`,
      },
      { content: '】', color: border_color },
    ];
  }
}

module.exports = UmaSkill;
