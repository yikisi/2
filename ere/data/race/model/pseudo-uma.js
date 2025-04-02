const ConditionParams = require('#/data/race/model/condition-params');
const { attr_names } = require('#/data/train-const');

class RaceSkill {
  /** @type {UmaSkill} */
  data;
  // 发动时间
  ability_time = [0, 0];
  // 冷却
  cooldown = [0, 0];
  // 触发次数
  count = [0, 0];
  // 前置条件
  precondition = [false, false];
  /**
   * 目标
   * @type {PseudoUma[][][]}
   */
  aims = [[], []];
  /**
   * 技能数值
   * @type {[][]}
   */
  values = [[], []];

  /** @param {UmaSkill} skill */
  constructor(skill) {
    this.data = skill;
  }
}

class PseudoUma {
  static RaceSkill = RaceSkill;

  // 需要通过constructor提供的值
  /**
   * 角色编号
   * @type {number}
   */
  index_chara;
  /**
   * 干劲
   * @type {number}
   */
  motivation;
  /**
   * 气性
   * @type {number|undefined}
   */
  chara = undefined;
  /**
   * 五属性，用attrEnum作为下标取
   * @type {number[]}
   */
  attrs;
  /**
   * 本次使用的跑法
   * @type {number}
   */
  style;
  /**
   * 跑法适性表 决定赛中智力
   * @type {number[]}
   */
  adapt_style_list;
  /**
   * 赛程适性表 决定速度和加速度等
   * @type {number[]}
   */
  adapt_distance_list;
  /**
   * 地面适性表 决定加速度
   * @type {number[]}
   */
  adapt_ground_list;
  /**
   * 技能数组
   * @type {RaceSkill[]}
   */
  list_skill;

  /**
   * 五围加成
   * @type {string[][]}
   */
  attr_buffs;
  /**
   * 场地加成
   * @type {string[]}
   */
  ground_buffs;
  /**
   * 距离加成
   * @type {string[]}
   */
  dis_buffs;

  // 不需要通过constructor提供的值 在别的地方计算
  /**
   * 赛道号
   * @type {number}
   */
  index_race;
  // 本场生效的适性
  adapts = {
    style: undefined,
    distance: undefined,
    ground: undefined,
  };
  /**
   * 人气
   * @type {number[]}
   */
  pop;
  /**
   * 计算用的人气值
   * @type {number[]}
   */
  tempPop;
  // 各个需重复使用的计算基底
  base = {
    acceleration: 0,
    // 五项属性方差
    attr_err: 0,
    change_order_finalcorner: 0,
    // 训练员声望
    fame: 0,
    // 发动绿技能个数
    greenCount: 0,
    // 比赛地语言等级
    language: 0,
    loc_mind_other_diff_random: [0, 0],
    loc_mind_style: 0,
    skill_count: 0,
    stamina: 0,
    temptationSpan: 0,
    total_attrs: new Array(5).fill(0),
    velocityIdeal: 0,
    velocityMaxRush: 0,
    velocityMin: 0,
    // 体重
    weight: 4000,
    // 训练等级和
    research_lv: 0,
    // 胜场数
    winCount: 0,
  };
  // 比赛时信息
  race = {
    acceleration: 0,
    accelerationBuff: 0,
    competeFightAim: undefined,
    competeFightTimer: 0,
    conditionParams: new ConditionParams(),
    // 下坡计时
    downhill: 0,
    greenSkills: 0,
    // 变道加成 - 提高或降低突围概率
    lane_move_buff: 0,
    loc_mind: 0,
    location: 0,
    locationPlanRush: undefined,
    middleBlockedContinueTime: 0,
    order_change: 0,
    overtakeAim: undefined,
    slope: 0,
    stamina: 0,
    staminaCost: 0,
    // 用于阻挡计算的实时力量
    strength: 0,
    // 焦躁计时
    temptation: 0,
    totalTime: '',
    velocityIdeal: 0,
    velocityIdealBuff: 0,
    velocityPlanRush: 0,
    velocityReal: 0,
    visible_dis: 20,
  };
  // 随机发动的技能的位置指标
  random = {
    all_corner: [],
    all_corner_index: 0,
    corner: [],
    corner_index: 0,
    distance_rate_after: 50000,
    down_slope: 50000,
    is_finalcorner: 50000,
    last_straight: 50000,
    phase: [],
    phase_corner: [],
    phase_firsthalf: [],
    phase_firstquarter: [],
    phase_laterhalf: [],
    straight: 50000,
    up_slope: 50000,
  };
  // 实时排名和上一tick排名
  rank = {
    curr: 0,
    last: 0,
  };
  // 各种状态
  flag = {
    // 允许计算冲刺计划
    allowPlan: true,
    // 下坡
    downhill: false,
    // 被选为超车目标
    to_be_overtaken: false,
  };
  // 各种概率
  probs = {
    loc_mind: 0,
    planRush: 0,
    skill: 0,
  };
  // 阶段决定的系数
  factorPhase = {
    // 每赛段跑法加速度系数
    aStyle: [1, 1, 1],
    // 每赛段随机浮动
    vRand: [1, 1, 1],
    // 每赛段跑法速度系数
    vStyle: [1, 1, 1],
  };
  // 终盘时的系数
  factorFinal = {
    // 追比加速度增加
    accCompeteFightBuff: 0,
    // 耐力消耗系数
    sCostMult: 0,
    // 追比目标速度增加
    vCompeteFightBuff: 0,
    // 速度增加
    vIdealAdd: 0,
  };
  // 坡道时的系数
  factorSlope = {
    // 上坡时受到衰减的幅度
    up: 0,
    // 下坡时进入状态的概率
    down: 0,
  };
  /**
   * 传奇对手标记
   * @type {boolean|2}
   */
  legend = false;

  /** 半身像 */
  image = '';

  score_rank = 'G';

  /**
   * @param {number} index_chara 角色编号
   * @param {string} name 名字
   * @param {string} color 颜色
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
    color,
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
    this.color = color;
    this.motivation = motivation;
    this.attrs = attrs;
    this.style = style;
    this.adapt_style_list = adapt_style_list;
    this.adapt_distance_list = adapt_distance_list;
    this.adapt_ground_list = adapt_ground_list;
    this.list_skill = skills.map((item) => new RaceSkill(item));
    this.attr_buffs = attr_names.map(() => []);
    this.ground_buffs = [];
    this.dis_buffs = [];
    this.pop = new Array(4);
  }

  /**
   * @param {number} [_legend]
   * @returns {PseudoUma}
   */
  set_legend(_legend) {
    this.legend = _legend || true;
    return this;
  }

  set_image(image) {
    this.image = image;
    return this;
  }

  get_colored_name() {
    return { color: this.color, content: this.name, fontWeight: 'bold' };
  }
}

module.exports = PseudoUma;
