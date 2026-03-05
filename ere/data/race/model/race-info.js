const { adaptability_colors } = require('#/data/color-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

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

const weather_enum = { sunny: 0, cloudy: 1, rain: 2, snow: 3 };

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
  // 圣安妮塔公园
  santa_anita: 10202,
  // 德尔玛
  del_mar: 10203,
  // 尚蒂伊
  chantilly: 33001,
  // 圣克劳德
  st_cloud: 33002,
  // 红山
  bashang: 86000,
  // 沙田（香港）
  shatin: 85200,
  // 丘吉尔园
  kentucky: 55500,
  // 宾利高
  baltimore: 55501,
  // 贝蒙园
  new_york: 55501,
  // 迈丹
  meydan: 97101,
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
  /** @type {number} */
  corner;
  /**
   * @param {number} start
   * @param {number} end
   * @param {number} index
   * @param {boolean} is_curve
   * @param {boolean} isLast
   */
  constructor(start, end, index, is_curve, isLast) {
    this.start = start;
    this.end = end;
    this.index = index;
    this.is_curve = is_curve;
    this.is_last = isLast;
  }

  get abbr() {
    return (
      this.is_curve
        ? i18n().race.lan_curve_abbr_template
        : i18n().race.lan_lan_abbr_template
    ).replace(
      '%INDEX%',
      this.is_last ? i18n().race.lan_index_final_abbr : this.index.toString(),
    );
  }

  get name() {
    return (
      this.is_curve
        ? i18n().race.lan_curve_template
        : i18n().race.lan_lan_template
    ).replace(
      '%INDEX%',
      this.is_last
        ? i18n().race.lan_index_final
        : i18n().race.lan_index_template.replace(
            '%INDEX%',
            this.index.toString(),
          ),
    );
  }
}

module.exports = class RaceInfo {
  static RaceSlope = RaceSlope;
  static RaceLane = RaceLane;
  static class_enum = class_enum;
  static distance_enum = distance_enum;
  static ground_enum = ground_enum;
  static rotation_enum = rotation_enum;
  static track_enum = track_enum;
  static weather_enum = weather_enum;
  static mess_enum = mess_enum;
  static limit_enum = limit_enum;
  static prize_ratios = [1, 0.5, 0.3, 0.2, 0.1];
  static relation_rewards = [50, 100, 200, 400];

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
   * @type {number}
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
   * 史实冠军
   * @type {number[]}
   */
  legends;
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
  mess;
  // 天气
  weather;
  // 白天或夜晚
  daytime;
  // 是否有传奇对手
  has_legend;
  // 额外属性
  extra_attr = 0;
  loc_mind_diff = {
    // 逃, 大逃
    nige_speed_up_other: [0, 0],
    nige_over_take: [0, 0],
    nige_speed_up_nige: [0, 0],
    // 先、差、追
    other_lower: [0, 0, 0],
    other_upper: [0, 0, 0],
  };

  _name = void 0;

  /** @returns {string} */
  get name() {
    return this._name || i18n().race[this.id];
  }

  /** @param {string} _name */
  set name(_name) {
    this._name = _name;
  }

  /**
   * @param {number} id
   * @param {number} race_class
   * @param {number} track
   * @param {number} ground
   * @param {number} span
   * @param {number} distance
   * @param {number} rotation
   * @param {number} gates
   * @param {number[]} legends
   * @param {number} limit
   * @param {number} date
   * @param {number} daytime
   * @param {number} prize
   * @param {number} param_id
   */
  constructor(
    id,
    race_class,
    track,
    ground,
    span,
    distance,
    rotation,
    gates,
    legends,
    limit,
    date,
    daytime,
    prize,
    param_id,
  ) {
    this.id = id;
    this.race_class = race_class;
    this.track = track;
    this.ground = ground;
    this.span = span;
    this.span400 = Number(!(span % 400));
    this.distance = distance;
    this.rotation = rotation;
    this.gates = gates;
    this.legends = legends;
    this.limit = limit;
    this.date = date;
    this.daytime = daytime;
    this.prize = prize;
    this.param_id = param_id;
  }

  /** @returns {PrintedSpan} */
  get_colored_name() {
    return {
      color: adaptability_colors.at(-2 - this.race_class),
      content: this.name,
      fontWeight: 'bold',
    };
  }

  /** @returns {PrintedSpan} */
  get_colored_name_with_class() {
    const ret = this.get_colored_name();
    ret.content = i18n()
      .race.name_with_class_template.replace('%NAME%', ret.content)
      .replace('%CLASS%', di18n.race.n_class[this.race_class]);
    return ret;
  }
};
