const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10321,
  'introduction：My body',
  'レース後半のコーナーで好位置に\n控えていると持久力を少し回復し\nさらに少しの間速度をわずかに上げる',
  1032,
  3,
  5,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.order_rate <= 40,
    () => true,
  ],
  [4, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [350, 1500, 0],
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
  [2, 0],
  [30, 0],
  0,
);
