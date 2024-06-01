const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200681,
  '英里支配者',
  '比赛临近中盘时若身处前方，更容易拉开差距＜英里＞',
  20068,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 0 &&
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
