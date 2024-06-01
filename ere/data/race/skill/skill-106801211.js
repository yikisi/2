const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106801211,
  '爆风一闪！',
  '身处直线时，速度大幅提升＜长距离＞',
  10680121,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) => args.distance_type === 4 && args.straight_random === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
