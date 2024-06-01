const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202721,
  '绝不放弃',
  '在比赛中盘的弯道，一段时间内少量提升速度',
  20272,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.phase_corner_random === 1, () => false],
  [4, 0],
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
    [0.25, 0, 0],
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
