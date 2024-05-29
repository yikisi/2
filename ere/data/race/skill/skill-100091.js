const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100091,
  'ブリリアント・レッドエース',
  'レース後半に前の方で\n1番になる力を発揮する',
  10009,
  4,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.order === 1 &&
        args.bashin_diff_behind <= 1) ||
      (args.distance_rate >= 50 && args.order === 2 && args.is_overtake === 1),
    () => true,
  ],
  [5, 0],
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
    [2500, 3000, 0],
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
