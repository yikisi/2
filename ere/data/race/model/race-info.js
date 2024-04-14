const { adaptability_colors } = require('#/data/color-const');

const class_enum = { G1: 0, G2: 1, G3: 2, OP: 3, 'Pre-OP': 4, Spe: 5 };
Object.keys(class_enum).forEach((e, i) => (class_enum[e] = i));

const distance_enum = { short: 0, mile: 1, medium: 2, long: 3 };

//泥地既可以叫mud也可以叫dirt 避免后来者不清楚叫法而没找到
const ground_enum = { grass: 0, mud: 1, dirt: 1 };

//同理，顺时针=右回 逆时针=左回
const rotation_enum = {
  clock: 1,
  counter: -1,
  left: -1,
  right: 1,
  straight: 0,
};
const rotation_names = {};
rotation_names[rotation_enum.left] = '左';
rotation_names[rotation_enum.right] = '右';
rotation_names[rotation_enum.straight] = '直';

//年龄限制：两岁/三岁/三岁以上/四岁以上
const limit_enum = {
  // 001
  exact2: 0b001,
  // 010
  exact3: 0b010,
  // 110
  post3: 0b110,
  // 100
  post4: 0b100,
};

const mess_enum = { well: 0, semi: 1, heavy: 2, bad: 3 };

const track_enum = {
  //札幌
  sapporo: 10001,
  //函館
  hakodate: 10002,
  //新潟
  niigata: 10003,
  //福島
  fukushima: 10004,
  //中山
  nakayama: 10005,
  //東京
  tokyo: 10006,
  //中京
  chukyo: 10007,
  //京都
  kyoto: 10008,
  //阪神
  hanshin: 10009,
  //小倉
  kokura: 10010,
  //大井
  ohi: 10101,
  //川崎
  kawasaki: 10103,
  //船橋
  funabashi: 10104,
  //盛岡
  morioka: 10105,
  // 隆尚
  longchamp: 10201,
  // 尚蒂伊
  chantilly: 33001,
  // 圣克劳德
  st_cloud: 33002,
  // 红山军
  bashang: 86000,
  // 沙田（香港）
  shatin: 85200,
};
Object.keys(track_enum).forEach((e, i) => (track_enum[e] = i));

const track_names = {};
track_names[track_enum.sapporo] = '札幌';
track_names[track_enum.hakodate] = '函馆';
track_names[track_enum.niigata] = '新泻';
track_names[track_enum.fukushima] = '福岛';
track_names[track_enum.nakayama] = '中山';
track_names[track_enum.tokyo] = '东京';
track_names[track_enum.chukyo] = '中京';
track_names[track_enum.kyoto] = '京都';
track_names[track_enum.hanshin] = '阪神';
track_names[track_enum.kokura] = '小仓';
track_names[track_enum.ohi] = '大井';
track_names[track_enum.kawasaki] = '川崎';
track_names[track_enum.funabashi] = '船桥';
track_names[track_enum.morioka] = '盛冈';
track_names[track_enum.longchamp] = '隆尚';
track_names[track_enum.st_cloud] = '圣克劳德';
track_names[track_enum.chantilly] = '尚蒂伊';
track_names[track_enum.bashang] = '从化';
track_names[track_enum.shatin] = '沙田';

/**
 * G1比赛赏金 现实对游戏赏金折算 1w日元:1马币
 * 其他比赛 折算 1w:2马币
 * 这样折算的话 顶流G2的价值已经几乎约等于便宜G1了
 * 可以考虑扣成1.75左右？
 */
const prize_ratio = {
  G1: 0.75,
  others: 1.25,
};

class RaceSlope {
  /**
   * @param {number} start
   * @param {number} end
   * @param {number} slope
   */
  constructor(start, end, slope) {
    this.start = start;
    this.end = end;
    this.slope = slope;
  }
}

class RaceLane {
  /**
   * @param {number} start
   * @param {number} end
   * @param {boolean} isCurve
   * @param {boolean} isLast
   */
  constructor(start, end, isCurve, isLast) {
    this.start = start;
    this.end = end;
    this.is_curve = isCurve;
    this.is_last = isLast;
  }
}

module.exports = class RaceInfo {
  static RaceSlope = RaceSlope;
  static RaceLane = RaceLane;
  static class_enum = class_enum;
  static distance_enum = distance_enum;
  static ground_enum = ground_enum;
  static rotation_enum = rotation_enum;
  static rotation_names = rotation_names;
  static track_enum = track_enum;
  static track_names = track_names;
  static mess_enum = mess_enum;
  static limit_enum = limit_enum;
  static prize_ratios = [1, 0.5, 0.3, 0.2, 0.1];
  static relation_rewards = [50, 100, 200, 400];

  /**
   * 英文比赛名
   * @type {string}
   */
  name_en;
  /**
   * 中文比赛名
   * @type {string}
   */
  name_zh;
  /**
   * 赛事等级
   * @type {number}
   */
  race_class;
  /**
   * 赛马场
   * @type {number}
   */
  track;
  /**
   * 场地 草or泥
   * @type {number}
   */
  ground;
  /**
   * 距离
   * @type {number}
   */
  span;
  /**
   * 距离是否是400的倍数
   * @type {boolean}
   */
  span400;
  /**
   * 距离类型：短英中长
   * @type {number}
   */
  distance;
  /**
   * 顺时针or逆时针
   * @type {number}
   */
  rotation;
  /**
   * 人数限制
   * @type {number}
   */
  gates;
  /**
   * 传奇人数
   * @type {number}
   */
  legend_count;
  /**
   * 育成时间限制（年）
   * @type {number}
   */
  limit;
  /**
   * 举办周数
   * @type {number}
   */
  date;
  /**
   * 一着赏金
   * @type {number}
   */
  prize;
  /** @type {number} */
  param_id;
  /** @type {number[]} */
  attr_bonus;
  /**
   * 直线曲线
   * @type {RaceLane[]}
   */
  lanes;
  /**
   * 坡道
   * @type {RaceSlope[]}
   */
  slopes;
  /**
   * 前中后段
   * @type {number[]}
   */
  phases;
  // 场地状态
  mess = mess_enum.well;

  /**
   * @param {string} name_en
   * @param {string} name_zh
   * @param {number} race_class
   * @param {number} track
   * @param {number} ground
   * @param {number} span
   * @param {number} distance
   * @param {number} rotation
   * @param {number} gates
   * @param {number} legend_count
   * @param {number} limit
   * @param {number} date
   * @param {number} prize
   * @param {number} param_id
   */
  constructor(
    name_en,
    name_zh,
    race_class,
    track,
    ground,
    span,
    distance,
    rotation,
    gates,
    legend_count,
    limit,
    date,
    prize,
    param_id,
  ) {
    this.name_en = name_en;
    this.name_zh = name_zh;
    this.race_class = race_class;
    this.track = track;
    this.ground = ground;
    this.span = span;
    this.span400 = !(span % 400);
    this.distance = distance;
    this.rotation = rotation;
    this.gates = gates;
    this.legend_count = legend_count;
    this.limit = limit;
    this.date = date;
    this.prize =
      prize *
      (this.race_class === class_enum.G1 ? prize_ratio.G1 : prize_ratio.others);
    this.param_id = param_id;
  }

  get_colored_name() {
    return {
      color: adaptability_colors.at(-2 - this.race_class),
      content: this.name_zh,
      fontWeight: 'bold',
    };
  }

  get_colored_name_with_class() {
    const ret = this.get_colored_name();
    ret.content += ` (${Object.keys(class_enum)[this.race_class]})`;
    return ret;
  }
};
