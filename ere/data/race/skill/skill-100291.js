const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100291,
  '雪夜追光',
  '最后300米处在前方且与最前方的马娘距离很近或是领头时速度提升',
  10029,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_diff_top <= 5 &&
      args.remain_distance <= 300 &&
      args.order_rate <= 40,
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
