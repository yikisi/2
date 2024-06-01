const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202792,
  '中盘巧者',
  '比赛中盘速度稍微提升',
  20279,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.phase_random === 1, () => false],
  [1.8, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
