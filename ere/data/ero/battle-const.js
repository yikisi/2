const { part_enum } = require('#/data/ero/part-const');

const expansion_coefficient = {};
expansion_coefficient[part_enum.virgin] = 0.1;
expansion_coefficient[part_enum.anal] = 0.2;

const lubrication_coefficient = {};
lubrication_coefficient[part_enum.virgin] = 0.6;
lubrication_coefficient[part_enum.anal] = 0.8;
lubrication_coefficient[part_enum.breast] = 0.6;

module.exports = {
  // 行为消耗基础值
  action_cost: {
    body: {
      /** 肉体行为的体力消耗 */
      stamina: 10,
      /** 肉体行为的精力消耗 */
      time: 10,
    },
    spirit: {
      /** 性虐行为的体力消耗 */
      stamina: 0,
      /** 性虐的精力消耗 */
      time: 30,
    },
  },
  /** 攻击者从防御者获得额外部位宝珠的比例<br>1减去该值是从防御者部位高潮获得的额外部位宝珠比例 */
  attack_juel_reward: 0.8,
  /** 快感提升基础值 */
  base_damage: {
    /** 一般攻击的基础值 */
    base: 100,
    // 道具攻击的基础值
    item: 100,
    // 停留道具的基础值
    item_stay: 50,
    /** 一般攻击自身快感提升的基础值 */
    self: 100,
    // 道具停留攻击的自身快感基础值
    self_stay: 30,
    /** SM攻击的基础值 */
    sm: 50,
  },
  /** 对应部位扩张程度对快感提升的影响系数，膣肛 */
  expansion_coefficient,
  /** 身高对应的肛门容纳阴茎尺寸<br>下标0对应130cm，1对应140cm，以此类推<br>0=无 1=极短 2=短小 3=标准 4=傲人 5=马 */
  height2anal_size: [0, 0, 0, 1, 1, 2, 2, 2, 3, 3],
  /** 身高对应的阴道容纳阴茎尺寸<br>下标0对应130cm，1对应140cm，以此类推<br>0=无 1=极短 2=短小 3=标准 4=傲人 5=马 */
  height2virgin_size: [1, 2, 2, 3, 3, 4, 4, 4, 5, 5],
  /** 对应部位润滑对快感提升的影响系数，胸膣肛 */
  lubrication_coefficient,
  talent2acceptable: {
    '-4': 5,
    0: 0,
    1: -5,
    2: 10,
  },
  /** 未润滑时受撕裂伤的几率 */
  wound_percentage: 0.5,
};
