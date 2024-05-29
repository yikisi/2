const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100471,
  '掲げよ、己が魂の剣を！',
  'レース終盤の残り400m地点で前の方\nだと速度が上がる、さらにGⅠなど\n大舞台で人気が高い場合すごく上がる',
  10047,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.grade === 100 &&
      args.popularity <= 3,
    (args) =>
      args.phase >= 2 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40,
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
    [4500, 0, 0],
    [3500, 0, 0],
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
);
