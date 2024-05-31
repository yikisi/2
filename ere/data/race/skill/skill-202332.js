const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202332,
  '踏み込み上手',
  'パワーが十分に強いとスピードがわずか\nに上がる、パワーが十二分に仕上がって\nいる場合は少し上がる＜ダート＞',
  20233,
  1,
  0,
  174,
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
    [40, 0, 0],
    [20, 0, 0],
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
  [20, 0],
  0,
  false,
);
