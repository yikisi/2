const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200452,
  '距离感',
  '比赛初期略微容易取得好路线',
  20045,
  1,
  2,
  129,
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
    [0.035, 0, 0],
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
  [25, 0],
  1,
  false,
);
