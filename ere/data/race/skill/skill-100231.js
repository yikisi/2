const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100231,
  '∴win Q.E.D.',
  '在终盘的最终弯道前身处前方时，速度提升。若是比赛中全程保持冷静，胜利的方程式会使速度变为大幅提升',
  10023,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order <= 4 &&
      args.temptation_count === 0,
    (args) => args.phase >= 2 && args.is_finalcorner === 1 && args.order <= 4,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
