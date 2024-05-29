const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202651,
  '雲蒸竜変',
  'スピードとパワーが十分に強いと\nスピードとパワーが上がる\n＜マイル/中距離＞',
  20265,
  2,
  0,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.base_speed >= 1000 &&
        args.base_power >= 1000 &&
        args.distance_type === 2) ||
      (args.base_speed >= 1000 &&
        args.base_power >= 1000 &&
        args.distance_type === 3),
    () => true,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 3, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [600000, 600000, 0],
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
  [1, 3],
  [30, 30],
  0,
);
