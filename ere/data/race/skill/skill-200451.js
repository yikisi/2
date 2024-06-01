const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200451,
  '注目的舞女',
  '比赛初期容易取得好路线',
  20045,
  2,
  10,
  334,
  [() => true, () => true],
  [(args) => args.phase_random === 0, () => false],
  [3, 0],
  [500, 0],
  [
    [28, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.045, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  false,
);
