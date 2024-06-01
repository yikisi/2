const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201092,
  '布局',
  '比赛初期位于后方时，使前方前方马娘的动作略微变得迟钝＜英里＞',
  20109,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_random === 0 &&
      args.order_rate > 50 &&
      args.accumulatetime >= 3,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.1, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [10, 10],
  1,
  false,
);
