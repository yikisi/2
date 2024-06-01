const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202682,
  '暖场',
  '在比赛中盘稍微提升速度，并略微回复体力＜长距离＞',
  20268,
  1,
  2,
  263,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.005, 0],
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
  [1, 2],
  [10, 10],
  1,
  false,
);
