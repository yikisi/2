const skill_name_enum = { buff: 0, heal: 0, speed: 0, control: 0, debuff: 0 };
Object.keys(skill_name_enum).forEach((k, i) => (skill_name_enum[k] = i));

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
  accelFull: 0,
};
Object.keys(ability_tag_enum).forEach((k, i) => (ability_tag_enum[k] = i));

module.exports = {
  ability_tag_enum,
  ability_time_usage_enum: {
    normal: 1,
    top_distance: 2,
    stamina: 3,
    order_change: 4,
    blocked_side_continuetime: 5,
    up_slope: 8,
  },
  ability_type_enum: {
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
    Genesis: 42,
    // 全力冲刺加速度加成
    AccelFullSpeed: 48,
    // 育成继承活动使用
    // ChallengeMatchBonusXXX: 50,
    // 可以用性玩具
    HasItem: 90,
    // 性玩具带来 Buff
    HasItemBuff: 91,
    // 高潮时使其他角色获得快感
    ShareOrgasm: 92,
  },
  ability_usage_enum: {
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
    MultiplyLove: 30,
    MultiplyIsland: 31,
    MultiplyHotSpring: 32,
    MultiplyDisMedium: 36,
    MultiplyTeamTotal: 37,
    MultiplyRamen: 40,
    MultiplyCount: 99,
  },
  /**
   * @param {number} name
   * @param {number} border
   * @returns {number}
   */
  get_skill_color(name, border) {
    return border + (name << 3);
  },
  skill_border_enum,
  skill_name_enum,
  target_type_enum: {
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
    // 队友
    Team: 98,
    // 自身之外
    Others: 99,
  },
};
