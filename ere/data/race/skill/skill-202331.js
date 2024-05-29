const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202331,
  '抜群の踏み込み',
  'パワーが十分に強いとスピードが上がる\nパワーが十二分に仕上がっている場合は\nすごく上がる＜ダート＞',
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
);
