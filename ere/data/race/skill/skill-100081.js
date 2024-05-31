const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100081,
  'カッティング×DRIVE！',
  '残り200mを切って前の方にいると\n競り合いに強くなり速度が上がる',
  10008,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.order >= 3 &&
        args.order_rate <= 50 &&
        args.remain_distance <= 200 &&
        args.bashin_diff_infront <= 1) ||
      (args.order >= 3 &&
        args.order_rate <= 50 &&
        args.remain_distance <= 200 &&
        args.bashin_diff_behind <= 1),
    () => false,
  ],
  [5, 0],
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
    [0.35, 0, 0],
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
  0,
  false,
);
