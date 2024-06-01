const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10521,
  '满怀期待地起跑吧',
  '在最终弯道处于靠后位置时，会看着附近的赛马娘并恢复持久力',
  1052,
  3,
  17,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate > 50 &&
      args.near_count >= 1,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [30, 0],
  0,
  false,
);
