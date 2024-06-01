const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10091,
  '赤色王牌',
  '在比赛后半段前方位置稍微发挥成为第一的力量',
  1009,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.order === 1 &&
        args.bashin_diff_behind <= 1) ||
      (args.distance_rate >= 50 && args.order === 2 && args.is_overtake === 1),
    () => false,
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
    [0.15, 0.2, 0],
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
  false,
);
