const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201232,
  '障眼法',
  '在比赛终盘，使前方马娘的视野稍微变得狭窄＜长距离＞',
  20123,
  1,
  3,
  129,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-5, 0, 0],
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
  [15, 15],
  1,
  false,
);
