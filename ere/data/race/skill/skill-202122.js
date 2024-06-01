const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202122,
  '不畏之心',
  '比赛后半程处于中间集团的话会略微提高速度，并且加速度也会略微提高＜作战・居中＞',
  20212,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.distance_rate_after_random === 50 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
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
