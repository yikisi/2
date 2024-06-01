const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200732,
  '誓不罢休',
  '在最终弯道及往后被紧追不舍时，稍微提高速度并略微提高加速度＜中距离＞',
  20073,
  1,
  2,
  217,
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
    [0.15, 0.05, 0],
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
  [20, 0],
  1,
  false,
);
