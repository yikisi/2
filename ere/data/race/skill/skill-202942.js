const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202942,
  '恐惧的逼近',
  '比赛中盘若位于后方，则令前方赛马娘的速度极小幅下降，自身的速度稍微提升＜追赶・中距离＞',
  20294,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, -0.035, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
  false,
);
