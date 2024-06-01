const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100471,
  '此身为剑所天成，拔剑！',
  '比赛终盘阶段剩余400m处位于前方时速度提升，且在GⅠ比赛等大舞台上取得高人气时，速度极大提升',
  10047,
  5,
  18,
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
