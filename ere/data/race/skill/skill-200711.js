const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200711,
  '开辟者',
  '比赛中盘在前方时，不容易疲劳＜中距离＞',
  20071,
  2,
  9,
  508,
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
    [0.055, 0, 0],
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
  [60, 0],
  1,
  false,
);
