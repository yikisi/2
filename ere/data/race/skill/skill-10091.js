const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10091,
  'レッドエース',
  'レース後半に前の方で\n1番になる力をわずかに発揮する',
  1009,
  3,
  240,
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
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 2000, 0],
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
  [15, 15],
  0,
);
