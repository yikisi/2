const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200682,
  '积极对策',
  '比赛临近中盘时若身处前方，稍微更容易拉开差距＜英里＞',
  20068,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
