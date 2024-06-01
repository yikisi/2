const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202331,
  '超群的迈步',
  '力量十分强劲时速度提升。力量有十二分强劲时，速度极大提升＜沙土＞',
  20233,
  2,
  8,
  461,
  [() => true, () => true],
  [
    (args) => args.ground_type === 2 && args.base_power >= 1200,
    (args) =>
      args.ground_type === 2 &&
      args.base_power >= 1000 &&
      args.base_power < 1200,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [80, 0, 0],
    [60, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
