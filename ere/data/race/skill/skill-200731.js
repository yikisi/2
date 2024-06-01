const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200731,
  '对胜利的执念',
  '在最终弯道及往后被紧追不舍时，提高速度并略微提高加速度＜中距离＞',
  20073,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_finalcorner === 1 &&
      args.overtake_target_time >= 2,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
  false,
);
