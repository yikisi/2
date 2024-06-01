const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201021,
  '逃亡禁令',
  '比赛序盘处于后方的话，使前方的赛马娘焦躁和动作迟缓＜短距离＞',
  20102,
  2,
  11,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate > 50 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [9, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.03, -0.2, 0],
    [0, 0, 0],
  ],
  [
    [9, 9, 0],
    [0, 0, 0],
  ],
  [
    [18, 18, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [30, 30],
  1,
  false,
);
