const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201082,
  '速度猎手',
  '比赛中盘在前方时，略微夺取后方马娘的速度＜英里＞',
  20108,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 && args.phase_random === 1 && args.order <= 3,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0.15, 0],
    [0, 0, 0],
  ],
  [
    [10, 1, 0],
    [0, 0, 0],
  ],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [30, 0],
  1,
  false,
);
