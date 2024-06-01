const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200541,
  '逃脱术',
  '比赛中盘容易获得领先＜作战・领放＞',
  20054,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [3, 0],
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
  1,
  false,
);
