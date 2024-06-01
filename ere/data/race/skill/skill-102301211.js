const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102301211,
  '照计划稍事休憩',
  '比赛中盘，大幅回复持久力＜长距离＞',
  10230121,
  6,
  25,
  633,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.075, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
