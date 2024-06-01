const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202131,
  '狂乱旋风',
  '比赛中盘位于前方时，稍微降低后方马娘的速度，自身速度提升＜中距离＞',
  20213,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 && args.phase_random === 1 && args.order <= 3,
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
    [0.35, -0.15, 0],
    [0, 0, 0],
  ],
  [
    [1, 10, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
  false,
);
