const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202261,
  '胜利的时机',
  '比赛接近终盘时，处于前方的话会提升速度＜沙土＞',
  20226,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [2.4, 0],
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
