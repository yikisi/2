const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100671,
  '永世光辉，照耀那晦暝吧',
  '进入最终直线时，若处于好位置则会怀抱坚强的意志来加快速度，若接近领头马娘的话则会大幅提升速度',
  10067,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight_onetime === 1 &&
      args.order >= 2 &&
      args.order <= 5 &&
      args.distance_diff_top <= 5,
    (args) =>
      args.is_last_straight_onetime === 1 &&
      args.order >= 2 &&
      args.order <= 5 &&
      args.distance_diff_top > 5,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
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
