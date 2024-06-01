const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202582,
  '目不斜视',
  '在比赛中盘少量回复体力，并略微提升速度＜长距离＞',
  20258,
  1,
  1,
  263,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0.05, 0],
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
