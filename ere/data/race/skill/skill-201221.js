const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201221,
  '耐力食取',
  '比赛中盘处于后方的话会略微夺走前方的持久力＜长距离＞',
  20122,
  2,
  11,
  461,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 && args.phase_random === 1 && args.order >= 5,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.01, 0.035, 0],
    [0, 0, 0],
  ],
  [
    [9, 1, 0],
    [0, 0, 0],
  ],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  1,
  false,
);
