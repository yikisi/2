const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200712,
  '前途无量',
  '比赛中盘在前方时，略微不容易疲劳＜中距离＞',
  20071,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 && args.phase_random === 1 && args.order <= 3,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
  false,
);
