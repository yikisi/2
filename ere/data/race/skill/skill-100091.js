const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100091,
  '闪耀的赤色王牌',
  '在比赛后半段前方位置发挥成为第一的力量',
  10009,
  4,
  18,
  340,
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
    [0.25, 0.3, 0],
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
  false,
);
