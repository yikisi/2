class RaceSkill {
  /**
   * @param {UmaSkill} skill
   */
  constructor(skill) {
    this.skilldata = skill;
    // 发动标记
    this.triggerFlag = false;
    // 本次触发计时器
    this.triggerTimeCount = 0;
    // 单次触发持续时间
    this.triggerTimeMax = 0;
    // 触发次数
    this.triggerCount = 0;
    //最大触发次数
    this.triggerMax = 0;
  }
}

class PseudoUma {
  // 需要通过construcor提供的值
  // 角色编号
  index_chara;
  // 干劲
  motivation;
  // 五属性，用attrEnum作为下标取
  attrs;
  // 本次使用的跑法
  style;
  // 跑法适性表 决定赛中智力
  adapt_style_list;
  // 赛程适性表 决定速度和加速度等
  adapt_distance_list;
  // 地面适性表 决定加速度
  adapt_ground_list;
  // 技能数组
  list_skill;

  // 不需要通过constructor提供的值 在别的地方计算
  // 赛道号
  index_race = -1;
  // 本场生效的适性
  adapts = {
    style: undefined,
    distance: undefined,
    ground: undefined,
  };
  // 各个需重复使用的计算基底
  base = {
    velocityIdeal: 0,
    velocityMaxRush: 0,
    velocityMin: 0,
    acceleration: 0,
    stamina: 0,
  };
  // 比赛时信息
  race = {
    phase: 0,
    location: 0,
    velocityIdeal: 0,
    velocityReal: 0,
    velocityPlanRush: 0,
    locationPlanRush: 0,
    acceleration: 0,
    stamina: 0,
    staminaCost: 0,
  };
  // 实时排名和上一tick排名
  rank = {
    curr: 0,
    last: 0,
  };
  // 与前后的距离
  diff = {
    ahead: 0,
    behind: 0,
  };
  // 各种状态
  flag = {
    // 超车
    overtake: false,
    // 完赛
    finished: false,
    // 下坡
    downhill: false,
    // 允许计算冲刺计划
    allowPlan: false,
    // 最终冲刺
    finalRush: false,
  };
  // 各种概率
  probs = {
    skill: 0,
    planRush: 0,
  };
  // 阶段决定的系数
  factorPhase = {
    // 每赛段随机浮动
    vRand: [1, 1, 1],
    // 每赛段跑法速度系数
    vStyle: [1, 1, 1],
    // 每赛段跑法加速度系数
    aStyle: [1, 1, 1],
  };
  // 终盘时的系数
  factorFinal = {
    // 速度增加
    vIdealAdd: 0,
    // 耐力消耗系数
    sCostMult: 0,
  };
  // 坡道时的系数
  factorSlope = {
    // 上坡时受到衰减的幅度
    up: 0,
    // 下坡时进入状态的概率
    down: 0,
  };

  /**
   * @param {number} index_chara 角色编号
   * @param {string} name 名字
   * @param {number} motivation 干劲
   * @param {number[]} attrs 五维
   * @param {number} style 本次使用的跑法
   * @param {number[]} adapt_style_list 跑法适性数组
   * @param {number[]} adapt_distance_list 距离适性数组
   * @param {number[]} adapt_ground_list 场地适性数组
   * @param {UmaSkill[]} skills 技能数组
   */
  constructor(
    index_chara,
    name,
    motivation,
    attrs,
    style,
    adapt_style_list,
    adapt_distance_list,
    adapt_ground_list,
    skills,
  ) {
    this.index_chara = index_chara;
    this.name = name;
    this.motivation = motivation;
    this.attrs = attrs;
    this.style = style;
    this.adapt_style_list = adapt_style_list;
    this.adapt_distance_list = adapt_distance_list;
    this.adapt_ground_list = adapt_ground_list;
    this.list_skill = skills.map((item) => new RaceSkill(item));
  }
}

module.exports = PseudoUma;
module.exports.RaceSkill = RaceSkill;
