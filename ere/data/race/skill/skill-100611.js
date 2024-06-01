const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100611,
  'Pride of KING',
  '能够冷静地进行比赛的规划时，就能够在最后200米发挥实力，大幅加速',
  10061,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.temptation_count === 0 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order >= 4 &&
      args.order_rate <= 70,
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
    [0.45, 0, 0],
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
